import {dirname, join} from 'path';
import {baseViteConfig} from 'virmator/dist/compiled-base-configs/base-vite';
import {defineConfig} from 'vite';

const packagesDir = dirname(__dirname);

export default defineConfig({
    ...baseViteConfig,
    base: '/forward-game',
    build: {
        /** To account for node_modules chunks that we probably can't easily shrink. */
        chunkSizeWarningLimit: 600,
        rollupOptions: {
            input: {
                main: join(packagesDir, 'index.html'),
                v1: join(packagesDir, 'v1', 'index.html'),
            },
        },
    },
});
