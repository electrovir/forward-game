import {
    DeclarativeElementDefinition,
    assign,
    asyncProp,
    css,
    defineElementNoInputs,
    html,
    listen,
    renderAsync,
} from 'element-vir';
import {isGameVersion} from '../../../../data/versions';
import {
    ChangeRouteEvent,
    GameRoutePath,
    defaultGameRoute,
    getGameRouter,
    versionSelectorPath,
} from '../../../../router/game-router';
import {gameVersionData} from '../../data/game-version-data';
import {VirSelectGameVersion} from './vir-select-game-version.element';

export const VirVersionSelector = defineElementNoInputs({
    tagName: 'vir-version-selector',
    styles: css`
        :host,
        .root {
            position: relative;
            display: block;
            height: 100%;
        }
    `,
    stateInitStatic: {
        router: getGameRouter(),
        currentRoute: defaultGameRoute,
        currentGameVersionElement: asyncProp({
            async updateCallback({
                rootPath,
            }: {
                rootPath: GameRoutePath[0];
            }): Promise<DeclarativeElementDefinition | undefined> {
                if (!isGameVersion(rootPath)) {
                    return undefined;
                }
                return gameVersionData[rootPath].loadVersionElement();
            },
        }),
    },
    initCallback({state, updateState}) {
        state.router.addRouteListener(true, (newRoute) => {
            updateState({currentRoute: newRoute});
        });
    },
    renderCallback({state, updateState}) {
        updateState({
            currentGameVersionElement: {
                serializableTrigger: {
                    rootPath: state.currentRoute.paths[0],
                },
            },
        });

        const appTemplate =
            state.currentRoute.paths[0] === versionSelectorPath
                ? html`
                      <${VirSelectGameVersion}
                          ${assign(VirSelectGameVersion, {
                              versionData: gameVersionData,
                              router: state.router,
                          })}
                      ></${VirSelectGameVersion}>
                  `
                : renderAsync(
                      state.currentGameVersionElement,
                      'Loading',
                      (resolved) => {
                          if (!resolved) {
                              return 'Failed';
                          }

                          return html`
                              <${resolved}
                                  ${assign({
                                      currentRoute: state.currentRoute,
                                  })}
                              ></${resolved}>
                          `;
                      },
                      () => {
                          return html`
                              Failed.
                          `;
                      },
                  );

        return html`
            <div
                class="root"
                ${listen(ChangeRouteEvent, (event) => {
                    state.router.setRoutes(event.detail.route, event.detail.sanitized);
                })}
            >
                ${appTemplate}
            </div>
        `;
    },
});
