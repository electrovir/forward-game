(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=window,Fe=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol(),pt=new WeakMap;class Gt{constructor(t,n,r){if(this._$cssResult$=!0,r!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Fe&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=pt.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&pt.set(n,t))}return t}toString(){return this.cssText}}const De=e=>new Gt(typeof e=="string"?e:e+"",void 0,We),Ft=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Gt(n,e,We)},Yn=(e,t)=>{Fe?e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):t.forEach(n=>{const r=document.createElement("style"),s=we.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)})},ht=Fe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return De(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pe;const $e=window,ft=$e.trustedTypes,Qn=ft?ft.emptyScript:"",vt=$e.reactiveElementPolyfillSupport,Ue={toAttribute(e,t){switch(t){case Boolean:e=e?Qn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Wt=(e,t)=>t!==e&&(t==t||e==e),Ie={attribute:!0,type:String,converter:Ue,reflect:!1,hasChanged:Wt};class O extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var n;(n=this.h)!==null&&n!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),t.push(s))}),t}static createProperty(t,n=Ie){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,r,n);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){return{get(){return this[n]},set(s){const i=this[t];this[n]=s,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ie}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(ht(s))}else t!==void 0&&n.push(ht(t));return n}static _$Ep(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(n=>n(this))}addController(t){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var t;const n=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Yn(n,this.constructor.elementStyles),n}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n,r=Ie){var s;const i=this.constructor._$Ep(t,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:Ue).toAttribute(n,r.type);this._$El=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(t,n){var r;const s=this.constructor,i=s._$Ev.get(t);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Ue;this._$El=i,this[i]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(t,n,r){let s=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Wt)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}O.finalized=!0,O.elementProperties=new Map,O.elementStyles=[],O.shadowRootOptions={mode:"open"},vt==null||vt({ReactiveElement:O}),((Pe=$e.reactiveElementVersions)!==null&&Pe!==void 0?Pe:$e.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke;const _e=window,H=_e.trustedTypes,mt=H?H.createPolicy("lit-html",{createHTML:e=>e}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,Ze="?"+_,Xn=`<${Ze}>`,U=document,X=(e="")=>U.createComment(e),ee=e=>e===null||typeof e!="object"&&typeof e!="function",Zt=Array.isArray,Jt=e=>Zt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,yt=/>/g,N=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,bt=/"/g,qt=/^(?:script|style|textarea|title)$/i,er=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),tr=er(1),C=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),$t=new WeakMap,nr=(e,t,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:t;let o=i._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new V(t.insertBefore(X(),a),a,void 0,n!=null?n:{})}return o._$AI(e),o},j=U.createTreeWalker(U,129,null,!1),Yt=(e,t)=>{const n=e.length-1,r=[];let s,i=t===2?"<svg>":"",o=W;for(let c=0;c<n;c++){const l=e[c];let u,p,d=-1,f=0;for(;f<l.length&&(o.lastIndex=f,p=o.exec(l),p!==null);)f=o.lastIndex,o===W?p[1]==="!--"?o=gt:p[1]!==void 0?o=yt:p[2]!==void 0?(qt.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=N):p[3]!==void 0&&(o=N):o===N?p[0]===">"?(o=s!=null?s:W,d=-1):p[1]===void 0?d=-2:(d=o.lastIndex-p[2].length,u=p[1],o=p[3]===void 0?N:p[3]==='"'?bt:wt):o===bt||o===wt?o=N:o===gt||o===yt?o=W:(o=N,s=void 0);const v=o===N&&e[c+1].startsWith("/>")?" ":"";i+=o===W?l+Xn:d>=0?(r.push(u),l.slice(0,d)+"$lit$"+l.slice(d)+_+v):l+_+(d===-2?(r.push(void 0),c):v)}const a=i+(e[n]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[mt!==void 0?mt.createHTML(a):a,r]};class te{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=t.length-1,c=this.parts,[l,u]=Yt(t,n);if(this.el=te.createElement(l,r),j.currentNode=this.el.content,n===2){const p=this.el.content,d=p.firstChild;d.remove(),p.append(...d.childNodes)}for(;(s=j.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const p=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(_)){const f=u[o++];if(p.push(d),f!==void 0){const v=s.getAttribute(f.toLowerCase()+"$lit$").split(_),h=/([.?@])?(.*)/.exec(f);c.push({type:1,index:i,name:h[2],strings:v,ctor:h[1]==="."?Xt:h[1]==="?"?en:h[1]==="@"?tn:se})}else c.push({type:6,index:i})}for(const d of p)s.removeAttribute(d)}if(qt.test(s.tagName)){const p=s.textContent.split(_),d=p.length-1;if(d>0){s.textContent=H?H.emptyScript:"";for(let f=0;f<d;f++)s.append(p[f],X()),j.nextNode(),c.push({type:2,index:++i});s.append(p[d],X())}}}else if(s.nodeType===8)if(s.data===Ze)c.push({type:2,index:i});else{let p=-1;for(;(p=s.data.indexOf(_,p+1))!==-1;)c.push({type:7,index:i}),p+=_.length-1}i++}}static createElement(t,n){const r=U.createElement("template");return r.innerHTML=t,r}}function R(e,t,n=e,r){var s,i,o,a;if(t===C)return t;let c=r!==void 0?(s=n._$Cl)===null||s===void 0?void 0:s[r]:n._$Cu;const l=ee(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((i=c==null?void 0:c._$AO)===null||i===void 0||i.call(c,!1),l===void 0?c=void 0:(c=new l(e),c._$AT(e,n,r)),r!==void 0?((o=(a=n)._$Cl)!==null&&o!==void 0?o:a._$Cl=[])[r]=c:n._$Cu=c),c!==void 0&&(t=R(e,c._$AS(e,t.values),c,r)),t}class Qt{constructor(t,n){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:U).importNode(r,!0);j.currentNode=i;let o=j.nextNode(),a=0,c=0,l=s[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new V(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new nn(o,this,t)),this.v.push(u),l=s[++c]}a!==(l==null?void 0:l.index)&&(o=j.nextNode(),a++)}return i}m(t){let n=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class V{constructor(t,n,r,s){var i;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$C_=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$C_}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=R(this,t,n),ee(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==C&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Jt(t)?this.O(t):this.$(t)}S(t,n=this._$AB){return this._$AA.parentNode.insertBefore(t,n)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==y&&ee(this._$AH)?this._$AA.nextSibling.data=t:this.k(U.createTextNode(t)),this._$AH=t}T(t){var n;const{values:r,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=te.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.m(r);else{const o=new Qt(i,this),a=o.p(this.options);o.m(r),this.k(a),this._$AH=o}}_$AC(t){let n=$t.get(t.strings);return n===void 0&&$t.set(t.strings,n=new te(t)),n}O(t){Zt(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of t)s===n.length?n.push(r=new V(this.S(X()),this.S(X()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var n;this._$AM===void 0&&(this._$C_=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class se{constructor(t,n,r,s,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)t=R(this,t,n,0),o=!ee(t)||t!==this._$AH&&t!==C,o&&(this._$AH=t);else{const a=t;let c,l;for(t=i[0],c=0;c<i.length-1;c++)l=R(this,a[r+c],n,c),l===C&&(l=this._$AH[c]),o||(o=!ee(l)||l!==this._$AH[c]),l===y?t=y:t!==y&&(t+=(l!=null?l:"")+i[c+1]),this._$AH[c]=l}o&&!s&&this.P(t)}P(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Xt extends se{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===y?void 0:t}}const rr=H?H.emptyScript:"";class en extends se{constructor(){super(...arguments),this.type=4}P(t){t&&t!==y?this.element.setAttribute(this.name,rr):this.element.removeAttribute(this.name)}}class tn extends se{constructor(t,n,r,s,i){super(t,n,r,s,i),this.type=5}_$AI(t,n=this){var r;if((t=(r=R(this,t,n,0))!==null&&r!==void 0?r:y)===C)return;const s=this._$AH,i=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==y&&(s===y||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class nn{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const sr={A:"$lit$",M:_,C:Ze,L:1,R:Yt,D:Qt,V:Jt,I:R,H:V,N:se,U:en,B:tn,F:Xt,W:nn},_t=_e.litHtmlPolyfillSupport;_t==null||_t(te,V),((ke=_e.litHtmlVersions)!==null&&ke!==void 0?ke:_e.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re,Le;class Y extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,n;const r=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=r.firstChild),r}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nr(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return C}}Y.finalized=!0,Y._$litElement$=!0,(Re=globalThis.litElementHydrateSupport)===null||Re===void 0||Re.call(globalThis,{LitElement:Y});const Et=globalThis.litElementPolyfillSupport;Et==null||Et({LitElement:Y});((Le=globalThis.litElementVersions)!==null&&Le!==void 0?Le:globalThis.litElementVersions=[]).push("3.2.2");var ir=globalThis&&globalThis.__decorate||function(e,t,n,r){var s=arguments.length,i=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};function or(){return e=>{}}let ne=class extends Y{};ne=ir([or()],ne);const ar=["january","february","march","april","may","june","july","august","september","october","november","december"];ar.map(e=>e.slice(0,3));function Ee(e){return Object.keys(e)}function cr(e,t){return e&&t.every(n=>Object.prototype.hasOwnProperty.call(e,n))}function Te(e,t){let n=!1;const r=Ee(e).reduce((s,i)=>{const o=t(i,e[i]);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Ee(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}const rn={capitalizeFirstLetter:!1};function lr(e){var t;return e.length?((t=e[0])!==null&&t!==void 0?t:"").toUpperCase()+e.slice(1):""}function ur(e,t=rn){return t.capitalizeFirstLetter?lr(e):e}function dr(e,t=rn){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return ur(r,t)}function Ct(e){return e!==e.toUpperCase()}function pr(e){return e.split("").reduce((n,r,s,i)=>{var o,a;const c=s>0&&(o=i[s-1])!==null&&o!==void 0?o:"",l=s<i.length&&(a=i[s+1])!==null&&a!==void 0?a:"",u=Ct(c)||Ct(l);return r===r.toLowerCase()||s===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hr=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function sn(e){return(t,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(e,t,n):hr(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Me;((Me=window.HTMLSlotElement)===null||Me===void 0?void 0:Me.prototype.assignedElements)!=null;const ze=Symbol("this-is-an-element-vir-declarative-element");function on(e,t){return`${e}-${pr(t)}`}function fr(e,t){return t?Te(t,n=>De(`--${on(e,String(n))}`)):{}}function vr(e,t){return e?Te(e,(n,r)=>{const s=t[n];return De(`var(${s}, ${r})`)}):{}}const Je=Symbol("key for ignoring inputs not having been set yet"),mr={[Je]:!0};class gr extends CustomEvent{constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}get type(){return this._type}}function ie(){return e=>{var t;return t=class extends gr{constructor(n){super(e,n),this._type=e}},t.type=e,t}}function Ce(){return ie()}function yr(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,n)=>{const r=ie()(n);return t[n]=r,t},{}):{}}function At(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type "${typeof e}" from: "${String(e)}" for ${n.toLowerCase()}`);if(!(e in t))throw new Error(`Property "${String(e)}" does not exist on ${n.toLowerCase()}.`)}function St(e,t){const n=e;return new Proxy({},{get:(s,i)=>(t&&At(i,e,e.tagName),n[i]),set:(s,i,o)=>(t&&At(i,e,e.tagName),n[i]=o,!0)})}function an(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof ne?!0:an(n)}function wr(e,t){return t?Te(t,n=>on(e,String(n))):{}}function br(e,t){return{dispatch:r=>e.dispatchEvent(r),genericDispatch:r=>e.dispatchEvent(r),updateState:r=>{Ee(r).forEach(s=>{e.instanceState[s]=r[s]})},inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}function $r({hostClassNames:e,cssVarNames:t,cssVarValues:n}){return{hostClass:Te(e,(r,s)=>De(`:host(.${s})`)),cssVarName:t,cssVarValue:n}}function _r({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:s}){!t||Ee(t).forEach(i=>{const o=t[i],a=n[i];typeof o=="function"&&(o({state:r,inputs:s})?e.classList.add(a):e.classList.remove(a))})}function cn(e){var t;const n=yr(e.events),r=wr(e.tagName,e.hostClasses),s=fr(e.tagName,e.cssVars),i=vr(e.cssVars,s),o={...mr,...e.options},a=typeof e.styles=="function"?e.styles($r({hostClassNames:r,cssVarNames:s,cssVarValues:i})):e.styles||Ft``,c=e.renderCallback,l=(t=class extends ne{constructor(){super(),this.initCalled=!1,this.haveInputsBeenSet=!1,this.creator={},this.instanceInputs=St(this,!1),this.instanceState=St(this,!0);const u=e.stateInit||{};Object.keys(u).forEach(p=>{sn()(this,p),this[p]=u[p]})}createRenderParams(){return br(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){an(this)&&!this.haveInputsBeenSet&&!o[Je]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "assign" directive on it.`);const u=this.createRenderParams();!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u));const p=e.renderCallback(u);return _r({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:u.state,inputs:u.inputs}),p}},t.tagName=e.tagName,t.styles=a,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=c,t.hostClasses=r,t.cssVarNames=s,t.stateInit=e.stateInit,t.cssVarValues=s,t);return Object.defineProperties(l,{[ze]:{value:!0,writable:!1},name:{value:dr(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},creator:{value:l,writable:!1},isStrictInstance:{value:u=>u instanceof l,writable:!1}}),window.customElements.define(e.tagName,l),l}function qe(){return e=>cn({...e,options:{[Je]:!1},...e.options})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:Er}=sr,Dt=()=>document.createComment(""),Z=(e,t,n)=>{var r;const s=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=s.insertBefore(Dt(),i),a=s.insertBefore(Dt(),i);n=new Er(o,a,e,e.options)}else{const o=n._$AB.nextSibling,a=n._$AM,c=a!==e;if(c){let l;(r=n._$AQ)===null||r===void 0||r.call(n,e),n._$AM=e,n._$AP!==void 0&&(l=e._$AU)!==a._$AU&&n._$AP(l)}if(o!==i||c){let l=n._$AA;for(;l!==o;){const u=l.nextSibling;s.insertBefore(l,i),l=u}}}return n},P=(e,t,n=e)=>(e._$AI(t,n),e),Cr={},Ar=(e,t=Cr)=>e._$AH=t,Sr=e=>e._$AH,Oe=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let n=e._$AA;const r=e._$AB.nextSibling;for(;n!==r;){const s=n.nextSibling;n.remove(),n=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ln={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ye=e=>(...t)=>({_$litDirective$:e,values:t});class Qe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}function Dr(e,t){return un(e,t,ne)}function un(e,t,n){Tr(e,t);const r=e.element;if(!(r instanceof n))throw new Error(`${t} attached to non ${n.name} element.`);return r}function Tr(e,t){if(e.type!==ln.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}function je(e,t){return xr(e,t)}const xr=Ye(class extends Qe{constructor(e){super(e),this.element=Dr(e,"assign")}render(e,t){return Nr(e,this.element,t),C}});function Nr(e,t,n){if(t.tagName.toLowerCase()!==e.tagName.toLowerCase())throw console.error(t,e),new Error(`Assignment mismatch. Assignment was made for ${t.tagName.toLowerCase()} but it's attached to ${e.tagName.toLowerCase()}`);Object.keys(n).forEach(r=>{t.constructor.elementProperties.has(r)||sn()(t,r),t.instanceInputs[r]=n[r]}),t.markInputsAsHavingBeenSet()}function b(e,t){return Pr(e,t)}const Pr=Ye(class extends Qe{constructor(e){super(e),this.element=un(e,"listen",HTMLElement)}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),C}});function Ir(e,t){return e.filter((n,r)=>!t.includes(r))}function dn(e){return e.filter(t=>cr(t,["tagName",ze])&&!!t.tagName&&!!t[ze])}const pn=new WeakMap;function kr(e,t){var n;const r=dn(t);return(n=hn(pn,[e,...r]).value)===null||n===void 0?void 0:n.template}function Rr(e,t,n){const r=dn(t);return vn(pn,[e,...r],n)}function hn(e,t,n=0){const{currentTemplateAndNested:r,reason:s}=fn(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?hn(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function fn(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=e.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function vn(e,t,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:a}=fn(e,t,r);if(!o)return{result:!1,reason:a};const c=i!=null?i:{nested:void 0,template:void 0};if(i||e.set(o,c),r===t.length-1)return c.template=n,{result:!0,reason:"set value at end of keys array"};const l=(s=c.nested)!==null&&s!==void 0?s:new WeakMap;return c.nested||(c.nested=l),vn(l,t,n,r+1)}function mn(e,t,n){return{name:e,check:t,transform:n}}const Lr=new WeakMap;function gn(e,t,n){const r=kr(e,t),s=r!=null?r:n();if(!r){const o=Rr(e,t,s);if(o.result)Lr.set(e,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=Ir(t,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function yn(e,t,n,r){const s=[],i=[],o=[];return e.forEach((c,l)=>{var u;const p=s.length-1,d=s[p],f=l-1,v=t[f];let h;r&&r(c),typeof d=="string"&&(h=(u=n.find(A=>A.check(d,c,v)))===null||u===void 0?void 0:u.transform,h&&(s[p]=d+h(v)+c,o.push(f))),h||s.push(c);const g=e.raw[l];h?i[p]=i[p]+h(v)+g:i.push(g)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function wn(e){return typeof e=="function"&&e.hasOwnProperty("tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Mr=[mn("tag name css selector interpolation",(e,t,n)=>wn(n),e=>e.tagName)];function Or(e,t){return yn(e,t,Mr)}function oe(e,...t){const n=gn(e,t,()=>Or(e,t));return Ft(n.strings,...n.values)}const jr=[mn("tag name interpolation",(e,t,n)=>{const r=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=wn(n);if(r&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: ${n.prototype.constructor.name}`);return r&&s},e=>e.tagName)];function Br(e){}function Hr(e){return yn(e.strings,e.values,jr,Br)}function $(e,...t){const n=tr(e,...t),r=gn(e,t,()=>Hr(n));return{...n,strings:r.strings,values:r.values}}var he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bn(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}),n}var w={},$n={};Object.defineProperty($n,"__esModule",{value:!0});var S={};const Ur=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"],_n=new RegExp(Ur.join("|"),"g");function zr(e,t){return e.filter((n,r)=>!t.includes(r))}function Vr(e){return e.reduce((n,r)=>n.concat(r),[])}function Kr(e){return e.map(t=>t.trim()).filter(t=>t!=="")}async function Gr(e,t){await En(e,t)}async function En(e,t){return await e.reduce(async(r,s,i,o)=>{const a=await r,c=await t(s,i,o);return a.push(c),a},Promise.resolve([]))}const Xe=["january","february","march","april","may","june","july","august","september","october","november","december"],Cn=Xe.map(e=>e.slice(0,3));class Ae extends Error{constructor(){super(...arguments),this.name="InvalidDateError"}}function Fr(e,t=""){const[n,r,s=""]=e.split("/");if(!n||!r)throw new Error(`Unable to extract month or day from "${e}"`);const i=s.length<4?`${t}${s.padStart(2,"0")}`:s;return et(`${i.padStart(4,"0")}-${n.padStart(2,"0")}-${r.padStart(2,"0")}`)}function An(e,t=!1){const[n,r,s]=e.replace(",","").split(" ");if(!n||!r||!s)throw new Ae(`Invalid ${An.name} input: ${e}`);const i=Xe.indexOf(n.toLowerCase()),o=Cn.indexOf(n.toLowerCase());let a=i===-1?o:i;if(a===-1)if(t)a=4;else throw new Ae(`Month name ${n} was not found.`);return et(`${s.padStart(4,"0")}-${String(a+1).padStart(2,"0")}-${r.padStart(2,"0")}`)}function et(e){const t=new Date(e+"T00:00:00.000Z");if(isNaN(Number(t)))throw new Ae(`Invalid utc date formed from input "${e}"`);return t}function tt(e){return!!e}function Wr(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(n=>nt(n).trim()).join(`
`))}function Zr(e){return e?e.map(nt).filter(tt).join(`
`):""}function nt(e){return e?e instanceof Error?e.message:String(e):""}function Jr({value:e,min:t,max:n}){return Math.max(Math.min(e,n),t)}const qr=["","k","M","B","T","P","E","Z","Y"];function Sn(e,t=0,n=""){var r,s;if(e.includes("e+"))throw new Error(`Number is too large, it cannot be truncated: ${e}`);if(e.includes("e-"))throw new Error(`Number is too small, it cannot be truncated: ${e}`);const i=e.split(".");n=(r=i[1])!==null&&r!==void 0?r:n;const o=(s=i[0])!==null&&s!==void 0?s:"";return o.length>3?(n=o.slice(-3),Sn(o.slice(0,-3),t+1,n)):{value:o,decimalValues:n,recursionDepth:t}}const Yr=4;function Qr(e,t=qr){try{const n=typeof e=="number"?e:Number(e);if(isNaN(n))throw new Error(`${e} could not be converted into a number.`);const r=Sn(String(n)),s=t[r.recursionDepth];if(s===void 0)throw new Error(`Number is too large, could not truncate: ${n}`);const i=Yr-(r.value.length-1)-s.length,o=r.decimalValues.replace(/0+$/,"").slice(0,i),a=o.length?`.${o}`:"";return`${r.value}${a}${s}`}catch(n){return console.error(n),String(e)}}function rt(e){return z(e).filter(t=>isNaN(Number(t)))}function st(e){return rt(e).map(n=>e[n])}function it(e,t){return st(t).includes(e)}function Xr(e,t,n=!1){return n?e.reduce((r,s)=>{const i=st(t).find(o=>String(o).toUpperCase()===String(s).toUpperCase());return i?r.concat(i):r},[]):e.filter(r=>it(r,t))}function z(e){return Reflect.ownKeys(e)}function Se(e){return z(e).map(t=>e[t])}function k(e,t){return e&&Reflect.has(e,t)}function Dn(e,t){return e&&t.every(n=>k(e,n))}function ot(e){return!!e&&typeof e=="object"}function Ve(e){return Object.entries(e).sort((t,n)=>t[0].localeCompare(n[0]))}function es(e,t){try{const n=Ve(e),r=Ve(t);return JSON.stringify(n)===JSON.stringify(r)}catch(n){throw console.error("Failed to compare objects using JSON.stringify"),n}}function Tn(e,t){let n=!1;const r=z(e).reduce((s,i)=>{const o=t(i,e[i]);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(z(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function ts(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function ns(e){const t=at();return e===1/0||e<0||setTimeout(()=>{t.resolve()},e),t.promise}function rs(e){return typeof(e==null?void 0:e.then)=="function"}class xn extends Error{constructor(t,n=`Promised timed out after ${t} ms.`){super(n),this.durationMs=t,this.message=n,this.name="PromiseTimeoutError"}}function ss(e,t){return new Promise(async(n,r)=>{const s=setTimeout(()=>{r(new xn(e))},e);try{const i=await t;n(i)}catch(i){r(i)}finally{clearTimeout(s)}})}function at(){let e,t;const n=new Promise((r,s)=>{e=r,t=s});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${at.name}.`);return{promise:n,resolve:e,reject:t}}function ct(e){const t=new Set(Array.from(e.toLowerCase()));return Array.from(t).join("")}function is(e,t){return new RegExp(e.source,ct([e.flags,t].join("")))}function os(e,t){const n=e.match(t);return n!=null?n:[]}function as(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Nn(e){return e.replace(_n,"")}const cs=Nn;function ls(e){return e.replace(/,/g,"")}function us(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function ds(e,t,n){const r=Ln(e,t,n,!0),s=Rn(t,n);return e.split(s).reduce((a,c,l)=>{const u=r[l],p=a.concat(c);if(u){const d=e.slice(u.index,u.index+u.length);return p.concat(d)}else return p},[])}const Pn={capitalizeFirstLetter:!1};function In(e){var t;return e.length?((t=e[0])!==null&&t!==void 0?t:"").toUpperCase()+e.slice(1):""}function ps(e,t=Pn){return t.capitalizeFirstLetter?In(e):e}function hs(e,t=Pn){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return ps(r,t)}function Tt(e){return e!==e.toUpperCase()}function fs(e){return e.split("").reduce((n,r,s,i)=>{var o,a;const c=s>0&&(o=i[s-1])!==null&&o!==void 0?o:"",l=s<i.length&&(a=i[s+1])!==null&&a!==void 0?a:"",u=Tt(c)||Tt(l);return r===r.toLowerCase()||s===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function vs(e,t,n,r=n.length){const s=e.substring(0,t),i=e.substring(t+r);return`${s}${n}${i}`}function kn(e){return e.replace(/[\^$\\.*+?()[\]{}|]/g,"\\$&")}function Rn(e,t){const n=`g${!t&&typeof e=="string"?"i":""}`;return e instanceof RegExp?new RegExp(e.source,ct(`${e.flags}${n}`)):new RegExp(kn(e),n)}function Ln(e,t,n,r=!1){const s=Rn(t,n),i=[],o=[];return e.replace(s,(...a)=>{const c=a[a.length-2];if(typeof c!="number")throw new Error(`Match index "${c}" is not a number. Searching for "${t}" in "${e}".`);const l=a[0];if(typeof l!="string")throw new Error(`regExpMatch should've been a string but was ${typeof l}!`);o.push({index:c,length:l.length}),i.push(c);const u=a[0];if(typeof u!="string")throw new Error(`Original match when searching for "${t}" in "${e}" at index ${c} is not a string.`);return u}),r?o:i}function re(e=16){const t=Math.ceil(e/2);if(typeof window>"u")throw new Error(`Window not defined for ${re.name} function. If using this in a Node.js context, import ${re.name} from 'augment-vir/dist/node'`);{const n=new Uint8Array(t);return window.crypto.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,e)}}function Mn(){return e=>e}const ms=Object.freeze(Object.defineProperty({__proto__:null,ansiRegex:_n,filterOutIndexes:zr,flatten2dArray:Vr,trimArrayStrings:Kr,awaitedForEach:Gr,awaitedBlockingMap:En,englishFullMonthNames:Xe,englishShortMonthNames:Cn,InvalidDateError:Ae,createDateFromSlashFormat:Fr,createDateFromNamedCommaFormat:An,createDateFromUtcIsoFormat:et,combineErrors:Wr,combineErrorMessages:Zr,extractErrorMessage:nt,isTruthy:tt,clamp:Jr,truncateNumber:Qr,getEnumTypedKeys:rt,getEnumTypedValues:st,isEnumValue:it,filterToEnumValues:Xr,getObjectTypedKeys:z,getObjectTypedValues:Se,typedHasOwnProperty:k,typedHasOwnProperties:Dn,isObject:ot,getEntriesSortedByKey:Ve,areJsonEqual:es,mapObject:Tn,copyThroughJson:ts,wait:ns,isPromiseLike:rs,PromiseTimeoutError:xn,wrapPromiseInTimeout:ss,createDeferredPromiseWrapper:at,deDupeRegExFlags:ct,addRegExpFlags:is,safeMatch:os,joinWithFinalConjunction:as,removeAnsiEscapeCodes:Nn,removeColor:cs,removeCommasFromNumberString:ls,collapseWhiteSpace:us,splitIncludeSplit:ds,capitalizeFirstLetter:In,kebabCaseToCamelCase:hs,camelCaseToKebabCase:fs,replaceStringAtIndex:vs,escapeStringForRegExp:kn,getAllIndexesOf:Ln,randomString:re,wrapNarrowTypeWithTypeCheck:Mn},Symbol.toStringTag,{value:"Module"})),K=bn(ms);var D={};Object.defineProperty(D,"__esModule",{value:!0});D.mouseDeviceKeySymbol=D.keyboardDeviceKeySymbol=void 0;D.keyboardDeviceKeySymbol=Symbol("keyboard device id");D.mouseDeviceKeySymbol=Symbol("mouse device id");var T={},G={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.InputDeviceType=void 0,function(t){t.Keyboard="keyboard",t.Mouse="mouse",t.Gamepad="gamepad"}(e.InputDeviceType||(e.InputDeviceType={}))})(G);var lt={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.GamepadInputType=void 0,function(t){t.Button="button",t.Axe="axe"}(e.GamepadInputType||(e.GamepadInputType={}))})(lt);var L={};Object.defineProperty(L,"__esModule",{value:!0});L.createAxeName=L.createButtonName=void 0;function gs(e){return`button-${e}`}L.createButtonName=gs;function ys(e){return`axe-${e}`}L.createAxeName=ys;var ae={};Object.defineProperty(ae,"__esModule",{value:!0});ae.getNavigator=void 0;function ws(){return window.navigator}ae.getNavigator=ws;var M={};Object.defineProperty(M,"__esModule",{value:!0});M.serializeGamepad=M.serializeGamepadButton=void 0;function On(e){return{pressed:e.pressed,touched:e.touched,value:e.value}}M.serializeGamepadButton=On;function bs(e){return{axes:e.axes,buttons:e.buttons.map(On),connected:e.connected,id:e.id,index:e.index,mapping:e.mapping,serialized:!0,timestamp:e.timestamp}}M.serializeGamepad=bs;Object.defineProperty(T,"__esModule",{value:!0});T.gamepadToCurrentInputs=T.readCurrentGamepads=void 0;const $s=K,_s=G,xt=lt,Nt=L,Es=ae,Cs=M;function As(e){const t=(0,Es.getNavigator)();return Array.from((0,$s.typedHasOwnProperty)(t,"webkitGetGamepads")?t.webkitGetGamepads():t.getGamepads()).filter(s=>!!s).map(s=>(0,Cs.serializeGamepad)(s)).reduce((s,i)=>{const o=Ds(i,e);return s[i.index]={...i,...o},s},{})}T.readCurrentGamepads=As;function Ss(e){const t={},n={deviceKey:e.index,deviceName:e.id,deviceType:_s.InputDeviceType.Gamepad};return e.buttons.forEach((r,s)=>{if(r.value){const i=(0,Nt.createButtonName)(s);t[i]={...n,details:{inputType:xt.GamepadInputType.Button,buttonDetails:r},inputName:i,inputValue:r.value}}}),e.axes.forEach((r,s)=>{if(r){const i=(0,Nt.createAxeName)(s);t[i]={...n,details:{inputType:xt.GamepadInputType.Axe},inputName:i,inputValue:r}}}),t}T.gamepadToCurrentInputs=Ss;const Pt=.01;function Ds(e,t){const n=t[e.id],r=e.axes.map((i,o)=>{var a;const c=(a=n==null?void 0:n.axesDeadZones[o])!==null&&a!==void 0?a:Pt;return Math.abs(i)<c?0:i}),s=e.buttons.map((i,o)=>{var a;const c=(a=n==null?void 0:n.axesDeadZones[o])!==null&&a!==void 0?a:Pt,l=Math.abs(i.value)<c?0:i.value;return{...i,value:l}});return{axes:r,buttons:s}}Object.defineProperty(S,"__esModule",{value:!0});S.allInputDevicesToAllInputs=S.gamepadMapToInputDevices=void 0;const Ke=K,Ts=T,xs=G;function Ns(e){return(0,Ke.mapObject)(e,(t,n)=>({currentInputs:(0,Ts.gamepadToCurrentInputs)(n),deviceDetails:n,deviceName:n.id,deviceKey:n.index,deviceType:xs.InputDeviceType.Gamepad}))}S.gamepadMapToInputDevices=Ns;function Ps(e){return(0,Ke.getObjectTypedValues)(e).map(r=>r.currentInputs).map(r=>(0,Ke.getObjectTypedValues)(r)).flat()}S.allInputDevicesToAllInputs=Ps;var jn={};Object.defineProperty(jn,"__esModule",{value:!0});var E={};Object.defineProperty(E,"__esModule",{value:!0});E.mouseBaseDevice=E.keyboardBaseDevice=E.isOfInputDeviceType=void 0;const Bn=D,Hn=G;function Is(e,t){return e.deviceType===t}E.isOfInputDeviceType=Is;E.keyboardBaseDevice={deviceDetails:void 0,deviceKey:Bn.keyboardDeviceKeySymbol,deviceName:"keyboard",deviceType:Hn.InputDeviceType.Keyboard};E.mouseBaseDevice={deviceDetails:void 0,deviceKey:Bn.mouseDeviceKeySymbol,deviceName:"mouse",deviceType:Hn.InputDeviceType.Mouse};var ut={},ce={},F={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.InputDeviceHandlerEventTypeEnum=void 0,function(t){t.NewDevicesAdded="new-devices-added",t.AllDevicesUpdated="all-devices-updated",t.CurrentInputsChanged="current-inputs-updated",t.DevicesRemoved="devices-removed"}(e.InputDeviceHandlerEventTypeEnum||(e.InputDeviceHandlerEventTypeEnum={}))})(F);var x={};function ks(){return e=>{var t;return t=class extends CustomEvent{constructor(r){super(e,r)}},t.type=e,t}}function Rs(e){var t;return t=class extends Event{constructor(r){super(e,r)}},t.type=e,t}class Ls extends EventTarget{addEventListener(t,n,r){return super.addEventListener(t,n,r)}dispatchEvent(t){return super.dispatchEvent(t)}removeEventListener(t,n,r){return super.removeEventListener(t,n,r)}}const Ms=Object.freeze(Object.defineProperty({__proto__:null,defineTypedCustomEvent:ks,defineTypedEvent:Rs,TypedEventTarget:Ls},Symbol.toStringTag,{value:"Module"})),Un=bn(Ms);Object.defineProperty(x,"__esModule",{value:!0});x.defineTimedEvent=void 0;const Os=Un;function js(){return(e,t)=>{var n;const r=(n=class extends(0,Os.defineTypedCustomEvent)()(e){static constructIfDataDataCheckPasses(s,...i){const o=r.dataCheckCallback(...i);if(o)return new r({detail:{timestamp:s,data:o}})}},n.dataCheckCallback=t,n);return r}}x.defineTimedEvent=js;Object.defineProperty(ce,"__esModule",{value:!0});ce.AllDevicesUpdatedEvent=void 0;const Bs=F,Hs=x;function Us(...[e,t]){return t}class zs extends(0,Hs.defineTimedEvent)()(Bs.InputDeviceHandlerEventTypeEnum.AllDevicesUpdated,Us){}ce.AllDevicesUpdatedEvent=zs;var le={};Object.defineProperty(le,"__esModule",{value:!0});le.CurrentInputsChangedEvent=void 0;const Vs=K,It=S,Ks=F,Gs=x;function Fs(...[e,t]){const n=(0,It.allInputDevicesToAllInputs)(t),r=e?(0,It.allInputDevicesToAllInputs)(e):[];if(!(0,Vs.areJsonEqual)(r,n)){const s=n.filter(o=>!r.find(a=>{a.inputName,o.inputName})),i=r.filter(o=>!n.find(a=>{a.inputName,o.inputName}));return{newInputs:s,removedInputs:i,allCurrentInputs:n}}}class Ws extends(0,Gs.defineTimedEvent)()(Ks.InputDeviceHandlerEventTypeEnum.CurrentInputsChanged,Fs){}le.CurrentInputsChangedEvent=Ws;var ue={};Object.defineProperty(ue,"__esModule",{value:!0});ue.DevicesRemovedEvent=void 0;const Be=K,Zs=F,Js=x;function qs(...[e,t]){if(!e)return[];const n=(0,Be.getObjectTypedKeys)(e).filter(r=>!(0,Be.typedHasOwnProperty)(t,r));if(n.length)return n.map(r=>e[r]).filter(Be.isTruthy)}class Ys extends(0,Js.defineTimedEvent)()(Zs.InputDeviceHandlerEventTypeEnum.DevicesRemoved,qs){}ue.DevicesRemovedEvent=Ys;var de={};Object.defineProperty(de,"__esModule",{value:!0});de.NewDevicesAddedEvent=void 0;const fe=K,Qs=F,Xs=x;function ei(...[e,t]){if(!e)return(0,fe.getObjectTypedValues)(t);const n=(0,fe.getObjectTypedKeys)(t).filter(r=>!(0,fe.typedHasOwnProperty)(e,r));if(n.length)return n.map(r=>t[r]).filter(fe.isTruthy)}class ti extends(0,Xs.defineTimedEvent)()(Qs.InputDeviceHandlerEventTypeEnum.NewDevicesAdded,ei){}de.NewDevicesAddedEvent=ti;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.inputHandlerEventMap=e.allEvents=void 0;const t=K,n=ce,r=le,s=ue,i=de;e.allEvents=[n.AllDevicesUpdatedEvent,i.NewDevicesAddedEvent,s.DevicesRemovedEvent,r.CurrentInputsChangedEvent];const o=e.allEvents.reduce((a,c)=>(a[c.type]=c,a),{});e.inputHandlerEventMap=(0,t.wrapNarrowTypeWithTypeCheck)()(o)})(ut);var xe={};Object.defineProperty(xe,"__esModule",{value:!0});xe.InputDeviceHandler=void 0;const ni=Un,ri=S,ve=D,si=T,me=E,kt=G,ii=ut;class oi extends ni.TypedEventTarget{constructor(t={}){super(),this.currentKeyboardInputs={},this.currentMouseInputs={},this.gamepadDeadZoneSettings={},this.loopIsRunning=!1,this.currentLoopIndex=-1,t.skipLoopStart||this.startPollingLoop(),t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),this.attachWindowListeners()}attachWindowListeners(){window.addEventListener("keydown",t=>{const n=t.key;this.currentKeyboardInputs.hasOwnProperty(n)||(this.currentKeyboardInputs[n]={deviceType:kt.InputDeviceType.Keyboard,details:{keyboardEvent:t},deviceKey:ve.keyboardDeviceKeySymbol,deviceName:me.keyboardBaseDevice.deviceName,inputName:n,inputValue:1})}),window.addEventListener("keyup",t=>{delete this.currentKeyboardInputs[t.key]}),window.addEventListener("mousedown",t=>{const n=t.button;this.currentMouseInputs.hasOwnProperty(n)||(this.currentMouseInputs[n]={deviceType:kt.InputDeviceType.Mouse,details:{mouseEvent:t},deviceName:me.mouseBaseDevice.deviceName,deviceKey:ve.mouseDeviceKeySymbol,inputName:n,inputValue:1})}),window.addEventListener("mouseup",t=>{delete this.currentMouseInputs[t.button]})}runPollingLoop(t,n){this.loopIsRunning&&this.currentLoopIndex===t&&(this.updateInputDevices(n),requestAnimationFrame(r=>{this.runPollingLoop(t,r)}))}fireEvents(t,n){ii.allEvents.forEach(r=>{const s=r.constructIfDataDataCheckPasses(t,this.lastReadInputDevices,n);s&&this.dispatchEvent(s)})}readAllInputDevices(){const t=(0,si.readCurrentGamepads)(this.gamepadDeadZoneSettings),n=(0,ri.gamepadMapToInputDevices)(t);return{[ve.keyboardDeviceKeySymbol]:{...me.keyboardBaseDevice,currentInputs:{...this.currentKeyboardInputs}},[ve.mouseDeviceKeySymbol]:{...me.mouseBaseDevice,currentInputs:{...this.currentMouseInputs}},...n}}startPollingLoop(){this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)})}pausePollingLoop(){this.loopIsRunning=!1}getLastPollResults(){return this.lastReadInputDevices}updateInputDevices(t=Date.now()){const n=this.readAllInputDevices();return this.fireEvents(t,n),this.lastReadInputDevices=n,n}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}xe.InputDeviceHandler=oi;(function(e){var t=he&&he.__createBinding||(Object.create?function(r,s,i,o){o===void 0&&(o=i);var a=Object.getOwnPropertyDescriptor(s,i);(!a||("get"in a?!s.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(r,o,a)}:function(r,s,i,o){o===void 0&&(o=i),r[o]=s[i]}),n=he&&he.__exportStar||function(r,s){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(s,i)&&t(s,r,i)};Object.defineProperty(e,"__esModule",{value:!0}),n($n,e),n(S,e),n(D,e),n(jn,e),n(L,e),n(ae,e),n(T,e),n(M,e),n(E,e),n(G,e),n(lt,e),n(ut,e),n(F,e),n(x,e),n(ce,e),n(le,e),n(ue,e),n(de,e),n(xe,e)})(w);var B=(e=>(e.Game="game",e.AssignControls="assign-controls",e))(B||{});const be=0;function ai(e){if(!ot(e)||!k(e,"settingsVersion"))return;if(typeof e.settingsVersion!="number"||e.settingsVersion>be){console.error(`Invalid version number from settings: ${e.settingsVersion}. Latest possible version is ${be}`);return}let t=e.settingsVersion;for(;t<be;){const n=li[t];if(!n){console.error(`Failed to get settings updater for version ${t}`);return}if(e=n(e),!e)return;t++}if(ci(e))return e}function ci(e){return!!(ot(e)&&Dn(e,["gamepadSettings","bindings","settingsVersion"]))}const li=Mn()({}),ui={deadZones:{}},Rt={gamepadSettings:ui,bindings:{},settingsVersion:be},zn="forward-game-settings";function di(){const e=window.localStorage.getItem(zn);if(!!e)try{const t=JSON.parse(e);return console.log({parsedSettings:t}),ai(t)}catch(t){console.error(`Failed to load game settings: ${t}`);return}}function pi(){const e=di();return e||(Vn(Rt),Rt)}function Vn(e){try{return window.localStorage.setItem(zn,JSON.stringify(e)),!0}catch(t){return console.error(t),!1}}class pe extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Lt extends pe{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Ne="locationchange";let Mt=!1;const hi=window.history.pushState;function Ot(...e){const t=hi.apply(window.history,e);return window.dispatchEvent(new Event(Ne)),t}const fi=window.history.replaceState;function jt(...e){const t=fi.apply(window.history,e);return window.dispatchEvent(new Event(Ne)),t}function vi(){if(!Mt){if(window.history.pushState===Ot)throw new Lt("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===jt)throw new Lt("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");Mt=!0,window.history.pushState=Ot,window.history.replaceState=jt,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(Ne))})}}function mi(e){return Array.from(e.entries()).reduce((t,n)=>(t[n[0]]=n[1],t),{})}function gi(e){const t=Object.entries(e).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(t)}function yi(e){const n=(e?window.location.pathname.replace(e,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?mi(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class wi extends pe{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Q(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const n=Object.entries(e.search).join(" "),r=Object.entries(t.search).join(" ");if(n!==r)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Bt=6;function Ht(e,t){const n=e.getCurrentRawRoutes();if(e.sanitizationDepth>Bt)throw new wi(`Route sanitization depth has exceed the max of ${Bt} with ${JSON.stringify(n)}`);const r=e.sanitizeFullRoute(n);if(Q(r,n))e.sanitizationDepth=0,t?t(r):e.listeners.forEach(s=>{s(r)});else return e.sanitizationDepth++,e.setRoutes(r,!0)}class He extends pe{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function bi(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new He(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new He(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new He(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function $i(e,t,n,r=!1){const s=Kn(e,t,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function Kn(e,t,n=""){var r;if(!n&&t!=null)throw new pe("Route base regexp was defined but routeBase string was not provided.");const s=_i(t)?`/${n}`:"",i=e.search?gi(e.search).toString():"",o=i?`?${i}`:"",a=!((r=e.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",c=e.hash?`${a}${e.hash}`:"";return`${s}/${e.paths.join("/")}${o}${c}`}function _i(e){return!!(e&&window.location.pathname.match(e))}function Ei(e={}){var t;bi(e),vi();const n=(t=e.routeBase)===null||t===void 0?void 0:t.replace(/\/+$/,""),r=n?new RegExp(`^\\/${e.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:e,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes:(o,a=!1,c=!1)=>{const l=i.getCurrentRawRoutes(),u={...l,...o},p=i.sanitizeFullRoute(u);if(!(!c&&Q(l,p)))return $i(p,r,n,a)},createRoutesUrl:o=>Kn(o,r,n),getCurrentRawRoutes:()=>yi(r),addRouteListener:(o,a)=>{if(e.maxListenerCount&&i.listeners.size>=e.maxListenerCount)throw new pe(`Tried to exceed route listener max of ${e.maxListenerCount}.`);return i.listeners.add(a),s||(window.addEventListener(Ne,()=>Ht(i)),s=!0),o&&Ht(i,a),a},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const Ge={paths:[B.AssignControls],search:void 0,hash:void 0};function Ci(){return Ei({maxListenerCount:1,routeBase:"forward-game",routeSanitizer:e=>{const t=e.paths[0];return it(t,B)?{...Ge,paths:[t]}:Ge}})}ie()("change-route-event");const Gn=ie()("breaking-error"),Fn=ie()("update-game-settings");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=(e,t,n)=>{const r=new Map;for(let s=t;s<=n;s++)r.set(e[s],s);return r},Wn=Ye(class extends Qe{constructor(e){if(super(e),e.type!==ln.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const s=[],i=[];let o=0;for(const a of e)s[o]=r?r(a,o):o,i[o]=n(a,o),o++;return{values:i,keys:s}}render(e,t,n){return this.ht(e,t,n).values}update(e,[t,n,r]){var s;const i=Sr(e),{values:o,keys:a}=this.ht(t,n,r);if(!Array.isArray(i))return this.ut=a,o;const c=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],l=[];let u,p,d=0,f=i.length-1,v=0,h=o.length-1;for(;d<=f&&v<=h;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(c[d]===a[v])l[v]=P(i[d],o[v]),d++,v++;else if(c[f]===a[h])l[h]=P(i[f],o[h]),f--,h--;else if(c[d]===a[h])l[h]=P(i[d],o[h]),Z(e,l[h+1],i[d]),d++,h--;else if(c[f]===a[v])l[v]=P(i[f],o[v]),Z(e,i[d],i[f]),f--,v++;else if(u===void 0&&(u=Ut(a,v,h),p=Ut(c,d,f)),u.has(c[d]))if(u.has(c[f])){const g=p.get(a[v]),A=g!==void 0?i[g]:null;if(A===null){const dt=Z(e,i[d]);P(dt,o[v]),l[v]=dt}else l[v]=P(A,o[v]),Z(e,i[d],A),i[g]=null;v++}else Oe(i[f]),f--;else Oe(i[d]),d++;for(;v<=h;){const g=Z(e,l[h+1]);P(g,o[v]),l[v++]=g}for(;d<=f;){const g=i[d++];g!==null&&Oe(g)}return this.ut=a,Ar(e,l),C}});var m=(e=>(e.Up="up",e.Down="down",e.Left="left",e.Right="right",e.Pause="pause",e))(m||{});const Zn={up:{direction:1,inputName:""},down:{direction:1,inputName:""},left:{direction:1,inputName:""},right:{direction:1,inputName:""},pause:{direction:1,inputName:""}};function Ai(e){return e?Se(e).every(t=>t.inputName!==""):!1}const Si=oe`
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
`;function Di({currentDevice:e,allBindings:t,currentlySelected:n,selectedCallback:r}){var o,a;const s=(a=(o=t[e.deviceName])==null?void 0:o.bindings)!=null?a:Zn,i={currentlySelected:n,selectedCallback:r};return $`
        <div class="bindings-wrapper">
            <div class="binding-row single">
                ${J({...i,control:m.Up,binding:s[m.Up]})}
            </div>
            <div class="binding-row">
                ${J({...i,control:m.Left,binding:s[m.Left]})}
                ${J({...i,control:m.Right,binding:s[m.Right]})}
            </div>
            <div class="binding-row single">
                ${J({...i,control:m.Down,binding:s[m.Down]})}
            </div>
            <div class="binding-row single">
                ${J({...i,control:m.Pause,binding:s[m.Pause]})}
            </div>
        </div>
    `}function J({control:e,binding:t,currentlySelected:n,selectedCallback:r}){const s=t.inputName===""?"N/A":t.inputName;return $`
        <div
            class="individual-binding-wrapper ${n?"blocked":""} ${n===e?"selected":""}"
            ${b("click",()=>{r(e)})}
        >
            <span class="control-name">${e}</span>
            <span class="bound-name">${s}</span>
        </div>
    `}function Ti(e){switch(e.deviceType){case w.InputDeviceType.Gamepad:return"\u{1F3AE}";case w.InputDeviceType.Keyboard:return"\u2328\uFE0F";case w.InputDeviceType.Mouse:return"\u{1F5B1}"}}const zt=["red","orange","gold","yellow","lime","green","cyan","blue","purple","magenta"];function Jn({inputDevice:e,animations:t,selectedCallback:n,selectedKey:r,isTopLevel:s=!1}){const i=Ti(e),o=s?zt[Math.floor(Math.random()*zt.length)]:"",a=s?"animated-icon":r===e.deviceKey?"selected":"",c=o?`--glow-color: ${o};`:"";return $`
        <div
            class="input-device-selector ${a}"
            style=${c}
            ${b("click",n)}
        >
            <span class="device-icon">${i}</span>
            <span class="device-name">${e.deviceName}</span>
            ${Wn(t,u=>u.timestamp,()=>Jn({inputDevice:e,animations:[],selectedCallback:n,selectedKey:void 0,isTopLevel:!0}))}
        </div>
    `}const qn=700;function xi(e){const t=Date.now();return Tn(e,(n,r)=>r.filter(s=>s.timestamp>t-qn))}const q=qe()({tagName:"vir-assign-controls",events:{assignmentDone:Ce(),changeDevice:Ce()},styles:oe`
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
            animation: glow ${qn/2}ms;
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

        ${Si};
    `,stateInit:{id:"",currentInputDevices:{},currentInputDeviceAnimations:{},selectedBindingControl:void 0},initCallback:({inputs:e,state:t,updateState:n,genericDispatch:r,dispatch:s,events:i})=>{n({id:re()});const o=e.inputHandler.getLastPollResults();if(o){const a=z(o).reduce((c,l)=>{const u=o[l];return c[l]={deviceKey:u.deviceKey,deviceName:u.deviceName,deviceType:u.deviceType},c},{});n({currentInputDevices:a})}e.inputHandler.addEventListener(w.InputDeviceHandlerEventTypeEnum.NewDevicesAdded,a=>{const c=a.detail.data.reduce((p,d)=>(p[d.deviceKey]={deviceKey:d.deviceKey,deviceName:d.deviceName,deviceType:d.deviceType},p),{}),l={...t.currentInputDevices,...c},u=Se(c)[0];n({currentInputDevices:l}),u&&s(new i.changeDevice(u))}),e.inputHandler.addEventListener(w.InputDeviceHandlerEventTypeEnum.DevicesRemoved,a=>{const c={...t.currentInputDevices};a.detail.data.forEach(l=>{delete c[l.deviceKey]}),n({currentInputDevices:c})}),e.inputHandler.addEventListener(w.InputDeviceHandlerEventTypeEnum.CurrentInputsChanged,a=>{var f,v;const c=a.detail.data.newInputs,l=!!t.selectedBindingControl;let u=!1;if(l){const h=c.filter(g=>{var A;return g.deviceKey===((A=e.selectedDevice)==null?void 0:A.deviceKey)}).filter(g=>Math.abs(g.inputValue)>.7)[0];if(h){h.inputName;const g={...(v=(f=e.gameSettings.bindings[h.deviceName])==null?void 0:f.bindings)!=null?v:Zn,[t.selectedBindingControl]:{inputName:h.inputName,direction:h.inputValue>0?1:-1}};r(new Fn({...e.gameSettings,bindings:{...e.gameSettings.bindings,[h.deviceName]:{deviceName:h.deviceName,bindings:g}}})),u=!0}}const p=c.map(h=>({deviceKey:h.deviceKey,deviceName:h.deviceName,timestamp:Date.now()})),d=xi(t.currentInputDeviceAnimations);p.forEach(h=>{d[h.deviceKey]||(d[h.deviceKey]=[]),d[h.deviceKey].push(h)}),n({currentInputDeviceAnimations:d,...u?{selectedBindingControl:void 0}:{}})})},renderCallback:({state:e,updateState:t,inputs:n,dispatch:r,events:s})=>{var o,a,c;const i=((o=n.selectedDevice)==null?void 0:o.deviceKey)==null?void 0:(a=e.currentInputDevices[n.selectedDevice.deviceKey])!=null?a:e.currentInputDevices[w.keyboardDeviceKeySymbol];return i?$`
            <h2>Configure Inputs</h2>
            <p>
                Select a device to use.
                <br />
                <br />
                To connect a controller, push buttons on it.
            </p>
            <div class="device-selector-wrapper ${e.selectedBindingControl?"blocked":""}">
                ${Wn(Se(e.currentInputDevices).filter(l=>l.deviceKey!==w.mouseDeviceKeySymbol).sort((l,u)=>typeof l.deviceKey=="symbol"?-1:typeof u.deviceKey=="symbol"?1:l.deviceKey-u.deviceKey),l=>l.deviceKey,l=>{var p;const u=e.currentInputDeviceAnimations[l.deviceKey];return Jn({inputDevice:l,animations:u!=null?u:[],selectedCallback:()=>{r(new s.changeDevice(l))},selectedKey:(p=n.selectedDevice)==null?void 0:p.deviceKey,isTopLevel:!1})})}
            </div>
            <div>
                ${Di({currentDevice:i,allBindings:n.gameSettings.bindings,currentlySelected:e.selectedBindingControl,selectedCallback:l=>{t({selectedBindingControl:l})}})}
            </div>
            <div>
                <button
                    class="continue-button"
                    ?disabled=${!Ai((c=n.gameSettings.bindings[i.deviceName])==null?void 0:c.bindings)}
                    ${b("click",()=>{r(new s.assignmentDone)})}
                >
                    Continue
                </button>
            </div>
        `:$``}});class Ni{constructor(){this.shouldRunCallbacks=!0,this.loopCallbacks=new Map}addLoopCallback(t,n){const r=re(),s={lastTimeFired:Date.now(),timeout:n,callback:t};return this.loopCallbacks.set(r,s),r}removeLoopCallback(t){return this.loopCallbacks.delete(t)}addLoopTrigger(t){return t.addLoopCallback((n,r)=>{this.fireLoopCallbacks(r,n)})}fireLoopCallbacks(t,n){if(!this.loopCallbacks.size||!this.shouldRunCallbacks)return;const r=this.generateCallbackInput(t,n);this.loopCallbacks.forEach(s=>{if(s.timeout){const i=t-s.lastTimeFired;if(i>=s.timeout){const o=i-s.timeout;s.lastTimeFired=t-o,s.callback(r,t)}}else s.callback(r,t)})}}class Pi extends Ni{constructor(){super(),this.startGameLoop()}addLoopTrigger(){throw new Error(`${this.constructor.name} handles its own triggers: don't call addLoopTrigger to it.`)}runGameLoop(t){this.fireLoopCallbacks(t,void 0),requestAnimationFrame(n=>{this.runGameLoop(n)})}generateCallbackInput(){}startGameLoop(){requestAnimationFrame(t=>{this.runGameLoop(t)})}}function Vt(e,t,n){return t.map(i=>{if(i.deviceKey===e){const o=rt(n).find(a=>{const c=n[a];return c.inputName===i.inputName&&Ii(c,i)});if(o)return[o,Math.abs(i.inputValue)]}}).filter(tt).reduce((i,o)=>(i[o[0]]=o[1],i),{})}function Ii(e,t){return e.direction>0?t.inputValue>0:t.inputValue<0}const ge=qe()({tagName:"vir-game",styles:oe`
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
    `,stateInit:{currentControls:{},currentPosition:{x:0,y:0},paused:!1,gameLoop:new Pi,timestamp:0,win:!1},events:{exit:Ce()},initCallback:({inputs:e,state:t,updateState:n,dispatch:r,events:s,genericDispatch:i})=>{t.gameLoop.addLoopCallback((o,a)=>{n({timestamp:a})}),e.inputHandler.addEventListener(w.InputDeviceHandlerEventTypeEnum.CurrentInputsChanged,o=>{var f;const a=o.detail.data.allCurrentInputs,c=o.detail.data.newInputs,l=(f=e.gameSettings.bindings[e.selectedDevice.deviceName])==null?void 0:f.bindings;if(!l){i(new Gn(new Error(`current bindings for "${e.selectedDevice.deviceName}" not found.`)));return}const u=Vt(e.selectedDevice.deviceKey,a,l),d=Vt(e.selectedDevice.deviceKey,c,l).hasOwnProperty(m.Pause)?!t.paused:t.paused;n({currentControls:u,paused:d})})},renderCallback:({state:e,updateState:t,inputs:n,dispatch:r,events:s,host:i})=>{const o=ki(e.currentControls,e.currentPosition);Ri(i)&&t({win:!0});const c=e.win||e.paused,l=`top: ${e.currentPosition.y}px; left: ${e.currentPosition.x}px`,u=c?"":"display: none;",p=e.win?"You Win!":"Paused",d=e.win?"":"display: none;";return c||t({currentPosition:o}),$`
            <div class="pause-screen" style=${u}>
                <div class="pause-background"></div>
                <div class="pause-info">
                    <span>${p}</span>
                    <button
                        class="exit-button"
                        style=${d}
                        ${b("click",()=>{r(new s.exit)})}
                    >
                        Exit
                    </button>
                </div>
            </div>
            <div class="victory-location">Get here to win!</div>
            <div class="ship-wrapper">
                <div class="ship" style=${l}></div>
            </div>
        `}}),I=4;function ki(e,t){let n=0,r=0;if(k(e,m.Down)&&(n+=Math.min(e[m.Down],1)*I),k(e,m.Up)&&(n-=Math.min(e[m.Up],1)*I),k(e,m.Right)&&(r+=Math.min(e[m.Right],1)*I),k(e,m.Left)&&(r-=Math.min(e[m.Left],1)*I),r&&n){const s=Math.sqrt(Math.pow(r,2)+Math.pow(n,2));s>I&&(n=n*(I/s),r=r*(I/s))}return{x:t.x+r,y:t.y+n}}function Ri(e){var i,o;const t=(i=e.shadowRoot)==null?void 0:i.querySelector(".victory-location"),n=(o=e.shadowRoot)==null?void 0:o.querySelector(".ship");if(!t||!n)return!1;const r=t.getBoundingClientRect(),s=n.getBoundingClientRect();return s.left<r.right&&s.right>r.left&&s.top<r.bottom&&s.bottom>r.top}const ye=qe()({stateInit:{router:void 0},styles:oe`
        :host {
            display: none;
        }
    `,tagName:"vir-forward-game-app-routing",events:{routeChange:Ce()},initCallback:({updateState:e,dispatch:t,events:n})=>{const r=Ci();e({router:r}),r.addRouteListener(!0,s=>{t(new n.routeChange(s))})},renderCallback:({inputs:e,state:t})=>{Q(e.currentRoute,t.router.getCurrentRawRoutes())||t.router.setRoutes(e.currentRoute);const n=e.currentRoute;return(!Q(n,e.currentRoute)||!Q(n,t.router.getCurrentRawRoutes()))&&t.router.setRoutes(n),$``}});const Kt=pi();cn({tagName:"vir-forward-game-app",stateInit:{currentRoute:Ge,inputHandler:new w.InputDeviceHandler({gamepadDeadZoneSettings:Kt.gamepadSettings.deadZones}),gameSettings:Kt,selectedDevice:void 0},styles:oe`
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
    `,renderCallback:({state:e,updateState:t})=>$`
            <main
                ${b(Fn,n=>{Vn(n.detail),t({gameSettings:n.detail})})}
                ${b(Gn,n=>{console.error(n.detail)})}
            >
                <${ye}
                    ${je(ye,{currentRoute:e.currentRoute})}
                    ${b(ye.events.routeChange,n=>{t({currentRoute:n.detail})})}
                ></${ye}>
                ${e.currentRoute.paths[0]===B.AssignControls||!e.selectedDevice?$`
                            <${q}
                                ${je(q,{inputHandler:e.inputHandler,gameSettings:e.gameSettings,selectedDevice:e.selectedDevice})}
                                ${b(q.events.assignmentDone,()=>{t({currentRoute:{...e.currentRoute,paths:[B.Game]}})})}
                                ${b(q.events.changeDevice,n=>{const r=n.detail;t({selectedDevice:r})})}
                            ></${q}>`:$`
                            <${ge} ${je(ge,{gameSettings:e.gameSettings,inputHandler:e.inputHandler,selectedDevice:e.selectedDevice})} ${b(ge.events.exit,()=>{t({currentRoute:{...e.currentRoute,paths:[B.AssignControls]}})})}></${ge}>`}
            </main>
        `});
