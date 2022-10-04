(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,i){"use strict";var r,n;e.exports=(null==(r=i.g.process)?void 0:r.env)&&"object"==typeof(null==(n=i.g.process)?void 0:n.env)?i.g.process:i(7663)},6840:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(6723)}])},3239:function(e,t,i){"use strict";i.d(t,{H:function(){return ao},a:function(){return as}});var r,n,s,o,a,l,h,u,c,d,f=i(7568),p=i(655),g=i(5893),m=i(7294);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let v=function(e){let t=[],i=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t[i++]=n:n<2048?(t[i++]=n>>6|192,t[i++]=63&n|128):(64512&n)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++r)),t[i++]=n>>18|240,t[i++]=n>>12&63|128,t[i++]=n>>6&63|128,t[i++]=63&n|128):(t[i++]=n>>12|224,t[i++]=n>>6&63|128,t[i++]=63&n|128)}return t},y=function(e){let t=[],i=0,r=0;for(;i<e.length;){let n=e[i++];if(n<128)t[r++]=String.fromCharCode(n);else if(n>191&&n<224){let s=e[i++];t[r++]=String.fromCharCode((31&n)<<6|63&s)}else if(n>239&&n<365){let o=e[i++],a=e[i++],l=e[i++],h=((7&n)<<18|(63&o)<<12|(63&a)<<6|63&l)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(1023&h))}else{let u=e[i++],c=e[i++];t[r++]=String.fromCharCode((15&n)<<12|(63&u)<<6|63&c)}}return t.join("")},_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let n=0;n<e.length;n+=3){let s=e[n],o=n+1<e.length,a=o?e[n+1]:0,l=n+2<e.length,h=l?e[n+2]:0,u=s>>2,c=(3&s)<<4|a>>4,d=(15&a)<<2|h>>6,f=63&h;l||(f=64,o||(d=64)),r.push(i[u],i[c],i[d],i[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(v(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):y(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let n=0;n<e.length;){let s=i[e.charAt(n++)],o=n<e.length,a=o?i[e.charAt(n)]:0;++n;let l=n<e.length,h=l?i[e.charAt(n)]:64;++n;let u=n<e.length,c=u?i[e.charAt(n)]:64;if(++n,null==s||null==a||null==h||null==c)throw Error();let d=s<<2|a>>4;if(r.push(d),64!==h){let f=a<<4&240|h>>2;if(r.push(f),64!==c){let p=h<<6&192|c;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},b=function(e){let t=v(e);return _.encodeByteArray(t,!0)},w=function(e){return b(e).replace(/\./g,"")},I=function(e){try{return _.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function T(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class k extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){var i,r;let n=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?(i=o,r=n,i.replace(S,(e,t)=>{let i=r[t];return null!=i?String(i):`<${t}?>`})):"Error",l=`${this.serviceName}: ${a} (${s}).`,h=new k(s,l,n);return h}}let S=/\{\$([^}]+)}/g;function C(e,t){if(e===t)return!0;let i=Object.keys(e),r=Object.keys(t);for(let n of i){if(!r.includes(n))return!1;let s=e[n],o=t[n];if(A(s)&&A(o)){if(!C(s,o))return!1}else if(s!==o)return!1}for(let a of r)if(!i.includes(a))return!1;return!0}function A(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function O(e){let t=[];for(let[i,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function N(e){let t={},i=e.replace(/^\?/,"").split("&");return i.forEach(e=>{if(e){let[i,r]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function P(e){let t=e.indexOf("?");if(!t)return"";let i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}class D{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(void 0===e&&void 0===t&&void 0===i)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:i}:e).next&&(r.next=L),void 0===r.error&&(r.error=L),void 0===r.complete&&(r.complete=L);let n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),n}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(i){"undefined"!=typeof console&&console.error&&console.error(i)}})}close(e){!this.finalized&&(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function x(e){return e&&e._delegate?e._delegate:e}class M{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let U="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let i=new E;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(n){if(r)return null;throw n}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){var t;if(t=e,"EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:U})}catch(i){}for(let[r,n]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(r);try{let o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch(a){}}}}clearInstance(e=U){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=U){return this.instances.has(e)}getOptions(e=U){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[n,s]of this.instancesDeferred.entries()){let o=this.normalizeInstanceIdentifier(n);i===o&&s.resolve(r)}return r}onInit(e,t){var i;let r=this.normalizeInstanceIdentifier(t),n=null!==(i=this.onInitCallbacks.get(r))&&void 0!==i?i:new Set;n.add(e),this.onInitCallbacks.set(r,n);let s=this.instances.get(r);return s&&e(s,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let r of i)try{r(e,t)}catch(n){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var i;let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===U?void 0:i),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(n){}return r||null}normalizeInstanceIdentifier(e=U){return this.component?this.component.multipleInstances?e:U:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class F{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new j(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let B=[];(i4=i8||(i8={}))[i4.DEBUG=0]="DEBUG",i4[i4.VERBOSE=1]="VERBOSE",i4[i4.INFO=2]="INFO",i4[i4.WARN=3]="WARN",i4[i4.ERROR=4]="ERROR",i4[i4.SILENT=5]="SILENT";let H={debug:i8.DEBUG,verbose:i8.VERBOSE,info:i8.INFO,warn:i8.WARN,error:i8.ERROR,silent:i8.SILENT},V=i8.INFO,$={[i8.DEBUG]:"log",[i8.VERBOSE]:"log",[i8.INFO]:"info",[i8.WARN]:"warn",[i8.ERROR]:"error"},z=(e,t,...i)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),n=$[t];if(n)console[n](`[${r}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class W{constructor(e){this.name=e,this._logLevel=V,this._logHandler=z,this._userLogHandler=null,B.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i8))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?H[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i8.DEBUG,...e),this._logHandler(this,i8.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i8.VERBOSE,...e),this._logHandler(this,i8.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i8.INFO,...e),this._logHandler(this,i8.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i8.WARN,...e),this._logHandler(this,i8.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i8.ERROR,...e),this._logHandler(this,i8.ERROR,...e)}}let K=(e,t)=>t.some(t=>e instanceof t),q,G,X=new WeakMap,J=new WeakMap,Y=new WeakMap,Z=new WeakMap,Q=new WeakMap,ee={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return J.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Y.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return et(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function et(e){if(e instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let r=()=>{e.removeEventListener("success",n),e.removeEventListener("error",s)},n=()=>{t(et(e.result)),r()},s=()=>{i(e.error),r()};e.addEventListener("success",n),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&X.set(t,e)}).catch(()=>{}),Q.set(t,e),t}(e);if(Z.has(e))return Z.get(e);let t=function(e){if("function"==typeof e){var t;return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(G||(G=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(e)?function(...t){return e.apply(ei(this),t),et(X.get(this))}:function(...t){return et(e.apply(ei(this),t))}:function(t,...i){let r=e.call(ei(this),t,...i);return Y.set(r,t.sort?t.sort():[t]),et(r)}}return(e instanceof IDBTransaction&&function(e){if(J.has(e))return;let t=new Promise((t,i)=>{let r=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",s),e.removeEventListener("abort",s)},n=()=>{t(),r()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",n),e.addEventListener("error",s),e.addEventListener("abort",s)});J.set(e,t)}(e),K(e,q||(q=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(e,ee):e}(e);return t!==e&&(Z.set(e,t),Q.set(t,e)),t}let ei=e=>Q.get(e),er=["get","getKey","getAll","getAllKeys","count"],en=["put","add","delete","clear"],es=new Map;function eo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(es.get(t))return es.get(t);let i=t.replace(/FromIndex$/,""),r=t!==i,n=en.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(n||er.includes(i)))return;let s=async function(e,...t){let s=this.transaction(e,n?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),n&&s.done,]))[0]};return es.set(t,s),s}ee=(i6=e=>({...e,get:(t,i,r)=>eo(t,i)||e.get(t,i,r),has:(t,i)=>!!eo(t,i)||e.has(t,i)}))(ee);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ea{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let el="@firebase/app",eh="0.7.33",eu=new W("@firebase/app"),ec="[DEFAULT]",ed={[el]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ef=new Map,ep=new Map;function eg(e,t){try{e.container.addComponent(t)}catch(i){eu.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function em(e){let t=e.name;if(ep.has(t))return eu.debug(`There were multiple attempts to register component ${t}.`),!1;for(let i of(ep.set(t,e),ef.values()))eg(i,e);return!0}function ev(e,t){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}let ey=new R("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e_{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new M("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ey.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eb="9.10.0";function ew(e=ec){let t=ef.get(e);if(!t)throw ey.create("no-app",{appName:e});return t}function eI(e,t,i){var r;let n=null!==(r=ed[e])&&void 0!==r?r:e;i&&(n+=`-${i}`);let s=n.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eu.warn(a.join(" "));return}em(new M(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}let eE="firebase-heartbeat-store",eT=null;function ek(){return eT||(eT=(function(e,t,{blocked:i,upgrade:r,blocking:n,terminated:s}={}){let o=indexedDB.open(e,1),a=et(o);return r&&o.addEventListener("upgradeneeded",e=>{r(et(o.result),e.oldVersion,e.newVersion,et(o.transaction))}),i&&o.addEventListener("blocked",()=>i()),a.then(e=>{s&&e.addEventListener("close",()=>s()),n&&e.addEventListener("versionchange",()=>n())}).catch(()=>{}),a})("firebase-heartbeat-database",1,{upgrade(e,t){0===t&&e.createObjectStore(eE)}}).catch(e=>{throw ey.create("idb-open",{originalErrorMessage:e.message})})),eT}async function eR(e){var t;try{let i=await ek();return i.transaction(eE).objectStore(eE).get(eC(e))}catch(n){if(n instanceof k)eu.warn(n.message);else{let r=ey.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});eu.warn(r.message)}}}async function eS(e,t){var i;try{let r=await ek(),n=r.transaction(eE,"readwrite"),s=n.objectStore(eE);return await s.put(t,eC(e)),n.done}catch(a){if(a instanceof k)eu.warn(a.message);else{let o=ey.create("idb-set",{originalErrorMessage:null===(i=a)||void 0===i?void 0:i.message});eu.warn(o.message)}}}function eC(e){return`${e.name}!${e.options.appId}`}class eA{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eN(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),i=eO();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),i=Date.now();return i-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=eO(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){let i=[],r=e.slice();for(let n of e){let s=i.find(e=>e.agent===n.agent);if(s){if(s.dates.push(n.date),eP(i)>t){s.dates.pop();break}}else if(i.push({agent:n.agent,dates:[n.date]}),eP(i)>t){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=w(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function eO(){let e=new Date;return e.toISOString().substring(0,10)}class eN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise((e,t)=>{try{let i=!0,r="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(r);n.onsuccess=()=>{n.result.close(),i||self.indexedDB.deleteDatabase(r),e(!0)},n.onupgradeneeded=()=>{i=!1},n.onerror=()=>{var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(s){t(s)}}).then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await eR(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let r=await this.read();return eS(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let r=await this.read();return eS(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function eP(e){return w(JSON.stringify({version:2,heartbeats:e})).length}function eD(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}em(new M("platform-logger",e=>new ea(e),"PRIVATE")),em(new M("heartbeat",e=>new eA(e),"PRIVATE")),eI(el,eh,""),eI(el,eh,"esm2017"),eI("fire-js","");let eL=new R("auth","Firebase",eD()),ex=new W("@firebase/auth");function eM(e,...t){ex.logLevel<=i8.ERROR&&ex.error(`Auth (${eb}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eU(e,...t){throw eB(e,...t)}function ej(e,...t){return eB(e,...t)}function eF(e,t,i){let r=Object.assign(Object.assign({},eD()),{[t]:i}),n=new R("auth","Firebase",r);return n.create(t,{appName:e.name})}function eB(e,...t){if("string"!=typeof e){let i=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(i,...r)}return eL.create(e,...t)}function eH(e,t,...i){if(!e)throw eB(t,...i)}function eV(e){let t="INTERNAL ASSERTION FAILED: "+e;throw eM(t),Error(t)}function e$(e,t){e||eV(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ez=new Map;function eW(e){e$(e instanceof Function,"Expected a class definition");let t=ez.get(e);return t?(e$(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ez.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eK(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function eq(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eG{constructor(e,t){this.shortDelay=e,this.longDelay=t,e$(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===eq()||"https:"===eq()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eX(e,t){e$(e.emulator,"Emulator should always be set here");let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eJ{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void eV("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void eV("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void eV("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eY={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},eZ=new eG(3e4,6e4);function eQ(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function e0(e,t,i,r,n={}){return e1(e,n,async()=>{let n={},s={};r&&("GET"===t?s=r:n={body:JSON.stringify(r)});let o=O(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),eJ.fetch()(e3(e,e.config.apiHost,i,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},n))})}async function e1(e,t,i){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},eY),t);try{let n=new e4(e),s=await Promise.race([i(),n.promise]);n.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw e6(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let a=s.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===l)throw e6(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===l)throw e6(e,"email-already-in-use",o);if("USER_DISABLED"===l)throw e6(e,"user-disabled",o);let u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw eF(e,u,h);eU(e,u)}}catch(c){if(c instanceof k)throw c;eU(e,"network-request-failed")}}async function e2(e,t,i,r,n={}){let s=await e0(e,t,i,r,n);return"mfaPendingCredential"in s&&eU(e,"multi-factor-auth-required",{_serverResponse:s}),s}function e3(e,t,i,r){let n=`${t}${i}?${r}`;return e.config.emulator?eX(e.config,n):`${e.config.apiScheme}://${n}`}class e4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ej(this.auth,"network-request-failed")),eZ.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function e6(e,t,i){let r={appName:e.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);let n=ej(e,t,r);return n.customData._tokenResponse=i,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function e5(e,t){return e0(e,"POST","/v1/accounts:delete",t)}async function e8(e,t){return e0(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e9(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(i){}}async function e7(e,t=!1){let i=x(e),r=await i.getIdToken(t),n=tt(r);eH(n&&n.exp&&n.auth_time&&n.iat,i.auth,"internal-error");let s="object"==typeof n.firebase?n.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:n,token:r,authTime:e9(te(n.auth_time)),issuedAtTime:e9(te(n.iat)),expirationTime:e9(te(n.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function te(e){return 1e3*Number(e)}function tt(e){var t;let[i,r,n]=e.split(".");if(void 0===i||void 0===r||void 0===n)return eM("JWT malformed, contained fewer than 3 sections"),null;try{let s=I(r);if(!s)return eM("Failed to decode base64 JWT payload"),null;return JSON.parse(s)}catch(o){return eM("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ti(e,t,i=!1){if(i)return t;try{return await t}catch(r){throw r instanceof k&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){!this.isRunning&&(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let i=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),i}{this.errorBackoff=3e4;let r=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=r-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){(null===(e=t)||void 0===e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=e9(this.lastLoginAt),this.creationTime=e9(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ts(e){var t,i;let r=e.auth,n=await e.getIdToken(),s=await ti(e,e8(r,{idToken:n}));eH(null==s?void 0:s.users.length,r,"internal-error");let o=s.users[0];e._notifyReloadListener(o);let a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?(i=o.providerUserInfo,i.map(e=>{var{providerId:t}=e,i=(0,p.__rest)(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[],l=function(e,t){let i=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...i,...t]}(e.providerData,a),h=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null==l?void 0:l.length),c={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new tn(o.createdAt,o.lastLoginAt),isAnonymous:!!h&&u};Object.assign(e,c)}async function to(e){let t=x(e);await ts(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ta(e,t){let i=await e1(e,{},async()=>{let i=O({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:n}=e.config,s=e3(e,r,"/v1/token",`key=${n}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",eJ.fetch()(s,{method:"POST",headers:o,body:i})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){eH(e.idToken,"internal-error"),eH(void 0!==e.idToken,"internal-error"),eH(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=tt(e);return eH(t,"internal-error"),eH(void 0!==t.exp,"internal-error"),eH(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(eH(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:r,expiresIn:n}=await ta(e,t);this.updateTokensAndExpiration(i,r,Number(n))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){let{refreshToken:i,accessToken:r,expirationTime:n}=t,s=new tl;return i&&(eH("string"==typeof i,"internal-error",{appName:e}),s.refreshToken=i),r&&(eH("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),n&&(eH("number"==typeof n,"internal-error",{appName:e}),s.expirationTime=n),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tl,this.toJSON())}_performRefresh(){return eV("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function th(e,t){eH("string"==typeof e||void 0===e,"internal-error",{appName:t})}class tu{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,n=(0,p.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new tn(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){let t=await ti(this,this.stsTokenManager.getToken(this.auth,e));return eH(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return e7(this,e)}reload(){return to(this)}_assign(e){this!==e&&(eH(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new tu(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){eH(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ts(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await ti(this,e5(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,n,s,o,a,l,h;let u=null!==(i=t.displayName)&&void 0!==i?i:void 0,c=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(n=t.phoneNumber)&&void 0!==n?n:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:I}=t;eH(y&&I,e,"internal-error");let E=tl.fromJSON(this.name,I);eH("string"==typeof y,e,"internal-error"),th(u,e.name),th(c,e.name),eH("boolean"==typeof _,e,"internal-error"),eH("boolean"==typeof b,e,"internal-error"),th(d,e.name),th(f,e.name),th(p,e.name),th(g,e.name),th(m,e.name),th(v,e.name);let T=new tu({uid:y,auth:e,email:c,emailVerified:_,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(T.providerData=w.map(e=>Object.assign({},e))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,i=!1){let r=new tl;r.updateFromServerResponse(t);let n=new tu({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ts(n),n}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function td(e,t,i){return`firebase:${e}:${t}:${i}`}tc.type="NONE";class tf{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:r,name:n}=this.auth;this.fullUserKey=td(this.userKey,r.apiKey,n),this.fullPersistenceKey=td("persistence",r.apiKey,n),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?tu._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new tf(eW(tc),e,i);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),n=r[0]||eW(tc),s=td(i,e.config.apiKey,e.name),o=null;for(let a of t)try{let l=await a._get(s);if(l){let h=tu._fromJSON(e,l);a!==n&&(o=h),n=a;break}}catch(u){}let c=r.filter(e=>e._shouldAllowMigration);return n._shouldAllowMigration&&c.length&&(n=c[0],o&&await n._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==n)try{await e._remove(s)}catch(t){}}))),new tf(n,e,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tp(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ty(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(tg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(tb(t))return"Blackberry";if(tw(t))return"Webos";if(tm(t))return"Safari";if((t.includes("chrome/")||tv(t))&&!t.includes("edge/"))return"Chrome";if(t_(t))return"Android";let i=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==i?void 0:i.length)===2)return i[1]}return"Other"}function tg(e=T()){return/firefox\//i.test(e)}function tm(e=T()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tv(e=T()){return/crios\//i.test(e)}function ty(e=T()){return/iemobile/i.test(e)}function t_(e=T()){return/android/i.test(e)}function tb(e=T()){return/blackberry/i.test(e)}function tw(e=T()){return/webos/i.test(e)}function tI(e=T()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function tE(e=T()){return tI(e)||t_(e)||tw(e)||tb(e)||/windows phone/i.test(e)||ty(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tT(e,t=[]){let i;switch(e){case"Browser":i=tp(T());break;case"Worker":i=`${tp(T())}-${e}`;break;default:i=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${eb}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let i=t=>new Promise((i,r)=>{try{let n=e(t);i(n)}catch(s){r(s)}});i.onAbort=t,this.queue.push(i);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;let i=[];try{for(let r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(o){for(let n of(i.reverse(),i))try{n()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=o)||void 0===t?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tR{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tS(this),this.idTokenSubscription=new tS(this),this.beforeStateQueue=new tk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eL,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=eW(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await tf.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(n){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser(),r=i,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&(null==a?void 0:a.user)&&(r=a.user,n=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(eH(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(i){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await ts(e)}catch(i){if((null===(t=i)||void 0===t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?x(e):null;return t&&eH(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&eH(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(eW(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new R("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&eW(e)||this._popupRedirectResolver;eH(t,this,"argument-error"),this.redirectPersistenceManager=await tf.create(this,[eW(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};let n="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(eH(s,this,"internal-error"),s.then(()=>n(this.currentUser)),"function"==typeof t)?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return eH(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!(!e||this.frameworks.includes(e))&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let i=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}class tS{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let i=new D(e,void 0);return i.subscribe.bind(i)}(e=>this.observer=e)}get next(){return eH(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tC{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return eV("not implemented")}_getIdTokenResponse(e){return eV("not implemented")}_linkToIdToken(e,t){return eV("not implemented")}_getReauthenticationResolver(e){return eV("not implemented")}}async function tA(e,t){return e0(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tO(e,t){return e2(e,"POST","/v1/accounts:signInWithPassword",eQ(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tN(e,t){return e2(e,"POST","/v1/accounts:signInWithEmailLink",eQ(e,t))}async function tP(e,t){return e2(e,"POST","/v1/accounts:signInWithEmailLink",eQ(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tD extends tC{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new tD(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new tD(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tO(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tN(e,{email:this._email,oobCode:this._password});default:eU(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return tA(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tP(e,{idToken:t,email:this._email,oobCode:this._password});default:eU(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tL(e,t){return e2(e,"POST","/v1/accounts:signInWithIdp",eQ(e,t))}class tx extends tC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new tx(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):eU("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,n=(0,p.__rest)(t,["providerId","signInMethod"]);if(!i||!r)return null;let s=new tx(i,r);return s.idToken=n.idToken||void 0,s.accessToken=n.accessToken||void 0,s.secret=n.secret,s.nonce=n.nonce,s.pendingToken=n.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return tL(e,t)}_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,tL(e,i)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,tL(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=O(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tM(e,t){return e0(e,"POST","/v1/accounts:sendVerificationCode",eQ(e,t))}async function tU(e,t){return e2(e,"POST","/v1/accounts:signInWithPhoneNumber",eQ(e,t))}async function tj(e,t){let i=await e2(e,"POST","/v1/accounts:signInWithPhoneNumber",eQ(e,t));if(i.temporaryProof)throw e6(e,"account-exists-with-different-credential",i);return i}let tF={USER_NOT_FOUND:"user-not-found"};async function tB(e,t){let i=Object.assign(Object.assign({},t),{operation:"REAUTH"});return e2(e,"POST","/v1/accounts:signInWithPhoneNumber",eQ(e,i),tF)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tH extends tC{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new tH({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new tH({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tU(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return tj(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return tB(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:n}=e;return i||t||r||n?new tH({verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:n}):null}}class tV{constructor(e){var t,i,r,n,s,o;let a=N(P(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,h=null!==(i=a.oobCode)&&void 0!==i?i:null,u=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);eH(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=null!==(n=a.continueUrl)&&void 0!==n?n:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=N(P(e)).link,i=t?N(P(t)).deep_link_id:null,r=N(P(e)).deep_link_id,n=r?N(P(r)).link:null;return n||r||i||t||e}(e);try{return new tV(t)}catch(i){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t${constructor(){this.providerId=t$.PROVIDER_ID}static credential(e,t){return tD._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let i=tV.parseLink(t);return eH(i,"argument-error"),tD._fromEmailAndCode(e,i.code,i.tenantId)}}t$.PROVIDER_ID="password",t$.EMAIL_PASSWORD_SIGN_IN_METHOD="password",t$.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tz{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tW extends tz{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tK extends tW{constructor(){super("facebook.com")}static credential(e){return tx._fromParams({providerId:tK.PROVIDER_ID,signInMethod:tK.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tK.credentialFromTaggedObject(e)}static credentialFromError(e){return tK.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tK.credential(e.oauthAccessToken)}catch(t){return null}}}tK.FACEBOOK_SIGN_IN_METHOD="facebook.com",tK.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tq extends tW{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tx._fromParams({providerId:tq.PROVIDER_ID,signInMethod:tq.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tq.credentialFromTaggedObject(e)}static credentialFromError(e){return tq.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return tq.credential(t,i)}catch(r){return null}}}tq.GOOGLE_SIGN_IN_METHOD="google.com",tq.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tG extends tW{constructor(){super("github.com")}static credential(e){return tx._fromParams({providerId:tG.PROVIDER_ID,signInMethod:tG.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tG.credentialFromTaggedObject(e)}static credentialFromError(e){return tG.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tG.credential(e.oauthAccessToken)}catch(t){return null}}}tG.GITHUB_SIGN_IN_METHOD="github.com",tG.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tX extends tW{constructor(){super("twitter.com")}static credential(e,t){return tx._fromParams({providerId:tX.PROVIDER_ID,signInMethod:tX.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tX.credentialFromTaggedObject(e)}static credentialFromError(e){return tX.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return tX.credential(t,i)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tJ(e,t){return e2(e,"POST","/v1/accounts:signUp",eQ(e,t))}tX.TWITTER_SIGN_IN_METHOD="twitter.com",tX.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tY{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){let n=await tu._fromIdTokenResponse(e,i,r),s=tZ(i),o=new tY({user:n,providerId:s,_tokenResponse:i,operationType:t});return o}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);let r=tZ(i);return new tY({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function tZ(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tQ extends k{constructor(e,t,i,r){var n;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,tQ.prototype),this.customData={appName:e.name,tenantId:null!==(n=e.tenantId)&&void 0!==n?n:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new tQ(e,t,i,r)}}function t0(e,t,i,r){let n="reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e);return n.catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw tQ._fromErrorAndOperation(e,i,t,r);throw i})}async function t1(e,t,i=!1){let r=await ti(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return tY._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function t2(e,t,i=!1){var r;let{auth:n}=e,s="reauthenticate";try{let o=await ti(e,t0(n,s,t,e),i);eH(o.idToken,n,"internal-error");let a=tt(o.idToken);eH(a,n,"internal-error");let{sub:l}=a;return eH(e.uid===l,n,"user-mismatch"),tY._forOperation(e,s,o)}catch(h){throw(null===(r=h)||void 0===r?void 0:r.code)==="auth/user-not-found"&&eU(n,"user-mismatch"),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function t3(e,t,i=!1){let r="signIn",n=await t0(e,r,t),s=await tY._fromIdTokenResponse(e,r,n);return i||await e._updateCurrentUser(s.user),s}async function t4(e,t){var i;return t3(x(e),t)}async function t6(e,t,i){var r;let n=x(e),s=await tJ(n,{returnSecureToken:!0,email:t,password:i}),o=await tY._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(o.user),o}new WeakMap;let t5="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t8{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(t5,"1"),this.storage.removeItem(t5),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class t9 extends t8{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let e=T();return tm(e)||tI(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=tE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,i)=>{this.notifyListeners(e,i)});return}let i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(i);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},s=this.storage.getItem(i);(function(){let e=T();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let r of Array.from(i))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}t9.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t7 extends t8{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}t7.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ie{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let i=new ie(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){var t;let{eventId:i,eventType:r,data:n}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:r});let o=Array.from(s).map(async t=>t(e.origin,n)),a=await Promise.all(o.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(i){return{fulfilled:!1,reason:i}}}));e.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function it(e="",t=10){let i="";for(let r=0;r<t;r++)i+=Math.floor(10*Math.random());return e+i}ie.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ii{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){let r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw Error("connection_unavailable");let n,s;return new Promise((o,a)=>{let l=it("",20);r.port1.start();let h=setTimeout(()=>{a(Error("unsupported_event"))},i);s={messageChannel:r,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(h),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(h),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ir(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function is(){return void 0!==ir().WorkerGlobalScope&&"function"==typeof ir().importScripts}async function io(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ia="firebaseLocalStorageDb",il="firebaseLocalStorage",ih="fbase_key";class iu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ic(e,t){return e.transaction([il],t?"readwrite":"readonly").objectStore(il)}function id(){let e=indexedDB.open(ia,1);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(il,{keyPath:ih})}catch(r){i(r)}}),e.addEventListener("success",async()=>{let i=e.result;i.objectStoreNames.contains(il)?t(i):(i.close(),await function(){let e=indexedDB.deleteDatabase(ia);return new iu(e).toPromise()}(),t(await id()))})})}async function ip(e,t,i){let r=ic(e,!0).put({[ih]:t,value:i});return new iu(r).toPromise()}async function ig(e,t){let i=ic(e,!1).get(t),r=await new iu(i).toPromise();return void 0===r?null:r.value}function im(e,t){let i=ic(e,!0).delete(t);return new iu(i).toPromise()}class iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await id()),this.db}async _withRetries(e){let t=0;for(;;)try{let i=await this._openDb();return await e(i)}catch(r){if(t++>3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return is()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ie._getInstance(is()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let i=await this._poll();return{keyProcessed:i.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await io(),!this.activeServiceWorker)return;this.sender=new ii(this.activeServiceWorker);let i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(i){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await id();return await ip(e,t5,"1"),await im(e,t5),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ip(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>ig(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>im(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=ic(e,!1).getAll();return new iu(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],i=new Set;for(let{fbase_key:r,value:n}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(n)&&(this.notifyListeners(r,n),t.push(r));for(let s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}function iy(e){return`__${e}${Math.floor(1e6*Math.random())}`}async function i_(e,t,i){var r,n,s,o,a;let l=await i.verify();try{eH("string"==typeof l,e,"argument-error"),eH("recaptcha"===i.type,e,"argument-error");let h;if(h="string"==typeof t?{phoneNumber:t}:t,"session"in h){let u=h.session;if("phoneNumber"in h){eH("enroll"===u.type,e,"internal-error");let c=await (n=e,s={idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:h.phoneNumber,recaptchaToken:l}},e0(n,"POST","/v2/accounts/mfaEnrollment:start",eQ(n,s)));return c.phoneSessionInfo.sessionInfo}{eH("signin"===u.type,e,"internal-error");let d=(null===(r=h.multiFactorHint)||void 0===r?void 0:r.uid)||h.multiFactorUid;eH(d,e,"missing-multi-factor-info");let f=await (o=e,a={mfaPendingCredential:u.credential,mfaEnrollmentId:d,phoneSignInInfo:{recaptchaToken:l}},e0(o,"POST","/v2/accounts/mfaSignIn:start",eQ(o,a)));return f.phoneResponseInfo.sessionInfo}}{let{sessionInfo:p}=await tM(e,{phoneNumber:h.phoneNumber,recaptchaToken:l});return p}}finally{i._reset()}}iv.type="LOCAL",iy("rcb"),new eG(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ib{constructor(e){var t;this.providerId=ib.PROVIDER_ID,this.auth=x(e)}verifyPhoneNumber(e,t){return i_(this.auth,e,x(t))}static credential(e,t){return tH._fromVerification(e,t)}static credentialFromResult(e){return ib.credentialFromTaggedObject(e)}static credentialFromError(e){return ib.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?tH._fromTokenResponse(t,i):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iw(e,t){return t?eW(t):(eH(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}ib.PROVIDER_ID="phone",ib.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iI extends tC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tL(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tL(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tL(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iE(e){return t3(e.auth,new iI(e),e.bypassAuthState)}function iT(e){let{auth:t,user:i}=e;return eH(i,t,"internal-error"),t2(i,new iI(e),e.bypassAuthState)}async function ik(e){let{auth:t,user:i}=e;return eH(i,t,"internal-error"),t1(i,new iI(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iR{constructor(e,t,i,r,n=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:r,tenantId:n,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:i,tenantId:n||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iE;case"linkViaPopup":case"linkViaRedirect":return ik;case"reauthViaPopup":case"reauthViaRedirect":return iT;default:eU(this.auth,"internal-error")}}resolve(e){e$(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){e$(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iS=new eG(2e3,1e4);async function iC(e,t,i){var r;let n=x(e);!function(e,t,i){if(!(t instanceof i))throw i.name!==t.constructor.name&&eU(e,"argument-error"),eF(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,tz);let s=iw(n,i),o=new iA(n,"signInViaPopup",t,s);return o.executeNotNull()}class iA extends iR{constructor(e,t,i,r,n){super(e,t,r,n),this.provider=i,this.authWindow=null,this.pollId=null,iA.currentPopupAction&&iA.currentPopupAction.cancel(),iA.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return eH(e,this.auth,"internal-error"),e}async onExecution(){e$(1===this.filter.length,"Popup operations only handle one event");let e=it();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ej(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ej(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,iA.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ej(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,iS.get())};e()}}iA.currentPopupAction=null;let iO=new Map;class iN extends iR{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=iO.get(this.auth._key());if(!e){try{let t=await iP(this.resolver,this.auth),i=t?await super.execute():null;e=()=>Promise.resolve(i)}catch(r){e=()=>Promise.reject(r)}iO.set(this.auth._key(),e)}return this.bypassAuthState||iO.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iP(e,t){var i,r;let n=(i=t,td("pendingRedirect",i.config.apiKey,i.name)),s=(r=e,eW(r._redirectPersistence));if(!await s._isAvailable())return!1;let o=await s._get(n)==="true";return await s._remove(n),o}function iD(e,t){iO.set(e._key(),t)}async function iL(e,t,i=!1){var r;let n=x(e),s=iw(n,t),o=new iN(n,s,i),a=await o.execute();return a&&!i&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}class ix{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iU(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!iU(e)){let r=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(ej(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(iM(e))}saveEventToCache(e){this.cachedEventUids.add(iM(e)),this.lastProcessedEventTime=Date.now()}}function iM(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function iU({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ij(e,t={}){return e0(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iB=/^https?/;async function iH(e){if(e.config.emulator)return;let{authorizedDomains:t}=await ij(e);for(let i of t)try{if(iV(i))return}catch(r){}eU(e,"unauthorized-domain")}function iV(e){let t=eK(),{protocol:i,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let n=new URL(e);return""===n.hostname&&""===r?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&n.hostname===r}if(!iB.test(i))return!1;if(iF.test(e))return r===e;let s=e.replace(/\./g,"\\."),o=RegExp("^(.+\\."+s+"|"+s+")$","i");return o.test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i$=new eG(3e4,6e4);function iz(){let e=ir().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let i=0;i<e.CP.length;i++)e.CP[i]=null}}let iW=null,iK=new eG(5e3,15e3),iq={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iG=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function iX(e){var t,i;let r=await (iW=iW||new Promise((t,i)=>{var r,n,s,o;function a(){iz(),gapi.load("gapi.iframes",{callback(){t(gapi.iframes.getContext())},ontimeout(){iz(),i(ej(e,"network-request-failed"))},timeout:i$.get()})}if(null===(n=null===(r=ir().gapi)||void 0===r?void 0:r.iframes)||void 0===n?void 0:n.Iframe)t(gapi.iframes.getContext());else if(null===(s=ir().gapi)||void 0===s?void 0:s.load)a();else{let l=iy("iframefcb");return ir()[l]=()=>{gapi.load?a():i(ej(e,"network-request-failed"))},(o=`https://apis.google.com/js/api.js?onload=${l}`,new Promise((e,t)=>{var i,r;let n=document.createElement("script");n.setAttribute("src",o),n.onload=e,n.onerror=e=>{let i=ej("internal-error");i.customData=e,t(i)},n.type="text/javascript",n.charset="UTF-8",(null!==(r=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==r?r:document).appendChild(n)})).catch(e=>i(e))}}).catch(e=>{throw iW=null,e})),n=ir().gapi;return eH(n,e,"internal-error"),r.open({where:document.body,url:function(e){let t=e.config;eH(t.authDomain,e,"auth-domain-config-required");let i=t.emulator?eX(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:eb},n=iG.get(e.config.apiHost);n&&(r.eid=n);let s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${i}?${O(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iq,dontclear:!0},t=>new Promise(async(i,r)=>{await t.restyle({setHideOnLeave:!1});let n=ej(e,"network-request-failed"),s=ir().setTimeout(()=>{r(n)},iK.get());function o(){ir().clearTimeout(s),i(t)}t.ping(o).then(o,()=>{r(n)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iJ={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class iY{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function iZ(e,t,i,r,n,s){eH(e.config.authDomain,e,"auth-domain-config-required"),eH(e.config.apiKey,e,"invalid-api-key");let o={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:r,v:eb,eventId:n};if(t instanceof tz)for(let[a,l]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))o[a]=l;if(t instanceof tW){let h=t.getScopes().filter(e=>""!==e);h.length>0&&(o.scopes=h.join(","))}for(let u of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[u]&&delete o[u];return`${function({config:e}){return e.emulator?eX(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${O(o).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iQ="webStorageSupport",i0=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t7,this._completeRedirectFn=iL,this._overrideRedirectResult=iD}async _openPopup(e,t,i,r){var n;e$(null===(n=this.eventManagers[e._key()])||void 0===n?void 0:n.manager,"_initialize() not called before _openPopup()");let s=iZ(e,t,i,eK(),r);return function(e,t,i,r=500,n=600){let s=Math.max((window.screen.availHeight-n)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),a="",l=Object.assign(Object.assign({},iJ),{width:r.toString(),height:n.toString(),top:s,left:o}),h=T().toLowerCase();i&&(a=tv(h)?"_blank":i),tg(h)&&(t=t||"http://localhost",l.scrollbars="yes");let u=Object.entries(l).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=T()){var t;return tI(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==a)return function(e,t){let i=document.createElement("a");i.href=e,i.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}(t||"",a),new iY(null);let c=window.open(t||"",a,u);eH(c,e,"popup-blocked");try{c.focus()}catch(d){}return new iY(c)}(e,s,it())}async _openRedirect(e,t,i,r){var n;return await this._originValidation(e),n=iZ(e,t,i,eK(),r),ir().location.href=n,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(e$(r,"If manager is not set, promise should be"),r)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await iX(e),i=new ix(e);return t.register("authEvent",t=>{eH(null==t?void 0:t.authEvent,e,"invalid-auth-event");let r=i.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){let i=this.iframes[e._key()];i.send(iQ,{type:iQ},i=>{var r;let n=null===(r=null==i?void 0:i[0])||void 0===r?void 0:r[iQ];void 0!==n&&t(!!n),eU(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iH(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tE()||tm()||tI()}};var i1="@firebase/auth",i2="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class i3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){eH(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}i5="Browser",em(new M("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:n,authDomain:s}=i.options;return((e,i)=>{eH(n&&!n.includes(":"),"invalid-api-key",{appName:e.name}),eH(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});let r={apiKey:n,authDomain:s,clientPlatform:i5,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tT(i5)},o=new tR(e,i,r);return function(e,t){let i=(null==t?void 0:t.persistence)||[],r=(Array.isArray(i)?i:[i]).map(eW);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{let r=e.getProvider("auth-internal");r.initialize()})),em(new M("auth-internal",e=>{var t,i;let r=x(t=e.getProvider("auth").getImmediate());return new i3(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),eI(i1,i2,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(i5)),eI(i1,i2,"esm2017"),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ eI("firebase","9.10.0","app");var i4,i6,i5,i8,i9,i7="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{},re={},rt=rt||{},ri=i7||self;function rr(){}function rn(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function rs(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function ro(e,t,i){return e.call.apply(e.bind,arguments)}function ra(e,t,i){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function rl(e,t,i){return(rl=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ro:ra).apply(null,arguments)}function rh(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ru(e,t){function i(){}i.prototype=t.prototype,e.X=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.Vb=function(e,i,r){for(var n=Array(arguments.length-2),s=2;s<arguments.length;s++)n[s-2]=arguments[s];return t.prototype[i].apply(e,n)}}function rc(){this.s=this.s,this.o=this.o}rc.prototype.s=!1,rc.prototype.na=function(){this.s||(this.s=!0,this.M())},rc.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let rd=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return -1};function rf(e){let t=e.length;if(0<t){let i=Array(t);for(let r=0;r<t;r++)i[r]=e[r];return i}return[]}function rp(e,t){for(let i=1;i<arguments.length;i++){let r=arguments[i];if(rn(r)){let n=e.length||0,s=r.length||0;e.length=n+s;for(let o=0;o<s;o++)e[n+o]=r[o]}else e.push(r)}}function rg(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}rg.prototype.h=function(){this.defaultPrevented=!0};var rm=function(){if(!ri.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ri.addEventListener("test",rr,t),ri.removeEventListener("test",rr,t)}catch(i){}return e}();function rv(e){return/^[\s\xa0]*$/.test(e)}var ry=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function r_(e,t){return e<t?-1:e>t?1:0}function rb(){var e=ri.navigator;return e&&(e=e.userAgent)?e:""}function rw(e){return -1!=rb().indexOf(e)}function rI(e){return rI[" "](e),e}rI[" "]=rr;var rE=rw("Opera"),rT=rw("Trident")||rw("MSIE"),rk=rw("Edge"),rR=rk||rT,rS=rw("Gecko")&&!(-1!=rb().toLowerCase().indexOf("webkit")&&!rw("Edge"))&&!(rw("Trident")||rw("MSIE"))&&!rw("Edge"),rC=-1!=rb().toLowerCase().indexOf("webkit")&&!rw("Edge");function rA(){var e=ri.document;return e?e.documentMode:void 0}a:{var rO,rN="",rP=(rO=rb(),rS?/rv:([^\);]+)(\)|;)/.exec(rO):rk?/Edge\/([\d\.]+)/.exec(rO):rT?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(rO):rC?/WebKit\/(\S+)/.exec(rO):rE?/(?:Version)[ \/]?(\S+)/.exec(rO):void 0);if(rP&&(rN=rP?rP[1]:""),rT){var rD=rA();if(null!=rD&&rD>parseFloat(rN)){o=String(rD);break a}}o=rN}var rL={};if(ri.document&&rT){a=rA()||parseInt(o,10)||void 0}else a=void 0;var rx=a;function rM(e,t){if(rg.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(rS){a:{try{rI(t.nodeName);var n=!0;break a}catch(s){}n=!1}n||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:rU[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&rM.X.h.call(this)}}ru(rM,rg);var rU={2:"touch",3:"pen",4:"mouse"};rM.prototype.h=function(){rM.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var rj="closure_listenable_"+(1e6*Math.random()|0),rF=0;function rB(e,t,i,r,n){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!r,this.ha=n,this.key=++rF,this.ba=this.ea=!1}function rH(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function rV(e,t,i){for(let r in e)t.call(i,e[r],r,e)}function r$(e){let t={};for(let i in e)t[i]=e[i];return t}let rz="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rW(e,t){let i,r;for(let n=1;n<arguments.length;n++){for(i in r=arguments[n])e[i]=r[i];for(let s=0;s<rz.length;s++)i=rz[s],Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}}function rK(e){this.src=e,this.g={},this.h=0}function rq(e,t){var i=t.type;if(i in e.g){var r,n=e.g[i],s=rd(n,t);(r=0<=s)&&Array.prototype.splice.call(n,s,1),r&&(rH(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function rG(e,t,i,r){for(var n=0;n<e.length;++n){var s=e[n];if(!s.ba&&s.listener==t&&!!i==s.capture&&s.ha==r)return n}return -1}rK.prototype.add=function(e,t,i,r,n){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=rG(e,t,r,n);return -1<o?(t=e[o],i||(t.ea=!1)):((t=new rB(t,this.src,s,!!r,n)).ea=i,e.push(t)),t};var rX="closure_lm_"+(1e6*Math.random()|0),rJ={};function rY(e,t,i,r,n){if(r&&r.once)return function e(t,i,r,n,s){if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],r,n,s);return null}return r=r4(r),t&&t[rj]?t.O(i,r,rs(n)?!!n.capture:!!n,s):rZ(t,i,r,!0,n,s)}(e,t,i,r,n);if(Array.isArray(t)){for(var s=0;s<t.length;s++)rY(e,t[s],i,r,n);return null}return i=r4(i),e&&e[rj]?e.N(t,i,rs(r)?!!r.capture:!!r,n):rZ(e,t,i,!1,r,n)}function rZ(e,t,i,r,n,s){if(!t)throw Error("Invalid event type");var o=rs(n)?!!n.capture:!!n,a=r2(e);if(a||(e[rX]=a=new rK(e)),(i=a.add(t,i,r,o,s)).proxy)return i;if(r=function(){function e(i){return t.call(e.src,e.listener,i)}let t=r1;return e}(),i.proxy=r,r.src=e,r.listener=i,e.addEventListener)rm||(n=o),void 0===n&&(n=!1),e.addEventListener(t.toString(),r,n);else if(e.attachEvent)e.attachEvent(r0(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return i}function rQ(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[rj])rq(t.i,e);else{var i=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(i,r,e.capture):t.detachEvent?t.detachEvent(r0(i),r):t.addListener&&t.removeListener&&t.removeListener(r),(i=r2(t))?(rq(i,e),0==i.h&&(i.src=null,t[rX]=null)):rH(e)}}}function r0(e){return e in rJ?rJ[e]:rJ[e]="on"+e}function r1(e,t){if(e.ba)e=!0;else{t=new rM(t,this);var i=e.listener,r=e.ha||e.src;e.ea&&rQ(e),e=i.call(r,t)}return e}function r2(e){return(e=e[rX])instanceof rK?e:null}var r3="__closure_events_fn_"+(1e9*Math.random()>>>0);function r4(e){return"function"==typeof e?e:(e[r3]||(e[r3]=function(t){return e.handleEvent(t)}),e[r3])}function r6(){rc.call(this),this.i=new rK(this),this.P=this,this.I=null}function r5(e,t){var i,r=e.I;if(r)for(i=[];r;r=r.I)i.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new rg(t,e);else if(t instanceof rg)t.target=t.target||e;else{var n=t;rW(t=new rg(r,e),n)}if(n=!0,i)for(var s=i.length-1;0<=s;s--){var o=t.g=i[s];n=r8(o,r,!0,t)&&n}if(n=r8(o=t.g=e,r,!0,t)&&n,n=r8(o,r,!1,t)&&n,i)for(s=0;s<i.length;s++)n=r8(o=t.g=i[s],r,!1,t)&&n}function r8(e,t,i,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var n=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==i){var a=o.listener,l=o.ha||o.src;o.ea&&rq(e.i,o),n=!1!==a.call(l,r)&&n}}return n&&!r.defaultPrevented}ru(r6,rc),r6.prototype[rj]=!0,r6.prototype.removeEventListener=function(e,t,i,r){!function e(t,i,r,n,s){if(Array.isArray(i))for(var o=0;o<i.length;o++)e(t,i[o],r,n,s);else(n=rs(n)?!!n.capture:!!n,r=r4(r),t&&t[rj])?(t=t.i,(i=String(i).toString())in t.g&&-1<(r=rG(o=t.g[i],r,n,s))&&(rH(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[i],t.h--))):t&&(t=r2(t))&&(i=t.g[i.toString()],t=-1,i&&(t=rG(i,r,n,s)),(r=-1<t?i[t]:null)&&rQ(r))}(this,e,t,i,r)},r6.prototype.M=function(){if(r6.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],r=0;r<i.length;r++)rH(i[r]);delete t.g[e],t.h--}}this.I=null},r6.prototype.N=function(e,t,i,r){return this.i.add(String(e),t,!1,i,r)},r6.prototype.O=function(e,t,i,r){return this.i.add(String(e),t,!0,i,r)};var r9=ri.JSON.stringify;function r7(){var e=ns;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var ne=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new nt,e=>e.reset());class nt{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ni(e){ri.setTimeout(()=>{throw e},0)}function nr(e,t){var i;l||(i=ri.Promise.resolve(void 0),l=function(){i.then(no)}),nn||(l(),nn=!0),ns.add(e,t)}var nn=!1,ns=new class{constructor(){this.h=this.g=null}add(e,t){let i=ne.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}};function no(){for(var e;e=r7();){try{e.h.call(e.g)}catch(t){ni(t)}var i=ne;i.j(e),100>i.h&&(i.h++,e.next=i.g,i.g=e)}nn=!1}function na(e,t){r6.call(this),this.h=e||1,this.g=t||ri,this.j=rl(this.kb,this),this.l=Date.now()}function nl(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function nh(e,t,i){if("function"==typeof e)i&&(e=rl(e,i));else if(e&&"function"==typeof e.handleEvent)e=rl(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:ri.setTimeout(e,t||0)}ru(na,r6),(i9=na.prototype).ca=!1,i9.R=null,i9.kb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),r5(this,"tick"),this.ca&&(nl(this),this.start()))}},i9.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i9.M=function(){na.X.M.call(this),nl(this),delete this.g};class nu extends rc{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=nh(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let i=t.h;t.h=null,t.m.apply(null,i)}(this)}M(){super.M(),this.g&&(ri.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nc(e){rc.call(this),this.h=e,this.g={}}ru(nc,rc);var nd=[];function nf(e,t,i,r){Array.isArray(i)||(i&&(nd[0]=i.toString()),i=nd);for(var n=0;n<i.length;n++){var s=rY(t,i[n],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function np(e){rV(e.g,function(e,t){this.g.hasOwnProperty(t)&&rQ(e)},e),e.g={}}function ng(){this.g=!0}function nm(e,t,i,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i){for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var r=i[e];if(!(2>r.length)){var n=r[1];if(Array.isArray(n)&&!(1>n.length)){var s=n[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<n.length;o++)n[o]=""}}}}return r9(i)}catch(a){return t}}(e,i)+(r?" "+r:"")})}nc.prototype.M=function(){nc.X.M.call(this),np(this)},nc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ng.prototype.Aa=function(){this.g=!1},ng.prototype.info=function(){};var nv={},ny=null;function n_(){return ny=ny||new r6}function nb(e){rg.call(this,nv.Oa,e)}function nw(e){let t=n_();r5(t,new nb(t,e))}function nI(e,t){rg.call(this,nv.STAT_EVENT,e),this.stat=t}function nE(e){let t=n_();r5(t,new nI(t,e))}function nT(e,t){rg.call(this,nv.Pa,e),this.size=t}function nk(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return ri.setTimeout(function(){e()},t)}nv.Oa="serverreachability",ru(nb,rg),nv.STAT_EVENT="statevent",ru(nI,rg),nv.Pa="timingevent",ru(nT,rg);var nR={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},nS={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function nC(){}function nA(e){return e.h||(e.h=e.i())}function nO(){}nC.prototype.h=null;var nN={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function nP(){rg.call(this,"d")}function nD(){rg.call(this,"c")}function nL(){}function nx(e,t,i,r){this.l=e,this.j=t,this.m=i,this.U=r||1,this.S=new nc(this),this.O=nU,e=rR?125:void 0,this.T=new na(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new nM}function nM(){this.i=null,this.g="",this.h=!1}ru(nP,rg),ru(nD,rg),ru(nL,nC),nL.prototype.g=function(){return new XMLHttpRequest},nL.prototype.i=function(){return{}},h=new nL;var nU=45e3,nj={},nF={};function nB(e,t,i){e.K=1,e.v=n6(n0(t)),e.s=i,e.P=!0,nH(e,null)}function nH(e,t){e.F=Date.now(),nW(e),e.A=n0(e.v);var i=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),sl(i.i,"t",r),e.C=0,i=e.l.H,e.h=new nM,e.g=s9(e.l,i?t:null,!e.s),0<e.N&&(e.L=new nu(rl(e.Ka,e,e.g),e.N)),nf(e.S,e.g,"readystatechange",e.hb),t=e.H?r$(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),nw(1),function(e,t,i,r,n,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+r+") [attempt "+n+"]: "+t+"\n"+i+"\n"+o})}(e.j,e.u,e.A,e.m,e.U,e.s)}function nV(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function n$(e,t,i){let r=!0,n;for(;!e.I&&e.C<i.length;)if((n=nz(e,i))==nF){4==t&&(e.o=4,nE(14),r=!1),nm(e.j,e.m,null,"[Incomplete Response]");break}else if(n==nj){e.o=4,nE(15),nm(e.j,e.m,i,"[Invalid Chunk]"),r=!1;break}else nm(e.j,e.m,n,null),nJ(e,n);nV(e)&&n!=nF&&n!=nj&&(e.h.g="",e.C=0),4!=t||0!=i.length||e.h.h||(e.o=1,nE(16),r=!1),e.i=e.i&&r,r?0<i.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+i.length),s0(t),t.K=!0,nE(11))):(nm(e.j,e.m,i,"[Invalid Chunked Response]"),nX(e),nG(e))}function nz(e,t){var i=e.C,r=t.indexOf("\n",i);return -1==r?nF:isNaN(i=Number(t.substring(i,r)))?nj:(r+=1)+i>t.length?nF:(t=t.substr(r,i),e.C=r+i,t)}function nW(e){e.V=Date.now()+e.O,nK(e,e.O)}function nK(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=nk(rl(e.fb,e),t)}function nq(e){e.B&&(ri.clearTimeout(e.B),e.B=null)}function nG(e){0==e.l.G||e.I||s3(e.l,e)}function nX(e){nq(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,nl(e.T),np(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function nJ(e,t){try{var i=e.l;if(0!=i.G&&(i.g==e||sg(i.h,e))){if(!e.J&&sg(i.h,e)&&3==i.G){try{var r=i.Fa.g.parse(t)}catch(n){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){a:if(!i.u){if(i.g){if(i.g.F+3e3<e.F)s2(i),sK(i);else break a}sQ(i),nE(18)}}else i.Ba=s[1],0<i.Ba-i.T&&37500>s[2]&&i.L&&0==i.A&&!i.v&&(i.v=nk(rl(i.bb,i),6e3));if(1>=sp(i.h)&&i.ja){try{i.ja()}catch(o){}i.ja=void 0}}else s6(i,11)}else if((e.J||i.g==e)&&s2(i),!rv(t))for(s=i.Fa.g.parse(t),t=0;t<s.length;t++){let a=s[t];if(i.T=a[0],a=a[1],2==i.G){if("c"==a[0]){i.I=a[1],i.ka=a[2];let l=a[3];null!=l&&(i.ma=l,i.j.info("VER="+i.ma));let h=a[4];null!=h&&(i.Ca=h,i.j.info("SVER="+i.Ca));let u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,i.J=r,i.j.info("backChannelRequestTimeoutMs_="+r)),r=i;let c=e.g;if(c){let d=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var f=r.h;f.g||-1==d.indexOf("spdy")&&-1==d.indexOf("quic")&&-1==d.indexOf("h2")||(f.j=f.l,f.g=new Set,f.h&&(sm(f,f.h),f.h=null))}if(r.D){let p=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.za=p,n4(r.F,r.D,p))}}if(i.G=3,i.l&&i.l.xa(),i.$&&(i.P=Date.now()-e.F,i.j.info("Handshake RTT: "+i.P+"ms")),(r=i).sa=s8(r,r.H?r.ka:null,r.V),e.J){sv(r.h,e);var g=r.J;g&&e.setTimeout(g),e.B&&(nq(e),nW(e)),r.g=e}else sZ(r);0<i.i.length&&sG(i)}else"stop"!=a[0]&&"close"!=a[0]||s6(i,7)}else 3==i.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?s6(i,7):sW(i):"noop"!=a[0]&&i.l&&i.l.wa(a),i.A=0)}}nw(4)}catch(m){}}function nY(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(rn(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var i=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(rn(e)||"string"==typeof e){var t=[];e=e.length;for(var i=0;i<e;i++)t.push(i);return t}for(let r in t=[],i=0,e)t[i++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(rn(e)){for(var t=[],i=e.length,r=0;r<i;r++)t.push(e[r]);return t}for(r in t=[],i=0,e)t[i++]=e[r];return t}(e),n=r.length,s=0;s<n;s++)t.call(void 0,r[s],i&&i[s],e)}(i9=nx.prototype).setTimeout=function(e){this.O=e},i9.hb=function(e){e=e.target;let t=this.L;t&&3==sF(e)?t.l():this.Ka(e)},i9.Ka=function(e){try{if(e==this.g)a:{let t=sF(this.g);var i=this.g.Ea();let r=this.g.aa();if(!(3>t)&&(3!=t||rR||this.g&&(this.h.h||this.g.fa()||sB(this.g)))){this.I||4!=t||7==i||(8==i||0>=r?nw(3):nw(2)),nq(this);var n=this.g.aa();this.Y=n;b:if(nV(this)){var s=sB(this.g);e="";var o=s.length,a=4==sF(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){nX(this),nG(this);var l="";break b}this.h.i=new ri.TextDecoder}for(i=0;i<o;i++)this.h.h=!0,e+=this.h.i.decode(s[i],{stream:a&&i==o-1});s.splice(0,o),this.h.g+=e,this.C=0,l=this.h.g}else l=this.g.fa();if(this.i=200==n,function(e,t,i,r,n,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+n+"]: "+t+"\n"+i+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.U,t,n),this.i){if(this.Z&&!this.J){b:{if(this.g){var h,u=this.g;if((h=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rv(h)){var c=h;break b}}c=null}if(n=c)nm(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,nJ(this,n);else{this.i=!1,this.o=3,nE(12),nX(this),nG(this);break a}}this.P?(n$(this,t,l),rR&&this.i&&3==t&&(nf(this.S,this.T,"tick",this.gb),this.T.start())):(nm(this.j,this.m,l,null),nJ(this,l)),4==t&&nX(this),this.i&&!this.I&&(4==t?s3(this.l,this):(this.i=!1,nW(this)))}else 400==n&&0<l.indexOf("Unknown SID")?(this.o=3,nE(12)):(this.o=0,nE(13)),nX(this),nG(this)}}}catch(d){}finally{}},i9.gb=function(){if(this.g){var e=sF(this.g),t=this.g.fa();this.C<t.length&&(nq(this),n$(this,e,t),this.i&&4!=e&&nW(this))}},i9.cancel=function(){this.I=!0,nX(this)},i9.fb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(nw(3),nE(17)),nX(this),this.o=2,nG(this)):nK(this,this.V-e)};var nZ=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nQ(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof nQ){this.h=void 0!==t?t:e.h,n1(this,e.j),this.s=e.s,this.g=e.g,n2(this,e.m),this.l=e.l,t=e.i;var i=new sn;i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),n3(this,i),this.o=e.o}else e&&(i=String(e).match(nZ))?(this.h=!!t,n1(this,i[1]||"",!0),this.s=n5(i[2]||""),this.g=n5(i[3]||"",!0),n2(this,i[4]),this.l=n5(i[5]||"",!0),n3(this,i[6]||"",!0),this.o=n5(i[7]||"")):(this.h=!!t,this.i=new sn(null,this.h))}function n0(e){return new nQ(e)}function n1(e,t,i){e.j=i?n5(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function n2(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function n3(e,t,i){var r,n;t instanceof sn?(e.i=t,r=e.i,(n=e.h)&&!r.j&&(ss(r),r.i=null,r.g.forEach(function(e,t){var i=t.toLowerCase();t!=i&&(so(this,t),sl(this,i,e))},r)),r.j=n):(i||(t=n8(t,si)),e.i=new sn(t,e.h))}function n4(e,t,i){e.i.set(t,i)}function n6(e){return n4(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function n5(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function n8(e,t,i){return"string"==typeof e?(e=encodeURI(e).replace(t,n9),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function n9(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}nQ.prototype.toString=function(){var e=[],t=this.j;t&&e.push(n8(t,n7,!0),":");var i=this.g;return(i||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(n8(t,n7,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&e.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&e.push("/"),e.push(n8(i,"/"==i.charAt(0)?st:se,!0))),(i=this.i.toString())&&e.push("?",i),(i=this.o)&&e.push("#",n8(i,sr)),e.join("")};var n7=/[#\/\?@]/g,se=/[#\?:]/g,st=/[#\?]/g,si=/[#\?@]/g,sr=/#/g;function sn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ss(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var r=e[i].indexOf("="),n=null;if(0<=r){var s=e[i].substring(0,r);n=e[i].substring(r+1)}else s=e[i];t(s,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}(e.i,function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)}))}function so(e,t){ss(e),t=sh(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function sa(e,t){return ss(e),t=sh(e,t),e.g.has(t)}function sl(e,t,i){so(e,t),0<i.length&&(e.i=null,e.g.set(sh(e,t),rf(i)),e.h+=i.length)}function sh(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(i9=sn.prototype).add=function(e,t){ss(this),this.i=null,e=sh(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},i9.forEach=function(e,t){ss(this),this.g.forEach(function(i,r){i.forEach(function(i){e.call(t,i,r,this)},this)},this)},i9.oa=function(){ss(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),i=[];for(let r=0;r<t.length;r++){let n=e[r];for(let s=0;s<n.length;s++)i.push(t[r])}return i},i9.W=function(e){ss(this);let t=[];if("string"==typeof e)sa(this,e)&&(t=t.concat(this.g.get(sh(this,e))));else{e=Array.from(this.g.values());for(let i=0;i<e.length;i++)t=t.concat(e[i])}return t},i9.set=function(e,t){return ss(this),this.i=null,sa(this,e=sh(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i9.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},i9.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var i=0;i<t.length;i++){var r=t[i];let n=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var o=n;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};var su=class{constructor(e,t){this.h=e,this.g=t}};function sc(e){this.l=e||sd,e=ri.PerformanceNavigationTiming?0<(e=ri.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(ri.g&&ri.g.Ga&&ri.g.Ga()&&ri.g.Ga().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sd=10;function sf(e){return!!e.h||!!e.g&&e.g.size>=e.j}function sp(e){return e.h?1:e.g?e.g.size:0}function sg(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function sm(e,t){e.g?e.g.add(t):e.h=t}function sv(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function sy(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let i of e.g.values())t=t.concat(i.D);return t}return rf(e.i)}function s_(){}function sb(){this.g=new s_}function sw(e,t,i){let r=i||"";try{nY(e,function(e,i){let n=e;rs(e)&&(n=r9(e)),t.push(r+i+"="+encodeURIComponent(n))})}catch(n){throw t.push(r+"type="+encodeURIComponent("_badmap")),n}}function sI(e,t,i,r,n){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,n(r)}catch(s){}}function sE(e){this.l=e.$b||null,this.j=e.ib||!1}function sT(e,t){r6.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=sk,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}sc.prototype.cancel=function(){if(this.i=sy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},s_.prototype.stringify=function(e){return ri.JSON.stringify(e,void 0)},s_.prototype.parse=function(e){return ri.JSON.parse(e,void 0)},ru(sE,nC),sE.prototype.g=function(){return new sT(this.l,this.j)},sE.prototype.i=(n={},function(){return n}),ru(sT,r6);var sk=0;function sR(e){e.j.read().then(e.Sa.bind(e)).catch(e.ga.bind(e))}function sS(e){e.readyState=4,e.l=null,e.j=null,e.A=null,sC(e)}function sC(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(i9=sT.prototype).open=function(e,t){if(this.readyState!=sk)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,sC(this)},i9.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||ri).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ga.bind(this))},i9.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,sS(this)),this.readyState=sk},i9.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,sC(this)),this.g&&(this.readyState=3,sC(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(void 0!==ri.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sR(this)}else e.text().then(this.Ua.bind(this),this.ga.bind(this))}},i9.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?sS(this):sC(this),3==this.readyState&&sR(this)}},i9.Ua=function(e){this.g&&(this.response=this.responseText=e,sS(this))},i9.Ta=function(e){this.g&&(this.response=e,sS(this))},i9.ga=function(){this.g&&sS(this)},i9.setRequestHeader=function(e,t){this.v.append(e,t)},i9.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i9.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var i=t.next();!i.done;)e.push((i=i.value)[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(sT.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var sA=ri.JSON.parse;function sO(e){r6.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=sN,this.K=this.L=!1}ru(sO,r6);var sN="",sP=/^https?$/i,sD=["POST","PUT"];function sL(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,sx(e),sU(e)}function sx(e){e.D||(e.D=!0,r5(e,"complete"),r5(e,"error"))}function sM(e){if(e.h&&void 0!==rt&&(!e.C[1]||4!=sF(e)||2!=e.aa())){if(e.v&&4==sF(e))nh(e.Ha,0,e);else if(r5(e,"readystatechange"),4==sF(e)){e.h=!1;try{let t=e.aa();a:switch(t){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i,r,n=!0;break a;default:n=!1}if(!(i=n)){if(r=0===t){var s=String(e.H).match(nZ)[1]||null;if(!s&&ri.self&&ri.self.location){var o=ri.self.location.protocol;s=o.substr(0,o.length-1)}r=!sP.test(s?s.toLowerCase():"")}i=r}if(i)r5(e,"complete"),r5(e,"success");else{e.m=6;try{var a=2<sF(e)?e.g.statusText:""}catch(l){a=""}e.j=a+" ["+e.aa()+"]",sx(e)}}finally{sU(e)}}}}function sU(e,t){if(e.g){sj(e);let i=e.g,r=e.C[0]?rr:null;e.g=null,e.C=null,t||r5(e,"ready");try{i.onreadystatechange=r}catch(n){}}}function sj(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(ri.clearTimeout(e.A),e.A=null)}function sF(e){return e.g?e.g.readyState:0}function sB(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case sN:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function sH(e){let t="";return rV(e,function(e,i){t+=i,t+=":",t+=e,t+="\r\n"}),t}function sV(e,t,i){a:{for(r in i){var r=!1;break a}r=!0}r||(i=sH(i),"string"==typeof e?null!=i&&encodeURIComponent(String(i)):n4(e,t,i))}function s$(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function sz(e){this.Ca=0,this.i=[],this.j=new ng,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=s$("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=s$("baseRetryDelayMs",5e3,e),this.ab=s$("retryDelaySeedMs",1e4,e),this.Za=s$("forwardChannelMaxRetries",2,e),this.ta=s$("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Yb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new sc(e&&e.concurrentRequestLimit),this.Fa=new sb,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=e&&e.Wb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function sW(e){if(sq(e),3==e.G){var t=e.U++,i=n0(e.F);n4(i,"SID",e.I),n4(i,"RID",t),n4(i,"TYPE","terminate"),sJ(e,i),(t=new nx(e,e.j,t,void 0)).K=2,t.v=n6(n0(i)),i=!1,ri.navigator&&ri.navigator.sendBeacon&&(i=ri.navigator.sendBeacon(t.v.toString(),"")),!i&&ri.Image&&((new Image).src=t.v,i=!0),i||(t.g=s9(t.l,null),t.g.da(t.v)),t.F=Date.now(),nW(t)}s5(e)}function sK(e){e.g&&(s0(e),e.g.cancel(),e.g=null)}function sq(e){sK(e),e.u&&(ri.clearTimeout(e.u),e.u=null),s2(e),e.h.cancel(),e.m&&("number"==typeof e.m&&ri.clearTimeout(e.m),e.m=null)}function sG(e){sf(e.h)||e.m||(e.m=!0,nr(e.Ja,e),e.C=0)}function sX(e,t){var i;i=t?t.m:e.U++;let r=n0(e.F);n4(r,"SID",e.I),n4(r,"RID",i),n4(r,"AID",e.T),sJ(e,r),e.o&&e.s&&sV(r,e.o,e.s),i=new nx(e,e.j,i,e.C+1),null===e.o&&(i.H=e.s),t&&(e.i=t.D.concat(e.i)),t=sY(e,i,1e3),i.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),sm(e.h,i),nB(i,r,t)}function sJ(e,t){e.ia&&rV(e.ia,function(e,i){n4(t,i,e)}),e.l&&nY({},function(e,i){n4(t,i,e)})}function sY(e,t,i){i=Math.min(e.i.length,i);var r=e.l?rl(e.l.Qa,e.l,e):null;a:{var n=e.i;let s=-1;for(;;){let o=["count="+i];-1==s?0<i?(s=n[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<i;l++){let h=n[l].h,u=n[l].g;if(0>(h-=s))s=Math.max(0,n[l].h-100),a=!1;else try{sw(u,o,"req"+h+"_")}catch(c){r&&r(u)}}if(a){r=o.join("&");break a}}}return e=e.i.splice(0,i),t.D=e,r}function sZ(e){e.g||e.u||(e.Z=1,nr(e.Ia,e),e.A=0)}function sQ(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=nk(rl(e.Ia,e),s4(e,e.A)),e.A++,!0)}function s0(e){null!=e.B&&(ri.clearTimeout(e.B),e.B=null)}function s1(e){e.g=new nx(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=n0(e.sa);n4(t,"RID","rpc"),n4(t,"SID",e.I),n4(t,"CI",e.L?"0":"1"),n4(t,"AID",e.T),n4(t,"TYPE","xmlhttp"),sJ(e,t),e.o&&e.s&&sV(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var i=e.g;e=e.ka,i.K=1,i.v=n6(n0(t)),i.s=null,i.P=!0,nH(i,e)}function s2(e){null!=e.v&&(ri.clearTimeout(e.v),e.v=null)}function s3(e,t){var i=null;if(e.g==t){s2(e),s0(e),e.g=null;var r=2}else{if(!sg(e.h,t))return;i=t.D,sv(e.h,t),r=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==r){i=t.s?t.s.length:0,t=Date.now()-t.F;var n,s,o=e.C;r5(r=n_(),new nT(r,i,t,o)),sG(e)}else sZ(e)}else if(3==(o=t.o)||0==o&&0<e.pa||!(1==r&&(n=e,s=t,!(sp(n.h)>=n.h.j-(n.m?1:0))&&(n.m?(n.i=s.D.concat(n.i),!0):1!=n.G&&2!=n.G&&!(n.C>=(n.Ya?0:n.Za))&&(n.m=nk(rl(n.Ja,n,s),s4(n,n.C)),n.C++,!0)))||2==r&&sQ(e)))switch(i&&0<i.length&&((t=e.h).i=t.i.concat(i)),o){case 1:s6(e,5);break;case 4:s6(e,10);break;case 3:s6(e,6);break;default:s6(e,2)}}}function s4(e,t){let i=e.Wa+Math.floor(Math.random()*e.ab);return e.l||(i*=2),i*t}function s6(e,t){if(e.j.info("Error code "+t),2==t){var i=null;e.l&&(i=null);var r=rl(e.jb,e);i||(i=new nQ("//www.google.com/images/cleardot.gif"),ri.location&&"http"==ri.location.protocol||n1(i,"https"),n6(i)),function(e,t){let i=new ng;if(ri.Image){let r=new Image;r.onload=rh(sI,i,r,"TestLoadImage: loaded",!0,t),r.onerror=rh(sI,i,r,"TestLoadImage: error",!1,t),r.onabort=rh(sI,i,r,"TestLoadImage: abort",!1,t),r.ontimeout=rh(sI,i,r,"TestLoadImage: timeout",!1,t),ri.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(i.toString(),r)}else nE(2);e.G=0,e.l&&e.l.va(t),s5(e),sq(e)}function s5(e){if(e.G=0,e.la=[],e.l){let t=sy(e.h);(0!=t.length||0!=e.i.length)&&(rp(e.la,t),rp(e.la,e.i),e.h.i.length=0,rf(e.i),e.i.length=0),e.l.ua()}}function s8(e,t,i){var r=i instanceof nQ?n0(i):new nQ(i,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),n2(r,r.m);else{var n=ri.location;r=n.protocol,t=t?t+"."+n.hostname:n.hostname,n=+n.port;var s=new nQ(null,void 0);r&&n1(s,r),t&&(s.g=t),n&&n2(s,n),i&&(s.l=i),r=s}return i=e.D,t=e.za,i&&t&&n4(r,i,t),n4(r,"VER",e.ma),sJ(e,r),r}function s9(e,t,i){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new sO(i&&e.Da&&!e.ra?new sE({ib:!0}):e.ra)).L=e.H,t}function s7(){}function oe(){if(rT&&!(10<=Number(rx)))throw Error("Environmental error: no available transport.")}function ot(e,t){r6.call(this),this.g=new sz(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Xb)&&!rv(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!rv(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new on(this)}function oi(e){nP.call(this);var t=e.__sm__;if(t){a:{for(let i in t){e=i;break a}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function or(){nD.call(this),this.status=1}function on(e){this.g=e}(i9=sO.prototype).da=function(e,t,i,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():h.g(),this.C=this.u?nA(this.u):nA(h),this.g.onreadystatechange=rl(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(n){sL(this,n);return}if(e=i||"",i=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)i.set(s,r[s]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let a of r.keys())i.set(a,r.get(a));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[l,u]of(r=Array.from(i.keys()).find(e=>"content-type"==e.toLowerCase()),s=ri.FormData&&e instanceof ri.FormData,!(0<=rd(sD,t))||r||s||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i))this.g.setRequestHeader(l,u);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var c,d,f;sj(this),0<this.B&&((this.K=(c=this.g,rT&&(d=function(){let e=0,t=ry(String(o)).split("."),i=ry("9").split("."),r=Math.max(t.length,i.length);for(let n=0;0==e&&n<r;n++){var s=t[n]||"",a=i[n]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==s[0].length&&0==a[0].length)break;e=r_(0==s[1].length?0:parseInt(s[1],10),0==a[1].length?0:parseInt(a[1],10))||r_(0==s[2].length,0==a[2].length)||r_(s[2],a[2]),s=s[3],a=a[3]}while(0==e)}return 0<=e},f=rL,Object.prototype.hasOwnProperty.call(f,9)?f[9]:f[9]=d(9))&&"number"==typeof c.timeout&&void 0!==c.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=rl(this.qa,this)):this.A=nh(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(p){sL(this,p)}},i9.qa=function(){void 0!==rt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,r5(this,"timeout"),this.abort(8))},i9.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,r5(this,"complete"),r5(this,"abort"),sU(this))},i9.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sU(this,!0)),sO.X.M.call(this)},i9.Ha=function(){this.s||(this.F||this.v||this.l?sM(this):this.eb())},i9.eb=function(){sM(this)},i9.aa=function(){try{return 2<sF(this)?this.g.status:-1}catch(e){return -1}},i9.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i9.Ra=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),sA(t)}},i9.Ea=function(){return this.m},i9.Na=function(){return"string"==typeof this.j?this.j:String(this.j)},(i9=sz.prototype).ma=8,i9.G=1,i9.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let t=new nx(this,this.j,e,void 0),i=this.s;if(this.S&&(i?rW(i=r$(i),this.S):i=this.S),null!==this.o||this.N||(t.H=i,i=null),this.O)a:{for(var r=0,n=0;n<this.i.length;n++){b:{var s=this.i[n];if("__data__"in s.g&&"string"==typeof(s=s.g.__data__)){s=s.length;break b}s=void 0}if(void 0===s)break;if(4096<(r+=s)){r=n;break a}if(4096===r||n===this.i.length-1){r=n+1;break a}}r=1e3}else r=1e3;r=sY(this,t,r),n=n0(this.F),n4(n,"RID",e),n4(n,"CVER",22),this.D&&n4(n,"X-HTTP-Session-Id",this.D),sJ(this,n),i&&(this.N?r="headers="+encodeURIComponent(String(sH(i)))+"&"+r:this.o&&sV(n,this.o,i)),sm(this.h,t),this.Xa&&n4(n,"TYPE","init"),this.O?(n4(n,"$req",r),n4(n,"SID","null"),t.Z=!0,nB(t,n,null)):nB(t,n,r),this.G=2}}else 3==this.G&&(e?sX(this,e):0==this.i.length||sf(this.h)||sX(this))}},i9.Ia=function(){if(this.u=null,s1(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=nk(rl(this.cb,this),e)}},i9.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nE(10),sK(this),s1(this))},i9.bb=function(){null!=this.v&&(this.v=null,sK(this),sQ(this),nE(19))},i9.jb=function(e){e?(this.j.info("Successfully pinged google.com"),nE(2)):(this.j.info("Failed to ping google.com"),nE(1))},(i9=s7.prototype).xa=function(){},i9.wa=function(){},i9.va=function(){},i9.ua=function(){},i9.Qa=function(){},oe.prototype.g=function(e,t){return new ot(e,t)},ru(ot,r6),ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,i=this.h||void 0;nE(0),e.V=t,e.ia=i||{},e.L=e.Y,e.F=s8(e,null,e.V),sG(e)},ot.prototype.close=function(){sW(this.g)},ot.prototype.u=function(e){var t=this.g;if("string"==typeof e){var i={};i.__data__=e,e=i}else this.v&&((i={}).__data__=r9(e),e=i);t.i.push(new su(t.$a++,e)),3==t.G&&sG(t)},ot.prototype.M=function(){this.g.l=null,delete this.j,sW(this.g),delete this.g,ot.X.M.call(this)},ru(oi,nP),ru(or,nD),ru(on,s7),on.prototype.xa=function(){r5(this.g,"a")},on.prototype.wa=function(e){r5(this.g,new oi(e))},on.prototype.va=function(e){r5(this.g,new or(e))},on.prototype.ua=function(){r5(this.g,"b")},oe.prototype.createWebChannel=oe.prototype.g,ot.prototype.send=ot.prototype.u,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,nR.NO_ERROR=0,nR.TIMEOUT=8,nR.HTTP_ERROR=6,nS.COMPLETE="complete",nO.EventType=nN,nN.OPEN="a",nN.CLOSE="b",nN.ERROR="c",nN.MESSAGE="d",r6.prototype.listen=r6.prototype.N,sO.prototype.listenOnce=sO.prototype.O,sO.prototype.getLastError=sO.prototype.Na,sO.prototype.getLastErrorCode=sO.prototype.Ea,sO.prototype.getStatus=sO.prototype.aa,sO.prototype.getResponseJson=sO.prototype.Ra,sO.prototype.getResponseText=sO.prototype.fa,sO.prototype.send=sO.prototype.da,re.createWebChannelTransport=function(){return new oe},re.getStatEventTarget=function(){return n_()},re.ErrorCode=nR,re.EventType=nS,re.Event=nv,re.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},re.FetchXmlHttpFactory=sE,re.WebChannel=nO,re.XhrIo=sO,i(3454);let os="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oo{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oo.UNAUTHENTICATED=new oo(null),oo.GOOGLE_CREDENTIALS=new oo("google-credentials-uid"),oo.FIRST_PARTY=new oo("first-party-uid"),oo.MOCK_USER=new oo("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oa="9.10.0",ol=new W("@firebase/firestore");function oh(e,...t){if(ol.logLevel<=i8.DEBUG){let i=t.map(oc);ol.debug(`Firestore (${oa}): ${e}`,...i)}}function ou(e,...t){if(ol.logLevel<=i8.ERROR){let i=t.map(oc);ol.error(`Firestore (${oa}): ${e}`,...i)}}function oc(e){var t;if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(i){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function od(e="Unexpected state"){let t=`FIRESTORE (${oa}) INTERNAL ASSERTION FAILED: `+e;throw ou(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let of={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class op extends k{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class og{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class om{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ov{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(oo.UNAUTHENTICATED))}shutdown(){}}class oy{constructor(e){this.t=e,this.currentUser=oo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i,r=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve(),n=new og;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new og,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=n;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{oh("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(oh("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new og)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>{var i;return this.i!==e?(oh("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||od(),new om(t.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||od(),new oo(e)}}class o_{constructor(e,t,i,r){this.h=e,this.l=t,this.m=i,this.g=r,this.type="FirstParty",this.user=oo.FIRST_PARTY,this.p=new Map}I(){var e;return this.g?this.g():(("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)&&od(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ob{constructor(e,t,i,r){this.h=e,this.l=t,this.m=i,this.g=r}getToken(){return Promise.resolve(new o_(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(oo.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ow{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oI{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let i=e=>{null!=e.error&&oh("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let i=e.token!==this.A;return this.A=e.token,oh("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>i(t))};let r=e=>{oh("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):oh("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>{var t;return e?("string"==typeof e.token||od(),this.A=e.token,new ow(e.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oE(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let r=0;r<e;r++)i[r]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oT{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,i="";for(;i.length<20;){let r=oE(40);for(let n=0;n<r.length;++n)i.length<20&&r[n]<t&&(i+=e.charAt(r[n]%e.length))}return i}}function ok(e,t){return e<t?-1:e>t?1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oR{constructor(e,t,i){void 0===t?t=0:t>e.length&&od(),void 0===i?i=e.length-t:i>e.length-t&&od(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return 0===oR.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof oR?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let i=Math.min(e.length,t.length);for(let r=0;r<i;r++){let n=e.get(r),s=t.get(r);if(n<s)return -1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oS extends oR{construct(e,t,i){return new oS(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let i of e){if(i.indexOf("//")>=0)throw new op(of.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(e=>e.length>0))}return new oS(t)}static emptyPath(){return new oS([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oC{constructor(e){this.path=e}static fromPath(e){return new oC(oS.fromString(e))}static fromName(e){return new oC(oS.fromString(e).popFirst(5))}static empty(){return new oC(oS.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===oS.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return oS.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oC(new oS(e.slice()))}}function oA(e){return"IndexedDbTransactionError"===e.name}class oO{constructor(e,t){this.comparator=e,this.root=t||oP.EMPTY}insert(e,t){return new oO(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,oP.BLACK,null,null))}remove(e){return new oO(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oP.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let i=this.comparator(e,t.key);if(0===i)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){let r=this.comparator(e,i.key);if(0===r)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){let e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oN(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oN(this.root,e,this.comparator,!1)}getReverseIterator(){return new oN(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oN(this.root,e,this.comparator,!0)}}class oN{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let n=1;for(;!e.isEmpty();)if(n=t?i(e.key,t):1,t&&r&&(n*=-1),n<0)e=this.isReverse?e.left:e.right;else{if(0===n){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class oP{constructor(e,t,i,r,n){this.key=e,this.value=t,this.color=null!=i?i:oP.RED,this.left=null!=r?r:oP.EMPTY,this.right=null!=n?n:oP.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,n){return new oP(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=r?r:this.left,null!=n?n:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this,n=i(e,r.key);return(r=n<0?r.copy(null,null,null,r.left.insert(e,t,i),null):0===n?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i))).fixUp()}removeMin(){if(this.left.isEmpty())return oP.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let i,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return oP.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,oP.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,oP.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw od();let e=this.left.check();if(e!==this.right.check())throw od();return e+(this.isRed()?0:1)}}oP.EMPTY=null,oP.RED=!0,oP.BLACK=!1,oP.EMPTY=new class{constructor(){this.size=0}get key(){throw od()}get value(){throw od()}get color(){throw od()}get left(){throw od()}get right(){throw od()}copy(e,t,i,r,n){return this}insert(e,t,i){return new oP(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oD{constructor(e){this.comparator=e,this.data=new oO(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new oL(this.data.getIterator())}getIteratorFrom(e){return new oL(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof oD)||this.size!==e.size)return!1;let t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,n=i.getNext().key;if(0!==this.comparator(r,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new oD(this.comparator);return t.data=e,t}}class oL{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ox{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new ox(t)}static fromUint8Array(e){let t=function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e);return new ox(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ok(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function oM(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}ox.EMPTY_BYTE_STRING=new ox("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oU{constructor(e,t,i,r,n,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=n,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class oj{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new oj("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof oj&&e.projectId===this.projectId&&e.database===this.database}}(c=u||(u={}))[c.OK=0]="OK",c[c.CANCELLED=1]="CANCELLED",c[c.UNKNOWN=2]="UNKNOWN",c[c.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",c[c.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",c[c.NOT_FOUND=5]="NOT_FOUND",c[c.ALREADY_EXISTS=6]="ALREADY_EXISTS",c[c.PERMISSION_DENIED=7]="PERMISSION_DENIED",c[c.UNAUTHENTICATED=16]="UNAUTHENTICATED",c[c.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",c[c.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",c[c.ABORTED=10]="ABORTED",c[c.OUT_OF_RANGE=11]="OUT_OF_RANGE",c[c.UNIMPLEMENTED=12]="UNIMPLEMENTED",c[c.INTERNAL=13]="INTERNAL",c[c.UNAVAILABLE=14]="UNAVAILABLE",c[c.DATA_LOSS=15]="DATA_LOSS",new oO(oC.comparator),new oO(oC.comparator),new oO(oC.comparator),new oD(oC.comparator),new oD(ok);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oF{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){var i,r,n;if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(oM(e.integerValue));else if("doubleValue"in e){let s=oM(e.doubleValue);isNaN(s)?this.le(t,13):(this.le(t,15),0===(i=s)&&1/i==-1/0?t.fe(0):t.fe(s))}else if("timestampValue"in e){let o=e.timestampValue;this.le(t,20),"string"==typeof o?t.de(o):(t.de(`${o.seconds||""}`),t.fe(o.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me("string"==typeof(r=e.bytesValue)?ox.fromBase64String(r):ox.fromUint8Array(r)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){let a=e.geoPointValue;this.le(t,45),t.fe(a.latitude||0),t.fe(a.longitude||0)}else"mapValue"in e?"__max__"===((((n=e).mapValue||{}).fields||{}).__type__||{}).stringValue?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):od()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){let i=e.fields||{};for(let r of(this.le(t,55),Object.keys(i)))this._e(r,t),this.ae(i[r],t)}pe(e,t){let i=e.values||[];for(let r of(this.le(t,50),i))this.ae(r,t)}ge(e,t){this.le(t,37),oC.fromName(e).path.forEach(e=>{this.le(t,60),this.Ie(e,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}oF.Te=new oF,new Uint8Array(0);class oB{constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new oB(e,oB.DEFAULT_COLLECTION_PERCENTILE,oB.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}function oH(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ oB.DEFAULT_COLLECTION_PERCENTILE=10,oB.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oB.DEFAULT=new oB(41943040,oB.DEFAULT_COLLECTION_PERCENTILE,oB.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oB.DISABLED=new oB(-1,0,0);class oV{constructor(e,t,i=1e3,r=1.5,n=6e4){this.Hs=e,this.timerId=t,this.wo=i,this.mo=r,this.yo=n,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();let t=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),r=Math.max(0,t-i);r>0&&oh("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o${constructor(e,t,i,r,n){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=n,this.deferred=new og,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,i,r,n){let s=Date.now()+i,o=new o$(e,t,s,r,n);return o.start(i),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new op(of.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oz{constructor(e,t,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=oo.UNAUTHENTICATED,this.clientId=oT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async e=>{oh("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(i,e=>(oh("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new op(of.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new og;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){let t=function(e,t){if(ou("AsyncQueue",`${t}: ${e}`),oA(e))return new op(of.UNAVAILABLE,`${t}: ${e}`);throw e}(i,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}let oW=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oK{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new op(of.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new op(of.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,i,r){if(!0===t&&!0===r)throw new op(of.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oq{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oK({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new op(of.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new op(of.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oK(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ov;switch(e.type){case"gapi":let t=e.client;return new ob(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new op(of.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=oW.get(e);t&&(oh("ComponentProvider","Removing Datastore"),oW.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oG{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new oV(this,"async_queue_retry"),this.jc=()=>{let e=oH();e&&oh("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.bo()};let e=oH();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;let t=oH();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});let t=new og;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!oA(e))throw e;oh("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){let t=this.$c.then(()=>(this.Kc=!0,e().catch(e=>{var t;this.qc=e,this.Kc=!1;let i,r=(i=e.message||"",e.stack&&(i=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),i);throw ou("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.Kc=!1,e))));return this.$c=t,t}enqueueAfterDelay(e,t,i){this.Wc(),this.Qc.indexOf(e)>-1&&(t=0);let r=o$.createAndSchedule(this,e,t,i,e=>this.Jc(e));return this.Uc.push(r),r}Wc(){this.qc&&od()}verifyOperationInProgress(){}async Yc(){let e;do await (e=this.$c);while(e!==this.$c)}Xc(e){for(let t of this.Uc)if(t.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{for(let t of(this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Uc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){let t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class oX extends oq{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new oG,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||function(e){var t,i,r,n,s;let o=e._freezeSettings(),a=(i=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",n=e._persistenceKey,new oU(i,r,n,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams));e._firestoreClient=new oz(e._authCredentials,e._appCheckCredentials,e._queue,a)}(this),this._firestoreClient.terminate()}}!function(e,t=!0){oa=eb,em(new M("firestore",(e,{instanceIdentifier:i,options:r})=>{let n=e.getProvider("app").getImmediate(),s=new oX(new oy(e.getProvider("auth-internal")),new oI(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new op(of.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oj(e.options.projectId,t)}(n,i),n);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),eI(os,"3.5.0",void 0),eI(os,"3.5.0","esm2017")}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oJ="firebasestorage.googleapis.com";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oY extends k{constructor(e,t){super(oZ(e),`Firebase Storage: ${t} (${oZ(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,oY.prototype)}_codeEquals(e){return oZ(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function oZ(e){return"storage/"+e}function oQ(e){return new oY("invalid-argument",e)}function o0(){return new oY("app-deleted","The Firebase app was deleted.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o1{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){var i;let r;try{r=o1.makeFromUrl(e,t)}catch(n){return new o1(e,"")}if(""===r.path)return r;throw new oY("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let i=null,r="([A-Za-z0-9.\\-_]+)",n=RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}let o=t.replace(/[.]/g,"\\."),a=RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),l=RegExp(`^https?://${t===oJ?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),h=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:a,indices:{bucket:1,path:3},postModify:s},{regex:l,indices:{bucket:1,path:2},postModify:s}];for(let u=0;u<h.length;u++){let c=h[u],d=c.regex.exec(e);if(d){let f=d[c.indices.bucket],p=d[c.indices.path];p||(p=""),i=new o1(f,p),c.postModify(i);break}}if(null==i){var g;throw new oY("invalid-url","Invalid URL '"+e+"'.")}return i}}class o2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function o3(e,t,i,r){if(r<t)throw oQ(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>i)throw oQ(`Invalid value for '${e}'. Expected ${i} or less.`)}(s=d||(d={}))[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o4{constructor(e,t,i,r,n,s,o,a,l,h,u){this.url_=e,this.method_=t,this.headers_=i,this.body_=r,this.successCodes_=n,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{if(t){e(!1,new o6(!1,null,!0));return}let i=this.connectionFactory_();this.pendingConnection_=i;let r=e=>{let t=e.loaded,i=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,i)};null!==this.progressCallback_&&i.addUploadProgressListener(r),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&i.removeUploadProgressListener(r),this.pendingConnection_=null;let t=i.getErrorCode()===d.NO_ERROR,n=i.getStatus();if(!t||this.isRetryStatusCode_(n)){let s=i.getErrorCode()===d.ABORT;e(!1,new o6(!1,null,s));return}let o=-1!==this.successCodes_.indexOf(n);e(!0,new o6(o,i))})},t=(e,t)=>{let i=this.resolve_,r=this.reject_,n=t.connection;if(t.wasSuccessCode)try{var s;let o=this.callback_(n,n.getResponse());void 0!==o?i(o):i()}catch(a){r(a)}else if(null!==n){let l=new oY("unknown","An unknown error occurred, please check the error payload for server response.");l.serverResponse=n.getErrorText(),r(this.errorCallback_?this.errorCallback_(n,l):l)}else if(t.canceled){let h=this.appDelete_?o0():new oY("canceled","User canceled the upload/download.");r(h)}else{let u=new oY("retry-limit-exceeded","Max retry time for operation exceeded, please try again.");r(u)}};this.canceled_?t(!1,new o6(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t,i){let r=1,n=null,s=null,o=!1,a=0;function l(){return 2===a}let h=!1;function u(...e){h||(h=!0,t.apply(null,e))}function c(t){n=setTimeout(()=>{n=null,e(f,l())},t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(h){d();return}if(e){d(),u.call(null,e,...t);return}let i=l()||o;if(i){d(),u.call(null,e,...t);return}r<64&&(r*=2);let n;1===a?(a=2,n=0):n=(r+Math.random())*1e3,c(n)}let p=!1;function g(e){if(!p)p=!0,d(),!h&&(null!==n?(e||(a=2),clearTimeout(n),c(0)):e||(a=1))}return c(0),s=setTimeout(()=>{o=!0,g(!0)},i),g}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){if(this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_){var t;(t=this.backoffId_)(!1)}null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){let t=-1!==[408,429].indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return e>=500&&e<600||t||i}}class o6{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o5{constructor(e,t){this._service=e,t instanceof o1?this._location=t:this._location=o1.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new o5(e,t)}get root(){let e=new o1(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let i=e.slice(0,t);return i}(this._location.path);if(null===e)return null;let t=new o1(this._location.bucket,e);return new o5(this._service,t)}_throwIfRoot(e){if(""===this._location.path){var t;throw new oY("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}}function o8(e,t){let i=null==t?void 0:t.storageBucket;return null==i?null:o1.makeFromBucketSpec(i,e)}class o9{constructor(e,t,i,r,n){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=r,this._firebaseVersion=n,this._bucket=null,this._host=oJ,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=r?this._bucket=o1.makeFromBucketSpec(r,this._host):this._bucket=o8(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=o1.makeFromBucketSpec(this._url,e):this._bucket=o8(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){o3("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){o3("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new o5(this,e)}_makeRequest(e,t,i,r){if(this._deleted)return new o2(o0());{let n=function(e,t,i,r,n,s){var o,a,l,h,u,c,d,f;let p=function(e){let t=encodeURIComponent,i="?";for(let r in e)if(e.hasOwnProperty(r)){let n=t(r)+"="+t(e[r]);i=i+n+"&"}return i.slice(0,-1)}(e.urlParams),g=e.url+p,m=Object.assign({},e.headers);return o=m,t&&(o["X-Firebase-GMPID"]=t),l=m,null!==i&&i.length>0&&(l.Authorization="Firebase "+i),(u=m)["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),d=m,null!==r&&(d["X-Firebase-AppCheck"]=r),new o4(g,e.method,m,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}(e,this._appId,i,r,t,this._firebaseVersion);return this._requests.add(n),n.getPromise().then(()=>this._requests.delete(n),()=>this._requests.delete(n)),n}}async makeRequestWithTokens(e,t){let[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,r).getPromise()}}let o7="@firebase/storage",ae="0.9.9",at="storage";em(new M(at,function e(t,{instanceIdentifier:i}){let r=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new o9(r,n,s,i,eb)},"PUBLIC").setMultipleInstances(!0)),eI(o7,ae,""),eI(o7,ae,"esm2017"),Array.from(ef.values()).length?ew():function(e,t={}){if("object"!=typeof t){let i=t;t={name:i}}let r=Object.assign({name:ec,automaticDataCollectionEnabled:!1},t),n=r.name;if("string"!=typeof n||!n)throw ey.create("bad-app-name",{appName:String(n)});let s=ef.get(n);if(s){if(C(e,s.options)&&C(r,s.config))return s;throw ey.create("duplicate-app",{appName:n})}let o=new F(n);for(let a of ep.values())o.addComponent(a);let l=new e_(e,r,o);return ef.set(n,l),l}({apiKey:"AIzaSyB087cJ35e-oUmXWR37_S7xJR1t0YZBtBs",authDomain:"regenfund.firebaseapp.com",projectId:"regenfund",storageBucket:"regenfund.appspot.com",messagingSenderId:"639798418658",appId:"1:639798418658:web:bcd80b702c19d94f0cd2bb",measurementId:"G-CN4E9E87J3"}),function(e){let t="object"==typeof e?e:ew();ev(t,"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"})}(),function(e=ew()){e=x(e);let t=ev(e,at),i=t.getImmediate({identifier:void 0})}();var ai=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e=ew()){let t=ev(e,"auth");return t.isInitialized()?t.getImmediate():/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){let i=ev(e,"auth");if(i.isInitialized()){let r=i.getImmediate(),n=i.getOptions();if(C(n,null!=t?t:{}))return r;eU(r,"already-initialized")}let s=i.initialize({options:t});return s}(e,{popupRedirectResolver:i0,persistence:[iv,t9,t7]})}(),ar=(0,m.createContext)({}),an=new tq,as=function(){return(0,m.useContext)(ar)},ao=function(e){var t=e.children,i=(0,m.useState)(null),r=i[0],n=i[1],s=(0,m.useState)(!0),o=s[0],a=s[1];(0,m.useEffect)(function(){var e,t,i=(t=function(e){e?n({uid:e.uid,email:e.email,displayName:e.displayName,photo:e.photoURL}):n(null),a(!1)},x(ai).onAuthStateChanged(t,void 0,void 0));return function(){return i()}},[]);var l,h=function(){iC(ai,an)},u=function(e,t){return t6(ai,e,t)},c=function(e,t){var i,r,n;return t4(x(ai),t$.credential(e,t))},d=(l=(0,f.Z)(function(){return(0,p.__generator)(this,function(e){switch(e.label){case 0:var t;return n(null),[4,x(ai).signOut()];case 1:return e.sent(),[2]}})}),function(){return l.apply(this,arguments)});return(0,g.jsx)(ar.Provider,{value:{user:r,login:c,signup:u,logout:d,googleSignin:h},children:o?null:t})}},1210:function(e,t){"use strict";function i(e,t,i,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(4941).Z;i(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(2648).Z,s=i(7273).Z,o=n(i(7294)),a=i(6273),l=i(2725),h=i(3462),u=i(1018),c=i(7190),d=i(1210),f=i(8684),p={};function g(e,t,i,r){if(e&&a.isLocalURL(t)){Promise.resolve(e.prefetch(t,i,r)).catch(function(e){});var n=r&&void 0!==r.locale?r.locale:e&&e.locale;p[t+"%"+i+(n?"%"+n:"")]=!0}}var m=o.default.forwardRef(function(e,t){var i,n,m=e.href,v=e.as,y=e.children,_=e.prefetch,b=e.passHref,w=e.replace,I=e.shallow,E=e.scroll,T=e.locale,k=e.onClick,R=e.onMouseEnter,S=e.onTouchStart,C=e.legacyBehavior,A=void 0===C?!0!==Boolean(!1):C,O=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);i=y,A&&("string"==typeof i||"number"==typeof i)&&(i=o.default.createElement("a",null,i));var N=!1!==_,P=o.default.useContext(h.RouterContext),D=o.default.useContext(u.AppRouterContext);D&&(P=D);var L=o.default.useMemo(function(){var e=r(a.resolveHref(P,m,!0),2),t=e[0],i=e[1];return{href:t,as:v?a.resolveHref(P,v):i||t}},[P,m,v]),x=L.href,M=L.as,U=o.default.useRef(x),j=o.default.useRef(M);A&&(n=o.default.Children.only(i));var F=A?n&&"object"==typeof n&&n.ref:t,B=r(c.useIntersection({rootMargin:"200px"}),3),H=B[0],V=B[1],$=B[2],z=o.default.useCallback(function(e){(j.current!==M||U.current!==x)&&($(),j.current=M,U.current=x),H(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[M,F,x,$,H]);o.default.useEffect(function(){var e=V&&N&&a.isLocalURL(x),t=void 0!==T?T:P&&P.locale,i=p[x+"%"+M+(t?"%"+t:"")];e&&!i&&g(P,x,M,{locale:t})},[M,x,V,T,N,P]);var W={ref:z,onClick:function(e){A||"function"!=typeof k||k(e),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,t,i,r,n,s,l,h,u,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(f=(d=e).currentTarget.target)||"_self"===f)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&a.isLocalURL(i)){e.preventDefault();var d,f,p=function(){"beforePopState"in t?t[n?"replace":"push"](i,r,{shallow:s,locale:h,scroll:l}):t[n?"replace":"push"](i,{forceOptimisticNavigation:!c})};u?o.default.startTransition(p):p()}}(e,P,x,M,w,I,E,T,Boolean(D),N)},onMouseEnter:function(e){A||"function"!=typeof R||R(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),!(!N&&D)&&a.isLocalURL(x)&&g(P,x,M,{priority:!0})},onTouchStart:function(e){A||"function"!=typeof S||S(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),!(!N&&D)&&a.isLocalURL(x)&&g(P,x,M,{priority:!0})}};if(!A||b||"a"===n.type&&!("href"in n.props)){var K=void 0!==T?T:P&&P.locale,q=P&&P.isLocaleDomain&&d.getDomainLocale(M,K,P.locales,P.domainLocales);W.href=q||f.addBasePath(l.addLocale(M,K,P&&P.defaultLocale))}return A?o.default.cloneElement(n,W):o.default.createElement("a",Object.assign({},O,W),i)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,i=e.rootMargin,h=e.disabled||!o,u=r(n.useState(!1),2),c=u[0],d=u[1],f=r(n.useState(null),2),p=f[0],g=f[1];return n.useEffect(function(){if(o){if(!h&&!c&&p&&p.tagName){var e,r,n,u,f,g,m;return r=function(e){return e&&d(e)},f=(u=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},r=l.find(function(e){return e.root===i.root&&e.margin===i.margin});if(r&&(t=a.get(r)))return t;var n=new Map;return t={id:i,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:n},l.push(i),a.set(i,t),t}(n={root:null==t?void 0:t.current,rootMargin:i})).id,g=u.observer,(m=u.elements).set(p,r),g.observe(p),function(){if(m.delete(p),g.unobserve(p),0===m.size){g.disconnect(),a.delete(f);var e=l.findIndex(function(e){return e.root===f.root&&e.margin===f.margin});e>-1&&l.splice(e,1)}}}}else if(!c){var v=s.requestIdleCallback(function(){return d(!0)});return function(){return s.cancelIdleCallback(v)}}},[p,h,i,t,c]),[g,c,n.useCallback(function(){d(!1)},[])]};var n=i(7294),s=i(9311),o="function"==typeof IntersectionObserver,a=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,i(2648).Z)(i(7294)),n=r.default.createContext(null);t.AppRouterContext=n;var s=r.default.createContext(null);t.LayoutRouterContext=s;var o=r.default.createContext(null);t.GlobalLayoutRouterContext=o;var a=r.default.createContext(null);t.TemplateContext=a},6723:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var r=i(1799),n=i(5893);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=Array(t);i<t;i++)r[i]=e[i];return r}i(906);var o=i(7294),a=i(1664),l=i.n(a),h=i(3239),u=i(1163);let c=o.forwardRef(function({title:e,titleId:t,...i},r){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},i),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});function d(e){var t,i,r=function(e){if(Array.isArray(e))return e}(t=o.useState(!1))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t,2)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=r[0],d=r[1],f=(0,h.a)(),p=f.user,g=f.logout,m=(0,u.useRouter)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{className:"top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-regen-blue shadow opacity-90 overflow-clip",children:(0,n.jsxs)("div",{className:"container mx-auto flex flex-wrap items-center justify-between overflow-clip",children:[(0,n.jsxs)("div",{className:"w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[(0,n.jsx)(l(),{href:"/",className:"font-Cormorant text-white font-semibold text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap",children:"Regenerative Fund"}),(0,n.jsx)("button",{className:"cursor-pointer text-xl text-white leading-none rounded block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return d(!a)},children:(0,n.jsx)(c,{className:"text-white justify-center w-10 h-10 mb-5 hover:bg-regen-blue hover:rounded-full"})})]}),(0,n.jsxs)("div",{className:"lg:flex flex-grow py-2 items-center rounded-lg lg:bg-opacity-0 lg:shadow-none"+(a?" block":" hidden"),id:"example-navbar-warning",children:[(0,n.jsxs)("ul",{className:"flex flex-col lg:flex-row list-none mr-auto",children:[(0,n.jsx)("li",{className:"/invesdedIn"==m.pathname?"rounded-full bg-regen-seablue":"flex items-center",children:(0,n.jsx)(l(),{className:"hoverAnimation text-white px-5 py-2 lg:py-2 flex items-center text-xs uppercase font-bold",href:"/invesdedIn",children:"Invested In"})}),(0,n.jsx)("li",{className:"/regenerativeProjects"==m.pathname?"rounded-full bg-regen-seablue":"flex items-center",children:(0,n.jsx)(l(),{className:"hoverAnimation text-white px-5 py-2 lg:py-2 flex items-center text-xs uppercase font-bold",href:"/regenerativeProjects",children:"Regenerative Projects"})}),(0,n.jsx)("li",{className:"/artistsCollective"==m.pathname?"rounded-full bg-regen-seablue":"flex items-center",children:(0,n.jsx)(l(),{className:"hoverAnimation text-white px-5 py-2 lg:py-2 flex items-center text-xs uppercase font-bold",href:"/artistsCollective",children:"   Artists Collective"})}),(0,n.jsx)("li",{className:"/aboutUs"==m.pathname?"rounded-full bg-regen-seablue":"flex items-center",children:(0,n.jsx)(l(),{className:"hoverAnimation text-white px-5 py-2 lg:py-2 flex items-center text-xs uppercase font-bold",href:"/aboutUs",children:"About Us"})})]}),(0,n.jsxs)("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto space-x-7",children:[(0,n.jsx)("li",{className:"flex items-center",children:p?(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:" bg-regen-seablue text-white active:bg-gray-800 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",type:"button",onClick:function(){g()},children:"Logout"})}):(0,n.jsx)("button",{className:" bg-regen-seablue text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",type:"button",onClick:function(){m.push("/auth/login")},children:"Login"})}),(0,n.jsx)("li",{className:"",children:p?(0,n.jsx)("div",{className:"flex flex-row align-middle hover:mix-blend-luminosity cursor-pointer",onClick:function(){m.push("/usr/userpage")},children:(0,n.jsx)("img",{src:p.photo,alt:"",className:"h-10 w-10 rounded-full xl:mr-2.5"})}):(0,n.jsx)(n.Fragment,{})})]})]})]})})})}var f=function(e){var t=e.children,i=(0,h.a)().user,r=(0,u.useRouter)();return(0,o.useEffect)(function(){i||r.push("/auth/login")},[r,i]),(0,n.jsx)(n.Fragment,{children:i?t:null})},p=["/","/auth/login","/auth/signup"],g=function(e){var t=e.Component,i=e.pageProps,s=(0,u.useRouter)();return(0,n.jsxs)(h.H,{children:[(0,n.jsx)(d,{}),p.includes(s.pathname)?(0,n.jsx)(t,(0,r.Z)({},i)):(0,n.jsx)(f,{children:(0,n.jsx)(t,(0,r.Z)({},i))})]})}},906:function(){},7663:function(e){!function(){var t={229:function(e){var t,i,r,n=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(r){i=o}}();var l=[],h=!1,u=-1;function c(){h&&r&&(h=!1,r.length?l=r.concat(l):u=-1,l.length&&d())}function d(){if(!h){var e=a(c);h=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,h=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(r){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];l.push(new f(e,t)),1!==l.length||h||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},i={};function r(e){var n=i[e];if(void 0!==n)return n.exports;var s=i[e]={exports:{}},o=!0;try{t[e](s,s.exports,r),o=!1}finally{o&&delete i[e]}return s.exports}r.ab="//";var n=r(229);e.exports=n}()},1664:function(e,t,i){e.exports=i(8418)},1163:function(e,t,i){e.exports=i(387)},7568:function(e,t,i){"use strict";function r(e,t,i,r,n,s,o){try{var a=e[s](o),l=a.value}catch(h){i(h);return}a.done?t(l):Promise.resolve(l).then(r,n)}function n(e){return function(){var t=this,i=arguments;return new Promise(function(n,s){var o=e.apply(t,i);function a(e){r(o,n,s,a,l,"next",e)}function l(e){r(o,n,s,a,l,"throw",e)}a(void 0)})}}i.d(t,{Z:function(){return n}})},1799:function(e,t,i){"use strict";function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){r(e,t,i[t])})}return e}i.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);