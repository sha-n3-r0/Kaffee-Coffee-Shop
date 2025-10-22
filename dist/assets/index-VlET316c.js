import{r as C,a as Zd,g as Vd,R as ws}from"./vendor-pa2MT38e.js";import{d as x,m as Ld,f as Jd}from"./styled-CPCkpq__.js";import{u as Kd,L as Rs,a as kd,H as Fd,R as $d,b as cn}from"./router-hyX6mG90.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();var Zs={exports:{}},yi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=Symbol.for("react.transitional.element"),Id=Symbol.for("react.fragment");function Vs(t,e,l){var a=null;if(l!==void 0&&(a=""+l),e.key!==void 0&&(a=""+e.key),"key"in e){l={};for(var n in e)n!=="key"&&(l[n]=e[n])}else l=e;return e=l.ref,{$$typeof:Wd,type:t,key:a,ref:e!==void 0?e:null,props:l}}yi.Fragment=Id;yi.jsx=Vs;yi.jsxs=Vs;Zs.exports=yi;var f=Zs.exports,Ls={exports:{}},bi={},Js={exports:{}},Ks={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,H){var _=T.length;T.push(H);t:for(;0<_;){var tt=_-1>>>1,st=T[tt];if(0<n(st,H))T[tt]=H,T[_]=st,_=tt;else break t}}function l(T){return T.length===0?null:T[0]}function a(T){if(T.length===0)return null;var H=T[0],_=T.pop();if(_!==H){T[0]=_;t:for(var tt=0,st=T.length,an=st>>>1;tt<an;){var nn=2*(tt+1)-1,Bi=T[nn],We=nn+1,un=T[We];if(0>n(Bi,_))We<st&&0>n(un,Bi)?(T[tt]=un,T[We]=_,tt=We):(T[tt]=Bi,T[nn]=_,tt=nn);else if(We<st&&0>n(un,_))T[tt]=un,T[We]=_,tt=We;else break t}}return H}function n(T,H){var _=T.sortIndex-H.sortIndex;return _!==0?_:T.id-H.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var u=Date,c=u.now();t.unstable_now=function(){return u.now()-c}}var s=[],r=[],y=1,v=null,d=3,g=!1,S=!1,z=!1,E=!1,m=typeof setTimeout=="function"?setTimeout:null,o=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;function b(T){for(var H=l(r);H!==null;){if(H.callback===null)a(r);else if(H.startTime<=T)a(r),H.sortIndex=H.expirationTime,e(s,H);else break;H=l(r)}}function A(T){if(z=!1,b(T),!S)if(l(s)!==null)S=!0,N||(N=!0,Te());else{var H=l(r);H!==null&&qi(A,H.startTime-T)}}var N=!1,j=-1,O=5,U=-1;function Q(){return E?!0:!(t.unstable_now()-U<O)}function Bt(){if(E=!1,N){var T=t.unstable_now();U=T;var H=!0;try{t:{S=!1,z&&(z=!1,o(j),j=-1),g=!0;var _=d;try{e:{for(b(T),v=l(s);v!==null&&!(v.expirationTime>T&&Q());){var tt=v.callback;if(typeof tt=="function"){v.callback=null,d=v.priorityLevel;var st=tt(v.expirationTime<=T);if(T=t.unstable_now(),typeof st=="function"){v.callback=st,b(T),H=!0;break e}v===l(s)&&a(s),b(T)}else a(s);v=l(s)}if(v!==null)H=!0;else{var an=l(r);an!==null&&qi(A,an.startTime-T),H=!1}}break t}finally{v=null,d=_,g=!1}H=void 0}}finally{H?Te():N=!1}}}var Te;if(typeof h=="function")Te=function(){h(Bt)};else if(typeof MessageChannel<"u"){var df=new MessageChannel,Rd=df.port2;df.port1.onmessage=Bt,Te=function(){Rd.postMessage(null)}}else Te=function(){m(Bt,0)};function qi(T,H){j=m(function(){T(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_next=function(T){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var _=d;d=H;try{return T()}finally{d=_}},t.unstable_requestPaint=function(){E=!0},t.unstable_runWithPriority=function(T,H){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var _=d;d=T;try{return H()}finally{d=_}},t.unstable_scheduleCallback=function(T,H,_){var tt=t.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?tt+_:tt):_=tt,T){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=_+st,T={id:y++,callback:H,priorityLevel:T,startTime:_,expirationTime:st,sortIndex:-1},_>tt?(T.sortIndex=_,e(r,T),l(s)===null&&T===l(r)&&(z?(o(j),j=-1):z=!0,qi(A,_-tt))):(T.sortIndex=st,e(s,T),S||g||(S=!0,N||(N=!0,Te()))),T},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(T){var H=d;return function(){var _=d;d=H;try{return T.apply(this,arguments)}finally{d=_}}}})(Ks);Js.exports=Ks;var Pd=Js.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=Pd,ks=C,tm=Zd;function p(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Fs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Va(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function $s(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ws(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mf(t){if(Va(t)!==t)throw Error(p(188))}function em(t){var e=t.alternate;if(!e){if(e=Va(t),e===null)throw Error(p(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return mf(n),t;if(i===a)return mf(n),e;i=i.sibling}throw Error(p(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(p(189))}}if(l.alternate!==a)throw Error(p(190))}if(l.tag!==3)throw Error(p(188));return l.stateNode.current===l?t:e}function Is(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Is(t),e!==null)return e;t=t.sibling}return null}var $=Object.assign,lm=Symbol.for("react.element"),fn=Symbol.for("react.transitional.element"),da=Symbol.for("react.portal"),zl=Symbol.for("react.fragment"),Ps=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),to=Symbol.for("react.consumer"),de=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),ju=Symbol.for("react.activity"),am=Symbol.for("react.memo_cache_sentinel"),hf=Symbol.iterator;function ia(t){return t===null||typeof t!="object"?null:(t=hf&&t[hf]||t["@@iterator"],typeof t=="function"?t:null)}var nm=Symbol.for("react.client.reference");function Tu(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nm?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zl:return"Fragment";case xu:return"Profiler";case Ps:return"StrictMode";case Su:return"Suspense";case zu:return"SuspenseList";case ju:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case da:return"Portal";case de:return t.displayName||"Context";case to:return(t._context.displayName||"Context")+".Consumer";case gc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vc:return e=t.displayName||null,e!==null?e:Tu(t.type)||"Memo";case Ae:e=t._payload,t=t._init;try{return Tu(t(e))}catch{}}return null}var ma=Array.isArray,M=ks.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=tm.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,al={pending:!1,data:null,method:null,action:null},Au=[],jl=-1;function le(t){return{current:t}}function dt(t){0>jl||(t.current=Au[jl],Au[jl]=null,jl--)}function K(t,e){jl++,Au[jl]=t.current,t.current=e}var ee=le(null),Ca=le(null),Be=le(null),Rn=le(null);function Zn(t,e){switch(K(Be,e),K(Ca,t),K(ee,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?xs(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=xs(e),t=Sd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}dt(ee),K(ee,t)}function wl(){dt(ee),dt(Ca),dt(Be)}function Eu(t){t.memoizedState!==null&&K(Rn,t);var e=ee.current,l=Sd(e,t.type);e!==l&&(K(Ca,t),K(ee,l))}function Vn(t){Ca.current===t&&(dt(ee),dt(Ca)),Rn.current===t&&(dt(Rn),wa._currentValue=al)}var Yi,gf;function Pe(t){if(Yi===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Yi=e&&e[1]||"",gf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yi+t+gf}var Qi=!1;function Gi(t,e){if(!t||Qi)return"";Qi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(g){var d=g}Reflect.construct(t,[],v)}else{try{v.call()}catch(g){d=g}t.call(v.prototype)}}else{try{throw Error()}catch(g){d=g}(v=t())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(g){if(g&&d&&typeof g.stack=="string")return[g.stack,d.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),r=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<r.length&&!r[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===r.length)for(a=s.length-1,n=r.length-1;1<=a&&0<=n&&s[a]!==r[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==r[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==r[n]){var y=`
`+s[a].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=a&&0<=n);break}}}finally{Qi=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Pe(l):""}function im(t,e){switch(t.tag){case 26:case 27:case 5:return Pe(t.type);case 16:return Pe("Lazy");case 13:return t.child!==e&&e!==null?Pe("Suspense Fallback"):Pe("Suspense");case 19:return Pe("SuspenseList");case 0:case 15:return Gi(t.type,!1);case 11:return Gi(t.type.render,!1);case 1:return Gi(t.type,!0);case 31:return Pe("Activity");default:return""}}function vf(t){try{var e="",l=null;do e+=im(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Mu=Object.prototype.hasOwnProperty,yc=ft.unstable_scheduleCallback,Xi=ft.unstable_cancelCallback,um=ft.unstable_shouldYield,cm=ft.unstable_requestPaint,Ct=ft.unstable_now,fm=ft.unstable_getCurrentPriorityLevel,eo=ft.unstable_ImmediatePriority,lo=ft.unstable_UserBlockingPriority,Ln=ft.unstable_NormalPriority,sm=ft.unstable_LowPriority,ao=ft.unstable_IdlePriority,om=ft.log,rm=ft.unstable_setDisableYieldValue,La=null,Nt=null;function Ne(t){if(typeof om=="function"&&rm(t),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(La,t)}catch{}}var Ut=Math.clz32?Math.clz32:hm,dm=Math.log,mm=Math.LN2;function hm(t){return t>>>=0,t===0?32:31-(dm(t)/mm|0)|0}var sn=256,on=262144,rn=4194304;function tl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pi(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=tl(a):(u&=c,u!==0?n=tl(u):l||(l=c&~t,l!==0&&(n=tl(l))))):(c=a&~i,c!==0?n=tl(c):u!==0?n=tl(u):l||(l=a&~t,l!==0&&(n=tl(l)))),n===0?0:e!==0&&e!==n&&!(e&i)&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function Ja(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function gm(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function no(){var t=rn;return rn<<=1,!(rn&62914560)&&(rn=4194304),t}function wi(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Ka(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vm(t,e,l,a,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,r=t.hiddenUpdates;for(l=u&~l;0<l;){var y=31-Ut(l),v=1<<y;c[y]=0,s[y]=-1;var d=r[y];if(d!==null)for(r[y]=null,y=0;y<d.length;y++){var g=d[y];g!==null&&(g.lane&=-536870913)}l&=~v}a!==0&&io(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function io(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Ut(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function uo(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Ut(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function co(t,e){var l=e&-e;return l=l&42?1:bc(l),l&(t.suspendedLanes|e)?0:l}function bc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function pc(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function fo(){var t=w.p;return t!==0?t:(t=window.event,t===void 0?32:Ud(t.type))}function yf(t,e){var l=w.p;try{return w.p=t,e()}finally{w.p=l}}var Fe=Math.random().toString(36).slice(2),ht="__reactFiber$"+Fe,Tt="__reactProps$"+Fe,Il="__reactContainer$"+Fe,Ou="__reactEvents$"+Fe,ym="__reactListeners$"+Fe,bm="__reactHandles$"+Fe,bf="__reactResources$"+Fe,ka="__reactMarker$"+Fe;function xc(t){delete t[ht],delete t[Tt],delete t[Ou],delete t[ym],delete t[bm]}function Tl(t){var e=t[ht];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Il]||l[ht]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=As(t);t!==null;){if(l=t[ht])return l;t=As(t)}return e}t=l,l=t.parentNode}return null}function Pl(t){if(t=t[ht]||t[Il]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ha(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(p(33))}function Hl(t){var e=t[bf];return e||(e=t[bf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function rt(t){t[ka]=!0}var so=new Set,oo={};function ml(t,e){Rl(t,e),Rl(t+"Capture",e)}function Rl(t,e){for(oo[t]=e,t=0;t<e.length;t++)so.add(e[t])}var pm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pf={},xf={};function xm(t){return Mu.call(xf,t)?!0:Mu.call(pf,t)?!1:pm.test(t)?xf[t]=!0:(pf[t]=!0,!1)}function Mn(t,e,l){if(xm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function dn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ne(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function Qt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ro(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sm(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Du(t){if(!t._valueTracker){var e=ro(t)?"checked":"value";t._valueTracker=Sm(t,e,""+t[e])}}function mo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=ro(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Jn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zm=/[\n"\\]/g;function wt(t){return t.replace(zm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Cu(t,e,l,a,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Qt(e)):t.value!==""+Qt(e)&&(t.value=""+Qt(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Nu(t,u,Qt(e)):l!=null?Nu(t,u,Qt(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+Qt(c):t.removeAttribute("name")}function ho(t,e,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Du(t);return}l=l!=null?""+Qt(l):"",e=e!=null?""+Qt(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Du(t)}function Nu(t,e,l){e==="number"&&Jn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function ql(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Qt(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function go(t,e,l){if(e!=null&&(e=""+Qt(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Qt(l):""}function vo(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(p(92));if(ma(a)){if(1<a.length)throw Error(p(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Qt(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),Du(t)}function Zl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var jm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||jm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function yo(t,e,l){if(e!=null&&typeof e!="object")throw Error(p(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Sf(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&Sf(t,i,e[i])}function Sc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function On(t){return Am.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function me(){}var Uu=null;function zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Al=null,Bl=null;function zf(t){var e=Pl(t);if(e&&(t=e.stateNode)){var l=t[Tt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Cu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+wt(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Tt]||null;if(!n)throw Error(p(90));Cu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&mo(a)}break t;case"textarea":go(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&ql(t,!!l.multiple,e,!1)}}}var Ri=!1;function bo(t,e,l){if(Ri)return t(e,l);Ri=!0;try{var a=t(e);return a}finally{if(Ri=!1,(Al!==null||Bl!==null)&&(Ni(),Al&&(e=Al,t=Bl,Bl=Al=null,zf(e),t)))for(e=0;e<t.length;e++)zf(t[e])}}function Na(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Tt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(p(231,e,typeof l));return l}var be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(be)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){_u=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{_u=!1}var Ue=null,jc=null,Dn=null;function po(){if(Dn)return Dn;var t,e=jc,l=e.length,a,n="value"in Ue?Ue.value:Ue.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===n[i-a];a++);return Dn=n.slice(t,1<a?1-a:void 0)}function Cn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function mn(){return!0}function jf(){return!1}function At(t){function e(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mn:jf,this.isPropagationStopped=jf,this}return $(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=mn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=mn)},persist:function(){},isPersistent:mn}),e}var hl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=At(hl),Fa=$({},hl,{view:0,detail:0}),Em=At(Fa),Zi,Vi,ca,Si=$({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(Zi=t.screenX-ca.screenX,Vi=t.screenY-ca.screenY):Vi=Zi=0,ca=t),Zi)},movementY:function(t){return"movementY"in t?t.movementY:Vi}}),Tf=At(Si),Mm=$({},Si,{dataTransfer:0}),Om=At(Mm),Dm=$({},Fa,{relatedTarget:0}),Li=At(Dm),Cm=$({},hl,{animationName:0,elapsedTime:0,pseudoElement:0}),Nm=At(Cm),Um=$({},hl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_m=At(Um),Hm=$({},hl,{data:0}),Af=At(Hm),qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ym[t])?!!e[t]:!1}function Tc(){return Qm}var Gm=$({},Fa,{key:function(t){if(t.key){var e=qm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(t){return t.type==="keypress"?Cn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xm=At(Gm),wm=$({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=At(wm),Rm=$({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),Zm=At(Rm),Vm=$({},hl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lm=At(Vm),Jm=$({},Si,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Km=At(Jm),km=$({},hl,{newState:0,oldState:0}),Fm=At(km),$m=[9,13,27,32],Ac=be&&"CompositionEvent"in window,ya=null;be&&"documentMode"in document&&(ya=document.documentMode);var Wm=be&&"TextEvent"in window&&!ya,xo=be&&(!Ac||ya&&8<ya&&11>=ya),Mf=" ",Of=!1;function So(t,e){switch(t){case"keyup":return $m.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var El=!1;function Im(t,e){switch(t){case"compositionend":return zo(e);case"keypress":return e.which!==32?null:(Of=!0,Mf);case"textInput":return t=e.data,t===Mf&&Of?null:t;default:return null}}function Pm(t,e){if(El)return t==="compositionend"||!Ac&&So(t,e)?(t=po(),Dn=jc=Ue=null,El=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xo&&e.locale!=="ko"?null:e.data;default:return null}}var t0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!t0[t.type]:e==="textarea"}function jo(t,e,l,a){Al?Bl?Bl.push(a):Bl=[a]:Al=a,e=oi(e,"onChange"),0<e.length&&(l=new xi("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var ba=null,Ua=null;function e0(t){bd(t,0)}function zi(t){var e=ha(t);if(mo(e))return t}function Cf(t,e){if(t==="change")return e}var To=!1;if(be){var Ji;if(be){var Ki="oninput"in document;if(!Ki){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),Ki=typeof Nf.oninput=="function"}Ji=Ki}else Ji=!1;To=Ji&&(!document.documentMode||9<document.documentMode)}function Uf(){ba&&(ba.detachEvent("onpropertychange",Ao),Ua=ba=null)}function Ao(t){if(t.propertyName==="value"&&zi(Ua)){var e=[];jo(e,Ua,t,zc(t)),bo(e0,e)}}function l0(t,e,l){t==="focusin"?(Uf(),ba=e,Ua=l,ba.attachEvent("onpropertychange",Ao)):t==="focusout"&&Uf()}function a0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zi(Ua)}function n0(t,e){if(t==="click")return zi(e)}function i0(t,e){if(t==="input"||t==="change")return zi(e)}function u0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:u0;function _a(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Mu.call(e,n)||!Ht(t[n],e[n]))return!1}return!0}function _f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hf(t,e){var l=_f(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=_f(l)}}function Eo(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Eo(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mo(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Jn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Jn(t.document)}return e}function Ec(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var c0=be&&"documentMode"in document&&11>=document.documentMode,Ml=null,Hu=null,pa=null,qu=!1;function qf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;qu||Ml==null||Ml!==Jn(a)||(a=Ml,"selectionStart"in a&&Ec(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),pa&&_a(pa,a)||(pa=a,a=oi(Hu,"onSelect"),0<a.length&&(e=new xi("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ml)))}function Ie(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ol={animationend:Ie("Animation","AnimationEnd"),animationiteration:Ie("Animation","AnimationIteration"),animationstart:Ie("Animation","AnimationStart"),transitionrun:Ie("Transition","TransitionRun"),transitionstart:Ie("Transition","TransitionStart"),transitioncancel:Ie("Transition","TransitionCancel"),transitionend:Ie("Transition","TransitionEnd")},ki={},Oo={};be&&(Oo=document.createElement("div").style,"AnimationEvent"in window||(delete Ol.animationend.animation,delete Ol.animationiteration.animation,delete Ol.animationstart.animation),"TransitionEvent"in window||delete Ol.transitionend.transition);function gl(t){if(ki[t])return ki[t];if(!Ol[t])return t;var e=Ol[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Oo)return ki[t]=e[l];return t}var Do=gl("animationend"),Co=gl("animationiteration"),No=gl("animationstart"),f0=gl("transitionrun"),s0=gl("transitionstart"),o0=gl("transitioncancel"),Uo=gl("transitionend"),_o=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function $t(t,e){_o.set(t,e),ml(e,[t])}var Kn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Yt=[],Dl=0,Mc=0;function ji(){for(var t=Dl,e=Mc=Dl=0;e<t;){var l=Yt[e];Yt[e++]=null;var a=Yt[e];Yt[e++]=null;var n=Yt[e];Yt[e++]=null;var i=Yt[e];if(Yt[e++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Ho(l,n,i)}}function Ti(t,e,l,a){Yt[Dl++]=t,Yt[Dl++]=e,Yt[Dl++]=l,Yt[Dl++]=a,Mc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Oc(t,e,l,a){return Ti(t,e,l,a),kn(t)}function vl(t,e){return Ti(t,null,null,e),kn(t)}function Ho(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Ut(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function kn(t){if(50<Oa)throw Oa=0,ac=null,Error(p(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Cl={};function r0(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,l,a){return new r0(t,e,l,a)}function Dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ge(t,e){var l=t.alternate;return l===null?(l=Ot(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function qo(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Nn(t,e,l,a,n,i){var u=0;if(a=t,typeof t=="function")Dc(t)&&(u=1);else if(typeof t=="string")u=vh(t,l,ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ju:return t=Ot(31,l,e,n),t.elementType=ju,t.lanes=i,t;case zl:return nl(l.children,n,i,e);case Ps:u=8,n|=24;break;case xu:return t=Ot(12,l,e,n|2),t.elementType=xu,t.lanes=i,t;case Su:return t=Ot(13,l,e,n),t.elementType=Su,t.lanes=i,t;case zu:return t=Ot(19,l,e,n),t.elementType=zu,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case de:u=10;break t;case to:u=9;break t;case gc:u=11;break t;case vc:u=14;break t;case Ae:u=16,a=null;break t}u=29,l=Error(p(130,t===null?"null":typeof t,"")),a=null}return e=Ot(u,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function nl(t,e,l,a){return t=Ot(7,t,a,e),t.lanes=l,t}function Fi(t,e,l){return t=Ot(6,t,null,e),t.lanes=l,t}function Bo(t){var e=Ot(18,null,null,0);return e.stateNode=t,e}function $i(t,e,l){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Bf=new WeakMap;function Rt(t,e){if(typeof t=="object"&&t!==null){var l=Bf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:vf(e)},Bf.set(t,e),e)}return{value:t,source:e,stack:vf(e)}}var Nl=[],Ul=0,Fn=null,Ha=0,Gt=[],Xt=0,Le=null,It=1,Pt="";function oe(t,e){Nl[Ul++]=Ha,Nl[Ul++]=Fn,Fn=t,Ha=e}function Yo(t,e,l){Gt[Xt++]=It,Gt[Xt++]=Pt,Gt[Xt++]=Le,Le=t;var a=It;t=Pt;var n=32-Ut(a)-1;a&=~(1<<n),l+=1;var i=32-Ut(e)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,It=1<<32-Ut(e)+n|l<<n|a,Pt=i+t}else It=1<<i|l<<n|a,Pt=t}function Cc(t){t.return!==null&&(oe(t,1),Yo(t,1,0))}function Nc(t){for(;t===Fn;)Fn=Nl[--Ul],Nl[Ul]=null,Ha=Nl[--Ul],Nl[Ul]=null;for(;t===Le;)Le=Gt[--Xt],Gt[Xt]=null,Pt=Gt[--Xt],Gt[Xt]=null,It=Gt[--Xt],Gt[Xt]=null}function Qo(t,e){Gt[Xt++]=It,Gt[Xt++]=Pt,Gt[Xt++]=Le,It=e.id,Pt=e.overflow,Le=t}var gt=null,F=null,G=!1,Ye=null,Zt=!1,Yu=Error(p(519));function Je(t){var e=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qa(Rt(e,t)),Yu}function Yf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[ht]=t,e[Tt]=a,l){case"dialog":q("cancel",e),q("close",e);break;case"iframe":case"object":case"embed":q("load",e);break;case"video":case"audio":for(l=0;l<Ga.length;l++)q(Ga[l],e);break;case"source":q("error",e);break;case"img":case"image":case"link":q("error",e),q("load",e);break;case"details":q("toggle",e);break;case"input":q("invalid",e),ho(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":q("invalid",e);break;case"textarea":q("invalid",e),vo(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||xd(e.textContent,l)?(a.popover!=null&&(q("beforetoggle",e),q("toggle",e)),a.onScroll!=null&&q("scroll",e),a.onScrollEnd!=null&&q("scrollend",e),a.onClick!=null&&(e.onclick=me),e=!0):e=!1,e||Je(t,!0)}function Qf(t){for(gt=t.return;gt;)switch(gt.tag){case 5:case 31:case 13:Zt=!1;return;case 27:case 3:Zt=!0;return;default:gt=gt.return}}function bl(t){if(t!==gt)return!1;if(!G)return Qf(t),G=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||fc(t.type,t.memoizedProps)),l=!l),l&&F&&Je(t),Qf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));F=Ts(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));F=Ts(t)}else e===27?(e=F,$e(t.type)?(t=dc,dc=null,F=t):F=e):F=gt?Lt(t.stateNode.nextSibling):null;return!0}function fl(){F=gt=null,G=!1}function Wi(){var t=Ye;return t!==null&&(zt===null?zt=t:zt.push.apply(zt,t),Ye=null),t}function qa(t){Ye===null?Ye=[t]:Ye.push(t)}var Qu=le(null),yl=null,he=null;function Me(t,e,l){K(Qu,e._currentValue),e._currentValue=l}function ve(t){t._currentValue=Qu.current,dt(Qu)}function Gu(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Xu(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var s=0;s<e.length;s++)if(c.context===e[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Gu(i.return,l,t),a||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(p(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Gu(u,l,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ta(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(p(387));if(u=u.memoizedProps,u!==null){var c=n.type;Ht(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===Rn.current){if(u=n.alternate,u===null)throw Error(p(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(wa):t=[wa])}n=n.return}t!==null&&Xu(e,t,l,a),e.flags|=262144}function $n(t){for(t=t.firstContext;t!==null;){if(!Ht(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sl(t){yl=t,he=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vt(t){return Go(yl,t)}function hn(t,e){return yl===null&&sl(t),Go(t,e)}function Go(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},he===null){if(t===null)throw Error(p(308));he=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else he=he.next=e;return l}var d0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},m0=ft.unstable_scheduleCallback,h0=ft.unstable_NormalPriority,it={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uc(){return{controller:new d0,data:new Map,refCount:0}}function $a(t){t.refCount--,t.refCount===0&&m0(h0,function(){t.controller.abort()})}var xa=null,wu=0,Vl=0,Yl=null;function g0(t,e){if(xa===null){var l=xa=[];wu=0,Vl=af(),Yl={status:"pending",value:void 0,then:function(a){l.push(a)}}}return wu++,e.then(Gf,Gf),e}function Gf(){if(--wu===0&&xa!==null){Yl!==null&&(Yl.status="fulfilled");var t=xa;xa=null,Vl=0,Yl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function v0(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Xf=M.S;M.S=function(t,e){Pr=Ct(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&g0(t,e),Xf!==null&&Xf(t,e)};var il=le(null);function _c(){var t=il.current;return t!==null?t:J.pooledCache}function Un(t,e){e===null?K(il,il.current):K(il,e.pool)}function Xo(){var t=_c();return t===null?null:{parent:it._currentValue,pool:t}}var ea=Error(p(460)),Hc=Error(p(474)),Ai=Error(p(542)),Wn={then:function(){}};function wf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wo(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(me,me),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zf(t),t;default:if(typeof e.status=="string")e.then(me,me);else{if(t=J,t!==null&&100<t.shellSuspendCounter)throw Error(p(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Zf(t),t}throw ul=e,ea}}function el(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ul=l,ea):l}}var ul=null;function Rf(){if(ul===null)throw Error(p(459));var t=ul;return ul=null,t}function Zf(t){if(t===ea||t===Ai)throw Error(p(483))}var Ql=null,Ba=0;function gn(t){var e=Ba;return Ba+=1,Ql===null&&(Ql=[]),wo(Ql,t,e)}function fa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function vn(t,e){throw e.$$typeof===lm?Error(p(525)):(t=Object.prototype.toString.call(e),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ro(t){function e(m,o){if(t){var h=m.deletions;h===null?(m.deletions=[o],m.flags|=16):h.push(o)}}function l(m,o){if(!t)return null;for(;o!==null;)e(m,o),o=o.sibling;return null}function a(m){for(var o=new Map;m!==null;)m.key!==null?o.set(m.key,m):o.set(m.index,m),m=m.sibling;return o}function n(m,o){return m=ge(m,o),m.index=0,m.sibling=null,m}function i(m,o,h){return m.index=h,t?(h=m.alternate,h!==null?(h=h.index,h<o?(m.flags|=67108866,o):h):(m.flags|=67108866,o)):(m.flags|=1048576,o)}function u(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function c(m,o,h,b){return o===null||o.tag!==6?(o=Fi(h,m.mode,b),o.return=m,o):(o=n(o,h),o.return=m,o)}function s(m,o,h,b){var A=h.type;return A===zl?y(m,o,h.props.children,b,h.key):o!==null&&(o.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ae&&el(A)===o.type)?(o=n(o,h.props),fa(o,h),o.return=m,o):(o=Nn(h.type,h.key,h.props,null,m.mode,b),fa(o,h),o.return=m,o)}function r(m,o,h,b){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=$i(h,m.mode,b),o.return=m,o):(o=n(o,h.children||[]),o.return=m,o)}function y(m,o,h,b,A){return o===null||o.tag!==7?(o=nl(h,m.mode,b,A),o.return=m,o):(o=n(o,h),o.return=m,o)}function v(m,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Fi(""+o,m.mode,h),o.return=m,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case fn:return h=Nn(o.type,o.key,o.props,null,m.mode,h),fa(h,o),h.return=m,h;case da:return o=$i(o,m.mode,h),o.return=m,o;case Ae:return o=el(o),v(m,o,h)}if(ma(o)||ia(o))return o=nl(o,m.mode,h,null),o.return=m,o;if(typeof o.then=="function")return v(m,gn(o),h);if(o.$$typeof===de)return v(m,hn(m,o),h);vn(m,o)}return null}function d(m,o,h,b){var A=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return A!==null?null:c(m,o,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fn:return h.key===A?s(m,o,h,b):null;case da:return h.key===A?r(m,o,h,b):null;case Ae:return h=el(h),d(m,o,h,b)}if(ma(h)||ia(h))return A!==null?null:y(m,o,h,b,null);if(typeof h.then=="function")return d(m,o,gn(h),b);if(h.$$typeof===de)return d(m,o,hn(m,h),b);vn(m,h)}return null}function g(m,o,h,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return m=m.get(h)||null,c(o,m,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fn:return m=m.get(b.key===null?h:b.key)||null,s(o,m,b,A);case da:return m=m.get(b.key===null?h:b.key)||null,r(o,m,b,A);case Ae:return b=el(b),g(m,o,h,b,A)}if(ma(b)||ia(b))return m=m.get(h)||null,y(o,m,b,A,null);if(typeof b.then=="function")return g(m,o,h,gn(b),A);if(b.$$typeof===de)return g(m,o,h,hn(o,b),A);vn(o,b)}return null}function S(m,o,h,b){for(var A=null,N=null,j=o,O=o=0,U=null;j!==null&&O<h.length;O++){j.index>O?(U=j,j=null):U=j.sibling;var Q=d(m,j,h[O],b);if(Q===null){j===null&&(j=U);break}t&&j&&Q.alternate===null&&e(m,j),o=i(Q,o,O),N===null?A=Q:N.sibling=Q,N=Q,j=U}if(O===h.length)return l(m,j),G&&oe(m,O),A;if(j===null){for(;O<h.length;O++)j=v(m,h[O],b),j!==null&&(o=i(j,o,O),N===null?A=j:N.sibling=j,N=j);return G&&oe(m,O),A}for(j=a(j);O<h.length;O++)U=g(j,m,O,h[O],b),U!==null&&(t&&U.alternate!==null&&j.delete(U.key===null?O:U.key),o=i(U,o,O),N===null?A=U:N.sibling=U,N=U);return t&&j.forEach(function(Bt){return e(m,Bt)}),G&&oe(m,O),A}function z(m,o,h,b){if(h==null)throw Error(p(151));for(var A=null,N=null,j=o,O=o=0,U=null,Q=h.next();j!==null&&!Q.done;O++,Q=h.next()){j.index>O?(U=j,j=null):U=j.sibling;var Bt=d(m,j,Q.value,b);if(Bt===null){j===null&&(j=U);break}t&&j&&Bt.alternate===null&&e(m,j),o=i(Bt,o,O),N===null?A=Bt:N.sibling=Bt,N=Bt,j=U}if(Q.done)return l(m,j),G&&oe(m,O),A;if(j===null){for(;!Q.done;O++,Q=h.next())Q=v(m,Q.value,b),Q!==null&&(o=i(Q,o,O),N===null?A=Q:N.sibling=Q,N=Q);return G&&oe(m,O),A}for(j=a(j);!Q.done;O++,Q=h.next())Q=g(j,m,O,Q.value,b),Q!==null&&(t&&Q.alternate!==null&&j.delete(Q.key===null?O:Q.key),o=i(Q,o,O),N===null?A=Q:N.sibling=Q,N=Q);return t&&j.forEach(function(Te){return e(m,Te)}),G&&oe(m,O),A}function E(m,o,h,b){if(typeof h=="object"&&h!==null&&h.type===zl&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case fn:t:{for(var A=h.key;o!==null;){if(o.key===A){if(A=h.type,A===zl){if(o.tag===7){l(m,o.sibling),b=n(o,h.props.children),b.return=m,m=b;break t}}else if(o.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ae&&el(A)===o.type){l(m,o.sibling),b=n(o,h.props),fa(b,h),b.return=m,m=b;break t}l(m,o);break}else e(m,o);o=o.sibling}h.type===zl?(b=nl(h.props.children,m.mode,b,h.key),b.return=m,m=b):(b=Nn(h.type,h.key,h.props,null,m.mode,b),fa(b,h),b.return=m,m=b)}return u(m);case da:t:{for(A=h.key;o!==null;){if(o.key===A)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){l(m,o.sibling),b=n(o,h.children||[]),b.return=m,m=b;break t}else{l(m,o);break}else e(m,o);o=o.sibling}b=$i(h,m.mode,b),b.return=m,m=b}return u(m);case Ae:return h=el(h),E(m,o,h,b)}if(ma(h))return S(m,o,h,b);if(ia(h)){if(A=ia(h),typeof A!="function")throw Error(p(150));return h=A.call(h),z(m,o,h,b)}if(typeof h.then=="function")return E(m,o,gn(h),b);if(h.$$typeof===de)return E(m,o,hn(m,h),b);vn(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(l(m,o.sibling),b=n(o,h),b.return=m,m=b):(l(m,o),b=Fi(h,m.mode,b),b.return=m,m=b),u(m)):l(m,o)}return function(m,o,h,b){try{Ba=0;var A=E(m,o,h,b);return Ql=null,A}catch(j){if(j===ea||j===Ai)throw j;var N=Ot(29,j,null,m.mode);return N.lanes=b,N.return=m,N}finally{}}}var ol=Ro(!0),Zo=Ro(!1),Ee=!1;function qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qe(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ge(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,X&2){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=kn(t),Ho(t,null,l),e}return Ti(t,a,e,l),kn(t)}function Sa(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,uo(t,l)}}function Ii(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Zu=!1;function za(){if(Zu){var t=Yl;if(t!==null)throw t}}function ja(t,e,l,a){Zu=!1;var n=t.updateQueue;Ee=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,r=s.next;s.next=null,u===null?i=r:u.next=r,u=s;var y=t.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==u&&(c===null?y.firstBaseUpdate=r:c.next=r,y.lastBaseUpdate=s))}if(i!==null){var v=n.baseState;u=0,y=r=s=null,c=i;do{var d=c.lane&-536870913,g=d!==c.lane;if(g?(Y&d)===d:(a&d)===d){d!==0&&d===Vl&&(Zu=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var S=t,z=c;d=e;var E=l;switch(z.tag){case 1:if(S=z.payload,typeof S=="function"){v=S.call(E,v,d);break t}v=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=z.payload,d=typeof S=="function"?S.call(E,v,d):S,d==null)break t;v=$({},v,d);break t;case 2:Ee=!0}}d=c.callback,d!==null&&(t.flags|=64,g&&(t.flags|=8192),g=n.callbacks,g===null?n.callbacks=[d]:g.push(d))}else g={lane:d,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(r=y=g,s=v):y=y.next=g,u|=d;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;g=c,c=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);y===null&&(s=v),n.baseState=s,n.firstBaseUpdate=r,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),ke|=u,t.lanes=u,t.memoizedState=v}}function Vo(t,e){if(typeof t!="function")throw Error(p(191,t));t.call(e)}function Lo(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Vo(l[t],e)}var Ll=le(null),In=le(0);function Vf(t,e){t=ze,K(In,t),K(Ll,e),ze=t|e.baseLanes}function Vu(){K(In,ze),K(Ll,Ll.current)}function Bc(){ze=In.current,dt(Ll),dt(In)}var qt=le(null),Vt=null;function Oe(t){var e=t.alternate;K(et,et.current&1),K(qt,t),Vt===null&&(e===null||Ll.current!==null||e.memoizedState!==null)&&(Vt=t)}function Lu(t){K(et,et.current),K(qt,t),Vt===null&&(Vt=t)}function Jo(t){t.tag===22?(K(et,et.current),K(qt,t),Vt===null&&(Vt=t)):De()}function De(){K(et,et.current),K(qt,qt.current)}function Mt(t){dt(qt),Vt===t&&(Vt=null),dt(et)}var et=le(0);function Pn(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||oc(l)||rc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pe=0,D=null,L=null,at=null,ti=!1,Gl=!1,rl=!1,ei=0,Ya=0,Xl=null,y0=0;function I(){throw Error(p(321))}function Yc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Ht(t[l],e[l]))return!1;return!0}function Qc(t,e,l,a,n,i){return pe=i,D=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=t===null||t.memoizedState===null?jr:Fc,rl=!1,i=l(a,n),rl=!1,Gl&&(i=ko(e,l,a,n)),Ko(t),i}function Ko(t){M.H=Qa;var e=L!==null&&L.next!==null;if(pe=0,at=L=D=null,ti=!1,Ya=0,Xl=null,e)throw Error(p(300));t===null||ut||(t=t.dependencies,t!==null&&$n(t)&&(ut=!0))}function ko(t,e,l,a){D=t;var n=0;do{if(Gl&&(Xl=null),Ya=0,Gl=!1,25<=n)throw Error(p(301));if(n+=1,at=L=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=Tr,i=e(l,a)}while(Gl);return i}function b0(){var t=M.H,e=t.useState()[0];return e=typeof e.then=="function"?Wa(e):e,t=t.useState()[0],(L!==null?L.memoizedState:null)!==t&&(D.flags|=1024),e}function Gc(){var t=ei!==0;return ei=0,t}function Xc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function wc(t){if(ti){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ti=!1}pe=0,at=L=D=null,Gl=!1,Ya=ei=0,Xl=null}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?D.memoizedState=at=t:at=at.next=t,at}function lt(){if(L===null){var t=D.alternate;t=t!==null?t.memoizedState:null}else t=L.next;var e=at===null?D.memoizedState:at.next;if(e!==null)at=e,L=t;else{if(t===null)throw D.alternate===null?Error(p(467)):Error(p(310));L=t,t={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},at===null?D.memoizedState=at=t:at=at.next=t}return at}function Ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wa(t){var e=Ya;return Ya+=1,Xl===null&&(Xl=[]),t=wo(Xl,t,e),e=D,(at===null?e.memoizedState:at.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?jr:Fc),t}function Mi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wa(t);if(t.$$typeof===de)return vt(t)}throw Error(p(438,String(t)))}function Rc(t){var e=null,l=D.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=D.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Ei(),D.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=am;return e.index++,l}function xe(t,e){return typeof e=="function"?e(t):e}function _n(t){var e=lt();return Zc(e,L,t)}function Zc(t,e,l){var a=t.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,s=null,r=e,y=!1;do{var v=r.lane&-536870913;if(v!==r.lane?(Y&v)===v:(pe&v)===v){var d=r.revertLane;if(d===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),v===Vl&&(y=!0);else if((pe&d)===d){r=r.next,d===Vl&&(y=!0);continue}else v={lane:0,revertLane:r.revertLane,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},s===null?(c=s=v,u=i):s=s.next=v,D.lanes|=d,ke|=d;v=r.action,rl&&l(i,v),i=r.hasEagerState?r.eagerState:l(i,v)}else d={lane:v,revertLane:r.revertLane,gesture:r.gesture,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},s===null?(c=s=d,u=i):s=s.next=d,D.lanes|=v,ke|=v;r=r.next}while(r!==null&&r!==e);if(s===null?u=i:s.next=c,!Ht(i,t.memoizedState)&&(ut=!0,y&&(l=Yl,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Pi(t){var e=lt(),l=e.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Ht(i,e.memoizedState)||(ut=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Fo(t,e,l){var a=D,n=lt(),i=G;if(i){if(l===void 0)throw Error(p(407));l=l()}else l=e();var u=!Ht((L||n).memoizedState,l);if(u&&(n.memoizedState=l,ut=!0),n=n.queue,Vc(Io.bind(null,a,n,t),[t]),n.getSnapshot!==e||u||at!==null&&at.memoizedState.tag&1){if(a.flags|=2048,Jl(9,{destroy:void 0},Wo.bind(null,a,n,l,e),null),J===null)throw Error(p(349));i||pe&127||$o(a,e,l)}return l}function $o(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=D.updateQueue,e===null?(e=Ei(),D.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Wo(t,e,l,a){e.value=l,e.getSnapshot=a,Po(e)&&tr(t)}function Io(t,e,l){return l(function(){Po(e)&&tr(t)})}function Po(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Ht(t,l)}catch{return!0}}function tr(t){var e=vl(t,2);e!==null&&jt(e,t,2)}function Ju(t){var e=bt();if(typeof t=="function"){var l=t;if(t=l(),rl){Ne(!0);try{l()}finally{Ne(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xe,lastRenderedState:t},e}function er(t,e,l,a){return t.baseState=l,Zc(t,L,typeof a=="function"?a:xe)}function p0(t,e,l,a,n){if(Di(t))throw Error(p(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};M.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,lr(e,i)):(i.next=l.next,e.pending=l.next=i)}}function lr(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=M.T,u={};M.T=u;try{var c=l(n,a),s=M.S;s!==null&&s(u,c),Lf(t,e,c)}catch(r){Ku(t,e,r)}finally{i!==null&&u.types!==null&&(i.types=u.types),M.T=i}}else try{i=l(n,a),Lf(t,e,i)}catch(r){Ku(t,e,r)}}function Lf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Jf(t,e,a)},function(a){return Ku(t,e,a)}):Jf(t,e,l)}function Jf(t,e,l){e.status="fulfilled",e.value=l,ar(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,lr(t,l)))}function Ku(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,ar(e),e=e.next;while(e!==a)}t.action=null}function ar(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function nr(t,e){return e}function Kf(t,e){if(G){var l=J.formState;if(l!==null){t:{var a=D;if(G){if(F){e:{for(var n=F,i=Zt;n.nodeType!==8;){if(!i){n=null;break e}if(n=Lt(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){F=Lt(n.nextSibling),a=n.data==="F!";break t}}Je(a)}a=!1}a&&(e=l[0])}}return l=bt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},l.queue=a,l=xr.bind(null,D,a),a.dispatch=l,a=Ju(!1),i=kc.bind(null,D,!1,a.queue),a=bt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=p0.bind(null,D,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function kf(t){var e=lt();return ir(e,L,t)}function ir(t,e,l){if(e=Zc(t,e,nr)[0],t=_n(xe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Wa(e)}catch(u){throw u===ea?Ai:u}else a=e;e=lt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(D.flags|=2048,Jl(9,{destroy:void 0},x0.bind(null,n,l),null)),[a,i,t]}function x0(t,e){t.action=e}function Ff(t){var e=lt(),l=L;if(l!==null)return ir(e,l,t);lt(),e=e.memoizedState,l=lt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Jl(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=D.updateQueue,e===null&&(e=Ei(),D.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ur(){return lt().memoizedState}function Hn(t,e,l,a){var n=bt();D.flags|=t,n.memoizedState=Jl(1|e,{destroy:void 0},l,a===void 0?null:a)}function Oi(t,e,l,a){var n=lt();a=a===void 0?null:a;var i=n.memoizedState.inst;L!==null&&a!==null&&Yc(a,L.memoizedState.deps)?n.memoizedState=Jl(e,i,l,a):(D.flags|=t,n.memoizedState=Jl(1|e,i,l,a))}function $f(t,e){Hn(8390656,8,t,e)}function Vc(t,e){Oi(2048,8,t,e)}function S0(t){D.flags|=4;var e=D.updateQueue;if(e===null)e=Ei(),D.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function cr(t){var e=lt().memoizedState;return S0({ref:e,nextImpl:t}),function(){if(X&2)throw Error(p(440));return e.impl.apply(void 0,arguments)}}function fr(t,e){return Oi(4,2,t,e)}function sr(t,e){return Oi(4,4,t,e)}function or(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rr(t,e,l){l=l!=null?l.concat([t]):null,Oi(4,4,or.bind(null,e,t),l)}function Lc(){}function dr(t,e){var l=lt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Yc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function mr(t,e){var l=lt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Yc(e,a[1]))return a[0];if(a=t(),rl){Ne(!0);try{t()}finally{Ne(!1)}}return l.memoizedState=[a,e],a}function Jc(t,e,l){return l===void 0||pe&1073741824&&!(Y&261930)?t.memoizedState=e:(t.memoizedState=l,t=ed(),D.lanes|=t,ke|=t,l)}function hr(t,e,l,a){return Ht(l,e)?l:Ll.current!==null?(t=Jc(t,l,a),Ht(t,e)||(ut=!0),t):!(pe&42)||pe&1073741824&&!(Y&261930)?(ut=!0,t.memoizedState=l):(t=ed(),D.lanes|=t,ke|=t,e)}function gr(t,e,l,a,n){var i=w.p;w.p=i!==0&&8>i?i:8;var u=M.T,c={};M.T=c,kc(t,!1,e,l);try{var s=n(),r=M.S;if(r!==null&&r(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var y=v0(s,a);Ta(t,e,y,_t(t))}else Ta(t,e,a,_t(t))}catch(v){Ta(t,e,{then:function(){},status:"rejected",reason:v},_t())}finally{w.p=i,u!==null&&c.types!==null&&(u.types=c.types),M.T=u}}function z0(){}function ku(t,e,l,a){if(t.tag!==5)throw Error(p(476));var n=vr(t).queue;gr(t,n,e,al,l===null?z0:function(){return yr(t),l(a)})}function vr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:al,baseState:al,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xe,lastRenderedState:al},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xe,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function yr(t){var e=vr(t);e.next===null&&(e=t.alternate.memoizedState),Ta(t,e.next.queue,{},_t())}function Kc(){return vt(wa)}function br(){return lt().memoizedState}function pr(){return lt().memoizedState}function j0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=_t();t=Qe(l);var a=Ge(e,t,l);a!==null&&(jt(a,e,l),Sa(a,e,l)),e={cache:Uc()},t.payload=e;return}e=e.return}}function T0(t,e,l){var a=_t();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Di(t)?Sr(e,l):(l=Oc(t,e,l,a),l!==null&&(jt(l,t,a),zr(l,e,a)))}function xr(t,e,l){var a=_t();Ta(t,e,l,a)}function Ta(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Di(t))Sr(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,Ht(c,u))return Ti(t,e,n,0),J===null&&ji(),!1}catch{}finally{}if(l=Oc(t,e,n,a),l!==null)return jt(l,t,a),zr(l,e,a),!0}return!1}function kc(t,e,l,a){if(a={lane:2,revertLane:af(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Di(t)){if(e)throw Error(p(479))}else e=Oc(t,l,a,2),e!==null&&jt(e,t,2)}function Di(t){var e=t.alternate;return t===D||e!==null&&e===D}function Sr(t,e){Gl=ti=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function zr(t,e,l){if(l&4194048){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,uo(t,l)}}var Qa={readContext:vt,use:Mi,useCallback:I,useContext:I,useEffect:I,useImperativeHandle:I,useLayoutEffect:I,useInsertionEffect:I,useMemo:I,useReducer:I,useRef:I,useState:I,useDebugValue:I,useDeferredValue:I,useTransition:I,useSyncExternalStore:I,useId:I,useHostTransitionStatus:I,useFormState:I,useActionState:I,useOptimistic:I,useMemoCache:I,useCacheRefresh:I};Qa.useEffectEvent=I;var jr={readContext:vt,use:Mi,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:$f,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Hn(4194308,4,or.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Hn(4194308,4,t,e)},useInsertionEffect:function(t,e){Hn(4,2,t,e)},useMemo:function(t,e){var l=bt();e=e===void 0?null:e;var a=t();if(rl){Ne(!0);try{t()}finally{Ne(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=bt();if(l!==void 0){var n=l(e);if(rl){Ne(!0);try{l(e)}finally{Ne(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=T0.bind(null,D,t),[a.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:function(t){t=Ju(t);var e=t.queue,l=xr.bind(null,D,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Lc,useDeferredValue:function(t,e){var l=bt();return Jc(l,t,e)},useTransition:function(){var t=Ju(!1);return t=gr.bind(null,D,t.queue,!0,!1),bt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=D,n=bt();if(G){if(l===void 0)throw Error(p(407));l=l()}else{if(l=e(),J===null)throw Error(p(349));Y&127||$o(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,$f(Io.bind(null,a,i,t),[t]),a.flags|=2048,Jl(9,{destroy:void 0},Wo.bind(null,a,i,l,e),null),l},useId:function(){var t=bt(),e=J.identifierPrefix;if(G){var l=Pt,a=It;l=(a&~(1<<32-Ut(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=ei++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=y0++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Kc,useFormState:Kf,useActionState:Kf,useOptimistic:function(t){var e=bt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=kc.bind(null,D,!0,l),l.dispatch=e,[t,e]},useMemoCache:Rc,useCacheRefresh:function(){return bt().memoizedState=j0.bind(null,D)},useEffectEvent:function(t){var e=bt(),l={impl:t};return e.memoizedState=l,function(){if(X&2)throw Error(p(440));return l.impl.apply(void 0,arguments)}}},Fc={readContext:vt,use:Mi,useCallback:dr,useContext:vt,useEffect:Vc,useImperativeHandle:rr,useInsertionEffect:fr,useLayoutEffect:sr,useMemo:mr,useReducer:_n,useRef:ur,useState:function(){return _n(xe)},useDebugValue:Lc,useDeferredValue:function(t,e){var l=lt();return hr(l,L.memoizedState,t,e)},useTransition:function(){var t=_n(xe)[0],e=lt().memoizedState;return[typeof t=="boolean"?t:Wa(t),e]},useSyncExternalStore:Fo,useId:br,useHostTransitionStatus:Kc,useFormState:kf,useActionState:kf,useOptimistic:function(t,e){var l=lt();return er(l,L,t,e)},useMemoCache:Rc,useCacheRefresh:pr};Fc.useEffectEvent=cr;var Tr={readContext:vt,use:Mi,useCallback:dr,useContext:vt,useEffect:Vc,useImperativeHandle:rr,useInsertionEffect:fr,useLayoutEffect:sr,useMemo:mr,useReducer:Pi,useRef:ur,useState:function(){return Pi(xe)},useDebugValue:Lc,useDeferredValue:function(t,e){var l=lt();return L===null?Jc(l,t,e):hr(l,L.memoizedState,t,e)},useTransition:function(){var t=Pi(xe)[0],e=lt().memoizedState;return[typeof t=="boolean"?t:Wa(t),e]},useSyncExternalStore:Fo,useId:br,useHostTransitionStatus:Kc,useFormState:Ff,useActionState:Ff,useOptimistic:function(t,e){var l=lt();return L!==null?er(l,L,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Rc,useCacheRefresh:pr};Tr.useEffectEvent=cr;function tu(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:$({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Fu={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=_t(),n=Qe(a);n.payload=e,l!=null&&(n.callback=l),e=Ge(t,n,a),e!==null&&(jt(e,t,a),Sa(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=_t(),n=Qe(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=Ge(t,n,a),e!==null&&(jt(e,t,a),Sa(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=_t(),a=Qe(l);a.tag=2,e!=null&&(a.callback=e),e=Ge(t,a,l),e!==null&&(jt(e,t,l),Sa(e,t,l))}};function Wf(t,e,l,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):e.prototype&&e.prototype.isPureReactComponent?!_a(l,a)||!_a(n,i):!0}function If(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function dl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=$({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Ar(t){Kn(t)}function Er(t){console.error(t)}function Mr(t){Kn(t)}function li(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Pf(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function $u(t,e,l){return l=Qe(l),l.tag=3,l.payload={element:null},l.callback=function(){li(t,e)},l}function Or(t){return t=Qe(t),t.tag=3,t}function Dr(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Pf(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Pf(e,l,a),typeof n!="function"&&(Xe===null?Xe=new Set([this]):Xe.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function A0(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ta(e,l,n,!0),l=qt.current,l!==null){switch(l.tag){case 31:case 13:return Vt===null?ci():l.alternate===null&&P===0&&(P=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Wn?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),ru(t,a,n)),!1;case 22:return l.flags|=65536,a===Wn?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),ru(t,a,n)),!1}throw Error(p(435,l.tag))}return ru(t,a,n),ci(),!1}if(G)return e=qt.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Yu&&(t=Error(p(422),{cause:a}),qa(Rt(t,l)))):(a!==Yu&&(e=Error(p(423),{cause:a}),qa(Rt(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=Rt(a,l),n=$u(t.stateNode,a,n),Ii(t,n),P!==4&&(P=2)),!1;var i=Error(p(520),{cause:a});if(i=Rt(i,l),Ma===null?Ma=[i]:Ma.push(i),P!==4&&(P=2),e===null)return!0;a=Rt(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=$u(l.stateNode,a,t),Ii(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xe===null||!Xe.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Or(n),Dr(n,t,l,a),Ii(l,n),!1}l=l.return}while(l!==null);return!1}var $c=Error(p(461)),ut=!1;function mt(t,e,l,a){e.child=t===null?Zo(e,null,l,a):ol(e,t.child,l,a)}function ts(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return sl(e),a=Qc(t,e,l,u,i,n),c=Gc(),t!==null&&!ut?(Xc(t,e,n),Se(t,e,n)):(G&&c&&Cc(e),e.flags|=1,mt(t,e,a,n),e.child)}function es(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Dc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Cr(t,e,i,a,n)):(t=Nn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Wc(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:_a,l(u,a)&&t.ref===e.ref)return Se(t,e,n)}return e.flags|=1,t=ge(i,a),t.ref=e.ref,t.return=e,e.child=t}function Cr(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(_a(i,a)&&t.ref===e.ref)if(ut=!1,e.pendingProps=a=i,Wc(t,n))t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,Se(t,e,n)}return Wu(t,e,l,a,n)}function Nr(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(e.flags&128){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return ls(t,e,i,l,a)}if(l&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Un(e,i!==null?i.cachePool:null),i!==null?Vf(e,i):Vu(),Jo(e);else return a=e.lanes=536870912,ls(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Un(e,i.cachePool),Vf(e,i),De(),e.memoizedState=null):(t!==null&&Un(e,null),Vu(),De());return mt(t,e,n,l),e.child}function ga(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function ls(t,e,l,a,n){var i=_c();return i=i===null?null:{parent:it._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Un(e,null),Vu(),Jo(e),t!==null&&ta(t,e,a,!0),e.childLanes=n,null}function qn(t,e){return e=ai({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function as(t,e,l){return ol(e,t.child,null,l),t=qn(e,e.pendingProps),t.flags|=2,Mt(e),e.memoizedState=null,t}function E0(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(G){if(a.mode==="hidden")return t=qn(e,a),e.lanes=536870912,ga(null,t);if(Lu(e),(t=F)?(t=jd(t,Zt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Le!==null?{id:It,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},l=Bo(t),l.return=e,e.child=l,gt=e,F=null)):t=null,t===null)throw Je(e);return e.lanes=536870912,null}return qn(e,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Lu(e),n)if(e.flags&256)e.flags&=-257,e=as(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(p(558));else if(ut||ta(t,e,l,!1),n=(l&t.childLanes)!==0,ut||n){if(a=J,a!==null&&(u=co(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,vl(t,u),jt(a,t,u),$c;ci(),e=as(t,e,l)}else t=i.treeContext,F=Lt(u.nextSibling),gt=e,G=!0,Ye=null,Zt=!1,t!==null&&Qo(e,t),e=qn(e,a),e.flags|=4096;return e}return t=ge(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Bn(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(p(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Wu(t,e,l,a,n){return sl(e),l=Qc(t,e,l,a,void 0,n),a=Gc(),t!==null&&!ut?(Xc(t,e,n),Se(t,e,n)):(G&&a&&Cc(e),e.flags|=1,mt(t,e,l,n),e.child)}function ns(t,e,l,a,n,i){return sl(e),e.updateQueue=null,l=ko(e,a,l,n),Ko(t),a=Gc(),t!==null&&!ut?(Xc(t,e,i),Se(t,e,i)):(G&&a&&Cc(e),e.flags|=1,mt(t,e,l,i),e.child)}function is(t,e,l,a,n){if(sl(e),e.stateNode===null){var i=Cl,u=l.contextType;typeof u=="object"&&u!==null&&(i=vt(u)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fu,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},qc(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?vt(u):Cl,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(tu(e,l,u,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Fu.enqueueReplaceState(i,i.state,null),ja(e,a,i,n),za(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,s=dl(l,c);i.props=s;var r=i.context,y=l.contextType;u=Cl,typeof y=="object"&&y!==null&&(u=vt(y));var v=l.getDerivedStateFromProps;y=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||r!==u)&&If(e,i,a,u),Ee=!1;var d=e.memoizedState;i.state=d,ja(e,a,i,n),za(),r=e.memoizedState,c||d!==r||Ee?(typeof v=="function"&&(tu(e,l,v,a),r=e.memoizedState),(s=Ee||Wf(e,l,s,a,d,r,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=r),i.props=a,i.state=r,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Ru(t,e),u=e.memoizedProps,y=dl(l,u),i.props=y,v=e.pendingProps,d=i.context,r=l.contextType,s=Cl,typeof r=="object"&&r!==null&&(s=vt(r)),c=l.getDerivedStateFromProps,(r=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||d!==s)&&If(e,i,a,s),Ee=!1,d=e.memoizedState,i.state=d,ja(e,a,i,n),za();var g=e.memoizedState;u!==v||d!==g||Ee||t!==null&&t.dependencies!==null&&$n(t.dependencies)?(typeof c=="function"&&(tu(e,l,c,a),g=e.memoizedState),(y=Ee||Wf(e,l,y,a,d,g,s)||t!==null&&t.dependencies!==null&&$n(t.dependencies))?(r||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,g,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=g),i.props=a,i.state=g,i.context=s,a=y):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Bn(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=ol(e,t.child,null,n),e.child=ol(e,null,l,n)):mt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Se(t,e,n),t}function us(t,e,l,a){return fl(),e.flags|=256,mt(t,e,l,a),e.child}var eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lu(t){return{baseLanes:t,cachePool:Xo()}}function au(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Dt),t}function Ur(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(et.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(G){if(n?Oe(e):De(),(t=F)?(t=jd(t,Zt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Le!==null?{id:It,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},l=Bo(t),l.return=e,e.child=l,gt=e,F=null)):t=null,t===null)throw Je(e);return rc(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(De(),n=e.mode,c=ai({mode:"hidden",children:c},n),a=nl(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=lu(l),a.childLanes=au(t,u,l),e.memoizedState=eu,ga(null,a)):(Oe(e),Iu(e,c))}var s=t.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)e.flags&256?(Oe(e),e.flags&=-257,e=nu(t,e,l)):e.memoizedState!==null?(De(),e.child=t.child,e.flags|=128,e=null):(De(),c=a.fallback,n=e.mode,a=ai({mode:"visible",children:a.children},n),c=nl(c,n,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,ol(e,t.child,null,l),a=e.child,a.memoizedState=lu(l),a.childLanes=au(t,u,l),e.memoizedState=eu,e=ga(null,a));else if(Oe(e),rc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var r=u.dgst;u=r,a=Error(p(419)),a.stack="",a.digest=u,qa({value:a,source:null,stack:null}),e=nu(t,e,l)}else if(ut||ta(t,e,l,!1),u=(l&t.childLanes)!==0,ut||u){if(u=J,u!==null&&(a=co(u,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,vl(t,a),jt(u,t,a),$c;oc(c)||ci(),e=nu(t,e,l)}else oc(c)?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,F=Lt(c.nextSibling),gt=e,G=!0,Ye=null,Zt=!1,t!==null&&Qo(e,t),e=Iu(e,a.children),e.flags|=4096);return e}return n?(De(),c=a.fallback,n=e.mode,s=t.child,r=s.sibling,a=ge(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,r!==null?c=ge(r,c):(c=nl(c,n,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,ga(null,a),a=e.child,c=t.child.memoizedState,c===null?c=lu(l):(n=c.cachePool,n!==null?(s=it._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Xo(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=au(t,u,l),e.memoizedState=eu,ga(t.child,a)):(Oe(e),l=t.child,t=l.sibling,l=ge(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function Iu(t,e){return e=ai({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ai(t,e){return t=Ot(22,t,null,e),t.lanes=0,t}function nu(t,e,l){return ol(e,t.child,null,l),t=Iu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cs(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Gu(t.return,e,l)}function iu(t,e,l,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function _r(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=et.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,K(et,u),mt(t,e,a,l),a=G?Ha:0,!c&&t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cs(t,l,e);else if(t.tag===19)cs(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&Pn(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),iu(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Pn(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}iu(e,!0,l,null,i,a);break;case"together":iu(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Se(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),ke|=e.lanes,!(l&e.childLanes))if(t!==null){if(ta(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(p(153));if(e.child!==null){for(t=e.child,l=ge(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=ge(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Wc(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&$n(t)))}function M0(t,e,l){switch(e.tag){case 3:Zn(e,e.stateNode.containerInfo),Me(e,it,t.memoizedState.cache),fl();break;case 27:case 5:Eu(e);break;case 4:Zn(e,e.stateNode.containerInfo);break;case 10:Me(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Lu(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Oe(e),e.flags|=128,null):l&e.child.childLanes?Ur(t,e,l):(Oe(e),t=Se(t,e,l),t!==null?t.sibling:null);Oe(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ta(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return _r(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),K(et,et.current),a)break;return null;case 22:return e.lanes=0,Nr(t,e,l,e.pendingProps);case 24:Me(e,it,t.memoizedState.cache)}return Se(t,e,l)}function Hr(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ut=!0;else{if(!Wc(t,l)&&!(e.flags&128))return ut=!1,M0(t,e,l);ut=!!(t.flags&131072)}else ut=!1,G&&e.flags&1048576&&Yo(e,Ha,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=el(e.elementType),e.type=t,typeof t=="function")Dc(t)?(a=dl(t,a),e.tag=1,e=is(null,e,t,a,l)):(e.tag=0,e=Wu(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===gc){e.tag=11,e=ts(null,e,t,a,l);break t}else if(n===vc){e.tag=14,e=es(null,e,t,a,l);break t}}throw e=Tu(t)||t,Error(p(306,e,""))}}return e;case 0:return Wu(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=dl(a,e.pendingProps),is(t,e,a,n,l);case 3:t:{if(Zn(e,e.stateNode.containerInfo),t===null)throw Error(p(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,Ru(t,e),ja(e,a,null,l);var u=e.memoizedState;if(a=u.cache,Me(e,it,a),a!==i.cache&&Xu(e,[it],l,!0),za(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=us(t,e,a,l);break t}else if(a!==n){n=Rt(Error(p(424)),e),qa(n),e=us(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(F=Lt(t.firstChild),gt=e,G=!0,Ye=null,Zt=!0,l=Zo(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(fl(),a===n){e=Se(t,e,l);break t}mt(t,e,a,l)}e=e.child}return e;case 26:return Bn(t,e),t===null?(l=Ms(e.type,null,e.pendingProps,null))?e.memoizedState=l:G||(l=e.type,t=e.pendingProps,a=ri(Be.current).createElement(l),a[ht]=e,a[Tt]=t,yt(a,l,t),rt(a),e.stateNode=a):e.memoizedState=Ms(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Eu(e),t===null&&G&&(a=e.stateNode=Td(e.type,e.pendingProps,Be.current),gt=e,Zt=!0,n=F,$e(e.type)?(dc=n,F=Lt(a.firstChild)):F=n),mt(t,e,e.pendingProps.children,l),Bn(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&G&&((n=a=F)&&(a=ah(a,e.type,e.pendingProps,Zt),a!==null?(e.stateNode=a,gt=e,F=Lt(a.firstChild),Zt=!1,n=!0):n=!1),n||Je(e)),Eu(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,fc(n,i)?a=null:u!==null&&fc(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Qc(t,e,b0,null,null,l),wa._currentValue=n),Bn(t,e),mt(t,e,a,l),e.child;case 6:return t===null&&G&&((t=l=F)&&(l=nh(l,e.pendingProps,Zt),l!==null?(e.stateNode=l,gt=e,F=null,t=!0):t=!1),t||Je(e)),null;case 13:return Ur(t,e,l);case 4:return Zn(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ol(e,null,a,l):mt(t,e,a,l),e.child;case 11:return ts(t,e,e.type,e.pendingProps,l);case 7:return mt(t,e,e.pendingProps,l),e.child;case 8:return mt(t,e,e.pendingProps.children,l),e.child;case 12:return mt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Me(e,e.type,a.value),mt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,sl(e),n=vt(n),a=a(n),e.flags|=1,mt(t,e,a,l),e.child;case 14:return es(t,e,e.type,e.pendingProps,l);case 15:return Cr(t,e,e.type,e.pendingProps,l);case 19:return _r(t,e,l);case 31:return E0(t,e,l);case 22:return Nr(t,e,l,e.pendingProps);case 24:return sl(e),a=vt(it),t===null?(n=_c(),n===null&&(n=J,i=Uc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},qc(e),Me(e,it,n)):(t.lanes&l&&(Ru(t,e),ja(e,null,null,l),za()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Me(e,it,a)):(a=i.cache,Me(e,it,a),a!==n.cache&&Xu(e,[it],l,!0))),mt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(p(156,e.tag))}function ie(t){t.flags|=4}function uu(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(nd())t.flags|=8192;else throw ul=Wn,Hc}else t.flags&=-16777217}function fs(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Md(e))if(nd())t.flags|=8192;else throw ul=Wn,Hc}function yn(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?no():536870912,t.lanes|=e,Kl|=e)}function sa(t,e){if(!G)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function k(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function O0(t,e,l){var a=e.pendingProps;switch(Nc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return k(e),null;case 1:return k(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ve(it),wl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(bl(e)?ie(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wi())),k(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(ie(e),i!==null?(k(e),fs(e,i)):(k(e),uu(e,n,null,a,l))):i?i!==t.memoizedState?(ie(e),k(e),fs(e,i)):(k(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&ie(e),k(e),uu(e,n,t,a,l)),null;case 27:if(Vn(e),l=Be.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ie(e);else{if(!a){if(e.stateNode===null)throw Error(p(166));return k(e),null}t=ee.current,bl(e)?Yf(e):(t=Td(n,a,l),e.stateNode=t,ie(e))}return k(e),null;case 5:if(Vn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ie(e);else{if(!a){if(e.stateNode===null)throw Error(p(166));return k(e),null}if(i=ee.current,bl(e))Yf(e);else{var u=ri(Be.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[ht]=e,i[Tt]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(yt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&ie(e)}}return k(e),uu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&ie(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(p(166));if(t=Be.current,bl(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=gt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[ht]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||xd(t.nodeValue,l)),t||Je(e,!0)}else t=ri(t).createTextNode(a),t[ht]=e,e.stateNode=t}return k(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=bl(e),l!==null){if(t===null){if(!a)throw Error(p(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(557));t[ht]=e}else fl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;k(e),t=!1}else l=Wi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Mt(e),e):(Mt(e),null);if(e.flags&128)throw Error(p(558))}return k(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=bl(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(p(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(p(317));n[ht]=e}else fl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;k(e),n=!1}else n=Wi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Mt(e),e):(Mt(e),null)}return Mt(e),e.flags&128?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),yn(e,e.updateQueue),k(e),null);case 4:return wl(),t===null&&nf(e.stateNode.containerInfo),k(e),null;case 10:return ve(e.type),k(e),null;case 19:if(dt(et),a=e.memoizedState,a===null)return k(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)sa(a,!1);else{if(P!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=Pn(t),i!==null){for(e.flags|=128,sa(a,!1),t=i.updateQueue,e.updateQueue=t,yn(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)qo(l,t),l=l.sibling;return K(et,et.current&1|2),G&&oe(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Ct()>ii&&(e.flags|=128,n=!0,sa(a,!1),e.lanes=4194304)}else{if(!n)if(t=Pn(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,yn(e,t),sa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!G)return k(e),null}else 2*Ct()-a.renderingStartTime>ii&&l!==536870912&&(e.flags|=128,n=!0,sa(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ct(),t.sibling=null,l=et.current,K(et,n?l&1|2:l&1),G&&oe(e,a.treeForkCount),t):(k(e),null);case 22:case 23:return Mt(e),Bc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?l&536870912&&!(e.flags&128)&&(k(e),e.subtreeFlags&6&&(e.flags|=8192)):k(e),l=e.updateQueue,l!==null&&yn(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&dt(il),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ve(it),k(e),null;case 25:return null;case 30:return null}throw Error(p(156,e.tag))}function D0(t,e){switch(Nc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ve(it),wl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Vn(e),null;case 31:if(e.memoizedState!==null){if(Mt(e),e.alternate===null)throw Error(p(340));fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Mt(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(p(340));fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(et),null;case 4:return wl(),null;case 10:return ve(e.type),null;case 22:case 23:return Mt(e),Bc(),t!==null&&dt(il),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ve(it),null;case 25:return null;default:return null}}function qr(t,e){switch(Nc(e),e.tag){case 3:ve(it),wl();break;case 26:case 27:case 5:Vn(e);break;case 4:wl();break;case 31:e.memoizedState!==null&&Mt(e);break;case 13:Mt(e);break;case 19:dt(et);break;case 10:ve(e.type);break;case 22:case 23:Mt(e),Bc(),t!==null&&dt(il);break;case 24:ve(it)}}function Ia(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){Z(e,e.return,c)}}function Ke(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var s=l,r=c;try{r()}catch(y){Z(n,s,y)}}}a=a.next}while(a!==i)}}catch(y){Z(e,e.return,y)}}function Br(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Lo(e,l)}catch(a){Z(t,t.return,a)}}}function Yr(t,e,l){l.props=dl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Z(t,e,a)}}function Aa(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){Z(t,e,n)}}function te(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Z(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Z(t,e,n)}else l.current=null}function Qr(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Z(t,t.return,n)}}function cu(t,e,l){try{var a=t.stateNode;W0(a,t.type,l,e),a[Tt]=e}catch(n){Z(t,t.return,n)}}function Gr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$e(t.type)||t.tag===4}function fu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$e(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pu(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=me));else if(a!==4&&(a===27&&$e(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Pu(t,e,l),t=t.sibling;t!==null;)Pu(t,e,l),t=t.sibling}function ni(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&$e(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(ni(t,e,l),t=t.sibling;t!==null;)ni(t,e,l),t=t.sibling}function Xr(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);yt(e,a,l),e[ht]=t,e[Tt]=l}catch(i){Z(t,t.return,i)}}var re=!1,nt=!1,su=!1,ss=typeof WeakSet=="function"?WeakSet:Set,ot=null;function C0(t,e){if(t=t.containerInfo,uc=gi,t=Mo(t),Ec(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var u=0,c=-1,s=-1,r=0,y=0,v=t,d=null;e:for(;;){for(var g;v!==l||n!==0&&v.nodeType!==3||(c=u+n),v!==i||a!==0&&v.nodeType!==3||(s=u+a),v.nodeType===3&&(u+=v.nodeValue.length),(g=v.firstChild)!==null;)d=v,v=g;for(;;){if(v===t)break e;if(d===l&&++r===n&&(c=u),d===i&&++y===a&&(s=u),(g=v.nextSibling)!==null)break;v=d,d=v.parentNode}v=g}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(cc={focusedElem:t,selectionRange:l},gi=!1,ot=e;ot!==null;)if(e=ot,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ot=t;else for(;ot!==null;){switch(e=ot,i=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var S=dl(l.type,n);t=a.getSnapshotBeforeUpdate(S,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(z){Z(l,l.return,z)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)sc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(p(163))}if(t=e.sibling,t!==null){t.return=e.return,ot=t;break}ot=e.return}}function wr(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ce(t,l),a&4&&Ia(5,l);break;case 1:if(ce(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){Z(l,l.return,u)}else{var n=dl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){Z(l,l.return,u)}}a&64&&Br(l),a&512&&Aa(l,l.return);break;case 3:if(ce(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Lo(t,e)}catch(u){Z(l,l.return,u)}}break;case 27:e===null&&a&4&&Xr(l);case 26:case 5:ce(t,l),e===null&&a&4&&Qr(l),a&512&&Aa(l,l.return);break;case 12:ce(t,l);break;case 31:ce(t,l),a&4&&Vr(t,l);break;case 13:ce(t,l),a&4&&Lr(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=G0.bind(null,l),ih(t,l))));break;case 22:if(a=l.memoizedState!==null||re,!a){e=e!==null&&e.memoizedState!==null||nt,n=re;var i=nt;re=a,(nt=e)&&!i?se(t,l,(l.subtreeFlags&8772)!==0):ce(t,l),re=n,nt=i}break;case 30:break;default:ce(t,l)}}function Rr(t){var e=t.alternate;e!==null&&(t.alternate=null,Rr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&xc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var W=null,St=!1;function ue(t,e,l){for(l=l.child;l!==null;)Zr(t,e,l),l=l.sibling}function Zr(t,e,l){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(La,l)}catch{}switch(l.tag){case 26:nt||te(l,e),ue(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:nt||te(l,e);var a=W,n=St;$e(l.type)&&(W=l.stateNode,St=!1),ue(t,e,l),Da(l.stateNode),W=a,St=n;break;case 5:nt||te(l,e);case 6:if(a=W,n=St,W=null,ue(t,e,l),W=a,St=n,W!==null)if(St)try{(W.nodeType===9?W.body:W.nodeName==="HTML"?W.ownerDocument.body:W).removeChild(l.stateNode)}catch(i){Z(l,e,i)}else try{W.removeChild(l.stateNode)}catch(i){Z(l,e,i)}break;case 18:W!==null&&(St?(t=W,zs(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Wl(t)):zs(W,l.stateNode));break;case 4:a=W,n=St,W=l.stateNode.containerInfo,St=!0,ue(t,e,l),W=a,St=n;break;case 0:case 11:case 14:case 15:Ke(2,l,e),nt||Ke(4,l,e),ue(t,e,l);break;case 1:nt||(te(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Yr(l,e,a)),ue(t,e,l);break;case 21:ue(t,e,l);break;case 22:nt=(a=nt)||l.memoizedState!==null,ue(t,e,l),nt=a;break;default:ue(t,e,l)}}function Vr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Wl(t)}catch(l){Z(e,e.return,l)}}}function Lr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wl(t)}catch(l){Z(e,e.return,l)}}function N0(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new ss),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new ss),e;default:throw Error(p(435,t.tag))}}function bn(t,e){var l=N0(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=X0.bind(null,t,a);a.then(n,n)}})}function pt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if($e(c.type)){W=c.stateNode,St=!1;break t}break;case 5:W=c.stateNode,St=!1;break t;case 3:case 4:W=c.stateNode.containerInfo,St=!0;break t}c=c.return}if(W===null)throw Error(p(160));Zr(i,u,n),W=null,St=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Jr(e,t),e=e.sibling}var kt=null;function Jr(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pt(e,t),xt(t),a&4&&(Ke(3,t,t.return),Ia(3,t),Ke(5,t,t.return));break;case 1:pt(e,t),xt(t),a&512&&(nt||l===null||te(l,l.return)),a&64&&re&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=kt;if(pt(e,t),xt(t),a&512&&(nt||l===null||te(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[ka]||i[ht]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),yt(i,a,l),i[ht]=t,rt(i),a=i;break t;case"link":var u=Ds("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break e}}i=n.createElement(a),yt(i,a,l),n.head.appendChild(i);break;case"meta":if(u=Ds("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break e}}i=n.createElement(a),yt(i,a,l),n.head.appendChild(i);break;default:throw Error(p(468,a))}i[ht]=t,rt(i),a=i}t.stateNode=a}else Cs(n,t.type,t.stateNode);else t.stateNode=Os(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Cs(n,t.type,t.stateNode):Os(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&cu(t,t.memoizedProps,l.memoizedProps)}break;case 27:pt(e,t),xt(t),a&512&&(nt||l===null||te(l,l.return)),l!==null&&a&4&&cu(t,t.memoizedProps,l.memoizedProps);break;case 5:if(pt(e,t),xt(t),a&512&&(nt||l===null||te(l,l.return)),t.flags&32){n=t.stateNode;try{Zl(n,"")}catch(S){Z(t,t.return,S)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,cu(t,n,l!==null?l.memoizedProps:n)),a&1024&&(su=!0);break;case 6:if(pt(e,t),xt(t),a&4){if(t.stateNode===null)throw Error(p(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(S){Z(t,t.return,S)}}break;case 3:if(Gn=null,n=kt,kt=di(e.containerInfo),pt(e,t),kt=n,xt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Wl(e.containerInfo)}catch(S){Z(t,t.return,S)}su&&(su=!1,Kr(t));break;case 4:a=kt,kt=di(t.stateNode.containerInfo),pt(e,t),xt(t),kt=a;break;case 12:pt(e,t),xt(t);break;case 31:pt(e,t),xt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bn(t,a)));break;case 13:pt(e,t),xt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ci=Ct()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bn(t,a)));break;case 22:n=t.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,r=re,y=nt;if(re=r||n,nt=y||s,pt(e,t),nt=y,re=r,xt(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||s||re||nt||ll(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){s=l=e;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var v=s.memoizedProps.style,d=v!=null&&v.hasOwnProperty("display")?v.display:null;c.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(S){Z(s,s.return,S)}}}else if(e.tag===6){if(l===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(S){Z(s,s.return,S)}}}else if(e.tag===18){if(l===null){s=e;try{var g=s.stateNode;n?js(g,!0):js(s.stateNode,!1)}catch(S){Z(s,s.return,S)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,bn(t,l))));break;case 19:pt(e,t),xt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bn(t,a)));break;case 30:break;case 21:break;default:pt(e,t),xt(t)}}function xt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Gr(a)){l=a;break}a=a.return}if(l==null)throw Error(p(160));switch(l.tag){case 27:var n=l.stateNode,i=fu(t);ni(t,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Zl(u,""),l.flags&=-33);var c=fu(t);ni(t,c,u);break;case 3:case 4:var s=l.stateNode.containerInfo,r=fu(t);Pu(t,r,s);break;default:throw Error(p(161))}}catch(y){Z(t,t.return,y)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Kr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Kr(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ce(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)wr(t,e.alternate,e),e=e.sibling}function ll(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ke(4,e,e.return),ll(e);break;case 1:te(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Yr(e,e.return,l),ll(e);break;case 27:Da(e.stateNode);case 26:case 5:te(e,e.return),ll(e);break;case 22:e.memoizedState===null&&ll(e);break;case 30:ll(e);break;default:ll(e)}t=t.sibling}}function se(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:se(n,i,l),Ia(4,i);break;case 1:if(se(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(r){Z(a,a.return,r)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Vo(s[n],c)}catch(r){Z(a,a.return,r)}}l&&u&64&&Br(i),Aa(i,i.return);break;case 27:Xr(i);case 26:case 5:se(n,i,l),l&&a===null&&u&4&&Qr(i),Aa(i,i.return);break;case 12:se(n,i,l);break;case 31:se(n,i,l),l&&u&4&&Vr(n,i);break;case 13:se(n,i,l),l&&u&4&&Lr(n,i);break;case 22:i.memoizedState===null&&se(n,i,l),Aa(i,i.return);break;case 30:break;default:se(n,i,l)}e=e.sibling}}function Ic(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&$a(l))}function Pc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&$a(t))}function Kt(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kr(t,e,l,a),e=e.sibling}function kr(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Kt(t,e,l,a),n&2048&&Ia(9,e);break;case 1:Kt(t,e,l,a);break;case 3:Kt(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&$a(t)));break;case 12:if(n&2048){Kt(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){Z(e,e.return,s)}}else Kt(t,e,l,a);break;case 31:Kt(t,e,l,a);break;case 13:Kt(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?Kt(t,e,l,a):Ea(t,e):i._visibility&2?Kt(t,e,l,a):(i._visibility|=2,xl(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Ic(u,e);break;case 24:Kt(t,e,l,a),n&2048&&Pc(e.alternate,e);break;default:Kt(t,e,l,a)}}function xl(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=l,s=a,r=u.flags;switch(u.tag){case 0:case 11:case 15:xl(i,u,c,s,n),Ia(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?xl(i,u,c,s,n):Ea(i,u):(y._visibility|=2,xl(i,u,c,s,n)),n&&r&2048&&Ic(u.alternate,u);break;case 24:xl(i,u,c,s,n),n&&r&2048&&Pc(u.alternate,u);break;default:xl(i,u,c,s,n)}e=e.sibling}}function Ea(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:Ea(l,a),n&2048&&Ic(a.alternate,a);break;case 24:Ea(l,a),n&2048&&Pc(a.alternate,a);break;default:Ea(l,a)}e=e.sibling}}var va=8192;function pl(t,e,l){if(t.subtreeFlags&va)for(t=t.child;t!==null;)Fr(t,e,l),t=t.sibling}function Fr(t,e,l){switch(t.tag){case 26:pl(t,e,l),t.flags&va&&t.memoizedState!==null&&yh(l,kt,t.memoizedState,t.memoizedProps);break;case 5:pl(t,e,l);break;case 3:case 4:var a=kt;kt=di(t.stateNode.containerInfo),pl(t,e,l),kt=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=va,va=16777216,pl(t,e,l),va=a):pl(t,e,l));break;default:pl(t,e,l)}}function $r(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function oa(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ot=a,Ir(a,t)}$r(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wr(t),t=t.sibling}function Wr(t){switch(t.tag){case 0:case 11:case 15:oa(t),t.flags&2048&&Ke(9,t,t.return);break;case 3:oa(t);break;case 12:oa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Yn(t)):oa(t);break;default:oa(t)}}function Yn(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ot=a,Ir(a,t)}$r(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ke(8,e,e.return),Yn(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Yn(e));break;default:Yn(e)}t=t.sibling}}function Ir(t,e){for(;ot!==null;){var l=ot;switch(l.tag){case 0:case 11:case 15:Ke(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:$a(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ot=a;else t:for(l=t;ot!==null;){a=ot;var n=a.sibling,i=a.return;if(Rr(a),a===l){ot=null;break t}if(n!==null){n.return=i,ot=n;break t}ot=i}}}var U0={getCacheForType:function(t){var e=vt(it),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return vt(it).controller.signal}},_0=typeof WeakMap=="function"?WeakMap:Map,X=0,J=null,B=null,Y=0,R=0,Et=null,_e=!1,la=!1,tf=!1,ze=0,P=0,ke=0,cl=0,ef=0,Dt=0,Kl=0,Ma=null,zt=null,tc=!1,Ci=0,Pr=0,ii=1/0,ui=null,Xe=null,ct=0,we=null,kl=null,ye=0,ec=0,lc=null,td=null,Oa=0,ac=null;function _t(){return X&2&&Y!==0?Y&-Y:M.T!==null?af():fo()}function ed(){if(Dt===0)if(!(Y&536870912)||G){var t=on;on<<=1,!(on&3932160)&&(on=262144),Dt=t}else Dt=536870912;return t=qt.current,t!==null&&(t.flags|=32),Dt}function jt(t,e,l){(t===J&&(R===2||R===9)||t.cancelPendingCommit!==null)&&(Fl(t,0),He(t,Y,Dt,!1)),Ka(t,l),(!(X&2)||t!==J)&&(t===J&&(!(X&2)&&(cl|=l),P===4&&He(t,Y,Dt,!1)),ae(t))}function ld(t,e,l){if(X&6)throw Error(p(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Ja(t,e),n=a?B0(t,e):ou(t,e,!0),i=a;do{if(n===0){la&&!a&&He(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!H0(l)){n=ou(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=Ma;var s=c.current.memoizedState.isDehydrated;if(s&&(Fl(c,u).flags|=256),u=ou(c,u,!1),u!==2){if(tf&&!s){c.errorRecoveryDisabledLanes|=i,cl|=i,n=4;break t}i=zt,zt=n,i!==null&&(zt===null?zt=i:zt.push.apply(zt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Fl(t,0),He(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(p(345));case 4:if((e&4194048)!==e)break;case 6:He(a,e,Dt,!_e);break t;case 2:zt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((e&62914560)===e&&(n=Ci+300-Ct(),10<n)){if(He(a,e,Dt,!_e),pi(a,0,!0)!==0)break t;ye=e,a.timeoutHandle=zd(os.bind(null,a,l,zt,ui,tc,e,Dt,cl,Kl,_e,i,"Throttled",-0,0),n);break t}os(a,l,zt,ui,tc,e,Dt,cl,Kl,_e,i,null,-0,0)}}break}while(!0);ae(t)}function os(t,e,l,a,n,i,u,c,s,r,y,v,d,g){if(t.timeoutHandle=-1,v=e.subtreeFlags,v&8192||(v&16785408)===16785408){v={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:me},Fr(e,i,v);var S=(i&62914560)===i?Ci-Ct():(i&4194048)===i?Pr-Ct():0;if(S=bh(v,S),S!==null){ye=i,t.cancelPendingCommit=S(ds.bind(null,t,e,i,l,a,n,u,c,s,y,v,null,d,g)),He(t,i,u,!r);return}}ds(t,e,i,l,a,n,u,c,s)}function H0(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!Ht(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function He(t,e,l,a){e&=~ef,e&=~cl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-Ut(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&io(t,l,e)}function Ni(){return X&6?!0:(Pa(0),!1)}function lf(){if(B!==null){if(R===0)var t=B.return;else t=B,he=yl=null,wc(t),Ql=null,Ba=0,t=B;for(;t!==null;)qr(t.alternate,t),t=t.return;B=null}}function Fl(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,th(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),ye=0,lf(),J=t,B=l=ge(t.current,null),Y=e,R=0,Et=null,_e=!1,la=Ja(t,e),tf=!1,Kl=Dt=ef=cl=ke=P=0,zt=Ma=null,tc=!1,e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-Ut(a),i=1<<n;e|=t[n],a&=~i}return ze=e,ji(),l}function ad(t,e){D=null,M.H=Qa,e===ea||e===Ai?(e=Rf(),R=3):e===Hc?(e=Rf(),R=4):R=e===$c?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Et=e,B===null&&(P=1,li(t,Rt(e,t.current)))}function nd(){var t=qt.current;return t===null?!0:(Y&4194048)===Y?Vt===null:(Y&62914560)===Y||Y&536870912?t===Vt:!1}function id(){var t=M.H;return M.H=Qa,t===null?Qa:t}function ud(){var t=M.A;return M.A=U0,t}function ci(){P=4,_e||(Y&4194048)!==Y&&qt.current!==null||(la=!0),!(ke&134217727)&&!(cl&134217727)||J===null||He(J,Y,Dt,!1)}function ou(t,e,l){var a=X;X|=2;var n=id(),i=ud();(J!==t||Y!==e)&&(ui=null,Fl(t,e)),e=!1;var u=P;t:do try{if(R!==0&&B!==null){var c=B,s=Et;switch(R){case 8:lf(),u=6;break t;case 3:case 2:case 9:case 6:qt.current===null&&(e=!0);var r=R;if(R=0,Et=null,_l(t,c,s,r),l&&la){u=0;break t}break;default:r=R,R=0,Et=null,_l(t,c,s,r)}}q0(),u=P;break}catch(y){ad(t,y)}while(!0);return e&&t.shellSuspendCounter++,he=yl=null,X=a,M.H=n,M.A=i,B===null&&(J=null,Y=0,ji()),u}function q0(){for(;B!==null;)cd(B)}function B0(t,e){var l=X;X|=2;var a=id(),n=ud();J!==t||Y!==e?(ui=null,ii=Ct()+500,Fl(t,e)):la=Ja(t,e);t:do try{if(R!==0&&B!==null){e=B;var i=Et;e:switch(R){case 1:R=0,Et=null,_l(t,e,i,1);break;case 2:case 9:if(wf(i)){R=0,Et=null,rs(e);break}e=function(){R!==2&&R!==9||J!==t||(R=7),ae(t)},i.then(e,e);break t;case 3:R=7;break t;case 4:R=5;break t;case 7:wf(i)?(R=0,Et=null,rs(e)):(R=0,Et=null,_l(t,e,i,7));break;case 5:var u=null;switch(B.tag){case 26:u=B.memoizedState;case 5:case 27:var c=B;if(u?Md(u):c.stateNode.complete){R=0,Et=null;var s=c.sibling;if(s!==null)B=s;else{var r=c.return;r!==null?(B=r,Ui(r)):B=null}break e}}R=0,Et=null,_l(t,e,i,5);break;case 6:R=0,Et=null,_l(t,e,i,6);break;case 8:lf(),P=6;break t;default:throw Error(p(462))}}Y0();break}catch(y){ad(t,y)}while(!0);return he=yl=null,M.H=a,M.A=n,X=l,B!==null?0:(J=null,Y=0,ji(),P)}function Y0(){for(;B!==null&&!um();)cd(B)}function cd(t){var e=Hr(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?Ui(t):B=e}function rs(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=ns(l,e,e.pendingProps,e.type,void 0,Y);break;case 11:e=ns(l,e,e.pendingProps,e.type.render,e.ref,Y);break;case 5:wc(e);default:qr(l,e),e=B=qo(e,ze),e=Hr(l,e,ze)}t.memoizedProps=t.pendingProps,e===null?Ui(t):B=e}function _l(t,e,l,a){he=yl=null,wc(e),Ql=null,Ba=0;var n=e.return;try{if(A0(t,n,e,l,Y)){P=1,li(t,Rt(l,t.current)),B=null;return}}catch(i){if(n!==null)throw B=n,i;P=1,li(t,Rt(l,t.current)),B=null;return}e.flags&32768?(G||a===1?t=!0:la||Y&536870912?t=!1:(_e=t=!0,(a===2||a===9||a===3||a===6)&&(a=qt.current,a!==null&&a.tag===13&&(a.flags|=16384))),fd(e,t)):Ui(e)}function Ui(t){var e=t;do{if(e.flags&32768){fd(e,_e);return}t=e.return;var l=O0(e.alternate,e,ze);if(l!==null){B=l;return}if(e=e.sibling,e!==null){B=e;return}B=e=t}while(e!==null);P===0&&(P=5)}function fd(t,e){do{var l=D0(t.alternate,t);if(l!==null){l.flags&=32767,B=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){B=t;return}B=t=l}while(t!==null);P=6,B=null}function ds(t,e,l,a,n,i,u,c,s){t.cancelPendingCommit=null;do _i();while(ct!==0);if(X&6)throw Error(p(327));if(e!==null){if(e===t.current)throw Error(p(177));if(i=e.lanes|e.childLanes,i|=Mc,vm(t,l,i,u,c,s),t===J&&(B=J=null,Y=0),kl=e,we=t,ye=l,ec=i,lc=n,td=a,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,w0(Ln,function(){return md(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,e.subtreeFlags&13878||a){a=M.T,M.T=null,n=w.p,w.p=2,u=X,X|=4;try{C0(t,e,l)}finally{X=u,w.p=n,M.T=a}}ct=1,sd(),od(),rd()}}function sd(){if(ct===1){ct=0;var t=we,e=kl,l=(e.flags&13878)!==0;if(e.subtreeFlags&13878||l){l=M.T,M.T=null;var a=w.p;w.p=2;var n=X;X|=4;try{Jr(e,t);var i=cc,u=Mo(t.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Eo(c.ownerDocument.documentElement,c)){if(s!==null&&Ec(c)){var r=s.start,y=s.end;if(y===void 0&&(y=r),"selectionStart"in c)c.selectionStart=r,c.selectionEnd=Math.min(y,c.value.length);else{var v=c.ownerDocument||document,d=v&&v.defaultView||window;if(d.getSelection){var g=d.getSelection(),S=c.textContent.length,z=Math.min(s.start,S),E=s.end===void 0?z:Math.min(s.end,S);!g.extend&&z>E&&(u=E,E=z,z=u);var m=Hf(c,z),o=Hf(c,E);if(m&&o&&(g.rangeCount!==1||g.anchorNode!==m.node||g.anchorOffset!==m.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)){var h=v.createRange();h.setStart(m.node,m.offset),g.removeAllRanges(),z>E?(g.addRange(h),g.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),g.addRange(h))}}}}for(v=[],g=c;g=g.parentNode;)g.nodeType===1&&v.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<v.length;c++){var b=v[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gi=!!uc,cc=uc=null}finally{X=n,w.p=a,M.T=l}}t.current=e,ct=2}}function od(){if(ct===2){ct=0;var t=we,e=kl,l=(e.flags&8772)!==0;if(e.subtreeFlags&8772||l){l=M.T,M.T=null;var a=w.p;w.p=2;var n=X;X|=4;try{wr(t,e.alternate,e)}finally{X=n,w.p=a,M.T=l}}ct=3}}function rd(){if(ct===4||ct===3){ct=0,cm();var t=we,e=kl,l=ye,a=td;e.subtreeFlags&10256||e.flags&10256?ct=5:(ct=0,kl=we=null,dd(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Xe=null),pc(l),e=e.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(La,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=M.T,n=w.p,w.p=2,M.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{M.T=e,w.p=n}}ye&3&&_i(),ae(t),n=t.pendingLanes,l&261930&&n&42?t===ac?Oa++:(Oa=0,ac=t):Oa=0,Pa(0)}}function dd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,$a(e)))}function _i(){return sd(),od(),rd(),md()}function md(){if(ct!==5)return!1;var t=we,e=ec;ec=0;var l=pc(ye),a=M.T,n=w.p;try{w.p=32>l?32:l,M.T=null,l=lc,lc=null;var i=we,u=ye;if(ct=0,kl=we=null,ye=0,X&6)throw Error(p(331));var c=X;if(X|=4,Wr(i.current),kr(i,i.current,u,l),X=c,Pa(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(La,i)}catch{}return!0}finally{w.p=n,M.T=a,dd(t,e)}}function ms(t,e,l){e=Rt(l,e),e=$u(t.stateNode,e,2),t=Ge(t,e,2),t!==null&&(Ka(t,2),ae(t))}function Z(t,e,l){if(t.tag===3)ms(t,t,l);else for(;e!==null;){if(e.tag===3){ms(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xe===null||!Xe.has(a))){t=Rt(l,t),l=Or(2),a=Ge(e,l,2),a!==null&&(Dr(l,a,e,t),Ka(a,2),ae(a));break}}e=e.return}}function ru(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new _0;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(tf=!0,n.add(l),t=Q0.bind(null,t,e,l),e.then(t,t))}function Q0(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,J===t&&(Y&l)===l&&(P===4||P===3&&(Y&62914560)===Y&&300>Ct()-Ci?!(X&2)&&Fl(t,0):ef|=l,Kl===Y&&(Kl=0)),ae(t)}function hd(t,e){e===0&&(e=no()),t=vl(t,e),t!==null&&(Ka(t,e),ae(t))}function G0(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),hd(t,l)}function X0(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(p(314))}a!==null&&a.delete(e),hd(t,l)}function w0(t,e){return yc(t,e)}var fi=null,Sl=null,nc=!1,si=!1,du=!1,qe=0;function ae(t){t!==Sl&&t.next===null&&(Sl===null?fi=Sl=t:Sl=Sl.next=t),si=!0,nc||(nc=!0,Z0())}function Pa(t,e){if(!du&&si){du=!0;do for(var l=!1,a=fi;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-Ut(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,hs(a,i))}else i=Y,i=pi(a,a===J?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(i&3)||Ja(a,i)||(l=!0,hs(a,i));a=a.next}while(l);du=!1}}function R0(){gd()}function gd(){si=nc=!1;var t=0;qe!==0&&P0()&&(t=qe);for(var e=Ct(),l=null,a=fi;a!==null;){var n=a.next,i=vd(a,e);i===0?(a.next=null,l===null?fi=n:l.next=n,n===null&&(Sl=l)):(l=a,(t!==0||i&3)&&(si=!0)),a=n}ct!==0&&ct!==5||Pa(t),qe!==0&&(qe=0)}function vd(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Ut(i),c=1<<u,s=n[u];s===-1?(!(c&l)||c&a)&&(n[u]=gm(c,e)):s<=e&&(t.expiredLanes|=c),i&=~c}if(e=J,l=Y,l=pi(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(R===2||R===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Xi(a),t.callbackNode=null,t.callbackPriority=0;if(!(l&3)||Ja(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Xi(a),pc(l)){case 2:case 8:l=lo;break;case 32:l=Ln;break;case 268435456:l=ao;break;default:l=Ln}return a=yd.bind(null,t),l=yc(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Xi(a),t.callbackPriority=2,t.callbackNode=null,2}function yd(t,e){if(ct!==0&&ct!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(_i()&&t.callbackNode!==l)return null;var a=Y;return a=pi(t,t===J?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(ld(t,a,e),vd(t,Ct()),t.callbackNode!=null&&t.callbackNode===l?yd.bind(null,t):null)}function hs(t,e){if(_i())return null;ld(t,e,!0)}function Z0(){eh(function(){X&6?yc(eo,R0):gd()})}function af(){if(qe===0){var t=Vl;t===0&&(t=sn,sn<<=1,!(sn&261888)&&(sn=256)),qe=t}return qe}function gs(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:On(""+t)}function vs(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function V0(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=gs((n[Tt]||null).action),u=a.submitter;u&&(e=(e=u[Tt]||null)?gs(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new xi("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(qe!==0){var s=u?vs(n,u):new FormData(n);ku(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?vs(n,u):new FormData(n),ku(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var mu=0;mu<Bu.length;mu++){var hu=Bu[mu],L0=hu.toLowerCase(),J0=hu[0].toUpperCase()+hu.slice(1);$t(L0,"on"+J0)}$t(Do,"onAnimationEnd");$t(Co,"onAnimationIteration");$t(No,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(f0,"onTransitionRun");$t(s0,"onTransitionStart");$t(o0,"onTransitionCancel");$t(Uo,"onTransitionEnd");Rl("onMouseEnter",["mouseout","mouseover"]);Rl("onMouseLeave",["mouseout","mouseover"]);Rl("onPointerEnter",["pointerout","pointerover"]);Rl("onPointerLeave",["pointerout","pointerover"]);ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ml("onBeforeInput",["compositionend","keypress","textInput","paste"]);ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ga));function bd(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var u=a.length-1;0<=u;u--){var c=a[u],s=c.instance,r=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=r;try{i(n)}catch(y){Kn(y)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(c=a[u],s=c.instance,r=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=r;try{i(n)}catch(y){Kn(y)}n.currentTarget=null,i=s}}}}function q(t,e){var l=e[Ou];l===void 0&&(l=e[Ou]=new Set);var a=t+"__bubble";l.has(a)||(pd(e,t,2,!1),l.add(a))}function gu(t,e,l){var a=0;e&&(a|=4),pd(l,t,a,e)}var pn="_reactListening"+Math.random().toString(36).slice(2);function nf(t){if(!t[pn]){t[pn]=!0,so.forEach(function(l){l!=="selectionchange"&&(K0.has(l)||gu(l,!1,t),gu(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pn]||(e[pn]=!0,gu("selectionchange",!1,e))}}function pd(t,e,l,a){switch(Ud(e)){case 2:var n=Sh;break;case 8:n=zh;break;default:n=sf}l=n.bind(null,e,l,t),n=void 0,!_u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function vu(t,e,l,a,n){var i=a;if(!(e&1)&&!(e&2)&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Tl(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue t}c=c.parentNode}}a=a.return}bo(function(){var r=i,y=zc(l),v=[];t:{var d=_o.get(t);if(d!==void 0){var g=xi,S=t;switch(t){case"keypress":if(Cn(l)===0)break t;case"keydown":case"keyup":g=Xm;break;case"focusin":S="focus",g=Li;break;case"focusout":S="blur",g=Li;break;case"beforeblur":case"afterblur":g=Li;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Zm;break;case Do:case Co:case No:g=Nm;break;case Uo:g=Lm;break;case"scroll":case"scrollend":g=Em;break;case"wheel":g=Km;break;case"copy":case"cut":case"paste":g=_m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ef;break;case"toggle":case"beforetoggle":g=Fm}var z=(e&4)!==0,E=!z&&(t==="scroll"||t==="scrollend"),m=z?d!==null?d+"Capture":null:d;z=[];for(var o=r,h;o!==null;){var b=o;if(h=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||h===null||m===null||(b=Na(o,m),b!=null&&z.push(Xa(o,b,h))),E)break;o=o.return}0<z.length&&(d=new g(d,S,null,l,y),v.push({event:d,listeners:z}))}}if(!(e&7)){t:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&l!==Uu&&(S=l.relatedTarget||l.fromElement)&&(Tl(S)||S[Il]))break t;if((g||d)&&(d=y.window===y?y:(d=y.ownerDocument)?d.defaultView||d.parentWindow:window,g?(S=l.relatedTarget||l.toElement,g=r,S=S?Tl(S):null,S!==null&&(E=Va(S),z=S.tag,S!==E||z!==5&&z!==27&&z!==6)&&(S=null)):(g=null,S=r),g!==S)){if(z=Tf,b="onMouseLeave",m="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(z=Ef,b="onPointerLeave",m="onPointerEnter",o="pointer"),E=g==null?d:ha(g),h=S==null?d:ha(S),d=new z(b,o+"leave",g,l,y),d.target=E,d.relatedTarget=h,b=null,Tl(y)===r&&(z=new z(m,o+"enter",S,l,y),z.target=h,z.relatedTarget=E,b=z),E=b,g&&S)e:{for(z=k0,m=g,o=S,h=0,b=m;b;b=z(b))h++;b=0;for(var A=o;A;A=z(A))b++;for(;0<h-b;)m=z(m),h--;for(;0<b-h;)o=z(o),b--;for(;h--;){if(m===o||o!==null&&m===o.alternate){z=m;break e}m=z(m),o=z(o)}z=null}else z=null;g!==null&&ys(v,d,g,z,!1),S!==null&&E!==null&&ys(v,E,S,z,!0)}}t:{if(d=r?ha(r):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var N=Cf;else if(Df(d))if(To)N=i0;else{N=a0;var j=l0}else g=d.nodeName,!g||g.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?r&&Sc(r.elementType)&&(N=Cf):N=n0;if(N&&(N=N(t,r))){jo(v,N,l,y);break t}j&&j(t,d,r),t==="focusout"&&r&&d.type==="number"&&r.memoizedProps.value!=null&&Nu(d,"number",d.value)}switch(j=r?ha(r):window,t){case"focusin":(Df(j)||j.contentEditable==="true")&&(Ml=j,Hu=r,pa=null);break;case"focusout":pa=Hu=Ml=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,qf(v,l,y);break;case"selectionchange":if(c0)break;case"keydown":case"keyup":qf(v,l,y)}var O;if(Ac)t:{switch(t){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else El?So(t,l)&&(U="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(U="onCompositionStart");U&&(xo&&l.locale!=="ko"&&(El||U!=="onCompositionStart"?U==="onCompositionEnd"&&El&&(O=po()):(Ue=y,jc="value"in Ue?Ue.value:Ue.textContent,El=!0)),j=oi(r,U),0<j.length&&(U=new Af(U,t,null,l,y),v.push({event:U,listeners:j}),O?U.data=O:(O=zo(l),O!==null&&(U.data=O)))),(O=Wm?Im(t,l):Pm(t,l))&&(U=oi(r,"onBeforeInput"),0<U.length&&(j=new Af("onBeforeInput","beforeinput",null,l,y),v.push({event:j,listeners:U}),j.data=O)),V0(v,t,r,l,y)}bd(v,e)})}function Xa(t,e,l){return{instance:t,listener:e,currentTarget:l}}function oi(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Na(t,l),n!=null&&a.unshift(Xa(t,n,i)),n=Na(t,e),n!=null&&a.push(Xa(t,n,i))),t.tag===3)return a;t=t.return}return[]}function k0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ys(t,e,l,a,n){for(var i=e._reactName,u=[];l!==null&&l!==a;){var c=l,s=c.alternate,r=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||r===null||(s=r,n?(r=Na(l,i),r!=null&&u.unshift(Xa(l,r,s))):n||(r=Na(l,i),r!=null&&u.push(Xa(l,r,s)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var F0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function bs(t){return(typeof t=="string"?t:""+t).replace(F0,`
`).replace($0,"")}function xd(t,e){return e=bs(e),bs(t)===e}function V(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Zl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Zl(t,""+a);break;case"className":dn(t,"class",a);break;case"tabIndex":dn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":dn(t,l,a);break;case"style":yo(t,a,i);break;case"data":if(e!=="object"){dn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=On(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&V(t,e,"name",n.name,n,null),V(t,e,"formEncType",n.formEncType,n,null),V(t,e,"formMethod",n.formMethod,n,null),V(t,e,"formTarget",n.formTarget,n,null)):(V(t,e,"encType",n.encType,n,null),V(t,e,"method",n.method,n,null),V(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=On(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=me);break;case"onScroll":a!=null&&q("scroll",t);break;case"onScrollEnd":a!=null&&q("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(p(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=On(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":q("beforetoggle",t),q("toggle",t),Mn(t,"popover",a);break;case"xlinkActuate":ne(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ne(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ne(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ne(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ne(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ne(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ne(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ne(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ne(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Tm.get(l)||l,Mn(t,l,a))}}function ic(t,e,l,a,n,i){switch(l){case"style":yo(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(p(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Zl(t,a):(typeof a=="number"||typeof a=="bigint")&&Zl(t,""+a);break;case"onScroll":a!=null&&q("scroll",t);break;case"onScrollEnd":a!=null&&q("scrollend",t);break;case"onClick":a!=null&&(t.onclick=me);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oo.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[Tt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Mn(t,l,a)}}}function yt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",t),q("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:V(t,e,i,u,l,null)}}n&&V(t,e,"srcSet",l.srcSet,l,null),a&&V(t,e,"src",l.src,l,null);return;case"input":q("invalid",t);var c=i=u=n=null,s=null,r=null;for(a in l)if(l.hasOwnProperty(a)){var y=l[a];if(y!=null)switch(a){case"name":n=y;break;case"type":u=y;break;case"checked":s=y;break;case"defaultChecked":r=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,e));break;default:V(t,e,a,y,l,null)}}ho(t,i,c,s,r,u,n,!1);return;case"select":q("invalid",t),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:V(t,e,n,c,l,null)}e=i,l=u,t.multiple=!!a,e!=null?ql(t,!!a,e,!1):l!=null&&ql(t,!!a,l,!0);return;case"textarea":q("invalid",t),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(p(91));break;default:V(t,e,u,c,l,null)}vo(t,a,n,i);return;case"option":for(s in l)if(l.hasOwnProperty(s)&&(a=l[s],a!=null))switch(s){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:V(t,e,s,a,l,null)}return;case"dialog":q("beforetoggle",t),q("toggle",t),q("cancel",t),q("close",t);break;case"iframe":case"object":q("load",t);break;case"video":case"audio":for(a=0;a<Ga.length;a++)q(Ga[a],t);break;case"image":q("error",t),q("load",t);break;case"details":q("toggle",t);break;case"embed":case"source":case"link":q("error",t),q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in l)if(l.hasOwnProperty(r)&&(a=l[r],a!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:V(t,e,r,a,l,null)}return;default:if(Sc(e)){for(y in l)l.hasOwnProperty(y)&&(a=l[y],a!==void 0&&ic(t,e,y,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&V(t,e,c,a,l,null))}function W0(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,r=null,y=null;for(g in l){var v=l[g];if(l.hasOwnProperty(g)&&v!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":s=v;default:a.hasOwnProperty(g)||V(t,e,g,null,a,v)}}for(var d in a){var g=a[d];if(v=l[d],a.hasOwnProperty(d)&&(g!=null||v!=null))switch(d){case"type":i=g;break;case"name":n=g;break;case"checked":r=g;break;case"defaultChecked":y=g;break;case"value":u=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(p(137,e));break;default:g!==v&&V(t,e,d,g,a,v)}}Cu(t,u,c,s,r,y,i,n);return;case"select":g=u=c=d=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":g=s;default:a.hasOwnProperty(i)||V(t,e,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":d=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&V(t,e,n,i,a,s)}e=c,l=u,a=g,d!=null?ql(t,!!l,d,!1):!!a!=!!l&&(e!=null?ql(t,!!l,e,!0):ql(t,!!l,l?[]:"",!1));return;case"textarea":g=d=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:V(t,e,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":d=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(p(91));break;default:n!==i&&V(t,e,u,n,a,i)}go(t,d,g);return;case"option":for(var S in l)if(d=l[S],l.hasOwnProperty(S)&&d!=null&&!a.hasOwnProperty(S))switch(S){case"selected":t.selected=!1;break;default:V(t,e,S,null,a,d)}for(s in a)if(d=a[s],g=l[s],a.hasOwnProperty(s)&&d!==g&&(d!=null||g!=null))switch(s){case"selected":t.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:V(t,e,s,d,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var z in l)d=l[z],l.hasOwnProperty(z)&&d!=null&&!a.hasOwnProperty(z)&&V(t,e,z,null,a,d);for(r in a)if(d=a[r],g=l[r],a.hasOwnProperty(r)&&d!==g&&(d!=null||g!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(p(137,e));break;default:V(t,e,r,d,a,g)}return;default:if(Sc(e)){for(var E in l)d=l[E],l.hasOwnProperty(E)&&d!==void 0&&!a.hasOwnProperty(E)&&ic(t,e,E,void 0,a,d);for(y in a)d=a[y],g=l[y],!a.hasOwnProperty(y)||d===g||d===void 0&&g===void 0||ic(t,e,y,d,a,g);return}}for(var m in l)d=l[m],l.hasOwnProperty(m)&&d!=null&&!a.hasOwnProperty(m)&&V(t,e,m,null,a,d);for(v in a)d=a[v],g=l[v],!a.hasOwnProperty(v)||d===g||d==null&&g==null||V(t,e,v,d,a,g)}function ps(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function I0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&ps(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],r=s.startTime;if(r>c)break;var y=s.transferSize,v=s.initiatorType;y&&ps(v)&&(s=s.responseEnd,u+=y*(s<c?1:(c-r)/(s-r)))}if(--a,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var uc=null,cc=null;function ri(t){return t.nodeType===9?t:t.ownerDocument}function xs(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function fc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yu=null;function P0(){var t=window.event;return t&&t.type==="popstate"?t===yu?!1:(yu=t,!0):(yu=null,!1)}var zd=typeof setTimeout=="function"?setTimeout:void 0,th=typeof clearTimeout=="function"?clearTimeout:void 0,Ss=typeof Promise=="function"?Promise:void 0,eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ss<"u"?function(t){return Ss.resolve(null).then(t).catch(lh)}:zd;function lh(t){setTimeout(function(){throw t})}function $e(t){return t==="head"}function zs(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Wl(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Da(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Da(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[ka]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&Da(t.ownerDocument.body);l=n}while(l);Wl(e)}function js(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function sc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":sc(l),xc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function ah(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[ka])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Lt(t.nextSibling),t===null)break}return null}function nh(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Lt(t.nextSibling),t===null))return null;return t}function jd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Lt(t.nextSibling),t===null))return null;return t}function oc(t){return t.data==="$?"||t.data==="$~"}function rc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ih(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Lt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var dc=null;function Ts(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Lt(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function As(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Td(t,e,l){switch(e=ri(l),t){case"html":if(t=e.documentElement,!t)throw Error(p(452));return t;case"head":if(t=e.head,!t)throw Error(p(453));return t;case"body":if(t=e.body,!t)throw Error(p(454));return t;default:throw Error(p(451))}}function Da(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);xc(t)}var Jt=new Map,Es=new Set;function di(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var je=w.d;w.d={f:uh,r:ch,D:fh,C:sh,L:oh,m:rh,X:mh,S:dh,M:hh};function uh(){var t=je.f(),e=Ni();return t||e}function ch(t){var e=Pl(t);e!==null&&e.tag===5&&e.type==="form"?yr(e):je.r(t)}var aa=typeof document>"u"?null:document;function Ad(t,e,l){var a=aa;if(a&&typeof e=="string"&&e){var n=wt(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Es.has(n)||(Es.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),yt(e,"link",t),rt(e),a.head.appendChild(e)))}}function fh(t){je.D(t),Ad("dns-prefetch",t,null)}function sh(t,e){je.C(t,e),Ad("preconnect",t,e)}function oh(t,e,l){je.L(t,e,l);var a=aa;if(a&&t&&e){var n='link[rel="preload"][as="'+wt(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+wt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+wt(l.imageSizes)+'"]')):n+='[href="'+wt(t)+'"]';var i=n;switch(e){case"style":i=$l(t);break;case"script":i=na(t)}Jt.has(i)||(t=$({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Jt.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(tn(i))||e==="script"&&a.querySelector(en(i))||(e=a.createElement("link"),yt(e,"link",t),rt(e),a.head.appendChild(e)))}}function rh(t,e){je.m(t,e);var l=aa;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+wt(a)+'"][href="'+wt(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=na(t)}if(!Jt.has(i)&&(t=$({rel:"modulepreload",href:t},e),Jt.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(en(i)))return}a=l.createElement("link"),yt(a,"link",t),rt(a),l.head.appendChild(a)}}}function dh(t,e,l){je.S(t,e,l);var a=aa;if(a&&t){var n=Hl(a).hoistableStyles,i=$l(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(tn(i)))c.loading=5;else{t=$({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Jt.get(i))&&uf(t,l);var s=u=a.createElement("link");rt(s),yt(s,"link",t),s._p=new Promise(function(r,y){s.onload=r,s.onerror=y}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Qn(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function mh(t,e){je.X(t,e);var l=aa;if(l&&t){var a=Hl(l).hoistableScripts,n=na(t),i=a.get(n);i||(i=l.querySelector(en(n)),i||(t=$({src:t,async:!0},e),(e=Jt.get(n))&&cf(t,e),i=l.createElement("script"),rt(i),yt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function hh(t,e){je.M(t,e);var l=aa;if(l&&t){var a=Hl(l).hoistableScripts,n=na(t),i=a.get(n);i||(i=l.querySelector(en(n)),i||(t=$({src:t,async:!0,type:"module"},e),(e=Jt.get(n))&&cf(t,e),i=l.createElement("script"),rt(i),yt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Ms(t,e,l,a){var n=(n=Be.current)?di(n):null;if(!n)throw Error(p(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=$l(l.href),l=Hl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=$l(l.href);var i=Hl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(tn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Jt.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Jt.set(t,l),i||gh(n,t,l,u.state))),e&&a===null)throw Error(p(528,""));return u}if(e&&a!==null)throw Error(p(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=na(l),l=Hl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,t))}}function $l(t){return'href="'+wt(t)+'"'}function tn(t){return'link[rel="stylesheet"]['+t+"]"}function Ed(t){return $({},t,{"data-precedence":t.precedence,precedence:null})}function gh(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),yt(e,"link",l),rt(e),t.head.appendChild(e))}function na(t){return'[src="'+wt(t)+'"]'}function en(t){return"script[async]"+t}function Os(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+wt(l.href)+'"]');if(a)return e.instance=a,rt(a),a;var n=$({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),rt(a),yt(a,"style",n),Qn(a,l.precedence,t),e.instance=a;case"stylesheet":n=$l(l.href);var i=t.querySelector(tn(n));if(i)return e.state.loading|=4,e.instance=i,rt(i),i;a=Ed(l),(n=Jt.get(n))&&uf(a,n),i=(t.ownerDocument||t).createElement("link"),rt(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),yt(i,"link",a),e.state.loading|=4,Qn(i,l.precedence,t),e.instance=i;case"script":return i=na(l.src),(n=t.querySelector(en(i)))?(e.instance=n,rt(n),n):(a=l,(n=Jt.get(i))&&(a=$({},l),cf(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),rt(n),yt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(p(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,Qn(a,l.precedence,t));return e.instance}function Qn(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function uf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function cf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Gn=null;function Ds(t,e,l){if(Gn===null){var a=new Map,n=Gn=new Map;n.set(l,a)}else n=Gn,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[ka]||i[ht]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function Cs(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function vh(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Md(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function yh(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var n=$l(a.href),i=e.querySelector(tn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=mi.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,rt(i);return}i=e.ownerDocument||e,a=Ed(a),(n=Jt.get(n))&&uf(a,n),i=i.createElement("link"),rt(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),yt(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&!(l.state.loading&3)&&(t.count++,l=mi.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var bu=0;function bh(t,e){return t.stylesheets&&t.count===0&&Xn(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Xn(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&bu===0&&(bu=62500*I0());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xn(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>bu?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function mi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xn(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hi=null;function Xn(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hi=new Map,e.forEach(ph,t),hi=null,mi.call(t))}function ph(t,e){if(!(e.state.loading&4)){var l=hi.get(t);if(l)var a=l.get(null);else{l=new Map,hi.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=mi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var wa={$$typeof:de,Provider:null,Consumer:null,_currentValue:al,_currentValue2:al,_threadCount:0};function xh(t,e,l,a,n,i,u,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.hiddenUpdates=wi(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Od(t,e,l,a,n,i,u,c,s,r,y,v){return t=new xh(t,e,l,u,s,r,y,v,c),e=1,i===!0&&(e|=24),i=Ot(3,null,null,e),t.current=i,i.stateNode=t,e=Uc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},qc(i),t}function Dd(t){return t?(t=Cl,t):Cl}function Cd(t,e,l,a,n,i){n=Dd(n),a.context===null?a.context=n:a.pendingContext=n,a=Qe(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Ge(t,a,e),l!==null&&(jt(l,t,e),Sa(l,t,e))}function Ns(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function ff(t,e){Ns(t,e),(t=t.alternate)&&Ns(t,e)}function Nd(t){if(t.tag===13||t.tag===31){var e=vl(t,67108864);e!==null&&jt(e,t,67108864),ff(t,67108864)}}function Us(t){if(t.tag===13||t.tag===31){var e=_t();e=bc(e);var l=vl(t,e);l!==null&&jt(l,t,e),ff(t,e)}}var gi=!0;function Sh(t,e,l,a){var n=M.T;M.T=null;var i=w.p;try{w.p=2,sf(t,e,l,a)}finally{w.p=i,M.T=n}}function zh(t,e,l,a){var n=M.T;M.T=null;var i=w.p;try{w.p=8,sf(t,e,l,a)}finally{w.p=i,M.T=n}}function sf(t,e,l,a){if(gi){var n=mc(a);if(n===null)vu(t,e,a,vi,l),_s(t,a);else if(Th(n,t,e,l,a))a.stopPropagation();else if(_s(t,a),e&4&&-1<jh.indexOf(t)){for(;n!==null;){var i=Pl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=tl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-Ut(u);c.entanglements[1]|=s,u&=~s}ae(i),!(X&6)&&(ii=Ct()+500,Pa(0))}}break;case 31:case 13:c=vl(i,2),c!==null&&jt(c,i,2),Ni(),ff(i,2)}if(i=mc(a),i===null&&vu(t,e,a,vi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else vu(t,e,a,null,l)}}function mc(t){return t=zc(t),of(t)}var vi=null;function of(t){if(vi=null,t=Tl(t),t!==null){var e=Va(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=$s(e),t!==null)return t;t=null}else if(l===31){if(t=Ws(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return vi=t,null}function Ud(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fm()){case eo:return 2;case lo:return 8;case Ln:case sm:return 32;case ao:return 268435456;default:return 32}default:return 32}}var hc=!1,Re=null,Ze=null,Ve=null,Ra=new Map,Za=new Map,Ce=[],jh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _s(t,e){switch(t){case"focusin":case"focusout":Re=null;break;case"dragenter":case"dragleave":Ze=null;break;case"mouseover":case"mouseout":Ve=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function ra(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Pl(e),e!==null&&Nd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Th(t,e,l,a,n){switch(e){case"focusin":return Re=ra(Re,t,e,l,a,n),!0;case"dragenter":return Ze=ra(Ze,t,e,l,a,n),!0;case"mouseover":return Ve=ra(Ve,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return Ra.set(i,ra(Ra.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Za.set(i,ra(Za.get(i)||null,t,e,l,a,n)),!0}return!1}function _d(t){var e=Tl(t.target);if(e!==null){var l=Va(e);if(l!==null){if(e=l.tag,e===13){if(e=$s(l),e!==null){t.blockedOn=e,yf(t.priority,function(){Us(l)});return}}else if(e===31){if(e=Ws(l),e!==null){t.blockedOn=e,yf(t.priority,function(){Us(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wn(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=mc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Uu=a,l.target.dispatchEvent(a),Uu=null}else return e=Pl(l),e!==null&&Nd(e),t.blockedOn=l,!1;e.shift()}return!0}function Hs(t,e,l){wn(t)&&l.delete(e)}function Ah(){hc=!1,Re!==null&&wn(Re)&&(Re=null),Ze!==null&&wn(Ze)&&(Ze=null),Ve!==null&&wn(Ve)&&(Ve=null),Ra.forEach(Hs),Za.forEach(Hs)}function xn(t,e){t.blockedOn===e&&(t.blockedOn=null,hc||(hc=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,Ah)))}var Sn=null;function qs(t){Sn!==t&&(Sn=t,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,function(){Sn===t&&(Sn=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(of(a||l)===null)continue;break}var i=Pl(l);i!==null&&(t.splice(e,3),e-=3,ku(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Wl(t){function e(s){return xn(s,t)}Re!==null&&xn(Re,t),Ze!==null&&xn(Ze,t),Ve!==null&&xn(Ve,t),Ra.forEach(e),Za.forEach(e);for(var l=0;l<Ce.length;l++){var a=Ce[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Ce.length&&(l=Ce[0],l.blockedOn===null);)_d(l),l.blockedOn===null&&Ce.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Tt]||null;if(typeof i=="function")u||qs(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Tt]||null)c=u.formAction;else if(of(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),qs(l)}}}function Hd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function rf(t){this._internalRoot=t}Hi.prototype.render=rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(p(409));var l=e.current,a=_t();Cd(l,a,t,e,null,null)};Hi.prototype.unmount=rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cd(t.current,2,null,t,null,null),Ni(),e[Il]=null}};function Hi(t){this._internalRoot=t}Hi.prototype.unstable_scheduleHydration=function(t){if(t){var e=fo();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Ce.length&&e!==0&&e<Ce[l].priority;l++);Ce.splice(l,0,t),l===0&&_d(t)}};var Bs=ks.version;if(Bs!=="19.2.0")throw Error(p(527,Bs,"19.2.0"));w.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=em(e),t=t!==null?Is(t):null,t=t===null?null:t.stateNode,t};var Eh={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zn.isDisabled&&zn.supportsFiber)try{La=zn.inject(Eh),Nt=zn}catch{}}bi.createRoot=function(t,e){if(!Fs(t))throw Error(p(299));var l=!1,a="",n=Ar,i=Er,u=Mr;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Od(t,1,!1,null,null,l,a,null,n,i,u,Hd),t[Il]=e.current,nf(t),new rf(e)};bi.hydrateRoot=function(t,e,l){if(!Fs(t))throw Error(p(299));var a=!1,n="",i=Ar,u=Er,c=Mr,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),e=Od(t,1,!0,e,l??null,a,n,s,i,u,c,Hd),e.context=Dd(null),l=e.current,a=_t(),a=bc(a),n=Qe(a),n.callback=null,Ge(l,n,a),l=a,e.current.lanes=l,Ka(e,l),ae(e),t[Il]=e.current,nf(t),new Hi(e)};bi.version="19.2.0";function qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qd)}catch(t){console.error(t)}}qd(),Ls.exports=bi;var Mh=Ls.exports;const Oh=Vd(Mh),Bd=C.createContext(),ln=()=>{const t=C.useContext(Bd);if(!t)throw new Error("useCart must be used within a CartProvider");return t},Dh=({children:t})=>{const[e,l]=C.useState([]);C.useEffect(()=>{const y=localStorage.getItem("coffee-shop-cart");if(y)try{l(JSON.parse(y))}catch(v){console.error("Error loading cart from localStorage:",v)}},[]),C.useEffect(()=>{localStorage.setItem("coffee-shop-cart",JSON.stringify(e))},[e]);const a=(y,v=1)=>{l(d=>d.find(S=>S.id===y.id)?d.map(S=>S.id===y.id?{...S,quantity:S.quantity+v}:S):[...d,{...y,quantity:v}])},n=y=>{l(v=>v.filter(d=>d.id!==y))},r={cart:e,addToCart:a,removeFromCart:n,updateQuantity:(y,v)=>{if(v<=0){n(y);return}l(d=>d.map(g=>g.id===y?{...g,quantity:v}:g))},clearCart:()=>{l([])},getCartTotal:()=>e.reduce((y,v)=>y+v.price*v.quantity,0),getCartItemCount:()=>e.reduce((y,v)=>y+v.quantity,0)};return f.jsx(Bd.Provider,{value:r,children:t})},Ch=x.header`
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`,Nh=x.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Uh=x(Rs)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #d4af37;
  text-decoration: none;
`,_h=x.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${t=>t.isOpen?"flex":"none"};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`,jn=x(Rs)`
  color: #333;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #d4af37;
  }

  &.active {
    color: #d4af37;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: #d4af37;
    }
  }
`,Hh=x.button`
  position: relative;
  background: #d4af37;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
  }
`,qh=x.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4757;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,Bh=x.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,Yh=()=>{const[t,e]=C.useState(!1),{getCartItemCount:l}=ln(),a=Kd(),n=()=>{e(!t)},i=()=>{e(!1)};return f.jsx(Ch,{children:f.jsxs(Nh,{children:[f.jsxs(Uh,{to:"/",onClick:i,children:[f.jsx("i",{className:"fas fa-coffee"})," Kaffee's"]}),f.jsxs(_h,{isOpen:t,children:[f.jsx(jn,{to:"/",className:a.pathname==="/"?"active":"",onClick:i,children:"Home"}),f.jsx(jn,{to:"/menu",className:a.pathname==="/menu"?"active":"",onClick:i,children:"Menu"}),f.jsx(jn,{to:"/deals",className:a.pathname==="/deals"?"active":"",onClick:i,children:"Deals"}),f.jsx(jn,{to:"/favourite",className:a.pathname==="/favourite"?"active":"",onClick:i,children:"Favourite"}),f.jsxs(Hh,{children:[f.jsx("i",{className:"fas fa-shopping-cart"}),l()>0&&f.jsx(qh,{children:l()})]})]}),f.jsx(Bh,{onClick:n,children:f.jsx("i",{className:t?"fas fa-times":"fas fa-bars"})})]})})},Qh=x.footer`
  background: #333;
  color: #fff;
  padding: 3rem 0 1rem;
`,Gh=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: 1fr;
    text-align: center;
  }
`,Tn=x.div`
  h3 {
    color: #d4af37;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p, li {
    color: #ccc;
    line-height: 1.8;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #ccc;
    transition: color 0.3s ease;

    &:hover {
      color: #d4af37;
    }
  }
`,Xh=x.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #d4af37;
    color: #fff;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background: #b8941f;
      transform: translateY(-2px);
    }
  }
`,wh=x.div`
  border-top: 1px solid #555;
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: #ccc;
`,Rh=()=>f.jsxs(Qh,{children:[f.jsxs(Gh,{children:[f.jsxs(Tn,{children:[f.jsx("h3",{children:"About Kaffee's"}),f.jsx("p",{children:"We are passionate about serving the finest coffee and beverages to our customers. Our commitment to quality and customer satisfaction makes us the perfect choice for your daily coffee needs."})]}),f.jsxs(Tn,{children:[f.jsx("h3",{children:"Quick Links"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"#home",children:"Home"})}),f.jsx("li",{children:f.jsx("a",{href:"#menu",children:"Menu"})}),f.jsx("li",{children:f.jsx("a",{href:"#deals",children:"Deals"})}),f.jsx("li",{children:f.jsx("a",{href:"#favourite",children:"Favourites"})}),f.jsx("li",{children:f.jsx("a",{href:"#contact",children:"Contact"})})]})]}),f.jsxs(Tn,{children:[f.jsx("h3",{children:"Contact Info"}),f.jsxs("p",{children:[f.jsx("i",{className:"fas fa-map-marker-alt"})," 123 Coffee Street, City"]}),f.jsxs("p",{children:[f.jsx("i",{className:"fas fa-phone"})," +1 (555) 123-4567"]}),f.jsxs("p",{children:[f.jsx("i",{className:"fas fa-envelope"})," info@kaffees.com"]}),f.jsxs(Xh,{children:[f.jsx("a",{href:"#",children:f.jsx("i",{className:"fab fa-facebook-f"})}),f.jsx("a",{href:"#",children:f.jsx("i",{className:"fab fa-twitter"})}),f.jsx("a",{href:"#",children:f.jsx("i",{className:"fab fa-instagram"})}),f.jsx("a",{href:"#",children:f.jsx("i",{className:"fab fa-linkedin-in"})})]})]}),f.jsxs(Tn,{children:[f.jsx("h3",{children:"Opening Hours"}),f.jsx("p",{children:"Monday - Friday: 7:00 AM - 8:00 PM"}),f.jsx("p",{children:"Saturday: 8:00 AM - 9:00 PM"}),f.jsx("p",{children:"Sunday: 9:00 AM - 7:00 PM"})]})]}),f.jsx(wh,{children:f.jsx("p",{children:"© 2024 Kaffee's Coffee Shop. All rights reserved."})})]}),Zh=Ld`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`,Vh=x.section`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              url('/images/home-bg.jpg') center/cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;
`,Lh=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    padding: 0 1rem;
  }
`,Jh=x.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    line-height: 1.6;
  }
`,Kh=x.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,Ys=x.button`
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &.primary {
    background: #d4af37;
    color: #fff;
    border: none;

    &:hover {
      background: #b8941f;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;

    &:hover {
      background: #fff;
      color: #333;
    }
  }
`,kh=x.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    animation: ${Zh} 3s ease-in-out infinite;
  }
`,Fh=()=>{const t=kd(),e=()=>{t("/favourite")},l=()=>{t("/menu")};return f.jsx(Vh,{children:f.jsxs(Lh,{children:[f.jsxs(Jh,{children:[f.jsx("h1",{children:"Fresh Coffee in the Morning"}),f.jsx("p",{children:"Start your day with our premium coffee blends. We serve the finest coffee beans from around the world, carefully roasted to perfection for the ultimate coffee experience."}),f.jsxs(Kh,{children:[f.jsx(Ys,{className:"primary",onClick:e,children:"Order Now"}),f.jsx(Ys,{className:"secondary",onClick:l,children:"View Menu"})]})]}),f.jsx(kh,{children:f.jsx("img",{src:"/images/home-img-1.png",alt:"Coffee"})})]})})},fe={products:[{id:1,name:"Espresso",category:"coffee",price:45,description:"Rich and bold espresso with perfect crema",image_url:"/images/menu-1.png",is_featured:!0},{id:2,name:"Cappuccino",category:"coffee",price:55,description:"Classic cappuccino with steamed milk foam",image_url:"/images/menu-2.png",is_featured:!0},{id:3,name:"Latte",category:"coffee",price:60,description:"Smooth latte with artful milk design",image_url:"/images/menu-3.png",is_featured:!1},{id:4,name:"Iced Tea",category:"ice-tea",price:35,description:"Refreshing iced tea with natural flavors",image_url:"/images/menu-4.png",is_featured:!1},{id:5,name:"Fresh Juice",category:"juices",price:40,description:"Freshly squeezed fruit juice",image_url:"/images/menu-5.png",is_featured:!1}],categories:[{id:1,name:"Coffee",slug:"coffee"},{id:2,name:"Ice Tea",slug:"ice-tea"},{id:3,name:"Beverage",slug:"beverage"},{id:4,name:"Juices",slug:"juices"}],testimonials:[{id:1,name:"Sarah Johnson",email:"sarah@example.com",rating:5,testimonial:"The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning for my daily dose of happiness.",createdAt:"2024-01-15",status:"approved"},{id:2,name:"Mike Chen",email:"mike@example.com",rating:5,testimonial:"Amazing coffee and pastries! The vanilla latte is absolutely perfect. Great place to work or catch up with friends.",createdAt:"2024-01-14",status:"approved"},{id:3,name:"Emily Rodriguez",email:"emily@example.com",rating:4,testimonial:"Love the variety of coffee options and the quality is consistently excellent. The baristas really know their craft!",createdAt:"2024-01-13",status:"approved"},{id:4,name:"David Kim",email:"david@example.com",rating:5,testimonial:"Outstanding service and the coffee is always fresh. The baristas are knowledgeable and make great recommendations.",createdAt:"2024-01-12",status:"approved"}]},Wt=t=>new Promise(e=>setTimeout(e,t)),Ft={async subscribeNewsletter(t){try{const e=await fetch("/api/newsletter.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const l=await e.json();if(l.success)return{success:!0,message:"Successfully subscribed to newsletter!"};throw new Error(l.error||"Failed to subscribe")}catch(e){if(console.warn("PHP backend unavailable, using mock storage:",e.message),await Wt(500),!t||!t.includes("@"))throw new Error("Please enter a valid email address");const l=localStorage.getItem("kaffees_newsletter");let a=[];if(l)try{a=JSON.parse(l)}catch{a=[]}if(a.find(u=>u.email===t))throw new Error("Email already subscribed");const i={id:Date.now(),email:t,subscribedAt:new Date().toISOString()};return a.push(i),localStorage.setItem("kaffees_newsletter",JSON.stringify(a)),{success:!0,message:"Newsletter subscription saved locally. Please ensure the backend is running for proper processing."}}},async submitContact(t){try{const e=await fetch("/api/contact.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const l=await e.json();if(l.success)return{success:!0,message:"Message sent successfully! We'll get back to you soon."};throw new Error(l.error||"Failed to send message")}catch(e){if(console.warn("PHP backend unavailable, using mock storage:",e.message),await Wt(500),!t.name||!t.email||!t.message)throw new Error("All fields are required");const l={id:Date.now(),...t,submittedAt:new Date().toISOString()},a=localStorage.getItem("kaffees_contacts");let n=[];if(a)try{n=JSON.parse(a)}catch{n=[]}return n.unshift(l),localStorage.setItem("kaffees_contacts",JSON.stringify(n)),{success:!0,message:"Message saved locally. Please ensure the backend is running for proper delivery."}}},async submitFeedback(t){try{const e=await fetch("/api/feedback.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const l=await e.json();if(l.success)return{success:!0,message:"Thank you for your feedback! We appreciate your input."};throw new Error(l.error||"Failed to submit feedback")}catch(e){if(console.warn("PHP backend unavailable, using mock storage:",e.message),await Wt(500),!t.name||!t.email||!t.rating)throw new Error("Name, email, and rating are required");const l={id:Date.now(),...t,submittedAt:new Date().toISOString()},a=localStorage.getItem("kaffees_feedback");let n=[];if(a)try{n=JSON.parse(a)}catch{n=[]}return n.unshift(l),localStorage.setItem("kaffees_feedback",JSON.stringify(n)),{success:!0,message:"Feedback saved locally. Please ensure the backend is running for proper processing."}}},async getProducts(){return await Wt(300),fe.products},async getProductsByCategory(t){return await Wt(300),fe.products.filter(e=>e.category===t)},async getFeaturedProducts(){return await Wt(300),fe.products.filter(t=>t.is_featured)},async getCategories(){return await Wt(200),fe.categories},async processOrder(t){if(await Wt(1e3),!t.items||t.items.length===0)throw new Error("No items in order");return{success:!0,order:{id:`ORD-${Date.now()}`,...t,status:"confirmed",createdAt:new Date().toISOString()},message:"Order placed successfully!"}},async getTestimonials(){await Wt(300);const t=localStorage.getItem("kaffees_testimonials");let e=[];if(t)try{e=JSON.parse(t)}catch(a){console.error("Error parsing stored testimonials:",a),e=fe.testimonials}else e=[...fe.testimonials],localStorage.setItem("kaffees_testimonials",JSON.stringify(e));return e.sort((a,n)=>{const i=new Date(a.submittedAt||a.createdAt||0);return new Date(n.submittedAt||n.createdAt||0)-i}).slice(0,6)},async submitTestimonial(t){if(await Wt(500),!t.name||!t.email||!t.rating||!t.testimonial)throw new Error("All fields are required");const e={id:Date.now(),...t,status:"approved",submittedAt:new Date().toISOString()},l=localStorage.getItem("kaffees_testimonials");let a=[];if(l)try{a=JSON.parse(l)}catch(n){console.error("Error parsing stored testimonials:",n),a=[...fe.testimonials]}else a=[...fe.testimonials];return a.unshift(e),localStorage.setItem("kaffees_testimonials",JSON.stringify(a)),{success:!0,message:"Testimonial submitted successfully!"}},clearTestimonials(){return localStorage.removeItem("kaffees_testimonials"),{success:!0,message:"Testimonials cleared!"}},resetTestimonials(){return localStorage.setItem("kaffees_testimonials",JSON.stringify(fe.testimonials)),{success:!0,message:"Testimonials reset to default!"}}},$h=x.section`
  padding: 80px 0;
  background: #f8f9fa;
`,Wh=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Ih=x.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`,Ph=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,tg=x.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  &.active {
    border-color: #d4af37;
    background: #fffbf0;
  }

  .icon {
    font-size: 3rem;
    color: #d4af37;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`,eg=({onCategorySelect:t})=>{const[e,l]=C.useState([]),[a,n]=C.useState(null);C.useEffect(()=>{(async()=>{try{const r=await Ft.getCategories();l(r)}catch(r){console.error("Error loading categories:",r)}})()},[]);const i=s=>{n(s.slug),t&&t(s.slug)},u=s=>({coffee:"fas fa-coffee","ice-tea":"fas fa-glass-whiskey",beverage:"fas fa-wine-glass-alt",juices:"fas fa-apple-alt"})[s]||"fas fa-coffee",c=s=>({coffee:"Rich and aromatic coffee blends from around the world","ice-tea":"Refreshing iced teas perfect for any time of day",beverage:"A variety of cold and hot beverages to quench your thirst",juices:"Fresh and natural fruit juices packed with vitamins"})[s]||"Delicious beverages for every taste";return f.jsx($h,{children:f.jsxs(Wh,{children:[f.jsxs(Ih,{children:[f.jsx("h2",{children:"Our Categories"}),f.jsx("p",{children:"Choose from our wide variety of coffee and beverages"})]}),f.jsx(Ph,{children:e.map(s=>f.jsxs(tg,{className:a===s.slug?"active":"",onClick:()=>i(s),children:[f.jsx("div",{className:"icon",children:f.jsx("i",{className:u(s.slug)})}),f.jsx("h3",{children:s.name}),f.jsx("p",{children:c(s.slug)})]},s.id))})]})})},lg=x.section`
  padding: 80px 0;
`,ag=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,ng=x.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`,ig=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Yd=x.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`,ug=x.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${Yd}:hover & img {
    transform: scale(1.05);
  }
`,cg=x.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 1rem;
  }
`,fg=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #d4af37;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background: #b8941f;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
    min-width: 30px;
    text-align: center;
  }
`,sg=x.button`
  width: 100%;
  padding: 12px;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,og=()=>{const[t,e]=C.useState([]),[l,a]=C.useState({}),{addToCart:n}=ln();C.useEffect(()=>{(async()=>{try{const s=await Ft.getFeaturedProducts();e(s);const r={};s.forEach(y=>{r[y.id]=1}),a(r)}catch(s){console.error("Error loading featured products:",s)}})()},[]);const i=(c,s)=>{a(r=>({...r,[c]:Math.max(1,r[c]+s)}))},u=c=>{const s=l[c.id]||1;n(c,s),alert(`${c.name} added to cart!`)};return f.jsx(lg,{children:f.jsxs(ag,{children:[f.jsxs(ng,{children:[f.jsx("h2",{children:"Featured Products"}),f.jsx("p",{children:"Our most popular coffee blends and beverages"})]}),f.jsx(ig,{children:t.map(c=>f.jsxs(Yd,{children:[f.jsx(ug,{children:f.jsx("img",{src:c.image_url,alt:c.name})}),f.jsxs(cg,{children:[f.jsx("h3",{children:c.name}),f.jsx("p",{children:c.description}),f.jsxs("div",{className:"price",children:["$",c.price.toFixed(2)]}),f.jsxs(fg,{children:[f.jsx("button",{onClick:()=>i(c.id,-1),disabled:l[c.id]<=1,children:"-"}),f.jsx("span",{children:l[c.id]||1}),f.jsx("button",{onClick:()=>i(c.id,1),children:"+"})]}),f.jsx(sg,{onClick:()=>u(c),children:"Add to Cart"})]})]},c.id))})]})})},rg=x.section`
  padding: 80px 0;
  background: #f8f9fa;
`,dg=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,mg=x.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`,hg=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,gg=x.div`
  text-align: center;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .step-number {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background: #d4af37;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .icon {
    font-size: 3rem;
    color: #d4af37;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`,vg=()=>{const t=[{number:1,icon:"fas fa-coffee",title:"Choose Your Coffee",description:"Select from our wide variety of premium coffee blends and beverages"},{number:2,icon:"fas fa-shopping-cart",title:"Add to Cart",description:"Add your favorite items to the cart with your preferred quantity"},{number:3,icon:"fas fa-credit-card",title:"Place Order",description:"Complete your order with our secure and easy checkout process"},{number:4,icon:"fas fa-truck",title:"Enjoy Delivery",description:"Sit back and enjoy your coffee delivered fresh to your doorstep"}];return f.jsx(rg,{children:f.jsxs(dg,{children:[f.jsxs(mg,{children:[f.jsx("h2",{children:"How It Works"}),f.jsx("p",{children:"Simple steps to get your favorite coffee delivered"})]}),f.jsx(hg,{children:t.map((e,l)=>f.jsxs(gg,{children:[f.jsx("div",{className:"step-number",children:e.number}),f.jsx("div",{className:"icon",children:f.jsx("i",{className:e.icon})}),f.jsx("h3",{children:e.title}),f.jsx("p",{children:e.description})]},l))})]})})},yg=x.section`
  padding: 80px 0;
`,bg=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,pg=x.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`,xg=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`,Qd=x.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`,Sg=x.div`
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${Qd}:hover & img {
    transform: scale(1.05);
  }

  .category-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #d4af37;
    color: #fff;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: capitalize;
  }
`,zg=x.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 0.9rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 1rem;
  }
`,jg=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #d4af37;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background: #b8941f;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
    min-width: 30px;
    text-align: center;
  }
`,Tg=x.button`
  width: 100%;
  padding: 12px;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,Ag=()=>{const[t,e]=C.useState([]),[l,a]=C.useState({}),{addToCart:n}=ln();C.useEffect(()=>{(async()=>{try{const r=await Ft.getProducts();e(r);const y={};r.forEach(v=>{y[v.id]=1}),a(y)}catch(r){console.error("Error loading products:",r)}})()},[]);const i=(s,r)=>{a(y=>({...y,[s]:Math.max(1,y[s]+r)}))},u=s=>{const r=l[s.id]||1;n(s,r),alert(`${s.name} added to cart!`)},c=s=>({coffee:"Coffee","ice-tea":"Ice Tea",beverage:"Beverage",juices:"Juices"})[s]||s;return f.jsx(yg,{children:f.jsxs(bg,{children:[f.jsxs(pg,{children:[f.jsx("h2",{children:"Popular Flavors"}),f.jsx("p",{children:"Discover our most loved coffee blends and beverages"})]}),f.jsx(xg,{children:t.map(s=>f.jsxs(Qd,{children:[f.jsxs(Sg,{children:[f.jsx("img",{src:s.image_url,alt:s.name}),f.jsx("div",{className:"category-badge",children:c(s.category)})]}),f.jsxs(zg,{children:[f.jsx("h3",{children:s.name}),f.jsx("p",{children:s.description}),f.jsxs("div",{className:"price",children:["$",s.price.toFixed(2)]}),f.jsxs(jg,{children:[f.jsx("button",{onClick:()=>i(s.id,-1),disabled:l[s.id]<=1,children:"-"}),f.jsx("span",{children:l[s.id]||1}),f.jsx("button",{onClick:()=>i(s.id,1),children:"+"})]}),f.jsx(Tg,{onClick:()=>u(s),children:"Add to Cart"})]})]},s.id))})]})})},Eg=x.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #d4af37, #b8941f);
  color: #fff;
`,Mg=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Og=x.div`
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
`,Dg=x.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Cg=x.input`
  flex: 1;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  min-width: 250px;

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    min-width: auto;
  }
`,Ng=x.button`
  padding: 15px 30px;
  background: #fff;
  color: #d4af37;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`,Ug=x.div`
  margin-top: 1rem;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;

  &.success {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  &.error {
    background: rgba(255, 71, 87, 0.2);
    color: #fff;
  }
`,_g=()=>{const[t,e]=C.useState(""),[l,a]=C.useState(""),[n,i]=C.useState(!1),u=async c=>{if(c.preventDefault(),!t){a({type:"error",text:"Please enter your email address"});return}i(!0),a("");try{const s=await Ft.subscribeNewsletter(t);a({type:"success",text:s.message}),e("")}catch(s){a({type:"error",text:s.message})}finally{i(!1)}};return f.jsx(Eg,{children:f.jsxs(Mg,{children:[f.jsxs(Og,{children:[f.jsx("h2",{children:"Subscribe to Our Newsletter"}),f.jsx("p",{children:"Stay updated with our latest coffee blends, special offers, and exclusive deals delivered straight to your inbox."})]}),f.jsxs(Dg,{onSubmit:u,children:[f.jsx(Cg,{type:"email",placeholder:"Enter your email address",value:t,onChange:c=>e(c.target.value),disabled:n}),f.jsx(Ng,{type:"submit",disabled:n,children:n?"Subscribing...":"Subscribe"})]}),l&&f.jsx(Ug,{className:l.type,children:l.text})]})})},Hg=x.section`
  padding: 80px 0;
  background: #f8f9fa;
`,qg=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Bg=x.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`,Yg=x.form`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,An=x.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: #d4af37;
    }

    &.error {
      border-color: #ff4757;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  .error-message {
    color: #ff4757;
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
`,Qg=x.button`
  width: 100%;
  padding: 15px;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,Gg=x.div`
  margin-top: 1rem;
  padding: 15px;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;

  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`,Xg=()=>{const[t,e]=C.useState({name:"",email:"",subject:"",message:""}),[l,a]=C.useState({}),[n,i]=C.useState(""),[u,c]=C.useState(!1),s=v=>{const{name:d,value:g}=v.target;e(S=>({...S,[d]:g})),l[d]&&a(S=>({...S,[d]:""}))},r=()=>{const v={};return t.name.trim()||(v.name="Name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(v.email="Email is invalid"):v.email="Email is required",t.subject.trim()||(v.subject="Subject is required"),t.message.trim()||(v.message="Message is required"),a(v),Object.keys(v).length===0},y=async v=>{if(v.preventDefault(),!!r()){c(!0),i("");try{const d=await Ft.submitContact(t);i({type:"success",text:d.message}),e({name:"",email:"",subject:"",message:""})}catch(d){i({type:"error",text:d.message})}finally{c(!1)}}};return f.jsx(Hg,{children:f.jsxs(qg,{children:[f.jsxs(Bg,{children:[f.jsx("h2",{children:"Contact Us"}),f.jsx("p",{children:"Have a question or feedback? We'd love to hear from you!"})]}),f.jsxs(Yg,{onSubmit:y,children:[f.jsxs(An,{children:[f.jsx("label",{htmlFor:"name",children:"Name *"}),f.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:s,className:l.name?"error":"",disabled:u}),l.name&&f.jsx("div",{className:"error-message",children:l.name})]}),f.jsxs(An,{children:[f.jsx("label",{htmlFor:"email",children:"Email *"}),f.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:s,className:l.email?"error":"",disabled:u}),l.email&&f.jsx("div",{className:"error-message",children:l.email})]}),f.jsxs(An,{children:[f.jsx("label",{htmlFor:"subject",children:"Subject *"}),f.jsx("input",{type:"text",id:"subject",name:"subject",value:t.subject,onChange:s,className:l.subject?"error":"",disabled:u}),l.subject&&f.jsx("div",{className:"error-message",children:l.subject})]}),f.jsxs(An,{children:[f.jsx("label",{htmlFor:"message",children:"Message *"}),f.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:s,className:l.message?"error":"",disabled:u,placeholder:"Tell us what's on your mind..."}),l.message&&f.jsx("div",{className:"error-message",children:l.message})]}),f.jsx(Qg,{type:"submit",disabled:u,children:u?"Sending...":"Send Message"}),n&&f.jsx(Gg,{className:n.type,children:n.text})]})]})})},wg=x.section`
  padding: 80px 0;
`,Rg=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Zg=x.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`,Vg=x.form`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,pu=x.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: #d4af37;
    }

    &.error {
      border-color: #ff4757;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  .error-message {
    color: #ff4757;
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
`,Lg=x.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
  }

  .rating-stars {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .star {
    font-size: 2rem;
    color: #ddd;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover,
    &.active {
      color: #d4af37;
    }
  }

  .rating-text {
    color: #666;
    font-size: 0.9rem;
  }
`,Jg=x.button`
  width: 100%;
  padding: 15px;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,Kg=x.div`
  margin-top: 1rem;
  padding: 15px;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;

  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`,kg=()=>{const[t,e]=C.useState({name:"",email:"",rating:0,feedback:""}),[l,a]=C.useState({}),[n,i]=C.useState(""),[u,c]=C.useState(!1),s=g=>{const{name:S,value:z}=g.target;e(E=>({...E,[S]:z})),l[S]&&a(E=>({...E,[S]:""}))},r=g=>{e(S=>({...S,rating:g})),l.rating&&a(S=>({...S,rating:""}))},y=()=>{const g={};return t.name.trim()||(g.name="Name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.rating===0&&(g.rating="Please select a rating"),t.feedback.trim()||(g.feedback="Feedback is required"),a(g),Object.keys(g).length===0},v=async g=>{if(g.preventDefault(),!!y()){c(!0),i("");try{const S=await Ft.submitFeedback(t);i({type:"success",text:S.message}),e({name:"",email:"",rating:0,feedback:""})}catch(S){i({type:"error",text:S.message})}finally{c(!1)}}},d=g=>({1:"Poor",2:"Fair",3:"Good",4:"Very Good",5:"Excellent"})[g]||"";return f.jsx(wg,{children:f.jsxs(Rg,{children:[f.jsxs(Zg,{children:[f.jsx("h2",{children:"Share Your Feedback"}),f.jsx("p",{children:"Help us improve by sharing your experience with us"})]}),f.jsxs(Vg,{onSubmit:v,children:[f.jsxs(pu,{children:[f.jsx("label",{htmlFor:"name",children:"Name *"}),f.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:s,className:l.name?"error":"",disabled:u}),l.name&&f.jsx("div",{className:"error-message",children:l.name})]}),f.jsxs(pu,{children:[f.jsx("label",{htmlFor:"email",children:"Email *"}),f.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:s,className:l.email?"error":"",disabled:u}),l.email&&f.jsx("div",{className:"error-message",children:l.email})]}),f.jsxs(Lg,{children:[f.jsx("label",{children:"Rating *"}),f.jsx("div",{className:"rating-stars",children:[1,2,3,4,5].map(g=>f.jsx("span",{className:`star ${t.rating>=g?"active":""}`,onClick:()=>r(g),children:"★"},g))}),t.rating>0&&f.jsx("div",{className:"rating-text",children:d(t.rating)}),l.rating&&f.jsx("div",{className:"error-message",children:l.rating})]}),f.jsxs(pu,{children:[f.jsx("label",{htmlFor:"feedback",children:"Feedback *"}),f.jsx("textarea",{id:"feedback",name:"feedback",value:t.feedback,onChange:s,className:l.feedback?"error":"",disabled:u,placeholder:"Tell us about your experience..."}),l.feedback&&f.jsx("div",{className:"error-message",children:l.feedback})]}),f.jsx(Jg,{type:"submit",disabled:u,children:u?"Submitting...":"Submit Feedback"}),n&&f.jsx(Kg,{className:n.type,children:n.text})]})]})})},Fg=x.section`
  padding: 80px 0;
  background: #f8f9fa;
`,$g=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Wg=x.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`,Ig=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Pg=x.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: #d4af37;
    font-family: serif;
  }
`,t1=x.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  font-style: italic;
`,e1=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,l1=x.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #d4af37;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
`,a1=x.div`
  h4 {
    color: #333;
    margin-bottom: 0.25rem;
    font-size: 1rem;
  }

  .rating {
    color: #d4af37;
    font-size: 0.9rem;
  }
`,n1=x.button`
  display: block;
  margin: 0 auto;
  padding: 15px 30px;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
    transform: translateY(-2px);
  }
`,i1=x.form`
  max-width: 600px;
  margin: 2rem auto 0;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: ${t=>t.show?"block":"none"};
`,En=x.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: #d4af37;
    }

    &.error {
      border-color: #ff4757;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  .error-message {
    color: #ff4757;
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
`,u1=x.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

  input[type="radio"] {
    display: none;
  }

  label {
    font-size: 1.5rem;
    color: #ddd;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover,
    &:hover ~ label {
      color: #d4af37;
    }
  }

  input[type="radio"]:checked ~ label,
  input[type="radio"]:checked + label {
    color: #d4af37;
  }
`,c1=x.button`
  width: 100%;
  padding: 15px;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,f1=x.div`
  margin-top: 1rem;
  padding: 15px;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;

  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`,s1=()=>{const[t,e]=C.useState([]),[l,a]=C.useState(!1),[n,i]=C.useState({name:"",email:"",rating:0,testimonial:""}),[u,c]=C.useState({}),[s,r]=C.useState(""),[y,v]=C.useState(!1);C.useEffect(()=>{(async()=>{try{const h=await Ft.getTestimonials();h.length===0?e([{id:1,name:"Sarah Johnson",email:"sarah@example.com",rating:5,testimonial:"The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning for my daily dose of happiness.",createdAt:"2024-01-15"},{id:2,name:"Mike Chen",email:"mike@example.com",rating:5,testimonial:"Amazing coffee and pastries! The vanilla latte is absolutely perfect. Great place to work or catch up with friends.",createdAt:"2024-01-14"},{id:3,name:"Emily Rodriguez",email:"emily@example.com",rating:4,testimonial:"Love the variety of coffee options and the quality is consistently excellent. The baristas really know their craft!",createdAt:"2024-01-13"}]):e(h)}catch(h){console.error("Error loading testimonials:",h),e([{id:1,name:"Sarah Johnson",email:"sarah@example.com",rating:5,testimonial:"The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning for my daily dose of happiness.",createdAt:"2024-01-15"},{id:2,name:"Mike Chen",email:"mike@example.com",rating:5,testimonial:"Amazing coffee and pastries! The vanilla latte is absolutely perfect. Great place to work or catch up with friends.",createdAt:"2024-01-14"},{id:3,name:"Emily Rodriguez",email:"emily@example.com",rating:4,testimonial:"Love the variety of coffee options and the quality is consistently excellent. The baristas really know their craft!",createdAt:"2024-01-13"}])}})()},[]);const d=o=>{const{name:h,value:b}=o.target;i(A=>({...A,[h]:b})),u[h]&&c(A=>({...A,[h]:""}))},g=o=>{i(h=>({...h,rating:o})),u.rating&&c(h=>({...h,rating:""}))},S=()=>{const o={};return n.name.trim()||(o.name="Name is required"),n.email.trim()?/\S+@\S+\.\S+/.test(n.email)||(o.email="Email is invalid"):o.email="Email is required",n.rating===0&&(o.rating="Please select a rating"),n.testimonial.trim()||(o.testimonial="Testimonial is required"),c(o),Object.keys(o).length===0},z=async o=>{if(o.preventDefault(),!!S()){v(!0),r("");try{const h=await Ft.submitTestimonial(n);r({type:"success",text:h.message}),i({name:"",email:"",rating:0,testimonial:""}),a(!1);const b=await Ft.getTestimonials();e(b)}catch(h){r({type:"error",text:h.message})}finally{v(!1)}}},E=o=>o.split(" ").map(h=>h[0]).join("").toUpperCase(),m=o=>"★".repeat(o)+"☆".repeat(5-o);return f.jsx(Fg,{children:f.jsxs($g,{children:[f.jsxs(Wg,{children:[f.jsx("h2",{children:"What Our Customers Say"}),f.jsx("p",{children:"Latest experiences from our valued customers"})]}),f.jsx(Ig,{children:t.map(o=>f.jsxs(Pg,{children:[f.jsx(t1,{children:o.testimonial}),f.jsxs(e1,{children:[f.jsx(l1,{children:E(o.name)}),f.jsxs(a1,{children:[f.jsx("h4",{children:o.name}),f.jsx("div",{className:"rating",children:m(o.rating)})]})]})]},o.id))}),f.jsx(n1,{onClick:()=>a(!l),children:l?"Cancel":"Share Your Experience"}),f.jsxs(i1,{show:l,onSubmit:z,children:[f.jsxs(En,{children:[f.jsx("label",{htmlFor:"name",children:"Name *"}),f.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:d,className:u.name?"error":"",disabled:y}),u.name&&f.jsx("div",{className:"error-message",children:u.name})]}),f.jsxs(En,{children:[f.jsx("label",{htmlFor:"email",children:"Email *"}),f.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:d,className:u.email?"error":"",disabled:y}),u.email&&f.jsx("div",{className:"error-message",children:u.email})]}),f.jsxs(En,{children:[f.jsx("label",{children:"Rating *"}),f.jsx(u1,{children:[5,4,3,2,1].map(o=>f.jsxs(ws.Fragment,{children:[f.jsx("input",{type:"radio",id:`star${o}`,name:"rating",value:o,checked:n.rating===o,onChange:()=>g(o),disabled:y}),f.jsx("label",{htmlFor:`star${o}`,children:"★"})]},o))}),u.rating&&f.jsx("div",{className:"error-message",children:u.rating})]}),f.jsxs(En,{children:[f.jsx("label",{htmlFor:"testimonial",children:"Your Experience *"}),f.jsx("textarea",{id:"testimonial",name:"testimonial",value:n.testimonial,onChange:d,className:u.testimonial?"error":"",disabled:y,placeholder:"Tell us about your experience at Kaffee's..."}),u.testimonial&&f.jsx("div",{className:"error-message",children:u.testimonial})]}),f.jsx(c1,{type:"submit",disabled:y,children:y?"Submitting...":"Submit Testimonial"}),s&&f.jsx(f1,{className:s.type,children:s.text})]})]})})},o1=()=>f.jsxs(f.Fragment,{children:[f.jsx(Fh,{}),f.jsx(eg,{}),f.jsx(og,{}),f.jsx(vg,{}),f.jsx(Ag,{}),f.jsx(s1,{}),f.jsx(_g,{}),f.jsx(Xg,{}),f.jsx(kg,{})]}),r1=x.div`
  padding: 100px 0 80px;
  background: #f8f9fa;
  min-height: 100vh;
`,d1=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,m1=x.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`,h1=x.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  button {
    padding: 10px 20px;
    background: #fff;
    color: #333;
    border: 2px solid #e9ecef;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;

    &:hover {
      border-color: #d4af37;
      color: #d4af37;
    }

    &.active {
      background: #d4af37;
      color: #fff;
      border-color: #d4af37;
    }
  }
`,g1=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Gd=x.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`,v1=x.div`
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${Gd}:hover & img {
    transform: scale(1.05);
  }

  .category-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #d4af37;
    color: #fff;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: capitalize;
  }
`,y1=x.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 0.9rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 1rem;
  }
`,b1=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #d4af37;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background: #b8941f;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
    min-width: 30px;
    text-align: center;
  }
`,p1=x.button`
  width: 100%;
  padding: 12px;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,x1=()=>{const[t,e]=C.useState([]),[l,a]=C.useState([]),[n,i]=C.useState([]),[u,c]=C.useState("all"),[s,r]=C.useState({}),{addToCart:y}=ln();C.useEffect(()=>{(async()=>{try{const[E,m]=await Promise.all([Ft.getProducts(),Ft.getCategories()]);e(E),a(E),i(m);const o={};E.forEach(h=>{o[h.id]=1}),r(o)}catch(E){console.error("Error loading data:",E)}})()},[]);const v=z=>{if(c(z),z==="all")a(t);else{const E=t.filter(m=>m.category===z);a(E)}},d=(z,E)=>{r(m=>({...m,[z]:Math.max(1,m[z]+E)}))},g=z=>{const E=s[z.id]||1;y(z,E),alert(`${z.name} added to cart!`)},S=z=>({coffee:"Coffee","ice-tea":"Ice Tea",beverage:"Beverage",juices:"Juices"})[z]||z;return f.jsx(r1,{children:f.jsxs(d1,{children:[f.jsxs(m1,{children:[f.jsx("h1",{children:"Our Menu"}),f.jsx("p",{children:"Discover our wide selection of premium coffee and beverages"})]}),f.jsxs(h1,{children:[f.jsx("button",{className:u==="all"?"active":"",onClick:()=>v("all"),children:"All Items"}),n.map(z=>f.jsx("button",{className:u===z.slug?"active":"",onClick:()=>v(z.slug),children:z.name},z.id))]}),f.jsx(g1,{children:l.map(z=>f.jsxs(Gd,{children:[f.jsxs(v1,{children:[f.jsx("img",{src:z.image_url,alt:z.name}),f.jsx("div",{className:"category-badge",children:S(z.category)})]}),f.jsxs(y1,{children:[f.jsx("h3",{children:z.name}),f.jsx("p",{children:z.description}),f.jsxs("div",{className:"price",children:["$",z.price.toFixed(2)]}),f.jsxs(b1,{children:[f.jsx("button",{onClick:()=>d(z.id,-1),disabled:s[z.id]<=1,children:"-"}),f.jsx("span",{children:s[z.id]||1}),f.jsx("button",{onClick:()=>d(z.id,1),children:"+"})]}),f.jsx(p1,{onClick:()=>g(z),children:"Add to Cart"})]})]},z.id))})]})})},S1=x.div`
  padding: 100px 0 80px;
  background: #f8f9fa;
  min-height: 100vh;
`,z1=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,j1=x.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`,T1=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`,Xd=x.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .discount-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #ff4757;
    color: #fff;
    padding: 8px 12px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.9rem;
    z-index: 2;
  }
`,A1=x.div`
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${Xd}:hover & img {
    transform: scale(1.05);
  }
`,E1=x.div`
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .description {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .price-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    .original-price {
      font-size: 1.2rem;
      color: #999;
      text-decoration: line-through;
    }

    .discounted-price {
      font-size: 1.8rem;
      font-weight: 700;
      color: #d4af37;
    }
  }

  .deal-details {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        color: #666;
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #d4af37;
          font-weight: bold;
        }
      }
    }
  }
`,M1=x.button`
  width: 100%;
  padding: 15px;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8941f;
    transform: translateY(-2px);
  }
`,O1=()=>{const t=[{id:1,title:"Morning Coffee Combo",description:"Start your day right with our premium morning coffee combo",image:"/images/menu-1.png",originalPrice:120,discountedPrice:95,discount:"20% OFF",details:["2 Large Espresso","1 Cappuccino","Free Pastry","Valid until 11 AM"]},{id:2,title:"Afternoon Refreshment",description:"Perfect blend of coffee and tea for your afternoon break",image:"/images/menu-4.png",originalPrice:80,discountedPrice:65,discount:"18% OFF",details:["1 Iced Tea","1 Latte","Free Cookie","Valid 2 PM - 5 PM"]},{id:3,title:"Family Pack Special",description:"Great value for families - mix and match your favorites",image:"/images/menu-2.png",originalPrice:200,discountedPrice:160,discount:"20% OFF",details:["4 Any Coffee Drinks","2 Fresh Juices","Free Snacks","Valid all day"]},{id:4,title:"Student Discount",description:"Special pricing for students - show your ID and save",image:"/images/menu-3.png",originalPrice:60,discountedPrice:45,discount:"25% OFF",details:["Any Coffee Drink","Free Wi-Fi Access","Student ID Required","Valid weekdays"]},{id:5,title:"Weekend Special",description:"Relax and enjoy our weekend special coffee blends",image:"/images/menu-5.png",originalPrice:100,discountedPrice:80,discount:"20% OFF",details:["2 Premium Coffees","Free Dessert","Weekend Only","Valid Sat-Sun"]},{id:6,title:"Happy Hour Deal",description:"Join us during happy hour for amazing coffee deals",image:"/images/menu-6.png",originalPrice:90,discountedPrice:70,discount:"22% OFF",details:["Any 2 Beverages","Free Appetizer","4 PM - 6 PM","Valid weekdays"]}],e=l=>{alert(`Great choice! You've selected the ${l.title} deal. Please visit our store to redeem this offer.`)};return f.jsx(S1,{children:f.jsxs(z1,{children:[f.jsxs(j1,{children:[f.jsx("h1",{children:"Special Deals"}),f.jsx("p",{children:"Don't miss out on our amazing coffee deals and special offers"})]}),f.jsx(T1,{children:t.map(l=>f.jsxs(Xd,{children:[f.jsx("div",{className:"discount-badge",children:l.discount}),f.jsx(A1,{children:f.jsx("img",{src:l.image,alt:l.title})}),f.jsxs(E1,{children:[f.jsx("h3",{children:l.title}),f.jsx("p",{className:"description",children:l.description}),f.jsxs("div",{className:"price-info",children:[f.jsxs("span",{className:"original-price",children:["$",l.originalPrice]}),f.jsxs("span",{className:"discounted-price",children:["$",l.discountedPrice]})]}),f.jsx("div",{className:"deal-details",children:f.jsx("ul",{children:l.details.map((a,n)=>f.jsx("li",{children:a},n))})}),f.jsx(M1,{onClick:()=>e(l),children:"Get This Deal"})]})]},l.id))})]})})},Qs=x.div`
  padding: 100px 0 80px;
  background: #f8f9fa;
  min-height: 100vh;
`,Gs=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Xs=x.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`,D1=x.div`
  text-align: center;
  padding: 4rem 2rem;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  .icon {
    font-size: 4rem;
    color: #d4af37;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .btn {
    display: inline-block;
    padding: 12px 24px;
    background: #d4af37;
    color: #fff;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      background: #b8941f;
      transform: translateY(-2px);
    }
  }
`,C1=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,wd=x.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`,N1=x.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${wd}:hover & img {
    transform: scale(1.05);
  }
`,U1=x.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 0.9rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 1rem;
  }

  .quantity {
    color: #666;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`,_1=x.div`
  display: flex;
  gap: 1rem;

  button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &.primary {
      background: #d4af37;
      color: #fff;

      &:hover {
        background: #b8941f;
      }
    }

    &.secondary {
      background: #ff4757;
      color: #fff;

      &:hover {
        background: #ff3742;
      }
    }
  }
`,H1=x.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: #666;

    &.total {
      font-size: 1.2rem;
      font-weight: 700;
      color: #333;
      border-top: 2px solid #e9ecef;
      padding-top: 1rem;
      margin-top: 1rem;
    }
  }

  .checkout-btn {
    width: 100%;
    padding: 15px;
    background: #d4af37;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;

    &:hover {
      background: #b8941f;
    }
  }
`,q1=()=>{const{cart:t,removeFromCart:e,updateQuantity:l,getCartTotal:a,getCartItemCount:n}=ln(),i=(s,r)=>{var d;const v=(((d=t.find(g=>g.id===s))==null?void 0:d.quantity)||1)+r;v<=0?e(s):l(s,v)},u=s=>{window.confirm("Are you sure you want to remove this item from your cart?")&&e(s)},c=()=>{if(t.length===0){alert("Your cart is empty!");return}alert(`Order total: $${a().toFixed(2)}

Thank you for your order! Your items will be prepared shortly.`)};return t.length===0?f.jsx(Qs,{children:f.jsxs(Gs,{children:[f.jsxs(Xs,{children:[f.jsx("h1",{children:"My Favourites"}),f.jsx("p",{children:"Your selected items and cart"})]}),f.jsxs(D1,{children:[f.jsx("div",{className:"icon",children:f.jsx("i",{className:"fas fa-shopping-cart"})}),f.jsx("h3",{children:"Your cart is empty"}),f.jsx("p",{children:"Looks like you haven't added any items to your cart yet. Browse our menu and add some delicious coffee to get started!"}),f.jsx("a",{href:"/menu",className:"btn",children:"Browse Menu"})]})]})}):f.jsx(Qs,{children:f.jsxs(Gs,{children:[f.jsxs(Xs,{children:[f.jsx("h1",{children:"My Favourites"}),f.jsx("p",{children:"Your selected items and cart"})]}),f.jsx(C1,{children:t.map(s=>f.jsxs(wd,{children:[f.jsx(N1,{children:f.jsx("img",{src:s.image_url,alt:s.name})}),f.jsxs(U1,{children:[f.jsx("h3",{children:s.name}),f.jsx("p",{children:s.description}),f.jsxs("div",{className:"price",children:["$",s.price.toFixed(2)]}),f.jsxs("div",{className:"quantity",children:["Quantity: ",s.quantity]}),f.jsxs(_1,{children:[f.jsx("button",{className:"primary",onClick:()=>i(s.id,1),children:"Add More"}),f.jsx("button",{className:"secondary",onClick:()=>u(s.id),children:"Remove"})]})]})]},s.id))}),f.jsxs(H1,{children:[f.jsx("h3",{children:"Order Summary"}),f.jsxs("div",{className:"summary-row",children:[f.jsxs("span",{children:["Items (",n(),")"]}),f.jsxs("span",{children:["$",a().toFixed(2)]})]}),f.jsxs("div",{className:"summary-row",children:[f.jsx("span",{children:"Delivery Fee"}),f.jsx("span",{children:"$5.00"})]}),f.jsxs("div",{className:"summary-row total",children:[f.jsx("span",{children:"Total"}),f.jsxs("span",{children:["$",(a()+5).toFixed(2)]})]}),f.jsx("button",{className:"checkout-btn",onClick:c,children:"Proceed to Checkout"})]})]})})},B1=Jd`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .btn {
    display: inline-block;
    padding: 12px 24px;
    background: #d4af37;
    color: #fff;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    text-decoration: none;
  }

  .btn:hover {
    background: #b8941f;
    transform: translateY(-2px);
  }

  .btn-outline {
    background: transparent;
    color: #d4af37;
    border: 2px solid #d4af37;
  }

  .btn-outline:hover {
    background: #d4af37;
    color: #fff;
  }

  .section {
    padding: 80px 0;
  }

  .section-title {
    text-align: center;
    margin-bottom: 50px;
  }

  .section-title h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  .section-title p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }
    
    .section {
      padding: 60px 0;
    }
    
    .section-title h2 {
      font-size: 2rem;
    }
  }
`,Y1=x.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Q1=x.main`
  flex: 1;
`;function G1(){return f.jsx(Dh,{children:f.jsxs(Fd,{children:[f.jsx(B1,{}),f.jsxs(Y1,{children:[f.jsx(Yh,{}),f.jsx(Q1,{children:f.jsxs($d,{children:[f.jsx(cn,{path:"/",element:f.jsx(o1,{})}),f.jsx(cn,{path:"/menu",element:f.jsx(x1,{})}),f.jsx(cn,{path:"/deals",element:f.jsx(O1,{})}),f.jsx(cn,{path:"/favourite",element:f.jsx(q1,{})})]})}),f.jsx(Rh,{})]})]})})}Oh.createRoot(document.getElementById("root")).render(f.jsx(ws.StrictMode,{children:f.jsx(G1,{})}));
