import {dirname, join} from 'path';
import {baseViteConfig} from 'virmator/dist/compiled-base-configs/base-vite';
import {UserConfig} from 'vite';

const frontendPackageDir = dirname(__dirname);
const srcDir = join(frontendPackageDir, 'src');
const staticDir = join(frontendPackageDir, 'static');
const outDir = join(frontendPackageDir, 'dist');

function defineViteConfig(): UserConfig {
    return {
        ...baseViteConfig,
        base: process.env.CI ? '/forward-game' : '',
        publicDir: staticDir,
        root: srcDir,
        build: {
            /** To account for node_modules chunks that we probably can't easily shrink. */
            chunkSizeWarningLimit: 600,
            outDir,
            emptyOutDir: true,
        },
    };
}

export default defineViteConfig();
