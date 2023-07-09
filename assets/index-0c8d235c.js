(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},oe=t=>(...e)=>({_$litDirective$:t,values:e});let q=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ce;const X=window,V=X.trustedTypes,Be=V?V.createPolicy("lit-html",{createHTML:t=>t}):void 0,ee="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,Le="?"+_,ur=`<${Le}>`,k=document,F=()=>k.createComment(""),I=t=>t===null||typeof t!="object"&&typeof t!="function",yt=Array.isArray,wt=t=>yt(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ue=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ue=/-->/g,Fe=/>/g,A=RegExp(`>|${ue}(?:([^\\s"'>=/]+)(${ue}*=${ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ie=/'/g,We=/"/g,_t=/^(?:script|style|textarea|title)$/i,dr=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),hr=dr(1),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ge=new WeakMap,T=k.createTreeWalker(k,129,null,!1);function Et(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Be!==void 0?Be.createHTML(e):e}const St=(t,e)=>{const r=t.length-1,n=[];let s,i=e===2?"<svg>":"",o=j;for(let c=0;c<r;c++){const a=t[c];let l,u,d=-1,h=0;for(;h<a.length&&(o.lastIndex=h,u=o.exec(a),u!==null);)h=o.lastIndex,o===j?u[1]==="!--"?o=Ue:u[1]!==void 0?o=Fe:u[2]!==void 0?(_t.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=A):u[3]!==void 0&&(o=A):o===A?u[0]===">"?(o=s??j,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?A:u[3]==='"'?We:Ie):o===We||o===Ie?o=A:o===Ue||o===Fe?o=j:(o=A,s=void 0);const f=o===A&&t[c+1].startsWith("/>")?" ":"";i+=o===j?a+ur:d>=0?(n.push(l),a.slice(0,d)+ee+a.slice(d)+_+f):a+_+(d===-2?(n.push(void 0),c):f)}return[Et(t,i+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class W{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let i=0,o=0;const c=e.length-1,a=this.parts,[l,u]=St(e,r);if(this.el=W.createElement(l,n),T.currentNode=this.el.content,r===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=T.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith(ee)||h.startsWith(_)){const f=u[o++];if(d.push(h),f!==void 0){const g=s.getAttribute(f.toLowerCase()+ee).split(_),b=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:b[2],strings:g,ctor:b[1]==="."?xt:b[1]==="?"?At:b[1]==="@"?Tt:J})}else a.push({type:6,index:i})}for(const h of d)s.removeAttribute(h)}if(_t.test(s.tagName)){const d=s.textContent.split(_),h=d.length-1;if(h>0){s.textContent=V?V.emptyScript:"";for(let f=0;f<h;f++)s.append(d[f],F()),T.nextNode(),a.push({type:2,index:++i});s.append(d[h],F())}}}else if(s.nodeType===8)if(s.data===Le)a.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(_,d+1))!==-1;)a.push({type:7,index:i}),d+=_.length-1}i++}}static createElement(e,r){const n=k.createElement("template");return n.innerHTML=e,n}}function P(t,e,r=t,n){var s,i,o,c;if(e===w)return e;let a=n!==void 0?(s=r._$Co)===null||s===void 0?void 0:s[n]:r._$Cl;const l=I(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(t),a._$AT(t,r,n)),n!==void 0?((o=(c=r)._$Co)!==null&&o!==void 0?o:c._$Co=[])[n]=a:r._$Cl=a),a!==void 0&&(e=P(t,a._$AS(t,e.values),a,n)),e}class Ct{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;const{el:{content:n},parts:s}=this._$AD,i=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:k).importNode(n,!0);T.currentNode=i;let o=T.nextNode(),c=0,a=0,l=s[0];for(;l!==void 0;){if(c===l.index){let u;l.type===2?u=new D(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new kt(o,this,e)),this._$AV.push(u),l=s[++a]}c!==(l==null?void 0:l.index)&&(o=T.nextNode(),c++)}return T.currentNode=k,i}v(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class D{constructor(e,r,n,s){var i;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cp=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=P(this,e,r),I(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):wt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==p&&I(this._$AH)?this._$AA.nextSibling.data=e:this.$(k.createTextNode(e)),this._$AH=e}g(e){var r;const{values:n,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=W.createElement(Et(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const o=new Ct(i,this),c=o.u(this.options);o.v(n),this.$(c),this._$AH=o}}_$AC(e){let r=Ge.get(e.strings);return r===void 0&&Ge.set(e.strings,r=new W(e)),r}T(e){yt(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of e)s===r.length?r.push(n=new D(this.k(F()),this.k(F()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cp=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}}class J{constructor(e,r,n,s,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,s){const i=this.strings;let o=!1;if(i===void 0)e=P(this,e,r,0),o=!I(e)||e!==this._$AH&&e!==w,o&&(this._$AH=e);else{const c=e;let a,l;for(e=i[0],a=0;a<i.length-1;a++)l=P(this,c[n+a],r,a),l===w&&(l=this._$AH[a]),o||(o=!I(l)||l!==this._$AH[a]),l===p?e=p:e!==p&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}o&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class xt extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}const fr=V?V.emptyScript:"";class At extends J{constructor(){super(...arguments),this.type=4}j(e){e&&e!==p?this.element.setAttribute(this.name,fr):this.element.removeAttribute(this.name)}}class Tt extends J{constructor(e,r,n,s,i){super(e,r,n,s,i),this.type=5}_$AI(e,r=this){var n;if((e=(n=P(this,e,r,0))!==null&&n!==void 0?n:p)===w)return;const s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class kt{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const Hn={O:ee,P:_,A:Le,C:1,M:St,L:Ct,D:wt,R:P,I:D,V:J,H:At,N:Tt,U:xt,F:kt},qe=X.litHtmlPolyfillSupport;qe==null||qe(W,D),((ce=X.litHtmlVersions)!==null&&ce!==void 0?ce:X.litHtmlVersions=[]).push("2.7.5");const pr=(t,e,r)=>{var n,s;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let o=i._$litPart$;if(o===void 0){const c=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new D(e.insertBefore(F(),c),c,void 0,r??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr=oe(class extends q{constructor(t){var e;if(super(t),t.type!==Ne.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(e)}const s=t.element.classList;this.it.forEach(i=>{i in e||(s.remove(i),this.it.delete(i))});for(const i in e){const o=!!e[i];o===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(o?(s.add(i),this.it.add(i)):(s.remove(i),this.it.delete(i)))}return w}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $e=class extends q{constructor(e){if(super(e),this.et=p,e.type!==Ne.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===p||e==null)return this.ft=void 0,this.et=e;if(e===w)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const r=[e];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};$e.directiveName="unsafeHTML",$e.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Je=class extends $e{};Je.directiveName="unsafeSVG",Je.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mr(t,e,r){return t?e():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=window,Oe=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),Ze=new WeakMap;let Pt=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Oe&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=Ze.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ze.set(r,e))}return e}toString(){return this.cssText}};const E=t=>new Pt(typeof t=="string"?t:t+"",void 0,ze),B=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new Pt(r,t,ze)},gr=(t,e)=>{Oe?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),s=K.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)})},Ye=Oe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return E(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var de;const te=window,Ke=te.trustedTypes,br=Ke?Ke.emptyScript:"",Qe=te.reactiveElementPolyfillSupport,ye={toAttribute(t,e){switch(e){case Boolean:t=t?br:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Rt=(t,e)=>e!==t&&(e==e||t==t),he={attribute:!0,type:String,converter:ye,reflect:!1,hasChanged:Rt},we="finalized";class L extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const s=this._$Ep(n,r);s!==void 0&&(this._$Ev.set(s,n),e.push(s))}),e}static createProperty(e,r=he){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,n,r);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(s){const i=this[e];this[r]=s,this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||he}static finalize(){if(this.hasOwnProperty(we))return!1;this[we]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const s of n)this.createProperty(s,r[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)r.unshift(Ye(s))}else e!==void 0&&r.push(Ye(e));return r}static _$Ep(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gr(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=he){var s;const i=this.constructor._$Ep(e,n);if(i!==void 0&&n.reflect===!0){const o=(((s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?n.converter:ye).toAttribute(r,n.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,r){var n;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:ye;this._$El=i,this[i]=c.fromAttribute(r,o.type),this._$El=null}}requestUpdate(e,r,n){let s=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Rt)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(n)):this._$Ek()}catch(s){throw r=!1,this._$Ek(),s}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}L[we]=!0,L.elementProperties=new Map,L.elementStyles=[],L.shadowRootOptions={mode:"open"},Qe==null||Qe({ReactiveElement:L}),((de=te.reactiveElementVersions)!==null&&de!==void 0?de:te.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fe,pe;class U extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pr(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return w}}U.finalized=!0,U._$litElement$=!0,(fe=globalThis.litElementHydrateSupport)===null||fe===void 0||fe.call(globalThis,{LitElement:U});const Xe=globalThis.litElementPolyfillSupport;Xe==null||Xe({LitElement:U});((pe=globalThis.litElementVersions)!==null&&pe!==void 0?pe:globalThis.litElementVersions=[]).push("3.3.2");var $r=globalThis&&globalThis.__esDecorate||function(t,e,r,n,s,i){function o(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var c=n.kind,a=c==="getter"?"get":c==="setter"?"set":"value",l=!e&&t?n.static?t:t.prototype:null,u=e||(l?Object.getOwnPropertyDescriptor(l,n.name):{}),d,h=!1,f=r.length-1;f>=0;f--){var g={};for(var b in n)g[b]=b==="access"?{}:n[b];for(var b in n.access)g.access[b]=n.access[b];g.addInitializer=function(x){if(h)throw new TypeError("Cannot add initializers after decoration has completed");i.push(o(x||null))};var y=(0,r[f])(c==="accessor"?{get:u.get,set:u.set}:u[a],g);if(c==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(d=o(y.get))&&(u.get=d),(d=o(y.set))&&(u.set=d),(d=o(y.init))&&s.push(d)}else(d=o(y))&&(c==="field"?s.push(d):u[a]=d)}l&&Object.defineProperty(l,n.name,u),h=!0},yr=globalThis&&globalThis.__runInitializers||function(t,e,r){for(var n=arguments.length>2,s=0;s<e.length;s++)r=n?e[s].call(t,r):e[s].call(t);return n?r:void 0},wr=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function _r(){function t(e,r){return e}return t}let Nt=(()=>{let t=[_r()],e,r=[],n;return n=class extends U{},wr(n,"DeclarativeElement"),$r(null,e={value:n},t,{kind:"class",name:n.name},null,r),n=e.value,yr(n,r),n})();const Er={capitalizeFirstLetter:!1};function Sr(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Cr(t,e){return e.capitalizeFirstLetter?Sr(t):t}function xr(t,e=Er){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return Cr(n,e)}function Lt(t){return t?t instanceof Error?t.message:S(t,"message")?String(t.message):String(t):""}function Ve(t){return t instanceof Error?t:new Error(Lt(t))}function et(t){return!!t&&typeof t=="object"}const Ar=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function S(t,e){return t?Ar.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Tr(t,e){return t&&e.every(r=>S(t,r))}function R(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function tt({source:t,whitespace:e,errorHandler:r}){try{return JSON.stringify(t,void 0,e)}catch(n){if(r)return r(n);throw n}}const rt="Failed to compare objects using JSON.stringify";function nt(t,e,r){return tt({source:t,errorHandler(n){if(r)return"";throw n}})===tt({source:e,errorHandler(n){if(r)return"";throw n}})}function Ot(t,e,r={}){try{return t===e?!0:et(t)&&et(e)?nt(Object.keys(t).sort(),Object.keys(e).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(t).every(s=>Ot(t[s],e[s])):!1:nt(t,e,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const s=Ve(n);throw s.message.startsWith(rt)||(s.message=`${rt}: ${s.message}`),s}}function zt(t,e){let r=!1;const n=R(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(r=!0),{...s,[i]:o}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(R(n).map(async o=>{const c=await n[o];n[o]=c})),s(n)}catch(o){i(o)}}):n}function kr(t){return!!(S(t,"then")&&typeof t.then=="function")}function _e(){let t,e,r=!1;const n=new Promise((s,i)=>{t=o=>(r=!0,s(o)),e=o=>{r=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${_e.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Pr(t,e){try{return Rr(t,e),!0}catch{return!1}}function Rr(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function st(t){return t!==t.toUpperCase()}function Nr(t){return t.split("").reduce((r,n,s,i)=>{const o=s>0?i[s-1]:"",c=s<i.length-1?i[s+1]:"",a=st(o)||st(c);return n===n.toLowerCase()||s===0||!a?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const Lr=["january","february","march","april","may","june","july","august","september","october","november","december"];Lr.map(t=>t.slice(0,3));function Or(t){return!!t&&typeof t=="object"}function it(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function zr(t){return Array.isArray(t)?"array":typeof t}function Vr(t,e){return zr(t)===e}function Hr(t,e){let r=!1;const n=it(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(r=!0),{...s,[i]:o}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(it(n).map(async o=>{const c=await n[o];n[o]=c})),s(n)}catch(o){i(o)}}):n}function N(t){if(Or(t))return Hr(t,(r,n)=>{if(!Vr(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Nr(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,o=r.startsWith("--")?E(r):r.startsWith("-")?B`-${E(r)}`:B`--${E(r)}`;return{name:o,value:B`var(${o}, ${E(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${N.name}' function.`)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dr=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}},jr=(t,e,r)=>{e.constructor.createProperty(r,t)};function Vt(t){return(e,r)=>r!==void 0?jr(t,e,r):Dr(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve;((ve=window.HTMLSlotElement)===null||ve===void 0?void 0:ve.prototype.assignedElements)!=null;const Ee=Symbol("this-is-an-element-vir-declarative-element"),He=Symbol("key for ignoring inputs not having been set yet"),Mr={[He]:!0,allowPolymorphicState:!1};function Ht(t,e){const r=t.instanceState;R(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&R(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),Dt(t)}function Dt(t){t.haveInputsBeenSet||(t.haveInputsBeenSet=!0)}function jt(t,e){return Se(t,e),t.element}function Br(t){try{return t.options.host.tagName.toLowerCase()}catch{return}}function Se(t,e){const r=Br(t),n=r?`: found in ${r}`:"";if(t.type!==Ne.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element${n}.`);if(!t.element)throw new Error(`${e} directive found no element${n}.`)}function H(t,e){return e?ot(t,e):ot(void 0,t)}const ot=oe(class extends q{constructor(t){super(t),this.element=jt(t,"assign")}render(t,e){return Ur(t,this.element,e),w}});function Ur(t,e,r){Ht(e,r)}function Mt(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof Nt?!0:Mt(r)}function at(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class Fr extends CustomEvent{get type(){return this._type}constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function De(){return t=>{var e;return e=class extends Fr{constructor(r){super(t,r),this._type=t}},e.type=t,e}}function re(){return De()}function Ir(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,r)=>{const n=De()(r);return e[r]=n,e},{}):{}}const Ce="_is_element_vir_observable_property_handler_instance",xe="_is_element_vir_observable_property_handler_creator";function Wr(t){return S(t,xe)&&t[xe]===!0}function Gr(t){return S(t,Ce)&&t[Ce]===!0}function qr(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function lt(t,e){const r=t;function n(o){e?qr(o,t,t.tagName):Vt()(t,o)}function s(o,c){return n(c),r[c]}return new Proxy({},{get:s,set:(o,c,a)=>{n(c);const l=t.observablePropertyHandlerMap[c];function u(d){o[c]=d,r[c]=d}return Wr(a)&&(a=a.init()),Gr(a)?(l&&a!==l?(a.addMultipleListeners(l.getAllListeners()),l.removeAllListeners()):a.addListener(!0,d=>{u(d)}),t.observablePropertyHandlerMap[c]=a):l?l.setValue(a):u(a),!0},ownKeys:o=>Reflect.ownKeys(o),getOwnPropertyDescriptor(o,c){if(c in o)return{get value(){return s(o,c)},configurable:!0,enumerable:!0}},has:(o,c)=>Reflect.has(o,c)})}function Jr(t){return t?zt(t,e=>e):{}}function Zr({hostClassNames:t,cssVars:e}){return{hostClasses:zt(t,(r,n)=>({name:E(n),selector:E(`:host(.${n})`)})),cssVars:e}}function Yr({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:s}){e&&R(e).forEach(i=>{const o=e[i],c=r[i];typeof o=="function"&&(o({state:n,inputs:s})?t.classList.add(c):t.classList.remove(c))})}function Kr(t,e){function r(s){R(s).forEach(i=>{const o=s[i];t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:r,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}var Qr=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function ae(t){var e;if(!t.renderCallback||typeof t.renderCallback=="string")throw new Error(`Failed to define element '${t.tagName}': renderCallback is not a function`);const r={...Mr,...t.options},n=Ir(t.events),s=Jr(t.hostClasses);t.hostClasses&&at(t.tagName,t.hostClasses),t.cssVars&&at(t.tagName,t.cssVars);const i=t.cssVars?N(t.cssVars):{},o=typeof t.styles=="function"?t.styles(Zr({hostClassNames:s,cssVars:i})):t.styles||B``,c=t.renderCallback,a=(e=class extends Nt{createRenderParams(){return Kr(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Dt(this)}render(){try{Mt(this)&&!this.haveInputsBeenSet&&!r[He]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${H.name}" directive on it. If no inputs are intended, use "${ae.name}" to define ${t.tagName}.`),this.hasRendered=!0;const l=this.createRenderParams();if(!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(l)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const u=c(l);if(u instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Yr({host:l.host,hostClassesInit:t.hostClasses,hostClassNames:s,state:l.state,inputs:l.inputs}),this.lastRenderedProps={inputs:{...l.inputs},state:{...l.state}},u}catch(l){const u=Ve(l);throw u.message=`Failed to render '${t.tagName}': ${u.message}`,u}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const l=this.createRenderParams();if(t.initCallback(l)instanceof Promise)throw new Error(`initCallback in '${t.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const l=this.createRenderParams();if(t.cleanupCallback(l)instanceof Promise)throw new Error(`cleanupCallback in '${t.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(l){Ht(this,l)}constructor(){var u;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=lt(this,!1),this.instanceState=lt(this,!((u=t.options)!=null&&u.allowPolymorphicState));const l=t.stateInitStatic||{};R(l).forEach(d=>{Vt()(this,d),this.instanceState[d]=l[d]}),this.definition=a}},Qr(e,"anonymousClass"),e.tagName=t.tagName,e.styles=o,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=c,e.hostClasses=s,e.cssVars=i,e.stateInitStatic=t.stateInitStatic,e);return Object.defineProperties(a,{[Ee]:{value:!0,writable:!1},name:{value:xr(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:l=>l instanceof a,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,a),a}function Bt(){return t=>ae({...t,options:{[He]:!1,...t.options}})}var Ut;const $=Symbol("not set");class Xr{constructor(e){this.lastTrigger=$,this.resolutionValue=$,this.rejectionError=$,this.listeners=new Set,this.waitingForValuePromise=_e(),this[Ut]=!0,this.resetValue(e)}resetValue(e){if(this.resetWaitingForValuePromise(),e!==$){if(S(e,"defaultValue"))e.defaultValue instanceof Promise?this.setValue({newPromise:e.defaultValue}):this.setValue({resolvedValue:e.defaultValue});else if(S(e,"updateCallback")){this.promiseUpdater=e.updateCallback;return}}}fireListeners(){const e=this.getValue();this.listeners.forEach(r=>{r(e)})}setPromise(e){e!==this.lastSetPromise&&(this.resolutionValue=$,this.rejectionError=$,this.lastSetPromise=e,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),e.then(r=>{this.lastSetPromise===e&&this.resolveValue(r)}).catch(r=>{this.lastSetPromise===e&&(this.rejectionError=Ve(r),this.waitingForValuePromise.promise.catch(()=>{}),this.waitingForValuePromise.reject(r),this.fireListeners())}))}resolveValue(e){e!==this.resolutionValue&&(this.rejectionError=$,this.resolutionValue=e,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),this.waitingForValuePromise.resolve(e),this.fireListeners())}resetWaitingForValuePromise(){this.waitingForValuePromise=_e()}setValue(e){if(S(e,"serializableTrigger")){const r={...e.serializableTrigger};if(this.lastTrigger===$||!Ot(r,this.lastTrigger,{ignoreNonSerializableProperties:!0})){if(this.lastTrigger=r,!this.promiseUpdater)throw new Error("got serializableTrigger input to updateState for asyncProp but no updateCallback has been defined.");const n=this.promiseUpdater(r);this.setPromise(n),this.fireListeners()}}else if("newPromise"in e)this.lastTrigger,this.setPromise(e.newPromise),this.fireListeners();else if("resolvedValue"in e)this.resolveValue(e.resolvedValue);else if("forceUpdate"in e)this.lastTrigger=$,this.resolutionValue=$,this.waitingForValuePromise.isSettled()||this.waitingForValuePromise.reject("Canceled by force update"),this.resetWaitingForValuePromise(),this.fireListeners();else throw new Error("Got no properties for updating asyncProp.")}getValue(){if(this.waitingForValuePromise.isSettled()){if(this.rejectionError!==$)return this.rejectionError;if(this.resolutionValue===$)throw new Error("Promise says it has settled but resolution value was not set!");return this.resolutionValue}else return this.waitingForValuePromise.promise}addListener(e,r){this.listeners.add(r),e&&r(this.getValue())}addMultipleListeners(e){e.forEach(r=>this.listeners.add(r))}getAllListeners(){return this.listeners}removeListener(e){return this.listeners.has(e)?(this.listeners.delete(e),!0):!1}removeAllListeners(){const e=this.listeners.size;return this.listeners.clear(),e}}Ut=Ce;function en(...t){const e=Pr(t,1)?t[0]:$;return{[xe]:!0,init(){return new Xr(e)}}}function Z(t,e){return tn(t,e)}const tn=oe(class extends q{constructor(t){super(t),this.element=jt(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),w}}),me="onResize",Ft=oe(class extends q{constructor(t){super(t),this.resizeObserver=new ResizeObserver(e=>this.fireCallback(e)),Se(t,me)}fireCallback(t){var r;const e=t[0];if(!e)throw console.error(t),new Error(`${me} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:e.target,contentRect:e.contentRect})}update(t,[e]){Se(t,me),this.callback=e;const r=t.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(e)}render(t){}});function rn(t,e,r,n){return t instanceof Error?n?n(t):Lt(t):kr(t)?e:r?r(t):t}function ct(t,e,r){return mr(t,()=>e,()=>r)}function nn(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),Bt()(r(n))),defineElementNoInputs:n=>(e(n),ae(r(n)))}}function sn(t,e){return t.filter((r,n)=>!e.includes(n))}function It(t){return t.filter(e=>Tr(e,["tagName",Ee])&&!!e.tagName&&!!e[Ee])}const Wt=new WeakMap;function on(t,e){var s;const r=It(e);return(s=Gt(Wt,[t,...r]).value)==null?void 0:s.template}function an(t,e,r){const n=It(e);return Jt(Wt,[t,...n],r)}function Gt(t,e,r=0){const{currentTemplateAndNested:n,reason:s}=qt(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Gt(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:s}}function qt(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const s=t.get(n);return s==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:s,reason:"key and value exists"}}function Jt(t,e,r,n=0){const{currentTemplateAndNested:s,currentKey:i,reason:o}=qt(t,e,n);if(!i)return{result:!1,reason:o};const c=s??{nested:void 0,template:void 0};if(s||t.set(i,c),n===e.length-1)return c.template=r,{result:!0,reason:"set value at end of keys array"};const a=c.nested??new WeakMap;return c.nested||(c.nested=a),Jt(a,e,r,n+1)}function Zt(t,e,r){return{name:t,check:e,transform:r}}const ln=new WeakMap;function Yt(t,e,r){const n=on(t,e),s=n??r();if(!n){const o=an(t,e,s);if(o.result)ln.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=sn(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function Kt(t,e,r,n){const s=[],i=[],o=[];return t.forEach((a,l)=>{var y;const u=s.length-1,d=s[u],h=l-1,f=e[h];let g;n&&n(a),typeof d=="string"&&(g=(y=r.find(x=>x.check(d,a,f)))==null?void 0:y.transform,g&&(s[u]=d+g(f)+a,o.push(h))),g||s.push(a);const b=t.raw[l];g?i[u]=i[u]+g(f)+b:i.push(b)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function Qt(t){return S(t,"tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const cn=[Zt("tag name css selector interpolation",(t,e,r)=>Qt(r),t=>t.tagName)];function un(t,e){return Kt(t,e,cn)}function m(t,...e){const r=Yt(t,e,()=>un(t,e));return B(r.strings,...r.values)}const dn=[Zt("tag name interpolation",(t,e,r)=>{const n=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=Qt(r);if(n&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&s},t=>t.tagName)];function hn(t){}function fn(t){return Kt(t.strings,t.values,dn,hn)}function v(t,...e){const r=hr(t,...e),n=Yt(t,e,()=>fn(r));return{...r,strings:n.strings,values:n.values}}const pn=["v1"],je=Object.fromEntries(pn.map(t=>[t,t]));function vn(t){return t in je}const mn=0;function gn(t){return!(t.type!=="click"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==mn)}class le extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class ut extends le{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const G="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const bn=globalThis.history.pushState;function dt(...t){const e=bn.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(G)),e}const $n=globalThis.history.replaceState;function ht(...t){const e=$n.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(G)),e}function yn(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===dt)throw new ut("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===ht)throw new ut("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=dt,globalThis.history.replaceState=ht,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(G))})}}function wn(t){return Array.from(t.entries()).reduce((e,r)=>(e[r[0]]=r[1],e),{})}function _n(t){const e=Object.entries(t).reduce((r,n)=>{const s=`${n[0]}=${n[1]}`;return`${r}&${s}`},"");return new URLSearchParams(e)}function En(t){const e=`/${t}`,n=(t&&globalThis.location.pathname.startsWith(e)?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(c=>!!c),i=globalThis.location.search?wn(new URLSearchParams(globalThis.location.search)):void 0,o=globalThis.location.hash||void 0;return{paths:n,search:i,hash:o}}function Xt(t){return t.replace(/(?:^\/|\/+$)/g,"")}function er({routeBase:t,windowPath:e}){if(!t)return"";const r=Xt(t);if(tr({routeBase:r,windowPath:e}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?er({routeBase:n,windowPath:e}):""}function tr({routeBase:t,windowPath:e}){const r=Xt(t);return r?e.startsWith(`/${r}`):!1}class Sn extends le{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function rr(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const r=Object.entries(t.search).join(" "),n=Object.entries(e.search).join(" ");if(r!==n)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const ft=6;function pt(t,e){const r=t.getCurrentRawRoutes();if(t.sanitizationDepth>ft)throw new Sn(`Route sanitization depth has exceed the max of ${ft} with ${JSON.stringify(r)}`);const n=t.sanitizeFullRoute(r);if(rr(n,r))t.sanitizationDepth=0,e?e(n):t.listeners.forEach(s=>{s(n)});else return t.sanitizationDepth++,t.setRoutes(n,!0)}class ge extends le{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Cn(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new ge(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new ge(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new ge(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function xn(t){return!!t}function An(t,e,r=!1){const n=nr(t,e);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function nr(t,e){var a;const r=tr({routeBase:e,windowPath:globalThis.location.pathname})?e:"",n=t.search?_n(t.search).toString():"",s=n?`?${n}`:"",i=(a=t.hash)!=null&&a.startsWith("#")?"":"#",o=t.hash?`${i}${t.hash}`:"";return`/${[r,...t.paths].filter(xn).join("/")}${s}${o}`}function Tn(t={}){Cn(t),yn();const e=t.routeBase?er({routeBase:t.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>pt(s),s={listeners:new Set,initParams:t,sanitizeFullRoute(i){const o={hash:void 0,search:void 0,...i};return t.routeSanitizer?t.routeSanitizer(o):o},setRoutes(i,o=!1,c=!1){const a=s.getCurrentRawRoutes(),l={...a,...i},u=s.sanitizeFullRoute(l);if(!(!c&&rr(a,u)))return An(u,e,o)},createRoutesUrl(i){return nr(i,e)},getCurrentRawRoutes(){return En(e)},removeAllRouteListeners(){s.listeners.forEach(i=>s.removeRouteListener(i))},addRouteListener(i,o){if(t.maxListenerCount&&s.listeners.size>=t.maxListenerCount)throw new le(`Tried to exceed route listener max of '${t.maxListenerCount}'.`);return s.listeners.add(o),r||(globalThis.addEventListener(G,n),r=!0),i&&pt(s,o),o},hasRouteListener(i){return s.listeners.has(i)},removeRouteListener(i){const o=s.listeners.delete(i);return s.listeners.size||(globalThis.removeEventListener(G,n),r=!1),o},sanitizationDepth:0};return s}const ne="version-selector",Ae={paths:[ne],search:void 0,hash:void 0};let vt=0;function kn(){if(vt++,vt>1)throw new Error("Illegal to create multiple copies of the game router.");return Tn({maxListenerCount:1,routeBase:"forward-game",routeSanitizer(e){const r=e.paths[0];return r?r===ne?{...e,paths:[ne]}:r in je?e:Ae:Ae}})}const sr=De()("change-route-event"),Pn="modulepreload",Rn=function(t){return"/forward-game/"+t},mt={},Nn=function(e,r,n){if(!r||r.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Rn(i),i in mt)return;mt[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!n)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Pn,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},gt={[je.v1]:{description:"Controller support.",async loadVersionElement(){return(await Nn(()=>import("./vir-forward-game-app.element-445a2a2f.js"),[])).VirForwardGameApp}}},bt="vira-",{defineElement:Y,defineElementNoInputs:Bn}=nn({assertInputs:t=>{if(!t.tagName.startsWith(bt))throw new Error(`Tag name should start with '${bt}' but got '${t.tagName}'`)}}),ir=m`
    pointer-events: none;
    opacity: 0.3;
`,z=N({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Ln(t){return`${t}px`}const se=N({"vira-form-input-border-radius":"8px"}),ie=N({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":m`calc(${se["vira-form-input-border-radius"].value} + 4px)`});function or({mainSelector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=3}){const s=E(Ln(n+r+e));return m`
        ${E(t)}::after {
            content: '';
            top: calc(${s} * -1);
            left: calc(${s} * -1);
            position: absolute;
            width: calc(100% + calc(${s} * 2));
            height: calc(100% + calc(${s} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${ie["vira-focus-outline-color"].value};
            border-radius: ${ie["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const O=m`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,ar=m`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Te=N({"vira-icon-color":"currentColor"}),On=N({"vira-icon-stroke-color":Te["vira-icon-color"].value,"vira-icon-fill-color":Te["vira-icon-color"].value}),Q={...Te,...On},C=Y()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>m`
        :host {
            display: inline-block;
            color: ${Q["vira-icon-color"].value};
            fill: ${Q["vira-icon-fill-color"].value};
            stroke: ${Q["vira-icon-stroke-color"].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${t["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t})=>t.icon?t.icon.svgTemplate:""});var ke;(function(t){t.Default="vira-button-default",t.Outline="vira-button-outline"})(ke||(ke={}));Y()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle===ke.Outline,"vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:t,cssVars:e})=>m`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ar};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${ie["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-active-color"].value};
        }

        ${t["vira-button-disabled"].selector} {
            ${ir};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${O};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${se["vira-form-input-border-radius"].value};
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: ${e["vira-button-padding"].value};
            transition: color ${z["vira-interaction-animation-duration"].value},
                background-color
                    ${z["vira-interaction-animation-duration"].value},
                border-color ${z["vira-interaction-animation-duration"].value};
        }

        ${or({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${C} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?v`
                  <${C}
                      ${H(C,{icon:t.icon})}
                  ></${C}>
              `:"",r=t.text?v`
                  <span class="text-template">${t.text}</span>
              `:"";return v`
            <button ?disabled=${t.disabled}>${e} ${r}</button>
        `}});var Pe;(function(t){t.Header="header"})(Pe||(Pe={}));Y()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},styles:({hostClasses:t})=>m`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${O};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${z["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${t["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:re()},stateInitStatic:{contentHeight:0},renderCallback({state:t,updateState:e,dispatch:r,events:n,inputs:s}){const i=s.expanded?m`
                  height: ${t.contentHeight}px;
              `:m`
                  height: 0;
              `;return v`
            <button
                class="header-wrapper"
                ${Z("click",()=>{r(new n.expandChange(!s.expanded))})}
            >
                <slot name=${Pe.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Ft(({contentRect:o})=>{e({contentHeight:o.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function Re({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(r=>Re({input:r,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function lr({value:t,allowed:e,blocked:r}){const n=e?Re({input:t,matcher:e}):!0,s=r?Re({input:t,matcher:r}):!1;return n&&!s}function $t(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:r}=t.value.split("").reduce((n,s)=>(lr({...t,value:s})?n.filtered.push(s):n.blocked.push(s),n),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:r.join("")}}Y()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-has-value":({inputs:t})=>!!t.value,"vira-input-fit-text":({inputs:t})=>!!t.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:re(),inputBlocked:re()},styles:({hostClasses:t,cssVars:e})=>m`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${ie["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${ir};
            }

            ${t["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${t["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${t["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${t["vira-input-fit-text"].selector} .size-span {
                ${O};
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
                ${ar};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${O};
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
                border-radius: ${se["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${e["vira-input-border-color"].value};
                transition: border
                    ${z["vira-interaction-animation-duration"].value};
            }

            label {
                ${O};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${e["vira-input-padding-horizontal"].value};
                border-radius: ${se["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${or({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${C} {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${O};
                cursor: text;
                margin: ${e["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${e["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${e["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${e["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:t,dispatch:e,state:r,updateState:n,events:s})=>{const{filtered:i}=$t({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),o=t.icon?v`
                  <${C} ${H(C,{icon:t.icon})}></${C}>
              `:"",c=t.fitText?m`
                  width: ${r.forcedInputWidth}px;
              `:"";return v`
            <label>
                ${o}
                ${ct(!!t.fitText,v`
                        <span
                            class="size-span"
                            ${Ft(({contentRect:a})=>{n({forcedInputWidth:a.width})})}
                        >
                            <pre>${i||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${vr({"have-value":!!i})}
                    style=${c}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${i}
                    ${Z("input",a=>{if(!(a instanceof InputEvent))throw new Error(`Input event type mismatch: "${a.constructor.name}"`);const l=a.target;if(!(l instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=a.data,d=i;let h=l.value??"";if(u)if(u.length===1)lr({value:u,allowed:t.allowedInputs,blocked:t.blockedInputs})||(h=d,e(new s.inputBlocked(u)));else{const{filtered:f,blocked:g}=$t({value:u,allowed:t.allowedInputs,blocked:t.blockedInputs});h=f,e(new s.inputBlocked(g))}l.value!==h&&(l.value=h),d!==h&&e(new s.valueChange(h))})}
                    placeholder=${t.placeholder}
                />
                ${ct(!!t.suffix,v`
                        <div class="suffix">${t.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});const M=Y()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:t})=>m`
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
            color: ${t["vira-link-hover-color"].value};
        }
    `,events:{routeChange:re()},renderCallback({inputs:t,dispatch:e,events:r}){var s,i;function n(o){t.route&&gn(o)&&(o.preventDefault(),t.route.scrollToTop&&window.scrollTo(0,0),e(new r.routeChange(t.route.route)))}if((s=t.link)!=null&&s.newTab)return v`
                <a href=${t.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const o=t.link?t.link.url:(i=t.route)==null?void 0:i.router.createRoutesUrl(t.route.route);return v`
                <a href=${o} rel="noopener noreferrer" ${Z("click",n)}>
                    <slot></slot>
                </a>
            `}}});function Me({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}Me({name:"Element16Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="1"
                vector-effect="non-scaling-stroke"
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
            />
        </svg>
    `});Me({name:"Element24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});Me({name:"Options24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${Q["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `});const cr=m`
    padding: 0;
    margin: 0;
`,zn=m`
    ${cr}
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,be=Bt()({tagName:"vir-select-game-version",styles:m`
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
            transition: ${z["vira-interaction-animation-duration"].value};
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
            ${zn}
        }

        h2,
        p {
            ${cr}
        }

        ${M} {
            text-decoration: none;
        }
    `,renderCallback({inputs:t,dispatch:e}){return Object.entries(t.versionData).map(([r,n])=>v`
                    <${M}
                        ${H(M,{route:{route:{paths:[r]},router:t.router}})}
                        ${Z(M.events.routeChange,s=>{e(new sr({route:s.detail,sanitized:!1}))})}
                    >
                        <section class="game-version">
                            <h2>${r}</h2>
                            <p>${n.description}</p>
                        </section>
                    </${M}>
                `)}});ae({tagName:"vir-version-selector",styles:m`
        :host,
        .root {
            position: relative;
            display: block;
            height: 100%;
        }
    `,stateInitStatic:{router:kn(),currentRoute:Ae,currentGameVersionElement:en({async updateCallback({rootPath:t}){if(vn(t))return gt[t].loadVersionElement()}})},initCallback({state:t,updateState:e}){t.router.addRouteListener(!0,r=>{e({currentRoute:r})})},renderCallback({state:t,updateState:e}){e({currentGameVersionElement:{serializableTrigger:{rootPath:t.currentRoute.paths[0]}}});const r=t.currentRoute.paths[0]===ne?v`
                      <${be}
                          ${H(be,{versionData:gt,router:t.router})}
                      ></${be}>
                  `:rn(t.currentGameVersionElement,"Loading",n=>n?v`
                              <${n}
                                  ${H({currentRoute:t.currentRoute})}
                              ></${n}>
                          `:"Failed",n=>v`
                              Failed: ${n.message}
                          `);return v`
            <div
                class="root"
                ${Z(sr,n=>{t.router.setRoutes(n.detail.route,n.detail.sanitized)})}
            >
                ${r}
            </div>
        `}});export{sr as C,w as T,Bt as a,re as b,m as c,De as d,oe as e,H as f,je as g,v as h,q as i,Hn as j,Z as l,ct as r,Ne as t};
