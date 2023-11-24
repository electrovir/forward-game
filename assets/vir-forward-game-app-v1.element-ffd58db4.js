import{F as y,i as x,a as k,d as m,c as v,b,w as P,h as r,r as f,l as s,m as C,e as $,g as d,C as p,f as S,V as u,j as V,G as E,s as z}from"./index-a621074d.js";var l=(e=>(e.AssignControls="assign-controls",e.Play="play",e))(l||{});const G=[y.V1,"assign-controls"];function w(e){return!x(e.paths,2)||!k(e.paths[1],l)?{...e,paths:G}:e}function L(e){return w(e)!==e}const c=m()({tagName:"vir-game-v1",styles:v`
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
    `,stateInitStatic:{cleanup:void 0,playerPosition:{x:0,y:0},isPaused:!1,haveWon:!1},events:{exit:b(),win:b()},initCallback({inputs:e,updateState:i}){e.gamePipeline.addStateListener(!0,["runTime","playerPosition"],n=>{i({playerPosition:n})}),e.gamePipeline.addStateListener(!0,["runTime","isPaused"],n=>{i({isPaused:n})}),e.gamePipeline.addStateListener(!0,["runTime","haveWon"],n=>{i({haveWon:n})})},cleanupCallback({state:e}){var i;(i=e.cleanup)==null||i.call(e)},renderCallback:({state:e,dispatch:i,events:n,host:t})=>{setTimeout(async()=>{await P(),!e.haveWon&&R(t)&&i(new n.win)});const a=e.haveWon||e.isPaused,o=`top: ${e.playerPosition.y}px; left: ${e.playerPosition.x}px`;return r`
            ${f(a,r`
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
                <div class="ship" style=${o}></div>
            </div>
        `}});function R(e){var o,h;const i=(o=e.shadowRoot)==null?void 0:o.querySelector(".victory-location"),n=(h=e.shadowRoot)==null?void 0:h.querySelector(".ship");if(!i||!n)return!1;const t=i.getBoundingClientRect(),a=n.getBoundingClientRect();return a.left<t.right&&a.right>t.left&&a.top<t.bottom&&a.bottom>t.top}const g=m()({tagName:"vir-state-debug-v1",stateInitStatic:{cleanupCallback:void 0,gameState:void 0},initCallback({inputs:e,updateState:i,state:n}){if(!n.cleanupCallback){const t=e.gamePipeline.addWholeStateListener(!0,a=>{i({gameState:a})});i({cleanupCallback:t})}},cleanupCallback({state:e}){var i;(i=e.cleanupCallback)==null||i.call(e)},renderCallback({state:e,inputs:i}){const n=JSON.stringify(e.gameState,null,4);return r`
            <button
                ${s("click",()=>{i.gamePipeline.update({stateUpdate:{settings:void 0}}),i.gamePipeline.update({stateUpdate:C($,{runTime:{saveNextFrame:!0}})})})}
            >
                Reset Settings
            </button>
            <pre>${n}</pre>
        `}}),W=m()({tagName:"vir-forward-game-app-v1",stateInitStatic:{gamePipeline:void 0,debug:!1,cleanup:void 0},styles:v`
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
    `,initCallback({state:e,updateState:i}){if(!e.cleanup){let n=function(t){(t.key==="D"||t.key==="∂")&&t.altKey&&i({debug:!e.debug})};window.addEventListener("keydown",n),i({cleanup:()=>{window.removeEventListener("keydown",n)}})}},cleanupCallback({state:e}){var i,n;(i=e.cleanup)==null||i.call(e),(n=e.gamePipeline)==null||n.destroy()},renderCallback({state:e,updateState:i,inputs:n,dispatch:t}){if(n.currentRoute.paths[0]!==d.v1)return"";if(L(n.currentRoute))return t(new p({route:w(n.currentRoute),sanitized:!0})),"";if(!e.gamePipeline)return setTimeout(()=>{i({gamePipeline:S({startImmediately:!0})})},0),"";const a=n.currentRoute.paths[1]===l.Play;return r`
            ${f(e.debug,r`
                    <${g.assign({gamePipeline:e.gamePipeline})}></${g}>
                `)}
            <main>
                ${a?r`
                          <${c.assign({gamePipeline:e.gamePipeline})}
                              ${s(c.events.exit,()=>{t(new p({route:{paths:[d.v1,l.AssignControls]},sanitized:!1}))})}
                              ${s(c.events.win,()=>{var o;(o=e.gamePipeline)==null||o.update({stateUpdate:{runTime:{haveWon:!0}}})})}
                          ></${c}>
                      `:r`
                          <${u.assign({gamePipeline:e.gamePipeline,requiredActionNames:V(E)})}
                              ${s(u.events.assignmentDone,()=>{var o;t(new p({route:{paths:[d.v1,l.Play]},sanitized:!1})),(o=e.gamePipeline)==null||o.update({stateUpdate:z})})}
                          ></${u}>
                      `}
            </main>
        `}});export{W as VirForwardGameAppV1};
