var Al=Object.defineProperty;var Nl=(e,t,r)=>t in e?Al(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var jr=(e,t,r)=>(Nl(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr=globalThis,Kn=tr.ShadowRoot&&(tr.ShadyCSS===void 0||tr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wn=Symbol(),Co=new WeakMap;let ma=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Wn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Kn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Co.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Co.set(r,t))}return t}toString(){return this.cssText}};const fe=e=>new ma(typeof e=="string"?e:e+"",void 0,Wn),rr=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new ma(r,e,Wn)},Pl=(e,t)=>{if(Kn)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=tr.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},ko=Kn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return fe(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Rl,defineProperty:Il,getOwnPropertyDescriptor:Bl,getOwnPropertyNames:Dl,getOwnPropertySymbols:Ol,getPrototypeOf:Hl}=Object,ke=globalThis,Mo=ke.trustedTypes,zl=Mo?Mo.emptyScript:"",Kr=ke.reactiveElementPolyfillSupport,vt=(e,t)=>e,lr={toAttribute(e,t){switch(t){case Boolean:e=e?zl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Gn=(e,t)=>!Rl(e,t),Lo={attribute:!0,type:String,converter:lr,reflect:!1,hasChanged:Gn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ke.litPropertyMetadata??(ke.litPropertyMetadata=new WeakMap);let Je=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Lo){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Il(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=Bl(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Lo}static _$Ei(){if(this.hasOwnProperty(vt("elementProperties")))return;const t=Hl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(vt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vt("properties"))){const r=this.properties,n=[...Dl(r),...Ol(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(ko(o))}else t!==void 0&&r.push(ko(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:lr).toAttribute(r,n.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:lr;this._$Em=o,this[o]=s.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Gn)(o?i:this[t],r))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(t){}firstUpdated(t){}};Je.elementStyles=[],Je.shadowRootOptions={mode:"open"},Je[vt("elementProperties")]=new Map,Je[vt("finalized")]=new Map,Kr==null||Kr({ReactiveElement:Je}),(ke.reactiveElementVersions??(ke.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=globalThis,cr=bt.trustedTypes,Ao=cr?cr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Yn="$lit$",ye=`lit$${(Math.random()+"").slice(9)}$`,qn="?"+ye,Fl=`<${qn}>`,Ve=document,$t=()=>Ve.createComment(""),Et=e=>e===null||typeof e!="object"&&typeof e!="function",pa=Array.isArray,ga=e=>pa(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Wr=`[ 	
\f\r]`,ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,No=/-->/g,Po=/>/g,De=RegExp(`>|${Wr}(?:([^\\s"'>=/]+)(${Wr}*=${Wr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ro=/'/g,Io=/"/g,va=/^(?:script|style|textarea|title)$/i,Ul=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Vl=Ul(1),le=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Bo=new WeakMap,Fe=Ve.createTreeWalker(Ve,129);function ba(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ao!==void 0?Ao.createHTML(t):t}const ya=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=ft;for(let s=0;s<r;s++){const l=e[s];let c,u,d=-1,f=0;for(;f<l.length&&(a.lastIndex=f,u=a.exec(l),u!==null);)f=a.lastIndex,a===ft?u[1]==="!--"?a=No:u[1]!==void 0?a=Po:u[2]!==void 0?(va.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=De):u[3]!==void 0&&(a=De):a===De?u[0]===">"?(a=o??ft,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?De:u[3]==='"'?Io:Ro):a===Io||a===Ro?a=De:a===No||a===Po?a=ft:(a=De,o=void 0);const h=a===De&&e[s+1].startsWith("/>")?" ":"";i+=a===ft?l+Fl:d>=0?(n.push(c),l.slice(0,d)+Yn+l.slice(d)+ye+h):l+ye+(d===-2?s:h)}return[ba(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class xt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,u]=ya(t,r);if(this.el=xt.createElement(c,n),Fe.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Fe.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Yn)){const f=u[a++],h=o.getAttribute(d).split(ye),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:h,ctor:m[1]==="."?$a:m[1]==="?"?Ea:m[1]==="@"?xa:Pt}),o.removeAttribute(d)}else d.startsWith(ye)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(va.test(o.tagName)){const d=o.textContent.split(ye),f=d.length-1;if(f>0){o.textContent=cr?cr.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],$t()),Fe.nextNode(),l.push({type:2,index:++i});o.append(d[f],$t())}}}else if(o.nodeType===8)if(o.data===qn)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(ye,d+1))!==-1;)l.push({type:7,index:i}),d+=ye.length-1}i++}}static createElement(t,r){const n=Ve.createElement("template");return n.innerHTML=t,n}}function je(e,t,r=e,n){var a,s;if(t===le)return t;let o=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=Et(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=je(e,o._$AS(e,t.values),o,n)),t}class wa{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Ve).importNode(r,!0);Fe.currentNode=o;let i=Fe.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new st(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new Sa(i,this,t)),this._$AV.push(c),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=Fe.nextNode(),a++)}return Fe.currentNode=Ve,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class st{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=je(this,t,r),Et(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==le&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ga(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&Et(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ve.createTextNode(t)),this._$AH=t}g(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=xt.createElement(ba(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const a=new wa(o,this),s=a.u(this.options);a.p(r),this.$(s),this._$AH=a}}_$AC(t){let r=Bo.get(t.strings);return r===void 0&&Bo.set(t.strings,r=new xt(t)),r}T(t){pa(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new st(this.k($t()),this.k($t()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=je(this,t,r,0),a=!Et(t)||t!==this._$AH&&t!==le,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=je(this,s[n+l],r,l),c===le&&(c=this._$AH[l]),a||(a=!Et(c)||c!==this._$AH[l]),c===P?t=P:t!==P&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.O(t)}O(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class $a extends Pt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===P?void 0:t}}class Ea extends Pt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==P)}}class xa extends Pt{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=je(this,t,r,0)??P)===le)return;const n=this._$AH,o=t===P&&n!==P||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==P&&(n===P||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Sa{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){je(this,t)}}const jl={j:Yn,P:ye,A:qn,C:1,M:ya,L:wa,R:ga,V:je,D:st,I:Pt,H:Ea,N:xa,U:$a,B:Sa},Gr=bt.litHtmlPolyfillSupport;Gr==null||Gr(xt,st),(bt.litHtmlVersions??(bt.litHtmlVersions=[])).push("3.1.0");const Kl=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new st(t.insertBefore($t(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yt=class extends Je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return le}};var ha;yt._$litElement$=!0,yt.finalized=!0,(ha=globalThis.litElementHydrateSupport)==null||ha.call(globalThis,{LitElement:yt});const Yr=globalThis.litElementPolyfillSupport;Yr==null||Yr({LitElement:yt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},lt=e=>(...t)=>({_$litDirective$:e,values:t});class Ke{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:Wl}=jl,Do=()=>document.createComment(""),ht=(e,t,r)=>{var i;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=n.insertBefore(Do(),o),s=n.insertBefore(Do(),o);r=new Wl(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(i=r._$AQ)==null||i.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==o||l){let c=r._$AA;for(;c!==a;){const u=c.nextSibling;n.insertBefore(c,o),c=u}}}return r},Oe=(e,t,r=e)=>(e._$AI(t,r),e),Gl={},Yl=(e,t=Gl)=>e._$AH=t,ql=e=>e._$AH,qr=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=lt(class extends Ke{constructor(e){var t;if(super(e),e.type!==kr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.st)!=null&&n.has(i))&&this.it.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.it)i in t||(r.remove(i),this.it.delete(i));for(const i in t){const a=!!t[i];a===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(a?(r.add(i),this.it.add(i)):(r.remove(i),this.it.delete(i)))}return le}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oo=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Xl=lt(class extends Ke{constructor(e){if(super(e),e.type!==kr.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ht(e,t,r).values}update(e,[t,r,n]){const o=ql(e),{values:i,keys:a}=this.ht(t,r,n);if(!Array.isArray(o))return this.dt=a,i;const s=this.dt??(this.dt=[]),l=[];let c,u,d=0,f=o.length-1,h=0,m=i.length-1;for(;d<=f&&h<=m;)if(o[d]===null)d++;else if(o[f]===null)f--;else if(s[d]===a[h])l[h]=Oe(o[d],i[h]),d++,h++;else if(s[f]===a[m])l[m]=Oe(o[f],i[m]),f--,m--;else if(s[d]===a[m])l[m]=Oe(o[d],i[m]),ht(e,l[m+1],o[d]),d++,m--;else if(s[f]===a[h])l[h]=Oe(o[f],i[h]),ht(e,o[d],o[f]),f--,h++;else if(c===void 0&&(c=Oo(a,h,m),u=Oo(s,d,f)),c.has(s[d]))if(c.has(s[f])){const g=u.get(a[h]),E=g!==void 0?o[g]:null;if(E===null){const x=ht(e,o[d]);Oe(x,i[h]),l[h]=x}else l[h]=Oe(E,i[h]),ht(e,o[d],E),o[g]=null;h++}else qr(o[f]),f--;else qr(o[d]),d++;for(;h<=m;){const g=ht(e,l[m+1]);Oe(g,i[h]),l[h++]=g}for(;d<=f;){const g=o[d++];g!==null&&qr(g)}return this.dt=a,Yl(e,l),le}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hn extends Ke{constructor(t){if(super(t),this.et=P,t.type!==kr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this.vt=void 0,this.et=t;if(t===le)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}hn.directiveName="unsafeHTML",hn.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ho extends hn{}Ho.directiveName="unsafeSVG",Ho.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zl(e,t,r){return e?t(e):r==null?void 0:r(e)}class _a extends yt{}function Jl(e,t){return e.filter((r,n)=>!t.includes(n))}function Ql(e,t){return e.includes(t)}async function ec(e,t){await tc(e,t)}async function tc(e,t){return await e.reduce(async(n,o,i,a)=>{const s=await n,l=await t(o,i,a);return s.push(l),s},Promise.resolve([]))}function z(e){return!!e}function rc(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const nc={capitalizeFirstLetter:!1};function oc(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function ic(e,t){return t.capitalizeFirstLetter?oc(e):e}function Ta(e,t=nc){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return ic(n,t)}var ot;(function(e){e.Upper="upper",e.Lower="lower"})(ot||(ot={}));function ac(e){return e.toLowerCase()!==e.toUpperCase()}function zo(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!ac(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===ot.Upper&&o!==o.toUpperCase())return!1;if(t===ot.Lower&&o!==o.toLowerCase())return!1}return!0}function sc(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=zo(a,ot.Lower,{blockNoCaseCharacters:!0})||zo(s,ot.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function lc(e,t){return e.split(t)}function cc({max:e,min:t,value:r}){return r>e?t:r<t?e:r}function He(e){const t=Math.pow(10,e.digits),r=e.number*t;return Number((Math.round(r)/t).toFixed(e.digits))}function Fo({value:e,min:t,max:r}){return Math.min(Math.max(e,t),r)}const uc=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function B(e,t){return e?uc.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ca(e,t){return e&&t.every(r=>B(e,r))}function dc(e){return!!(B(e,"then")&&typeof e.then=="function")}async function ka(e){return await Promise.resolve().then(()=>e())}function Ma(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>We(r).trim()).join(`
`))}function We(e){return e?e instanceof Error?e.message:B(e,"message")?String(e.message):String(e):""}function Lr(e){return e instanceof Error?e:new Error(We(e))}function mn(e){return Array.isArray(e)?"array":typeof e}function H(e,t){return mn(e)===t}function me(e){return!!e&&typeof e=="object"}function fc(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function D(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function St(e){return D(e).map(t=>e[t])}function hc(e){return Object.fromEntries(e)}function La(e,t,r=!1,n={}){const o=D(e),i=new Set(D(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!B(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(u){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${u}`)}const l=e[a],c=t[a];n[a]||Aa(l,c,s,r,n[a]??{})})}function Aa(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{B(t,"constructor")&&(!B(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{Aa(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${We(f)}`)}}).filter(z).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):me(t)&&La(e,t,n,o)}function Uo({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Vo="Failed to compare objects using JSON.stringify";function jo(e,t,r){return Uo({source:e,errorHandler(n){if(r)return"";throw n}})===Uo({source:t,errorHandler(n){if(r)return"";throw n}})}function Z(e,t,r={}){try{return e===t?!0:me(e)&&me(t)?jo(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Z(e[o],t[o])):!1:jo(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Lr(n);throw o.message.startsWith(Vo)||(o.message=`${Vo}: ${o.message}`),o}}function mc(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function pc(e){return D(e).filter(t=>isNaN(Number(t)))}function Na(e){return pc(e).map(r=>e[r])}function Pa(e,t){return Na(t).includes(e)}function Ra(e,t){return D(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function gc(e,t){return Ra(e,r=>!t.includes(r))}function Ko(e,t){return Ra(e,r=>t.includes(r))}function Ee(e,t){let r=!1;const n=D(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(D(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function pn(e,t){try{return Ia(e,t),!0}catch{return!1}}function Ia(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function tt(...e){if(!pn(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(n=>{if(H(n,"object"))H(t,"object")||(t={...n});else{t=n;return}Object.entries(n).forEach(([o,i])=>{r[o]||(r[o]=[]),r[o].push(i)})}),H(t,"object")&&Object.entries(r).forEach(([n,o])=>{const i=tt(...o);i===void 0&&n in t?delete t[n]:i!==void 0&&(t[n]=i)}),t}function gn(e,t){const r=t,n=e;if(H(n,"array"))return n.map(a=>gn(a,t));const o=r[0];if(!B(n,o))return;const i=n[o];return r.length>1?gn(i,r.slice(1)):i}function _t(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${_t.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function vn(e){const t=_t();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const vc=globalThis.crypto;function Ba(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return vc.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function bc({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function yc(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(z);return t.length?`?${t.join("&")}`:""}function wc(e){return bc({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=lc(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(z)}function $c(e,t){const r=H(e,"string")?new URL(e):e,n=wc(r.search),o=Object.fromEntries(n);return t&&La(o,t),o}const Ec="px";function xc(e){return Sc({value:e,suffix:Ec})}function Sc({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Ge(e){if(me(e))return Ee(e,(r,n)=>{if(!H(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(sc(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?fe(r):r.startsWith("-")?rr`-${fe(r)}`:rr`--${fe(r)}`;return{name:a,value:rr`var(${a}, ${fe(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${Ge.name}' function.`)}function _c({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function Tc(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function bn(e){return B(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function Xn(e){return B(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Da(e){return e.map(t=>bn(t)?t.definition:t).filter(t=>Xn(t))}const Oa=new WeakMap;function Cc(e,t){var o;const r=Da(t);return(o=Ha(Oa,[e,...r]).value)==null?void 0:o.template}function kc(e,t,r){const n=Da(t);return Fa(Oa,[e,...n],r)}function Ha(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=za(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ha(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function za(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Fa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=za(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),Fa(l,t,r,n+1)}const Mc=new WeakMap;function Ua(e,t,r){const n=Cc(e,t),o=n??r();if(!n){const s=kc(e,t,o);if(s.result)Mc.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=Tc(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Va(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,m=t[h];n&&n(c);let g,E=[];if(typeof f=="string"&&(g=r(f,c,m),g)){o[d]=f+g.replacement,a.push(h);const T=g.getExtraValues;E=T?T(m):[],E.length&&T?(o[d]+=" ",E.forEach((A,L)=>{L&&o.push(" ")}),s.push(A=>{const L=A[h],V=T(L);return{index:h,values:V}}),o.push(c)):o[d]+=c}g||o.push(c);const x=e.raw[u];g?(i[d]=i[d]+g.replacement+x,E.length&&E.forEach(()=>{i.push("")})):i.push(x)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const u=s.map(d=>d(c)).flat();return{valueIndexDeletions:a,valueInsertions:u}}}}function Lc(...[e,t,r]){if(Xn(r))return{replacement:r.tagName,getExtraValues:void 0}}function Ac(e,t){return Va(e,t,Lc)}function y(e,...t){const r=Ua(e,t,()=>Ac(e,t));return rr(r.strings,...r.values)}const Zn=Symbol("key for ignoring inputs not having been set yet"),Nc={[Zn]:!0,allowPolymorphicState:!1};function ja(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof _a?!0:ja(r)}function Ka(e,t){const r=e.instanceState;D(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&D(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Pc(e)}function Pc(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function Wo(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Rc extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Ar(){return e=>{var t;return t=class extends Rc{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function re(){return Ar()}function Ic(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=Ar()([e,n].join("-"));return r[n]=o,r},{}):{}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bc={attribute:!0,type:String,converter:lr,reflect:!1,hasChanged:Gn},Dc=(e=Bc,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.C(a,void 0,e),s}}}if(n==="setter"){const{name:a}=r;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function Oc(e){return(t,r)=>typeof r=="object"?Dc(e,t,r):((n,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}const Hc="_elementVirStateSetup";function zc(e){return me(e)?Hc in e:!1}function Fc(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return mn(e)===mn(t)&&r}const Wa=Symbol("and"),Ga=Symbol("or"),Ya=Symbol("exact"),qa=Symbol("enum"),Jn=Symbol("unknown"),Xa="__vir__shape__definition__key__do__not__use__in__actual__objects";function Za(e){return B(e,Xa)}const Ja="__vir__shape__specifier__key__do__not__use__in__actual__objects",Uc=[Wa,Ga,Ya,qa,Jn];function Vc(){return jc([],Jn)}function Nr(e){return Rt(e,Ga)}function Qn(e){return Rt(e,Wa)}function eo(e){return Rt(e,Ya)}function to(e){return Rt(e,qa)}function ro(e){return Rt(e,Jn)}function Rt(e,t){const r=Pr(e);return!!r&&r.specifierType===t}function jc(e,t){return{[Ja]:!0,specifierType:t,parts:e}}function nr(e,t){const r=Pr(t);if(r){if(Qn(r))return r.parts.every(n=>nr(e,n));if(Nr(r))return r.parts.some(n=>nr(e,n));if(eo(r))return me(e)?nr(e,r.parts[0]):e===r.parts[0];if(to(r))return Object.values(r.parts[0]).some(n=>n===e);if(ro(r))return!0}return Fc(e,t)}function Pr(e){if(me(e)&&B(e,Ja)){if(!B(e,"parts")||!H(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!B(e,"specifierType")||!Ql(Uc,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function yn(e,t=!1){return wn(e)}function wn(e){const t=Pr(e);if(t){if(Nr(t)||eo(t))return wn(t.parts[0]);if(Qn(t))return t.parts.reduce((r,n)=>Object.assign(r,wn(n)),{});if(to(t))return Object.values(t.parts[0])[0];if(ro(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Za(e)?yn(e.shape):e instanceof RegExp||H(e,"array")?e:me(e)?Ee(e,(r,n)=>yn(n)):e}function Kc(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:yn(e),[Xa]:!0}}class oe extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Wc(e,t,r={}){try{return Gc(e,t,r),!0}catch{return!1}}function Gc(e,t,r={}){ze(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Qa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ze(e,t,r,n){if(ro(t))return!0;if(Za(t))return ze(e,t.shape,r,n);const o=Qa(r);if(Pr(e))throw new oe(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!nr(e,t))throw new oe(`Subject does not match shape definition at key ${o}`);if(H(t,"function"))return H(e,"function");if(me(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(Nr(t))l=t.parts.some(c=>{try{const u=ze(e,c,r,{...n});return Object.assign(s,u),!0}catch(u){if(u instanceof oe)return!1;throw u}});else if(Qn(t))l=t.parts.every(c=>{try{const u=ze(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,u),!0}catch(u){if(u instanceof oe)return!1;throw u}});else if(eo(t)){const c=ze(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(to(t))throw new oe(`Cannot compare an enum specifier to an object at ${o}`);if(H(t,"array")&&H(a,"array"))l=a.every((c,u)=>{const d=t.some(f=>{try{return ze(c,f,[...r,u],n),!0}catch(h){if(h instanceof oe)return!1;throw h}});return s[u]=d,d});else{const c=Yc({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).join(",")}`;throw new oe(u)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,u])=>{if(!u)throw new oe(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function Yc({keys:e,options:t,shape:r,subject:n}){const o=Qa(e),i={};if(me(r)){const a=new Set(D(n)),s=new Set(D(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new oe(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var f;const c=r[l],u=Nr(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!a.has(l)&&!u&&!d)throw new oe(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=r[l];ze(c,u,[...e,l],t),i[l]=!0})}else throw new oe(`shape definition at ${o} was not an object.`);return i}const qc=Kc({addListener(){return!1},removeListener(){return!1},value:Vc()});function Xr(e){return Wc(e,qc,{allowExtraKeys:!0})}function es(e,t){t in e||Oc()(e,t)}function Xc(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Go(e,t){const r=e;function n(a){t?Xc(a,e,e.tagName):es(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set(a,s,l){const c=zc(l)?l._elementVirStateSetup():l;n(s);const u=r[s];function d(h){a[s]=h,r[s]=h}const f=e.observablePropertyListenerMap[s];if(u!==c&&Xr(u)&&(f!=null&&f.length)&&u.removeListener(f),Xr(c))if(f)c.addListener(f);else{let h=function(){e.requestUpdate()};e.observablePropertyListenerMap[s]=h,c.addListener(h)}else Xr(u)&&(e.observablePropertyListenerMap[s]=void 0);return d(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function Zc(e){return e?Ee(e,t=>t):{}}function Jc({hostClassNames:e,cssVars:t}){return{hostClasses:Ee(e,(r,n)=>({name:fe(n),selector:fe(`:host(.${n})`)})),cssVars:t}}function Qc({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&D(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function eu(e,t){function r(o){D(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var tu=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Rr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Nc,...e.options},n=Ic(e.tagName,e.events),o=Zc(e.hostClasses);e.hostClasses&&Wo(e.tagName,e.hostClasses),e.cssVars&&Wo(e.tagName,e.cssVars);const i=e.cssVars?Ge(e.cssVars):{},a=typeof e.styles=="function"?e.styles(Jc({hostClassNames:o,cssVars:i})):e.styles||y``,s=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends _a{createRenderParams(){return eu(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{ja(this)&&!this._haveInputsBeenSet&&!r[Zn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Rr.name}' to define ${e.tagName}.`),this._hasRendered=!0;const u=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Qc({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this._lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Lr(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this._lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(u){Ka(this,u)}constructor(){var d;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Go(this,!1),this.instanceState=Go(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};D(u).forEach(f=>{es(this,f),this.instanceState[f]=u[f]}),this.definition=c}},tu(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Ta(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function ce(){return e=>Rr({...e,options:{[Zn]:!1,...e.options}})}function ts(e,t){return Tt(e,t),e.element}function ru(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Tt(e,t){const r=ru(e),n=r?`: in ${r}`:"";if(e.type!==kr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function nu(e,t){return t?Yo(e,t):Yo(void 0,e)}const Yo=lt(class extends Ke{constructor(e){super(e),this.element=ts(e,"assign")}render(e,t){return Ka(this.element,t),le}});function ou(e,t){return e===t}function iu(e,t=ou){const r=new Set;function n(){r.forEach(i=>i(o.value))}const o={value:e,setValue(i){t(o.value,i)||(o.value=i,n())},addListener(i){const a=!r.has(i);return a&&r.add(i),a},removeListener(i){return r.delete(i)}};return o}const Zr=Symbol("not set");function au(e){let t=Zr,r;const n=e&&"updateCallback"in e?e.updateCallback:void 0;let o=_t();const i=iu(o.promise);function a(){o=_t(),i.setValue(o.promise)}function s(m){o.resolve(m),i.setValue(m)}function l(m){o.reject(m),i.setValue(m)}function c(m){m!==r&&(r=m,o.isSettled()&&a(),m.then(g=>{r===m&&s(g)}).catch(g=>{r===m&&(o.promise.catch(()=>{}),l(Lr(g)))}))}function u(m,g){if(!n)throw console.error(e),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const E={...m},x={...g};if(t===Zr||!Z(E,t,{ignoreNonSerializableProperties:!0})){t=E;const T=n(t,x);c(T)}}function d(m,g){t=Zr,u(m,g)}const f=e&&"defaultValue"in e?e.defaultValue:new Promise(()=>{});return f instanceof Promise?c(f):s(f),Object.assign(i,{setNewPromise(m){c(m)},setResolvedValue(m){m!==i.value&&(o.isSettled()&&a(),o.resolve(m),s(m))},updateTrigger:n?u:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:n?d:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}})}function su(...e){return{_elementVirStateSetup(){return au(...e)}}}function k(e,t){return lu(e,t)}const lu=lt(class extends Ke{constructor(e){super(e),this.element=ts(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),le}}),qo="onDomCreated",Xo=lt(class extends Ke{constructor(e){super(e),Tt(e,qo)}update(e,[t]){Tt(e,qo);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Jr="onResize",rs=lt(class extends Ke{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Tt(e,Jr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Jr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Tt(e,Jr),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function cu(e,t,r,n){const o=e.value;return o instanceof Error?n?n(o):We(o):dc(o)?t:r?r(o):o}function ae(e,t,r){return Zl(e,()=>t,()=>r)}function ns(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),ce()(r(n))),defineElementNoInputs:n=>(t(n),Rr(r(n)))}}function uu(...[e,t,r]){const n=bn(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=Xn(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(c){const u=bn(c)?c.inputs:void 0;return[o&&u?nu(u):void 0].filter(z)}}}function du(e){}function fu(e){return Va(e.strings,e.values,uu,du)}function p(e,...t){const r=Vl(e,...t),n=Ua(e,t,()=>fu(r));return{...r,strings:n.strings,values:n.values}}const hu=0;function os(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==hu)}class Ir extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Zo extends Ir{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Ct="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const mu=globalThis.history.pushState;function Jo(...e){const t=mu.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ct)),t}const pu=globalThis.history.replaceState;function Qo(...e){const t=pu.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ct)),t}function gu(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Jo)throw new Zo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Qo)throw new Zo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Jo,globalThis.history.replaceState=Qo,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ct))})}}function vu(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?$c(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function is(e){return e.replace(/(?:^\/|\/+$)/g,"")}function as({routeBase:e,windowPath:t}){if(!e)return"";const r=is(e);if(ss({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?as({routeBase:n,windowPath:t}):""}function ss({routeBase:e,windowPath:t}){const r=is(e);return r?t.startsWith(`/${r}`):!1}class bu extends Ir{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function ls(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const ei=6;function ti(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>ei)throw new bu(`Route sanitization depth has exceed the max of ${ei} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(ls(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Qr extends Ir{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function yu(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Qr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Qr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Qr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function wu(e,t,r=!1){const n=cs(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function cs(e,t){var s;const r=ss({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?yc(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(z).join("/")}${n}${i}`}function us(e={}){yu(e),gu();const t=e.routeBase?as({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>ti(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},u=o.sanitizeFullRoute(c);if(!(!s&&ls(l,u)))return wu(u,t,a)},createRoutesUrl(i){return cs(i,t)},getCurrentRawRoutes(){return vu(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Ir(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(Ct,n),r=!0),i&&ti(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(Ct,n),r=!1),a},sanitizationDepth:0};return o}var he=(e=>(e.VersionSelector="version-selector",e.Design="design",e.V1="v1",e))(he||{});const ds=hc(Na(he).filter(e=>e!=="version-selector").map(e=>[e,e]));function $u(e){return e in ds}const $n={paths:["version-selector"],search:void 0,hash:void 0};let ri=0;function Eu(){if(ri++,ri>1)throw new Error("Illegal to create multiple copies of the game router.");return us({maxListenerCount:1,routeBase:"forward-game",routeSanitizer(t){const r=t.paths[0];return r?r===he.VersionSelector?{...t,paths:[he.VersionSelector]}:r in ds||r===he.Design?t:$n:$n}})}const no=Ar()("change-route-event");function xu(e,t){return B(e,"entryType")&&e.entryType===t}var O;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(O||(O={}));function Ye(e,t){return e.controlType===t}var U;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(U||(U={}));const fs=Symbol("any-type"),Su={[U.Checkbox]:!1,[U.Color]:"",[U.Dropdown]:"",[U.Hidden]:fs,[U.Number]:0,[U.Text]:""};function _u(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=Su[o.controlType];i!==fs&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function oo(e,t){const r=ur(e.title);return e.parent?[...oo(e.parent,!1),ur(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function ur(e){return rc(e).toLowerCase().replaceAll(/\s/g,"-")}function Tu({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Cu(){return e=>Br(e)}function Br(e){const t={...e,entryType:O.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:O.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(z)};r.add(n.title),t.elementExamples[ur(o.title)]=o}}),t}var $e;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})($e||($e={}));async function En(e=1){const t=_t();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function ku(e){return e.map(t=>({value:t,sort:Ba()})).sort((t,r)=>t.sort.localeCompare(r.sort)).map(({value:t})=>t)}async function Mu(e){return Lu(e,1)}async function Lu(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{Ia(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}const Au={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},Nu=Object.keys(Au),Pu=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...Nu,...Pu];function pt(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const Ru={[O.ElementExample]:()=>[],[O.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),..._u(e.controls,e.title)].filter(z),[O.Root]:()=>[]},dr="_isBookTreeNode",hs=new Map;function Iu(e){return hs.get(e)}function Bu(e,t){mc(hs,e,()=>t)}function rt(e,t){return!!(ms(e)&&e.entry.entryType===t)}function ms(e){return!!(Ca(e,[dr,"entry"])&&e[dr])}function Du(){return{[dr]:!0,entry:{entryType:O.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Ou({entries:e,debug:t}){const r=Iu(e);if(r)return r;const n=Du();e.forEach(a=>io({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=ps(n),i={tree:n,flattenedNodes:o};return Bu(e,i),t&&console.info("element-book tree:",n),i}function Hu(e,t,r){if(!t.parent)return e;const n=xn(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),io({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=xn(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${oo(t,!1)}`);return o}function io({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Ru[t.entryType](t);t.errors.push(...o);const i=Hu(e,t,r),a=ur(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[dr]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,xu(t,O.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>io({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function xn(e,t){const r=ms(e)?e.fullUrlBreadcrumbs.slice(0,-1):oo(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function ps(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>ps(o));return[e,...r].flat()}function ao(e,t){return so(e,["",...t],void 0)}function so(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&so(i,n,r);return{...e.controls,...a}}function zu(e,t,r){const n={...e};return so(n,["",...t],r),n}function gs(e,t){const r=(t==null?void 0:t.controls)||(rt(e,O.Page)?Ee(e.entry.controls,(o,i)=>i.initValue):{});return{children:Ee(e.children,(o,i)=>{var a;return gs(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function Fu({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const Uu=Ba(32);function or(e){return e.join(Uu)}function vs(e){if(!e.length)return[];const t=or(e),r=vs(e.slice(0,-1));return[t,...r]}const Vu=["error","errors"];function ju(e){return Vu.includes(e)}function Ku({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),or(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&ju(t),a=or(o.fullUrlBreadcrumbs);if(Fu({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=vs(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=or(o.fullUrlBreadcrumbs),a=r[i];if(!H(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var K;(function(e){e.Search="search",e.Book="book"})(K||(K={}));function Sn(e){return e[0]===K.Book?"":e[1]?decodeURIComponent(e[1]):""}const it={hash:void 0,paths:[K.Book],search:void 0};function Wu(e){return us({routeBase:e,routeSanitizer(t){return{paths:Gu(t.paths),hash:void 0,search:void 0}}})}function Gu(e){const t=e[0];if(Pa(t,K)){if(t===K.Book)return[K.Book,...e.slice(1)];if(t===K.Search)return e[1]?[t,e[1]]:[K.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return it.paths}const S=Ge({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Yu={nav:{hover:{background:S["element-book-nav-hover-background-color"],foreground:S["element-book-nav-hover-foreground-color"]},active:{background:S["element-book-nav-active-background-color"],foreground:S["element-book-nav-active-foreground-color"]},selected:{background:S["element-book-nav-selected-background-color"],foreground:S["element-book-nav-selected-foreground-color"]}},accent:{icon:S["element-book-accent-icon-color"]},page:{background:S["element-book-page-background-color"],backgroundFaint1:S["element-book-page-background-faint-level-1-color"],backgroundFaint2:S["element-book-page-background-faint-level-2-color"],foreground:S["element-book-page-foreground-color"],foregroundFaint1:S["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:S["element-book-page-foreground-faint-level-2-color"]}};function qu(e,t){bs(e,t,Yu)}function _n(e){return B(e,"_$cssResult$")}function ni(e){return Ca(e,["name","value","default"])&&H(e.default,"string")&&_n(e.name)&&_n(e.value)}function bs(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(_n(o)){if(!ni(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);_c({forCssVar:i,onElement:e,toValue:String(o)})}else{if(ni(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);bs(e,o,i)}})}function R(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function It(e){return Me(e)==="string"}function Me(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function fr(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function ys(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ws(e){return e[e.length-1]}function hr(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function $s(e,t,r){return(r-e)/(t-e)}function lo(e,t,r){return hr(t[0],t[1],$s(e[0],e[1],r))}function Es(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Xu=Object.freeze({__proto__:null,interpolate:hr,interpolateInv:$s,isString:It,last:ws,mapRange:lo,multiplyMatrices:R,parseCoordGrammar:Es,parseFunction:ys,toPrecision:fr,type:Me});class Zu{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Le=new Zu;var pe={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const ie={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Tn(e){return Array.isArray(e)?e:ie[e]}function mr(e,t,r,n={}){if(e=Tn(e),t=Tn(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Le.run("chromatic-adaptation-start",o),o.M||(o.W1===ie.D65&&o.W2===ie.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===ie.D50&&o.W2===ie.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Le.run("chromatic-adaptation-end",o),o.M)return R(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Ju=75e-6,Y=class Y{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Y.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Tn(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Qu(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Le.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Ju}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=oi(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=oi(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Y.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Y)return t;if(Me(t)==="string"){let o=Y.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Y.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=Me(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Y.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Me(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=Y.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===a||((l=u.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...u};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};jr(Y,"registry",{}),jr(Y,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=Y;function Qu(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function oi(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Es(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=lo(s,l,i)),i=fr(i,o),c&&(i+=c),i})}return e}var Q=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class W extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Q),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=R(t.toXYZ_M,r);return this.white!==this.base.white&&(n=mr(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=mr(this.base.white,this.white,r),R(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function xs(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(Le.run("parse-start",r),r.color)return r.color;if(r.parsed=ys(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const m=Object.keys(f.coords).map((g,E)=>r.parsed.args[E]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:m,alpha:u}}}let d="";if(c in b.registry){let f=(s=(a=(i=b.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||ws(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([m,g],E)=>{var ue;let x=u.coordGrammar[E],T=(ue=f[E])==null?void 0:ue.type,A=x.find(G=>G==T);if(!A){let G=g.name||m;throw new TypeError(`${T} not allowed for ${G} in ${l}()`)}let L=A.range;T==="<percentage>"&&(L||(L=[0,1]));let V=g.range||g.refRange;return L&&V&&(f[E]=lo(L,V,f[E])),A})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function _(e){if(!e)throw new TypeError("Empty color reference");It(e)&&(e=xs(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Bt(e,t){return t=b.get(t),t.from(e)}function ee(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return Bt(e,r)[n]}function Ss(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function Ae(e,t,r){if(e=_(e),arguments.length===2&&Me(arguments[1])==="object"){let n=arguments[1];for(let o in n)Ae(e,o,n[o])}else{typeof r=="function"&&(r=r(ee(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),i=Bt(e,n);i[o]=r,Ss(e,n,i)}return e}var co=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Q,fromBase:e=>mr(Q.white,"D50",e),toBase:e=>mr("D50",Q.white,e),formats:{color:{}}});const ed=216/24389,ii=24/116,Ut=24389/27;let en=ie.D50;var q=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:en,base:co,fromBase(e){let r=e.map((n,o)=>n/en[o]).map(n=>n>ed?Math.cbrt(n):(Ut*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ii?Math.pow(t[0],3):(116*t[0]-16)/Ut,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ut,t[2]>ii?Math.pow(t[2],3):(116*t[2]-16)/Ut].map((n,o)=>n*en[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Dr(e){return(e%360+360)%360}function td(e,t){if(e==="raw")return t;let[r,n]=t.map(Dr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var kt=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:q,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ai=25**7,pr=Math.PI,si=180/pr,qe=pr/180;function Cn(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=q.from(e),l=kt.from(q,[i,a,s])[1],[c,u,d]=q.from(t),f=kt.from(q,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let m=((l+f)/2)**7,g=.5*(1-Math.sqrt(m/(m+ai))),E=(1+g)*a,x=(1+g)*u,T=Math.sqrt(E**2+s**2),A=Math.sqrt(x**2+d**2),L=E===0&&s===0?0:Math.atan2(s,E),V=x===0&&d===0?0:Math.atan2(d,x);L<0&&(L+=2*pr),V<0&&(V+=2*pr),L*=si,V*=si;let ue=c-i,G=A-T,M=V-L,F=L+V,Ur=Math.abs(M),ut;T*A===0?ut=0:Ur<=180?ut=M:M>180?ut=M-360:M<-180?ut=M+360:console.log("the unthinkable has happened");let Eo=2*Math.sqrt(A*T)*Math.sin(ut*qe/2),Tl=(i+c)/2,Vr=(T+A)/2,xo=Math.pow(Vr,7),ve;T*A===0?ve=F:Ur<=180?ve=F/2:F<360?ve=(F+360)/2:ve=(F-360)/2;let So=(Tl-50)**2,Cl=1+.015*So/Math.sqrt(20+So),_o=1+.045*Vr,dt=1;dt-=.17*Math.cos((ve-30)*qe),dt+=.24*Math.cos(2*ve*qe),dt+=.32*Math.cos((3*ve+6)*qe),dt-=.2*Math.cos((4*ve-63)*qe);let To=1+.015*Vr*dt,kl=30*Math.exp(-1*((ve-275)/25)**2),Ml=2*Math.sqrt(xo/(xo+ai)),Ll=-1*Math.sin(2*kl*qe)*Ml,Ft=(ue/(r*Cl))**2;return Ft+=(G/(n*_o))**2,Ft+=(Eo/(o*To))**2,Ft+=Ll*(G/(n*_o))*(Eo/(o*To)),Math.sqrt(Ft)}const rd=75e-6;function wt(e,t=e.space,{epsilon:r=rd}={}){e=_(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Mt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Ne(e,{method:t=pe.gamut_mapping,space:r=e.space}={}){if(It(arguments[1])&&(r=arguments[1]),r=b.get(r),wt(e,r,{epsilon:0}))return _(e);let n=J(e,r);if(t!=="clip"&&!wt(e,r)){let o=Ne(Mt(n),{method:"clip",space:r});if(Cn(e,o)>2){let i=b.resolveCoord(t),a=i.space,s=i.id,l=J(n,a),u=(i.range||i.refRange)[0],d=.01,f=u,h=ee(l,s);for(;h-f>d;){let m=Mt(l);m=Ne(m,{space:r,method:"clip"}),Cn(l,m)-2<d?f=ee(l,s):h=ee(l,s),Ae(l,s,(f+h)/2)}n=J(l,r)}else n=o}if(t==="clip"||!wt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=J(n,e.space)),e.coords=n.coords,e}Ne.returns="color";function J(e,t,{inGamut:r}={}){e=_(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Ne(o)),o}J.returns="color";function gr(e,{precision:t=pe.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=_(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!wt(e)&&(s=Ne(Mt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(h=>fr(h,t)));let u=[...s];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=fr(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";i=`${c}(${u.join(r.commas?", ":" ")}${f})`}return i}const nd=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],od=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Or=new W({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:nd,fromXYZ_M:od,formats:{color:{}}});const Vt=1.09929682680944,li=.018053968510807;var _s=new W({id:"rec2020",name:"REC.2020",base:Or,toBase(e){return e.map(function(t){return t<li*4.5?t/4.5:Math.pow((t+Vt-1)/Vt,1/.45)})},fromBase(e){return e.map(function(t){return t>=li?Vt*Math.pow(t,.45)-(Vt-1):4.5*t})},formats:{color:{}}});const id=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],ad=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ts=new W({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:id,fromXYZ_M:ad});const sd=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],ld=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Cs=new W({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:sd,fromXYZ_M:ld,formats:{color:{}}}),ci={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ui=Array(3).fill("<percentage> | <number>[0, 255]"),di=Array(3).fill("<number>[0, 255]");var Lt=new W({id:"srgb",name:"sRGB",base:Cs,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ui},rgb_number:{name:"rgb",commas:!0,coords:di,noAlpha:!0},color:{},rgba:{coords:ui,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:di},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=ci.black,t.alpha=0):t.coords=ci[e],t.coords)return t}}}}),ks=new W({id:"p3",name:"P3",base:Ts,fromBase:Lt.fromBase,toBase:Lt.toBase,formats:{color:{id:"display-p3"}}});pe.display_space=Lt;if(typeof CSS<"u"&&CSS.supports)for(let e of[q,_s,ks]){let t=e.getMinCoords(),n=gr({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){pe.display_space=e;break}}function cd(e,{space:t=pe.display_space,...r}={}){let n=gr(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!pe.display_space)n=new String(n),n.color=e;else{let o=J(e,t);n=new String(gr(o,r)),n.color=o}return n}function Ms(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function ud(e,t){return e=_(e),t=_(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Pe(e){return ee(e,[Q,"y"])}function Ls(e,t){Ae(e,[Q,"y"],t)}function dd(e){Object.defineProperty(e.prototype,"luminance",{get(){return Pe(this)},set(t){Ls(this,t)}})}var fd=Object.freeze({__proto__:null,getLuminance:Pe,register:dd,setLuminance:Ls});function hd(e,t){e=_(e),t=_(t);let r=Math.max(Pe(e),0),n=Math.max(Pe(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const md=.56,pd=.57,gd=.62,vd=.65,fi=.022,bd=1.414,yd=.1,wd=5e-4,$d=1.14,hi=.027,Ed=1.14;function mi(e){return e>=fi?e:e+(fi-e)**bd}function Xe(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function xd(e,t){t=_(t),e=_(e);let r,n,o,i,a,s;t=J(t,"srgb"),[i,a,s]=t.coords;let l=Xe(i)*.2126729+Xe(a)*.7151522+Xe(s)*.072175;e=J(e,"srgb"),[i,a,s]=e.coords;let c=Xe(i)*.2126729+Xe(a)*.7151522+Xe(s)*.072175,u=mi(l),d=mi(c),f=d>u;return Math.abs(d-u)<wd?n=0:f?(r=d**md-u**pd,n=r*$d):(r=d**vd-u**gd,n=r*Ed),Math.abs(n)<yd?o=0:n>0?o=n-hi:o=n+hi,o*100}function Sd(e,t){e=_(e),t=_(t);let r=Math.max(Pe(e),0),n=Math.max(Pe(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const _d=5e4;function Td(e,t){e=_(e),t=_(t);let r=Math.max(Pe(e),0),n=Math.max(Pe(t),0);return n>r&&([r,n]=[n,r]),n===0?_d:(r-n)/n}function Cd(e,t){e=_(e),t=_(t);let r=ee(e,[q,"l"]),n=ee(t,[q,"l"]);return Math.abs(r-n)}const kd=216/24389,pi=24/116,jt=24389/27;let tn=ie.D65;var kn=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:tn,base:Q,fromBase(e){let r=e.map((n,o)=>n/tn[o]).map(n=>n>kd?Math.cbrt(n):(jt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>pi?Math.pow(t[0],3):(116*t[0]-16)/jt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/jt,t[2]>pi?Math.pow(t[2],3):(116*t[2]-16)/jt].map((n,o)=>n*tn[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const rn=Math.pow(5,.5)*.5+.5;function Md(e,t){e=_(e),t=_(t);let r=ee(e,[kn,"l"]),n=ee(t,[kn,"l"]),o=Math.abs(Math.pow(r,rn)-Math.pow(n,rn)),i=Math.pow(o,1/rn)*Math.SQRT2-40;return i<7.5?0:i}var ir=Object.freeze({__proto__:null,contrastAPCA:xd,contrastDeltaPhi:Md,contrastLstar:Cd,contrastMichelson:Sd,contrastWCAG21:hd,contrastWeber:Td});function Ld(e,t,r={}){It(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(ir).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=_(e),t=_(t);for(let i in ir)if("contrast"+n.toLowerCase()===i.toLowerCase())return ir[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function As(e){let[t,r,n]=Bt(e,Q),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Ns(e){let[t,r,n]=Bt(e,Q),o=t+r+n;return[t/o,r/o]}function Ad(e){Object.defineProperty(e.prototype,"uv",{get(){return As(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ns(this)}})}var Nd=Object.freeze({__proto__:null,register:Ad,uv:As,xy:Ns});function Pd(e,t){return Ms(e,t,"lab")}const Rd=Math.PI,gi=Rd/180;function Id(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=q.from(e),[,s,l]=kt.from(q,[o,i,a]),[c,u,d]=q.from(t),f=kt.from(q,[c,u,d])[1];s<0&&(s=0),f<0&&(f=0);let h=o-c,m=s-f,g=i-u,E=a-d,x=g**2+E**2-m**2,T=.511;o>=16&&(T=.040975*o/(1+.01765*o));let A=.0638*s/(1+.0131*s)+.638,L;Number.isNaN(l)&&(l=0),l>=164&&l<=345?L=.56+Math.abs(.2*Math.cos((l+168)*gi)):L=.36+Math.abs(.4*Math.cos((l+35)*gi));let V=Math.pow(s,4),ue=Math.sqrt(V/(V+1900)),G=A*(ue*L+1-ue),M=(h/(r*T))**2;return M+=(m/(n*A))**2,M+=x/G**2,Math.sqrt(M)}const vi=203;var uo=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Q,fromBase(e){return e.map(t=>Math.max(t*vi,0))},toBase(e){return e.map(t=>Math.max(t/vi,0))}});const Kt=1.15,Wt=.66,bi=2610/2**14,Bd=2**14/2610,yi=3424/2**12,wi=2413/2**7,$i=2392/2**7,Dd=1.7*2523/2**5,Ei=2**5/(1.7*2523),Gt=-.56,nn=16295499532821565e-27,Od=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Hd=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],zd=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Fd=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ps=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:uo,fromBase(e){let[t,r,n]=e,o=Kt*t-(Kt-1)*n,i=Wt*r-(Wt-1)*t,s=R(Od,[o,i,n]).map(function(f){let h=yi+wi*(f/1e4)**bi,m=1+$i*(f/1e4)**bi;return(h/m)**Dd}),[l,c,u]=R(zd,s);return[(1+Gt)*l/(1+Gt*l)-nn,c,u]},toBase(e){let[t,r,n]=e,o=(t+nn)/(1+Gt-Gt*(t+nn)),a=R(Fd,[o,r,n]).map(function(f){let h=yi-f**Ei,m=$i*f**Ei-wi;return 1e4*(h/m)**Bd}),[s,l,c]=R(Hd,a),u=(s+(Kt-1)*c)/Kt,d=(l+(Wt-1)*u)/Wt;return[u,d,c]},formats:{color:{}}}),Mn=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ps,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Ud(e,t){let[r,n,o]=Mn.from(e),[i,a,s]=Mn.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let u=o-s,d=2*Math.sqrt(n*a)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const Rs=3424/4096,Is=2413/128,Bs=2392/128,xi=2610/16384,Vd=2523/32,jd=16384/2610,Si=32/2523,Kd=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Wd=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Gd=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Yd=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Ln=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:uo,fromBase(e){let t=R(Kd,e);return qd(t)},toBase(e){let t=Xd(e);return R(Yd,t)},formats:{color:{}}});function qd(e){let t=e.map(function(r){let n=Rs+Is*(r/1e4)**xi,o=1+Bs*(r/1e4)**xi;return(n/o)**Vd});return R(Wd,t)}function Xd(e){return R(Gd,e).map(function(n){let o=Math.max(n**Si-Rs,0),i=Is-Bs*n**Si;return 1e4*(o/i)**jd})}function Zd(e,t){let[r,n,o]=Ln.from(e),[i,a,s]=Ln.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const Jd=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Qd=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],ef=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],tf=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var vr=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Q,fromBase(e){let r=R(Jd,e).map(n=>Math.cbrt(n));return R(ef,r)},toBase(e){let r=R(tf,e).map(n=>n**3);return R(Qd,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function rf(e,t){let[r,n,o]=vr.from(e),[i,a,s]=vr.from(t),l=r-i,c=n-a,u=o-s;return Math.sqrt(l**2+c**2+u**2)}var br={deltaE76:Pd,deltaECMC:Id,deltaE2000:Cn,deltaEJz:Ud,deltaEITP:Zd,deltaEOK:rf};function gt(e,t,r={}){It(r)&&(r={method:r});let{method:n=pe.deltaE,...o}=r;e=_(e),t=_(t);for(let i in br)if("deltae"+n.toLowerCase()===i.toLowerCase())return br[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function nf(e,t=.25){let n=[b.get("oklch","lch"),"l"];return Ae(e,n,o=>o*(1+t))}function of(e,t=.25){let n=[b.get("oklch","lch"),"l"];return Ae(e,n,o=>o*(1-t))}var af=Object.freeze({__proto__:null,darken:of,lighten:nf});function Ds(e,t,r=.5,n={}){[e,t]=[_(e),_(t)],Me(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return Dt(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function Os(e,t,r={}){let n;fo(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[_(e),_(t)],n=Dt(e,t,l));let c=gt(e,t),u=o>0?Math.max(a,Math.ceil(c/o)+1):a,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,m)=>{let g=m*f;return{p:g,color:n(g)}})}if(o>0){let f=d.reduce((h,m,g)=>{if(g===0)return 0;let E=gt(m.color,d[g-1].color,i);return Math.max(h,E)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<s;h++){let m=d[h-1],g=d[h],E=(g.p+m.p)/2,x=n(E);f=Math.max(f,gt(x,m.color),gt(x,g.color)),d.splice(h,0,{p:E,color:n(E)}),h++}}}return d=d.map(f=>f.color),d}function Dt(e,t,r={}){if(fo(e)){let[l,c]=[e,t];return Dt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=_(e),t=_(t),e=Mt(e),t=Mt(t);let s={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[pe.interpolationSpace]||e.space,o=o?b.get(o):n,e=J(e,n),t=J(t,n),e=Ne(e),t=Ne(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[ee(e,c),ee(t,c)];[u,d]=td(l,[u,d]),Ae(e,c,u),Ae(t,c,d)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((f,h)=>{let m=t.coords[h];return hr(f,m,l)}),u=hr(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return a&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=J(d,o)),d},{rangeArgs:s})}function fo(e){return Me(e)==="function"&&!!e.rangeArgs}pe.interpolationSpace="lab";function sf(e){e.defineFunction("mix",Ds,{returns:"color"}),e.defineFunction("range",Dt,{returns:"function<color>"}),e.defineFunction("steps",Os,{returns:"array<color>"})}var lf=Object.freeze({__proto__:null,isRange:fo,mix:Ds,range:Dt,register:sf,steps:Os}),Hs=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Lt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),zs=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Hs,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),cf=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:zs,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const uf=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],df=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Fs=new W({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:uf,fromXYZ_M:df}),ff=new W({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Fs,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const hf=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],mf=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Us=new W({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:co,toXYZ_M:hf,fromXYZ_M:mf});const pf=1/512,gf=16/512;var vf=new W({id:"prophoto",name:"ProPhoto",base:Us,toBase(e){return e.map(t=>t<gf?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=pf?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),bf=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:vr,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dr(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const _i=203,Ti=2610/2**14,yf=2**14/2610,wf=2523/2**5,Ci=2**5/2523,ki=3424/2**12,Mi=2413/2**7,Li=2392/2**7;var $f=new W({id:"rec2100pq",name:"REC.2100-PQ",base:Or,toBase(e){return e.map(function(t){return(Math.max(t**Ci-ki,0)/(Mi-Li*t**Ci))**yf*1e4/_i})},fromBase(e){return e.map(function(t){let r=Math.max(t*_i/1e4,0),n=ki+Mi*r**Ti,o=1+Li*r**Ti;return(n/o)**wf})},formats:{color:{id:"rec2100-pq"}}});const Ai=.17883277,Ni=.28466892,Pi=.55991073,on=3.7743;var Ef=new W({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Or,toBase(e){return e.map(function(t){return t<=.5?t**2/3*on:(Math.exp((t-Pi)/Ai)+Ni)/12*on})},fromBase(e){return e.map(function(t){return t/=on,t<=1/12?Math.sqrt(3*t):Ai*Math.log(12*t-Ni)+Pi})},formats:{color:{id:"rec2100-hlg"}}});const Vs={};Le.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=js(e.W1,e.W2,e.options.method))});Le.add("chromatic-adaptation-end",e=>{e.M||(e.M=js(e.W1,e.W2,e.options.method))});function Hr({id:e,toCone_M:t,fromCone_M:r}){Vs[e]=arguments[0]}function js(e,t,r="Bradford"){let n=Vs[r],[o,i,a]=R(n.toCone_M,e),[s,l,c]=R(n.toCone_M,t),u=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],d=R(u,n.toCone_M);return R(n.fromCone_M,d)}Hr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Hr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Hr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Hr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(ie,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});ie.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const xf=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Sf=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ks=new W({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:ie.ACES,toXYZ_M:xf,fromXYZ_M:Sf,formats:{color:{}}});const Yt=2**-16,an=-.35828683,qt=(Math.log2(65504)+9.72)/17.52;var _f=new W({id:"acescc",name:"ACEScc",coords:{r:{range:[an,qt],name:"Red"},g:{range:[an,qt],name:"Green"},b:{range:[an,qt],name:"Blue"}},referred:"scene",base:Ks,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Yt)*2:r<qt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Yt)+9.72)/17.52:t<Yt?(Math.log2(Yt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Ri=Object.freeze({__proto__:null,A98RGB:ff,A98RGB_Linear:Fs,ACEScc:_f,ACEScg:Ks,HSL:Hs,HSV:zs,HWB:cf,ICTCP:Ln,JzCzHz:Mn,Jzazbz:Ps,LCH:kt,Lab:q,Lab_D65:kn,OKLCH:bf,OKLab:vr,P3:ks,P3_Linear:Ts,ProPhoto:vf,ProPhoto_Linear:Us,REC_2020:_s,REC_2020_Linear:Or,REC_2100_HLG:Ef,REC_2100_PQ:$f,XYZ_ABS_D65:uo,XYZ_D50:co,XYZ_D65:Q,sRGB:Lt,sRGB_Linear:Cs});class w{constructor(...t){let r;t.length===1&&(r=_(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new w(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=cd(this,...t);return r.color=new w(r.color),r}static get(t,...r){return t instanceof w?t:new w(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=w.get(l);else if(i==="function<color>"){let c=l;l=function(...u){let d=c(...u);return w.get(d)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>w.get(c)));return l};t in w||(w[t]=a),o&&(w.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)w.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(w);else for(let r in t)w.defineFunction(r,t[r])}}w.defineFunctions({get:ee,getAll:Bt,set:Ae,setAll:Ss,to:J,equals:ud,inGamut:wt,toGamut:Ne,distance:Ms,toString:gr});Object.assign(w,{util:Xu,hooks:Le,WHITES:ie,Space:b,spaces:b.registry,parse:xs,defaults:pe});for(let e of Object.keys(Ri))b.register(Ri[e]);for(let e in b.registry)An(e,b.registry[e]);Le.add("colorspace-init-end",e=>{var t;An(e.id,e),(t=e.aliases)==null||t.forEach(r=>{An(r,e)})});function An(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(w.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return b.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=b.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=b.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}w.extend(br);w.extend({deltaE:gt});Object.assign(w,{deltaEMethods:br});w.extend(af);w.extend({contrast:Ld});w.extend(Nd);w.extend(fd);w.extend(lf);w.extend(ir);function Ws(e){return Ee(e,(t,r)=>r instanceof w?fe(r.toString({format:"hex"})):Ws(r))}const Tf="dodgerblue";function Nn(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function sn({background:e,foreground:t}){return{background:e??new w(Nn(t)),foreground:t??new w(Nn(e))}}var yr;(function(e){e.Dark="dark",e.Light="light"})(yr||(yr={}));function Cf(e){return e==="black"?"white":"black"}const kf={black:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")},white:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")}},Mf={black:{backgroundFaint1:new w("#666"),backgroundFaint2:new w("#444")},white:{backgroundFaint1:new w("#ccc"),backgroundFaint2:new w("#fafafa")}};function Ii({themeColor:e=Tf,themeStyle:t=yr.Light}={}){const r=new w(e),n=new w(t===yr.Dark?"black":"white"),o=Nn(n),i=new w(o),a={nav:{hover:sn({background:r.clone().set({"hsl.l":93})}),active:sn({background:r.clone().set({"hsl.l":90})}),selected:sn({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Mf[Cf(o)],foreground:i,...kf[o]}};return Ws(a)}const wr=Ar()("element-book-change-route"),Bi="vira-",{defineElement:ct,defineElementNoInputs:Km}=ns({assertInputs:e=>{if(!e.tagName.startsWith(Bi))throw new Error(`Tag name should start with '${Bi}' but got '${e.tagName}'`)}}),Gs=y`
    pointer-events: none;
    opacity: 0.3;
`,se=Ge({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),$r=Ge({"vira-form-input-border-radius":"8px"}),Er=Ge({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":y`calc(${$r["vira-form-input-border-radius"].value} + 4px)`});function Ys({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=fe(xc(n+r+t));return y`
        ${fe(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Er["vira-focus-outline-color"].value};
            border-radius: ${Er["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const qs=y`
    padding: 0;
    margin: 0;
`,we=y`
    ${qs};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,At=y`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,I=ct()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>y`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Pn;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Pn||(Pn={}));const Di=ct()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Pn.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>y`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${At};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Er["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Gs};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${we};
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
            border-radius: ${$r["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${se["vira-interaction-animation-duration"].value},
                background-color
                    ${se["vira-interaction-animation-duration"].value},
                border-color ${se["vira-interaction-animation-duration"].value};
        }

        ${Ys({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${I} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${I.assign({icon:e.icon})}></${I}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Rn;(function(e){e.Header="header"})(Rn||(Rn={}));ct()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>y`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${we};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${se["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:re()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?y`
                  height: ${e.contentHeight}px;
              `:y`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${k("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Rn.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${rs(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const $=Ge({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function xe({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Lf=xe({name:"CloseX24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Af=xe({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});xe({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Nf=xe({name:"Loader24Icon",svgTemplate:p`
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
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Pf=y`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${se["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Xs=xe({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${Pf}
        </style>
        ${Nf.svgTemplate}
    `}),Rf=xe({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${$["vira-icon-stroke-color"].value}"
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),If=xe({name:"StatusFailure24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});xe({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});xe({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var xr;(function(e){e.Loading="loading",e.Error="error"})(xr||(xr={}));ct()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:re(),imageError:re()},styles:({hostClasses:e})=>y`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:o}){const i=e.imageUrl,a=t.erroredUrls[i]?p`
                  <slot class="status-wrapper" name=${xr.Error}>
                      <${I.assign({icon:If})} class="error"></${I}>
                  </slot>
              `:t.loadedUrls[i]?void 0:p`
                    <slot class="status-wrapper" name=${xr.Loading}>
                        <${I.assign({icon:Xs})}></${I}>
                    </slot>
                `;return p`
            ${ae(!!a,a)}
            <img
                class=${Mr({hidden:!!a})}
                ${k("load",async()=>{e._debugLoadDelay&&await vn(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${k("error",async s=>{e._debugLoadDelay&&await vn(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function In({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>In({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Zs({value:e,allowed:t,blocked:r}){const n=t?In({input:e,matcher:t}):!0,o=r?In({input:e,matcher:r}):!1;return n&&!o}function Js(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Zs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Bf({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=pt(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)Zs({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:u}=Js({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}i.value!==l&&(i.value=l),s!==l&&o(l)}const ar=ct()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:re(),inputBlocked:re()},styles:({hostClasses:e,cssVars:t})=>y`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Er["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Gs};
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
                ${we};
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
                ${At};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${we};
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
                border-radius: ${$r["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${se["vira-interaction-animation-duration"].value};
            }

            label {
                ${we};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${$r["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Ys({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${we};
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
                ${At};
            }

            .close-x-button {
                ${we};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${se["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=Js({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?p`
                  <${I.assign({icon:e.icon})} class="left-side-icon"></${I}>
              `:"",s=e.fitText?y`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${a}
                ${ae(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${rs(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${i||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${i}
                    ${k("input",l=>{Bf({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${ae(!!(e.showClearButton&&e.value),p`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${k("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${I.assign({icon:Lf})}></${I}>
                        </button>
                    `)}
                ${ae(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Xt=ct()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>y`
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
    `,events:{routeChange:re()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&os(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return p`
                <a href=${a} rel="noopener noreferrer" ${k("click",n)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:ne,defineElementNoInputs:Wm}=ns(),X=ne()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>y`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return p`
            <a
                href=${r}
                ${k("click",i=>{(!e.router||os(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new wr(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Df(e,t){return e.entry.entryType===O.Root?!1:!!(e.entry.entryType===O.Page||Z(t,e.fullUrlBreadcrumbs.slice(0,-1))||Z(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const be=ne()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>y`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${S["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${S["element-book-nav-hover-background-color"].value};
            color: ${S["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${S["element-book-nav-active-background-color"].value};
            color: ${S["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${X.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${S["element-book-nav-selected-background-color"].value};
            color: ${S["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${I} {
            display: inline-flex;
            color: ${S["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Df(r,e.selectedPath))return;const n=y`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${X.assign({router:e.router,route:{paths:[K.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Mr({"title-row":!0,selected:e.selectedPath?Z(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ae(rt(r,O.ElementExample),p`
                                    <${I.assign({icon:Af})}></${I}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${X}>
                </li>
            `});return p`
            <${X.assign({route:it,router:e.router})}>
                <slot name=${$e.NavHeader}>Book</slot>
            </${X}>
            <ul>
                ${t}
            </ul>
        `}});async function Of(e){await En(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Mu(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Re=ne()({tagName:"book-error",styles:y`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e}){return(H(e.message,"array")?e.message:[e.message]).map(r=>p`
                <p>${r}</p>
            `)}}),Nt=ne()({tagName:"book-page-controls",events:{controlValueChange:re()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>y`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${S["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${ar} {
            height: 24px;
            max-width: 128px;
        }

        ${I}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===U.Hidden)return"";const a=Hf(e.currentValues[n],o,s=>{const l=H(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return p`
                    <div class="control-wrapper">
                        ${ae(i===0,p`
                                <${I.assign({icon:Rf})}
                                    class="options-icon"
                                ></${I}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function Hf(e,t,r){return Ye(t,U.Hidden)?"":Ye(t,U.Checkbox)?p`
            <input
                type="checkbox"
                .value=${e}
                ${k("input",n=>{const o=pt(n,HTMLInputElement);r(o.checked)})}
            />
        `:Ye(t,U.Color)?p`
            <input
                type="color"
                .value=${e}
                ${k("input",n=>{const o=pt(n,HTMLInputElement);r(o.value)})}
            />
        `:Ye(t,U.Text)?p`
            <${ar.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${k(ar.events.valueChange,n=>{r(n.detail)})}
            ></${ar}>
        `:Ye(t,U.Number)?p`
            <input
                type="number"
                .value=${e}
                ${k("input",n=>{const o=pt(n,HTMLInputElement);r(o.value)})}
            />
        `:Ye(t,U.Dropdown)?p`
            <select
                .value=${e}
                ${k("input",n=>{const o=pt(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>p`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Oi=ne()({tagName:"book-breadcrumbs",styles:y`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const i=n>=o.length-1,a=o.slice(0,n+1),s=i?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${X.assign({route:{hash:void 0,search:void 0,paths:[K.Book,...a]},router:e.router})}>
                    ${r}
                </${X}>
                ${s}
            `}):p`
                &nbsp;
            `}}),ln=ne()({tagName:"book-breadcrumbs-bar",styles:y`
        :host {
            border-bottom: 1px solid
                ${S["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${S["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return p`
            ${ae(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Oi.assign({currentRoute:e.currentRoute,router:e.router})}></${Oi}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${k("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await vn(200),n.value===o&&(n.value?t(new wr({paths:[K.Search,encodeURIComponent(n.value)]})):t(new wr(it)))})}
            />
        `}}),Hi=ne()({tagName:"book-entry-description",styles:y`
        :host {
            color: ${S["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${S["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>p`
                <p>${t}</p>
            `)}}),zi=ne()({tagName:"book-page-wrapper",styles:y`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${X} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[K.Book,...e.pageNode.fullUrlBreadcrumbs],n=Ma(e.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${X.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${X}>
                    ${n?p`
                              <${Re.assign({message:n.message})}></${Re}>
                          `:p`
                              <${Hi.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Hi}>
                              <${Nt.assign({config:e.pageNode.entry.controls,currentValues:ao(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Nt}>
                          `}
                </div>
            </div>
        `}}),Zt=ne()({tagName:"book-element-example-controls",styles:y`
        :host {
            display: flex;
            color: ${S["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[K.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${X.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${X}>
        `}}),Fi=Symbol("unset-internal-state"),Ui=ne()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Fi},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Ma(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Fi&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${ae(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${Re.assign({message:`${t.elementExampleNode.entry.title} failed: ${We(n)}`})}></${Re}>
            `}},options:{allowPolymorphicState:!0}}),Vi=ne()({tagName:"book-element-example-wrapper",styles:y`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Zt} {
            color: ${S["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Zt} {
            color: ${S["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${Zt.assign(gc(e,["currentPageControls"]))}></${Zt}>
                <${Ui.assign(e)}></${Ui}>
            </div>
        `}});function Qs(e,t,r,n){const o=xn(r,n),i=[];if(o){const a=Qs(e,t,o,n);a&&i.push(a)}if(rt(r,O.Page)&&!e.includes(r)){const a=ao(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:Ee(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function zf({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[p`
                No results
            `];const a=pn(e,1)?Qs(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&pn(e,1)?p`
                  <${Nt.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${Nt}>
              `:"",l=Xl(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(rt(c,O.Page))return p`
                    <${zi.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${zi}>
                `;if(rt(c,O.ElementExample)){const d=ao(o,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${Vi.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Vi}>
                `}else return rt(c,O.Root)?"":p`
                    <${Re.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Re}>
                `});return[s,l].flat()}const Ze=ne()({tagName:"book-entry-display",styles:y`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${ln} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${se["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:re()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Sn(e.currentRoute.paths),a=zf({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return p`
            <${ln.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${ln}>

            ${ae(e.showLoading,p`
                    <div
                        ${Xo(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${I.assign({icon:Xs})}></${I}>
                    </div>
                    ${ae(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${$e.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${Xo(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${$e.Footer}></slot>
                `)}
        `}});function Ff(e,t,r){const n=ji(e,t);if(n.length)return n;r(it);const o=ji(e,it.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function ji(e,t){return e.filter(r=>Tu({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const cn=ce()({tagName:"element-book-app",events:{pathUpdate:re()},stateInitStatic:{currentRoute:it,router:void 0,loading:!0,colors:{config:void 0,theme:Ii(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:y`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${S["element-book-page-background-color"].value};
            color: ${S["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            height: 100%;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${Ze} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${be} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Ki(e,Sn(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var u,d,f,h,m,g,E;t._debug&&console.info("rendering element-book app");function a(x){return{...e.currentRoute,...x}}function s(x){const T=a(x);return!Z(e.currentRoute,T)}function l(x){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,x].filter(z).join(" - "))}function c(x){if(!s(x))return;const T=a(x);e.router?e.router.setRoutes(T):n({currentRoute:{...e.currentRoute,...T}}),t.elementBookRoutePaths&&!Z(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(T.paths??[]))}try{if(t.elementBookRoutePaths&&!Z(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const M=Wu(t.internalRouterConfig.basePath);n({router:M}),M.addRouteListener(!0,F=>{n({currentRoute:F})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const x={themeColor:t.themeColor};if(!Z(x,(f=e.colors)==null?void 0:f.config)){const M=Ii(x);n({colors:{config:x,theme:M}}),qu(r,M)}const T=t._debug??!1,A=Ou({entries:t.entries,debug:T});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:gs(A.tree,{children:(m=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:t.globalValues})}}));const L=Sn(e.currentRoute.paths),ue=(L?Ku({flattenedNodes:A.flattenedNodes,searchQuery:L}):void 0)??Ff(A.flattenedNodes,e.currentRoute.paths,c);l((g=ue[0])==null?void 0:g.entry.title);const G=(E=e.treeBasedControls)==null?void 0:E.controls;return G?(t._debug&&console.info({currentControls:G}),p`
                <div
                    class="root"
                    ${k(wr,async M=>{const F=M.detail;if(!s(F))return;if(n({loading:!0}),c(F),!(r.shadowRoot.querySelector(be.tagName)instanceof be))throw new Error(`Failed to find child '${be.tagName}'`);Ki(r,L,e.currentRoute)})}
                    ${k(Nt.events.controlValueChange,M=>{if(!e.treeBasedControls)return;const F=zu(G,M.detail.fullUrlBreadcrumbs,M.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:F}})})}
                >
                    <${be.assign({flattenedNodes:A.flattenedNodes,router:e.router,selectedPath:L?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${$e.NavHeader}
                            slot=${$e.NavHeader}
                        ></slot>
                    </${be}>
                    <${Ze.assign({controls:G,currentNodes:ue,currentRoute:e.currentRoute,debug:T,originalTree:A.tree,router:e.router,showLoading:e.loading})}
                        ${k(Ze.events.loadingRender,async M=>{await En();const F=r.shadowRoot.querySelector(Ze.tagName);F?F.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ze.tagName}' for scrolling.`),await En(),n({loading:!M.detail})})}
                    >
                        <slot
                            name=${$e.Footer}
                            slot=${$e.Footer}
                        ></slot>
                    </${Ze}>
                </div>
            `):p`
                    <${Re.assign({message:"Failed to generate page controls."})}></${Re}>
                `}catch(x){return console.error(x),p`
                <p class="error">${We(x)}</p>
            `}}});async function Ki(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(be.tagName);if(!(n instanceof be))throw new Error(`Failed to find child '${be.tagName}'`);await Of(n)}var Uf=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Vf(){return class extends Event{constructor(t,r){super(t,r),this.detail=r.detail}}}const jf=globalThis.CustomEvent||Vf();function ho(){return e=>{var t;return t=class extends jf{constructor(n){super(e,n)}},Uf(t,"TypedEventConstructor"),t.type=e,t}}globalThis&&globalThis.__setFunctionName;class el extends EventTarget{constructor(){super(...arguments),this.setupListeners=[]}getListenerCount(){return this.setupListeners.length}addEventListener(t,r,n){super.addEventListener(t,r,n),r&&this.setupListeners.push({type:t,callback:r,options:n})}dispatchEvent(t){return super.dispatchEvent(t)}removeEventListener(t,r,n){super.removeEventListener(t,r,n);const o=this.setupListeners.findIndex(i=>{if(i.type!==t)return!1;if(typeof n<"u"||typeof i.options<"u"){if(typeof n!=typeof i.options||typeof i.options=="boolean"&&typeof n=="boolean"&&n!==i.options)return!1;if(typeof i.options=="object"&&typeof n=="object"&&n.capture!==i.options.capture)return!1}return i.callback===r});this.setupListeners=Jl(this.setupListeners,[o])}removeAllEventListeners(){this.setupListeners.forEach(t=>{super.removeEventListener(t.type,t.callback,t.options)}),this.setupListeners=[]}}class Kf extends ho()("game-pipeline-pause"){}class Wf extends ho()("game-pipeline-framerate"){}const Wi=Symbol("ignore");function Bn(e,t,r,n,o=!1,i=!1){const a=Object.entries(e.children).map(([c,u])=>{if(Array.isArray(t))return t.map((d,f)=>{const h=r==null?void 0:r[f];return Bn(e,d,h,n,!0)}).some(d=>d);{if(!u||!o&&(!t||!(c in t)))return!1;const d=t==null?void 0:t[c],f=r?r[c]:Wi;return Bn(u,d,f,n,o,t&&c in t)}}),s=i||a.some(c=>c),l=e.listeners;if(l!=null&&l.size){const c=n.get(l);(o||r!==Wi)&&(c?(c.dataValues.push(r),!c.certain&&s&&(c.certain=!0)):n.set(l,{dataValues:[r],isArray:o,certain:s}))}return s}async function Gf(e,t,r){const n=[],o=new Map;return Object.keys(t).length&&Bn({children:{root:e},listeners:void 0},{root:t},{root:r},o),o.forEach((i,a)=>{i.certain&&(a!=null&&a.size)&&n.push(ka(()=>{const s=[];return a.forEach(l=>{if(!i.isArray&&i.dataValues.length>1)throw new Error("Found non array listener value of length more than 1");const c=i.isArray?i.dataValues:i.dataValues[0];s.push(l(c))}),s}))}),Promise.all(n)}class mo extends el{constructor(t,r,n,o={}){var i,a,s,l;super(),this.gameModules=t,this.currentFramerate=0,this.framerateOperands={totalDuration:0,frameCount:0},this.isFrameExecuting=!1,this.currentOptions={framerateCalculationWait:{milliseconds:500}},this._loopIsPaused=!0,this.lastFrameCount=0,this.frameHistory=[],this.stateListeners={children:{},listeners:void 0},this.currentState=fc(r),this.currentExecutionContext=n,this.gameModuleIds=this.gameModules.map(c=>c.moduleId),this.internalOverrideOptions(o),(a=(i=this.currentOptions)==null?void 0:i.init)!=null&&a.allowDuplicateModuleNames||this.assertValidGameModules(),(l=(s=this.currentOptions)==null?void 0:s.init)!=null&&l.startLoopImmediately&&this.startPipelineLoop()}assertValidGameModules(){const t=[],r=new Set;if(this.gameModules.forEach(n=>{const o=n.moduleId.name;r.has(o)?t.push(o):r.add(o)}),t.length)throw new Error(`Duplicate modules provided to ${mo.name}: ${t.join(", ")}`)}set loopIsPaused(t){this._loopIsPaused=t,this.dispatchEvent(new Kf({detail:t}))}get loopIsPaused(){return this._loopIsPaused}isPipelineLoopPaused(){return this.loopIsPaused}stopPipelineLoop(){return this.loopIsPaused?!1:(this.loopIsPaused=!0,!0)}startPipelineLoop(){return this.loopIsPaused?(this.loopIsPaused=!1,this.lastFrameTimestamp=performance.now(),this.runLoop(),!0):!1}runLoop(){window.requestAnimationFrame(t=>{this.loopIsPaused||ka(()=>this.runLoop()),this.internallyTriggerSingleFrame(t)})}calculateFramerate(t){var r;this.framerateOperands.frameCount++,this.framerateOperands.totalDuration+=t,this.framerateOperands.totalDuration>=this.currentOptions.framerateCalculationWait.milliseconds&&(this.currentFramerate=He({number:this.framerateOperands.frameCount/this.framerateOperands.totalDuration*1e3,digits:1}),(r=this.currentOptions.debug)!=null&&r.enableWarningLogging&&this.currentOptions.debug.targetFramerate&&this.currentFramerate+1<this.currentOptions.debug.targetFramerate&&console.warn(`Framerate dropped to ${this.currentFramerate}`),this.dispatchEvent(new Wf({detail:this.currentFramerate})),this.framerateOperands={frameCount:0,totalDuration:0})}destroy(){var t;this.stopPipelineLoop(),(t=this.currentOptions.init)!=null&&t.onDestroy&&this.currentOptions.init.onDestroy({gameState:this.currentState,executionContext:this.currentExecutionContext}),this.removeAllEventListeners(),this.removeAllStateListeners()}addEventListener(t,r,n){return super.addEventListener(t,r,n),()=>{super.removeEventListener(t,r,n)}}internalOverrideOptions(t){this.currentOptions=tt(this.currentOptions,t)}overrideOptions(t){if("init"in t)throw new Error("Cannot override init options after the GamePipeline has already been constructed.");this.internalOverrideOptions(t)}triggerSingleFrame(){return this.internallyTriggerSingleFrame(performance.now())}addWholeStateListener(t,r){return this.stateListeners.listeners||(this.stateListeners.listeners=new Set),this.stateListeners.listeners.add(r),t&&r(this.currentState),()=>this.removeWholeStateListener(r)}addStateListener(t,r,n){const o=r.reduce((i,a)=>{const s=i.children[a]||{children:{},listeners:void 0};return i.children[a]||(i.children[a]=s),s},this.stateListeners);return o.listeners||(o.listeners=new Set),o.listeners.add(n),t&&n(gn(this.currentState,r)),()=>this.removeStateListener(r,n)}removeAllStateListeners(){this.stateListeners={children:{},listeners:void 0}}removeWholeStateListener(t){var r;return(r=this.stateListeners.listeners)==null?void 0:r.delete(t)}removeStateListener(t,r){var n;try{return((n=t.reduce((i,a,s)=>{const l=i.children[a];if(!l)throw new Error(`Failed to find any listener children under key ${t.slice(0,s+1).join("->")}`);return l},this.stateListeners).listeners)==null?void 0:n.delete(r))??!1}catch{return!1}}update(t){this.updateInternally(t,!0)}updateInternally(t,r){t.stateUpdate&&(this.currentState=tt(this.currentState,t.stateUpdate),r&&this.triggerStateListeners([t.stateUpdate])),t.executionContextUpdate&&(this.currentExecutionContext={...this.currentExecutionContext,...t.executionContextUpdate})}triggerStateListeners(t){return Gf(this.stateListeners,tt(...t),this.currentState)}async internallyTriggerSingleFrame(t){var r,n;if(this.isFrameExecuting){(r=this.currentOptions.debug)!=null&&r.enableWarningLogging&&console.warn("frame skipped");return}this.isFrameExecuting=!0;try{const o=this.lastFrameTimestamp==null?0:t-this.lastFrameTimestamp;this.calculateFramerate(o);const i=[];if(this.lastFrameTimestamp=t,this.lastFrameCount++,await ec(this.gameModules,async s=>{const l={gameState:this.currentState,executionContext:this.currentExecutionContext,millisecondsSinceLastFrame:o},c=await s.runModule(l);c&&this.updateInternally(c,!1),i.push({fromModule:s.moduleId,stateUpdates:c==null?void 0:c.stateUpdate})}),(n=this.currentOptions.debug)!=null&&n.enableFrameHistory_Expensive){const s={orderedStateUpdates:i};this.frameHistory.push(s)}const a=i.map(s=>s.stateUpdates);return this.isFrameExecuting=!1,this.triggerStateListeners(a.filter(z))}catch(o){this.isFrameExecuting=!1;const i=Lr(o);throw i.message=`Failed to render frame: ${We(i)}`,i}}}var N;(function(e){e.Keyboard="keyboard",e.Mouse="mouse",e.Gamepad="gamepad"})(N||(N={}));const Ot={gamepad1:0,gamepad2:1,gamepad3:2,gamepad4:3};function tl(e){return Object.values(Ot).includes(e)}const Yf={mouse:"mouse",keyboard:"keyboard"},Te={...Yf,...Ot},qf={0:N.Gamepad,1:N.Gamepad,2:N.Gamepad,3:N.Gamepad,keyboard:N.Keyboard,mouse:N.Mouse};var Sr;(function(e){e.Button="button",e.Axe="axe"})(Sr||(Sr={}));function et(e){return`button-${e}`}function _r(e){return`axe-${e}`}function Xf(e){return{pressed:e.pressed,touched:e.touched,value:e.value}}function Zf(e){if(!tl(e.index))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${e.index}'`);return{axes:e.axes,buttons:e.buttons.map(Xf),connected:e.connected,id:e.id,index:e.index,mapping:e.mapping,serialized:!0,timestamp:e.timestamp}}const Jt=window.navigator;function Jf(){return Array.from(B(Jt,"webkitGetGamepads")?Jt.webkitGetGamepads():B(Jt,"getGamepads")?Jt.getGamepads():[]).filter(e=>!!e).map(e=>Zf(e))}function Qf(e){return Jf().reduce((n,o)=>{const i=th(o,e),a=o.index;return tl(a)?(n[a]={...o,...i},n):(console.warn(`ignoring gamepad index '${a}'`),n)},{})}function eh(e){const t={},r={deviceKey:e.index,deviceName:e.id,deviceType:N.Gamepad};return e.buttons.forEach((n,o)=>{if(n.value){const i=et(o);t[i]={...r,details:{inputType:Sr.Button,buttonDetails:n},inputName:i,inputValue:n.value}}}),e.axes.forEach((n,o)=>{if(n){const i=_r(o);t[i]={...r,details:{inputType:Sr.Axe},inputName:i,inputValue:n}}}),t}const Gi=.01;function th(e,t){const r=t[e.id],n=e.axes.map((i,a)=>{const s=(r==null?void 0:r[_r(a)])??Gi;return Math.abs(i)<s?0:i}),o=e.buttons.map((i,a)=>{const s=(r==null?void 0:r[et(a)])??Gi,l=Math.abs(i.value)<s?0:i.value;return{...i,value:l}});return{axes:n,buttons:o}}function rh(e){return Ee(e,(t,r)=>({currentInputs:eh(r),deviceDetails:r,deviceName:r.id,deviceKey:r.index,deviceType:N.Gamepad}))}function Yi(e){return St(e).map(n=>n==null?void 0:n.currentInputs).filter(z).map(n=>St(n)).flat()}const qi={deviceDetails:void 0,deviceKey:Te.keyboard,deviceName:"keyboard",deviceType:N.Keyboard},Qt={deviceDetails:void 0,deviceKey:Te.mouse,deviceName:"mouse",deviceType:N.Mouse};var ge;(function(e){e.NewDevicesAdded="new-devices-added",e.AllDevicesUpdated="all-devices-updated",e.CurrentInputsChanged="current-inputs-updated",e.DevicesRemoved="devices-removed"})(ge||(ge={}));var nh=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function zr(){return(e,t)=>{var r;const n=Ta(e,{capitalizeFirstLetter:!0}),o=(r=class extends ho()(e){constructor(){super(...arguments),this.eventType=e}static constructIfDataIsNew(i,...a){const s=o.getNewData(...a);if(s)return new o({detail:{timestamp:i,inputs:s}})}},nh(r,"TimedEventConstructor"),r.getNewData=t,r);return Object.defineProperty(o,"name",{value:n,writable:!0}),o}}function oh(...[e,t]){return t}const ih=zr()(ge.AllDevicesUpdated,oh);function Xi(e,t){return e.deviceKey===t.deviceKey&&e.inputName===t.inputName&&e.inputName===t.inputName&&e.inputValue===t.inputValue}function ah(...[e,t]){const r=Yi(t),n=e?Yi(e):[];if(!Z(n,r)){const o=r.filter(a=>!n.find(s=>Xi(s,a))),i=n.filter(a=>!r.find(s=>Xi(s,a)));return{newInputs:o,removedInputs:i,allCurrentInputs:r}}}const sh=zr()(ge.CurrentInputsChanged,ah);function lh(...[e,t]){if(!e)return[];const r=D(e).filter(n=>!B(t,n));if(r.length)return r.map(n=>e[n]).filter(z)}const ch=zr()(ge.DevicesRemoved,lh);function uh(...[e,t]){if(!e)return St(t).filter(z);const r=D(t).filter(n=>!B(e,n));if(r.length)return r.map(n=>t[n]).filter(z)}const dh=zr()(ge.NewDevicesAdded,uh),rl=[ih,dh,ch,sh];Object.fromEntries(rl.map(e=>[e.type,e]));class fh extends el{constructor(t={}){super(),this.currentKeyboardInputs={},this.currentMouseInputs={},this.gamepadDeadZoneSettings={},this.loopIsRunning=!1,this.currentLoopIndex=-1,this.lastEventDetails={},t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),this.attachWindowListeners(t),this.readAllDevices(),t.startLoopImmediately&&this.startPollingLoop()}attachWindowListeners(t){window.addEventListener("keydown",r=>{const n=et(r.key);if(this.currentKeyboardInputs.hasOwnProperty(n))return;const o={deviceType:N.Keyboard,details:{keyboardEvent:r},deviceKey:Te.keyboard,deviceName:qi.deviceName,inputName:n,inputValue:1};this.currentKeyboardInputs[n]=o}),window.addEventListener("keyup",r=>{delete this.currentKeyboardInputs[et(r.key)]}),window.addEventListener("mousedown",r=>{const n=et(r.button);this.currentMouseInputs.hasOwnProperty(n)||(this.currentMouseInputs[n]={deviceType:N.Mouse,details:{mouseEvent:r},deviceName:Qt.deviceName,deviceKey:Te.mouse,inputName:n,inputValue:1})}),window.addEventListener("mouseup",r=>{delete this.currentMouseInputs[et(r.button)]}),t.disableMouseMovement||window.addEventListener("mousemove",r=>{const n=_r("x"),o=_r("y");this.currentMouseInputs[n]={deviceType:N.Mouse,details:{mouseEvent:r},deviceName:Qt.deviceName,deviceKey:Te.mouse,inputName:n,inputValue:r.clientX},this.currentMouseInputs[o]={deviceType:N.Mouse,details:{mouseEvent:r},deviceName:Qt.deviceName,deviceKey:Te.mouse,inputName:o,inputValue:r.clientY}})}runPollingLoop(t,r){this.loopIsRunning&&this.currentLoopIndex===t&&(this.readAllDevices(this.gamepadDeadZoneSettings,r),requestAnimationFrame(n=>{this.runPollingLoop(t,n)}))}fireEvents(t,r){rl.forEach(n=>{const o=n.constructIfDataIsNew(t,this.lastReadInputDevices,r);o&&(this.lastEventDetails[o.type]={constructor:n,constructorInputs:[t,this.lastReadInputDevices,r]},this.dispatchEvent(o))})}getCurrentDeviceValues(t){const r=Qf(t),n=rh(r);return{[Te.keyboard]:{...qi,currentInputs:{...this.currentKeyboardInputs}},[Te.mouse]:{...Qt,currentInputs:{...this.currentMouseInputs}},...n}}addEventListenerAndFireWithLatest(t,r,n){if(this.addEventListener(t,r,n),!r)return;const o=this.lastEventDetails[t],i=typeof r=="function"?r:r.handleEvent;if(o){const a=o.constructor.constructIfDataIsNew(...o.constructorInputs);if(!a)throw new Error(`Got input device event constructor args for event type '${t}' but the constructor did not produce an event.`);i(a)}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}readAllDevices(t=this.gamepadDeadZoneSettings,r=performance.now()){const n=this.getCurrentDeviceValues(t);return this.fireEvents(r,n),this.lastReadInputDevices=n,n}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}function hh(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var at=hh();function mh(){try{if(!at||!at.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function po(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const v=Promise;function C(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function Qe(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function Se(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function go(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const Dn="local-forage-detect-blob-support";let er;const te={},ph=Object.prototype.toString,Ht="readonly",Fr="readwrite";function gh(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function vh(e){return new v(function(t){var r=e.transaction(Dn,Fr),n=po([""]);r.objectStore(Dn).put(n,"key"),r.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},r.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function bh(e){return typeof er=="boolean"?v.resolve(er):vh(e).then(function(t){return er=t,er})}function Tr(e){var t=te[e.name],r={};r.promise=new v(function(n,o){r.resolve=n,r.reject=o}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function On(e){var t=te[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Hn(e,t){var r=te[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function nl(e,t){return new v(function(r,n){if(te[e.name]=te[e.name]||sl(),e.db)if(t)Tr(e),e.db.close();else return r(e.db);var o=[e.name];t&&o.push(e.version);var i=at.open.apply(at,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(Dn)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),i.onerror=function(a){a.preventDefault(),n(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},r(a),On(e)}})}function vo(e){return nl(e,!1)}function bo(e){return nl(e,!0)}function ol(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function yh(e){return new v(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},n.readAsBinaryString(e)})}function il(e){var t=gh(atob(e.data));return po([t],{type:e.type})}function al(e){return e&&e.__local_forage_encoded_blob}function wh(e){var t=this,r=t._initReady().then(function(){var n=te[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return Qe(r,e,e),r}function $h(e){Tr(e);for(var t=te[e.name],r=t.forages,n=0;n<r.length;n++){const o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,vo(e).then(o=>(e.db=o,ol(e)?bo(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=o}).catch(o=>{throw Hn(e,o),o})}function _e(e,t,r,n){n===void 0&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(i){if(n>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return v.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),bo(e)}).then(()=>$h(e).then(function(){_e(e,t,r,n-1)})).catch(r);r(i)}}function sl(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Eh(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=te[r.name];o||(o=sl(),te[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=wh);var i=[];function a(){return v.resolve()}for(var s=0;s<o.forages.length;s++){var l=o.forages[s];l!==t&&i.push(l._initReady().catch(a))}var c=o.forages.slice(0);return v.all(i).then(function(){return r.db=o.db,vo(r)}).then(function(u){return r.db=u,ol(r,t._defaultConfig.version)?bo(r):u}).then(function(u){r.db=o.db=u,t._dbInfo=r;for(var d=0;d<c.length;d++){var f=c[d];f!==t&&(f._dbInfo.db=r.db,f._dbInfo.version=r.version)}})}function xh(e,t){var r=this;e=Se(e);var n=new v(function(o,i){r.ready().then(function(){_e(r._dbInfo,Ht,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var u=c.result;u===void 0&&(u=null),al(u)&&(u=il(u)),o(u)},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return C(n,t),n}function Sh(e,t){var r=this,n=new v(function(o,i){r.ready().then(function(){_e(r._dbInfo,Ht,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.openCursor(),u=1;c.onsuccess=function(){var d=c.result;if(d){var f=d.value;al(f)&&(f=il(f));var h=e(f,d.key,u++);h!==void 0?o(h):d.continue()}else o()},c.onerror=function(){i(c.error)}}catch(d){i(d)}})}).catch(i)});return C(n,t),n}function _h(e,t,r){var n=this;e=Se(e);var o=new v(function(i,a){var s;n.ready().then(function(){return s=n._dbInfo,ph.call(t)==="[object Blob]"?bh(s.db).then(function(l){return l?t:yh(t)}):t}).then(function(l){_e(n._dbInfo,Fr,function(c,u){if(c)return a(c);try{var d=u.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var f=d.put(l,e);u.oncomplete=function(){l===void 0&&(l=null),i(l)},u.onabort=u.onerror=function(){var h=f.error?f.error:f.transaction.error;a(h)}}catch(h){a(h)}})}).catch(a)});return C(o,r),o}function Th(e,t){var r=this;e=Se(e);var n=new v(function(o,i){r.ready().then(function(){_e(r._dbInfo,Fr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var u=c.error?c.error:c.transaction.error;i(u)}}catch(u){i(u)}})}).catch(i)});return C(n,t),n}function Ch(e){var t=this,r=new v(function(n,o){t.ready().then(function(){_e(t._dbInfo,Fr,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){n()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return C(r,e),r}function kh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){_e(t._dbInfo,Ht,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){o(l.error)}}catch(c){o(c)}})}).catch(o)});return C(r,e),r}function Mh(e,t){var r=this,n=new v(function(o,i){if(e<0){o(null);return}r.ready().then(function(){_e(r._dbInfo,Ht,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=!1,u=l.openKeyCursor();u.onsuccess=function(){var d=u.result;if(!d){o(null);return}e===0||c?o(d.key):(c=!0,d.advance(e))},u.onerror=function(){i(u.error)}}catch(d){i(d)}})}).catch(i)});return C(n,t),n}function Lh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){_e(t._dbInfo,Ht,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var u=l.result;if(!u){n(c);return}c.push(u.key),u.continue()},l.onerror=function(){o(l.error)}}catch(u){o(u)}})}).catch(o)});return C(r,e),r}function Ah(e,t){t=go.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;if(!e.name)o=v.reject("Invalid arguments");else{const a=e.name===r.name&&n._dbInfo.db?v.resolve(n._dbInfo.db):vo(e).then(s=>{const l=te[e.name],c=l.forages;l.db=s;for(var u=0;u<c.length;u++)c[u]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;Tr(e);const c=te[e.name],u=c.forages;s.close();for(let f=0;f<u.length;f++){const h=u[f];h._dbInfo.db=null,h._dbInfo.version=l}return new v((f,h)=>{const m=at.open(e.name,l);m.onerror=g=>{m.result.close(),h(g)},m.onupgradeneeded=()=>{var g=m.result;g.deleteObjectStore(e.storeName)},m.onsuccess=()=>{const g=m.result;g.close(),f(g)}}).then(f=>{c.db=f;for(let h=0;h<u.length;h++){const m=u[h];m._dbInfo.db=f,On(m._dbInfo)}}).catch(f=>{throw(Hn(e,f)||v.resolve()).catch(()=>{}),f})}):o=a.then(s=>{Tr(e);const l=te[e.name],c=l.forages;s.close();for(var u=0;u<c.length;u++){const f=c[u];f._dbInfo.db=null}return new v((f,h)=>{var m=at.deleteDatabase(e.name);m.onerror=()=>{const g=m.result;g&&g.close(),h(m.error)},m.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},m.onsuccess=()=>{const g=m.result;g&&g.close(),f(g)}}).then(f=>{l.db=f;for(var h=0;h<c.length;h++){const m=c[h];On(m._dbInfo)}}).catch(f=>{throw(Hn(e,f)||v.resolve()).catch(()=>{}),f})})}return C(o,t),o}var Nh={_driver:"asyncStorage",_initStorage:Eh,_support:mh(),iterate:Sh,getItem:xh,setItem:_h,removeItem:Th,clear:Ch,length:kh,key:Mh,keys:Lh,dropInstance:Ah};function Ph(){return typeof openDatabase=="function"}var Ce="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Rh="~~local_forage_type~",Zi=/^~~local_forage_type~([^~]+)~/,Cr="__lfsc__:",zn=Cr.length,yo="arbf",Fn="blob",ll="si08",cl="ui08",ul="uic8",dl="si16",fl="si32",hl="ur16",ml="ui32",pl="fl32",gl="fl64",Ji=zn+yo.length,Qi=Object.prototype.toString;function vl(e){var t=e.length*.75,r=e.length,n,o=0,i,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<r;n+=4)i=Ce.indexOf(e[n]),a=Ce.indexOf(e[n+1]),s=Ce.indexOf(e[n+2]),l=Ce.indexOf(e[n+3]),u[o++]=i<<2|a>>4,u[o++]=(a&15)<<4|s>>2,u[o++]=(s&3)<<6|l&63;return c}function Un(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=Ce[t[n]>>2],r+=Ce[(t[n]&3)<<4|t[n+1]>>4],r+=Ce[(t[n+1]&15)<<2|t[n+2]>>6],r+=Ce[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function Ih(e,t){var r="";if(e&&(r=Qi.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&Qi.call(e.buffer)==="[object ArrayBuffer]")){var n,o=Cr;e instanceof ArrayBuffer?(n=e,o+=yo):(n=e.buffer,r==="[object Int8Array]"?o+=ll:r==="[object Uint8Array]"?o+=cl:r==="[object Uint8ClampedArray]"?o+=ul:r==="[object Int16Array]"?o+=dl:r==="[object Uint16Array]"?o+=hl:r==="[object Int32Array]"?o+=fl:r==="[object Uint32Array]"?o+=ml:r==="[object Float32Array]"?o+=pl:r==="[object Float64Array]"?o+=gl:t(new Error("Failed to get type for BinaryArray"))),t(o+Un(n))}else if(r==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=Rh+e.type+"~"+Un(this.result);t(Cr+Fn+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function Bh(e){if(e.substring(0,zn)!==Cr)return JSON.parse(e);var t=e.substring(Ji),r=e.substring(zn,Ji),n;if(r===Fn&&Zi.test(t)){var o=t.match(Zi);n=o[1],t=t.substring(o[0].length)}var i=vl(t);switch(r){case yo:return i;case Fn:return po([i],{type:n});case ll:return new Int8Array(i);case cl:return new Uint8Array(i);case ul:return new Uint8ClampedArray(i);case dl:return new Int16Array(i);case hl:return new Uint16Array(i);case fl:return new Int32Array(i);case ml:return new Uint32Array(i);case pl:return new Float32Array(i);case gl:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}var wo={serialize:Ih,deserialize:Bh,stringToBuffer:vl,bufferToString:Un};function bl(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function Dh(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var o=new v(function(i,a){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(s){return a(s)}r.db.transaction(function(s){bl(s,r,function(){t._dbInfo=r,i()},function(l,c){a(c)})},a)});return r.serializer=wo,o}function Be(e,t,r,n,o,i){e.executeSql(r,n,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?i(l,s):bl(l,t,function(){l.executeSql(r,n,o,i)},i)},i):i(a,s)},i)}function Oh(e,t){var r=this;e=Se(e);var n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Be(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var u=c.rows.length?c.rows.item(0).value:null;u&&(u=a.serializer.deserialize(u)),o(u)},function(l,c){i(c)})})}).catch(i)});return C(n,t),n}function Hh(e,t){var r=this,n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Be(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var u=c.rows,d=u.length,f=0;f<d;f++){var h=u.item(f),m=h.value;if(m&&(m=a.serializer.deserialize(m)),m=e(m,h.key,f+1),m!==void 0){o(m);return}}o()},function(l,c){i(c)})})}).catch(i)});return C(n,t),n}function yl(e,t,r,n){var o=this;e=Se(e);var i=new v(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var l=t,c=o._dbInfo;c.serializer.serialize(t,function(u,d){d?s(d):c.db.transaction(function(f){Be(f,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){a(l)},function(h,m){s(m)})},function(f){if(f.code===f.QUOTA_ERR){if(n>0){a(yl.apply(o,[e,l,r,n-1]));return}s(f)}})})}).catch(s)});return C(i,r),i}function zh(e,t,r){return yl.apply(this,[e,t,r,1])}function Fh(e,t){var r=this;e=Se(e);var n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Be(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(l,c){i(c)})})}).catch(i)});return C(n,t),n}function Uh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Be(a,i,`DELETE FROM ${i.storeName}`,[],function(){n()},function(s,l){o(l)})})}).catch(o)});return C(r,e),r}function Vh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Be(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,l){var c=l.rows.item(0).c;n(c)},function(s,l){o(l)})})}).catch(o)});return C(r,e),r}function jh(e,t){var r=this,n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Be(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var u=c.rows.length?c.rows.item(0).key:null;o(u)},function(l,c){i(c)})})}).catch(i)});return C(n,t),n}function Kh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Be(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,l){for(var c=[],u=0;u<l.rows.length;u++)c.push(l.rows.item(u).key);n(c)},function(s,l){o(l)})})}).catch(o)});return C(r,e),r}function Wh(e){return new v(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){r(i)})},function(n){r(n)})})}function Gh(e,t){t=go.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;return e.name?o=new v(function(i){var a;e.name===r.name?a=n._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(Wh(a))}).then(function(i){return new v(function(a,s){i.db.transaction(function(l){function c(h){return new v(function(m,g){l.executeSql(`DROP TABLE IF EXISTS ${h}`,[],function(){m()},function(E,x){g(x)})})}for(var u=[],d=0,f=i.storeNames.length;d<f;d++)u.push(c(i.storeNames[d]));v.all(u).then(function(){a()}).catch(function(h){s(h)})},function(l){s(l)})})}):o=v.reject("Invalid arguments"),C(o,t),o}var Yh={_driver:"webSQLStorage",_initStorage:Dh,_support:Ph(),iterate:Hh,getItem:Oh,setItem:zh,removeItem:Fh,clear:Uh,length:Vh,key:jh,keys:Kh,dropInstance:Gh};function qh(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function wl(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function Xh(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Zh(){return!Xh()||localStorage.length>0}function Jh(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=wl(e,t._defaultConfig),Zh()?(t._dbInfo=r,r.serializer=wo,v.resolve()):v.reject()}function Qh(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(n)===0&&localStorage.removeItem(i)}});return C(r,e),r}function em(e,t){var r=this;e=Se(e);var n=r.ready().then(function(){var o=r._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return C(n,t),n}function tm(e,t){var r=this,n=r.ready().then(function(){for(var o=r._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,l=1,c=0;c<s;c++){var u=localStorage.key(c);if(u.indexOf(i)===0){var d=localStorage.getItem(u);if(d&&(d=o.serializer.deserialize(d)),d=e(d,u.substring(a),l++),d!==void 0)return d}}});return C(n,t),n}function rm(e,t){var r=this,n=r.ready().then(function(){var o=r._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return C(n,t),n}function nm(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(n.keyPrefix)===0&&i.push(s.substring(n.keyPrefix.length))}return i});return C(r,e),r}function om(e){var t=this,r=t.keys().then(function(n){return n.length});return C(r,e),r}function im(e,t){var r=this;e=Se(e);var n=r.ready().then(function(){var o=r._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return C(n,t),n}function am(e,t,r){var n=this;e=Se(e);var o=n.ready().then(function(){t===void 0&&(t=null);var i=t;return new v(function(a,s){var l=n._dbInfo;l.serializer.serialize(t,function(c,u){if(u)s(u);else try{localStorage.setItem(l.keyPrefix+e,c),a(i)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(d),s(d)}})})});return C(o,r),o}function sm(e,t){if(t=go.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,o;return e.name?o=new v(function(i){e.storeName?i(wl(e,n._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=v.reject("Invalid arguments"),C(o,t),o}var lm={_driver:"localStorageWrapper",_initStorage:Jh,_support:qh(),iterate:tm,getItem:em,setItem:am,removeItem:im,clear:Qh,length:om,key:rm,keys:nm,dropInstance:sm};const cm=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),um=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(cm(e[n],t))return!0;n++}return!1},$l=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},mt={},ea={},nt={INDEXEDDB:Nh,WEBSQL:Yh,LOCALSTORAGE:lm},dm=[nt.INDEXEDDB._driver,nt.WEBSQL._driver,nt.LOCALSTORAGE._driver],sr=["dropInstance"],un=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(sr),fm={description:"",driver:dm.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function hm(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function dn(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&($l(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class $o{constructor(t){for(let r in nt)if(nt.hasOwnProperty(r)){const n=nt[r],o=n._driver;this[r]=o,mt[o]||this.defineDriver(n)}this._defaultConfig=dn({},fm),this._config=dn({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const o=new v(function(i,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=un.concat("_initStorage");for(let f=0,h=c.length;f<h;f++){const m=c[f];if((!um(sr,m)||t[m])&&typeof t[m]!="function"){a(l);return}}(function(){const f=function(h){return function(){const m=new Error(`Method ${h} is not implemented by the current driver`),g=v.reject(m);return C(g,arguments[arguments.length-1]),g}};for(let h=0,m=sr.length;h<m;h++){const g=sr[h];t[g]||(t[g]=f(g))}})();const d=function(f){mt[s]&&console.info(`Redefining LocalForage driver: ${s}`),mt[s]=t,ea[s]=f,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,a):d(!!t._support):d(!0)}catch(s){a(s)}});return Qe(o,r,n),o}driver(){return this._driver||null}getDriver(t,r,n){const o=mt[t]?v.resolve(mt[t]):v.reject(new Error("Driver not found."));return Qe(o,r,n),o}getSerializer(t){const r=v.resolve(wo);return Qe(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return Qe(n,t,t),n}setDriver(t,r,n){const o=this;$l(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(u){return o._extend(u),a(),o._ready=o._initStorage(o._config),o._ready}function l(u){return function(){let d=0;function f(){for(;d<u.length;){let m=u[d];return d++,o._dbInfo=null,o._ready=null,o.getDriver(m).then(s).catch(f)}a();const h=new Error("No available storage method found.");return o._driverSet=v.reject(h),o._driverSet}return f()}}const c=this._driverSet!==null?this._driverSet.catch(()=>v.resolve()):v.resolve();return this._driverSet=c.then(()=>{const u=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(u).then(d=>{o._driver=d._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=l(i)})}).catch(()=>{a();const u=new Error("No available storage method found.");return o._driverSet=v.reject(u),o._driverSet}),Qe(this._driverSet,r,n),this._driverSet}supports(t){return!!ea[t]}_extend(t){dn(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,o=t.length;n<o;n++){const i=t[n];this.supports(i)&&r.push(i)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=un.length;t<r;t++)hm(this,un[t])}createInstance(t){return new $o(t)}}const mm=new $o,pm=mm,ta=pm.createInstance({name:"forward-game",storeName:"forward-game"}),ra="forward-game-v1-save",gm={async loadState(){return await ta.getItem(ra)},async saveState(e){ta.setItem(ra,e)}},na=["settings"],vm={moduleId:{name:"save game",version:1},async runModule({gameState:e,executionContext:t}){const r=e.runTime.lastTimeSaved.milliseconds<Date.now()-e.settings.saveInterval.milliseconds||e.runTime.saveNextFrame;if(e.runTime.initialLoadAttempted){if(r)try{return await t.saveAccess.saveState(Ko(e,na)),{stateUpdate:{runTime:{lastTimeSaved:{milliseconds:Date.now()},saveNextFrame:!1}}}}catch(n){console.error("Failed to save game state",n)}}else try{const n=await t.saveAccess.loadState();return n?(console.info("Loading initial state",n),{stateUpdate:{runTime:{initialLoadAttempted:!0},...Ko(n,na)}}):(console.info("No saved game state found."),{stateUpdate:{runTime:{initialLoadAttempted:!0}}})}catch(n){return console.error("Failed to load saved game state",n),{stateUpdate:{runTime:{initialLoadAttempted:!0}}}}}};var j=(e=>(e.Positive="positive",e.Negative="negative",e))(j||{});function Vn(e){return e<0?"negative":"positive"}const bm={moduleId:{name:"map inputs to actions",version:1},runModule({gameState:e}){return{stateUpdate:{runTime:{currentActions:e.runTime.currentInputs.reduce((r,n)=>{var s;const o=(s=e.settings.actionBindings[n.deviceKey])==null?void 0:s[n.inputName];if(!o||!n.inputValue)return r;const i=Vn(n.inputValue),a=o[i];return a&&r.push(...a.map(l=>{const c=Vn(n.inputValue),u=e.runTime.currentActions.find(d=>d.actionName===l&&d.direction===c);return{actionName:l,value:n.inputValue,direction:c,frameCount:((u==null?void 0:u.frameCount)||0)+1}})),r},[])}}}}};var El=(e=>(e.Up="up",e.Down="down",e.Left="left",e.Right="right",e.Pause="pause",e))(El||{});const ym={moduleId:{name:"perform-actions",version:1},runModule({gameState:e,millisecondsSinceLastFrame:t}){const r=Em(e,t);if(r)return{stateUpdate:r}}},wm={keyboard:{"button-w":{[j.Positive]:["up"]},"button-s":{[j.Positive]:["down"]},"button-a":{[j.Positive]:["left"]},"button-d":{[j.Positive]:["right"]},"button-Escape":{[j.Positive]:["pause"]},"button-ArrowUp":{[j.Positive]:["up"]},"button-ArrowDown":{[j.Positive]:["down"]},"button-ArrowLeft":{[j.Positive]:["left"]},"button-ArrowRight":{[j.Positive]:["right"]}}},$m=.24;function Em(e,t){if(e.runTime.haveWon)return;const r=$m*t;let n=0,o=0,i;if(e.runTime.currentActions.forEach(c=>{if(Pa(c.actionName,El))c.actionName==="down"?n+=He({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="up"?n-=He({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="right"?o+=He({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="left"?o-=He({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="pause"&&c.frameCount===1&&(i=!e.runTime.isPaused);else return}),o=Fo({value:o,max:r,min:-1*r}),n=Fo({value:n,max:r,min:-1*r}),o&&n){const c=Math.sqrt(Math.pow(o,2)+Math.pow(n,2));c>r&&(n=n*(r/c),o=o*(r/c))}const a=o||n,s=[!e.runTime.isPaused&&a&&{runTime:{playerPosition:{x:He({number:e.runTime.playerPosition.x+o,digits:2}),y:He({number:e.runTime.playerPosition.y+n,digits:2})}}},i!==void 0&&{isPaused:i}].filter(z);return s.length?tt(...s):void 0}const xm={moduleId:{name:"read inputs",version:1},runModule({executionContext:e,gameState:t}){const r=St(e.inputHandler.readAllDevices(t.settings.deadZoneSettings)).filter(z),n=r.map(s=>({deviceKey:s.deviceKey,deviceName:s.deviceName,deviceType:s.deviceType})),o=!Z(t.runTime.currentDevices,n),i=r.map(s=>St(s.currentInputs).map(l=>({deviceKey:l.deviceKey,inputName:l.inputName,inputValue:l.inputValue}))).flat(),a=!Z(t.runTime.currentInputs,i);if(!(!a&&!o))return{stateUpdate:{runTime:{...o?{currentDevices:n}:{},...a?{currentInputs:i}:{}}}}}},Sm=[xm,bm,ym,vm],_m={runTime:{isPaused:!1,haveWon:!1,playerPosition:{x:0,y:0}}},Tm={settings:{deadZoneSettings:{},actionBindings:wm,saveInterval:{milliseconds:1e4}}},Cm=tt(Tm,_m,{runTime:{currentActions:[],saveNextFrame:!1,initialLoadAttempted:!1,lastTimeSaved:{milliseconds:Date.now()},currentDevices:[],currentInputs:[]}});function km({startImmediately:e,delay:t}){const r=new mo(Sm,Cm,{inputHandler:new fh,saveAccess:gm},{init:{startLoopImmediately:t?!1:e}});return e&&(t!=null&&t.milliseconds)&&setInterval(()=>{r.triggerSingleFrame()},t.milliseconds),r}const xl=Cu()({parent:void 0,title:"elements"}),Mm=new Set(["mouse"]);function Sl(e){return Mm.has(e)}const oa=ku(["red","orange","gold","yellow","lime","green","cyan","blue","purple","magenta"]),ia={milliseconds:700},Ue=ce()({tagName:"vir-glow-animation-v1",styles:y`
        :host {
            display: inline-flex;
        }
    `,stateInitStatic:{lastTimestamp:0,colorIndex:0},renderCallback({inputs:e,host:t,state:r,updateState:n}){const o=Date.now()-ia.milliseconds,i=e.animation&&e.animation.timestamp>o?e.animation:void 0;i&&n({colorIndex:cc({min:0,max:oa.length-1,value:r.colorIndex+1})});const a=oa[r.colorIndex];if(!a)throw new Error("Exceeded colors array size somehow.");return i&&i.timestamp!==r.lastTimestamp&&a!=null&&(t.getAnimations().forEach(s=>s.cancel()),t.animate([{filter:`drop-shadow(0 0 6px ${a}) drop-shadow(0 0 6px ${a})`},{filter:`drop-shadow(0 0 0 ${a}) drop-shadow(0 0 0 ${a})`}],{duration:ia.milliseconds/2,iterations:1}),n({lastTimestamp:i.timestamp})),p`
            <slot></slot>
        `}});var zt=(e=>(e.Large="large",e.Inline="inline",e))(zt||{});const Lm={[N.Gamepad]:"🎮",[N.Keyboard]:"⌨️",[N.Mouse]:"🖱","Add Device":"➕"},Am={[N.Keyboard]:"kb",[N.Mouse]:"m","Add Device":"add"},Ie=ce()({tagName:"vir-device-display-v1",hostClasses:{"vir-device-display-v1-large":({inputs:e})=>e.size==="large","vir-device-display-v1-inline":({inputs:e})=>e.size==="inline"},styles:({hostClasses:e})=>y`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        ${e["vir-device-display-v1-large"].selector} .device-icon {
            font-size: 3em;
        }
    `,initCallback({inputs:e,state:t,updateState:r}){const n=e.inputHandler;if(!t.removeListeners&&n&&e.animated){let o=function(i){i.detail.inputs.newInputs.some(s=>s.deviceKey===e.deviceKey)&&r({animation:{timestamp:Date.now()}})};n.addEventListener(ge.CurrentInputsChanged,o),r({removeListeners(){n.removeEventListener(ge.CurrentInputsChanged,o)}})}},stateInitStatic:{animation:void 0,removeListeners:void 0},cleanupCallback({state:e}){var t;(t=e.removeListeners)==null||t.call(e)},renderCallback({inputs:e,state:t}){const r=e.deviceKey==null?"Add Device":qf[e.deviceKey],n=e.displayShortKey&&Am[r]||(e.deviceKey??r);return p`
            <${Ue.assign({animation:t.animation})}>
                <span title=${r} class="device-icon">${Lm[r]}</span>
            </${Ue}>
            <span>${n}</span>
        `}}),_l=52,aa=ce()({tagName:"vir-single-binding-v1",styles:y`
        .input-name {
            flex-grow: 1;
        }

        button {
            ${we};
            position: relative;
            cursor: pointer;
            display: flex;
            padding: 2px 16px;
            border: 2px solid #ccc;
            border-radius: 8px;
            min-height: ${_l}px;
            align-items: center;
            gap: 16px;
        }

        * {
            transition: ${se["vira-interaction-animation-duration"].value};
        }

        button:hover {
            border-color: dodgerblue;
            background-color: rgba(30, 144, 255, 0.1);
        }

        button.has-binding:hover {
            border-color: red;
            background-color: rgba(255, 0, 0, 0.1);
        }

        button.has-binding:hover .delete-message {
            opacity: 1;
        }

        button.has-binding:hover .device-icon,
        button.has-binding:hover .input-name {
            opacity: 0;
        }

        .delete-message {
            opacity: 0;
            top: 0;
            left: 0;
            position: absolute;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `,renderCallback({inputs:e}){var r,n;const t=(r=e.binding)==null?void 0:r.inputName;return p`
            <button
                class=${Mr({"has-binding":!!e.binding})}
            >
                <span class="device-icon">
                    <${Ie.assign({animated:!1,deviceKey:(n=e.binding)==null?void 0:n.deviceKey,inputHandler:void 0,displayShortKey:!0,size:zt.Inline})}></${Ie}>
                </span>
                ${t==null?"":p`
                          <span class="input-name">${t}</span>
                      `}
                ${ae(!!e.binding,p`
                        <div class="delete-message"><span>Delete</span></div>
                    `)}
            </button>
        `}});function Nm({requiredActionNames:e,bindings:t}){const r=Object.fromEntries(e.map(n=>[n,[]]));return D(t).forEach(n=>{const o=t[n];o&&Object.keys(o).forEach(i=>{const a=o[i];a&&D(a).forEach(s=>{try{const l=a[s];if(!l)return;l.forEach(c=>{const u=r[c];u&&u.push({deviceKey:n,direction:s,inputName:i})})}catch(l){debugger;throw l}})})}),r}const de=ce()({tagName:"vir-bindings-table-v1",styles:y`
        .assignment-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        table {
            max-width: 100%;
            width: 100%;
            border-collapse: collapse;
        }

        th {
            text-align: right;
            vertical-align: top;
            white-space: nowrap;
        }

        tr + tr td,
        tr + tr th {
            border-top: 1px solid #ccc;
        }

        td {
            width: 100%;
        }

        th,
        td {
            padding: 8px;
        }

        .action-name-wrapper {
            height: ${_l}px;
            display: flex;
            align-items: center;
        }

        .add-binding {
            transition: ${se["vira-interaction-animation-duration"].value};
            opacity: 0.5;
        }

        .add-binding:hover {
            opacity: 1;
        }
    `,events:{removeBinding:re(),listenForAction:re()},renderCallback({inputs:e,dispatch:t,events:r}){const n=Nm(e),o=e.requiredActionNames.map(i=>{const a=[void 0,...(n[i]||[]).filter(z)].map(s=>p`
                    <${aa.assign({binding:s})}
                        class=${Mr({"add-binding":!s})}
                        ${k("click",()=>{t(s?new r.removeBinding({actionName:i,...s}):new r.listenForAction({actionName:i}))})}
                    ></${aa}>
                `);return p`
                <tr class="action-assignment-row">
                    <th>
                        <div class="action-name-wrapper"><span>${i}</span></div>
                    </th>
                    <td><div class="assignment-buttons">${a}</div></td>
                </tr>
            `});return p`
            <table>
                <tbody>${o}</tbody>
            </table>
        `}});function Pm(e){return[...e.filter(t=>!Sl(t.deviceKey))].sort((t,r)=>typeof t.deviceKey!="number"?-1:typeof r.deviceKey!="number"?1:t.deviceKey-r.deviceKey)}const sa=ce()({tagName:"vir-device-list-v1",styles:y`
        :host {
            display: flex;
            gap: 32px;
        }
    `,renderCallback({inputs:e}){return Pm(e.devices).map(n=>p`
                <${Ie.assign({animated:!0,deviceKey:n.deviceKey,displayShortKey:!1,size:zt.Large,inputHandler:e.inputHandler})}></${Ie}>
            `)}}),fn=ce()({tagName:"vir-assign-controls-v1",hostClasses:{"vir-assign-controls-v1-listening-for-action":({state:e})=>!!e.listeningForAction},styles:({hostClasses:e})=>y`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 32px;
            text-align: center;
            position: relative;
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

        ${de} {
            margin-top: 16px;
            width: 100%;
            max-width: 1000px;
        }

        .listening-for-action-name {
            /* Set to display: flex in a host class. */
            display: none;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999999;
        }

        .listening-for-action-name p {
            display: flex;
            border: 4px solid grey;
            box-sizing: border-box;
            padding: 64px;
            max-width: 100%;
            background-color: white;
            border-radius: 16px;
        }

        ${e["vir-assign-controls-v1-listening-for-action"].selector} > *:not(.listening-for-action-name) {
            opacity: 0.2;
        }
        ${e["vir-assign-controls-v1-listening-for-action"].selector} .listening-for-action-name {
            display: flex;
        }
    `,events:{assignmentDone:re()},stateInitStatic:{listeningForAction:void 0,currentInputDevices:[],removeInputListeners:void 0,currentBindings:{}},initCallback:({inputs:e,state:t,updateState:r})=>{if(!t.removeInputListeners){let n=function(a){var c,u,d;const s=a.detail.inputs.newInputs[0],l=(c=t.listeningForAction)==null?void 0:c.actionName;if(l&&s&&!Sl(s.deviceKey)){r({listeningForAction:void 0});const f=Vn(s.inputValue),h=((d=(u=e.gamePipeline.currentState.settings.actionBindings[s.deviceKey])==null?void 0:u[s.inputName])==null?void 0:d[f])??[];if(h.includes(l))return;e.gamePipeline.update({stateUpdate:{runTime:{saveNextFrame:!0},settings:{actionBindings:{[s.deviceKey]:{[s.inputName]:{[f]:[...h,l]}}}}}})}};e.gamePipeline.currentExecutionContext.inputHandler.addEventListener(ge.CurrentInputsChanged,n);const o=e.gamePipeline.addStateListener(!0,["runTime","currentDevices"],a=>{r({currentInputDevices:a})}),i=e.gamePipeline.addStateListener(!0,["settings","actionBindings"],a=>{r({currentBindings:a})});r({removeInputListeners:()=>{e.gamePipeline.currentExecutionContext.inputHandler.removeEventListener(ge.CurrentInputsChanged,n),o(),i()}})}},renderCallback:({state:e,updateState:t,inputs:r,events:n,dispatch:o})=>{const i=e.listeningForAction?p`
                  <div class="listening-for-action-name">
                      <p>Press input for "${e.listeningForAction.actionName}"</p>
                  </div>
              `:"";return p`
            ${i}
            <header>
                <h2>Configure Inputs</h2>
                <p>To connect a controller, push buttons on it.</p>
            </header>
            <h3>Available input devices</h3>
            <${sa.assign({showAnimations:!0,devices:e.currentInputDevices,inputHandler:r.gamePipeline.currentExecutionContext.inputHandler})}></${sa}>
            <${de.assign({bindings:e.currentBindings,requiredActionNames:r.requiredActionNames})}
                ${k(de.events.listenForAction,a=>{t({listeningForAction:a.detail})})}
                ${k(de.events.removeBinding,a=>{var c,u;const l=(((u=(c=r.gamePipeline.currentState.settings.actionBindings[a.detail.deviceKey])==null?void 0:c[a.detail.inputName])==null?void 0:u[a.detail.direction])??[]).filter(d=>d!==a.detail.actionName);r.gamePipeline.update({stateUpdate:{runTime:{saveNextFrame:!0},settings:{actionBindings:{[a.detail.deviceKey]:{[a.detail.inputName]:{[a.detail.direction]:l}}}}}})})}
            ></${de}>
            <${Di.assign({text:"Play"})}
                ${k("click",()=>{o(new n.assignmentDone)})}
            ></${Di}>
        `}}),Rm=Br({parent:xl,title:fn.tagName,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:y`
                :host {
                    width: 1000px;
                }
            `,renderCallback({controls:t}){return p`
                    <${fn.assign({requiredActionNames:["cut tree","eat food","move","sleep","walk"],gamePipeline:t.gamePipeline})}></${fn}>
                `}})}}),Im=Br({parent:void 0,title:de.tagName,elementExamplesCallback({defineExample:e}){e({title:"no existing bindings",renderCallback(){return p`
                    <${de.assign({bindings:{},requiredActionNames:["cut tree","eat food","move","sleep","walk"]})}></${de}>
                `}}),e({title:"with some bindings",renderCallback(){return p`
                    <${de.assign({bindings:{[Ot.gamepad1]:{"button-1":{[j.Positive]:["cut tree"]}},keyboard:{"button-long-button-name":{[j.Positive]:["cut tree"]}},mouse:{"button-0":{[j.Positive]:["move"]},"button-1":{[j.Positive]:["ignored-action"]}}},requiredActionNames:["cut tree","eat food","move","sleep","walk"]})}></${de}>
                `}})}}),la=ce()({tagName:"vir-animation-book-wrapper-v1",stateInitStatic:{intervalId:void 0,animation:void 0},initCallback({state:e,updateState:t,inputs:r}){e.intervalId==null&&t({intervalId:window.setInterval(()=>{t({animation:{timestamp:Date.now()}})},r.milliseconds)})},cleanupCallback({state:e,updateState:t}){e.intervalId!=null&&(window.clearInterval(e.intervalId),t({intervalId:void 0}))},renderCallback({state:e}){return p`
            <${Ue.assign({animation:e.animation})}>
                <${Ie.assign({animated:!1,deviceKey:Ot.gamepad1,inputHandler:void 0,displayShortKey:!1,size:zt.Large})}></${Ie}>
            </${Ue}>
        `}}),Bm=Br({parent:void 0,title:Ue.tagName,elementExamplesCallback({defineExample:e}){e({title:"automatic",styles:y`
                :host {
                    ${At};
                }
            `,renderCallback(){return p`
                    <${la.assign({milliseconds:500})}></${la}>
                `}}),e({title:"on click",stateInitStatic:{animation:void 0},styles:y`
                :host {
                    ${At};
                }
            `,renderCallback({state:t,updateState:r}){return p`
                    <${Ue.assign({animation:t.animation})}
                        ${k("click",()=>{r({animation:{timestamp:Date.now()}})})}
                    >
                        <${Ie.assign({animated:!1,deviceKey:Ot.gamepad1,inputHandler:void 0,displayShortKey:!1,size:zt.Large})}></${Ie}>
                    </${Ue}>
                `}})}}),Dm=[xl,Rm,Bm,Im].sort((e,t)=>e.title.localeCompare(t.title)),jn=ce()({tagName:"vira-forward-game-book",stateInitStatic:{gamePipeline:void 0},renderCallback({inputs:e,dispatch:t,updateState:r,state:n}){return n.gamePipeline||r({gamePipeline:km({startImmediately:!0})}),p`
            <${cn.assign({entries:Dm,elementBookRoutePaths:e.currentRoute.paths.slice(1),globalValues:{gamePipeline:n.gamePipeline}})}
                ${k(cn.events.pathUpdate,o=>{const i=o.detail;t(new no({route:{paths:[he.Design,...i]},sanitized:!1}))})}
            ></${cn}>
        `}}),Om=Object.freeze(Object.defineProperty({__proto__:null,VirForwardGameBook:jn},Symbol.toStringTag,{value:"Module"})),Hm="modulepreload",zm=function(e){return"/forward-game/"+e},ca={},ua=function(t,r,n){if(!r||r.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=zm(i),i in ca)return;ca[i]=!0;const a=i.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!n)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Hm,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},da={[he.Design]:{description:"Individual parts of the UI (for demonstration or testing purposes)",async loadVersionElement(){return(await ua(()=>Promise.resolve().then(()=>Om),void 0)).VirForwardGameBook}},[he.V1]:{description:"First working version. With controller support!",async loadVersionElement(){return(await ua(()=>import("./vir-forward-game-app-v1.element-ffd58db4.js"),[])).VirForwardGameAppV1}}},fa=ce()({tagName:"vir-select-game-version",styles:y`
        :host {
            display: flex;
            flex-direction: column;
            padding: 32px;
            gap: 16px;
        }

        .game-version {
            display: flex;
            align-items: center;

            gap: 8px;
            border-radius: 16px;
            border: 2px solid #ccc;
            padding: 16px;
            transition: ${se["vira-interaction-animation-duration"].value};
        }

        .game-version:hover {
            background-color: #b2ecff;
            border-color: #33ccff;
        }
        .game-version:active {
            background-color: #6adaff;
            border-color: #33ccff;
        }

        button {
            ${we}
        }

        h2,
        p {
            ${qs}
        }

        ${Xt} {
            text-decoration: none;
        }
    `,renderCallback({inputs:e,dispatch:t}){return Object.entries(e.versionData).map(([r,n])=>p`
                    <${Xt.assign({route:{route:{paths:[r]},router:e.router}})}
                        ${k(Xt.events.routeChange,o=>{t(new no({route:o.detail,sanitized:!1}))})}
                    >
                        <section class="game-version">
                            <h2>${r}</h2>
                            <p>${n.description}</p>
                        </section>
                    </${Xt}>
                `)}});Rr({tagName:"vir-version-selector",styles:y`
        :host,
        .root {
            position: relative;
            display: block;
            height: 100%;
        }

        .loading {
            opacity: 0;
            animation-name: pulse;
            animation-delay: 1s;
            animation-duration: 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 5em;
        }

        @keyframes pulse {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,stateInitStatic:{router:Eu(),currentRoute:$n,currentGameVersionElement:su({async updateCallback({rootPath:e}){if($u(e))return da[e].loadVersionElement()}})},initCallback({state:e,updateState:t}){e.router.addRouteListener(!0,r=>{t({currentRoute:r})})},renderCallback({state:e}){e.currentGameVersionElement.updateTrigger({rootPath:e.currentRoute.paths[0]});const t=e.currentRoute.paths[0]===he.VersionSelector?p`
                      <${fa.assign({versionData:da,router:e.router})}></${fa}>
                  `:e.currentRoute.paths[0]===he.Design?p`
                        <${jn.assign({currentRoute:e.currentRoute})}></${jn}>
                    `:cu(e.currentGameVersionElement,p`
                            <div class="loading">Loading...</div>
                        `,r=>r?p`
                                <${r.assign({currentRoute:e.currentRoute})}></${r}>
                            `:"Failed",r=>p`
                                Failed: ${r.message}
                            `);return p`
            <div
                class="root"
                ${k(no,r=>{e.router.setRoutes(r.detail.route,r.detail.sanitized)})}
            >
                ${t}
            </div>
        `}});export{no as C,he as F,El as G,fn as V,Pa as a,re as b,y as c,ce as d,Tm as e,km as f,ds as g,p as h,pn as i,Na as j,k as l,tt as m,ae as r,_m as s,En as w};
