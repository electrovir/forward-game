import {RequiredBy} from '@augment-vir/common';
import {readDirRecursive} from '@augment-vir/node-js';
import {dirname, join} from 'path';
import {baseViteConfig} from 'virmator/dist/compiled-base-configs/base-vite';
import {UserConfig} from 'vite';

const frontendPackageDir = dirname(__dirname);
const srcDir = join(frontendPackageDir, 'src');
const outDir = join(frontendPackageDir, 'dist');

async function defineViteConfig(): Promise<UserConfig> {
    const allIndexHtmlFiles = (await readDirRecursive(srcDir))
        .filter((filePath) => filePath.endsWith('index.html'))
        .map((relativeFilePath) => join(srcDir, relativeFilePath));

    console.log({allIndexHtmlFiles});

    return {
        ...baseViteConfig,
        base: process.env.CI ? '/forward-game' : '',
        root: srcDir,
        plugins: [
            ...(baseViteConfig as RequiredBy<UserConfig, 'plugins'>).plugins,
        ],
        build: {
            /** To account for node_modules chunks that we probably can't easily shrink. */
            chunkSizeWarningLimit: 600,
            outDir,
            rollupOptions: {
                input: allIndexHtmlFiles,
            },
        },
    };
}

export default defineViteConfig();
