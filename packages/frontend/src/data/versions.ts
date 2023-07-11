import {ArrayElement} from '@augment-vir/common';

const gameVersions = [
    'v1',
    'v2',
] as const;

export type GameVersionName = ArrayElement<typeof gameVersions>;

export const gameVersionNames = Object.fromEntries(
    gameVersions.map((key) => [
        key,
        key,
    ]),
) as Readonly<{
    [VersionName in GameVersionName]: VersionName;
}>;

export function isGameVersion(input: string): input is GameVersionName {
    return input in gameVersionNames;
}
