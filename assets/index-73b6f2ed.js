var Ll=Object.defineProperty;var Al=(e,t,r)=>t in e?Ll(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var jr=(e,t,r)=>(Al(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr=globalThis,Wn=tr.ShadowRoot&&(tr.ShadyCSS===void 0||tr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gn=Symbol(),ko=new WeakMap;let ha=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Gn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Wn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ko.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ko.set(r,t))}return t}toString(){return this.cssText}};const de=e=>new ha(typeof e=="string"?e:e+"",void 0,Gn),rr=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new ha(r,e,Gn)},Nl=(e,t)=>{if(Wn)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=tr.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},Mo=Wn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return de(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pl,defineProperty:Rl,getOwnPropertyDescriptor:Il,getOwnPropertyNames:Bl,getOwnPropertySymbols:Dl,getPrototypeOf:Ol}=Object,Te=globalThis,Lo=Te.trustedTypes,Hl=Lo?Lo.emptyScript:"",Kr=Te.reactiveElementPolyfillSupport,gt=(e,t)=>e,lr={toAttribute(e,t){switch(t){case Boolean:e=e?Hl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Yn=(e,t)=>!Pl(e,t),Ao={attribute:!0,type:String,converter:lr,reflect:!1,hasChanged:Yn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Te.litPropertyMetadata??(Te.litPropertyMetadata=new WeakMap);let Ze=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ao){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Rl(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=Il(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ao}static _$Ei(){if(this.hasOwnProperty(gt("elementProperties")))return;const t=Ol(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(gt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(gt("properties"))){const r=this.properties,n=[...Bl(r),...Dl(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Mo(o))}else t!==void 0&&r.push(Mo(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:lr).toAttribute(r,n.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:lr;this._$Em=o,this[o]=s.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Yn)(o?i:this[t],r))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(t){}firstUpdated(t){}};Ze.elementStyles=[],Ze.shadowRootOptions={mode:"open"},Ze[gt("elementProperties")]=new Map,Ze[gt("finalized")]=new Map,Kr==null||Kr({ReactiveElement:Ze}),(Te.reactiveElementVersions??(Te.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=globalThis,cr=vt.trustedTypes,No=cr?cr.createPolicy("lit-html",{createHTML:e=>e}):void 0,qn="$lit$",be=`lit$${(Math.random()+"").slice(9)}$`,Xn="?"+be,zl=`<${Xn}>`,Ue=document,$t=()=>Ue.createComment(""),Et=e=>e===null||typeof e!="object"&&typeof e!="function",ma=Array.isArray,pa=e=>ma(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Wr=`[ 	
\f\r]`,ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Po=/-->/g,Ro=/>/g,Be=RegExp(`>|${Wr}(?:([^\\s"'>=/]+)(${Wr}*=${Wr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Io=/'/g,Bo=/"/g,ga=/^(?:script|style|textarea|title)$/i,Fl=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Ul=Fl(1),se=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Do=new WeakMap,ze=Ue.createTreeWalker(Ue,129);function va(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return No!==void 0?No.createHTML(t):t}const ba=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=ut;for(let s=0;s<r;s++){const l=e[s];let c,u,d=-1,f=0;for(;f<l.length&&(a.lastIndex=f,u=a.exec(l),u!==null);)f=a.lastIndex,a===ut?u[1]==="!--"?a=Po:u[1]!==void 0?a=Ro:u[2]!==void 0?(ga.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=Be):u[3]!==void 0&&(a=Be):a===Be?u[0]===">"?(a=o??ut,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?Be:u[3]==='"'?Bo:Io):a===Bo||a===Io?a=Be:a===Po||a===Ro?a=ut:(a=Be,o=void 0);const h=a===Be&&e[s+1].startsWith("/>")?" ":"";i+=a===ut?l+zl:d>=0?(n.push(c),l.slice(0,d)+qn+l.slice(d)+be+h):l+be+(d===-2?s:h)}return[va(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class xt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,u]=ba(t,r);if(this.el=xt.createElement(c,n),ze.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=ze.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(qn)){const f=u[a++],h=o.getAttribute(d).split(be),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:h,ctor:m[1]==="."?wa:m[1]==="?"?$a:m[1]==="@"?Ea:Pt}),o.removeAttribute(d)}else d.startsWith(be)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(ga.test(o.tagName)){const d=o.textContent.split(be),f=d.length-1;if(f>0){o.textContent=cr?cr.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],$t()),ze.nextNode(),l.push({type:2,index:++i});o.append(d[f],$t())}}}else if(o.nodeType===8)if(o.data===Xn)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(be,d+1))!==-1;)l.push({type:7,index:i}),d+=be.length-1}i++}}static createElement(t,r){const n=Ue.createElement("template");return n.innerHTML=t,n}}function Ve(e,t,r=e,n){var a,s;if(t===se)return t;let o=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=Et(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Ve(e,o._$AS(e,t.values),o,n)),t}class ya{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Ue).importNode(r,!0);ze.currentNode=o;let i=ze.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new it(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new xa(i,this,t)),this._$AV.push(c),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=ze.nextNode(),a++)}return ze.currentNode=Ue,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class it{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ve(this,t,r),Et(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==se&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):pa(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&Et(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ue.createTextNode(t)),this._$AH=t}g(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=xt.createElement(va(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const a=new ya(o,this),s=a.u(this.options);a.p(r),this.$(s),this._$AH=a}}_$AC(t){let r=Do.get(t.strings);return r===void 0&&Do.set(t.strings,r=new xt(t)),r}T(t){ma(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new it(this.k($t()),this.k($t()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Ve(this,t,r,0),a=!Et(t)||t!==this._$AH&&t!==se,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Ve(this,s[n+l],r,l),c===se&&(c=this._$AH[l]),a||(a=!Et(c)||c!==this._$AH[l]),c===P?t=P:t!==P&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.O(t)}O(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wa extends Pt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===P?void 0:t}}class $a extends Pt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==P)}}class Ea extends Pt{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Ve(this,t,r,0)??P)===se)return;const n=this._$AH,o=t===P&&n!==P||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==P&&(n===P||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class xa{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ve(this,t)}}const Vl={j:qn,P:be,A:Xn,C:1,M:ba,L:ya,R:pa,V:Ve,D:it,I:Pt,H:$a,N:Ea,U:wa,B:xa},Gr=vt.litHtmlPolyfillSupport;Gr==null||Gr(xt,it),(vt.litHtmlVersions??(vt.litHtmlVersions=[])).push("3.1.0");const jl=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new it(t.insertBefore($t(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bt=class extends Ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return se}};var fa;bt._$litElement$=!0,bt.finalized=!0,(fa=globalThis.litElementHydrateSupport)==null||fa.call(globalThis,{LitElement:bt});const Yr=globalThis.litElementPolyfillSupport;Yr==null||Yr({LitElement:bt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},at=e=>(...t)=>({_$litDirective$:e,values:t});class je{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:Kl}=Vl,Oo=()=>document.createComment(""),dt=(e,t,r)=>{var i;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=n.insertBefore(Oo(),o),s=n.insertBefore(Oo(),o);r=new Kl(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(i=r._$AQ)==null||i.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==o||l){let c=r._$AA;for(;c!==a;){const u=c.nextSibling;n.insertBefore(c,o),c=u}}}return r},De=(e,t,r=e)=>(e._$AI(t,r),e),Wl={},Gl=(e,t=Wl)=>e._$AH=t,Yl=e=>e._$AH,qr=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=at(class extends je{constructor(e){var t;if(super(e),e.type!==kr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.st)!=null&&n.has(i))&&this.it.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.it)i in t||(r.remove(i),this.it.delete(i));for(const i in t){const a=!!t[i];a===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(a?(r.add(i),this.it.add(i)):(r.remove(i),this.it.delete(i)))}return se}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ho=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},ql=at(class extends je{constructor(e){if(super(e),e.type!==kr.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ht(e,t,r).values}update(e,[t,r,n]){const o=Yl(e),{values:i,keys:a}=this.ht(t,r,n);if(!Array.isArray(o))return this.dt=a,i;const s=this.dt??(this.dt=[]),l=[];let c,u,d=0,f=o.length-1,h=0,m=i.length-1;for(;d<=f&&h<=m;)if(o[d]===null)d++;else if(o[f]===null)f--;else if(s[d]===a[h])l[h]=De(o[d],i[h]),d++,h++;else if(s[f]===a[m])l[m]=De(o[f],i[m]),f--,m--;else if(s[d]===a[m])l[m]=De(o[d],i[m]),dt(e,l[m+1],o[d]),d++,m--;else if(s[f]===a[h])l[h]=De(o[f],i[h]),dt(e,o[d],o[f]),f--,h++;else if(c===void 0&&(c=Ho(a,h,m),u=Ho(s,d,f)),c.has(s[d]))if(c.has(s[f])){const g=u.get(a[h]),E=g!==void 0?o[g]:null;if(E===null){const x=dt(e,o[d]);De(x,i[h]),l[h]=x}else l[h]=De(E,i[h]),dt(e,o[d],E),o[g]=null;h++}else qr(o[f]),f--;else qr(o[d]),d++;for(;h<=m;){const g=dt(e,l[m+1]);De(g,i[h]),l[h++]=g}for(;d<=f;){const g=o[d++];g!==null&&qr(g)}return this.dt=a,Gl(e,l),se}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hn extends je{constructor(t){if(super(t),this.et=P,t.type!==kr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this.vt=void 0,this.et=t;if(t===se)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}hn.directiveName="unsafeHTML",hn.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zo extends hn{}zo.directiveName="unsafeSVG",zo.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xl(e,t,r){return e?t(e):r==null?void 0:r(e)}class Sa extends bt{}function Zl(e,t){return e.filter((r,n)=>!t.includes(n))}function Jl(e,t){return e.includes(t)}async function Ql(e,t){await ec(e,t)}async function ec(e,t){return await e.reduce(async(n,o,i,a)=>{const s=await n,l=await t(o,i,a);return s.push(l),s},Promise.resolve([]))}function z(e){return!!e}function tc(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const rc={capitalizeFirstLetter:!1};function nc(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function oc(e,t){return t.capitalizeFirstLetter?nc(e):e}function _a(e,t=rc){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return oc(n,t)}var rt;(function(e){e.Upper="upper",e.Lower="lower"})(rt||(rt={}));function ic(e){return e.toLowerCase()!==e.toUpperCase()}function Fo(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!ic(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===rt.Upper&&o!==o.toUpperCase())return!1;if(t===rt.Lower&&o!==o.toLowerCase())return!1}return!0}function ac(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Fo(a,rt.Lower,{blockNoCaseCharacters:!0})||Fo(s,rt.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function sc(e,t){return e.split(t)}function lc({max:e,min:t,value:r}){return r>e?t:r<t?e:r}function Oe(e){const t=Math.pow(10,e.digits),r=e.number*t;return Number((Math.round(r)/t).toFixed(e.digits))}function Uo({value:e,min:t,max:r}){return Math.min(Math.max(e,t),r)}const cc=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function B(e,t){return e?cc.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ca(e,t){return e&&t.every(r=>B(e,r))}function uc(e){return!!(B(e,"then")&&typeof e.then=="function")}async function Ta(e){return await Promise.resolve().then(()=>e())}function ka(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Ke(r).trim()).join(`
`))}function Ke(e){return e?e instanceof Error?e.message:B(e,"message")?String(e.message):String(e):""}function Lr(e){return e instanceof Error?e:new Error(Ke(e))}function mn(e){return Array.isArray(e)?"array":typeof e}function H(e,t){return mn(e)===t}function he(e){return!!e&&typeof e=="object"}function dc(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function D(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function St(e){return D(e).map(t=>e[t])}function fc(e){return Object.fromEntries(e)}function Ma(e,t,r=!1,n={}){const o=D(e),i=new Set(D(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!B(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(u){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${u}`)}const l=e[a],c=t[a];n[a]||La(l,c,s,r,n[a]??{})})}function La(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{B(t,"constructor")&&(!B(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{La(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${Ke(f)}`)}}).filter(z).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):he(t)&&Ma(e,t,n,o)}function Vo({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const jo="Failed to compare objects using JSON.stringify";function Ko(e,t,r){return Vo({source:e,errorHandler(n){if(r)return"";throw n}})===Vo({source:t,errorHandler(n){if(r)return"";throw n}})}function X(e,t,r={}){try{return e===t?!0:he(e)&&he(t)?Ko(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>X(e[o],t[o])):!1:Ko(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Lr(n);throw o.message.startsWith(jo)||(o.message=`${jo}: ${o.message}`),o}}function hc(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function mc(e){return D(e).filter(t=>isNaN(Number(t)))}function Aa(e){return mc(e).map(r=>e[r])}function Na(e,t){return Aa(t).includes(e)}function Pa(e,t){return D(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function pc(e,t){return Pa(e,r=>!t.includes(r))}function Wo(e,t){return Pa(e,r=>t.includes(r))}function $e(e,t){let r=!1;const n=D(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(D(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function pn(e,t){try{return Ra(e,t),!0}catch{return!1}}function Ra(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function yt(...e){if(!pn(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(n=>{if(H(n,"object"))H(t,"object")||(t={...n});else{t=n;return}Object.entries(n).forEach(([o,i])=>{r[o]||(r[o]=[]),r[o].push(i)})}),H(t,"object")&&Object.entries(r).forEach(([n,o])=>{const i=yt(...o);i===void 0&&n in t?delete t[n]:i!==void 0&&(t[n]=i)}),t}function gn(e,t){const r=t,n=e;if(H(n,"array"))return n.map(a=>gn(a,t));const o=r[0];if(!B(n,o))return;const i=n[o];return r.length>1?gn(i,r.slice(1)):i}function _t(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${_t.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function vn(e){const t=_t();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const gc=globalThis.crypto;function Ia(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return gc.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function vc({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function bc(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(z);return t.length?`?${t.join("&")}`:""}function yc(e){return vc({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=sc(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(z)}function wc(e,t){const r=H(e,"string")?new URL(e):e,n=yc(r.search),o=Object.fromEntries(n);return t&&Ma(o,t),o}const $c="px";function Ec(e){return xc({value:e,suffix:$c})}function xc({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function We(e){if(he(e))return $e(e,(r,n)=>{if(!H(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(ac(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?de(r):r.startsWith("-")?rr`-${de(r)}`:rr`--${de(r)}`;return{name:a,value:rr`var(${a}, ${de(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${We.name}' function.`)}function Sc({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function _c(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function bn(e){return B(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function Zn(e){return B(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Ba(e){return e.map(t=>bn(t)?t.definition:t).filter(t=>Zn(t))}const Da=new WeakMap;function Cc(e,t){var o;const r=Ba(t);return(o=Oa(Da,[e,...r]).value)==null?void 0:o.template}function Tc(e,t,r){const n=Ba(t);return za(Da,[e,...n],r)}function Oa(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Ha(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Oa(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Ha(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function za(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=Ha(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),za(l,t,r,n+1)}const kc=new WeakMap;function Fa(e,t,r){const n=Cc(e,t),o=n??r();if(!n){const s=Tc(e,t,o);if(s.result)kc.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=_c(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Ua(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,m=t[h];n&&n(c);let g,E=[];if(typeof f=="string"&&(g=r(f,c,m),g)){o[d]=f+g.replacement,a.push(h);const C=g.getExtraValues;E=C?C(m):[],E.length&&C?(o[d]+=" ",E.forEach((A,L)=>{L&&o.push(" ")}),s.push(A=>{const L=A[h],V=C(L);return{index:h,values:V}}),o.push(c)):o[d]+=c}g||o.push(c);const x=e.raw[u];g?(i[d]=i[d]+g.replacement+x,E.length&&E.forEach(()=>{i.push("")})):i.push(x)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const u=s.map(d=>d(c)).flat();return{valueIndexDeletions:a,valueInsertions:u}}}}function Mc(...[e,t,r]){if(Zn(r))return{replacement:r.tagName,getExtraValues:void 0}}function Lc(e,t){return Ua(e,t,Mc)}function y(e,...t){const r=Fa(e,t,()=>Lc(e,t));return rr(r.strings,...r.values)}const Jn=Symbol("key for ignoring inputs not having been set yet"),Ac={[Jn]:!0,allowPolymorphicState:!1};function Va(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Sa?!0:Va(r)}function ja(e,t){const r=e.instanceState;D(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&D(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Nc(e)}function Nc(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function Go(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Pc extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Ar(){return e=>{var t;return t=class extends Pc{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function te(){return Ar()}function Rc(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=Ar()([e,n].join("-"));return r[n]=o,r},{}):{}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ic={attribute:!0,type:String,converter:lr,reflect:!1,hasChanged:Yn},Bc=(e=Ic,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.C(a,void 0,e),s}}}if(n==="setter"){const{name:a}=r;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function Dc(e){return(t,r)=>typeof r=="object"?Bc(e,t,r):((n,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}const Oc="_elementVirStateSetup";function Hc(e){return he(e)?Oc in e:!1}function zc(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return mn(e)===mn(t)&&r}const Ka=Symbol("and"),Wa=Symbol("or"),Ga=Symbol("exact"),Ya=Symbol("enum"),Qn=Symbol("unknown"),qa="__vir__shape__definition__key__do__not__use__in__actual__objects";function Xa(e){return B(e,qa)}const Za="__vir__shape__specifier__key__do__not__use__in__actual__objects",Fc=[Ka,Wa,Ga,Ya,Qn];function Uc(){return Vc([],Qn)}function Nr(e){return Rt(e,Wa)}function eo(e){return Rt(e,Ka)}function to(e){return Rt(e,Ga)}function ro(e){return Rt(e,Ya)}function no(e){return Rt(e,Qn)}function Rt(e,t){const r=Pr(e);return!!r&&r.specifierType===t}function Vc(e,t){return{[Za]:!0,specifierType:t,parts:e}}function nr(e,t){const r=Pr(t);if(r){if(eo(r))return r.parts.every(n=>nr(e,n));if(Nr(r))return r.parts.some(n=>nr(e,n));if(to(r))return he(e)?nr(e,r.parts[0]):e===r.parts[0];if(ro(r))return Object.values(r.parts[0]).some(n=>n===e);if(no(r))return!0}return zc(e,t)}function Pr(e){if(he(e)&&B(e,Za)){if(!B(e,"parts")||!H(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!B(e,"specifierType")||!Jl(Fc,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function yn(e,t=!1){return wn(e)}function wn(e){const t=Pr(e);if(t){if(Nr(t)||to(t))return wn(t.parts[0]);if(eo(t))return t.parts.reduce((r,n)=>Object.assign(r,wn(n)),{});if(ro(t))return Object.values(t.parts[0])[0];if(no(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Xa(e)?yn(e.shape):e instanceof RegExp||H(e,"array")?e:he(e)?$e(e,(r,n)=>yn(n)):e}function jc(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:yn(e),[qa]:!0}}class ne extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Kc(e,t,r={}){try{return Wc(e,t,r),!0}catch{return!1}}function Wc(e,t,r={}){He(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Ja(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function He(e,t,r,n){if(no(t))return!0;if(Xa(t))return He(e,t.shape,r,n);const o=Ja(r);if(Pr(e))throw new ne(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!nr(e,t))throw new ne(`Subject does not match shape definition at key ${o}`);if(H(t,"function"))return H(e,"function");if(he(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(Nr(t))l=t.parts.some(c=>{try{const u=He(e,c,r,{...n});return Object.assign(s,u),!0}catch(u){if(u instanceof ne)return!1;throw u}});else if(eo(t))l=t.parts.every(c=>{try{const u=He(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,u),!0}catch(u){if(u instanceof ne)return!1;throw u}});else if(to(t)){const c=He(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(ro(t))throw new ne(`Cannot compare an enum specifier to an object at ${o}`);if(H(t,"array")&&H(a,"array"))l=a.every((c,u)=>{const d=t.some(f=>{try{return He(c,f,[...r,u],n),!0}catch(h){if(h instanceof ne)return!1;throw h}});return s[u]=d,d});else{const c=Gc({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).join(",")}`;throw new ne(u)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,u])=>{if(!u)throw new ne(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function Gc({keys:e,options:t,shape:r,subject:n}){const o=Ja(e),i={};if(he(r)){const a=new Set(D(n)),s=new Set(D(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new ne(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var f;const c=r[l],u=Nr(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!a.has(l)&&!u&&!d)throw new ne(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=r[l];He(c,u,[...e,l],t),i[l]=!0})}else throw new ne(`shape definition at ${o} was not an object.`);return i}const Yc=jc({addListener(){return!1},removeListener(){return!1},value:Uc()});function Xr(e){return Kc(e,Yc,{allowExtraKeys:!0})}function Qa(e,t){t in e||Dc()(e,t)}function qc(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Yo(e,t){const r=e;function n(a){t?qc(a,e,e.tagName):Qa(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set(a,s,l){const c=Hc(l)?l._elementVirStateSetup():l;n(s);const u=r[s];function d(h){a[s]=h,r[s]=h}const f=e.observablePropertyListenerMap[s];if(u!==c&&Xr(u)&&(f!=null&&f.length)&&u.removeListener(f),Xr(c))if(f)c.addListener(f);else{let h=function(){e.requestUpdate()};e.observablePropertyListenerMap[s]=h,c.addListener(h)}else Xr(u)&&(e.observablePropertyListenerMap[s]=void 0);return d(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function Xc(e){return e?$e(e,t=>t):{}}function Zc({hostClassNames:e,cssVars:t}){return{hostClasses:$e(e,(r,n)=>({name:de(n),selector:de(`:host(.${n})`)})),cssVars:t}}function Jc({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&D(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Qc(e,t){function r(o){D(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var eu=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Rr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Ac,...e.options},n=Rc(e.tagName,e.events),o=Xc(e.hostClasses);e.hostClasses&&Go(e.tagName,e.hostClasses),e.cssVars&&Go(e.tagName,e.cssVars);const i=e.cssVars?We(e.cssVars):{},a=typeof e.styles=="function"?e.styles(Zc({hostClassNames:o,cssVars:i})):e.styles||y``,s=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends Sa{createRenderParams(){return Qc(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Va(this)&&!this._haveInputsBeenSet&&!r[Jn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Rr.name}' to define ${e.tagName}.`),this._hasRendered=!0;const u=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Jc({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this._lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Lr(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this._lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(u){ja(this,u)}constructor(){var d;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Yo(this,!1),this.instanceState=Yo(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};D(u).forEach(f=>{Qa(this,f),this.instanceState[f]=u[f]}),this.definition=c}},eu(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:_a(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function le(){return e=>Rr({...e,options:{[Jn]:!1,...e.options}})}function es(e,t){return Ct(e,t),e.element}function tu(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Ct(e,t){const r=tu(e),n=r?`: in ${r}`:"";if(e.type!==kr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function ru(e,t){return t?qo(e,t):qo(void 0,e)}const qo=at(class extends je{constructor(e){super(e),this.element=es(e,"assign")}render(e,t){return ja(this.element,t),se}});function nu(e,t){return e===t}function ou(e,t=nu){const r=new Set;function n(){r.forEach(i=>i(o.value))}const o={value:e,setValue(i){t(o.value,i)||(o.value=i,n())},addListener(i){const a=!r.has(i);return a&&r.add(i),a},removeListener(i){return r.delete(i)}};return o}const Zr=Symbol("not set");function iu(e){let t=Zr,r;const n=e&&"updateCallback"in e?e.updateCallback:void 0;let o=_t();const i=ou(o.promise);function a(){o=_t(),i.setValue(o.promise)}function s(m){o.resolve(m),i.setValue(m)}function l(m){o.reject(m),i.setValue(m)}function c(m){m!==r&&(r=m,o.isSettled()&&a(),m.then(g=>{r===m&&s(g)}).catch(g=>{r===m&&(o.promise.catch(()=>{}),l(Lr(g)))}))}function u(m,g){if(!n)throw console.error(e),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const E={...m},x={...g};if(t===Zr||!X(E,t,{ignoreNonSerializableProperties:!0})){t=E;const C=n(t,x);c(C)}}function d(m,g){t=Zr,u(m,g)}const f=e&&"defaultValue"in e?e.defaultValue:new Promise(()=>{});return f instanceof Promise?c(f):s(f),Object.assign(i,{setNewPromise(m){c(m)},setResolvedValue(m){m!==i.value&&(o.isSettled()&&a(),o.resolve(m),s(m))},updateTrigger:n?u:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:n?d:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}})}function au(...e){return{_elementVirStateSetup(){return iu(...e)}}}function k(e,t){return su(e,t)}const su=at(class extends je{constructor(e){super(e),this.element=es(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),se}}),Xo="onDomCreated",Zo=at(class extends je{constructor(e){super(e),Ct(e,Xo)}update(e,[t]){Ct(e,Xo);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Jr="onResize",ts=at(class extends je{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Ct(e,Jr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Jr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Ct(e,Jr),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function lu(e,t,r,n){const o=e.value;return o instanceof Error?n?n(o):Ke(o):uc(o)?t:r?r(o):o}function ie(e,t,r){return Xl(e,()=>t,()=>r)}function rs(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),le()(r(n))),defineElementNoInputs:n=>(t(n),Rr(r(n)))}}function cu(...[e,t,r]){const n=bn(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=Zn(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(c){const u=bn(c)?c.inputs:void 0;return[o&&u?ru(u):void 0].filter(z)}}}function uu(e){}function du(e){return Ua(e.strings,e.values,cu,uu)}function p(e,...t){const r=Ul(e,...t),n=Fa(e,t,()=>du(r));return{...r,strings:n.strings,values:n.values}}const fu=0;function ns(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==fu)}class Ir extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Jo extends Ir{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Tt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const hu=globalThis.history.pushState;function Qo(...e){const t=hu.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Tt)),t}const mu=globalThis.history.replaceState;function ei(...e){const t=mu.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Tt)),t}function pu(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Qo)throw new Jo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===ei)throw new Jo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Qo,globalThis.history.replaceState=ei,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Tt))})}}function gu(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?wc(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function os(e){return e.replace(/(?:^\/|\/+$)/g,"")}function is({routeBase:e,windowPath:t}){if(!e)return"";const r=os(e);if(as({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?is({routeBase:n,windowPath:t}):""}function as({routeBase:e,windowPath:t}){const r=os(e);return r?t.startsWith(`/${r}`):!1}class vu extends Ir{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function ss(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const ti=6;function ri(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>ti)throw new vu(`Route sanitization depth has exceed the max of ${ti} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(ss(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Qr extends Ir{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function bu(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Qr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Qr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Qr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function yu(e,t,r=!1){const n=ls(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function ls(e,t){var s;const r=as({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?bc(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(z).join("/")}${n}${i}`}function cs(e={}){bu(e),pu();const t=e.routeBase?is({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>ri(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},u=o.sanitizeFullRoute(c);if(!(!s&&ss(l,u)))return yu(u,t,a)},createRoutesUrl(i){return ls(i,t)},getCurrentRawRoutes(){return gu(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Ir(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(Tt,n),r=!0),i&&ri(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(Tt,n),r=!1),a},sanitizationDepth:0};return o}var fe=(e=>(e.VersionSelector="version-selector",e.Design="design",e.V1="v1",e))(fe||{});const us=fc(Aa(fe).filter(e=>e!=="version-selector").map(e=>[e,e]));function wu(e){return e in us}const $n={paths:["version-selector"],search:void 0,hash:void 0};let ni=0;function $u(){if(ni++,ni>1)throw new Error("Illegal to create multiple copies of the game router.");return cs({maxListenerCount:1,routeBase:"forward-game",routeSanitizer(t){const r=t.paths[0];return r?r===fe.VersionSelector?{...t,paths:[fe.VersionSelector]}:r in us||r===fe.Design?t:$n:$n}})}const oo=Ar()("change-route-event");function Eu(e,t){return B(e,"entryType")&&e.entryType===t}var O;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(O||(O={}));function Ge(e,t){return e.controlType===t}var U;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(U||(U={}));const ds=Symbol("any-type"),xu={[U.Checkbox]:!1,[U.Color]:"",[U.Dropdown]:"",[U.Hidden]:ds,[U.Number]:0,[U.Text]:""};function Su(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=xu[o.controlType];i!==ds&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function io(e,t){const r=ur(e.title);return e.parent?[...io(e.parent,!1),ur(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function ur(e){return tc(e).toLowerCase().replaceAll(/\s/g,"-")}function _u({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Cu(){return e=>Br(e)}function Br(e){const t={...e,entryType:O.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:O.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(z)};r.add(n.title),t.elementExamples[ur(o.title)]=o}}),t}var we;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(we||(we={}));async function En(e=1){const t=_t();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function Tu(e){return e.map(t=>({value:t,sort:Ia()})).sort((t,r)=>t.sort.localeCompare(r.sort)).map(({value:t})=>t)}async function ku(e){return Mu(e,1)}async function Mu(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{Ra(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}const Lu={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},Au=Object.keys(Lu),Nu=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...Au,...Nu];function ht(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const Pu={[O.ElementExample]:()=>[],[O.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Su(e.controls,e.title)].filter(z),[O.Root]:()=>[]},dr="_isBookTreeNode",fs=new Map;function Ru(e){return fs.get(e)}function Iu(e,t){hc(fs,e,()=>t)}function et(e,t){return!!(hs(e)&&e.entry.entryType===t)}function hs(e){return!!(Ca(e,[dr,"entry"])&&e[dr])}function Bu(){return{[dr]:!0,entry:{entryType:O.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Du({entries:e,debug:t}){const r=Ru(e);if(r)return r;const n=Bu();e.forEach(a=>ao({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=ms(n),i={tree:n,flattenedNodes:o};return Iu(e,i),t&&console.info("element-book tree:",n),i}function Ou(e,t,r){if(!t.parent)return e;const n=xn(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),ao({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=xn(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${io(t,!1)}`);return o}function ao({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Pu[t.entryType](t);t.errors.push(...o);const i=Ou(e,t,r),a=ur(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[dr]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,Eu(t,O.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>ao({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function xn(e,t){const r=hs(e)?e.fullUrlBreadcrumbs.slice(0,-1):io(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function ms(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>ms(o));return[e,...r].flat()}function so(e,t){return lo(e,["",...t],void 0)}function lo(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&lo(i,n,r);return{...e.controls,...a}}function Hu(e,t,r){const n={...e};return lo(n,["",...t],r),n}function ps(e,t){const r=(t==null?void 0:t.controls)||(et(e,O.Page)?$e(e.entry.controls,(o,i)=>i.initValue):{});return{children:$e(e.children,(o,i)=>{var a;return ps(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function zu({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const Fu=Ia(32);function or(e){return e.join(Fu)}function gs(e){if(!e.length)return[];const t=or(e),r=gs(e.slice(0,-1));return[t,...r]}const Uu=["error","errors"];function Vu(e){return Uu.includes(e)}function ju({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),or(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&Vu(t),a=or(o.fullUrlBreadcrumbs);if(zu({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=gs(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=or(o.fullUrlBreadcrumbs),a=r[i];if(!H(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var j;(function(e){e.Search="search",e.Book="book"})(j||(j={}));function Sn(e){return e[0]===j.Book?"":e[1]?decodeURIComponent(e[1]):""}const nt={hash:void 0,paths:[j.Book],search:void 0};function Ku(e){return cs({routeBase:e,routeSanitizer(t){return{paths:Wu(t.paths),hash:void 0,search:void 0}}})}function Wu(e){const t=e[0];if(Na(t,j)){if(t===j.Book)return[j.Book,...e.slice(1)];if(t===j.Search)return e[1]?[t,e[1]]:[j.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return nt.paths}const S=We({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Gu={nav:{hover:{background:S["element-book-nav-hover-background-color"],foreground:S["element-book-nav-hover-foreground-color"]},active:{background:S["element-book-nav-active-background-color"],foreground:S["element-book-nav-active-foreground-color"]},selected:{background:S["element-book-nav-selected-background-color"],foreground:S["element-book-nav-selected-foreground-color"]}},accent:{icon:S["element-book-accent-icon-color"]},page:{background:S["element-book-page-background-color"],backgroundFaint1:S["element-book-page-background-faint-level-1-color"],backgroundFaint2:S["element-book-page-background-faint-level-2-color"],foreground:S["element-book-page-foreground-color"],foregroundFaint1:S["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:S["element-book-page-foreground-faint-level-2-color"]}};function Yu(e,t){vs(e,t,Gu)}function _n(e){return B(e,"_$cssResult$")}function oi(e){return Ca(e,["name","value","default"])&&H(e.default,"string")&&_n(e.name)&&_n(e.value)}function vs(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(_n(o)){if(!oi(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Sc({forCssVar:i,onElement:e,toValue:String(o)})}else{if(oi(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);vs(e,o,i)}})}function R(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function It(e){return ke(e)==="string"}function ke(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function fr(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function bs(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ys(e){return e[e.length-1]}function hr(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function ws(e,t,r){return(r-e)/(t-e)}function co(e,t,r){return hr(t[0],t[1],ws(e[0],e[1],r))}function $s(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var qu=Object.freeze({__proto__:null,interpolate:hr,interpolateInv:ws,isString:It,last:ys,mapRange:co,multiplyMatrices:R,parseCoordGrammar:$s,parseFunction:bs,toPrecision:fr,type:ke});class Xu{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Me=new Xu;var me={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const oe={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Cn(e){return Array.isArray(e)?e:oe[e]}function mr(e,t,r,n={}){if(e=Cn(e),t=Cn(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Me.run("chromatic-adaptation-start",o),o.M||(o.W1===oe.D65&&o.W2===oe.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===oe.D50&&o.W2===oe.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Me.run("chromatic-adaptation-end",o),o.M)return R(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Zu=75e-6,G=class G{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?G.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Cn(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Ju(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Me.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Zu}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=ii(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=ii(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=G.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=G.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(G.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof G)return t;if(ke(t)==="string"){let o=G.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return G.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=ke(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=G.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ke(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=G.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===a||((l=u.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...u};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};jr(G,"registry",{}),jr(G,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=G;function Ju(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function ii(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=$s(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=co(s,l,i)),i=fr(i,o),c&&(i+=c),i})}return e}var J=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class K extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=J),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=R(t.toXYZ_M,r);return this.white!==this.base.white&&(n=mr(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=mr(this.base.white,this.white,r),R(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Es(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(Me.run("parse-start",r),r.color)return r.color;if(r.parsed=bs(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const m=Object.keys(f.coords).map((g,E)=>r.parsed.args[E]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:m,alpha:u}}}let d="";if(c in b.registry){let f=(s=(a=(i=b.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||ys(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([m,g],E)=>{var ce;let x=u.coordGrammar[E],C=(ce=f[E])==null?void 0:ce.type,A=x.find(W=>W==C);if(!A){let W=g.name||m;throw new TypeError(`${C} not allowed for ${W} in ${l}()`)}let L=A.range;C==="<percentage>"&&(L||(L=[0,1]));let V=g.range||g.refRange;return L&&V&&(f[E]=co(L,V,f[E])),A})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function _(e){if(!e)throw new TypeError("Empty color reference");It(e)&&(e=Es(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Bt(e,t){return t=b.get(t),t.from(e)}function Q(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return Bt(e,r)[n]}function xs(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function Le(e,t,r){if(e=_(e),arguments.length===2&&ke(arguments[1])==="object"){let n=arguments[1];for(let o in n)Le(e,o,n[o])}else{typeof r=="function"&&(r=r(Q(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),i=Bt(e,n);i[o]=r,xs(e,n,i)}return e}var uo=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:J,fromBase:e=>mr(J.white,"D50",e),toBase:e=>mr("D50",J.white,e),formats:{color:{}}});const Qu=216/24389,ai=24/116,Ut=24389/27;let en=oe.D50;var Y=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:en,base:uo,fromBase(e){let r=e.map((n,o)=>n/en[o]).map(n=>n>Qu?Math.cbrt(n):(Ut*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ai?Math.pow(t[0],3):(116*t[0]-16)/Ut,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ut,t[2]>ai?Math.pow(t[2],3):(116*t[2]-16)/Ut].map((n,o)=>n*en[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Dr(e){return(e%360+360)%360}function ed(e,t){if(e==="raw")return t;let[r,n]=t.map(Dr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var kt=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Y,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const si=25**7,pr=Math.PI,li=180/pr,Ye=pr/180;function Tn(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=Y.from(e),l=kt.from(Y,[i,a,s])[1],[c,u,d]=Y.from(t),f=kt.from(Y,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let m=((l+f)/2)**7,g=.5*(1-Math.sqrt(m/(m+si))),E=(1+g)*a,x=(1+g)*u,C=Math.sqrt(E**2+s**2),A=Math.sqrt(x**2+d**2),L=E===0&&s===0?0:Math.atan2(s,E),V=x===0&&d===0?0:Math.atan2(d,x);L<0&&(L+=2*pr),V<0&&(V+=2*pr),L*=li,V*=li;let ce=c-i,W=A-C,M=V-L,F=L+V,Ur=Math.abs(M),lt;C*A===0?lt=0:Ur<=180?lt=M:M>180?lt=M-360:M<-180?lt=M+360:console.log("the unthinkable has happened");let xo=2*Math.sqrt(A*C)*Math.sin(lt*Ye/2),_l=(i+c)/2,Vr=(C+A)/2,So=Math.pow(Vr,7),ge;C*A===0?ge=F:Ur<=180?ge=F/2:F<360?ge=(F+360)/2:ge=(F-360)/2;let _o=(_l-50)**2,Cl=1+.015*_o/Math.sqrt(20+_o),Co=1+.045*Vr,ct=1;ct-=.17*Math.cos((ge-30)*Ye),ct+=.24*Math.cos(2*ge*Ye),ct+=.32*Math.cos((3*ge+6)*Ye),ct-=.2*Math.cos((4*ge-63)*Ye);let To=1+.015*Vr*ct,Tl=30*Math.exp(-1*((ge-275)/25)**2),kl=2*Math.sqrt(So/(So+si)),Ml=-1*Math.sin(2*Tl*Ye)*kl,Ft=(ce/(r*Cl))**2;return Ft+=(W/(n*Co))**2,Ft+=(xo/(o*To))**2,Ft+=Ml*(W/(n*Co))*(xo/(o*To)),Math.sqrt(Ft)}const td=75e-6;function wt(e,t=e.space,{epsilon:r=td}={}){e=_(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Mt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Ae(e,{method:t=me.gamut_mapping,space:r=e.space}={}){if(It(arguments[1])&&(r=arguments[1]),r=b.get(r),wt(e,r,{epsilon:0}))return _(e);let n=Z(e,r);if(t!=="clip"&&!wt(e,r)){let o=Ae(Mt(n),{method:"clip",space:r});if(Tn(e,o)>2){let i=b.resolveCoord(t),a=i.space,s=i.id,l=Z(n,a),u=(i.range||i.refRange)[0],d=.01,f=u,h=Q(l,s);for(;h-f>d;){let m=Mt(l);m=Ae(m,{space:r,method:"clip"}),Tn(l,m)-2<d?f=Q(l,s):h=Q(l,s),Le(l,s,(f+h)/2)}n=Z(l,r)}else n=o}if(t==="clip"||!wt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=Z(n,e.space)),e.coords=n.coords,e}Ae.returns="color";function Z(e,t,{inGamut:r}={}){e=_(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Ae(o)),o}Z.returns="color";function gr(e,{precision:t=me.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=_(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!wt(e)&&(s=Ae(Mt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(h=>fr(h,t)));let u=[...s];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=fr(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";i=`${c}(${u.join(r.commas?", ":" ")}${f})`}return i}const rd=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],nd=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Or=new K({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:rd,fromXYZ_M:nd,formats:{color:{}}});const Vt=1.09929682680944,ci=.018053968510807;var Ss=new K({id:"rec2020",name:"REC.2020",base:Or,toBase(e){return e.map(function(t){return t<ci*4.5?t/4.5:Math.pow((t+Vt-1)/Vt,1/.45)})},fromBase(e){return e.map(function(t){return t>=ci?Vt*Math.pow(t,.45)-(Vt-1):4.5*t})},formats:{color:{}}});const od=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],id=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var _s=new K({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:od,fromXYZ_M:id});const ad=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],sd=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Cs=new K({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:ad,fromXYZ_M:sd,formats:{color:{}}}),ui={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let di=Array(3).fill("<percentage> | <number>[0, 255]"),fi=Array(3).fill("<number>[0, 255]");var Lt=new K({id:"srgb",name:"sRGB",base:Cs,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:di},rgb_number:{name:"rgb",commas:!0,coords:fi,noAlpha:!0},color:{},rgba:{coords:di,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:fi},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=ui.black,t.alpha=0):t.coords=ui[e],t.coords)return t}}}}),Ts=new K({id:"p3",name:"P3",base:_s,fromBase:Lt.fromBase,toBase:Lt.toBase,formats:{color:{id:"display-p3"}}});me.display_space=Lt;if(typeof CSS<"u"&&CSS.supports)for(let e of[Y,Ss,Ts]){let t=e.getMinCoords(),n=gr({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){me.display_space=e;break}}function ld(e,{space:t=me.display_space,...r}={}){let n=gr(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!me.display_space)n=new String(n),n.color=e;else{let o=Z(e,t);n=new String(gr(o,r)),n.color=o}return n}function ks(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function cd(e,t){return e=_(e),t=_(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Ne(e){return Q(e,[J,"y"])}function Ms(e,t){Le(e,[J,"y"],t)}function ud(e){Object.defineProperty(e.prototype,"luminance",{get(){return Ne(this)},set(t){Ms(this,t)}})}var dd=Object.freeze({__proto__:null,getLuminance:Ne,register:ud,setLuminance:Ms});function fd(e,t){e=_(e),t=_(t);let r=Math.max(Ne(e),0),n=Math.max(Ne(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const hd=.56,md=.57,pd=.62,gd=.65,hi=.022,vd=1.414,bd=.1,yd=5e-4,wd=1.14,mi=.027,$d=1.14;function pi(e){return e>=hi?e:e+(hi-e)**vd}function qe(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Ed(e,t){t=_(t),e=_(e);let r,n,o,i,a,s;t=Z(t,"srgb"),[i,a,s]=t.coords;let l=qe(i)*.2126729+qe(a)*.7151522+qe(s)*.072175;e=Z(e,"srgb"),[i,a,s]=e.coords;let c=qe(i)*.2126729+qe(a)*.7151522+qe(s)*.072175,u=pi(l),d=pi(c),f=d>u;return Math.abs(d-u)<yd?n=0:f?(r=d**hd-u**md,n=r*wd):(r=d**gd-u**pd,n=r*$d),Math.abs(n)<bd?o=0:n>0?o=n-mi:o=n+mi,o*100}function xd(e,t){e=_(e),t=_(t);let r=Math.max(Ne(e),0),n=Math.max(Ne(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Sd=5e4;function _d(e,t){e=_(e),t=_(t);let r=Math.max(Ne(e),0),n=Math.max(Ne(t),0);return n>r&&([r,n]=[n,r]),n===0?Sd:(r-n)/n}function Cd(e,t){e=_(e),t=_(t);let r=Q(e,[Y,"l"]),n=Q(t,[Y,"l"]);return Math.abs(r-n)}const Td=216/24389,gi=24/116,jt=24389/27;let tn=oe.D65;var kn=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:tn,base:J,fromBase(e){let r=e.map((n,o)=>n/tn[o]).map(n=>n>Td?Math.cbrt(n):(jt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>gi?Math.pow(t[0],3):(116*t[0]-16)/jt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/jt,t[2]>gi?Math.pow(t[2],3):(116*t[2]-16)/jt].map((n,o)=>n*tn[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const rn=Math.pow(5,.5)*.5+.5;function kd(e,t){e=_(e),t=_(t);let r=Q(e,[kn,"l"]),n=Q(t,[kn,"l"]),o=Math.abs(Math.pow(r,rn)-Math.pow(n,rn)),i=Math.pow(o,1/rn)*Math.SQRT2-40;return i<7.5?0:i}var ir=Object.freeze({__proto__:null,contrastAPCA:Ed,contrastDeltaPhi:kd,contrastLstar:Cd,contrastMichelson:xd,contrastWCAG21:fd,contrastWeber:_d});function Md(e,t,r={}){It(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(ir).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=_(e),t=_(t);for(let i in ir)if("contrast"+n.toLowerCase()===i.toLowerCase())return ir[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Ls(e){let[t,r,n]=Bt(e,J),o=t+15*r+3*n;return[4*t/o,9*r/o]}function As(e){let[t,r,n]=Bt(e,J),o=t+r+n;return[t/o,r/o]}function Ld(e){Object.defineProperty(e.prototype,"uv",{get(){return Ls(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return As(this)}})}var Ad=Object.freeze({__proto__:null,register:Ld,uv:Ls,xy:As});function Nd(e,t){return ks(e,t,"lab")}const Pd=Math.PI,vi=Pd/180;function Rd(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=Y.from(e),[,s,l]=kt.from(Y,[o,i,a]),[c,u,d]=Y.from(t),f=kt.from(Y,[c,u,d])[1];s<0&&(s=0),f<0&&(f=0);let h=o-c,m=s-f,g=i-u,E=a-d,x=g**2+E**2-m**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let A=.0638*s/(1+.0131*s)+.638,L;Number.isNaN(l)&&(l=0),l>=164&&l<=345?L=.56+Math.abs(.2*Math.cos((l+168)*vi)):L=.36+Math.abs(.4*Math.cos((l+35)*vi));let V=Math.pow(s,4),ce=Math.sqrt(V/(V+1900)),W=A*(ce*L+1-ce),M=(h/(r*C))**2;return M+=(m/(n*A))**2,M+=x/W**2,Math.sqrt(M)}const bi=203;var fo=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:J,fromBase(e){return e.map(t=>Math.max(t*bi,0))},toBase(e){return e.map(t=>Math.max(t/bi,0))}});const Kt=1.15,Wt=.66,yi=2610/2**14,Id=2**14/2610,wi=3424/2**12,$i=2413/2**7,Ei=2392/2**7,Bd=1.7*2523/2**5,xi=2**5/(1.7*2523),Gt=-.56,nn=16295499532821565e-27,Dd=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Od=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Hd=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],zd=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ns=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:fo,fromBase(e){let[t,r,n]=e,o=Kt*t-(Kt-1)*n,i=Wt*r-(Wt-1)*t,s=R(Dd,[o,i,n]).map(function(f){let h=wi+$i*(f/1e4)**yi,m=1+Ei*(f/1e4)**yi;return(h/m)**Bd}),[l,c,u]=R(Hd,s);return[(1+Gt)*l/(1+Gt*l)-nn,c,u]},toBase(e){let[t,r,n]=e,o=(t+nn)/(1+Gt-Gt*(t+nn)),a=R(zd,[o,r,n]).map(function(f){let h=wi-f**xi,m=Ei*f**xi-$i;return 1e4*(h/m)**Id}),[s,l,c]=R(Od,a),u=(s+(Kt-1)*c)/Kt,d=(l+(Wt-1)*u)/Wt;return[u,d,c]},formats:{color:{}}}),Mn=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ns,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Fd(e,t){let[r,n,o]=Mn.from(e),[i,a,s]=Mn.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let u=o-s,d=2*Math.sqrt(n*a)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const Ps=3424/4096,Rs=2413/128,Is=2392/128,Si=2610/16384,Ud=2523/32,Vd=16384/2610,_i=32/2523,jd=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Kd=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Wd=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Gd=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Ln=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:fo,fromBase(e){let t=R(jd,e);return Yd(t)},toBase(e){let t=qd(e);return R(Gd,t)},formats:{color:{}}});function Yd(e){let t=e.map(function(r){let n=Ps+Rs*(r/1e4)**Si,o=1+Is*(r/1e4)**Si;return(n/o)**Ud});return R(Kd,t)}function qd(e){return R(Wd,e).map(function(n){let o=Math.max(n**_i-Ps,0),i=Rs-Is*n**_i;return 1e4*(o/i)**Vd})}function Xd(e,t){let[r,n,o]=Ln.from(e),[i,a,s]=Ln.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const Zd=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Jd=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Qd=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],ef=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var vr=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:J,fromBase(e){let r=R(Zd,e).map(n=>Math.cbrt(n));return R(Qd,r)},toBase(e){let r=R(ef,e).map(n=>n**3);return R(Jd,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function tf(e,t){let[r,n,o]=vr.from(e),[i,a,s]=vr.from(t),l=r-i,c=n-a,u=o-s;return Math.sqrt(l**2+c**2+u**2)}var br={deltaE76:Nd,deltaECMC:Rd,deltaE2000:Tn,deltaEJz:Fd,deltaEITP:Xd,deltaEOK:tf};function mt(e,t,r={}){It(r)&&(r={method:r});let{method:n=me.deltaE,...o}=r;e=_(e),t=_(t);for(let i in br)if("deltae"+n.toLowerCase()===i.toLowerCase())return br[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function rf(e,t=.25){let n=[b.get("oklch","lch"),"l"];return Le(e,n,o=>o*(1+t))}function nf(e,t=.25){let n=[b.get("oklch","lch"),"l"];return Le(e,n,o=>o*(1-t))}var of=Object.freeze({__proto__:null,darken:nf,lighten:rf});function Bs(e,t,r=.5,n={}){[e,t]=[_(e),_(t)],ke(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return Dt(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function Ds(e,t,r={}){let n;ho(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[_(e),_(t)],n=Dt(e,t,l));let c=mt(e,t),u=o>0?Math.max(a,Math.ceil(c/o)+1):a,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,m)=>{let g=m*f;return{p:g,color:n(g)}})}if(o>0){let f=d.reduce((h,m,g)=>{if(g===0)return 0;let E=mt(m.color,d[g-1].color,i);return Math.max(h,E)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<s;h++){let m=d[h-1],g=d[h],E=(g.p+m.p)/2,x=n(E);f=Math.max(f,mt(x,m.color),mt(x,g.color)),d.splice(h,0,{p:E,color:n(E)}),h++}}}return d=d.map(f=>f.color),d}function Dt(e,t,r={}){if(ho(e)){let[l,c]=[e,t];return Dt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=_(e),t=_(t),e=Mt(e),t=Mt(t);let s={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[me.interpolationSpace]||e.space,o=o?b.get(o):n,e=Z(e,n),t=Z(t,n),e=Ae(e),t=Ae(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Q(e,c),Q(t,c)];[u,d]=ed(l,[u,d]),Le(e,c,u),Le(t,c,d)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((f,h)=>{let m=t.coords[h];return hr(f,m,l)}),u=hr(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return a&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=Z(d,o)),d},{rangeArgs:s})}function ho(e){return ke(e)==="function"&&!!e.rangeArgs}me.interpolationSpace="lab";function af(e){e.defineFunction("mix",Bs,{returns:"color"}),e.defineFunction("range",Dt,{returns:"function<color>"}),e.defineFunction("steps",Ds,{returns:"array<color>"})}var sf=Object.freeze({__proto__:null,isRange:ho,mix:Bs,range:Dt,register:af,steps:Ds}),Os=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Lt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Hs=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Os,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),lf=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Hs,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const cf=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],uf=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var zs=new K({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:cf,fromXYZ_M:uf}),df=new K({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:zs,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const ff=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],hf=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Fs=new K({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:uo,toXYZ_M:ff,fromXYZ_M:hf});const mf=1/512,pf=16/512;var gf=new K({id:"prophoto",name:"ProPhoto",base:Fs,toBase(e){return e.map(t=>t<pf?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=mf?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),vf=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:vr,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dr(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Ci=203,Ti=2610/2**14,bf=2**14/2610,yf=2523/2**5,ki=2**5/2523,Mi=3424/2**12,Li=2413/2**7,Ai=2392/2**7;var wf=new K({id:"rec2100pq",name:"REC.2100-PQ",base:Or,toBase(e){return e.map(function(t){return(Math.max(t**ki-Mi,0)/(Li-Ai*t**ki))**bf*1e4/Ci})},fromBase(e){return e.map(function(t){let r=Math.max(t*Ci/1e4,0),n=Mi+Li*r**Ti,o=1+Ai*r**Ti;return(n/o)**yf})},formats:{color:{id:"rec2100-pq"}}});const Ni=.17883277,Pi=.28466892,Ri=.55991073,on=3.7743;var $f=new K({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Or,toBase(e){return e.map(function(t){return t<=.5?t**2/3*on:(Math.exp((t-Ri)/Ni)+Pi)/12*on})},fromBase(e){return e.map(function(t){return t/=on,t<=1/12?Math.sqrt(3*t):Ni*Math.log(12*t-Pi)+Ri})},formats:{color:{id:"rec2100-hlg"}}});const Us={};Me.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Vs(e.W1,e.W2,e.options.method))});Me.add("chromatic-adaptation-end",e=>{e.M||(e.M=Vs(e.W1,e.W2,e.options.method))});function Hr({id:e,toCone_M:t,fromCone_M:r}){Us[e]=arguments[0]}function Vs(e,t,r="Bradford"){let n=Us[r],[o,i,a]=R(n.toCone_M,e),[s,l,c]=R(n.toCone_M,t),u=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],d=R(u,n.toCone_M);return R(n.fromCone_M,d)}Hr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Hr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Hr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Hr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(oe,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});oe.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Ef=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],xf=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var js=new K({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:oe.ACES,toXYZ_M:Ef,fromXYZ_M:xf,formats:{color:{}}});const Yt=2**-16,an=-.35828683,qt=(Math.log2(65504)+9.72)/17.52;var Sf=new K({id:"acescc",name:"ACEScc",coords:{r:{range:[an,qt],name:"Red"},g:{range:[an,qt],name:"Green"},b:{range:[an,qt],name:"Blue"}},referred:"scene",base:js,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Yt)*2:r<qt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Yt)+9.72)/17.52:t<Yt?(Math.log2(Yt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Ii=Object.freeze({__proto__:null,A98RGB:df,A98RGB_Linear:zs,ACEScc:Sf,ACEScg:js,HSL:Os,HSV:Hs,HWB:lf,ICTCP:Ln,JzCzHz:Mn,Jzazbz:Ns,LCH:kt,Lab:Y,Lab_D65:kn,OKLCH:vf,OKLab:vr,P3:Ts,P3_Linear:_s,ProPhoto:gf,ProPhoto_Linear:Fs,REC_2020:Ss,REC_2020_Linear:Or,REC_2100_HLG:$f,REC_2100_PQ:wf,XYZ_ABS_D65:fo,XYZ_D50:uo,XYZ_D65:J,sRGB:Lt,sRGB_Linear:Cs});class w{constructor(...t){let r;t.length===1&&(r=_(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new w(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=ld(this,...t);return r.color=new w(r.color),r}static get(t,...r){return t instanceof w?t:new w(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=w.get(l);else if(i==="function<color>"){let c=l;l=function(...u){let d=c(...u);return w.get(d)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>w.get(c)));return l};t in w||(w[t]=a),o&&(w.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)w.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(w);else for(let r in t)w.defineFunction(r,t[r])}}w.defineFunctions({get:Q,getAll:Bt,set:Le,setAll:xs,to:Z,equals:cd,inGamut:wt,toGamut:Ae,distance:ks,toString:gr});Object.assign(w,{util:qu,hooks:Me,WHITES:oe,Space:b,spaces:b.registry,parse:Es,defaults:me});for(let e of Object.keys(Ii))b.register(Ii[e]);for(let e in b.registry)An(e,b.registry[e]);Me.add("colorspace-init-end",e=>{var t;An(e.id,e),(t=e.aliases)==null||t.forEach(r=>{An(r,e)})});function An(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(w.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return b.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=b.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=b.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}w.extend(br);w.extend({deltaE:mt});Object.assign(w,{deltaEMethods:br});w.extend(of);w.extend({contrast:Md});w.extend(Ad);w.extend(dd);w.extend(sf);w.extend(ir);function Ks(e){return $e(e,(t,r)=>r instanceof w?de(r.toString({format:"hex"})):Ks(r))}const _f="dodgerblue";function Nn(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function sn({background:e,foreground:t}){return{background:e??new w(Nn(t)),foreground:t??new w(Nn(e))}}var yr;(function(e){e.Dark="dark",e.Light="light"})(yr||(yr={}));function Cf(e){return e==="black"?"white":"black"}const Tf={black:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")},white:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")}},kf={black:{backgroundFaint1:new w("#666"),backgroundFaint2:new w("#444")},white:{backgroundFaint1:new w("#ccc"),backgroundFaint2:new w("#fafafa")}};function Bi({themeColor:e=_f,themeStyle:t=yr.Light}={}){const r=new w(e),n=new w(t===yr.Dark?"black":"white"),o=Nn(n),i=new w(o),a={nav:{hover:sn({background:r.clone().set({"hsl.l":93})}),active:sn({background:r.clone().set({"hsl.l":90})}),selected:sn({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...kf[Cf(o)],foreground:i,...Tf[o]}};return Ks(a)}const wr=Ar()("element-book-change-route"),Di="vira-",{defineElement:st,defineElementNoInputs:Om}=rs({assertInputs:e=>{if(!e.tagName.startsWith(Di))throw new Error(`Tag name should start with '${Di}' but got '${e.tagName}'`)}}),Ws=y`
    pointer-events: none;
    opacity: 0.3;
`,ae=We({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),$r=We({"vira-form-input-border-radius":"8px"}),Er=We({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":y`calc(${$r["vira-form-input-border-radius"].value} + 4px)`});function Gs({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=de(Ec(n+r+t));return y`
        ${de(e)}::after {
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
    `}const Ys=y`
    padding: 0;
    margin: 0;
`,ye=y`
    ${Ys};
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
`,I=st()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>y`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Pn;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Pn||(Pn={}));const Oi=st()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Pn.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>y`
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
            ${Ws};
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
            border-radius: ${$r["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ae["vira-interaction-animation-duration"].value},
                background-color
                    ${ae["vira-interaction-animation-duration"].value},
                border-color ${ae["vira-interaction-animation-duration"].value};
        }

        ${Gs({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${I} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${I.assign({icon:e.icon})}></${I}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Rn;(function(e){e.Header="header"})(Rn||(Rn={}));st()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>y`
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
            transition: height ${ae["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:te()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?y`
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
                    ${ts(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const $=We({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function Ee({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Mf=Ee({name:"CloseX24Icon",svgTemplate:p`
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
    `}),Lf=Ee({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});Ee({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Af=Ee({name:"Loader24Icon",svgTemplate:p`
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
    `}),Nf=y`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${ae["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,qs=Ee({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${Nf}
        </style>
        ${Af.svgTemplate}
    `}),Pf=Ee({name:"Options24Icon",svgTemplate:p`
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
    `}),Rf=Ee({name:"StatusFailure24Icon",svgTemplate:p`
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
    `});Ee({name:"StatusInProgress24Icon",svgTemplate:p`
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
    `});Ee({name:"StatusSuccess24Icon",svgTemplate:p`
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
    `});var xr;(function(e){e.Loading="loading",e.Error="error"})(xr||(xr={}));st()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:te(),imageError:te()},styles:({hostClasses:e})=>y`
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
                      <${I.assign({icon:Rf})} class="error"></${I}>
                  </slot>
              `:t.loadedUrls[i]?void 0:p`
                    <slot class="status-wrapper" name=${xr.Loading}>
                        <${I.assign({icon:qs})}></${I}>
                    </slot>
                `;return p`
            ${ie(!!a,a)}
            <img
                class=${Mr({hidden:!!a})}
                ${k("load",async()=>{e._debugLoadDelay&&await vn(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${k("error",async s=>{e._debugLoadDelay&&await vn(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function In({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>In({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Xs({value:e,allowed:t,blocked:r}){const n=t?In({input:e,matcher:t}):!0,o=r?In({input:e,matcher:r}):!1;return n&&!o}function Zs(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Xs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function If({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=ht(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)Xs({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:u}=Zs({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}i.value!==l&&(i.value=l),s!==l&&o(l)}const ar=st()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:te(),inputBlocked:te()},styles:({hostClasses:e,cssVars:t})=>y`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Er["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ws};
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
                ${At};
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
                border-radius: ${$r["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ae["vira-interaction-animation-duration"].value};
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

            ${Gs({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${At};
            }

            .close-x-button {
                ${ye};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${ae["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=Zs({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?p`
                  <${I.assign({icon:e.icon})} class="left-side-icon"></${I}>
              `:"",s=e.fitText?y`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${a}
                ${ie(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${ts(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${k("input",l=>{If({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${ie(!!(e.showClearButton&&e.value),p`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${k("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${I.assign({icon:Mf})}></${I}>
                        </button>
                    `)}
                ${ie(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Xt=st()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>y`
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
    `,events:{routeChange:te()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&ns(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return p`
                <a href=${a} rel="noopener noreferrer" ${k("click",n)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:re,defineElementNoInputs:Hm}=rs(),q=re()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>y`
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
                ${k("click",i=>{(!e.router||ns(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new wr(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Bf(e,t){return e.entry.entryType===O.Root?!1:!!(e.entry.entryType===O.Page||X(t,e.fullUrlBreadcrumbs.slice(0,-1))||X(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ve=re()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>y`
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
            ${q.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Bf(r,e.selectedPath))return;const n=y`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${q.assign({router:e.router,route:{paths:[j.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Mr({"title-row":!0,selected:e.selectedPath?X(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ie(et(r,O.ElementExample),p`
                                    <${I.assign({icon:Lf})}></${I}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${q}>
                </li>
            `});return p`
            <${q.assign({route:nt,router:e.router})}>
                <slot name=${we.NavHeader}>Book</slot>
            </${q}>
            <ul>
                ${t}
            </ul>
        `}});async function Df(e){await En(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await ku(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Pe=re()({tagName:"book-error",styles:y`
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
            `)}}),Nt=re()({tagName:"book-page-controls",events:{controlValueChange:te()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>y`
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===U.Hidden)return"";const a=Of(e.currentValues[n],o,s=>{const l=H(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return p`
                    <div class="control-wrapper">
                        ${ie(i===0,p`
                                <${I.assign({icon:Pf})}
                                    class="options-icon"
                                ></${I}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function Of(e,t,r){return Ge(t,U.Hidden)?"":Ge(t,U.Checkbox)?p`
            <input
                type="checkbox"
                .value=${e}
                ${k("input",n=>{const o=ht(n,HTMLInputElement);r(o.checked)})}
            />
        `:Ge(t,U.Color)?p`
            <input
                type="color"
                .value=${e}
                ${k("input",n=>{const o=ht(n,HTMLInputElement);r(o.value)})}
            />
        `:Ge(t,U.Text)?p`
            <${ar.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${k(ar.events.valueChange,n=>{r(n.detail)})}
            ></${ar}>
        `:Ge(t,U.Number)?p`
            <input
                type="number"
                .value=${e}
                ${k("input",n=>{const o=ht(n,HTMLInputElement);r(o.value)})}
            />
        `:Ge(t,U.Dropdown)?p`
            <select
                .value=${e}
                ${k("input",n=>{const o=ht(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>p`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Hi=re()({tagName:"book-breadcrumbs",styles:y`
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
                <${q.assign({route:{hash:void 0,search:void 0,paths:[j.Book,...a]},router:e.router})}>
                    ${r}
                </${q}>
                ${s}
            `}):p`
                &nbsp;
            `}}),ln=re()({tagName:"book-breadcrumbs-bar",styles:y`
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
            ${ie(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Hi.assign({currentRoute:e.currentRoute,router:e.router})}></${Hi}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${k("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await vn(200),n.value===o&&(n.value?t(new wr({paths:[j.Search,encodeURIComponent(n.value)]})):t(new wr(nt)))})}
            />
        `}}),zi=re()({tagName:"book-entry-description",styles:y`
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
            `)}}),Fi=re()({tagName:"book-page-wrapper",styles:y`
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

        ${q} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[j.Book,...e.pageNode.fullUrlBreadcrumbs],n=ka(e.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${q.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${q}>
                    ${n?p`
                              <${Pe.assign({message:n.message})}></${Pe}>
                          `:p`
                              <${zi.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${zi}>
                              <${Nt.assign({config:e.pageNode.entry.controls,currentValues:so(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Nt}>
                          `}
                </div>
            </div>
        `}}),Zt=re()({tagName:"book-element-example-controls",styles:y`
        :host {
            display: flex;
            color: ${S["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[j.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${q.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${q}>
        `}}),Ui=Symbol("unset-internal-state"),Vi=re()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Ui},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw ka(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Ui&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${ie(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${Pe.assign({message:`${t.elementExampleNode.entry.title} failed: ${Ke(n)}`})}></${Pe}>
            `}},options:{allowPolymorphicState:!0}}),ji=re()({tagName:"book-element-example-wrapper",styles:y`
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
                <${Zt.assign(pc(e,["currentPageControls"]))}></${Zt}>
                <${Vi.assign(e)}></${Vi}>
            </div>
        `}});function Js(e,t,r,n){const o=xn(r,n),i=[];if(o){const a=Js(e,t,o,n);a&&i.push(a)}if(et(r,O.Page)&&!e.includes(r)){const a=so(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:$e(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Hf({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[p`
                No results
            `];const a=pn(e,1)?Js(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&pn(e,1)?p`
                  <${Nt.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${Nt}>
              `:"",l=ql(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(et(c,O.Page))return p`
                    <${Fi.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Fi}>
                `;if(et(c,O.ElementExample)){const d=so(o,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${ji.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${ji}>
                `}else return et(c,O.Root)?"":p`
                    <${Pe.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Pe}>
                `});return[s,l].flat()}const Xe=re()({tagName:"book-entry-display",styles:y`
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
                ${ae["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:te()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Sn(e.currentRoute.paths),a=Hf({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return p`
            <${ln.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${ln}>

            ${ie(e.showLoading,p`
                    <div
                        ${Zo(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${I.assign({icon:qs})}></${I}>
                    </div>
                    ${ie(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${we.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${Zo(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${we.Footer}></slot>
                `)}
        `}});function zf(e,t,r){const n=Ki(e,t);if(n.length)return n;r(nt);const o=Ki(e,nt.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Ki(e,t){return e.filter(r=>_u({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const cn=le()({tagName:"element-book-app",events:{pathUpdate:te()},stateInitStatic:{currentRoute:nt,router:void 0,loading:!0,colors:{config:void 0,theme:Bi(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:y`
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

        ${Xe} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ve} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Wi(e,Sn(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var u,d,f,h,m,g,E;t._debug&&console.info("rendering element-book app");function a(x){return{...e.currentRoute,...x}}function s(x){const C=a(x);return!X(e.currentRoute,C)}function l(x){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,x].filter(z).join(" - "))}function c(x){if(!s(x))return;const C=a(x);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!X(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!X(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const M=Ku(t.internalRouterConfig.basePath);n({router:M}),M.addRouteListener(!0,F=>{n({currentRoute:F})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const x={themeColor:t.themeColor};if(!X(x,(f=e.colors)==null?void 0:f.config)){const M=Bi(x);n({colors:{config:x,theme:M}}),Yu(r,M)}const C=t._debug??!1,A=Du({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:ps(A.tree,{children:(m=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:t.globalValues})}}));const L=Sn(e.currentRoute.paths),ce=(L?ju({flattenedNodes:A.flattenedNodes,searchQuery:L}):void 0)??zf(A.flattenedNodes,e.currentRoute.paths,c);l((g=ce[0])==null?void 0:g.entry.title);const W=(E=e.treeBasedControls)==null?void 0:E.controls;return W?(t._debug&&console.info({currentControls:W}),p`
                <div
                    class="root"
                    ${k(wr,async M=>{const F=M.detail;if(!s(F))return;if(n({loading:!0}),c(F),!(r.shadowRoot.querySelector(ve.tagName)instanceof ve))throw new Error(`Failed to find child '${ve.tagName}'`);Wi(r,L,e.currentRoute)})}
                    ${k(Nt.events.controlValueChange,M=>{if(!e.treeBasedControls)return;const F=Hu(W,M.detail.fullUrlBreadcrumbs,M.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:F}})})}
                >
                    <${ve.assign({flattenedNodes:A.flattenedNodes,router:e.router,selectedPath:L?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${we.NavHeader}
                            slot=${we.NavHeader}
                        ></slot>
                    </${ve}>
                    <${Xe.assign({controls:W,currentNodes:ce,currentRoute:e.currentRoute,debug:C,originalTree:A.tree,router:e.router,showLoading:e.loading})}
                        ${k(Xe.events.loadingRender,async M=>{await En();const F=r.shadowRoot.querySelector(Xe.tagName);F?F.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Xe.tagName}' for scrolling.`),await En(),n({loading:!M.detail})})}
                    >
                        <slot
                            name=${we.Footer}
                            slot=${we.Footer}
                        ></slot>
                    </${Xe}>
                </div>
            `):p`
                    <${Pe.assign({message:"Failed to generate page controls."})}></${Pe}>
                `}catch(x){return console.error(x),p`
                <p class="error">${Ke(x)}</p>
            `}}});async function Wi(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ve.tagName);if(!(n instanceof ve))throw new Error(`Failed to find child '${ve.tagName}'`);await Df(n)}var Ff=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Uf(){return class extends Event{constructor(t,r){super(t,r),this.detail=r.detail}}}const Vf=globalThis.CustomEvent||Uf();function mo(){return e=>{var t;return t=class extends Vf{constructor(n){super(e,n)}},Ff(t,"TypedEventConstructor"),t.type=e,t}}globalThis&&globalThis.__setFunctionName;class Qs extends EventTarget{constructor(){super(...arguments),this.setupListeners=[]}getListenerCount(){return this.setupListeners.length}addEventListener(t,r,n){super.addEventListener(t,r,n),r&&this.setupListeners.push({type:t,callback:r,options:n})}dispatchEvent(t){return super.dispatchEvent(t)}removeEventListener(t,r,n){super.removeEventListener(t,r,n);const o=this.setupListeners.findIndex(i=>{if(i.type!==t)return!1;if(typeof n<"u"||typeof i.options<"u"){if(typeof n!=typeof i.options||typeof i.options=="boolean"&&typeof n=="boolean"&&n!==i.options)return!1;if(typeof i.options=="object"&&typeof n=="object"&&n.capture!==i.options.capture)return!1}return i.callback===r});this.setupListeners=Zl(this.setupListeners,[o])}removeAllEventListeners(){this.setupListeners.forEach(t=>{super.removeEventListener(t.type,t.callback,t.options)}),this.setupListeners=[]}}class jf extends mo()("game-pipeline-pause"){}class Kf extends mo()("game-pipeline-framerate"){}const Gi=Symbol("ignore");function Bn(e,t,r,n,o=!1,i=!1){const a=Object.entries(e.children).map(([c,u])=>{if(Array.isArray(t))return t.map((d,f)=>{const h=r==null?void 0:r[f];return Bn(e,d,h,n,!0)}).some(d=>d);{if(!u||!o&&(!t||!(c in t)))return!1;const d=t==null?void 0:t[c],f=r?r[c]:Gi;return Bn(u,d,f,n,o,t&&c in t)}}),s=i||a.some(c=>c),l=e.listeners;if(l!=null&&l.size){const c=n.get(l);(o||r!==Gi)&&(c?(c.dataValues.push(r),!c.certain&&s&&(c.certain=!0)):n.set(l,{dataValues:[r],isArray:o,certain:s}))}return s}async function Wf(e,t,r){const n=[],o=new Map;return Object.keys(t).length&&Bn({children:{root:e},listeners:void 0},{root:t},{root:r},o),o.forEach((i,a)=>{i.certain&&(a!=null&&a.size)&&n.push(Ta(()=>{const s=[];return a.forEach(l=>{if(!i.isArray&&i.dataValues.length>1)throw new Error("Found non array listener value of length more than 1");const c=i.isArray?i.dataValues:i.dataValues[0];s.push(l(c))}),s}))}),Promise.all(n)}class po extends Qs{constructor(t,r,n,o={}){var i,a,s,l;super(),this.gameModules=t,this.currentFramerate=0,this.framerateOperands={totalDuration:0,frameCount:0},this.isFrameExecuting=!1,this.currentOptions={framerateCalculationWait:{milliseconds:500}},this._loopIsPaused=!0,this.lastFrameCount=0,this.frameHistory=[],this.stateListeners={children:{},listeners:void 0},this.currentState=dc(r),this.currentExecutionContext=n,this.gameModuleIds=this.gameModules.map(c=>c.moduleId),this.internalOverrideOptions(o),(a=(i=this.currentOptions)==null?void 0:i.init)!=null&&a.allowDuplicateModuleNames||this.assertValidGameModules(),(l=(s=this.currentOptions)==null?void 0:s.init)!=null&&l.startLoopImmediately&&this.startPipelineLoop()}assertValidGameModules(){const t=[],r=new Set;if(this.gameModules.forEach(n=>{const o=n.moduleId.name;r.has(o)?t.push(o):r.add(o)}),t.length)throw new Error(`Duplicate modules provided to ${po.name}: ${t.join(", ")}`)}set loopIsPaused(t){this._loopIsPaused=t,this.dispatchEvent(new jf({detail:t}))}get loopIsPaused(){return this._loopIsPaused}isPipelineLoopPaused(){return this.loopIsPaused}stopPipelineLoop(){return this.loopIsPaused?!1:(this.loopIsPaused=!0,!0)}startPipelineLoop(){return this.loopIsPaused?(this.loopIsPaused=!1,this.lastFrameTimestamp=performance.now(),this.runLoop(),!0):!1}runLoop(){window.requestAnimationFrame(t=>{this.loopIsPaused||Ta(()=>this.runLoop()),this.internallyTriggerSingleFrame(t)})}calculateFramerate(t){var r;this.framerateOperands.frameCount++,this.framerateOperands.totalDuration+=t,this.framerateOperands.totalDuration>=this.currentOptions.framerateCalculationWait.milliseconds&&(this.currentFramerate=Oe({number:this.framerateOperands.frameCount/this.framerateOperands.totalDuration*1e3,digits:1}),(r=this.currentOptions.debug)!=null&&r.enableWarningLogging&&this.currentOptions.debug.targetFramerate&&this.currentFramerate+1<this.currentOptions.debug.targetFramerate&&console.warn(`Framerate dropped to ${this.currentFramerate}`),this.dispatchEvent(new Kf({detail:this.currentFramerate})),this.framerateOperands={frameCount:0,totalDuration:0})}destroy(){var t;this.stopPipelineLoop(),(t=this.currentOptions.init)!=null&&t.onDestroy&&this.currentOptions.init.onDestroy({gameState:this.currentState,executionContext:this.currentExecutionContext}),this.removeAllEventListeners(),this.removeAllStateListeners()}addEventListener(t,r,n){return super.addEventListener(t,r,n),()=>{super.removeEventListener(t,r,n)}}internalOverrideOptions(t){this.currentOptions=yt(this.currentOptions,t)}overrideOptions(t){if("init"in t)throw new Error("Cannot override init options after the GamePipeline has already been constructed.");this.internalOverrideOptions(t)}triggerSingleFrame(){return this.internallyTriggerSingleFrame(performance.now())}addWholeStateListener(t,r){return this.stateListeners.listeners||(this.stateListeners.listeners=new Set),this.stateListeners.listeners.add(r),t&&r(this.currentState),()=>this.removeWholeStateListener(r)}addStateListener(t,r,n){const o=r.reduce((i,a)=>{const s=i.children[a]||{children:{},listeners:void 0};return i.children[a]||(i.children[a]=s),s},this.stateListeners);return o.listeners||(o.listeners=new Set),o.listeners.add(n),t&&n(gn(this.currentState,r)),()=>this.removeStateListener(r,n)}removeAllStateListeners(){this.stateListeners={children:{},listeners:void 0}}removeWholeStateListener(t){var r;return(r=this.stateListeners.listeners)==null?void 0:r.delete(t)}removeStateListener(t,r){var n;try{return((n=t.reduce((i,a,s)=>{const l=i.children[a];if(!l)throw new Error(`Failed to find any listener children under key ${t.slice(0,s+1).join("->")}`);return l},this.stateListeners).listeners)==null?void 0:n.delete(r))??!1}catch{return!1}}update(t){this.updateInternally(t,!0)}updateInternally(t,r){t.stateUpdate&&(this.currentState=yt(this.currentState,t.stateUpdate),r&&this.triggerStateListeners([t.stateUpdate])),t.executionContextUpdate&&(this.currentExecutionContext={...this.currentExecutionContext,...t.executionContextUpdate})}triggerStateListeners(t){return Wf(this.stateListeners,yt(...t),this.currentState)}async internallyTriggerSingleFrame(t){var r,n;if(this.isFrameExecuting){(r=this.currentOptions.debug)!=null&&r.enableWarningLogging&&console.warn("frame skipped");return}this.isFrameExecuting=!0;try{const o=this.lastFrameTimestamp==null?0:t-this.lastFrameTimestamp;this.calculateFramerate(o);const i=[];if(this.lastFrameTimestamp=t,this.lastFrameCount++,await Ql(this.gameModules,async s=>{const l={gameState:this.currentState,executionContext:this.currentExecutionContext,millisecondsSinceLastFrame:o},c=await s.runModule(l);c&&this.updateInternally(c,!1),i.push({fromModule:s.moduleId,stateUpdates:c==null?void 0:c.stateUpdate})}),(n=this.currentOptions.debug)!=null&&n.enableFrameHistory_Expensive){const s={orderedStateUpdates:i};this.frameHistory.push(s)}const a=i.map(s=>s.stateUpdates);return this.isFrameExecuting=!1,this.triggerStateListeners(a.filter(z))}catch(o){this.isFrameExecuting=!1;const i=Lr(o);throw i.message=`Failed to render frame: ${Ke(i)}`,i}}}var N;(function(e){e.Keyboard="keyboard",e.Mouse="mouse",e.Gamepad="gamepad"})(N||(N={}));const Ot={gamepad1:0,gamepad2:1,gamepad3:2,gamepad4:3};function el(e){return Object.values(Ot).includes(e)}const Gf={mouse:"mouse",keyboard:"keyboard"},_e={...Gf,...Ot},Yf={0:N.Gamepad,1:N.Gamepad,2:N.Gamepad,3:N.Gamepad,keyboard:N.Keyboard,mouse:N.Mouse};var Sr;(function(e){e.Button="button",e.Axe="axe"})(Sr||(Sr={}));function Qe(e){return`button-${e}`}function _r(e){return`axe-${e}`}function qf(e){return{pressed:e.pressed,touched:e.touched,value:e.value}}function Xf(e){if(!el(e.index))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${e.index}'`);return{axes:e.axes,buttons:e.buttons.map(qf),connected:e.connected,id:e.id,index:e.index,mapping:e.mapping,serialized:!0,timestamp:e.timestamp}}const Jt=window.navigator;function Zf(){return Array.from(B(Jt,"webkitGetGamepads")?Jt.webkitGetGamepads():B(Jt,"getGamepads")?Jt.getGamepads():[]).filter(e=>!!e).map(e=>Xf(e))}function Jf(e){return Zf().reduce((n,o)=>{const i=eh(o,e),a=o.index;return el(a)?(n[a]={...o,...i},n):(console.warn(`ignoring gamepad index '${a}'`),n)},{})}function Qf(e){const t={},r={deviceKey:e.index,deviceName:e.id,deviceType:N.Gamepad};return e.buttons.forEach((n,o)=>{if(n.value){const i=Qe(o);t[i]={...r,details:{inputType:Sr.Button,buttonDetails:n},inputName:i,inputValue:n.value}}}),e.axes.forEach((n,o)=>{if(n){const i=_r(o);t[i]={...r,details:{inputType:Sr.Axe},inputName:i,inputValue:n}}}),t}const Yi=.01;function eh(e,t){const r=t[e.id],n=e.axes.map((i,a)=>{const s=(r==null?void 0:r[_r(a)])??Yi;return Math.abs(i)<s?0:i}),o=e.buttons.map((i,a)=>{const s=(r==null?void 0:r[Qe(a)])??Yi,l=Math.abs(i.value)<s?0:i.value;return{...i,value:l}});return{axes:n,buttons:o}}function th(e){return $e(e,(t,r)=>({currentInputs:Qf(r),deviceDetails:r,deviceName:r.id,deviceKey:r.index,deviceType:N.Gamepad}))}function qi(e){return St(e).map(n=>n==null?void 0:n.currentInputs).filter(z).map(n=>St(n)).flat()}const Xi={deviceDetails:void 0,deviceKey:_e.keyboard,deviceName:"keyboard",deviceType:N.Keyboard},Qt={deviceDetails:void 0,deviceKey:_e.mouse,deviceName:"mouse",deviceType:N.Mouse};var pe;(function(e){e.NewDevicesAdded="new-devices-added",e.AllDevicesUpdated="all-devices-updated",e.CurrentInputsChanged="current-inputs-updated",e.DevicesRemoved="devices-removed"})(pe||(pe={}));var rh=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function zr(){return(e,t)=>{var r;const n=_a(e,{capitalizeFirstLetter:!0}),o=(r=class extends mo()(e){constructor(){super(...arguments),this.eventType=e}static constructIfDataIsNew(i,...a){const s=o.getNewData(...a);if(s)return new o({detail:{timestamp:i,inputs:s}})}},rh(r,"TimedEventConstructor"),r.getNewData=t,r);return Object.defineProperty(o,"name",{value:n,writable:!0}),o}}function nh(...[e,t]){return t}const oh=zr()(pe.AllDevicesUpdated,nh);function Zi(e,t){return e.deviceKey===t.deviceKey&&e.inputName===t.inputName&&e.inputName===t.inputName&&e.inputValue===t.inputValue}function ih(...[e,t]){const r=qi(t),n=e?qi(e):[];if(!X(n,r)){const o=r.filter(a=>!n.find(s=>Zi(s,a))),i=n.filter(a=>!r.find(s=>Zi(s,a)));return{newInputs:o,removedInputs:i,allCurrentInputs:r}}}const ah=zr()(pe.CurrentInputsChanged,ih);function sh(...[e,t]){if(!e)return[];const r=D(e).filter(n=>!B(t,n));if(r.length)return r.map(n=>e[n]).filter(z)}const lh=zr()(pe.DevicesRemoved,sh);function ch(...[e,t]){if(!e)return St(t).filter(z);const r=D(t).filter(n=>!B(e,n));if(r.length)return r.map(n=>t[n]).filter(z)}const uh=zr()(pe.NewDevicesAdded,ch),tl=[oh,uh,lh,ah];Object.fromEntries(tl.map(e=>[e.type,e]));class dh extends Qs{constructor(t={}){super(),this.currentKeyboardInputs={},this.currentMouseInputs={},this.gamepadDeadZoneSettings={},this.loopIsRunning=!1,this.currentLoopIndex=-1,this.lastEventDetails={},t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),this.attachWindowListeners(t),this.readAllDevices(),t.startLoopImmediately&&this.startPollingLoop()}attachWindowListeners(t){window.addEventListener("keydown",r=>{const n=Qe(r.key);if(this.currentKeyboardInputs.hasOwnProperty(n))return;const o={deviceType:N.Keyboard,details:{keyboardEvent:r},deviceKey:_e.keyboard,deviceName:Xi.deviceName,inputName:n,inputValue:1};this.currentKeyboardInputs[n]=o}),window.addEventListener("keyup",r=>{delete this.currentKeyboardInputs[Qe(r.key)]}),window.addEventListener("mousedown",r=>{const n=Qe(r.button);this.currentMouseInputs.hasOwnProperty(n)||(this.currentMouseInputs[n]={deviceType:N.Mouse,details:{mouseEvent:r},deviceName:Qt.deviceName,deviceKey:_e.mouse,inputName:n,inputValue:1})}),window.addEventListener("mouseup",r=>{delete this.currentMouseInputs[Qe(r.button)]}),t.disableMouseMovement||window.addEventListener("mousemove",r=>{const n=_r("x"),o=_r("y");this.currentMouseInputs[n]={deviceType:N.Mouse,details:{mouseEvent:r},deviceName:Qt.deviceName,deviceKey:_e.mouse,inputName:n,inputValue:r.clientX},this.currentMouseInputs[o]={deviceType:N.Mouse,details:{mouseEvent:r},deviceName:Qt.deviceName,deviceKey:_e.mouse,inputName:o,inputValue:r.clientY}})}runPollingLoop(t,r){this.loopIsRunning&&this.currentLoopIndex===t&&(this.readAllDevices(this.gamepadDeadZoneSettings,r),requestAnimationFrame(n=>{this.runPollingLoop(t,n)}))}fireEvents(t,r){tl.forEach(n=>{const o=n.constructIfDataIsNew(t,this.lastReadInputDevices,r);o&&(this.lastEventDetails[o.type]={constructor:n,constructorInputs:[t,this.lastReadInputDevices,r]},this.dispatchEvent(o))})}getCurrentDeviceValues(t){const r=Jf(t),n=th(r);return{[_e.keyboard]:{...Xi,currentInputs:{...this.currentKeyboardInputs}},[_e.mouse]:{...Qt,currentInputs:{...this.currentMouseInputs}},...n}}addEventListenerAndFireWithLatest(t,r,n){if(this.addEventListener(t,r,n),!r)return;const o=this.lastEventDetails[t],i=typeof r=="function"?r:r.handleEvent;if(o){const a=o.constructor.constructIfDataIsNew(...o.constructorInputs);if(!a)throw new Error(`Got input device event constructor args for event type '${t}' but the constructor did not produce an event.`);i(a)}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}readAllDevices(t=this.gamepadDeadZoneSettings,r=performance.now()){const n=this.getCurrentDeviceValues(t);return this.fireEvents(r,n),this.lastReadInputDevices=n,n}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}function fh(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var ot=fh();function hh(){try{if(!ot||!ot.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function go(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const v=Promise;function T(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function Je(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function xe(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function vo(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const Dn="local-forage-detect-blob-support";let er;const ee={},mh=Object.prototype.toString,Ht="readonly",Fr="readwrite";function ph(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function gh(e){return new v(function(t){var r=e.transaction(Dn,Fr),n=go([""]);r.objectStore(Dn).put(n,"key"),r.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},r.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function vh(e){return typeof er=="boolean"?v.resolve(er):gh(e).then(function(t){return er=t,er})}function Cr(e){var t=ee[e.name],r={};r.promise=new v(function(n,o){r.resolve=n,r.reject=o}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function On(e){var t=ee[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Hn(e,t){var r=ee[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function rl(e,t){return new v(function(r,n){if(ee[e.name]=ee[e.name]||al(),e.db)if(t)Cr(e),e.db.close();else return r(e.db);var o=[e.name];t&&o.push(e.version);var i=ot.open.apply(ot,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(Dn)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),i.onerror=function(a){a.preventDefault(),n(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},r(a),On(e)}})}function bo(e){return rl(e,!1)}function yo(e){return rl(e,!0)}function nl(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function bh(e){return new v(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},n.readAsBinaryString(e)})}function ol(e){var t=ph(atob(e.data));return go([t],{type:e.type})}function il(e){return e&&e.__local_forage_encoded_blob}function yh(e){var t=this,r=t._initReady().then(function(){var n=ee[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return Je(r,e,e),r}function wh(e){Cr(e);for(var t=ee[e.name],r=t.forages,n=0;n<r.length;n++){const o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,bo(e).then(o=>(e.db=o,nl(e)?yo(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=o}).catch(o=>{throw Hn(e,o),o})}function Se(e,t,r,n){n===void 0&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(i){if(n>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return v.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),yo(e)}).then(()=>wh(e).then(function(){Se(e,t,r,n-1)})).catch(r);r(i)}}function al(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function $h(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=ee[r.name];o||(o=al(),ee[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=yh);var i=[];function a(){return v.resolve()}for(var s=0;s<o.forages.length;s++){var l=o.forages[s];l!==t&&i.push(l._initReady().catch(a))}var c=o.forages.slice(0);return v.all(i).then(function(){return r.db=o.db,bo(r)}).then(function(u){return r.db=u,nl(r,t._defaultConfig.version)?yo(r):u}).then(function(u){r.db=o.db=u,t._dbInfo=r;for(var d=0;d<c.length;d++){var f=c[d];f!==t&&(f._dbInfo.db=r.db,f._dbInfo.version=r.version)}})}function Eh(e,t){var r=this;e=xe(e);var n=new v(function(o,i){r.ready().then(function(){Se(r._dbInfo,Ht,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var u=c.result;u===void 0&&(u=null),il(u)&&(u=ol(u)),o(u)},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return T(n,t),n}function xh(e,t){var r=this,n=new v(function(o,i){r.ready().then(function(){Se(r._dbInfo,Ht,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.openCursor(),u=1;c.onsuccess=function(){var d=c.result;if(d){var f=d.value;il(f)&&(f=ol(f));var h=e(f,d.key,u++);h!==void 0?o(h):d.continue()}else o()},c.onerror=function(){i(c.error)}}catch(d){i(d)}})}).catch(i)});return T(n,t),n}function Sh(e,t,r){var n=this;e=xe(e);var o=new v(function(i,a){var s;n.ready().then(function(){return s=n._dbInfo,mh.call(t)==="[object Blob]"?vh(s.db).then(function(l){return l?t:bh(t)}):t}).then(function(l){Se(n._dbInfo,Fr,function(c,u){if(c)return a(c);try{var d=u.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var f=d.put(l,e);u.oncomplete=function(){l===void 0&&(l=null),i(l)},u.onabort=u.onerror=function(){var h=f.error?f.error:f.transaction.error;a(h)}}catch(h){a(h)}})}).catch(a)});return T(o,r),o}function _h(e,t){var r=this;e=xe(e);var n=new v(function(o,i){r.ready().then(function(){Se(r._dbInfo,Fr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var u=c.error?c.error:c.transaction.error;i(u)}}catch(u){i(u)}})}).catch(i)});return T(n,t),n}function Ch(e){var t=this,r=new v(function(n,o){t.ready().then(function(){Se(t._dbInfo,Fr,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){n()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return T(r,e),r}function Th(e){var t=this,r=new v(function(n,o){t.ready().then(function(){Se(t._dbInfo,Ht,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){o(l.error)}}catch(c){o(c)}})}).catch(o)});return T(r,e),r}function kh(e,t){var r=this,n=new v(function(o,i){if(e<0){o(null);return}r.ready().then(function(){Se(r._dbInfo,Ht,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=!1,u=l.openKeyCursor();u.onsuccess=function(){var d=u.result;if(!d){o(null);return}e===0||c?o(d.key):(c=!0,d.advance(e))},u.onerror=function(){i(u.error)}}catch(d){i(d)}})}).catch(i)});return T(n,t),n}function Mh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){Se(t._dbInfo,Ht,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var u=l.result;if(!u){n(c);return}c.push(u.key),u.continue()},l.onerror=function(){o(l.error)}}catch(u){o(u)}})}).catch(o)});return T(r,e),r}function Lh(e,t){t=vo.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;if(!e.name)o=v.reject("Invalid arguments");else{const a=e.name===r.name&&n._dbInfo.db?v.resolve(n._dbInfo.db):bo(e).then(s=>{const l=ee[e.name],c=l.forages;l.db=s;for(var u=0;u<c.length;u++)c[u]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;Cr(e);const c=ee[e.name],u=c.forages;s.close();for(let f=0;f<u.length;f++){const h=u[f];h._dbInfo.db=null,h._dbInfo.version=l}return new v((f,h)=>{const m=ot.open(e.name,l);m.onerror=g=>{m.result.close(),h(g)},m.onupgradeneeded=()=>{var g=m.result;g.deleteObjectStore(e.storeName)},m.onsuccess=()=>{const g=m.result;g.close(),f(g)}}).then(f=>{c.db=f;for(let h=0;h<u.length;h++){const m=u[h];m._dbInfo.db=f,On(m._dbInfo)}}).catch(f=>{throw(Hn(e,f)||v.resolve()).catch(()=>{}),f})}):o=a.then(s=>{Cr(e);const l=ee[e.name],c=l.forages;s.close();for(var u=0;u<c.length;u++){const f=c[u];f._dbInfo.db=null}return new v((f,h)=>{var m=ot.deleteDatabase(e.name);m.onerror=()=>{const g=m.result;g&&g.close(),h(m.error)},m.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},m.onsuccess=()=>{const g=m.result;g&&g.close(),f(g)}}).then(f=>{l.db=f;for(var h=0;h<c.length;h++){const m=c[h];On(m._dbInfo)}}).catch(f=>{throw(Hn(e,f)||v.resolve()).catch(()=>{}),f})})}return T(o,t),o}var Ah={_driver:"asyncStorage",_initStorage:$h,_support:hh(),iterate:xh,getItem:Eh,setItem:Sh,removeItem:_h,clear:Ch,length:Th,key:kh,keys:Mh,dropInstance:Lh};function Nh(){return typeof openDatabase=="function"}var Ce="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ph="~~local_forage_type~",Ji=/^~~local_forage_type~([^~]+)~/,Tr="__lfsc__:",zn=Tr.length,wo="arbf",Fn="blob",sl="si08",ll="ui08",cl="uic8",ul="si16",dl="si32",fl="ur16",hl="ui32",ml="fl32",pl="fl64",Qi=zn+wo.length,ea=Object.prototype.toString;function gl(e){var t=e.length*.75,r=e.length,n,o=0,i,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<r;n+=4)i=Ce.indexOf(e[n]),a=Ce.indexOf(e[n+1]),s=Ce.indexOf(e[n+2]),l=Ce.indexOf(e[n+3]),u[o++]=i<<2|a>>4,u[o++]=(a&15)<<4|s>>2,u[o++]=(s&3)<<6|l&63;return c}function Un(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=Ce[t[n]>>2],r+=Ce[(t[n]&3)<<4|t[n+1]>>4],r+=Ce[(t[n+1]&15)<<2|t[n+2]>>6],r+=Ce[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function Rh(e,t){var r="";if(e&&(r=ea.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&ea.call(e.buffer)==="[object ArrayBuffer]")){var n,o=Tr;e instanceof ArrayBuffer?(n=e,o+=wo):(n=e.buffer,r==="[object Int8Array]"?o+=sl:r==="[object Uint8Array]"?o+=ll:r==="[object Uint8ClampedArray]"?o+=cl:r==="[object Int16Array]"?o+=ul:r==="[object Uint16Array]"?o+=fl:r==="[object Int32Array]"?o+=dl:r==="[object Uint32Array]"?o+=hl:r==="[object Float32Array]"?o+=ml:r==="[object Float64Array]"?o+=pl:t(new Error("Failed to get type for BinaryArray"))),t(o+Un(n))}else if(r==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=Ph+e.type+"~"+Un(this.result);t(Tr+Fn+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function Ih(e){if(e.substring(0,zn)!==Tr)return JSON.parse(e);var t=e.substring(Qi),r=e.substring(zn,Qi),n;if(r===Fn&&Ji.test(t)){var o=t.match(Ji);n=o[1],t=t.substring(o[0].length)}var i=gl(t);switch(r){case wo:return i;case Fn:return go([i],{type:n});case sl:return new Int8Array(i);case ll:return new Uint8Array(i);case cl:return new Uint8ClampedArray(i);case ul:return new Int16Array(i);case fl:return new Uint16Array(i);case dl:return new Int32Array(i);case hl:return new Uint32Array(i);case ml:return new Float32Array(i);case pl:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}var $o={serialize:Rh,deserialize:Ih,stringToBuffer:gl,bufferToString:Un};function vl(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function Bh(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var o=new v(function(i,a){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(s){return a(s)}r.db.transaction(function(s){vl(s,r,function(){t._dbInfo=r,i()},function(l,c){a(c)})},a)});return r.serializer=$o,o}function Ie(e,t,r,n,o,i){e.executeSql(r,n,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?i(l,s):vl(l,t,function(){l.executeSql(r,n,o,i)},i)},i):i(a,s)},i)}function Dh(e,t){var r=this;e=xe(e);var n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Ie(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var u=c.rows.length?c.rows.item(0).value:null;u&&(u=a.serializer.deserialize(u)),o(u)},function(l,c){i(c)})})}).catch(i)});return T(n,t),n}function Oh(e,t){var r=this,n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Ie(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var u=c.rows,d=u.length,f=0;f<d;f++){var h=u.item(f),m=h.value;if(m&&(m=a.serializer.deserialize(m)),m=e(m,h.key,f+1),m!==void 0){o(m);return}}o()},function(l,c){i(c)})})}).catch(i)});return T(n,t),n}function bl(e,t,r,n){var o=this;e=xe(e);var i=new v(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var l=t,c=o._dbInfo;c.serializer.serialize(t,function(u,d){d?s(d):c.db.transaction(function(f){Ie(f,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){a(l)},function(h,m){s(m)})},function(f){if(f.code===f.QUOTA_ERR){if(n>0){a(bl.apply(o,[e,l,r,n-1]));return}s(f)}})})}).catch(s)});return T(i,r),i}function Hh(e,t,r){return bl.apply(this,[e,t,r,1])}function zh(e,t){var r=this;e=xe(e);var n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Ie(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(l,c){i(c)})})}).catch(i)});return T(n,t),n}function Fh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Ie(a,i,`DELETE FROM ${i.storeName}`,[],function(){n()},function(s,l){o(l)})})}).catch(o)});return T(r,e),r}function Uh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Ie(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,l){var c=l.rows.item(0).c;n(c)},function(s,l){o(l)})})}).catch(o)});return T(r,e),r}function Vh(e,t){var r=this,n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Ie(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var u=c.rows.length?c.rows.item(0).key:null;o(u)},function(l,c){i(c)})})}).catch(i)});return T(n,t),n}function jh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Ie(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,l){for(var c=[],u=0;u<l.rows.length;u++)c.push(l.rows.item(u).key);n(c)},function(s,l){o(l)})})}).catch(o)});return T(r,e),r}function Kh(e){return new v(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){r(i)})},function(n){r(n)})})}function Wh(e,t){t=vo.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;return e.name?o=new v(function(i){var a;e.name===r.name?a=n._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(Kh(a))}).then(function(i){return new v(function(a,s){i.db.transaction(function(l){function c(h){return new v(function(m,g){l.executeSql(`DROP TABLE IF EXISTS ${h}`,[],function(){m()},function(E,x){g(x)})})}for(var u=[],d=0,f=i.storeNames.length;d<f;d++)u.push(c(i.storeNames[d]));v.all(u).then(function(){a()}).catch(function(h){s(h)})},function(l){s(l)})})}):o=v.reject("Invalid arguments"),T(o,t),o}var Gh={_driver:"webSQLStorage",_initStorage:Bh,_support:Nh(),iterate:Oh,getItem:Dh,setItem:Hh,removeItem:zh,clear:Fh,length:Uh,key:Vh,keys:jh,dropInstance:Wh};function Yh(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function yl(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function qh(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Xh(){return!qh()||localStorage.length>0}function Zh(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=yl(e,t._defaultConfig),Xh()?(t._dbInfo=r,r.serializer=$o,v.resolve()):v.reject()}function Jh(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(n)===0&&localStorage.removeItem(i)}});return T(r,e),r}function Qh(e,t){var r=this;e=xe(e);var n=r.ready().then(function(){var o=r._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return T(n,t),n}function em(e,t){var r=this,n=r.ready().then(function(){for(var o=r._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,l=1,c=0;c<s;c++){var u=localStorage.key(c);if(u.indexOf(i)===0){var d=localStorage.getItem(u);if(d&&(d=o.serializer.deserialize(d)),d=e(d,u.substring(a),l++),d!==void 0)return d}}});return T(n,t),n}function tm(e,t){var r=this,n=r.ready().then(function(){var o=r._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return T(n,t),n}function rm(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(n.keyPrefix)===0&&i.push(s.substring(n.keyPrefix.length))}return i});return T(r,e),r}function nm(e){var t=this,r=t.keys().then(function(n){return n.length});return T(r,e),r}function om(e,t){var r=this;e=xe(e);var n=r.ready().then(function(){var o=r._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return T(n,t),n}function im(e,t,r){var n=this;e=xe(e);var o=n.ready().then(function(){t===void 0&&(t=null);var i=t;return new v(function(a,s){var l=n._dbInfo;l.serializer.serialize(t,function(c,u){if(u)s(u);else try{localStorage.setItem(l.keyPrefix+e,c),a(i)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(d),s(d)}})})});return T(o,r),o}function am(e,t){if(t=vo.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,o;return e.name?o=new v(function(i){e.storeName?i(yl(e,n._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=v.reject("Invalid arguments"),T(o,t),o}var sm={_driver:"localStorageWrapper",_initStorage:Zh,_support:Yh(),iterate:em,getItem:Qh,setItem:im,removeItem:om,clear:Jh,length:nm,key:tm,keys:rm,dropInstance:am};const lm=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),cm=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(lm(e[n],t))return!0;n++}return!1},wl=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},ft={},ta={},tt={INDEXEDDB:Ah,WEBSQL:Gh,LOCALSTORAGE:sm},um=[tt.INDEXEDDB._driver,tt.WEBSQL._driver,tt.LOCALSTORAGE._driver],sr=["dropInstance"],un=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(sr),dm={description:"",driver:um.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function fm(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function dn(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(wl(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class Eo{constructor(t){for(let r in tt)if(tt.hasOwnProperty(r)){const n=tt[r],o=n._driver;this[r]=o,ft[o]||this.defineDriver(n)}this._defaultConfig=dn({},dm),this._config=dn({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const o=new v(function(i,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=un.concat("_initStorage");for(let f=0,h=c.length;f<h;f++){const m=c[f];if((!cm(sr,m)||t[m])&&typeof t[m]!="function"){a(l);return}}(function(){const f=function(h){return function(){const m=new Error(`Method ${h} is not implemented by the current driver`),g=v.reject(m);return T(g,arguments[arguments.length-1]),g}};for(let h=0,m=sr.length;h<m;h++){const g=sr[h];t[g]||(t[g]=f(g))}})();const d=function(f){ft[s]&&console.info(`Redefining LocalForage driver: ${s}`),ft[s]=t,ta[s]=f,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,a):d(!!t._support):d(!0)}catch(s){a(s)}});return Je(o,r,n),o}driver(){return this._driver||null}getDriver(t,r,n){const o=ft[t]?v.resolve(ft[t]):v.reject(new Error("Driver not found."));return Je(o,r,n),o}getSerializer(t){const r=v.resolve($o);return Je(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return Je(n,t,t),n}setDriver(t,r,n){const o=this;wl(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(u){return o._extend(u),a(),o._ready=o._initStorage(o._config),o._ready}function l(u){return function(){let d=0;function f(){for(;d<u.length;){let m=u[d];return d++,o._dbInfo=null,o._ready=null,o.getDriver(m).then(s).catch(f)}a();const h=new Error("No available storage method found.");return o._driverSet=v.reject(h),o._driverSet}return f()}}const c=this._driverSet!==null?this._driverSet.catch(()=>v.resolve()):v.resolve();return this._driverSet=c.then(()=>{const u=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(u).then(d=>{o._driver=d._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=l(i)})}).catch(()=>{a();const u=new Error("No available storage method found.");return o._driverSet=v.reject(u),o._driverSet}),Je(this._driverSet,r,n),this._driverSet}supports(t){return!!ta[t]}_extend(t){dn(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,o=t.length;n<o;n++){const i=t[n];this.supports(i)&&r.push(i)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=un.length;t<r;t++)fm(this,un[t])}createInstance(t){return new Eo(t)}}const hm=new Eo,Vn=hm;Vn.createInstance({name:"forward-game"});const ra="forward-game-v1-save",mm={async loadState(){return await Vn.getItem(ra)},async saveState(e){Vn.setItem(ra,e)}};function pm(e){return{moduleId:{name:"save game",version:1},async runModule({gameState:r,executionContext:n}){const o=n.lastTimeSaved.milliseconds<Date.now()-r.saveInterval.milliseconds||r.saveNextFrame;if(r.initialLoadAttempted){if(o)try{return await n.saveGameAccess.saveState(Wo(r,e)),{executionContextChange:{lastTimeSaved:{milliseconds:Date.now()}},stateUpdate:{saveNextFrame:!1}}}catch(i){console.error("Failed to save game state",i)}}else try{const i=await n.saveGameAccess.loadState();return console.info("Loading initial state",i),i?{initialLoadAttempted:!0,stateUpdate:{...Wo(i,e),initialLoadAttempted:!0}}:{stateUpdate:{initialLoadAttempted:!0}}}catch(i){return console.error("Failed to load saved game state",i),{stateUpdate:{initialLoadAttempted:!0}}}}}}var pt=(e=>(e.Positive="positive",e.Negative="negative",e))(pt||{});function jn(e){return e<0?"negative":"positive"}const gm={moduleId:{name:"map inputs to actions",version:1},runModule({gameState:e}){return{stateUpdate:{currentActions:e.currentInputs.reduce((r,n)=>{var s;const o=(s=e.actionBindings[n.deviceKey])==null?void 0:s[n.inputName];if(!o||!n.inputValue)return r;const i=jn(n.inputValue),a=o[i];return a&&r.push(...a.map(l=>{const c=jn(n.inputValue),u=e.currentActions.find(d=>d.actionName===l&&d.direction===c);return{actionName:l,value:n.inputValue,direction:c,frameCount:((u==null?void 0:u.frameCount)||0)+1}})),r},[])}}}};var $l=(e=>(e.Up="up",e.Down="down",e.Left="left",e.Right="right",e.Pause="pause",e))($l||{});const vm={moduleId:{name:"perform-actions",version:1},runModule({gameState:e,millisecondsSinceLastFrame:t}){const r=ym(e,t);if(r)return{stateUpdate:r}}},bm=.24;function ym(e,t){if(e.haveWon)return;const r=bm*t;let n=0,o=0,i;if(e.currentActions.forEach(c=>{if(Na(c.actionName,$l))c.actionName==="down"?n+=Oe({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="up"?n-=Oe({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="right"?o+=Oe({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="left"?o-=Oe({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="pause"&&c.frameCount===1&&(i=!e.isPaused);else return}),o=Uo({value:o,max:r,min:-1*r}),n=Uo({value:n,max:r,min:-1*r}),o&&n){const c=Math.sqrt(Math.pow(o,2)+Math.pow(n,2));c>r&&(n=n*(r/c),o=o*(r/c))}const a=o||n,s=[!e.isPaused&&a&&{playerPosition:{x:Oe({number:e.playerPosition.x+o,digits:2}),y:Oe({number:e.playerPosition.y+n,digits:2})}},i!==void 0&&{isPaused:i}].filter(z);return s.length?yt(...s):void 0}const wm={moduleId:{name:"read inputs",version:1},runModule({executionContext:e,gameState:t}){const r=St(e.inputHandler.readAllDevices(t.deadZoneSettings)).filter(z),n=r.map(s=>({deviceKey:s.deviceKey,deviceName:s.deviceName,deviceType:s.deviceType})),o=!X(t.currentDevices,n),i=r.map(s=>St(s.currentInputs).map(l=>({deviceKey:l.deviceKey,inputName:l.inputName,inputValue:l.inputValue}))).flat(),a=!X(t.currentInputs,i);if(!(!a&&!o))return{stateUpdate:{...o?{currentDevices:n}:{},...a?{currentInputs:i}:{}}}}};function $m({startImmediately:e,delay:t}){const r=[wm,gm,vm,pm(["deadZoneSettings","actionBindings","saveInterval"])],n=new po(r,{currentActions:[],currentDevices:[],currentInputs:[],deadZoneSettings:{},actionBindings:{},isPaused:!0,saveInterval:{milliseconds:1e4},playerPosition:{x:0,y:0},haveWon:!1,initialLoadAttempted:!1,saveNextFrame:!1},{inputHandler:new dh,lastTimeSaved:{milliseconds:Date.now()},saveGameAccess:mm},{init:{startLoopImmediately:t?!1:e}});return e&&(t!=null&&t.milliseconds)&&setInterval(()=>{n.triggerSingleFrame()},t.milliseconds),n}const El=Cu()({parent:void 0,title:"elements"}),Em=new Set(["mouse"]);function xl(e){return Em.has(e)}const na=Tu(["red","orange","gold","yellow","lime","green","cyan","blue","purple","magenta"]),oa={milliseconds:700},Fe=le()({tagName:"vir-glow-animation",styles:y`
        :host {
            display: inline-flex;
        }
    `,stateInitStatic:{lastTimestamp:0,colorIndex:0},renderCallback({inputs:e,host:t,state:r,updateState:n}){const o=Date.now()-oa.milliseconds,i=e.animation&&e.animation.timestamp>o?e.animation:void 0;i&&n({colorIndex:lc({min:0,max:na.length-1,value:r.colorIndex+1})});const a=na[r.colorIndex];if(!a)throw new Error("Exceeded colors array size somehow.");return i&&i.timestamp!==r.lastTimestamp&&a!=null&&(t.getAnimations().forEach(s=>s.cancel()),t.animate([{filter:`drop-shadow(0 0 6px ${a}) drop-shadow(0 0 6px ${a})`},{filter:`drop-shadow(0 0 0 ${a}) drop-shadow(0 0 0 ${a})`}],{duration:oa.milliseconds/2,iterations:1}),n({lastTimestamp:i.timestamp})),p`
            <slot></slot>
        `}});var zt=(e=>(e.Large="large",e.Inline="inline",e))(zt||{});const xm={[N.Gamepad]:"🎮",[N.Keyboard]:"⌨️",[N.Mouse]:"🖱","Add Device":"➕"},Sm={[N.Keyboard]:"kb",[N.Mouse]:"m","Add Device":"add"},Re=le()({tagName:"vir-device-display",hostClasses:{"vir-device-display-large":({inputs:e})=>e.size==="large","vir-device-display-inline":({inputs:e})=>e.size==="inline"},styles:({hostClasses:e})=>y`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        ${e["vir-device-display-large"].selector} .device-icon {
            font-size: 3em;
        }
    `,initCallback({inputs:e,state:t,updateState:r}){const n=e.inputHandler;if(!t.removeListeners&&n&&e.animated){let o=function(i){i.detail.inputs.newInputs.some(s=>s.deviceKey===e.deviceKey)&&r({animation:{timestamp:Date.now()}})};n.addEventListener(pe.CurrentInputsChanged,o),r({removeListeners(){n.removeEventListener(pe.CurrentInputsChanged,o)}})}},stateInitStatic:{animation:void 0,removeListeners:void 0},cleanupCallback({state:e}){var t;(t=e.removeListeners)==null||t.call(e)},renderCallback({inputs:e,state:t}){const r=e.deviceKey==null?"Add Device":Yf[e.deviceKey],n=e.displayShortKey&&Sm[r]||(e.deviceKey??r);return p`
            <${Fe.assign({animation:t.animation})}>
                <span title=${r} class="device-icon">${xm[r]}</span>
            </${Fe}>
            <span>${n}</span>
        `}}),Sl=52,ia=le()({tagName:"vir-single-binding-v1",styles:y`
        .input-name {
            flex-grow: 1;
        }

        button {
            ${ye};
            position: relative;
            cursor: pointer;
            display: flex;
            padding: 2px 16px;
            border: 2px solid #ccc;
            border-radius: 8px;
            min-height: ${Sl}px;
            align-items: center;
            gap: 16px;
        }

        * {
            transition: ${ae["vira-interaction-animation-duration"].value};
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
                    <${Re.assign({animated:!1,deviceKey:(n=e.binding)==null?void 0:n.deviceKey,inputHandler:void 0,displayShortKey:!0,size:zt.Inline})}></${Re}>
                </span>
                ${t==null?"":p`
                          <span class="input-name">${t}</span>
                      `}
                ${ie(!!e.binding,p`
                        <div class="delete-message"><span>Delete</span></div>
                    `)}
            </button>
        `}});function _m({requiredActionNames:e,bindings:t}){const r=Object.fromEntries(e.map(n=>[n,[]]));return D(t).forEach(n=>{const o=t[n];o&&Object.keys(o).forEach(i=>{const a=o[i];a&&D(a).forEach(s=>{try{const l=a[s];if(!l)return;l.forEach(c=>{const u=r[c];u&&u.push({deviceKey:n,direction:s,inputName:i})})}catch(l){debugger;throw l}})})}),r}const ue=le()({tagName:"vir-bindings-table-v1",styles:y`
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
            height: ${Sl}px;
            display: flex;
            align-items: center;
        }

        .add-binding {
            transition: ${ae["vira-interaction-animation-duration"].value};
            opacity: 0.5;
        }

        .add-binding:hover {
            opacity: 1;
        }
    `,events:{removeBinding:te(),listenForAction:te()},renderCallback({inputs:e,dispatch:t,events:r}){const n=_m(e),o=e.requiredActionNames.map(i=>{const a=[...(n[i]||[]).filter(z),void 0].map(s=>p`
                    <${ia.assign({binding:s})}
                        class=${Mr({"add-binding":!s})}
                        ${k("click",()=>{t(s?new r.removeBinding({actionName:i,...s}):new r.listenForAction({actionName:i}))})}
                    ></${ia}>
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
        `}});function Cm(e){return[...e.filter(t=>!xl(t.deviceKey))].sort((t,r)=>typeof t.deviceKey!="number"?-1:typeof r.deviceKey!="number"?1:t.deviceKey-r.deviceKey)}const aa=le()({tagName:"vir-device-list-v1",styles:y`
        :host {
            display: flex;
            gap: 32px;
        }
    `,renderCallback({inputs:e}){return Cm(e.devices).map(n=>p`
                <${Re.assign({animated:!0,deviceKey:n.deviceKey,displayShortKey:!1,size:zt.Large,inputHandler:e.inputHandler})}></${Re}>
            `)}}),fn=le()({tagName:"vir-assign-controls-v1",styles:y`
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

        ${ue} {
            margin-top: 16px;
            width: 100%;
        }
    `,events:{assignmentDone:te()},stateInitStatic:{listeningForAction:void 0,currentInputDevices:[],removeInputListeners:void 0,currentBindings:{}},initCallback:({inputs:e,state:t,updateState:r})=>{if(!t.removeInputListeners){let n=function(a){var c,u,d;const s=a.detail.inputs.newInputs[0],l=(c=t.listeningForAction)==null?void 0:c.actionName;if(l&&s&&!xl(s.deviceKey)){r({listeningForAction:void 0});const f=jn(s.inputValue),h=((d=(u=e.gamePipeline.currentState.actionBindings[s.deviceKey])==null?void 0:u[s.inputName])==null?void 0:d[f])??[];if(h.includes(l))return;e.gamePipeline.update({stateUpdate:{saveNextFrame:!0,actionBindings:{[s.deviceKey]:{[s.inputName]:{[f]:[...h,l]}}}}})}};e.gamePipeline.currentExecutionContext.inputHandler.addEventListener(pe.CurrentInputsChanged,n);const o=e.gamePipeline.addStateListener(!0,["currentDevices"],a=>{r({currentInputDevices:a})}),i=e.gamePipeline.addStateListener(!0,["actionBindings"],a=>{r({currentBindings:a})});r({removeInputListeners:()=>{e.gamePipeline.currentExecutionContext.inputHandler.removeEventListener(pe.CurrentInputsChanged,n),o(),i()}})}},renderCallback:({state:e,updateState:t,inputs:r,events:n,dispatch:o})=>p`
            <header>
                <h2>Configure Inputs</h2>
                <p>To connect a controller, push buttons on it.</p>
            </header>
            <h3>Available input devices</h3>
            <${aa.assign({showAnimations:!0,devices:e.currentInputDevices,inputHandler:r.gamePipeline.currentExecutionContext.inputHandler})}></${aa}>
            <${ue.assign({bindings:e.currentBindings,requiredActionNames:r.requiredActionNames})}
                ${k(ue.events.listenForAction,i=>{t({listeningForAction:i.detail})})}
                ${k(ue.events.removeBinding,i=>{var l,c;const s=(((c=(l=r.gamePipeline.currentState.actionBindings[i.detail.deviceKey])==null?void 0:l[i.detail.inputName])==null?void 0:c[i.detail.direction])??[]).map(u=>{i.detail.actionName});r.gamePipeline.update({stateUpdate:{saveNextFrame:!0,actionBindings:{[i.detail.deviceKey]:{[i.detail.inputName]:{[i.detail.direction]:s}}}}})})}
            ></${ue}>
            <${Oi.assign({text:"Play"})}
                ${k("click",()=>{o(new n.assignmentDone)})}
            ></${Oi}>
        `}),Tm=Br({parent:El,title:fn.tagName,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:y`
                :host {
                    width: 1000px;
                }
            `,renderCallback({controls:t}){return p`
                    <${fn.assign({requiredActionNames:["cut tree","eat food","move","sleep","walk"],gamePipeline:t.gamePipeline})}></${fn}>
                `}})}}),km=Br({parent:void 0,title:ue.tagName,elementExamplesCallback({defineExample:e}){e({title:"no existing bindings",renderCallback(){return p`
                    <${ue.assign({bindings:{},requiredActionNames:["cut tree","eat food","move","sleep","walk"]})}></${ue}>
                `}}),e({title:"with some bindings",renderCallback(){return p`
                    <${ue.assign({bindings:{[Ot.gamepad1]:{"button-1":{[pt.Positive]:["cut tree"]}},keyboard:{"button-long-button-name":{[pt.Positive]:["cut tree"]}},mouse:{"button-0":{[pt.Positive]:["move"]},"button-1":{[pt.Positive]:["ignored-action"]}}},requiredActionNames:["cut tree","eat food","move","sleep","walk"]})}></${ue}>
                `}})}}),sa=le()({tagName:"vir-animation-book-wrapper",stateInitStatic:{intervalId:void 0,animation:void 0},initCallback({state:e,updateState:t,inputs:r}){e.intervalId==null&&t({intervalId:window.setInterval(()=>{t({animation:{timestamp:Date.now()}})},r.milliseconds)})},cleanupCallback({state:e,updateState:t}){e.intervalId!=null&&(window.clearInterval(e.intervalId),t({intervalId:void 0}))},renderCallback({state:e}){return p`
            <${Fe.assign({animation:e.animation})}>
                <${Re.assign({animated:!1,deviceKey:Ot.gamepad1,inputHandler:void 0,displayShortKey:!1,size:zt.Large})}></${Re}>
            </${Fe}>
        `}}),Mm=Br({parent:void 0,title:Fe.tagName,elementExamplesCallback({defineExample:e}){e({title:"automatic",styles:y`
                :host {
                    ${At};
                }
            `,renderCallback(){return p`
                    <${sa.assign({milliseconds:500})}></${sa}>
                `}}),e({title:"on click",stateInitStatic:{animation:void 0},styles:y`
                :host {
                    ${At};
                }
            `,renderCallback({state:t,updateState:r}){return p`
                    <${Fe.assign({animation:t.animation})}
                        ${k("click",()=>{r({animation:{timestamp:Date.now()}})})}
                    >
                        <${Re.assign({animated:!1,deviceKey:Ot.gamepad1,inputHandler:void 0,displayShortKey:!1,size:zt.Large})}></${Re}>
                    </${Fe}>
                `}})}}),Lm=[El,Tm,Mm,km].sort((e,t)=>e.title.localeCompare(t.title)),Kn=le()({tagName:"vira-forward-game-book",stateInitStatic:{gamePipeline:void 0},renderCallback({inputs:e,dispatch:t,updateState:r,state:n}){return n.gamePipeline||r({gamePipeline:$m({startImmediately:!0})}),p`
            <${cn.assign({entries:Lm,elementBookRoutePaths:e.currentRoute.paths.slice(1),globalValues:{gamePipeline:n.gamePipeline}})}
                ${k(cn.events.pathUpdate,o=>{const i=o.detail;t(new oo({route:{paths:[fe.Design,...i]},sanitized:!1}))})}
            ></${cn}>
        `}}),Am=Object.freeze(Object.defineProperty({__proto__:null,VirForwardGameBook:Kn},Symbol.toStringTag,{value:"Module"})),Nm="modulepreload",Pm=function(e){return"/forward-game/"+e},la={},ca=function(t,r,n){if(!r||r.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Pm(i),i in la)return;la[i]=!0;const a=i.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!n)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Nm,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},ua={[fe.Design]:{description:"Individual parts of the UI (for demonstration or testing purposes)",async loadVersionElement(){return(await ca(()=>Promise.resolve().then(()=>Am),void 0)).VirForwardGameBook}},[fe.V1]:{description:"First working version. With controller support!",async loadVersionElement(){return(await ca(()=>import("./vir-forward-game-app.element-027e0160.js"),[])).VirForwardGameAppV1}}},da=le()({tagName:"vir-select-game-version",styles:y`
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
            transition: ${ae["vira-interaction-animation-duration"].value};
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
            ${ye}
        }

        h2,
        p {
            ${Ys}
        }

        ${Xt} {
            text-decoration: none;
        }
    `,renderCallback({inputs:e,dispatch:t}){return Object.entries(e.versionData).map(([r,n])=>p`
                    <${Xt.assign({route:{route:{paths:[r]},router:e.router}})}
                        ${k(Xt.events.routeChange,o=>{t(new oo({route:o.detail,sanitized:!1}))})}
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
    `,stateInitStatic:{router:$u(),currentRoute:$n,currentGameVersionElement:au({async updateCallback({rootPath:e}){if(wu(e))return ua[e].loadVersionElement()}})},initCallback({state:e,updateState:t}){e.router.addRouteListener(!0,r=>{t({currentRoute:r})})},renderCallback({state:e}){e.currentGameVersionElement.updateTrigger({rootPath:e.currentRoute.paths[0]});const t=e.currentRoute.paths[0]===fe.VersionSelector?p`
                      <${da.assign({versionData:ua,router:e.router})}></${da}>
                  `:e.currentRoute.paths[0]===fe.Design?p`
                        <${Kn.assign({currentRoute:e.currentRoute})}></${Kn}>
                    `:lu(e.currentGameVersionElement,p`
                            <div class="loading">Loading...</div>
                        `,r=>r?p`
                                <${r.assign({currentRoute:e.currentRoute})}></${r}>
                            `:"Failed",r=>p`
                                Failed: ${r.message}
                            `);return p`
            <div
                class="root"
                ${k(oo,r=>{e.router.setRoutes(r.detail.route,r.detail.sanitized)})}
            >
                ${t}
            </div>
        `}});export{oo as C,fe as F,$l as G,fn as V,Na as a,le as b,y as c,Ar as d,te as e,$m as f,us as g,p as h,pn as i,Aa as j,k as l,ie as r,En as w};
