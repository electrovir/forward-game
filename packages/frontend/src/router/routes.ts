import {getEnumTypedValues, typedObjectFromEntries} from '@augment-vir/common';
import {FullRoute} from 'spa-router-vir';

export enum ForwardGameRouteEnum {
    VersionSelector = 'version-selector',
    Design = 'design',
    V1 = 'v1',
}

export const gameVersions: Record<GameVersion, GameVersion> = typedObjectFromEntries(
    getEnumTypedValues(ForwardGameRouteEnum)
        .filter((value): value is GameVersion => value !== ForwardGameRouteEnum.VersionSelector)
        .map((value) => [
            value,
            value,
        ]),
);

export function isGameVersion(input: string): input is GameVersion {
    return input in gameVersions;
}

export type GameVersion = Exclude<ForwardGameRouteEnum, ForwardGameRouteEnum.VersionSelector>;

export type GameRoutePath = [GameVersion, ...string[]] | [ForwardGameRouteEnum.VersionSelector];

export type GameFullRoute = Required<Readonly<FullRoute<GameRoutePath>>>;

export const defaultGameRoute: GameFullRoute = {
    paths: [ForwardGameRouteEnum.VersionSelector],
    search: undefined,
    hash: undefined,
};
