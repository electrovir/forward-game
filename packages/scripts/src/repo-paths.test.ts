import {assert} from 'chai';
import {existsSync} from 'fs';
import {repoPaths} from './repo-paths';

describe('repoPaths', () => {
    const pathsToCheck: ReadonlyArray<string> = [
        repoPaths.packages.frontend.frontendDir,
        repoPaths.packages.frontend.srcDir,
        repoPaths.packagesDir,
        repoPaths.repoRootDir,
    ];

    it('has only existing paths', () => {
        pathsToCheck.forEach((pathToCheck) => {
            assert.isTrue(existsSync(pathToCheck));
        });
    });
});
