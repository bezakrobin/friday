const { exec } = require('child_process');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const SHA_FILE = path.join(__dirname, 'lastCommitSha.txt');
const REPO_URL = 'https://api.github.com/repos/bezakrobin/friday/commits/deploy';
const CHECK_INTERVAL = 5 * 60 * 1000; // 5 minutes

let lastCommitSha = '';

async function loadLastCommitSha() {
    try {
        if (fs.existsSync(SHA_FILE)) {
            // Read the last commit sha from the file if it exists
            lastCommitSha = fs.readFileSync(SHA_FILE, 'utf-8');
        }
    } catch (error) {
        console.error('Error reading the last commit SHA file:', error);
    }
}

async function saveLastCommitSha(commitSha) {
    try {
        // Save the current commit sha to the file
        fs.writeFileSync(SHA_FILE, commitSha, 'utf-8');
    } catch (error) {
        console.error('Error saving the last commit SHA to file:', error);
    }
}

async function cleanupDocker() {
    try {
        console.log('Cleaning up unused Docker resources...');
        return new Promise((resolve, reject) => {
            // Remove unused Docker images, containers, networks, and volumes
            exec('docker system prune -f && docker volume prune -f', { cwd: path.join(__dirname, '..') }, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error cleaning up Docker: ${stderr}`);
                    reject(stderr);
                } else {
                    console.log(`Docker cleanup successful: ${stdout}`);
                    resolve(stdout);
                }
            });
        });
    } catch (error) {
        console.error('Error during Docker cleanup:', error);
    }
}

async function checkForUpdates() {
    try {
        const response = await fetch(REPO_URL);
        const data = await response.json();
        const { sha } = data;

        const currentCommitSha = sha;

        // Check if the latest commit is different from the stored one
        if (currentCommitSha !== lastCommitSha) {
            console.log('New update available! Pulling latest changes and updating containers...');

            // Update the last commit sha
            lastCommitSha = currentCommitSha;

            // Save the new commit sha to file
            await saveLastCommitSha(lastCommitSha);

            // Pull latest changes from the 'deploy' branch and update Docker containers
            return new Promise((resolve, reject) => {
                exec('git pull origin deploy && docker-compose down && docker-compose up --build -d', { cwd: path.join(__dirname, '..') }, async (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error updating: ${stderr}`);
                        reject(stderr);
                    } else {
                        console.log(`Update successful: ${stdout}`);

                        // Clean up Docker resources after updating
                        await cleanupDocker();
                        resolve(stdout);
                    }
                });
            });
        }
    } catch (error) {
        console.error('Error checking for updates:', error);
    }
}

// Initialize lastCommitSha by loading from the file
loadLastCommitSha().then(async () => {
    // Run the check initially, then every x minutes
    await checkForUpdates();
    setInterval(async () => {
        await checkForUpdates(); // Await the periodic check
    }, CHECK_INTERVAL);
})