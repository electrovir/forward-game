(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const od="modulepreload",ad=function(e){return"/forward-game/"+e},Is={},ld=function(t,r,n){if(!r||r.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(r.map(s=>{if(s=ad(s),s in Is)return;Is[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let u=i.length-1;u>=0;u--){const d=i[u];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":od,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},cd=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ud(e,t){return e?cd.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function dd(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}var Ls;(function(e){e.Upper="upper",e.Lower="lower"})(Ls||(Ls={}));var Ns;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Ns||(Ns={}));function fd(e){return e?e instanceof Error?e.message:ud(e,"message")?String(e.message):String(e):""}function qr(e){return!!e&&typeof e=="object"}function hd(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}hd();class fn extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const md=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Qa(e,t){return e?md.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Xa(e){return e instanceof Promise}function xt(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function E(e,t){return xt(e)===t}function Qe(e,t,r){if(!(e instanceof t))throw new fn(r||"instanceof assertion failed")}function el(e,t){if(e==null)throw new fn(t||"defined assertion failed")}class pd extends Error{constructor(t){super(`Failed to compare objects using JSON.stringify: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonStringifyError"})}}function Rn(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Xe(e,t){try{if(e===t||Rn(e,t))return!0;if(qr(e)&&qr(t)){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length||n.length)return Rn(r,n)?dd(e).every(s=>Xe(e[s],t[s])):!1}return Rn(e,t)}catch(r){throw new pd(fd(r))}}function yt(e,t){return e===t}function gd(e,t,r=yt){return qr(e)&&qr(t)?Array.from(new Set([...Object.keys(e),...Object.keys(t)])).every(i=>{const s=e[i],o=t[i];return r(s,o)}):r(e,t)}function yd(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new fn(t||"value is not a primitive")}function wd(e){try{return yd(e),!0}catch{return!1}}function vd(e,t){if(!(E(e,"string")||E(e,"number")||E(e,"symbol")))throw new fn(t||`value is of type '${xt(e)}' but expected a PropertyKey.`)}function Vn(e){try{return vd(e),!0}catch{return!1}}const bd=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function At(e,t){return e?bd.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function De(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Zr(e){return De(e).map(t=>e[t])}function nt(e){return De(e).map(t=>[t,e[t]])}function tl(e){return Object.fromEntries(e)}function Sd(e,t){return e.filter((r,n)=>!t.includes(n))}function Ed(e,t){return e.includes(t)}function Td(e,t,r){return e.reduce((n,i,s,o)=>{const a=t(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}async function $d(e,t){await xd(e,t)}async function xd(e,t){return await e.reduce(async(n,i,s,o)=>{const a=await n,l=await t(i,s,o);return a.push(l),a},Promise.resolve([]))}function _e(e){return!!e}function Ad(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function kd({value:e,wrapper:t}){return[t,t].join(e)}function Pd(e){return e.replace(/,/g,"")}const Md={capitalizeFirstLetter:!1};function Cd(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Od(e,t){return t.capitalizeFirstLetter?Cd(e):e}function Id(e,t=Md){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Od(n,t)}var Ds;(function(e){e.Upper="upper",e.Lower="lower"})(Ds||(Ds={}));function Ld(e,t){return e.split(t)}function Nd({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Dd(e){return typeof e=="number"?e:Number(typeof e=="string"?Pd(e):e)}function _s(e){const t=_d(e);if(t==null)throw new Error(`Cannot convert to a number: ${e}`);return t}function _d(e){const t=Dd(e);if(!isNaN(t))return t}function Fr({max:e,min:t,value:r}){return r>e?t:r<t?e:r}var Rs;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Rs||(Rs={}));function Wi(e){return e?e instanceof Error?e.message:At(e,"message")?String(e.message):String(e):""}function rl(e){return e instanceof Error?e:new Error(Wi(e))}function Vs(e,t){const r=rl(e);return r.message=`${t}: ${r.message}`,r}function Rd(e){return De(e).filter(t=>isNaN(Number(t)))}function Vd(e){return Rd(e).map(r=>e[r])}function nl(e,t){return Vd(t).includes(e)}function Hd(e,t){return De(e).filter(n=>{const i=e[n];return t(n,i,e)}).reduce((n,i)=>(n[i]=e[i],n),{})}function Fd(e,t){return Hd(e,r=>!t.includes(r))}function Re(e,t){let r=!1;const n=De(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(De(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function tr(e,t){try{return Ud(e,t),!0}catch{return!1}}function Ud(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function il(...e){if(!tr(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(n=>{if(E(n,"object"))E(t,"object")||(t={...n});else{t=n;return}Object.entries(n).forEach(([i,s])=>{r[i]||(r[i]=[]),r[i].push(s)})}),E(t,"object")&&Object.entries(r).forEach(([n,i])=>{const s=il(...i);s===void 0&&n in t?delete t[n]:s!==void 0&&(t[n]=s)}),t}function jd(e){return!!e&&typeof e=="object"}function Wd(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function sl(e){return wd(e)||e instanceof RegExp||e instanceof Promise}function fi(e,t){if(Array.isArray(e))return e.map(n=>fi(n,t));const r=[];return Fd(Re(e,(n,i)=>{const s=t[n];if(s===!0)return i;if(s)return sl(i)?i:fi(i,s);r.push(n)}),r)}function Hs(e,t){const r=fi(e,t);return hi(r,t)}function hi(e,t){if(sl(e))return e;const r=Object.keys(e);return Array.isArray(e)?e.map(n=>hi(n,t)):tr(r,2)?e:tr(r,1)&&jd(t)?hi(e[r[0]],t[r[0]]):e}function ol(){let e,t,r=!1;const n=new Promise((i,s)=>{e=o=>(r=!0,i(o)),t=o=>{r=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ol.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}async function Fs(e){return await Promise.resolve().then(()=>e())}function Bd(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const Gd=Bd();function zd({min:e,max:t}){const{min:r,max:n}=Nd({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,s=Math.ceil(Math.log2(i)/8),o=Math.floor(256**s/i)*i,a=new Uint8Array(s);let l;do Gd.getRandomValues(a),l=a.reduce((c,u,d)=>c+u*256**d,0);while(l>=o);return r+l%i}const Us=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function Kd(e=16){let t="";for(let r=0;r<e;r++){const n=zd({min:0,max:Us.length-1});t+=Us[n]}return t}function al({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Hn({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}var qd=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Zd(){return class extends Event{constructor(t,r){super(t,r),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.detail=r.detail}}}const Yd=globalThis.CustomEvent||Zd();function X(){function e(t){var r;return r=class extends Yd{constructor(i){super(t,i)}},qd(r,"TypedEventConstructor"),Object.defineProperty(r,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),r}return e}var Jd=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function mr(e){var t;return t=class extends Event{constructor(n){super(e,n)}},Jd(t,"TypedEventConstructor"),Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}function Qd(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function js(e){return Qd(e).map(t=>e[t])}var Ws;(function(e){e.Upper="upper",e.Lower="lower"})(Ws||(Ws={}));var Bs;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Bs||(Bs={}));function Xd(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Xd();class ll{constructor(){Object.defineProperty(this,"listeners",{enumerable:!0,configurable:!0,writable:!0,value:{}})}getListenerCount(){return js(this.listeners).map(r=>(r==null?void 0:r.size)||0).reduce((r,n)=>r+n,0)}listen(t,r,n={}){const i=this.listeners,s=E(t,"string")?t:t.type;function o(){var l;return((l=i[s])==null?void 0:l.delete(r))||!1}function a(l,c){n.once&&o(),r(l,c)}return i[s]||(i[s]=new Map),i[s].set(r,{listener:a,removeListener:o}),o}removeListener(t,r){const n=E(t,"string")?t:t.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(t){const r=this.listeners[t.type],n=(r==null?void 0:r.size)||0;return r==null||r.forEach(i=>{i.listener(t,i.removeListener)}),n}removeAllListeners(){const r=js(this.listeners).reduce((n,i)=>{const s=(i==null?void 0:i.size)||0;return i==null||i.clear(),n+s},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class Bi extends ll{}function cl(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function Ge(e,t,r){return cl(globalThis,e,t,r)}const Gi=Symbol("no update");function ef(e){return e!==Gi}class Fn extends X()("observable-value-update"){}class tf extends X()("observable-value-resolve"){}class rf extends X()("observable-value-error"){}class nf extends mr("observable-destroy"){}class sf extends mr("observable-callback-call"){}class of extends X()("observable-params-update"){}class vb extends X()("observable-interval-run"){}class bb extends X()("observable-interval-skip"){}class Sb extends X()("observable-interval-rate-limited"){}class ul{constructor(){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new Bi}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"listenerMap",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap})}dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(t,r=this.equalityCheck){return t===Gi?!1:!r||!r(this.value,t)?(this.value=t,this.listenTarget.dispatch(new Fn({detail:t})),!0):!1}listen(t,r){const n=i=>r(i.detail);return this.listenerMap.set(r,n),t&&r(this.value),this.listenTarget.listen(Fn,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(Fn,r)}destroy(){this.listenTarget.dispatch(new nf),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}const af=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function lf(e,t){return e?af.some(r=>{try{return r(e,t)}catch{return!1}}):!1}var Gs;(function(e){e.Upper="upper",e.Lower="lower"})(Gs||(Gs={}));function cf({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}var zs;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(zs||(zs={}));function uf(e){return e?e instanceof Error?e.message:lf(e,"message")?String(e.message):String(e):""}function Yr(e){return e instanceof Error?e:new Error(uf(e))}function df(e,t){try{return ff(e,t),!0}catch{return!1}}function ff(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function mi(){let e,t,r=!1;const n=new Promise((i,s)=>{e=o=>(r=!0,i(o)),t=o=>{r=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${mi.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function hf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const mf=hf();function pf({min:e,max:t}){const{min:r,max:n}=cf({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,s=Math.ceil(Math.log2(i)/8),o=Math.floor(256**s/i)*i,a=new Uint8Array(s);let l;do mf.getRandomValues(a),l=a.reduce((c,u,d)=>c+u*256**d,0);while(l>=o);return r+l%i}const Ks=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function Un(e=16){let t="";for(let r=0;r<e;r++){const n=pf({min:0,max:Ks.length-1});t+=Ks[n]}return t}function zi(e,t){return gd(e,t,gf)}function gf(e,t){return xt(e)===xt(t)&&E(e,"function")?!0:yt(e,t)}class yf extends ul{constructor(t={}){super(),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"waitingForValueDeferredPromise",{enumerable:!0,configurable:!0,writable:!0,value:mi()}),Object.defineProperty(this,"lastSetPromise",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastSetId",{enumerable:!0,configurable:!0,writable:!0,value:Un()}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:this.waitingForValueDeferredPromise.promise}),Object.defineProperty(this,"lastResolvedValue",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.equalityCheck=t.equalityCheck||zi,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=Un();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled()&&(this.waitingForValueDeferredPromise=mi(),super.setValue(this.waitingForValueDeferredPromise.promise,yt)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=Yr(n);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return t===Gi||!super.setValue(t,this.value instanceof Promise?yt:void 0)?!1:(this.lastResolvedValue=t,this.lastSetId=Un(),this.waitingForValueDeferredPromise.isSettled()||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new tf({detail:t})),!0)}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,yt),this.dispatch(new rf({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):ef(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(Yr(r)),!0}}listen(t,r){return super.listen(t,r)}}class ze extends yf{get lastParams(){if(this.internalParams!==ze.NotSet)return this.internalParams}constructor(t={}){super(t),Object.defineProperty(this,"updateCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"internalParams",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.equalityCheck=t.equalityCheck||zi,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:ze.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===ze.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(Yr(t))}finally{this.dispatch(new sf)}}updateLastParams(t){try{return this.internalParams===ze.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new of({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(Yr(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return df(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}Object.defineProperty(ze,"NotSet",{enumerable:!0,configurable:!0,writable:!0,value:Symbol("not set")});function wf(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}var qs;(function(e){e.Upper="upper",e.Lower="lower"})(qs||(qs={}));var Zs;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Zs||(Zs={}));function dl(e,t){return wf(e).filter(n=>{const i=e[n];return t(n,i,e)}).reduce((n,i)=>(n[i]=e[i],n),{})}function vf(e,t){return dl(e,r=>!t.includes(r))}function bf(e,t){return dl(e,r=>t.includes(r))}function Sf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Sf();class it extends Error{}class Ef extends it{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Tf extends it{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class $f extends it{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class ht extends it{}class fl extends it{constructor(t){super(`Invalid unit ${t}`)}}class q extends it{}class Ae extends it{constructor(){super("Zone is an abstract class")}}const g="numeric",de="short",Y="long",Jr={year:g,month:g,day:g},hl={year:g,month:de,day:g},xf={year:g,month:de,day:g,weekday:de},ml={year:g,month:Y,day:g},pl={year:g,month:Y,day:g,weekday:Y},gl={hour:g,minute:g},yl={hour:g,minute:g,second:g},wl={hour:g,minute:g,second:g,timeZoneName:de},vl={hour:g,minute:g,second:g,timeZoneName:Y},bl={hour:g,minute:g,hourCycle:"h23"},Sl={hour:g,minute:g,second:g,hourCycle:"h23"},El={hour:g,minute:g,second:g,hourCycle:"h23",timeZoneName:de},Tl={hour:g,minute:g,second:g,hourCycle:"h23",timeZoneName:Y},$l={year:g,month:g,day:g,hour:g,minute:g},xl={year:g,month:g,day:g,hour:g,minute:g,second:g},Al={year:g,month:de,day:g,hour:g,minute:g},kl={year:g,month:de,day:g,hour:g,minute:g,second:g},Af={year:g,month:de,day:g,weekday:de,hour:g,minute:g},Pl={year:g,month:Y,day:g,hour:g,minute:g,timeZoneName:de},Ml={year:g,month:Y,day:g,hour:g,minute:g,second:g,timeZoneName:de},Cl={year:g,month:Y,day:g,weekday:Y,hour:g,minute:g,timeZoneName:Y},Ol={year:g,month:Y,day:g,weekday:Y,hour:g,minute:g,second:g,timeZoneName:Y};class pr{get type(){throw new Ae}get name(){throw new Ae}get ianaName(){return this.name}get isUniversal(){throw new Ae}offsetName(t,r){throw new Ae}formatOffset(t,r){throw new Ae}offset(t){throw new Ae}equals(t){throw new Ae}get isValid(){throw new Ae}}let jn=null;class hn extends pr{static get instance(){return jn===null&&(jn=new hn),jn}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Fl(t,r,n)}formatOffset(t,r){return Zt(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Ur={};function kf(e){return Ur[e]||(Ur[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Ur[e]}const Pf={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Mf(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,s,o,a,l,c,u]=n;return[o,i,s,a,l,c,u]}function Cf(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:s,value:o}=r[i],a=Pf[s];s==="era"?n[a]=o:T(a)||(n[a]=parseInt(o,10))}return n}let kr={};class Se extends pr{static create(t){return kr[t]||(kr[t]=new Se(t)),kr[t]}static resetCache(){kr={},Ur={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Se.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Fl(t,r,n,this.name)}formatOffset(t,r){return Zt(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=kf(this.name);let[i,s,o,a,l,c,u]=n.formatToParts?Cf(n,r):Mf(n,r);a==="BC"&&(i=-Math.abs(i)+1);const f=pn({year:i,month:s,day:o,hour:l===24?0:l,minute:c,second:u,millisecond:0});let h=+r;const m=h%1e3;return h-=m>=0?m:1e3+m,(f-h)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Ys={};function Of(e,t={}){const r=JSON.stringify([e,t]);let n=Ys[r];return n||(n=new Intl.ListFormat(e,t),Ys[r]=n),n}let pi={};function gi(e,t={}){const r=JSON.stringify([e,t]);let n=pi[r];return n||(n=new Intl.DateTimeFormat(e,t),pi[r]=n),n}let yi={};function If(e,t={}){const r=JSON.stringify([e,t]);let n=yi[r];return n||(n=new Intl.NumberFormat(e,t),yi[r]=n),n}let wi={};function Lf(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let s=wi[i];return s||(s=new Intl.RelativeTimeFormat(e,t),wi[i]=s),s}let Gt=null;function Nf(){return Gt||(Gt=new Intl.DateTimeFormat().resolvedOptions().locale,Gt)}let Js={};function Df(e){let t=Js[e];if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,Js[e]=t}return t}function _f(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=gi(e).resolvedOptions(),i=e}catch{const l=e.substring(0,r);n=gi(l).resolvedOptions(),i=l}const{numberingSystem:s,calendar:o}=n;return[i,s,o]}}function Rf(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function Vf(e){const t=[];for(let r=1;r<=12;r++){const n=b.utc(2009,r,1);t.push(e(n))}return t}function Hf(e){const t=[];for(let r=1;r<=7;r++){const n=b.utc(2016,11,13+r);t.push(e(n))}return t}function Pr(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function Ff(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class Uf{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:s,...o}=n;if(!r||Object.keys(o).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=If(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Yi(t,3);return U(r,this.padTo)}}}class jf{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&Se.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=gi(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Wf{constructor(t,r,n){this.opts={style:"long",...n},!r&&Vl()&&(this.rtf=Lf(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):ch(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Bf={firstDay:1,minimalDays:4,weekend:[6,7]};class O{static fromOpts(t){return O.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,s=!1){const o=t||N.defaultLocale,a=o||(s?"en-US":Nf()),l=r||N.defaultNumberingSystem,c=n||N.defaultOutputCalendar,u=vi(i)||N.defaultWeekSettings;return new O(a,l,c,u,o)}static resetCache(){Gt=null,pi={},yi={},wi={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return O.create(t,r,n,i)}constructor(t,r,n,i,s){const[o,a,l]=_f(t);this.locale=o,this.numberingSystem=r||a||null,this.outputCalendar=n||l||null,this.weekSettings=i,this.intl=Rf(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Ff(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:O.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,vi(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return Pr(this,t,Wl,()=>{const n=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=Vf(s=>this.extract(s,n,"month"))),this.monthsCache[i][t]})}weekdays(t,r=!1){return Pr(this,t,zl,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Hf(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Pr(this,void 0,()=>Kl,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[b.utc(2016,11,13,9),b.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Pr(this,t,ql,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[b.utc(-40,1,1),b.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(t={}){return new Uf(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new jf(t,this.intl,r)}relFormatter(t={}){return new Wf(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Of(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Hl()?Df(this.locale):Bf}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let Wn=null;class G extends pr{static get utcInstance(){return Wn===null&&(Wn=new G(0)),Wn}static instance(t){return t===0?G.utcInstance:new G(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new G(gn(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Zt(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Zt(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Zt(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Gf extends pr{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Me(e,t){if(T(e)||e===null)return t;if(e instanceof pr)return e;if(qf(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?hn.instance:r==="utc"||r==="gmt"?G.utcInstance:G.parseSpecifier(r)||Se.create(e)}else return Ye(e)?G.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Gf(e)}let Qs=()=>Date.now(),Xs="system",eo=null,to=null,ro=null,no=60,io,so=null;class N{static get now(){return Qs}static set now(t){Qs=t}static set defaultZone(t){Xs=t}static get defaultZone(){return Me(Xs,hn.instance)}static get defaultLocale(){return eo}static set defaultLocale(t){eo=t}static get defaultNumberingSystem(){return to}static set defaultNumberingSystem(t){to=t}static get defaultOutputCalendar(){return ro}static set defaultOutputCalendar(t){ro=t}static get defaultWeekSettings(){return so}static set defaultWeekSettings(t){so=vi(t)}static get twoDigitCutoffYear(){return no}static set twoDigitCutoffYear(t){no=t%100}static get throwOnInvalid(){return io}static set throwOnInvalid(t){io=t}static resetCaches(){O.resetCache(),Se.resetCache()}}class ce{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Il=[0,31,59,90,120,151,181,212,243,273,304,334],Ll=[0,31,60,91,121,152,182,213,244,274,305,335];function ie(e,t){return new ce("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Ki(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function Nl(e,t,r){return r+(gr(e)?Ll:Il)[t-1]}function Dl(e,t){const r=gr(e)?Ll:Il,n=r.findIndex(s=>s<t),i=t-r[n];return{month:n+1,day:i}}function qi(e,t){return(e-t+7)%7+1}function Qr(e,t=4,r=1){const{year:n,month:i,day:s}=e,o=Nl(n,i,s),a=qi(Ki(n,i,s),r);let l=Math.floor((o-a+14-t)/7),c;return l<1?(c=n-1,l=rr(c,t,r)):l>rr(n,t,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:a,...yn(e)}}function oo(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:s}=e,o=qi(Ki(n,1,t),r),a=wt(n);let l=i*7+s-o-7+t,c;l<1?(c=n-1,l+=wt(c)):l>a?(c=n+1,l-=wt(n)):c=n;const{month:u,day:d}=Dl(c,l);return{year:c,month:u,day:d,...yn(e)}}function Bn(e){const{year:t,month:r,day:n}=e,i=Nl(t,r,n);return{year:t,ordinal:i,...yn(e)}}function ao(e){const{year:t,ordinal:r}=e,{month:n,day:i}=Dl(t,r);return{year:t,month:n,day:i,...yn(e)}}function lo(e,t){if(!T(e.localWeekday)||!T(e.localWeekNumber)||!T(e.localWeekYear)){if(!T(e.weekday)||!T(e.weekNumber)||!T(e.weekYear))throw new ht("Cannot mix locale-based week fields with ISO-based week fields");return T(e.localWeekday)||(e.weekday=e.localWeekday),T(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),T(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function zf(e,t=4,r=1){const n=mn(e.weekYear),i=se(e.weekNumber,1,rr(e.weekYear,t,r)),s=se(e.weekday,1,7);return n?i?s?!1:ie("weekday",e.weekday):ie("week",e.weekNumber):ie("weekYear",e.weekYear)}function Kf(e){const t=mn(e.year),r=se(e.ordinal,1,wt(e.year));return t?r?!1:ie("ordinal",e.ordinal):ie("year",e.year)}function _l(e){const t=mn(e.year),r=se(e.month,1,12),n=se(e.day,1,Xr(e.year,e.month));return t?r?n?!1:ie("day",e.day):ie("month",e.month):ie("year",e.year)}function Rl(e){const{hour:t,minute:r,second:n,millisecond:i}=e,s=se(t,0,23)||t===24&&r===0&&n===0&&i===0,o=se(r,0,59),a=se(n,0,59),l=se(i,0,999);return s?o?a?l?!1:ie("millisecond",i):ie("second",n):ie("minute",r):ie("hour",t)}function T(e){return typeof e>"u"}function Ye(e){return typeof e=="number"}function mn(e){return typeof e=="number"&&e%1===0}function qf(e){return typeof e=="string"}function Zf(e){return Object.prototype.toString.call(e)==="[object Date]"}function Vl(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Hl(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Yf(e){return Array.isArray(e)?e:[e]}function co(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const s=[t(i),i];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}function Jf(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function kt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function vi(e){if(e==null)return null;if(typeof e!="object")throw new q("Week settings must be an object");if(!se(e.firstDay,1,7)||!se(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!se(t,1,7)))throw new q("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function se(e,t,r){return mn(e)&&e>=t&&e<=r}function Qf(e,t){return e-t*Math.floor(e/t)}function U(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function Pe(e){if(!(T(e)||e===null||e===""))return parseInt(e,10)}function je(e){if(!(T(e)||e===null||e===""))return parseFloat(e)}function Zi(e){if(!(T(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Yi(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function gr(e){return e%4===0&&(e%100!==0||e%400===0)}function wt(e){return gr(e)?366:365}function Xr(e,t){const r=Qf(t-1,12)+1,n=e+(t-r)/12;return r===2?gr(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function pn(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function uo(e,t,r){return-qi(Ki(e,1,t),r)+t-1}function rr(e,t=4,r=1){const n=uo(e,t,r),i=uo(e+1,t,r);return(wt(e)-n+i)/7}function bi(e){return e>99?e:e>N.twoDigitCutoffYear?1900+e:2e3+e}function Fl(e,t,r,n=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(r,o).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function gn(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function Ul(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new q(`Invalid unit value ${e}`);return t}function en(e,t){const r={};for(const n in e)if(kt(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=Ul(i)}return r}function Zt(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${U(r,2)}:${U(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${U(r,2)}${U(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function yn(e){return Jf(e,["hour","minute","second","millisecond"])}const Xf=["January","February","March","April","May","June","July","August","September","October","November","December"],jl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],eh=["J","F","M","A","M","J","J","A","S","O","N","D"];function Wl(e){switch(e){case"narrow":return[...eh];case"short":return[...jl];case"long":return[...Xf];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Bl=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Gl=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],th=["M","T","W","T","F","S","S"];function zl(e){switch(e){case"narrow":return[...th];case"short":return[...Gl];case"long":return[...Bl];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Kl=["AM","PM"],rh=["Before Christ","Anno Domini"],nh=["BC","AD"],ih=["B","A"];function ql(e){switch(e){case"narrow":return[...ih];case"short":return[...nh];case"long":return[...rh];default:return null}}function sh(e){return Kl[e.hour<12?0:1]}function oh(e,t){return zl(t)[e.weekday-1]}function ah(e,t){return Wl(t)[e.month-1]}function lh(e,t){return ql(t)[e.year<0?0:1]}function ch(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&s){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${i[e][0]}`;case-1:return d?"yesterday":`last ${i[e][0]}`;case 0:return d?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),l=a===1,c=i[e],u=n?l?c[1]:c[2]||c[1]:l?i[e][0]:e;return o?`${a} ${u} ago`:`in ${a} ${u}`}function fo(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const uh={D:Jr,DD:hl,DDD:ml,DDDD:pl,t:gl,tt:yl,ttt:wl,tttt:vl,T:bl,TT:Sl,TTT:El,TTTT:Tl,f:$l,ff:Al,fff:Pl,ffff:Cl,F:xl,FF:kl,FFF:Ml,FFFF:Ol};class B{static create(t,r={}){return new B(t,r)}static parseFormat(t){let r=null,n="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(t){return uh[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return U(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(h,m)=>this.loc.extract(t,h,m),o=h=>t.isOffsetFixed&&t.offset===0&&h.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,h.format):"",a=()=>n?sh(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,m)=>n?ah(t,h):s(m?{month:h}:{month:h,day:"numeric"},"month"),c=(h,m)=>n?oh(t,h):s(m?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),u=h=>{const m=B.macroTokenToFormatOpts(h);return m?this.formatWithSystemDefault(t,m):h},d=h=>n?lh(t,h):s({era:h},"era"),f=h=>{switch(h){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return u(h)}};return fo(B.parseFormat(r),f)}formatDurationFromString(t,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=l=>c=>{const u=n(c);return u?this.num(l.get(u),c.length):c},s=B.parseFormat(r),o=s.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),a=t.shiftTo(...o.map(n).filter(l=>l));return fo(s,i(a))}}const Zl=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Nt(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Dt(...e){return t=>e.reduce(([r,n,i],s)=>{const[o,a,l]=s(t,i);return[{...r,...o},a||n,l]},[{},null,1]).slice(0,2)}function _t(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function Yl(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=Pe(t[r+i]);return[n,null,r+i]}}const Jl=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,dh=`(?:${Jl.source}?(?:\\[(${Zl.source})\\])?)?`,Ji=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Ql=RegExp(`${Ji.source}${dh}`),Qi=RegExp(`(?:T${Ql.source})?`),fh=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,hh=/(\d{4})-?W(\d\d)(?:-?(\d))?/,mh=/(\d{4})-?(\d{3})/,ph=Yl("weekYear","weekNumber","weekDay"),gh=Yl("year","ordinal"),yh=/(\d{4})-(\d\d)-(\d\d)/,Xl=RegExp(`${Ji.source} ?(?:${Jl.source}|(${Zl.source}))?`),wh=RegExp(`(?: ${Xl.source})?`);function vt(e,t,r){const n=e[t];return T(n)?r:Pe(n)}function vh(e,t){return[{year:vt(e,t),month:vt(e,t+1,1),day:vt(e,t+2,1)},null,t+3]}function Rt(e,t){return[{hours:vt(e,t,0),minutes:vt(e,t+1,0),seconds:vt(e,t+2,0),milliseconds:Zi(e[t+3])},null,t+4]}function yr(e,t){const r=!e[t]&&!e[t+1],n=gn(e[t+1],e[t+2]),i=r?null:G.instance(n);return[{},i,t+3]}function wr(e,t){const r=e[t]?Se.create(e[t]):null;return[{},r,t+1]}const bh=RegExp(`^T?${Ji.source}$`),Sh=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Eh(e){const[t,r,n,i,s,o,a,l,c]=e,u=t[0]==="-",d=l&&l[0]==="-",f=(h,m=!1)=>h!==void 0&&(m||h&&u)?-h:h;return[{years:f(je(r)),months:f(je(n)),weeks:f(je(i)),days:f(je(s)),hours:f(je(o)),minutes:f(je(a)),seconds:f(je(l),l==="-0"),milliseconds:f(Zi(c),d)}]}const Th={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Xi(e,t,r,n,i,s,o){const a={year:t.length===2?bi(Pe(t)):Pe(t),month:jl.indexOf(r)+1,day:Pe(n),hour:Pe(i),minute:Pe(s)};return o&&(a.second=Pe(o)),e&&(a.weekday=e.length>3?Bl.indexOf(e)+1:Gl.indexOf(e)+1),a}const $h=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function xh(e){const[,t,r,n,i,s,o,a,l,c,u,d]=e,f=Xi(t,i,n,r,s,o,a);let h;return l?h=Th[l]:c?h=0:h=gn(u,d),[f,new G(h)]}function Ah(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const kh=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Ph=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Mh=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function ho(e){const[,t,r,n,i,s,o,a]=e;return[Xi(t,i,n,r,s,o,a),G.utcInstance]}function Ch(e){const[,t,r,n,i,s,o,a]=e;return[Xi(t,a,r,n,i,s,o),G.utcInstance]}const Oh=Nt(fh,Qi),Ih=Nt(hh,Qi),Lh=Nt(mh,Qi),Nh=Nt(Ql),ec=Dt(vh,Rt,yr,wr),Dh=Dt(ph,Rt,yr,wr),_h=Dt(gh,Rt,yr,wr),Rh=Dt(Rt,yr,wr);function Vh(e){return _t(e,[Oh,ec],[Ih,Dh],[Lh,_h],[Nh,Rh])}function Hh(e){return _t(Ah(e),[$h,xh])}function Fh(e){return _t(e,[kh,ho],[Ph,ho],[Mh,Ch])}function Uh(e){return _t(e,[Sh,Eh])}const jh=Dt(Rt);function Wh(e){return _t(e,[bh,jh])}const Bh=Nt(yh,wh),Gh=Nt(Xl),zh=Dt(Rt,yr,wr);function Kh(e){return _t(e,[Bh,ec],[Gh,zh])}const mo="Invalid Duration",tc={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},qh={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...tc},te=146097/400,at=146097/4800,Zh={years:{quarters:4,months:12,weeks:te/7,days:te,hours:te*24,minutes:te*24*60,seconds:te*24*60*60,milliseconds:te*24*60*60*1e3},quarters:{months:3,weeks:te/28,days:te/4,hours:te*24/4,minutes:te*24*60/4,seconds:te*24*60*60/4,milliseconds:te*24*60*60*1e3/4},months:{weeks:at/7,days:at,hours:at*24,minutes:at*24*60,seconds:at*24*60*60,milliseconds:at*24*60*60*1e3},...tc},Ke=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Yh=Ke.slice(0).reverse();function ke(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new x(n)}function rc(e,t){let r=t.milliseconds??0;for(const n of Yh.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function po(e,t){const r=rc(e,t)<0?-1:1;Ke.reduceRight((n,i)=>{if(T(t[i]))return n;if(n){const s=t[n]*r,o=e[i][n],a=Math.floor(s/o);t[i]+=a*r,t[n]-=a*o*r}return i},null),Ke.reduce((n,i)=>{if(T(t[i]))return n;if(n){const s=t[n]%1;t[n]-=s,t[i]+=s*e[n][i]}return i},null)}function Jh(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class x{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?Zh:qh;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||O.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return x.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new q(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new x({values:en(t,x.normalizeUnit),loc:O.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Ye(t))return x.fromMillis(t);if(x.isDuration(t))return t;if(typeof t=="object")return x.fromObject(t);throw new q(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Uh(t);return n?x.fromObject(n,r):x.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Wh(t);return n?x.fromObject(n,r):x.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new q("need to specify a reason the Duration is invalid");const n=t instanceof ce?t:new ce(t,r);if(N.throwOnInvalid)throw new $f(n);return new x({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new fl(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?B.create(this.loc,n).formatDurationFromString(this,t):mo}toHuman(t={}){if(!this.isValid)return mo;const r=Ke.map(n=>{const i=this.values[n];return T(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Yi(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},b.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?rc(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=x.fromDurationLike(t),n={};for(const i of Ke)(kt(r.values,i)||kt(this.values,i))&&(n[i]=r.get(i)+this.get(i));return ke(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=x.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Ul(t(this.values[n],n));return ke(this,{values:r},!0)}get(t){return this[x.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...en(t,x.normalizeUnit)};return ke(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return ke(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return po(this.matrix,t),ke(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Jh(this.normalize().shiftToAll().toObject());return ke(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>x.normalizeUnit(o));const r={},n={},i=this.toObject();let s;for(const o of Ke)if(t.indexOf(o)>=0){s=o;let a=0;for(const c in n)a+=this.matrix[c][o]*n[c],n[c]=0;Ye(i[o])&&(a+=i[o]);const l=Math.trunc(a);r[o]=l,n[o]=(a*1e3-l*1e3)/1e3}else Ye(i[o])&&(n[o]=i[o]);for(const o in n)n[o]!==0&&(r[s]+=o===s?n[o]:n[o]/this.matrix[s][o]);return po(this.matrix,r),ke(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return ke(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of Ke)if(!r(this.values[n],t.values[n]))return!1;return!0}}const lt="Invalid Interval";function Qh(e,t){return!e||!e.isValid?_.invalid("missing or invalid start"):!t||!t.isValid?_.invalid("missing or invalid end"):t<e?_.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class _{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new q("need to specify a reason the Interval is invalid");const n=t instanceof ce?t:new ce(t,r);if(N.throwOnInvalid)throw new Tf(n);return new _({invalid:n})}static fromDateTimes(t,r){const n=Ut(t),i=Ut(r),s=Qh(n,i);return s??new _({start:n,end:i})}static after(t,r){const n=x.fromDurationLike(r),i=Ut(t);return _.fromDateTimes(i,i.plus(n))}static before(t,r){const n=x.fromDurationLike(r),i=Ut(t);return _.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let s,o;try{s=b.fromISO(n,r),o=s.isValid}catch{o=!1}let a,l;try{a=b.fromISO(i,r),l=a.isValid}catch{l=!1}if(o&&l)return _.fromDateTimes(s,a);if(o){const c=x.fromISO(i,r);if(c.isValid)return _.after(s,c)}else if(l){const c=x.fromISO(n,r);if(c.isValid)return _.before(a,c)}}return _.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r!=null&&r.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?_.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Ut).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),n=[];let{s:i}=this,s=0;for(;i<this.e;){const o=r[s]||this.e,a=+o>+this.e?this.e:o;n.push(_.fromDateTimes(i,a)),i=a,s+=1}return n}splitBy(t){const r=x.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,s;const o=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(l=>l*i));s=+a>+this.e?this.e:a,o.push(_.fromDateTimes(n,s)),n=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:_.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return _.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],s=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((l,c)=>l.time-c.time);for(const l of a)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&i.push(_.fromDateTimes(r,l.time)),r=null);return _.merge(i)}difference(...t){return _.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:lt}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Jr,r={}){return this.isValid?B.create(this.s.loc.clone(r),t).formatInterval(this):lt}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:lt}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:lt}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:lt}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:lt}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):x.invalid(this.invalidReason)}mapEndpoints(t){return _.fromDateTimes(t(this.s),t(this.e))}}class zt{static hasDST(t=N.defaultZone){const r=b.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Se.isValidZone(t)}static normalizeZone(t){return Me(t,N.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||O.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||O.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||O.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||O.create(r,n,s)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||O.create(r,n,s)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||O.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||O.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return O.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return O.create(r,null,"gregory").eras(t)}static features(){return{relative:Vl(),localeWeek:Hl()}}}function go(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(x.fromMillis(n).as("days"))}function Xh(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const u=go(l,c);return(u-u%7)/7}],["days",go]],i={},s=e;let o,a;for(const[l,c]of n)r.indexOf(l)>=0&&(o=l,i[l]=c(e,t),a=s.plus(i),a>t?(i[l]--,e=s.plus(i),e>t&&(a=e,i[l]--,e=s.plus(i))):e=a);return[e,i,a,o]}function em(e,t,r,n){let[i,s,o,a]=Xh(e,t,r);const l=t-i,c=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);c.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+l/(o-i)));const u=x.fromObject(s,n);return c.length>0?x.fromMillis(l,n).shiftTo(...c).plus(u):u}const es={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},yo={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},tm=es.hanidec.replace(/[\[|\]]/g,"").split("");function rm(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(es.hanidec)!==-1)t+=tm.indexOf(e[r]);else for(const i in yo){const[s,o]=yo[i];n>=s&&n<=o&&(t+=n-s)}}return parseInt(t,10)}else return t}function ae({numberingSystem:e},t=""){return new RegExp(`${es[e||"latn"]}${t}`)}const nm="missing Intl.DateTimeFormat.formatToParts support";function P(e,t=r=>r){return{regex:e,deser:([r])=>t(rm(r))}}const im=String.fromCharCode(160),nc=`[ ${im}]`,ic=new RegExp(nc,"g");function sm(e){return e.replace(/\./g,"\\.?").replace(ic,nc)}function wo(e){return e.replace(/\./g,"").replace(ic," ").toLowerCase()}function le(e,t){return e===null?null:{regex:RegExp(e.map(sm).join("|")),deser:([r])=>e.findIndex(n=>wo(r)===wo(n))+t}}function vo(e,t){return{regex:e,deser:([,r,n])=>gn(r,n),groups:t}}function Mr(e){return{regex:e,deser:([t])=>t}}function om(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function am(e,t){const r=ae(t),n=ae(t,"{2}"),i=ae(t,"{3}"),s=ae(t,"{4}"),o=ae(t,"{6}"),a=ae(t,"{1,2}"),l=ae(t,"{1,3}"),c=ae(t,"{1,6}"),u=ae(t,"{1,9}"),d=ae(t,"{2,4}"),f=ae(t,"{4,6}"),h=k=>({regex:RegExp(om(k.val)),deser:([V])=>V,literal:!0}),y=(k=>{if(e.literal)return h(k);switch(k.val){case"G":return le(t.eras("short"),0);case"GG":return le(t.eras("long"),0);case"y":return P(c);case"yy":return P(d,bi);case"yyyy":return P(s);case"yyyyy":return P(f);case"yyyyyy":return P(o);case"M":return P(a);case"MM":return P(n);case"MMM":return le(t.months("short",!0),1);case"MMMM":return le(t.months("long",!0),1);case"L":return P(a);case"LL":return P(n);case"LLL":return le(t.months("short",!1),1);case"LLLL":return le(t.months("long",!1),1);case"d":return P(a);case"dd":return P(n);case"o":return P(l);case"ooo":return P(i);case"HH":return P(n);case"H":return P(a);case"hh":return P(n);case"h":return P(a);case"mm":return P(n);case"m":return P(a);case"q":return P(a);case"qq":return P(n);case"s":return P(a);case"ss":return P(n);case"S":return P(l);case"SSS":return P(i);case"u":return Mr(u);case"uu":return Mr(a);case"uuu":return P(r);case"a":return le(t.meridiems(),0);case"kkkk":return P(s);case"kk":return P(d,bi);case"W":return P(a);case"WW":return P(n);case"E":case"c":return P(r);case"EEE":return le(t.weekdays("short",!1),1);case"EEEE":return le(t.weekdays("long",!1),1);case"ccc":return le(t.weekdays("short",!0),1);case"cccc":return le(t.weekdays("long",!0),1);case"Z":case"ZZ":return vo(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return vo(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return Mr(/[a-z_+-/]{1,256}?/i);case" ":return Mr(/[^\S\n\r]/);default:return h(k)}})(e)||{invalidReason:nm};return y.token=e,y}const lm={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function cm(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const s=t[n];let o=n;n==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=r.hour12?"hour12":"hour24");let a=lm[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function um(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function dm(e,t,r){const n=e.match(t);if(n){const i={};let s=1;for(const o in r)if(kt(r,o)){const a=r[o],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(s,s+l))),s+=l}return[n,i]}else return[n,{}]}function fm(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return T(e.z)||(r=Se.create(e.z)),T(e.Z)||(r||(r=new G(e.Z)),n=e.Z),T(e.q)||(e.M=(e.q-1)*3+1),T(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),T(e.u)||(e.S=Zi(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),r,n]}let Gn=null;function hm(){return Gn||(Gn=b.fromMillis(1555555555555)),Gn}function mm(e,t){if(e.literal)return e;const r=B.macroTokenToFormatOpts(e.val),n=ac(r,t);return n==null||n.includes(void 0)?e:n}function sc(e,t){return Array.prototype.concat(...e.map(r=>mm(r,t)))}function oc(e,t,r){const n=sc(B.parseFormat(r),e),i=n.map(o=>am(o,e)),s=i.find(o=>o.invalidReason);if(s)return{input:t,tokens:n,invalidReason:s.invalidReason};{const[o,a]=um(i),l=RegExp(o,"i"),[c,u]=dm(t,l,a),[d,f,h]=u?fm(u):[null,null,void 0];if(kt(u,"a")&&kt(u,"H"))throw new ht("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:c,matches:u,result:d,zone:f,specificOffset:h}}}function pm(e,t,r){const{result:n,zone:i,specificOffset:s,invalidReason:o}=oc(e,t,r);return[n,i,s,o]}function ac(e,t){if(!e)return null;const n=B.create(t,e).dtFormatter(hm()),i=n.formatToParts(),s=n.resolvedOptions();return i.map(o=>cm(o,e,s))}const zn="Invalid DateTime",bo=864e13;function Cr(e){return new ce("unsupported zone",`the zone "${e.name}" is not supported`)}function Kn(e){return e.weekData===null&&(e.weekData=Qr(e.c)),e.weekData}function qn(e){return e.localWeekData===null&&(e.localWeekData=Qr(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function We(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new b({...r,...t,old:r})}function lc(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const s=r.offset(n);return i===s?[n,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function Or(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function jr(e,t,r){return lc(pn(e),t,r)}function So(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:n,month:i,day:Math.min(e.c.day,Xr(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=x.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=pn(s);let[l,c]=lc(a,r,e.zone);return o!==0&&(l+=o,c=e.zone.offset(l)),{ts:l,o:c}}function Ft(e,t,r,n,i,s){const{setZone:o,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const l=t||a,c=b.fromObject(e,{...r,zone:l,specificOffset:s});return o?c:c.setZone(a)}else return b.invalid(new ce("unparsable",`the input "${i}" can't be parsed as ${n}`))}function Ir(e,t,r=!0){return e.isValid?B.create(O.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Zn(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=U(e.c.year,r?6:4),t?(n+="-",n+=U(e.c.month),n+="-",n+=U(e.c.day)):(n+=U(e.c.month),n+=U(e.c.day)),n}function Eo(e,t,r,n,i,s){let o=U(e.c.hour);return t?(o+=":",o+=U(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=":")):o+=U(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=U(e.c.second),(e.c.millisecond!==0||!n)&&(o+=".",o+=U(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=U(Math.trunc(-e.o/60)),o+=":",o+=U(Math.trunc(-e.o%60))):(o+="+",o+=U(Math.trunc(e.o/60)),o+=":",o+=U(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const cc={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},gm={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},ym={ordinal:1,hour:0,minute:0,second:0,millisecond:0},uc=["year","month","day","hour","minute","second","millisecond"],wm=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],vm=["year","ordinal","hour","minute","second","millisecond"];function bm(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new fl(e);return t}function To(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return bm(e)}}function $o(e,t){const r=Me(t.zone,N.defaultZone),n=O.fromObject(t),i=N.now();let s,o;if(T(e.year))s=i;else{for(const c of uc)T(e[c])&&(e[c]=cc[c]);const a=_l(e)||Rl(e);if(a)return b.invalid(a);const l=r.offset(i);[s,o]=jr(e,l,r)}return new b({ts:s,zone:r,loc:n,o})}function xo(e,t,r){const n=T(r.round)?!0:r.round,i=(o,a)=>(o=Yi(o,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(o,a)),s=o=>r.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(r.unit)return i(s(r.unit),r.unit);for(const o of r.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,r.units[r.units.length-1])}function Ao(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}class b{constructor(t){const r=t.zone||N.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new ce("invalid input"):null)||(r.isValid?null:Cr(r));this.ts=T(t.ts)?N.now():t.ts;let i=null,s=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,s]=[t.old.c,t.old.o];else{const a=r.offset(this.ts);i=Or(this.ts,a),n=Number.isNaN(i.year)?new ce("invalid input"):null,i=n?null:i,s=n?null:a}this._zone=r,this.loc=t.loc||O.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new b({})}static local(){const[t,r]=Ao(arguments),[n,i,s,o,a,l,c]=r;return $o({year:n,month:i,day:s,hour:o,minute:a,second:l,millisecond:c},t)}static utc(){const[t,r]=Ao(arguments),[n,i,s,o,a,l,c]=r;return t.zone=G.utcInstance,$o({year:n,month:i,day:s,hour:o,minute:a,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=Zf(t)?t.valueOf():NaN;if(Number.isNaN(n))return b.invalid("invalid input");const i=Me(r.zone,N.defaultZone);return i.isValid?new b({ts:n,zone:i,loc:O.fromObject(r)}):b.invalid(Cr(i))}static fromMillis(t,r={}){if(Ye(t))return t<-bo||t>bo?b.invalid("Timestamp out of range"):new b({ts:t,zone:Me(r.zone,N.defaultZone),loc:O.fromObject(r)});throw new q(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Ye(t))return new b({ts:t*1e3,zone:Me(r.zone,N.defaultZone),loc:O.fromObject(r)});throw new q("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=Me(r.zone,N.defaultZone);if(!n.isValid)return b.invalid(Cr(n));const i=O.fromObject(r),s=en(t,To),{minDaysInFirstWeek:o,startOfWeek:a}=lo(s,i),l=N.now(),c=T(r.specificOffset)?n.offset(l):r.specificOffset,u=!T(s.ordinal),d=!T(s.year),f=!T(s.month)||!T(s.day),h=d||f,m=s.weekYear||s.weekNumber;if((h||u)&&m)throw new ht("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&u)throw new ht("Can't mix ordinal dates with month/day");const y=m||s.weekday&&!h;let k,V,H=Or(l,c);y?(k=wm,V=gm,H=Qr(H,o,a)):u?(k=vm,V=ym,H=Bn(H)):(k=uc,V=cc);let me=!1;for(const Ue of k){const sd=s[Ue];T(sd)?me?s[Ue]=V[Ue]:s[Ue]=H[Ue]:me=!0}const K=y?zf(s,o,a):u?Kf(s):_l(s),pe=K||Rl(s);if(pe)return b.invalid(pe);const Nn=y?oo(s,o,a):u?ao(s):s,[Dn,_n]=jr(Nn,c,n),Ht=new b({ts:Dn,zone:n,o:_n,loc:i});return s.weekday&&h&&t.weekday!==Ht.weekday?b.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Ht.toISO()}`):Ht}static fromISO(t,r={}){const[n,i]=Vh(t);return Ft(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=Hh(t);return Ft(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=Fh(t);return Ft(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(T(t)||T(r))throw new q("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=n,o=O.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,l,c,u]=pm(o,t,r);return u?b.invalid(u):Ft(a,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return b.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=Kh(t);return Ft(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new q("need to specify a reason the DateTime is invalid");const n=t instanceof ce?t:new ce(t,r);if(N.throwOnInvalid)throw new Ef(n);return new b({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=ac(t,O.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return sc(B.parseFormat(t),O.fromObject(r)).map(i=>i.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Kn(this).weekYear:NaN}get weekNumber(){return this.isValid?Kn(this).weekNumber:NaN}get weekday(){return this.isValid?Kn(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?qn(this).weekday:NaN}get localWeekNumber(){return this.isValid?qn(this).weekNumber:NaN}get localWeekYear(){return this.isValid?qn(this).weekYear:NaN}get ordinal(){return this.isValid?Bn(this.c).ordinal:NaN}get monthShort(){return this.isValid?zt.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?zt.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?zt.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?zt.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=pn(this.c),i=this.zone.offset(n-t),s=this.zone.offset(n+t),o=this.zone.offset(n-i*r),a=this.zone.offset(n-s*r);if(o===a)return[this];const l=n-o*r,c=n-a*r,u=Or(l,o),d=Or(c,a);return u.hour===d.hour&&u.minute===d.minute&&u.second===d.second&&u.millisecond===d.millisecond?[We(this,{ts:l}),We(this,{ts:c})]:[this]}get isInLeapYear(){return gr(this.year)}get daysInMonth(){return Xr(this.year,this.month)}get daysInYear(){return this.isValid?wt(this.year):NaN}get weeksInWeekYear(){return this.isValid?rr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?rr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=B.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(G.instance(t),r)}toLocal(){return this.setZone(N.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=Me(t,N.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const s=t.offset(this.ts),o=this.toObject();[i]=jr(o,s,t)}return We(this,{ts:i,zone:t})}else return b.invalid(Cr(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return We(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=en(t,To),{minDaysInFirstWeek:n,startOfWeek:i}=lo(r,this.loc),s=!T(r.weekYear)||!T(r.weekNumber)||!T(r.weekday),o=!T(r.ordinal),a=!T(r.year),l=!T(r.month)||!T(r.day),c=a||l,u=r.weekYear||r.weekNumber;if((c||o)&&u)throw new ht("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&o)throw new ht("Can't mix ordinal dates with month/day");let d;s?d=oo({...Qr(this.c,n,i),...r},n,i):T(r.ordinal)?(d={...this.toObject(),...r},T(r.day)&&(d.day=Math.min(Xr(d.year,d.month),d.day))):d=ao({...Bn(this.c),...r});const[f,h]=jr(d,this.o,this.zone);return We(this,{ts:f,o:h})}plus(t){if(!this.isValid)return this;const r=x.fromDurationLike(t);return We(this,So(this,r))}minus(t){if(!this.isValid)return this;const r=x.fromDurationLike(t).negate();return We(this,So(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=x.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?B.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):zn}toLocaleString(t=Jr,r={}){return this.isValid?B.create(this.loc.clone(r),t).formatDateTime(this):zn}toLocaleParts(t={}){return this.isValid?B.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=Zn(this,o);return a+="T",a+=Eo(this,o,r,n,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?Zn(this,t==="extended"):null}toISOWeekDate(){return Ir(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+Eo(this,o==="extended",r,t,n,s):null}toRFC2822(){return Ir(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Ir(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Zn(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),Ir(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():zn}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return x.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=Yf(r).map(x.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,l=o?t:this,c=em(a,l,s,i);return o?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(b.now(),t,r)}until(t){return this.isValid?_.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(r,n)<=i&&i<=s.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||b.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),xo(r,this.plus(n),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?xo(t.base||b.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(b.isDateTime))throw new q("min requires all arguments be DateTimes");return co(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(b.isDateTime))throw new q("max requires all arguments be DateTimes");return co(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:s=null}=n,o=O.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return oc(o,t,r)}static fromStringExplain(t,r,n={}){return b.fromFormatExplain(t,r,n)}static get DATE_SHORT(){return Jr}static get DATE_MED(){return hl}static get DATE_MED_WITH_WEEKDAY(){return xf}static get DATE_FULL(){return ml}static get DATE_HUGE(){return pl}static get TIME_SIMPLE(){return gl}static get TIME_WITH_SECONDS(){return yl}static get TIME_WITH_SHORT_OFFSET(){return wl}static get TIME_WITH_LONG_OFFSET(){return vl}static get TIME_24_SIMPLE(){return bl}static get TIME_24_WITH_SECONDS(){return Sl}static get TIME_24_WITH_SHORT_OFFSET(){return El}static get TIME_24_WITH_LONG_OFFSET(){return Tl}static get DATETIME_SHORT(){return $l}static get DATETIME_SHORT_WITH_SECONDS(){return xl}static get DATETIME_MED(){return Al}static get DATETIME_MED_WITH_SECONDS(){return kl}static get DATETIME_MED_WITH_WEEKDAY(){return Af}static get DATETIME_FULL(){return Pl}static get DATETIME_FULL_WITH_SECONDS(){return Ml}static get DATETIME_HUGE(){return Cl}static get DATETIME_HUGE_WITH_SECONDS(){return Ol}}function Ut(e){if(b.isDateTime(e))return e;if(e&&e.valueOf&&Ye(e.valueOf()))return b.fromJSDate(e);if(e&&typeof e=="object")return b.fromObject(e);throw new q(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function dc(e){const t=b.fromObject(vf(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function Sm(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}const Em=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Yt(e,t){return e?Em.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function et(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Tm(e){return et(e).map(t=>e[t])}function $m(e,t){return e.includes(t)}function xm(e){return!!e}var ko;(function(e){e.Upper="upper",e.Lower="lower"})(ko||(ko={}));var Po;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Po||(Po={}));function Am(e){return e?e.map(ts).filter(xm).join(`
`):""}function ts(e){return e?e instanceof Error?e.message:Yt(e,"message")?String(e.message):String(e):""}function km(e){return e instanceof Error?e:new Error(ts(e))}function Pm(e,t){const r=km(e);return r.message=`${t}: ${r.message}`,r}function fc(e,t){let r=!1;const n=et(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(et(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function Mm(e,t){try{return Cm(e,t),!0}catch{return!1}}function Cm(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Pt(e){return!!e&&typeof e=="object"}function Om(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Om();function Im(e,t){var a;const r=t==null?void 0:t.constructor,n=(a=e==null?void 0:e.constructor)==null?void 0:a.prototype,i=(e==null?void 0:e.constructor)===r,s=r&&n?n instanceof r:!1,o=i||s;return xt(e)===xt(t)&&o}const hc="__vir__shape__definition__key__do__not__use__in__actual__objects";function mc(e){return Yt(e,hc)}const rs=Symbol("and"),pc=Symbol("instance"),ns=Symbol("enum"),gc=Symbol("exact"),is=Symbol("indexed-keys"),ss=Symbol("or"),os=Symbol("unknown"),Lm=[rs,ns,gc,is,pc,ss,os],yc="__vir__shape__specifier__key__do__not__use__in__actual__objects";function Nm(...e){return br(e,rs)}function Si(...e){return br(e,ns)}function wn(...e){return br(e,is)}function mt(...e){return br(e,ss)}function Dm(e){return br([e],os)}function vn(e){return st(e,rs)}function bn(e){return st(e,pc)}function Sn(e){return st(e,ns)}function En(e){return st(e,gc)}function Tn(e){return st(e,is)}function vr(e){return st(e,ss)}function $n(e){return st(e,os)}function st(e,t){const r=Sr(e);return!!r&&r.specifierType===t}function br(e,t){return{[yc]:!0,specifierType:t,parts:e}}function qe(e,t,r,n){const i=Sr(t);if(i){if(bn(i))return e instanceof i.parts[0];if(vn(i))return i.parts.every(s=>qe(e,s));if(vr(i))return i.parts.some(s=>qe(e,s));if(En(i))return Pt(e)?qe(e,i.parts[0]):e===i.parts[0];if(Sn(i))return Object.values(i.parts[0]).some(s=>s===e);if(Tn(i))return Pt(e)?_m(e,i,!!r)&&Tm(e).every(s=>qe(s,i.parts[0].values)):!1;if($n(i))return!0}return n?t===e:Im(e,t)}function _m(e,t,r){const n=t.parts[0].required,i=t.parts[0].keys;if(r)if(n){const s=as(t);return E(s,"boolean")?s:s.every(o=>et(e).some(a=>qe(a,o,!1,!0)))}else return!0;else return et(e).every(s=>qe(s,i))}function as(e){const t=e.parts[0].keys,r=Sr(t);if(Vn(t))return[t];if(r){if(bn(r))return!1;if(vn(r))return!1;if(vr(r)){const n=r.parts.map(s=>as(wn({...e.parts[0],keys:s})));let i;return n.forEach(s=>{E(s,"boolean")&&(s&&i==null?i=!0:i=!1)}),E(i,"boolean")?i:n.flat().filter(Vn)}else if(En(r)){const n=r.parts.filter(Vn);return n.length!==r.parts.length?!1:n}else{if(Sn(r))return Object.values(r.parts[0]);if(Tn(r))return!1;if($n(r))return!0}}return!1}function Sr(e){if(Pt(e)&&Yt(e,yc)){if(!Yt(e,"parts")||!E(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Yt(e,"specifierType")||!$m(Lm,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class Mo extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function Ei(e,t=!1){return Kt(e)}function Kt(e){const t=Sr(e);if(t)if(bn(t)){const r=t.parts[0];try{return new r}catch(n){throw new Mo(`Failed to create default value for classShape for class '${r.name}': ${ts(n)}`)}}else{if(vr(t)||En(t))return Kt(t.parts[0]);if(vn(t))return t.parts.reduce((r,n)=>Object.assign(r,Kt(n)),{});if(Sn(t))return Object.values(t.parts[0])[0];if(Tn(t)){const r=as(t);return!t.parts[0].required||E(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,Kt(t.parts[0].values)]))}else{if($n(t))return t.parts[0]??{};throw new Mo(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return mc(e)?Ei(e.shape):e instanceof RegExp?e:E(e,"array")?e.map(Kt):Pt(e)?fc(e,(r,n)=>Ei(n)):e}function fe(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return Ei(e)},[hc]:!0}}class re extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function wc(e,t,r={}){try{return xn(e,t,r),!0}catch{return!1}}function xn(e,t,r={},n=""){try{ge({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(i){throw n?Pm(i,n):i}}function Ti(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ge({subject:e,shape:t,keys:r,options:n}){if($n(t))return!0;if(mc(t))return ge({subject:e,shape:t.shape,keys:r,options:n});const i=Ti(r);if(Sr(e))throw new re(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(!qe(e,t,!n.ignoreExtraKeys))throw new re(`Subject does not match shape definition at key ${i}`);if(E(t,"function"))return E(e,"function");if(bn(t))return e instanceof t.parts[0];if(Pt(e)){const o=e,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(u=>[u,!1])),l=[];let c=!1;if(vr(t)){const u=[];c=t.parts.some(d=>{try{const f=ge({subject:e,shape:d,keys:r,options:{...n}});return Object.assign(a,f),!0}catch(f){if(f instanceof re)return u.push(f),!1;throw f}}),!c&&Mm(u,1)&&l.push(u[0])}else if(vn(t))c=t.parts.every(u=>{try{const d=ge({subject:e,shape:u,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(a,d),!0}catch(d){if(d instanceof re)return l.push(d),!1;throw d}});else if(En(t)){const u=ge({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(a,u),c=!0}else{if(Sn(t))throw new re(`Cannot compare an enum specifier to an object at ${i}`);if(E(t,"array")&&E(o,"array"))c=o.every((u,d)=>{const f=t.some(h=>{try{return ge({subject:u,shape:h,keys:[...r,d],options:n}),!0}catch(m){if(m instanceof re)return l.push(m),!1;throw m}});return a[d]=f,f});else if(Tn(t)){const u=fc(e,(d,f)=>(n.ignoreExtraKeys||ge({shape:t.parts[0].keys,subject:d,keys:[...r,d],options:n}),ge({shape:t.parts[0].values,subject:f,keys:[...r,d],options:n}),!0));Object.assign(a,u),c=!0}else{const u=Rm({keys:r,options:n,shape:t,subject:e});Object.assign(a,u),c=!0}}if(l.length)throw new re(Am(l));if(!c){const d=`Failed on key(s): ${Object.keys(a).filter(f=>!a[f]).map(f=>Ti([...r,f])).join(",")}`;throw new re(d)}return n.ignoreExtraKeys||Object.entries(a).forEach(([u,d])=>{if(!d)throw new re(`subject as extra key '${u}' in ${i}.`)}),a}else if(n.exactValues)return e===t;return!0}function Rm({keys:e,options:t,shape:r,subject:n}){const i=Ti(e),s={};if(Pt(r)){const o=new Set(et(r)),a=new Set(et(n));o.forEach(l=>{l in n&&a.add(l)}),t.ignoreExtraKeys||a.forEach(l=>{if(!o.has(l))throw new re(`Subject has extra key '${String(l)}' in ${i}`)}),o.forEach(l=>{var f;const c=r[l],u=vr(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!a.has(l)&&!u&&!d)throw new re(`Subject missing key '${String(l)}' in ${i}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!o.has(l))return;const u=r[l];ge({subject:c,shape:u,keys:[...e,l],options:t}),s[l]=!0})}else throw new re(`shape definition at ${i} was not an object.`);return s}const Vm=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Hm=Vm.reduce((e,t)=>(e[t]=t,e),{}),Fm=N.defaultZone.name,ls=Hm.UTC;var Co;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Co||(Co={}));const Um=["hour","minute","second","millisecond"],jm=fe({hour:14,minute:19,second:7,millisecond:877,timezone:ls}),Wm=fe({year:2023,month:6,day:5,timezone:ls}),Bm=fe(Nm(Wm,jm));var $;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})($||($={}));$.Milliseconds+"",$.Seconds+"",$.Minutes+"",$.Hours+"",$.Days+"",$.Weeks+"",$.Months+"",$.Quarters+"",$.Years+"";$.Milliseconds,$.Seconds,$.Minutes,$.Hours,$.Days,$.Weeks,$.Months,$.Quarters,$.Years;function nr(e,t){if(Gm(e))return{[t]:1/0};if(zm(e))return{[t]:-1/0};const n=x.fromObject(e).as(t);return{[t]:n}}function Gm(e){return Object.values(e).some(t=>t===1/0)}function zm(e){return Object.values(e).some(t=>t===-1/0)}$.Years+"",$.Quarters+"",$.Months+"",$.Weeks+"",$.Days+"",$.Hours+"",$.Minutes+"",$.Seconds+"",$.Milliseconds+"";var Oo;(function(e){e.AdditiveUnits="additive-units",e.EquivalentUnits="equivalent-units"})(Oo||(Oo={}));function Km(e){if(!zt.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function qm(e){xn(e,Bm),Km(e.timezone),dc(e)}function Zm(e){try{return qm(e),!0}catch{return!1}}const Ym=["L-y","LLL-y","LLLL-y"];function Jm(e,t){const r=b.fromISO(e,{zone:t});if(r.isValid)return r;let n;return Ym.some(i=>{const s=b.fromFormat(e,i,{zone:t});return s.isValid?(n=s,!0):!1}),n}function Qm(e,t){const r=ep(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return Sm(r,t)}function Xm(e){const t=b.fromJSDate(new Date(e));if(t.isValid)return t}function ep(e,t){if(Zm(e)&&(e=dc(e).toMillis()),b.isDateTime(e))return e.setZone(t);if(E(e,"number"))return b.fromMillis(e,{zone:ls}).setZone(t);if(E(e,"string")){const r=Jm(e,t);if(r)return r}else if(e instanceof Date)return b.fromJSDate(e).setZone(t);return Xm(e)}const tp={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};bf(tp,Um);N.defaultLocale;$.Milliseconds+"",$.Seconds+"",$.Minutes+"",$.Hours+"",$.Days+"",$.Weeks+"",$.Months+"",$.Quarters+"",$.Years+"";class vc extends ul{constructor(t){super(),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||zi}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const rp=fe({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:Dm()});function Yn(e){return wc(e,rp,{allowExtraKeys:!0})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wr=globalThis,cs=Wr.ShadowRoot&&(Wr.ShadyCSS===void 0||Wr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,us=Symbol(),Io=new WeakMap;let bc=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==us)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(cs&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Io.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Io.set(r,t))}return t}toString(){return this.cssText}};const z=e=>new bc(typeof e=="string"?e:e+"",void 0,us),Br=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new bc(r,e,us)},np=(e,t)=>{if(cs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Wr.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},Lo=cs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return z(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ip,defineProperty:sp,getOwnPropertyDescriptor:op,getOwnPropertyNames:ap,getOwnPropertySymbols:lp,getPrototypeOf:cp}=Object,Ne=globalThis,No=Ne.trustedTypes,up=No?No.emptyScript:"",Jn=Ne.reactiveElementPolyfillSupport,Jt=(e,t)=>e,tn={toAttribute(e,t){switch(t){case Boolean:e=e?up:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ds=(e,t)=>!ip(e,t),Do={attribute:!0,type:String,converter:tn,reflect:!1,hasChanged:ds};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ne.litPropertyMetadata??(Ne.litPropertyMetadata=new WeakMap);class ct extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Do){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&sp(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:s}=op(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const a=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Do}static _$Ei(){if(this.hasOwnProperty(Jt("elementProperties")))return;const t=cp(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Jt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Jt("properties"))){const r=this.properties,n=[...ap(r),...lp(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(Lo(i))}else t!==void 0&&r.push(Lo(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return np(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var s;const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const o=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:tn).toAttribute(r,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,r){var s;const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:tn;this._$Em=i,this[i]=a.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??ds)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(r)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}ct.elementStyles=[],ct.shadowRootOptions={mode:"open"},ct[Jt("elementProperties")]=new Map,ct[Jt("finalized")]=new Map,Jn==null||Jn({ReactiveElement:ct}),(Ne.reactiveElementVersions??(Ne.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=globalThis,rn=Qt.trustedTypes,_o=rn?rn.createPolicy("lit-html",{createHTML:e=>e}):void 0,Sc="$lit$",Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,Ec="?"+Ce,dp=`<${Ec}>`,tt=document,ir=()=>tt.createComment(""),sr=e=>e===null||typeof e!="object"&&typeof e!="function",Tc=Array.isArray,fp=e=>Tc(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Qn=`[ 	
\f\r]`,jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ro=/-->/g,Vo=/>/g,Be=RegExp(`>|${Qn}(?:([^\\s"'>=/]+)(${Qn}*=${Qn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ho=/'/g,Fo=/"/g,$c=/^(?:script|style|textarea|title)$/i,hp=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),mp=hp(1),J=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Uo=new WeakMap,Ze=tt.createTreeWalker(tt,129);function xc(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return _o!==void 0?_o.createHTML(t):t}const pp=(e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":"",o=jt;for(let a=0;a<r;a++){const l=e[a];let c,u,d=-1,f=0;for(;f<l.length&&(o.lastIndex=f,u=o.exec(l),u!==null);)f=o.lastIndex,o===jt?u[1]==="!--"?o=Ro:u[1]!==void 0?o=Vo:u[2]!==void 0?($c.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Be):u[3]!==void 0&&(o=Be):o===Be?u[0]===">"?(o=i??jt,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?Be:u[3]==='"'?Fo:Ho):o===Fo||o===Ho?o=Be:o===Ro||o===Vo?o=jt:(o=Be,i=void 0);const h=o===Be&&e[a+1].startsWith("/>")?" ":"";s+=o===jt?l+dp:d>=0?(n.push(c),l.slice(0,d)+Sc+l.slice(d)+Ce+h):l+Ce+(d===-2?a:h)}return[xc(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class or{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[c,u]=pp(t,r);if(this.el=or.createElement(c,n),Ze.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Ze.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Sc)){const f=u[o++],h=i.getAttribute(d).split(Ce),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:m[2],strings:h,ctor:m[1]==="."?yp:m[1]==="?"?wp:m[1]==="@"?vp:An}),i.removeAttribute(d)}else d.startsWith(Ce)&&(l.push({type:6,index:s}),i.removeAttribute(d));if($c.test(i.tagName)){const d=i.textContent.split(Ce),f=d.length-1;if(f>0){i.textContent=rn?rn.emptyScript:"";for(let h=0;h<f;h++)i.append(d[h],ir()),Ze.nextNode(),l.push({type:2,index:++s});i.append(d[f],ir())}}}else if(i.nodeType===8)if(i.data===Ec)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(Ce,d+1))!==-1;)l.push({type:7,index:s}),d+=Ce.length-1}s++}}static createElement(t,r){const n=tt.createElement("template");return n.innerHTML=t,n}}function Mt(e,t,r=e,n){var o,a;if(t===J)return t;let i=n!==void 0?(o=r._$Co)==null?void 0:o[n]:r._$Cl;const s=sr(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(t=Mt(e,i._$AS(e,t.values),i,n)),t}class gp{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??tt).importNode(r,!0);Ze.currentNode=i;let s=Ze.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new Er(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new bp(s,this,t)),this._$AV.push(c),l=n[++a]}o!==(l==null?void 0:l.index)&&(s=Ze.nextNode(),o++)}return Ze.currentNode=tt,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Er{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Mt(this,t,r),sr(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==J&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):fp(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==A&&sr(this._$AH)?this._$AA.nextSibling.data=t:this.T(tt.createTextNode(t)),this._$AH=t}$(t){var s;const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=or.createElement(xc(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(r);else{const o=new gp(i,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let r=Uo.get(t.strings);return r===void 0&&Uo.set(t.strings,r=new or(t)),r}k(t){Tc(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new Er(this.S(ir()),this.S(ir()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class An{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}_$AI(t,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)t=Mt(this,t,r,0),o=!sr(t)||t!==this._$AH&&t!==J,o&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Mt(this,a[n+l],r,l),c===J&&(c=this._$AH[l]),o||(o=!sr(c)||c!==this._$AH[l]),c===A?t=A:t!==A&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!i&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class yp extends An{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}class wp extends An{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}}class vp extends An{constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){if((t=Mt(this,t,r,0)??A)===J)return;const n=this._$AH,i=t===A&&n!==A||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==A&&(n===A||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class bp{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Mt(this,t)}}const Xn=Qt.litHtmlPolyfillSupport;Xn==null||Xn(or,Er),(Qt.litHtmlVersions??(Qt.litHtmlVersions=[])).push("3.1.4");const Sp=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const s=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new Er(t.insertBefore(ir(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xt extends ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Sp(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return J}}var Ja;Xt._$litElement$=!0,Xt.finalized=!0,(Ja=globalThis.litElementHydrateSupport)==null||Ja.call(globalThis,{LitElement:Xt});const ei=globalThis.litElementPolyfillSupport;ei==null||ei({LitElement:Xt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},He=e=>(...t)=>({_$litDirective$:e,values:t});class Ee{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ep={attribute:!0,type:String,converter:tn,reflect:!1,hasChanged:ds},Tp=(e=Ep,t,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,e),n==="accessor"){const{name:o}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,e)},init(a){return a!==void 0&&this.P(o,void 0,e),a}}}if(n==="setter"){const{name:o}=r;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,e)}}throw Error("Unsupported decorator location: "+n)};function $p(e){return(t,r)=>typeof r=="object"?Tp(e,t,r):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=He(class extends Ee{constructor(e){var t;if(super(e),e.type!==fs.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((n=this.nt)!=null&&n.has(s))&&this.st.add(s);return this.render(t)}const r=e.element.classList;for(const s of this.st)s in t||(r.remove(s),this.st.delete(s));for(const s in t){const o=!!t[s];o===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(o?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return J}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ac=e=>e??A;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $i extends Ee{constructor(t){if(super(t),this.it=A,t.type!==fs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===A||t==null)return this._t=void 0,this.it=t;if(t===J)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}$i.directiveName="unsafeHTML",$i.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class jo extends $i{}jo.directiveName="unsafeSVG",jo.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xp(e,t,r){return e?t(e):r==null?void 0:r(e)}class kc extends Xt{}function Ap(e,t,r){if(t in e)return e[t];{const n=r();return Xa(n)?new Promise(async(i,s)=>{try{const o=await n;e[t]=o,i(o)}catch(o){s(o)}}):(e[t]=n,n)}}const kp=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function hs(e,t){return e?kp.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ve(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Pp(e,t,r){return e.reduce((n,i,s,o)=>{const a=t(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}function Pc(e){return!!e}const Mp={capitalizeFirstLetter:!1};function Cp(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Op(e,t){return t.capitalizeFirstLetter?Cp(e):e}function Ip(e,t=Mp){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Op(n,t)}var Wo;(function(e){e.Upper="upper",e.Lower="lower"})(Wo||(Wo={}));var Bo;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Bo||(Bo={}));function Mc(e){return e?e instanceof Error?e.message:hs(e,"message")?String(e.message):String(e):""}function Lp(e){return e instanceof Error?e:new Error(Mc(e))}function Np(e,t){const r=Lp(e);return r.message=`${t}: ${r.message}`,r}function Cc(e,t){let r=!1;const n=Ve(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Ve(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function Dp(e){return!!e&&typeof e=="object"}function _p(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}_p();function Go(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}var Ct;(function(e){e.Upper="upper",e.Lower="lower"})(Ct||(Ct={}));function Rp(e){return e.toLowerCase()!==e.toUpperCase()}function zo(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const i=e[n]||"";if(!Rp(i)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Ct.Upper&&i!==i.toUpperCase())return!1;if(t===Ct.Lower&&i!==i.toLowerCase())return!1}return!0}function Vp(e){return e.split("").reduce((r,n,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",l=zo(o,Ct.Lower,{blockNoCaseCharacters:!0})||zo(a,Ct.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var Ko;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Ko||(Ko={}));function Hp(e){return!!e&&typeof e=="object"}function Fp(e,t){let r=!1;const n=Go(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Go(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function Up(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Up();function ot(e){if(Hp(e))return Fp(e,(r,n)=>{if(!E(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Vp(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,o=r.startsWith("--")?z(r):r.startsWith("-")?Br`-${z(r)}`:Br`--${z(r)}`;return{name:o,value:Br`var(${o}, ${z(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${ot.name}' function.`)}function jp(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const l=s[a.index];l&&l.splice(0,0,...a.values)}),s.flat()}function Gr(e){return hs(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function ms(e){return hs(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Oc(e){return Pp(e,t=>{if(Gr(t))return t.definition;if(ms(t))return t.tagInterpolationKey||t},Pc)}const Ic=new WeakMap;function Wp(e,t){var i;const r=Oc(t);return(i=Lc(Ic,[e,...r]).value)==null?void 0:i.template}function Bp(e,t,r){const n=Oc(t);return Dc(Ic,[e,...n],r)}function Lc(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=Nc(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Lc(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function Nc(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function Dc(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Nc(e,t,n);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),Dc(l,t,r,n+1)}const Gp=new WeakMap;function _c(e,t,r){const n=Wp(e,t),i=n??r();if(!n){const a=Bp(e,t,i);if(a.result)Gp.set(e,i);else throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=jp(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function Rc(e,t,r,n){const i=[],s=[],o=[],a=[];return e.forEach((c,u)=>{const d=i.length-1,f=i[d],h=u-1,m=t[h];n&&n(c);let y,k=[];if(typeof f=="string"&&(y=r(f,c,m),y)){i[d]=f+y.replacement,o.push(h);const H=y.getExtraValues;k=H?H(m):[],k.length&&H?(i[d]+=" ",k.forEach((me,K)=>{K&&i.push(" ")}),a.push(me=>{const K=me[h],pe=H(K);return{index:h,values:pe}}),i.push(c)):i[d]+=c}y||i.push(c);const V=e.raw[u];y?(s[d]=s[d]+y.replacement+V,k.length&&k.forEach(()=>{s.push("")})):s.push(V)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(c){const u=a.map(d=>d(c)).flat();return{valueIndexDeletions:o,valueInsertions:u}}}}function zp(...[e,t,r]){if(ms(r))return{replacement:r.tagName,getExtraValues:void 0}}function Kp(e,t){return Rc(e,t,zp)}function v(e,...t){const r=_c(e,t,()=>Kp(e,t));return Br(r.strings,...r.values)}const qp={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Vc(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof kc?!0:Vc(r)}function Hc(e,t){const r=e.instanceState;Ve(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Ve(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Zp(e)}function Zp(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function qo(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Yp extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function ps(){return e=>{var t;return t=class extends Yp{constructor(r){super(e,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function Q(){return ps()}function Jp(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=ps()([e,n].join("-"));return r[n]=i,r},{}):{}}function Qp(e){return e?Cc(e,t=>t):{}}const kn=Symbol("element-vir-state-setup");function Xp(e){return Dp(e)?kn in e:!1}function Fc(e,t){t in e||$p()(e,t)}function eg(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Zo(e,t){const r=e;function n(o){t?eg(o,e,e.tagName):Fc(e,o)}function i(o,a){return n(a),r[a]}return new Proxy({},{get:i,set(o,a,l){const c=Xp(l)?l[kn]():l;n(a);const u=r[a];function d(m){o[a]=m,r[a]=m}const f=e.observablePropertyListenerMap[a];if(u!==c&&Yn(u)&&f&&u.removeListener(f),Yn(c))if(f)c.listen(!1,f);else{let m=function(){e.requestUpdate()};var h=m;e.observablePropertyListenerMap[a]=m,c.listen(!1,m)}else Yn(u)&&(e.observablePropertyListenerMap[a]=void 0);return d(c),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function tg({hostClassNames:e,cssVars:t}){return{hostClasses:Cc(e,(r,n)=>({name:z(n),selector:z(`:host(.${n})`)})),cssVars:t}}function rg({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&Ve(t).forEach(s=>{const o=t[s],a=r[s];typeof o=="function"&&(o({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function ng({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function i(o){Ve(o).forEach(a=>{const l=o[a];e.instanceState[a]=l})}return{cssVars:r,slotNames:n,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function ig(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}var sg=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Vt(e){var t;const r=e;if(!E(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!E(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...qp,...r.options},i=Jp(r.tagName,r.events),s=Qp(r.hostClasses);r.hostClasses&&qo(r.tagName,r.hostClasses),r.cssVars&&qo(r.tagName,r.cssVars);const o=r.cssVars?ot(r.cssVars):{},a=ig(r.slotNames),l=typeof r.styles=="function"?r.styles(tg({hostClassNames:s,cssVars:o})):r.styles||v``,c=r.renderCallback;function u(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=(t=class extends kc{createRenderParams(){return ng({element:this,eventsMap:i,cssVars:o,slotNamesMap:a})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Vc(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Vt.name}' to define ${r.tagName}.`),this._hasRendered=!0;const f=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(f)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=c(f);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return rg({host:f.host,hostClassesInit:r.hostClasses,hostClassNames:s,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=Np(f,`Failed to render ${r.tagName}`);return console.error(h),this._lastRenderError=h,Mc(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const f=this.createRenderParams();if(r.initCallback(f)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{Qa(f,"destroy")&&E(f.destroy,"function")&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const f=this.createRenderParams();if(r.cleanupCallback(f)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}assignInputs(f){Hc(this,f)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:Zo(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:Zo(this,!n.allowPolymorphicState)});const f=r.stateInitStatic||{};Ve(f).forEach(h=>{Fc(this,h),this.instanceState[h]=f[h]}),this.definition=d}},sg(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),t);return Object.defineProperties(d,{name:{value:Ip(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof d,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,d),d}function W(){return e=>{const t=e;if(!E(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return Vt({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}class Uc extends ze{}const jc=Uc;function og(e){return{[kn](){return new Uc(e)}}}function Tr(e,t){return ar(e,t),e.element}function ag(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ar(e,t){const r=ag(e),n=r?`: in ${r}`:"";if(e.type!==fs.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function lg(e){const t=He(class extends Ee{constructor(r){super(r),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Tr(r,e)}render(r){return this.element.setAttribute(e,r),J}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function cg(e){if(e instanceof jc)throw new TypeError("Pass AsyncProp.value, not AsyncProp itself.");return!(e instanceof Promise)}function ug(e){if(e instanceof jc)throw new TypeError("Pass AsyncProp.value, not AsyncProp itself.");return e instanceof Error}function L(e,t){return dg(e,t)}const dg=He(class extends Ee{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Tr(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),J}}),Yo="onDomCreated",Wc=He(class extends Ee{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),ar(e,Yo)}update(e,[t]){ar(e,Yo);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),ti="onResize",gs=He(class extends Ee{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),ar(e,ti)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${ti} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){ar(e,ti),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function pt(e,t,r){return xp(e,()=>t,()=>r)}const{attributeDirective:gt,attributeSelector:Tb,attributeName:$b}=lg("data-test-id");Ve({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",isStrictInstance:"",renderCallback:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function fg(e){return{[kn]:e}}function hg(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),W()(r(n))),defineElementNoInputs:n=>(t(n),Vt(r(n)))}}function mg(e,t){return t?Jo(e,t):Jo(void 0,e)}const Jo=He(class extends Ee{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Tr(e,"assign")}render(e,t){return Hc(this.element,t),J}}),pg={};function gg(e,t){return t.map((r,n)=>{const i=e[n],s=e[n+1];if(i&&s){const{shouldHaveTagNameHere:o}=Bc(i,s);if(o&&E(r,"string"))return{tagName:r,tagInterpolationKey:Ap(pg,r,()=>({tagName:r}))}}return r})}function Bc(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),n=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function yg(...[e,t,r]){var l,c,u;const n=Gr(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:s}=Bc(e,t),o=ms(n);if(o&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${(n==null?void 0:n.tagName)||((c=(l=n==null?void 0:n.prototype)==null?void 0:l.constructor)==null?void 0:c.name)||((u=n==null?void 0:n.constructor)==null?void 0:u.name)}'`);if(!s||!o)return;if(i&&n.elementOptions&&!n.elementOptions.ignoreUnsetInputs&&!Gr(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(d){const f=Gr(d)?d.inputs:void 0;return[i&&f?mg(f):void 0].filter(Pc)}}}function wg(e){}function vg(e){return Rc(e.strings,e.values,yg,wg)}function p(e,...t){const r=gg(e,t),n=mp(e,...r),i=_c(e,r,()=>vg(n));return{...n,strings:i.strings,values:i.values}}class Qo extends X()("vir-line-pause"){}class Gc extends X()("vir-line-state-rate-calculated"){}class bg extends X()("vir-line-state-change"){}class Xo extends X()("vir-line-error"){}class Sg extends mr("vir-line-update-skipped"){}class Eg extends mr("vir-line-destroy"){}const zc="animation frames",Tg={allowDuplicateStageNames:!1,enableLogging:!1,targetUpdateRate:void 0,init:{startUpdateLoopImmediately:!1},minUpdateRateCalculationInterval:{milliseconds:500},updateLoopInterval:zc};function $g(e,t){const r=[],n=new Set;if(e.forEach(i=>{const s=i.stageId.name;n.has(s)?r.push(s):n.add(s)}),r.length&&!t.allowDuplicateStageNames)throw new Error(`Duplicate stage names provided to VirLine: ${r.join(", ")}`)}function xg(e){return[e.name,e.version!=null?String(e.version):void 0].filter(_e).join("@")}/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function ea(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ag(e){var t,r;return ea(e)===!1?!1:(t=e.constructor,t===void 0?!0:(r=t.prototype,!(ea(r)===!1||r.hasOwnProperty("isPrototypeOf")===!1)))}var kg=Object.prototype.toString;function Kc(e){if(e===void 0)return"undefined";if(e===null)return"null";const t=typeof e;if(t==="boolean")return"boolean";if(t==="string")return"string";if(t==="number")return"number";if(t==="symbol")return"symbol";if(t==="function")return Ig(e)?"generatorfunction":"function";if(Pg(e))return"array";if(Dg(e))return"buffer";if(Ng(e))return"arguments";if(Cg(e))return"date";if(Mg(e))return"error";if(Og(e))return"regexp";switch(qc(e)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(Lg(e))return"generator";switch(kg.call(e)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")}function qc(e){return typeof e.constructor=="function"?e.constructor.name:null}function Pg(e){return Array.isArray?Array.isArray(e):e instanceof Array}function Mg(e){return e instanceof Error||typeof e.message=="string"&&e.constructor&&typeof e.constructor.stackTraceLimit=="number"}function Cg(e){return e instanceof Date?!0:typeof e.toDateString=="function"&&typeof e.getDate=="function"&&typeof e.setDate=="function"}function Og(e){return e instanceof RegExp?!0:typeof e.flags=="string"&&typeof e.ignoreCase=="boolean"&&typeof e.multiline=="boolean"&&typeof e.global=="boolean"}function Ig(e){return qc(e)==="GeneratorFunction"}function Lg(e){return typeof e.throw=="function"&&typeof e.return=="function"&&typeof e.next=="function"}function Ng(e){try{if(typeof e.length=="number"&&typeof e.callee=="function")return!0}catch(t){if(t.message.indexOf("callee")!==-1)return!0}return!1}function Dg(e){return e.constructor&&typeof e.constructor.isBuffer=="function"?e.constructor.isBuffer(e):!1}const ta=Symbol.prototype.valueOf;function _g(e){switch(Kc(e)){case"array":return e.slice();case"object":return Object.assign({},e);case"date":return new e.constructor(Number(e));case"map":return new Map(e);case"set":return new Set(e);case"buffer":return Fg(e);case"symbol":return Ug(e);case"arraybuffer":return Vg(e);case"float32array":case"float64array":case"int16array":case"int32array":case"int8array":case"uint16array":case"uint32array":case"uint8clampedarray":case"uint8array":return Hg(e);case"regexp":return Rg(e);case"error":return Object.create(e);default:return e}}function Rg(e){const t=e.flags!==void 0?e.flags:/\w+$/.exec(e)||void 0,r=new e.constructor(e.source,t);return r.lastIndex=e.lastIndex,r}function Vg(e){const t=new e.constructor(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t}function Hg(e){return new e.constructor(e.buffer,e.byteOffset,e.length)}function Fg(e){const t=e.length,r=Buffer.allocUnsafe?Buffer.allocUnsafe(t):Buffer.from(t);return e.copy(r),r}function Ug(e){return ta?Object(ta.call(e)):{}}function nn(e,t){switch(Kc(e)){case"object":return jg(e,t);case"array":return Wg(e,t);default:return _g(e)}}function jg(e,t){if(typeof t=="function")return t(e);if(t||Ag(e)){const r=new e.constructor;for(let n in e)r[n]=nn(e[n],t);return r}return e}function Wg(e,t){const r=new e.constructor(e.length);for(let n=0;n<e.length;n++)r[n]=nn(e[n],t);return r}function zr(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,i;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!zr(e[n],t[n]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(n of e.entries())if(!t.has(n[0]))return!1;for(n of e.entries())if(!zr(n[1],t.get(n[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(n of e.entries())if(!t.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),r=i.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[n]))return!1;for(n=r;n--!==0;){var s=i[n];if(!zr(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}class ys extends Bi{get stateType(){throw new Error("Access to 'stateType' is only allowed as a type.")}constructor(t,r,n){super(),Object.defineProperty(this,"stages",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:Tg}),Object.defineProperty(this,"isUpdateLoopPaused",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"currentState",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastStateUpdateHighResTimestamp",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"updateRateCounters",{enumerable:!0,configurable:!0,writable:!0,value:{calculatedAtHighResTimestamp:performance.now(),updateCount:0}}),Object.defineProperty(this,"isCurrentlyUpdating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"stateListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.currentState={...r},n&&this.updateOptions(n),$g(t,this.options),this.options.init.startUpdateLoopImmediately&&this.startUpdateLoop()}updateOptions(t){this.options=il(this.options,t)}startUpdateLoop(){return this.isUpdateLoopPaused?(this.isUpdateLoopPaused=!1,this.dispatch(new Qo({detail:!1})),this.updateRateCounters={calculatedAtHighResTimestamp:performance.now(),updateCount:0},this.runUpdateLoop(),!0):!1}pauseUpdateLoop(){return this.isUpdateLoopPaused?!1:(this.isUpdateLoopPaused=!0,this.dispatch(new Qo({detail:!0})),!0)}destroy(){this.pauseUpdateLoop(),this.removeAllStateListeners(),this.dispatch(new Eg),super.destroy()}listenToState(t,r,n){const i=this.stateListeners.find(o=>Xe(o.selection,r)),s=Hs(this.currentState,r);return i?i.listeners.add(n):this.stateListeners.push({selection:r,lastValue:nn(s),listeners:new Set([n])}),t&&n(s),()=>this.removeStateListener(r,n)}removeAllStateListeners(){this.stateListeners=[]}removeStateListener(t,r){const n=this.stateListeners.findIndex(s=>Xe(s.selection,t)),i=this.stateListeners[n];return!i||!i.listeners.delete(r)?!1:(i.listeners.size||this.stateListeners.splice(n,1),!0)}async triggerUpdate(){if(this.isCurrentlyUpdating){this.dispatch(new Sg),this.options.enableLogging&&console.warn("Update skipped: another is still in progress.");return}this.isCurrentlyUpdating=!0;const t=performance.now(),r={milliseconds:t-this.lastStateUpdateHighResTimestamp};this.lastStateUpdateHighResTimestamp=t,this.updateRateCounters.updateCount++,this.options.enableLogging&&console.info(`updating state at: ${t}`);const n=await this.runStateUpdate(t,r);if(this.options.enableLogging&&console.info(`state update took: ${performance.now()-t}`),this.isCurrentlyUpdating=!1,n)throw n;this.fireStateListeners()}runUpdateLoop(){Fs(()=>this.triggerUpdate());const t=()=>{this.isUpdateLoopPaused||this.runUpdateLoop()};if(this.options.updateLoopInterval===zc)window.requestAnimationFrame(t);else{const r=nr(this.options.updateLoopInterval,$.Milliseconds);setTimeout(t,r.milliseconds)}}async fireStateListeners(){this.dispatch(new bg({detail:this.currentState}));const t=[];this.stateListeners.forEach(r=>{const n=Hs(this.currentState,r.selection);zr(n,r.lastValue)||(r.lastValue=nn(n),r.listeners.forEach(i=>{t.push(Fs(async()=>await i(n)))}))}),await Promise.all(t)}async runStateUpdate(t,r){try{const n={timeSinceLastUpdate:r,updateStartTime:{milliseconds:t}};await $d(this.stages,async i=>{const s={...n,state:this.currentState};try{await i.executor(s)}catch(o){const a=Vs(o,`Stage ${kd({value:xg(i.stageId),wrapper:"'"})} failed`);console.error(a),this.dispatch(new Xo({detail:a}))}}),this.calculateUpdateRate(t);return}catch(n){const i=Vs(n,"Failed to update state");return console.error(i),this.dispatch(new Xo({detail:i})),i}}calculateUpdateRate(t){if(this.options.minUpdateRateCalculationInterval==null)return;const r=nr(this.options.minUpdateRateCalculationInterval,$.Milliseconds).milliseconds,n=t-this.updateRateCounters.calculatedAtHighResTimestamp;if(n>r){const i=this.updateRateCounters.updateCount;this.updateRateCounters={calculatedAtHighResTimestamp:t,updateCount:0},this.dispatch(new Gc({detail:{calculatedAt:Qm(t+performance.timeOrigin,Fm),durationSinceLastCalculation:{milliseconds:n},updateCount:i,updatesPerSecond:i/n*1e3}}))}}}var xi;(function(e){e.fpsDisplay="fps-display"})(xi||(xi={}));const ri=W()({tagName:"vir-fps",styles:v`
        :host {
            justify-content: center;
            align-items: center;
            display: flex;
        }
    `,stateInitStatic:{cleanup:void 0,fps:0},initCallback({updateState:e,state:t,inputs:r}){t.cleanup||e({cleanup:r.virLine.listen(Gc,n=>{e({fps:n.detail.updatesPerSecond})})})},cleanupCallback({state:e,updateState:t}){var r;(r=e.cleanup)==null||r.call(e),t({cleanup:void 0})},renderCallback({state:e,inputs:t}){return p`
            <span ${gt(xi.fpsDisplay)}>
                ${e.fps.toFixed(t.decimals||0)}
            </span>
        `}});class ws extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class ra extends ws{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"GlobalUrlEventsConsolidationError"})}}class Bg extends ws{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}function Gg(e,t,r){if(t in e)return e[t];{const n=r();return Xa(n)?new Promise(async(i,s)=>{try{const o=await n;e[t]=o,i(o)}catch(o){s(o)}}):(e[t]=n,n)}}const zg=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Kg(e,t){return e?zg.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ai(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function qg(e,t,r){return e.reduce((n,i,s,o)=>{const a=t(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}function Zg(e){return!!e}var na;(function(e){e.Upper="upper",e.Lower="lower"})(na||(na={}));function Yg(e,t){return e.split(t)}var ia;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(ia||(ia={}));function Jg(e,t){return Ai(e).filter(n=>{const i=e[n];return t(n,i,e)}).reduce((n,i)=>(n[i]=e[i],n),{})}function ki(e,t){let r=!1;const n=Ai(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Ai(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function Qg(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function Xg(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Xg();function be({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function vs({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}const ni="://";function Zc(...e){const t=e.join("/"),[r,n=""]=t.includes(ni)?t.split(ni):["",t];let i=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((o,a,l,c)=>{if(i)return o;const u=c[l+1];let d=a;const f=u==null?void 0:u.startsWith("?"),h=!a.includes("?")&&f,m=u==="?";if(f||h){i=!0;let y=!1;const k=c.slice(l+2).reduce((V,H)=>(H.includes("#")&&(y=!0),y?V.concat(H):[V,H].join("&")),"");d=[a,u,m?vs({value:k,prefix:"&"}):k].join("")}return o.concat(d)},[]);return[r,r?ni:"",s.join("/")].join("")}var lr;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(lr||(lr={}));var cr;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(cr||(cr={}));function Lr(e,t){return e.map(r=>{if(r!=null)return bt(String(r),t)}).filter(r=>r!=null)}function bt(e,t){return(t==null?void 0:t.encoding)===lr.Decode?decodeURIComponent(e):(t==null?void 0:t.encoding)===lr.Encode?encodeURIComponent(e):e}const ey=fe(wn({keys:"",values:[""],required:!0}));function ty(e,t,r){const n=(r==null?void 0:r.searchParamStrategy)===cr.Clear?{}:ki(e,(o,a)=>E(a,"string")?[a]:a),i=ki(t,(o,a)=>{if((r==null?void 0:r.searchParamStrategy)===cr.Append){const l=n[o],c=E(l,"array")?l:[l];if(a){const u=E(a,"array")?a:[a];return Lr([...c,...u],r)}else return Lr(c,r)}else return E(a,"array")?Lr(a,r):a?Lr([a],r):void 0});return Jg({...n,...i},(o,a)=>!!a)}function Yc(e,t){return E(e,"string")&&!e.includes("?")?{}:(E(e,"string")?e:e instanceof URL?e.search:e.toString()).replace(/^.*\?|\#.*$/,"").split("&").map(s=>{const[o,...a]=Yg(s,"=");return[o,a.length?a.join("="):void 0]}).reduce((s,[o,a])=>{const l=Jc({options:t,key:o,value:a}),c=Gg(s,l.key,()=>[]);return a!=null&&c.push(l.value),s},{})}function ry(e){if(e!=null)return E(e,"array")?[...e]:e===""?[]:[e]}function ny(e,t){const r=qg(Object.entries(e),([n,i])=>{const s=ry(i);return s!=null&&s.length?s.map(o=>{const a=Jc({options:t,key:n,value:o});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?be({value:r.join("&"),prefix:"?"}):""}function Jc({options:e,key:t,value:r}){return{key:bt(t,e),value:bt(String(r),e)}}function Qc({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:s,search:o,username:a}){return[s?s+"://":"",a?a+":":"",r?r+"@":"",Pn({hostname:t,port:i}),bs({hash:e,pathname:n,search:o})].join("")}function Xc({pathname:e}){const t=vs({value:e,prefix:"/"});return t?t.split("/"):[]}function bs({hash:e,pathname:t,search:r}){return[be({value:t,prefix:"/"}),r?be({value:r,prefix:"?"}):"",e?be({value:e,prefix:"#"}):""].join("")}function Pn({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function eu({hostname:e,port:t,protocol:r}){return[r,Pn({hostname:e,port:t})].filter(Zg).join("://")}function sn(e,t){const r=E(e,"string")?e:e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?be({value:bt(n,t),prefix:"#"}):"",s=r.replace(/#.*$/,""),o=s.replace(/^[^\?]*(?:\?|$)/,""),a=o?be({value:bt(o,t),prefix:"?"}):"",l=s.replace(/\?.*$/,""),c=l.includes("://")?l.replace(/:\/\/.*$/,""):"",u=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=u.replace(/@.*/,""),f=u.replace(/^[^@]*@/,""),h=d!==f,[m,...y]=h?d.split(":").reverse():[],k=y.reverse().join("").replace(/[\/:]/g,"")||"",V=(m==null?void 0:m.replace(/[\/:]/g,""))||"",H=f.replace(/[:\/].*/,""),me=f.replace(/^[^\/:]*(\:|\/|$)/,"$1"),K=vs({value:me.replace(/\/.*$/,""),prefix:":"}),pe=bt(me.replace(/^[^\/]*(?:\/|$)/,"/"),t),Nn=Pn({hostname:H,port:K}),Dn=eu({hostname:H,port:K,protocol:c}),_n=Qc({hash:i,hostname:H,password:V,pathname:pe,port:K,protocol:c,search:a,username:k}),Ht=Yc(a),Ue=Xc({pathname:pe});return{fullPath:bs({hash:i,pathname:pe,search:a}),hash:i,host:Nn,hostname:H,href:_n,origin:Dn,password:V,pathname:pe,paths:Ue,port:K,protocol:c,search:a,searchParams:Ht,username:k}}function iy(e,t,r){const n=E(e,"string")?e:e instanceof URL?e.toString():"",i=E(e,"string")||e instanceof URL?t:e,s=E(e,"string")||e instanceof URL?r:t,o=sn(n),a=ki(o,(f,h)=>{if(!Kg(i,f))return h;const m=i[f];return E(m,"number")?String(m):E(m,"string")?f==="hash"&&m?be({value:m,prefix:"#"}):f==="pathname"?be({value:m,prefix:"/"}):m:h});Qa(i,"paths")&&i.paths&&(a.pathname=Zc("",...i.paths));const l=E(i.search,"string")?Yc(be({value:i.search,prefix:"?"})):Qg(i.search||{}),c=ty(a.searchParams,l,{...s,encoding:lr.None}),u=ny(c,s);return{...a,searchParams:c,search:u,paths:Xc(a),fullPath:bs(a),host:Pn(a),origin:eu(a),href:Qc({...a,search:u})}}const sy=fe({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:ey,hash:"",fullPath:"/",href:"/"});({...sy.defaultValue});const oy=fe({basePath:mt("",void 0),sanitizeRoute:e=>e,maxListenerCount:mt(1,void 0),disableWarnings:mt(void 0,!1),isPaused:mt(!1,void 0)}),ay=0;function ly(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==ay)}const Mn="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const cy=globalThis.history.pushState;function sa(...e){const t=cy.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Mn)),t}const uy=globalThis.history.replaceState;function oa(...e){const t=uy.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Mn)),t}function dy(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){{if(globalThis.history.pushState===sa)throw new ra("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===oa)throw new ra("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=sa,globalThis.history.replaceState=oa,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Mn))})}}function ii(e,t){const r=sn(e),n=Hn({value:Hn({value:r.pathname,prefix:al({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],s=Object.keys(r.searchParams).length?r.searchParams:void 0,o=r.hash?Hn({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:o}}class fy{constructor(t){Object.defineProperty(this,"innerObservable",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"removeGlobalListener",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sanitizationDepth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),xn(t,oy),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new vc({defaultValue:r,equalityCheck:()=>!1}),dy(),this.removeGlobalListener=cl(globalThis,Mn,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Bg("Looping route sanitization detected; aborting window URL change listener.");const n=ii(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);Xe(i,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Zc(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(ii(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r=ii(globalThis.location.href,void 0),n={...r,...t},i=this.sanitizeRoute(n),o=this.routeIncludesBasePath(r)&&!this.routeIncludesBasePath(i)&&this.params.basePath?{...i,paths:[this.params.basePath,...i.paths]}:i;return iy(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?al({value:o.hash,prefix:"#"}):"#"},{searchParamStrategy:cr.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=sn(n);return this.params.isPaused||!r.force&&Xe(sn(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return ly(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new ws(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}var Je=(e=>(e.Home="home",e.Play="play",e.Options="options",e))(Je||{});const ur={paths:["home"],hash:void 0,search:void 0};function hy(){return new fy({basePath:"forward-game",sanitizeRoute(e){return nl(e.paths[0],Je)?{...ur,paths:[e.paths[0]]}:ur}})}const dr=ps()("change-forward-game-route"),aa=Vt({tagName:"vir-loading",renderCallback(){return"Loading..."}});function my(e){return e.map(t=>({value:t,sort:Kd()})).sort((t,r)=>t.sort.localeCompare(r.sort)).map(({value:t})=>t)}function py(e){var r;return[...e.children,...((r=e.shadowRoot)==null?void 0:r.children)??[]]}function gy(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function si(e){return gy(e).map(t=>[t,e[t]])}var la;(function(e){e.Upper="upper",e.Lower="lower"})(la||(la={}));var ca;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(ca||(ca={}));function yy(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}yy();const tu={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},wy=Object.keys(tu),ru={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},vy=Object.keys(ru),nu={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},by=Object.keys(nu),Sy=[si(tu).map(([e,t])=>[t,e]),si(ru).map(([e,t])=>[t,e]),si(nu).map(([e,t])=>[t,e])].flat();new Map(Sy);Array.from(new Set([...wy,...by,...vy].sort()));function er(e){const t=e.query.split(" ").filter(_e);if(!e.query)return e.element instanceof Element?e.element:e.element.host;if(t.length>1)return Pi({...e,queries:t});if("shadowRoot"in e.element&&e.element.shadowRoot)return er({...e,element:e.element.shadowRoot});const r=Array.from(e.element.querySelectorAll("*")).filter(n=>!!n.shadowRoot).map(n=>n.shadowRoot);if(e.all){const n=Array.from(e.element.querySelectorAll(e.query)),i=r.map(s=>er({...e,all:!0,element:s})).flat();return[...n,...i]}else{const n=e.element.querySelector(e.query);if(n)return n;for(let i=0;i<r.length;i++){const s=r[i],o=er({...e,element:s});if(o)return o}return}}function Pi(e){const t=e.queries[0];if(!t)throw new Error(`Somehow the first query was empty in '[${e.queries.join(",")}]' for query '${e.query}'`);const r=er({...e,query:t});return e.queries.length<=1?r:E(r,"array")?r.map(n=>Pi({...e,element:n,queries:e.queries.slice(1)})).flat().filter(_e):r?Pi({...e,element:r,queries:e.queries.slice(1)}):void 0}function Ss(e){return Wc(t=>{const r=er({element:t,query:e,all:!1});Qe(r,HTMLElement,`Failed to find first '${e}' to focus.`),r.focus()})}const ua=W()({tagName:"vir-players-actions-bindings-debug",styles:v`
        h3 {
            margin: 4px;
        }
    `,renderCallback({inputs:e}){return nt(e.playersActionsBindingsMap).map(([t,r])=>p`
                    <h3>Player ${t}</h3>
                    <${da.assign({actionsBindingsMap:r})}></${da}>
                `)}}),da=W()({tagName:"vir-actions-bindings-debug",styles:v`
        h4 {
            margin: 4px;
        }
    `,renderCallback({inputs:e}){return nt(e.actionsBindingsMap).map(([t,r])=>{const n=r.map(i=>p`
                        <tr>
                            <td>${i.deviceKey}:</td>
                            <td>${i.inputName}</td>
                        </tr>
                    `);return p`
                    <section class="binding">
                        <h4>${t}</h4>
                        <table><tbody>${n}</tbody></table>
                    </section>
                `})}}),iu={Gamepad1:"0",Gamepad2:"1",Gamepad3:"2",Gamepad4:"3"};function su(e){return Ed(Object.values(iu),e)}const Ey={Mouse:"mouse",Keyboard:"keyboard"},M={...Ey,...iu};var D;(function(e){e.Keyboard="keyboard",e.Mouse="mouse",e.Gamepad="gamepad"})(D||(D={}));var Ot;(function(e){e.Button="button",e.Axe="axe"})(Ot||(Ot={}));function qt(e){return`button-${e}`}function Mi(e){return`axe-${e}`}function Ty(e){const[t]=Ld(e,"-");if(nl(t,Ot))return t;throw new Error(`Failed to parse input type from input named '${e}'`)}const $y=.01;function xy({value:e,gamepadDeadZone:t,globalDeadZone:r}){const n=t??(r||$y);return Math.abs(e)>n?e:0}function fa({gamepadInput:e,inputIndex:t,deadZones:r,globalDeadZone:n}){const i=E(e,"number"),s=i?Mi(t):qt(t),o=i?e:e.value;return{inputName:s,value:xy({value:o,gamepadDeadZone:r[s],globalDeadZone:n}),inputType:i?Ot.Axe:Ot.Button}}function Ay({gamepad:e,deadZoneSettings:t,globalDeadZone:r}){const n=String(e.index);if(!su(n))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${e.index}'`);const i=t[e.id]||{},s=e.axes.map((l,c)=>fa({gamepadInput:l,inputIndex:c,deadZones:i,globalDeadZone:r})),o=e.buttons.map((l,c)=>fa({deadZones:i,gamepadInput:l,globalDeadZone:r,inputIndex:c})),a=tl([...o,...s].map(l=>[l.inputName,l]));return{axes:s,buttons:o,isConnected:e.connected,gamepadName:e.id,deviceKey:n,mapping:e.mapping,serialized:!0,timestamp:e.timestamp,inputsByName:a}}const Nr=window.navigator;function ky({deadZoneSettings:e,globalDeadZone:t}){return Array.from(At(Nr,"webkitGetGamepads")?Nr.webkitGetGamepads():At(Nr,"getGamepads")?Nr.getGamepads():[]).filter(r=>!!r).map(r=>Ay({gamepad:r,deadZoneSettings:e,globalDeadZone:t}))}function Py({deadZoneSettings:e,globalDeadZone:t}){return ky({deadZoneSettings:e,globalDeadZone:t}).reduce((i,s)=>{const o=s.deviceKey;return su(o)?(i[o]=s,i):(console.warn(`ignoring gamepad index '${o}'`),i)},{})}function My(e){const t={},r={deviceKey:e.deviceKey,deviceName:e.gamepadName,deviceType:D.Gamepad};return Object.values(e.inputsByName).forEach(n=>{n.value&&(t[n.inputName]={...r,details:n,inputName:n.inputName,inputValue:n.value})}),t}function Cy(e){return Re(e,(t,r)=>({currentInputs:My(r),deviceDetails:r,deviceName:r.gamepadName,deviceKey:r.deviceKey,deviceType:D.Gamepad}))}function ha(e){return Zr(e).map(n=>n==null?void 0:n.currentInputs).filter(_e).map(n=>Zr(n)).flat()}const ma={deviceDetails:void 0,deviceKey:M.Keyboard,deviceName:"keyboard",deviceType:D.Keyboard},Dr={deviceDetails:void 0,deviceKey:M.Mouse,deviceName:"mouse",deviceType:D.Mouse},ou={[M.Gamepad1]:D.Gamepad,[M.Gamepad2]:D.Gamepad,[M.Gamepad3]:D.Gamepad,[M.Gamepad4]:D.Gamepad,[M.Keyboard]:D.Keyboard,[M.Mouse]:D.Mouse};var Oy=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Cn(){return(e,t)=>{var r;const n=Id(e,{capitalizeFirstLetter:!0}),i=(r=class extends X()(e){constructor(){super(...arguments),Object.defineProperty(this,"eventType",{enumerable:!0,configurable:!0,writable:!0,value:e})}static constructIfDataIsNew(s,...o){const a=i.getNewData(...o);if(a)return new i({detail:{timestamp:s,inputs:a}})}},Oy(r,"TimedEventConstructor"),Object.defineProperty(r,"getNewData",{enumerable:!0,configurable:!0,writable:!0,value:t}),r);return Object.defineProperty(i,"name",{value:n,writable:!0}),i}}function Iy(...[e,t]){return t}const Ly=Cn()("all-devices-updated",Iy);function pa(e,t){return e.deviceKey===t.deviceKey&&e.inputName===t.inputName&&e.inputName===t.inputName&&e.inputValue===t.inputValue}function Ny(...[e,t]){const r=ha(t),n=e?ha(e):[];if(!Xe(n,r)){const i=r.filter(o=>!n.find(a=>pa(a,o))),s=n.filter(o=>!r.find(a=>pa(a,o)));return{newInputs:i,removedInputs:s,allCurrentInputs:r}}}const Es=Cn()("current-inputs-changed",Ny);function Dy(...[e,t]){if(!e)return[];const r=De(e).filter(n=>!At(t,n));if(r.length)return r.map(n=>e[n]).filter(_e)}const au=Cn()("devices-removed",Dy);function _y(...[e,t]){if(!e)return Zr(t).filter(_e);const r=De(t).filter(n=>!At(e,n));if(r.length)return r.map(n=>t[n]).filter(_e)}const lu=Cn()("new-devices-added",_y),cu=[Ly,lu,au,Es];Object.fromEntries(cu.map(e=>[e.type,e]));const ga="code";class $r extends ll{constructor(t={}){super(),Object.defineProperty(this,"currentKeyboardInputs",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"currentMouseInputs",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"gamepadDeadZoneSettings",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"lastReadInputDevices",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"loopIsRunning",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"globalDeadZone",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"removeGlobalListeners",{enumerable:!0,configurable:!0,writable:!0,value:()=>{}}),Object.defineProperty(this,"currentLoopIndex",{enumerable:!0,configurable:!0,writable:!0,value:-1}),Object.defineProperty(this,"lastEventDetails",{enumerable:!0,configurable:!0,writable:!0,value:{}}),t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),t.globalDeadZone&&(this.globalDeadZone=t.globalDeadZone),this.attachWindowListeners(t),this.readAllDevices(),t.startLoopImmediately&&this.startPollingLoop()}attachWindowListeners(t){const r=[Ge("keydown",n=>{const i=qt(n[ga]);if(this.currentKeyboardInputs.hasOwnProperty(i))return;const s={deviceType:D.Keyboard,details:{keyboardEvent:n},deviceKey:M.Keyboard,deviceName:ma.deviceName,inputName:i,inputValue:1};this.currentKeyboardInputs[i]=s}),Ge("keyup",n=>{delete this.currentKeyboardInputs[qt(n[ga])]}),Ge("mousedown",n=>{const i=qt(n.button);this.currentMouseInputs.hasOwnProperty(i)||(this.currentMouseInputs[i]={deviceType:D.Mouse,details:{mouseEvent:n},deviceName:Dr.deviceName,deviceKey:M.Mouse,inputName:i,inputValue:1})}),Ge("mouseup",n=>{delete this.currentMouseInputs[qt(n.button)]}),t.disableMouseMovement?void 0:Ge("mousemove",n=>{const i=Mi("x"),s=Mi("y");this.currentMouseInputs[i]={deviceType:D.Mouse,details:{mouseEvent:n},deviceName:Dr.deviceName,deviceKey:M.Mouse,inputName:i,inputValue:n.clientX},this.currentMouseInputs[s]={deviceType:D.Mouse,details:{mouseEvent:n},deviceName:Dr.deviceName,deviceKey:M.Mouse,inputName:s,inputValue:n.clientY}})];this.removeGlobalListeners=()=>{r.forEach(n=>n==null?void 0:n())}}runPollingLoop(t,r){this.loopIsRunning&&this.currentLoopIndex===t&&(this.readAllDevices(this.gamepadDeadZoneSettings,r),requestAnimationFrame(n=>{this.runPollingLoop(t,n)}))}fireEvents(t,r,n){cu.forEach(i=>{const s=i.constructIfDataIsNew(t,r,n);s&&(this.lastEventDetails[s.type]={constructor:i,constructorInputs:[t,r,n]},this.dispatch(s))})}getCurrentDeviceValues(t,r){const n=Py({deadZoneSettings:t,globalDeadZone:r}),i=Cy(n);return{[M.Keyboard]:{...ma,currentInputs:{...this.currentKeyboardInputs}},[M.Mouse]:{...Dr,currentInputs:{...this.currentMouseInputs}},...i}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}readAllDevices(t=this.gamepadDeadZoneSettings,r=performance.now(),n=this.globalDeadZone){const i=this.getCurrentDeviceValues(t,n),s=this.lastReadInputDevices;return this.lastReadInputDevices=i,this.fireEvents(r,s,i),i}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}function Ry(e){return tl(nt(e).map(([t,r])=>[r,t]))}const uu={stageId:{name:"read actions"},executor({state:e,timeSinceLastUpdate:t}){if(!e.playersActionsBindings||!Object.keys(e.playersActionsBindings).length||!e.rawInputs||!Object.keys(e.rawInputs).length){e.playersActiveActions={};return}const r=Ry(e.deviceKeyMap||{}),n=Re(e.playersActionsBindings,(i,s)=>{var o;return Vy({actionsBindingsMap:s,activeActionsMap:(o=e.playersActiveActions)==null?void 0:o[i],rawInputs:e.rawInputs,reversedDeviceKeyMap:r,timeSinceLastUpdate:t})});e.playersActiveActions=n}};function Vy({actionsBindingsMap:e,activeActionsMap:t,reversedDeviceKeyMap:r,rawInputs:n,timeSinceLastUpdate:i}){return nt(e).reduce((s,[o,a])=>{const l=Td(a,c=>{var f;const u=r[c.deviceKey]??c.deviceKey,d=(f=n==null?void 0:n[u])==null?void 0:f[c.inputName];if((d==null?void 0:d.direction)===c.direction)return d},_e);if(l.length){const c=l.reduce((m,y)=>m+y.inputValue,0),u=t==null?void 0:t[o],d=u==null?void 0:u.holdDuration,f=d?d.milliseconds+i.milliseconds:0,h={holdDuration:{milliseconds:Math.round(f)},value:c,actCount:(u==null?void 0:u.actCount)||0,lastActDuration:(u==null?void 0:u.lastActDuration)||{milliseconds:0}};s[o]=h}return s},{})}var C;(function(e){e.Positive="positive",e.Flat="flat",e.Negative="negative"})(C||(C={}));function du(e){return e===0?C.Flat:e<0?C.Negative:C.Positive}function Hy(e){return Re(e,(t,r)=>({deviceKey:t,deviceName:r.deviceName,deviceType:r.deviceType}))}const Ts={stageId:{name:"read raw input"},executor({state:e,timeSinceLastUpdate:t}){const r=e.deviceHandler.readAllDevices(),n=Re(r,(s,o)=>{const a=o;return Re(a.currentInputs,(l,c)=>{var h,m;const u=du(c.inputValue),d=(m=(h=e.rawInputs)==null?void 0:h[s])==null?void 0:m[l],f=(d==null?void 0:d.direction)===u?{milliseconds:d.duration.milliseconds+t.milliseconds}:{milliseconds:0};return{deviceKey:s,deviceName:a.deviceName,deviceType:a.deviceType,direction:u,duration:f,inputName:l,inputValue:c.inputValue}})}),i=Hy(r);e.rawInputs=n,e.currentInputDevices=i}},Fy={1:{jump:[{deviceKey:"keyboard",direction:C.Positive,inputName:"button-Space"}],left:[{deviceKey:"keyboard",direction:C.Positive,inputName:"button-KeyA"},{deviceKey:"keyboard",direction:C.Positive,inputName:"button-KeyJ"},{deviceKey:"keyboard",direction:C.Positive,inputName:"button-ArrowLeft"}],right:[{deviceKey:"keyboard",direction:C.Positive,inputName:"button-KeyD"},{deviceKey:"keyboard",direction:C.Positive,inputName:"button-KeyL"},{deviceKey:"keyboard",direction:C.Positive,inputName:"button-ArrowRight"}]}},oi=W()({tagName:"vir-read-actions-stage-debug",styles:v`
        :host {
            display: flex;
            gap: 16px;
            flex-direction: column;
        }

        h2 {
            margin: 4px;
        }

        .no-actions {
            opacity: 0.3;
            font-weight: bold;
        }
    `,stateInitStatic:{deviceHandler:void 0,pipeline:void 0,activeActions:{}},initCallback({state:e,updateState:t,inputs:r}){const n=e.deviceHandler||r.inputDeviceHandler||new $r;e.deviceHandler||t({deviceHandler:n});const i=e.pipeline||new ys([Ts,uu],{deviceHandler:n,playersActionsBindings:r.actionBindings||Fy},{init:{startUpdateLoopImmediately:!0}});e.pipeline||t({pipeline:i}),i.listenToState(!0,{playersActiveActions:!0},s=>{t({activeActions:s||{}})})},cleanupCallback({inputs:e,state:t,updateState:r}){var n,i;e.inputDeviceHandler||(n=t.deviceHandler)==null||n.destroy(),(i=t.pipeline)==null||i.destroy(),r({deviceHandler:void 0,pipeline:void 0})},renderCallback({state:e}){if(!e.deviceHandler||!e.pipeline)return A;const t=Object.entries(e.activeActions).map(([i,s])=>p`
                    <section class="action">
                        <h3>${i}</h3>
                        <pre>${JSON.stringify(s,null,4)}</pre>
                    </section>
                `),r=!t.length,n=e.pipeline.currentState.playersActionsBindings||{};return p`
            <h2>Action Bindings</h2>
            <${ua.assign({playersActionsBindingsMap:n})}></${ua}>
            <h2>Active Actions</h2>
            ${r?p`
                      <p class="no-actions">No inputs</p>
                  `:t}
        `},options:{ignoreUnsetInputs:!0}});W()({tagName:"vir-read-raw-input-stage-debug",styles:v`
        :host {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .device {
            min-width: 500px;
        }

        .no-inputs {
            opacity: 0.3;
            font-weight: bold;
        }
    `,stateInitStatic:{deviceHandler:void 0,pipeline:void 0,rawInputs:{}},initCallback({state:e,updateState:t,inputs:r}){const n=e.deviceHandler||r.inputDeviceHandler||new $r;e.deviceHandler||t({deviceHandler:n});const i=e.pipeline||new ys([Ts],{deviceHandler:n},{init:{startUpdateLoopImmediately:!0}});e.pipeline||t({pipeline:i}),i.listenToState(!0,{rawInputs:!0},s=>{t({rawInputs:s||{}})})},cleanupCallback({inputs:e,state:t,updateState:r}){var n,i;e.inputDeviceHandler||(n=t.deviceHandler)==null||n.destroy(),(i=t.pipeline)==null||i.destroy(),r({deviceHandler:void 0,pipeline:void 0})},renderCallback({state:e}){return!e.deviceHandler||!e.pipeline?A:Object.entries(e.rawInputs).map(([t,r])=>{const i=!r||Object.keys(r).length===0?p`
                          <p class="no-inputs">No inputs</p>
                      `:p`
                          <pre>${JSON.stringify(r,null,4)}</pre>
                      `;return p`
                    <section class="device">
                        <b>${t}</b>
                        ${i}
                    </section>
                `})},options:{ignoreUnsetInputs:!0}});const fu={[D.Gamepad]:"🎮",[D.Keyboard]:"⌨️",[D.Mouse]:"🖱"},Uy={[C.Flat]:"",[C.Negative]:"➖",[C.Positive]:"➕"},on="group";function jy(e,t,r){return[e,t,r].filter(n=>n!==void 0).join(",")||""}function Wy(e){const[t,r,n]=e.split(",");return r?{type:"2d",xCord:_s(t),yCord:_s(r),isGroup:n===on}:{type:"1d",isGroup:t===on}}function By(e,t){Object.entries(t).forEach(([r,n])=>{E(n,"boolean")&&n?e.setAttribute(r,""):E(n,"boolean")&&!n||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const Gy=He(class extends Ee{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastKey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Tr(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),J}}),St={name:"data-nav",js(e){return e===""?`[${St.name}]`:`[${St.name}*="${String(e).replace(/"/g,"'")}"]`},css(e){return v`
            ${z(St.js(e))}
        `}},ut="nav-activated",Ci={js:{click(e){return`${e}.${ut}`},selected(e){return`${e}:focus`}},css:{click(e){return v`
                ${z(Ci.js.click(e))}
            `},selected(e){return v`
                ${z(Ci.js.selected(e))}
            `}}},zy={activateKeys:["Space","Return","Enter"]};function Ky(){hu=Wd(zy)}let hu;Ky();function ya(e){return hu.activateKeys.some(t=>{const r=t.toLowerCase();return r===e.key.toLowerCase()||r===e.code.toLowerCase()})}function wa(e,t){const r=jy(e,t);return Gy(`${e}-${t}`,n=>{const i=n.hasAttribute("tabindex")||e===on?{}:{tabindex:0},s={[St.name]:r,...i};Qe(n,HTMLElement),By(n,s),e!==on&&(n.style.getPropertyValue("cursor")||n.style.setProperty("cursor","pointer"),n.addEventListener("mousemove",o=>{o.target===n&&n.focus()},!0),n.addEventListener("mouseleave",o=>{o.target===n&&n.blur()},!0),n.addEventListener("mousedown",o=>{o.target===n&&n.classList.add(ut)},!0),n.addEventListener("mouseup",o=>{o.target===n&&n.classList.remove(ut)},!0),n.addEventListener("blur",()=>{n.classList.remove(ut)},!0),n.addEventListener("keydown",o=>{o.target===n&&ya(o)&&n.classList.add(ut)},!0),n.addEventListener("keyup",o=>{o.target===n&&ya(o)&&n.classList.remove(ut)},!0))})}function qy(e,t){return mu([],e,t)}function mu(e,t,r){return!t||t.type==="child"?!1:t.type==="1d"?va(t.children,t,0,e,r):t.children.some((n,i)=>va(n,t,i,e,r))}function va(e,t,r,n,i){return e.some((s,o)=>{const a=At(t,"isRoot")?n:n.concat(t);return i(a,s,{x:o,y:r})?!0:mu(a,s,i)})}function Zy(e){return e.reverse().find(t=>!t.isGroup)}function fr(e){if(!e)return;let t,r,n;qy(e,(o,a,l)=>a.element.matches(":focus")?(t=o,r=a,n=l,!0):!1);const i=t?t.slice(-1)[0]||e:void 0,s=t?Zy(t)||e:void 0;if(!(!r||!i||!n||!s||!t))return{node:r,parent:i,nonGroupParent:s,ancestors:t}}function hr(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function Yy(e){var n;if(!e)return{success:!1,reason:"no nav tree"};const t=fr(e);if(!t)return{success:!1,reason:"no focused node to enter into"};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into"};const r=t.node.type==="1d"?t.node.children[0]:(n=t.node.children[0])==null?void 0:n[0];return r?(hr(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}):{success:!1,reason:"failed to find first child to enter into"}}function Jy(e){if(!e)return{success:!1,reason:"no nav tree"};const t=fr(e);if(!t)return{success:!1,reason:"no focused node to exit out of"};const r=t.nonGroupParent;return r.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to"}:(hr(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element})}function pu(e){const t=[];return py(e).forEach(r=>{if(!(r instanceof HTMLElement))return;const n=pu(r),i=r.hasAttribute(St.name)?Wy(r.getAttribute(St.name)||""):void 0;if(!i){t.push(...n);return}t.push({children:n,element:r,navValue:i})}),t}function Qy(e){const t=pu(e);return gu(t)}function gu(e){if(!tr(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(r=>{const n=r.children.length?gu(r.children):void 0;if(r.navValue.isGroup&&!n){const o=new Error("group nav has no children");throw console.error(o,r),o}const i=Xy(r,t.children),s=n?{element:r.element,children:n.children,type:n.type,isGroup:r.navValue.isGroup,coords:i}:{element:r.element,type:"child",coords:i,isGroup:!1};if(r.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const o=t.children[i.y];if(o[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);o[i.x]=s}else if(r.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==r.navValue.type){const o=new Error("inconsistent nav dimensionality");throw console.error(o,r),o}}),t}function Xy(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}function ba(e,t){return e>t}function Sa(e,t){return e<t}var Z;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Z||(Z={}));function $s(e){var r;const t=e.type==="1d"?e.children[0]:(r=e.children[0])==null?void 0:r[0];if(t)return t.type==="child"?t:t.isGroup?$s(t):t}function Ea(e,t,r){if(!e)return{success:!1,reason:"no nav tree"};const n=fr(e);if(!n){const a=$s(e);return a?(hr(a.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=yu(n.parent,t,n.node),o=r?!0:!s;return i&&o?(hr(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?o?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"failed to find node to focus"}}function yu(e,t,r){var i,s;if(t===Z.Down||t===Z.Up){const o=t===Z.Down?Sa:ba,a=t===Z.Down?1:-1,l=e.type==="1d"?0:Fr({value:r.coords.y+a,min:0,max:e.children.length-1}),c=e.type==="2d"?e.children[l]:void 0,u={x:e.type==="1d"?Fr({value:r.coords.x+a,min:0,max:e.children.length-1}):c&&r.coords.x>=c.length?c.length-1:r.coords.x,y:l},d=e.type==="1d"?e.children[u.x]:(i=e.children[u.y])==null?void 0:i[u.x],f=e.type==="1d"?o(u.x,r.coords.x):o(u.y,r.coords.y);return{nextNode:(d==null?void 0:d.element)===r.element?void 0:d,requiresWrapping:f}}else{const o=t===Z.Right?Sa:ba,a=t===Z.Right?1:-1,l=e.type==="1d"?e.children:e.children[r.coords.y];el(l,`No current row found at y index: '${r.coords.y}'`);const c={x:Fr({value:r.coords.x+a,min:0,max:l.length-1}),y:r.coords.y},u=o(c.x,r.coords.x),d=e.type==="1d"?e.children[c.x]:(s=e.children[c.y])==null?void 0:s[c.x];return{nextNode:(d==null?void 0:d.element)===r.element?void 0:d,requiresWrapping:u}}}function ew(e,t,r,n){const i=tr(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from"};const{nextNode:o,requiresWrapping:a}=yu(i,r,s),l=o!=null&&o.isGroup?$s(o):o,c=n?!0:!a;return l?c?(hr(l.element),{success:!0,defaulted:!1,newElement:l.element,wrapped:a}):{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"no node to navigate to"}}let tw=class{constructor(t){Object.defineProperty(this,"rootElement",{enumerable:!0,configurable:!0,writable:!0,value:t})}getCurrentlyFocused(){return fr(this.buildNavTree())}buildNavTree(){return Qy(this.rootElement)}navigate({direction:t,allowWrapping:r}){return Ea(this.buildNavTree(),t,r)}enterInto(){return Yy(this.buildNavTree())}exitOutOf(){return Jy(this.buildNavTree())}navigatePibling({allowWrapping:t,direction:r}){const n=this.buildNavTree(),i=fr(n);return!i||!n?Ea(n,r,t):ew(n,i,r,t)}};var j;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right",e.Enter="enter",e.Exit="exit",e.SectionNext="section-next",e.SectionPrevious="section-previous"})(j||(j={}));class wu extends tw{constructor(t,r,n={}){super(t),Object.defineProperty(this,"virLine",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"lastUnlisten",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:{repeatThreshold:{milliseconds:500},repeatInterval:{milliseconds:60},allowWrapping:!0}}),this.options={...this.options,...n},this.listenToVirLineState()}pause(){this.paused=!0}resume(){this.paused=!1}destroy(){var t;(t=this.lastUnlisten)==null||t.call(this)}listenToVirLineState(){this.lastUnlisten&&this.lastUnlisten(),this.lastUnlisten=this.virLine.listenToState(!1,{playersActiveActions:!0},t=>{if(!t||this.paused)return;const r=nr(this.options.repeatThreshold,$.Milliseconds).milliseconds,n=nr(this.options.repeatInterval,$.Milliseconds).milliseconds,i={};if(Zr(t).forEach(l=>{nt(l).forEach(([c,u])=>{u.holdDuration.milliseconds>=r?u.holdDuration.milliseconds-u.lastActDuration.milliseconds>n&&(i[c]=!0,u.actCount++,u.lastActDuration=u.holdDuration):u.holdDuration.milliseconds||(i[c]=!0)})}),i[j.Enter]){this.enterInto();return}if(i[j.Exit]){this.exitOutOf();return}const s=i[j.SectionNext]&&!i[j.SectionPrevious]?Z.Right:!i[j.SectionNext]&&i[j.SectionPrevious]?Z.Left:void 0;if(s){this.navigatePibling({allowWrapping:this.options.allowWrapping,direction:s});return}const o=i[j.Up]&&!i[j.Down]?Z.Up:!i[j.Up]&&i[j.Down]?Z.Down:void 0,a=i[j.Right]&&!i[j.Left]?Z.Right:!i[j.Right]&&i[j.Left]?Z.Left:void 0;o&&this.navigate({allowWrapping:this.options.allowWrapping,direction:o}),a&&this.navigate({allowWrapping:this.options.allowWrapping,direction:a})})}}const rw=my(["red","orange","gold","yellow","lime","green","cyan","blue","purple","magenta"]),Ta=W()({tagName:"vir-glow-pulse",styles:v`
        :host {
            display: inline-flex;
        }
    `,stateInitStatic:{lastTimestamp:0,colorIndex:0},renderCallback({inputs:e,host:t,state:r,updateState:n}){const i=e.glowColors&&e.glowColors.length?e.glowColors:rw,s=e.animationDuration?nr(e.animationDuration,$.Milliseconds):{milliseconds:350},o=r.lastTimestamp+s.milliseconds/2,a=e.pulse&&e.pulse.timestamp>o?e.pulse:void 0;a&&n({colorIndex:Fr({min:0,max:i.length-1,value:r.colorIndex+1})});const l=i[r.colorIndex];if(!l)throw new Error("Exceeded colors array size somehow.");return a&&a.timestamp!==r.lastTimestamp&&l!=null&&(t.getAnimations().forEach(c=>c.cancel()),t.animate([{filter:`drop-shadow(0 0 6px ${l}) drop-shadow(0 0 6px ${l}) drop-shadow(0 0 6px ${l})`},{filter:`drop-shadow(0 0 0 ${l}) drop-shadow(0 0 0 ${l})`}],{duration:s.milliseconds,iterations:1}),n({lastTimestamp:a.timestamp})),p`
            <slot></slot>
        `}}),$a=W()({tagName:"vir-device-chip",styles:v`
        :host {
            height: 80px;
            box-sizing: border-box;
            border: 1px solid #eee;
            border-radius: 16px;
            padding: 0 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .device-emoji {
            font-size: 2em;
        }
    `,renderCallback({inputs:e,host:t}){const r=ou[e.deviceKey],n=fu[r],i=Number(e.deviceKey)+1,s=r===D.Gamepad&&!e.hideGamepadPort?p`
                      <span>${i}</span>
                  `:A,o=r===D.Gamepad?`gamepad ${i}`:r;t.getAttribute("title")!==o&&t.setAttribute("title",o);const a=p`
            <span class="device-emoji">${n}</span>
        `;return e.lastInputTime?p`
                <${Ta.assign({pulse:e.lastInputTime,glowColors:e.activityColors})}>
                    ${a}
                </${Ta}>
                ${s}
            `:p`
                ${a} ${s}
            `}});function vu(e){return e.deviceKey===M.Mouse&&(e.inputName==="axe-x"||e.inputName==="axe-y")}W()({tagName:"vir-device-list",styles:v`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 16px;
        }
    `,stateInitStatic:{deviceHandler:void 0,deviceTimestamps:{},cleanup:void 0},initCallback({inputs:e,state:t,updateState:r}){const n=e.inputDeviceHandler||new $r({startLoopImmediately:!0});t.deviceHandler||r({deviceHandler:n});function i(){return Re(n.getLastPollResults(),o=>t.deviceTimestamps[o]||{timestamp:0})}const s=e.disableGlowPulses?void 0:n.listen(Es,o=>{const a=i();o.detail.inputs.newInputs.forEach(l=>{!e.showMouseMovement&&vu(l)||(a[l.deviceKey]={timestamp:Date.now()})}),r({deviceTimestamps:a})});r({cleanup:s,deviceTimestamps:i()})},cleanupCallback({inputs:e,state:t,updateState:r}){var n,i;(n=t.cleanup)==null||n.call(t),e.inputDeviceHandler||(i=t.deviceHandler)==null||i.destroy(),r({cleanup:void 0,deviceHandler:void 0})},renderCallback({state:e}){return nt(e.deviceTimestamps).map(([r,n])=>p`
                    <${$a.assign({deviceKey:r,lastInputTime:n})}></${$a}>
                `)},options:{ignoreUnsetInputs:!0}});const xa="vira-",{defineElement:Te,defineElementNoInputs:Ab}=hg({assertInputs:e=>{if(!e.tagName.startsWith(xa))throw new Error(`Tag name should start with '${xa}' but got '${e.tagName}'`)}}),S=ot({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function Aa(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function nw(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}var ka;(function(e){e.Upper="upper",e.Lower="lower"})(ka||(ka={}));var Pa;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Pa||(Pa={}));function Ma(e,t){let r=!1;const n=Aa(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Aa(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function bu(){let e,t,r=!1;const n=new Promise((i,s)=>{e=o=>(r=!0,i(o)),t=o=>{r=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${bu.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ca(e){const t=bu();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function iw(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}iw();const sw="px";function ow(e){return aw({value:e,suffix:sw})}function aw({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function ee({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const lw=ee({name:"Check24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),he=ot({"vira-form-input-radius":"8px"}),xr=v`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,ue=ot({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),rt=ot({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":v`calc(${he["vira-form-input-radius"].value} + 4px)`});function On({selector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=2}){const i=z(ow(n+r+t));return v`
        ${z(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${rt["vira-focus-outline-color"].value};
            border-radius: ${rt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Ie=ot({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":rt["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),cw=v`
    padding: 0;
    margin: 0;
`,ye=v`
    ${cw};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Oa=v`#e2e2e2`,Su={menuShadow:v`
        filter: drop-shadow(0px 5px 5px ${Oa});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:v`
        filter: drop-shadow(0px -5px 5px ${Oa});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},It=v`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,R=Te()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),ai=Te()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            ${It};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${R} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${R} {
            transition: opacity
                ${ue["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${he["vira-form-input-radius"].value}
                ${he["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${he["vira-form-input-radius"].value}
                ${he["vira-form-input-radius"].value} 0 0;
        }
    `,renderCallback({inputs:e}){return p`
            <div class="option">
                <${R.assign({icon:lw})}></${R}>
                <slot>${e.label}</slot>
            </div>
        `}}),uw=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Eu(e,t){return e?uw.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function dw(e){return e.replace(/,/g,"")}var Ia;(function(e){e.Upper="upper",e.Lower="lower"})(Ia||(Ia={}));function fw(e){return typeof e=="number"?e:Number(typeof e=="string"?dw(e):e)}function La(e){const t=hw(e);if(t==null)throw new Error(`Cannot convert to a number: ${e}`);return t}function hw(e){const t=fw(e);if(!isNaN(t))return t}function li({max:e,min:t,value:r}){return r>e?t:r<t?e:r}var Na;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Na||(Na={}));function Tu(e,t){try{return mw(e,t),!0}catch{return!1}}function mw(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function pw(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function gw(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}gw();function yw(e,t){return[e,t].filter(r=>r!==void 0).join(",")||""}function ww(e){const t=e.split(",");return Tu(t,2)?{type:"2d",xCord:La(t[0]),yCord:La(t[1])}:{type:"1d"}}function vw(e,t){Object.entries(t).forEach(([r,n])=>{E(n,"boolean")&&n?e.setAttribute(r,""):E(n,"boolean")&&!n||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const bw=He(class extends Ee{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastKey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Tr(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),J}}),Et={name:"data-nav",selector(e){return e===""?`[${Et.name}]`:`[${Et.name}*="${String(e).replace(/"/g,"'")}"]`},css(e){return v`
            ${z(Et.selector(e))}
        `}},dt="nav-activated",Oi={selector:{click(e){return`${e}.${dt}`},selected(e){return`${e}:focus`}},css:{click(e){return v`
                ${z(Oi.selector.click(e))}
            `},selected(e){return v`
                ${z(Oi.selector.selected(e))}
            `}}},Sw={activateKeys:["Space","Return","Enter"]};function Ew(){$u=pw(Sw)}let $u;Ew();function Da(e){return $u.activateKeys.some(t=>{const r=t.toLowerCase();return r===e.key.toLowerCase()||r===e.code.toLowerCase()})}function Tw(e,t){const r=yw(e,t);return bw(`${e}-${t}`,n=>{const i=n.hasAttribute("tabindex")?{}:{tabindex:0},s={[Et.name]:r,...i};Qe(n,HTMLElement),vw(n,s),n.style.getPropertyValue("cursor")||n.style.setProperty("cursor","pointer"),n.addEventListener("mousemove",o=>{o.target===n&&n.focus()},!0),n.addEventListener("mouseleave",o=>{o.target===n&&n.blur()},!0),n.addEventListener("mousedown",o=>{o.target===n&&n.classList.add(dt)},!0),n.addEventListener("mouseup",o=>{o.target===n&&n.classList.remove(dt)},!0),n.addEventListener("blur",()=>{n.classList.remove(dt)},!0),n.addEventListener("keydown",o=>{o.target===n&&Da(o)&&n.classList.add(dt)},!0),n.addEventListener("keyup",o=>{o.target===n&&Da(o)&&n.classList.remove(dt)},!0)})}function $w(e,t){return xu([],e,t)}function xu(e,t,r){return!t||t.type==="child"?!1:t.type==="1d"?_a(t.children,t,0,e,r):t.children.some((n,i)=>_a(n,t,i,e,r))}function _a(e,t,r,n,i){return e.some((s,o)=>{const a=Eu(t,"isRoot")?n:n.concat(t);return i(a,s,{x:o,y:r})?!0:xu(a,s,i)})}function In(e){if(!e)return;let t,r,n;$w(e,(s,o,a)=>o.element.matches(":focus")?(t=s,r=o,n=a,!0):!1);const i=t?(t==null?void 0:t.slice(-1)[0])||e:void 0;if(!(!r||!i||!n))return{node:r,parent:i,coords:n}}function an(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function xw(e){var n;if(!e)return{success:!1,reason:"no nav tree"};const t=In(e);if(!t)return{success:!1,reason:"no focused node to enter into"};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into"};const r=t.node.type==="1d"?t.node.children[0]:(n=t.node.children[0])==null?void 0:n[0];return r?(an(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}):{success:!1,reason:"failed to find first child to enter into"}}function Aw(e){if(!e)return{success:!1,reason:"no nav tree"};const t=In(e);if(!t)return{success:!1,reason:"no focused node to exit out of"};if(Eu(t.parent,"isRoot"))return{success:!1,reason:"at top level nav already, nothing to exit to"};const r=t.parent;return an(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}}function kw(e){var r;return[...e.children,...((r=e.shadowRoot)==null?void 0:r.children)??[]]}function Au(e){const t=[];return kw(e).forEach(r=>{if(!(r instanceof HTMLElement))return;const n=Au(r),i=r.hasAttribute(Et.name)?ww(r.getAttribute(Et.name)||""):void 0;if(!i){t.push(...n);return}t.push({children:n,element:r,navValue:i})}),t}function Pw(e){const t=Au(e);return ku(t)}function ku(e){if(!Tu(e,1))return;const t=e[0].navValue.type,r={type:t,children:[],isRoot:!0};return e.forEach(n=>{const i=n.children.length?ku(n.children):void 0,s=i?{element:n.element,children:i.children,type:i.type}:{element:n.element,type:"child"};if(n.navValue.type==="2d"&&r.type==="2d"){r.children[n.navValue.xCord]||(r.children[n.navValue.xCord]=[]);const o=r.children[n.navValue.xCord];if(o[n.navValue.yCord])throw new Error(`Parent already has child at ${n.navValue.xCord},${n.navValue.yCord}`);o[n.navValue.yCord]=s}else if(n.navValue.type==="1d"&&r.type==="1d")r.children.push(s);else if(t!==n.navValue.type){const o=new Error("child nav does not match parent nav type");throw console.error(o,n),o}}),r}function Ra(e,t){return e>t}function Va(e,t){return e<t}var ne;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(ne||(ne={}));function Mw(e,t,r){var a;if(!e)return{success:!1,reason:"no nav tree"};const n=In(e);if(!n){const l=e.type==="1d"?e.children[0]:(a=e.children[0])==null?void 0:a[0];return l?(an(l.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=Cw(n.parent,t,n),o=r?!0:!s;return(i==null?void 0:i.element)===n.node.element?{success:!1,reason:"no other nodes to navigate to"}:i&&o?(an(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?o?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"not allowed to wrap"}:{success:!1,reason:"failed to find node to focus"}}function Cw(e,t,r){var i,s;if(t===ne.Down||t===ne.Up){const o=t===ne.Down?Va:Ra,a=t===ne.Down?1:-1,l=e.type==="1d"?0:li({value:r.coords.y+a,min:0,max:e.children.length-1}),c=e.type==="2d"?e.children[l]:void 0,u={x:e.type==="1d"?li({value:r.coords.x+a,min:0,max:e.children.length-1}):c&&r.coords.x>=c.length?c.length-1:r.coords.x,y:l},d=e.type==="1d"?e.children[u.x]:(i=e.children[u.y])==null?void 0:i[u.x],f=e.type==="1d"?o(u.x,r.coords.x):o(u.y,r.coords.y);return{nextNode:d,requiresWrapping:f}}else{const o=t===ne.Right?Va:Ra,a=t===ne.Right?1:-1,l=e.type==="1d"?e.children:e.children[r.coords.y];el(l,`No current row found at y index: '${r.coords.y}'`);const c={x:li({value:r.coords.x+a,min:0,max:l.length-1}),y:r.coords.y},u=o(c.x,r.coords.x);return{nextNode:e.type==="1d"?e.children[c.x]:(s=e.children[c.y])==null?void 0:s[c.x],requiresWrapping:u}}}class Pu{constructor(t){Object.defineProperty(this,"rootElement",{enumerable:!0,configurable:!0,writable:!0,value:t})}getCurrentlyFocused(){return In(this.buildNavTree())}buildNavTree(){return Pw(this.rootElement)}navigate({direction:t,allowWrapping:r}){return Mw(this.buildNavTree(),t,r)}enterInto(){return xw(this.buildNavTree())}exitOutOf(){return Aw(this.buildNavTree())}navigatePibling(t){const r=this.exitOutOf();if(!r.success)return r;const n=this.navigate(t);if(!n.success)return n;const i=this.enterInto();return i.success?i:n}}const Ow={option:"dropdown-option"},_r=Te()({tagName:"vira-dropdown-options",events:{selectionChange:Q()},styles:v`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${he["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Ie["vira-form-background-color"].value};
            border: 1px solid ${Ie["vira-form-border-color"].value};
            color: ${Ie["vira-form-foreground-color"].value};
            ${Su.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Oi.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${Ie["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${ai} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${xr};
            pointer-events: auto;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=e.options.map(i=>{const s=i.template||p`
                    <${ai.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${ai}>
                `;return p`
                <div
                    class="dropdown-item ${Oe({disabled:!!i.disabled})}"
                    ${gt(Ow.option)}
                    title=${Ac(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?A:Tw()}
                    ${L("mousedown",o=>{o.stopPropagation()})}
                    ${L("mouseup",o=>{o.stopPropagation(),i.disabled||t(new r.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return p`
            <slot>${n}</slot>
        `}}),Iw=ee({name:"ChevronUp24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${S["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${S["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Lw=ee({name:"CloseX24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ee({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ee({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Nw=ee({name:"EyeClosed24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${S["vira-icon-fill-color"].value}
            stroke=${S["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${S["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Dw=ee({name:"EyeOpen24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${S["vira-icon-fill-color"].value}
            stroke=${S["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${S["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),_w=ee({name:"Loader24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Rw=v`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${ue["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Vw=ee({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${Rw}
        </style>
        ${_w.svgTemplate}
    `});ee({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${S["vira-icon-stroke-color"].value}"
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Hw=ee({name:"StatusFailure24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ee({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${S["vira-icon-stroke-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width="calc(${S["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${S["vira-icon-stroke-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width="calc(${S["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${S["vira-icon-stroke-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width="calc(${S["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});ee({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${S["vira-icon-fill-color"].value}
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${S["vira-icon-stroke-color"].value}
                stroke-width=${S["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function ln(e){if(e instanceof ShadowRoot)return ln(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:ln(t)}function Mu(e,t){if(t(e))return e;const r=ln(e);if(r)return Mu(r,t)}function Fw(e){const t=ln(e);return t&&Mu(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function Uw(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,s=n==null?void 0:n.constructor.name,o=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return n}class jw extends vc{constructor(){super({defaultValue:document.hidden,equalityCheck:yt}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const t=r=>this.updateVisibility(r);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const r=Bw.includes(t.type),n=Ww.includes(t.type),i=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const Ww=["blur","focusout","pagehide"],Bw=["focus","focusin","pageshow"],Gw=new jw;function zw(e,t){return Gw.listen(e,t)}const Ha={top:0,left:0,right:0,bottom:0};class Cu extends mr("hide-pop-up"){}class Ou extends X()("nav-select"){}class Kw{constructor(t){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new Bi}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:{minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0}}),Object.defineProperty(this,"cleanupCallbacks",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"lastRootElement",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.options={...this.options,...t}}attachGlobalListeners(t){const r=new Pu(t);this.cleanupCallbacks=[zw(!1,n=>{n||this.removePopUp()}),Ge("mousedown",n=>{this.lastRootElement&&n.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Ge("keydown",n=>{const i=n.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ne.Down,allowWrapping:!1});else if(i==="ArrowUp")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ne.Up,allowWrapping:!1});else if(i==="ArrowLeft")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ne.Left,allowWrapping:!1});else if(i==="ArrowRight")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ne.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=r.getCurrentlyFocused();s&&(r.enterInto(),this.listenTarget.dispatch(new Ou({detail:s.coords})),n.stopImmediatePropagation(),n.preventDefault())}}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Cu)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=Fw(t);Qe(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,l=i.offsetHeight-i.clientHeight,c=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-l},u=Ma(Ha,h=>s[h]),d=Ma(Ha,h=>{const m=c[h],y=u[h];return Math.abs(m-y)}),f=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace;return this.attachGlobalListeners(t),{popDown:!f,positions:{container:c,root:u,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function qw({selected:e,options:t,isMultiSelect:r}){if(e.length&&t.length){const n=t.filter(i=>e.includes(i.id));return n.length>1&&!r?(console.error(`${Yw.tagName} has multiple selections but \`isMultiSelect\` is not \`true\`. Truncating to the first selection.`),n.slice(0,1)):n}else return[]}function Zw(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${nw(r)}`)}function Fa(e,t,r){return r?t.includes(e)?t.filter(n=>n!==e):[...t,e]:[e]}function Ua({open:e,emitEvent:t},{updateState:r,popUpManager:n,dispatch:i,host:s}){e?r({showPopUpResult:n.showPopUp(s)}):n.removePopUp(),t&&i(e)}const Rr={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},Yw=Te()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>v`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${rt["vira-focus-outline-color"].name}: ${Ie["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${ye};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${he["vira-form-input-radius"].value};
            transition: border-radius
                ${ue["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${On({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(0);
            transition: ${ue["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${Ie["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${It};
            border-radius: inherit;
            background-color: ${Ie["vira-form-background-color"].value};
            color: ${Ie["vira-form-foreground-color"].value};
        }

        .open-upwards ${_r} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${Su.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${xr}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:Q(),openChange:Q()},stateInitStatic:{showPopUpResult:void 0,popUpManager:fg(()=>new Kw),navController:void 0},cleanupCallback({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},initCallback({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:s}){e.popUpManager.listen(Cu,()=>{if(t({showPopUpResult:void 0}),!n.isDisabled){const o=r.shadowRoot.querySelector(".dropdown-wrapper");Qe(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(Ou,o=>{const a=o.detail.x,l=n.options[a];if(!l)throw new Error(`Found no dropdown option at index '${a}'`);n.isMultiSelect||Ua({emitEvent:!0,open:!1},{dispatch:c=>{i(new s.openChange(c))},host:r,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(Fa(l.id,n.selected,!!n.isMultiSelect)))}),t({navController:new Pu(r)})},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:s}){var m;Zw(n.options);function o(y){Ua(y,{dispatch:k=>{e(new t.openChange(k))},host:s,popUpManager:r.popUpManager,updateState:i})}n.isDisabled?o({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?o({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=qw(n),l=n.icon?p`
                  <${R.assign({icon:n.icon})}
                      ${gt(Rr.icon)}
                  ></${R}>
              `:"",c=r.showPopUpResult?r.showPopUpResult.popDown?v`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:v`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function u(){o({emitEvent:!0,open:!r.showPopUpResult})}const d=!a.length,f=n.selectionPrefix&&!d?p`
                      <span class="selected-label-prefix" ${gt(Rr.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:"",h=d?n.placeholder||"":a.map(y=>y.label).join(", ");return p`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Oe({open:!!r.showPopUpResult,"open-upwards":!((m=r.showPopUpResult)!=null&&m.popDown)})}"
                ${gt(Rr.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${L("keydown",y=>{!r.showPopUpResult&&y.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${L("click",y=>{y.detail===0&&u()})}
                ${L("mousedown",y=>{y.button===0&&u()})}
            >
                <div class="dropdown-trigger">
                    ${l}
                    <span
                        class="selection-display ${Oe({"using-placeholder":d})}"
                        title=${Ac(d?h:void 0)}
                    >
                        ${f} ${h}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${R.assign({icon:Iw})}
                            class="trigger-icon"
                        ></${R}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${c}>
                    ${pt(!!r.showPopUpResult,p`
                            <${_r.assign({options:n.options,selectedOptions:a})}
                                ${L(_r.events.selectionChange,y=>{n.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(Fa(y.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${gt(Rr.options)}
                            ></${_r}>
                        `)}
                </div>
            </button>
        `}});var Ii;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Ii||(Ii={}));const ja=Te()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Ii.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${It};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${rt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${xr};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${ye};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${he["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ue["vira-interaction-animation-duration"].value},
                background-color
                    ${ue["vira-interaction-animation-duration"].value},
                border-color ${ue["vira-interaction-animation-duration"].value};
        }

        ${On({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${R} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${R.assign({icon:e.icon})}></${R}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});Te()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${ye};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${ue["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Q()},stateInitStatic:{contentHeight:0},renderCallback({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:s}){const o=s.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${L("click",()=>{n(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${gs(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});var cn;(function(e){e.Loading="loading",e.Error="error"})(cn||(cn={}));Te()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:Q(),imageError:Q()},styles:({hostClasses:e})=>v`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:i}){const s=e.imageUrl,o=t.erroredUrls[s]?p`
                  <slot class="status-wrapper" name=${cn.Error}>
                      <${R.assign({icon:Hw})} class="error"></${R}>
                  </slot>
              `:t.loadedUrls[s]?void 0:p`
                    <slot class="status-wrapper" name=${cn.Loading}>
                        <${R.assign({icon:Vw})}></${R}>
                    </slot>
                `;return p`
            ${pt(!!o,o)}
            <img
                class=${Oe({hidden:!!o})}
                ${L("load",async()=>{e._debugLoadDelay&&await Ca(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new i.imageLoad)})}
                ${L("error",async a=>{e._debugLoadDelay&&await Ca(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new i.imageError(a.error))})}
                src=${s}
            />
        `}});function Li({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Li({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Iu({value:e,allowed:t,blocked:r}){const n=t?Li({input:e,matcher:t}):!0,i=r?Li({input:e,matcher:r}):!1;return n&&!i}function Lu(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(Iu({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Jw({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const s=Uw(r,HTMLInputElement),o=r.data,a=t;let l=s.value??"";if(o)if(o.length===1)Iu({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=a,n(o));else{const{filtered:c,blocked:u}=Lu({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}s.value!==l&&(s.value=l),a!==l&&i(l)}var Tt;(function(e){e.Default="text",e.Password="password",e.Email="email"})(Tt||(Tt={}));Te()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":rt["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Q(),inputBlocked:Q()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${rt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${xr};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${ye};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${It};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${ye};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${he["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ue["vira-interaction-animation-duration"].value};
            }

            label {
                ${ye};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${he["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${On({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ye};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${It};
            }

            button {
                ${ye};
                cursor: pointer;
                display: flex;
                transition: color
                    ${ue["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:i})=>{const{filtered:s}=Lu({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?p`
                  <${R.assign({icon:e.icon})} class="left-side-icon"></${R}>
              `:"",a=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${o}
                ${pt(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${gs(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${Qw(e.type,r.showPassword)}
                    style=${a}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${L("input",l=>{Jw({inputs:e,filteredValue:s,event:l,inputBlockedCallback(c){t(new i.inputBlocked(c))},newValueCallback(c){t(new i.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${pt(!!(e.showClearButton&&e.value),p`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${L("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${R.assign({icon:Lw})}></${R}>
                        </button>
                    `)}
                ${pt(e.type===Tt.Password,p`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${L("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${R.assign({icon:r.showPassword?Dw:Nw})}></${R}>
                        </button>
                    `)}
                ${pt(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function Qw(e,t){return e===Tt.Password&&t?Tt.Default:e||Tt.Default}Te()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,renderCallback({inputs:e}){var r,n;function t(i){e.route&&e.route.router.setRouteOnDirectNavigation(e.route.route,i)&&e.route.scrollToTop&&window.scrollTo(0,0)}if((r=e.link)!=null&&r.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=e.link?e.link.url:(n=e.route)==null?void 0:n.router.createRouteUrl(e.route.route);return p`
                <a href=${i} rel="noopener noreferrer" ${L("click",t)}>
                    <slot></slot>
                </a>
            `}}});const Ni=52,Wt=W()({tagName:"vir-simple-player-assign-bindings",styles:v`
        :host {
            display: flex;
            flex-direction: column;
        }

        th {
            text-align: right;
            height: ${Ni}px;
            padding: 8px 0;
            padding-right: 16px;
        }

        .bindings {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            border: 1px solid #eee;
            min-height: ${Ni+18}px;
            padding: 8px;
            width: 100%;
            box-sizing: border-box;
            border-radius: 8px;
            position: relative;
        }

        td:last-of-type {
            width: 100%;
        }

        table {
            max-width: 100%;
        }

        .add {
            margin-right: 32px;
        }

        .fade .fadable {
            pointer-events: none;
            opacity: 0.3;
        }

        .listening-overlay {
            z-index: 100;
            opacity: 1;
            position: absolute;
            height: 100%;
            width: 100%;
            top: -1px;
            left: -1px;
            background-color: rgba(249, 252, 255, 0.9);
            border: 2px solid #ccc;
            border-radius: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p.empty-bindings {
            ${xr};
        }
        .empty-bindings {
            display: flex;
            justify-content: center;
        }
    `,events:{inputListen:Q(),bindingsUpdate:Q()},stateInitStatic:{listeningForAction:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:i}){const s=e.actionNames.map(o=>{var f;const a=((f=e.playersActionsBindings)==null?void 0:f[`${e.playerPosition}`])||{},l=a[o]||[],c=l.length?l.map((h,m)=>p`
                          <${ci.assign({...h})}
                              ${L(ci.events.removeBinding,()=>{const y={...a,[o]:Sd(l,[m])};t(new r.bindingsUpdate(y))})}
                          ></${ci}>
                      `):p`
                      <p class="empty-bindings">Empty</p>
                  `,u=n.listeningForAction===o,d=u&&e.listeningToInput?p`
                          <div class="listening-overlay"><span>Listening for input...</span></div>
                      `:A;return p`
                <tr
                    class=${Oe({fade:e.listeningToInput})}
                >
                    <td class="fadable">
                        <${ja.assign({text:"+",disabled:e.listeningToInput})}
                            class="add"
                            ${L("click",()=>{var h;t(new r.inputListen(!0)),i({listeningForAction:o}),(h=e.deviceHandler)==null||h.listen(Es,(m,y)=>{const k=m.detail.inputs.newInputs[0];if(!k)return;const V={deviceKey:k.deviceKey,direction:du(k.inputValue),inputName:k.inputName};if(!e.allowMouseMovement&&vu(k))return;if(!l.some(K=>Xe(V,K))){const K={...a,[o]:[...l,V]};t(new r.bindingsUpdate(K))}y(),t(new r.inputListen(!1)),i({listeningForAction:void 0})})})}
                        ></${ja}>
                    </td>
                    <th class=${Oe({fadable:!u})}>${o}:</th>
                    <td class=${Oe({fadable:!u})}>
                        <div
                            class="bindings ${Oe({"empty-bindings":!l.length})}"
                        >
                            ${d}${c}
                        </div>
                    </td>
                </tr>
            `});return p`
            <table><tbody>${s}</tbody></table>
        `}}),ci=W()({tagName:"vir-binding-chip",styles:v`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: #f0f0f0;
            border-radius: 8px;
            padding: 8px;
            font-size: 0.8em;
            height: ${Ni}px;
            box-sizing: border-box;
            position: relative;
        }

        .remove-overlay {
            position: absolute;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            top: 0;
            left: 0;
            border: 3px solid #aa0000;
            background-color: rgba(255, 0, 0, 0.6);
            border-radius: inherit;
            display: flex;
            -webkit-text-stroke: 1px black;
            color: white;
            font-weight: bold;
            justify-content: center;
            align-items: flex-end;
            font-weight: bold;
            padding-bottom: 4px;
            opacity: 0;
            cursor: pointer;
            font-size: 1.9em;
            ${It};
            transition: opacity
                ${ue["vira-interaction-animation-duration"].value};
        }
        :host(:hover) .remove-overlay {
            opacity: 1;
        }
    `,events:{removeBinding:Q()},renderCallback({inputs:e,dispatch:t,events:r}){const n=ou[e.deviceKey],i=fu[n],s=Number(e.deviceKey)+1,o=n===D.Gamepad?p`
                      <span>${s}</span>
                  `:A,a=Ty(e.inputName)===Ot.Axe?p`
                      <span>${Uy[e.direction]}</span>
                  `:A,l=n===D.Gamepad?`controller in slot ${s}`:e.deviceKey;return p`
            <div
                class="remove-overlay"
                ${L("click",()=>{t(new r.removeBinding)})}
            >
                <span>×</span>
            </div>
            <div>${e.inputName} ${a}</div>
            <div title=${l}>${i} ${o}</div>
        `}});W()({tagName:"vir-simple-assign-bindings",styles:v`
        :host {
            display: flex;
            gap: 32px;
        }

        ${Wt} {
            min-width: 300px;
        }

        .player-assignment {
            flex-grow: 1;
        }
    `,events:{playersActionsBindingsUpdate:Q()},stateInitStatic:{deviceHandler:void 0,cleanup:void 0,currentDevices:{},listeningToInput:!1},initCallback({inputs:e,state:t,updateState:r}){const n=t.deviceHandler||e.inputDeviceHandler||new $r({startLoopImmediately:!0,...e.globalDeadZone?{globalDeadZone:e.globalDeadZone}:{},...e.gamepadDeadZoneSettings?{gamepadDeadZoneSettings:e.gamepadDeadZoneSettings}:{}});t.deviceHandler||r({deviceHandler:n});function i(){const a=Re(n.readAllDevices(),(l,c)=>({deviceKey:l,deviceName:c.deviceName,deviceType:c.deviceType}));r({currentDevices:a})}const s=n.listen(lu,i),o=n.listen(au,i);r({cleanup(){s(),o()}}),i()},cleanupCallback({inputs:e,state:t,updateState:r}){var n,i;e.inputDeviceHandler||(n=t.deviceHandler)==null||n.destroy(),(i=t.cleanup)==null||i.call(t),r({deviceHandler:void 0,cleanup:void 0})},renderCallback({state:e,inputs:t,updateState:r,dispatch:n,events:i}){const s=e.deviceHandler;if(s){if(t.supportedPlayerCount<1)throw new Error("Cannot support < 1 players.")}else return A;const o=t.supportedPlayerCount>1;return Array(t.supportedPlayerCount).fill(0).map((a,l)=>{const c=l+1,u=o?p`
                          <h3>Player ${c}</h3>
                      `:A;return p`
                    <section class="player-assignment">
                        ${u}
                        <${Wt.assign({actionNames:t.actionNames,playerPosition:c,playersActionsBindings:t.playersActionsBindings,listeningToInput:e.listeningToInput,deviceHandler:s,allowMouseMovement:t.allowMouseMovement||!1})}
                            ${L(Wt.events.inputListen,d=>{r({listeningToInput:d.detail})})}
                            ${L(Wt.events.bindingsUpdate,d=>{const f={...t.playersActionsBindings,[String(c)]:d.detail};n(new i.playersActionsBindingsUpdate(f))})}
                        ></${Wt}>
                    </section>
                `})},options:{ignoreUnsetInputs:!0}});function Xw(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var Lt=Xw();function ev(){try{if(!Lt||!Lt.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function xs(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(s){if(s.name!=="TypeError")throw s;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,i=0;i<e.length;i+=1)n.append(e[i]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const w=Promise;function I(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function ft(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function $e(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function As(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const Di="local-forage-detect-blob-support";let Vr;const oe={},tv=Object.prototype.toString,Ar="readonly",Ln="readwrite";function rv(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),i=0;i<t;i++)n[i]=e.charCodeAt(i);return r}function nv(e){return new w(function(t){var r=e.transaction(Di,Ln),n=xs([""]);r.objectStore(Di).put(n,"key"),r.onabort=function(i){i.preventDefault(),i.stopPropagation(),t(!1)},r.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),s=navigator.userAgent.match(/Edge\//);t(s||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function iv(e){return typeof Vr=="boolean"?w.resolve(Vr):nv(e).then(function(t){return Vr=t,Vr})}function un(e){var t=oe[e.name],r={};r.promise=new w(function(n,i){r.resolve=n,r.reject=i}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function _i(e){var t=oe[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Ri(e,t){var r=oe[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function Nu(e,t){return new w(function(r,n){if(oe[e.name]=oe[e.name]||Vu(),e.db)if(t)un(e),e.db.close();else return r(e.db);var i=[e.name];t&&i.push(e.version);var s=Lt.open.apply(Lt,i);t&&(s.onupgradeneeded=function(o){var a=s.result;try{a.createObjectStore(e.storeName),o.oldVersion<=1&&a.createObjectStore(Di)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+o.oldVersion+" to version "+o.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),s.onerror=function(o){o.preventDefault(),n(s.error)},s.onsuccess=function(){var o=s.result;o.onversionchange=function(a){a.target.close()},r(o),_i(e)}})}function ks(e){return Nu(e,!1)}function Ps(e){return Nu(e,!0)}function Du(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,i=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),i||r){if(r){var s=e.db.version+1;s>e.version&&(e.version=s)}return!0}return!1}function sv(e){return new w(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(i){var s=btoa(i.target.result||"");t({__local_forage_encoded_blob:!0,data:s,type:e.type})},n.readAsBinaryString(e)})}function _u(e){var t=rv(atob(e.data));return xs([t],{type:e.type})}function Ru(e){return e&&e.__local_forage_encoded_blob}function ov(e){var t=this,r=t._initReady().then(function(){var n=oe[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return ft(r,e,e),r}function av(e){un(e);for(var t=oe[e.name],r=t.forages,n=0;n<r.length;n++){const i=r[n];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,ks(e).then(i=>(e.db=i,Du(e)?Ps(e):i)).then(i=>{e.db=t.db=i;for(var s=0;s<r.length;s++)r[s]._dbInfo.db=i}).catch(i=>{throw Ri(e,i),i})}function xe(e,t,r,n){n===void 0&&(n=1);try{var i=e.db.transaction(e.storeName,t);r(null,i)}catch(s){if(n>0&&(!e.db||s.name==="InvalidStateError"||s.name==="NotFoundError"))return w.resolve().then(()=>{if(!e.db||s.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),Ps(e)}).then(()=>av(e).then(function(){xe(e,t,r,n-1)})).catch(r);r(s)}}function Vu(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function lv(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var i=oe[r.name];i||(i=Vu(),oe[r.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=ov);var s=[];function o(){return w.resolve()}for(var a=0;a<i.forages.length;a++){var l=i.forages[a];l!==t&&s.push(l._initReady().catch(o))}var c=i.forages.slice(0);return w.all(s).then(function(){return r.db=i.db,ks(r)}).then(function(u){return r.db=u,Du(r,t._defaultConfig.version)?Ps(r):u}).then(function(u){r.db=i.db=u,t._dbInfo=r;for(var d=0;d<c.length;d++){var f=c[d];f!==t&&(f._dbInfo.db=r.db,f._dbInfo.version=r.version)}})}function cv(e,t){var r=this;e=$e(e);var n=new w(function(i,s){r.ready().then(function(){xe(r._dbInfo,Ar,function(o,a){if(o)return s(o);try{var l=a.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var u=c.result;u===void 0&&(u=null),Ru(u)&&(u=_u(u)),i(u)},c.onerror=function(){s(c.error)}}catch(u){s(u)}})}).catch(s)});return I(n,t),n}function uv(e,t){var r=this,n=new w(function(i,s){r.ready().then(function(){xe(r._dbInfo,Ar,function(o,a){if(o)return s(o);try{var l=a.objectStore(r._dbInfo.storeName),c=l.openCursor(),u=1;c.onsuccess=function(){var d=c.result;if(d){var f=d.value;Ru(f)&&(f=_u(f));var h=e(f,d.key,u++);h!==void 0?i(h):d.continue()}else i()},c.onerror=function(){s(c.error)}}catch(d){s(d)}})}).catch(s)});return I(n,t),n}function dv(e,t,r){var n=this;e=$e(e);var i=new w(function(s,o){var a;n.ready().then(function(){return a=n._dbInfo,tv.call(t)==="[object Blob]"?iv(a.db).then(function(l){return l?t:sv(t)}):t}).then(function(l){xe(n._dbInfo,Ln,function(c,u){if(c)return o(c);try{var d=u.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var f=d.put(l,e);u.oncomplete=function(){l===void 0&&(l=null),s(l)},u.onabort=u.onerror=function(){var h=f.error?f.error:f.transaction.error;o(h)}}catch(h){o(h)}})}).catch(o)});return I(i,r),i}function fv(e,t){var r=this;e=$e(e);var n=new w(function(i,s){r.ready().then(function(){xe(r._dbInfo,Ln,function(o,a){if(o)return s(o);try{var l=a.objectStore(r._dbInfo.storeName),c=l.delete(e);a.oncomplete=function(){i()},a.onerror=function(){s(c.error)},a.onabort=function(){var u=c.error?c.error:c.transaction.error;s(u)}}catch(u){s(u)}})}).catch(s)});return I(n,t),n}function hv(e){var t=this,r=new w(function(n,i){t.ready().then(function(){xe(t._dbInfo,Ln,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),l=a.clear();o.oncomplete=function(){n()},o.onabort=o.onerror=function(){var c=l.error?l.error:l.transaction.error;i(c)}}catch(c){i(c)}})}).catch(i)});return I(r,e),r}function mv(e){var t=this,r=new w(function(n,i){t.ready().then(function(){xe(t._dbInfo,Ar,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),l=a.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){i(l.error)}}catch(c){i(c)}})}).catch(i)});return I(r,e),r}function pv(e,t){var r=this,n=new w(function(i,s){if(e<0){i(null);return}r.ready().then(function(){xe(r._dbInfo,Ar,function(o,a){if(o)return s(o);try{var l=a.objectStore(r._dbInfo.storeName),c=!1,u=l.openKeyCursor();u.onsuccess=function(){var d=u.result;if(!d){i(null);return}e===0||c?i(d.key):(c=!0,d.advance(e))},u.onerror=function(){s(u.error)}}catch(d){s(d)}})}).catch(s)});return I(n,t),n}function gv(e){var t=this,r=new w(function(n,i){t.ready().then(function(){xe(t._dbInfo,Ar,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),l=a.openKeyCursor(),c=[];l.onsuccess=function(){var u=l.result;if(!u){n(c);return}c.push(u.key),u.continue()},l.onerror=function(){i(l.error)}}catch(u){i(u)}})}).catch(i)});return I(r,e),r}function yv(e,t){t=As.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,i;if(!e.name)i=w.reject("Invalid arguments");else{const o=e.name===r.name&&n._dbInfo.db?w.resolve(n._dbInfo.db):ks(e).then(a=>{const l=oe[e.name],c=l.forages;l.db=a;for(var u=0;u<c.length;u++)c[u]._dbInfo.db=a;return a});e.storeName?i=o.then(a=>{if(!a.objectStoreNames.contains(e.storeName))return;const l=a.version+1;un(e);const c=oe[e.name],u=c.forages;a.close();for(let f=0;f<u.length;f++){const h=u[f];h._dbInfo.db=null,h._dbInfo.version=l}return new w((f,h)=>{const m=Lt.open(e.name,l);m.onerror=y=>{m.result.close(),h(y)},m.onupgradeneeded=()=>{var y=m.result;y.deleteObjectStore(e.storeName)},m.onsuccess=()=>{const y=m.result;y.close(),f(y)}}).then(f=>{c.db=f;for(let h=0;h<u.length;h++){const m=u[h];m._dbInfo.db=f,_i(m._dbInfo)}}).catch(f=>{throw(Ri(e,f)||w.resolve()).catch(()=>{}),f})}):i=o.then(a=>{un(e);const l=oe[e.name],c=l.forages;a.close();for(var u=0;u<c.length;u++){const f=c[u];f._dbInfo.db=null}return new w((f,h)=>{var m=Lt.deleteDatabase(e.name);m.onerror=()=>{const y=m.result;y&&y.close(),h(m.error)},m.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},m.onsuccess=()=>{const y=m.result;y&&y.close(),f(y)}}).then(f=>{l.db=f;for(var h=0;h<c.length;h++){const m=c[h];_i(m._dbInfo)}}).catch(f=>{throw(Ri(e,f)||w.resolve()).catch(()=>{}),f})})}return I(i,t),i}var wv={_driver:"asyncStorage",_initStorage:lv,_support:ev(),iterate:uv,getItem:cv,setItem:dv,removeItem:fv,clear:hv,length:mv,key:pv,keys:gv,dropInstance:yv};function vv(){return typeof openDatabase=="function"}var Le="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bv="~~local_forage_type~",Wa=/^~~local_forage_type~([^~]+)~/,dn="__lfsc__:",Vi=dn.length,Ms="arbf",Hi="blob",Hu="si08",Fu="ui08",Uu="uic8",ju="si16",Wu="si32",Bu="ur16",Gu="ui32",zu="fl32",Ku="fl64",Ba=Vi+Ms.length,Ga=Object.prototype.toString;function qu(e){var t=e.length*.75,r=e.length,n,i=0,s,o,a,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<r;n+=4)s=Le.indexOf(e[n]),o=Le.indexOf(e[n+1]),a=Le.indexOf(e[n+2]),l=Le.indexOf(e[n+3]),u[i++]=s<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|l&63;return c}function Fi(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=Le[t[n]>>2],r+=Le[(t[n]&3)<<4|t[n+1]>>4],r+=Le[(t[n+1]&15)<<2|t[n+2]>>6],r+=Le[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function Sv(e,t){var r="";if(e&&(r=Ga.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&Ga.call(e.buffer)==="[object ArrayBuffer]")){var n,i=dn;e instanceof ArrayBuffer?(n=e,i+=Ms):(n=e.buffer,r==="[object Int8Array]"?i+=Hu:r==="[object Uint8Array]"?i+=Fu:r==="[object Uint8ClampedArray]"?i+=Uu:r==="[object Int16Array]"?i+=ju:r==="[object Uint16Array]"?i+=Bu:r==="[object Int32Array]"?i+=Wu:r==="[object Uint32Array]"?i+=Gu:r==="[object Float32Array]"?i+=zu:r==="[object Float64Array]"?i+=Ku:t(new Error("Failed to get type for BinaryArray"))),t(i+Fi(n))}else if(r==="[object Blob]"){var s=new FileReader;s.onload=function(){var o=bv+e.type+"~"+Fi(this.result);t(dn+Hi+o)},s.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(o){console.error("Couldn't convert value into a JSON string: ",e),t(null,o)}}function Ev(e){if(e.substring(0,Vi)!==dn)return JSON.parse(e);var t=e.substring(Ba),r=e.substring(Vi,Ba),n;if(r===Hi&&Wa.test(t)){var i=t.match(Wa);n=i[1],t=t.substring(i[0].length)}var s=qu(t);switch(r){case Ms:return s;case Hi:return xs([s],{type:n});case Hu:return new Int8Array(s);case Fu:return new Uint8Array(s);case Uu:return new Uint8ClampedArray(s);case ju:return new Int16Array(s);case Bu:return new Uint16Array(s);case Wu:return new Int32Array(s);case Gu:return new Uint32Array(s);case zu:return new Float32Array(s);case Ku:return new Float64Array(s);default:throw new Error("Unkown type: "+r)}}var Cs={serialize:Sv,deserialize:Ev,stringToBuffer:qu,bufferToString:Fi};function Zu(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function Tv(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var i=new w(function(s,o){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(a){return o(a)}r.db.transaction(function(a){Zu(a,r,function(){t._dbInfo=r,s()},function(l,c){o(c)})},o)});return r.serializer=Cs,i}function Fe(e,t,r,n,i,s){e.executeSql(r,n,i,function(o,a){a.code===a.SYNTAX_ERR?o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?s(l,a):Zu(l,t,function(){l.executeSql(r,n,i,s)},s)},s):s(o,a)},s)}function $v(e,t){var r=this;e=$e(e);var n=new w(function(i,s){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(a){Fe(a,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var u=c.rows.length?c.rows.item(0).value:null;u&&(u=o.serializer.deserialize(u)),i(u)},function(l,c){s(c)})})}).catch(s)});return I(n,t),n}function xv(e,t){var r=this,n=new w(function(i,s){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(a){Fe(a,o,`SELECT * FROM ${o.storeName}`,[],function(l,c){for(var u=c.rows,d=u.length,f=0;f<d;f++){var h=u.item(f),m=h.value;if(m&&(m=o.serializer.deserialize(m)),m=e(m,h.key,f+1),m!==void 0){i(m);return}}i()},function(l,c){s(c)})})}).catch(s)});return I(n,t),n}function Yu(e,t,r,n){var i=this;e=$e(e);var s=new w(function(o,a){i.ready().then(function(){t===void 0&&(t=null);var l=t,c=i._dbInfo;c.serializer.serialize(t,function(u,d){d?a(d):c.db.transaction(function(f){Fe(f,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){o(l)},function(h,m){a(m)})},function(f){if(f.code===f.QUOTA_ERR){if(n>0){o(Yu.apply(i,[e,l,r,n-1]));return}a(f)}})})}).catch(a)});return I(s,r),s}function Av(e,t,r){return Yu.apply(this,[e,t,r,1])}function kv(e,t){var r=this;e=$e(e);var n=new w(function(i,s){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(a){Fe(a,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[e],function(){i()},function(l,c){s(c)})})}).catch(s)});return I(n,t),n}function Pv(e){var t=this,r=new w(function(n,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){Fe(o,s,`DELETE FROM ${s.storeName}`,[],function(){n()},function(a,l){i(l)})})}).catch(i)});return I(r,e),r}function Mv(e){var t=this,r=new w(function(n,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){Fe(o,s,`SELECT COUNT(key) as c FROM ${s.storeName}`,[],function(a,l){var c=l.rows.item(0).c;n(c)},function(a,l){i(l)})})}).catch(i)});return I(r,e),r}function Cv(e,t){var r=this,n=new w(function(i,s){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(a){Fe(a,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var u=c.rows.length?c.rows.item(0).key:null;i(u)},function(l,c){s(c)})})}).catch(s)});return I(n,t),n}function Ov(e){var t=this,r=new w(function(n,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){Fe(o,s,`SELECT key FROM ${s.storeName}`,[],function(a,l){for(var c=[],u=0;u<l.rows.length;u++)c.push(l.rows.item(u).key);n(c)},function(a,l){i(l)})})}).catch(i)});return I(r,e),r}function Iv(e){return new w(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,s){for(var o=[],a=0;a<s.rows.length;a++)o.push(s.rows.item(a).name);t({db:e,storeNames:o})},function(i,s){r(s)})},function(n){r(n)})})}function Lv(e,t){t=As.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,i;return e.name?i=new w(function(s){var o;e.name===r.name?o=n._dbInfo.db:o=openDatabase(e.name,"","",0),e.storeName?s({db:o,storeNames:[e.storeName]}):s(Iv(o))}).then(function(s){return new w(function(o,a){s.db.transaction(function(l){function c(h){return new w(function(m,y){l.executeSql(`DROP TABLE IF EXISTS ${h}`,[],function(){m()},function(k,V){y(V)})})}for(var u=[],d=0,f=s.storeNames.length;d<f;d++)u.push(c(s.storeNames[d]));w.all(u).then(function(){o()}).catch(function(h){a(h)})},function(l){a(l)})})}):i=w.reject("Invalid arguments"),I(i,t),i}var Nv={_driver:"webSQLStorage",_initStorage:Tv,_support:vv(),iterate:xv,getItem:$v,setItem:Av,removeItem:kv,clear:Pv,length:Mv,key:Cv,keys:Ov,dropInstance:Lv};function Dv(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Ju(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function _v(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Rv(){return!_v()||localStorage.length>0}function Vv(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=Ju(e,t._defaultConfig),Rv()?(t._dbInfo=r,r.serializer=Cs,w.resolve()):w.reject()}function Hv(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(n)===0&&localStorage.removeItem(s)}});return I(r,e),r}function Fv(e,t){var r=this;e=$e(e);var n=r.ready().then(function(){var i=r._dbInfo,s=localStorage.getItem(i.keyPrefix+e);return s&&(s=i.serializer.deserialize(s)),s});return I(n,t),n}function Uv(e,t){var r=this,n=r.ready().then(function(){for(var i=r._dbInfo,s=i.keyPrefix,o=s.length,a=localStorage.length,l=1,c=0;c<a;c++){var u=localStorage.key(c);if(u.indexOf(s)===0){var d=localStorage.getItem(u);if(d&&(d=i.serializer.deserialize(d)),d=e(d,u.substring(o),l++),d!==void 0)return d}}});return I(n,t),n}function jv(e,t){var r=this,n=r.ready().then(function(){var i=r._dbInfo,s;try{s=localStorage.key(e)}catch{s=null}return s&&(s=s.substring(i.keyPrefix.length)),s});return I(n,t),n}function Wv(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,i=localStorage.length,s=[],o=0;o<i;o++){var a=localStorage.key(o);a.indexOf(n.keyPrefix)===0&&s.push(a.substring(n.keyPrefix.length))}return s});return I(r,e),r}function Bv(e){var t=this,r=t.keys().then(function(n){return n.length});return I(r,e),r}function Gv(e,t){var r=this;e=$e(e);var n=r.ready().then(function(){var i=r._dbInfo;localStorage.removeItem(i.keyPrefix+e)});return I(n,t),n}function zv(e,t,r){var n=this;e=$e(e);var i=n.ready().then(function(){t===void 0&&(t=null);var s=t;return new w(function(o,a){var l=n._dbInfo;l.serializer.serialize(t,function(c,u){if(u)a(u);else try{localStorage.setItem(l.keyPrefix+e,c),o(s)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a(d),a(d)}})})});return I(i,r),i}function Kv(e,t){if(t=As.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,i;return e.name?i=new w(function(s){e.storeName?s(Ju(e,n._defaultConfig)):s(`${e.name}/`)}).then(function(s){for(var o=localStorage.length-1;o>=0;o--){var a=localStorage.key(o);a.indexOf(s)===0&&localStorage.removeItem(a)}}):i=w.reject("Invalid arguments"),I(i,t),i}var qv={_driver:"localStorageWrapper",_initStorage:Vv,_support:Dv(),iterate:Uv,getItem:Fv,setItem:zv,removeItem:Gv,clear:Hv,length:Bv,key:jv,keys:Wv,dropInstance:Kv};const Zv=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),Yv=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(Zv(e[n],t))return!0;n++}return!1},Qu=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Bt={},za={},$t={INDEXEDDB:wv,WEBSQL:Nv,LOCALSTORAGE:qv},Jv=[$t.INDEXEDDB._driver,$t.WEBSQL._driver,$t.LOCALSTORAGE._driver],Kr=["dropInstance"],ui=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Kr),Qv={description:"",driver:Jv.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Xv(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function di(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(Qu(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class Os{constructor(t){for(let r in $t)if($t.hasOwnProperty(r)){const n=$t[r],i=n._driver;this[r]=i,Bt[i]||this.defineDriver(n)}this._defaultConfig=di({},Qv),this._config=di({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const i=new w(function(s,o){try{const a=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){o(l);return}const c=ui.concat("_initStorage");for(let f=0,h=c.length;f<h;f++){const m=c[f];if((!Yv(Kr,m)||t[m])&&typeof t[m]!="function"){o(l);return}}(function(){const f=function(h){return function(){const m=new Error(`Method ${h} is not implemented by the current driver`),y=w.reject(m);return I(y,arguments[arguments.length-1]),y}};for(let h=0,m=Kr.length;h<m;h++){const y=Kr[h];t[y]||(t[y]=f(y))}})();const d=function(f){Bt[a]&&console.info(`Redefining LocalForage driver: ${a}`),Bt[a]=t,za[a]=f,s()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,o):d(!!t._support):d(!0)}catch(a){o(a)}});return ft(i,r,n),i}driver(){return this._driver||null}getDriver(t,r,n){const i=Bt[t]?w.resolve(Bt[t]):w.reject(new Error("Driver not found."));return ft(i,r,n),i}getSerializer(t){const r=w.resolve(Cs);return ft(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return ft(n,t,t),n}setDriver(t,r,n){const i=this;Qu(t)||(t=[t]);const s=this._getSupportedDrivers(t);function o(){i._config.driver=i.driver()}function a(u){return i._extend(u),o(),i._ready=i._initStorage(i._config),i._ready}function l(u){return function(){let d=0;function f(){for(;d<u.length;){let m=u[d];return d++,i._dbInfo=null,i._ready=null,i.getDriver(m).then(a).catch(f)}o();const h=new Error("No available storage method found.");return i._driverSet=w.reject(h),i._driverSet}return f()}}const c=this._driverSet!==null?this._driverSet.catch(()=>w.resolve()):w.resolve();return this._driverSet=c.then(()=>{const u=s[0];return i._dbInfo=null,i._ready=null,i.getDriver(u).then(d=>{i._driver=d._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=l(s)})}).catch(()=>{o();const u=new Error("No available storage method found.");return i._driverSet=w.reject(u),i._driverSet}),ft(this._driverSet,r,n),this._driverSet}supports(t){return!!za[t]}_extend(t){di(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];this.supports(s)&&r.push(s)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=ui.length;t<r;t++)Xv(this,ui[t])}createInstance(t){return new Os(t)}}const eb=new Os,tb=eb,F={Pause:"pause",...j},Xu={1:{[F.Up]:[{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-ArrowUp"}],[F.Down]:[{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-ArrowDown"}],[F.Left]:[{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-ArrowLeft"}],[F.Right]:[{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-ArrowRight"}],[F.Enter]:[{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-Enter"},{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-NumpadEnter"}],[F.Exit]:[{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-Escape"}],[F.Pause]:[{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-Space"}]},2:{[F.Up]:[{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-KeyW"}],[F.Down]:[{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-KeyS"}],[F.Left]:[{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-KeyA"}],[F.Right]:[{deviceKey:M.Keyboard,direction:C.Positive,inputName:"button-KeyD"}]}},rb=fe({deviceKey:Si(M),inputName:"",direction:Si(C)}),nb=fe(wn({keys:Si(F),values:[rb],required:!0})),ib=fe(wn({keys:"",values:nb,required:!1})),ed=fe({bindings:mt(ib,void 0),playerCount:mt(1,void 0)}),Ui=tb.createInstance({description:"For the game Forward.",name:"forward-game",storeName:"forward-game"}),ji="saved-state";async function sb(){const e=await Ui.getItem(ji);return wc(e,ed)?e:ab}async function ob(e){const t={...await Ui.getItem(ji),...e};xn(t,ed),await Ui.setItem(ji,t)}const ab={bindings:{...Xu}},td=["blue","red","green","orange"],rd=td.length,ve=20,nd=50;function lb(e,t,r){const n=(t*2-1)*ve;return{position:{x:(r.width-n)/2+(e-1)*ve*2,y:(r.height-ve)/2},color:td[e-1]||"black"}}const cb=.3,ub={stageId:{name:"perform actions"},executor({state:e,timeSinceLastUpdate:t}){var i;const r=e.canvas;if(!e.playState||!e.playersActiveActions||!r||(i=e.playState.winningPlayers)!=null&&i.length)return;const n=[];nt(e.playersActiveActions).forEach(([s,o])=>{var u,d,f,h,m;const a=(u=e.playState)==null?void 0:u.players[s];if(!a)return;const l=Number((t.milliseconds*cb).toFixed(1)),c={x:0,y:0};if(o[F.Up]&&(c.y-=l*(((d=o[F.Up])==null?void 0:d.value)||0)),o[F.Down]&&(c.y+=l*(((f=o[F.Down])==null?void 0:f.value)||0)),o[F.Left]&&(c.x-=l*(((h=o[F.Left])==null?void 0:h.value)||0)),o[F.Right]&&(c.x+=l*(((m=o[F.Right])==null?void 0:m.value)||0)),c.x&&c.y){const y=Math.sqrt(Math.pow(c.x,2)+Math.pow(c.y,2));c.y=c.y*(l/y),c.x=c.x*(l/y)}a.position.x+=c.x,a.position.y+=c.y,a.position.x<0?a.position.x=0:a.position.x>r.width-ve&&(a.position.x=r.width-ve),a.position.y<0?a.position.y=0:a.position.y>r.height-ve&&(a.position.y=r.height-ve),a.position.y<nd&&n.push(s)}),e.playState.winningPlayers=n}},db={stageId:{name:"render game"},async executor({state:e}){var n,i,s;const t=e.canvas;if(!t||!e.renderContext)return;(!((n=e.playState)!=null&&n.players)||!((i=e.playState)!=null&&i.winningPlayers))&&(e.playState={players:{},winningPlayers:[]}),e.renderContext.fillStyle="white",e.renderContext.fillRect(0,0,t.width,t.height),e.graphics||(e.graphics={}),e.graphics.checkerboard||(e.graphics.checkerboard={pattern:await fb(e.renderContext)}),e.renderContext.fillStyle=e.graphics.checkerboard.pattern,e.renderContext.fillRect(0,0,t.width,nd),e.renderContext.fillStyle="black",e.renderContext.font="bold 40px sans-serif",e.renderContext.textAlign="center",e.renderContext.fillText("Get here to win",t.width/2,40);const r=Math.min(((s=e.options)==null?void 0:s.playerCount)||1,rd);for(let o=1;o<=r;o++){const a=e.playState.players[`${o}`],l=a||lb(o,r,t);a||(e.playState.players[`${o}`]=l),e.renderContext.fillStyle=l.color,e.renderContext.fillRect(l.position.x,l.position.y,ve,ve)}}};async function fb(e){const t=new Image,r=`
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <rect height="10" width="10" x="0" y="0" fill="#ddd" />
        <rect height="10" width="10" x="10" y="10" fill="#ddd" />
    </svg>`;t.src=`data:image/svg+xml;utf8,${encodeURIComponent(r)}`;const n=ol();return t.onload=()=>{const i=e.createPattern(t,"repeat");i?n.resolve(i):n.reject("Failed to create checkerboard canvas pattern.")},n.promise}const hb=[Ts,uu,ub,db];async function mb(){const e=await sb();return new ys(hb,{deviceHandler:new $r({disableMouseMovement:!0}),playersActionsBindings:(e==null?void 0:e.bindings)||Xu,options:{playerCount:(e==null?void 0:e.playerCount)||1}},{init:{startUpdateLoopImmediately:!0}})}function id(e){e.currentState.playState=void 0}const pb=Object.freeze(Object.defineProperty({__proto__:null,createForwardGamePipeline:mb,resetGameState:id},Symbol.toStringTag,{value:"Module"})),we=W()({tagName:"vir-button",hostClasses:{"vir-button-selected":({inputs:e})=>!!e.selected},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
        }

        button {
            ${ye};
            outline: none;
            padding: 8px;
            font: inherit;
            width: 100%;
            position: relative;
            border-radius: 8px;
            border: 2px solid #ccc;
            background-color: white;
        }

        ${Ci.css.click("button")} {
            background-color: #ccc;
            border-color: dodgerblue;
        }

        ${On({selector:"button:focus",elementBorderSize:2})}

        button:focus {
            background-color: #eee;
        }

        ${e["vir-button-selected"].selector} button {
            background-color: skyblue;
        }
    `,renderCallback({inputs:e}){return p`
            <button autofocus ${e.nav?wa(e.nav.x,e.nav.y):wa()}>
                <slot></slot>
            </button>
        `},options:{ignoreUnsetInputs:!0}}),gb=[{text:"Play",action({dispatch:e,gamePipeline:t}){id(t),e(new dr({paths:[Je.Play]}))}},{text:"Options",action({dispatch:e}){e(new dr({paths:[Je.Options]}))}}],Ka=W()({tagName:"vir-main-menu",styles:v`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .buttons {
            display: flex;
            flex-direction: column;
            gap: 32px;
            width: 200px;
            justify-items: stretch;
        }
    `,stateInitStatic:{menuNavController:void 0,cleanup:void 0},initCallback({inputs:e,state:t,updateState:r,host:n}){if(!t.menuNavController){const i=new wu(n,e.gamePipeline,{allowWrapping:!0});r({menuNavController:i}),r({cleanup:()=>i.destroy()})}},cleanupCallback({state:e,updateState:t}){var r;(r=e.cleanup)==null||r.call(e),t({cleanup:void 0,menuNavController:void 0})},renderCallback({inputs:e,dispatch:t}){const r=gb.map(n=>p`
                <${we}
                    ${L("click",()=>{n.action({dispatch:t,gamePipeline:e.gamePipeline})})}
                >
                    ${n.text}
                </${we}>
            `);return p`
            <section class="buttons" ${Ss("button")}>${r}</section>
        `}}),qa=W()({tagName:"vir-options",styles:v`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .submission-buttons {
            display: flex;
        }

        .option-title {
            padding: 8px 16px 8px 0;
        }

        .options-wrapper {
            background-color: white;
            border: 3px solid #ccc;
            border-radius: 32px;
            padding: 32px;

            display: flex;
            flex-direction: column;
            gap: 64px;
        }

        ${we} {
            min-width: 40px;
            margin: 2px;
        }
    `,stateInitStatic:{menuNavController:void 0,currentOptions:{},cleanup:void 0},initCallback({inputs:e,state:t,updateState:r,host:n}){if(!t.cleanup){const i=new wu(n,e.gamePipeline,{allowWrapping:!0}),s=e.gamePipeline.listenToState(!0,{options:!0},o=>{r({currentOptions:{...o}})});r({menuNavController:i,cleanup:()=>{s(),i.destroy()}})}},cleanupCallback({state:e,updateState:t}){var r;(r=e.cleanup)==null||r.call(e),t({cleanup:void 0,menuNavController:void 0})},renderCallback({inputs:e,state:t,dispatch:r}){const n=Array(rd).fill(0).map((i,s)=>{const o=s+1;return p`
                    <td>
                        <${we.assign({selected:t.currentOptions.playerCount===o,nav:{x:o-1,y:0}})}
                            ${L("click",()=>{e.gamePipeline.currentState.options.playerCount=o})}
                        >
                            ${o}
                        </${we}>
                    </td>
                `});return p`
            <div class="options-wrapper">
                <table ${Ss("button")}>
                    <tr>
                        <th><span class="option-title">Players</span></th>
                        ${n}
                    </tr>
                </table>
                <div class="submission-buttons">
                    <${we.assign({nav:{x:0,y:1}})}
                        ${L("click",async()=>{await ob({playerCount:t.currentOptions.playerCount}),r(new dr(ur))})}
                    >
                        Back
                    </${we}>
                </div>
            </div>
        `}}),Hr=Vt({tagName:"vir-canvas",events:{canvasCreate:Q()},styles:v`
        :host {
            display: flex;
            box-sizing: border-box;
            overflow: hidden;
        }

        .canvas-wrapper {
            display: flex;
            height: 100%;
            width: 100%;
            max-height: 100%;
            max-width: 100%;
            overflow: hidden;
        }

        .error {
            color: red;
            font-weight: bold;
        }
    `,stateInitStatic:{canvasError:void 0},renderCallback({state:e,updateState:t,dispatch:r,events:n}){return e.canvasError?p`
                <p class="error">${Wi(e.canvasError)}</p>
            `:p`
            <div
                class="canvas-wrapper"
                ${gs(i=>{const s=i.target.querySelector("canvas");Qe(s,HTMLCanvasElement),s.width=i.contentRect.width,s.height=i.contentRect.height})}
            >
                <canvas
                    ${Wc(i=>{try{Qe(i,HTMLCanvasElement),r(new n.canvasCreate(i))}catch(s){t({canvasError:rl(s)})}})}
                ></canvas>
            </div>
        `}}),Za=W()({tagName:"vir-victory",styles:v`
        :host {
            display: block;
            position: relative;
        }
    `,renderCallback({inputs:e,dispatch:t}){if(!e.winningPlayers.length)return A;const r=e.winningPlayers.length>1,n=["Player",r?"s":""," ",Ad(e.winningPlayers,"and")," ",r?"have":"has"," ","won!"].join("");return p`
            <div class="end-game overlay">
                <div>
                    <h1>Victory</h1>
                    <h2>${n}</h2>
                    <p>
                        <${we}
                            ${Ss("button")}
                            ${L("click",()=>{t(new dr(ur))})}
                        >
                            Return to Menu
                        </${we}>
                    </p>
                </div>
            </div>
        `}}),Ya=W()({tagName:"vir-play-game",styles:v`
        :host {
            display: block;
            position: relative;
        }

        ${oi} {
            flex-direction: row;
        }

        ${Hr} {
            border: 1px solid #ccc;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
        }

        .debug {
            opacity: 0.5;
        }

        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10;
            top: 0;
            left: 0;
        }

        .end-game {
            font-size: 48px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            background-color: rgba(255, 255, 255, 0.8);
            animation: 120ms fade-in ease-in forwards;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,stateInitStatic:{winningPlayers:[],cleanup:void 0},initCallback({inputs:e,updateState:t}){const r=e.gamePipeline.listenToState(!0,{playState:{winningPlayers:!0}},n=>{t({winningPlayers:n||[]})});t({cleanup:r})},cleanupCallback({inputs:e,state:t,updateState:r}){var n;e.gamePipeline.currentState.canvas=void 0,(n=t.cleanup)==null||n.call(t),r({cleanup:void 0})},renderCallback({inputs:e,state:t}){const r=e.debug?p`
                  <section class="debug overlay">
                      <${oi.assign({actionBindings:e.gamePipeline.currentState.playersActionsBindings})}></${oi}>
                  </section>
              `:A,n=t.winningPlayers.length?p`
                  <div class="end-game overlay">
                      <${Za.assign({winningPlayers:t.winningPlayers})}>
                          >
                      </${Za}>
                  </div>
              `:A;return p`
            ${r} ${n}
            <${Hr}
                ${L(Hr.events.canvasCreate,i=>{const o=i.detail.getContext("2d");if(!o)throw new Error("Failed to get 2d render context from canvas element.");e.gamePipeline.currentState.canvas=i.detail,e.gamePipeline.currentState.renderContext=o})}
            ></${Hr}>
        `}}),yb=!1;Vt({tagName:"vir-forward-game-app",styles:v`
        :host,
        main {
            display: flex;
            height: 100%;
            width: 100%;
            position: relative;
            background: linear-gradient(158deg, black 0%, #094b79 47%, #33ccff 100%);
        }

        main > * {
            height: 100%;
            width: 100%;
            max-width: 100%;
            max-height: 100%;
            box-sizing: border-box;
        }

        ${ri} {
            position: absolute;
            top: 4px;
            left: 6px;
            z-index: 1000;
            text-shadow:
                1px 1px 0 white,
                -1px 1px 0 white,
                -1px -1px 0 white,
                1px -1px 0 white;
        }

        .debug-center {
            position: absolute;
            z-index: 1000000000;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }

        .crosshair {
            border-bottom: 1px solid red;
            border-right: 1px solid red;
            height: 50%;
            width: 50%;
            box-sizing: border-box;
        }
    `,stateInitStatic:{gamePipeline:og({defaultValue:ld(()=>Promise.resolve().then(()=>pb),void 0).then(e=>e.createForwardGamePipeline())}),router:hy(),currentRoute:ur,cleanup:void 0},initCallback({state:e,updateState:t}){if(!e.cleanup){const r=e.router.listen(!0,n=>{t({currentRoute:n})});t({cleanup(){r()}})}},cleanupCallback({state:e,updateState:t}){var r;(r=e.cleanup)==null||r.call(e),t({cleanup:void 0})},renderCallback({state:e}){if(cg(e.gamePipeline.value)){if(ug(e.gamePipeline.value))return Wi(e.gamePipeline.value)}else return p`
                <${aa}></${aa}>
            `;const t=e.currentRoute.paths[0]===Je.Home?p`
                      <${Ka.assign({gamePipeline:e.gamePipeline.value})}></${Ka}>
                  `:e.currentRoute.paths[0]===Je.Play?p`
                        <${Ya.assign({gamePipeline:e.gamePipeline.value,debug:yb})}></${Ya}>
                    `:e.currentRoute.paths[0]===Je.Options?p`
                          <${qa.assign({gamePipeline:e.gamePipeline.value})}></${qa}>
                      `:"Missing",r=A;return p`
            <${ri.assign({virLine:e.gamePipeline.value})}></${ri}>
            ${r}
            <main
                ${L(dr,n=>{e.router.setRoute(n.detail)})}
            >
                ${t}
            </main>
        `}});
