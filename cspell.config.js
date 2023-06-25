const {baseConfig} = require('virmator/base-configs/base-cspell.js');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        '*.drawio',
    ],
    words: [
        ...baseConfig.words,
        'drawio',
        'skyblue',
    ],
};
