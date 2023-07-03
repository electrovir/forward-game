import {join, resolve} from 'path';

const repoRootDir = resolve(__dirname, '..', '..', '..');
const packagesDir = join(repoRootDir, 'packages');
const frontendDir = join(packagesDir, 'frontend');
const frontendSrcDir = join(frontendDir, 'src');

export const repoPaths = {
    repoRootDir,
    packagesDir,
    packages: {
        frontend: {
            frontendDir,
            srcDir: frontendSrcDir,
        },
    },
};
