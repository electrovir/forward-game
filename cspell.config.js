const {baseConfig} = require('virmator/base-configs/base-cspell.js');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        '*.drawio',
        '**/configs/config-output-*',
    ],
    words: [
        ...baseConfig.words,
        'drawio',
        'skyblue',
    ],
};
