const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
    ...config.resolver.extraNodeModules,
    'react-router-dom': require.resolve('react-router-dom'),
};

module.exports = config;
