import{r as C,a as wd,g as Vd,R as Rs}from"./vendor-pa2MT38e.js";import{d as x,m as Ld,f as Kd}from"./styled-CPCkpq__.js";import{u as Jd,L as Zs,H as kd,R as Fd,a as cn}from"./router-BfuW9Ijn.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();var ws={exports:{}},yi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=Symbol.for("react.transitional.element"),Wd=Symbol.for("react.fragment");function Vs(t,l,e){var a=null;if(e!==void 0&&(a=""+e),l.key!==void 0&&(a=""+l.key),"key"in l){e={};for(var n in l)n!=="key"&&(e[n]=l[n])}else e=l;return l=e.ref,{$$typeof:$d,type:t,key:a,ref:l!==void 0?l:null,props:e}}yi.Fragment=Wd;yi.jsx=Vs;yi.jsxs=Vs;ws.exports=yi;var f=ws.exports,Ls={exports:{}},bi={},Ks={exports:{}},Js={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function l(T,H){var _=T.length;T.push(H);t:for(;0<_;){var tt=_-1>>>1,st=T[tt];if(0<n(st,H))T[tt]=H,T[_]=st,_=tt;else break t}}function e(T){return T.length===0?null:T[0]}function a(T){if(T.length===0)return null;var H=T[0],_=T.pop();if(_!==H){T[0]=_;t:for(var tt=0,st=T.length,an=st>>>1;tt<an;){var nn=2*(tt+1)-1,Bi=T[nn],Wl=nn+1,un=T[Wl];if(0>n(Bi,_))Wl<st&&0>n(un,Bi)?(T[tt]=un,T[Wl]=_,tt=Wl):(T[tt]=Bi,T[nn]=_,tt=nn);else if(Wl<st&&0>n(un,_))T[tt]=un,T[Wl]=_,tt=Wl;else break t}}return H}function n(T,H){var _=T.sortIndex-H.sortIndex;return _!==0?_:T.id-H.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var u=Date,c=u.now();t.unstable_now=function(){return u.now()-c}}var s=[],r=[],y=1,v=null,d=3,g=!1,S=!1,z=!1,E=!1,m=typeof setTimeout=="function"?setTimeout:null,o=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;function b(T){for(var H=e(r);H!==null;){if(H.callback===null)a(r);else if(H.startTime<=T)a(r),H.sortIndex=H.expirationTime,l(s,H);else break;H=e(r)}}function A(T){if(z=!1,b(T),!S)if(e(s)!==null)S=!0,N||(N=!0,Tl());else{var H=e(r);H!==null&&qi(A,H.startTime-T)}}var N=!1,j=-1,D=5,U=-1;function Q(){return E?!0:!(t.unstable_now()-U<D)}function Yt(){if(E=!1,N){var T=t.unstable_now();U=T;var H=!0;try{t:{S=!1,z&&(z=!1,o(j),j=-1),g=!0;var _=d;try{l:{for(b(T),v=e(s);v!==null&&!(v.expirationTime>T&&Q());){var tt=v.callback;if(typeof tt=="function"){v.callback=null,d=v.priorityLevel;var st=tt(v.expirationTime<=T);if(T=t.unstable_now(),typeof st=="function"){v.callback=st,b(T),H=!0;break l}v===e(s)&&a(s),b(T)}else a(s);v=e(s)}if(v!==null)H=!0;else{var an=e(r);an!==null&&qi(A,an.startTime-T),H=!1}}break t}finally{v=null,d=_,g=!1}H=void 0}}finally{H?Tl():N=!1}}}var Tl;if(typeof h=="function")Tl=function(){h(Yt)};else if(typeof MessageChannel<"u"){var df=new MessageChannel,Zd=df.port2;df.port1.onmessage=Yt,Tl=function(){Zd.postMessage(null)}}else Tl=function(){m(Yt,0)};function qi(T,H){j=m(function(){T(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_next=function(T){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var _=d;d=H;try{return T()}finally{d=_}},t.unstable_requestPaint=function(){E=!0},t.unstable_runWithPriority=function(T,H){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var _=d;d=T;try{return H()}finally{d=_}},t.unstable_scheduleCallback=function(T,H,_){var tt=t.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?tt+_:tt):_=tt,T){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=_+st,T={id:y++,callback:H,priorityLevel:T,startTime:_,expirationTime:st,sortIndex:-1},_>tt?(T.sortIndex=_,l(r,T),e(s)===null&&T===e(r)&&(z?(o(j),j=-1):z=!0,qi(A,_-tt))):(T.sortIndex=st,l(s,T),S||g||(S=!0,N||(N=!0,Tl()))),T},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(T){var H=d;return function(){var _=d;d=H;try{return T.apply(this,arguments)}finally{d=_}}}})(Js);Ks.exports=Js;var Id=Ks.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=Id,ks=C,Pd=wd;function p(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)l+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Fs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Va(t){var l=t,e=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,l.flags&4098&&(e=l.return),t=l.return;while(t)}return l.tag===3?e:null}function $s(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function Ws(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function mf(t){if(Va(t)!==t)throw Error(p(188))}function tm(t){var l=t.alternate;if(!l){if(l=Va(t),l===null)throw Error(p(188));return l!==t?null:t}for(var e=t,a=l;;){var n=e.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){e=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===e)return mf(n),t;if(i===a)return mf(n),l;i=i.sibling}throw Error(p(188))}if(e.return!==a.return)e=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===e){u=!0,e=n,a=i;break}if(c===a){u=!0,a=n,e=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===e){u=!0,e=i,a=n;break}if(c===a){u=!0,a=i,e=n;break}c=c.sibling}if(!u)throw Error(p(189))}}if(e.alternate!==a)throw Error(p(190))}if(e.tag!==3)throw Error(p(188));return e.stateNode.current===e?t:l}function Is(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=Is(t),l!==null)return l;t=t.sibling}return null}var $=Object.assign,lm=Symbol.for("react.element"),fn=Symbol.for("react.transitional.element"),da=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),Ps=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),to=Symbol.for("react.consumer"),dl=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),Al=Symbol.for("react.lazy"),ju=Symbol.for("react.activity"),em=Symbol.for("react.memo_cache_sentinel"),hf=Symbol.iterator;function ia(t){return t===null||typeof t!="object"?null:(t=hf&&t[hf]||t["@@iterator"],typeof t=="function"?t:null)}var am=Symbol.for("react.client.reference");function Tu(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===am?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ze:return"Fragment";case xu:return"Profiler";case Ps:return"StrictMode";case Su:return"Suspense";case zu:return"SuspenseList";case ju:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case da:return"Portal";case dl:return t.displayName||"Context";case to:return(t._context.displayName||"Context")+".Consumer";case gc:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vc:return l=t.displayName||null,l!==null?l:Tu(t.type)||"Memo";case Al:l=t._payload,t=t._init;try{return Tu(t(l))}catch{}}return null}var ma=Array.isArray,M=ks.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Pd.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Au=[],je=-1;function al(t){return{current:t}}function dt(t){0>je||(t.current=Au[je],Au[je]=null,je--)}function J(t,l){je++,Au[je]=t.current,t.current=l}var el=al(null),Ca=al(null),Bl=al(null),Zn=al(null);function wn(t,l){switch(J(Bl,l),J(Ca,t),J(el,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?xs(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=xs(l),t=Sd(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}dt(el),J(el,t)}function Re(){dt(el),dt(Ca),dt(Bl)}function Eu(t){t.memoizedState!==null&&J(Zn,t);var l=el.current,e=Sd(l,t.type);l!==e&&(J(Ca,t),J(el,e))}function Vn(t){Ca.current===t&&(dt(el),dt(Ca)),Zn.current===t&&(dt(Zn),Ra._currentValue=ae)}var Yi,gf;function Pl(t){if(Yi===void 0)try{throw Error()}catch(e){var l=e.stack.trim().match(/\n( *(at )?)/);Yi=l&&l[1]||"",gf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yi+t+gf}var Qi=!1;function Gi(t,l){if(!t||Qi)return"";Qi=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(g){var d=g}Reflect.construct(t,[],v)}else{try{v.call()}catch(g){d=g}t.call(v.prototype)}}else{try{throw Error()}catch(g){d=g}(v=t())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(g){if(g&&d&&typeof g.stack=="string")return[g.stack,d.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),r=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<r.length&&!r[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===r.length)for(a=s.length-1,n=r.length-1;1<=a&&0<=n&&s[a]!==r[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==r[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==r[n]){var y=`
`+s[a].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=a&&0<=n);break}}}finally{Qi=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Pl(e):""}function nm(t,l){switch(t.tag){case 26:case 27:case 5:return Pl(t.type);case 16:return Pl("Lazy");case 13:return t.child!==l&&l!==null?Pl("Suspense Fallback"):Pl("Suspense");case 19:return Pl("SuspenseList");case 0:case 15:return Gi(t.type,!1);case 11:return Gi(t.type.render,!1);case 1:return Gi(t.type,!0);case 31:return Pl("Activity");default:return""}}function vf(t){try{var l="",e=null;do l+=nm(t,e),e=t,t=t.return;while(t);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Mu=Object.prototype.hasOwnProperty,yc=ft.unstable_scheduleCallback,Xi=ft.unstable_cancelCallback,im=ft.unstable_shouldYield,um=ft.unstable_requestPaint,Nt=ft.unstable_now,cm=ft.unstable_getCurrentPriorityLevel,lo=ft.unstable_ImmediatePriority,eo=ft.unstable_UserBlockingPriority,Ln=ft.unstable_NormalPriority,fm=ft.unstable_LowPriority,ao=ft.unstable_IdlePriority,sm=ft.log,om=ft.unstable_setDisableYieldValue,La=null,Ut=null;function Nl(t){if(typeof sm=="function"&&om(t),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(La,t)}catch{}}var _t=Math.clz32?Math.clz32:mm,rm=Math.log,dm=Math.LN2;function mm(t){return t>>>=0,t===0?32:31-(rm(t)/dm|0)|0}var sn=256,on=262144,rn=4194304;function te(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pi(t,l,e){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=te(a):(u&=c,u!==0?n=te(u):e||(e=c&~t,e!==0&&(n=te(e))))):(c=a&~i,c!==0?n=te(c):u!==0?n=te(u):e||(e=a&~t,e!==0&&(n=te(e)))),n===0?0:l!==0&&l!==n&&!(l&i)&&(i=n&-n,e=l&-l,i>=e||i===32&&(e&4194048)!==0)?l:n}function Ka(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function hm(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function no(){var t=rn;return rn<<=1,!(rn&62914560)&&(rn=4194304),t}function Ri(t){for(var l=[],e=0;31>e;e++)l.push(t);return l}function Ja(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gm(t,l,e,a,n,i){var u=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,r=t.hiddenUpdates;for(e=u&~e;0<e;){var y=31-_t(e),v=1<<y;c[y]=0,s[y]=-1;var d=r[y];if(d!==null)for(r[y]=null,y=0;y<d.length;y++){var g=d[y];g!==null&&(g.lane&=-536870913)}e&=~v}a!==0&&io(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~l))}function io(t,l,e){t.pendingLanes|=l,t.suspendedLanes&=~l;var a=31-_t(l);t.entangledLanes|=l,t.entanglements[a]=t.entanglements[a]|1073741824|e&261930}function uo(t,l){var e=t.entangledLanes|=l;for(t=t.entanglements;e;){var a=31-_t(e),n=1<<a;n&l|t[a]&l&&(t[a]|=l),e&=~n}}function co(t,l){var e=l&-l;return e=e&42?1:bc(e),e&(t.suspendedLanes|l)?0:e}function bc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function pc(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function fo(){var t=R.p;return t!==0?t:(t=window.event,t===void 0?32:Ud(t.type))}function yf(t,l){var e=R.p;try{return R.p=t,l()}finally{R.p=e}}var Fl=Math.random().toString(36).slice(2),ht="__reactFiber$"+Fl,Tt="__reactProps$"+Fl,Ie="__reactContainer$"+Fl,Du="__reactEvents$"+Fl,vm="__reactListeners$"+Fl,ym="__reactHandles$"+Fl,bf="__reactResources$"+Fl,ka="__reactMarker$"+Fl;function xc(t){delete t[ht],delete t[Tt],delete t[Du],delete t[vm],delete t[ym]}function Te(t){var l=t[ht];if(l)return l;for(var e=t.parentNode;e;){if(l=e[Ie]||e[ht]){if(e=l.alternate,l.child!==null||e!==null&&e.child!==null)for(t=As(t);t!==null;){if(e=t[ht])return e;t=As(t)}return l}t=e,e=t.parentNode}return null}function Pe(t){if(t=t[ht]||t[Ie]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function ha(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(p(33))}function He(t){var l=t[bf];return l||(l=t[bf]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function rt(t){t[ka]=!0}var so=new Set,oo={};function me(t,l){Ze(t,l),Ze(t+"Capture",l)}function Ze(t,l){for(oo[t]=l,t=0;t<l.length;t++)so.add(l[t])}var bm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pf={},xf={};function pm(t){return Mu.call(xf,t)?!0:Mu.call(pf,t)?!1:bm.test(t)?xf[t]=!0:(pf[t]=!0,!1)}function Mn(t,l,e){if(pm(l))if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+e)}}function dn(t,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+e)}}function il(t,l,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(l,e,""+a)}}function Gt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ro(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function xm(t,l,e){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return n.call(this)},set:function(u){e=""+u,i.call(this,u)}}),Object.defineProperty(t,l,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(u){e=""+u},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function Ou(t){if(!t._valueTracker){var l=ro(t)?"checked":"value";t._valueTracker=xm(t,l,""+t[l])}}function mo(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var e=l.getValue(),a="";return t&&(a=ro(t)?t.checked?"true":"false":t.value),t=a,t!==e?(l.setValue(t),!0):!1}function Kn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Sm=/[\n"\\]/g;function Zt(t){return t.replace(Sm,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function Cu(t,l,e,a,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),l!=null?u==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+Gt(l)):t.value!==""+Gt(l)&&(t.value=""+Gt(l)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),l!=null?Nu(t,u,Gt(l)):e!=null?Nu(t,u,Gt(e)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+Gt(c):t.removeAttribute("name")}function ho(t,l,e,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),l!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||l!=null)){Ou(t);return}e=e!=null?""+Gt(e):"",l=l!=null?""+Gt(l):e,c||l===t.value||(t.value=l),t.defaultValue=l}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Ou(t)}function Nu(t,l,e){l==="number"&&Kn(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function qe(t,l,e,a){if(t=t.options,l){l={};for(var n=0;n<e.length;n++)l["$"+e[n]]=!0;for(e=0;e<t.length;e++)n=l.hasOwnProperty("$"+t[e].value),t[e].selected!==n&&(t[e].selected=n),n&&a&&(t[e].defaultSelected=!0)}else{for(e=""+Gt(e),l=null,n=0;n<t.length;n++){if(t[n].value===e){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}l!==null||t[n].disabled||(l=t[n])}l!==null&&(l.selected=!0)}}function go(t,l,e){if(l!=null&&(l=""+Gt(l),l!==t.value&&(t.value=l),e==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=e!=null?""+Gt(e):""}function vo(t,l,e,a){if(l==null){if(a!=null){if(e!=null)throw Error(p(92));if(ma(a)){if(1<a.length)throw Error(p(93));a=a[0]}e=a}e==null&&(e=""),l=e}e=Gt(l),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a),Ou(t)}function we(t,l){if(l){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=l;return}}t.textContent=l}var zm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sf(t,l,e){var a=l.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":a?t.setProperty(l,e):typeof e!="number"||e===0||zm.has(l)?l==="float"?t.cssFloat=e:t[l]=(""+e).trim():t[l]=e+"px"}function yo(t,l,e){if(l!=null&&typeof l!="object")throw Error(p(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in l)a=l[n],l.hasOwnProperty(n)&&e[n]!==a&&Sf(t,n,a)}else for(var i in l)l.hasOwnProperty(i)&&Sf(t,i,l[i])}function Sc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dn(t){return Tm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ml(){}var Uu=null;function zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,Be=null;function zf(t){var l=Pe(t);if(l&&(t=l.stateNode)){var e=t[Tt]||null;t:switch(t=l.stateNode,l.type){case"input":if(Cu(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),l=e.name,e.type==="radio"&&l!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Zt(""+l)+'"][type="radio"]'),l=0;l<e.length;l++){var a=e[l];if(a!==t&&a.form===t.form){var n=a[Tt]||null;if(!n)throw Error(p(90));Cu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(l=0;l<e.length;l++)a=e[l],a.form===t.form&&mo(a)}break t;case"textarea":go(t,e.value,e.defaultValue);break t;case"select":l=e.value,l!=null&&qe(t,!!e.multiple,l,!1)}}}var Zi=!1;function bo(t,l,e){if(Zi)return t(l,e);Zi=!0;try{var a=t(l);return a}finally{if(Zi=!1,(Ae!==null||Be!==null)&&(Ni(),Ae&&(l=Ae,t=Be,Be=Ae=null,zf(l),t)))for(l=0;l<t.length;l++)zf(t[l])}}function Na(t,l){var e=t.stateNode;if(e===null)return null;var a=e[Tt]||null;if(a===null)return null;e=a[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(p(231,l,typeof e));return e}var bl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(bl)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){_u=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{_u=!1}var Ul=null,jc=null,On=null;function po(){if(On)return On;var t,l=jc,e=l.length,a,n="value"in Ul?Ul.value:Ul.textContent,i=n.length;for(t=0;t<e&&l[t]===n[t];t++);var u=e-t;for(a=1;a<=u&&l[e-a]===n[i-a];a++);return On=n.slice(t,1<a?1-a:void 0)}function Cn(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function mn(){return!0}function jf(){return!1}function At(t){function l(e,a,n,i,u){this._reactName=e,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mn:jf,this.isPropagationStopped=jf,this}return $(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=mn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=mn)},persist:function(){},isPersistent:mn}),l}var he={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=At(he),Fa=$({},he,{view:0,detail:0}),Am=At(Fa),wi,Vi,ca,Si=$({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(wi=t.screenX-ca.screenX,Vi=t.screenY-ca.screenY):Vi=wi=0,ca=t),wi)},movementY:function(t){return"movementY"in t?t.movementY:Vi}}),Tf=At(Si),Em=$({},Si,{dataTransfer:0}),Mm=At(Em),Dm=$({},Fa,{relatedTarget:0}),Li=At(Dm),Om=$({},he,{animationName:0,elapsedTime:0,pseudoElement:0}),Cm=At(Om),Nm=$({},he,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Um=At(Nm),_m=$({},he,{data:0}),Af=At(_m),Hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ym(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=Bm[t])?!!l[t]:!1}function Tc(){return Ym}var Qm=$({},Fa,{key:function(t){if(t.key){var l=Hm[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=Cn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(t){return t.type==="keypress"?Cn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gm=At(Qm),Xm=$({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=At(Xm),Rm=$({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),Zm=At(Rm),wm=$({},he,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vm=At(wm),Lm=$({},Si,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Km=At(Lm),Jm=$({},he,{newState:0,oldState:0}),km=At(Jm),Fm=[9,13,27,32],Ac=bl&&"CompositionEvent"in window,ya=null;bl&&"documentMode"in document&&(ya=document.documentMode);var $m=bl&&"TextEvent"in window&&!ya,xo=bl&&(!Ac||ya&&8<ya&&11>=ya),Mf=" ",Df=!1;function So(t,l){switch(t){case"keyup":return Fm.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ee=!1;function Wm(t,l){switch(t){case"compositionend":return zo(l);case"keypress":return l.which!==32?null:(Df=!0,Mf);case"textInput":return t=l.data,t===Mf&&Df?null:t;default:return null}}function Im(t,l){if(Ee)return t==="compositionend"||!Ac&&So(t,l)?(t=po(),On=jc=Ul=null,Ee=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return xo&&l.locale!=="ko"?null:l.data;default:return null}}var Pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!Pm[t.type]:l==="textarea"}function jo(t,l,e,a){Ae?Be?Be.push(a):Be=[a]:Ae=a,l=oi(l,"onChange"),0<l.length&&(e=new xi("onChange","change",null,e,a),t.push({event:e,listeners:l}))}var ba=null,Ua=null;function t0(t){bd(t,0)}function zi(t){var l=ha(t);if(mo(l))return t}function Cf(t,l){if(t==="change")return l}var To=!1;if(bl){var Ki;if(bl){var Ji="oninput"in document;if(!Ji){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),Ji=typeof Nf.oninput=="function"}Ki=Ji}else Ki=!1;To=Ki&&(!document.documentMode||9<document.documentMode)}function Uf(){ba&&(ba.detachEvent("onpropertychange",Ao),Ua=ba=null)}function Ao(t){if(t.propertyName==="value"&&zi(Ua)){var l=[];jo(l,Ua,t,zc(t)),bo(t0,l)}}function l0(t,l,e){t==="focusin"?(Uf(),ba=l,Ua=e,ba.attachEvent("onpropertychange",Ao)):t==="focusout"&&Uf()}function e0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zi(Ua)}function a0(t,l){if(t==="click")return zi(l)}function n0(t,l){if(t==="input"||t==="change")return zi(l)}function i0(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var qt=typeof Object.is=="function"?Object.is:i0;function _a(t,l){if(qt(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var e=Object.keys(t),a=Object.keys(l);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var n=e[a];if(!Mu.call(l,n)||!qt(t[n],l[n]))return!1}return!0}function _f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hf(t,l){var e=_f(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=l&&a>=l)return{node:e,offset:l-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=_f(e)}}function Eo(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?Eo(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function Mo(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=Kn(t.document);l instanceof t.HTMLIFrameElement;){try{var e=typeof l.contentWindow.location.href=="string"}catch{e=!1}if(e)t=l.contentWindow;else break;l=Kn(t.document)}return l}function Ec(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var u0=bl&&"documentMode"in document&&11>=document.documentMode,Me=null,Hu=null,pa=null,qu=!1;function qf(t,l,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;qu||Me==null||Me!==Kn(a)||(a=Me,"selectionStart"in a&&Ec(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),pa&&_a(pa,a)||(pa=a,a=oi(Hu,"onSelect"),0<a.length&&(l=new xi("onSelect","select",null,l,e),t.push({event:l,listeners:a}),l.target=Me)))}function Il(t,l){var e={};return e[t.toLowerCase()]=l.toLowerCase(),e["Webkit"+t]="webkit"+l,e["Moz"+t]="moz"+l,e}var De={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionrun:Il("Transition","TransitionRun"),transitionstart:Il("Transition","TransitionStart"),transitioncancel:Il("Transition","TransitionCancel"),transitionend:Il("Transition","TransitionEnd")},ki={},Do={};bl&&(Do=document.createElement("div").style,"AnimationEvent"in window||(delete De.animationend.animation,delete De.animationiteration.animation,delete De.animationstart.animation),"TransitionEvent"in window||delete De.transitionend.transition);function ge(t){if(ki[t])return ki[t];if(!De[t])return t;var l=De[t],e;for(e in l)if(l.hasOwnProperty(e)&&e in Do)return ki[t]=l[e];return t}var Oo=ge("animationend"),Co=ge("animationiteration"),No=ge("animationstart"),c0=ge("transitionrun"),f0=ge("transitionstart"),s0=ge("transitioncancel"),Uo=ge("transitionend"),_o=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function Wt(t,l){_o.set(t,l),me(l,[t])}var Jn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Qt=[],Oe=0,Mc=0;function ji(){for(var t=Oe,l=Mc=Oe=0;l<t;){var e=Qt[l];Qt[l++]=null;var a=Qt[l];Qt[l++]=null;var n=Qt[l];Qt[l++]=null;var i=Qt[l];if(Qt[l++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Ho(e,n,i)}}function Ti(t,l,e,a){Qt[Oe++]=t,Qt[Oe++]=l,Qt[Oe++]=e,Qt[Oe++]=a,Mc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Dc(t,l,e,a){return Ti(t,l,e,a),kn(t)}function ve(t,l){return Ti(t,null,null,l),kn(t)}function Ho(t,l,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var n=!1,i=t.return;i!==null;)i.childLanes|=e,a=i.alternate,a!==null&&(a.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&l!==null&&(n=31-_t(e),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[l]:a.push(l),l.lane=e|536870912),i):null}function kn(t){if(50<Da)throw Da=0,ac=null,Error(p(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var Ce={};function o0(t,l,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,l,e,a){return new o0(t,l,e,a)}function Oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gl(t,l){var e=t.alternate;return e===null?(e=Ot(t.tag,l,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=l,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function qo(t,l){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function Nn(t,l,e,a,n,i){var u=0;if(a=t,typeof t=="function")Oc(t)&&(u=1);else if(typeof t=="string")u=gh(t,e,el.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ju:return t=Ot(31,e,l,n),t.elementType=ju,t.lanes=i,t;case ze:return ne(e.children,n,i,l);case Ps:u=8,n|=24;break;case xu:return t=Ot(12,e,l,n|2),t.elementType=xu,t.lanes=i,t;case Su:return t=Ot(13,e,l,n),t.elementType=Su,t.lanes=i,t;case zu:return t=Ot(19,e,l,n),t.elementType=zu,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dl:u=10;break t;case to:u=9;break t;case gc:u=11;break t;case vc:u=14;break t;case Al:u=16,a=null;break t}u=29,e=Error(p(130,t===null?"null":typeof t,"")),a=null}return l=Ot(u,e,l,n),l.elementType=t,l.type=a,l.lanes=i,l}function ne(t,l,e,a){return t=Ot(7,t,a,l),t.lanes=e,t}function Fi(t,l,e){return t=Ot(6,t,null,l),t.lanes=e,t}function Bo(t){var l=Ot(18,null,null,0);return l.stateNode=t,l}function $i(t,l,e){return l=Ot(4,t.children!==null?t.children:[],t.key,l),l.lanes=e,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var Bf=new WeakMap;function wt(t,l){if(typeof t=="object"&&t!==null){var e=Bf.get(t);return e!==void 0?e:(l={value:t,source:l,stack:vf(l)},Bf.set(t,l),l)}return{value:t,source:l,stack:vf(l)}}var Ne=[],Ue=0,Fn=null,Ha=0,Xt=[],Rt=0,Ll=null,Pt=1,tl="";function ol(t,l){Ne[Ue++]=Ha,Ne[Ue++]=Fn,Fn=t,Ha=l}function Yo(t,l,e){Xt[Rt++]=Pt,Xt[Rt++]=tl,Xt[Rt++]=Ll,Ll=t;var a=Pt;t=tl;var n=32-_t(a)-1;a&=~(1<<n),e+=1;var i=32-_t(l)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Pt=1<<32-_t(l)+n|e<<n|a,tl=i+t}else Pt=1<<i|e<<n|a,tl=t}function Cc(t){t.return!==null&&(ol(t,1),Yo(t,1,0))}function Nc(t){for(;t===Fn;)Fn=Ne[--Ue],Ne[Ue]=null,Ha=Ne[--Ue],Ne[Ue]=null;for(;t===Ll;)Ll=Xt[--Rt],Xt[Rt]=null,tl=Xt[--Rt],Xt[Rt]=null,Pt=Xt[--Rt],Xt[Rt]=null}function Qo(t,l){Xt[Rt++]=Pt,Xt[Rt++]=tl,Xt[Rt++]=Ll,Pt=l.id,tl=l.overflow,Ll=t}var gt=null,F=null,G=!1,Yl=null,Vt=!1,Yu=Error(p(519));function Kl(t){var l=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qa(wt(l,t)),Yu}function Yf(t){var l=t.stateNode,e=t.type,a=t.memoizedProps;switch(l[ht]=t,l[Tt]=a,e){case"dialog":q("cancel",l),q("close",l);break;case"iframe":case"object":case"embed":q("load",l);break;case"video":case"audio":for(e=0;e<Ga.length;e++)q(Ga[e],l);break;case"source":q("error",l);break;case"img":case"image":case"link":q("error",l),q("load",l);break;case"details":q("toggle",l);break;case"input":q("invalid",l),ho(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":q("invalid",l);break;case"textarea":q("invalid",l),vo(l,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||l.textContent===""+e||a.suppressHydrationWarning===!0||xd(l.textContent,e)?(a.popover!=null&&(q("beforetoggle",l),q("toggle",l)),a.onScroll!=null&&q("scroll",l),a.onScrollEnd!=null&&q("scrollend",l),a.onClick!=null&&(l.onclick=ml),l=!0):l=!1,l||Kl(t,!0)}function Qf(t){for(gt=t.return;gt;)switch(gt.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:gt=gt.return}}function be(t){if(t!==gt)return!1;if(!G)return Qf(t),G=!0,!1;var l=t.tag,e;if((e=l!==3&&l!==27)&&((e=l===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||fc(t.type,t.memoizedProps)),e=!e),e&&F&&Kl(t),Qf(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));F=Ts(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));F=Ts(t)}else l===27?(l=F,$l(t.type)?(t=dc,dc=null,F=t):F=l):F=gt?Kt(t.stateNode.nextSibling):null;return!0}function fe(){F=gt=null,G=!1}function Wi(){var t=Yl;return t!==null&&(zt===null?zt=t:zt.push.apply(zt,t),Yl=null),t}function qa(t){Yl===null?Yl=[t]:Yl.push(t)}var Qu=al(null),ye=null,hl=null;function Ml(t,l,e){J(Qu,l._currentValue),l._currentValue=e}function vl(t){t._currentValue=Qu.current,dt(Qu)}function Gu(t,l,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),t===e)break;t=t.return}}function Xu(t,l,e,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var s=0;s<l.length;s++)if(c.context===l[s]){i.lanes|=e,c=i.alternate,c!==null&&(c.lanes|=e),Gu(i.return,e,t),a||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(p(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),Gu(u,e,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ta(t,l,e,a){t=null;for(var n=l,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(p(387));if(u=u.memoizedProps,u!==null){var c=n.type;qt(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===Zn.current){if(u=n.alternate,u===null)throw Error(p(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Ra):t=[Ra])}n=n.return}t!==null&&Xu(l,t,e,a),l.flags|=262144}function $n(t){for(t=t.firstContext;t!==null;){if(!qt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function se(t){ye=t,hl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vt(t){return Go(ye,t)}function hn(t,l){return ye===null&&se(t),Go(t,l)}function Go(t,l){var e=l._currentValue;if(l={context:l,memoizedValue:e,next:null},hl===null){if(t===null)throw Error(p(308));hl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else hl=hl.next=l;return e}var r0=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){l.aborted=!0,t.forEach(function(e){return e()})}},d0=ft.unstable_scheduleCallback,m0=ft.unstable_NormalPriority,it={$$typeof:dl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uc(){return{controller:new r0,data:new Map,refCount:0}}function $a(t){t.refCount--,t.refCount===0&&d0(m0,function(){t.controller.abort()})}var xa=null,Ru=0,Ve=0,Ye=null;function h0(t,l){if(xa===null){var e=xa=[];Ru=0,Ve=af(),Ye={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Ru++,l.then(Gf,Gf),l}function Gf(){if(--Ru===0&&xa!==null){Ye!==null&&(Ye.status="fulfilled");var t=xa;xa=null,Ve=0,Ye=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function g0(t,l){var e=[],a={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return t.then(function(){a.status="fulfilled",a.value=l;for(var n=0;n<e.length;n++)(0,e[n])(l)},function(n){for(a.status="rejected",a.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),a}var Xf=M.S;M.S=function(t,l){Pr=Nt(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&h0(t,l),Xf!==null&&Xf(t,l)};var ie=al(null);function _c(){var t=ie.current;return t!==null?t:K.pooledCache}function Un(t,l){l===null?J(ie,ie.current):J(ie,l.pool)}function Xo(){var t=_c();return t===null?null:{parent:it._currentValue,pool:t}}var la=Error(p(460)),Hc=Error(p(474)),Ai=Error(p(542)),Wn={then:function(){}};function Rf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ro(t,l,e){switch(e=t[e],e===void 0?t.push(l):e!==l&&(l.then(ml,ml),l=e),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,wf(t),t;default:if(typeof l.status=="string")l.then(ml,ml);else{if(t=K,t!==null&&100<t.shellSuspendCounter)throw Error(p(482));t=l,t.status="pending",t.then(function(a){if(l.status==="pending"){var n=l;n.status="fulfilled",n.value=a}},function(a){if(l.status==="pending"){var n=l;n.status="rejected",n.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,wf(t),t}throw ue=l,la}}function le(t){try{var l=t._init;return l(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(ue=e,la):e}}var ue=null;function Zf(){if(ue===null)throw Error(p(459));var t=ue;return ue=null,t}function wf(t){if(t===la||t===Ai)throw Error(p(483))}var Qe=null,Ba=0;function gn(t){var l=Ba;return Ba+=1,Qe===null&&(Qe=[]),Ro(Qe,t,l)}function fa(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function vn(t,l){throw l.$$typeof===lm?Error(p(525)):(t=Object.prototype.toString.call(l),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Zo(t){function l(m,o){if(t){var h=m.deletions;h===null?(m.deletions=[o],m.flags|=16):h.push(o)}}function e(m,o){if(!t)return null;for(;o!==null;)l(m,o),o=o.sibling;return null}function a(m){for(var o=new Map;m!==null;)m.key!==null?o.set(m.key,m):o.set(m.index,m),m=m.sibling;return o}function n(m,o){return m=gl(m,o),m.index=0,m.sibling=null,m}function i(m,o,h){return m.index=h,t?(h=m.alternate,h!==null?(h=h.index,h<o?(m.flags|=67108866,o):h):(m.flags|=67108866,o)):(m.flags|=1048576,o)}function u(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function c(m,o,h,b){return o===null||o.tag!==6?(o=Fi(h,m.mode,b),o.return=m,o):(o=n(o,h),o.return=m,o)}function s(m,o,h,b){var A=h.type;return A===ze?y(m,o,h.props.children,b,h.key):o!==null&&(o.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Al&&le(A)===o.type)?(o=n(o,h.props),fa(o,h),o.return=m,o):(o=Nn(h.type,h.key,h.props,null,m.mode,b),fa(o,h),o.return=m,o)}function r(m,o,h,b){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=$i(h,m.mode,b),o.return=m,o):(o=n(o,h.children||[]),o.return=m,o)}function y(m,o,h,b,A){return o===null||o.tag!==7?(o=ne(h,m.mode,b,A),o.return=m,o):(o=n(o,h),o.return=m,o)}function v(m,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Fi(""+o,m.mode,h),o.return=m,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case fn:return h=Nn(o.type,o.key,o.props,null,m.mode,h),fa(h,o),h.return=m,h;case da:return o=$i(o,m.mode,h),o.return=m,o;case Al:return o=le(o),v(m,o,h)}if(ma(o)||ia(o))return o=ne(o,m.mode,h,null),o.return=m,o;if(typeof o.then=="function")return v(m,gn(o),h);if(o.$$typeof===dl)return v(m,hn(m,o),h);vn(m,o)}return null}function d(m,o,h,b){var A=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return A!==null?null:c(m,o,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fn:return h.key===A?s(m,o,h,b):null;case da:return h.key===A?r(m,o,h,b):null;case Al:return h=le(h),d(m,o,h,b)}if(ma(h)||ia(h))return A!==null?null:y(m,o,h,b,null);if(typeof h.then=="function")return d(m,o,gn(h),b);if(h.$$typeof===dl)return d(m,o,hn(m,h),b);vn(m,h)}return null}function g(m,o,h,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return m=m.get(h)||null,c(o,m,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fn:return m=m.get(b.key===null?h:b.key)||null,s(o,m,b,A);case da:return m=m.get(b.key===null?h:b.key)||null,r(o,m,b,A);case Al:return b=le(b),g(m,o,h,b,A)}if(ma(b)||ia(b))return m=m.get(h)||null,y(o,m,b,A,null);if(typeof b.then=="function")return g(m,o,h,gn(b),A);if(b.$$typeof===dl)return g(m,o,h,hn(o,b),A);vn(o,b)}return null}function S(m,o,h,b){for(var A=null,N=null,j=o,D=o=0,U=null;j!==null&&D<h.length;D++){j.index>D?(U=j,j=null):U=j.sibling;var Q=d(m,j,h[D],b);if(Q===null){j===null&&(j=U);break}t&&j&&Q.alternate===null&&l(m,j),o=i(Q,o,D),N===null?A=Q:N.sibling=Q,N=Q,j=U}if(D===h.length)return e(m,j),G&&ol(m,D),A;if(j===null){for(;D<h.length;D++)j=v(m,h[D],b),j!==null&&(o=i(j,o,D),N===null?A=j:N.sibling=j,N=j);return G&&ol(m,D),A}for(j=a(j);D<h.length;D++)U=g(j,m,D,h[D],b),U!==null&&(t&&U.alternate!==null&&j.delete(U.key===null?D:U.key),o=i(U,o,D),N===null?A=U:N.sibling=U,N=U);return t&&j.forEach(function(Yt){return l(m,Yt)}),G&&ol(m,D),A}function z(m,o,h,b){if(h==null)throw Error(p(151));for(var A=null,N=null,j=o,D=o=0,U=null,Q=h.next();j!==null&&!Q.done;D++,Q=h.next()){j.index>D?(U=j,j=null):U=j.sibling;var Yt=d(m,j,Q.value,b);if(Yt===null){j===null&&(j=U);break}t&&j&&Yt.alternate===null&&l(m,j),o=i(Yt,o,D),N===null?A=Yt:N.sibling=Yt,N=Yt,j=U}if(Q.done)return e(m,j),G&&ol(m,D),A;if(j===null){for(;!Q.done;D++,Q=h.next())Q=v(m,Q.value,b),Q!==null&&(o=i(Q,o,D),N===null?A=Q:N.sibling=Q,N=Q);return G&&ol(m,D),A}for(j=a(j);!Q.done;D++,Q=h.next())Q=g(j,m,D,Q.value,b),Q!==null&&(t&&Q.alternate!==null&&j.delete(Q.key===null?D:Q.key),o=i(Q,o,D),N===null?A=Q:N.sibling=Q,N=Q);return t&&j.forEach(function(Tl){return l(m,Tl)}),G&&ol(m,D),A}function E(m,o,h,b){if(typeof h=="object"&&h!==null&&h.type===ze&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case fn:t:{for(var A=h.key;o!==null;){if(o.key===A){if(A=h.type,A===ze){if(o.tag===7){e(m,o.sibling),b=n(o,h.props.children),b.return=m,m=b;break t}}else if(o.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Al&&le(A)===o.type){e(m,o.sibling),b=n(o,h.props),fa(b,h),b.return=m,m=b;break t}e(m,o);break}else l(m,o);o=o.sibling}h.type===ze?(b=ne(h.props.children,m.mode,b,h.key),b.return=m,m=b):(b=Nn(h.type,h.key,h.props,null,m.mode,b),fa(b,h),b.return=m,m=b)}return u(m);case da:t:{for(A=h.key;o!==null;){if(o.key===A)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){e(m,o.sibling),b=n(o,h.children||[]),b.return=m,m=b;break t}else{e(m,o);break}else l(m,o);o=o.sibling}b=$i(h,m.mode,b),b.return=m,m=b}return u(m);case Al:return h=le(h),E(m,o,h,b)}if(ma(h))return S(m,o,h,b);if(ia(h)){if(A=ia(h),typeof A!="function")throw Error(p(150));return h=A.call(h),z(m,o,h,b)}if(typeof h.then=="function")return E(m,o,gn(h),b);if(h.$$typeof===dl)return E(m,o,hn(m,h),b);vn(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(e(m,o.sibling),b=n(o,h),b.return=m,m=b):(e(m,o),b=Fi(h,m.mode,b),b.return=m,m=b),u(m)):e(m,o)}return function(m,o,h,b){try{Ba=0;var A=E(m,o,h,b);return Qe=null,A}catch(j){if(j===la||j===Ai)throw j;var N=Ot(29,j,null,m.mode);return N.lanes=b,N.return=m,N}finally{}}}var oe=Zo(!0),wo=Zo(!1),El=!1;function qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ql(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Gl(t,l,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,X&2){var n=a.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),a.pending=l,l=kn(t),Ho(t,null,e),l}return Ti(t,a,l,e),kn(t)}function Sa(t,l,e){if(l=l.updateQueue,l!==null&&(l=l.shared,(e&4194048)!==0)){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,uo(t,e)}}function Ii(t,l){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var n=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?n=i=l:i=i.next=l}else n=i=l;e={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=l:t.next=l,e.lastBaseUpdate=l}var wu=!1;function za(){if(wu){var t=Ye;if(t!==null)throw t}}function ja(t,l,e,a){wu=!1;var n=t.updateQueue;El=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,r=s.next;s.next=null,u===null?i=r:u.next=r,u=s;var y=t.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==u&&(c===null?y.firstBaseUpdate=r:c.next=r,y.lastBaseUpdate=s))}if(i!==null){var v=n.baseState;u=0,y=r=s=null,c=i;do{var d=c.lane&-536870913,g=d!==c.lane;if(g?(Y&d)===d:(a&d)===d){d!==0&&d===Ve&&(wu=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var S=t,z=c;d=l;var E=e;switch(z.tag){case 1:if(S=z.payload,typeof S=="function"){v=S.call(E,v,d);break t}v=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=z.payload,d=typeof S=="function"?S.call(E,v,d):S,d==null)break t;v=$({},v,d);break t;case 2:El=!0}}d=c.callback,d!==null&&(t.flags|=64,g&&(t.flags|=8192),g=n.callbacks,g===null?n.callbacks=[d]:g.push(d))}else g={lane:d,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(r=y=g,s=v):y=y.next=g,u|=d;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;g=c,c=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);y===null&&(s=v),n.baseState=s,n.firstBaseUpdate=r,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),kl|=u,t.lanes=u,t.memoizedState=v}}function Vo(t,l){if(typeof t!="function")throw Error(p(191,t));t.call(l)}function Lo(t,l){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Vo(e[t],l)}var Le=al(null),In=al(0);function Vf(t,l){t=zl,J(In,t),J(Le,l),zl=t|l.baseLanes}function Vu(){J(In,zl),J(Le,Le.current)}function Bc(){zl=In.current,dt(Le),dt(In)}var Bt=al(null),Lt=null;function Dl(t){var l=t.alternate;J(lt,lt.current&1),J(Bt,t),Lt===null&&(l===null||Le.current!==null||l.memoizedState!==null)&&(Lt=t)}function Lu(t){J(lt,lt.current),J(Bt,t),Lt===null&&(Lt=t)}function Ko(t){t.tag===22?(J(lt,lt.current),J(Bt,t),Lt===null&&(Lt=t)):Ol()}function Ol(){J(lt,lt.current),J(Bt,Bt.current)}function Dt(t){dt(Bt),Lt===t&&(Lt=null),dt(lt)}var lt=al(0);function Pn(t){for(var l=t;l!==null;){if(l.tag===13){var e=l.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||oc(e)||rc(e)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var pl=0,O=null,L=null,at=null,ti=!1,Ge=!1,re=!1,li=0,Ya=0,Xe=null,v0=0;function I(){throw Error(p(321))}function Yc(t,l){if(l===null)return!1;for(var e=0;e<l.length&&e<t.length;e++)if(!qt(t[e],l[e]))return!1;return!0}function Qc(t,l,e,a,n,i){return pl=i,O=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,M.H=t===null||t.memoizedState===null?jr:Fc,re=!1,i=e(a,n),re=!1,Ge&&(i=ko(l,e,a,n)),Jo(t),i}function Jo(t){M.H=Qa;var l=L!==null&&L.next!==null;if(pl=0,at=L=O=null,ti=!1,Ya=0,Xe=null,l)throw Error(p(300));t===null||ut||(t=t.dependencies,t!==null&&$n(t)&&(ut=!0))}function ko(t,l,e,a){O=t;var n=0;do{if(Ge&&(Xe=null),Ya=0,Ge=!1,25<=n)throw Error(p(301));if(n+=1,at=L=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=Tr,i=l(e,a)}while(Ge);return i}function y0(){var t=M.H,l=t.useState()[0];return l=typeof l.then=="function"?Wa(l):l,t=t.useState()[0],(L!==null?L.memoizedState:null)!==t&&(O.flags|=1024),l}function Gc(){var t=li!==0;return li=0,t}function Xc(t,l,e){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~e}function Rc(t){if(ti){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}ti=!1}pl=0,at=L=O=null,Ge=!1,Ya=li=0,Xe=null}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?O.memoizedState=at=t:at=at.next=t,at}function et(){if(L===null){var t=O.alternate;t=t!==null?t.memoizedState:null}else t=L.next;var l=at===null?O.memoizedState:at.next;if(l!==null)at=l,L=t;else{if(t===null)throw O.alternate===null?Error(p(467)):Error(p(310));L=t,t={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},at===null?O.memoizedState=at=t:at=at.next=t}return at}function Ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wa(t){var l=Ya;return Ya+=1,Xe===null&&(Xe=[]),t=Ro(Xe,t,l),l=O,(at===null?l.memoizedState:at.next)===null&&(l=l.alternate,M.H=l===null||l.memoizedState===null?jr:Fc),t}function Mi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wa(t);if(t.$$typeof===dl)return vt(t)}throw Error(p(438,String(t)))}function Zc(t){var l=null,e=O.updateQueue;if(e!==null&&(l=e.memoCache),l==null){var a=O.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(n){return n.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),e===null&&(e=Ei(),O.updateQueue=e),e.memoCache=l,e=l.data[l.index],e===void 0)for(e=l.data[l.index]=Array(t),a=0;a<t;a++)e[a]=em;return l.index++,e}function xl(t,l){return typeof l=="function"?l(t):l}function _n(t){var l=et();return wc(l,L,t)}function wc(t,l,e){var a=t.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=e;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}l.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{l=n.next;var c=u=null,s=null,r=l,y=!1;do{var v=r.lane&-536870913;if(v!==r.lane?(Y&v)===v:(pl&v)===v){var d=r.revertLane;if(d===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),v===Ve&&(y=!0);else if((pl&d)===d){r=r.next,d===Ve&&(y=!0);continue}else v={lane:0,revertLane:r.revertLane,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},s===null?(c=s=v,u=i):s=s.next=v,O.lanes|=d,kl|=d;v=r.action,re&&e(i,v),i=r.hasEagerState?r.eagerState:e(i,v)}else d={lane:v,revertLane:r.revertLane,gesture:r.gesture,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},s===null?(c=s=d,u=i):s=s.next=d,O.lanes|=v,kl|=v;r=r.next}while(r!==null&&r!==l);if(s===null?u=i:s.next=c,!qt(i,t.memoizedState)&&(ut=!0,y&&(e=Ye,e!==null)))throw e;t.memoizedState=i,t.baseState=u,t.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Pi(t){var l=et(),e=l.queue;if(e===null)throw Error(p(311));e.lastRenderedReducer=t;var a=e.dispatch,n=e.pending,i=l.memoizedState;if(n!==null){e.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);qt(i,l.memoizedState)||(ut=!0),l.memoizedState=i,l.baseQueue===null&&(l.baseState=i),e.lastRenderedState=i}return[i,a]}function Fo(t,l,e){var a=O,n=et(),i=G;if(i){if(e===void 0)throw Error(p(407));e=e()}else e=l();var u=!qt((L||n).memoizedState,e);if(u&&(n.memoizedState=e,ut=!0),n=n.queue,Vc(Io.bind(null,a,n,t),[t]),n.getSnapshot!==l||u||at!==null&&at.memoizedState.tag&1){if(a.flags|=2048,Ke(9,{destroy:void 0},Wo.bind(null,a,n,e,l),null),K===null)throw Error(p(349));i||pl&127||$o(a,l,e)}return e}function $o(t,l,e){t.flags|=16384,t={getSnapshot:l,value:e},l=O.updateQueue,l===null?(l=Ei(),O.updateQueue=l,l.stores=[t]):(e=l.stores,e===null?l.stores=[t]:e.push(t))}function Wo(t,l,e,a){l.value=e,l.getSnapshot=a,Po(l)&&tr(t)}function Io(t,l,e){return e(function(){Po(l)&&tr(t)})}function Po(t){var l=t.getSnapshot;t=t.value;try{var e=l();return!qt(t,e)}catch{return!0}}function tr(t){var l=ve(t,2);l!==null&&jt(l,t,2)}function Ku(t){var l=bt();if(typeof t=="function"){var e=t;if(t=e(),re){Nl(!0);try{e()}finally{Nl(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:t},l}function lr(t,l,e,a){return t.baseState=e,wc(t,L,typeof a=="function"?a:xl)}function b0(t,l,e,a,n){if(Oi(t))throw Error(p(485));if(t=l.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};M.T!==null?e(!0):i.isTransition=!1,a(i),e=l.pending,e===null?(i.next=l.pending=i,er(l,i)):(i.next=e.next,l.pending=e.next=i)}}function er(t,l){var e=l.action,a=l.payload,n=t.state;if(l.isTransition){var i=M.T,u={};M.T=u;try{var c=e(n,a),s=M.S;s!==null&&s(u,c),Lf(t,l,c)}catch(r){Ju(t,l,r)}finally{i!==null&&u.types!==null&&(i.types=u.types),M.T=i}}else try{i=e(n,a),Lf(t,l,i)}catch(r){Ju(t,l,r)}}function Lf(t,l,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Kf(t,l,a)},function(a){return Ju(t,l,a)}):Kf(t,l,e)}function Kf(t,l,e){l.status="fulfilled",l.value=e,ar(l),t.state=e,l=t.pending,l!==null&&(e=l.next,e===l?t.pending=null:(e=e.next,l.next=e,er(t,e)))}function Ju(t,l,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=e,ar(l),l=l.next;while(l!==a)}t.action=null}function ar(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function nr(t,l){return l}function Jf(t,l){if(G){var e=K.formState;if(e!==null){t:{var a=O;if(G){if(F){l:{for(var n=F,i=Vt;n.nodeType!==8;){if(!i){n=null;break l}if(n=Kt(n.nextSibling),n===null){n=null;break l}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){F=Kt(n.nextSibling),a=n.data==="F!";break t}}Kl(a)}a=!1}a&&(l=e[0])}}return e=bt(),e.memoizedState=e.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:l},e.queue=a,e=xr.bind(null,O,a),a.dispatch=e,a=Ku(!1),i=kc.bind(null,O,!1,a.queue),a=bt(),n={state:l,dispatch:null,action:t,pending:null},a.queue=n,e=b0.bind(null,O,n,i,e),n.dispatch=e,a.memoizedState=t,[l,e,!1]}function kf(t){var l=et();return ir(l,L,t)}function ir(t,l,e){if(l=wc(t,l,nr)[0],t=_n(xl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=Wa(l)}catch(u){throw u===la?Ai:u}else a=l;l=et();var n=l.queue,i=n.dispatch;return e!==l.memoizedState&&(O.flags|=2048,Ke(9,{destroy:void 0},p0.bind(null,n,e),null)),[a,i,t]}function p0(t,l){t.action=l}function Ff(t){var l=et(),e=L;if(e!==null)return ir(l,e,t);et(),l=l.memoizedState,e=et();var a=e.queue.dispatch;return e.memoizedState=t,[l,a,!1]}function Ke(t,l,e,a){return t={tag:t,create:e,deps:a,inst:l,next:null},l=O.updateQueue,l===null&&(l=Ei(),O.updateQueue=l),e=l.lastEffect,e===null?l.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,l.lastEffect=t),t}function ur(){return et().memoizedState}function Hn(t,l,e,a){var n=bt();O.flags|=t,n.memoizedState=Ke(1|l,{destroy:void 0},e,a===void 0?null:a)}function Di(t,l,e,a){var n=et();a=a===void 0?null:a;var i=n.memoizedState.inst;L!==null&&a!==null&&Yc(a,L.memoizedState.deps)?n.memoizedState=Ke(l,i,e,a):(O.flags|=t,n.memoizedState=Ke(1|l,i,e,a))}function $f(t,l){Hn(8390656,8,t,l)}function Vc(t,l){Di(2048,8,t,l)}function x0(t){O.flags|=4;var l=O.updateQueue;if(l===null)l=Ei(),O.updateQueue=l,l.events=[t];else{var e=l.events;e===null?l.events=[t]:e.push(t)}}function cr(t){var l=et().memoizedState;return x0({ref:l,nextImpl:t}),function(){if(X&2)throw Error(p(440));return l.impl.apply(void 0,arguments)}}function fr(t,l){return Di(4,2,t,l)}function sr(t,l){return Di(4,4,t,l)}function or(t,l){if(typeof l=="function"){t=t();var e=l(t);return function(){typeof e=="function"?e():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function rr(t,l,e){e=e!=null?e.concat([t]):null,Di(4,4,or.bind(null,l,t),e)}function Lc(){}function dr(t,l){var e=et();l=l===void 0?null:l;var a=e.memoizedState;return l!==null&&Yc(l,a[1])?a[0]:(e.memoizedState=[t,l],t)}function mr(t,l){var e=et();l=l===void 0?null:l;var a=e.memoizedState;if(l!==null&&Yc(l,a[1]))return a[0];if(a=t(),re){Nl(!0);try{t()}finally{Nl(!1)}}return e.memoizedState=[a,l],a}function Kc(t,l,e){return e===void 0||pl&1073741824&&!(Y&261930)?t.memoizedState=l:(t.memoizedState=e,t=ld(),O.lanes|=t,kl|=t,e)}function hr(t,l,e,a){return qt(e,l)?e:Le.current!==null?(t=Kc(t,e,a),qt(t,l)||(ut=!0),t):!(pl&42)||pl&1073741824&&!(Y&261930)?(ut=!0,t.memoizedState=e):(t=ld(),O.lanes|=t,kl|=t,l)}function gr(t,l,e,a,n){var i=R.p;R.p=i!==0&&8>i?i:8;var u=M.T,c={};M.T=c,kc(t,!1,l,e);try{var s=n(),r=M.S;if(r!==null&&r(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var y=g0(s,a);Ta(t,l,y,Ht(t))}else Ta(t,l,a,Ht(t))}catch(v){Ta(t,l,{then:function(){},status:"rejected",reason:v},Ht())}finally{R.p=i,u!==null&&c.types!==null&&(u.types=c.types),M.T=u}}function S0(){}function ku(t,l,e,a){if(t.tag!==5)throw Error(p(476));var n=vr(t).queue;gr(t,n,l,ae,e===null?S0:function(){return yr(t),e(a)})}function vr(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:ae},next:null};var e={};return l.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:e},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function yr(t){var l=vr(t);l.next===null&&(l=t.alternate.memoizedState),Ta(t,l.next.queue,{},Ht())}function Jc(){return vt(Ra)}function br(){return et().memoizedState}function pr(){return et().memoizedState}function z0(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var e=Ht();t=Ql(e);var a=Gl(l,t,e);a!==null&&(jt(a,l,e),Sa(a,l,e)),l={cache:Uc()},t.payload=l;return}l=l.return}}function j0(t,l,e){var a=Ht();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Oi(t)?Sr(l,e):(e=Dc(t,l,e,a),e!==null&&(jt(e,t,a),zr(e,l,a)))}function xr(t,l,e){var a=Ht();Ta(t,l,e,a)}function Ta(t,l,e,a){var n={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Oi(t))Sr(l,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=l.lastRenderedReducer,i!==null))try{var u=l.lastRenderedState,c=i(u,e);if(n.hasEagerState=!0,n.eagerState=c,qt(c,u))return Ti(t,l,n,0),K===null&&ji(),!1}catch{}finally{}if(e=Dc(t,l,n,a),e!==null)return jt(e,t,a),zr(e,l,a),!0}return!1}function kc(t,l,e,a){if(a={lane:2,revertLane:af(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Oi(t)){if(l)throw Error(p(479))}else l=Dc(t,e,a,2),l!==null&&jt(l,t,2)}function Oi(t){var l=t.alternate;return t===O||l!==null&&l===O}function Sr(t,l){Ge=ti=!0;var e=t.pending;e===null?l.next=l:(l.next=e.next,e.next=l),t.pending=l}function zr(t,l,e){if(e&4194048){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,uo(t,e)}}var Qa={readContext:vt,use:Mi,useCallback:I,useContext:I,useEffect:I,useImperativeHandle:I,useLayoutEffect:I,useInsertionEffect:I,useMemo:I,useReducer:I,useRef:I,useState:I,useDebugValue:I,useDeferredValue:I,useTransition:I,useSyncExternalStore:I,useId:I,useHostTransitionStatus:I,useFormState:I,useActionState:I,useOptimistic:I,useMemoCache:I,useCacheRefresh:I};Qa.useEffectEvent=I;var jr={readContext:vt,use:Mi,useCallback:function(t,l){return bt().memoizedState=[t,l===void 0?null:l],t},useContext:vt,useEffect:$f,useImperativeHandle:function(t,l,e){e=e!=null?e.concat([t]):null,Hn(4194308,4,or.bind(null,l,t),e)},useLayoutEffect:function(t,l){return Hn(4194308,4,t,l)},useInsertionEffect:function(t,l){Hn(4,2,t,l)},useMemo:function(t,l){var e=bt();l=l===void 0?null:l;var a=t();if(re){Nl(!0);try{t()}finally{Nl(!1)}}return e.memoizedState=[a,l],a},useReducer:function(t,l,e){var a=bt();if(e!==void 0){var n=e(l);if(re){Nl(!0);try{e(l)}finally{Nl(!1)}}}else n=l;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=j0.bind(null,O,t),[a.memoizedState,t]},useRef:function(t){var l=bt();return t={current:t},l.memoizedState=t},useState:function(t){t=Ku(t);var l=t.queue,e=xr.bind(null,O,l);return l.dispatch=e,[t.memoizedState,e]},useDebugValue:Lc,useDeferredValue:function(t,l){var e=bt();return Kc(e,t,l)},useTransition:function(){var t=Ku(!1);return t=gr.bind(null,O,t.queue,!0,!1),bt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,e){var a=O,n=bt();if(G){if(e===void 0)throw Error(p(407));e=e()}else{if(e=l(),K===null)throw Error(p(349));Y&127||$o(a,l,e)}n.memoizedState=e;var i={value:e,getSnapshot:l};return n.queue=i,$f(Io.bind(null,a,i,t),[t]),a.flags|=2048,Ke(9,{destroy:void 0},Wo.bind(null,a,i,e,l),null),e},useId:function(){var t=bt(),l=K.identifierPrefix;if(G){var e=tl,a=Pt;e=(a&~(1<<32-_t(a)-1)).toString(32)+e,l="_"+l+"R_"+e,e=li++,0<e&&(l+="H"+e.toString(32)),l+="_"}else e=v0++,l="_"+l+"r_"+e.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:Jc,useFormState:Jf,useActionState:Jf,useOptimistic:function(t){var l=bt();l.memoizedState=l.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=e,l=kc.bind(null,O,!0,e),e.dispatch=l,[t,l]},useMemoCache:Zc,useCacheRefresh:function(){return bt().memoizedState=z0.bind(null,O)},useEffectEvent:function(t){var l=bt(),e={impl:t};return l.memoizedState=e,function(){if(X&2)throw Error(p(440));return e.impl.apply(void 0,arguments)}}},Fc={readContext:vt,use:Mi,useCallback:dr,useContext:vt,useEffect:Vc,useImperativeHandle:rr,useInsertionEffect:fr,useLayoutEffect:sr,useMemo:mr,useReducer:_n,useRef:ur,useState:function(){return _n(xl)},useDebugValue:Lc,useDeferredValue:function(t,l){var e=et();return hr(e,L.memoizedState,t,l)},useTransition:function(){var t=_n(xl)[0],l=et().memoizedState;return[typeof t=="boolean"?t:Wa(t),l]},useSyncExternalStore:Fo,useId:br,useHostTransitionStatus:Jc,useFormState:kf,useActionState:kf,useOptimistic:function(t,l){var e=et();return lr(e,L,t,l)},useMemoCache:Zc,useCacheRefresh:pr};Fc.useEffectEvent=cr;var Tr={readContext:vt,use:Mi,useCallback:dr,useContext:vt,useEffect:Vc,useImperativeHandle:rr,useInsertionEffect:fr,useLayoutEffect:sr,useMemo:mr,useReducer:Pi,useRef:ur,useState:function(){return Pi(xl)},useDebugValue:Lc,useDeferredValue:function(t,l){var e=et();return L===null?Kc(e,t,l):hr(e,L.memoizedState,t,l)},useTransition:function(){var t=Pi(xl)[0],l=et().memoizedState;return[typeof t=="boolean"?t:Wa(t),l]},useSyncExternalStore:Fo,useId:br,useHostTransitionStatus:Jc,useFormState:Ff,useActionState:Ff,useOptimistic:function(t,l){var e=et();return L!==null?lr(e,L,t,l):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Zc,useCacheRefresh:pr};Tr.useEffectEvent=cr;function tu(t,l,e,a){l=t.memoizedState,e=e(a,l),e=e==null?l:$({},l,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var Fu={enqueueSetState:function(t,l,e){t=t._reactInternals;var a=Ht(),n=Ql(a);n.payload=l,e!=null&&(n.callback=e),l=Gl(t,n,a),l!==null&&(jt(l,t,a),Sa(l,t,a))},enqueueReplaceState:function(t,l,e){t=t._reactInternals;var a=Ht(),n=Ql(a);n.tag=1,n.payload=l,e!=null&&(n.callback=e),l=Gl(t,n,a),l!==null&&(jt(l,t,a),Sa(l,t,a))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var e=Ht(),a=Ql(e);a.tag=2,l!=null&&(a.callback=l),l=Gl(t,a,e),l!==null&&(jt(l,t,e),Sa(l,t,e))}};function Wf(t,l,e,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):l.prototype&&l.prototype.isPureReactComponent?!_a(e,a)||!_a(n,i):!0}function If(t,l,e,a){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(e,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(e,a),l.state!==t&&Fu.enqueueReplaceState(l,l.state,null)}function de(t,l){var e=l;if("ref"in l){e={};for(var a in l)a!=="ref"&&(e[a]=l[a])}if(t=t.defaultProps){e===l&&(e=$({},e));for(var n in t)e[n]===void 0&&(e[n]=t[n])}return e}function Ar(t){Jn(t)}function Er(t){console.error(t)}function Mr(t){Jn(t)}function ei(t,l){try{var e=t.onUncaughtError;e(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function Pf(t,l,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function $u(t,l,e){return e=Ql(e),e.tag=3,e.payload={element:null},e.callback=function(){ei(t,l)},e}function Dr(t){return t=Ql(t),t.tag=3,t}function Or(t,l,e,a){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Pf(l,e,a)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Pf(l,e,a),typeof n!="function"&&(Xl===null?Xl=new Set([this]):Xl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function T0(t,l,e,a,n){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=e.alternate,l!==null&&ta(l,e,n,!0),e=Bt.current,e!==null){switch(e.tag){case 31:case 13:return Lt===null?ci():e.alternate===null&&P===0&&(P=3),e.flags&=-257,e.flags|=65536,e.lanes=n,a===Wn?e.flags|=16384:(l=e.updateQueue,l===null?e.updateQueue=new Set([a]):l.add(a),ru(t,a,n)),!1;case 22:return e.flags|=65536,a===Wn?e.flags|=16384:(l=e.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=l):(e=l.retryQueue,e===null?l.retryQueue=new Set([a]):e.add(a)),ru(t,a,n)),!1}throw Error(p(435,e.tag))}return ru(t,a,n),ci(),!1}if(G)return l=Bt.current,l!==null?(!(l.flags&65536)&&(l.flags|=256),l.flags|=65536,l.lanes=n,a!==Yu&&(t=Error(p(422),{cause:a}),qa(wt(t,e)))):(a!==Yu&&(l=Error(p(423),{cause:a}),qa(wt(l,e))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=wt(a,e),n=$u(t.stateNode,a,n),Ii(t,n),P!==4&&(P=2)),!1;var i=Error(p(520),{cause:a});if(i=wt(i,e),Ma===null?Ma=[i]:Ma.push(i),P!==4&&(P=2),l===null)return!0;a=wt(a,e),e=l;do{switch(e.tag){case 3:return e.flags|=65536,t=n&-n,e.lanes|=t,t=$u(e.stateNode,a,t),Ii(e,t),!1;case 1:if(l=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xl===null||!Xl.has(i))))return e.flags|=65536,n&=-n,e.lanes|=n,n=Dr(n),Or(n,t,e,a),Ii(e,n),!1}e=e.return}while(e!==null);return!1}var $c=Error(p(461)),ut=!1;function mt(t,l,e,a){l.child=t===null?wo(l,null,e,a):oe(l,t.child,e,a)}function ts(t,l,e,a,n){e=e.render;var i=l.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return se(l),a=Qc(t,l,e,u,i,n),c=Gc(),t!==null&&!ut?(Xc(t,l,n),Sl(t,l,n)):(G&&c&&Cc(l),l.flags|=1,mt(t,l,a,n),l.child)}function ls(t,l,e,a,n){if(t===null){var i=e.type;return typeof i=="function"&&!Oc(i)&&i.defaultProps===void 0&&e.compare===null?(l.tag=15,l.type=i,Cr(t,l,i,a,n)):(t=Nn(e.type,null,a,l,l.mode,n),t.ref=l.ref,t.return=l,l.child=t)}if(i=t.child,!Wc(t,n)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:_a,e(u,a)&&t.ref===l.ref)return Sl(t,l,n)}return l.flags|=1,t=gl(i,a),t.ref=l.ref,t.return=l,l.child=t}function Cr(t,l,e,a,n){if(t!==null){var i=t.memoizedProps;if(_a(i,a)&&t.ref===l.ref)if(ut=!1,l.pendingProps=a=i,Wc(t,n))t.flags&131072&&(ut=!0);else return l.lanes=t.lanes,Sl(t,l,n)}return Wu(t,l,e,a,n)}function Nr(t,l,e,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(l.flags&128){if(i=i!==null?i.baseLanes|e:e,t!==null){for(a=l.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,l.child=null;return es(t,l,i,e,a)}if(e&536870912)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&Un(l,i!==null?i.cachePool:null),i!==null?Vf(l,i):Vu(),Ko(l);else return a=l.lanes=536870912,es(t,l,i!==null?i.baseLanes|e:e,e,a)}else i!==null?(Un(l,i.cachePool),Vf(l,i),Ol(),l.memoizedState=null):(t!==null&&Un(l,null),Vu(),Ol());return mt(t,l,n,e),l.child}function ga(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function es(t,l,e,a,n){var i=_c();return i=i===null?null:{parent:it._currentValue,pool:i},l.memoizedState={baseLanes:e,cachePool:i},t!==null&&Un(l,null),Vu(),Ko(l),t!==null&&ta(t,l,a,!0),l.childLanes=n,null}function qn(t,l){return l=ai({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function as(t,l,e){return oe(l,t.child,null,e),t=qn(l,l.pendingProps),t.flags|=2,Dt(l),l.memoizedState=null,t}function A0(t,l,e){var a=l.pendingProps,n=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(G){if(a.mode==="hidden")return t=qn(l,a),l.lanes=536870912,ga(null,t);if(Lu(l),(t=F)?(t=jd(t,Vt),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:Ll!==null?{id:Pt,overflow:tl}:null,retryLane:536870912,hydrationErrors:null},e=Bo(t),e.return=l,l.child=e,gt=l,F=null)):t=null,t===null)throw Kl(l);return l.lanes=536870912,null}return qn(l,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Lu(l),n)if(l.flags&256)l.flags&=-257,l=as(t,l,e);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(p(558));else if(ut||ta(t,l,e,!1),n=(e&t.childLanes)!==0,ut||n){if(a=K,a!==null&&(u=co(a,e),u!==0&&u!==i.retryLane))throw i.retryLane=u,ve(t,u),jt(a,t,u),$c;ci(),l=as(t,l,e)}else t=i.treeContext,F=Kt(u.nextSibling),gt=l,G=!0,Yl=null,Vt=!1,t!==null&&Qo(l,t),l=qn(l,a),l.flags|=4096;return l}return t=gl(t.child,{mode:a.mode,children:a.children}),t.ref=l.ref,l.child=t,t.return=l,t}function Bn(t,l){var e=l.ref;if(e===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(p(284));(t===null||t.ref!==e)&&(l.flags|=4194816)}}function Wu(t,l,e,a,n){return se(l),e=Qc(t,l,e,a,void 0,n),a=Gc(),t!==null&&!ut?(Xc(t,l,n),Sl(t,l,n)):(G&&a&&Cc(l),l.flags|=1,mt(t,l,e,n),l.child)}function ns(t,l,e,a,n,i){return se(l),l.updateQueue=null,e=ko(l,a,e,n),Jo(t),a=Gc(),t!==null&&!ut?(Xc(t,l,i),Sl(t,l,i)):(G&&a&&Cc(l),l.flags|=1,mt(t,l,e,i),l.child)}function is(t,l,e,a,n){if(se(l),l.stateNode===null){var i=Ce,u=e.contextType;typeof u=="object"&&u!==null&&(i=vt(u)),i=new e(a,i),l.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fu,l.stateNode=i,i._reactInternals=l,i=l.stateNode,i.props=a,i.state=l.memoizedState,i.refs={},qc(l),u=e.contextType,i.context=typeof u=="object"&&u!==null?vt(u):Ce,i.state=l.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(tu(l,e,u,a),i.state=l.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Fu.enqueueReplaceState(i,i.state,null),ja(l,a,i,n),za(),i.state=l.memoizedState),typeof i.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(t===null){i=l.stateNode;var c=l.memoizedProps,s=de(e,c);i.props=s;var r=i.context,y=e.contextType;u=Ce,typeof y=="object"&&y!==null&&(u=vt(y));var v=e.getDerivedStateFromProps;y=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||r!==u)&&If(l,i,a,u),El=!1;var d=l.memoizedState;i.state=d,ja(l,a,i,n),za(),r=l.memoizedState,c||d!==r||El?(typeof v=="function"&&(tu(l,e,v,a),r=l.memoizedState),(s=El||Wf(l,e,s,a,d,r,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(l.flags|=4194308)):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=r),i.props=a,i.state=r,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{i=l.stateNode,Zu(t,l),u=l.memoizedProps,y=de(e,u),i.props=y,v=l.pendingProps,d=i.context,r=e.contextType,s=Ce,typeof r=="object"&&r!==null&&(s=vt(r)),c=e.getDerivedStateFromProps,(r=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||d!==s)&&If(l,i,a,s),El=!1,d=l.memoizedState,i.state=d,ja(l,a,i,n),za();var g=l.memoizedState;u!==v||d!==g||El||t!==null&&t.dependencies!==null&&$n(t.dependencies)?(typeof c=="function"&&(tu(l,e,c,a),g=l.memoizedState),(y=El||Wf(l,e,y,a,d,g,s)||t!==null&&t.dependencies!==null&&$n(t.dependencies))?(r||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,g,s)),typeof i.componentDidUpdate=="function"&&(l.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=g),i.props=a,i.state=g,i.context=s,a=y):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(l.flags|=1024),a=!1)}return i=a,Bn(t,l),a=(l.flags&128)!==0,i||a?(i=l.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:i.render(),l.flags|=1,t!==null&&a?(l.child=oe(l,t.child,null,n),l.child=oe(l,null,e,n)):mt(t,l,e,n),l.memoizedState=i.state,t=l.child):t=Sl(t,l,n),t}function us(t,l,e,a){return fe(),l.flags|=256,mt(t,l,e,a),l.child}var lu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eu(t){return{baseLanes:t,cachePool:Xo()}}function au(t,l,e){return t=t!==null?t.childLanes&~e:0,l&&(t|=Ct),t}function Ur(t,l,e){var a=l.pendingProps,n=!1,i=(l.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(lt.current&2)!==0),u&&(n=!0,l.flags&=-129),u=(l.flags&32)!==0,l.flags&=-33,t===null){if(G){if(n?Dl(l):Ol(),(t=F)?(t=jd(t,Vt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:Ll!==null?{id:Pt,overflow:tl}:null,retryLane:536870912,hydrationErrors:null},e=Bo(t),e.return=l,l.child=e,gt=l,F=null)):t=null,t===null)throw Kl(l);return rc(t)?l.lanes=32:l.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(Ol(),n=l.mode,c=ai({mode:"hidden",children:c},n),a=ne(a,n,e,null),c.return=l,a.return=l,c.sibling=a,l.child=c,a=l.child,a.memoizedState=eu(e),a.childLanes=au(t,u,e),l.memoizedState=lu,ga(null,a)):(Dl(l),Iu(l,c))}var s=t.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)l.flags&256?(Dl(l),l.flags&=-257,l=nu(t,l,e)):l.memoizedState!==null?(Ol(),l.child=t.child,l.flags|=128,l=null):(Ol(),c=a.fallback,n=l.mode,a=ai({mode:"visible",children:a.children},n),c=ne(c,n,e,null),c.flags|=2,a.return=l,c.return=l,a.sibling=c,l.child=a,oe(l,t.child,null,e),a=l.child,a.memoizedState=eu(e),a.childLanes=au(t,u,e),l.memoizedState=lu,l=ga(null,a));else if(Dl(l),rc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var r=u.dgst;u=r,a=Error(p(419)),a.stack="",a.digest=u,qa({value:a,source:null,stack:null}),l=nu(t,l,e)}else if(ut||ta(t,l,e,!1),u=(e&t.childLanes)!==0,ut||u){if(u=K,u!==null&&(a=co(u,e),a!==0&&a!==s.retryLane))throw s.retryLane=a,ve(t,a),jt(u,t,a),$c;oc(c)||ci(),l=nu(t,l,e)}else oc(c)?(l.flags|=192,l.child=t.child,l=null):(t=s.treeContext,F=Kt(c.nextSibling),gt=l,G=!0,Yl=null,Vt=!1,t!==null&&Qo(l,t),l=Iu(l,a.children),l.flags|=4096);return l}return n?(Ol(),c=a.fallback,n=l.mode,s=t.child,r=s.sibling,a=gl(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,r!==null?c=gl(r,c):(c=ne(c,n,e,null),c.flags|=2),c.return=l,a.return=l,a.sibling=c,l.child=a,ga(null,a),a=l.child,c=t.child.memoizedState,c===null?c=eu(e):(n=c.cachePool,n!==null?(s=it._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Xo(),c={baseLanes:c.baseLanes|e,cachePool:n}),a.memoizedState=c,a.childLanes=au(t,u,e),l.memoizedState=lu,ga(t.child,a)):(Dl(l),e=t.child,t=e.sibling,e=gl(e,{mode:"visible",children:a.children}),e.return=l,e.sibling=null,t!==null&&(u=l.deletions,u===null?(l.deletions=[t],l.flags|=16):u.push(t)),l.child=e,l.memoizedState=null,e)}function Iu(t,l){return l=ai({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function ai(t,l){return t=Ot(22,t,null,l),t.lanes=0,t}function nu(t,l,e){return oe(l,t.child,null,e),t=Iu(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function cs(t,l,e){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l),Gu(t.return,l,e)}function iu(t,l,e,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:n,treeForkCount:i}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=e,u.tailMode=n,u.treeForkCount=i)}function _r(t,l,e){var a=l.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=lt.current,c=(u&2)!==0;if(c?(u=u&1|2,l.flags|=128):u&=1,J(lt,u),mt(t,l,a,e),a=G?Ha:0,!c&&t!==null&&t.flags&128)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cs(t,e,l);else if(t.tag===19)cs(t,e,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(e=l.child,n=null;e!==null;)t=e.alternate,t!==null&&Pn(t)===null&&(n=e),e=e.sibling;e=n,e===null?(n=l.child,l.child=null):(n=e.sibling,e.sibling=null),iu(l,!1,n,e,i,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=l.child,l.child=null;n!==null;){if(t=n.alternate,t!==null&&Pn(t)===null){l.child=n;break}t=n.sibling,n.sibling=e,e=n,n=t}iu(l,!0,e,null,i,a);break;case"together":iu(l,!1,null,null,void 0,a);break;default:l.memoizedState=null}return l.child}function Sl(t,l,e){if(t!==null&&(l.dependencies=t.dependencies),kl|=l.lanes,!(e&l.childLanes))if(t!==null){if(ta(t,l,e,!1),(e&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(p(153));if(l.child!==null){for(t=l.child,e=gl(t,t.pendingProps),l.child=e,e.return=l;t.sibling!==null;)t=t.sibling,e=e.sibling=gl(t,t.pendingProps),e.return=l;e.sibling=null}return l.child}function Wc(t,l){return t.lanes&l?!0:(t=t.dependencies,!!(t!==null&&$n(t)))}function E0(t,l,e){switch(l.tag){case 3:wn(l,l.stateNode.containerInfo),Ml(l,it,t.memoizedState.cache),fe();break;case 27:case 5:Eu(l);break;case 4:wn(l,l.stateNode.containerInfo);break;case 10:Ml(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,Lu(l),null;break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(Dl(l),l.flags|=128,null):e&l.child.childLanes?Ur(t,l,e):(Dl(l),t=Sl(t,l,e),t!==null?t.sibling:null);Dl(l);break;case 19:var n=(t.flags&128)!==0;if(a=(e&l.childLanes)!==0,a||(ta(t,l,e,!1),a=(e&l.childLanes)!==0),n){if(a)return _r(t,l,e);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),J(lt,lt.current),a)break;return null;case 22:return l.lanes=0,Nr(t,l,e,l.pendingProps);case 24:Ml(l,it,t.memoizedState.cache)}return Sl(t,l,e)}function Hr(t,l,e){if(t!==null)if(t.memoizedProps!==l.pendingProps)ut=!0;else{if(!Wc(t,e)&&!(l.flags&128))return ut=!1,E0(t,l,e);ut=!!(t.flags&131072)}else ut=!1,G&&l.flags&1048576&&Yo(l,Ha,l.index);switch(l.lanes=0,l.tag){case 16:t:{var a=l.pendingProps;if(t=le(l.elementType),l.type=t,typeof t=="function")Oc(t)?(a=de(t,a),l.tag=1,l=is(null,l,t,a,e)):(l.tag=0,l=Wu(null,l,t,a,e));else{if(t!=null){var n=t.$$typeof;if(n===gc){l.tag=11,l=ts(null,l,t,a,e);break t}else if(n===vc){l.tag=14,l=ls(null,l,t,a,e);break t}}throw l=Tu(t)||t,Error(p(306,l,""))}}return l;case 0:return Wu(t,l,l.type,l.pendingProps,e);case 1:return a=l.type,n=de(a,l.pendingProps),is(t,l,a,n,e);case 3:t:{if(wn(l,l.stateNode.containerInfo),t===null)throw Error(p(387));a=l.pendingProps;var i=l.memoizedState;n=i.element,Zu(t,l),ja(l,a,null,e);var u=l.memoizedState;if(a=u.cache,Ml(l,it,a),a!==i.cache&&Xu(l,[it],e,!0),za(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},l.updateQueue.baseState=i,l.memoizedState=i,l.flags&256){l=us(t,l,a,e);break t}else if(a!==n){n=wt(Error(p(424)),l),qa(n),l=us(t,l,a,e);break t}else{switch(t=l.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(F=Kt(t.firstChild),gt=l,G=!0,Yl=null,Vt=!0,e=wo(l,null,a,e),l.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(fe(),a===n){l=Sl(t,l,e);break t}mt(t,l,a,e)}l=l.child}return l;case 26:return Bn(t,l),t===null?(e=Ms(l.type,null,l.pendingProps,null))?l.memoizedState=e:G||(e=l.type,t=l.pendingProps,a=ri(Bl.current).createElement(e),a[ht]=l,a[Tt]=t,yt(a,e,t),rt(a),l.stateNode=a):l.memoizedState=Ms(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return Eu(l),t===null&&G&&(a=l.stateNode=Td(l.type,l.pendingProps,Bl.current),gt=l,Vt=!0,n=F,$l(l.type)?(dc=n,F=Kt(a.firstChild)):F=n),mt(t,l,l.pendingProps.children,e),Bn(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&G&&((n=a=F)&&(a=eh(a,l.type,l.pendingProps,Vt),a!==null?(l.stateNode=a,gt=l,F=Kt(a.firstChild),Vt=!1,n=!0):n=!1),n||Kl(l)),Eu(l),n=l.type,i=l.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,fc(n,i)?a=null:u!==null&&fc(n,u)&&(l.flags|=32),l.memoizedState!==null&&(n=Qc(t,l,y0,null,null,e),Ra._currentValue=n),Bn(t,l),mt(t,l,a,e),l.child;case 6:return t===null&&G&&((t=e=F)&&(e=ah(e,l.pendingProps,Vt),e!==null?(l.stateNode=e,gt=l,F=null,t=!0):t=!1),t||Kl(l)),null;case 13:return Ur(t,l,e);case 4:return wn(l,l.stateNode.containerInfo),a=l.pendingProps,t===null?l.child=oe(l,null,a,e):mt(t,l,a,e),l.child;case 11:return ts(t,l,l.type,l.pendingProps,e);case 7:return mt(t,l,l.pendingProps,e),l.child;case 8:return mt(t,l,l.pendingProps.children,e),l.child;case 12:return mt(t,l,l.pendingProps.children,e),l.child;case 10:return a=l.pendingProps,Ml(l,l.type,a.value),mt(t,l,a.children,e),l.child;case 9:return n=l.type._context,a=l.pendingProps.children,se(l),n=vt(n),a=a(n),l.flags|=1,mt(t,l,a,e),l.child;case 14:return ls(t,l,l.type,l.pendingProps,e);case 15:return Cr(t,l,l.type,l.pendingProps,e);case 19:return _r(t,l,e);case 31:return A0(t,l,e);case 22:return Nr(t,l,e,l.pendingProps);case 24:return se(l),a=vt(it),t===null?(n=_c(),n===null&&(n=K,i=Uc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=e),n=i),l.memoizedState={parent:a,cache:n},qc(l),Ml(l,it,n)):(t.lanes&e&&(Zu(t,l),ja(l,null,null,e),za()),n=t.memoizedState,i=l.memoizedState,n.parent!==a?(n={parent:a,cache:a},l.memoizedState=n,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=n),Ml(l,it,a)):(a=i.cache,Ml(l,it,a),a!==n.cache&&Xu(l,[it],e,!0))),mt(t,l,l.pendingProps.children,e),l.child;case 29:throw l.pendingProps}throw Error(p(156,l.tag))}function ul(t){t.flags|=4}function uu(t,l,e,a,n){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(nd())t.flags|=8192;else throw ue=Wn,Hc}else t.flags&=-16777217}function fs(t,l){if(l.type!=="stylesheet"||l.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Md(l))if(nd())t.flags|=8192;else throw ue=Wn,Hc}function yn(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?no():536870912,t.lanes|=l,Je|=l)}function sa(t,l){if(!G)switch(t.tailMode){case"hidden":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function k(t){var l=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(l)for(var n=t.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=e,l}function M0(t,l,e){var a=l.pendingProps;switch(Nc(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return k(l),null;case 1:return k(l),null;case 3:return e=l.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),vl(it),Re(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(be(l)?ul(l):t===null||t.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,Wi())),k(l),null;case 26:var n=l.type,i=l.memoizedState;return t===null?(ul(l),i!==null?(k(l),fs(l,i)):(k(l),uu(l,n,null,a,e))):i?i!==t.memoizedState?(ul(l),k(l),fs(l,i)):(k(l),l.flags&=-16777217):(t=t.memoizedProps,t!==a&&ul(l),k(l),uu(l,n,t,a,e)),null;case 27:if(Vn(l),e=Bl.current,n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&ul(l);else{if(!a){if(l.stateNode===null)throw Error(p(166));return k(l),null}t=el.current,be(l)?Yf(l):(t=Td(n,a,e),l.stateNode=t,ul(l))}return k(l),null;case 5:if(Vn(l),n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&ul(l);else{if(!a){if(l.stateNode===null)throw Error(p(166));return k(l),null}if(i=el.current,be(l))Yf(l);else{var u=ri(Bl.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[ht]=l,i[Tt]=a;t:for(u=l.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break t;for(;u.sibling===null;){if(u.return===null||u.return===l)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}l.stateNode=i;t:switch(yt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&ul(l)}}return k(l),uu(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,e),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==a&&ul(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(p(166));if(t=Bl.current,be(l)){if(t=l.stateNode,e=l.memoizedProps,a=null,n=gt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[ht]=l,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||xd(t.nodeValue,e)),t||Kl(l,!0)}else t=ri(t).createTextNode(a),t[ht]=l,l.stateNode=t}return k(l),null;case 31:if(e=l.memoizedState,t===null||t.memoizedState!==null){if(a=be(l),e!==null){if(t===null){if(!a)throw Error(p(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(557));t[ht]=l}else fe(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;k(l),t=!1}else e=Wi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return l.flags&256?(Dt(l),l):(Dt(l),null);if(l.flags&128)throw Error(p(558))}return k(l),null;case 13:if(a=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=be(l),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(p(318));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(p(317));n[ht]=l}else fe(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;k(l),n=!1}else n=Wi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return l.flags&256?(Dt(l),l):(Dt(l),null)}return Dt(l),l.flags&128?(l.lanes=e,l):(e=a!==null,t=t!==null&&t.memoizedState!==null,e&&(a=l.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),e!==t&&e&&(l.child.flags|=8192),yn(l,l.updateQueue),k(l),null);case 4:return Re(),t===null&&nf(l.stateNode.containerInfo),k(l),null;case 10:return vl(l.type),k(l),null;case 19:if(dt(lt),a=l.memoizedState,a===null)return k(l),null;if(n=(l.flags&128)!==0,i=a.rendering,i===null)if(n)sa(a,!1);else{if(P!==0||t!==null&&t.flags&128)for(t=l.child;t!==null;){if(i=Pn(t),i!==null){for(l.flags|=128,sa(a,!1),t=i.updateQueue,l.updateQueue=t,yn(l,t),l.subtreeFlags=0,t=e,e=l.child;e!==null;)qo(e,t),e=e.sibling;return J(lt,lt.current&1|2),G&&ol(l,a.treeForkCount),l.child}t=t.sibling}a.tail!==null&&Nt()>ii&&(l.flags|=128,n=!0,sa(a,!1),l.lanes=4194304)}else{if(!n)if(t=Pn(i),t!==null){if(l.flags|=128,n=!0,t=t.updateQueue,l.updateQueue=t,yn(l,t),sa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!G)return k(l),null}else 2*Nt()-a.renderingStartTime>ii&&e!==536870912&&(l.flags|=128,n=!0,sa(a,!1),l.lanes=4194304);a.isBackwards?(i.sibling=l.child,l.child=i):(t=a.last,t!==null?t.sibling=i:l.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Nt(),t.sibling=null,e=lt.current,J(lt,n?e&1|2:e&1),G&&ol(l,a.treeForkCount),t):(k(l),null);case 22:case 23:return Dt(l),Bc(),a=l.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?e&536870912&&!(l.flags&128)&&(k(l),l.subtreeFlags&6&&(l.flags|=8192)):k(l),e=l.updateQueue,e!==null&&yn(l,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==e&&(l.flags|=2048),t!==null&&dt(ie),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),vl(it),k(l),null;case 25:return null;case 30:return null}throw Error(p(156,l.tag))}function D0(t,l){switch(Nc(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return vl(it),Re(),t=l.flags,t&65536&&!(t&128)?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return Vn(l),null;case 31:if(l.memoizedState!==null){if(Dt(l),l.alternate===null)throw Error(p(340));fe()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(Dt(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(p(340));fe()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return dt(lt),null;case 4:return Re(),null;case 10:return vl(l.type),null;case 22:case 23:return Dt(l),Bc(),t!==null&&dt(ie),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return vl(it),null;case 25:return null;default:return null}}function qr(t,l){switch(Nc(l),l.tag){case 3:vl(it),Re();break;case 26:case 27:case 5:Vn(l);break;case 4:Re();break;case 31:l.memoizedState!==null&&Dt(l);break;case 13:Dt(l);break;case 19:dt(lt);break;case 10:vl(l.type);break;case 22:case 23:Dt(l),Bc(),t!==null&&dt(ie);break;case 24:vl(it)}}function Ia(t,l){try{var e=l.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var n=a.next;e=n;do{if((e.tag&t)===t){a=void 0;var i=e.create,u=e.inst;a=i(),u.destroy=a}e=e.next}while(e!==n)}}catch(c){w(l,l.return,c)}}function Jl(t,l,e){try{var a=l.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=l;var s=e,r=c;try{r()}catch(y){w(n,s,y)}}}a=a.next}while(a!==i)}}catch(y){w(l,l.return,y)}}function Br(t){var l=t.updateQueue;if(l!==null){var e=t.stateNode;try{Lo(l,e)}catch(a){w(t,t.return,a)}}}function Yr(t,l,e){e.props=de(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){w(t,l,a)}}function Aa(t,l){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(n){w(t,l,n)}}function ll(t,l){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(n){w(t,l,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){w(t,l,n)}else e.current=null}function Qr(t){var l=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(n){w(t,t.return,n)}}function cu(t,l,e){try{var a=t.stateNode;$0(a,t.type,e,l),a[Tt]=l}catch(n){w(t,t.return,n)}}function Gr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$l(t.type)||t.tag===4}function fu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$l(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pu(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,l):(l=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.appendChild(t),e=e._reactRootContainer,e!=null||l.onclick!==null||(l.onclick=ml));else if(a!==4&&(a===27&&$l(t.type)&&(e=t.stateNode,l=null),t=t.child,t!==null))for(Pu(t,l,e),t=t.sibling;t!==null;)Pu(t,l,e),t=t.sibling}function ni(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?e.insertBefore(t,l):e.appendChild(t);else if(a!==4&&(a===27&&$l(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(ni(t,l,e),t=t.sibling;t!==null;)ni(t,l,e),t=t.sibling}function Xr(t){var l=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,n=l.attributes;n.length;)l.removeAttributeNode(n[0]);yt(l,a,e),l[ht]=t,l[Tt]=e}catch(i){w(t,t.return,i)}}var rl=!1,nt=!1,su=!1,ss=typeof WeakSet=="function"?WeakSet:Set,ot=null;function O0(t,l){if(t=t.containerInfo,uc=gi,t=Mo(t),Ec(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var u=0,c=-1,s=-1,r=0,y=0,v=t,d=null;l:for(;;){for(var g;v!==e||n!==0&&v.nodeType!==3||(c=u+n),v!==i||a!==0&&v.nodeType!==3||(s=u+a),v.nodeType===3&&(u+=v.nodeValue.length),(g=v.firstChild)!==null;)d=v,v=g;for(;;){if(v===t)break l;if(d===e&&++r===n&&(c=u),d===i&&++y===a&&(s=u),(g=v.nextSibling)!==null)break;v=d,d=v.parentNode}v=g}e=c===-1||s===-1?null:{start:c,end:s}}else e=null}e=e||{start:0,end:0}}else e=null;for(cc={focusedElem:t,selectionRange:e},gi=!1,ot=l;ot!==null;)if(l=ot,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,ot=t;else for(;ot!==null;){switch(l=ot,i=l.alternate,t=l.flags,l.tag){case 0:if(t&4&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)n=t[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&i!==null){t=void 0,e=l,n=i.memoizedProps,i=i.memoizedState,a=e.stateNode;try{var S=de(e.type,n);t=a.getSnapshotBeforeUpdate(S,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(z){w(e,e.return,z)}}break;case 3:if(t&1024){if(t=l.stateNode.containerInfo,e=t.nodeType,e===9)sc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(p(163))}if(t=l.sibling,t!==null){t.return=l.return,ot=t;break}ot=l.return}}function Rr(t,l,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:fl(t,e),a&4&&Ia(5,e);break;case 1:if(fl(t,e),a&4)if(t=e.stateNode,l===null)try{t.componentDidMount()}catch(u){w(e,e.return,u)}else{var n=de(e.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(n,l,t.__reactInternalSnapshotBeforeUpdate)}catch(u){w(e,e.return,u)}}a&64&&Br(e),a&512&&Aa(e,e.return);break;case 3:if(fl(t,e),a&64&&(t=e.updateQueue,t!==null)){if(l=null,e.child!==null)switch(e.child.tag){case 27:case 5:l=e.child.stateNode;break;case 1:l=e.child.stateNode}try{Lo(t,l)}catch(u){w(e,e.return,u)}}break;case 27:l===null&&a&4&&Xr(e);case 26:case 5:fl(t,e),l===null&&a&4&&Qr(e),a&512&&Aa(e,e.return);break;case 12:fl(t,e);break;case 31:fl(t,e),a&4&&Vr(t,e);break;case 13:fl(t,e),a&4&&Lr(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=Q0.bind(null,e),nh(t,e))));break;case 22:if(a=e.memoizedState!==null||rl,!a){l=l!==null&&l.memoizedState!==null||nt,n=rl;var i=nt;rl=a,(nt=l)&&!i?sl(t,e,(e.subtreeFlags&8772)!==0):fl(t,e),rl=n,nt=i}break;case 30:break;default:fl(t,e)}}function Zr(t){var l=t.alternate;l!==null&&(t.alternate=null,Zr(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&xc(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var W=null,St=!1;function cl(t,l,e){for(e=e.child;e!==null;)wr(t,l,e),e=e.sibling}function wr(t,l,e){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(La,e)}catch{}switch(e.tag){case 26:nt||ll(e,l),cl(t,l,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:nt||ll(e,l);var a=W,n=St;$l(e.type)&&(W=e.stateNode,St=!1),cl(t,l,e),Oa(e.stateNode),W=a,St=n;break;case 5:nt||ll(e,l);case 6:if(a=W,n=St,W=null,cl(t,l,e),W=a,St=n,W!==null)if(St)try{(W.nodeType===9?W.body:W.nodeName==="HTML"?W.ownerDocument.body:W).removeChild(e.stateNode)}catch(i){w(e,l,i)}else try{W.removeChild(e.stateNode)}catch(i){w(e,l,i)}break;case 18:W!==null&&(St?(t=W,zs(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),We(t)):zs(W,e.stateNode));break;case 4:a=W,n=St,W=e.stateNode.containerInfo,St=!0,cl(t,l,e),W=a,St=n;break;case 0:case 11:case 14:case 15:Jl(2,e,l),nt||Jl(4,e,l),cl(t,l,e);break;case 1:nt||(ll(e,l),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Yr(e,l,a)),cl(t,l,e);break;case 21:cl(t,l,e);break;case 22:nt=(a=nt)||e.memoizedState!==null,cl(t,l,e),nt=a;break;default:cl(t,l,e)}}function Vr(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{We(t)}catch(e){w(l,l.return,e)}}}function Lr(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{We(t)}catch(e){w(l,l.return,e)}}function C0(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new ss),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new ss),l;default:throw Error(p(435,t.tag))}}function bn(t,l){var e=C0(t);l.forEach(function(a){if(!e.has(a)){e.add(a);var n=G0.bind(null,t,a);a.then(n,n)}})}function pt(t,l){var e=l.deletions;if(e!==null)for(var a=0;a<e.length;a++){var n=e[a],i=t,u=l,c=u;t:for(;c!==null;){switch(c.tag){case 27:if($l(c.type)){W=c.stateNode,St=!1;break t}break;case 5:W=c.stateNode,St=!1;break t;case 3:case 4:W=c.stateNode.containerInfo,St=!0;break t}c=c.return}if(W===null)throw Error(p(160));wr(i,u,n),W=null,St=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)Kr(l,t),l=l.sibling}var Ft=null;function Kr(t,l){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pt(l,t),xt(t),a&4&&(Jl(3,t,t.return),Ia(3,t),Jl(5,t,t.return));break;case 1:pt(l,t),xt(t),a&512&&(nt||e===null||ll(e,e.return)),a&64&&rl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var n=Ft;if(pt(l,t),xt(t),a&512&&(nt||e===null||ll(e,e.return)),a&4){var i=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,n=n.ownerDocument||n;l:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[ka]||i[ht]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),yt(i,a,e),i[ht]=t,rt(i),a=i;break t;case"link":var u=Os("link","href",n).get(a+(e.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(c,1);break l}}i=n.createElement(a),yt(i,a,e),n.head.appendChild(i);break;case"meta":if(u=Os("meta","content",n).get(a+(e.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(c,1);break l}}i=n.createElement(a),yt(i,a,e),n.head.appendChild(i);break;default:throw Error(p(468,a))}i[ht]=t,rt(i),a=i}t.stateNode=a}else Cs(n,t.type,t.stateNode);else t.stateNode=Ds(n,a,t.memoizedProps);else i!==a?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,a===null?Cs(n,t.type,t.stateNode):Ds(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&cu(t,t.memoizedProps,e.memoizedProps)}break;case 27:pt(l,t),xt(t),a&512&&(nt||e===null||ll(e,e.return)),e!==null&&a&4&&cu(t,t.memoizedProps,e.memoizedProps);break;case 5:if(pt(l,t),xt(t),a&512&&(nt||e===null||ll(e,e.return)),t.flags&32){n=t.stateNode;try{we(n,"")}catch(S){w(t,t.return,S)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,cu(t,n,e!==null?e.memoizedProps:n)),a&1024&&(su=!0);break;case 6:if(pt(l,t),xt(t),a&4){if(t.stateNode===null)throw Error(p(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(S){w(t,t.return,S)}}break;case 3:if(Gn=null,n=Ft,Ft=di(l.containerInfo),pt(l,t),Ft=n,xt(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{We(l.containerInfo)}catch(S){w(t,t.return,S)}su&&(su=!1,Jr(t));break;case 4:a=Ft,Ft=di(t.stateNode.containerInfo),pt(l,t),xt(t),Ft=a;break;case 12:pt(l,t),xt(t);break;case 31:pt(l,t),xt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bn(t,a)));break;case 13:pt(l,t),xt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Ci=Nt()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bn(t,a)));break;case 22:n=t.memoizedState!==null;var s=e!==null&&e.memoizedState!==null,r=rl,y=nt;if(rl=r||n,nt=y||s,pt(l,t),nt=y,rl=r,xt(t),a&8192)t:for(l=t.stateNode,l._visibility=n?l._visibility&-2:l._visibility|1,n&&(e===null||s||rl||nt||ee(t)),e=null,l=t;;){if(l.tag===5||l.tag===26){if(e===null){s=e=l;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var v=s.memoizedProps.style,d=v!=null&&v.hasOwnProperty("display")?v.display:null;c.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(S){w(s,s.return,S)}}}else if(l.tag===6){if(e===null){s=l;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(S){w(s,s.return,S)}}}else if(l.tag===18){if(e===null){s=l;try{var g=s.stateNode;n?js(g,!0):js(s.stateNode,!1)}catch(S){w(s,s.return,S)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;e===l&&(e=null),l=l.return}e===l&&(e=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,bn(t,e))));break;case 19:pt(l,t),xt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bn(t,a)));break;case 30:break;case 21:break;default:pt(l,t),xt(t)}}function xt(t){var l=t.flags;if(l&2){try{for(var e,a=t.return;a!==null;){if(Gr(a)){e=a;break}a=a.return}if(e==null)throw Error(p(160));switch(e.tag){case 27:var n=e.stateNode,i=fu(t);ni(t,i,n);break;case 5:var u=e.stateNode;e.flags&32&&(we(u,""),e.flags&=-33);var c=fu(t);ni(t,c,u);break;case 3:case 4:var s=e.stateNode.containerInfo,r=fu(t);Pu(t,r,s);break;default:throw Error(p(161))}}catch(y){w(t,t.return,y)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function Jr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;Jr(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function fl(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)Rr(t,l.alternate,l),l=l.sibling}function ee(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:Jl(4,l,l.return),ee(l);break;case 1:ll(l,l.return);var e=l.stateNode;typeof e.componentWillUnmount=="function"&&Yr(l,l.return,e),ee(l);break;case 27:Oa(l.stateNode);case 26:case 5:ll(l,l.return),ee(l);break;case 22:l.memoizedState===null&&ee(l);break;case 30:ee(l);break;default:ee(l)}t=t.sibling}}function sl(t,l,e){for(e=e&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,n=t,i=l,u=i.flags;switch(i.tag){case 0:case 11:case 15:sl(n,i,e),Ia(4,i);break;case 1:if(sl(n,i,e),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(r){w(a,a.return,r)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Vo(s[n],c)}catch(r){w(a,a.return,r)}}e&&u&64&&Br(i),Aa(i,i.return);break;case 27:Xr(i);case 26:case 5:sl(n,i,e),e&&a===null&&u&4&&Qr(i),Aa(i,i.return);break;case 12:sl(n,i,e);break;case 31:sl(n,i,e),e&&u&4&&Vr(n,i);break;case 13:sl(n,i,e),e&&u&4&&Lr(n,i);break;case 22:i.memoizedState===null&&sl(n,i,e),Aa(i,i.return);break;case 30:break;default:sl(n,i,e)}l=l.sibling}}function Ic(t,l){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&$a(e))}function Pc(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&$a(t))}function kt(t,l,e,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)kr(t,l,e,a),l=l.sibling}function kr(t,l,e,a){var n=l.flags;switch(l.tag){case 0:case 11:case 15:kt(t,l,e,a),n&2048&&Ia(9,l);break;case 1:kt(t,l,e,a);break;case 3:kt(t,l,e,a),n&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&$a(t)));break;case 12:if(n&2048){kt(t,l,e,a),t=l.stateNode;try{var i=l.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){w(l,l.return,s)}}else kt(t,l,e,a);break;case 31:kt(t,l,e,a);break;case 13:kt(t,l,e,a);break;case 23:break;case 22:i=l.stateNode,u=l.alternate,l.memoizedState!==null?i._visibility&2?kt(t,l,e,a):Ea(t,l):i._visibility&2?kt(t,l,e,a):(i._visibility|=2,xe(t,l,e,a,(l.subtreeFlags&10256)!==0||!1)),n&2048&&Ic(u,l);break;case 24:kt(t,l,e,a),n&2048&&Pc(l.alternate,l);break;default:kt(t,l,e,a)}}function xe(t,l,e,a,n){for(n=n&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var i=t,u=l,c=e,s=a,r=u.flags;switch(u.tag){case 0:case 11:case 15:xe(i,u,c,s,n),Ia(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?xe(i,u,c,s,n):Ea(i,u):(y._visibility|=2,xe(i,u,c,s,n)),n&&r&2048&&Ic(u.alternate,u);break;case 24:xe(i,u,c,s,n),n&&r&2048&&Pc(u.alternate,u);break;default:xe(i,u,c,s,n)}l=l.sibling}}function Ea(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var e=t,a=l,n=a.flags;switch(a.tag){case 22:Ea(e,a),n&2048&&Ic(a.alternate,a);break;case 24:Ea(e,a),n&2048&&Pc(a.alternate,a);break;default:Ea(e,a)}l=l.sibling}}var va=8192;function pe(t,l,e){if(t.subtreeFlags&va)for(t=t.child;t!==null;)Fr(t,l,e),t=t.sibling}function Fr(t,l,e){switch(t.tag){case 26:pe(t,l,e),t.flags&va&&t.memoizedState!==null&&vh(e,Ft,t.memoizedState,t.memoizedProps);break;case 5:pe(t,l,e);break;case 3:case 4:var a=Ft;Ft=di(t.stateNode.containerInfo),pe(t,l,e),Ft=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=va,va=16777216,pe(t,l,e),va=a):pe(t,l,e));break;default:pe(t,l,e)}}function $r(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function oa(t){var l=t.deletions;if(t.flags&16){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];ot=a,Ir(a,t)}$r(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wr(t),t=t.sibling}function Wr(t){switch(t.tag){case 0:case 11:case 15:oa(t),t.flags&2048&&Jl(9,t,t.return);break;case 3:oa(t);break;case 12:oa(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,Yn(t)):oa(t);break;default:oa(t)}}function Yn(t){var l=t.deletions;if(t.flags&16){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];ot=a,Ir(a,t)}$r(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:Jl(8,l,l.return),Yn(l);break;case 22:e=l.stateNode,e._visibility&2&&(e._visibility&=-3,Yn(l));break;default:Yn(l)}t=t.sibling}}function Ir(t,l){for(;ot!==null;){var e=ot;switch(e.tag){case 0:case 11:case 15:Jl(8,e,l);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:$a(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,ot=a;else t:for(e=t;ot!==null;){a=ot;var n=a.sibling,i=a.return;if(Zr(a),a===e){ot=null;break t}if(n!==null){n.return=i,ot=n;break t}ot=i}}}var N0={getCacheForType:function(t){var l=vt(it),e=l.data.get(t);return e===void 0&&(e=t(),l.data.set(t,e)),e},cacheSignal:function(){return vt(it).controller.signal}},U0=typeof WeakMap=="function"?WeakMap:Map,X=0,K=null,B=null,Y=0,Z=0,Mt=null,_l=!1,ea=!1,tf=!1,zl=0,P=0,kl=0,ce=0,lf=0,Ct=0,Je=0,Ma=null,zt=null,tc=!1,Ci=0,Pr=0,ii=1/0,ui=null,Xl=null,ct=0,Rl=null,ke=null,yl=0,lc=0,ec=null,td=null,Da=0,ac=null;function Ht(){return X&2&&Y!==0?Y&-Y:M.T!==null?af():fo()}function ld(){if(Ct===0)if(!(Y&536870912)||G){var t=on;on<<=1,!(on&3932160)&&(on=262144),Ct=t}else Ct=536870912;return t=Bt.current,t!==null&&(t.flags|=32),Ct}function jt(t,l,e){(t===K&&(Z===2||Z===9)||t.cancelPendingCommit!==null)&&(Fe(t,0),Hl(t,Y,Ct,!1)),Ja(t,e),(!(X&2)||t!==K)&&(t===K&&(!(X&2)&&(ce|=e),P===4&&Hl(t,Y,Ct,!1)),nl(t))}function ed(t,l,e){if(X&6)throw Error(p(327));var a=!e&&(l&127)===0&&(l&t.expiredLanes)===0||Ka(t,l),n=a?q0(t,l):ou(t,l,!0),i=a;do{if(n===0){ea&&!a&&Hl(t,l,0,!1);break}else{if(e=t.current.alternate,i&&!_0(e)){n=ou(t,l,!1),i=!1;continue}if(n===2){if(i=l,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){l=u;t:{var c=t;n=Ma;var s=c.current.memoizedState.isDehydrated;if(s&&(Fe(c,u).flags|=256),u=ou(c,u,!1),u!==2){if(tf&&!s){c.errorRecoveryDisabledLanes|=i,ce|=i,n=4;break t}i=zt,zt=n,i!==null&&(zt===null?zt=i:zt.push.apply(zt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Fe(t,0),Hl(t,l,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(p(345));case 4:if((l&4194048)!==l)break;case 6:Hl(a,l,Ct,!_l);break t;case 2:zt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((l&62914560)===l&&(n=Ci+300-Nt(),10<n)){if(Hl(a,l,Ct,!_l),pi(a,0,!0)!==0)break t;yl=l,a.timeoutHandle=zd(os.bind(null,a,e,zt,ui,tc,l,Ct,ce,Je,_l,i,"Throttled",-0,0),n);break t}os(a,e,zt,ui,tc,l,Ct,ce,Je,_l,i,null,-0,0)}}break}while(!0);nl(t)}function os(t,l,e,a,n,i,u,c,s,r,y,v,d,g){if(t.timeoutHandle=-1,v=l.subtreeFlags,v&8192||(v&16785408)===16785408){v={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ml},Fr(l,i,v);var S=(i&62914560)===i?Ci-Nt():(i&4194048)===i?Pr-Nt():0;if(S=yh(v,S),S!==null){yl=i,t.cancelPendingCommit=S(ds.bind(null,t,l,i,e,a,n,u,c,s,y,v,null,d,g)),Hl(t,i,u,!r);return}}ds(t,l,i,e,a,n,u,c,s)}function _0(t){for(var l=t;;){var e=l.tag;if((e===0||e===11||e===15)&&l.flags&16384&&(e=l.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var n=e[a],i=n.getSnapshot;n=n.value;try{if(!qt(i(),n))return!1}catch{return!1}}if(e=l.child,l.subtreeFlags&16384&&e!==null)e.return=l,l=e;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Hl(t,l,e,a){l&=~lf,l&=~ce,t.suspendedLanes|=l,t.pingedLanes&=~l,a&&(t.warmLanes|=l),a=t.expirationTimes;for(var n=l;0<n;){var i=31-_t(n),u=1<<i;a[i]=-1,n&=~u}e!==0&&io(t,e,l)}function Ni(){return X&6?!0:(Pa(0),!1)}function ef(){if(B!==null){if(Z===0)var t=B.return;else t=B,hl=ye=null,Rc(t),Qe=null,Ba=0,t=B;for(;t!==null;)qr(t.alternate,t),t=t.return;B=null}}function Fe(t,l){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,P0(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),yl=0,ef(),K=t,B=e=gl(t.current,null),Y=l,Z=0,Mt=null,_l=!1,ea=Ka(t,l),tf=!1,Je=Ct=lf=ce=kl=P=0,zt=Ma=null,tc=!1,l&8&&(l|=l&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=l;0<a;){var n=31-_t(a),i=1<<n;l|=t[n],a&=~i}return zl=l,ji(),e}function ad(t,l){O=null,M.H=Qa,l===la||l===Ai?(l=Zf(),Z=3):l===Hc?(l=Zf(),Z=4):Z=l===$c?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,Mt=l,B===null&&(P=1,ei(t,wt(l,t.current)))}function nd(){var t=Bt.current;return t===null?!0:(Y&4194048)===Y?Lt===null:(Y&62914560)===Y||Y&536870912?t===Lt:!1}function id(){var t=M.H;return M.H=Qa,t===null?Qa:t}function ud(){var t=M.A;return M.A=N0,t}function ci(){P=4,_l||(Y&4194048)!==Y&&Bt.current!==null||(ea=!0),!(kl&134217727)&&!(ce&134217727)||K===null||Hl(K,Y,Ct,!1)}function ou(t,l,e){var a=X;X|=2;var n=id(),i=ud();(K!==t||Y!==l)&&(ui=null,Fe(t,l)),l=!1;var u=P;t:do try{if(Z!==0&&B!==null){var c=B,s=Mt;switch(Z){case 8:ef(),u=6;break t;case 3:case 2:case 9:case 6:Bt.current===null&&(l=!0);var r=Z;if(Z=0,Mt=null,_e(t,c,s,r),e&&ea){u=0;break t}break;default:r=Z,Z=0,Mt=null,_e(t,c,s,r)}}H0(),u=P;break}catch(y){ad(t,y)}while(!0);return l&&t.shellSuspendCounter++,hl=ye=null,X=a,M.H=n,M.A=i,B===null&&(K=null,Y=0,ji()),u}function H0(){for(;B!==null;)cd(B)}function q0(t,l){var e=X;X|=2;var a=id(),n=ud();K!==t||Y!==l?(ui=null,ii=Nt()+500,Fe(t,l)):ea=Ka(t,l);t:do try{if(Z!==0&&B!==null){l=B;var i=Mt;l:switch(Z){case 1:Z=0,Mt=null,_e(t,l,i,1);break;case 2:case 9:if(Rf(i)){Z=0,Mt=null,rs(l);break}l=function(){Z!==2&&Z!==9||K!==t||(Z=7),nl(t)},i.then(l,l);break t;case 3:Z=7;break t;case 4:Z=5;break t;case 7:Rf(i)?(Z=0,Mt=null,rs(l)):(Z=0,Mt=null,_e(t,l,i,7));break;case 5:var u=null;switch(B.tag){case 26:u=B.memoizedState;case 5:case 27:var c=B;if(u?Md(u):c.stateNode.complete){Z=0,Mt=null;var s=c.sibling;if(s!==null)B=s;else{var r=c.return;r!==null?(B=r,Ui(r)):B=null}break l}}Z=0,Mt=null,_e(t,l,i,5);break;case 6:Z=0,Mt=null,_e(t,l,i,6);break;case 8:ef(),P=6;break t;default:throw Error(p(462))}}B0();break}catch(y){ad(t,y)}while(!0);return hl=ye=null,M.H=a,M.A=n,X=e,B!==null?0:(K=null,Y=0,ji(),P)}function B0(){for(;B!==null&&!im();)cd(B)}function cd(t){var l=Hr(t.alternate,t,zl);t.memoizedProps=t.pendingProps,l===null?Ui(t):B=l}function rs(t){var l=t,e=l.alternate;switch(l.tag){case 15:case 0:l=ns(e,l,l.pendingProps,l.type,void 0,Y);break;case 11:l=ns(e,l,l.pendingProps,l.type.render,l.ref,Y);break;case 5:Rc(l);default:qr(e,l),l=B=qo(l,zl),l=Hr(e,l,zl)}t.memoizedProps=t.pendingProps,l===null?Ui(t):B=l}function _e(t,l,e,a){hl=ye=null,Rc(l),Qe=null,Ba=0;var n=l.return;try{if(T0(t,n,l,e,Y)){P=1,ei(t,wt(e,t.current)),B=null;return}}catch(i){if(n!==null)throw B=n,i;P=1,ei(t,wt(e,t.current)),B=null;return}l.flags&32768?(G||a===1?t=!0:ea||Y&536870912?t=!1:(_l=t=!0,(a===2||a===9||a===3||a===6)&&(a=Bt.current,a!==null&&a.tag===13&&(a.flags|=16384))),fd(l,t)):Ui(l)}function Ui(t){var l=t;do{if(l.flags&32768){fd(l,_l);return}t=l.return;var e=M0(l.alternate,l,zl);if(e!==null){B=e;return}if(l=l.sibling,l!==null){B=l;return}B=l=t}while(l!==null);P===0&&(P=5)}function fd(t,l){do{var e=D0(t.alternate,t);if(e!==null){e.flags&=32767,B=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!l&&(t=t.sibling,t!==null)){B=t;return}B=t=e}while(t!==null);P=6,B=null}function ds(t,l,e,a,n,i,u,c,s){t.cancelPendingCommit=null;do _i();while(ct!==0);if(X&6)throw Error(p(327));if(l!==null){if(l===t.current)throw Error(p(177));if(i=l.lanes|l.childLanes,i|=Mc,gm(t,e,i,u,c,s),t===K&&(B=K=null,Y=0),ke=l,Rl=t,yl=e,lc=i,ec=n,td=a,l.subtreeFlags&10256||l.flags&10256?(t.callbackNode=null,t.callbackPriority=0,X0(Ln,function(){return md(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(l.flags&13878)!==0,l.subtreeFlags&13878||a){a=M.T,M.T=null,n=R.p,R.p=2,u=X,X|=4;try{O0(t,l,e)}finally{X=u,R.p=n,M.T=a}}ct=1,sd(),od(),rd()}}function sd(){if(ct===1){ct=0;var t=Rl,l=ke,e=(l.flags&13878)!==0;if(l.subtreeFlags&13878||e){e=M.T,M.T=null;var a=R.p;R.p=2;var n=X;X|=4;try{Kr(l,t);var i=cc,u=Mo(t.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Eo(c.ownerDocument.documentElement,c)){if(s!==null&&Ec(c)){var r=s.start,y=s.end;if(y===void 0&&(y=r),"selectionStart"in c)c.selectionStart=r,c.selectionEnd=Math.min(y,c.value.length);else{var v=c.ownerDocument||document,d=v&&v.defaultView||window;if(d.getSelection){var g=d.getSelection(),S=c.textContent.length,z=Math.min(s.start,S),E=s.end===void 0?z:Math.min(s.end,S);!g.extend&&z>E&&(u=E,E=z,z=u);var m=Hf(c,z),o=Hf(c,E);if(m&&o&&(g.rangeCount!==1||g.anchorNode!==m.node||g.anchorOffset!==m.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)){var h=v.createRange();h.setStart(m.node,m.offset),g.removeAllRanges(),z>E?(g.addRange(h),g.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),g.addRange(h))}}}}for(v=[],g=c;g=g.parentNode;)g.nodeType===1&&v.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<v.length;c++){var b=v[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gi=!!uc,cc=uc=null}finally{X=n,R.p=a,M.T=e}}t.current=l,ct=2}}function od(){if(ct===2){ct=0;var t=Rl,l=ke,e=(l.flags&8772)!==0;if(l.subtreeFlags&8772||e){e=M.T,M.T=null;var a=R.p;R.p=2;var n=X;X|=4;try{Rr(t,l.alternate,l)}finally{X=n,R.p=a,M.T=e}}ct=3}}function rd(){if(ct===4||ct===3){ct=0,um();var t=Rl,l=ke,e=yl,a=td;l.subtreeFlags&10256||l.flags&10256?ct=5:(ct=0,ke=Rl=null,dd(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Xl=null),pc(e),l=l.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(La,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=M.T,n=R.p,R.p=2,M.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{M.T=l,R.p=n}}yl&3&&_i(),nl(t),n=t.pendingLanes,e&261930&&n&42?t===ac?Da++:(Da=0,ac=t):Da=0,Pa(0)}}function dd(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,$a(l)))}function _i(){return sd(),od(),rd(),md()}function md(){if(ct!==5)return!1;var t=Rl,l=lc;lc=0;var e=pc(yl),a=M.T,n=R.p;try{R.p=32>e?32:e,M.T=null,e=ec,ec=null;var i=Rl,u=yl;if(ct=0,ke=Rl=null,yl=0,X&6)throw Error(p(331));var c=X;if(X|=4,Wr(i.current),kr(i,i.current,u,e),X=c,Pa(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(La,i)}catch{}return!0}finally{R.p=n,M.T=a,dd(t,l)}}function ms(t,l,e){l=wt(e,l),l=$u(t.stateNode,l,2),t=Gl(t,l,2),t!==null&&(Ja(t,2),nl(t))}function w(t,l,e){if(t.tag===3)ms(t,t,e);else for(;l!==null;){if(l.tag===3){ms(l,t,e);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xl===null||!Xl.has(a))){t=wt(e,t),e=Dr(2),a=Gl(l,e,2),a!==null&&(Or(e,a,l,t),Ja(a,2),nl(a));break}}l=l.return}}function ru(t,l,e){var a=t.pingCache;if(a===null){a=t.pingCache=new U0;var n=new Set;a.set(l,n)}else n=a.get(l),n===void 0&&(n=new Set,a.set(l,n));n.has(e)||(tf=!0,n.add(e),t=Y0.bind(null,t,l,e),l.then(t,t))}function Y0(t,l,e){var a=t.pingCache;a!==null&&a.delete(l),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,K===t&&(Y&e)===e&&(P===4||P===3&&(Y&62914560)===Y&&300>Nt()-Ci?!(X&2)&&Fe(t,0):lf|=e,Je===Y&&(Je=0)),nl(t)}function hd(t,l){l===0&&(l=no()),t=ve(t,l),t!==null&&(Ja(t,l),nl(t))}function Q0(t){var l=t.memoizedState,e=0;l!==null&&(e=l.retryLane),hd(t,e)}function G0(t,l){var e=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(e=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(p(314))}a!==null&&a.delete(l),hd(t,e)}function X0(t,l){return yc(t,l)}var fi=null,Se=null,nc=!1,si=!1,du=!1,ql=0;function nl(t){t!==Se&&t.next===null&&(Se===null?fi=Se=t:Se=Se.next=t),si=!0,nc||(nc=!0,Z0())}function Pa(t,l){if(!du&&si){du=!0;do for(var e=!1,a=fi;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-_t(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,hs(a,i))}else i=Y,i=pi(a,a===K?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(i&3)||Ka(a,i)||(e=!0,hs(a,i));a=a.next}while(e);du=!1}}function R0(){gd()}function gd(){si=nc=!1;var t=0;ql!==0&&I0()&&(t=ql);for(var l=Nt(),e=null,a=fi;a!==null;){var n=a.next,i=vd(a,l);i===0?(a.next=null,e===null?fi=n:e.next=n,n===null&&(Se=e)):(e=a,(t!==0||i&3)&&(si=!0)),a=n}ct!==0&&ct!==5||Pa(t),ql!==0&&(ql=0)}function vd(t,l){for(var e=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-_t(i),c=1<<u,s=n[u];s===-1?(!(c&e)||c&a)&&(n[u]=hm(c,l)):s<=l&&(t.expiredLanes|=c),i&=~c}if(l=K,e=Y,e=pi(t,t===l?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===l&&(Z===2||Z===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Xi(a),t.callbackNode=null,t.callbackPriority=0;if(!(e&3)||Ka(t,e)){if(l=e&-e,l===t.callbackPriority)return l;switch(a!==null&&Xi(a),pc(e)){case 2:case 8:e=eo;break;case 32:e=Ln;break;case 268435456:e=ao;break;default:e=Ln}return a=yd.bind(null,t),e=yc(e,a),t.callbackPriority=l,t.callbackNode=e,l}return a!==null&&a!==null&&Xi(a),t.callbackPriority=2,t.callbackNode=null,2}function yd(t,l){if(ct!==0&&ct!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(_i()&&t.callbackNode!==e)return null;var a=Y;return a=pi(t,t===K?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(ed(t,a,l),vd(t,Nt()),t.callbackNode!=null&&t.callbackNode===e?yd.bind(null,t):null)}function hs(t,l){if(_i())return null;ed(t,l,!0)}function Z0(){th(function(){X&6?yc(lo,R0):gd()})}function af(){if(ql===0){var t=Ve;t===0&&(t=sn,sn<<=1,!(sn&261888)&&(sn=256)),ql=t}return ql}function gs(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Dn(""+t)}function vs(t,l){var e=l.ownerDocument.createElement("input");return e.name=l.name,e.value=l.value,t.id&&e.setAttribute("form",t.id),l.parentNode.insertBefore(e,l),t=new FormData(t),e.parentNode.removeChild(e),t}function w0(t,l,e,a,n){if(l==="submit"&&e&&e.stateNode===n){var i=gs((n[Tt]||null).action),u=a.submitter;u&&(l=(l=u[Tt]||null)?gs(l.formAction):u.getAttribute("formAction"),l!==null&&(i=l,u=null));var c=new xi("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ql!==0){var s=u?vs(n,u):new FormData(n);ku(e,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?vs(n,u):new FormData(n),ku(e,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var mu=0;mu<Bu.length;mu++){var hu=Bu[mu],V0=hu.toLowerCase(),L0=hu[0].toUpperCase()+hu.slice(1);Wt(V0,"on"+L0)}Wt(Oo,"onAnimationEnd");Wt(Co,"onAnimationIteration");Wt(No,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(c0,"onTransitionRun");Wt(f0,"onTransitionStart");Wt(s0,"onTransitionCancel");Wt(Uo,"onTransitionEnd");Ze("onMouseEnter",["mouseout","mouseover"]);Ze("onMouseLeave",["mouseout","mouseover"]);Ze("onPointerEnter",["pointerout","pointerover"]);Ze("onPointerLeave",["pointerout","pointerover"]);me("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));me("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));me("onBeforeInput",["compositionend","keypress","textInput","paste"]);me("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));me("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));me("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ga));function bd(t,l){l=(l&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],n=a.event;a=a.listeners;t:{var i=void 0;if(l)for(var u=a.length-1;0<=u;u--){var c=a[u],s=c.instance,r=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=r;try{i(n)}catch(y){Jn(y)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(c=a[u],s=c.instance,r=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=r;try{i(n)}catch(y){Jn(y)}n.currentTarget=null,i=s}}}}function q(t,l){var e=l[Du];e===void 0&&(e=l[Du]=new Set);var a=t+"__bubble";e.has(a)||(pd(l,t,2,!1),e.add(a))}function gu(t,l,e){var a=0;l&&(a|=4),pd(e,t,a,l)}var pn="_reactListening"+Math.random().toString(36).slice(2);function nf(t){if(!t[pn]){t[pn]=!0,so.forEach(function(e){e!=="selectionchange"&&(K0.has(e)||gu(e,!1,t),gu(e,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[pn]||(l[pn]=!0,gu("selectionchange",!1,l))}}function pd(t,l,e,a){switch(Ud(l)){case 2:var n=xh;break;case 8:n=Sh;break;default:n=sf}e=n.bind(null,l,e,t),n=void 0,!_u||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(l,e,{capture:!0,passive:n}):t.addEventListener(l,e,!0):n!==void 0?t.addEventListener(l,e,{passive:n}):t.addEventListener(l,e,!1)}function vu(t,l,e,a,n){var i=a;if(!(l&1)&&!(l&2)&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Te(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue t}c=c.parentNode}}a=a.return}bo(function(){var r=i,y=zc(e),v=[];t:{var d=_o.get(t);if(d!==void 0){var g=xi,S=t;switch(t){case"keypress":if(Cn(e)===0)break t;case"keydown":case"keyup":g=Gm;break;case"focusin":S="focus",g=Li;break;case"focusout":S="blur",g=Li;break;case"beforeblur":case"afterblur":g=Li;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Zm;break;case Oo:case Co:case No:g=Cm;break;case Uo:g=Vm;break;case"scroll":case"scrollend":g=Am;break;case"wheel":g=Km;break;case"copy":case"cut":case"paste":g=Um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ef;break;case"toggle":case"beforetoggle":g=km}var z=(l&4)!==0,E=!z&&(t==="scroll"||t==="scrollend"),m=z?d!==null?d+"Capture":null:d;z=[];for(var o=r,h;o!==null;){var b=o;if(h=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||h===null||m===null||(b=Na(o,m),b!=null&&z.push(Xa(o,b,h))),E)break;o=o.return}0<z.length&&(d=new g(d,S,null,e,y),v.push({event:d,listeners:z}))}}if(!(l&7)){t:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&e!==Uu&&(S=e.relatedTarget||e.fromElement)&&(Te(S)||S[Ie]))break t;if((g||d)&&(d=y.window===y?y:(d=y.ownerDocument)?d.defaultView||d.parentWindow:window,g?(S=e.relatedTarget||e.toElement,g=r,S=S?Te(S):null,S!==null&&(E=Va(S),z=S.tag,S!==E||z!==5&&z!==27&&z!==6)&&(S=null)):(g=null,S=r),g!==S)){if(z=Tf,b="onMouseLeave",m="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(z=Ef,b="onPointerLeave",m="onPointerEnter",o="pointer"),E=g==null?d:ha(g),h=S==null?d:ha(S),d=new z(b,o+"leave",g,e,y),d.target=E,d.relatedTarget=h,b=null,Te(y)===r&&(z=new z(m,o+"enter",S,e,y),z.target=h,z.relatedTarget=E,b=z),E=b,g&&S)l:{for(z=J0,m=g,o=S,h=0,b=m;b;b=z(b))h++;b=0;for(var A=o;A;A=z(A))b++;for(;0<h-b;)m=z(m),h--;for(;0<b-h;)o=z(o),b--;for(;h--;){if(m===o||o!==null&&m===o.alternate){z=m;break l}m=z(m),o=z(o)}z=null}else z=null;g!==null&&ys(v,d,g,z,!1),S!==null&&E!==null&&ys(v,E,S,z,!0)}}t:{if(d=r?ha(r):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var N=Cf;else if(Of(d))if(To)N=n0;else{N=e0;var j=l0}else g=d.nodeName,!g||g.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?r&&Sc(r.elementType)&&(N=Cf):N=a0;if(N&&(N=N(t,r))){jo(v,N,e,y);break t}j&&j(t,d,r),t==="focusout"&&r&&d.type==="number"&&r.memoizedProps.value!=null&&Nu(d,"number",d.value)}switch(j=r?ha(r):window,t){case"focusin":(Of(j)||j.contentEditable==="true")&&(Me=j,Hu=r,pa=null);break;case"focusout":pa=Hu=Me=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,qf(v,e,y);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":qf(v,e,y)}var D;if(Ac)t:{switch(t){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else Ee?So(t,e)&&(U="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(U="onCompositionStart");U&&(xo&&e.locale!=="ko"&&(Ee||U!=="onCompositionStart"?U==="onCompositionEnd"&&Ee&&(D=po()):(Ul=y,jc="value"in Ul?Ul.value:Ul.textContent,Ee=!0)),j=oi(r,U),0<j.length&&(U=new Af(U,t,null,e,y),v.push({event:U,listeners:j}),D?U.data=D:(D=zo(e),D!==null&&(U.data=D)))),(D=$m?Wm(t,e):Im(t,e))&&(U=oi(r,"onBeforeInput"),0<U.length&&(j=new Af("onBeforeInput","beforeinput",null,e,y),v.push({event:j,listeners:U}),j.data=D)),w0(v,t,r,e,y)}bd(v,l)})}function Xa(t,l,e){return{instance:t,listener:l,currentTarget:e}}function oi(t,l){for(var e=l+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Na(t,e),n!=null&&a.unshift(Xa(t,n,i)),n=Na(t,l),n!=null&&a.push(Xa(t,n,i))),t.tag===3)return a;t=t.return}return[]}function J0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ys(t,l,e,a,n){for(var i=l._reactName,u=[];e!==null&&e!==a;){var c=e,s=c.alternate,r=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||r===null||(s=r,n?(r=Na(e,i),r!=null&&u.unshift(Xa(e,r,s))):n||(r=Na(e,i),r!=null&&u.push(Xa(e,r,s)))),e=e.return}u.length!==0&&t.push({event:l,listeners:u})}var k0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function bs(t){return(typeof t=="string"?t:""+t).replace(k0,`
`).replace(F0,"")}function xd(t,l){return l=bs(l),bs(t)===l}function V(t,l,e,a,n,i){switch(e){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||we(t,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&we(t,""+a);break;case"className":dn(t,"class",a);break;case"tabIndex":dn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":dn(t,e,a);break;case"style":yo(t,a,i);break;case"data":if(l!=="object"){dn(t,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Dn(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(l!=="input"&&V(t,l,"name",n.name,n,null),V(t,l,"formEncType",n.formEncType,n,null),V(t,l,"formMethod",n.formMethod,n,null),V(t,l,"formTarget",n.formTarget,n,null)):(V(t,l,"encType",n.encType,n,null),V(t,l,"method",n.method,n,null),V(t,l,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Dn(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=ml);break;case"onScroll":a!=null&&q("scroll",t);break;case"onScrollEnd":a!=null&&q("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(p(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=Dn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":q("beforetoggle",t),q("toggle",t),Mn(t,"popover",a);break;case"xlinkActuate":il(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":il(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":il(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":il(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":il(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":il(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":il(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":il(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":il(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=jm.get(e)||e,Mn(t,e,a))}}function ic(t,l,e,a,n,i){switch(e){case"style":yo(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(p(60));t.innerHTML=e}}break;case"children":typeof a=="string"?we(t,a):(typeof a=="number"||typeof a=="bigint")&&we(t,""+a);break;case"onScroll":a!=null&&q("scroll",t);break;case"onScrollEnd":a!=null&&q("scrollend",t);break;case"onClick":a!=null&&(t.onclick=ml);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oo.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),l=e.slice(2,n?e.length-7:void 0),i=t[Tt]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(l,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(l,a,n);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):Mn(t,e,a)}}}function yt(t,l,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",t),q("load",t);var a=!1,n=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,l));default:V(t,l,i,u,e,null)}}n&&V(t,l,"srcSet",e.srcSet,e,null),a&&V(t,l,"src",e.src,e,null);return;case"input":q("invalid",t);var c=i=u=n=null,s=null,r=null;for(a in e)if(e.hasOwnProperty(a)){var y=e[a];if(y!=null)switch(a){case"name":n=y;break;case"type":u=y;break;case"checked":s=y;break;case"defaultChecked":r=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,l));break;default:V(t,l,a,y,e,null)}}ho(t,i,c,s,r,u,n,!1);return;case"select":q("invalid",t),a=u=i=null;for(n in e)if(e.hasOwnProperty(n)&&(c=e[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:V(t,l,n,c,e,null)}l=i,e=u,t.multiple=!!a,l!=null?qe(t,!!a,l,!1):e!=null&&qe(t,!!a,e,!0);return;case"textarea":q("invalid",t),i=n=a=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(p(91));break;default:V(t,l,u,c,e,null)}vo(t,a,n,i);return;case"option":for(s in e)if(e.hasOwnProperty(s)&&(a=e[s],a!=null))switch(s){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:V(t,l,s,a,e,null)}return;case"dialog":q("beforetoggle",t),q("toggle",t),q("cancel",t),q("close",t);break;case"iframe":case"object":q("load",t);break;case"video":case"audio":for(a=0;a<Ga.length;a++)q(Ga[a],t);break;case"image":q("error",t),q("load",t);break;case"details":q("toggle",t);break;case"embed":case"source":case"link":q("error",t),q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in e)if(e.hasOwnProperty(r)&&(a=e[r],a!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,l));default:V(t,l,r,a,e,null)}return;default:if(Sc(l)){for(y in e)e.hasOwnProperty(y)&&(a=e[y],a!==void 0&&ic(t,l,y,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&V(t,l,c,a,e,null))}function $0(t,l,e,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,r=null,y=null;for(g in e){var v=e[g];if(e.hasOwnProperty(g)&&v!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":s=v;default:a.hasOwnProperty(g)||V(t,l,g,null,a,v)}}for(var d in a){var g=a[d];if(v=e[d],a.hasOwnProperty(d)&&(g!=null||v!=null))switch(d){case"type":i=g;break;case"name":n=g;break;case"checked":r=g;break;case"defaultChecked":y=g;break;case"value":u=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(p(137,l));break;default:g!==v&&V(t,l,d,g,a,v)}}Cu(t,u,c,s,r,y,i,n);return;case"select":g=u=c=d=null;for(i in e)if(s=e[i],e.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":g=s;default:a.hasOwnProperty(i)||V(t,l,i,null,a,s)}for(n in a)if(i=a[n],s=e[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":d=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&V(t,l,n,i,a,s)}l=c,e=u,a=g,d!=null?qe(t,!!e,d,!1):!!a!=!!e&&(l!=null?qe(t,!!e,l,!0):qe(t,!!e,e?[]:"",!1));return;case"textarea":g=d=null;for(c in e)if(n=e[c],e.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:V(t,l,c,null,a,n)}for(u in a)if(n=a[u],i=e[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":d=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(p(91));break;default:n!==i&&V(t,l,u,n,a,i)}go(t,d,g);return;case"option":for(var S in e)if(d=e[S],e.hasOwnProperty(S)&&d!=null&&!a.hasOwnProperty(S))switch(S){case"selected":t.selected=!1;break;default:V(t,l,S,null,a,d)}for(s in a)if(d=a[s],g=e[s],a.hasOwnProperty(s)&&d!==g&&(d!=null||g!=null))switch(s){case"selected":t.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:V(t,l,s,d,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var z in e)d=e[z],e.hasOwnProperty(z)&&d!=null&&!a.hasOwnProperty(z)&&V(t,l,z,null,a,d);for(r in a)if(d=a[r],g=e[r],a.hasOwnProperty(r)&&d!==g&&(d!=null||g!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(p(137,l));break;default:V(t,l,r,d,a,g)}return;default:if(Sc(l)){for(var E in e)d=e[E],e.hasOwnProperty(E)&&d!==void 0&&!a.hasOwnProperty(E)&&ic(t,l,E,void 0,a,d);for(y in a)d=a[y],g=e[y],!a.hasOwnProperty(y)||d===g||d===void 0&&g===void 0||ic(t,l,y,d,a,g);return}}for(var m in e)d=e[m],e.hasOwnProperty(m)&&d!=null&&!a.hasOwnProperty(m)&&V(t,l,m,null,a,d);for(v in a)d=a[v],g=e[v],!a.hasOwnProperty(v)||d===g||d==null&&g==null||V(t,l,v,d,a,g)}function ps(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function W0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var n=e[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&ps(u)){for(u=0,c=n.responseEnd,a+=1;a<e.length;a++){var s=e[a],r=s.startTime;if(r>c)break;var y=s.transferSize,v=s.initiatorType;y&&ps(v)&&(s=s.responseEnd,u+=y*(s<c?1:(c-r)/(s-r)))}if(--a,l+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var uc=null,cc=null;function ri(t){return t.nodeType===9?t:t.ownerDocument}function xs(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sd(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function fc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var yu=null;function I0(){var t=window.event;return t&&t.type==="popstate"?t===yu?!1:(yu=t,!0):(yu=null,!1)}var zd=typeof setTimeout=="function"?setTimeout:void 0,P0=typeof clearTimeout=="function"?clearTimeout:void 0,Ss=typeof Promise=="function"?Promise:void 0,th=typeof queueMicrotask=="function"?queueMicrotask:typeof Ss<"u"?function(t){return Ss.resolve(null).then(t).catch(lh)}:zd;function lh(t){setTimeout(function(){throw t})}function $l(t){return t==="head"}function zs(t,l){var e=l,a=0;do{var n=e.nextSibling;if(t.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(a===0){t.removeChild(n),We(l);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")Oa(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,Oa(e);for(var i=e.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[ka]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=u}}else e==="body"&&Oa(t.ownerDocument.body);e=n}while(e);We(l)}function js(t,l){var e=t;t=0;do{var a=e.nextSibling;if(e.nodeType===1?l?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(l?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=a}while(e)}function sc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var e=l;switch(l=l.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":sc(e),xc(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function eh(t,l,e,a){for(;t.nodeType===1;){var n=e;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[ka])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Kt(t.nextSibling),t===null)break}return null}function ah(t,l,e){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Kt(t.nextSibling),t===null))return null;return t}function jd(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Kt(t.nextSibling),t===null))return null;return t}function oc(t){return t.data==="$?"||t.data==="$~"}function rc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function nh(t,l){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||e.readyState!=="loading")l();else{var a=function(){l(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Kt(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var dc=null;function Ts(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(l===0)return Kt(t.nextSibling);l--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||l++}t=t.nextSibling}return null}function As(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(l===0)return t;l--}else e!=="/$"&&e!=="/&"||l++}t=t.previousSibling}return null}function Td(t,l,e){switch(l=ri(e),t){case"html":if(t=l.documentElement,!t)throw Error(p(452));return t;case"head":if(t=l.head,!t)throw Error(p(453));return t;case"body":if(t=l.body,!t)throw Error(p(454));return t;default:throw Error(p(451))}}function Oa(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);xc(t)}var Jt=new Map,Es=new Set;function di(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var jl=R.d;R.d={f:ih,r:uh,D:ch,C:fh,L:sh,m:oh,X:dh,S:rh,M:mh};function ih(){var t=jl.f(),l=Ni();return t||l}function uh(t){var l=Pe(t);l!==null&&l.tag===5&&l.type==="form"?yr(l):jl.r(t)}var aa=typeof document>"u"?null:document;function Ad(t,l,e){var a=aa;if(a&&typeof l=="string"&&l){var n=Zt(l);n='link[rel="'+t+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),Es.has(n)||(Es.add(n),t={rel:t,crossOrigin:e,href:l},a.querySelector(n)===null&&(l=a.createElement("link"),yt(l,"link",t),rt(l),a.head.appendChild(l)))}}function ch(t){jl.D(t),Ad("dns-prefetch",t,null)}function fh(t,l){jl.C(t,l),Ad("preconnect",t,l)}function sh(t,l,e){jl.L(t,l,e);var a=aa;if(a&&t&&l){var n='link[rel="preload"][as="'+Zt(l)+'"]';l==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+Zt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+Zt(e.imageSizes)+'"]')):n+='[href="'+Zt(t)+'"]';var i=n;switch(l){case"style":i=$e(t);break;case"script":i=na(t)}Jt.has(i)||(t=$({rel:"preload",href:l==="image"&&e&&e.imageSrcSet?void 0:t,as:l},e),Jt.set(i,t),a.querySelector(n)!==null||l==="style"&&a.querySelector(tn(i))||l==="script"&&a.querySelector(ln(i))||(l=a.createElement("link"),yt(l,"link",t),rt(l),a.head.appendChild(l)))}}function oh(t,l){jl.m(t,l);var e=aa;if(e&&t){var a=l&&typeof l.as=="string"?l.as:"script",n='link[rel="modulepreload"][as="'+Zt(a)+'"][href="'+Zt(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=na(t)}if(!Jt.has(i)&&(t=$({rel:"modulepreload",href:t},l),Jt.set(i,t),e.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(ln(i)))return}a=e.createElement("link"),yt(a,"link",t),rt(a),e.head.appendChild(a)}}}function rh(t,l,e){jl.S(t,l,e);var a=aa;if(a&&t){var n=He(a).hoistableStyles,i=$e(t);l=l||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(tn(i)))c.loading=5;else{t=$({rel:"stylesheet",href:t,"data-precedence":l},e),(e=Jt.get(i))&&uf(t,e);var s=u=a.createElement("link");rt(s),yt(s,"link",t),s._p=new Promise(function(r,y){s.onload=r,s.onerror=y}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Qn(u,l,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function dh(t,l){jl.X(t,l);var e=aa;if(e&&t){var a=He(e).hoistableScripts,n=na(t),i=a.get(n);i||(i=e.querySelector(ln(n)),i||(t=$({src:t,async:!0},l),(l=Jt.get(n))&&cf(t,l),i=e.createElement("script"),rt(i),yt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function mh(t,l){jl.M(t,l);var e=aa;if(e&&t){var a=He(e).hoistableScripts,n=na(t),i=a.get(n);i||(i=e.querySelector(ln(n)),i||(t=$({src:t,async:!0,type:"module"},l),(l=Jt.get(n))&&cf(t,l),i=e.createElement("script"),rt(i),yt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Ms(t,l,e,a){var n=(n=Bl.current)?di(n):null;if(!n)throw Error(p(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(l=$e(e.href),e=He(n).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=$e(e.href);var i=He(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(tn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Jt.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Jt.set(t,e),i||hh(n,t,e,u.state))),l&&a===null)throw Error(p(528,""));return u}if(l&&a!==null)throw Error(p(529,""));return null;case"script":return l=e.async,e=e.src,typeof e=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=na(e),e=He(n).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,t))}}function $e(t){return'href="'+Zt(t)+'"'}function tn(t){return'link[rel="stylesheet"]['+t+"]"}function Ed(t){return $({},t,{"data-precedence":t.precedence,precedence:null})}function hh(t,l,e,a){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=t.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),yt(l,"link",e),rt(l),t.head.appendChild(l))}function na(t){return'[src="'+Zt(t)+'"]'}function ln(t){return"script[async]"+t}function Ds(t,l,e){if(l.count++,l.instance===null)switch(l.type){case"style":var a=t.querySelector('style[data-href~="'+Zt(e.href)+'"]');if(a)return l.instance=a,rt(a),a;var n=$({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),rt(a),yt(a,"style",n),Qn(a,e.precedence,t),l.instance=a;case"stylesheet":n=$e(e.href);var i=t.querySelector(tn(n));if(i)return l.state.loading|=4,l.instance=i,rt(i),i;a=Ed(e),(n=Jt.get(n))&&uf(a,n),i=(t.ownerDocument||t).createElement("link"),rt(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),yt(i,"link",a),l.state.loading|=4,Qn(i,e.precedence,t),l.instance=i;case"script":return i=na(e.src),(n=t.querySelector(ln(i)))?(l.instance=n,rt(n),n):(a=e,(n=Jt.get(i))&&(a=$({},e),cf(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),rt(n),yt(n,"link",a),t.head.appendChild(n),l.instance=n);case"void":return null;default:throw Error(p(443,l.type))}else l.type==="stylesheet"&&!(l.state.loading&4)&&(a=l.instance,l.state.loading|=4,Qn(a,e.precedence,t));return l.instance}function Qn(t,l,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===l)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(l=e.nodeType===9?e.head:e,l.insertBefore(t,l.firstChild))}function uf(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function cf(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var Gn=null;function Os(t,l,e){if(Gn===null){var a=new Map,n=Gn=new Map;n.set(e,a)}else n=Gn,a=n.get(e),a||(a=new Map,n.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),n=0;n<e.length;n++){var i=e[n];if(!(i[ka]||i[ht]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(l)||"";u=t+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function Cs(t,l,e){t=t.ownerDocument||t,t.head.insertBefore(e,l==="title"?t.querySelector("head > title"):null)}function gh(t,l,e){if(e===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return t=l.disabled,typeof l.precedence=="string"&&t==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function Md(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function vh(t,l,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var n=$e(a.href),i=l.querySelector(tn(n));if(i){l=i._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=mi.bind(t),l.then(t,t)),e.state.loading|=4,e.instance=i,rt(i);return}i=l.ownerDocument||l,a=Ed(a),(n=Jt.get(n))&&uf(a,n),i=i.createElement("link"),rt(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),yt(i,"link",a),e.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,l),(l=e.state.preload)&&!(e.state.loading&3)&&(t.count++,e=mi.bind(t),l.addEventListener("load",e),l.addEventListener("error",e))}}var bu=0;function yh(t,l){return t.stylesheets&&t.count===0&&Xn(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var a=setTimeout(function(){if(t.stylesheets&&Xn(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+l);0<t.imgBytes&&bu===0&&(bu=62500*W0());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xn(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>bu?50:800)+l);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function mi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xn(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hi=null;function Xn(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hi=new Map,l.forEach(bh,t),hi=null,mi.call(t))}function bh(t,l){if(!(l.state.loading&4)){var e=hi.get(t);if(e)var a=e.get(null);else{e=new Map,hi.set(t,e);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),a=u)}a&&e.set(null,a)}n=l.instance,u=n.getAttribute("data-precedence"),i=e.get(u)||a,i===a&&e.set(null,n),e.set(u,n),this.count++,a=mi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),l.state.loading|=4}}var Ra={$$typeof:dl,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function ph(t,l,e,a,n,i,u,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ri(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.hiddenUpdates=Ri(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Dd(t,l,e,a,n,i,u,c,s,r,y,v){return t=new ph(t,l,e,u,s,r,y,v,c),l=1,i===!0&&(l|=24),i=Ot(3,null,null,l),t.current=i,i.stateNode=t,l=Uc(),l.refCount++,t.pooledCache=l,l.refCount++,i.memoizedState={element:a,isDehydrated:e,cache:l},qc(i),t}function Od(t){return t?(t=Ce,t):Ce}function Cd(t,l,e,a,n,i){n=Od(n),a.context===null?a.context=n:a.pendingContext=n,a=Ql(l),a.payload={element:e},i=i===void 0?null:i,i!==null&&(a.callback=i),e=Gl(t,a,l),e!==null&&(jt(e,t,l),Sa(e,t,l))}function Ns(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<l?e:l}}function ff(t,l){Ns(t,l),(t=t.alternate)&&Ns(t,l)}function Nd(t){if(t.tag===13||t.tag===31){var l=ve(t,67108864);l!==null&&jt(l,t,67108864),ff(t,67108864)}}function Us(t){if(t.tag===13||t.tag===31){var l=Ht();l=bc(l);var e=ve(t,l);e!==null&&jt(e,t,l),ff(t,l)}}var gi=!0;function xh(t,l,e,a){var n=M.T;M.T=null;var i=R.p;try{R.p=2,sf(t,l,e,a)}finally{R.p=i,M.T=n}}function Sh(t,l,e,a){var n=M.T;M.T=null;var i=R.p;try{R.p=8,sf(t,l,e,a)}finally{R.p=i,M.T=n}}function sf(t,l,e,a){if(gi){var n=mc(a);if(n===null)vu(t,l,a,vi,e),_s(t,a);else if(jh(n,t,l,e,a))a.stopPropagation();else if(_s(t,a),l&4&&-1<zh.indexOf(t)){for(;n!==null;){var i=Pe(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=te(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-_t(u);c.entanglements[1]|=s,u&=~s}nl(i),!(X&6)&&(ii=Nt()+500,Pa(0))}}break;case 31:case 13:c=ve(i,2),c!==null&&jt(c,i,2),Ni(),ff(i,2)}if(i=mc(a),i===null&&vu(t,l,a,vi,e),i===n)break;n=i}n!==null&&a.stopPropagation()}else vu(t,l,a,null,e)}}function mc(t){return t=zc(t),of(t)}var vi=null;function of(t){if(vi=null,t=Te(t),t!==null){var l=Va(t);if(l===null)t=null;else{var e=l.tag;if(e===13){if(t=$s(l),t!==null)return t;t=null}else if(e===31){if(t=Ws(l),t!==null)return t;t=null}else if(e===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return vi=t,null}function Ud(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cm()){case lo:return 2;case eo:return 8;case Ln:case fm:return 32;case ao:return 268435456;default:return 32}default:return 32}}var hc=!1,Zl=null,wl=null,Vl=null,Za=new Map,wa=new Map,Cl=[],zh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _s(t,l){switch(t){case"focusin":case"focusout":Zl=null;break;case"dragenter":case"dragleave":wl=null;break;case"mouseover":case"mouseout":Vl=null;break;case"pointerover":case"pointerout":Za.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(l.pointerId)}}function ra(t,l,e,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:l,domEventName:e,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},l!==null&&(l=Pe(l),l!==null&&Nd(l)),t):(t.eventSystemFlags|=a,l=t.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),t)}function jh(t,l,e,a,n){switch(l){case"focusin":return Zl=ra(Zl,t,l,e,a,n),!0;case"dragenter":return wl=ra(wl,t,l,e,a,n),!0;case"mouseover":return Vl=ra(Vl,t,l,e,a,n),!0;case"pointerover":var i=n.pointerId;return Za.set(i,ra(Za.get(i)||null,t,l,e,a,n)),!0;case"gotpointercapture":return i=n.pointerId,wa.set(i,ra(wa.get(i)||null,t,l,e,a,n)),!0}return!1}function _d(t){var l=Te(t.target);if(l!==null){var e=Va(l);if(e!==null){if(l=e.tag,l===13){if(l=$s(e),l!==null){t.blockedOn=l,yf(t.priority,function(){Us(e)});return}}else if(l===31){if(l=Ws(e),l!==null){t.blockedOn=l,yf(t.priority,function(){Us(e)});return}}else if(l===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rn(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var e=mc(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);Uu=a,e.target.dispatchEvent(a),Uu=null}else return l=Pe(e),l!==null&&Nd(l),t.blockedOn=e,!1;l.shift()}return!0}function Hs(t,l,e){Rn(t)&&e.delete(l)}function Th(){hc=!1,Zl!==null&&Rn(Zl)&&(Zl=null),wl!==null&&Rn(wl)&&(wl=null),Vl!==null&&Rn(Vl)&&(Vl=null),Za.forEach(Hs),wa.forEach(Hs)}function xn(t,l){t.blockedOn===l&&(t.blockedOn=null,hc||(hc=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,Th)))}var Sn=null;function qs(t){Sn!==t&&(Sn=t,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,function(){Sn===t&&(Sn=null);for(var l=0;l<t.length;l+=3){var e=t[l],a=t[l+1],n=t[l+2];if(typeof a!="function"){if(of(a||e)===null)continue;break}var i=Pe(e);i!==null&&(t.splice(l,3),l-=3,ku(i,{pending:!0,data:n,method:e.method,action:a},a,n))}}))}function We(t){function l(s){return xn(s,t)}Zl!==null&&xn(Zl,t),wl!==null&&xn(wl,t),Vl!==null&&xn(Vl,t),Za.forEach(l),wa.forEach(l);for(var e=0;e<Cl.length;e++){var a=Cl[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Cl.length&&(e=Cl[0],e.blockedOn===null);)_d(e),e.blockedOn===null&&Cl.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var n=e[a],i=e[a+1],u=n[Tt]||null;if(typeof i=="function")u||qs(e);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Tt]||null)c=u.formAction;else if(of(n)!==null)continue}else c=u.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),qs(e)}}}function Hd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function l(){n!==null&&(n(),n=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),n!==null&&(n(),n=null)}}}function rf(t){this._internalRoot=t}Hi.prototype.render=rf.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(p(409));var e=l.current,a=Ht();Cd(e,a,t,l,null,null)};Hi.prototype.unmount=rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;Cd(t.current,2,null,t,null,null),Ni(),l[Ie]=null}};function Hi(t){this._internalRoot=t}Hi.prototype.unstable_scheduleHydration=function(t){if(t){var l=fo();t={blockedOn:null,target:t,priority:l};for(var e=0;e<Cl.length&&l!==0&&l<Cl[e].priority;e++);Cl.splice(e,0,t),e===0&&_d(t)}};var Bs=ks.version;if(Bs!=="19.2.0")throw Error(p(527,Bs,"19.2.0"));R.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=tm(l),t=t!==null?Is(t):null,t=t===null?null:t.stateNode,t};var Ah={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zn.isDisabled&&zn.supportsFiber)try{La=zn.inject(Ah),Ut=zn}catch{}}bi.createRoot=function(t,l){if(!Fs(t))throw Error(p(299));var e=!1,a="",n=Ar,i=Er,u=Mr;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError)),l=Dd(t,1,!1,null,null,e,a,null,n,i,u,Hd),t[Ie]=l.current,nf(t),new rf(l)};bi.hydrateRoot=function(t,l,e){if(!Fs(t))throw Error(p(299));var a=!1,n="",i=Ar,u=Er,c=Mr,s=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(s=e.formState)),l=Dd(t,1,!0,l,e??null,a,n,s,i,u,c,Hd),l.context=Od(null),e=l.current,a=Ht(),a=bc(a),n=Ql(a),n.callback=null,Gl(e,n,a),e=a,l.current.lanes=e,Ja(l,e),nl(l),t[Ie]=l.current,nf(t),new Hi(l)};bi.version="19.2.0";function qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qd)}catch(t){console.error(t)}}qd(),Ls.exports=bi;var Eh=Ls.exports;const Mh=Vd(Eh),Bd=C.createContext(),en=()=>{const t=C.useContext(Bd);if(!t)throw new Error("useCart must be used within a CartProvider");return t},Dh=({children:t})=>{const[l,e]=C.useState([]);C.useEffect(()=>{const y=localStorage.getItem("coffee-shop-cart");if(y)try{e(JSON.parse(y))}catch(v){console.error("Error loading cart from localStorage:",v)}},[]),C.useEffect(()=>{localStorage.setItem("coffee-shop-cart",JSON.stringify(l))},[l]);const a=(y,v=1)=>{e(d=>d.find(S=>S.id===y.id)?d.map(S=>S.id===y.id?{...S,quantity:S.quantity+v}:S):[...d,{...y,quantity:v}])},n=y=>{e(v=>v.filter(d=>d.id!==y))},r={cart:l,addToCart:a,removeFromCart:n,updateQuantity:(y,v)=>{if(v<=0){n(y);return}e(d=>d.map(g=>g.id===y?{...g,quantity:v}:g))},clearCart:()=>{e([])},getCartTotal:()=>l.reduce((y,v)=>y+v.price*v.quantity,0),getCartItemCount:()=>l.reduce((y,v)=>y+v.quantity,0)};return f.jsx(Bd.Provider,{value:r,children:t})},Oh=x.header`
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`,Ch=x.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Nh=x(Zs)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #d4af37;
  text-decoration: none;
`,Uh=x.div`
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
`,jn=x(Zs)`
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
`,_h=x.button`
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
`,Hh=x.span`
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
`,qh=x.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,Bh=()=>{const[t,l]=C.useState(!1),{getCartItemCount:e}=en(),a=Jd(),n=()=>{l(!t)},i=()=>{l(!1)};return f.jsx(Oh,{children:f.jsxs(Ch,{children:[f.jsxs(Nh,{to:"/",onClick:i,children:[f.jsx("i",{className:"fas fa-coffee"})," Kaffee's"]}),f.jsxs(Uh,{isOpen:t,children:[f.jsx(jn,{to:"/",className:a.pathname==="/"?"active":"",onClick:i,children:"Home"}),f.jsx(jn,{to:"/menu",className:a.pathname==="/menu"?"active":"",onClick:i,children:"Menu"}),f.jsx(jn,{to:"/deals",className:a.pathname==="/deals"?"active":"",onClick:i,children:"Deals"}),f.jsx(jn,{to:"/favourite",className:a.pathname==="/favourite"?"active":"",onClick:i,children:"Favourite"}),f.jsxs(_h,{children:[f.jsx("i",{className:"fas fa-shopping-cart"}),e()>0&&f.jsx(Hh,{children:e()})]})]}),f.jsx(qh,{onClick:n,children:f.jsx("i",{className:t?"fas fa-times":"fas fa-bars"})})]})})},Yh=x.footer`
  background: #333;
  color: #fff;
  padding: 3rem 0 1rem;
`,Qh=x.div`
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
`,Gh=x.div`
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
`,Xh=x.div`
  border-top: 1px solid #555;
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: #ccc;
`,Rh=()=>f.jsxs(Yh,{children:[f.jsxs(Qh,{children:[f.jsxs(Tn,{children:[f.jsx("h3",{children:"About Kaffee's"}),f.jsx("p",{children:"We are passionate about serving the finest coffee and beverages to our customers. Our commitment to quality and customer satisfaction makes us the perfect choice for your daily coffee needs."})]}),f.jsxs(Tn,{children:[f.jsx("h3",{children:"Quick Links"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"#home",children:"Home"})}),f.jsx("li",{children:f.jsx("a",{href:"#menu",children:"Menu"})}),f.jsx("li",{children:f.jsx("a",{href:"#deals",children:"Deals"})}),f.jsx("li",{children:f.jsx("a",{href:"#favourite",children:"Favourites"})}),f.jsx("li",{children:f.jsx("a",{href:"#contact",children:"Contact"})})]})]}),f.jsxs(Tn,{children:[f.jsx("h3",{children:"Contact Info"}),f.jsxs("p",{children:[f.jsx("i",{className:"fas fa-map-marker-alt"})," 123 Coffee Street, City"]}),f.jsxs("p",{children:[f.jsx("i",{className:"fas fa-phone"})," +1 (555) 123-4567"]}),f.jsxs("p",{children:[f.jsx("i",{className:"fas fa-envelope"})," info@kaffees.com"]}),f.jsxs(Gh,{children:[f.jsx("a",{href:"#",children:f.jsx("i",{className:"fab fa-facebook-f"})}),f.jsx("a",{href:"#",children:f.jsx("i",{className:"fab fa-twitter"})}),f.jsx("a",{href:"#",children:f.jsx("i",{className:"fab fa-instagram"})}),f.jsx("a",{href:"#",children:f.jsx("i",{className:"fab fa-linkedin-in"})})]})]}),f.jsxs(Tn,{children:[f.jsx("h3",{children:"Opening Hours"}),f.jsx("p",{children:"Monday - Friday: 7:00 AM - 8:00 PM"}),f.jsx("p",{children:"Saturday: 8:00 AM - 9:00 PM"}),f.jsx("p",{children:"Sunday: 9:00 AM - 7:00 PM"})]})]}),f.jsx(Xh,{children:f.jsx("p",{children:"© 2024 Kaffee's Coffee Shop. All rights reserved."})})]}),Zh=Ld`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`,wh=x.section`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              url('/images/home-bg.jpg') center/cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;
`,Vh=x.div`
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
`,Lh=x.div`
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
`,Jh=x.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    animation: ${Zh} 3s ease-in-out infinite;
  }
`,kh=()=>f.jsx(wh,{children:f.jsxs(Vh,{children:[f.jsxs(Lh,{children:[f.jsx("h1",{children:"Fresh Coffee in the Morning"}),f.jsx("p",{children:"Start your day with our premium coffee blends. We serve the finest coffee beans from around the world, carefully roasted to perfection for the ultimate coffee experience."}),f.jsxs(Kh,{children:[f.jsx(Ys,{className:"primary",children:"Order Now"}),f.jsx(Ys,{className:"secondary",children:"View Menu"})]})]}),f.jsx(Jh,{children:f.jsx("img",{src:"/images/home-img-1.png",alt:"Coffee"})})]})}),Et={products:[{id:1,name:"Espresso",category:"coffee",price:45,description:"Rich and bold espresso with perfect crema",image_url:"/images/menu-1.png",is_featured:!0},{id:2,name:"Cappuccino",category:"coffee",price:55,description:"Classic cappuccino with steamed milk foam",image_url:"/images/menu-2.png",is_featured:!0},{id:3,name:"Latte",category:"coffee",price:60,description:"Smooth latte with artful milk design",image_url:"/images/menu-3.png",is_featured:!1},{id:4,name:"Iced Tea",category:"ice-tea",price:35,description:"Refreshing iced tea with natural flavors",image_url:"/images/menu-4.png",is_featured:!1},{id:5,name:"Fresh Juice",category:"juices",price:40,description:"Freshly squeezed fruit juice",image_url:"/images/menu-5.png",is_featured:!1}],categories:[{id:1,name:"Coffee",slug:"coffee"},{id:2,name:"Ice Tea",slug:"ice-tea"},{id:3,name:"Beverage",slug:"beverage"},{id:4,name:"Juices",slug:"juices"}],newsletter:[],contacts:[],feedback:[],testimonials:[{id:1,name:"Sarah Johnson",email:"sarah@example.com",rating:5,testimonial:"The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning for my daily dose of happiness.",createdAt:"2024-01-15",status:"approved"},{id:2,name:"Mike Chen",email:"mike@example.com",rating:5,testimonial:"Amazing coffee and pastries! The vanilla latte is absolutely perfect. Great place to work or catch up with friends.",createdAt:"2024-01-14",status:"approved"},{id:3,name:"Emily Rodriguez",email:"emily@example.com",rating:4,testimonial:"Love the variety of coffee options and the quality is consistently excellent. The baristas really know their craft!",createdAt:"2024-01-13",status:"approved"},{id:4,name:"David Kim",email:"david@example.com",rating:5,testimonial:"Outstanding service and the coffee is always fresh. The baristas are knowledgeable and make great recommendations.",createdAt:"2024-01-12",status:"approved"}]},It=t=>new Promise(l=>setTimeout(l,t)),$t={async subscribeNewsletter(t){if(await It(500),!t||!t.includes("@"))throw new Error("Please enter a valid email address");if(Et.newsletter.find(a=>a.email===t))throw new Error("Email already subscribed");const e={id:Date.now(),email:t,subscribedAt:new Date().toISOString()};return Et.newsletter.push(e),{success:!0,message:"Successfully subscribed to newsletter!"}},async submitContact(t){if(await It(500),!t.name||!t.email||!t.message)throw new Error("All fields are required");const l={id:Date.now(),...t,submittedAt:new Date().toISOString()};return Et.contacts.push(l),{success:!0,message:"Message sent successfully!"}},async submitFeedback(t){if(await It(500),!t.name||!t.email||!t.rating)throw new Error("Name, email, and rating are required");const l={id:Date.now(),...t,submittedAt:new Date().toISOString()};return Et.feedback.push(l),{success:!0,message:"Thank you for your feedback!"}},async getProducts(){return await It(300),Et.products},async getProductsByCategory(t){return await It(300),Et.products.filter(l=>l.category===t)},async getFeaturedProducts(){return await It(300),Et.products.filter(t=>t.is_featured)},async getCategories(){return await It(200),Et.categories},async processOrder(t){if(await It(1e3),!t.items||t.items.length===0)throw new Error("No items in order");return{success:!0,order:{id:`ORD-${Date.now()}`,...t,status:"confirmed",createdAt:new Date().toISOString()},message:"Order placed successfully!"}},async getTestimonials(){await It(300);const t=localStorage.getItem("kaffees_testimonials");let l=[];if(t)try{l=JSON.parse(t)}catch(a){console.error("Error parsing stored testimonials:",a),l=Et.testimonials}else l=[...Et.testimonials],localStorage.setItem("kaffees_testimonials",JSON.stringify(l));return l.sort((a,n)=>{const i=new Date(a.submittedAt||a.createdAt||0);return new Date(n.submittedAt||n.createdAt||0)-i}).slice(0,6)},async submitTestimonial(t){if(await It(500),!t.name||!t.email||!t.rating||!t.testimonial)throw new Error("All fields are required");const l={id:Date.now(),...t,status:"approved",submittedAt:new Date().toISOString()},e=localStorage.getItem("kaffees_testimonials");let a=[];if(e)try{a=JSON.parse(e)}catch(n){console.error("Error parsing stored testimonials:",n),a=[...Et.testimonials]}else a=[...Et.testimonials];return a.unshift(l),localStorage.setItem("kaffees_testimonials",JSON.stringify(a)),{success:!0,message:"Testimonial submitted successfully!"}},clearTestimonials(){return localStorage.removeItem("kaffees_testimonials"),{success:!0,message:"Testimonials cleared!"}},resetTestimonials(){return localStorage.setItem("kaffees_testimonials",JSON.stringify(Et.testimonials)),{success:!0,message:"Testimonials reset to default!"}}},Fh=x.section`
  padding: 80px 0;
  background: #f8f9fa;
`,$h=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Wh=x.div`
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
`,Ih=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Ph=x.div`
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
`,tg=({onCategorySelect:t})=>{const[l,e]=C.useState([]),[a,n]=C.useState(null);C.useEffect(()=>{(async()=>{try{const r=await $t.getCategories();e(r)}catch(r){console.error("Error loading categories:",r)}})()},[]);const i=s=>{n(s.slug),t&&t(s.slug)},u=s=>({coffee:"fas fa-coffee","ice-tea":"fas fa-glass-whiskey",beverage:"fas fa-wine-glass-alt",juices:"fas fa-apple-alt"})[s]||"fas fa-coffee",c=s=>({coffee:"Rich and aromatic coffee blends from around the world","ice-tea":"Refreshing iced teas perfect for any time of day",beverage:"A variety of cold and hot beverages to quench your thirst",juices:"Fresh and natural fruit juices packed with vitamins"})[s]||"Delicious beverages for every taste";return f.jsx(Fh,{children:f.jsxs($h,{children:[f.jsxs(Wh,{children:[f.jsx("h2",{children:"Our Categories"}),f.jsx("p",{children:"Choose from our wide variety of coffee and beverages"})]}),f.jsx(Ih,{children:l.map(s=>f.jsxs(Ph,{className:a===s.slug?"active":"",onClick:()=>i(s),children:[f.jsx("div",{className:"icon",children:f.jsx("i",{className:u(s.slug)})}),f.jsx("h3",{children:s.name}),f.jsx("p",{children:c(s.slug)})]},s.id))})]})})},lg=x.section`
  padding: 80px 0;
`,eg=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,ag=x.div`
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
`,ng=x.div`
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
`,ig=x.div`
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
`,ug=x.div`
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
`,cg=x.div`
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
`,fg=x.button`
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
`,sg=()=>{const[t,l]=C.useState([]),[e,a]=C.useState({}),{addToCart:n}=en();C.useEffect(()=>{(async()=>{try{const s=await $t.getFeaturedProducts();l(s);const r={};s.forEach(y=>{r[y.id]=1}),a(r)}catch(s){console.error("Error loading featured products:",s)}})()},[]);const i=(c,s)=>{a(r=>({...r,[c]:Math.max(1,r[c]+s)}))},u=c=>{const s=e[c.id]||1;n(c,s),alert(`${c.name} added to cart!`)};return f.jsx(lg,{children:f.jsxs(eg,{children:[f.jsxs(ag,{children:[f.jsx("h2",{children:"Featured Products"}),f.jsx("p",{children:"Our most popular coffee blends and beverages"})]}),f.jsx(ng,{children:t.map(c=>f.jsxs(Yd,{children:[f.jsx(ig,{children:f.jsx("img",{src:c.image_url,alt:c.name})}),f.jsxs(ug,{children:[f.jsx("h3",{children:c.name}),f.jsx("p",{children:c.description}),f.jsxs("div",{className:"price",children:["$",c.price.toFixed(2)]}),f.jsxs(cg,{children:[f.jsx("button",{onClick:()=>i(c.id,-1),disabled:e[c.id]<=1,children:"-"}),f.jsx("span",{children:e[c.id]||1}),f.jsx("button",{onClick:()=>i(c.id,1),children:"+"})]}),f.jsx(fg,{onClick:()=>u(c),children:"Add to Cart"})]})]},c.id))})]})})},og=x.section`
  padding: 80px 0;
  background: #f8f9fa;
`,rg=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,dg=x.div`
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
`,mg=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,hg=x.div`
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
`,gg=()=>{const t=[{number:1,icon:"fas fa-coffee",title:"Choose Your Coffee",description:"Select from our wide variety of premium coffee blends and beverages"},{number:2,icon:"fas fa-shopping-cart",title:"Add to Cart",description:"Add your favorite items to the cart with your preferred quantity"},{number:3,icon:"fas fa-credit-card",title:"Place Order",description:"Complete your order with our secure and easy checkout process"},{number:4,icon:"fas fa-truck",title:"Enjoy Delivery",description:"Sit back and enjoy your coffee delivered fresh to your doorstep"}];return f.jsx(og,{children:f.jsxs(rg,{children:[f.jsxs(dg,{children:[f.jsx("h2",{children:"How It Works"}),f.jsx("p",{children:"Simple steps to get your favorite coffee delivered"})]}),f.jsx(mg,{children:t.map((l,e)=>f.jsxs(hg,{children:[f.jsx("div",{className:"step-number",children:l.number}),f.jsx("div",{className:"icon",children:f.jsx("i",{className:l.icon})}),f.jsx("h3",{children:l.title}),f.jsx("p",{children:l.description})]},e))})]})})},vg=x.section`
  padding: 80px 0;
`,yg=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,bg=x.div`
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
`,pg=x.div`
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
`,xg=x.div`
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
`,Sg=x.div`
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
`,zg=x.div`
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
`,jg=x.button`
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
`,Tg=()=>{const[t,l]=C.useState([]),[e,a]=C.useState({}),{addToCart:n}=en();C.useEffect(()=>{(async()=>{try{const r=await $t.getProducts();l(r);const y={};r.forEach(v=>{y[v.id]=1}),a(y)}catch(r){console.error("Error loading products:",r)}})()},[]);const i=(s,r)=>{a(y=>({...y,[s]:Math.max(1,y[s]+r)}))},u=s=>{const r=e[s.id]||1;n(s,r),alert(`${s.name} added to cart!`)},c=s=>({coffee:"Coffee","ice-tea":"Ice Tea",beverage:"Beverage",juices:"Juices"})[s]||s;return f.jsx(vg,{children:f.jsxs(yg,{children:[f.jsxs(bg,{children:[f.jsx("h2",{children:"Popular Flavors"}),f.jsx("p",{children:"Discover our most loved coffee blends and beverages"})]}),f.jsx(pg,{children:t.map(s=>f.jsxs(Qd,{children:[f.jsxs(xg,{children:[f.jsx("img",{src:s.image_url,alt:s.name}),f.jsx("div",{className:"category-badge",children:c(s.category)})]}),f.jsxs(Sg,{children:[f.jsx("h3",{children:s.name}),f.jsx("p",{children:s.description}),f.jsxs("div",{className:"price",children:["$",s.price.toFixed(2)]}),f.jsxs(zg,{children:[f.jsx("button",{onClick:()=>i(s.id,-1),disabled:e[s.id]<=1,children:"-"}),f.jsx("span",{children:e[s.id]||1}),f.jsx("button",{onClick:()=>i(s.id,1),children:"+"})]}),f.jsx(jg,{onClick:()=>u(s),children:"Add to Cart"})]})]},s.id))})]})})},Ag=x.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #d4af37, #b8941f);
  color: #fff;
`,Eg=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Mg=x.div`
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
`,Og=x.input`
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
`,Cg=x.button`
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
`,Ng=x.div`
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
`,Ug=()=>{const[t,l]=C.useState(""),[e,a]=C.useState(""),[n,i]=C.useState(!1),u=async c=>{if(c.preventDefault(),!t){a({type:"error",text:"Please enter your email address"});return}i(!0),a("");try{const s=await $t.subscribeNewsletter(t);a({type:"success",text:s.message}),l("")}catch(s){a({type:"error",text:s.message})}finally{i(!1)}};return f.jsx(Ag,{children:f.jsxs(Eg,{children:[f.jsxs(Mg,{children:[f.jsx("h2",{children:"Subscribe to Our Newsletter"}),f.jsx("p",{children:"Stay updated with our latest coffee blends, special offers, and exclusive deals delivered straight to your inbox."})]}),f.jsxs(Dg,{onSubmit:u,children:[f.jsx(Og,{type:"email",placeholder:"Enter your email address",value:t,onChange:c=>l(c.target.value),disabled:n}),f.jsx(Cg,{type:"submit",disabled:n,children:n?"Subscribing...":"Subscribe"})]}),e&&f.jsx(Ng,{className:e.type,children:e.text})]})})},_g=x.section`
  padding: 80px 0;
  background: #f8f9fa;
`,Hg=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,qg=x.div`
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
`,Bg=x.form`
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
`,Yg=x.button`
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
`,Qg=x.div`
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
`,Gg=()=>{const[t,l]=C.useState({name:"",email:"",subject:"",message:""}),[e,a]=C.useState({}),[n,i]=C.useState(""),[u,c]=C.useState(!1),s=v=>{const{name:d,value:g}=v.target;l(S=>({...S,[d]:g})),e[d]&&a(S=>({...S,[d]:""}))},r=()=>{const v={};return t.name.trim()||(v.name="Name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(v.email="Email is invalid"):v.email="Email is required",t.subject.trim()||(v.subject="Subject is required"),t.message.trim()||(v.message="Message is required"),a(v),Object.keys(v).length===0},y=async v=>{if(v.preventDefault(),!!r()){c(!0),i("");try{const d=await $t.submitContact(t);i({type:"success",text:d.message}),l({name:"",email:"",subject:"",message:""})}catch(d){i({type:"error",text:d.message})}finally{c(!1)}}};return f.jsx(_g,{children:f.jsxs(Hg,{children:[f.jsxs(qg,{children:[f.jsx("h2",{children:"Contact Us"}),f.jsx("p",{children:"Have a question or feedback? We'd love to hear from you!"})]}),f.jsxs(Bg,{onSubmit:y,children:[f.jsxs(An,{children:[f.jsx("label",{htmlFor:"name",children:"Name *"}),f.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:s,className:e.name?"error":"",disabled:u}),e.name&&f.jsx("div",{className:"error-message",children:e.name})]}),f.jsxs(An,{children:[f.jsx("label",{htmlFor:"email",children:"Email *"}),f.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:s,className:e.email?"error":"",disabled:u}),e.email&&f.jsx("div",{className:"error-message",children:e.email})]}),f.jsxs(An,{children:[f.jsx("label",{htmlFor:"subject",children:"Subject *"}),f.jsx("input",{type:"text",id:"subject",name:"subject",value:t.subject,onChange:s,className:e.subject?"error":"",disabled:u}),e.subject&&f.jsx("div",{className:"error-message",children:e.subject})]}),f.jsxs(An,{children:[f.jsx("label",{htmlFor:"message",children:"Message *"}),f.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:s,className:e.message?"error":"",disabled:u,placeholder:"Tell us what's on your mind..."}),e.message&&f.jsx("div",{className:"error-message",children:e.message})]}),f.jsx(Yg,{type:"submit",disabled:u,children:u?"Sending...":"Send Message"}),n&&f.jsx(Qg,{className:n.type,children:n.text})]})]})})},Xg=x.section`
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
`,wg=x.form`
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
`,Vg=x.div`
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
`,Lg=x.button`
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
`,Jg=()=>{const[t,l]=C.useState({name:"",email:"",rating:0,feedback:""}),[e,a]=C.useState({}),[n,i]=C.useState(""),[u,c]=C.useState(!1),s=g=>{const{name:S,value:z}=g.target;l(E=>({...E,[S]:z})),e[S]&&a(E=>({...E,[S]:""}))},r=g=>{l(S=>({...S,rating:g})),e.rating&&a(S=>({...S,rating:""}))},y=()=>{const g={};return t.name.trim()||(g.name="Name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.rating===0&&(g.rating="Please select a rating"),t.feedback.trim()||(g.feedback="Feedback is required"),a(g),Object.keys(g).length===0},v=async g=>{if(g.preventDefault(),!!y()){c(!0),i("");try{const S=await $t.submitFeedback(t);i({type:"success",text:S.message}),l({name:"",email:"",rating:0,feedback:""})}catch(S){i({type:"error",text:S.message})}finally{c(!1)}}},d=g=>({1:"Poor",2:"Fair",3:"Good",4:"Very Good",5:"Excellent"})[g]||"";return f.jsx(Xg,{children:f.jsxs(Rg,{children:[f.jsxs(Zg,{children:[f.jsx("h2",{children:"Share Your Feedback"}),f.jsx("p",{children:"Help us improve by sharing your experience with us"})]}),f.jsxs(wg,{onSubmit:v,children:[f.jsxs(pu,{children:[f.jsx("label",{htmlFor:"name",children:"Name *"}),f.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:s,className:e.name?"error":"",disabled:u}),e.name&&f.jsx("div",{className:"error-message",children:e.name})]}),f.jsxs(pu,{children:[f.jsx("label",{htmlFor:"email",children:"Email *"}),f.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:s,className:e.email?"error":"",disabled:u}),e.email&&f.jsx("div",{className:"error-message",children:e.email})]}),f.jsxs(Vg,{children:[f.jsx("label",{children:"Rating *"}),f.jsx("div",{className:"rating-stars",children:[1,2,3,4,5].map(g=>f.jsx("span",{className:`star ${t.rating>=g?"active":""}`,onClick:()=>r(g),children:"★"},g))}),t.rating>0&&f.jsx("div",{className:"rating-text",children:d(t.rating)}),e.rating&&f.jsx("div",{className:"error-message",children:e.rating})]}),f.jsxs(pu,{children:[f.jsx("label",{htmlFor:"feedback",children:"Feedback *"}),f.jsx("textarea",{id:"feedback",name:"feedback",value:t.feedback,onChange:s,className:e.feedback?"error":"",disabled:u,placeholder:"Tell us about your experience..."}),e.feedback&&f.jsx("div",{className:"error-message",children:e.feedback})]}),f.jsx(Lg,{type:"submit",disabled:u,children:u?"Submitting...":"Submit Feedback"}),n&&f.jsx(Kg,{className:n.type,children:n.text})]})]})})},kg=x.section`
  padding: 80px 0;
  background: #f8f9fa;
`,Fg=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,$g=x.div`
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
`,Wg=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Ig=x.div`
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
`,Pg=x.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  font-style: italic;
`,t1=x.div`
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
`,e1=x.div`
  h4 {
    color: #333;
    margin-bottom: 0.25rem;
    font-size: 1rem;
  }

  .rating {
    color: #d4af37;
    font-size: 0.9rem;
  }
`,a1=x.button`
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
`,n1=x.form`
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
`,i1=x.div`
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
`,u1=x.button`
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
`,c1=x.div`
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
`,f1=()=>{const[t,l]=C.useState([]),[e,a]=C.useState(!1),[n,i]=C.useState({name:"",email:"",rating:0,testimonial:""}),[u,c]=C.useState({}),[s,r]=C.useState(""),[y,v]=C.useState(!1);C.useEffect(()=>{(async()=>{try{const h=await $t.getTestimonials();h.length===0?l([{id:1,name:"Sarah Johnson",email:"sarah@example.com",rating:5,testimonial:"The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning for my daily dose of happiness.",createdAt:"2024-01-15"},{id:2,name:"Mike Chen",email:"mike@example.com",rating:5,testimonial:"Amazing coffee and pastries! The vanilla latte is absolutely perfect. Great place to work or catch up with friends.",createdAt:"2024-01-14"},{id:3,name:"Emily Rodriguez",email:"emily@example.com",rating:4,testimonial:"Love the variety of coffee options and the quality is consistently excellent. The baristas really know their craft!",createdAt:"2024-01-13"}]):l(h)}catch(h){console.error("Error loading testimonials:",h),l([{id:1,name:"Sarah Johnson",email:"sarah@example.com",rating:5,testimonial:"The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning for my daily dose of happiness.",createdAt:"2024-01-15"},{id:2,name:"Mike Chen",email:"mike@example.com",rating:5,testimonial:"Amazing coffee and pastries! The vanilla latte is absolutely perfect. Great place to work or catch up with friends.",createdAt:"2024-01-14"},{id:3,name:"Emily Rodriguez",email:"emily@example.com",rating:4,testimonial:"Love the variety of coffee options and the quality is consistently excellent. The baristas really know their craft!",createdAt:"2024-01-13"}])}})()},[]);const d=o=>{const{name:h,value:b}=o.target;i(A=>({...A,[h]:b})),u[h]&&c(A=>({...A,[h]:""}))},g=o=>{i(h=>({...h,rating:o})),u.rating&&c(h=>({...h,rating:""}))},S=()=>{const o={};return n.name.trim()||(o.name="Name is required"),n.email.trim()?/\S+@\S+\.\S+/.test(n.email)||(o.email="Email is invalid"):o.email="Email is required",n.rating===0&&(o.rating="Please select a rating"),n.testimonial.trim()||(o.testimonial="Testimonial is required"),c(o),Object.keys(o).length===0},z=async o=>{if(o.preventDefault(),!!S()){v(!0),r("");try{const h=await $t.submitTestimonial(n);r({type:"success",text:h.message}),i({name:"",email:"",rating:0,testimonial:""}),a(!1);const b=await $t.getTestimonials();l(b)}catch(h){r({type:"error",text:h.message})}finally{v(!1)}}},E=o=>o.split(" ").map(h=>h[0]).join("").toUpperCase(),m=o=>"★".repeat(o)+"☆".repeat(5-o);return f.jsx(kg,{children:f.jsxs(Fg,{children:[f.jsxs($g,{children:[f.jsx("h2",{children:"What Our Customers Say"}),f.jsx("p",{children:"Latest experiences from our valued customers"})]}),f.jsx(Wg,{children:t.map(o=>f.jsxs(Ig,{children:[f.jsx(Pg,{children:o.testimonial}),f.jsxs(t1,{children:[f.jsx(l1,{children:E(o.name)}),f.jsxs(e1,{children:[f.jsx("h4",{children:o.name}),f.jsx("div",{className:"rating",children:m(o.rating)})]})]})]},o.id))}),f.jsx(a1,{onClick:()=>a(!e),children:e?"Cancel":"Share Your Experience"}),f.jsxs(n1,{show:e,onSubmit:z,children:[f.jsxs(En,{children:[f.jsx("label",{htmlFor:"name",children:"Name *"}),f.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:d,className:u.name?"error":"",disabled:y}),u.name&&f.jsx("div",{className:"error-message",children:u.name})]}),f.jsxs(En,{children:[f.jsx("label",{htmlFor:"email",children:"Email *"}),f.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:d,className:u.email?"error":"",disabled:y}),u.email&&f.jsx("div",{className:"error-message",children:u.email})]}),f.jsxs(En,{children:[f.jsx("label",{children:"Rating *"}),f.jsx(i1,{children:[5,4,3,2,1].map(o=>f.jsxs(Rs.Fragment,{children:[f.jsx("input",{type:"radio",id:`star${o}`,name:"rating",value:o,checked:n.rating===o,onChange:()=>g(o),disabled:y}),f.jsx("label",{htmlFor:`star${o}`,children:"★"})]},o))}),u.rating&&f.jsx("div",{className:"error-message",children:u.rating})]}),f.jsxs(En,{children:[f.jsx("label",{htmlFor:"testimonial",children:"Your Experience *"}),f.jsx("textarea",{id:"testimonial",name:"testimonial",value:n.testimonial,onChange:d,className:u.testimonial?"error":"",disabled:y,placeholder:"Tell us about your experience at Kaffee's..."}),u.testimonial&&f.jsx("div",{className:"error-message",children:u.testimonial})]}),f.jsx(u1,{type:"submit",disabled:y,children:y?"Submitting...":"Submit Testimonial"}),s&&f.jsx(c1,{className:s.type,children:s.text})]})]})})},s1=()=>f.jsxs(f.Fragment,{children:[f.jsx(kh,{}),f.jsx(tg,{}),f.jsx(sg,{}),f.jsx(gg,{}),f.jsx(Tg,{}),f.jsx(f1,{}),f.jsx(Ug,{}),f.jsx(Gg,{}),f.jsx(Jg,{})]}),o1=x.div`
  padding: 100px 0 80px;
  background: #f8f9fa;
  min-height: 100vh;
`,r1=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,d1=x.div`
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
`,m1=x.div`
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
`,h1=x.div`
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
`,g1=x.div`
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
`,v1=x.div`
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
`,y1=x.div`
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
`,b1=x.button`
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
`,p1=()=>{const[t,l]=C.useState([]),[e,a]=C.useState([]),[n,i]=C.useState([]),[u,c]=C.useState("all"),[s,r]=C.useState({}),{addToCart:y}=en();C.useEffect(()=>{(async()=>{try{const[E,m]=await Promise.all([$t.getProducts(),$t.getCategories()]);l(E),a(E),i(m);const o={};E.forEach(h=>{o[h.id]=1}),r(o)}catch(E){console.error("Error loading data:",E)}})()},[]);const v=z=>{if(c(z),z==="all")a(t);else{const E=t.filter(m=>m.category===z);a(E)}},d=(z,E)=>{r(m=>({...m,[z]:Math.max(1,m[z]+E)}))},g=z=>{const E=s[z.id]||1;y(z,E),alert(`${z.name} added to cart!`)},S=z=>({coffee:"Coffee","ice-tea":"Ice Tea",beverage:"Beverage",juices:"Juices"})[z]||z;return f.jsx(o1,{children:f.jsxs(r1,{children:[f.jsxs(d1,{children:[f.jsx("h1",{children:"Our Menu"}),f.jsx("p",{children:"Discover our wide selection of premium coffee and beverages"})]}),f.jsxs(m1,{children:[f.jsx("button",{className:u==="all"?"active":"",onClick:()=>v("all"),children:"All Items"}),n.map(z=>f.jsx("button",{className:u===z.slug?"active":"",onClick:()=>v(z.slug),children:z.name},z.id))]}),f.jsx(h1,{children:e.map(z=>f.jsxs(Gd,{children:[f.jsxs(g1,{children:[f.jsx("img",{src:z.image_url,alt:z.name}),f.jsx("div",{className:"category-badge",children:S(z.category)})]}),f.jsxs(v1,{children:[f.jsx("h3",{children:z.name}),f.jsx("p",{children:z.description}),f.jsxs("div",{className:"price",children:["$",z.price.toFixed(2)]}),f.jsxs(y1,{children:[f.jsx("button",{onClick:()=>d(z.id,-1),disabled:s[z.id]<=1,children:"-"}),f.jsx("span",{children:s[z.id]||1}),f.jsx("button",{onClick:()=>d(z.id,1),children:"+"})]}),f.jsx(b1,{onClick:()=>g(z),children:"Add to Cart"})]})]},z.id))})]})})},x1=x.div`
  padding: 100px 0 80px;
  background: #f8f9fa;
  min-height: 100vh;
`,S1=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,z1=x.div`
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
`,j1=x.div`
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
`,T1=x.div`
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
`,A1=x.div`
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
`,E1=x.button`
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
`,M1=()=>{const t=[{id:1,title:"Morning Coffee Combo",description:"Start your day right with our premium morning coffee combo",image:"/images/menu-1.png",originalPrice:120,discountedPrice:95,discount:"20% OFF",details:["2 Large Espresso","1 Cappuccino","Free Pastry","Valid until 11 AM"]},{id:2,title:"Afternoon Refreshment",description:"Perfect blend of coffee and tea for your afternoon break",image:"/images/menu-4.png",originalPrice:80,discountedPrice:65,discount:"18% OFF",details:["1 Iced Tea","1 Latte","Free Cookie","Valid 2 PM - 5 PM"]},{id:3,title:"Family Pack Special",description:"Great value for families - mix and match your favorites",image:"/images/menu-2.png",originalPrice:200,discountedPrice:160,discount:"20% OFF",details:["4 Any Coffee Drinks","2 Fresh Juices","Free Snacks","Valid all day"]},{id:4,title:"Student Discount",description:"Special pricing for students - show your ID and save",image:"/images/menu-3.png",originalPrice:60,discountedPrice:45,discount:"25% OFF",details:["Any Coffee Drink","Free Wi-Fi Access","Student ID Required","Valid weekdays"]},{id:5,title:"Weekend Special",description:"Relax and enjoy our weekend special coffee blends",image:"/images/menu-5.png",originalPrice:100,discountedPrice:80,discount:"20% OFF",details:["2 Premium Coffees","Free Dessert","Weekend Only","Valid Sat-Sun"]},{id:6,title:"Happy Hour Deal",description:"Join us during happy hour for amazing coffee deals",image:"/images/menu-6.png",originalPrice:90,discountedPrice:70,discount:"22% OFF",details:["Any 2 Beverages","Free Appetizer","4 PM - 6 PM","Valid weekdays"]}],l=e=>{alert(`Great choice! You've selected the ${e.title} deal. Please visit our store to redeem this offer.`)};return f.jsx(x1,{children:f.jsxs(S1,{children:[f.jsxs(z1,{children:[f.jsx("h1",{children:"Special Deals"}),f.jsx("p",{children:"Don't miss out on our amazing coffee deals and special offers"})]}),f.jsx(j1,{children:t.map(e=>f.jsxs(Xd,{children:[f.jsx("div",{className:"discount-badge",children:e.discount}),f.jsx(T1,{children:f.jsx("img",{src:e.image,alt:e.title})}),f.jsxs(A1,{children:[f.jsx("h3",{children:e.title}),f.jsx("p",{className:"description",children:e.description}),f.jsxs("div",{className:"price-info",children:[f.jsxs("span",{className:"original-price",children:["$",e.originalPrice]}),f.jsxs("span",{className:"discounted-price",children:["$",e.discountedPrice]})]}),f.jsx("div",{className:"deal-details",children:f.jsx("ul",{children:e.details.map((a,n)=>f.jsx("li",{children:a},n))})}),f.jsx(E1,{onClick:()=>l(e),children:"Get This Deal"})]})]},e.id))})]})})},Qs=x.div`
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
`,O1=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Rd=x.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`,C1=x.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${Rd}:hover & img {
    transform: scale(1.05);
  }
`,N1=x.div`
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
`,U1=x.div`
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
`,_1=x.div`
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
`,H1=()=>{const{cart:t,removeFromCart:l,updateQuantity:e,getCartTotal:a,getCartItemCount:n}=en(),i=(s,r)=>{var d;const v=(((d=t.find(g=>g.id===s))==null?void 0:d.quantity)||1)+r;v<=0?l(s):e(s,v)},u=s=>{window.confirm("Are you sure you want to remove this item from your cart?")&&l(s)},c=()=>{if(t.length===0){alert("Your cart is empty!");return}alert(`Order total: $${a().toFixed(2)}

Thank you for your order! Your items will be prepared shortly.`)};return t.length===0?f.jsx(Qs,{children:f.jsxs(Gs,{children:[f.jsxs(Xs,{children:[f.jsx("h1",{children:"My Favourites"}),f.jsx("p",{children:"Your selected items and cart"})]}),f.jsxs(D1,{children:[f.jsx("div",{className:"icon",children:f.jsx("i",{className:"fas fa-shopping-cart"})}),f.jsx("h3",{children:"Your cart is empty"}),f.jsx("p",{children:"Looks like you haven't added any items to your cart yet. Browse our menu and add some delicious coffee to get started!"}),f.jsx("a",{href:"/menu",className:"btn",children:"Browse Menu"})]})]})}):f.jsx(Qs,{children:f.jsxs(Gs,{children:[f.jsxs(Xs,{children:[f.jsx("h1",{children:"My Favourites"}),f.jsx("p",{children:"Your selected items and cart"})]}),f.jsx(O1,{children:t.map(s=>f.jsxs(Rd,{children:[f.jsx(C1,{children:f.jsx("img",{src:s.image_url,alt:s.name})}),f.jsxs(N1,{children:[f.jsx("h3",{children:s.name}),f.jsx("p",{children:s.description}),f.jsxs("div",{className:"price",children:["$",s.price.toFixed(2)]}),f.jsxs("div",{className:"quantity",children:["Quantity: ",s.quantity]}),f.jsxs(U1,{children:[f.jsx("button",{className:"primary",onClick:()=>i(s.id,1),children:"Add More"}),f.jsx("button",{className:"secondary",onClick:()=>u(s.id),children:"Remove"})]})]})]},s.id))}),f.jsxs(_1,{children:[f.jsx("h3",{children:"Order Summary"}),f.jsxs("div",{className:"summary-row",children:[f.jsxs("span",{children:["Items (",n(),")"]}),f.jsxs("span",{children:["$",a().toFixed(2)]})]}),f.jsxs("div",{className:"summary-row",children:[f.jsx("span",{children:"Delivery Fee"}),f.jsx("span",{children:"$5.00"})]}),f.jsxs("div",{className:"summary-row total",children:[f.jsx("span",{children:"Total"}),f.jsxs("span",{children:["$",(a()+5).toFixed(2)]})]}),f.jsx("button",{className:"checkout-btn",onClick:c,children:"Proceed to Checkout"})]})]})})},q1=Kd`
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
`,B1=x.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Y1=x.main`
  flex: 1;
`;function Q1(){return f.jsx(Dh,{children:f.jsxs(kd,{children:[f.jsx(q1,{}),f.jsxs(B1,{children:[f.jsx(Bh,{}),f.jsx(Y1,{children:f.jsxs(Fd,{children:[f.jsx(cn,{path:"/",element:f.jsx(s1,{})}),f.jsx(cn,{path:"/menu",element:f.jsx(p1,{})}),f.jsx(cn,{path:"/deals",element:f.jsx(M1,{})}),f.jsx(cn,{path:"/favourite",element:f.jsx(H1,{})})]})}),f.jsx(Rh,{})]})]})})}Mh.createRoot(document.getElementById("root")).render(f.jsx(Rs.StrictMode,{children:f.jsx(Q1,{})}));
