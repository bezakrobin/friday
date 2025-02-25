#!/bin/bash

# Set up cron job to run update_script.sh every 5 minutes
echo "*/5 * * * * /bin/bash /update_script.sh" > /etc/crontabs/root

# Start cron in the foreground
crond -f