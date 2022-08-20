import {UserConfig} from 'vite';
import baseConfig from './vite-base';

const viteConfig: UserConfig = {
    ...baseConfig,
    base: process.env.GITHUB_ACTIONS ? '/forward-game/' : '',
};

export default viteConfig;
