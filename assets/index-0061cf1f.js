var Dl=Object.defineProperty;var Ol=(e,t,r)=>t in e?Dl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Kr=(e,t,r)=>(Ol(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er=globalThis,Yn=er.ShadowRoot&&(er.ShadyCSS===void 0||er.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qn=Symbol(),Mo=new WeakMap;let wa=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==qn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Yn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Mo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Mo.set(r,t))}return t}toString(){return this.cssText}};const de=e=>new wa(typeof e=="string"?e:e+"",void 0,qn),tr=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new wa(r,e,qn)},Hl=(e,t)=>{if(Yn)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=er.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},Lo=Yn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return de(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zl,defineProperty:Fl,getOwnPropertyDescriptor:Ul,getOwnPropertyNames:Vl,getOwnPropertySymbols:jl,getPrototypeOf:Kl}=Object,Ce=globalThis,Ao=Ce.trustedTypes,Wl=Ao?Ao.emptyScript:"",Wr=Ce.reactiveElementPolyfillSupport,gt=(e,t)=>e,sr={toAttribute(e,t){switch(t){case Boolean:e=e?Wl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Xn=(e,t)=>!zl(e,t),No={attribute:!0,type:String,converter:sr,reflect:!1,hasChanged:Xn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ce.litPropertyMetadata??(Ce.litPropertyMetadata=new WeakMap);let Ze=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=No){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Fl(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=Ul(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??No}static _$Ei(){if(this.hasOwnProperty(gt("elementProperties")))return;const t=Kl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(gt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(gt("properties"))){const r=this.properties,n=[...Vl(r),...jl(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Lo(o))}else t!==void 0&&r.push(Lo(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:sr).toAttribute(r,n.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:sr;this._$Em=o,this[o]=s.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Xn)(o?i:this[t],r))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(t){}firstUpdated(t){}};Ze.elementStyles=[],Ze.shadowRootOptions={mode:"open"},Ze[gt("elementProperties")]=new Map,Ze[gt("finalized")]=new Map,Wr==null||Wr({ReactiveElement:Ze}),(Ce.reactiveElementVersions??(Ce.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=globalThis,lr=vt.trustedTypes,Po=lr?lr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Zn="$lit$",be=`lit$${(Math.random()+"").slice(9)}$`,Jn="?"+be,Gl=`<${Jn}>`,Ue=document,$t=()=>Ue.createComment(""),Et=e=>e===null||typeof e!="object"&&typeof e!="function",$a=Array.isArray,Ea=e=>$a(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Gr=`[ 	
\f\r]`,ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ro=/-->/g,Io=/>/g,Be=RegExp(`>|${Gr}(?:([^\\s"'>=/]+)(${Gr}*=${Gr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bo=/'/g,Do=/"/g,xa=/^(?:script|style|textarea|title)$/i,Yl=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ql=Yl(1),se=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Oo=new WeakMap,ze=Ue.createTreeWalker(Ue,129);function Sa(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Po!==void 0?Po.createHTML(t):t}const _a=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=ut;for(let s=0;s<r;s++){const l=e[s];let c,u,d=-1,f=0;for(;f<l.length&&(a.lastIndex=f,u=a.exec(l),u!==null);)f=a.lastIndex,a===ut?u[1]==="!--"?a=Ro:u[1]!==void 0?a=Io:u[2]!==void 0?(xa.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=Be):u[3]!==void 0&&(a=Be):a===Be?u[0]===">"?(a=o??ut,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?Be:u[3]==='"'?Do:Bo):a===Do||a===Bo?a=Be:a===Ro||a===Io?a=ut:(a=Be,o=void 0);const h=a===Be&&e[s+1].startsWith("/>")?" ":"";i+=a===ut?l+Gl:d>=0?(n.push(c),l.slice(0,d)+Zn+l.slice(d)+be+h):l+be+(d===-2?s:h)}return[Sa(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class xt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,u]=_a(t,r);if(this.el=xt.createElement(c,n),ze.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=ze.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Zn)){const f=u[a++],h=o.getAttribute(d).split(be),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:h,ctor:m[1]==="."?Ta:m[1]==="?"?ka:m[1]==="@"?Ma:Pt}),o.removeAttribute(d)}else d.startsWith(be)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(xa.test(o.tagName)){const d=o.textContent.split(be),f=d.length-1;if(f>0){o.textContent=lr?lr.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],$t()),ze.nextNode(),l.push({type:2,index:++i});o.append(d[f],$t())}}}else if(o.nodeType===8)if(o.data===Jn)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(be,d+1))!==-1;)l.push({type:7,index:i}),d+=be.length-1}i++}}static createElement(t,r){const n=Ue.createElement("template");return n.innerHTML=t,n}}function Ve(e,t,r=e,n){var a,s;if(t===se)return t;let o=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=Et(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Ve(e,o._$AS(e,t.values),o,n)),t}class Ca{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Ue).importNode(r,!0);ze.currentNode=o;let i=ze.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new it(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new La(i,this,t)),this._$AV.push(c),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=ze.nextNode(),a++)}return ze.currentNode=Ue,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class it{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ve(this,t,r),Et(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==se&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ea(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&Et(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ue.createTextNode(t)),this._$AH=t}g(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=xt.createElement(Sa(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const a=new Ca(o,this),s=a.u(this.options);a.p(r),this.$(s),this._$AH=a}}_$AC(t){let r=Oo.get(t.strings);return r===void 0&&Oo.set(t.strings,r=new xt(t)),r}T(t){$a(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new it(this.k($t()),this.k($t()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Ve(this,t,r,0),a=!Et(t)||t!==this._$AH&&t!==se,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Ve(this,s[n+l],r,l),c===se&&(c=this._$AH[l]),a||(a=!Et(c)||c!==this._$AH[l]),c===P?t=P:t!==P&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.O(t)}O(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ta extends Pt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===P?void 0:t}}class ka extends Pt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==P)}}class Ma extends Pt{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Ve(this,t,r,0)??P)===se)return;const n=this._$AH,o=t===P&&n!==P||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==P&&(n===P||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class La{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ve(this,t)}}const Xl={j:Zn,P:be,A:Jn,C:1,M:_a,L:Ca,R:Ea,V:Ve,D:it,I:Pt,H:ka,N:Ma,U:Ta,B:La},Yr=vt.litHtmlPolyfillSupport;Yr==null||Yr(xt,it),(vt.litHtmlVersions??(vt.litHtmlVersions=[])).push("3.1.0");const Zl=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new it(t.insertBefore($t(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bt=class extends Ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return se}};var ya;bt._$litElement$=!0,bt.finalized=!0,(ya=globalThis.litElementHydrateSupport)==null||ya.call(globalThis,{LitElement:bt});const qr=globalThis.litElementPolyfillSupport;qr==null||qr({LitElement:bt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},at=e=>(...t)=>({_$litDirective$:e,values:t});class je{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:Jl}=Xl,Ho=()=>document.createComment(""),dt=(e,t,r)=>{var i;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=n.insertBefore(Ho(),o),s=n.insertBefore(Ho(),o);r=new Jl(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(i=r._$AQ)==null||i.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==o||l){let c=r._$AA;for(;c!==a;){const u=c.nextSibling;n.insertBefore(c,o),c=u}}}return r},De=(e,t,r=e)=>(e._$AI(t,r),e),Ql={},ec=(e,t=Ql)=>e._$AH=t,tc=e=>e._$AH,Xr=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=at(class extends je{constructor(e){var t;if(super(e),e.type!==kr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.st)!=null&&n.has(i))&&this.it.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.it)i in t||(r.remove(i),this.it.delete(i));for(const i in t){const a=!!t[i];a===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(a?(r.add(i),this.it.add(i)):(r.remove(i),this.it.delete(i)))}return se}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},rc=at(class extends je{constructor(e){if(super(e),e.type!==kr.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ht(e,t,r).values}update(e,[t,r,n]){const o=tc(e),{values:i,keys:a}=this.ht(t,r,n);if(!Array.isArray(o))return this.dt=a,i;const s=this.dt??(this.dt=[]),l=[];let c,u,d=0,f=o.length-1,h=0,m=i.length-1;for(;d<=f&&h<=m;)if(o[d]===null)d++;else if(o[f]===null)f--;else if(s[d]===a[h])l[h]=De(o[d],i[h]),d++,h++;else if(s[f]===a[m])l[m]=De(o[f],i[m]),f--,m--;else if(s[d]===a[m])l[m]=De(o[d],i[m]),dt(e,l[m+1],o[d]),d++,m--;else if(s[f]===a[h])l[h]=De(o[f],i[h]),dt(e,o[d],o[f]),f--,h++;else if(c===void 0&&(c=zo(a,h,m),u=zo(s,d,f)),c.has(s[d]))if(c.has(s[f])){const g=u.get(a[h]),E=g!==void 0?o[g]:null;if(E===null){const x=dt(e,o[d]);De(x,i[h]),l[h]=x}else l[h]=De(E,i[h]),dt(e,o[d],E),o[g]=null;h++}else Xr(o[f]),f--;else Xr(o[d]),d++;for(;h<=m;){const g=dt(e,l[m+1]);De(g,i[h]),l[h++]=g}for(;d<=f;){const g=o[d++];g!==null&&Xr(g)}return this.dt=a,ec(e,l),se}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mn extends je{constructor(t){if(super(t),this.et=P,t.type!==kr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||t==null)return this.vt=void 0,this.et=t;if(t===se)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}mn.directiveName="unsafeHTML",mn.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Fo extends mn{}Fo.directiveName="unsafeSVG",Fo.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nc(e,t,r){return e?t(e):r==null?void 0:r(e)}class Aa extends bt{}function oc(e,t){return e.filter((r,n)=>!t.includes(n))}function ic(e,t){return e.includes(t)}async function ac(e,t){await sc(e,t)}async function sc(e,t){return await e.reduce(async(n,o,i,a)=>{const s=await n,l=await t(o,i,a);return s.push(l),s},Promise.resolve([]))}function ee(e){return!!e}function lc(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const cc={capitalizeFirstLetter:!1};function uc(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function dc(e,t){return t.capitalizeFirstLetter?uc(e):e}function fc(e,t=cc){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return dc(n,t)}var rt;(function(e){e.Upper="upper",e.Lower="lower"})(rt||(rt={}));function hc(e){return e.toLowerCase()!==e.toUpperCase()}function Uo(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!hc(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===rt.Upper&&o!==o.toUpperCase())return!1;if(t===rt.Lower&&o!==o.toLowerCase())return!1}return!0}function mc(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Uo(a,rt.Lower,{blockNoCaseCharacters:!0})||Uo(s,rt.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function pc(e,t){return e.split(t)}function gc({max:e,min:t,value:r}){return r>e?t:r<t?e:r}function Oe(e){const t=Math.pow(10,e.digits),r=e.number*t;return Number((Math.round(r)/t).toFixed(e.digits))}function Vo({value:e,min:t,max:r}){return Math.min(Math.max(e,t),r)}const vc=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function F(e,t){return e?vc.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Na(e,t){return e&&t.every(r=>F(e,r))}function bc(e){return!!(F(e,"then")&&typeof e.then=="function")}async function Pa(e){return await Promise.resolve().then(()=>e())}function Ra(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Ke(r).trim()).join(`
`))}function Ke(e){return e?e instanceof Error?e.message:F(e,"message")?String(e.message):String(e):""}function Lr(e){return e instanceof Error?e:new Error(Ke(e))}function pn(e){return Array.isArray(e)?"array":typeof e}function D(e,t){return pn(e)===t}function he(e){return!!e&&typeof e=="object"}function yc(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function O(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function jo(e){return O(e).map(t=>e[t])}function wc(e){return Object.fromEntries(e)}function Ia(e,t,r=!1,n={}){const o=O(e),i=new Set(O(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!F(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(u){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${u}`)}const l=e[a],c=t[a];n[a]||Ba(l,c,s,r,n[a]??{})})}function Ba(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{F(t,"constructor")&&(!F(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{Ba(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${Ke(f)}`)}}).filter(ee).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):he(t)&&Ia(e,t,n,o)}function Ko({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Wo="Failed to compare objects using JSON.stringify";function Go(e,t,r){return Ko({source:e,errorHandler(n){if(r)return"";throw n}})===Ko({source:t,errorHandler(n){if(r)return"";throw n}})}function ne(e,t,r={}){try{return e===t?!0:he(e)&&he(t)?Go(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ne(e[o],t[o])):!1:Go(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Lr(n);throw o.message.startsWith(Wo)||(o.message=`${Wo}: ${o.message}`),o}}function $c(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Ec(e){return O(e).filter(t=>isNaN(Number(t)))}function Da(e){return Ec(e).map(r=>e[r])}function Oa(e,t){return Da(t).includes(e)}function Ha(e,t){return O(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function xc(e,t){return Ha(e,r=>!t.includes(r))}function Yo(e,t){return Ha(e,r=>t.includes(r))}function ke(e,t){let r=!1;const n=O(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(O(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function gn(e,t){try{return za(e,t),!0}catch{return!1}}function za(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function yt(...e){if(!gn(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(n=>{if(D(n,"object"))D(t,"object")||(t={...n});else{t=n;return}Object.entries(n).forEach(([o,i])=>{r[o]||(r[o]=[]),r[o].push(i)})}),D(t,"object")&&Object.entries(r).forEach(([n,o])=>{const i=yt(...o);i===void 0&&n in t?delete t[n]:i!==void 0&&(t[n]=i)}),t}function vn(e,t){const r=t,n=e;if(D(n,"array"))return n.map(a=>vn(a,t));const o=r[0];if(!F(n,o))return;const i=n[o];return r.length>1?vn(i,r.slice(1)):i}function St(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${St.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function bn(e){const t=St();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const Sc=globalThis.crypto;function Fa(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Sc.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function _c({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Cc(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(ee);return t.length?`?${t.join("&")}`:""}function Tc(e){return _c({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=pc(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(ee)}function kc(e,t){const r=D(e,"string")?new URL(e):e,n=Tc(r.search),o=Object.fromEntries(n);return t&&Ia(o,t),o}const Mc="px";function Lc(e){return Ac({value:e,suffix:Mc})}function Ac({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function We(e){if(he(e))return ke(e,(r,n)=>{if(!D(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(mc(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?de(r):r.startsWith("-")?tr`-${de(r)}`:tr`--${de(r)}`;return{name:a,value:tr`var(${a}, ${de(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${We.name}' function.`)}function Nc({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function Pc(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function yn(e){return F(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function Qn(e){return F(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Ua(e){return e.map(t=>yn(t)?t.definition:t).filter(t=>Qn(t))}const Va=new WeakMap;function Rc(e,t){var o;const r=Ua(t);return(o=ja(Va,[e,...r]).value)==null?void 0:o.template}function Ic(e,t,r){const n=Ua(t);return Wa(Va,[e,...n],r)}function ja(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Ka(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ja(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Ka(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Wa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=Ka(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),Wa(l,t,r,n+1)}const Bc=new WeakMap;function Ga(e,t,r){const n=Rc(e,t),o=n??r();if(!n){const s=Ic(e,t,o);if(s.result)Bc.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=Pc(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Ya(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,m=t[h];n&&n(c);let g,E=[];if(typeof f=="string"&&(g=r(f,c,m),g)){o[d]=f+g.replacement,a.push(h);const C=g.getExtraValues;E=C?C(m):[],E.length&&C?(o[d]+=" ",E.forEach((A,L)=>{L&&o.push(" ")}),s.push(A=>{const L=A[h],U=C(L);return{index:h,values:U}}),o.push(c)):o[d]+=c}g||o.push(c);const x=e.raw[u];g?(i[d]=i[d]+g.replacement+x,E.length&&E.forEach(()=>{i.push("")})):i.push(x)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const u=s.map(d=>d(c)).flat();return{valueIndexDeletions:a,valueInsertions:u}}}}function Dc(...[e,t,r]){if(Qn(r))return{replacement:r.tagName,getExtraValues:void 0}}function Oc(e,t){return Ya(e,t,Dc)}function y(e,...t){const r=Ga(e,t,()=>Oc(e,t));return tr(r.strings,...r.values)}const eo=Symbol("key for ignoring inputs not having been set yet"),Hc={[eo]:!0,allowPolymorphicState:!1};function qa(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Aa?!0:qa(r)}function Xa(e,t){const r=e.instanceState;O(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&O(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),zc(e)}function zc(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function qo(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Fc extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Ar(){return e=>{var t;return t=class extends Fc{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Q(){return Ar()}function Uc(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=Ar()([e,n].join("-"));return r[n]=o,r},{}):{}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vc={attribute:!0,type:String,converter:sr,reflect:!1,hasChanged:Xn},jc=(e=Vc,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.C(a,void 0,e),s}}}if(n==="setter"){const{name:a}=r;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function Kc(e){return(t,r)=>typeof r=="object"?jc(e,t,r):((n,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}const Wc="_elementVirStateSetup";function Gc(e){return he(e)?Wc in e:!1}function Yc(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return pn(e)===pn(t)&&r}const Za=Symbol("and"),Ja=Symbol("or"),Qa=Symbol("exact"),es=Symbol("enum"),to=Symbol("unknown"),ts="__vir__shape__definition__key__do__not__use__in__actual__objects";function rs(e){return F(e,ts)}const ns="__vir__shape__specifier__key__do__not__use__in__actual__objects",qc=[Za,Ja,Qa,es,to];function Xc(){return Zc([],to)}function Nr(e){return Rt(e,Ja)}function ro(e){return Rt(e,Za)}function no(e){return Rt(e,Qa)}function oo(e){return Rt(e,es)}function io(e){return Rt(e,to)}function Rt(e,t){const r=Pr(e);return!!r&&r.specifierType===t}function Zc(e,t){return{[ns]:!0,specifierType:t,parts:e}}function rr(e,t){const r=Pr(t);if(r){if(ro(r))return r.parts.every(n=>rr(e,n));if(Nr(r))return r.parts.some(n=>rr(e,n));if(no(r))return he(e)?rr(e,r.parts[0]):e===r.parts[0];if(oo(r))return Object.values(r.parts[0]).some(n=>n===e);if(io(r))return!0}return Yc(e,t)}function Pr(e){if(he(e)&&F(e,ns)){if(!F(e,"parts")||!D(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!F(e,"specifierType")||!ic(qc,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function wn(e,t=!1){return $n(e)}function $n(e){const t=Pr(e);if(t){if(Nr(t)||no(t))return $n(t.parts[0]);if(ro(t))return t.parts.reduce((r,n)=>Object.assign(r,$n(n)),{});if(oo(t))return Object.values(t.parts[0])[0];if(io(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return rs(e)?wn(e.shape):e instanceof RegExp||D(e,"array")?e:he(e)?ke(e,(r,n)=>wn(n)):e}function Jc(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:wn(e),[ts]:!0}}class re extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Qc(e,t,r={}){try{return eu(e,t,r),!0}catch{return!1}}function eu(e,t,r={}){He(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function os(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function He(e,t,r,n){if(io(t))return!0;if(rs(t))return He(e,t.shape,r,n);const o=os(r);if(Pr(e))throw new re(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!rr(e,t))throw new re(`Subject does not match shape definition at key ${o}`);if(D(t,"function"))return D(e,"function");if(he(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(Nr(t))l=t.parts.some(c=>{try{const u=He(e,c,r,{...n});return Object.assign(s,u),!0}catch(u){if(u instanceof re)return!1;throw u}});else if(ro(t))l=t.parts.every(c=>{try{const u=He(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,u),!0}catch(u){if(u instanceof re)return!1;throw u}});else if(no(t)){const c=He(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(oo(t))throw new re(`Cannot compare an enum specifier to an object at ${o}`);if(D(t,"array")&&D(a,"array"))l=a.every((c,u)=>{const d=t.some(f=>{try{return He(c,f,[...r,u],n),!0}catch(h){if(h instanceof re)return!1;throw h}});return s[u]=d,d});else{const c=tu({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).join(",")}`;throw new re(u)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,u])=>{if(!u)throw new re(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function tu({keys:e,options:t,shape:r,subject:n}){const o=os(e),i={};if(he(r)){const a=new Set(O(n)),s=new Set(O(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new re(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var f;const c=r[l],u=Nr(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!a.has(l)&&!u&&!d)throw new re(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=r[l];He(c,u,[...e,l],t),i[l]=!0})}else throw new re(`shape definition at ${o} was not an object.`);return i}const ru=Jc({addListener(){return!1},removeListener(){return!1},value:Xc()});function Zr(e){return Qc(e,ru,{allowExtraKeys:!0})}function is(e,t){t in e||Kc()(e,t)}function nu(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Xo(e,t){const r=e;function n(a){t?nu(a,e,e.tagName):is(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set(a,s,l){const c=Gc(l)?l._elementVirStateSetup():l;n(s);const u=r[s];function d(h){a[s]=h,r[s]=h}const f=e.observablePropertyListenerMap[s];if(u!==c&&Zr(u)&&(f!=null&&f.length)&&u.removeListener(f),Zr(c))if(f)c.addListener(f);else{let h=function(){e.requestUpdate()};e.observablePropertyListenerMap[s]=h,c.addListener(h)}else Zr(u)&&(e.observablePropertyListenerMap[s]=void 0);return d(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function ou(e){return e?ke(e,t=>t):{}}function iu({hostClassNames:e,cssVars:t}){return{hostClasses:ke(e,(r,n)=>({name:de(n),selector:de(`:host(.${n})`)})),cssVars:t}}function au({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&O(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function su(e,t){function r(o){O(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var lu=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Rr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Hc,...e.options},n=Uc(e.tagName,e.events),o=ou(e.hostClasses);e.hostClasses&&qo(e.tagName,e.hostClasses),e.cssVars&&qo(e.tagName,e.cssVars);const i=e.cssVars?We(e.cssVars):{},a=typeof e.styles=="function"?e.styles(iu({hostClassNames:o,cssVars:i})):e.styles||y``,s=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends Aa{createRenderParams(){return su(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{qa(this)&&!this._haveInputsBeenSet&&!r[eo]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Rr.name}' to define ${e.tagName}.`),this._hasRendered=!0;const u=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return au({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this._lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Lr(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this._lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(u){Xa(this,u)}constructor(){var d;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Xo(this,!1),this.instanceState=Xo(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};O(u).forEach(f=>{is(this,f),this.instanceState[f]=u[f]}),this.definition=c}},lu(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:fc(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function le(){return e=>Rr({...e,options:{[eo]:!1,...e.options}})}function as(e,t){return _t(e,t),e.element}function cu(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function _t(e,t){const r=cu(e),n=r?`: in ${r}`:"";if(e.type!==kr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function uu(e,t){return t?Zo(e,t):Zo(void 0,e)}const Zo=at(class extends je{constructor(e){super(e),this.element=as(e,"assign")}render(e,t){return Xa(this.element,t),se}});function du(e,t){return e===t}function fu(e,t=du){const r=new Set;function n(){r.forEach(i=>i(o.value))}const o={value:e,setValue(i){t(o.value,i)||(o.value=i,n())},addListener(i){const a=!r.has(i);return a&&r.add(i),a},removeListener(i){return r.delete(i)}};return o}const Jr=Symbol("not set");function hu(e){let t=Jr,r;const n=e&&"updateCallback"in e?e.updateCallback:void 0;let o=St();const i=fu(o.promise);function a(){o=St(),i.setValue(o.promise)}function s(m){o.resolve(m),i.setValue(m)}function l(m){o.reject(m),i.setValue(m)}function c(m){m!==r&&(r=m,o.isSettled()&&a(),m.then(g=>{r===m&&s(g)}).catch(g=>{r===m&&(o.promise.catch(()=>{}),l(Lr(g)))}))}function u(m,g){if(!n)throw console.error(e),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const E={...m},x={...g};if(t===Jr||!ne(E,t,{ignoreNonSerializableProperties:!0})){t=E;const C=n(t,x);c(C)}}function d(m,g){t=Jr,u(m,g)}const f=e&&"defaultValue"in e?e.defaultValue:new Promise(()=>{});return f instanceof Promise?c(f):s(f),Object.assign(i,{setNewPromise(m){c(m)},setResolvedValue(m){m!==i.value&&(o.isSettled()&&a(),o.resolve(m),s(m))},updateTrigger:n?u:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:n?d:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}})}function mu(...e){return{_elementVirStateSetup(){return hu(...e)}}}function k(e,t){return pu(e,t)}const pu=at(class extends je{constructor(e){super(e),this.element=as(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),se}}),Jo="onDomCreated",Qo=at(class extends je{constructor(e){super(e),_t(e,Jo)}update(e,[t]){_t(e,Jo);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Qr="onResize",ss=at(class extends je{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),_t(e,Qr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Qr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){_t(e,Qr),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function gu(e,t,r,n){const o=e.value;return o instanceof Error?n?n(o):Ke(o):bc(o)?t:r?r(o):o}function ie(e,t,r){return nc(e,()=>t,()=>r)}function ls(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),le()(r(n))),defineElementNoInputs:n=>(t(n),Rr(r(n)))}}function vu(...[e,t,r]){const n=yn(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=Qn(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(c){const u=yn(c)?c.inputs:void 0;return[o&&u?uu(u):void 0].filter(ee)}}}function bu(e){}function yu(e){return Ya(e.strings,e.values,vu,bu)}function p(e,...t){const r=ql(e,...t),n=Ga(e,t,()=>yu(r));return{...r,strings:n.strings,values:n.values}}const wu=0;function cs(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==wu)}class Ir extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class ei extends Ir{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Ct="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const $u=globalThis.history.pushState;function ti(...e){const t=$u.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ct)),t}const Eu=globalThis.history.replaceState;function ri(...e){const t=Eu.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ct)),t}function xu(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===ti)throw new ei("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===ri)throw new ei("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=ti,globalThis.history.replaceState=ri,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ct))})}}function Su(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?kc(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function us(e){return e.replace(/(?:^\/|\/+$)/g,"")}function ds({routeBase:e,windowPath:t}){if(!e)return"";const r=us(e);if(fs({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?ds({routeBase:n,windowPath:t}):""}function fs({routeBase:e,windowPath:t}){const r=us(e);return r?t.startsWith(`/${r}`):!1}class _u extends Ir{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function hs(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const ni=6;function oi(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>ni)throw new _u(`Route sanitization depth has exceed the max of ${ni} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(hs(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class en extends Ir{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Cu(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new en(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new en(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new en(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Tu(e,t,r=!1){const n=ms(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function ms(e,t){var s;const r=fs({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Cc(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(ee).join("/")}${n}${i}`}function ps(e={}){Cu(e),xu();const t=e.routeBase?ds({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>oi(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},u=o.sanitizeFullRoute(c);if(!(!s&&hs(l,u)))return Tu(u,t,a)},createRoutesUrl(i){return ms(i,t)},getCurrentRawRoutes(){return Su(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Ir(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(Ct,n),r=!0),i&&oi(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(Ct,n),r=!1),a},sanitizationDepth:0};return o}var fe=(e=>(e.VersionSelector="version-selector",e.Design="design",e.V1="v1",e))(fe||{});const gs=wc(Da(fe).filter(e=>e!=="version-selector").map(e=>[e,e]));function ku(e){return e in gs}const En={paths:["version-selector"],search:void 0,hash:void 0};let ii=0;function Mu(){if(ii++,ii>1)throw new Error("Illegal to create multiple copies of the game router.");return ps({maxListenerCount:1,routeBase:"forward-game",routeSanitizer(t){const r=t.paths[0];return r?r===fe.VersionSelector?{...t,paths:[fe.VersionSelector]}:r in gs||r===fe.Design?t:En:En}})}const ao=Ar()("change-route-event");function Lu(e,t){return F(e,"entryType")&&e.entryType===t}var B;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(B||(B={}));function Ge(e,t){return e.controlType===t}var z;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(z||(z={}));const vs=Symbol("any-type"),Au={[z.Checkbox]:!1,[z.Color]:"",[z.Dropdown]:"",[z.Hidden]:vs,[z.Number]:0,[z.Text]:""};function Nu(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=Au[o.controlType];i!==vs&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function so(e,t){const r=cr(e.title);return e.parent?[...so(e.parent,!1),cr(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function cr(e){return lc(e).toLowerCase().replaceAll(/\s/g,"-")}function Pu({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Ru(){return e=>Br(e)}function Br(e){const t={...e,entryType:B.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:B.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ee)};r.add(n.title),t.elementExamples[cr(o.title)]=o}}),t}var we;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(we||(we={}));async function xn(e=1){const t=St();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function Iu(e){return e.map(t=>({value:t,sort:Fa()})).sort((t,r)=>t.sort.localeCompare(r.sort)).map(({value:t})=>t)}async function Bu(e){return Du(e,1)}async function Du(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{za(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}const Ou={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},Hu=Object.keys(Ou),zu=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...Hu,...zu];function ht(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const Fu={[B.ElementExample]:()=>[],[B.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Nu(e.controls,e.title)].filter(ee),[B.Root]:()=>[]},ur="_isBookTreeNode",bs=new Map;function Uu(e){return bs.get(e)}function Vu(e,t){$c(bs,e,()=>t)}function et(e,t){return!!(ys(e)&&e.entry.entryType===t)}function ys(e){return!!(Na(e,[ur,"entry"])&&e[ur])}function ju(){return{[ur]:!0,entry:{entryType:B.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Ku({entries:e,debug:t}){const r=Uu(e);if(r)return r;const n=ju();e.forEach(a=>lo({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=ws(n),i={tree:n,flattenedNodes:o};return Vu(e,i),t&&console.info("element-book tree:",n),i}function Wu(e,t,r){if(!t.parent)return e;const n=Sn(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),lo({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Sn(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${so(t,!1)}`);return o}function lo({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Fu[t.entryType](t);t.errors.push(...o);const i=Wu(e,t,r),a=cr(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[ur]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,Lu(t,B.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>lo({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Sn(e,t){const r=ys(e)?e.fullUrlBreadcrumbs.slice(0,-1):so(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function ws(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>ws(o));return[e,...r].flat()}function co(e,t){return uo(e,["",...t],void 0)}function uo(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&uo(i,n,r);return{...e.controls,...a}}function Gu(e,t,r){const n={...e};return uo(n,["",...t],r),n}function $s(e,t){const r=(t==null?void 0:t.controls)||(et(e,B.Page)?ke(e.entry.controls,(o,i)=>i.initValue):{});return{children:ke(e.children,(o,i)=>{var a;return $s(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function Yu({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const qu=Fa(32);function nr(e){return e.join(qu)}function Es(e){if(!e.length)return[];const t=nr(e),r=Es(e.slice(0,-1));return[t,...r]}const Xu=["error","errors"];function Zu(e){return Xu.includes(e)}function Ju({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),nr(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&Zu(t),a=nr(o.fullUrlBreadcrumbs);if(Yu({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=Es(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=nr(o.fullUrlBreadcrumbs),a=r[i];if(!D(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var V;(function(e){e.Search="search",e.Book="book"})(V||(V={}));function _n(e){return e[0]===V.Book?"":e[1]?decodeURIComponent(e[1]):""}const nt={hash:void 0,paths:[V.Book],search:void 0};function Qu(e){return ps({routeBase:e,routeSanitizer(t){return{paths:ed(t.paths),hash:void 0,search:void 0}}})}function ed(e){const t=e[0];if(Oa(t,V)){if(t===V.Book)return[V.Book,...e.slice(1)];if(t===V.Search)return e[1]?[t,e[1]]:[V.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return nt.paths}const S=We({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),td={nav:{hover:{background:S["element-book-nav-hover-background-color"],foreground:S["element-book-nav-hover-foreground-color"]},active:{background:S["element-book-nav-active-background-color"],foreground:S["element-book-nav-active-foreground-color"]},selected:{background:S["element-book-nav-selected-background-color"],foreground:S["element-book-nav-selected-foreground-color"]}},accent:{icon:S["element-book-accent-icon-color"]},page:{background:S["element-book-page-background-color"],backgroundFaint1:S["element-book-page-background-faint-level-1-color"],backgroundFaint2:S["element-book-page-background-faint-level-2-color"],foreground:S["element-book-page-foreground-color"],foregroundFaint1:S["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:S["element-book-page-foreground-faint-level-2-color"]}};function rd(e,t){xs(e,t,td)}function Cn(e){return F(e,"_$cssResult$")}function ai(e){return Na(e,["name","value","default"])&&D(e.default,"string")&&Cn(e.name)&&Cn(e.value)}function xs(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Cn(o)){if(!ai(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Nc({forCssVar:i,onElement:e,toValue:String(o)})}else{if(ai(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);xs(e,o,i)}})}function R(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function It(e){return Te(e)==="string"}function Te(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function dr(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Ss(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function _s(e){return e[e.length-1]}function fr(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Cs(e,t,r){return(r-e)/(t-e)}function fo(e,t,r){return fr(t[0],t[1],Cs(e[0],e[1],r))}function Ts(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var nd=Object.freeze({__proto__:null,interpolate:fr,interpolateInv:Cs,isString:It,last:_s,mapRange:fo,multiplyMatrices:R,parseCoordGrammar:Ts,parseFunction:Ss,toPrecision:dr,type:Te});class od{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Me=new od;var me={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const oe={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Tn(e){return Array.isArray(e)?e:oe[e]}function hr(e,t,r,n={}){if(e=Tn(e),t=Tn(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Me.run("chromatic-adaptation-start",o),o.M||(o.W1===oe.D65&&o.W2===oe.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===oe.D50&&o.W2===oe.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Me.run("chromatic-adaptation-end",o),o.M)return R(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const id=75e-6,W=class W{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?W.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Tn(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:ad(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Me.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=id}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=si(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=si(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=W.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=W.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(W.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof W)return t;if(Te(t)==="string"){let o=W.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return W.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=Te(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=W.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Te(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=W.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===a||((l=u.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...u};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Kr(W,"registry",{}),Kr(W,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=W;function ad(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function si(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ts(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=fo(s,l,i)),i=dr(i,o),c&&(i+=c),i})}return e}var X=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class j extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=X),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=R(t.toXYZ_M,r);return this.white!==this.base.white&&(n=hr(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=hr(this.base.white,this.white,r),R(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function ks(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(Me.run("parse-start",r),r.color)return r.color;if(r.parsed=Ss(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const m=Object.keys(f.coords).map((g,E)=>r.parsed.args[E]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:m,alpha:u}}}let d="";if(c in b.registry){let f=(s=(a=(i=b.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||_s(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([m,g],E)=>{var ce;let x=u.coordGrammar[E],C=(ce=f[E])==null?void 0:ce.type,A=x.find(K=>K==C);if(!A){let K=g.name||m;throw new TypeError(`${C} not allowed for ${K} in ${l}()`)}let L=A.range;C==="<percentage>"&&(L||(L=[0,1]));let U=g.range||g.refRange;return L&&U&&(f[E]=fo(L,U,f[E])),A})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function _(e){if(!e)throw new TypeError("Empty color reference");It(e)&&(e=ks(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Bt(e,t){return t=b.get(t),t.from(e)}function Z(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return Bt(e,r)[n]}function Ms(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function Le(e,t,r){if(e=_(e),arguments.length===2&&Te(arguments[1])==="object"){let n=arguments[1];for(let o in n)Le(e,o,n[o])}else{typeof r=="function"&&(r=r(Z(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),i=Bt(e,n);i[o]=r,Ms(e,n,i)}return e}var ho=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:X,fromBase:e=>hr(X.white,"D50",e),toBase:e=>hr("D50",X.white,e),formats:{color:{}}});const sd=216/24389,li=24/116,Ut=24389/27;let tn=oe.D50;var G=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:tn,base:ho,fromBase(e){let r=e.map((n,o)=>n/tn[o]).map(n=>n>sd?Math.cbrt(n):(Ut*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>li?Math.pow(t[0],3):(116*t[0]-16)/Ut,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ut,t[2]>li?Math.pow(t[2],3):(116*t[2]-16)/Ut].map((n,o)=>n*tn[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Dr(e){return(e%360+360)%360}function ld(e,t){if(e==="raw")return t;let[r,n]=t.map(Dr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Tt=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:G,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ci=25**7,mr=Math.PI,ui=180/mr,Ye=mr/180;function kn(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=G.from(e),l=Tt.from(G,[i,a,s])[1],[c,u,d]=G.from(t),f=Tt.from(G,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let m=((l+f)/2)**7,g=.5*(1-Math.sqrt(m/(m+ci))),E=(1+g)*a,x=(1+g)*u,C=Math.sqrt(E**2+s**2),A=Math.sqrt(x**2+d**2),L=E===0&&s===0?0:Math.atan2(s,E),U=x===0&&d===0?0:Math.atan2(d,x);L<0&&(L+=2*mr),U<0&&(U+=2*mr),L*=ui,U*=ui;let ce=c-i,K=A-C,M=U-L,H=L+U,Vr=Math.abs(M),lt;C*A===0?lt=0:Vr<=180?lt=M:M>180?lt=M-360:M<-180?lt=M+360:console.log("the unthinkable has happened");let So=2*Math.sqrt(A*C)*Math.sin(lt*Ye/2),Nl=(i+c)/2,jr=(C+A)/2,_o=Math.pow(jr,7),ge;C*A===0?ge=H:Vr<=180?ge=H/2:H<360?ge=(H+360)/2:ge=(H-360)/2;let Co=(Nl-50)**2,Pl=1+.015*Co/Math.sqrt(20+Co),To=1+.045*jr,ct=1;ct-=.17*Math.cos((ge-30)*Ye),ct+=.24*Math.cos(2*ge*Ye),ct+=.32*Math.cos((3*ge+6)*Ye),ct-=.2*Math.cos((4*ge-63)*Ye);let ko=1+.015*jr*ct,Rl=30*Math.exp(-1*((ge-275)/25)**2),Il=2*Math.sqrt(_o/(_o+ci)),Bl=-1*Math.sin(2*Rl*Ye)*Il,Ft=(ce/(r*Pl))**2;return Ft+=(K/(n*To))**2,Ft+=(So/(o*ko))**2,Ft+=Bl*(K/(n*To))*(So/(o*ko)),Math.sqrt(Ft)}const cd=75e-6;function wt(e,t=e.space,{epsilon:r=cd}={}){e=_(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function kt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Ae(e,{method:t=me.gamut_mapping,space:r=e.space}={}){if(It(arguments[1])&&(r=arguments[1]),r=b.get(r),wt(e,r,{epsilon:0}))return _(e);let n=q(e,r);if(t!=="clip"&&!wt(e,r)){let o=Ae(kt(n),{method:"clip",space:r});if(kn(e,o)>2){let i=b.resolveCoord(t),a=i.space,s=i.id,l=q(n,a),u=(i.range||i.refRange)[0],d=.01,f=u,h=Z(l,s);for(;h-f>d;){let m=kt(l);m=Ae(m,{space:r,method:"clip"}),kn(l,m)-2<d?f=Z(l,s):h=Z(l,s),Le(l,s,(f+h)/2)}n=q(l,r)}else n=o}if(t==="clip"||!wt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=q(n,e.space)),e.coords=n.coords,e}Ae.returns="color";function q(e,t,{inGamut:r}={}){e=_(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Ae(o)),o}q.returns="color";function pr(e,{precision:t=me.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=_(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!wt(e)&&(s=Ae(kt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(h=>dr(h,t)));let u=[...s];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=dr(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";i=`${c}(${u.join(r.commas?", ":" ")}${f})`}return i}const ud=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],dd=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Or=new j({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:ud,fromXYZ_M:dd,formats:{color:{}}});const Vt=1.09929682680944,di=.018053968510807;var Ls=new j({id:"rec2020",name:"REC.2020",base:Or,toBase(e){return e.map(function(t){return t<di*4.5?t/4.5:Math.pow((t+Vt-1)/Vt,1/.45)})},fromBase(e){return e.map(function(t){return t>=di?Vt*Math.pow(t,.45)-(Vt-1):4.5*t})},formats:{color:{}}});const fd=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],hd=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var As=new j({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:fd,fromXYZ_M:hd});const md=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],pd=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ns=new j({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:md,fromXYZ_M:pd,formats:{color:{}}}),fi={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let hi=Array(3).fill("<percentage> | <number>[0, 255]"),mi=Array(3).fill("<number>[0, 255]");var Mt=new j({id:"srgb",name:"sRGB",base:Ns,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:hi},rgb_number:{name:"rgb",commas:!0,coords:mi,noAlpha:!0},color:{},rgba:{coords:hi,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:mi},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=fi.black,t.alpha=0):t.coords=fi[e],t.coords)return t}}}}),Ps=new j({id:"p3",name:"P3",base:As,fromBase:Mt.fromBase,toBase:Mt.toBase,formats:{color:{id:"display-p3"}}});me.display_space=Mt;if(typeof CSS<"u"&&CSS.supports)for(let e of[G,Ls,Ps]){let t=e.getMinCoords(),n=pr({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){me.display_space=e;break}}function gd(e,{space:t=me.display_space,...r}={}){let n=pr(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!me.display_space)n=new String(n),n.color=e;else{let o=q(e,t);n=new String(pr(o,r)),n.color=o}return n}function Rs(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function vd(e,t){return e=_(e),t=_(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Ne(e){return Z(e,[X,"y"])}function Is(e,t){Le(e,[X,"y"],t)}function bd(e){Object.defineProperty(e.prototype,"luminance",{get(){return Ne(this)},set(t){Is(this,t)}})}var yd=Object.freeze({__proto__:null,getLuminance:Ne,register:bd,setLuminance:Is});function wd(e,t){e=_(e),t=_(t);let r=Math.max(Ne(e),0),n=Math.max(Ne(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const $d=.56,Ed=.57,xd=.62,Sd=.65,pi=.022,_d=1.414,Cd=.1,Td=5e-4,kd=1.14,gi=.027,Md=1.14;function vi(e){return e>=pi?e:e+(pi-e)**_d}function qe(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Ld(e,t){t=_(t),e=_(e);let r,n,o,i,a,s;t=q(t,"srgb"),[i,a,s]=t.coords;let l=qe(i)*.2126729+qe(a)*.7151522+qe(s)*.072175;e=q(e,"srgb"),[i,a,s]=e.coords;let c=qe(i)*.2126729+qe(a)*.7151522+qe(s)*.072175,u=vi(l),d=vi(c),f=d>u;return Math.abs(d-u)<Td?n=0:f?(r=d**$d-u**Ed,n=r*kd):(r=d**Sd-u**xd,n=r*Md),Math.abs(n)<Cd?o=0:n>0?o=n-gi:o=n+gi,o*100}function Ad(e,t){e=_(e),t=_(t);let r=Math.max(Ne(e),0),n=Math.max(Ne(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Nd=5e4;function Pd(e,t){e=_(e),t=_(t);let r=Math.max(Ne(e),0),n=Math.max(Ne(t),0);return n>r&&([r,n]=[n,r]),n===0?Nd:(r-n)/n}function Rd(e,t){e=_(e),t=_(t);let r=Z(e,[G,"l"]),n=Z(t,[G,"l"]);return Math.abs(r-n)}const Id=216/24389,bi=24/116,jt=24389/27;let rn=oe.D65;var Mn=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:rn,base:X,fromBase(e){let r=e.map((n,o)=>n/rn[o]).map(n=>n>Id?Math.cbrt(n):(jt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>bi?Math.pow(t[0],3):(116*t[0]-16)/jt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/jt,t[2]>bi?Math.pow(t[2],3):(116*t[2]-16)/jt].map((n,o)=>n*rn[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const nn=Math.pow(5,.5)*.5+.5;function Bd(e,t){e=_(e),t=_(t);let r=Z(e,[Mn,"l"]),n=Z(t,[Mn,"l"]),o=Math.abs(Math.pow(r,nn)-Math.pow(n,nn)),i=Math.pow(o,1/nn)*Math.SQRT2-40;return i<7.5?0:i}var or=Object.freeze({__proto__:null,contrastAPCA:Ld,contrastDeltaPhi:Bd,contrastLstar:Rd,contrastMichelson:Ad,contrastWCAG21:wd,contrastWeber:Pd});function Dd(e,t,r={}){It(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(or).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=_(e),t=_(t);for(let i in or)if("contrast"+n.toLowerCase()===i.toLowerCase())return or[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Bs(e){let[t,r,n]=Bt(e,X),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Ds(e){let[t,r,n]=Bt(e,X),o=t+r+n;return[t/o,r/o]}function Od(e){Object.defineProperty(e.prototype,"uv",{get(){return Bs(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ds(this)}})}var Hd=Object.freeze({__proto__:null,register:Od,uv:Bs,xy:Ds});function zd(e,t){return Rs(e,t,"lab")}const Fd=Math.PI,yi=Fd/180;function Ud(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=G.from(e),[,s,l]=Tt.from(G,[o,i,a]),[c,u,d]=G.from(t),f=Tt.from(G,[c,u,d])[1];s<0&&(s=0),f<0&&(f=0);let h=o-c,m=s-f,g=i-u,E=a-d,x=g**2+E**2-m**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let A=.0638*s/(1+.0131*s)+.638,L;Number.isNaN(l)&&(l=0),l>=164&&l<=345?L=.56+Math.abs(.2*Math.cos((l+168)*yi)):L=.36+Math.abs(.4*Math.cos((l+35)*yi));let U=Math.pow(s,4),ce=Math.sqrt(U/(U+1900)),K=A*(ce*L+1-ce),M=(h/(r*C))**2;return M+=(m/(n*A))**2,M+=x/K**2,Math.sqrt(M)}const wi=203;var mo=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:X,fromBase(e){return e.map(t=>Math.max(t*wi,0))},toBase(e){return e.map(t=>Math.max(t/wi,0))}});const Kt=1.15,Wt=.66,$i=2610/2**14,Vd=2**14/2610,Ei=3424/2**12,xi=2413/2**7,Si=2392/2**7,jd=1.7*2523/2**5,_i=2**5/(1.7*2523),Gt=-.56,on=16295499532821565e-27,Kd=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Wd=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Gd=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Yd=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Os=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:mo,fromBase(e){let[t,r,n]=e,o=Kt*t-(Kt-1)*n,i=Wt*r-(Wt-1)*t,s=R(Kd,[o,i,n]).map(function(f){let h=Ei+xi*(f/1e4)**$i,m=1+Si*(f/1e4)**$i;return(h/m)**jd}),[l,c,u]=R(Gd,s);return[(1+Gt)*l/(1+Gt*l)-on,c,u]},toBase(e){let[t,r,n]=e,o=(t+on)/(1+Gt-Gt*(t+on)),a=R(Yd,[o,r,n]).map(function(f){let h=Ei-f**_i,m=Si*f**_i-xi;return 1e4*(h/m)**Vd}),[s,l,c]=R(Wd,a),u=(s+(Kt-1)*c)/Kt,d=(l+(Wt-1)*u)/Wt;return[u,d,c]},formats:{color:{}}}),Ln=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Os,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function qd(e,t){let[r,n,o]=Ln.from(e),[i,a,s]=Ln.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let u=o-s,d=2*Math.sqrt(n*a)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const Hs=3424/4096,zs=2413/128,Fs=2392/128,Ci=2610/16384,Xd=2523/32,Zd=16384/2610,Ti=32/2523,Jd=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Qd=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],ef=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],tf=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var An=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:mo,fromBase(e){let t=R(Jd,e);return rf(t)},toBase(e){let t=nf(e);return R(tf,t)},formats:{color:{}}});function rf(e){let t=e.map(function(r){let n=Hs+zs*(r/1e4)**Ci,o=1+Fs*(r/1e4)**Ci;return(n/o)**Xd});return R(Qd,t)}function nf(e){return R(ef,e).map(function(n){let o=Math.max(n**Ti-Hs,0),i=zs-Fs*n**Ti;return 1e4*(o/i)**Zd})}function of(e,t){let[r,n,o]=An.from(e),[i,a,s]=An.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const af=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],sf=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],lf=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],cf=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var gr=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:X,fromBase(e){let r=R(af,e).map(n=>Math.cbrt(n));return R(lf,r)},toBase(e){let r=R(cf,e).map(n=>n**3);return R(sf,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function uf(e,t){let[r,n,o]=gr.from(e),[i,a,s]=gr.from(t),l=r-i,c=n-a,u=o-s;return Math.sqrt(l**2+c**2+u**2)}var vr={deltaE76:zd,deltaECMC:Ud,deltaE2000:kn,deltaEJz:qd,deltaEITP:of,deltaEOK:uf};function mt(e,t,r={}){It(r)&&(r={method:r});let{method:n=me.deltaE,...o}=r;e=_(e),t=_(t);for(let i in vr)if("deltae"+n.toLowerCase()===i.toLowerCase())return vr[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function df(e,t=.25){let n=[b.get("oklch","lch"),"l"];return Le(e,n,o=>o*(1+t))}function ff(e,t=.25){let n=[b.get("oklch","lch"),"l"];return Le(e,n,o=>o*(1-t))}var hf=Object.freeze({__proto__:null,darken:ff,lighten:df});function Us(e,t,r=.5,n={}){[e,t]=[_(e),_(t)],Te(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return Dt(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function Vs(e,t,r={}){let n;po(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[_(e),_(t)],n=Dt(e,t,l));let c=mt(e,t),u=o>0?Math.max(a,Math.ceil(c/o)+1):a,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,m)=>{let g=m*f;return{p:g,color:n(g)}})}if(o>0){let f=d.reduce((h,m,g)=>{if(g===0)return 0;let E=mt(m.color,d[g-1].color,i);return Math.max(h,E)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<s;h++){let m=d[h-1],g=d[h],E=(g.p+m.p)/2,x=n(E);f=Math.max(f,mt(x,m.color),mt(x,g.color)),d.splice(h,0,{p:E,color:n(E)}),h++}}}return d=d.map(f=>f.color),d}function Dt(e,t,r={}){if(po(e)){let[l,c]=[e,t];return Dt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=_(e),t=_(t),e=kt(e),t=kt(t);let s={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[me.interpolationSpace]||e.space,o=o?b.get(o):n,e=q(e,n),t=q(t,n),e=Ae(e),t=Ae(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Z(e,c),Z(t,c)];[u,d]=ld(l,[u,d]),Le(e,c,u),Le(t,c,d)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((f,h)=>{let m=t.coords[h];return fr(f,m,l)}),u=fr(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return a&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=q(d,o)),d},{rangeArgs:s})}function po(e){return Te(e)==="function"&&!!e.rangeArgs}me.interpolationSpace="lab";function mf(e){e.defineFunction("mix",Us,{returns:"color"}),e.defineFunction("range",Dt,{returns:"function<color>"}),e.defineFunction("steps",Vs,{returns:"array<color>"})}var pf=Object.freeze({__proto__:null,isRange:po,mix:Us,range:Dt,register:mf,steps:Vs}),js=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Mt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Ks=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:js,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),gf=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ks,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const vf=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],bf=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Ws=new j({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:vf,fromXYZ_M:bf}),yf=new j({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Ws,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const wf=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],$f=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Gs=new j({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:ho,toXYZ_M:wf,fromXYZ_M:$f});const Ef=1/512,xf=16/512;var Sf=new j({id:"prophoto",name:"ProPhoto",base:Gs,toBase(e){return e.map(t=>t<xf?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Ef?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),_f=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:gr,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dr(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const ki=203,Mi=2610/2**14,Cf=2**14/2610,Tf=2523/2**5,Li=2**5/2523,Ai=3424/2**12,Ni=2413/2**7,Pi=2392/2**7;var kf=new j({id:"rec2100pq",name:"REC.2100-PQ",base:Or,toBase(e){return e.map(function(t){return(Math.max(t**Li-Ai,0)/(Ni-Pi*t**Li))**Cf*1e4/ki})},fromBase(e){return e.map(function(t){let r=Math.max(t*ki/1e4,0),n=Ai+Ni*r**Mi,o=1+Pi*r**Mi;return(n/o)**Tf})},formats:{color:{id:"rec2100-pq"}}});const Ri=.17883277,Ii=.28466892,Bi=.55991073,an=3.7743;var Mf=new j({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Or,toBase(e){return e.map(function(t){return t<=.5?t**2/3*an:(Math.exp((t-Bi)/Ri)+Ii)/12*an})},fromBase(e){return e.map(function(t){return t/=an,t<=1/12?Math.sqrt(3*t):Ri*Math.log(12*t-Ii)+Bi})},formats:{color:{id:"rec2100-hlg"}}});const Ys={};Me.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=qs(e.W1,e.W2,e.options.method))});Me.add("chromatic-adaptation-end",e=>{e.M||(e.M=qs(e.W1,e.W2,e.options.method))});function Hr({id:e,toCone_M:t,fromCone_M:r}){Ys[e]=arguments[0]}function qs(e,t,r="Bradford"){let n=Ys[r],[o,i,a]=R(n.toCone_M,e),[s,l,c]=R(n.toCone_M,t),u=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],d=R(u,n.toCone_M);return R(n.fromCone_M,d)}Hr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Hr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Hr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Hr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(oe,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});oe.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Lf=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Af=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Xs=new j({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:oe.ACES,toXYZ_M:Lf,fromXYZ_M:Af,formats:{color:{}}});const Yt=2**-16,sn=-.35828683,qt=(Math.log2(65504)+9.72)/17.52;var Nf=new j({id:"acescc",name:"ACEScc",coords:{r:{range:[sn,qt],name:"Red"},g:{range:[sn,qt],name:"Green"},b:{range:[sn,qt],name:"Blue"}},referred:"scene",base:Xs,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Yt)*2:r<qt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Yt)+9.72)/17.52:t<Yt?(Math.log2(Yt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Di=Object.freeze({__proto__:null,A98RGB:yf,A98RGB_Linear:Ws,ACEScc:Nf,ACEScg:Xs,HSL:js,HSV:Ks,HWB:gf,ICTCP:An,JzCzHz:Ln,Jzazbz:Os,LCH:Tt,Lab:G,Lab_D65:Mn,OKLCH:_f,OKLab:gr,P3:Ps,P3_Linear:As,ProPhoto:Sf,ProPhoto_Linear:Gs,REC_2020:Ls,REC_2020_Linear:Or,REC_2100_HLG:Mf,REC_2100_PQ:kf,XYZ_ABS_D65:mo,XYZ_D50:ho,XYZ_D65:X,sRGB:Mt,sRGB_Linear:Ns});class w{constructor(...t){let r;t.length===1&&(r=_(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new w(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=gd(this,...t);return r.color=new w(r.color),r}static get(t,...r){return t instanceof w?t:new w(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=w.get(l);else if(i==="function<color>"){let c=l;l=function(...u){let d=c(...u);return w.get(d)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>w.get(c)));return l};t in w||(w[t]=a),o&&(w.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)w.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(w);else for(let r in t)w.defineFunction(r,t[r])}}w.defineFunctions({get:Z,getAll:Bt,set:Le,setAll:Ms,to:q,equals:vd,inGamut:wt,toGamut:Ae,distance:Rs,toString:pr});Object.assign(w,{util:nd,hooks:Me,WHITES:oe,Space:b,spaces:b.registry,parse:ks,defaults:me});for(let e of Object.keys(Di))b.register(Di[e]);for(let e in b.registry)Nn(e,b.registry[e]);Me.add("colorspace-init-end",e=>{var t;Nn(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Nn(r,e)})});function Nn(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(w.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return b.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=b.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=b.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}w.extend(vr);w.extend({deltaE:mt});Object.assign(w,{deltaEMethods:vr});w.extend(hf);w.extend({contrast:Dd});w.extend(Hd);w.extend(yd);w.extend(pf);w.extend(or);function Zs(e){return ke(e,(t,r)=>r instanceof w?de(r.toString({format:"hex"})):Zs(r))}const Pf="dodgerblue";function Pn(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function ln({background:e,foreground:t}){return{background:e??new w(Pn(t)),foreground:t??new w(Pn(e))}}var br;(function(e){e.Dark="dark",e.Light="light"})(br||(br={}));function Rf(e){return e==="black"?"white":"black"}const If={black:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")},white:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")}},Bf={black:{backgroundFaint1:new w("#666"),backgroundFaint2:new w("#444")},white:{backgroundFaint1:new w("#ccc"),backgroundFaint2:new w("#fafafa")}};function Oi({themeColor:e=Pf,themeStyle:t=br.Light}={}){const r=new w(e),n=new w(t===br.Dark?"black":"white"),o=Pn(n),i=new w(o),a={nav:{hover:ln({background:r.clone().set({"hsl.l":93})}),active:ln({background:r.clone().set({"hsl.l":90})}),selected:ln({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Bf[Rf(o)],foreground:i,...If[o]}};return Zs(a)}const yr=Ar()("element-book-change-route"),Hi="vira-",{defineElement:st,defineElementNoInputs:sp}=ls({assertInputs:e=>{if(!e.tagName.startsWith(Hi))throw new Error(`Tag name should start with '${Hi}' but got '${e.tagName}'`)}}),Js=y`
    pointer-events: none;
    opacity: 0.3;
`,ae=We({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),wr=We({"vira-form-input-border-radius":"8px"}),$r=We({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":y`calc(${wr["vira-form-input-border-radius"].value} + 4px)`});function Qs({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=de(Lc(n+r+t));return y`
        ${de(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${$r["vira-focus-outline-color"].value};
            border-radius: ${$r["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const el=y`
    padding: 0;
    margin: 0;
`,ye=y`
    ${el};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Lt=y`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Rn;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Rn||(Rn={}));const zi=st()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Rn.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>y`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Lt};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${$r["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Js};
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
            border-radius: ${wr["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ae["vira-interaction-animation-duration"].value},
                background-color
                    ${ae["vira-interaction-animation-duration"].value},
                border-color ${ae["vira-interaction-animation-duration"].value};
        }

        ${Qs({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${I} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${I.assign({icon:e.icon})}></${I}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var In;(function(e){e.Header="header"})(In||(In={}));st()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>y`
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
    `,events:{expandChange:Q()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?y`
                  height: ${e.contentHeight}px;
              `:y`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${k("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${In.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${ss(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const $=We({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function $e({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Df=$e({name:"CloseX24Icon",svgTemplate:p`
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
    `}),Of=$e({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});$e({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Hf=$e({name:"Loader24Icon",svgTemplate:p`
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
    `}),zf=y`
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
`,tl=$e({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${zf}
        </style>
        ${Hf.svgTemplate}
    `}),Ff=$e({name:"Options24Icon",svgTemplate:p`
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
    `}),Uf=$e({name:"StatusFailure24Icon",svgTemplate:p`
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
    `});$e({name:"StatusInProgress24Icon",svgTemplate:p`
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
    `});$e({name:"StatusSuccess24Icon",svgTemplate:p`
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
    `});var Er;(function(e){e.Loading="loading",e.Error="error"})(Er||(Er={}));st()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:Q(),imageError:Q()},styles:({hostClasses:e})=>y`
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
                  <slot class="status-wrapper" name=${Er.Error}>
                      <${I.assign({icon:Uf})} class="error"></${I}>
                  </slot>
              `:t.loadedUrls[i]?void 0:p`
                    <slot class="status-wrapper" name=${Er.Loading}>
                        <${I.assign({icon:tl})}></${I}>
                    </slot>
                `;return p`
            ${ie(!!a,a)}
            <img
                class=${Mr({hidden:!!a})}
                ${k("load",async()=>{e._debugLoadDelay&&await bn(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${k("error",async s=>{e._debugLoadDelay&&await bn(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function Bn({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Bn({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function rl({value:e,allowed:t,blocked:r}){const n=t?Bn({input:e,matcher:t}):!0,o=r?Bn({input:e,matcher:r}):!1;return n&&!o}function nl(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(rl({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Vf({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=ht(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)rl({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:u}=nl({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}i.value!==l&&(i.value=l),s!==l&&o(l)}const ir=st()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Q(),inputBlocked:Q()},styles:({hostClasses:e,cssVars:t})=>y`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${$r["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Js};
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
                ${Lt};
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
                border-radius: ${wr["vira-form-input-border-radius"].value};
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
                border-radius: ${wr["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Qs({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${Lt};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=nl({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?p`
                  <${I.assign({icon:e.icon})} class="left-side-icon"></${I}>
              `:"",s=e.fitText?y`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${a}
                ${ie(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${ss(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${k("input",l=>{Vf({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${ie(!!(e.showClearButton&&e.value),p`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${k("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${I.assign({icon:Df})}></${I}>
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
    `,events:{routeChange:Q()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&cs(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return p`
                <a href=${a} rel="noopener noreferrer" ${k("click",n)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:te,defineElementNoInputs:lp}=ls(),Y=te()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>y`
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
                ${k("click",i=>{(!e.router||cs(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new yr(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function jf(e,t){return e.entry.entryType===B.Root?!1:!!(e.entry.entryType===B.Page||ne(t,e.fullUrlBreadcrumbs.slice(0,-1))||ne(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ve=te()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>y`
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
            ${Y.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!jf(r,e.selectedPath))return;const n=y`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${Y.assign({router:e.router,route:{paths:[V.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Mr({"title-row":!0,selected:e.selectedPath?ne(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ie(et(r,B.ElementExample),p`
                                    <${I.assign({icon:Of})}></${I}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Y}>
                </li>
            `});return p`
            <${Y.assign({route:nt,router:e.router})}>
                <slot name=${we.NavHeader}>Book</slot>
            </${Y}>
            <ul>
                ${t}
            </ul>
        `}});async function Kf(e){await xn(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Bu(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Pe=te()({tagName:"book-error",styles:y`
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
    `,renderCallback({inputs:e}){return(D(e.message,"array")?e.message:[e.message]).map(r=>p`
                <p>${r}</p>
            `)}}),At=te()({tagName:"book-page-controls",events:{controlValueChange:Q()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>y`
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

        ${ir} {
            height: 24px;
            max-width: 128px;
        }

        ${I}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===z.Hidden)return"";const a=Wf(e.currentValues[n],o,s=>{const l=D(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return p`
                    <div class="control-wrapper">
                        ${ie(i===0,p`
                                <${I.assign({icon:Ff})}
                                    class="options-icon"
                                ></${I}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function Wf(e,t,r){return Ge(t,z.Hidden)?"":Ge(t,z.Checkbox)?p`
            <input
                type="checkbox"
                .value=${e}
                ${k("input",n=>{const o=ht(n,HTMLInputElement);r(o.checked)})}
            />
        `:Ge(t,z.Color)?p`
            <input
                type="color"
                .value=${e}
                ${k("input",n=>{const o=ht(n,HTMLInputElement);r(o.value)})}
            />
        `:Ge(t,z.Text)?p`
            <${ir.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${k(ir.events.valueChange,n=>{r(n.detail)})}
            ></${ir}>
        `:Ge(t,z.Number)?p`
            <input
                type="number"
                .value=${e}
                ${k("input",n=>{const o=ht(n,HTMLInputElement);r(o.value)})}
            />
        `:Ge(t,z.Dropdown)?p`
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
        `}const Fi=te()({tagName:"book-breadcrumbs",styles:y`
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
                <${Y.assign({route:{hash:void 0,search:void 0,paths:[V.Book,...a]},router:e.router})}>
                    ${r}
                </${Y}>
                ${s}
            `}):p`
                &nbsp;
            `}}),cn=te()({tagName:"book-breadcrumbs-bar",styles:y`
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
                    <${Fi.assign({currentRoute:e.currentRoute,router:e.router})}></${Fi}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${k("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await bn(200),n.value===o&&(n.value?t(new yr({paths:[V.Search,encodeURIComponent(n.value)]})):t(new yr(nt)))})}
            />
        `}}),Ui=te()({tagName:"book-entry-description",styles:y`
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
            `)}}),Vi=te()({tagName:"book-page-wrapper",styles:y`
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

        ${Y} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[V.Book,...e.pageNode.fullUrlBreadcrumbs],n=Ra(e.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Y.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Y}>
                    ${n?p`
                              <${Pe.assign({message:n.message})}></${Pe}>
                          `:p`
                              <${Ui.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Ui}>
                              <${At.assign({config:e.pageNode.entry.controls,currentValues:co(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${At}>
                          `}
                </div>
            </div>
        `}}),Zt=te()({tagName:"book-element-example-controls",styles:y`
        :host {
            display: flex;
            color: ${S["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[V.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${Y.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Y}>
        `}}),ji=Symbol("unset-internal-state"),Ki=te()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:ji},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Ra(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===ji&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${ie(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${Pe.assign({message:`${t.elementExampleNode.entry.title} failed: ${Ke(n)}`})}></${Pe}>
            `}},options:{allowPolymorphicState:!0}}),Wi=te()({tagName:"book-element-example-wrapper",styles:y`
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
                <${Zt.assign(xc(e,["currentPageControls"]))}></${Zt}>
                <${Ki.assign(e)}></${Ki}>
            </div>
        `}});function ol(e,t,r,n){const o=Sn(r,n),i=[];if(o){const a=ol(e,t,o,n);a&&i.push(a)}if(et(r,B.Page)&&!e.includes(r)){const a=co(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:ke(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Gf({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[p`
                No results
            `];const a=gn(e,1)?ol(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&gn(e,1)?p`
                  <${At.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${At}>
              `:"",l=rc(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(et(c,B.Page))return p`
                    <${Vi.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Vi}>
                `;if(et(c,B.ElementExample)){const d=co(o,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${Wi.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Wi}>
                `}else return et(c,B.Root)?"":p`
                    <${Pe.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Pe}>
                `});return[s,l].flat()}const Xe=te()({tagName:"book-entry-display",styles:y`
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

        ${cn} {
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
    `,events:{loadingRender:Q()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=_n(e.currentRoute.paths),a=Gf({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return p`
            <${cn.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${cn}>

            ${ie(e.showLoading,p`
                    <div
                        ${Qo(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${I.assign({icon:tl})}></${I}>
                    </div>
                    ${ie(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${we.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${Qo(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${we.Footer}></slot>
                `)}
        `}});function Yf(e,t,r){const n=Gi(e,t);if(n.length)return n;r(nt);const o=Gi(e,nt.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Gi(e,t){return e.filter(r=>Pu({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const un=le()({tagName:"element-book-app",events:{pathUpdate:Q()},stateInitStatic:{currentRoute:nt,router:void 0,loading:!0,colors:{config:void 0,theme:Oi(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:y`
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
    `,initCallback({host:e,state:t}){setTimeout(()=>{Yi(e,_n(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var u,d,f,h,m,g,E;t._debug&&console.info("rendering element-book app");function a(x){return{...e.currentRoute,...x}}function s(x){const C=a(x);return!ne(e.currentRoute,C)}function l(x){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,x].filter(ee).join(" - "))}function c(x){if(!s(x))return;const C=a(x);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!ne(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!ne(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const M=Qu(t.internalRouterConfig.basePath);n({router:M}),M.addRouteListener(!0,H=>{n({currentRoute:H})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const x={themeColor:t.themeColor};if(!ne(x,(f=e.colors)==null?void 0:f.config)){const M=Oi(x);n({colors:{config:x,theme:M}}),rd(r,M)}const C=t._debug??!1,A=Ku({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:$s(A.tree,{children:(m=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:t.globalValues})}}));const L=_n(e.currentRoute.paths),ce=(L?Ju({flattenedNodes:A.flattenedNodes,searchQuery:L}):void 0)??Yf(A.flattenedNodes,e.currentRoute.paths,c);l((g=ce[0])==null?void 0:g.entry.title);const K=(E=e.treeBasedControls)==null?void 0:E.controls;return K?(t._debug&&console.info({currentControls:K}),p`
                <div
                    class="root"
                    ${k(yr,async M=>{const H=M.detail;if(!s(H))return;if(n({loading:!0}),c(H),!(r.shadowRoot.querySelector(ve.tagName)instanceof ve))throw new Error(`Failed to find child '${ve.tagName}'`);Yi(r,L,e.currentRoute)})}
                    ${k(At.events.controlValueChange,M=>{if(!e.treeBasedControls)return;const H=Gu(K,M.detail.fullUrlBreadcrumbs,M.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:H}})})}
                >
                    <${ve.assign({flattenedNodes:A.flattenedNodes,router:e.router,selectedPath:L?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${we.NavHeader}
                            slot=${we.NavHeader}
                        ></slot>
                    </${ve}>
                    <${Xe.assign({controls:K,currentNodes:ce,currentRoute:e.currentRoute,debug:C,originalTree:A.tree,router:e.router,showLoading:e.loading})}
                        ${k(Xe.events.loadingRender,async M=>{await xn();const H=r.shadowRoot.querySelector(Xe.tagName);H?H.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Xe.tagName}' for scrolling.`),await xn(),n({loading:!M.detail})})}
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
            `}}});async function Yi(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ve.tagName);if(!(n instanceof ve))throw new Error(`Failed to find child '${ve.tagName}'`);await Kf(n)}var qf=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Xf(){return class extends Event{constructor(t,r){super(t,r),this.detail=r.detail}}}const Zf=globalThis.CustomEvent||Xf();function il(){return e=>{var t;return t=class extends Zf{constructor(n){super(e,n)}},qf(t,"TypedEventConstructor"),t.type=e,t}}globalThis&&globalThis.__setFunctionName;let Jf=class extends EventTarget{constructor(){super(...arguments),this.setupListeners=[]}getListenerCount(){return this.setupListeners.length}addEventListener(t,r,n){super.addEventListener(t,r,n),r&&this.setupListeners.push({type:t,callback:r,options:n})}dispatchEvent(t){return super.dispatchEvent(t)}removeEventListener(t,r,n){super.removeEventListener(t,r,n);const o=this.setupListeners.findIndex(i=>{if(i.type!==t)return!1;if(typeof n<"u"||typeof i.options<"u"){if(typeof n!=typeof i.options||typeof i.options=="boolean"&&typeof n=="boolean"&&n!==i.options)return!1;if(typeof i.options=="object"&&typeof n=="object"&&n.capture!==i.options.capture)return!1}return i.callback===r});this.setupListeners=oc(this.setupListeners,[o])}removeAllEventListeners(){this.setupListeners.forEach(t=>{super.removeEventListener(t.type,t.callback,t.options)}),this.setupListeners=[]}};class Qf extends il()("game-pipeline-pause"){}class eh extends il()("game-pipeline-framerate"){}const qi=Symbol("ignore");function Dn(e,t,r,n,o=!1,i=!1){const a=Object.entries(e.children).map(([c,u])=>{if(Array.isArray(t))return t.map((d,f)=>{const h=r==null?void 0:r[f];return Dn(e,d,h,n,!0)}).some(d=>d);{if(!u||!o&&(!t||!(c in t)))return!1;const d=t==null?void 0:t[c],f=r?r[c]:qi;return Dn(u,d,f,n,o,t&&c in t)}}),s=i||a.some(c=>c),l=e.listeners;if(l!=null&&l.size){const c=n.get(l);(o||r!==qi)&&(c?(c.dataValues.push(r),!c.certain&&s&&(c.certain=!0)):n.set(l,{dataValues:[r],isArray:o,certain:s}))}return s}async function th(e,t,r){const n=[],o=new Map;return Object.keys(t).length&&Dn({children:{root:e},listeners:void 0},{root:t},{root:r},o),o.forEach((i,a)=>{i.certain&&(a!=null&&a.size)&&n.push(Pa(()=>{const s=[];return a.forEach(l=>{if(!i.isArray&&i.dataValues.length>1)throw new Error("Found non array listener value of length more than 1");const c=i.isArray?i.dataValues:i.dataValues[0];s.push(l(c))}),s}))}),Promise.all(n)}class go extends Jf{constructor(t,r,n,o={}){var i,a,s,l;super(),this.gameModules=t,this.currentFramerate=0,this.framerateOperands={totalDuration:0,frameCount:0},this.isFrameExecuting=!1,this.currentOptions={framerateCalculationWait:{milliseconds:500}},this._loopIsPaused=!0,this.lastFrameCount=0,this.frameHistory=[],this.stateListeners={children:{},listeners:void 0},this.currentState=yc(r),this.currentExecutionContext=n,this.gameModuleIds=this.gameModules.map(c=>c.moduleId),this.internalOverrideOptions(o),(a=(i=this.currentOptions)==null?void 0:i.init)!=null&&a.allowDuplicateModuleNames||this.assertValidGameModules(),(l=(s=this.currentOptions)==null?void 0:s.init)!=null&&l.startLoopImmediately&&this.startPipelineLoop()}assertValidGameModules(){const t=[],r=new Set;if(this.gameModules.forEach(n=>{const o=n.moduleId.name;r.has(o)?t.push(o):r.add(o)}),t.length)throw new Error(`Duplicate modules provided to ${go.name}: ${t.join(", ")}`)}set loopIsPaused(t){this._loopIsPaused=t,this.dispatchEvent(new Qf({detail:t}))}get loopIsPaused(){return this._loopIsPaused}isPipelineLoopPaused(){return this.loopIsPaused}stopPipelineLoop(){return this.loopIsPaused?!1:(this.loopIsPaused=!0,!0)}startPipelineLoop(){return this.loopIsPaused?(this.loopIsPaused=!1,this.lastFrameTimestamp=performance.now(),this.runLoop(),!0):!1}runLoop(){window.requestAnimationFrame(t=>{this.loopIsPaused||Pa(()=>this.runLoop()),this.internallyTriggerSingleFrame(t)})}calculateFramerate(t){var r;this.framerateOperands.frameCount++,this.framerateOperands.totalDuration+=t,this.framerateOperands.totalDuration>=this.currentOptions.framerateCalculationWait.milliseconds&&(this.currentFramerate=Oe({number:this.framerateOperands.frameCount/this.framerateOperands.totalDuration*1e3,digits:1}),(r=this.currentOptions.debug)!=null&&r.enableWarningLogging&&this.currentOptions.debug.targetFramerate&&this.currentFramerate+1<this.currentOptions.debug.targetFramerate&&console.warn(`Framerate dropped to ${this.currentFramerate}`),this.dispatchEvent(new eh({detail:this.currentFramerate})),this.framerateOperands={frameCount:0,totalDuration:0})}destroy(){var t;this.stopPipelineLoop(),(t=this.currentOptions.init)!=null&&t.onDestroy&&this.currentOptions.init.onDestroy({gameState:this.currentState,executionContext:this.currentExecutionContext}),this.removeAllEventListeners(),this.removeAllStateListeners()}addEventListener(t,r,n){return super.addEventListener(t,r,n),()=>{super.removeEventListener(t,r,n)}}internalOverrideOptions(t){this.currentOptions=yt(this.currentOptions,t)}overrideOptions(t){if("init"in t)throw new Error("Cannot override init options after the GamePipeline has already been constructed.");this.internalOverrideOptions(t)}triggerSingleFrame(){return this.internallyTriggerSingleFrame(performance.now())}addWholeStateListener(t,r){return this.stateListeners.listeners||(this.stateListeners.listeners=new Set),this.stateListeners.listeners.add(r),t&&r(this.currentState),()=>this.removeWholeStateListener(r)}addStateListener(t,r,n){const o=r.reduce((i,a)=>{const s=i.children[a]||{children:{},listeners:void 0};return i.children[a]||(i.children[a]=s),s},this.stateListeners);return o.listeners||(o.listeners=new Set),o.listeners.add(n),t&&n(vn(this.currentState,r)),()=>this.removeStateListener(r,n)}removeAllStateListeners(){this.stateListeners={children:{},listeners:void 0}}removeWholeStateListener(t){var r;return(r=this.stateListeners.listeners)==null?void 0:r.delete(t)}removeStateListener(t,r){var n;try{return((n=t.reduce((i,a,s)=>{const l=i.children[a];if(!l)throw new Error(`Failed to find any listener children under key ${t.slice(0,s+1).join("->")}`);return l},this.stateListeners).listeners)==null?void 0:n.delete(r))??!1}catch{return!1}}update(t){this.updateInternally(t,!0)}updateInternally(t,r){t.stateUpdate&&(this.currentState=yt(this.currentState,t.stateUpdate),r&&this.triggerStateListeners([t.stateUpdate])),t.executionContextUpdate&&(this.currentExecutionContext={...this.currentExecutionContext,...t.executionContextUpdate})}triggerStateListeners(t){return th(this.stateListeners,yt(...t),this.currentState)}async internallyTriggerSingleFrame(t){var r,n;if(this.isFrameExecuting){(r=this.currentOptions.debug)!=null&&r.enableWarningLogging&&console.warn("frame skipped");return}this.isFrameExecuting=!0;try{const o=this.lastFrameTimestamp==null?0:t-this.lastFrameTimestamp;this.calculateFramerate(o);const i=[];if(this.lastFrameTimestamp=t,this.lastFrameCount++,await ac(this.gameModules,async s=>{const l={gameState:this.currentState,executionContext:this.currentExecutionContext,millisecondsSinceLastFrame:o},c=await s.runModule(l);c&&this.updateInternally(c,!1),i.push({fromModule:s.moduleId,stateUpdates:c==null?void 0:c.stateUpdate})}),(n=this.currentOptions.debug)!=null&&n.enableFrameHistory_Expensive){const s={orderedStateUpdates:i};this.frameHistory.push(s)}const a=i.map(s=>s.stateUpdates);return this.isFrameExecuting=!1,this.triggerStateListeners(a.filter(ee))}catch(o){this.isFrameExecuting=!1;const i=Lr(o);throw i.message=`Failed to render frame: ${Ke(i)}`,i}}}function rh(e,t){return e.filter((r,n)=>!t.includes(n))}function xr(e){return!!e}const nh={capitalizeFirstLetter:!1};function oh(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function ih(e,t){return t.capitalizeFirstLetter?oh(e):e}function ah(e,t=nh){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return ih(n,t)}var Xi;(function(e){e.Upper="upper",e.Lower="lower"})(Xi||(Xi={}));const sh=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function zr(e,t){return e?sh.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function lh(e){return e?e instanceof Error?e.message:zr(e,"message")?String(e.message):String(e):""}function ch(e){return e instanceof Error?e:new Error(lh(e))}function Zi(e){return!!e&&typeof e=="object"}function Nt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function On(e){return Nt(e).map(t=>e[t])}function Ji({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Qi="Failed to compare objects using JSON.stringify";function ea(e,t,r){return Ji({source:e,errorHandler(n){if(r)return"";throw n}})===Ji({source:t,errorHandler(n){if(r)return"";throw n}})}function al(e,t,r={}){try{return e===t?!0:Zi(e)&&Zi(t)?ea(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>al(e[o],t[o])):!1:ea(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=ch(n);throw o.message.startsWith(Qi)||(o.message=`${Qi}: ${o.message}`),o}}function uh(e,t){let r=!1;const n=Nt(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Nt(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}var N;(function(e){e.Keyboard="keyboard",e.Mouse="mouse",e.Gamepad="gamepad"})(N||(N={}));const Ot={gamepad1:0,gamepad2:1,gamepad3:2,gamepad4:3};function sl(e){return Object.values(Ot).includes(e)}const dh={mouse:"mouse",keyboard:"keyboard"},Se={...dh,...Ot},fh={0:N.Gamepad,1:N.Gamepad,2:N.Gamepad,3:N.Gamepad,keyboard:N.Keyboard,mouse:N.Mouse};var Sr;(function(e){e.Button="button",e.Axe="axe"})(Sr||(Sr={}));function Qe(e){return`button-${e}`}function _r(e){return`axe-${e}`}function hh(e){return{pressed:e.pressed,touched:e.touched,value:e.value}}function mh(e){if(!sl(e.index))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${e.index}'`);return{axes:e.axes,buttons:e.buttons.map(hh),connected:e.connected,id:e.id,index:e.index,mapping:e.mapping,serialized:!0,timestamp:e.timestamp}}function ph(){return window.navigator}function gh(e){const t=ph();return Array.from(zr(t,"webkitGetGamepads")?t.webkitGetGamepads():t.getGamepads()).filter(o=>!!o).map(o=>mh(o)).reduce((o,i)=>{const a=bh(i,e),s=i.index;return sl(s)?(o[s]={...i,...a},o):(console.warn(`ignoring gamepad index '${s}'`),o)},{})}function vh(e){const t={},r={deviceKey:e.index,deviceName:e.id,deviceType:N.Gamepad};return e.buttons.forEach((n,o)=>{if(n.value){const i=Qe(o);t[i]={...r,details:{inputType:Sr.Button,buttonDetails:n},inputName:i,inputValue:n.value}}}),e.axes.forEach((n,o)=>{if(n){const i=_r(o);t[i]={...r,details:{inputType:Sr.Axe},inputName:i,inputValue:n}}}),t}const ta=.01;function bh(e,t){const r=t[e.id],n=e.axes.map((i,a)=>{const s=(r==null?void 0:r[_r(a)])??ta;return Math.abs(i)<s?0:i}),o=e.buttons.map((i,a)=>{const s=(r==null?void 0:r[Qe(a)])??ta,l=Math.abs(i.value)<s?0:i.value;return{...i,value:l}});return{axes:n,buttons:o}}function yh(e){return uh(e,(t,r)=>({currentInputs:vh(r),deviceDetails:r,deviceName:r.id,deviceKey:r.index,deviceType:N.Gamepad}))}function ra(e){return On(e).map(n=>n==null?void 0:n.currentInputs).filter(xr).map(n=>On(n)).flat()}const na={deviceDetails:void 0,deviceKey:Se.keyboard,deviceName:"keyboard",deviceType:N.Keyboard},Jt={deviceDetails:void 0,deviceKey:Se.mouse,deviceName:"mouse",deviceType:N.Mouse};var pe;(function(e){e.NewDevicesAdded="new-devices-added",e.AllDevicesUpdated="all-devices-updated",e.CurrentInputsChanged="current-inputs-updated",e.DevicesRemoved="devices-removed"})(pe||(pe={}));var wh=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function $h(){return class extends Event{constructor(t,r){super(t,r),this.detail=r.detail}}}const Eh=globalThis.CustomEvent||$h();function xh(){return e=>{var t;return t=class extends Eh{constructor(n){super(e,n)}},wh(t,"TypedEventConstructor"),t.type=e,t}}globalThis&&globalThis.__setFunctionName;class Sh extends EventTarget{constructor(){super(...arguments),this.setupListeners=[]}getListenerCount(){return this.setupListeners.length}addEventListener(t,r,n){super.addEventListener(t,r,n),r&&this.setupListeners.push({type:t,callback:r,options:n})}dispatchEvent(t){return super.dispatchEvent(t)}removeEventListener(t,r,n){super.removeEventListener(t,r,n);const o=this.setupListeners.findIndex(i=>{if(i.type!==t)return!1;if(typeof n<"u"||typeof i.options<"u"){if(typeof n!=typeof i.options||typeof i.options=="boolean"&&typeof n=="boolean"&&n!==i.options)return!1;if(typeof i.options=="object"&&typeof n=="object"&&n.capture!==i.options.capture)return!1}return i.callback===r});this.setupListeners=rh(this.setupListeners,[o])}removeAllEventListeners(){this.setupListeners.forEach(t=>{super.removeEventListener(t.type,t.callback,t.options)}),this.setupListeners=[]}}var _h=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Fr(){return(e,t)=>{var r;const n=ah(e,{capitalizeFirstLetter:!0}),o=(r=class extends xh()(e){constructor(){super(...arguments),this.eventType=e}static constructIfDataIsNew(i,...a){const s=o.getNewData(...a);if(s)return new o({detail:{timestamp:i,inputs:s}})}},_h(r,"TimedEventConstructor"),r.getNewData=t,r);return Object.defineProperty(o,"name",{value:n,writable:!0}),o}}function Ch(...[e,t]){return t}const Th=Fr()(pe.AllDevicesUpdated,Ch);function oa(e,t){return e.deviceKey===t.deviceKey&&e.inputName===t.inputName&&e.inputName===t.inputName&&e.inputValue===t.inputValue}function kh(...[e,t]){const r=ra(t),n=e?ra(e):[];if(!al(n,r)){const o=r.filter(a=>!n.find(s=>oa(s,a))),i=n.filter(a=>!r.find(s=>oa(s,a)));return{newInputs:o,removedInputs:i,allCurrentInputs:r}}}const Mh=Fr()(pe.CurrentInputsChanged,kh);function Lh(...[e,t]){if(!e)return[];const r=Nt(e).filter(n=>!zr(t,n));if(r.length)return r.map(n=>e[n]).filter(xr)}const Ah=Fr()(pe.DevicesRemoved,Lh);function Nh(...[e,t]){if(!e)return On(t).filter(xr);const r=Nt(t).filter(n=>!zr(e,n));if(r.length)return r.map(n=>t[n]).filter(xr)}const Ph=Fr()(pe.NewDevicesAdded,Nh),ll=[Th,Ph,Ah,Mh];Object.fromEntries(ll.map(e=>[e.type,e]));class Rh extends Sh{constructor(t={}){super(),this.currentKeyboardInputs={},this.currentMouseInputs={},this.gamepadDeadZoneSettings={},this.loopIsRunning=!1,this.currentLoopIndex=-1,this.lastEventDetails={},t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),this.attachWindowListeners(t),this.readAllDevices(),t.startLoopImmediately&&this.startPollingLoop()}attachWindowListeners(t){window.addEventListener("keydown",r=>{const n=Qe(r.key);if(this.currentKeyboardInputs.hasOwnProperty(n))return;const o={deviceType:N.Keyboard,details:{keyboardEvent:r},deviceKey:Se.keyboard,deviceName:na.deviceName,inputName:n,inputValue:1};this.currentKeyboardInputs[n]=o}),window.addEventListener("keyup",r=>{delete this.currentKeyboardInputs[Qe(r.key)]}),window.addEventListener("mousedown",r=>{const n=Qe(r.button);this.currentMouseInputs.hasOwnProperty(n)||(this.currentMouseInputs[n]={deviceType:N.Mouse,details:{mouseEvent:r},deviceName:Jt.deviceName,deviceKey:Se.mouse,inputName:n,inputValue:1})}),window.addEventListener("mouseup",r=>{delete this.currentMouseInputs[Qe(r.button)]}),t.disableMouseMovement||window.addEventListener("mousemove",r=>{const n=_r("x"),o=_r("y");this.currentMouseInputs[n]={deviceType:N.Mouse,details:{mouseEvent:r},deviceName:Jt.deviceName,deviceKey:Se.mouse,inputName:n,inputValue:r.clientX},this.currentMouseInputs[o]={deviceType:N.Mouse,details:{mouseEvent:r},deviceName:Jt.deviceName,deviceKey:Se.mouse,inputName:o,inputValue:r.clientY}})}runPollingLoop(t,r){this.loopIsRunning&&this.currentLoopIndex===t&&(this.readAllDevices(this.gamepadDeadZoneSettings,r),requestAnimationFrame(n=>{this.runPollingLoop(t,n)}))}fireEvents(t,r){ll.forEach(n=>{const o=n.constructIfDataIsNew(t,this.lastReadInputDevices,r);o&&(this.lastEventDetails[o.type]={constructor:n,constructorInputs:[t,this.lastReadInputDevices,r]},this.dispatchEvent(o))})}getCurrentDeviceValues(t){const r=gh(t),n=yh(r);return{[Se.keyboard]:{...na,currentInputs:{...this.currentKeyboardInputs}},[Se.mouse]:{...Jt,currentInputs:{...this.currentMouseInputs}},...n}}addEventListenerAndFireWithLatest(t,r,n){if(this.addEventListener(t,r,n),!r)return;const o=this.lastEventDetails[t],i=typeof r=="function"?r:r.handleEvent;if(o){const a=o.constructor.constructIfDataIsNew(...o.constructorInputs);if(!a)throw new Error(`Got input device event constructor args for event type '${t}' but the constructor did not produce an event.`);i(a)}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}readAllDevices(t=this.gamepadDeadZoneSettings,r=performance.now()){const n=this.getCurrentDeviceValues(t);return this.fireEvents(r,n),this.lastReadInputDevices=n,n}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}function Ih(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var ot=Ih();function Bh(){try{if(!ot||!ot.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function vo(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const v=Promise;function T(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function Je(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function Ee(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function bo(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const Hn="local-forage-detect-blob-support";let Qt;const J={},Dh=Object.prototype.toString,Ht="readonly",Ur="readwrite";function Oh(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function Hh(e){return new v(function(t){var r=e.transaction(Hn,Ur),n=vo([""]);r.objectStore(Hn).put(n,"key"),r.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},r.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function zh(e){return typeof Qt=="boolean"?v.resolve(Qt):Hh(e).then(function(t){return Qt=t,Qt})}function Cr(e){var t=J[e.name],r={};r.promise=new v(function(n,o){r.resolve=n,r.reject=o}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function zn(e){var t=J[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Fn(e,t){var r=J[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function cl(e,t){return new v(function(r,n){if(J[e.name]=J[e.name]||hl(),e.db)if(t)Cr(e),e.db.close();else return r(e.db);var o=[e.name];t&&o.push(e.version);var i=ot.open.apply(ot,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(Hn)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),i.onerror=function(a){a.preventDefault(),n(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},r(a),zn(e)}})}function yo(e){return cl(e,!1)}function wo(e){return cl(e,!0)}function ul(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function Fh(e){return new v(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},n.readAsBinaryString(e)})}function dl(e){var t=Oh(atob(e.data));return vo([t],{type:e.type})}function fl(e){return e&&e.__local_forage_encoded_blob}function Uh(e){var t=this,r=t._initReady().then(function(){var n=J[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return Je(r,e,e),r}function Vh(e){Cr(e);for(var t=J[e.name],r=t.forages,n=0;n<r.length;n++){const o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,yo(e).then(o=>(e.db=o,ul(e)?wo(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=o}).catch(o=>{throw Fn(e,o),o})}function xe(e,t,r,n){n===void 0&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(i){if(n>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return v.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),wo(e)}).then(()=>Vh(e).then(function(){xe(e,t,r,n-1)})).catch(r);r(i)}}function hl(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function jh(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=J[r.name];o||(o=hl(),J[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=Uh);var i=[];function a(){return v.resolve()}for(var s=0;s<o.forages.length;s++){var l=o.forages[s];l!==t&&i.push(l._initReady().catch(a))}var c=o.forages.slice(0);return v.all(i).then(function(){return r.db=o.db,yo(r)}).then(function(u){return r.db=u,ul(r,t._defaultConfig.version)?wo(r):u}).then(function(u){r.db=o.db=u,t._dbInfo=r;for(var d=0;d<c.length;d++){var f=c[d];f!==t&&(f._dbInfo.db=r.db,f._dbInfo.version=r.version)}})}function Kh(e,t){var r=this;e=Ee(e);var n=new v(function(o,i){r.ready().then(function(){xe(r._dbInfo,Ht,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var u=c.result;u===void 0&&(u=null),fl(u)&&(u=dl(u)),o(u)},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return T(n,t),n}function Wh(e,t){var r=this,n=new v(function(o,i){r.ready().then(function(){xe(r._dbInfo,Ht,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.openCursor(),u=1;c.onsuccess=function(){var d=c.result;if(d){var f=d.value;fl(f)&&(f=dl(f));var h=e(f,d.key,u++);h!==void 0?o(h):d.continue()}else o()},c.onerror=function(){i(c.error)}}catch(d){i(d)}})}).catch(i)});return T(n,t),n}function Gh(e,t,r){var n=this;e=Ee(e);var o=new v(function(i,a){var s;n.ready().then(function(){return s=n._dbInfo,Dh.call(t)==="[object Blob]"?zh(s.db).then(function(l){return l?t:Fh(t)}):t}).then(function(l){xe(n._dbInfo,Ur,function(c,u){if(c)return a(c);try{var d=u.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var f=d.put(l,e);u.oncomplete=function(){l===void 0&&(l=null),i(l)},u.onabort=u.onerror=function(){var h=f.error?f.error:f.transaction.error;a(h)}}catch(h){a(h)}})}).catch(a)});return T(o,r),o}function Yh(e,t){var r=this;e=Ee(e);var n=new v(function(o,i){r.ready().then(function(){xe(r._dbInfo,Ur,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var u=c.error?c.error:c.transaction.error;i(u)}}catch(u){i(u)}})}).catch(i)});return T(n,t),n}function qh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){xe(t._dbInfo,Ur,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){n()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return T(r,e),r}function Xh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){xe(t._dbInfo,Ht,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){o(l.error)}}catch(c){o(c)}})}).catch(o)});return T(r,e),r}function Zh(e,t){var r=this,n=new v(function(o,i){if(e<0){o(null);return}r.ready().then(function(){xe(r._dbInfo,Ht,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=!1,u=l.openKeyCursor();u.onsuccess=function(){var d=u.result;if(!d){o(null);return}e===0||c?o(d.key):(c=!0,d.advance(e))},u.onerror=function(){i(u.error)}}catch(d){i(d)}})}).catch(i)});return T(n,t),n}function Jh(e){var t=this,r=new v(function(n,o){t.ready().then(function(){xe(t._dbInfo,Ht,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var u=l.result;if(!u){n(c);return}c.push(u.key),u.continue()},l.onerror=function(){o(l.error)}}catch(u){o(u)}})}).catch(o)});return T(r,e),r}function Qh(e,t){t=bo.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;if(!e.name)o=v.reject("Invalid arguments");else{const a=e.name===r.name&&n._dbInfo.db?v.resolve(n._dbInfo.db):yo(e).then(s=>{const l=J[e.name],c=l.forages;l.db=s;for(var u=0;u<c.length;u++)c[u]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;Cr(e);const c=J[e.name],u=c.forages;s.close();for(let f=0;f<u.length;f++){const h=u[f];h._dbInfo.db=null,h._dbInfo.version=l}return new v((f,h)=>{const m=ot.open(e.name,l);m.onerror=g=>{m.result.close(),h(g)},m.onupgradeneeded=()=>{var g=m.result;g.deleteObjectStore(e.storeName)},m.onsuccess=()=>{const g=m.result;g.close(),f(g)}}).then(f=>{c.db=f;for(let h=0;h<u.length;h++){const m=u[h];m._dbInfo.db=f,zn(m._dbInfo)}}).catch(f=>{throw(Fn(e,f)||v.resolve()).catch(()=>{}),f})}):o=a.then(s=>{Cr(e);const l=J[e.name],c=l.forages;s.close();for(var u=0;u<c.length;u++){const f=c[u];f._dbInfo.db=null}return new v((f,h)=>{var m=ot.deleteDatabase(e.name);m.onerror=()=>{const g=m.result;g&&g.close(),h(m.error)},m.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},m.onsuccess=()=>{const g=m.result;g&&g.close(),f(g)}}).then(f=>{l.db=f;for(var h=0;h<c.length;h++){const m=c[h];zn(m._dbInfo)}}).catch(f=>{throw(Fn(e,f)||v.resolve()).catch(()=>{}),f})})}return T(o,t),o}var em={_driver:"asyncStorage",_initStorage:jh,_support:Bh(),iterate:Wh,getItem:Kh,setItem:Gh,removeItem:Yh,clear:qh,length:Xh,key:Zh,keys:Jh,dropInstance:Qh};function tm(){return typeof openDatabase=="function"}var _e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",rm="~~local_forage_type~",ia=/^~~local_forage_type~([^~]+)~/,Tr="__lfsc__:",Un=Tr.length,$o="arbf",Vn="blob",ml="si08",pl="ui08",gl="uic8",vl="si16",bl="si32",yl="ur16",wl="ui32",$l="fl32",El="fl64",aa=Un+$o.length,sa=Object.prototype.toString;function xl(e){var t=e.length*.75,r=e.length,n,o=0,i,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<r;n+=4)i=_e.indexOf(e[n]),a=_e.indexOf(e[n+1]),s=_e.indexOf(e[n+2]),l=_e.indexOf(e[n+3]),u[o++]=i<<2|a>>4,u[o++]=(a&15)<<4|s>>2,u[o++]=(s&3)<<6|l&63;return c}function jn(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=_e[t[n]>>2],r+=_e[(t[n]&3)<<4|t[n+1]>>4],r+=_e[(t[n+1]&15)<<2|t[n+2]>>6],r+=_e[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function nm(e,t){var r="";if(e&&(r=sa.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&sa.call(e.buffer)==="[object ArrayBuffer]")){var n,o=Tr;e instanceof ArrayBuffer?(n=e,o+=$o):(n=e.buffer,r==="[object Int8Array]"?o+=ml:r==="[object Uint8Array]"?o+=pl:r==="[object Uint8ClampedArray]"?o+=gl:r==="[object Int16Array]"?o+=vl:r==="[object Uint16Array]"?o+=yl:r==="[object Int32Array]"?o+=bl:r==="[object Uint32Array]"?o+=wl:r==="[object Float32Array]"?o+=$l:r==="[object Float64Array]"?o+=El:t(new Error("Failed to get type for BinaryArray"))),t(o+jn(n))}else if(r==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=rm+e.type+"~"+jn(this.result);t(Tr+Vn+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function om(e){if(e.substring(0,Un)!==Tr)return JSON.parse(e);var t=e.substring(aa),r=e.substring(Un,aa),n;if(r===Vn&&ia.test(t)){var o=t.match(ia);n=o[1],t=t.substring(o[0].length)}var i=xl(t);switch(r){case $o:return i;case Vn:return vo([i],{type:n});case ml:return new Int8Array(i);case pl:return new Uint8Array(i);case gl:return new Uint8ClampedArray(i);case vl:return new Int16Array(i);case yl:return new Uint16Array(i);case bl:return new Int32Array(i);case wl:return new Uint32Array(i);case $l:return new Float32Array(i);case El:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}var Eo={serialize:nm,deserialize:om,stringToBuffer:xl,bufferToString:jn};function Sl(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function im(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var o=new v(function(i,a){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(s){return a(s)}r.db.transaction(function(s){Sl(s,r,function(){t._dbInfo=r,i()},function(l,c){a(c)})},a)});return r.serializer=Eo,o}function Ie(e,t,r,n,o,i){e.executeSql(r,n,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?i(l,s):Sl(l,t,function(){l.executeSql(r,n,o,i)},i)},i):i(a,s)},i)}function am(e,t){var r=this;e=Ee(e);var n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Ie(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var u=c.rows.length?c.rows.item(0).value:null;u&&(u=a.serializer.deserialize(u)),o(u)},function(l,c){i(c)})})}).catch(i)});return T(n,t),n}function sm(e,t){var r=this,n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Ie(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var u=c.rows,d=u.length,f=0;f<d;f++){var h=u.item(f),m=h.value;if(m&&(m=a.serializer.deserialize(m)),m=e(m,h.key,f+1),m!==void 0){o(m);return}}o()},function(l,c){i(c)})})}).catch(i)});return T(n,t),n}function _l(e,t,r,n){var o=this;e=Ee(e);var i=new v(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var l=t,c=o._dbInfo;c.serializer.serialize(t,function(u,d){d?s(d):c.db.transaction(function(f){Ie(f,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){a(l)},function(h,m){s(m)})},function(f){if(f.code===f.QUOTA_ERR){if(n>0){a(_l.apply(o,[e,l,r,n-1]));return}s(f)}})})}).catch(s)});return T(i,r),i}function lm(e,t,r){return _l.apply(this,[e,t,r,1])}function cm(e,t){var r=this;e=Ee(e);var n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Ie(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(l,c){i(c)})})}).catch(i)});return T(n,t),n}function um(e){var t=this,r=new v(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Ie(a,i,`DELETE FROM ${i.storeName}`,[],function(){n()},function(s,l){o(l)})})}).catch(o)});return T(r,e),r}function dm(e){var t=this,r=new v(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Ie(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,l){var c=l.rows.item(0).c;n(c)},function(s,l){o(l)})})}).catch(o)});return T(r,e),r}function fm(e,t){var r=this,n=new v(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Ie(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var u=c.rows.length?c.rows.item(0).key:null;o(u)},function(l,c){i(c)})})}).catch(i)});return T(n,t),n}function hm(e){var t=this,r=new v(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Ie(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,l){for(var c=[],u=0;u<l.rows.length;u++)c.push(l.rows.item(u).key);n(c)},function(s,l){o(l)})})}).catch(o)});return T(r,e),r}function mm(e){return new v(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){r(i)})},function(n){r(n)})})}function pm(e,t){t=bo.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;return e.name?o=new v(function(i){var a;e.name===r.name?a=n._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(mm(a))}).then(function(i){return new v(function(a,s){i.db.transaction(function(l){function c(h){return new v(function(m,g){l.executeSql(`DROP TABLE IF EXISTS ${h}`,[],function(){m()},function(E,x){g(x)})})}for(var u=[],d=0,f=i.storeNames.length;d<f;d++)u.push(c(i.storeNames[d]));v.all(u).then(function(){a()}).catch(function(h){s(h)})},function(l){s(l)})})}):o=v.reject("Invalid arguments"),T(o,t),o}var gm={_driver:"webSQLStorage",_initStorage:im,_support:tm(),iterate:sm,getItem:am,setItem:lm,removeItem:cm,clear:um,length:dm,key:fm,keys:hm,dropInstance:pm};function vm(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Cl(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function bm(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function ym(){return!bm()||localStorage.length>0}function wm(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=Cl(e,t._defaultConfig),ym()?(t._dbInfo=r,r.serializer=Eo,v.resolve()):v.reject()}function $m(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(n)===0&&localStorage.removeItem(i)}});return T(r,e),r}function Em(e,t){var r=this;e=Ee(e);var n=r.ready().then(function(){var o=r._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return T(n,t),n}function xm(e,t){var r=this,n=r.ready().then(function(){for(var o=r._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,l=1,c=0;c<s;c++){var u=localStorage.key(c);if(u.indexOf(i)===0){var d=localStorage.getItem(u);if(d&&(d=o.serializer.deserialize(d)),d=e(d,u.substring(a),l++),d!==void 0)return d}}});return T(n,t),n}function Sm(e,t){var r=this,n=r.ready().then(function(){var o=r._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return T(n,t),n}function _m(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(n.keyPrefix)===0&&i.push(s.substring(n.keyPrefix.length))}return i});return T(r,e),r}function Cm(e){var t=this,r=t.keys().then(function(n){return n.length});return T(r,e),r}function Tm(e,t){var r=this;e=Ee(e);var n=r.ready().then(function(){var o=r._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return T(n,t),n}function km(e,t,r){var n=this;e=Ee(e);var o=n.ready().then(function(){t===void 0&&(t=null);var i=t;return new v(function(a,s){var l=n._dbInfo;l.serializer.serialize(t,function(c,u){if(u)s(u);else try{localStorage.setItem(l.keyPrefix+e,c),a(i)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(d),s(d)}})})});return T(o,r),o}function Mm(e,t){if(t=bo.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,o;return e.name?o=new v(function(i){e.storeName?i(Cl(e,n._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=v.reject("Invalid arguments"),T(o,t),o}var Lm={_driver:"localStorageWrapper",_initStorage:wm,_support:vm(),iterate:xm,getItem:Em,setItem:km,removeItem:Tm,clear:$m,length:Cm,key:Sm,keys:_m,dropInstance:Mm};const Am=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),Nm=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(Am(e[n],t))return!0;n++}return!1},Tl=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},ft={},la={},tt={INDEXEDDB:em,WEBSQL:gm,LOCALSTORAGE:Lm},Pm=[tt.INDEXEDDB._driver,tt.WEBSQL._driver,tt.LOCALSTORAGE._driver],ar=["dropInstance"],dn=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(ar),Rm={description:"",driver:Pm.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Im(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function fn(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(Tl(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class xo{constructor(t){for(let r in tt)if(tt.hasOwnProperty(r)){const n=tt[r],o=n._driver;this[r]=o,ft[o]||this.defineDriver(n)}this._defaultConfig=fn({},Rm),this._config=fn({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const o=new v(function(i,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=dn.concat("_initStorage");for(let f=0,h=c.length;f<h;f++){const m=c[f];if((!Nm(ar,m)||t[m])&&typeof t[m]!="function"){a(l);return}}(function(){const f=function(h){return function(){const m=new Error(`Method ${h} is not implemented by the current driver`),g=v.reject(m);return T(g,arguments[arguments.length-1]),g}};for(let h=0,m=ar.length;h<m;h++){const g=ar[h];t[g]||(t[g]=f(g))}})();const d=function(f){ft[s]&&console.info(`Redefining LocalForage driver: ${s}`),ft[s]=t,la[s]=f,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,a):d(!!t._support):d(!0)}catch(s){a(s)}});return Je(o,r,n),o}driver(){return this._driver||null}getDriver(t,r,n){const o=ft[t]?v.resolve(ft[t]):v.reject(new Error("Driver not found."));return Je(o,r,n),o}getSerializer(t){const r=v.resolve(Eo);return Je(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return Je(n,t,t),n}setDriver(t,r,n){const o=this;Tl(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(u){return o._extend(u),a(),o._ready=o._initStorage(o._config),o._ready}function l(u){return function(){let d=0;function f(){for(;d<u.length;){let m=u[d];return d++,o._dbInfo=null,o._ready=null,o.getDriver(m).then(s).catch(f)}a();const h=new Error("No available storage method found.");return o._driverSet=v.reject(h),o._driverSet}return f()}}const c=this._driverSet!==null?this._driverSet.catch(()=>v.resolve()):v.resolve();return this._driverSet=c.then(()=>{const u=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(u).then(d=>{o._driver=d._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=l(i)})}).catch(()=>{a();const u=new Error("No available storage method found.");return o._driverSet=v.reject(u),o._driverSet}),Je(this._driverSet,r,n),this._driverSet}supports(t){return!!la[t]}_extend(t){fn(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,o=t.length;n<o;n++){const i=t[n];this.supports(i)&&r.push(i)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=dn.length;t<r;t++)Im(this,dn[t])}createInstance(t){return new xo(t)}}const Bm=new xo,Kn=Bm;Kn.createInstance({name:"forward-game"});const ca="forward-game-v1-save",Dm={async loadState(){return await Kn.getItem(ca)},async saveState(e){Kn.setItem(ca,e)}};function Om(e){return{moduleId:{name:"save game",version:1},async runModule({gameState:r,executionContext:n}){const o=n.lastTimeSaved.milliseconds<Date.now()-r.saveInterval.milliseconds||r.saveNextFrame;if(r.initialLoadAttempted){if(o)try{return await n.saveGameAccess.saveState(Yo(r,e)),{executionContextChange:{lastTimeSaved:{milliseconds:Date.now()}},stateUpdate:{saveNextFrame:!1}}}catch(i){console.error("Failed to save game state",i)}}else try{const i=await n.saveGameAccess.loadState();return console.info("Loading initial state",i),i?{initialLoadAttempted:!0,stateUpdate:{...Yo(i,e),initialLoadAttempted:!0}}:{stateUpdate:{initialLoadAttempted:!0}}}catch(i){return console.error("Failed to load saved game state",i),{stateUpdate:{initialLoadAttempted:!0}}}}}}var pt=(e=>(e.Positive="positive",e.Negative="negative",e))(pt||{});function Wn(e){return e<0?"negative":"positive"}const Hm={moduleId:{name:"map inputs to actions",version:1},runModule({gameState:e}){return{stateUpdate:{currentActions:e.currentInputs.reduce((r,n)=>{var s;const o=(s=e.actionBindings[n.deviceKey])==null?void 0:s[n.inputName];if(!o||!n.inputValue)return r;const i=Wn(n.inputValue),a=o[i];return a&&r.push(...a.map(l=>{const c=Wn(n.inputValue),u=e.currentActions.find(d=>d.actionName===l&&d.direction===c);return{actionName:l,value:n.inputValue,direction:c,frameCount:((u==null?void 0:u.frameCount)||0)+1}})),r},[])}}}};var kl=(e=>(e.Up="up",e.Down="down",e.Left="left",e.Right="right",e.Pause="pause",e))(kl||{});const zm={moduleId:{name:"perform-actions",version:1},runModule({gameState:e,millisecondsSinceLastFrame:t}){const r=Um(e,t);if(r)return{stateUpdate:r}}},Fm=.24;function Um(e,t){if(e.haveWon)return;const r=Fm*t;let n=0,o=0,i;if(e.currentActions.forEach(c=>{if(Oa(c.actionName,kl))c.actionName==="down"?n+=Oe({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="up"?n-=Oe({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="right"?o+=Oe({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="left"?o-=Oe({number:Math.min(c.value,1)*r,digits:1}):c.actionName==="pause"&&c.frameCount===1&&(i=!e.isPaused);else return}),o=Vo({value:o,max:r,min:-1*r}),n=Vo({value:n,max:r,min:-1*r}),o&&n){const c=Math.sqrt(Math.pow(o,2)+Math.pow(n,2));c>r&&(n=n*(r/c),o=o*(r/c))}const a=o||n,s=[!e.isPaused&&a&&{playerPosition:{x:Oe({number:e.playerPosition.x+o,digits:2}),y:Oe({number:e.playerPosition.y+n,digits:2})}},i!==void 0&&{isPaused:i}].filter(ee);return s.length?yt(...s):void 0}const Vm={moduleId:{name:"read inputs",version:1},runModule({executionContext:e,gameState:t}){const r=jo(e.inputHandler.readAllDevices(t.deadZoneSettings)).filter(ee),n=r.map(s=>({deviceKey:s.deviceKey,deviceName:s.deviceName,deviceType:s.deviceType})),o=!ne(t.currentDevices,n),i=r.map(s=>jo(s.currentInputs).map(l=>({deviceKey:l.deviceKey,inputName:l.inputName,inputValue:l.inputValue}))).flat(),a=!ne(t.currentInputs,i);if(!(!a&&!o))return{stateUpdate:{...o?{currentDevices:n}:{},...a?{currentInputs:i}:{}}}}};function jm({startImmediately:e,delay:t}){const r=[Vm,Hm,zm,Om(["deadZoneSettings","actionBindings","saveInterval"])],n=new go(r,{currentActions:[],currentDevices:[],currentInputs:[],deadZoneSettings:{},actionBindings:{},isPaused:!0,saveInterval:{milliseconds:1e4},playerPosition:{x:0,y:0},haveWon:!1,initialLoadAttempted:!1,saveNextFrame:!1},{inputHandler:new Rh,lastTimeSaved:{milliseconds:Date.now()},saveGameAccess:Dm},{init:{startLoopImmediately:t?!1:e}});return e&&(t!=null&&t.milliseconds)&&setInterval(()=>{n.triggerSingleFrame()},t.milliseconds),n}const Ml=Ru()({parent:void 0,title:"elements"}),Km=new Set(["mouse"]);function Ll(e){return Km.has(e)}const ua=Iu(["red","orange","gold","yellow","lime","green","cyan","blue","purple","magenta"]),da={milliseconds:700},Fe=le()({tagName:"vir-glow-animation",styles:y`
        :host {
            display: inline-flex;
        }
    `,stateInitStatic:{lastTimestamp:0,colorIndex:0},renderCallback({inputs:e,host:t,state:r,updateState:n}){const o=Date.now()-da.milliseconds,i=e.animation&&e.animation.timestamp>o?e.animation:void 0;i&&n({colorIndex:gc({min:0,max:ua.length-1,value:r.colorIndex+1})});const a=ua[r.colorIndex];if(!a)throw new Error("Exceeded colors array size somehow.");return i&&i.timestamp!==r.lastTimestamp&&a!=null&&(t.getAnimations().forEach(s=>s.cancel()),t.animate([{filter:`drop-shadow(0 0 6px ${a}) drop-shadow(0 0 6px ${a})`},{filter:`drop-shadow(0 0 0 ${a}) drop-shadow(0 0 0 ${a})`}],{duration:da.milliseconds/2,iterations:1}),n({lastTimestamp:i.timestamp})),p`
            <slot></slot>
        `}});var zt=(e=>(e.Large="large",e.Inline="inline",e))(zt||{});const Wm={[N.Gamepad]:"🎮",[N.Keyboard]:"⌨️",[N.Mouse]:"🖱","Add Device":"➕"},Gm={[N.Keyboard]:"kb",[N.Mouse]:"m","Add Device":"add"},Re=le()({tagName:"vir-device-display",hostClasses:{"vir-device-display-large":({inputs:e})=>e.size==="large","vir-device-display-inline":({inputs:e})=>e.size==="inline"},styles:({hostClasses:e})=>y`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        ${e["vir-device-display-large"].selector} .device-icon {
            font-size: 3em;
        }
    `,initCallback({inputs:e,state:t,updateState:r}){const n=e.inputHandler;if(!t.removeListeners&&n&&e.animated){let o=function(i){i.detail.inputs.newInputs.some(s=>s.deviceKey===e.deviceKey)&&r({animation:{timestamp:Date.now()}})};n.addEventListener(pe.CurrentInputsChanged,o),r({removeListeners(){n.removeEventListener(pe.CurrentInputsChanged,o)}})}},stateInitStatic:{animation:void 0,removeListeners:void 0},cleanupCallback({state:e}){var t;(t=e.removeListeners)==null||t.call(e)},renderCallback({inputs:e,state:t}){const r=e.deviceKey==null?"Add Device":fh[e.deviceKey],n=e.displayShortKey&&Gm[r]||(e.deviceKey??r);return p`
            <${Fe.assign({animation:t.animation})}>
                <span title=${r} class="device-icon">${Wm[r]}</span>
            </${Fe}>
            <span>${n}</span>
        `}}),Al=52,fa=le()({tagName:"vir-single-binding-v1",styles:y`
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
            min-height: ${Al}px;
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
        `}});function Ym({requiredActionNames:e,bindings:t}){const r=Object.fromEntries(e.map(n=>[n,[]]));return O(t).forEach(n=>{const o=t[n];o&&Object.keys(o).forEach(i=>{const a=o[i];a&&O(a).forEach(s=>{try{const l=a[s];if(!l)return;l.forEach(c=>{const u=r[c];u&&u.push({deviceKey:n,direction:s,inputName:i})})}catch(l){debugger;throw l}})})}),r}const ue=le()({tagName:"vir-bindings-table-v1",styles:y`
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
            height: ${Al}px;
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
    `,events:{removeBinding:Q(),listenForAction:Q()},renderCallback({inputs:e,dispatch:t,events:r}){const n=Ym(e),o=e.requiredActionNames.map(i=>{const a=[...(n[i]||[]).filter(ee),void 0].map(s=>p`
                    <${fa.assign({binding:s})}
                        class=${Mr({"add-binding":!s})}
                        ${k("click",()=>{t(s?new r.removeBinding({actionName:i,...s}):new r.listenForAction({actionName:i}))})}
                    ></${fa}>
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
        `}});function qm(e){return[...e.filter(t=>!Ll(t.deviceKey))].sort((t,r)=>typeof t.deviceKey!="number"?-1:typeof r.deviceKey!="number"?1:t.deviceKey-r.deviceKey)}const ha=le()({tagName:"vir-device-list-v1",styles:y`
        :host {
            display: flex;
            gap: 32px;
        }
    `,renderCallback({inputs:e}){return qm(e.devices).map(n=>p`
                <${Re.assign({animated:!0,deviceKey:n.deviceKey,displayShortKey:!1,size:zt.Large,inputHandler:e.inputHandler})}></${Re}>
            `)}}),hn=le()({tagName:"vir-assign-controls-v1",styles:y`
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
    `,events:{assignmentDone:Q()},stateInitStatic:{listeningForAction:void 0,currentInputDevices:[],removeInputListeners:void 0,currentBindings:{}},initCallback:({inputs:e,state:t,updateState:r})=>{if(!t.removeInputListeners){let n=function(a){var c,u,d;const s=a.detail.inputs.newInputs[0],l=(c=t.listeningForAction)==null?void 0:c.actionName;if(l&&s&&!Ll(s.deviceKey)){r({listeningForAction:void 0});const f=Wn(s.inputValue),h=((d=(u=e.gamePipeline.currentState.actionBindings[s.deviceKey])==null?void 0:u[s.inputName])==null?void 0:d[f])??[];if(h.includes(l))return;e.gamePipeline.update({stateUpdate:{saveNextFrame:!0,actionBindings:{[s.deviceKey]:{[s.inputName]:{[f]:[...h,l]}}}}})}};e.gamePipeline.currentExecutionContext.inputHandler.addEventListener(pe.CurrentInputsChanged,n);const o=e.gamePipeline.addStateListener(!0,["currentDevices"],a=>{r({currentInputDevices:a})}),i=e.gamePipeline.addStateListener(!0,["actionBindings"],a=>{r({currentBindings:a})});r({removeInputListeners:()=>{e.gamePipeline.currentExecutionContext.inputHandler.removeEventListener(pe.CurrentInputsChanged,n),o(),i()}})}},renderCallback:({state:e,updateState:t,inputs:r,events:n,dispatch:o})=>p`
            <header>
                <h2>Configure Inputs</h2>
                <p>To connect a controller, push buttons on it.</p>
            </header>
            <h3>Available input devices</h3>
            <${ha.assign({showAnimations:!0,devices:e.currentInputDevices,inputHandler:r.gamePipeline.currentExecutionContext.inputHandler})}></${ha}>
            <${ue.assign({bindings:e.currentBindings,requiredActionNames:r.requiredActionNames})}
                ${k(ue.events.listenForAction,i=>{t({listeningForAction:i.detail})})}
                ${k(ue.events.removeBinding,i=>{var l,c;const s=(((c=(l=r.gamePipeline.currentState.actionBindings[i.detail.deviceKey])==null?void 0:l[i.detail.inputName])==null?void 0:c[i.detail.direction])??[]).map(u=>{i.detail.actionName});r.gamePipeline.update({stateUpdate:{saveNextFrame:!0,actionBindings:{[i.detail.deviceKey]:{[i.detail.inputName]:{[i.detail.direction]:s}}}}})})}
            ></${ue}>
            <${zi.assign({text:"Play"})}
                ${k("click",()=>{o(new n.assignmentDone)})}
            ></${zi}>
        `}),Xm=Br({parent:Ml,title:hn.tagName,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:y`
                :host {
                    width: 1000px;
                }
            `,renderCallback({controls:t}){return p`
                    <${hn.assign({requiredActionNames:["cut tree","eat food","move","sleep","walk"],gamePipeline:t.gamePipeline})}></${hn}>
                `}})}}),Zm=Br({parent:void 0,title:ue.tagName,elementExamplesCallback({defineExample:e}){e({title:"no existing bindings",renderCallback(){return p`
                    <${ue.assign({bindings:{},requiredActionNames:["cut tree","eat food","move","sleep","walk"]})}></${ue}>
                `}}),e({title:"with some bindings",renderCallback(){return p`
                    <${ue.assign({bindings:{[Ot.gamepad1]:{"button-1":{[pt.Positive]:["cut tree"]}},keyboard:{"button-long-button-name":{[pt.Positive]:["cut tree"]}},mouse:{"button-0":{[pt.Positive]:["move"]},"button-1":{[pt.Positive]:["ignored-action"]}}},requiredActionNames:["cut tree","eat food","move","sleep","walk"]})}></${ue}>
                `}})}}),ma=le()({tagName:"vir-animation-book-wrapper",stateInitStatic:{intervalId:void 0,animation:void 0},initCallback({state:e,updateState:t,inputs:r}){e.intervalId==null&&t({intervalId:window.setInterval(()=>{t({animation:{timestamp:Date.now()}})},r.milliseconds)})},cleanupCallback({state:e,updateState:t}){e.intervalId!=null&&(window.clearInterval(e.intervalId),t({intervalId:void 0}))},renderCallback({state:e}){return p`
            <${Fe.assign({animation:e.animation})}>
                <${Re.assign({animated:!1,deviceKey:Ot.gamepad1,inputHandler:void 0,displayShortKey:!1,size:zt.Large})}></${Re}>
            </${Fe}>
        `}}),Jm=Br({parent:void 0,title:Fe.tagName,elementExamplesCallback({defineExample:e}){e({title:"automatic",styles:y`
                :host {
                    ${Lt};
                }
            `,renderCallback(){return p`
                    <${ma.assign({milliseconds:500})}></${ma}>
                `}}),e({title:"on click",stateInitStatic:{animation:void 0},styles:y`
                :host {
                    ${Lt};
                }
            `,renderCallback({state:t,updateState:r}){return p`
                    <${Fe.assign({animation:t.animation})}
                        ${k("click",()=>{r({animation:{timestamp:Date.now()}})})}
                    >
                        <${Re.assign({animated:!1,deviceKey:Ot.gamepad1,inputHandler:void 0,displayShortKey:!1,size:zt.Large})}></${Re}>
                    </${Fe}>
                `}})}}),Qm=[Ml,Xm,Jm,Zm].sort((e,t)=>e.title.localeCompare(t.title)),Gn=le()({tagName:"vira-forward-game-book",stateInitStatic:{gamePipeline:void 0},renderCallback({inputs:e,dispatch:t,updateState:r,state:n}){return n.gamePipeline||r({gamePipeline:jm({startImmediately:!0})}),p`
            <${un.assign({entries:Qm,elementBookRoutePaths:e.currentRoute.paths.slice(1),globalValues:{gamePipeline:n.gamePipeline}})}
                ${k(un.events.pathUpdate,o=>{const i=o.detail;t(new ao({route:{paths:[fe.Design,...i]},sanitized:!1}))})}
            ></${un}>
        `}}),ep=Object.freeze(Object.defineProperty({__proto__:null,VirForwardGameBook:Gn},Symbol.toStringTag,{value:"Module"})),tp="modulepreload",rp=function(e){return"/forward-game/"+e},pa={},ga=function(t,r,n){if(!r||r.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=rp(i),i in pa)return;pa[i]=!0;const a=i.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!n)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":tp,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},va={[fe.Design]:{description:"Individual parts of the UI (for demonstration or testing purposes)",async loadVersionElement(){return(await ga(()=>Promise.resolve().then(()=>ep),void 0)).VirForwardGameBook}},[fe.V1]:{description:"First working version. With controller support!",async loadVersionElement(){return(await ga(()=>import("./vir-forward-game-app.element-05d86c61.js"),[])).VirForwardGameAppV1}}},ba=le()({tagName:"vir-select-game-version",styles:y`
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
            ${el}
        }

        ${Xt} {
            text-decoration: none;
        }
    `,renderCallback({inputs:e,dispatch:t}){return Object.entries(e.versionData).map(([r,n])=>p`
                    <${Xt.assign({route:{route:{paths:[r]},router:e.router}})}
                        ${k(Xt.events.routeChange,o=>{t(new ao({route:o.detail,sanitized:!1}))})}
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
    `,stateInitStatic:{router:Mu(),currentRoute:En,currentGameVersionElement:mu({async updateCallback({rootPath:e}){if(ku(e))return va[e].loadVersionElement()}})},initCallback({state:e,updateState:t}){e.router.addRouteListener(!0,r=>{t({currentRoute:r})})},renderCallback({state:e}){e.currentGameVersionElement.updateTrigger({rootPath:e.currentRoute.paths[0]});const t=e.currentRoute.paths[0]===fe.VersionSelector?p`
                      <${ba.assign({versionData:va,router:e.router})}></${ba}>
                  `:e.currentRoute.paths[0]===fe.Design?p`
                        <${Gn.assign({currentRoute:e.currentRoute})}></${Gn}>
                    `:gu(e.currentGameVersionElement,p`
                            <div class="loading">Loading...</div>
                        `,r=>r?p`
                                <${r.assign({currentRoute:e.currentRoute})}></${r}>
                            `:"Failed",r=>p`
                                Failed: ${r.message}
                            `);return p`
            <div
                class="root"
                ${k(ao,r=>{e.router.setRoutes(r.detail.route,r.detail.sanitized)})}
            >
                ${t}
            </div>
        `}});export{ao as C,fe as F,kl as G,hn as V,Oa as a,le as b,y as c,Ar as d,Q as e,jm as f,gs as g,p as h,gn as i,Da as j,k as l,ie as r,xn as w};
