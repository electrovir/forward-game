import{F as y,i as w,a as P,d as k,b as h,c as v,e as b,w as C,h as r,r as f,l as s,g as p,C as d,f as $,V as u,j as S,G as V}from"./index-73b6f2ed.js";var l=(e=>(e.AssignControls="assign-controls",e.Play="play",e))(l||{});const E=[y.V1,"assign-controls"];function x(e){return!w(e.paths,2)||!P(e.paths[1],l)?{...e,paths:E}:e}function z(e){return x(e)!==e}const W=k()("breaking-error"),c=h()({tagName:"vir-game-v1",styles:v`
        :host {
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .ship-wrapper,
        .ship {
            height: 10px;
            width: 10px;
        }

        .ship-wrapper {
            position: relative;
        }

        .ship {
            position: absolute;
            background-color: blue;
        }

        .pause-screen {
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .pause-screen,
        .pause-background {
            position: absolute;
            height: 100%;
            width: 100%;
        }

        .pause-background {
            background-color: black;
            opacity: 0.2;
        }

        .pause-info {
            position: relative;
            color: white;
            font-size: 5em;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .victory-location {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3em;
            font-weight: bold;
            color: black;
            max-height: 20%;
            background: repeating-conic-gradient(
                    rgba(0, 0, 0, 0.15) 0% 25%,
                    rgba(255, 255, 255, 0.15) 0% 50%
                )
                50% / 20px 20px;
        }

        .exit-button {
            padding: 8px;
            border-radius: 8px;
            border: 1px solid grey;
            background-color: skyblue;
            cursor: pointer;
        }

        .exit-button:hover {
            background-color: lightblue;
        }
    `,stateInitStatic:{cleanup:void 0,playerPosition:{x:0,y:0},isPaused:!1,haveWon:!1},events:{exit:b(),win:b()},initCallback({inputs:e,updateState:i}){e.gamePipeline.addStateListener(!0,["playerPosition"],n=>{i({playerPosition:n})}),e.gamePipeline.addStateListener(!0,["isPaused"],n=>{i({isPaused:n})}),e.gamePipeline.addStateListener(!0,["haveWon"],n=>{i({haveWon:n})})},cleanupCallback({state:e}){var i;(i=e.cleanup)==null||i.call(e)},renderCallback:({state:e,dispatch:i,events:n,host:a})=>{setTimeout(async()=>{await C(),!e.haveWon&&A(a)&&i(new n.win)});const o=e.haveWon||e.isPaused,t=`top: ${e.playerPosition.y}px; left: ${e.playerPosition.x}px`;return r`
            ${f(o,r`
                    <div class="pause-screen">
                        <div class="pause-background"></div>
                        <div class="pause-info">
                            <span>${e.haveWon?"You Win!":"Paused"}</span>
                            <button
                                class="exit-button"
                                ${s("click",()=>{i(new n.exit)})}
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                `)}
            <div class="victory-location">Get here to win!</div>
            <div class="ship-wrapper">
                <div class="ship" style=${t}></div>
            </div>
        `}});function A(e){var t,m;const i=(t=e.shadowRoot)==null?void 0:t.querySelector(".victory-location"),n=(m=e.shadowRoot)==null?void 0:m.querySelector(".ship");if(!i||!n)return!1;const a=i.getBoundingClientRect(),o=n.getBoundingClientRect();return o.left<a.right&&o.right>a.left&&o.top<a.bottom&&o.bottom>a.top}const g=h()({tagName:"vir-state-debug",stateInitStatic:{cleanupCallback:void 0,gameState:void 0},initCallback({inputs:e,updateState:i,state:n}){if(!n.cleanupCallback){const a=e.gamePipeline.addWholeStateListener(!0,o=>{i({gameState:o})});i({cleanupCallback:a})}},cleanupCallback({state:e}){var i;(i=e.cleanupCallback)==null||i.call(e)},renderCallback({state:e}){const i=JSON.stringify(e.gameState,null,4);return r`
            <pre>${i}</pre>
        `}}),R=h()({tagName:"vir-forward-game-app-v1",stateInitStatic:{gamePipeline:void 0,debug:!1},styles:v`
        :host,
        main {
            width: 100%;
            height: 100%;
            position: relative;
        }
        main {
            display: flex;
            flex-direction: column;
        }
        main > * {
            flex-grow: 1;
        }
        ${g} {
            position: absolute;
            top: 0;
            left: 0;
            background-color: white;
            border: 1px solid black;
            max-height: 90vh;
            overflow-y: auto;
            overflow-x: hidden;
            padding-right: 20px;
            z-index: 999999999;
        }
    `,cleanupCallback({state:e}){var i;(i=e.gamePipeline)==null||i.destroy()},renderCallback({state:e,updateState:i,inputs:n,dispatch:a}){if(n.currentRoute.paths[0]!==p.v1)return"";if(z(n.currentRoute))return a(new d({route:x(n.currentRoute),sanitized:!0})),"";if(!e.gamePipeline)return setTimeout(()=>{i({gamePipeline:$({startImmediately:!0})})},0),"";const o=n.currentRoute.paths[1]===l.Play;return r`
            ${f(e.debug,r`
                    <${g.assign({gamePipeline:e.gamePipeline})}></${g}>
                `)}
            <main
                ${s(W,t=>{console.error(t.detail)})}
            >
                ${o?r`
                          <${c.assign({gamePipeline:e.gamePipeline})}
                              ${s(c.events.exit,()=>{a(new d({route:{paths:[p.v1,l.AssignControls]},sanitized:!1}))})}
                              ${s(c.events.win,()=>{var t;(t=e.gamePipeline)==null||t.update({stateUpdate:{haveWon:!0}})})}
                          ></${c}>
                      `:r`
                          <${u.assign({gamePipeline:e.gamePipeline,requiredActionNames:S(V)})}
                              ${s(u.events.assignmentDone,()=>{var t;a(new d({route:{paths:[p.v1,l.Play]},sanitized:!1})),(t=e.gamePipeline)==null||t.update({stateUpdate:{isPaused:!1,haveWon:!1,playerPosition:{x:0,y:0}}})})}
                          ></${u}>
                      `}
            </main>
        `}});export{R as VirForwardGameAppV1};
