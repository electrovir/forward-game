import{j as Pe,e as Me,i as Ve,t as je,T as Oe,g as P,d as he,c as R,h as y,l as D,a as W,b as J,r as Be,C as H,f as Q}from"./index-0c8d235c.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Re}=Pe,X=()=>document.createComment(""),C=(e,t,n)=>{var i;const r=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=r.insertBefore(X(),s),a=r.insertBefore(X(),s);n=new Re(o,a,e,e.options)}else{const o=n._$AB.nextSibling,a=n._$AM,c=a!==e;if(c){let u;(i=n._$AQ)===null||i===void 0||i.call(n,e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==a._$AU&&n._$AP(u)}if(o!==s||c){let u=n._$AA;for(;u!==o;){const v=u.nextSibling;r.insertBefore(u,s),u=v}}}return n},I=(e,t,n=e)=>(e._$AI(t,n),e),Ge={},_e=(e,t=Ge)=>e._$AH=t,ze=e=>e._$AH,F=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let n=e._$AA;const i=e._$AB.nextSibling;for(;n!==i;){const r=n.nextSibling;n.remove(),n=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=(e,t,n)=>{const i=new Map;for(let r=t;r<=n;r++)i.set(e[r],r);return i},ye=Me(class extends Ve{constructor(e){if(super(e),e.type!==je.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let i;n===void 0?n=t:t!==void 0&&(i=t);const r=[],s=[];let o=0;for(const a of e)r[o]=i?i(a,o):o,s[o]=n(a,o),o++;return{values:s,keys:r}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){var r;const s=ze(e),{values:o,keys:a}=this.dt(t,n,i);if(!Array.isArray(s))return this.ht=a,o;const c=(r=this.ht)!==null&&r!==void 0?r:this.ht=[],u=[];let v,h,p=0,d=s.length-1,l=0,g=o.length-1;for(;p<=d&&l<=g;)if(s[p]===null)p++;else if(s[d]===null)d--;else if(c[p]===a[l])u[l]=I(s[p],o[l]),p++,l++;else if(c[d]===a[g])u[g]=I(s[d],o[g]),d--,g--;else if(c[p]===a[g])u[g]=I(s[p],o[g]),C(e,u[g+1],s[p]),p++,g--;else if(c[d]===a[l])u[l]=I(s[d],o[l]),C(e,s[p],s[d]),d--,l++;else if(v===void 0&&(v=ee(a,l,g),h=ee(c,p,d)),v.has(c[p]))if(v.has(c[d])){const x=h.get(a[l]),z=x!==void 0?s[x]:null;if(z===null){const Y=C(e,s[p]);I(Y,o[l]),u[l]=Y}else u[l]=I(z,o[l]),C(e,s[p],z),s[x]=null;l++}else F(s[d]),d--;else F(s[p]),p++;for(;l<=g;){const x=C(e,u[g+1]);I(x,o[l]),u[l++]=x}for(;p<=d;){const x=s[p++];x!==null&&F(x)}return this.ht=a,_e(e,u),Oe}}),He={capitalizeFirstLetter:!1};function Fe(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Je(e,t){return t.capitalizeFirstLetter?Fe(e):e}function qe(e,t=He){const n=e.toLowerCase();if(!n.length)return"";const i=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,r=>{const s=r[1];return s?s.toUpperCase():""});return Je(i,t)}function Ue(e){return e?e instanceof Error?e.message:G(e,"message")?String(e.message):String(e):""}function Ze(e){return e instanceof Error?e:new Error(Ue(e))}function be(e){return!!e}function te(e){return!!e&&typeof e=="object"}const We=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function G(e,t){return e?We.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function A(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function q(e){return A(e).map(t=>e[t])}function ne({source:e,whitespace:t,errorHandler:n}){try{return JSON.stringify(e,void 0,t)}catch(i){if(n)return n(i);throw i}}const ie="Failed to compare objects using JSON.stringify";function re(e,t,n){return ne({source:e,errorHandler(i){if(n)return"";throw i}})===ne({source:t,errorHandler(i){if(n)return"";throw i}})}function we(e,t,n={}){try{return e===t?!0:te(e)&&te(t)?re(Object.keys(e).sort(),Object.keys(t).sort(),!!(n!=null&&n.ignoreNonSerializableProperties))?Object.keys(e).every(r=>we(e[r],t[r])):!1:re(e,t,!!(n!=null&&n.ignoreNonSerializableProperties))}catch(i){const r=Ze(i);throw r.message.startsWith(ie)||(r.message=`${ie}: ${r.message}`),r}}function Ye(e,t){let n=!1;const i=A(e).reduce((r,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...r,[s]:o}},{});return n?new Promise(async(r,s)=>{try{await Promise.all(A(i).map(async o=>{const a=await i[o];i[o]=a})),r(i)}catch(o){s(o)}}):i}const xe={gamepad1:0,gamepad2:1,gamepad3:2,gamepad4:3};function De(e){return Object.values(xe).includes(e)}const Qe={mouse:"mouse",keyboard:"keyboard"},w={...Qe,...xe};var m;(function(e){e.Keyboard="keyboard",e.Mouse="mouse",e.Gamepad="gamepad"})(m||(m={}));var j;(function(e){e.Button="button",e.Axe="axe"})(j||(j={}));function E(e){return`button-${e}`}function U(e){return`axe-${e}`}function Xe(e){return{pressed:e.pressed,touched:e.touched,value:e.value}}function et(e){if(!De(e.index))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${e.index}'`);return{axes:e.axes,buttons:e.buttons.map(Xe),connected:e.connected,id:e.id,index:e.index,mapping:e.mapping,serialized:!0,timestamp:e.timestamp}}function tt(){return window.navigator}function nt(e){const t=tt();return Array.from(G(t,"webkitGetGamepads")?t.webkitGetGamepads():t.getGamepads()).filter(r=>!!r).map(r=>et(r)).reduce((r,s)=>{const o=rt(s,e),a=s.index;return De(a)?(r[a]={...s,...o},r):(console.warn(`ignoring gamepad index '${a}'`),r)},{})}function it(e){const t={},n={deviceKey:e.index,deviceName:e.id,deviceType:m.Gamepad};return e.buttons.forEach((i,r)=>{if(i.value){const s=E(r);t[s]={...n,details:{inputType:j.Button,buttonDetails:i},inputName:s,inputValue:i.value}}}),e.axes.forEach((i,r)=>{if(i){const s=U(r);t[s]={...n,details:{inputType:j.Axe},inputName:s,inputValue:i}}}),t}const se=.01;function rt(e,t){const n=t[e.id],i=e.axes.map((s,o)=>{const a=(n==null?void 0:n.axesDeadZones[o])??se;return Math.abs(s)<a?0:s}),r=e.buttons.map((s,o)=>{const a=(n==null?void 0:n.axesDeadZones[o])??se,c=Math.abs(s.value)<a?0:s.value;return{...s,value:c}});return{axes:i,buttons:r}}function st(e){return Ye(e,(t,n)=>({currentInputs:it(n),deviceDetails:n,deviceName:n.id,deviceKey:n.index,deviceType:m.Gamepad}))}function oe(e){return q(e).map(i=>i.currentInputs).map(i=>q(i)).flat()}const ae={deviceDetails:void 0,deviceKey:w.keyboard,deviceName:"keyboard",deviceType:m.Keyboard},K={deviceDetails:void 0,deviceKey:w.mouse,deviceName:"mouse",deviceType:m.Mouse};var b;(function(e){e.NewDevicesAdded="new-devices-added",e.AllDevicesUpdated="all-devices-updated",e.CurrentInputsChanged="current-inputs-updated",e.DevicesRemoved="devices-removed"})(b||(b={}));var ot=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function at(){return e=>{var t;return t=class extends CustomEvent{constructor(i){super(e,i)}},ot(t,"TypedEventConstructor"),t.type=e,t}}globalThis&&globalThis.__setFunctionName;function ct(e,t){return e.filter((n,i)=>!t.includes(i))}class ut extends EventTarget{constructor(){super(...arguments),this.setupListeners=[]}getListenerCount(){return this.setupListeners.length}addEventListener(t,n,i){super.addEventListener(t,n,i),n&&this.setupListeners.push({type:t,callback:n,options:i})}dispatchEvent(t){return super.dispatchEvent(t)}removeEventListener(t,n,i){super.removeEventListener(t,n,i);const r=this.setupListeners.findIndex(s=>{if(s.type!==t)return!1;if(typeof i<"u"||typeof s.options<"u"){if(typeof i!=typeof s.options||typeof s.options=="boolean"&&typeof i=="boolean"&&i!==s.options)return!1;if(typeof s.options=="object"&&typeof i=="object"&&i.capture!==s.options.capture)return!1}return s.callback===n});this.setupListeners=ct(this.setupListeners,[r])}removeAllEventListeners(){this.setupListeners.forEach(t=>{super.removeEventListener(t.type,t.callback,t.options)}),this.setupListeners=[]}}var dt=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function _(){return(e,t)=>{var n;const i=qe(e,{capitalizeFirstLetter:!0}),r=(n=class extends at()(e){constructor(){super(...arguments),this.eventType=e}static constructIfDataIsNew(s,...o){const a=r.getNewData(...o);if(a)return new r({detail:{timestamp:s,inputs:a}})}},dt(n,"TimedEventConstructor"),n.getNewData=t,n);return Object.defineProperty(r,"name",{value:i,writable:!0}),r}}function lt(...[e,t]){return t}const pt=_()(b.AllDevicesUpdated,lt);function ce(e,t){return e.deviceKey===t.deviceKey&&e.inputName===t.inputName&&e.inputName===t.inputName&&e.inputValue===t.inputValue}function ft(...[e,t]){const n=oe(t),i=e?oe(e):[];if(!we(i,n)){const r=n.filter(o=>!i.find(a=>ce(a,o))),s=i.filter(o=>!n.find(a=>ce(a,o)));return{newInputs:r,removedInputs:s,allCurrentInputs:n}}}const vt=_()(b.CurrentInputsChanged,ft);function gt(...[e,t]){if(!e)return[];const n=A(e).filter(i=>!G(t,i));if(n.length)return n.map(i=>e[i]).filter(be)}const mt=_()(b.DevicesRemoved,gt);function ht(...[e,t]){if(!e)return q(t);const n=A(t).filter(i=>!G(e,i));if(n.length)return n.map(i=>t[i]).filter(be)}const yt=_()(b.NewDevicesAdded,ht),Ie=[pt,yt,mt,vt];Object.fromEntries(Ie.map(e=>[e.type,e]));class bt extends ut{constructor(t={}){super(),this.currentKeyboardInputs={},this.currentMouseInputs={},this.gamepadDeadZoneSettings={},this.loopIsRunning=!1,this.currentLoopIndex=-1,this.lastEventDetails={},t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),this.attachWindowListeners(t),this.updateInputDevices(),t.skipLoopStart||this.startPollingLoop()}attachWindowListeners(t){window.addEventListener("keydown",n=>{const i=E(n.key);if(this.currentKeyboardInputs.hasOwnProperty(i))return;const r={deviceType:m.Keyboard,details:{keyboardEvent:n},deviceKey:w.keyboard,deviceName:ae.deviceName,inputName:i,inputValue:1};this.currentKeyboardInputs[i]=r}),window.addEventListener("keyup",n=>{delete this.currentKeyboardInputs[E(n.key)]}),window.addEventListener("mousedown",n=>{const i=E(n.button);this.currentMouseInputs.hasOwnProperty(i)||(this.currentMouseInputs[i]={deviceType:m.Mouse,details:{mouseEvent:n},deviceName:K.deviceName,deviceKey:w.mouse,inputName:i,inputValue:1})}),window.addEventListener("mouseup",n=>{delete this.currentMouseInputs[E(n.button)]}),t.listenToMouseMovement&&window.addEventListener("mousemove",n=>{const i=U("x"),r=U("y");this.currentMouseInputs[i]={deviceType:m.Mouse,details:{mouseEvent:n},deviceName:K.deviceName,deviceKey:w.mouse,inputName:i,inputValue:n.clientX},this.currentMouseInputs[r]={deviceType:m.Mouse,details:{mouseEvent:n},deviceName:K.deviceName,deviceKey:w.mouse,inputName:r,inputValue:n.clientY}})}runPollingLoop(t,n){this.loopIsRunning&&this.currentLoopIndex===t&&(this.updateInputDevices(n),requestAnimationFrame(i=>{this.runPollingLoop(t,i)}))}fireEvents(t,n){Ie.forEach(i=>{const r=i.constructIfDataIsNew(t,this.lastReadInputDevices,n);r&&(this.lastEventDetails[r.type]={constructor:i,constructorInputs:[t,this.lastReadInputDevices,n]},this.dispatchEvent(r))})}readAllInputDevices(){const t=nt(this.gamepadDeadZoneSettings),n=st(t);return{[w.keyboard]:{...ae,currentInputs:{...this.currentKeyboardInputs}},[w.mouse]:{...K,currentInputs:{...this.currentMouseInputs}},...n}}addEventListenerAndFireWithLatest(t,n,i){if(this.addEventListener(t,n,i),!n)return;const r=this.lastEventDetails[t],s=typeof n=="function"?n:n.handleEvent;if(r){const o=r.constructor.constructIfDataIsNew(...r.constructorInputs);if(!o)throw new Error(`Got input device event constructor args for event type '${t}' but the constructor did not produce an event.`);s(o)}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}updateInputDevices(t=performance.now()){const n=this.readAllInputDevices();return this.fireEvents(t,n),this.lastReadInputDevices=n,n}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}var M=(e=>(e.AssignControls="assign-controls",e.Play="play",e))(M||{});function Ne(e){return e.paths.length<2?{...e,paths:[P.v1,"assign-controls"]}:e}function wt(e){return Ne(e)!==e}function xt(e){return e?e instanceof Error?e.message:$(e,"message")?String(e.message):String(e):""}function Dt(e){return e instanceof Error?e:new Error(xt(e))}function It(e){return!!e}function O(e){return!!e&&typeof e=="object"}const Nt=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function $(e,t){return e?Nt.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function $t(e,t){return e&&t.every(n=>$(e,n))}function B(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Z(e){return B(e).map(t=>e[t])}function ue({source:e,whitespace:t,errorHandler:n}){try{return JSON.stringify(e,void 0,t)}catch(i){if(n)return n(i);throw i}}const de="Failed to compare objects using JSON.stringify";function le(e,t,n){return ue({source:e,errorHandler(i){if(n)return"";throw i}})===ue({source:t,errorHandler(i){if(n)return"";throw i}})}function $e(e,t,n={}){try{return e===t?!0:O(e)&&O(t)?le(Object.keys(e).sort(),Object.keys(t).sort(),!!(n!=null&&n.ignoreNonSerializableProperties))?Object.keys(e).every(r=>$e(e[r],t[r])):!1:le(e,t,!!(n!=null&&n.ignoreNonSerializableProperties))}catch(i){const r=Dt(i);throw r.message.startsWith(de)||(r.message=`${de}: ${r.message}`),r}}function Ct(e){return B(e).filter(t=>isNaN(Number(t)))}function kt(e,t){let n=!1;const i=B(e).reduce((r,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...r,[s]:o}},{});return n?new Promise(async(r,s)=>{try{await Promise.all(B(i).map(async o=>{const a=await i[o];i[o]=a})),r(i)}catch(o){s(o)}}):i}function Lt(){return e=>e}const V=0;function Et(e){if(!O(e)||!$(e,"settingsVersion"))return;if(typeof e.settingsVersion!="number"||e.settingsVersion>V){console.error(`Invalid version number from settings: ${e.settingsVersion}. Latest possible version is ${V}`);return}let t=e.settingsVersion;for(;t<V;){const n=Kt[t];if(!n){console.error(`Failed to get settings updater for version ${t}`);return}if(e=n(e),!e)return;t++}if(At(e))return e}function At(e){return!!(O(e)&&$t(e,["gamepadSettings","bindings","settingsVersion"]))}const Kt=Lt()({}),Tt={deadZones:{}},pe={gamepadSettings:Tt,bindings:{},settingsVersion:V},Ce="forward-game-settings";function St(){const e=window.localStorage.getItem(Ce);if(e)try{const t=JSON.parse(e);return Et(t)}catch(t){console.error(`Failed to load game settings: ${t}`);return}}function Pt(){const e=St();return e||(ke(pe),pe)}function ke(e){try{return window.localStorage.setItem(Ce,JSON.stringify(e)),!0}catch(t){return console.error(t),!1}}const Le=he()("breaking-error"),Ee=he()("update-game-settings"),Mt=globalThis.crypto;function Ae(e=16){const t=Math.ceil(e/2),n=new Uint8Array(t);return Mt.getRandomValues(n),Array.from(n).map(i=>i.toString(16).padStart(2,"0")).join("").substring(0,e)}var f=(e=>(e.Up="up",e.Down="down",e.Left="left",e.Right="right",e.Pause="pause",e))(f||{});const Ke={up:{direction:1,inputName:""},down:{direction:1,inputName:""},left:{direction:1,inputName:""},right:{direction:1,inputName:""},pause:{direction:1,inputName:""}};function Vt(e){return e?Z(e).every(t=>t.inputName!==""):!1}const jt=R`
    .individual-binding-wrapper {
        display: flex;
        flex-direction: column;
        padding: 8px;
        border: 2px solid #ccc;
        width: 75px;
        height: 40px;
        align-items: center;
        border-radius: 4px;
        gap: 4px;
        cursor: pointer;
    }

    .control-name {
        text-decoration: underline;
    }

    .individual-binding-wrapper.selected {
        border-color: dodgerblue;
        opacity: 1;
    }

    .binding-row {
        display: flex;
        justify-content: space-between;
    }

    .binding-row.single {
        justify-content: center;
    }

    .bindings-wrapper {
        width: 300px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        user-select: none;
        -webkit-user-select: none;
    }
`;function Ot({currentDevice:e,allBindings:t,currentlySelected:n,selectedCallback:i}){var o;const r=((o=t[e.deviceName])==null?void 0:o.bindings)??Ke,s={currentlySelected:n,selectedCallback:i};return y`
        <div class="bindings-wrapper">
            <div class="binding-row single">
                ${k({...s,control:f.Up,binding:r[f.Up]})}
            </div>
            <div class="binding-row">
                ${k({...s,control:f.Left,binding:r[f.Left]})}
                ${k({...s,control:f.Right,binding:r[f.Right]})}
            </div>
            <div class="binding-row single">
                ${k({...s,control:f.Down,binding:r[f.Down]})}
            </div>
            <div class="binding-row single">
                ${k({...s,control:f.Pause,binding:r[f.Pause]})}
            </div>
        </div>
    `}function k({control:e,binding:t,currentlySelected:n,selectedCallback:i}){const r=t.inputName?`${t.inputName}${t.inputName.startsWith("axe")?t.direction>0?"+":"-":""}`:"N/A";return y`
        <div
            class="individual-binding-wrapper ${n?"blocked":""} ${n===e?"selected":""}"
            ${D("click",()=>{i(e)})}
        >
            <span class="control-name">${e}</span>
            <span class="bound-name">${r}</span>
        </div>
    `}function Bt(e){switch(e.deviceType){case m.Gamepad:return"🎮";case m.Keyboard:return"⌨️";case m.Mouse:return"🖱"}}const fe=["red","orange","gold","yellow","lime","green","cyan","blue","purple","magenta"];function Te({inputDevice:e,animations:t,selectedCallback:n,selectedKey:i,isTopLevel:r=!1}){const s=Bt(e),o=r?fe[Math.floor(Math.random()*fe.length)]:"",a=r?"animated-icon":i===e.deviceKey?"selected":"",c=o?`--glow-color: ${o};`:"";return y`
        <div
            class="input-device-selector ${a}"
            style=${c}
            ${D("click",n)}
        >
            <span class="device-icon">${s}</span>
            <span class="device-name">${e.deviceName}</span>
            ${ye(t,v=>v.timestamp,()=>Te({inputDevice:e,animations:[],selectedCallback:n,selectedKey:void 0,isTopLevel:!0}))}
        </div>
    `}const Se=700;function Rt(e){const t=Date.now();return kt(e,(n,i)=>i.filter(r=>r.timestamp>t-Se))}function ve(e){return e.reduce((n,i)=>(n[i.deviceKey]={deviceKey:i.deviceKey,deviceName:i.deviceName,deviceType:i.deviceType},n),{})}const L=W()({tagName:"vir-assign-controls",events:{assignmentDone:J(),changeDevice:J()},styles:R`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 32px;
            text-align: center;
        }

        .device-selector-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            padding: 16px;
        }

        .device-icon {
            font-size: 3em;
        }

        .input-device-selector {
            max-width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            user-select: none;
            -webkit-user-select: none;
            position: relative;
            padding: 8px 16px;
            background-color: white;
            box-sizing: border-box;
            border: 2px solid #ccc;
            overflow: hidden;
            border-radius: 8px;
            cursor: pointer;
        }

        .input-device-selector span {
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 100%;
            white-space: nowrap;
        }

        .input-device-selector .device-name {
            font-size: 0.9em;
        }

        .device-icon {
            user-select: inherit;
            -webkit-user-select: inherit;
        }

        .input-device-selector.selected {
            border-color: dodgerblue;
            cursor: auto;
        }

        .animated-icon {
            border: none;
            position: absolute;
            background-color: inherit;
            padding: inherit;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-sizing: inherit;
            border-radius: inherit;
            pointer-events: none;
        }

        .animated-icon .device-icon {
            animation: glow ${Se/2}ms;
        }

        @keyframes glow {
            0% {
                filter: drop-shadow(0 0 6px var(--glow-color, red));
            }
            100% {
                filter: drop-shadow(0 0 0 var(--glow-color, red));
            }
        }

        .blocked {
            opacity: 0.3;
            pointer-events: none;
        }

        .continue-button {
            margin-top: 24px;
            padding: 8px;
            font: inherit;
            background-color: skyblue;
            border: 1px solid grey;
            border-radius: 4px;
            cursor: pointer;
        }

        .continue-button[disabled] {
            cursor: auto;
        }

        .continue-button:not([disabled]):hover {
            background-color: lightblue;
        }

        ${jt};
    `,stateInitStatic:{id:"",currentInputDevices:{},currentInputDeviceAnimations:{},selectedBindingControl:void 0},initCallback:({inputs:e,state:t,updateState:n,dispatch:i,events:r})=>{n({id:Ae()});const s=e.inputHandler.getLastPollResults();if(s){const o=ve(Object.values(s));n({currentInputDevices:o}),e.selectedDevice||i(new r.changeDevice(o.keyboard))}e.inputHandler.addEventListener(b.NewDevicesAdded,o=>{const a=ve(o.detail.inputs),c={...t.currentInputDevices,...a},u=Z(a).slice(-1)[0];u&&i(new r.changeDevice(u)),n({currentInputDevices:c})}),e.inputHandler.addEventListener(b.DevicesRemoved,o=>{const a={...t.currentInputDevices};o.detail.inputs.forEach(c=>{delete a[c.deviceKey]}),n({currentInputDevices:a})}),e.inputHandler.addEventListener(b.CurrentInputsChanged,o=>{var p;const a=o.detail.inputs.newInputs,c=!!t.selectedBindingControl;let u=!1;if(c){const d=a.filter(l=>{var g;return l.deviceKey===((g=e.selectedDevice)==null?void 0:g.deviceKey)}).filter(l=>Math.abs(l.inputValue)>.7)[0];if(d){d.inputName;const l={...((p=e.gameSettings.bindings[d.deviceName])==null?void 0:p.bindings)??Ke,[t.selectedBindingControl]:{inputName:d.inputName,direction:d.inputValue>0?1:-1}};i(new Ee({...e.gameSettings,bindings:{...e.gameSettings.bindings,[d.deviceName]:{deviceName:d.deviceName,bindings:l}}})),u=!0}}const v=a.map(d=>({deviceKey:d.deviceKey,deviceName:d.deviceName,timestamp:Date.now()})),h=Rt(t.currentInputDeviceAnimations);v.forEach(d=>{h[d.deviceKey]||(h[d.deviceKey]=[]),h[d.deviceKey].push(d)}),n({currentInputDeviceAnimations:h,...u?{selectedBindingControl:void 0}:{}})})},renderCallback:({state:e,updateState:t,inputs:n,dispatch:i,events:r})=>{var o,a;const s=((o=n.selectedDevice)==null?void 0:o.deviceKey)==null?void 0:e.currentInputDevices[n.selectedDevice.deviceKey]??e.currentInputDevices[w.keyboard];return s?y`
            <h2>Configure Inputs</h2>
            <p>
                Select a device to use.
                <br />
                <br />
                To connect a controller, push buttons on it.
            </p>
            <div class="device-selector-wrapper ${e.selectedBindingControl?"blocked":""}">
                ${ye(Z(e.currentInputDevices).filter(c=>c.deviceKey!==w.mouse).sort((c,u)=>typeof c.deviceKey!="number"?-1:typeof u.deviceKey!="number"?1:c.deviceKey-u.deviceKey),c=>c.deviceKey,c=>{var v;const u=e.currentInputDeviceAnimations[c.deviceKey];return Te({inputDevice:c,animations:u??[],selectedCallback:()=>{i(new r.changeDevice(c))},selectedKey:(v=n.selectedDevice)==null?void 0:v.deviceKey,isTopLevel:!1})})}
            </div>
            <div>
                ${Ot({currentDevice:s,allBindings:n.gameSettings.bindings,currentlySelected:e.selectedBindingControl,selectedCallback:c=>{t({selectedBindingControl:c})}})}
            </div>
            <div>
                <button
                    class="continue-button"
                    ?disabled=${!Vt((a=n.gameSettings.bindings[s.deviceName])==null?void 0:a.bindings)}
                    ${D("click",()=>{i(new r.assignmentDone)})}
                >
                    Continue
                </button>
            </div>
        `:y`
                no device
            `}});function T(e){const t=Math.pow(10,e.digits),n=e.number*t;return Number((Math.round(n)/t).toFixed(e.digits))}class Gt{constructor(){this.shouldRunCallbacks=!0,this.loopCallbacks=new Map}addLoopCallback(t,n){const i=Ae(),r={lastTimeFired:Date.now(),timeout:n,callback:t};return this.loopCallbacks.set(i,r),i}removeLoopCallback(t){return this.loopCallbacks.delete(t)}addLoopTrigger(t){return t.addLoopCallback((n,i)=>{this.fireLoopCallbacks(i,n)})}destroy(){Object.keys(this.loopCallbacks).forEach(t=>{this.removeLoopCallback(t)})}fireLoopCallbacks(t,n){if(!this.loopCallbacks.size||!this.shouldRunCallbacks)return;const i=this.generateCallbackInput(t,n);this.loopCallbacks.forEach(r=>{if(r.timeout){const s=t-r.lastTimeFired;if(s>=r.timeout){const o=s-r.timeout;r.lastTimeFired=t-o,r.callback(i,t)}}else r.callback(i,t)})}}class _t extends Gt{constructor(){super(),this.startGameLoop()}addLoopTrigger(){throw new Error(`${this.constructor.name} handles its own triggers: don't call addLoopTrigger to it.`)}runGameLoop(t){this.fireLoopCallbacks(t,void 0),requestAnimationFrame(n=>{this.runGameLoop(n)})}generateCallbackInput(){}startGameLoop(){this.runGameLoop(performance.now())}}function ge(e,t){return e.map(r=>{const s=Ct(t).filter(o=>{const a=t[o];return a.inputName===r.inputName&&zt(a,r)});if(s.length)return s.map(o=>[o,Math.abs(r.inputValue)])}).filter(It).flat().reduce((r,s)=>(r[s[0]]=s[1],r),{})}function zt(e,t){return e.direction>0?t.inputValue>0:t.inputValue<0}const S=W()({tagName:"vir-game",styles:R`
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
    `,stateInitStatic:{currentPosition:{x:0,y:0},paused:!1,cleanup:void 0,win:!1},events:{exit:J()},initCallback:({inputs:e,state:t,host:n,updateState:i,dispatch:r})=>{function s(){var u;const c=(u=e.gameSettings.bindings[e.selectedDevice.deviceName])==null?void 0:u.bindings;if(!c){const v=new Error(`current bindings for "${e.selectedDevice.deviceName}" not found.`);throw r(new Le(v)),v}return c}const o=new _t;o.addLoopCallback(()=>{const c=e.inputHandler.updateInputDevices();Ft(n)&&i({win:!0});const v=ge(Object.values(c[e.selectedDevice.deviceKey].currentInputs),s());if(t.paused||t.win)return;const h=Ht(v,t.currentPosition);$e(h,t.currentPosition)||i({currentPosition:h})});function a(c){const u=c.detail.inputs.newInputs.filter(h=>h.deviceKey===e.selectedDevice.deviceKey);ge(u,s()).hasOwnProperty(f.Pause)&&i({paused:!t.paused})}e.inputHandler.addEventListener(b.CurrentInputsChanged,a),i({cleanup:()=>{e.inputHandler.removeEventListener(b.CurrentInputsChanged,a),o.destroy()}})},cleanupCallback({state:e}){var t;(t=e.cleanup)==null||t.call(e)},renderCallback:({state:e,dispatch:t,events:n})=>{console.log("render");const i=e.win||e.paused,r=`top: ${e.currentPosition.y}px; left: ${e.currentPosition.x}px`;return y`
            ${Be(i,y`
                    <div class="pause-screen">
                        <div class="pause-background"></div>
                        <div class="pause-info">
                            <span>${e.win?"You Win!":"Paused"}</span>
                            <button
                                class="exit-button"
                                ${D("click",()=>{t(new n.exit)})}
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                `)}
            <div class="victory-location">Get here to win!</div>
            <div class="ship-wrapper">
                <div class="ship" style=${r}></div>
            </div>
        `}}),N=4;function Ht(e,t){let n=0,i=0;if($(e,f.Down)&&(n+=T({number:Math.min(e[f.Down],1)*N,digits:1})),$(e,f.Up)&&(n-=T({number:Math.min(e[f.Up],1)*N,digits:1})),$(e,f.Right)&&(i+=T({number:Math.min(e[f.Right],1)*N,digits:1})),$(e,f.Left)&&(i-=T({number:Math.min(e[f.Left],1)*N,digits:1})),i&&n){const r=Math.sqrt(Math.pow(i,2)+Math.pow(n,2));r>N&&(n=n*(N/r),i=i*(N/r))}return{x:t.x+i,y:t.y+n}}function Ft(e){var s,o;const t=(s=e.shadowRoot)==null?void 0:s.querySelector(".victory-location"),n=(o=e.shadowRoot)==null?void 0:o.querySelector(".ship");if(!t||!n)return!1;const i=t.getBoundingClientRect(),r=n.getBoundingClientRect();return r.left<i.right&&r.right>i.left&&r.top<i.bottom&&r.bottom>i.top}const me=Pt(),qt=W()({tagName:"vir-forward-game-app",stateInitStatic:{inputHandler:new bt({gamepadDeadZoneSettings:me.gamepadSettings.deadZones}),gameSettings:me,selectedDevice:void 0},styles:R`
        :host,
        main {
            width: 100%;
            height: 100%;
        }
        main {
            display: flex;
            flex-direction: column;
        }
        main > * {
            flex-grow: 1;
        }
    `,renderCallback({state:e,updateState:t,inputs:n,dispatch:i}){if(n.currentRoute.paths[0]!==P.v1)return"";if(wt(n.currentRoute))return i(new H({route:Ne(n.currentRoute),sanitized:!0})),y``;const r=!!(n.currentRoute.paths[1]===M.Play&&e.selectedDevice);return r?e.inputHandler.pausePollingLoop():e.inputHandler.startPollingLoop(),y`
            <main
                ${D(Ee,s=>{ke(s.detail),t({gameSettings:s.detail})})}
                ${D(Le,s=>{console.error(s.detail)})}
            >
                ${r?y`
                          <${S}
                              ${Q(S,{gameSettings:e.gameSettings,inputHandler:e.inputHandler,selectedDevice:e.selectedDevice})}
                              ${D(S.events.exit,()=>{i(new H({route:{paths:[P.v1,M.AssignControls]},sanitized:!1}))})}
                          ></${S}>
                      `:y`
                          <${L}
                              ${Q(L,{inputHandler:e.inputHandler,gameSettings:e.gameSettings,selectedDevice:e.selectedDevice})}
                              ${D(L.events.assignmentDone,()=>{i(new H({route:{paths:[P.v1,M.Play]},sanitized:!1}))})}
                              ${D(L.events.changeDevice,s=>{const o=s.detail;t({selectedDevice:o})})}
                          ></${L}>
                      `}
            </main>
        `},cleanupCallback({state:e}){e.inputHandler.removeAllEventListeners()}});export{qt as VirForwardGameApp};
