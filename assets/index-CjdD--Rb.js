var _v=Object.defineProperty;var vv=(s,e,n)=>e in s?_v(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var Jh=(s,e,n)=>vv(s,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Km(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Sc={exports:{}},Do={},Mc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function xv(){if(ep)return _t;ep=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function v(P,G,Y){this.props=P,this.context=G,this.refs=E,this.updater=Y||S}v.prototype.isReactComponent={},v.prototype.setState=function(P,G){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,G,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function g(){}g.prototype=v.prototype;function I(P,G,Y){this.props=P,this.context=G,this.refs=E,this.updater=Y||S}var C=I.prototype=new g;C.constructor=I,T(C,v.prototype),C.isPureReactComponent=!0;var F=Array.isArray,W=Object.prototype.hasOwnProperty,O={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function le(P,G,Y){var ae,fe={},Te=null,we=null;if(G!=null)for(ae in G.ref!==void 0&&(we=G.ref),G.key!==void 0&&(Te=""+G.key),G)W.call(G,ae)&&!N.hasOwnProperty(ae)&&(fe[ae]=G[ae]);var be=arguments.length-2;if(be===1)fe.children=Y;else if(1<be){for(var Ne=Array(be),ke=0;ke<be;ke++)Ne[ke]=arguments[ke+2];fe.children=Ne}if(P&&P.defaultProps)for(ae in be=P.defaultProps,be)fe[ae]===void 0&&(fe[ae]=be[ae]);return{$$typeof:s,type:P,key:Te,ref:we,props:fe,_owner:O.current}}function R(P,G){return{$$typeof:s,type:P.type,key:G,ref:P.ref,props:P.props,_owner:P._owner}}function L(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function oe(P){var G={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Y){return G[Y]})}var ce=/\/+/g;function me(P,G){return typeof P=="object"&&P!==null&&P.key!=null?oe(""+P.key):G.toString(36)}function H(P,G,Y,ae,fe){var Te=typeof P;(Te==="undefined"||Te==="boolean")&&(P=null);var we=!1;if(P===null)we=!0;else switch(Te){case"string":case"number":we=!0;break;case"object":switch(P.$$typeof){case s:case e:we=!0}}if(we)return we=P,fe=fe(we),P=ae===""?"."+me(we,0):ae,F(fe)?(Y="",P!=null&&(Y=P.replace(ce,"$&/")+"/"),H(fe,G,Y,"",function(ke){return ke})):fe!=null&&(L(fe)&&(fe=R(fe,Y+(!fe.key||we&&we.key===fe.key?"":(""+fe.key).replace(ce,"$&/")+"/")+P)),G.push(fe)),1;if(we=0,ae=ae===""?".":ae+":",F(P))for(var be=0;be<P.length;be++){Te=P[be];var Ne=ae+me(Te,be);we+=H(Te,G,Y,Ne,fe)}else if(Ne=x(P),typeof Ne=="function")for(P=Ne.call(P),be=0;!(Te=P.next()).done;)Te=Te.value,Ne=ae+me(Te,be++),we+=H(Te,G,Y,Ne,fe);else if(Te==="object")throw G=String(P),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return we}function J(P,G,Y){if(P==null)return P;var ae=[],fe=0;return H(P,ae,"","",function(Te){return G.call(Y,Te,fe++)}),ae}function re(P){if(P._status===-1){var G=P._result;G=G(),G.then(function(Y){(P._status===0||P._status===-1)&&(P._status=1,P._result=Y)},function(Y){(P._status===0||P._status===-1)&&(P._status=2,P._result=Y)}),P._status===-1&&(P._status=0,P._result=G)}if(P._status===1)return P._result.default;throw P._result}var ue={current:null},V={transition:null},Z={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:V,ReactCurrentOwner:O};function X(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:J,forEach:function(P,G,Y){J(P,function(){G.apply(this,arguments)},Y)},count:function(P){var G=0;return J(P,function(){G++}),G},toArray:function(P){return J(P,function(G){return G})||[]},only:function(P){if(!L(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},_t.Component=v,_t.Fragment=n,_t.Profiler=a,_t.PureComponent=I,_t.StrictMode=r,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,_t.act=X,_t.cloneElement=function(P,G,Y){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var ae=T({},P.props),fe=P.key,Te=P.ref,we=P._owner;if(G!=null){if(G.ref!==void 0&&(Te=G.ref,we=O.current),G.key!==void 0&&(fe=""+G.key),P.type&&P.type.defaultProps)var be=P.type.defaultProps;for(Ne in G)W.call(G,Ne)&&!N.hasOwnProperty(Ne)&&(ae[Ne]=G[Ne]===void 0&&be!==void 0?be[Ne]:G[Ne])}var Ne=arguments.length-2;if(Ne===1)ae.children=Y;else if(1<Ne){be=Array(Ne);for(var ke=0;ke<Ne;ke++)be[ke]=arguments[ke+2];ae.children=be}return{$$typeof:s,type:P.type,key:fe,ref:Te,props:ae,_owner:we}},_t.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:u,_context:P},P.Consumer=P},_t.createElement=le,_t.createFactory=function(P){var G=le.bind(null,P);return G.type=P,G},_t.createRef=function(){return{current:null}},_t.forwardRef=function(P){return{$$typeof:c,render:P}},_t.isValidElement=L,_t.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:re}},_t.memo=function(P,G){return{$$typeof:m,type:P,compare:G===void 0?null:G}},_t.startTransition=function(P){var G=V.transition;V.transition={};try{P()}finally{V.transition=G}},_t.unstable_act=X,_t.useCallback=function(P,G){return ue.current.useCallback(P,G)},_t.useContext=function(P){return ue.current.useContext(P)},_t.useDebugValue=function(){},_t.useDeferredValue=function(P){return ue.current.useDeferredValue(P)},_t.useEffect=function(P,G){return ue.current.useEffect(P,G)},_t.useId=function(){return ue.current.useId()},_t.useImperativeHandle=function(P,G,Y){return ue.current.useImperativeHandle(P,G,Y)},_t.useInsertionEffect=function(P,G){return ue.current.useInsertionEffect(P,G)},_t.useLayoutEffect=function(P,G){return ue.current.useLayoutEffect(P,G)},_t.useMemo=function(P,G){return ue.current.useMemo(P,G)},_t.useReducer=function(P,G,Y){return ue.current.useReducer(P,G,Y)},_t.useRef=function(P){return ue.current.useRef(P)},_t.useState=function(P){return ue.current.useState(P)},_t.useSyncExternalStore=function(P,G,Y){return ue.current.useSyncExternalStore(P,G,Y)},_t.useTransition=function(){return ue.current.useTransition()},_t.version="18.3.1",_t}var tp;function Mf(){return tp||(tp=1,Mc.exports=xv()),Mc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function yv(){if(np)return Do;np=1;var s=Mf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(c,h,m){var _,y={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!u.hasOwnProperty(_)&&(y[_]=h[_]);if(c&&c.defaultProps)for(_ in h=c.defaultProps,h)y[_]===void 0&&(y[_]=h[_]);return{$$typeof:e,type:c,key:x,ref:S,props:y,_owner:a.current}}return Do.Fragment=n,Do.jsx=d,Do.jsxs=d,Do}var ip;function Sv(){return ip||(ip=1,Sc.exports=yv()),Sc.exports}var lt=Sv(),Sn=Mf();const Mv=Km(Sn);var Qa={},Ec={exports:{}},Pn={},Tc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp;function Ev(){return rp||(rp=1,(function(s){function e(V,Z){var X=V.length;V.push(Z);e:for(;0<X;){var P=X-1>>>1,G=V[P];if(0<a(G,Z))V[P]=Z,V[X]=G,X=P;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var Z=V[0],X=V.pop();if(X!==Z){V[0]=X;e:for(var P=0,G=V.length,Y=G>>>1;P<Y;){var ae=2*(P+1)-1,fe=V[ae],Te=ae+1,we=V[Te];if(0>a(fe,X))Te<G&&0>a(we,fe)?(V[P]=we,V[Te]=X,P=Te):(V[P]=fe,V[ae]=X,P=ae);else if(Te<G&&0>a(we,X))V[P]=we,V[Te]=X,P=Te;else break e}}return Z}function a(V,Z){var X=V.sortIndex-Z.sortIndex;return X!==0?X:V.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,c=d.now();s.unstable_now=function(){return d.now()-c}}var h=[],m=[],_=1,y=null,x=3,S=!1,T=!1,E=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(V){for(var Z=n(m);Z!==null;){if(Z.callback===null)r(m);else if(Z.startTime<=V)r(m),Z.sortIndex=Z.expirationTime,e(h,Z);else break;Z=n(m)}}function F(V){if(E=!1,C(V),!T)if(n(h)!==null)T=!0,re(W);else{var Z=n(m);Z!==null&&ue(F,Z.startTime-V)}}function W(V,Z){T=!1,E&&(E=!1,g(le),le=-1),S=!0;var X=x;try{for(C(Z),y=n(h);y!==null&&(!(y.expirationTime>Z)||V&&!oe());){var P=y.callback;if(typeof P=="function"){y.callback=null,x=y.priorityLevel;var G=P(y.expirationTime<=Z);Z=s.unstable_now(),typeof G=="function"?y.callback=G:y===n(h)&&r(h),C(Z)}else r(h);y=n(h)}if(y!==null)var Y=!0;else{var ae=n(m);ae!==null&&ue(F,ae.startTime-Z),Y=!1}return Y}finally{y=null,x=X,S=!1}}var O=!1,N=null,le=-1,R=5,L=-1;function oe(){return!(s.unstable_now()-L<R)}function ce(){if(N!==null){var V=s.unstable_now();L=V;var Z=!0;try{Z=N(!0,V)}finally{Z?me():(O=!1,N=null)}}else O=!1}var me;if(typeof I=="function")me=function(){I(ce)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,J=H.port2;H.port1.onmessage=ce,me=function(){J.postMessage(null)}}else me=function(){v(ce,0)};function re(V){N=V,O||(O=!0,me())}function ue(V,Z){le=v(function(){V(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,re(W))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(V){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var X=x;x=Z;try{return V()}finally{x=X}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,Z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=x;x=V;try{return Z()}finally{x=X}},s.unstable_scheduleCallback=function(V,Z,X){var P=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?P+X:P):X=P,V){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=X+G,V={id:_++,callback:Z,priorityLevel:V,startTime:X,expirationTime:G,sortIndex:-1},X>P?(V.sortIndex=X,e(m,V),n(h)===null&&V===n(m)&&(E?(g(le),le=-1):E=!0,ue(F,X-P))):(V.sortIndex=G,e(h,V),T||S||(T=!0,re(W))),V},s.unstable_shouldYield=oe,s.unstable_wrapCallback=function(V){var Z=x;return function(){var X=x;x=Z;try{return V.apply(this,arguments)}finally{x=X}}}})(wc)),wc}var sp;function Tv(){return sp||(sp=1,Tc.exports=Ev()),Tc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function wv(){if(op)return Pn;op=1;var s=Mf(),e=Tv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function x(t){return h.call(y,t)?!0:h.call(_,t)?!1:m.test(t)?y[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(t,i,o,l,f,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new E(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);v[i]=new E(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);v[i]=new E(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);v[i]=new E(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function C(t,i,o,l){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,l)&&(o=null),l||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var F=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),O=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),oe=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),V=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,P;function G(t){if(P===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);P=i&&i[1]||""}return`
`+P+t}var Y=!1;function ae(t,i){if(!t||Y)return"";Y=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var f=te.stack.split(`
`),p=l.stack.split(`
`),M=f.length-1,D=p.length-1;1<=M&&0<=D&&f[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(f[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||f[M]!==p[D]){var k=`
`+f[M].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=M&&0<=D);break}}}finally{Y=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?G(t):""}function fe(t){switch(t.tag){case 5:return G(t.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return t=ae(t.type,!1),t;case 11:return t=ae(t.type.render,!1),t;case 1:return t=ae(t.type,!0),t;default:return""}}function Te(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case O:return"Portal";case R:return"Profiler";case le:return"StrictMode";case me:return"Suspense";case H:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case oe:return(t.displayName||"Context")+".Consumer";case L:return(t._context.displayName||"Context")+".Provider";case ce:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return i=t.displayName||null,i!==null?i:Te(t.type)||"Memo";case re:i=t._payload,t=t._init;try{return Te(t(i))}catch{}}return null}function we(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(i);case 8:return i===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ke(t){var i=Ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ut(t){t._valueTracker||(t._valueTracker=ke(t))}function ee(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ne(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ye(t,i){var o=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function tt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=be(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Be(t,i){i=i.checked,i!=null&&C(t,"checked",i,!1)}function Tt(t,i){Be(t,i);var o=be(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?b(t,i.type,o):i.hasOwnProperty("defaultValue")&&b(t,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function st(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function b(t,i,o){(i!=="number"||Bt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var w=Array.isArray;function Q(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+be(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function ve(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _e(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(w(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:be(o)}}function ye(t,i){var o=be(i.value),l=be(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function Ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qe,ot=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(qe=qe||document.createElement("div"),qe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=qe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function he(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ct=["Webkit","ms","Moz","O"];Object.keys(xt).forEach(function(t){ct.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),xt[i]=xt[t]})});function nt(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||xt.hasOwnProperty(t)&&xt[t]?(""+i).trim():i+"px"}function Xe(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=nt(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var Le=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function U(t,i){if(i){if(Le[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Me(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ve=null;function Ue(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ge=null,z=null,Se=null;function Re(t){if(t=_o(t)){if(typeof ge!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ha(i),ge(t.stateNode,t.type,i))}}function Qe(t){z?Se?Se.push(t):Se=[t]:z=t}function Ke(){if(z){var t=z,i=Se;if(Se=z=null,Re(t),i)for(t=0;t<i.length;t++)Re(i[t])}}function pt(t,i){return t(i)}function mt(){}var Ct=!1;function Nt(t,i,o){if(Ct)return t(i,o);Ct=!0;try{return pt(t,i,o)}finally{Ct=!1,(z!==null||Se!==null)&&(mt(),Ke())}}function gt(t,i){var o=t.stateNode;if(o===null)return null;var l=ha(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var It=!1;if(c)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){It=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{It=!1}function jo(t,i,o,l,f,p,M,D,k){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(pe){this.onError(pe)}}var yr=!1,vi=null,Sr=!1,Bi=null,Yo={onError:function(t){yr=!0,vi=t}};function qo(t,i,o,l,f,p,M,D,k){yr=!1,vi=null,jo.apply(Yo,arguments)}function Vl(t,i,o,l,f,p,M,D,k){if(qo.apply(this,arguments),yr){if(yr){var te=vi;yr=!1,vi=null}else throw Error(n(198));Sr||(Sr=!0,Bi=te)}}function xi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ko(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function A(t){if(xi(t)!==t)throw Error(n(188))}function K(t){var i=t.alternate;if(!i){if(i=xi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return A(f),t;if(p===l)return A(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=p;else{for(var M=!1,D=f.child;D;){if(D===o){M=!0,o=f,l=p;break}if(D===l){M=!0,l=f,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,l=f;break}if(D===l){M=!0,l=p,o=f;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ie(t){return t=K(t),t!==null?se(t):null}function se(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=se(t);if(i!==null)return i;t=t.sibling}return null}var ne=e.unstable_scheduleCallback,Pe=e.unstable_cancelCallback,je=e.unstable_shouldYield,Je=e.unstable_requestPaint,Fe=e.unstable_now,ft=e.unstable_getCurrentPriorityLevel,rt=e.unstable_ImmediatePriority,at=e.unstable_UserBlockingPriority,bt=e.unstable_NormalPriority,mn=e.unstable_LowPriority,Vt=e.unstable_IdlePriority,Tn=null,St=null;function dt(t){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Tn,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:$o,Ft=Math.log,yi=Math.LN2;function $o(t){return t>>>=0,t===0?32:31-(Ft(t)/yi|0)|0}var fi=64,Hi=4194304;function Ht(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bn(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~f;D!==0?l=Ht(D):(p&=M,p!==0&&(l=Ht(p)))}else M=o&~f,M!==0?l=Ht(M):p!==0&&(l=Ht(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-gn(i),f=1<<o,l|=t[o],i&=~f;return l}function Qs(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-gn(p),D=1<<M,k=f[M];k===-1?((D&o)===0||(D&l)!==0)&&(f[M]=Qs(D,i)):k<=i&&(t.expiredLanes|=D),p&=~D}}function Mr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zo(){var t=fi;return fi<<=1,(fi&4194240)===0&&(fi=64),t}function $r(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Js(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-gn(i),t[i]=o}function zg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-gn(o),p=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~p}}function Wl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-gn(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var wt=0;function Pf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Df,Xl,Uf,Nf,If,jl=!1,Qo=[],Gi=null,Vi=null,Wi=null,eo=new Map,to=new Map,Xi=[],kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ff(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(i.pointerId)}}function no(t,i,o,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=_o(i),i!==null&&Xl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Bg(t,i,o,l,f){switch(i){case"focusin":return Gi=no(Gi,t,i,o,l,f),!0;case"dragenter":return Vi=no(Vi,t,i,o,l,f),!0;case"mouseover":return Wi=no(Wi,t,i,o,l,f),!0;case"pointerover":var p=f.pointerId;return eo.set(p,no(eo.get(p)||null,t,i,o,l,f)),!0;case"gotpointercapture":return p=f.pointerId,to.set(p,no(to.get(p)||null,t,i,o,l,f)),!0}return!1}function Of(t){var i=Er(t.target);if(i!==null){var o=xi(i);if(o!==null){if(i=o.tag,i===13){if(i=Ko(o),i!==null){t.blockedOn=i,If(t.priority,function(){Uf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Ve=l,o.target.dispatchEvent(l),Ve=null}else return i=_o(o),i!==null&&Xl(i),t.blockedOn=o,!1;i.shift()}return!0}function zf(t,i,o){Jo(t)&&o.delete(i)}function Hg(){jl=!1,Gi!==null&&Jo(Gi)&&(Gi=null),Vi!==null&&Jo(Vi)&&(Vi=null),Wi!==null&&Jo(Wi)&&(Wi=null),eo.forEach(zf),to.forEach(zf)}function io(t,i){t.blockedOn===i&&(t.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Hg)))}function ro(t){function i(f){return io(f,t)}if(0<Qo.length){io(Qo[0],t);for(var o=1;o<Qo.length;o++){var l=Qo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Gi!==null&&io(Gi,t),Vi!==null&&io(Vi,t),Wi!==null&&io(Wi,t),eo.forEach(i),to.forEach(i),o=0;o<Xi.length;o++)l=Xi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Xi.length&&(o=Xi[0],o.blockedOn===null);)Of(o),o.blockedOn===null&&Xi.shift()}var Zr=F.ReactCurrentBatchConfig,ea=!0;function Gg(t,i,o,l){var f=wt,p=Zr.transition;Zr.transition=null;try{wt=1,Yl(t,i,o,l)}finally{wt=f,Zr.transition=p}}function Vg(t,i,o,l){var f=wt,p=Zr.transition;Zr.transition=null;try{wt=4,Yl(t,i,o,l)}finally{wt=f,Zr.transition=p}}function Yl(t,i,o,l){if(ea){var f=ql(t,i,o,l);if(f===null)fu(t,i,l,ta,o),Ff(t,l);else if(Bg(f,t,i,o,l))l.stopPropagation();else if(Ff(t,l),i&4&&-1<kg.indexOf(t)){for(;f!==null;){var p=_o(f);if(p!==null&&Df(p),p=ql(t,i,o,l),p===null&&fu(t,i,l,ta,o),p===f)break;f=p}f!==null&&l.stopPropagation()}else fu(t,i,l,null,o)}}var ta=null;function ql(t,i,o,l){if(ta=null,t=Ue(l),t=Er(t),t!==null)if(i=xi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ko(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ta=t,null}function kf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ft()){case rt:return 1;case at:return 4;case bt:case mn:return 16;case Vt:return 536870912;default:return 16}default:return 16}}var ji=null,Kl=null,na=null;function Bf(){if(na)return na;var t,i=Kl,o=i.length,l,f="value"in ji?ji.value:ji.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===f[p-l];l++);return na=f.slice(t,1<l?1-l:void 0)}function ia(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ra(){return!0}function Hf(){return!1}function Nn(t){function i(o,l,f,p,M){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ra:Hf,this.isPropagationStopped=Hf,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Nn(Qr),so=X({},Qr,{view:0,detail:0}),Wg=Nn(so),Zl,Ql,oo,sa=X({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(Zl=t.screenX-oo.screenX,Ql=t.screenY-oo.screenY):Ql=Zl=0,oo=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Gf=Nn(sa),Xg=X({},sa,{dataTransfer:0}),jg=Nn(Xg),Yg=X({},so,{relatedTarget:0}),Jl=Nn(Yg),qg=X({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kg=Nn(qg),$g=X({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zg=Nn($g),Qg=X({},Qr,{data:0}),Vf=Nn(Qg),Jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=t_[t])?!!i[t]:!1}function eu(){return n_}var i_=X({},so,{key:function(t){if(t.key){var i=Jg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r_=Nn(i_),s_=X({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wf=Nn(s_),o_=X({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),a_=Nn(o_),l_=X({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=Nn(l_),c_=X({},sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=Nn(c_),d_=[9,13,27,32],tu=c&&"CompositionEvent"in window,ao=null;c&&"documentMode"in document&&(ao=document.documentMode);var h_=c&&"TextEvent"in window&&!ao,Xf=c&&(!tu||ao&&8<ao&&11>=ao),jf=" ",Yf=!1;function qf(t,i){switch(t){case"keyup":return d_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function p_(t,i){switch(t){case"compositionend":return Kf(i);case"keypress":return i.which!==32?null:(Yf=!0,jf);case"textInput":return t=i.data,t===jf&&Yf?null:t;default:return null}}function m_(t,i){if(Jr)return t==="compositionend"||!tu&&qf(t,i)?(t=Bf(),na=Kl=ji=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xf&&i.locale!=="ko"?null:i.data;default:return null}}var g_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!g_[t.type]:i==="textarea"}function Zf(t,i,o,l){Qe(l),i=ca(i,"onChange"),0<i.length&&(o=new $l("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var lo=null,uo=null;function __(t){md(t,0)}function oa(t){var i=rs(t);if(ee(i))return t}function v_(t,i){if(t==="change")return i}var Qf=!1;if(c){var nu;if(c){var iu="oninput"in document;if(!iu){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),iu=typeof Jf.oninput=="function"}nu=iu}else nu=!1;Qf=nu&&(!document.documentMode||9<document.documentMode)}function ed(){lo&&(lo.detachEvent("onpropertychange",td),uo=lo=null)}function td(t){if(t.propertyName==="value"&&oa(uo)){var i=[];Zf(i,uo,t,Ue(t)),Nt(__,i)}}function x_(t,i,o){t==="focusin"?(ed(),lo=i,uo=o,lo.attachEvent("onpropertychange",td)):t==="focusout"&&ed()}function y_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oa(uo)}function S_(t,i){if(t==="click")return oa(i)}function M_(t,i){if(t==="input"||t==="change")return oa(i)}function E_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:E_;function co(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!h.call(i,f)||!Qn(t[f],i[f]))return!1}return!0}function nd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function id(t,i){var o=nd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=nd(o)}}function rd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?rd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function sd(){for(var t=window,i=Bt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Bt(t.document)}return i}function ru(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function T_(t){var i=sd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&rd(o.ownerDocument.documentElement,o)){if(l!==null&&ru(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(l.start,f);l=l.end===void 0?p:Math.min(l.end,f),!t.extend&&p>l&&(f=l,l=p,p=f),f=id(o,p);var M=id(o,l);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var w_=c&&"documentMode"in document&&11>=document.documentMode,es=null,su=null,fo=null,ou=!1;function od(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ou||es==null||es!==Bt(l)||(l=es,"selectionStart"in l&&ru(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&co(fo,l)||(fo=l,l=ca(su,"onSelect"),0<l.length&&(i=new $l("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=es)))}function aa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ts={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},au={},ad={};c&&(ad=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function la(t){if(au[t])return au[t];if(!ts[t])return t;var i=ts[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in ad)return au[t]=i[o];return t}var ld=la("animationend"),ud=la("animationiteration"),cd=la("animationstart"),fd=la("transitionend"),dd=new Map,hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,i){dd.set(t,i),u(i,[t])}for(var lu=0;lu<hd.length;lu++){var uu=hd[lu],A_=uu.toLowerCase(),R_=uu[0].toUpperCase()+uu.slice(1);Yi(A_,"on"+R_)}Yi(ld,"onAnimationEnd"),Yi(ud,"onAnimationIteration"),Yi(cd,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(fd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function pd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Vl(l,i,void 0,t),t.currentTarget=null}function md(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],k=D.instance,te=D.currentTarget;if(D=D.listener,k!==p&&f.isPropagationStopped())break e;pd(f,D,te),p=k}else for(M=0;M<l.length;M++){if(D=l[M],k=D.instance,te=D.currentTarget,D=D.listener,k!==p&&f.isPropagationStopped())break e;pd(f,D,te),p=k}}}if(Sr)throw t=Bi,Sr=!1,Bi=null,t}function Pt(t,i){var o=i[_u];o===void 0&&(o=i[_u]=new Set);var l=t+"__bubble";o.has(l)||(gd(i,t,2,!1),o.add(l))}function cu(t,i,o){var l=0;i&&(l|=4),gd(o,t,l,i)}var ua="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[ua]){t[ua]=!0,r.forEach(function(o){o!=="selectionchange"&&(C_.has(o)||cu(o,!1,t),cu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ua]||(i[ua]=!0,cu("selectionchange",!1,i))}}function gd(t,i,o,l){switch(kf(i)){case 1:var f=Gg;break;case 4:f=Vg;break;default:f=Yl}o=f.bind(null,i,o,t),f=void 0,!It||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function fu(t,i,o,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;M=M.return}for(;D!==null;){if(M=Er(D),M===null)return;if(k=M.tag,k===5||k===6){l=p=M;continue e}D=D.parentNode}}l=l.return}Nt(function(){var te=p,pe=Ue(o),xe=[];e:{var de=dd.get(t);if(de!==void 0){var De=$l,ze=t;switch(t){case"keypress":if(ia(o)===0)break e;case"keydown":case"keyup":De=r_;break;case"focusin":ze="focus",De=Jl;break;case"focusout":ze="blur",De=Jl;break;case"beforeblur":case"afterblur":De=Jl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=a_;break;case ld:case ud:case cd:De=Kg;break;case fd:De=u_;break;case"scroll":De=Wg;break;case"wheel":De=f_;break;case"copy":case"cut":case"paste":De=Zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=Wf}var He=(i&4)!==0,Wt=!He&&t==="scroll",q=He?de!==null?de+"Capture":null:de;He=[];for(var B=te,$;B!==null;){$=B;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,q!==null&&(Ee=gt(B,q),Ee!=null&&He.push(mo(B,Ee,$)))),Wt)break;B=B.return}0<He.length&&(de=new De(de,ze,null,o,pe),xe.push({event:de,listeners:He}))}}if((i&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",de&&o!==Ve&&(ze=o.relatedTarget||o.fromElement)&&(Er(ze)||ze[Si]))break e;if((De||de)&&(de=pe.window===pe?pe:(de=pe.ownerDocument)?de.defaultView||de.parentWindow:window,De?(ze=o.relatedTarget||o.toElement,De=te,ze=ze?Er(ze):null,ze!==null&&(Wt=xi(ze),ze!==Wt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=te),De!==ze)){if(He=Gf,Ee="onMouseLeave",q="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(He=Wf,Ee="onPointerLeave",q="onPointerEnter",B="pointer"),Wt=De==null?de:rs(De),$=ze==null?de:rs(ze),de=new He(Ee,B+"leave",De,o,pe),de.target=Wt,de.relatedTarget=$,Ee=null,Er(pe)===te&&(He=new He(q,B+"enter",ze,o,pe),He.target=$,He.relatedTarget=Wt,Ee=He),Wt=Ee,De&&ze)t:{for(He=De,q=ze,B=0,$=He;$;$=ns($))B++;for($=0,Ee=q;Ee;Ee=ns(Ee))$++;for(;0<B-$;)He=ns(He),B--;for(;0<$-B;)q=ns(q),$--;for(;B--;){if(He===q||q!==null&&He===q.alternate)break t;He=ns(He),q=ns(q)}He=null}else He=null;De!==null&&_d(xe,de,De,He,!1),ze!==null&&Wt!==null&&_d(xe,Wt,ze,He,!0)}}e:{if(de=te?rs(te):window,De=de.nodeName&&de.nodeName.toLowerCase(),De==="select"||De==="input"&&de.type==="file")var We=v_;else if($f(de))if(Qf)We=M_;else{We=y_;var $e=x_}else(De=de.nodeName)&&De.toLowerCase()==="input"&&(de.type==="checkbox"||de.type==="radio")&&(We=S_);if(We&&(We=We(t,te))){Zf(xe,We,o,pe);break e}$e&&$e(t,de,te),t==="focusout"&&($e=de._wrapperState)&&$e.controlled&&de.type==="number"&&b(de,"number",de.value)}switch($e=te?rs(te):window,t){case"focusin":($f($e)||$e.contentEditable==="true")&&(es=$e,su=te,fo=null);break;case"focusout":fo=su=es=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,od(xe,o,pe);break;case"selectionchange":if(w_)break;case"keydown":case"keyup":od(xe,o,pe)}var Ze;if(tu)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Jr?qf(t,o)&&(it="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(Xf&&o.locale!=="ko"&&(Jr||it!=="onCompositionStart"?it==="onCompositionEnd"&&Jr&&(Ze=Bf()):(ji=pe,Kl="value"in ji?ji.value:ji.textContent,Jr=!0)),$e=ca(te,it),0<$e.length&&(it=new Vf(it,t,null,o,pe),xe.push({event:it,listeners:$e}),Ze?it.data=Ze:(Ze=Kf(o),Ze!==null&&(it.data=Ze)))),(Ze=h_?p_(t,o):m_(t,o))&&(te=ca(te,"onBeforeInput"),0<te.length&&(pe=new Vf("onBeforeInput","beforeinput",null,o,pe),xe.push({event:pe,listeners:te}),pe.data=Ze))}md(xe,i)})}function mo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ca(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=gt(t,o),p!=null&&l.unshift(mo(t,p,f)),p=gt(t,i),p!=null&&l.push(mo(t,p,f))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _d(t,i,o,l,f){for(var p=i._reactName,M=[];o!==null&&o!==l;){var D=o,k=D.alternate,te=D.stateNode;if(k!==null&&k===l)break;D.tag===5&&te!==null&&(D=te,f?(k=gt(o,p),k!=null&&M.unshift(mo(o,k,D))):f||(k=gt(o,p),k!=null&&M.push(mo(o,k,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var b_=/\r\n?/g,L_=/\u0000|\uFFFD/g;function vd(t){return(typeof t=="string"?t:""+t).replace(b_,`
`).replace(L_,"")}function fa(t,i,o){if(i=vd(i),vd(t)!==i&&o)throw Error(n(425))}function da(){}var du=null,hu=null;function pu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,P_=typeof clearTimeout=="function"?clearTimeout:void 0,xd=typeof Promise=="function"?Promise:void 0,D_=typeof queueMicrotask=="function"?queueMicrotask:typeof xd<"u"?function(t){return xd.resolve(null).then(t).catch(U_)}:mu;function U_(t){setTimeout(function(){throw t})}function gu(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),ro(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);ro(i)}function qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function yd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),di="__reactFiber$"+is,go="__reactProps$"+is,Si="__reactContainer$"+is,_u="__reactEvents$"+is,N_="__reactListeners$"+is,I_="__reactHandles$"+is;function Er(t){var i=t[di];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Si]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=yd(t);t!==null;){if(o=t[di])return o;t=yd(t)}return i}t=o,o=t.parentNode}return null}function _o(t){return t=t[di]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ha(t){return t[go]||null}var vu=[],ss=-1;function Ki(t){return{current:t}}function Dt(t){0>ss||(t.current=vu[ss],vu[ss]=null,ss--)}function Lt(t,i){ss++,vu[ss]=t.current,t.current=i}var $i={},un=Ki($i),An=Ki(!1),Tr=$i;function os(t,i){var o=t.type.contextTypes;if(!o)return $i;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Rn(t){return t=t.childContextTypes,t!=null}function pa(){Dt(An),Dt(un)}function Sd(t,i,o){if(un.current!==$i)throw Error(n(168));Lt(un,i),Lt(An,o)}function Md(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,we(t)||"Unknown",f));return X({},o,l)}function ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Tr=un.current,Lt(un,t),Lt(An,An.current),!0}function Ed(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Md(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,Dt(An),Dt(un),Lt(un,t)):Dt(An),Lt(An,o)}var Mi=null,ga=!1,xu=!1;function Td(t){Mi===null?Mi=[t]:Mi.push(t)}function F_(t){ga=!0,Td(t)}function Zi(){if(!xu&&Mi!==null){xu=!0;var t=0,i=wt;try{var o=Mi;for(wt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Mi=null,ga=!1}catch(f){throw Mi!==null&&(Mi=Mi.slice(t+1)),ne(rt,Zi),f}finally{wt=i,xu=!1}}return null}var as=[],ls=0,_a=null,va=0,Hn=[],Gn=0,wr=null,Ei=1,Ti="";function Ar(t,i){as[ls++]=va,as[ls++]=_a,_a=t,va=i}function wd(t,i,o){Hn[Gn++]=Ei,Hn[Gn++]=Ti,Hn[Gn++]=wr,wr=t;var l=Ei;t=Ti;var f=32-gn(l)-1;l&=~(1<<f),o+=1;var p=32-gn(i)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Ei=1<<32-gn(i)+f|o<<f|l,Ti=p+t}else Ei=1<<p|o<<f|l,Ti=t}function yu(t){t.return!==null&&(Ar(t,1),wd(t,1,0))}function Su(t){for(;t===_a;)_a=as[--ls],as[ls]=null,va=as[--ls],as[ls]=null;for(;t===wr;)wr=Hn[--Gn],Hn[Gn]=null,Ti=Hn[--Gn],Hn[Gn]=null,Ei=Hn[--Gn],Hn[Gn]=null}var In=null,Fn=null,Ot=!1,Jn=null;function Ad(t,i){var o=jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Rd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Fn=qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,In=t,Fn=null,!0):!1;default:return!1}}function Mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eu(t){if(Ot){var i=Fn;if(i){var o=i;if(!Rd(t,i)){if(Mu(t))throw Error(n(418));i=qi(o.nextSibling);var l=In;i&&Rd(t,i)?Ad(l,o):(t.flags=t.flags&-4097|2,Ot=!1,In=t)}}else{if(Mu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,In=t}}}function Cd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function xa(t){if(t!==In)return!1;if(!Ot)return Cd(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!pu(t.type,t.memoizedProps)),i&&(i=Fn)){if(Mu(t))throw bd(),Error(n(418));for(;i;)Ad(t,i),i=qi(i.nextSibling)}if(Cd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Fn=qi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=In?qi(t.stateNode.nextSibling):null;return!0}function bd(){for(var t=Fn;t;)t=qi(t.nextSibling)}function us(){Fn=In=null,Ot=!1}function Tu(t){Jn===null?Jn=[t]:Jn.push(t)}var O_=F.ReactCurrentBatchConfig;function vo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=f.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ya(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ld(t){var i=t._init;return i(t._payload)}function Pd(t){function i(q,B){if(t){var $=q.deletions;$===null?(q.deletions=[B],q.flags|=16):$.push(B)}}function o(q,B){if(!t)return null;for(;B!==null;)i(q,B),B=B.sibling;return null}function l(q,B){for(q=new Map;B!==null;)B.key!==null?q.set(B.key,B):q.set(B.index,B),B=B.sibling;return q}function f(q,B){return q=sr(q,B),q.index=0,q.sibling=null,q}function p(q,B,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<B?(q.flags|=2,B):$):(q.flags|=2,B)):(q.flags|=1048576,B)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,B,$,Ee){return B===null||B.tag!==6?(B=mc($,q.mode,Ee),B.return=q,B):(B=f(B,$),B.return=q,B)}function k(q,B,$,Ee){var We=$.type;return We===N?pe(q,B,$.props.children,Ee,$.key):B!==null&&(B.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===re&&Ld(We)===B.type)?(Ee=f(B,$.props),Ee.ref=vo(q,B,$),Ee.return=q,Ee):(Ee=Wa($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=vo(q,B,$),Ee.return=q,Ee)}function te(q,B,$,Ee){return B===null||B.tag!==4||B.stateNode.containerInfo!==$.containerInfo||B.stateNode.implementation!==$.implementation?(B=gc($,q.mode,Ee),B.return=q,B):(B=f(B,$.children||[]),B.return=q,B)}function pe(q,B,$,Ee,We){return B===null||B.tag!==7?(B=Nr($,q.mode,Ee,We),B.return=q,B):(B=f(B,$),B.return=q,B)}function xe(q,B,$){if(typeof B=="string"&&B!==""||typeof B=="number")return B=mc(""+B,q.mode,$),B.return=q,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case W:return $=Wa(B.type,B.key,B.props,null,q.mode,$),$.ref=vo(q,null,B),$.return=q,$;case O:return B=gc(B,q.mode,$),B.return=q,B;case re:var Ee=B._init;return xe(q,Ee(B._payload),$)}if(w(B)||Z(B))return B=Nr(B,q.mode,$,null),B.return=q,B;ya(q,B)}return null}function de(q,B,$,Ee){var We=B!==null?B.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return We!==null?null:D(q,B,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case W:return $.key===We?k(q,B,$,Ee):null;case O:return $.key===We?te(q,B,$,Ee):null;case re:return We=$._init,de(q,B,We($._payload),Ee)}if(w($)||Z($))return We!==null?null:pe(q,B,$,Ee,null);ya(q,$)}return null}function De(q,B,$,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get($)||null,D(B,q,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case W:return q=q.get(Ee.key===null?$:Ee.key)||null,k(B,q,Ee,We);case O:return q=q.get(Ee.key===null?$:Ee.key)||null,te(B,q,Ee,We);case re:var $e=Ee._init;return De(q,B,$,$e(Ee._payload),We)}if(w(Ee)||Z(Ee))return q=q.get($)||null,pe(B,q,Ee,We,null);ya(B,Ee)}return null}function ze(q,B,$,Ee){for(var We=null,$e=null,Ze=B,it=B=0,en=null;Ze!==null&&it<$.length;it++){Ze.index>it?(en=Ze,Ze=null):en=Ze.sibling;var Et=de(q,Ze,$[it],Ee);if(Et===null){Ze===null&&(Ze=en);break}t&&Ze&&Et.alternate===null&&i(q,Ze),B=p(Et,B,it),$e===null?We=Et:$e.sibling=Et,$e=Et,Ze=en}if(it===$.length)return o(q,Ze),Ot&&Ar(q,it),We;if(Ze===null){for(;it<$.length;it++)Ze=xe(q,$[it],Ee),Ze!==null&&(B=p(Ze,B,it),$e===null?We=Ze:$e.sibling=Ze,$e=Ze);return Ot&&Ar(q,it),We}for(Ze=l(q,Ze);it<$.length;it++)en=De(Ze,q,it,$[it],Ee),en!==null&&(t&&en.alternate!==null&&Ze.delete(en.key===null?it:en.key),B=p(en,B,it),$e===null?We=en:$e.sibling=en,$e=en);return t&&Ze.forEach(function(or){return i(q,or)}),Ot&&Ar(q,it),We}function He(q,B,$,Ee){var We=Z($);if(typeof We!="function")throw Error(n(150));if($=We.call($),$==null)throw Error(n(151));for(var $e=We=null,Ze=B,it=B=0,en=null,Et=$.next();Ze!==null&&!Et.done;it++,Et=$.next()){Ze.index>it?(en=Ze,Ze=null):en=Ze.sibling;var or=de(q,Ze,Et.value,Ee);if(or===null){Ze===null&&(Ze=en);break}t&&Ze&&or.alternate===null&&i(q,Ze),B=p(or,B,it),$e===null?We=or:$e.sibling=or,$e=or,Ze=en}if(Et.done)return o(q,Ze),Ot&&Ar(q,it),We;if(Ze===null){for(;!Et.done;it++,Et=$.next())Et=xe(q,Et.value,Ee),Et!==null&&(B=p(Et,B,it),$e===null?We=Et:$e.sibling=Et,$e=Et);return Ot&&Ar(q,it),We}for(Ze=l(q,Ze);!Et.done;it++,Et=$.next())Et=De(Ze,q,it,Et.value,Ee),Et!==null&&(t&&Et.alternate!==null&&Ze.delete(Et.key===null?it:Et.key),B=p(Et,B,it),$e===null?We=Et:$e.sibling=Et,$e=Et);return t&&Ze.forEach(function(gv){return i(q,gv)}),Ot&&Ar(q,it),We}function Wt(q,B,$,Ee){if(typeof $=="object"&&$!==null&&$.type===N&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case W:e:{for(var We=$.key,$e=B;$e!==null;){if($e.key===We){if(We=$.type,We===N){if($e.tag===7){o(q,$e.sibling),B=f($e,$.props.children),B.return=q,q=B;break e}}else if($e.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===re&&Ld(We)===$e.type){o(q,$e.sibling),B=f($e,$.props),B.ref=vo(q,$e,$),B.return=q,q=B;break e}o(q,$e);break}else i(q,$e);$e=$e.sibling}$.type===N?(B=Nr($.props.children,q.mode,Ee,$.key),B.return=q,q=B):(Ee=Wa($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=vo(q,B,$),Ee.return=q,q=Ee)}return M(q);case O:e:{for($e=$.key;B!==null;){if(B.key===$e)if(B.tag===4&&B.stateNode.containerInfo===$.containerInfo&&B.stateNode.implementation===$.implementation){o(q,B.sibling),B=f(B,$.children||[]),B.return=q,q=B;break e}else{o(q,B);break}else i(q,B);B=B.sibling}B=gc($,q.mode,Ee),B.return=q,q=B}return M(q);case re:return $e=$._init,Wt(q,B,$e($._payload),Ee)}if(w($))return ze(q,B,$,Ee);if(Z($))return He(q,B,$,Ee);ya(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,B!==null&&B.tag===6?(o(q,B.sibling),B=f(B,$),B.return=q,q=B):(o(q,B),B=mc($,q.mode,Ee),B.return=q,q=B),M(q)):o(q,B)}return Wt}var cs=Pd(!0),Dd=Pd(!1),Sa=Ki(null),Ma=null,fs=null,wu=null;function Au(){wu=fs=Ma=null}function Ru(t){var i=Sa.current;Dt(Sa),t._currentValue=i}function Cu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ds(t,i){Ma=t,wu=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Cn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(wu!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(Ma===null)throw Error(n(308));fs=t,Ma.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var Rr=null;function bu(t){Rr===null?Rr=[t]:Rr.push(t)}function Ud(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,bu(i)):(o.next=f.next,f.next=o),i.interleaved=o,wi(t,l)}function wi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Qi=!1;function Lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,wi(t,o)}return f=l.interleaved,f===null?(i.next=i,bu(l)):(i.next=f.next,f.next=i),l.interleaved=i,wi(t,o)}function Ea(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Wl(t,o)}}function Id(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ta(t,i,o,l){var f=t.updateQueue;Qi=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var k=D,te=k.next;k.next=null,M===null?p=te:M.next=te,M=k;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,D=pe.lastBaseUpdate,D!==M&&(D===null?pe.firstBaseUpdate=te:D.next=te,pe.lastBaseUpdate=k))}if(p!==null){var xe=f.baseState;M=0,pe=te=k=null,D=p;do{var de=D.lane,De=D.eventTime;if((l&de)===de){pe!==null&&(pe=pe.next={eventTime:De,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,He=D;switch(de=i,De=o,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){xe=ze.call(De,xe,de);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,de=typeof ze=="function"?ze.call(De,xe,de):ze,de==null)break e;xe=X({},xe,de);break e;case 2:Qi=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,de=f.effects,de===null?f.effects=[D]:de.push(D))}else De={eventTime:De,lane:de,tag:D.tag,payload:D.payload,callback:D.callback,next:null},pe===null?(te=pe=De,k=xe):pe=pe.next=De,M|=de;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;de=D,D=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);if(pe===null&&(k=xe),f.baseState=k,f.firstBaseUpdate=te,f.lastBaseUpdate=pe,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=xe}}function Fd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var xo={},hi=Ki(xo),yo=Ki(xo),So=Ki(xo);function Cr(t){if(t===xo)throw Error(n(174));return t}function Pu(t,i){switch(Lt(So,i),Lt(yo,t),Lt(hi,xo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ie(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ie(i,t)}Dt(hi),Lt(hi,i)}function hs(){Dt(hi),Dt(yo),Dt(So)}function Od(t){Cr(So.current);var i=Cr(hi.current),o=Ie(i,t.type);i!==o&&(Lt(yo,t),Lt(hi,o))}function Du(t){yo.current===t&&(Dt(hi),Dt(yo))}var zt=Ki(0);function wa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uu=[];function Nu(){for(var t=0;t<Uu.length;t++)Uu[t]._workInProgressVersionPrimary=null;Uu.length=0}var Aa=F.ReactCurrentDispatcher,Iu=F.ReactCurrentBatchConfig,br=0,kt=null,qt=null,Qt=null,Ra=!1,Mo=!1,Eo=0,z_=0;function cn(){throw Error(n(321))}function Fu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Qn(t[o],i[o]))return!1;return!0}function Ou(t,i,o,l,f,p){if(br=p,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Aa.current=t===null||t.memoizedState===null?G_:V_,t=o(l,f),Mo){p=0;do{if(Mo=!1,Eo=0,25<=p)throw Error(n(301));p+=1,Qt=qt=null,i.updateQueue=null,Aa.current=W_,t=o(l,f)}while(Mo)}if(Aa.current=La,i=qt!==null&&qt.next!==null,br=0,Qt=qt=kt=null,Ra=!1,i)throw Error(n(300));return t}function zu(){var t=Eo!==0;return Eo=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?kt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Wn(){if(qt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=Qt===null?kt.memoizedState:Qt.next;if(i!==null)Qt=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Qt===null?kt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function To(t,i){return typeof i=="function"?i(t):i}function ku(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=qt,f=l.baseQueue,p=o.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}l.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,l=l.baseState;var D=M=null,k=null,te=p;do{var pe=te.lane;if((br&pe)===pe)k!==null&&(k=k.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var xe={lane:pe,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};k===null?(D=k=xe,M=l):k=k.next=xe,kt.lanes|=pe,Lr|=pe}te=te.next}while(te!==null&&te!==p);k===null?M=l:k.next=D,Qn(l,i.memoizedState)||(Cn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do p=f.lane,kt.lanes|=p,Lr|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Bu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);Qn(p,i.memoizedState)||(Cn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function zd(){}function kd(t,i){var o=kt,l=Wn(),f=i(),p=!Qn(l.memoizedState,f);if(p&&(l.memoizedState=f,Cn=!0),l=l.queue,Hu(Gd.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||Qt!==null&&Qt.memoizedState.tag&1){if(o.flags|=2048,wo(9,Hd.bind(null,o,l,f,i),void 0,null),Jt===null)throw Error(n(349));(br&30)!==0||Bd(o,i,f)}return f}function Bd(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Hd(t,i,o,l){i.value=o,i.getSnapshot=l,Vd(i)&&Wd(t)}function Gd(t,i,o){return o(function(){Vd(i)&&Wd(t)})}function Vd(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Qn(t,o)}catch{return!0}}function Wd(t){var i=wi(t,1);i!==null&&ii(i,t,1,-1)}function Xd(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},i.queue=t,t=t.dispatch=H_.bind(null,kt,t),[i.memoizedState,t]}function wo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function jd(){return Wn().memoizedState}function Ca(t,i,o,l){var f=pi();kt.flags|=t,f.memoizedState=wo(1|i,o,void 0,l===void 0?null:l)}function ba(t,i,o,l){var f=Wn();l=l===void 0?null:l;var p=void 0;if(qt!==null){var M=qt.memoizedState;if(p=M.destroy,l!==null&&Fu(l,M.deps)){f.memoizedState=wo(i,o,p,l);return}}kt.flags|=t,f.memoizedState=wo(1|i,o,p,l)}function Yd(t,i){return Ca(8390656,8,t,i)}function Hu(t,i){return ba(2048,8,t,i)}function qd(t,i){return ba(4,2,t,i)}function Kd(t,i){return ba(4,4,t,i)}function $d(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Zd(t,i,o){return o=o!=null?o.concat([t]):null,ba(4,4,$d.bind(null,i,t),o)}function Gu(){}function Qd(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Fu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Jd(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Fu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function eh(t,i,o){return(br&21)===0?(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=o):(Qn(o,i)||(o=Zo(),kt.lanes|=o,Lr|=o,t.baseState=!0),i)}function k_(t,i){var o=wt;wt=o!==0&&4>o?o:4,t(!0);var l=Iu.transition;Iu.transition={};try{t(!1),i()}finally{wt=o,Iu.transition=l}}function th(){return Wn().memoizedState}function B_(t,i,o){var l=ir(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},nh(t))ih(i,o);else if(o=Ud(t,i,o,l),o!==null){var f=vn();ii(o,t,l,f),rh(o,i,l)}}function H_(t,i,o){var l=ir(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(nh(t))ih(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(f.hasEagerState=!0,f.eagerState=D,Qn(D,M)){var k=i.interleaved;k===null?(f.next=f,bu(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}o=Ud(t,i,f,l),o!==null&&(f=vn(),ii(o,t,l,f),rh(o,i,l))}}function nh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function ih(t,i){Mo=Ra=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function rh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Wl(t,o)}}var La={readContext:Vn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},G_={readContext:Vn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:Yd,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4194308,4,$d.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ca(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ca(4,2,t,i)},useMemo:function(t,i){var o=pi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=pi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=B_.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:Xd,useDebugValue:Gu,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=Xd(!1),i=t[0];return t=k_.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,f=pi();if(Ot){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Jt===null)throw Error(n(349));(br&30)!==0||Bd(l,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,Yd(Gd.bind(null,l,p,t),[t]),l.flags|=2048,wo(9,Hd.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=pi(),i=Jt.identifierPrefix;if(Ot){var o=Ti,l=Ei;o=(l&~(1<<32-gn(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Eo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=z_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},V_={readContext:Vn,useCallback:Qd,useContext:Vn,useEffect:Hu,useImperativeHandle:Zd,useInsertionEffect:qd,useLayoutEffect:Kd,useMemo:Jd,useReducer:ku,useRef:jd,useState:function(){return ku(To)},useDebugValue:Gu,useDeferredValue:function(t){var i=Wn();return eh(i,qt.memoizedState,t)},useTransition:function(){var t=ku(To)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:zd,useSyncExternalStore:kd,useId:th,unstable_isNewReconciler:!1},W_={readContext:Vn,useCallback:Qd,useContext:Vn,useEffect:Hu,useImperativeHandle:Zd,useInsertionEffect:qd,useLayoutEffect:Kd,useMemo:Jd,useReducer:Bu,useRef:jd,useState:function(){return Bu(To)},useDebugValue:Gu,useDeferredValue:function(t){var i=Wn();return qt===null?i.memoizedState=t:eh(i,qt.memoizedState,t)},useTransition:function(){var t=Bu(To)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:zd,useSyncExternalStore:kd,useId:th,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=X({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Vu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:X({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Pa={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),f=ir(t),p=Ai(l,f);p.payload=i,o!=null&&(p.callback=o),i=Ji(t,p,f),i!==null&&(ii(i,t,f,l),Ea(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),f=ir(t),p=Ai(l,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Ji(t,p,f),i!==null&&(ii(i,t,f,l),Ea(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=ir(t),f=Ai(o,l);f.tag=2,i!=null&&(f.callback=i),i=Ji(t,f,l),i!==null&&(ii(i,t,l,o),Ea(i,t,l))}};function sh(t,i,o,l,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!co(o,l)||!co(f,p):!0}function oh(t,i,o){var l=!1,f=$i,p=i.contextType;return typeof p=="object"&&p!==null?p=Vn(p):(f=Rn(i)?Tr:un.current,l=i.contextTypes,p=(l=l!=null)?os(t,f):$i),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Pa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function ah(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Pa.enqueueReplaceState(i,i.state,null)}function Wu(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Lu(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Vn(p):(p=Rn(i)?Tr:un.current,f.context=os(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Vu(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Pa.enqueueReplaceState(f,f.state,null),Ta(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function Xu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function ju(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var X_=typeof WeakMap=="function"?WeakMap:Map;function lh(t,i,o){o=Ai(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){za||(za=!0,ac=l),ju(t,i)},o}function uh(t,i,o){o=Ai(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){ju(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){ju(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function ch(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new X_;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=sv.bind(null,t,i,o),i.then(t,t))}function fh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function dh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ai(-1,1),i.tag=2,Ji(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var j_=F.ReactCurrentOwner,Cn=!1;function _n(t,i,o,l){i.child=t===null?Dd(i,null,o,l):cs(i,t.child,o,l)}function hh(t,i,o,l,f){o=o.render;var p=i.ref;return ds(i,f),l=Ou(t,i,o,l,p,f),o=zu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ri(t,i,f)):(Ot&&o&&yu(i),i.flags|=1,_n(t,i,l,f),i.child)}function ph(t,i,o,l,f){if(t===null){var p=o.type;return typeof p=="function"&&!pc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,mh(t,i,p,l,f)):(t=Wa(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(M,l)&&t.ref===i.ref)return Ri(t,i,f)}return i.flags|=1,t=sr(p,l),t.ref=i.ref,t.return=i,i.child=t}function mh(t,i,o,l,f){if(t!==null){var p=t.memoizedProps;if(co(p,l)&&t.ref===i.ref)if(Cn=!1,i.pendingProps=l=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Cn=!0);else return i.lanes=t.lanes,Ri(t,i,f)}return Yu(t,i,o,l,f)}function gh(t,i,o){var l=i.pendingProps,f=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(gs,On),On|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(gs,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Lt(gs,On),On|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Lt(gs,On),On|=l;return _n(t,i,f,o),i.child}function _h(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Yu(t,i,o,l,f){var p=Rn(o)?Tr:un.current;return p=os(i,p),ds(i,f),o=Ou(t,i,o,l,p,f),l=zu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ri(t,i,f)):(Ot&&l&&yu(i),i.flags|=1,_n(t,i,o,f),i.child)}function vh(t,i,o,l,f){if(Rn(o)){var p=!0;ma(i)}else p=!1;if(ds(i,f),i.stateNode===null)Ua(t,i),oh(i,o,l),Wu(i,o,l,f),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var k=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=Vn(te):(te=Rn(o)?Tr:un.current,te=os(i,te));var pe=o.getDerivedStateFromProps,xe=typeof pe=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||k!==te)&&ah(i,M,l,te),Qi=!1;var de=i.memoizedState;M.state=de,Ta(i,l,M,f),k=i.memoizedState,D!==l||de!==k||An.current||Qi?(typeof pe=="function"&&(Vu(i,o,pe,l),k=i.memoizedState),(D=Qi||sh(i,o,D,l,de,k,te))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),M.props=l,M.state=k,M.context=te,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Nd(t,i),D=i.memoizedProps,te=i.type===i.elementType?D:ei(i.type,D),M.props=te,xe=i.pendingProps,de=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=Vn(k):(k=Rn(o)?Tr:un.current,k=os(i,k));var De=o.getDerivedStateFromProps;(pe=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==xe||de!==k)&&ah(i,M,l,k),Qi=!1,de=i.memoizedState,M.state=de,Ta(i,l,M,f);var ze=i.memoizedState;D!==xe||de!==ze||An.current||Qi?(typeof De=="function"&&(Vu(i,o,De,l),ze=i.memoizedState),(te=Qi||sh(i,o,te,l,de,ze,k)||!1)?(pe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=k,l=te):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),l=!1)}return qu(t,i,o,l,p,f)}function qu(t,i,o,l,f,p){_h(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return f&&Ed(i,o,!1),Ri(t,i,p);l=i.stateNode,j_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=cs(i,t.child,null,p),i.child=cs(i,null,D,p)):_n(t,i,D,p),i.memoizedState=l.state,f&&Ed(i,o,!0),i.child}function xh(t){var i=t.stateNode;i.pendingContext?Sd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Sd(t,i.context,!1),Pu(t,i.containerInfo)}function yh(t,i,o,l,f){return us(),Tu(f),i.flags|=256,_n(t,i,o,l),i.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function $u(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sh(t,i,o){var l=i.pendingProps,f=zt.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(f&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Lt(zt,f&1),t===null)return Eu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Xa(M,l,0,null),t=Nr(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=$u(o),i.memoizedState=Ku,t):Zu(i,M));if(f=t.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return Y_(t,i,M,l,D,f,o);if(p){p=l.fallback,M=i.mode,f=t.child,D=f.sibling;var k={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=sr(f,k),l.subtreeFlags=f.subtreeFlags&14680064),D!==null?p=sr(D,p):(p=Nr(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?$u(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=Ku,l}return p=t.child,t=p.sibling,l=sr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Zu(t,i){return i=Xa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Da(t,i,o,l){return l!==null&&Tu(l),cs(i,t.child,null,o),t=Zu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Y_(t,i,o,l,f,p,M){if(o)return i.flags&256?(i.flags&=-257,l=Xu(Error(n(422))),Da(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,f=i.mode,l=Xa({mode:"visible",children:l.children},f,0,null),p=Nr(p,f,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&cs(i,t.child,null,M),i.child.memoizedState=$u(M),i.memoizedState=Ku,p);if((i.mode&1)===0)return Da(t,i,M,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=Xu(p,l,void 0),Da(t,i,M,l)}if(D=(M&t.childLanes)!==0,Cn||D){if(l=Jt,l!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|M))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,wi(t,f),ii(l,t,f,-1))}return hc(),l=Xu(Error(n(421))),Da(t,i,M,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=ov.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Fn=qi(f.nextSibling),In=i,Ot=!0,Jn=null,t!==null&&(Hn[Gn++]=Ei,Hn[Gn++]=Ti,Hn[Gn++]=wr,Ei=t.id,Ti=t.overflow,wr=i),i=Zu(i,l.children),i.flags|=4096,i)}function Mh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Cu(t.return,i,o)}function Qu(t,i,o,l,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=f)}function Eh(t,i,o){var l=i.pendingProps,f=l.revealOrder,p=l.tail;if(_n(t,i,l.children,o),l=zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mh(t,o,i);else if(t.tag===19)Mh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(zt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&wa(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Qu(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&wa(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Qu(i,!0,o,null,p);break;case"together":Qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ua(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ri(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=sr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=sr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function q_(t,i,o){switch(i.tag){case 3:xh(i),us();break;case 5:Od(i);break;case 1:Rn(i.type)&&ma(i);break;case 4:Pu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Lt(Sa,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(zt,zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Sh(t,i,o):(Lt(zt,zt.current&1),t=Ri(t,i,o),t!==null?t.sibling:null);Lt(zt,zt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Eh(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Lt(zt,zt.current),l)break;return null;case 22:case 23:return i.lanes=0,gh(t,i,o)}return Ri(t,i,o)}var Th,Ju,wh,Ah;Th=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ju=function(){},wh=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Cr(hi.current);var p=null;switch(o){case"input":f=Ye(t,f),l=Ye(t,l),p=[];break;case"select":f=X({},f,{value:void 0}),l=X({},l,{value:void 0}),p=[];break;case"textarea":f=ve(t,f),l=ve(t,l),p=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=da)}U(o,l);var M;o=null;for(te in f)if(!l.hasOwnProperty(te)&&f.hasOwnProperty(te)&&f[te]!=null)if(te==="style"){var D=f[te];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?p||(p=[]):(p=p||[]).push(te,null));for(te in l){var k=l[te];if(D=f!=null?f[te]:void 0,l.hasOwnProperty(te)&&k!==D&&(k!=null||D!=null))if(te==="style")if(D){for(M in D)!D.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&D[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(p||(p=[]),p.push(te,o)),o=k;else te==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(p=p||[]).push(te,k)):te==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(te,""+k):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(k!=null&&te==="onScroll"&&Pt("scroll",t),p||D===k||(p=[])):(p=p||[]).push(te,k))}o&&(p=p||[]).push("style",o);var te=p;(i.updateQueue=te)&&(i.flags|=4)}},Ah=function(t,i,o,l){o!==l&&(i.flags|=4)};function Ao(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function K_(t,i,o){var l=i.pendingProps;switch(Su(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return Rn(i.type)&&pa(),fn(i),null;case 3:return l=i.stateNode,hs(),Dt(An),Dt(un),Nu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(cc(Jn),Jn=null))),Ju(t,i),fn(i),null;case 5:Du(i);var f=Cr(So.current);if(o=i.type,t!==null&&i.stateNode!=null)wh(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return fn(i),null}if(t=Cr(hi.current),xa(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[di]=i,l[go]=p,t=(i.mode&1)!==0,o){case"dialog":Pt("cancel",l),Pt("close",l);break;case"iframe":case"object":case"embed":Pt("load",l);break;case"video":case"audio":for(f=0;f<ho.length;f++)Pt(ho[f],l);break;case"source":Pt("error",l);break;case"img":case"image":case"link":Pt("error",l),Pt("load",l);break;case"details":Pt("toggle",l);break;case"input":tt(l,p),Pt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Pt("invalid",l);break;case"textarea":_e(l,p),Pt("invalid",l)}U(o,p),f=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&fa(l.textContent,D,t),f=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&fa(l.textContent,D,t),f=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Pt("scroll",l)}switch(o){case"input":ut(l),st(l,p,!0);break;case"textarea":ut(l),Ge(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=da)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ce(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[di]=i,t[go]=l,Th(t,i,!1,!1),i.stateNode=t;e:{switch(M=Me(o,l),o){case"dialog":Pt("cancel",t),Pt("close",t),f=l;break;case"iframe":case"object":case"embed":Pt("load",t),f=l;break;case"video":case"audio":for(f=0;f<ho.length;f++)Pt(ho[f],t);f=l;break;case"source":Pt("error",t),f=l;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),f=l;break;case"details":Pt("toggle",t),f=l;break;case"input":tt(t,l),f=Ye(t,l),Pt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=X({},l,{value:void 0}),Pt("invalid",t);break;case"textarea":_e(t,l),f=ve(t,l),Pt("invalid",t);break;default:f=l}U(o,f),D=f;for(p in D)if(D.hasOwnProperty(p)){var k=D[p];p==="style"?Xe(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ot(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&he(t,k):typeof k=="number"&&he(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Pt("scroll",t):k!=null&&C(t,p,k,M))}switch(o){case"input":ut(t),st(t,l,!1);break;case"textarea":ut(t),Ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+be(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?Q(t,!!l.multiple,p,!1):l.defaultValue!=null&&Q(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=da)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(t&&i.stateNode!=null)Ah(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Cr(So.current),Cr(hi.current),xa(i)){if(l=i.stateNode,o=i.memoizedProps,l[di]=i,(p=l.nodeValue!==o)&&(t=In,t!==null))switch(t.tag){case 3:fa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fa(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return fn(i),null;case 13:if(Dt(zt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bd(),us(),i.flags|=98560,p=!1;else if(p=xa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[di]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),p=!1}else Jn!==null&&(cc(Jn),Jn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(zt.current&1)!==0?Kt===0&&(Kt=3):hc())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return hs(),Ju(t,i),t===null&&po(i.stateNode.containerInfo),fn(i),null;case 10:return Ru(i.type._context),fn(i),null;case 17:return Rn(i.type)&&pa(),fn(i),null;case 19:if(Dt(zt),p=i.memoizedState,p===null)return fn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)Ao(p,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=wa(t),M!==null){for(i.flags|=128,Ao(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(zt,zt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Fe()>_s&&(i.flags|=128,l=!0,Ao(p,!1),i.lanes=4194304)}else{if(!l)if(t=wa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ao(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ot)return fn(i),null}else 2*Fe()-p.renderingStartTime>_s&&o!==1073741824&&(i.flags|=128,l=!0,Ao(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Fe(),i.sibling=null,o=zt.current,Lt(zt,l?o&1|2:o&1),i):(fn(i),null);case 22:case 23:return dc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function $_(t,i){switch(Su(i),i.tag){case 1:return Rn(i.type)&&pa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),Dt(An),Dt(un),Nu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Du(i),null;case 13:if(Dt(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(zt),null;case 4:return hs(),null;case 10:return Ru(i.type._context),null;case 22:case 23:return dc(),null;case 24:return null;default:return null}}var Na=!1,dn=!1,Z_=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function ms(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Gt(t,i,l)}else o.current=null}function ec(t,i,o){try{o()}catch(l){Gt(t,i,l)}}var Rh=!1;function Q_(t,i){if(du=ea,t=sd(),ru(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,k=-1,te=0,pe=0,xe=t,de=null;t:for(;;){for(var De;xe!==o||f!==0&&xe.nodeType!==3||(D=M+f),xe!==p||l!==0&&xe.nodeType!==3||(k=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(De=xe.firstChild)!==null;)de=xe,xe=De;for(;;){if(xe===t)break t;if(de===o&&++te===f&&(D=M),de===p&&++pe===l&&(k=M),(De=xe.nextSibling)!==null)break;xe=de,de=xe.parentNode}xe=De}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(hu={focusedElem:t,selectionRange:o},ea=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Wt=ze.memoizedState,q=i.stateNode,B=q.getSnapshotBeforeUpdate(i.elementType===i.type?He:ei(i.type,He),Wt);q.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Gt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return ze=Rh,Rh=!1,ze}function Ro(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&ec(i,o,p)}f=f.next}while(f!==l)}}function Ia(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function tc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ch(t){var i=t.alternate;i!==null&&(t.alternate=null,Ch(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[go],delete i[_u],delete i[N_],delete i[I_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bh(t){return t.tag===5||t.tag===3||t.tag===4}function Lh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(t=t.child,t!==null))for(nc(t,i,o),t=t.sibling;t!==null;)nc(t,i,o),t=t.sibling}function ic(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ic(t,i,o),t=t.sibling;t!==null;)ic(t,i,o),t=t.sibling}var sn=null,ti=!1;function er(t,i,o){for(o=o.child;o!==null;)Ph(t,i,o),o=o.sibling}function Ph(t,i,o){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Tn,o)}catch{}switch(o.tag){case 5:dn||ms(o,i);case 6:var l=sn,f=ti;sn=null,er(t,i,o),sn=l,ti=f,sn!==null&&(ti?(t=sn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):sn.removeChild(o.stateNode));break;case 18:sn!==null&&(ti?(t=sn,o=o.stateNode,t.nodeType===8?gu(t.parentNode,o):t.nodeType===1&&gu(t,o),ro(t)):gu(sn,o.stateNode));break;case 4:l=sn,f=ti,sn=o.stateNode.containerInfo,ti=!0,er(t,i,o),sn=l,ti=f;break;case 0:case 11:case 14:case 15:if(!dn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var p=f,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&ec(o,i,M),f=f.next}while(f!==l)}er(t,i,o);break;case 1:if(!dn&&(ms(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Gt(o,i,D)}er(t,i,o);break;case 21:er(t,i,o);break;case 22:o.mode&1?(dn=(l=dn)||o.memoizedState!==null,er(t,i,o),dn=l):er(t,i,o);break;default:er(t,i,o)}}function Dh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Z_),i.forEach(function(l){var f=av.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function ni(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var p=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:sn=D.stateNode,ti=!1;break e;case 3:sn=D.stateNode.containerInfo,ti=!0;break e;case 4:sn=D.stateNode.containerInfo,ti=!0;break e}D=D.return}if(sn===null)throw Error(n(160));Ph(p,M,f),sn=null,ti=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(te){Gt(f,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Uh(i,t),i=i.sibling}function Uh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),mi(t),l&4){try{Ro(3,t,t.return),Ia(3,t)}catch(He){Gt(t,t.return,He)}try{Ro(5,t,t.return)}catch(He){Gt(t,t.return,He)}}break;case 1:ni(i,t),mi(t),l&512&&o!==null&&ms(o,o.return);break;case 5:if(ni(i,t),mi(t),l&512&&o!==null&&ms(o,o.return),t.flags&32){var f=t.stateNode;try{he(f,"")}catch(He){Gt(t,t.return,He)}}if(l&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,D=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&Be(f,p),Me(D,M);var te=Me(D,p);for(M=0;M<k.length;M+=2){var pe=k[M],xe=k[M+1];pe==="style"?Xe(f,xe):pe==="dangerouslySetInnerHTML"?ot(f,xe):pe==="children"?he(f,xe):C(f,pe,xe,te)}switch(D){case"input":Tt(f,p);break;case"textarea":ye(f,p);break;case"select":var de=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var De=p.value;De!=null?Q(f,!!p.multiple,De,!1):de!==!!p.multiple&&(p.defaultValue!=null?Q(f,!!p.multiple,p.defaultValue,!0):Q(f,!!p.multiple,p.multiple?[]:"",!1))}f[go]=p}catch(He){Gt(t,t.return,He)}}break;case 6:if(ni(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(He){Gt(t,t.return,He)}}break;case 3:if(ni(i,t),mi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(He){Gt(t,t.return,He)}break;case 4:ni(i,t),mi(t);break;case 13:ni(i,t),mi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(oc=Fe())),l&4&&Dh(t);break;case 22:if(pe=o!==null&&o.memoizedState!==null,t.mode&1?(dn=(te=dn)||pe,ni(i,t),dn=te):ni(i,t),mi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!pe&&(t.mode&1)!==0)for(Oe=t,pe=t.child;pe!==null;){for(xe=Oe=pe;Oe!==null;){switch(de=Oe,De=de.child,de.tag){case 0:case 11:case 14:case 15:Ro(4,de,de.return);break;case 1:ms(de,de.return);var ze=de.stateNode;if(typeof ze.componentWillUnmount=="function"){l=de,o=de.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Gt(l,o,He)}}break;case 5:ms(de,de.return);break;case 22:if(de.memoizedState!==null){Fh(xe);continue}}De!==null?(De.return=de,Oe=De):Fh(xe)}pe=pe.sibling}e:for(pe=null,xe=t;;){if(xe.tag===5){if(pe===null){pe=xe;try{f=xe.stateNode,te?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=xe.stateNode,k=xe.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=nt("display",M))}catch(He){Gt(t,t.return,He)}}}else if(xe.tag===6){if(pe===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(He){Gt(t,t.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;pe===xe&&(pe=null),xe=xe.return}pe===xe&&(pe=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ni(i,t),mi(t),l&4&&Dh(t);break;case 21:break;default:ni(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(bh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(he(f,""),l.flags&=-33);var p=Lh(t);ic(t,p,f);break;case 3:case 4:var M=l.stateNode.containerInfo,D=Lh(t);nc(t,D,M);break;default:throw Error(n(161))}}catch(k){Gt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function J_(t,i,o){Oe=t,Nh(t)}function Nh(t,i,o){for(var l=(t.mode&1)!==0;Oe!==null;){var f=Oe,p=f.child;if(f.tag===22&&l){var M=f.memoizedState!==null||Na;if(!M){var D=f.alternate,k=D!==null&&D.memoizedState!==null||dn;D=Na;var te=dn;if(Na=M,(dn=k)&&!te)for(Oe=f;Oe!==null;)M=Oe,k=M.child,M.tag===22&&M.memoizedState!==null?Oh(f):k!==null?(k.return=M,Oe=k):Oh(f);for(;p!==null;)Oe=p,Nh(p),p=p.sibling;Oe=f,Na=D,dn=te}Ih(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Oe=p):Ih(t)}}function Ih(t){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||Ia(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!dn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Fd(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Fd(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var pe=te.memoizedState;if(pe!==null){var xe=pe.dehydrated;xe!==null&&ro(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dn||i.flags&512&&tc(i)}catch(de){Gt(i,i.return,de)}}if(i===t){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Fh(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Oh(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ia(4,i)}catch(k){Gt(i,o,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(k){Gt(i,f,k)}}var p=i.return;try{tc(i)}catch(k){Gt(i,p,k)}break;case 5:var M=i.return;try{tc(i)}catch(k){Gt(i,M,k)}}}catch(k){Gt(i,i.return,k)}if(i===t){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var ev=Math.ceil,Fa=F.ReactCurrentDispatcher,rc=F.ReactCurrentOwner,Xn=F.ReactCurrentBatchConfig,Mt=0,Jt=null,jt=null,on=0,On=0,gs=Ki(0),Kt=0,Co=null,Lr=0,Oa=0,sc=0,bo=null,bn=null,oc=0,_s=1/0,Ci=null,za=!1,ac=null,tr=null,ka=!1,nr=null,Ba=0,Lo=0,lc=null,Ha=-1,Ga=0;function vn(){return(Mt&6)!==0?Fe():Ha!==-1?Ha:Ha=Fe()}function ir(t){return(t.mode&1)===0?1:(Mt&2)!==0&&on!==0?on&-on:O_.transition!==null?(Ga===0&&(Ga=Zo()),Ga):(t=wt,t!==0||(t=window.event,t=t===void 0?16:kf(t.type)),t)}function ii(t,i,o,l){if(50<Lo)throw Lo=0,lc=null,Error(n(185));Js(t,o,l),((Mt&2)===0||t!==Jt)&&(t===Jt&&((Mt&2)===0&&(Oa|=o),Kt===4&&rr(t,on)),Ln(t,l),o===1&&Mt===0&&(i.mode&1)===0&&(_s=Fe()+500,ga&&Zi()))}function Ln(t,i){var o=t.callbackNode;wn(t,i);var l=Bn(t,t===Jt?on:0);if(l===0)o!==null&&Pe(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&Pe(o),i===1)t.tag===0?F_(kh.bind(null,t)):Td(kh.bind(null,t)),D_(function(){(Mt&6)===0&&Zi()}),o=null;else{switch(Pf(l)){case 1:o=rt;break;case 4:o=at;break;case 16:o=bt;break;case 536870912:o=Vt;break;default:o=bt}o=Yh(o,zh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function zh(t,i){if(Ha=-1,Ga=0,(Mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(vs()&&t.callbackNode!==o)return null;var l=Bn(t,t===Jt?on:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Va(t,l);else{i=l;var f=Mt;Mt|=2;var p=Hh();(Jt!==t||on!==i)&&(Ci=null,_s=Fe()+500,Dr(t,i));do try{iv();break}catch(D){Bh(t,D)}while(!0);Au(),Fa.current=p,Mt=f,jt!==null?i=0:(Jt=null,on=0,i=Kt)}if(i!==0){if(i===2&&(f=Mr(t),f!==0&&(l=f,i=uc(t,f))),i===1)throw o=Co,Dr(t,0),rr(t,l),Ln(t,Fe()),o;if(i===6)rr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!tv(f)&&(i=Va(t,l),i===2&&(p=Mr(t),p!==0&&(l=p,i=uc(t,p))),i===1))throw o=Co,Dr(t,0),rr(t,l),Ln(t,Fe()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,bn,Ci);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=oc+500-Fe(),10<i)){if(Bn(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=mu(Ur.bind(null,t,bn,Ci),i);break}Ur(t,bn,Ci);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var M=31-gn(l);p=1<<M,M=i[M],M>f&&(f=M),l&=~p}if(l=f,l=Fe()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*ev(l/1960))-l,10<l){t.timeoutHandle=mu(Ur.bind(null,t,bn,Ci),l);break}Ur(t,bn,Ci);break;case 5:Ur(t,bn,Ci);break;default:throw Error(n(329))}}}return Ln(t,Fe()),t.callbackNode===o?zh.bind(null,t):null}function uc(t,i){var o=bo;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Va(t,i),t!==2&&(i=bn,bn=o,i!==null&&cc(i)),t}function cc(t){bn===null?bn=t:bn.push.apply(bn,t)}function tv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],p=f.getSnapshot;f=f.value;try{if(!Qn(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~sc,i&=~Oa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-gn(i),l=1<<o;t[o]=-1,i&=~l}}function kh(t){if((Mt&6)!==0)throw Error(n(327));vs();var i=Bn(t,0);if((i&1)===0)return Ln(t,Fe()),null;var o=Va(t,i);if(t.tag!==0&&o===2){var l=Mr(t);l!==0&&(i=l,o=uc(t,l))}if(o===1)throw o=Co,Dr(t,0),rr(t,i),Ln(t,Fe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,bn,Ci),Ln(t,Fe()),null}function fc(t,i){var o=Mt;Mt|=1;try{return t(i)}finally{Mt=o,Mt===0&&(_s=Fe()+500,ga&&Zi())}}function Pr(t){nr!==null&&nr.tag===0&&(Mt&6)===0&&vs();var i=Mt;Mt|=1;var o=Xn.transition,l=wt;try{if(Xn.transition=null,wt=1,t)return t()}finally{wt=l,Xn.transition=o,Mt=i,(Mt&6)===0&&Zi()}}function dc(){On=gs.current,Dt(gs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,P_(o)),jt!==null)for(o=jt.return;o!==null;){var l=o;switch(Su(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&pa();break;case 3:hs(),Dt(An),Dt(un),Nu();break;case 5:Du(l);break;case 4:hs();break;case 13:Dt(zt);break;case 19:Dt(zt);break;case 10:Ru(l.type._context);break;case 22:case 23:dc()}o=o.return}if(Jt=t,jt=t=sr(t.current,null),on=On=i,Kt=0,Co=null,sc=Oa=Lr=0,bn=bo=null,Rr!==null){for(i=0;i<Rr.length;i++)if(o=Rr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=f,l.next=M}o.pending=l}Rr=null}return t}function Bh(t,i){do{var o=jt;try{if(Au(),Aa.current=La,Ra){for(var l=kt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ra=!1}if(br=0,Qt=qt=kt=null,Mo=!1,Eo=0,rc.current=null,o===null||o.return===null){Kt=1,Co=i,jt=null;break}e:{var p=t,M=o.return,D=o,k=i;if(i=on,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var te=k,pe=D,xe=pe.tag;if((pe.mode&1)===0&&(xe===0||xe===11||xe===15)){var de=pe.alternate;de?(pe.updateQueue=de.updateQueue,pe.memoizedState=de.memoizedState,pe.lanes=de.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var De=fh(M);if(De!==null){De.flags&=-257,dh(De,M,D,p,i),De.mode&1&&ch(p,te,i),i=De,k=te;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(k),i.updateQueue=He}else ze.add(k);break e}else{if((i&1)===0){ch(p,te,i),hc();break e}k=Error(n(426))}}else if(Ot&&D.mode&1){var Wt=fh(M);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),dh(Wt,M,D,p,i),Tu(ps(k,D));break e}}p=k=ps(k,D),Kt!==4&&(Kt=2),bo===null?bo=[p]:bo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=lh(p,k,i);Id(p,q);break e;case 1:D=k;var B=p.type,$=p.stateNode;if((p.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(tr===null||!tr.has($)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=uh(p,D,i);Id(p,Ee);break e}}p=p.return}while(p!==null)}Vh(o)}catch(We){i=We,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function Hh(){var t=Fa.current;return Fa.current=La,t===null?La:t}function hc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),Jt===null||(Lr&268435455)===0&&(Oa&268435455)===0||rr(Jt,on)}function Va(t,i){var o=Mt;Mt|=2;var l=Hh();(Jt!==t||on!==i)&&(Ci=null,Dr(t,i));do try{nv();break}catch(f){Bh(t,f)}while(!0);if(Au(),Mt=o,Fa.current=l,jt!==null)throw Error(n(261));return Jt=null,on=0,Kt}function nv(){for(;jt!==null;)Gh(jt)}function iv(){for(;jt!==null&&!je();)Gh(jt)}function Gh(t){var i=jh(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?Vh(t):jt=i,rc.current=null}function Vh(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=K_(o,i,On),o!==null){jt=o;return}}else{if(o=$_(o,i),o!==null){o.flags&=32767,jt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ur(t,i,o){var l=wt,f=Xn.transition;try{Xn.transition=null,wt=1,rv(t,i,o,l)}finally{Xn.transition=f,wt=l}return null}function rv(t,i,o,l){do vs();while(nr!==null);if((Mt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(zg(t,p),t===Jt&&(jt=Jt=null,on=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ka||(ka=!0,Yh(bt,function(){return vs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Xn.transition,Xn.transition=null;var M=wt;wt=1;var D=Mt;Mt|=4,rc.current=null,Q_(t,o),Uh(o,t),T_(hu),ea=!!du,hu=du=null,t.current=o,J_(o),Je(),Mt=D,wt=M,Xn.transition=p}else t.current=o;if(ka&&(ka=!1,nr=t,Ba=f),p=t.pendingLanes,p===0&&(tr=null),dt(o.stateNode),Ln(t,Fe()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(za)throw za=!1,t=ac,ac=null,t;return(Ba&1)!==0&&t.tag!==0&&vs(),p=t.pendingLanes,(p&1)!==0?t===lc?Lo++:(Lo=0,lc=t):Lo=0,Zi(),null}function vs(){if(nr!==null){var t=Pf(Ba),i=Xn.transition,o=wt;try{if(Xn.transition=null,wt=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Ba=0,(Mt&6)!==0)throw Error(n(331));var f=Mt;for(Mt|=4,Oe=t.current;Oe!==null;){var p=Oe,M=p.child;if((Oe.flags&16)!==0){var D=p.deletions;if(D!==null){for(var k=0;k<D.length;k++){var te=D[k];for(Oe=te;Oe!==null;){var pe=Oe;switch(pe.tag){case 0:case 11:case 15:Ro(8,pe,p)}var xe=pe.child;if(xe!==null)xe.return=pe,Oe=xe;else for(;Oe!==null;){pe=Oe;var de=pe.sibling,De=pe.return;if(Ch(pe),pe===te){Oe=null;break}if(de!==null){de.return=De,Oe=de;break}Oe=De}}}var ze=p.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Wt=He.sibling;He.sibling=null,He=Wt}while(He!==null)}}Oe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Oe=M;else e:for(;Oe!==null;){if(p=Oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ro(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,Oe=q;break e}Oe=p.return}}var B=t.current;for(Oe=B;Oe!==null;){M=Oe;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,Oe=$;else e:for(M=B;Oe!==null;){if(D=Oe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ia(9,D)}}catch(We){Gt(D,D.return,We)}if(D===M){Oe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Oe=Ee;break e}Oe=D.return}}if(Mt=f,Zi(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Tn,t)}catch{}l=!0}return l}finally{wt=o,Xn.transition=i}}return!1}function Wh(t,i,o){i=ps(o,i),i=lh(t,i,1),t=Ji(t,i,1),i=vn(),t!==null&&(Js(t,1,i),Ln(t,i))}function Gt(t,i,o){if(t.tag===3)Wh(t,t,o);else for(;i!==null;){if(i.tag===3){Wh(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=ps(o,t),t=uh(i,t,1),i=Ji(i,t,1),t=vn(),i!==null&&(Js(i,1,t),Ln(i,t));break}}i=i.return}}function sv(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,Jt===t&&(on&o)===o&&(Kt===4||Kt===3&&(on&130023424)===on&&500>Fe()-oc?Dr(t,0):sc|=o),Ln(t,i)}function Xh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Hi,Hi<<=1,(Hi&130023424)===0&&(Hi=4194304)));var o=vn();t=wi(t,i),t!==null&&(Js(t,i,o),Ln(t,o))}function ov(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Xh(t,o)}function av(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Xh(t,o)}var jh;jh=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||An.current)Cn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Cn=!1,q_(t,i,o);Cn=(t.flags&131072)!==0}else Cn=!1,Ot&&(i.flags&1048576)!==0&&wd(i,va,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ua(t,i),t=i.pendingProps;var f=os(i,un.current);ds(i,o),f=Ou(null,i,l,t,f,o);var p=zu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(l)?(p=!0,ma(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Lu(i),f.updater=Pa,i.stateNode=f,f._reactInternals=i,Wu(i,l,t,o),i=qu(null,i,l,!0,p,o)):(i.tag=0,Ot&&p&&yu(i),_n(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ua(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=uv(l),t=ei(l,t),f){case 0:i=Yu(null,i,l,t,o);break e;case 1:i=vh(null,i,l,t,o);break e;case 11:i=hh(null,i,l,t,o);break e;case 14:i=ph(null,i,l,ei(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),Yu(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),vh(t,i,l,f,o);case 3:e:{if(xh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,f=p.element,Nd(t,i),Ta(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ps(Error(n(423)),i),i=yh(t,i,l,o,f);break e}else if(l!==f){f=ps(Error(n(424)),i),i=yh(t,i,l,o,f);break e}else for(Fn=qi(i.stateNode.containerInfo.firstChild),In=i,Ot=!0,Jn=null,o=Dd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(us(),l===f){i=Ri(t,i,o);break e}_n(t,i,l,o)}i=i.child}return i;case 5:return Od(i),t===null&&Eu(i),l=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,M=f.children,pu(l,f)?M=null:p!==null&&pu(l,p)&&(i.flags|=32),_h(t,i),_n(t,i,M,o),i.child;case 6:return t===null&&Eu(i),null;case 13:return Sh(t,i,o);case 4:return Pu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,o):_n(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),hh(t,i,l,f,o);case 7:return _n(t,i,i.pendingProps,o),i.child;case 8:return _n(t,i,i.pendingProps.children,o),i.child;case 12:return _n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,p=i.memoizedProps,M=f.value,Lt(Sa,l._currentValue),l._currentValue=M,p!==null)if(Qn(p.value,M)){if(p.children===f.children&&!An.current){i=Ri(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var k=D.firstContext;k!==null;){if(k.context===l){if(p.tag===1){k=Ai(-1,o&-o),k.tag=2;var te=p.updateQueue;if(te!==null){te=te.shared;var pe=te.pending;pe===null?k.next=k:(k.next=pe.next,pe.next=k),te.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),Cu(p.return,o,i),D.lanes|=o;break}k=k.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Cu(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}_n(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,ds(i,o),f=Vn(f),l=l(f),i.flags|=1,_n(t,i,l,o),i.child;case 14:return l=i.type,f=ei(l,i.pendingProps),f=ei(l.type,f),ph(t,i,l,f,o);case 15:return mh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),Ua(t,i),i.tag=1,Rn(l)?(t=!0,ma(i)):t=!1,ds(i,o),oh(i,l,f),Wu(i,l,f,o),qu(null,i,l,!0,t,o);case 19:return Eh(t,i,o);case 22:return gh(t,i,o)}throw Error(n(156,i.tag))};function Yh(t,i){return ne(t,i)}function lv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,o,l){return new lv(t,i,o,l)}function pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uv(t){if(typeof t=="function")return pc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ce)return 11;if(t===J)return 14}return 2}function sr(t,i){var o=t.alternate;return o===null?(o=jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Wa(t,i,o,l,f,p){var M=2;if(l=t,typeof t=="function")pc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Nr(o.children,f,p,i);case le:M=8,f|=8;break;case R:return t=jn(12,o,i,f|2),t.elementType=R,t.lanes=p,t;case me:return t=jn(13,o,i,f),t.elementType=me,t.lanes=p,t;case H:return t=jn(19,o,i,f),t.elementType=H,t.lanes=p,t;case ue:return Xa(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:M=10;break e;case oe:M=9;break e;case ce:M=11;break e;case J:M=14;break e;case re:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,o,i,f),i.elementType=t,i.type=l,i.lanes=p,i}function Nr(t,i,o,l){return t=jn(7,t,l,i),t.lanes=o,t}function Xa(t,i,o,l){return t=jn(22,t,l,i),t.elementType=ue,t.lanes=o,t.stateNode={isHidden:!1},t}function mc(t,i,o){return t=jn(6,t,null,i),t.lanes=o,t}function gc(t,i,o){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function cv(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$r(0),this.expirationTimes=$r(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function _c(t,i,o,l,f,p,M,D,k){return t=new cv(t,i,o,D,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=jn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(p),t}function fv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function qh(t){if(!t)return $i;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Rn(o))return Md(t,o,i)}return i}function Kh(t,i,o,l,f,p,M,D,k){return t=_c(o,l,!0,t,f,p,M,D,k),t.context=qh(null),o=t.current,l=vn(),f=ir(o),p=Ai(l,f),p.callback=i??null,Ji(o,p,f),t.current.lanes=f,Js(t,f,l),Ln(t,l),t}function ja(t,i,o,l){var f=i.current,p=vn(),M=ir(f);return o=qh(o),i.context===null?i.context=o:i.pendingContext=o,i=Ai(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(f,i,M),t!==null&&(ii(t,f,M,p),Ea(t,f,M)),M}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $h(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function vc(t,i){$h(t,i),(t=t.alternate)&&$h(t,i)}function dv(){return null}var Zh=typeof reportError=="function"?reportError:function(t){console.error(t)};function xc(t){this._internalRoot=t}qa.prototype.render=xc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ja(t,i,null,null)},qa.prototype.unmount=xc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Pr(function(){ja(null,t,null,null)}),i[Si]=null}};function qa(t){this._internalRoot=t}qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=Nf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Xi.length&&i!==0&&i<Xi[o].priority;o++);Xi.splice(o,0,t),o===0&&Of(t)}};function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ka(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qh(){}function hv(t,i,o,l,f){if(f){if(typeof l=="function"){var p=l;l=function(){var te=Ya(M);p.call(te)}}var M=Kh(i,l,t,0,null,!1,!1,"",Qh);return t._reactRootContainer=M,t[Si]=M.current,po(t.nodeType===8?t.parentNode:t),Pr(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var D=l;l=function(){var te=Ya(k);D.call(te)}}var k=_c(t,0,!1,null,null,!1,!1,"",Qh);return t._reactRootContainer=k,t[Si]=k.current,po(t.nodeType===8?t.parentNode:t),Pr(function(){ja(i,k,o,l)}),k}function $a(t,i,o,l,f){var p=o._reactRootContainer;if(p){var M=p;if(typeof f=="function"){var D=f;f=function(){var k=Ya(M);D.call(k)}}ja(i,M,t,f)}else M=hv(o,i,t,f,l);return Ya(M)}Df=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ht(i.pendingLanes);o!==0&&(Wl(i,o|1),Ln(i,Fe()),(Mt&6)===0&&(_s=Fe()+500,Zi()))}break;case 13:Pr(function(){var l=wi(t,1);if(l!==null){var f=vn();ii(l,t,1,f)}}),vc(t,1)}},Xl=function(t){if(t.tag===13){var i=wi(t,134217728);if(i!==null){var o=vn();ii(i,t,134217728,o)}vc(t,134217728)}},Uf=function(t){if(t.tag===13){var i=ir(t),o=wi(t,i);if(o!==null){var l=vn();ii(o,t,i,l)}vc(t,i)}},Nf=function(){return wt},If=function(t,i){var o=wt;try{return wt=t,i()}finally{wt=o}},ge=function(t,i,o){switch(i){case"input":if(Tt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=ha(l);if(!f)throw Error(n(90));ee(l),Tt(l,f)}}}break;case"textarea":ye(t,o);break;case"select":i=o.value,i!=null&&Q(t,!!o.multiple,i,!1)}},pt=fc,mt=Pr;var pv={usingClientEntryPoint:!1,Events:[_o,rs,ha,Qe,Ke,fc]},Po={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mv={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ie(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Tn=Za.inject(mv),St=Za}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pv,Pn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(i))throw Error(n(200));return fv(t,i,null,o)},Pn.createRoot=function(t,i){if(!yc(t))throw Error(n(299));var o=!1,l="",f=Zh;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=_c(t,1,!1,null,null,o,!1,l,f),t[Si]=i.current,po(t.nodeType===8?t.parentNode:t),new xc(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ie(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return Pr(t)},Pn.hydrate=function(t,i,o){if(!Ka(i))throw Error(n(200));return $a(null,t,i,!0,o)},Pn.hydrateRoot=function(t,i,o){if(!yc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,p="",M=Zh;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Kh(i,null,t,1,o??null,f,!1,p,M),t[Si]=i.current,po(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new qa(i)},Pn.render=function(t,i,o){if(!Ka(i))throw Error(n(200));return $a(null,t,i,!1,o)},Pn.unmountComponentAtNode=function(t){if(!Ka(t))throw Error(n(40));return t._reactRootContainer?(Pr(function(){$a(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},Pn.unstable_batchedUpdates=fc,Pn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ka(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return $a(t,i,o,!1,l)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var ap;function Av(){if(ap)return Ec.exports;ap=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ec.exports=wv(),Ec.exports}var lp;function Rv(){if(lp)return Qa;lp=1;var s=Av();return Qa.createRoot=s.createRoot,Qa.hydrateRoot=s.hydrateRoot,Qa}var Cv=Rv();const bv=Km(Cv);class up extends Error{constructor(n,r){super(`${n} at position ${r}`);Jh(this,"position");this.name="ParseError",this.position=r}}class Lv extends Error{constructor(e){super(e),this.name="ValidationError"}}const Pv={R:[1,0,0],L:[-1,0,0],U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1]};function cp(s){return[...Pv[s]]}function Dv(s,e){return[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]]}function Uv(s,e){return s[0]*e[0]+s[1]*e[1]+s[2]*e[2]}function Nv(s,e){return[s[0][0]*e[0]+s[0][1]*e[1]+s[0][2]*e[2],s[1][0]*e[0]+s[1][1]*e[1]+s[1][2]*e[2],s[2][0]*e[0]+s[2][1]*e[1]+s[2][2]*e[2]]}function fp(s,e){const n=[[0,0,0],[0,0,0],[0,0,0]];for(let r=0;r<3;r++)for(let a=0;a<3;a++)for(let u=0;u<3;u++)n[r][a]+=s[r][u]*e[u][a];return n}function Iv(s){return[[s[0][0],s[1][0],s[2][0]],[s[0][1],s[1][1],s[2][1]],[s[0][2],s[1][2],s[2][2]]]}function $m(s,e){const n=e*Math.PI/180,r=Math.cos(n),a=Math.sin(n);switch(s){case"X":return[[1,0,0],[0,r,-a],[0,a,r]];case"Y":return[[r,0,a],[0,1,0],[-a,0,r]];case"Z":return[[r,-a,0],[a,r,0],[0,0,1]]}}function Fv(s,e){const n=cp(s),r=cp(e);if(Math.abs(Uv(n,r))>.001)throw new Lv(`facing (${s}) and headUp (${e}) must be orthogonal`);return[Dv(r,n),r,n]}function Zm(s){const e=[Math.abs(s[0]),Math.abs(s[1]),Math.abs(s[2])];let n=0;return e[1]>e[n]&&(n=1),e[2]>e[n]&&(n=2),{axis:["X","Y","Z"][n],sign:s[n]>0?1:-1}}function Ov(s){let e=(s%360+540)%360-180;return e>135?e=180:e>45?e=90:e<-135?e=180:e<-45?e=-90:e=0,e}function zv(s,e){switch(s){case"X":return[e,0,0];case"Y":return[0,e,0];case"Z":return[0,0,e]}}function kv(s){switch(s){case"R":return{axis:"X",sign:1};case"L":return{axis:"X",sign:-1};case"U":return{axis:"Y",sign:1};case"D":return{axis:"Y",sign:-1};case"F":return{axis:"Z",sign:1};case"B":return{axis:"Z",sign:-1}}}function Ef(s){return s==="'"?-90:s==="2"?180:90}function Bv(s,e){const{axis:n,sign:r}=kv(s);return{axis:n,sign:r,angle:Ef(e)}}const Hv={M:{axis:"X",sign:-1},E:{axis:"Y",sign:-1},S:{axis:"Z",sign:1}};function Gv(s,e){const{axis:n,sign:r}=Hv[s];return{axis:n,sign:r,angle:Ef(e)}}function Vv(s,e){const n=r=>r==="'"?"":r===""?"'":"2";switch(s){case"r":return{baseFace:"R",baseMod:e,sliceFace:"M",sliceMod:n(e)};case"l":return{baseFace:"L",baseMod:e,sliceFace:"M",sliceMod:e};case"u":return{baseFace:"U",baseMod:e,sliceFace:"E",sliceMod:n(e)};case"d":return{baseFace:"D",baseMod:e,sliceFace:"E",sliceMod:e};case"f":return{baseFace:"F",baseMod:e,sliceFace:"S",sliceMod:e};case"b":return{baseFace:"B",baseMod:e,sliceFace:"S",sliceMod:n(e)}}}const Wv={"X,1":"R","X,-1":"L","Y,1":"U","Y,-1":"D","Z,1":"F","Z,-1":"B"};function Xv(s,e){return Wv[`${s},${e}`]}const jv={"X,-1":"M","X,1":"M","Y,-1":"E","Y,1":"E","Z,1":"S","Z,-1":"S"};function Yv(s,e){return jv[`${s},1`]}const qv={X:{base:"R",slice:"M"},Y:{base:"U",slice:"E"},Z:{base:"F",slice:"S"}};function Kv(s){return qv[s]}function Qm(s){return["R","L","U","D","F","B"].includes(s)}function Jm(s){return["M","E","S"].includes(s)}function lf(s){return["r","l","u","d","f","b"].includes(s)}function $v(s){return["x","y","z"].includes(s)}function Zv(s){let e=0;function n(){for(;e<s.length&&/\s/.test(s[e]);)e++}function r(){return e<s.length?s[e]:null}function a(){return s[e++]}function u(){const x=[];for(;;){n();const S=r();if(S===null||S===")")break;if(S==="(")x.push(y());else if(c(S))x.push(m());else if(d(S))x.push(h());else throw new up(`Unexpected character '${S}'`,e)}return x}function d(x){const S=x.toUpperCase();return Qm(S)||Jm(S)||lf(x)}function c(x){return $v(x.toLowerCase())}function h(){const x=a(),S=_();let T;return lf(x)?T=x:T=x.toUpperCase(),{type:"move",face:T,modifier:S}}function m(){const x=a().toLowerCase(),S=_();return{type:"rotation",face:x,modifier:S}}function _(){const x=r();return x==="'"?(a(),"'"):x==="2"||x==="²"?(a(),"2"):x==="’"||x==="′"?(a(),"'"):""}function y(){a();const x=u();if(n(),r()!==")")throw new up("Unclosed group",e);a(),n();let S=1;if(r()==="*"&&(a(),n()),r()!==null&&/\d/.test(r())){let T="";for(;r()!==null&&/\d/.test(r());)T+=a();S=parseInt(T,10)}return{type:"group",moves:x,repeat:S}}return u()}function Qv(s){switch(s.type){case"move":return Jv(s);case"rotation":return e0(s);case"group":return t0(s)}}function Jv(s){return s.face+s.modifier}function e0(s){return s.face+s.modifier}function t0(s){const e=eg(s.moves);return s.repeat>1?`(${e})${s.repeat}`:`(${e})`}function eg(s){return s.map(Qv).join(" ")}function n0(s){return"facing"in s?Fv(s.facing,s.headUp):$m(s.axis,s.angle)}function dp(s,e){if(s.angle===0)return s;const n=zv(s.axis,s.sign),r=Nv(e,n),{axis:a,sign:u}=Zm(r);return{axis:a,sign:u,angle:s.angle}}function i0(s){if(s.angle===0)return{face:"R",modifier:""};const e=s.angle===-90?"'":s.angle===180?"2":"";return{face:Xv(s.axis,s.sign),modifier:e}}function bl(s,e){switch(s.type){case"move":return r0(s,e);case"rotation":return s0(s,e);case"group":return{type:"group",moves:s.moves.map(n=>bl(n,e)),repeat:s.repeat}}}function r0(s,e){if(Qm(s.face)){const n=Bv(s.face,s.modifier),r=dp(n,e),{face:a,modifier:u}=i0(r);return{type:"move",face:a,modifier:u}}if(Jm(s.face)){const n=Gv(s.face,s.modifier),r=dp(n,e),a=Yv(r.axis,r.sign),u=r.angle===-90?"'":r.angle===180?"2":"";return{type:"move",face:a,modifier:u}}if(lf(s.face)){const n=Vv(s.face,s.modifier),r={type:"move",face:n.baseFace,modifier:n.baseMod},a={type:"move",face:n.sliceFace,modifier:n.sliceMod},u=bl(r,e),d=bl(a,e),c=u.face,m={R:"X",L:"X",U:"Y",D:"Y",F:"Z",B:"Z"}[c],{base:_,slice:y}=Kv(m);if(d.face===y){const S={R:"r",L:"l",U:"u",D:"d",F:"f",B:"b"}[u.face],T=u.modifier;return{type:"move",face:S,modifier:T}}return{type:"group",moves:[u,d],repeat:1}}return s}function s0(s,e){const r={x:"X",y:"Y",z:"Z"}[s.face],a=Ef(s.modifier),u=$m(r,a),d=fp(fp(e,u),Iv(e)),c=d[0][0]+d[1][1]+d[2][2];let h=Math.acos(Math.max(-1,Math.min(1,(c-1)/2)))*180/Math.PI;if(Math.abs(h)<1)return{type:"move",face:"R",modifier:""};const m=d[2][1]-d[1][2],_=d[0][2]-d[2][0],y=d[1][0]-d[0][1],{axis:x}=Zm([m,_,y]),E=[m,_,y][{X:0,Y:1,Z:2}[x]]>0?h:-h,v=Ov(E),g=v===-90?"'":v===180?"2":"";return{type:"rotation",face:{X:"x",Y:"y",Z:"z"}[x],modifier:g}}function o0(s,e){const n=n0(e);return s.map(r=>bl(r,n))}function Ac(s,e){const n=Zv(s),r=o0(n,e),a=eg(r);return{input:s,output:a,spec:e}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tf="160",xs={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a0=0,hp=1,l0=2,tg=1,u0=2,Ni=3,xr=0,Dn=1,Ii=2,mr=0,Ws=1,pp=2,mp=3,gp=4,c0=5,Br=100,f0=101,d0=102,_p=103,vp=104,h0=200,p0=201,m0=202,g0=203,uf=204,cf=205,_0=206,v0=207,x0=208,y0=209,S0=210,M0=211,E0=212,T0=213,w0=214,A0=0,R0=1,C0=2,Ll=3,b0=4,L0=5,P0=6,D0=7,ng=0,U0=1,N0=2,gr=0,I0=1,F0=2,O0=3,z0=4,k0=5,B0=6,ig=300,js=301,Ys=302,ff=303,df=304,Ol=306,hf=1e3,ai=1001,pf=1002,Mn=1003,xp=1004,Rc=1005,qn=1006,H0=1007,Vo=1008,_r=1009,G0=1010,V0=1011,wf=1012,rg=1013,hr=1014,pr=1015,Wo=1016,sg=1017,og=1018,Gr=1020,W0=1021,li=1023,X0=1024,j0=1025,Vr=1026,qs=1027,Y0=1028,ag=1029,q0=1030,lg=1031,ug=1033,Cc=33776,bc=33777,Lc=33778,Pc=33779,yp=35840,Sp=35841,Mp=35842,Ep=35843,cg=36196,Tp=37492,wp=37496,Ap=37808,Rp=37809,Cp=37810,bp=37811,Lp=37812,Pp=37813,Dp=37814,Up=37815,Np=37816,Ip=37817,Fp=37818,Op=37819,zp=37820,kp=37821,Dc=36492,Bp=36494,Hp=36495,K0=36283,Gp=36284,Vp=36285,Wp=36286,fg=3e3,Wr=3001,$0=3200,Z0=3201,dg=0,Q0=1,Zn="",an="srgb",ki="srgb-linear",Af="display-p3",zl="display-p3-linear",Pl="linear",Ut="srgb",Dl="rec709",Ul="p3",Ss=7680,Xp=519,J0=512,ex=513,tx=514,hg=515,nx=516,ix=517,rx=518,sx=519,mf=35044,jp="300 es",gf=1035,Oi=2e3,Nl=2001;class qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,d=a.length;u<d;u++)a[u].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rl=Math.PI/180,_f=180/Math.PI;function vr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function En(s,e,n){return Math.max(e,Math.min(n,s))}function ox(s,e){return(s%e+e)%e}function Uc(s,e,n){return(1-n)*s+n*e}function Yp(s){return(s&s-1)===0&&s!==0}function vf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ax={DEG2RAD:Rl};class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(En(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*a+e.x,this.y=u*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,n,r,a,u,d,c,h,m){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,c,h,m)}set(e,n,r,a,u,d,c,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=c,_[3]=n,_[4]=u,_[5]=h,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],c=r[3],h=r[6],m=r[1],_=r[4],y=r[7],x=r[2],S=r[5],T=r[8],E=a[0],v=a[3],g=a[6],I=a[1],C=a[4],F=a[7],W=a[2],O=a[5],N=a[8];return u[0]=d*E+c*I+h*W,u[3]=d*v+c*C+h*O,u[6]=d*g+c*F+h*N,u[1]=m*E+_*I+y*W,u[4]=m*v+_*C+y*O,u[7]=m*g+_*F+y*N,u[2]=x*E+S*I+T*W,u[5]=x*v+S*C+T*O,u[8]=x*g+S*F+T*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],c=e[5],h=e[6],m=e[7],_=e[8];return n*d*_-n*c*m-r*u*_+r*c*h+a*u*m-a*d*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],c=e[5],h=e[6],m=e[7],_=e[8],y=_*d-c*m,x=c*h-_*u,S=m*u-d*h,T=n*y+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=y*E,e[1]=(a*m-_*r)*E,e[2]=(c*r-a*d)*E,e[3]=x*E,e[4]=(_*n-a*h)*E,e[5]=(a*u-c*n)*E,e[6]=S*E,e[7]=(r*h-m*n)*E,e[8]=(d*n-r*u)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,d,c){const h=Math.cos(u),m=Math.sin(u);return this.set(r*h,r*m,-r*(h*d+m*c)+d+e,-a*m,a*h,-a*(-m*d+h*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(Nc.makeScale(e,n)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nc=new vt;function pg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Il(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lx(){const s=Il("canvas");return s.style.display="block",s}const qp={};function Go(s){s in qp||(qp[s]=!0,console.warn(s))}const Kp=new vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$p=new vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ja={[ki]:{transfer:Pl,primaries:Dl,toReference:s=>s,fromReference:s=>s},[an]:{transfer:Ut,primaries:Dl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[zl]:{transfer:Pl,primaries:Ul,toReference:s=>s.applyMatrix3($p),fromReference:s=>s.applyMatrix3(Kp)},[Af]:{transfer:Ut,primaries:Ul,toReference:s=>s.convertSRGBToLinear().applyMatrix3($p),fromReference:s=>s.applyMatrix3(Kp).convertLinearToSRGB()}},ux=new Set([ki,zl]),At={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ux.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Ja[e].toReference,a=Ja[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ja[s].primaries},getTransfer:function(s){return s===Zn?Pl:Ja[s].transfer}};function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ic(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class mg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=Il("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let d=0;d<u.length;d++)u[d]=Xs(u[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xs(n[r]/255)*255):n[r]=Xs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cx=0;class gg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let d=0,c=a.length;d<c;d++)a[d].isDataTexture?u.push(Fc(a[d].image)):u.push(Fc(a[d]))}else u=Fc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Fc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fx=0;class Un extends qr{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,r=ai,a=ai,u=qn,d=Vo,c=li,h=_r,m=Un.DEFAULT_ANISOTROPY,_=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=vr(),this.name="",this.source=new gg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=h,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===Wr?an:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hf:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hf:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===an?Wr:fg}set encoding(e){Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wr?an:Zn}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=ig;Un.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,n=0,r=0,a=1){nn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*u,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*u,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*u,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const h=e.elements,m=h[0],_=h[4],y=h[8],x=h[1],S=h[5],T=h[9],E=h[2],v=h[6],g=h[10];if(Math.abs(_-x)<.01&&Math.abs(y-E)<.01&&Math.abs(T-v)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+E)<.1&&Math.abs(T+v)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(m+1)/2,F=(S+1)/2,W=(g+1)/2,O=(_+x)/4,N=(y+E)/4,le=(T+v)/4;return C>F&&C>W?C<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(C),a=O/r,u=N/r):F>W?F<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(F),r=O/a,u=le/a):W<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(W),r=N/u,a=le/u),this.set(r,a,u,n),this}let I=Math.sqrt((v-T)*(v-T)+(y-E)*(y-E)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(v-T)/I,this.y=(y-E)/I,this.z=(x-_)/I,this.w=Math.acos((m+S+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dx extends qr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new nn(0,0,e,n),this.scissorTest=!1,this.viewport=new nn(0,0,e,n);const a={width:e,height:n,depth:1};r.encoding!==void 0&&(Go("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Wr?an:Zn),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Un(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new gg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends dx{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class _g extends Un{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hx extends Un{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,d,c){let h=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];const x=u[d+0],S=u[d+1],T=u[d+2],E=u[d+3];if(c===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(c===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=E;return}if(y!==E||h!==x||m!==S||_!==T){let v=1-c;const g=h*x+m*S+_*T+y*E,I=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const W=Math.sqrt(C),O=Math.atan2(W,g*I);v=Math.sin(v*O)/W,c=Math.sin(c*O)/W}const F=c*I;if(h=h*v+x*F,m=m*v+S*F,_=_*v+T*F,y=y*v+E*F,v===1-c){const W=1/Math.sqrt(h*h+m*m+_*_+y*y);h*=W,m*=W,_*=W,y*=W}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,u,d){const c=r[a],h=r[a+1],m=r[a+2],_=r[a+3],y=u[d],x=u[d+1],S=u[d+2],T=u[d+3];return e[n]=c*T+_*y+h*S-m*x,e[n+1]=h*T+_*x+m*y-c*S,e[n+2]=m*T+_*S+c*x-h*y,e[n+3]=_*T-c*y-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,d=e._order,c=Math.cos,h=Math.sin,m=c(r/2),_=c(a/2),y=c(u/2),x=h(r/2),S=h(a/2),T=h(u/2);switch(d){case"XYZ":this._x=x*_*y+m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y-x*S*T;break;case"YXZ":this._x=x*_*y+m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y+x*S*T;break;case"ZXY":this._x=x*_*y-m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y-x*S*T;break;case"ZYX":this._x=x*_*y-m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y+x*S*T;break;case"YZX":this._x=x*_*y+m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y-x*S*T;break;case"XZY":this._x=x*_*y-m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],d=n[1],c=n[5],h=n[9],m=n[2],_=n[6],y=n[10],x=r+c+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(u-m)*S,this._z=(d-a)*S}else if(r>c&&r>y){const S=2*Math.sqrt(1+r-c-y);this._w=(_-h)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(u+m)/S}else if(c>y){const S=2*Math.sqrt(1+c-r-y);this._w=(u-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+y-r-c);this._w=(d-a)/S,this._x=(u+m)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,d=e._w,c=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+d*c+a*m-u*h,this._y=a*_+d*h+u*c-r*m,this._z=u*_+d*m+r*h-a*c,this._w=d*_-r*c-a*h-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,d=this._w;let c=d*e._w+r*e._x+a*e._y+u*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=d,this._x=r,this._y=a,this._z=u,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,c),y=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(n*Math.cos(a),r*Math.sin(u),r*Math.cos(u),n*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,d=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*d,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*d,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,d=e.y,c=e.z,h=e.w,m=2*(d*a-c*r),_=2*(c*n-u*a),y=2*(u*r-d*n);return this.x=n+h*m+d*y-c*_,this.y=r+h*_+c*m-u*y,this.z=a+h*y+u*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,d=n.x,c=n.y,h=n.z;return this.x=a*h-u*c,this.y=u*d-r*h,this.z=r*c-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(En(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oc=new j,Zp=new jr;class Xo{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,c=u.count;d<c;d++)e.isMesh===!0?e.getVertexPosition(d,ri):ri.fromBufferAttribute(u,d),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),el.copy(r.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const a=e.children;for(let u=0,d=a.length;u<d;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),tl.subVectors(this.max,Uo),Es.subVectors(e.a,Uo),Ts.subVectors(e.b,Uo),ws.subVectors(e.c,Uo),ar.subVectors(Ts,Es),lr.subVectors(ws,Ts),Ir.subVectors(Es,ws);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Ir.z,Ir.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Ir.z,0,-Ir.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Ir.y,Ir.x,0];return!zc(n,Es,Ts,ws,tl)||(n=[1,0,0,0,1,0,0,0,1],!zc(n,Es,Ts,ws,tl))?!1:(nl.crossVectors(ar,lr),n=[nl.x,nl.y,nl.z],zc(n,Es,Ts,ws,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new j,new j,new j,new j,new j,new j,new j,new j],ri=new j,el=new Xo,Es=new j,Ts=new j,ws=new j,ar=new j,lr=new j,Ir=new j,Uo=new j,tl=new j,nl=new j,Fr=new j;function zc(s,e,n,r,a){for(let u=0,d=s.length-3;u<=d;u+=3){Fr.fromArray(s,u);const c=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),h=e.dot(Fr),m=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>c)return!1}return!0}const px=new Xo,No=new j,kc=new j;class kl{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):px.setFromPoints(e).getCenter(r);let a=0;for(let u=0,d=e.length;u<d;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(No,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(kc)),this.expandByPoint(No.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new j,Bc=new j,il=new j,ur=new j,Hc=new j,rl=new j,Gc=new j;class Bl{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Bc.copy(e).add(n).multiplyScalar(.5),il.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(Bc);const u=e.distanceTo(n)*.5,d=-this.direction.dot(il),c=ur.dot(this.direction),h=-ur.dot(il),m=ur.lengthSq(),_=Math.abs(1-d*d);let y,x,S,T;if(_>0)if(y=d*h-c,x=d*c-h,T=u*_,y>=0)if(x>=-T)if(x<=T){const E=1/_;y*=E,x*=E,S=y*(y+d*x+2*c)+x*(d*y+x+2*h)+m}else x=u,y=Math.max(0,-(d*x+c)),S=-y*y+x*(x+2*h)+m;else x=-u,y=Math.max(0,-(d*x+c)),S=-y*y+x*(x+2*h)+m;else x<=-T?(y=Math.max(0,-(-d*u+c)),x=y>0?-u:Math.min(Math.max(-u,-h),u),S=-y*y+x*(x+2*h)+m):x<=T?(y=0,x=Math.min(Math.max(-u,-h),u),S=x*(x+2*h)+m):(y=Math.max(0,-(d*u+c)),x=y>0?u:Math.min(Math.max(-u,-h),u),S=-y*y+x*(x+2*h)+m);else x=d>0?-u:u,y=Math.max(0,-(d*x+c)),S=-y*y+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Bc).addScaledVector(il,x),S}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),a=Li.dot(Li)-r*r,u=e.radius*e.radius;if(a>u)return null;const d=Math.sqrt(u-a),c=r-d,h=r+d;return h<0?null:c<0?this.at(h,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,d,c,h;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,d=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,d=(e.min.y-x.y)*_),r>d||u>a||((u>r||isNaN(r))&&(r=u),(d<a||isNaN(a))&&(a=d),y>=0?(c=(e.min.z-x.z)*y,h=(e.max.z-x.z)*y):(c=(e.max.z-x.z)*y,h=(e.min.z-x.z)*y),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,a,u){Hc.subVectors(n,e),rl.subVectors(r,e),Gc.crossVectors(Hc,rl);let d=this.direction.dot(Gc),c;if(d>0){if(a)return null;c=1}else if(d<0)c=-1,d=-d;else return null;ur.subVectors(this.origin,e);const h=c*this.direction.dot(rl.crossVectors(ur,rl));if(h<0)return null;const m=c*this.direction.dot(Hc.cross(ur));if(m<0||h+m>d)return null;const _=-c*ur.dot(Gc);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,a,u,d,c,h,m,_,y,x,S,T,E,v){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,c,h,m,_,y,x,S,T,E,v)}set(e,n,r,a,u,d,c,h,m,_,y,x,S,T,E,v){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=d,g[9]=c,g[13]=h,g[2]=m,g[6]=_,g[10]=y,g[14]=x,g[3]=S,g[7]=T,g[11]=E,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/As.setFromMatrixColumn(e,0).length(),u=1/As.setFromMatrixColumn(e,1).length(),d=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,d=Math.cos(r),c=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=d*_,S=d*y,T=c*_,E=c*y;n[0]=h*_,n[4]=-h*y,n[8]=m,n[1]=S+T*m,n[5]=x-E*m,n[9]=-c*h,n[2]=E-x*m,n[6]=T+S*m,n[10]=d*h}else if(e.order==="YXZ"){const x=h*_,S=h*y,T=m*_,E=m*y;n[0]=x+E*c,n[4]=T*c-S,n[8]=d*m,n[1]=d*y,n[5]=d*_,n[9]=-c,n[2]=S*c-T,n[6]=E+x*c,n[10]=d*h}else if(e.order==="ZXY"){const x=h*_,S=h*y,T=m*_,E=m*y;n[0]=x-E*c,n[4]=-d*y,n[8]=T+S*c,n[1]=S+T*c,n[5]=d*_,n[9]=E-x*c,n[2]=-d*m,n[6]=c,n[10]=d*h}else if(e.order==="ZYX"){const x=d*_,S=d*y,T=c*_,E=c*y;n[0]=h*_,n[4]=T*m-S,n[8]=x*m+E,n[1]=h*y,n[5]=E*m+x,n[9]=S*m-T,n[2]=-m,n[6]=c*h,n[10]=d*h}else if(e.order==="YZX"){const x=d*h,S=d*m,T=c*h,E=c*m;n[0]=h*_,n[4]=E-x*y,n[8]=T*y+S,n[1]=y,n[5]=d*_,n[9]=-c*_,n[2]=-m*_,n[6]=S*y+T,n[10]=x-E*y}else if(e.order==="XZY"){const x=d*h,S=d*m,T=c*h,E=c*m;n[0]=h*_,n[4]=-y,n[8]=m*_,n[1]=x*y+E,n[5]=d*_,n[9]=S*y-T,n[2]=T*y-S,n[6]=c*_,n[10]=E*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mx,e,gx)}lookAt(e,n,r){const a=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),cr.crossVectors(r,zn),cr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),cr.crossVectors(r,zn)),cr.normalize(),sl.crossVectors(zn,cr),a[0]=cr.x,a[4]=sl.x,a[8]=zn.x,a[1]=cr.y,a[5]=sl.y,a[9]=zn.y,a[2]=cr.z,a[6]=sl.z,a[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],c=r[4],h=r[8],m=r[12],_=r[1],y=r[5],x=r[9],S=r[13],T=r[2],E=r[6],v=r[10],g=r[14],I=r[3],C=r[7],F=r[11],W=r[15],O=a[0],N=a[4],le=a[8],R=a[12],L=a[1],oe=a[5],ce=a[9],me=a[13],H=a[2],J=a[6],re=a[10],ue=a[14],V=a[3],Z=a[7],X=a[11],P=a[15];return u[0]=d*O+c*L+h*H+m*V,u[4]=d*N+c*oe+h*J+m*Z,u[8]=d*le+c*ce+h*re+m*X,u[12]=d*R+c*me+h*ue+m*P,u[1]=_*O+y*L+x*H+S*V,u[5]=_*N+y*oe+x*J+S*Z,u[9]=_*le+y*ce+x*re+S*X,u[13]=_*R+y*me+x*ue+S*P,u[2]=T*O+E*L+v*H+g*V,u[6]=T*N+E*oe+v*J+g*Z,u[10]=T*le+E*ce+v*re+g*X,u[14]=T*R+E*me+v*ue+g*P,u[3]=I*O+C*L+F*H+W*V,u[7]=I*N+C*oe+F*J+W*Z,u[11]=I*le+C*ce+F*re+W*X,u[15]=I*R+C*me+F*ue+W*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],d=e[1],c=e[5],h=e[9],m=e[13],_=e[2],y=e[6],x=e[10],S=e[14],T=e[3],E=e[7],v=e[11],g=e[15];return T*(+u*h*y-a*m*y-u*c*x+r*m*x+a*c*S-r*h*S)+E*(+n*h*S-n*m*x+u*d*x-a*d*S+a*m*_-u*h*_)+v*(+n*m*y-n*c*S-u*d*y+r*d*S+u*c*_-r*m*_)+g*(-a*c*_-n*h*y+n*c*x+a*d*y-r*d*x+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],c=e[5],h=e[6],m=e[7],_=e[8],y=e[9],x=e[10],S=e[11],T=e[12],E=e[13],v=e[14],g=e[15],I=y*v*m-E*x*m+E*h*S-c*v*S-y*h*g+c*x*g,C=T*x*m-_*v*m-T*h*S+d*v*S+_*h*g-d*x*g,F=_*E*m-T*y*m+T*c*S-d*E*S-_*c*g+d*y*g,W=T*y*h-_*E*h-T*c*x+d*E*x+_*c*v-d*y*v,O=n*I+r*C+a*F+u*W;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return e[0]=I*N,e[1]=(E*x*u-y*v*u-E*a*S+r*v*S+y*a*g-r*x*g)*N,e[2]=(c*v*u-E*h*u+E*a*m-r*v*m-c*a*g+r*h*g)*N,e[3]=(y*h*u-c*x*u-y*a*m+r*x*m+c*a*S-r*h*S)*N,e[4]=C*N,e[5]=(_*v*u-T*x*u+T*a*S-n*v*S-_*a*g+n*x*g)*N,e[6]=(T*h*u-d*v*u-T*a*m+n*v*m+d*a*g-n*h*g)*N,e[7]=(d*x*u-_*h*u+_*a*m-n*x*m-d*a*S+n*h*S)*N,e[8]=F*N,e[9]=(T*y*u-_*E*u-T*r*S+n*E*S+_*r*g-n*y*g)*N,e[10]=(d*E*u-T*c*u+T*r*m-n*E*m-d*r*g+n*c*g)*N,e[11]=(_*c*u-d*y*u-_*r*m+n*y*m+d*r*S-n*c*S)*N,e[12]=W*N,e[13]=(_*E*a-T*y*a+T*r*x-n*E*x-_*r*v+n*y*v)*N,e[14]=(T*c*a-d*E*a-T*r*h+n*E*h+d*r*v-n*c*v)*N,e[15]=(d*y*a-_*c*a+_*r*h-n*y*h-d*r*x+n*c*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,d=e.x,c=e.y,h=e.z,m=u*d,_=u*c;return this.set(m*d+r,m*c-a*h,m*h+a*c,0,m*c+a*h,_*c+r,_*h-a*d,0,m*h-a*c,_*h+a*d,u*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,d){return this.set(1,r,u,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,d=n._y,c=n._z,h=n._w,m=u+u,_=d+d,y=c+c,x=u*m,S=u*_,T=u*y,E=d*_,v=d*y,g=c*y,I=h*m,C=h*_,F=h*y,W=r.x,O=r.y,N=r.z;return a[0]=(1-(E+g))*W,a[1]=(S+F)*W,a[2]=(T-C)*W,a[3]=0,a[4]=(S-F)*O,a[5]=(1-(x+g))*O,a[6]=(v+I)*O,a[7]=0,a[8]=(T+C)*N,a[9]=(v-I)*N,a[10]=(1-(x+E))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=As.set(a[0],a[1],a[2]).length();const d=As.set(a[4],a[5],a[6]).length(),c=As.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const m=1/u,_=1/d,y=1/c;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=_,si.elements[5]*=_,si.elements[6]*=_,si.elements[8]*=y,si.elements[9]*=y,si.elements[10]*=y,n.setFromRotationMatrix(si),r.x=u,r.y=d,r.z=c,this}makePerspective(e,n,r,a,u,d,c=Oi){const h=this.elements,m=2*u/(n-e),_=2*u/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,T;if(c===Oi)S=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(c===Nl)S=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,u,d,c=Oi){const h=this.elements,m=1/(n-e),_=1/(r-a),y=1/(d-u),x=(n+e)*m,S=(r+a)*_;let T,E;if(c===Oi)T=(d+u)*y,E=-2*y;else if(c===Nl)T=u*y,E=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new j,si=new Xt,mx=new j(0,0,0),gx=new j(1,1,1),cr=new j,sl=new j,zn=new j,Qp=new Xt,Jp=new jr;class Hl{constructor(e=0,n=0,r=0,a=Hl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],d=a[4],c=a[8],h=a[1],m=a[5],_=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(En(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-En(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(En(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,u));break;case"ZYX":this._y=Math.asin(-En(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(En(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(c,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jp.setFromEuler(this),this.setFromQuaternion(Jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hl.DEFAULT_ORDER="XYZ";class Rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _x=0;const em=new j,Rs=new jr,Pi=new Xt,ol=new j,Io=new j,vx=new j,xx=new jr,tm=new j(1,0,0),nm=new j(0,1,0),im=new j(0,0,1),yx={type:"added"},Sx={type:"removed"};class rn extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new j,n=new Hl,r=new jr,a=new j(1,1,1);function u(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new vt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,n){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ol.copy(e):ol.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Io,ol,this.up):Pi.lookAt(ol,Io,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),Rs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Sx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const u=n[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let u=0,d=a.length;u<d;u++){const c=a[u];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const y=h[m];u(e.shapes,y)}else u(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,m=this.material.length;h<m;h++)c.push(u(e.materials,this.material[h]));a.material=c}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(u(e.animations,h))}}if(n){const c=d(e.geometries),h=d(e.materials),m=d(e.textures),_=d(e.images),y=d(e.shapes),x=d(e.skeletons),S=d(e.animations),T=d(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function d(c){const h=[];for(const m in c){const _=c[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}rn.DEFAULT_UP=new j(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new j,Di=new j,Vc=new j,Ui=new j,Cs=new j,bs=new j,rm=new j,Wc=new j,Xc=new j,jc=new j;let al=!1;class Kn{constructor(e=new j,n=new j,r=new j){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),oi.subVectors(e,n),a.cross(oi);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){oi.subVectors(a,n),Di.subVectors(r,n),Vc.subVectors(e,n);const d=oi.dot(oi),c=oi.dot(Di),h=oi.dot(Vc),m=Di.dot(Di),_=Di.dot(Vc),y=d*m-c*c;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*h-c*_)*x,T=(d*_-c*h)*x;return u.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getUV(e,n,r,a,u,d,c,h){return al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),al=!0),this.getInterpolation(e,n,r,a,u,d,c,h)}static getInterpolation(e,n,r,a,u,d,c,h){return this.getBarycoord(e,n,r,a,Ui)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(u,Ui.x),h.addScaledVector(d,Ui.y),h.addScaledVector(c,Ui.z),h)}static isFrontFacing(e,n,r,a){return oi.subVectors(r,n),Di.subVectors(e,n),oi.cross(Di).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),oi.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,a,u){return al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),al=!0),Kn.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}getInterpolation(e,n,r,a,u){return Kn.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let d,c;Cs.subVectors(a,r),bs.subVectors(u,r),Wc.subVectors(e,r);const h=Cs.dot(Wc),m=bs.dot(Wc);if(h<=0&&m<=0)return n.copy(r);Xc.subVectors(e,a);const _=Cs.dot(Xc),y=bs.dot(Xc);if(_>=0&&y<=_)return n.copy(a);const x=h*y-_*m;if(x<=0&&h>=0&&_<=0)return d=h/(h-_),n.copy(r).addScaledVector(Cs,d);jc.subVectors(e,u);const S=Cs.dot(jc),T=bs.dot(jc);if(T>=0&&S<=T)return n.copy(u);const E=S*m-h*T;if(E<=0&&m>=0&&T<=0)return c=m/(m-T),n.copy(r).addScaledVector(bs,c);const v=_*T-S*y;if(v<=0&&y-_>=0&&S-T>=0)return rm.subVectors(u,a),c=(y-_)/(y-_+(S-T)),n.copy(a).addScaledVector(rm,c);const g=1/(v+E+x);return d=E*g,c=x*g,n.copy(r).addScaledVector(Cs,d).addScaledVector(bs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Yc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class yt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=At.workingColorSpace){if(e=ox(e,1),n=En(n,0,1),r=En(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,d=2*r-u;this.r=Yc(d,u,e+1/3),this.g=Yc(d,u,e),this.b=Yc(d,u,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,n=an){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=a[1],c=a[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=an){const r=vg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Ic(e.r),this.g=Ic(e.g),this.b=Ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return At.fromWorkingColorSpace(pn.copy(this),e),Math.round(En(pn.r*255,0,255))*65536+Math.round(En(pn.g*255,0,255))*256+Math.round(En(pn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,a=pn.g,u=pn.b,d=Math.max(r,a,u),c=Math.min(r,a,u);let h,m;const _=(c+d)/2;if(c===d)h=0,m=0;else{const y=d-c;switch(m=_<=.5?y/(d+c):y/(2-d-c),d){case r:h=(a-u)/y+(a<u?6:0);break;case a:h=(u-r)/y+2;break;case u:h=(r-a)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=At.workingColorSpace){return At.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=an){At.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,a=pn.b;return e!==an?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(ll);const r=Uc(fr.h,ll.h,n),a=Uc(fr.s,ll.s,n),u=Uc(fr.l,ll.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new yt;yt.NAMES=vg;let Mx=0;class Kr extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=Ws,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=cf,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==uf&&(r.blendSrc=this.blendSrc),this.blendDst!==cf&&(r.blendDst=this.blendDst),this.blendEquation!==Br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ll&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const d=[];for(const c in u){const h=u[c];delete h.metadata,d.push(h)}return d}if(n){const u=a(e.textures),d=a(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xg extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new j,ul=new et;class ui{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=mf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Rt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Rt(n,this.array),r=Rt(r,this.array),a=Rt(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Rt(n,this.array),r=Rt(r,this.array),a=Rt(a,this.array),u=Rt(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mf&&(e.usage=this.usage),e}}class yg extends ui{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Sg extends ui{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ci extends ui{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Ex=0;const Yn=new Xt,qc=new rn,Ls=new j,kn=new Xo,Fo=new Xo,tn=new j;class _i extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pg(e)?Sg:yg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new vt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new ci(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];kn.setFromBufferAttribute(u),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let u=0,d=n.length;u<d;u++){const c=n[u];Fo.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(kn.min,Fo.min),kn.expandByPoint(tn),tn.addVectors(kn.max,Fo.max),kn.expandByPoint(tn)):(kn.expandByPoint(Fo.min),kn.expandByPoint(Fo.max))}kn.getCenter(r);let a=0;for(let u=0,d=e.count;u<d;u++)tn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(tn));if(n)for(let u=0,d=n.length;u<d;u++){const c=n[u],h=this.morphTargetsRelative;for(let m=0,_=c.count;m<_;m++)tn.fromBufferAttribute(c,m),h&&(Ls.fromBufferAttribute(e,m),tn.add(Ls)),a=Math.max(a,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=n.position.array,u=n.normal.array,d=n.uv.array,c=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,m=[],_=[];for(let L=0;L<c;L++)m[L]=new j,_[L]=new j;const y=new j,x=new j,S=new j,T=new et,E=new et,v=new et,g=new j,I=new j;function C(L,oe,ce){y.fromArray(a,L*3),x.fromArray(a,oe*3),S.fromArray(a,ce*3),T.fromArray(d,L*2),E.fromArray(d,oe*2),v.fromArray(d,ce*2),x.sub(y),S.sub(y),E.sub(T),v.sub(T);const me=1/(E.x*v.y-v.x*E.y);isFinite(me)&&(g.copy(x).multiplyScalar(v.y).addScaledVector(S,-E.y).multiplyScalar(me),I.copy(S).multiplyScalar(E.x).addScaledVector(x,-v.x).multiplyScalar(me),m[L].add(g),m[oe].add(g),m[ce].add(g),_[L].add(I),_[oe].add(I),_[ce].add(I))}let F=this.groups;F.length===0&&(F=[{start:0,count:r.length}]);for(let L=0,oe=F.length;L<oe;++L){const ce=F[L],me=ce.start,H=ce.count;for(let J=me,re=me+H;J<re;J+=3)C(r[J+0],r[J+1],r[J+2])}const W=new j,O=new j,N=new j,le=new j;function R(L){N.fromArray(u,L*3),le.copy(N);const oe=m[L];W.copy(oe),W.sub(N.multiplyScalar(N.dot(oe))).normalize(),O.crossVectors(le,oe);const me=O.dot(_[L])<0?-1:1;h[L*4]=W.x,h[L*4+1]=W.y,h[L*4+2]=W.z,h[L*4+3]=me}for(let L=0,oe=F.length;L<oe;++L){const ce=F[L],me=ce.start,H=ce.count;for(let J=me,re=me+H;J<re;J+=3)R(r[J+0]),R(r[J+1]),R(r[J+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new j,u=new j,d=new j,c=new j,h=new j,m=new j,_=new j,y=new j;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),E=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,v),_.subVectors(d,u),y.subVectors(a,u),_.cross(y),c.fromBufferAttribute(r,T),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,v),c.add(_),h.add(_),m.add(_),r.setXYZ(T,c.x,c.y,c.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),_.subVectors(d,u),y.subVectors(a,u),_.cross(y),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(c,h){const m=c.array,_=c.itemSize,y=c.normalized,x=new m.constructor(h.length*_);let S=0,T=0;for(let E=0,v=h.length;E<v;E++){c.isInterleavedBufferAttribute?S=h[E]*c.data.stride+c.offset:S=h[E]*_;for(let g=0;g<_;g++)x[T++]=m[S++]}return new ui(x,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _i,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],m=e(h,r);n.setAttribute(c,m)}const u=this.morphAttributes;for(const c in u){const h=[],m=u[c];for(let _=0,y=m.length;_<y;_++){const x=m[_],S=e(x,r);h.push(S)}n.morphAttributes[c]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let c=0,h=d.length;c<h;c++){const m=d[c];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let u=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],y=u[m];for(let x=0,S=y.length;x<S;x++)_.push(y[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sm=new Xt,Or=new Bl,cl=new kl,om=new j,Ps=new j,Ds=new j,Us=new j,Kc=new j,fl=new j,dl=new et,hl=new et,pl=new et,am=new j,lm=new j,um=new j,ml=new j,gl=new j;class zi extends rn{constructor(e=new _i,n=new xg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const c=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(u&&c){fl.set(0,0,0);for(let h=0,m=u.length;h<m;h++){const _=c[h],y=u[h];_!==0&&(Kc.fromBufferAttribute(y,e),d?fl.addScaledVector(Kc,_):fl.addScaledVector(Kc.sub(n),_))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cl.copy(r.boundingSphere),cl.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(cl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(cl,om)===null||Or.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(sm.copy(u).invert(),Or.copy(e.ray).applyMatrix4(sm),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,d=this.material,c=u.index,h=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(c!==null)if(Array.isArray(d))for(let T=0,E=x.length;T<E;T++){const v=x[T],g=d[v.materialIndex],I=Math.max(v.start,S.start),C=Math.min(c.count,Math.min(v.start+v.count,S.start+S.count));for(let F=I,W=C;F<W;F+=3){const O=c.getX(F),N=c.getX(F+1),le=c.getX(F+2);a=_l(this,g,e,r,m,_,y,O,N,le),a&&(a.faceIndex=Math.floor(F/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),E=Math.min(c.count,S.start+S.count);for(let v=T,g=E;v<g;v+=3){const I=c.getX(v),C=c.getX(v+1),F=c.getX(v+2);a=_l(this,d,e,r,m,_,y,I,C,F),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let T=0,E=x.length;T<E;T++){const v=x[T],g=d[v.materialIndex],I=Math.max(v.start,S.start),C=Math.min(h.count,Math.min(v.start+v.count,S.start+S.count));for(let F=I,W=C;F<W;F+=3){const O=F,N=F+1,le=F+2;a=_l(this,g,e,r,m,_,y,O,N,le),a&&(a.faceIndex=Math.floor(F/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let v=T,g=E;v<g;v+=3){const I=v,C=v+1,F=v+2;a=_l(this,d,e,r,m,_,y,I,C,F),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function Tx(s,e,n,r,a,u,d,c){let h;if(e.side===Dn?h=r.intersectTriangle(d,u,a,!0,c):h=r.intersectTriangle(a,u,d,e.side===xr,c),h===null)return null;gl.copy(c),gl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(gl);return m<n.near||m>n.far?null:{distance:m,point:gl.clone(),object:s}}function _l(s,e,n,r,a,u,d,c,h,m){s.getVertexPosition(c,Ps),s.getVertexPosition(h,Ds),s.getVertexPosition(m,Us);const _=Tx(s,e,n,r,Ps,Ds,Us,ml);if(_){a&&(dl.fromBufferAttribute(a,c),hl.fromBufferAttribute(a,h),pl.fromBufferAttribute(a,m),_.uv=Kn.getInterpolation(ml,Ps,Ds,Us,dl,hl,pl,new et)),u&&(dl.fromBufferAttribute(u,c),hl.fromBufferAttribute(u,h),pl.fromBufferAttribute(u,m),_.uv1=Kn.getInterpolation(ml,Ps,Ds,Us,dl,hl,pl,new et),_.uv2=_.uv1),d&&(am.fromBufferAttribute(d,c),lm.fromBufferAttribute(d,h),um.fromBufferAttribute(d,m),_.normal=Kn.getInterpolation(ml,Ps,Ds,Us,am,lm,um,new j),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:c,b:h,c:m,normal:new j,materialIndex:0};Kn.getNormal(Ps,Ds,Us,y.normal),_.face=y}return _}class $s extends _i{constructor(e=1,n=1,r=1,a=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:d};const c=this;a=Math.floor(a),u=Math.floor(u),d=Math.floor(d);const h=[],m=[],_=[],y=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,d,u,0),T("z","y","x",1,-1,r,n,-e,d,u,1),T("x","z","y",1,1,e,r,n,a,d,2),T("x","z","y",1,-1,e,r,-n,a,d,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(h),this.setAttribute("position",new ci(m,3)),this.setAttribute("normal",new ci(_,3)),this.setAttribute("uv",new ci(y,2));function T(E,v,g,I,C,F,W,O,N,le,R){const L=F/N,oe=W/le,ce=F/2,me=W/2,H=O/2,J=N+1,re=le+1;let ue=0,V=0;const Z=new j;for(let X=0;X<re;X++){const P=X*oe-me;for(let G=0;G<J;G++){const Y=G*L-ce;Z[E]=Y*I,Z[v]=P*C,Z[g]=H,m.push(Z.x,Z.y,Z.z),Z[E]=0,Z[v]=0,Z[g]=O>0?1:-1,_.push(Z.x,Z.y,Z.z),y.push(G/N),y.push(1-X/le),ue+=1}}for(let X=0;X<le;X++)for(let P=0;P<N;P++){const G=x+P+J*X,Y=x+P+J*(X+1),ae=x+(P+1)+J*(X+1),fe=x+(P+1)+J*X;h.push(G,Y,fe),h.push(Y,ae,fe),V+=6}c.addGroup(S,V,R),S+=V,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function yn(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const a in r)e[a]=r[a]}return e}function wx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Mg(s){return s.getRenderTarget()===null?s.outputColorSpace:At.workingColorSpace}const Ax={clone:Ks,merge:yn};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yr extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=wx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Eg extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $n extends Eg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _f*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,a,u,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Rl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;u+=d.offsetX*a/h,n-=d.offsetY*r/m,a*=d.width/h,r*=d.height/m}const c=this.filmOffset;c!==0&&(u+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Is=1;class bx extends rn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Ns,Is,e,n);a.layers=this.layers,this.add(a);const u=new $n(Ns,Is,e,n);u.layers=this.layers,this.add(u);const d=new $n(Ns,Is,e,n);d.layers=this.layers,this.add(d);const c=new $n(Ns,Is,e,n);c.layers=this.layers,this.add(c);const h=new $n(Ns,Is,e,n);h.layers=this.layers,this.add(h);const m=new $n(Ns,Is,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,d,c,h]=n;for(const m of n)this.remove(m);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Nl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,c,h,m,_]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,c),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(y,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Tg extends Un{constructor(e,n,r,a,u,d,c,h,m,_){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,r,a,u,d,c,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lx extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];n.encoding!==void 0&&(Go("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wr?an:Zn),this.texture=new Tg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new $s(5,5,5),u=new Yr({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:mr});u.uniforms.tEquirect.value=n;const d=new zi(a,u),c=n.minFilter;return n.minFilter===Vo&&(n.minFilter=qn),new bx(1,10,this).update(e,d),n.minFilter=c,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(u)}}const $c=new j,Px=new j,Dx=new vt;class dr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=$c.subVectors(r,n).cross(Px.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta($c),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Dx.getNormalMatrix(e),a=this.coplanarPoint($c).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new kl,vl=new j;class Cf{constructor(e=new dr,n=new dr,r=new dr,a=new dr,u=new dr,d=new dr){this.planes=[e,n,r,a,u,d]}set(e,n,r,a,u,d){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(r),c[3].copy(a),c[4].copy(u),c[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Oi){const r=this.planes,a=e.elements,u=a[0],d=a[1],c=a[2],h=a[3],m=a[4],_=a[5],y=a[6],x=a[7],S=a[8],T=a[9],E=a[10],v=a[11],g=a[12],I=a[13],C=a[14],F=a[15];if(r[0].setComponents(h-u,x-m,v-S,F-g).normalize(),r[1].setComponents(h+u,x+m,v+S,F+g).normalize(),r[2].setComponents(h+d,x+_,v+T,F+I).normalize(),r[3].setComponents(h-d,x-_,v-T,F-I).normalize(),r[4].setComponents(h-c,x-y,v-E,F-C).normalize(),n===Oi)r[5].setComponents(h+c,x+y,v+E,F+C).normalize();else if(n===Nl)r[5].setComponents(c,y,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(vl.x=a.normal.x>0?e.max.x:e.min.x,vl.y=a.normal.y>0?e.max.y:e.min.y,vl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wg(){let s=null,e=!1,n=null,r=null;function a(u,d){n(u,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function Ux(s,e){const n=e.isWebGL2,r=new WeakMap;function a(m,_){const y=m.array,x=m.usage,S=y.byteLength,T=s.createBuffer();s.bindBuffer(_,T),s.bufferData(_,y,x),m.onUploadCallback();let E;if(y instanceof Float32Array)E=s.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(n)E=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=s.UNSIGNED_SHORT;else if(y instanceof Int16Array)E=s.SHORT;else if(y instanceof Uint32Array)E=s.UNSIGNED_INT;else if(y instanceof Int32Array)E=s.INT;else if(y instanceof Int8Array)E=s.BYTE;else if(y instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:T,type:E,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version,size:S}}function u(m,_,y){const x=_.array,S=_._updateRange,T=_.updateRanges;if(s.bindBuffer(y,m),S.count===-1&&T.length===0&&s.bufferSubData(y,0,x),T.length!==0){for(let E=0,v=T.length;E<v;E++){const g=T[E];n?s.bufferSubData(y,g.start*x.BYTES_PER_ELEMENT,x,g.start,g.count):s.bufferSubData(y,g.start*x.BYTES_PER_ELEMENT,x.subarray(g.start,g.start+g.count))}_.clearUpdateRanges()}S.count!==-1&&(n?s.bufferSubData(y,S.offset*x.BYTES_PER_ELEMENT,x,S.offset,S.count):s.bufferSubData(y,S.offset*x.BYTES_PER_ELEMENT,x.subarray(S.offset,S.offset+S.count)),S.count=-1),_.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const _=r.get(m);_&&(s.deleteBuffer(_.buffer),r.delete(m))}function h(m,_){if(m.isGLBufferAttribute){const x=r.get(m);(!x||x.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=r.get(m);if(y===void 0)r.set(m,a(m,_));else if(y.version<m.version){if(y.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(y.buffer,m,_),y.version=m.version}}return{get:d,remove:c,update:h}}class bf extends _i{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,d=n/2,c=Math.floor(r),h=Math.floor(a),m=c+1,_=h+1,y=e/c,x=n/h,S=[],T=[],E=[],v=[];for(let g=0;g<_;g++){const I=g*x-d;for(let C=0;C<m;C++){const F=C*y-u;T.push(F,-I,0),E.push(0,0,1),v.push(C/c),v.push(1-g/h)}}for(let g=0;g<h;g++)for(let I=0;I<c;I++){const C=I+m*g,F=I+m*(g+1),W=I+1+m*(g+1),O=I+1+m*g;S.push(C,F,O),S.push(F,W,O)}this.setIndex(S),this.setAttribute("position",new ci(T,3)),this.setAttribute("normal",new ci(E,3)),this.setAttribute("uv",new ci(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ix=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",fy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,py=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,My=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ay=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ry=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,by=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ny=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,By=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ky=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_S=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ES=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const US=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,HS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Nx,alphahash_pars_fragment:Ix,alphamap_fragment:Fx,alphamap_pars_fragment:Ox,alphatest_fragment:zx,alphatest_pars_fragment:kx,aomap_fragment:Bx,aomap_pars_fragment:Hx,batching_pars_vertex:Gx,batching_vertex:Vx,begin_vertex:Wx,beginnormal_vertex:Xx,bsdfs:jx,iridescence_fragment:Yx,bumpmap_pars_fragment:qx,clipping_planes_fragment:Kx,clipping_planes_pars_fragment:$x,clipping_planes_pars_vertex:Zx,clipping_planes_vertex:Qx,color_fragment:Jx,color_pars_fragment:ey,color_pars_vertex:ty,color_vertex:ny,common:iy,cube_uv_reflection_fragment:ry,defaultnormal_vertex:sy,displacementmap_pars_vertex:oy,displacementmap_vertex:ay,emissivemap_fragment:ly,emissivemap_pars_fragment:uy,colorspace_fragment:cy,colorspace_pars_fragment:fy,envmap_fragment:dy,envmap_common_pars_fragment:hy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:Ry,envmap_vertex:gy,fog_vertex:_y,fog_pars_vertex:vy,fog_fragment:xy,fog_pars_fragment:yy,gradientmap_pars_fragment:Sy,lightmap_fragment:My,lightmap_pars_fragment:Ey,lights_lambert_fragment:Ty,lights_lambert_pars_fragment:wy,lights_pars_begin:Ay,lights_toon_fragment:Cy,lights_toon_pars_fragment:by,lights_phong_fragment:Ly,lights_phong_pars_fragment:Py,lights_physical_fragment:Dy,lights_physical_pars_fragment:Uy,lights_fragment_begin:Ny,lights_fragment_maps:Iy,lights_fragment_end:Fy,logdepthbuf_fragment:Oy,logdepthbuf_pars_fragment:zy,logdepthbuf_pars_vertex:ky,logdepthbuf_vertex:By,map_fragment:Hy,map_pars_fragment:Gy,map_particle_fragment:Vy,map_particle_pars_fragment:Wy,metalnessmap_fragment:Xy,metalnessmap_pars_fragment:jy,morphcolor_vertex:Yy,morphnormal_vertex:qy,morphtarget_pars_vertex:Ky,morphtarget_vertex:$y,normal_fragment_begin:Zy,normal_fragment_maps:Qy,normal_pars_fragment:Jy,normal_pars_vertex:eS,normal_vertex:tS,normalmap_pars_fragment:nS,clearcoat_normal_fragment_begin:iS,clearcoat_normal_fragment_maps:rS,clearcoat_pars_fragment:sS,iridescence_pars_fragment:oS,opaque_fragment:aS,packing:lS,premultiplied_alpha_fragment:uS,project_vertex:cS,dithering_fragment:fS,dithering_pars_fragment:dS,roughnessmap_fragment:hS,roughnessmap_pars_fragment:pS,shadowmap_pars_fragment:mS,shadowmap_pars_vertex:gS,shadowmap_vertex:_S,shadowmask_pars_fragment:vS,skinbase_vertex:xS,skinning_pars_vertex:yS,skinning_vertex:SS,skinnormal_vertex:MS,specularmap_fragment:ES,specularmap_pars_fragment:TS,tonemapping_fragment:wS,tonemapping_pars_fragment:AS,transmission_fragment:RS,transmission_pars_fragment:CS,uv_pars_fragment:bS,uv_pars_vertex:LS,uv_vertex:PS,worldpos_vertex:DS,background_vert:US,background_frag:NS,backgroundCube_vert:IS,backgroundCube_frag:FS,cube_vert:OS,cube_frag:zS,depth_vert:kS,depth_frag:BS,distanceRGBA_vert:HS,distanceRGBA_frag:GS,equirect_vert:VS,equirect_frag:WS,linedashed_vert:XS,linedashed_frag:jS,meshbasic_vert:YS,meshbasic_frag:qS,meshlambert_vert:KS,meshlambert_frag:$S,meshmatcap_vert:ZS,meshmatcap_frag:QS,meshnormal_vert:JS,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:rM,meshtoon_vert:sM,meshtoon_frag:oM,points_vert:aM,points_frag:lM,shadow_vert:uM,shadow_frag:cM,sprite_vert:fM,sprite_frag:dM},Ae={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},gi={basic:{uniforms:yn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:yn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new yt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:yn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:yn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:yn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new yt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:yn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:yn([Ae.points,Ae.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:yn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:yn([Ae.common,Ae.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:yn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:yn([Ae.sprite,Ae.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:yn([Ae.common,Ae.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:yn([Ae.lights,Ae.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};gi.physical={uniforms:yn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const xl={r:0,b:0,g:0};function hM(s,e,n,r,a,u,d){const c=new yt(0);let h=u===!0?0:1,m,_,y=null,x=0,S=null;function T(v,g){let I=!1,C=g.isScene===!0?g.background:null;C&&C.isTexture&&(C=(g.backgroundBlurriness>0?n:e).get(C)),C===null?E(c,h):C&&C.isColor&&(E(C,1),I=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||I)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Ol)?(_===void 0&&(_=new zi(new $s(1,1,1),new Yr({name:"BackgroundCubeMaterial",uniforms:Ks(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(W,O,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,_.material.toneMapped=At.getTransfer(C.colorSpace)!==Ut,(y!==C||x!==C.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,y=C,x=C.version,S=s.toneMapping),_.layers.enableAll(),v.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new zi(new bf(2,2),new Yr({name:"BackgroundMaterial",uniforms:Ks(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,m.material.toneMapped=At.getTransfer(C.colorSpace)!==Ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||x!==C.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=C,x=C.version,S=s.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function E(v,g){v.getRGB(xl,Mg(s)),r.buffers.color.setClear(xl.r,xl.g,xl.b,g,d)}return{getClearColor:function(){return c},setClearColor:function(v,g=1){c.set(v),h=g,E(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,E(c,h)},render:T}}function pM(s,e,n,r){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||u!==null,c={},h=v(null);let m=h,_=!1;function y(H,J,re,ue,V){let Z=!1;if(d){const X=E(ue,re,J);m!==X&&(m=X,S(m.object)),Z=g(H,ue,re,V),Z&&I(H,ue,re,V)}else{const X=J.wireframe===!0;(m.geometry!==ue.id||m.program!==re.id||m.wireframe!==X)&&(m.geometry=ue.id,m.program=re.id,m.wireframe=X,Z=!0)}V!==null&&n.update(V,s.ELEMENT_ARRAY_BUFFER),(Z||_)&&(_=!1,le(H,J,re,ue),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,n.get(V).buffer))}function x(){return r.isWebGL2?s.createVertexArray():u.createVertexArrayOES()}function S(H){return r.isWebGL2?s.bindVertexArray(H):u.bindVertexArrayOES(H)}function T(H){return r.isWebGL2?s.deleteVertexArray(H):u.deleteVertexArrayOES(H)}function E(H,J,re){const ue=re.wireframe===!0;let V=c[H.id];V===void 0&&(V={},c[H.id]=V);let Z=V[J.id];Z===void 0&&(Z={},V[J.id]=Z);let X=Z[ue];return X===void 0&&(X=v(x()),Z[ue]=X),X}function v(H){const J=[],re=[],ue=[];for(let V=0;V<a;V++)J[V]=0,re[V]=0,ue[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:re,attributeDivisors:ue,object:H,attributes:{},index:null}}function g(H,J,re,ue){const V=m.attributes,Z=J.attributes;let X=0;const P=re.getAttributes();for(const G in P)if(P[G].location>=0){const ae=V[G];let fe=Z[G];if(fe===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(fe=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(fe=H.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;X++}return m.attributesNum!==X||m.index!==ue}function I(H,J,re,ue){const V={},Z=J.attributes;let X=0;const P=re.getAttributes();for(const G in P)if(P[G].location>=0){let ae=Z[G];ae===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(ae=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(ae=H.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),V[G]=fe,X++}m.attributes=V,m.attributesNum=X,m.index=ue}function C(){const H=m.newAttributes;for(let J=0,re=H.length;J<re;J++)H[J]=0}function F(H){W(H,0)}function W(H,J){const re=m.newAttributes,ue=m.enabledAttributes,V=m.attributeDivisors;re[H]=1,ue[H]===0&&(s.enableVertexAttribArray(H),ue[H]=1),V[H]!==J&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,J),V[H]=J)}function O(){const H=m.newAttributes,J=m.enabledAttributes;for(let re=0,ue=J.length;re<ue;re++)J[re]!==H[re]&&(s.disableVertexAttribArray(re),J[re]=0)}function N(H,J,re,ue,V,Z,X){X===!0?s.vertexAttribIPointer(H,J,re,V,Z):s.vertexAttribPointer(H,J,re,ue,V,Z)}function le(H,J,re,ue){if(r.isWebGL2===!1&&(H.isInstancedMesh||ue.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const V=ue.attributes,Z=re.getAttributes(),X=J.defaultAttributeValues;for(const P in Z){const G=Z[P];if(G.location>=0){let Y=V[P];if(Y===void 0&&(P==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),P==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),Y!==void 0){const ae=Y.normalized,fe=Y.itemSize,Te=n.get(Y);if(Te===void 0)continue;const we=Te.buffer,be=Te.type,Ne=Te.bytesPerElement,ke=r.isWebGL2===!0&&(be===s.INT||be===s.UNSIGNED_INT||Y.gpuType===rg);if(Y.isInterleavedBufferAttribute){const ut=Y.data,ee=ut.stride,Bt=Y.offset;if(ut.isInstancedInterleavedBuffer){for(let Ye=0;Ye<G.locationSize;Ye++)W(G.location+Ye,ut.meshPerAttribute);H.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ye=0;Ye<G.locationSize;Ye++)F(G.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,we);for(let Ye=0;Ye<G.locationSize;Ye++)N(G.location+Ye,fe/G.locationSize,be,ae,ee*Ne,(Bt+fe/G.locationSize*Ye)*Ne,ke)}else{if(Y.isInstancedBufferAttribute){for(let ut=0;ut<G.locationSize;ut++)W(G.location+ut,Y.meshPerAttribute);H.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ut=0;ut<G.locationSize;ut++)F(G.location+ut);s.bindBuffer(s.ARRAY_BUFFER,we);for(let ut=0;ut<G.locationSize;ut++)N(G.location+ut,fe/G.locationSize,be,ae,fe*Ne,fe/G.locationSize*ut*Ne,ke)}}else if(X!==void 0){const ae=X[P];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(G.location,ae);break;case 3:s.vertexAttrib3fv(G.location,ae);break;case 4:s.vertexAttrib4fv(G.location,ae);break;default:s.vertexAttrib1fv(G.location,ae)}}}}O()}function R(){ce();for(const H in c){const J=c[H];for(const re in J){const ue=J[re];for(const V in ue)T(ue[V].object),delete ue[V];delete J[re]}delete c[H]}}function L(H){if(c[H.id]===void 0)return;const J=c[H.id];for(const re in J){const ue=J[re];for(const V in ue)T(ue[V].object),delete ue[V];delete J[re]}delete c[H.id]}function oe(H){for(const J in c){const re=c[J];if(re[H.id]===void 0)continue;const ue=re[H.id];for(const V in ue)T(ue[V].object),delete ue[V];delete re[H.id]}}function ce(){me(),_=!0,m!==h&&(m=h,S(m.object))}function me(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:y,reset:ce,resetDefaultState:me,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:oe,initAttributes:C,enableAttribute:F,disableUnusedAttributes:O}}function mM(s,e,n,r){const a=r.isWebGL2;let u;function d(_){u=_}function c(_,y){s.drawArrays(u,_,y),n.update(y,u,1)}function h(_,y,x){if(x===0)return;let S,T;if(a)S=s,T="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[T](u,_,y,x),n.update(y,u,x)}function m(_,y,x){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<x;T++)this.render(_[T],y[T]);else{S.multiDrawArraysWEBGL(u,_,0,y,0,x);let T=0;for(let E=0;E<x;E++)T+=y[E];n.update(T,u,1)}}this.setMode=d,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function gM(s,e,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const h=u(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const m=d||e.has("WEBGL_draw_buffers"),_=n.logarithmicDepthBuffer===!0,y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),E=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,F=d||e.has("OES_texture_float"),W=C&&F,O=d?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:a,getMaxPrecision:u,precision:c,logarithmicDepthBuffer:_,maxTextures:y,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:T,maxAttributes:E,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:I,vertexTextures:C,floatFragmentTextures:F,floatVertexTextures:W,maxSamples:O}}function _M(s){const e=this;let n=null,r=0,a=!1,u=!1;const d=new dr,c=new vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){n=_(y,x,0)},this.setState=function(y,x,S){const T=y.clippingPlanes,E=y.clipIntersection,v=y.clipShadows,g=s.get(y);if(!a||T===null||T.length===0||u&&!v)u?_(null):m();else{const I=u?0:r,C=I*4;let F=g.clippingState||null;h.value=F,F=_(T,x,C,S);for(let W=0;W!==C;++W)F[W]=n[W];g.clippingState=F,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,x,S,T){const E=y!==null?y.length:0;let v=null;if(E!==0){if(v=h.value,T!==!0||v===null){const g=S+E*4,I=x.matrixWorldInverse;c.getNormalMatrix(I),(v===null||v.length<g)&&(v=new Float32Array(g));for(let C=0,F=S;C!==E;++C,F+=4)d.copy(y[C]).applyMatrix4(I,c),d.normal.toArray(v,F),v[F+3]=d.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}function vM(s){let e=new WeakMap;function n(d,c){return c===ff?d.mapping=js:c===df&&(d.mapping=Ys),d}function r(d){if(d&&d.isTexture){const c=d.mapping;if(c===ff||c===df)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const m=new Lx(h.height/2);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const c=d.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Ag extends Eg{constructor(e=-1,n=1,r=1,a=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,d=r+e,c=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,c-=_*this.view.offsetY,h=c-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=4,cm=[.125,.215,.35,.446,.526,.582],Hr=20,Zc=new Ag,fm=new yt;let Qc=null,Jc=0,ef=0;const kr=(1+Math.sqrt(5))/2,Fs=1/kr,dm=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,kr,Fs),new j(0,kr,-Fs),new j(Fs,0,kr),new j(-Fs,0,kr),new j(kr,Fs,0),new j(-kr,Fs,0)];class hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,ef),e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Wo,format:li,colorSpace:ki,depthBuffer:!1},a=pm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(u)),this._blurMaterial=yM(u,e,n)}return a}_compileMaterial(e){const n=new zi(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,r,a){const c=new $n(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(fm),_.toneMapping=gr,_.autoClear=!1;const S=new xg({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),T=new zi(new $s,S);let E=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,E=!0):(S.color.copy(fm),E=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(c.up.set(0,h[g],0),c.lookAt(m[g],0,0)):I===1?(c.up.set(0,0,h[g]),c.lookAt(0,m[g],0)):(c.up.set(0,h[g],0),c.lookAt(0,0,m[g]));const C=this._cubeSize;yl(a,I*C,g>2?C:0,C,C),_.setRenderTarget(a),E&&_.render(T,c),_.render(e,c)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===js||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mm());const u=a?this._cubemapMaterial:this._equirectMaterial,d=new zi(this._lodPlanes[0],u),c=u.uniforms;c.envMap.value=e;const h=this._cubeSize;yl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,Zc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=dm[(a-1)%dm.length];this._blur(e,a-1,a,u,d)}n.autoClear=r}_blur(e,n,r,a,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",u),this._halfBlur(d,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,d,c){const h=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new zi(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Hr-1),E=u/T,v=isFinite(u)?1+Math.floor(_*E):Hr;v>Hr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Hr}`);const g=[];let I=0;for(let N=0;N<Hr;++N){const le=N/E,R=Math.exp(-le*le/2);g.push(R),N===0?I+=R:N<v&&(I+=2*R)}for(let N=0;N<g.length;N++)g[N]=g[N]/I;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=g,x.latitudinal.value=d==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:C}=this;x.dTheta.value=T,x.mipInt.value=C-r;const F=this._sizeLods[a],W=3*F*(a>C-Gs?a-C+Gs:0),O=4*(this._cubeSize-F);yl(n,W,O,3*F,2*F),h.setRenderTarget(n),h.render(y,Zc)}}function xM(s){const e=[],n=[],r=[];let a=s;const u=s-Gs+1+cm.length;for(let d=0;d<u;d++){const c=Math.pow(2,a);n.push(c);let h=1/c;d>s-Gs?h=cm[d-s+Gs-1]:d===0&&(h=0),r.push(h);const m=1/(c-2),_=-m,y=1+m,x=[_,_,y,_,y,y,_,_,y,y,_,y],S=6,T=6,E=3,v=2,g=1,I=new Float32Array(E*T*S),C=new Float32Array(v*T*S),F=new Float32Array(g*T*S);for(let O=0;O<S;O++){const N=O%3*2/3-1,le=O>2?0:-1,R=[N,le,0,N+2/3,le,0,N+2/3,le+1,0,N,le,0,N+2/3,le+1,0,N,le+1,0];I.set(R,E*T*O),C.set(x,v*T*O);const L=[O,O,O,O,O,O];F.set(L,g*T*O)}const W=new _i;W.setAttribute("position",new ui(I,E)),W.setAttribute("uv",new ui(C,v)),W.setAttribute("faceIndex",new ui(F,g)),e.push(W),a>Gs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function pm(s,e,n){const r=new Xr(s,e,n);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function yM(s,e,n){const r=new Float32Array(Hr),a=new j(0,1,0);return new Yr({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function mm(){return new Yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function gm(){return new Yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Lf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function SM(s){let e=new WeakMap,n=null;function r(c){if(c&&c.isTexture){const h=c.mapping,m=h===ff||h===df,_=h===js||h===Ys;if(m||_)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let y=e.get(c);return n===null&&(n=new hm(s)),y=m?n.fromEquirectangular(c,y):n.fromCubemap(c,y),e.set(c,y),y.texture}else{if(e.has(c))return e.get(c).texture;{const y=c.image;if(m&&y&&y.height>0||_&&y&&a(y)){n===null&&(n=new hm(s));const x=m?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,x),c.addEventListener("dispose",u),x.texture}else return null}}}return c}function a(c){let h=0;const m=6;for(let _=0;_<m;_++)c[_]!==void 0&&h++;return h===m}function u(c){const h=c.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function MM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function EM(s,e,n,r){const a={},u=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const E=x.morphAttributes[T];for(let v=0,g=E.length;v<g;v++)e.remove(E[v])}x.removeEventListener("dispose",d),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function c(y,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function h(y){const x=y.attributes;for(const T in x)e.update(x[T],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const T in S){const E=S[T];for(let v=0,g=E.length;v<g;v++)e.update(E[v],s.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,T=y.attributes.position;let E=0;if(S!==null){const I=S.array;E=S.version;for(let C=0,F=I.length;C<F;C+=3){const W=I[C+0],O=I[C+1],N=I[C+2];x.push(W,O,O,N,N,W)}}else if(T!==void 0){const I=T.array;E=T.version;for(let C=0,F=I.length/3-1;C<F;C+=3){const W=C+0,O=C+1,N=C+2;x.push(W,O,O,N,N,W)}}else return;const v=new(pg(x)?Sg:yg)(x,1);v.version=E;const g=u.get(y);g&&e.remove(g),u.set(y,v)}function _(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:c,update:h,getWireframeAttribute:_}}function TM(s,e,n,r){const a=r.isWebGL2;let u;function d(S){u=S}let c,h;function m(S){c=S.type,h=S.bytesPerElement}function _(S,T){s.drawElements(u,T,c,S*h),n.update(T,u,1)}function y(S,T,E){if(E===0)return;let v,g;if(a)v=s,g="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](u,T,c,S*h,E),n.update(T,u,E)}function x(S,T,E){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<E;g++)this.render(S[g]/h,T[g]);else{v.multiDrawElementsWEBGL(u,T,0,c,S,0,E);let g=0;for(let I=0;I<E;I++)g+=T[I];n.update(g,u,1)}}this.setMode=d,this.setIndex=m,this.render=_,this.renderInstances=y,this.renderMultiDraw=x}function wM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,c){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=c*(u/3);break;case s.LINES:n.lines+=c*(u/2);break;case s.LINE_STRIP:n.lines+=c*(u-1);break;case s.LINE_LOOP:n.lines+=c*u;break;case s.POINTS:n.points+=c*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function AM(s,e){return s[0]-e[0]}function RM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function CM(s,e,n){const r={},a=new Float32Array(8),u=new WeakMap,d=new nn,c=[];for(let m=0;m<8;m++)c[m]=[m,0];function h(m,_,y){const x=m.morphTargetInfluences;if(e.isWebGL2===!0){const T=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,E=T!==void 0?T.length:0;let v=u.get(_);if(v===void 0||v.count!==E){let J=function(){me.dispose(),u.delete(_),_.removeEventListener("dispose",J)};var S=J;v!==void 0&&v.texture.dispose();const C=_.morphAttributes.position!==void 0,F=_.morphAttributes.normal!==void 0,W=_.morphAttributes.color!==void 0,O=_.morphAttributes.position||[],N=_.morphAttributes.normal||[],le=_.morphAttributes.color||[];let R=0;C===!0&&(R=1),F===!0&&(R=2),W===!0&&(R=3);let L=_.attributes.position.count*R,oe=1;L>e.maxTextureSize&&(oe=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const ce=new Float32Array(L*oe*4*E),me=new _g(ce,L,oe,E);me.type=pr,me.needsUpdate=!0;const H=R*4;for(let re=0;re<E;re++){const ue=O[re],V=N[re],Z=le[re],X=L*oe*4*re;for(let P=0;P<ue.count;P++){const G=P*H;C===!0&&(d.fromBufferAttribute(ue,P),ce[X+G+0]=d.x,ce[X+G+1]=d.y,ce[X+G+2]=d.z,ce[X+G+3]=0),F===!0&&(d.fromBufferAttribute(V,P),ce[X+G+4]=d.x,ce[X+G+5]=d.y,ce[X+G+6]=d.z,ce[X+G+7]=0),W===!0&&(d.fromBufferAttribute(Z,P),ce[X+G+8]=d.x,ce[X+G+9]=d.y,ce[X+G+10]=d.z,ce[X+G+11]=Z.itemSize===4?d.w:1)}}v={count:E,texture:me,size:new et(L,oe)},u.set(_,v),_.addEventListener("dispose",J)}let g=0;for(let C=0;C<x.length;C++)g+=x[C];const I=_.morphTargetsRelative?1:1-g;y.getUniforms().setValue(s,"morphTargetBaseInfluence",I),y.getUniforms().setValue(s,"morphTargetInfluences",x),y.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),y.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const T=x===void 0?0:x.length;let E=r[_.id];if(E===void 0||E.length!==T){E=[];for(let F=0;F<T;F++)E[F]=[F,0];r[_.id]=E}for(let F=0;F<T;F++){const W=E[F];W[0]=F,W[1]=x[F]}E.sort(RM);for(let F=0;F<8;F++)F<T&&E[F][1]?(c[F][0]=E[F][0],c[F][1]=E[F][1]):(c[F][0]=Number.MAX_SAFE_INTEGER,c[F][1]=0);c.sort(AM);const v=_.morphAttributes.position,g=_.morphAttributes.normal;let I=0;for(let F=0;F<8;F++){const W=c[F],O=W[0],N=W[1];O!==Number.MAX_SAFE_INTEGER&&N?(v&&_.getAttribute("morphTarget"+F)!==v[O]&&_.setAttribute("morphTarget"+F,v[O]),g&&_.getAttribute("morphNormal"+F)!==g[O]&&_.setAttribute("morphNormal"+F,g[O]),a[F]=N,I+=N):(v&&_.hasAttribute("morphTarget"+F)===!0&&_.deleteAttribute("morphTarget"+F),g&&_.hasAttribute("morphNormal"+F)===!0&&_.deleteAttribute("morphNormal"+F),a[F]=0)}const C=_.morphTargetsRelative?1:1-I;y.getUniforms().setValue(s,"morphTargetBaseInfluence",C),y.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function bM(s,e,n,r){let a=new WeakMap;function u(h){const m=r.render.frame,_=h.geometry,y=e.get(h,_);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function d(){a=new WeakMap}function c(h){const m=h.target;m.removeEventListener("dispose",c),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:d}}class Rg extends Un{constructor(e,n,r,a,u,d,c,h,m,_){if(_=_!==void 0?_:Vr,_!==Vr&&_!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Vr&&(r=hr),r===void 0&&_===qs&&(r=Gr),super(null,a,u,d,c,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:Mn,this.minFilter=h!==void 0?h:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Cg=new Un,bg=new Rg(1,1);bg.compareFunction=hg;const Lg=new _g,Pg=new hx,Dg=new Tg,_m=[],vm=[],xm=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function Zs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=_m[a];if(u===void 0&&(u=new Float32Array(a),_m[a]=u),e!==0){r.toArray(u,0);for(let d=1,c=0;d!==e;++d)c+=n,s[d].toArray(u,c)}return u}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Gl(s,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function LM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function PM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function UM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function NM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if($t(n,r))return;Sm.set(r),s.uniformMatrix2fv(this.addr,!1,Sm),Zt(n,r)}}function IM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if($t(n,r))return;ym.set(r),s.uniformMatrix3fv(this.addr,!1,ym),Zt(n,r)}}function FM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if($t(n,r))return;xm.set(r),s.uniformMatrix4fv(this.addr,!1,xm),Zt(n,r)}}function OM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function zM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function kM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function HM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function WM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function XM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);const u=this.type===s.SAMPLER_2D_SHADOW?bg:Cg;n.setTexture2D(e||u,a)}function jM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Pg,a)}function YM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Dg,a)}function qM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Lg,a)}function KM(s){switch(s){case 5126:return LM;case 35664:return PM;case 35665:return DM;case 35666:return UM;case 35674:return NM;case 35675:return IM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return zM;case 35668:case 35672:return kM;case 35669:case 35673:return BM;case 5125:return HM;case 36294:return GM;case 36295:return VM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return qM}}function $M(s,e){s.uniform1fv(this.addr,e)}function ZM(s,e){const n=Zs(e,this.size,2);s.uniform2fv(this.addr,n)}function QM(s,e){const n=Zs(e,this.size,3);s.uniform3fv(this.addr,n)}function JM(s,e){const n=Zs(e,this.size,4);s.uniform4fv(this.addr,n)}function eE(s,e){const n=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function tE(s,e){const n=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function nE(s,e){const n=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function iE(s,e){s.uniform1iv(this.addr,e)}function rE(s,e){s.uniform2iv(this.addr,e)}function sE(s,e){s.uniform3iv(this.addr,e)}function oE(s,e){s.uniform4iv(this.addr,e)}function aE(s,e){s.uniform1uiv(this.addr,e)}function lE(s,e){s.uniform2uiv(this.addr,e)}function uE(s,e){s.uniform3uiv(this.addr,e)}function cE(s,e){s.uniform4uiv(this.addr,e)}function fE(s,e,n){const r=this.cache,a=e.length,u=Gl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Cg,u[d])}function dE(s,e,n){const r=this.cache,a=e.length,u=Gl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||Pg,u[d])}function hE(s,e,n){const r=this.cache,a=e.length,u=Gl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||Dg,u[d])}function pE(s,e,n){const r=this.cache,a=e.length,u=Gl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Lg,u[d])}function mE(s){switch(s){case 5126:return $M;case 35664:return ZM;case 35665:return QM;case 35666:return JM;case 35674:return eE;case 35675:return tE;case 35676:return nE;case 5124:case 35670:return iE;case 35667:case 35671:return rE;case 35668:case 35672:return sE;case 35669:case 35673:return oE;case 5125:return aE;case 36294:return lE;case 36295:return uE;case 36296:return cE;case 35678:case 36198:case 36298:case 36306:case 35682:return fE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return hE;case 36289:case 36303:case 36311:case 36292:return pE}}class gE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=KM(n.type)}}class _E{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mE(n.type)}}class vE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,d=a.length;u!==d;++u){const c=a[u];c.setValue(e,n[c.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Mm(s,e){s.seq.push(e),s.map[e.id]=e}function xE(s,e,n){const r=s.name,a=r.length;for(tf.lastIndex=0;;){const u=tf.exec(r),d=tf.lastIndex;let c=u[1];const h=u[2]==="]",m=u[3];if(h&&(c=c|0),m===void 0||m==="["&&d+2===a){Mm(n,m===void 0?new gE(c,s,e):new _E(c,s,e));break}else{let y=n.map[c];y===void 0&&(y=new vE(c),Mm(n,y)),n=y}}}class Cl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),d=e.getUniformLocation(n,u.name);xE(u,d,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,d=n.length;u!==d;++u){const c=n[u],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Em(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const yE=37297;let SE=0;function ME(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let d=a;d<u;d++){const c=d+1;r.push(`${c===e?">":" "} ${c}: ${n[d]}`)}return r.join(`
`)}function EE(s){const e=At.getPrimaries(At.workingColorSpace),n=At.getPrimaries(s);let r;switch(e===n?r="":e===Ul&&n===Dl?r="LinearDisplayP3ToLinearSRGB":e===Dl&&n===Ul&&(r="LinearSRGBToLinearDisplayP3"),s){case ki:case zl:return[r,"LinearTransferOETF"];case an:case Af:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Tm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+ME(s.getShaderSource(e),d)}else return a}function TE(s,e){const n=EE(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function wE(s,e){let n;switch(e){case I0:n="Linear";break;case F0:n="Reinhard";break;case O0:n="OptimizedCineon";break;case z0:n="ACESFilmic";break;case B0:n="AgX";break;case k0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function AE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function RE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vs).join(`
`)}function CE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function bE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),d=u.name;let c=1;u.type===s.FLOAT_MAT2&&(c=2),u.type===s.FLOAT_MAT3&&(c=3),u.type===s.FLOAT_MAT4&&(c=4),n[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:c}}return n}function Vs(s){return s!==""}function wm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LE=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(s){return s.replace(LE,DE)}const PE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function DE(s,e){let n=ht[e];if(n===void 0){const r=PE.get(e);if(r!==void 0)n=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return xf(n)}const UE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(s){return s.replace(UE,NE)}function NE(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Cm(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===u0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function FE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Ys:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function zE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ng:e="ENVMAP_BLENDING_MULTIPLY";break;case U0:e="ENVMAP_BLENDING_MIX";break;case N0:e="ENVMAP_BLENDING_ADD";break}return e}function kE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function BE(s,e,n,r){const a=s.getContext(),u=n.defines;let d=n.vertexShader,c=n.fragmentShader;const h=IE(n),m=FE(n),_=OE(n),y=zE(n),x=kE(n),S=n.isWebGL2?"":AE(n),T=RE(n),E=CE(u),v=a.createProgram();let g,I,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Vs).join(`
`),g.length>0&&(g+=`
`),I=[S,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Vs).join(`
`),I.length>0&&(I+=`
`)):(g=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),I=[S,Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?ht.tonemapping_pars_fragment:"",n.toneMapping!==gr?wE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,TE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vs).join(`
`)),d=xf(d),d=wm(d,n),d=Am(d,n),c=xf(c),c=wm(c,n),c=Am(c,n),d=Rm(d),c=Rm(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,I=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+I);const F=C+g+d,W=C+I+c,O=Em(a,a.VERTEX_SHADER,F),N=Em(a,a.FRAGMENT_SHADER,W);a.attachShader(v,O),a.attachShader(v,N),n.index0AttributeName!==void 0?a.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function le(ce){if(s.debug.checkShaderErrors){const me=a.getProgramInfoLog(v).trim(),H=a.getShaderInfoLog(O).trim(),J=a.getShaderInfoLog(N).trim();let re=!0,ue=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,v,O,N);else{const V=Tm(a,O,"vertex"),Z=Tm(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Program Info Log: `+me+`
`+V+`
`+Z)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(H===""||J==="")&&(ue=!1);ue&&(ce.diagnostics={runnable:re,programLog:me,vertexShader:{log:H,prefix:g},fragmentShader:{log:J,prefix:I}})}a.deleteShader(O),a.deleteShader(N),R=new Cl(a,v),L=bE(a,v)}let R;this.getUniforms=function(){return R===void 0&&le(this),R};let L;this.getAttributes=function(){return L===void 0&&le(this),L};let oe=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return oe===!1&&(oe=a.getProgramParameter(v,yE)),oe},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=N,this}let HE=0;class GE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new VE(e),n.set(e,r)),r}}class VE{constructor(e){this.id=HE++,this.code=e,this.usedTimes=0}}function WE(s,e,n,r,a,u,d){const c=new Rf,h=new GE,m=[],_=a.isWebGL2,y=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return R===0?"uv":`uv${R}`}function v(R,L,oe,ce,me){const H=ce.fog,J=me.geometry,re=R.isMeshStandardMaterial?ce.environment:null,ue=(R.isMeshStandardMaterial?n:e).get(R.envMap||re),V=ue&&ue.mapping===Ol?ue.image.height:null,Z=T[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const X=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,P=X!==void 0?X.length:0;let G=0;J.morphAttributes.position!==void 0&&(G=1),J.morphAttributes.normal!==void 0&&(G=2),J.morphAttributes.color!==void 0&&(G=3);let Y,ae,fe,Te;if(Z){const Nt=gi[Z];Y=Nt.vertexShader,ae=Nt.fragmentShader}else Y=R.vertexShader,ae=R.fragmentShader,h.update(R),fe=h.getVertexShaderID(R),Te=h.getFragmentShaderID(R);const we=s.getRenderTarget(),be=me.isInstancedMesh===!0,Ne=me.isBatchedMesh===!0,ke=!!R.map,ut=!!R.matcap,ee=!!ue,Bt=!!R.aoMap,Ye=!!R.lightMap,tt=!!R.bumpMap,Be=!!R.normalMap,Tt=!!R.displacementMap,st=!!R.emissiveMap,b=!!R.metalnessMap,w=!!R.roughnessMap,Q=R.anisotropy>0,ve=R.clearcoat>0,_e=R.iridescence>0,ye=R.sheen>0,Ge=R.transmission>0,Ce=Q&&!!R.anisotropyMap,Ie=ve&&!!R.clearcoatMap,qe=ve&&!!R.clearcoatNormalMap,ot=ve&&!!R.clearcoatRoughnessMap,he=_e&&!!R.iridescenceMap,xt=_e&&!!R.iridescenceThicknessMap,ct=ye&&!!R.sheenColorMap,nt=ye&&!!R.sheenRoughnessMap,Xe=!!R.specularMap,Le=!!R.specularColorMap,U=!!R.specularIntensityMap,Me=Ge&&!!R.transmissionMap,Ve=Ge&&!!R.thicknessMap,Ue=!!R.gradientMap,ge=!!R.alphaMap,z=R.alphaTest>0,Se=!!R.alphaHash,Re=!!R.extensions,Qe=!!J.attributes.uv1,Ke=!!J.attributes.uv2,pt=!!J.attributes.uv3;let mt=gr;return R.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(mt=s.toneMapping),{isWebGL2:_,shaderID:Z,shaderType:R.type,shaderName:R.name,vertexShader:Y,fragmentShader:ae,defines:R.defines,customVertexShaderID:fe,customFragmentShaderID:Te,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Ne,instancing:be,instancingColor:be&&me.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:ki,map:ke,matcap:ut,envMap:ee,envMapMode:ee&&ue.mapping,envMapCubeUVHeight:V,aoMap:Bt,lightMap:Ye,bumpMap:tt,normalMap:Be,displacementMap:x&&Tt,emissiveMap:st,normalMapObjectSpace:Be&&R.normalMapType===Q0,normalMapTangentSpace:Be&&R.normalMapType===dg,metalnessMap:b,roughnessMap:w,anisotropy:Q,anisotropyMap:Ce,clearcoat:ve,clearcoatMap:Ie,clearcoatNormalMap:qe,clearcoatRoughnessMap:ot,iridescence:_e,iridescenceMap:he,iridescenceThicknessMap:xt,sheen:ye,sheenColorMap:ct,sheenRoughnessMap:nt,specularMap:Xe,specularColorMap:Le,specularIntensityMap:U,transmission:Ge,transmissionMap:Me,thicknessMap:Ve,gradientMap:Ue,opaque:R.transparent===!1&&R.blending===Ws,alphaMap:ge,alphaTest:z,alphaHash:Se,combine:R.combine,mapUv:ke&&E(R.map.channel),aoMapUv:Bt&&E(R.aoMap.channel),lightMapUv:Ye&&E(R.lightMap.channel),bumpMapUv:tt&&E(R.bumpMap.channel),normalMapUv:Be&&E(R.normalMap.channel),displacementMapUv:Tt&&E(R.displacementMap.channel),emissiveMapUv:st&&E(R.emissiveMap.channel),metalnessMapUv:b&&E(R.metalnessMap.channel),roughnessMapUv:w&&E(R.roughnessMap.channel),anisotropyMapUv:Ce&&E(R.anisotropyMap.channel),clearcoatMapUv:Ie&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:qe&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:nt&&E(R.sheenRoughnessMap.channel),specularMapUv:Xe&&E(R.specularMap.channel),specularColorMapUv:Le&&E(R.specularColorMap.channel),specularIntensityMapUv:U&&E(R.specularIntensityMap.channel),transmissionMapUv:Me&&E(R.transmissionMap.channel),thicknessMapUv:Ve&&E(R.thicknessMap.channel),alphaMapUv:ge&&E(R.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Be||Q),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:Qe,vertexUv2s:Ke,vertexUv3s:pt,pointsUvs:me.isPoints===!0&&!!J.attributes.uv&&(ke||ge),fog:!!H,useFog:R.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:me.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:G,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&oe.length>0,shadowMapType:s.shadowMap.type,toneMapping:mt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ke&&R.map.isVideoTexture===!0&&At.getTransfer(R.map.colorSpace)===Ut,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ii,flipSided:R.side===Dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Re&&R.extensions.derivatives===!0,extensionFragDepth:Re&&R.extensions.fragDepth===!0,extensionDrawBuffers:Re&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&R.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:_||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function g(R){const L=[];if(R.shaderID?L.push(R.shaderID):(L.push(R.customVertexShaderID),L.push(R.customFragmentShaderID)),R.defines!==void 0)for(const oe in R.defines)L.push(oe),L.push(R.defines[oe]);return R.isRawShaderMaterial===!1&&(I(L,R),C(L,R),L.push(s.outputColorSpace)),L.push(R.customProgramCacheKey),L.join()}function I(R,L){R.push(L.precision),R.push(L.outputColorSpace),R.push(L.envMapMode),R.push(L.envMapCubeUVHeight),R.push(L.mapUv),R.push(L.alphaMapUv),R.push(L.lightMapUv),R.push(L.aoMapUv),R.push(L.bumpMapUv),R.push(L.normalMapUv),R.push(L.displacementMapUv),R.push(L.emissiveMapUv),R.push(L.metalnessMapUv),R.push(L.roughnessMapUv),R.push(L.anisotropyMapUv),R.push(L.clearcoatMapUv),R.push(L.clearcoatNormalMapUv),R.push(L.clearcoatRoughnessMapUv),R.push(L.iridescenceMapUv),R.push(L.iridescenceThicknessMapUv),R.push(L.sheenColorMapUv),R.push(L.sheenRoughnessMapUv),R.push(L.specularMapUv),R.push(L.specularColorMapUv),R.push(L.specularIntensityMapUv),R.push(L.transmissionMapUv),R.push(L.thicknessMapUv),R.push(L.combine),R.push(L.fogExp2),R.push(L.sizeAttenuation),R.push(L.morphTargetsCount),R.push(L.morphAttributeCount),R.push(L.numDirLights),R.push(L.numPointLights),R.push(L.numSpotLights),R.push(L.numSpotLightMaps),R.push(L.numHemiLights),R.push(L.numRectAreaLights),R.push(L.numDirLightShadows),R.push(L.numPointLightShadows),R.push(L.numSpotLightShadows),R.push(L.numSpotLightShadowsWithMaps),R.push(L.numLightProbes),R.push(L.shadowMapType),R.push(L.toneMapping),R.push(L.numClippingPlanes),R.push(L.numClipIntersection),R.push(L.depthPacking)}function C(R,L){c.disableAll(),L.isWebGL2&&c.enable(0),L.supportsVertexTextures&&c.enable(1),L.instancing&&c.enable(2),L.instancingColor&&c.enable(3),L.matcap&&c.enable(4),L.envMap&&c.enable(5),L.normalMapObjectSpace&&c.enable(6),L.normalMapTangentSpace&&c.enable(7),L.clearcoat&&c.enable(8),L.iridescence&&c.enable(9),L.alphaTest&&c.enable(10),L.vertexColors&&c.enable(11),L.vertexAlphas&&c.enable(12),L.vertexUv1s&&c.enable(13),L.vertexUv2s&&c.enable(14),L.vertexUv3s&&c.enable(15),L.vertexTangents&&c.enable(16),L.anisotropy&&c.enable(17),L.alphaHash&&c.enable(18),L.batching&&c.enable(19),R.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.skinning&&c.enable(4),L.morphTargets&&c.enable(5),L.morphNormals&&c.enable(6),L.morphColors&&c.enable(7),L.premultipliedAlpha&&c.enable(8),L.shadowMapEnabled&&c.enable(9),L.useLegacyLights&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),R.push(c.mask)}function F(R){const L=T[R.type];let oe;if(L){const ce=gi[L];oe=Ax.clone(ce.uniforms)}else oe=R.uniforms;return oe}function W(R,L){let oe;for(let ce=0,me=m.length;ce<me;ce++){const H=m[ce];if(H.cacheKey===L){oe=H,++oe.usedTimes;break}}return oe===void 0&&(oe=new BE(s,L,R,u),m.push(oe)),oe}function O(R){if(--R.usedTimes===0){const L=m.indexOf(R);m[L]=m[m.length-1],m.pop(),R.destroy()}}function N(R){h.remove(R)}function le(){h.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:F,acquireProgram:W,releaseProgram:O,releaseShaderCache:N,programs:m,dispose:le}}function XE(){let s=new WeakMap;function e(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function n(u){s.delete(u)}function r(u,d,c){s.get(u)[d]=c}function a(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function jE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function bm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function d(y,x,S,T,E,v){let g=s[e];return g===void 0?(g={id:y.id,object:y,geometry:x,material:S,groupOrder:T,renderOrder:y.renderOrder,z:E,group:v},s[e]=g):(g.id=y.id,g.object=y,g.geometry=x,g.material=S,g.groupOrder=T,g.renderOrder=y.renderOrder,g.z=E,g.group=v),e++,g}function c(y,x,S,T,E,v){const g=d(y,x,S,T,E,v);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function h(y,x,S,T,E,v){const g=d(y,x,S,T,E,v);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(y,x){n.length>1&&n.sort(y||jE),r.length>1&&r.sort(x||bm),a.length>1&&a.sort(x||bm)}function _(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:c,unshift:h,finish:_,sort:m}}function YE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let d;return u===void 0?(d=new Lm,s.set(r,[d])):a>=u.length?(d=new Lm,u.push(d)):d=u[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function qE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new yt};break;case"SpotLight":n={position:new j,direction:new j,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=n,n}}}function KE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let $E=0;function ZE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function QE(s,e){const n=new qE,r=KE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)a.probe.push(new j);const u=new j,d=new Xt,c=new Xt;function h(_,y){let x=0,S=0,T=0;for(let ce=0;ce<9;ce++)a.probe[ce].set(0,0,0);let E=0,v=0,g=0,I=0,C=0,F=0,W=0,O=0,N=0,le=0,R=0;_.sort(ZE);const L=y===!0?Math.PI:1;for(let ce=0,me=_.length;ce<me;ce++){const H=_[ce],J=H.color,re=H.intensity,ue=H.distance,V=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)x+=J.r*re*L,S+=J.g*re*L,T+=J.b*re*L;else if(H.isLightProbe){for(let Z=0;Z<9;Z++)a.probe[Z].addScaledVector(H.sh.coefficients[Z],re);R++}else if(H.isDirectionalLight){const Z=n.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity*L),H.castShadow){const X=H.shadow,P=r.get(H);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,a.directionalShadow[E]=P,a.directionalShadowMap[E]=V,a.directionalShadowMatrix[E]=H.shadow.matrix,F++}a.directional[E]=Z,E++}else if(H.isSpotLight){const Z=n.get(H);Z.position.setFromMatrixPosition(H.matrixWorld),Z.color.copy(J).multiplyScalar(re*L),Z.distance=ue,Z.coneCos=Math.cos(H.angle),Z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Z.decay=H.decay,a.spot[g]=Z;const X=H.shadow;if(H.map&&(a.spotLightMap[N]=H.map,N++,X.updateMatrices(H),H.castShadow&&le++),a.spotLightMatrix[g]=X.matrix,H.castShadow){const P=r.get(H);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,a.spotShadow[g]=P,a.spotShadowMap[g]=V,O++}g++}else if(H.isRectAreaLight){const Z=n.get(H);Z.color.copy(J).multiplyScalar(re),Z.halfWidth.set(H.width*.5,0,0),Z.halfHeight.set(0,H.height*.5,0),a.rectArea[I]=Z,I++}else if(H.isPointLight){const Z=n.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity*L),Z.distance=H.distance,Z.decay=H.decay,H.castShadow){const X=H.shadow,P=r.get(H);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,P.shadowCameraNear=X.camera.near,P.shadowCameraFar=X.camera.far,a.pointShadow[v]=P,a.pointShadowMap[v]=V,a.pointShadowMatrix[v]=H.shadow.matrix,W++}a.point[v]=Z,v++}else if(H.isHemisphereLight){const Z=n.get(H);Z.skyColor.copy(H.color).multiplyScalar(re*L),Z.groundColor.copy(H.groundColor).multiplyScalar(re*L),a.hemi[C]=Z,C++}}I>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ae.LTC_FLOAT_1,a.rectAreaLTC2=Ae.LTC_FLOAT_2):(a.rectAreaLTC1=Ae.LTC_HALF_1,a.rectAreaLTC2=Ae.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ae.LTC_FLOAT_1,a.rectAreaLTC2=Ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ae.LTC_HALF_1,a.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=x,a.ambient[1]=S,a.ambient[2]=T;const oe=a.hash;(oe.directionalLength!==E||oe.pointLength!==v||oe.spotLength!==g||oe.rectAreaLength!==I||oe.hemiLength!==C||oe.numDirectionalShadows!==F||oe.numPointShadows!==W||oe.numSpotShadows!==O||oe.numSpotMaps!==N||oe.numLightProbes!==R)&&(a.directional.length=E,a.spot.length=g,a.rectArea.length=I,a.point.length=v,a.hemi.length=C,a.directionalShadow.length=F,a.directionalShadowMap.length=F,a.pointShadow.length=W,a.pointShadowMap.length=W,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=F,a.pointShadowMatrix.length=W,a.spotLightMatrix.length=O+N-le,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=le,a.numLightProbes=R,oe.directionalLength=E,oe.pointLength=v,oe.spotLength=g,oe.rectAreaLength=I,oe.hemiLength=C,oe.numDirectionalShadows=F,oe.numPointShadows=W,oe.numSpotShadows=O,oe.numSpotMaps=N,oe.numLightProbes=R,a.version=$E++)}function m(_,y){let x=0,S=0,T=0,E=0,v=0;const g=y.matrixWorldInverse;for(let I=0,C=_.length;I<C;I++){const F=_[I];if(F.isDirectionalLight){const W=a.directional[x];W.direction.setFromMatrixPosition(F.matrixWorld),u.setFromMatrixPosition(F.target.matrixWorld),W.direction.sub(u),W.direction.transformDirection(g),x++}else if(F.isSpotLight){const W=a.spot[T];W.position.setFromMatrixPosition(F.matrixWorld),W.position.applyMatrix4(g),W.direction.setFromMatrixPosition(F.matrixWorld),u.setFromMatrixPosition(F.target.matrixWorld),W.direction.sub(u),W.direction.transformDirection(g),T++}else if(F.isRectAreaLight){const W=a.rectArea[E];W.position.setFromMatrixPosition(F.matrixWorld),W.position.applyMatrix4(g),c.identity(),d.copy(F.matrixWorld),d.premultiply(g),c.extractRotation(d),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),W.halfWidth.applyMatrix4(c),W.halfHeight.applyMatrix4(c),E++}else if(F.isPointLight){const W=a.point[S];W.position.setFromMatrixPosition(F.matrixWorld),W.position.applyMatrix4(g),S++}else if(F.isHemisphereLight){const W=a.hemi[v];W.direction.setFromMatrixPosition(F.matrixWorld),W.direction.transformDirection(g),v++}}}return{setup:h,setupView:m,state:a}}function Pm(s,e){const n=new QE(s,e),r=[],a=[];function u(){r.length=0,a.length=0}function d(y){r.push(y)}function c(y){a.push(y)}function h(y){n.setup(r,y)}function m(y){n.setupView(r,y)}return{init:u,state:{lightsArray:r,shadowsArray:a,lights:n},setupLights:h,setupLightsView:m,pushLight:d,pushShadow:c}}function JE(s,e){let n=new WeakMap;function r(u,d=0){const c=n.get(u);let h;return c===void 0?(h=new Pm(s,e),n.set(u,[h])):d>=c.length?(h=new Pm(s,e),c.push(h)):h=c[d],h}function a(){n=new WeakMap}return{get:r,dispose:a}}class eT extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tT extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rT(s,e,n){let r=new Cf;const a=new et,u=new et,d=new nn,c=new eT({depthPacking:Z0}),h=new tT,m={},_=n.maxTextureSize,y={[xr]:Dn,[Dn]:xr,[Ii]:Ii},x=new Yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:nT,fragmentShader:iT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new _i;T.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new zi(T,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tg;let g=this.type;this.render=function(O,N,le){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;const R=s.getRenderTarget(),L=s.getActiveCubeFace(),oe=s.getActiveMipmapLevel(),ce=s.state;ce.setBlending(mr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const me=g!==Ni&&this.type===Ni,H=g===Ni&&this.type!==Ni;for(let J=0,re=O.length;J<re;J++){const ue=O[J],V=ue.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const Z=V.getFrameExtents();if(a.multiply(Z),u.copy(V.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/Z.x),a.x=u.x*Z.x,V.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/Z.y),a.y=u.y*Z.y,V.mapSize.y=u.y)),V.map===null||me===!0||H===!0){const P=this.type!==Ni?{minFilter:Mn,magFilter:Mn}:{};V.map!==null&&V.map.dispose(),V.map=new Xr(a.x,a.y,P),V.map.texture.name=ue.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const X=V.getViewportCount();for(let P=0;P<X;P++){const G=V.getViewport(P);d.set(u.x*G.x,u.y*G.y,u.x*G.z,u.y*G.w),ce.viewport(d),V.updateMatrices(ue,P),r=V.getFrustum(),F(N,le,V.camera,ue,this.type)}V.isPointLightShadow!==!0&&this.type===Ni&&I(V,le),V.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(R,L,oe)};function I(O,N){const le=e.update(E);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Xr(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(N,null,le,x,E,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(N,null,le,S,E,null)}function C(O,N,le,R){let L=null;const oe=le.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(oe!==void 0)L=oe;else if(L=le.isPointLight===!0?h:c,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ce=L.uuid,me=N.uuid;let H=m[ce];H===void 0&&(H={},m[ce]=H);let J=H[me];J===void 0&&(J=L.clone(),H[me]=J,N.addEventListener("dispose",W)),L=J}if(L.visible=N.visible,L.wireframe=N.wireframe,R===Ni?L.side=N.shadowSide!==null?N.shadowSide:N.side:L.side=N.shadowSide!==null?N.shadowSide:y[N.side],L.alphaMap=N.alphaMap,L.alphaTest=N.alphaTest,L.map=N.map,L.clipShadows=N.clipShadows,L.clippingPlanes=N.clippingPlanes,L.clipIntersection=N.clipIntersection,L.displacementMap=N.displacementMap,L.displacementScale=N.displacementScale,L.displacementBias=N.displacementBias,L.wireframeLinewidth=N.wireframeLinewidth,L.linewidth=N.linewidth,le.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ce=s.properties.get(L);ce.light=le}return L}function F(O,N,le,R,L){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&L===Ni)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,O.matrixWorld);const me=e.update(O),H=O.material;if(Array.isArray(H)){const J=me.groups;for(let re=0,ue=J.length;re<ue;re++){const V=J[re],Z=H[V.materialIndex];if(Z&&Z.visible){const X=C(O,Z,R,L);O.onBeforeShadow(s,O,N,le,me,X,V),s.renderBufferDirect(le,null,me,X,O,V),O.onAfterShadow(s,O,N,le,me,X,V)}}}else if(H.visible){const J=C(O,H,R,L);O.onBeforeShadow(s,O,N,le,me,J,null),s.renderBufferDirect(le,null,me,J,O,null),O.onAfterShadow(s,O,N,le,me,J,null)}}const ce=O.children;for(let me=0,H=ce.length;me<H;me++)F(ce[me],N,le,R,L)}function W(O){O.target.removeEventListener("dispose",W);for(const le in m){const R=m[le],L=O.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function sT(s,e,n){const r=n.isWebGL2;function a(){let z=!1;const Se=new nn;let Re=null;const Qe=new nn(0,0,0,0);return{setMask:function(Ke){Re!==Ke&&!z&&(s.colorMask(Ke,Ke,Ke,Ke),Re=Ke)},setLocked:function(Ke){z=Ke},setClear:function(Ke,pt,mt,Ct,Nt){Nt===!0&&(Ke*=Ct,pt*=Ct,mt*=Ct),Se.set(Ke,pt,mt,Ct),Qe.equals(Se)===!1&&(s.clearColor(Ke,pt,mt,Ct),Qe.copy(Se))},reset:function(){z=!1,Re=null,Qe.set(-1,0,0,0)}}}function u(){let z=!1,Se=null,Re=null,Qe=null;return{setTest:function(Ke){Ke?Ne(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(Ke){Se!==Ke&&!z&&(s.depthMask(Ke),Se=Ke)},setFunc:function(Ke){if(Re!==Ke){switch(Ke){case A0:s.depthFunc(s.NEVER);break;case R0:s.depthFunc(s.ALWAYS);break;case C0:s.depthFunc(s.LESS);break;case Ll:s.depthFunc(s.LEQUAL);break;case b0:s.depthFunc(s.EQUAL);break;case L0:s.depthFunc(s.GEQUAL);break;case P0:s.depthFunc(s.GREATER);break;case D0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=Ke}},setLocked:function(Ke){z=Ke},setClear:function(Ke){Qe!==Ke&&(s.clearDepth(Ke),Qe=Ke)},reset:function(){z=!1,Se=null,Re=null,Qe=null}}}function d(){let z=!1,Se=null,Re=null,Qe=null,Ke=null,pt=null,mt=null,Ct=null,Nt=null;return{setTest:function(gt){z||(gt?Ne(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(gt){Se!==gt&&!z&&(s.stencilMask(gt),Se=gt)},setFunc:function(gt,It,ln){(Re!==gt||Qe!==It||Ke!==ln)&&(s.stencilFunc(gt,It,ln),Re=gt,Qe=It,Ke=ln)},setOp:function(gt,It,ln){(pt!==gt||mt!==It||Ct!==ln)&&(s.stencilOp(gt,It,ln),pt=gt,mt=It,Ct=ln)},setLocked:function(gt){z=gt},setClear:function(gt){Nt!==gt&&(s.clearStencil(gt),Nt=gt)},reset:function(){z=!1,Se=null,Re=null,Qe=null,Ke=null,pt=null,mt=null,Ct=null,Nt=null}}}const c=new a,h=new u,m=new d,_=new WeakMap,y=new WeakMap;let x={},S={},T=new WeakMap,E=[],v=null,g=!1,I=null,C=null,F=null,W=null,O=null,N=null,le=null,R=new yt(0,0,0),L=0,oe=!1,ce=null,me=null,H=null,J=null,re=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=Z>=2);let P=null,G={};const Y=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),fe=new nn().fromArray(Y),Te=new nn().fromArray(ae);function we(z,Se,Re,Qe){const Ke=new Uint8Array(4),pt=s.createTexture();s.bindTexture(z,pt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let mt=0;mt<Re;mt++)r&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(Se,0,s.RGBA,1,1,Qe,0,s.RGBA,s.UNSIGNED_BYTE,Ke):s.texImage2D(Se+mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ke);return pt}const be={};be[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(be[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),Ne(s.DEPTH_TEST),h.setFunc(Ll),st(!1),b(hp),Ne(s.CULL_FACE),Be(mr);function Ne(z){x[z]!==!0&&(s.enable(z),x[z]=!0)}function ke(z){x[z]!==!1&&(s.disable(z),x[z]=!1)}function ut(z,Se){return S[z]!==Se?(s.bindFramebuffer(z,Se),S[z]=Se,r&&(z===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Se),z===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Se)),!0):!1}function ee(z,Se){let Re=E,Qe=!1;if(z)if(Re=T.get(Se),Re===void 0&&(Re=[],T.set(Se,Re)),z.isWebGLMultipleRenderTargets){const Ke=z.texture;if(Re.length!==Ke.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,mt=Ke.length;pt<mt;pt++)Re[pt]=s.COLOR_ATTACHMENT0+pt;Re.length=Ke.length,Qe=!0}}else Re[0]!==s.COLOR_ATTACHMENT0&&(Re[0]=s.COLOR_ATTACHMENT0,Qe=!0);else Re[0]!==s.BACK&&(Re[0]=s.BACK,Qe=!0);Qe&&(n.isWebGL2?s.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function Bt(z){return v!==z?(s.useProgram(z),v=z,!0):!1}const Ye={[Br]:s.FUNC_ADD,[f0]:s.FUNC_SUBTRACT,[d0]:s.FUNC_REVERSE_SUBTRACT};if(r)Ye[_p]=s.MIN,Ye[vp]=s.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(Ye[_p]=z.MIN_EXT,Ye[vp]=z.MAX_EXT)}const tt={[h0]:s.ZERO,[p0]:s.ONE,[m0]:s.SRC_COLOR,[uf]:s.SRC_ALPHA,[S0]:s.SRC_ALPHA_SATURATE,[x0]:s.DST_COLOR,[_0]:s.DST_ALPHA,[g0]:s.ONE_MINUS_SRC_COLOR,[cf]:s.ONE_MINUS_SRC_ALPHA,[y0]:s.ONE_MINUS_DST_COLOR,[v0]:s.ONE_MINUS_DST_ALPHA,[M0]:s.CONSTANT_COLOR,[E0]:s.ONE_MINUS_CONSTANT_COLOR,[T0]:s.CONSTANT_ALPHA,[w0]:s.ONE_MINUS_CONSTANT_ALPHA};function Be(z,Se,Re,Qe,Ke,pt,mt,Ct,Nt,gt){if(z===mr){g===!0&&(ke(s.BLEND),g=!1);return}if(g===!1&&(Ne(s.BLEND),g=!0),z!==c0){if(z!==I||gt!==oe){if((C!==Br||O!==Br)&&(s.blendEquation(s.FUNC_ADD),C=Br,O=Br),gt)switch(z){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pp:s.blendFunc(s.ONE,s.ONE);break;case mp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}F=null,W=null,N=null,le=null,R.set(0,0,0),L=0,I=z,oe=gt}return}Ke=Ke||Se,pt=pt||Re,mt=mt||Qe,(Se!==C||Ke!==O)&&(s.blendEquationSeparate(Ye[Se],Ye[Ke]),C=Se,O=Ke),(Re!==F||Qe!==W||pt!==N||mt!==le)&&(s.blendFuncSeparate(tt[Re],tt[Qe],tt[pt],tt[mt]),F=Re,W=Qe,N=pt,le=mt),(Ct.equals(R)===!1||Nt!==L)&&(s.blendColor(Ct.r,Ct.g,Ct.b,Nt),R.copy(Ct),L=Nt),I=z,oe=!1}function Tt(z,Se){z.side===Ii?ke(s.CULL_FACE):Ne(s.CULL_FACE);let Re=z.side===Dn;Se&&(Re=!Re),st(Re),z.blending===Ws&&z.transparent===!1?Be(mr):Be(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),h.setFunc(z.depthFunc),h.setTest(z.depthTest),h.setMask(z.depthWrite),c.setMask(z.colorWrite);const Qe=z.stencilWrite;m.setTest(Qe),Qe&&(m.setMask(z.stencilWriteMask),m.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),m.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Q(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ne(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(z){ce!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),ce=z)}function b(z){z!==a0?(Ne(s.CULL_FACE),z!==me&&(z===hp?s.cullFace(s.BACK):z===l0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),me=z}function w(z){z!==H&&(V&&s.lineWidth(z),H=z)}function Q(z,Se,Re){z?(Ne(s.POLYGON_OFFSET_FILL),(J!==Se||re!==Re)&&(s.polygonOffset(Se,Re),J=Se,re=Re)):ke(s.POLYGON_OFFSET_FILL)}function ve(z){z?Ne(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function _e(z){z===void 0&&(z=s.TEXTURE0+ue-1),P!==z&&(s.activeTexture(z),P=z)}function ye(z,Se,Re){Re===void 0&&(P===null?Re=s.TEXTURE0+ue-1:Re=P);let Qe=G[Re];Qe===void 0&&(Qe={type:void 0,texture:void 0},G[Re]=Qe),(Qe.type!==z||Qe.texture!==Se)&&(P!==Re&&(s.activeTexture(Re),P=Re),s.bindTexture(z,Se||be[z]),Qe.type=z,Qe.texture=Se)}function Ge(){const z=G[P];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ce(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Xe(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(z){fe.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),fe.copy(z))}function Me(z){Te.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Te.copy(z))}function Ve(z,Se){let Re=y.get(Se);Re===void 0&&(Re=new WeakMap,y.set(Se,Re));let Qe=Re.get(z);Qe===void 0&&(Qe=s.getUniformBlockIndex(Se,z.name),Re.set(z,Qe))}function Ue(z,Se){const Qe=y.get(Se).get(z);_.get(Se)!==Qe&&(s.uniformBlockBinding(Se,Qe,z.__bindingPointIndex),_.set(Se,Qe))}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},P=null,G={},S={},T=new WeakMap,E=[],v=null,g=!1,I=null,C=null,F=null,W=null,O=null,N=null,le=null,R=new yt(0,0,0),L=0,oe=!1,ce=null,me=null,H=null,J=null,re=null,fe.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:Ne,disable:ke,bindFramebuffer:ut,drawBuffers:ee,useProgram:Bt,setBlending:Be,setMaterial:Tt,setFlipSided:st,setCullFace:b,setLineWidth:w,setPolygonOffset:Q,setScissorTest:ve,activeTexture:_e,bindTexture:ye,unbindTexture:Ge,compressedTexImage2D:Ce,compressedTexImage3D:Ie,texImage2D:Xe,texImage3D:Le,updateUBOMapping:Ve,uniformBlockBinding:Ue,texStorage2D:ct,texStorage3D:nt,texSubImage2D:qe,texSubImage3D:ot,compressedTexSubImage2D:he,compressedTexSubImage3D:xt,scissor:U,viewport:Me,reset:ge}}function oT(s,e,n,r,a,u,d){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,w){return S?new OffscreenCanvas(b,w):Il("canvas")}function E(b,w,Q,ve){let _e=1;if((b.width>ve||b.height>ve)&&(_e=ve/Math.max(b.width,b.height)),_e<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ye=w?vf:Math.floor,Ge=ye(_e*b.width),Ce=ye(_e*b.height);y===void 0&&(y=T(Ge,Ce));const Ie=Q?T(Ge,Ce):y;return Ie.width=Ge,Ie.height=Ce,Ie.getContext("2d").drawImage(b,0,0,Ge,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ge+"x"+Ce+")."),Ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function v(b){return Yp(b.width)&&Yp(b.height)}function g(b){return c?!1:b.wrapS!==ai||b.wrapT!==ai||b.minFilter!==Mn&&b.minFilter!==qn}function I(b,w){return b.generateMipmaps&&w&&b.minFilter!==Mn&&b.minFilter!==qn}function C(b){s.generateMipmap(b)}function F(b,w,Q,ve,_e=!1){if(c===!1)return w;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ye=w;if(w===s.RED&&(Q===s.FLOAT&&(ye=s.R32F),Q===s.HALF_FLOAT&&(ye=s.R16F),Q===s.UNSIGNED_BYTE&&(ye=s.R8)),w===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ye=s.R8UI),Q===s.UNSIGNED_SHORT&&(ye=s.R16UI),Q===s.UNSIGNED_INT&&(ye=s.R32UI),Q===s.BYTE&&(ye=s.R8I),Q===s.SHORT&&(ye=s.R16I),Q===s.INT&&(ye=s.R32I)),w===s.RG&&(Q===s.FLOAT&&(ye=s.RG32F),Q===s.HALF_FLOAT&&(ye=s.RG16F),Q===s.UNSIGNED_BYTE&&(ye=s.RG8)),w===s.RGBA){const Ge=_e?Pl:At.getTransfer(ve);Q===s.FLOAT&&(ye=s.RGBA32F),Q===s.HALF_FLOAT&&(ye=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ye=Ge===Ut?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function W(b,w,Q){return I(b,Q)===!0||b.isFramebufferTexture&&b.minFilter!==Mn&&b.minFilter!==qn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function O(b){return b===Mn||b===xp||b===Rc?s.NEAREST:s.LINEAR}function N(b){const w=b.target;w.removeEventListener("dispose",N),R(w),w.isVideoTexture&&_.delete(w)}function le(b){const w=b.target;w.removeEventListener("dispose",le),oe(w)}function R(b){const w=r.get(b);if(w.__webglInit===void 0)return;const Q=b.source,ve=x.get(Q);if(ve){const _e=ve[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&L(b),Object.keys(ve).length===0&&x.delete(Q)}r.remove(b)}function L(b){const w=r.get(b);s.deleteTexture(w.__webglTexture);const Q=b.source,ve=x.get(Q);delete ve[w.__cacheKey],d.memory.textures--}function oe(b){const w=b.texture,Q=r.get(b),ve=r.get(w);if(ve.__webglTexture!==void 0&&(s.deleteTexture(ve.__webglTexture),d.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(Q.__webglFramebuffer[_e]))for(let ye=0;ye<Q.__webglFramebuffer[_e].length;ye++)s.deleteFramebuffer(Q.__webglFramebuffer[_e][ye]);else s.deleteFramebuffer(Q.__webglFramebuffer[_e]);Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer[_e])}else{if(Array.isArray(Q.__webglFramebuffer))for(let _e=0;_e<Q.__webglFramebuffer.length;_e++)s.deleteFramebuffer(Q.__webglFramebuffer[_e]);else s.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let _e=0;_e<Q.__webglColorRenderbuffer.length;_e++)Q.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(Q.__webglColorRenderbuffer[_e]);Q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let _e=0,ye=w.length;_e<ye;_e++){const Ge=r.get(w[_e]);Ge.__webglTexture&&(s.deleteTexture(Ge.__webglTexture),d.memory.textures--),r.remove(w[_e])}r.remove(w),r.remove(b)}let ce=0;function me(){ce=0}function H(){const b=ce;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),ce+=1,b}function J(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function re(b,w){const Q=r.get(b);if(b.isVideoTexture&&Tt(b),b.isRenderTargetTexture===!1&&b.version>0&&Q.__version!==b.version){const ve=b.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(Q,b,w);return}}n.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+w)}function ue(b,w){const Q=r.get(b);if(b.version>0&&Q.__version!==b.version){fe(Q,b,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+w)}function V(b,w){const Q=r.get(b);if(b.version>0&&Q.__version!==b.version){fe(Q,b,w);return}n.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+w)}function Z(b,w){const Q=r.get(b);if(b.version>0&&Q.__version!==b.version){Te(Q,b,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+w)}const X={[hf]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[pf]:s.MIRRORED_REPEAT},P={[Mn]:s.NEAREST,[xp]:s.NEAREST_MIPMAP_NEAREST,[Rc]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[H0]:s.LINEAR_MIPMAP_NEAREST,[Vo]:s.LINEAR_MIPMAP_LINEAR},G={[J0]:s.NEVER,[sx]:s.ALWAYS,[ex]:s.LESS,[hg]:s.LEQUAL,[tx]:s.EQUAL,[rx]:s.GEQUAL,[nx]:s.GREATER,[ix]:s.NOTEQUAL};function Y(b,w,Q){if(Q?(s.texParameteri(b,s.TEXTURE_WRAP_S,X[w.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,X[w.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,X[w.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,P[w.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,P[w.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==ai||w.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,O(w.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,O(w.minFilter)),w.minFilter!==Mn&&w.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,G[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Mn||w.minFilter!==Rc&&w.minFilter!==Vo||w.type===pr&&e.has("OES_texture_float_linear")===!1||c===!1&&w.type===Wo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(s.texParameterf(b,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function ae(b,w){let Q=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",N));const ve=w.source;let _e=x.get(ve);_e===void 0&&(_e={},x.set(ve,_e));const ye=J(w);if(ye!==b.__cacheKey){_e[ye]===void 0&&(_e[ye]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),_e[ye].usedTimes++;const Ge=_e[b.__cacheKey];Ge!==void 0&&(_e[b.__cacheKey].usedTimes--,Ge.usedTimes===0&&L(w)),b.__cacheKey=ye,b.__webglTexture=_e[ye].texture}return Q}function fe(b,w,Q){let ve=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ve=s.TEXTURE_3D);const _e=ae(b,w),ye=w.source;n.bindTexture(ve,b.__webglTexture,s.TEXTURE0+Q);const Ge=r.get(ye);if(ye.version!==Ge.__version||_e===!0){n.activeTexture(s.TEXTURE0+Q);const Ce=At.getPrimaries(At.workingColorSpace),Ie=w.colorSpace===Zn?null:At.getPrimaries(w.colorSpace),qe=w.colorSpace===Zn||Ce===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const ot=g(w)&&v(w.image)===!1;let he=E(w.image,ot,!1,a.maxTextureSize);he=st(w,he);const xt=v(he)||c,ct=u.convert(w.format,w.colorSpace);let nt=u.convert(w.type),Xe=F(w.internalFormat,ct,nt,w.colorSpace,w.isVideoTexture);Y(ve,w,xt);let Le;const U=w.mipmaps,Me=c&&w.isVideoTexture!==!0&&Xe!==cg,Ve=Ge.__version===void 0||_e===!0,Ue=W(w,he,xt);if(w.isDepthTexture)Xe=s.DEPTH_COMPONENT,c?w.type===pr?Xe=s.DEPTH_COMPONENT32F:w.type===hr?Xe=s.DEPTH_COMPONENT24:w.type===Gr?Xe=s.DEPTH24_STENCIL8:Xe=s.DEPTH_COMPONENT16:w.type===pr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Vr&&Xe===s.DEPTH_COMPONENT&&w.type!==wf&&w.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=hr,nt=u.convert(w.type)),w.format===qs&&Xe===s.DEPTH_COMPONENT&&(Xe=s.DEPTH_STENCIL,w.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Gr,nt=u.convert(w.type))),Ve&&(Me?n.texStorage2D(s.TEXTURE_2D,1,Xe,he.width,he.height):n.texImage2D(s.TEXTURE_2D,0,Xe,he.width,he.height,0,ct,nt,null));else if(w.isDataTexture)if(U.length>0&&xt){Me&&Ve&&n.texStorage2D(s.TEXTURE_2D,Ue,Xe,U[0].width,U[0].height);for(let ge=0,z=U.length;ge<z;ge++)Le=U[ge],Me?n.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,ct,nt,Le.data):n.texImage2D(s.TEXTURE_2D,ge,Xe,Le.width,Le.height,0,ct,nt,Le.data);w.generateMipmaps=!1}else Me?(Ve&&n.texStorage2D(s.TEXTURE_2D,Ue,Xe,he.width,he.height),n.texSubImage2D(s.TEXTURE_2D,0,0,0,he.width,he.height,ct,nt,he.data)):n.texImage2D(s.TEXTURE_2D,0,Xe,he.width,he.height,0,ct,nt,he.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Me&&Ve&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Xe,U[0].width,U[0].height,he.depth);for(let ge=0,z=U.length;ge<z;ge++)Le=U[ge],w.format!==li?ct!==null?Me?n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,he.depth,ct,Le.data,0,0):n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Xe,Le.width,Le.height,he.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?n.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,he.depth,ct,nt,Le.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ge,Xe,Le.width,Le.height,he.depth,0,ct,nt,Le.data)}else{Me&&Ve&&n.texStorage2D(s.TEXTURE_2D,Ue,Xe,U[0].width,U[0].height);for(let ge=0,z=U.length;ge<z;ge++)Le=U[ge],w.format!==li?ct!==null?Me?n.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,ct,Le.data):n.compressedTexImage2D(s.TEXTURE_2D,ge,Xe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?n.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,ct,nt,Le.data):n.texImage2D(s.TEXTURE_2D,ge,Xe,Le.width,Le.height,0,ct,nt,Le.data)}else if(w.isDataArrayTexture)Me?(Ve&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Xe,he.width,he.height,he.depth),n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ct,nt,he.data)):n.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,he.width,he.height,he.depth,0,ct,nt,he.data);else if(w.isData3DTexture)Me?(Ve&&n.texStorage3D(s.TEXTURE_3D,Ue,Xe,he.width,he.height,he.depth),n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ct,nt,he.data)):n.texImage3D(s.TEXTURE_3D,0,Xe,he.width,he.height,he.depth,0,ct,nt,he.data);else if(w.isFramebufferTexture){if(Ve)if(Me)n.texStorage2D(s.TEXTURE_2D,Ue,Xe,he.width,he.height);else{let ge=he.width,z=he.height;for(let Se=0;Se<Ue;Se++)n.texImage2D(s.TEXTURE_2D,Se,Xe,ge,z,0,ct,nt,null),ge>>=1,z>>=1}}else if(U.length>0&&xt){Me&&Ve&&n.texStorage2D(s.TEXTURE_2D,Ue,Xe,U[0].width,U[0].height);for(let ge=0,z=U.length;ge<z;ge++)Le=U[ge],Me?n.texSubImage2D(s.TEXTURE_2D,ge,0,0,ct,nt,Le):n.texImage2D(s.TEXTURE_2D,ge,Xe,ct,nt,Le);w.generateMipmaps=!1}else Me?(Ve&&n.texStorage2D(s.TEXTURE_2D,Ue,Xe,he.width,he.height),n.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,nt,he)):n.texImage2D(s.TEXTURE_2D,0,Xe,ct,nt,he);I(w,xt)&&C(ve),Ge.__version=ye.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Te(b,w,Q){if(w.image.length!==6)return;const ve=ae(b,w),_e=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Q);const ye=r.get(_e);if(_e.version!==ye.__version||ve===!0){n.activeTexture(s.TEXTURE0+Q);const Ge=At.getPrimaries(At.workingColorSpace),Ce=w.colorSpace===Zn?null:At.getPrimaries(w.colorSpace),Ie=w.colorSpace===Zn||Ge===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const qe=w.isCompressedTexture||w.image[0].isCompressedTexture,ot=w.image[0]&&w.image[0].isDataTexture,he=[];for(let ge=0;ge<6;ge++)!qe&&!ot?he[ge]=E(w.image[ge],!1,!0,a.maxCubemapSize):he[ge]=ot?w.image[ge].image:w.image[ge],he[ge]=st(w,he[ge]);const xt=he[0],ct=v(xt)||c,nt=u.convert(w.format,w.colorSpace),Xe=u.convert(w.type),Le=F(w.internalFormat,nt,Xe,w.colorSpace),U=c&&w.isVideoTexture!==!0,Me=ye.__version===void 0||ve===!0;let Ve=W(w,xt,ct);Y(s.TEXTURE_CUBE_MAP,w,ct);let Ue;if(qe){U&&Me&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ve,Le,xt.width,xt.height);for(let ge=0;ge<6;ge++){Ue=he[ge].mipmaps;for(let z=0;z<Ue.length;z++){const Se=Ue[z];w.format!==li?nt!==null?U?n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,0,0,Se.width,Se.height,nt,Se.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,0,0,Se.width,Se.height,nt,Xe,Se.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,Le,Se.width,Se.height,0,nt,Xe,Se.data)}}}else{Ue=w.mipmaps,U&&Me&&(Ue.length>0&&Ve++,n.texStorage2D(s.TEXTURE_CUBE_MAP,Ve,Le,he[0].width,he[0].height));for(let ge=0;ge<6;ge++)if(ot){U?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,he[ge].width,he[ge].height,nt,Xe,he[ge].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Le,he[ge].width,he[ge].height,0,nt,Xe,he[ge].data);for(let z=0;z<Ue.length;z++){const Re=Ue[z].image[ge].image;U?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,0,0,Re.width,Re.height,nt,Xe,Re.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,Le,Re.width,Re.height,0,nt,Xe,Re.data)}}else{U?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,nt,Xe,he[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Le,nt,Xe,he[ge]);for(let z=0;z<Ue.length;z++){const Se=Ue[z];U?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,0,0,nt,Xe,Se.image[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,Le,nt,Xe,Se.image[ge])}}}I(w,ct)&&C(s.TEXTURE_CUBE_MAP),ye.__version=_e.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function we(b,w,Q,ve,_e,ye){const Ge=u.convert(Q.format,Q.colorSpace),Ce=u.convert(Q.type),Ie=F(Q.internalFormat,Ge,Ce,Q.colorSpace);if(!r.get(w).__hasExternalTextures){const ot=Math.max(1,w.width>>ye),he=Math.max(1,w.height>>ye);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,ye,Ie,ot,he,w.depth,0,Ge,Ce,null):n.texImage2D(_e,ye,Ie,ot,he,0,Ge,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),Be(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,_e,r.get(Q).__webglTexture,0,tt(w)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,_e,r.get(Q).__webglTexture,ye),n.bindFramebuffer(s.FRAMEBUFFER,null)}function be(b,w,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,b),w.depthBuffer&&!w.stencilBuffer){let ve=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Q||Be(w)){const _e=w.depthTexture;_e&&_e.isDepthTexture&&(_e.type===pr?ve=s.DEPTH_COMPONENT32F:_e.type===hr&&(ve=s.DEPTH_COMPONENT24));const ye=tt(w);Be(w)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,ve,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,ve,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,ve,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(w.depthBuffer&&w.stencilBuffer){const ve=tt(w);Q&&Be(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,w.width,w.height):Be(w)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{const ve=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let _e=0;_e<ve.length;_e++){const ye=ve[_e],Ge=u.convert(ye.format,ye.colorSpace),Ce=u.convert(ye.type),Ie=F(ye.internalFormat,Ge,Ce,ye.colorSpace),qe=tt(w);Q&&Be(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,Ie,w.width,w.height):Be(w)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,Ie,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),re(w.depthTexture,0);const ve=r.get(w.depthTexture).__webglTexture,_e=tt(w);if(w.depthTexture.format===Vr)Be(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(w.depthTexture.format===qs)Be(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ke(b){const w=r.get(b),Q=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ne(w.__webglFramebuffer,b)}else if(Q){w.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ve]),w.__webglDepthbuffer[ve]=s.createRenderbuffer(),be(w.__webglDepthbuffer[ve],b,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),be(w.__webglDepthbuffer,b,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(b,w,Q){const ve=r.get(b);w!==void 0&&we(ve.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&ke(b)}function ee(b){const w=b.texture,Q=r.get(b),ve=r.get(w);b.addEventListener("dispose",le),b.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=w.version,d.memory.textures++);const _e=b.isWebGLCubeRenderTarget===!0,ye=b.isWebGLMultipleRenderTargets===!0,Ge=v(b)||c;if(_e){Q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(c&&w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[Ce]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)Q.__webglFramebuffer[Ce][Ie]=s.createFramebuffer()}else Q.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(c&&w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)Q.__webglFramebuffer[Ce]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(ye)if(a.drawBuffers){const Ce=b.texture;for(let Ie=0,qe=Ce.length;Ie<qe;Ie++){const ot=r.get(Ce[Ie]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&b.samples>0&&Be(b)===!1){const Ce=ye?w:[w];Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ce.length;Ie++){const qe=Ce[Ie];Q.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ie]);const ot=u.convert(qe.format,qe.colorSpace),he=u.convert(qe.type),xt=F(qe.internalFormat,ot,he,qe.colorSpace,b.isXRRenderTarget===!0),ct=tt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,xt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),be(Q.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),Y(s.TEXTURE_CUBE_MAP,w,Ge);for(let Ce=0;Ce<6;Ce++)if(c&&w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)we(Q.__webglFramebuffer[Ce][Ie],b,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ie);else we(Q.__webglFramebuffer[Ce],b,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);I(w,Ge)&&C(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){const Ce=b.texture;for(let Ie=0,qe=Ce.length;Ie<qe;Ie++){const ot=Ce[Ie],he=r.get(ot);n.bindTexture(s.TEXTURE_2D,he.__webglTexture),Y(s.TEXTURE_2D,ot,Ge),we(Q.__webglFramebuffer,b,ot,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),I(ot,Ge)&&C(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(c?Ce=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ce,ve.__webglTexture),Y(Ce,w,Ge),c&&w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)we(Q.__webglFramebuffer[Ie],b,w,s.COLOR_ATTACHMENT0,Ce,Ie);else we(Q.__webglFramebuffer,b,w,s.COLOR_ATTACHMENT0,Ce,0);I(w,Ge)&&C(Ce),n.unbindTexture()}b.depthBuffer&&ke(b)}function Bt(b){const w=v(b)||c,Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ve=0,_e=Q.length;ve<_e;ve++){const ye=Q[ve];if(I(ye,w)){const Ge=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ce=r.get(ye).__webglTexture;n.bindTexture(Ge,Ce),C(Ge),n.unbindTexture()}}}function Ye(b){if(c&&b.samples>0&&Be(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],Q=b.width,ve=b.height;let _e=s.COLOR_BUFFER_BIT;const ye=[],Ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=r.get(b),Ie=b.isWebGLMultipleRenderTargets===!0;if(Ie)for(let qe=0;qe<w.length;qe++)n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let qe=0;qe<w.length;qe++){ye.push(s.COLOR_ATTACHMENT0+qe),b.depthBuffer&&ye.push(Ge);const ot=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(ot===!1&&(b.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ie&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[qe]),ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ge]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ge])),Ie){const he=r.get(w[qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,he,0)}s.blitFramebuffer(0,0,Q,ve,0,0,Q,ve,_e,s.NEAREST),m&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye)}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let qe=0;qe<w.length;qe++){n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[qe]);const ot=r.get(w[qe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,ot,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function tt(b){return Math.min(a.maxSamples,b.samples)}function Be(b){const w=r.get(b);return c&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(b){const w=d.render.frame;_.get(b)!==w&&(_.set(b,w),b.update())}function st(b,w){const Q=b.colorSpace,ve=b.format,_e=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===gf||Q!==ki&&Q!==Zn&&(At.getTransfer(Q)===Ut?c===!1?e.has("EXT_sRGB")===!0&&ve===li?(b.format=gf,b.minFilter=qn,b.generateMipmaps=!1):w=mg.sRGBToLinear(w):(ve!==li||_e!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}this.allocateTextureUnit=H,this.resetTextureUnits=me,this.setTexture2D=re,this.setTexture2DArray=ue,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=ut,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Be}function aT(s,e,n){const r=n.isWebGL2;function a(u,d=Zn){let c;const h=At.getTransfer(d);if(u===_r)return s.UNSIGNED_BYTE;if(u===sg)return s.UNSIGNED_SHORT_4_4_4_4;if(u===og)return s.UNSIGNED_SHORT_5_5_5_1;if(u===G0)return s.BYTE;if(u===V0)return s.SHORT;if(u===wf)return s.UNSIGNED_SHORT;if(u===rg)return s.INT;if(u===hr)return s.UNSIGNED_INT;if(u===pr)return s.FLOAT;if(u===Wo)return r?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(u===W0)return s.ALPHA;if(u===li)return s.RGBA;if(u===X0)return s.LUMINANCE;if(u===j0)return s.LUMINANCE_ALPHA;if(u===Vr)return s.DEPTH_COMPONENT;if(u===qs)return s.DEPTH_STENCIL;if(u===gf)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(u===Y0)return s.RED;if(u===ag)return s.RED_INTEGER;if(u===q0)return s.RG;if(u===lg)return s.RG_INTEGER;if(u===ug)return s.RGBA_INTEGER;if(u===Cc||u===bc||u===Lc||u===Pc)if(h===Ut)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(u===Cc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(u===Cc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Lc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===yp||u===Sp||u===Mp||u===Ep)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(u===yp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===Sp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Mp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===Ep)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===cg)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Tp||u===wp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(u===Tp)return h===Ut?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(u===wp)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Ap||u===Rp||u===Cp||u===bp||u===Lp||u===Pp||u===Dp||u===Up||u===Np||u===Ip||u===Fp||u===Op||u===zp||u===kp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(u===Ap)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Rp)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Cp)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===bp)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Lp)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Pp)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Dp)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Up)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Np)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Ip)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Fp)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Op)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===zp)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===kp)return h===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Dc||u===Bp||u===Hp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(u===Dc)return h===Ut?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Bp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Hp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===K0||u===Gp||u===Vp||u===Wp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(u===Dc)return c.COMPRESSED_RED_RGTC1_EXT;if(u===Gp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Vp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===Gr?r?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[u]!==void 0?s[u]:null}return{convert:a}}class lT extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ho extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uT={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,d=null;const c=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const E of e.hand.values()){const v=n.getJointPose(E,r),g=this._getHandJoint(m,E);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=_.position.distanceTo(y.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(uT)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ho;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class cT extends qr{constructor(e,n){super();const r=this;let a=null,u=1,d=null,c="local-floor",h=1,m=null,_=null,y=null,x=null,S=null,T=null;const E=n.getContextAttributes();let v=null,g=null;const I=[],C=[],F=new et;let W=null;const O=new $n;O.layers.enable(1),O.viewport=new nn;const N=new $n;N.layers.enable(2),N.viewport=new nn;const le=[O,N],R=new lT;R.layers.enable(1),R.layers.enable(2);let L=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=I[Y];return ae===void 0&&(ae=new nf,I[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=I[Y];return ae===void 0&&(ae=new nf,I[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=I[Y];return ae===void 0&&(ae=new nf,I[Y]=ae),ae.getHandSpace()};function ce(Y){const ae=C.indexOf(Y.inputSource);if(ae===-1)return;const fe=I[ae];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,m||d),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function me(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",me),a.removeEventListener("inputsourceschange",H);for(let Y=0;Y<I.length;Y++){const ae=C[Y];ae!==null&&(C[Y]=null,I[Y].disconnect(ae))}L=null,oe=null,e.setRenderTarget(v),S=null,x=null,y=null,a=null,g=null,G.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",me),a.addEventListener("inputsourceschange",H),E.xrCompatible!==!0&&await n.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(F),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:a.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,ae),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),g=new Xr(S.framebufferWidth,S.framebufferHeight,{format:li,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let ae=null,fe=null,Te=null;E.depth&&(Te=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=E.stencil?qs:Vr,fe=E.stencil?Gr:hr);const we={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:u};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(we),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),g=new Xr(x.textureWidth,x.textureHeight,{format:li,type:_r,depthTexture:new Rg(x.textureWidth,x.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const be=e.properties.get(g);be.__ignoreDepthValues=x.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await a.requestReferenceSpace(c),G.setContext(a),G.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function H(Y){for(let ae=0;ae<Y.removed.length;ae++){const fe=Y.removed[ae],Te=C.indexOf(fe);Te>=0&&(C[Te]=null,I[Te].disconnect(fe))}for(let ae=0;ae<Y.added.length;ae++){const fe=Y.added[ae];let Te=C.indexOf(fe);if(Te===-1){for(let be=0;be<I.length;be++)if(be>=C.length){C.push(fe),Te=be;break}else if(C[be]===null){C[be]=fe,Te=be;break}if(Te===-1)break}const we=I[Te];we&&we.connect(fe)}}const J=new j,re=new j;function ue(Y,ae,fe){J.setFromMatrixPosition(ae.matrixWorld),re.setFromMatrixPosition(fe.matrixWorld);const Te=J.distanceTo(re),we=ae.projectionMatrix.elements,be=fe.projectionMatrix.elements,Ne=we[14]/(we[10]-1),ke=we[14]/(we[10]+1),ut=(we[9]+1)/we[5],ee=(we[9]-1)/we[5],Bt=(we[8]-1)/we[0],Ye=(be[8]+1)/be[0],tt=Ne*Bt,Be=Ne*Ye,Tt=Te/(-Bt+Ye),st=Tt*-Bt;ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(st),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=Ne+Tt,w=ke+Tt,Q=tt-st,ve=Be+(Te-st),_e=ut*ke/w*b,ye=ee*ke/w*b;Y.projectionMatrix.makePerspective(Q,ve,_e,ye,b,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function V(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;R.near=N.near=O.near=Y.near,R.far=N.far=O.far=Y.far,(L!==R.near||oe!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,oe=R.far);const ae=Y.parent,fe=R.cameras;V(R,ae);for(let Te=0;Te<fe.length;Te++)V(fe[Te],ae);fe.length===2?ue(R,O,N):R.projectionMatrix.copy(O.projectionMatrix),Z(Y,R,ae)};function Z(Y,ae,fe){fe===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_f*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Y){h=Y,x!==null&&(x.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)};let X=null;function P(Y,ae){if(_=ae.getViewerPose(m||d),T=ae,_!==null){const fe=_.views;S!==null&&(e.setRenderTargetFramebuffer(g,S.framebuffer),e.setRenderTarget(g));let Te=!1;fe.length!==R.cameras.length&&(R.cameras.length=0,Te=!0);for(let we=0;we<fe.length;we++){const be=fe[we];let Ne=null;if(S!==null)Ne=S.getViewport(be);else{const ut=y.getViewSubImage(x,be);Ne=ut.viewport,we===0&&(e.setRenderTargetTextures(g,ut.colorTexture,x.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(g))}let ke=le[we];ke===void 0&&(ke=new $n,ke.layers.enable(we),ke.viewport=new nn,le[we]=ke),ke.matrix.fromArray(be.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(be.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),we===0&&(R.matrix.copy(ke.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Te===!0&&R.cameras.push(ke)}}for(let fe=0;fe<I.length;fe++){const Te=C[fe],we=I[fe];Te!==null&&we!==void 0&&we.update(Te,ae,m||d)}X&&X(Y,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),T=null}const G=new wg;G.setAnimationLoop(P),this.setAnimationLoop=function(Y){X=Y},this.dispose=function(){}}}function fT(s,e){function n(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,Mg(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,I,C,F){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(v,g):g.isMeshToonMaterial?(u(v,g),y(v,g)):g.isMeshPhongMaterial?(u(v,g),_(v,g)):g.isMeshStandardMaterial?(u(v,g),x(v,g),g.isMeshPhysicalMaterial&&S(v,g,F)):g.isMeshMatcapMaterial?(u(v,g),T(v,g)):g.isMeshDepthMaterial?u(v,g):g.isMeshDistanceMaterial?(u(v,g),E(v,g)):g.isMeshNormalMaterial?u(v,g):g.isLineBasicMaterial?(d(v,g),g.isLineDashedMaterial&&c(v,g)):g.isPointsMaterial?h(v,g,I,C):g.isSpriteMaterial?m(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,n(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Dn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,n(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Dn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,n(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,n(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const I=e.get(g).envMap;if(I&&(v.envMap.value=I,v.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap){v.lightMap.value=g.lightMap;const C=s._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=g.lightMapIntensity*C,n(g.lightMap,v.lightMapTransform)}g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,v.aoMapTransform))}function d(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform))}function c(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function h(v,g,I,C){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*I,v.scale.value=C*.5,g.map&&(v.map.value=g.map,n(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function y(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function x(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,v.roughnessMapTransform)),e.get(g).envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,I){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&v.clearcoatNormalScale.value.negate())),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,g){g.matcap&&(v.matcap.value=g.matcap)}function E(v,g){const I=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function dT(s,e,n,r){let a={},u={},d=[];const c=n.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(I,C){const F=C.program;r.uniformBlockBinding(I,F)}function m(I,C){let F=a[I.id];F===void 0&&(T(I),F=_(I),a[I.id]=F,I.addEventListener("dispose",v));const W=C.program;r.updateUBOMapping(I,W);const O=e.render.frame;u[I.id]!==O&&(x(I),u[I.id]=O)}function _(I){const C=y();I.__bindingPointIndex=C;const F=s.createBuffer(),W=I.__size,O=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,W,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,F),F}function y(){for(let I=0;I<c;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const C=a[I.id],F=I.uniforms,W=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let O=0,N=F.length;O<N;O++){const le=Array.isArray(F[O])?F[O]:[F[O]];for(let R=0,L=le.length;R<L;R++){const oe=le[R];if(S(oe,O,R,W)===!0){const ce=oe.__offset,me=Array.isArray(oe.value)?oe.value:[oe.value];let H=0;for(let J=0;J<me.length;J++){const re=me[J],ue=E(re);typeof re=="number"||typeof re=="boolean"?(oe.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,ce+H,oe.__data)):re.isMatrix3?(oe.__data[0]=re.elements[0],oe.__data[1]=re.elements[1],oe.__data[2]=re.elements[2],oe.__data[3]=0,oe.__data[4]=re.elements[3],oe.__data[5]=re.elements[4],oe.__data[6]=re.elements[5],oe.__data[7]=0,oe.__data[8]=re.elements[6],oe.__data[9]=re.elements[7],oe.__data[10]=re.elements[8],oe.__data[11]=0):(re.toArray(oe.__data,H),H+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ce,oe.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,C,F,W){const O=I.value,N=C+"_"+F;if(W[N]===void 0)return typeof O=="number"||typeof O=="boolean"?W[N]=O:W[N]=O.clone(),!0;{const le=W[N];if(typeof O=="number"||typeof O=="boolean"){if(le!==O)return W[N]=O,!0}else if(le.equals(O)===!1)return le.copy(O),!0}return!1}function T(I){const C=I.uniforms;let F=0;const W=16;for(let N=0,le=C.length;N<le;N++){const R=Array.isArray(C[N])?C[N]:[C[N]];for(let L=0,oe=R.length;L<oe;L++){const ce=R[L],me=Array.isArray(ce.value)?ce.value:[ce.value];for(let H=0,J=me.length;H<J;H++){const re=me[H],ue=E(re),V=F%W;V!==0&&W-V<ue.boundary&&(F+=W-V),ce.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=F,F+=ue.storage}}}const O=F%W;return O>0&&(F+=W-O),I.__size=F,I.__cache={},this}function E(I){const C={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(C.boundary=4,C.storage=4):I.isVector2?(C.boundary=8,C.storage=8):I.isVector3||I.isColor?(C.boundary=16,C.storage=12):I.isVector4?(C.boundary=16,C.storage=16):I.isMatrix3?(C.boundary=48,C.storage=48):I.isMatrix4?(C.boundary=64,C.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),C}function v(I){const C=I.target;C.removeEventListener("dispose",v);const F=d.indexOf(C.__bindingPointIndex);d.splice(F,1),s.deleteBuffer(a[C.id]),delete a[C.id],delete u[C.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);d=[],a={},u={}}return{bind:h,update:m,dispose:g}}class Ug{constructor(e={}){const{canvas:n=lx(),context:r=null,depth:a=!0,stencil:u=!0,alpha:d=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;r!==null?x=r.getContextAttributes().alpha:x=d;const S=new Uint32Array(4),T=new Int32Array(4);let E=null,v=null;const g=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=gr,this.toneMappingExposure=1;const C=this;let F=!1,W=0,O=0,N=null,le=-1,R=null;const L=new nn,oe=new nn;let ce=null;const me=new yt(0);let H=0,J=n.width,re=n.height,ue=1,V=null,Z=null;const X=new nn(0,0,J,re),P=new nn(0,0,J,re);let G=!1;const Y=new Cf;let ae=!1,fe=!1,Te=null;const we=new Xt,be=new et,Ne=new j,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return N===null?ue:1}let ee=r;function Bt(A,K){for(let ie=0;ie<A.length;ie++){const se=A[ie],ne=n.getContext(se,K);if(ne!==null)return ne}return null}try{const A={alpha:!0,depth:a,stencil:u,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tf}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",z,!1),n.addEventListener("webglcontextcreationerror",Se,!1),ee===null){const K=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&K.shift(),ee=Bt(K,A),ee===null)throw Bt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ee instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ee.getShaderPrecisionFormat===void 0&&(ee.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ye,tt,Be,Tt,st,b,w,Q,ve,_e,ye,Ge,Ce,Ie,qe,ot,he,xt,ct,nt,Xe,Le,U,Me;function Ve(){Ye=new MM(ee),tt=new gM(ee,Ye,e),Ye.init(tt),Le=new aT(ee,Ye,tt),Be=new sT(ee,Ye,tt),Tt=new wM(ee),st=new XE,b=new oT(ee,Ye,Be,st,tt,Le,Tt),w=new vM(C),Q=new SM(C),ve=new Ux(ee,tt),U=new pM(ee,Ye,ve,tt),_e=new EM(ee,ve,Tt,U),ye=new bM(ee,_e,ve,Tt),ct=new CM(ee,tt,b),ot=new _M(st),Ge=new WE(C,w,Q,Ye,tt,U,ot),Ce=new fT(C,st),Ie=new YE,qe=new JE(Ye,tt),xt=new hM(C,w,Q,Be,ye,x,h),he=new rT(C,ye,tt),Me=new dT(ee,Tt,tt,Be),nt=new mM(ee,Ye,Tt,tt),Xe=new TM(ee,Ye,Tt,tt),Tt.programs=Ge.programs,C.capabilities=tt,C.extensions=Ye,C.properties=st,C.renderLists=Ie,C.shadowMap=he,C.state=Be,C.info=Tt}Ve();const Ue=new cT(C,ee);this.xr=Ue,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(A){A!==void 0&&(ue=A,this.setSize(J,re,!1))},this.getSize=function(A){return A.set(J,re)},this.setSize=function(A,K,ie=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,re=K,n.width=Math.floor(A*ue),n.height=Math.floor(K*ue),ie===!0&&(n.style.width=A+"px",n.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(J*ue,re*ue).floor()},this.setDrawingBufferSize=function(A,K,ie){J=A,re=K,ue=ie,n.width=Math.floor(A*ie),n.height=Math.floor(K*ie),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(X)},this.setViewport=function(A,K,ie,se){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,K,ie,se),Be.viewport(L.copy(X).multiplyScalar(ue).floor())},this.getScissor=function(A){return A.copy(P)},this.setScissor=function(A,K,ie,se){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,K,ie,se),Be.scissor(oe.copy(P).multiplyScalar(ue).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(A){Be.setScissorTest(G=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(A=!0,K=!0,ie=!0){let se=0;if(A){let ne=!1;if(N!==null){const Pe=N.texture.format;ne=Pe===ug||Pe===lg||Pe===ag}if(ne){const Pe=N.texture.type,je=Pe===_r||Pe===hr||Pe===wf||Pe===Gr||Pe===sg||Pe===og,Je=xt.getClearColor(),Fe=xt.getClearAlpha(),ft=Je.r,rt=Je.g,at=Je.b;je?(S[0]=ft,S[1]=rt,S[2]=at,S[3]=Fe,ee.clearBufferuiv(ee.COLOR,0,S)):(T[0]=ft,T[1]=rt,T[2]=at,T[3]=Fe,ee.clearBufferiv(ee.COLOR,0,T))}else se|=ee.COLOR_BUFFER_BIT}K&&(se|=ee.DEPTH_BUFFER_BIT),ie&&(se|=ee.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",z,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),Ie.dispose(),qe.dispose(),st.dispose(),w.dispose(),Q.dispose(),ye.dispose(),U.dispose(),Me.dispose(),Ge.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Nt),Ue.removeEventListener("sessionend",gt),Te&&(Te.dispose(),Te=null),It.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=Tt.autoReset,K=he.enabled,ie=he.autoUpdate,se=he.needsUpdate,ne=he.type;Ve(),Tt.autoReset=A,he.enabled=K,he.autoUpdate=ie,he.needsUpdate=se,he.type=ne}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Re(A){const K=A.target;K.removeEventListener("dispose",Re),Qe(K)}function Qe(A){Ke(A),st.remove(A)}function Ke(A){const K=st.get(A).programs;K!==void 0&&(K.forEach(function(ie){Ge.releaseProgram(ie)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ie,se,ne,Pe){K===null&&(K=ke);const je=ne.isMesh&&ne.matrixWorld.determinant()<0,Je=Vl(A,K,ie,se,ne);Be.setMaterial(se,je);let Fe=ie.index,ft=1;if(se.wireframe===!0){if(Fe=_e.getWireframeAttribute(ie),Fe===void 0)return;ft=2}const rt=ie.drawRange,at=ie.attributes.position;let bt=rt.start*ft,mn=(rt.start+rt.count)*ft;Pe!==null&&(bt=Math.max(bt,Pe.start*ft),mn=Math.min(mn,(Pe.start+Pe.count)*ft)),Fe!==null?(bt=Math.max(bt,0),mn=Math.min(mn,Fe.count)):at!=null&&(bt=Math.max(bt,0),mn=Math.min(mn,at.count));const Vt=mn-bt;if(Vt<0||Vt===1/0)return;U.setup(ne,se,Je,ie,Fe);let Tn,St=nt;if(Fe!==null&&(Tn=ve.get(Fe),St=Xe,St.setIndex(Tn)),ne.isMesh)se.wireframe===!0?(Be.setLineWidth(se.wireframeLinewidth*ut()),St.setMode(ee.LINES)):St.setMode(ee.TRIANGLES);else if(ne.isLine){let dt=se.linewidth;dt===void 0&&(dt=1),Be.setLineWidth(dt*ut()),ne.isLineSegments?St.setMode(ee.LINES):ne.isLineLoop?St.setMode(ee.LINE_LOOP):St.setMode(ee.LINE_STRIP)}else ne.isPoints?St.setMode(ee.POINTS):ne.isSprite&&St.setMode(ee.TRIANGLES);if(ne.isBatchedMesh)St.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)St.renderInstances(bt,Vt,ne.count);else if(ie.isInstancedBufferGeometry){const dt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,gn=Math.min(ie.instanceCount,dt);St.renderInstances(bt,Vt,gn)}else St.render(bt,Vt)};function pt(A,K,ie){A.transparent===!0&&A.side===Ii&&A.forceSinglePass===!1?(A.side=Dn,A.needsUpdate=!0,Bi(A,K,ie),A.side=xr,A.needsUpdate=!0,Bi(A,K,ie),A.side=Ii):Bi(A,K,ie)}this.compile=function(A,K,ie=null){ie===null&&(ie=A),v=qe.get(ie),v.init(),I.push(v),ie.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(v.pushLight(ne),ne.castShadow&&v.pushShadow(ne))}),A!==ie&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(v.pushLight(ne),ne.castShadow&&v.pushShadow(ne))}),v.setupLights(C._useLegacyLights);const se=new Set;return A.traverse(function(ne){const Pe=ne.material;if(Pe)if(Array.isArray(Pe))for(let je=0;je<Pe.length;je++){const Je=Pe[je];pt(Je,ie,ne),se.add(Je)}else pt(Pe,ie,ne),se.add(Pe)}),I.pop(),v=null,se},this.compileAsync=function(A,K,ie=null){const se=this.compile(A,K,ie);return new Promise(ne=>{function Pe(){if(se.forEach(function(je){st.get(je).currentProgram.isReady()&&se.delete(je)}),se.size===0){ne(A);return}setTimeout(Pe,10)}Ye.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let mt=null;function Ct(A){mt&&mt(A)}function Nt(){It.stop()}function gt(){It.start()}const It=new wg;It.setAnimationLoop(Ct),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(A){mt=A,Ue.setAnimationLoop(A),A===null?It.stop():It.start()},Ue.addEventListener("sessionstart",Nt),Ue.addEventListener("sessionend",gt),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(K),K=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,K,N),v=qe.get(A,I.length),v.init(),I.push(v),we.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Y.setFromProjectionMatrix(we),fe=this.localClippingEnabled,ae=ot.init(this.clippingPlanes,fe),E=Ie.get(A,g.length),E.init(),g.push(E),ln(A,K,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(V,Z),this.info.render.frame++,ae===!0&&ot.beginShadows();const ie=v.state.shadowsArray;if(he.render(ie,A,K),ae===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),xt.render(E,A),v.setupLights(C._useLegacyLights),K.isArrayCamera){const se=K.cameras;for(let ne=0,Pe=se.length;ne<Pe;ne++){const je=se[ne];jo(E,A,je,je.viewport)}}else jo(E,A,K);N!==null&&(b.updateMultisampleRenderTarget(N),b.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(C,A,K),U.resetDefaultState(),le=-1,R=null,I.pop(),I.length>0?v=I[I.length-1]:v=null,g.pop(),g.length>0?E=g[g.length-1]:E=null};function ln(A,K,ie,se){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){se&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const je=ye.update(A),Je=A.material;Je.visible&&E.push(A,je,Je,ie,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const je=ye.update(A),Je=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Ne.copy(je.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Je)){const Fe=je.groups;for(let ft=0,rt=Fe.length;ft<rt;ft++){const at=Fe[ft],bt=Je[at.materialIndex];bt&&bt.visible&&E.push(A,je,bt,ie,Ne.z,at)}}else Je.visible&&E.push(A,je,Je,ie,Ne.z,null)}}const Pe=A.children;for(let je=0,Je=Pe.length;je<Je;je++)ln(Pe[je],K,ie,se)}function jo(A,K,ie,se){const ne=A.opaque,Pe=A.transmissive,je=A.transparent;v.setupLightsView(ie),ae===!0&&ot.setGlobalState(C.clippingPlanes,ie),Pe.length>0&&yr(ne,Pe,K,ie),se&&Be.viewport(L.copy(se)),ne.length>0&&vi(ne,K,ie),Pe.length>0&&vi(Pe,K,ie),je.length>0&&vi(je,K,ie),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function yr(A,K,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;const Pe=tt.isWebGL2;Te===null&&(Te=new Xr(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")?Wo:_r,minFilter:Vo,samples:Pe?4:0})),C.getDrawingBufferSize(be),Pe?Te.setSize(be.x,be.y):Te.setSize(vf(be.x),vf(be.y));const je=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(me),H=C.getClearAlpha(),H<1&&C.setClearColor(16777215,.5),C.clear();const Je=C.toneMapping;C.toneMapping=gr,vi(A,ie,se),b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te);let Fe=!1;for(let ft=0,rt=K.length;ft<rt;ft++){const at=K[ft],bt=at.object,mn=at.geometry,Vt=at.material,Tn=at.group;if(Vt.side===Ii&&bt.layers.test(se.layers)){const St=Vt.side;Vt.side=Dn,Vt.needsUpdate=!0,Sr(bt,ie,se,mn,Vt,Tn),Vt.side=St,Vt.needsUpdate=!0,Fe=!0}}Fe===!0&&(b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te)),C.setRenderTarget(je),C.setClearColor(me,H),C.toneMapping=Je}function vi(A,K,ie){const se=K.isScene===!0?K.overrideMaterial:null;for(let ne=0,Pe=A.length;ne<Pe;ne++){const je=A[ne],Je=je.object,Fe=je.geometry,ft=se===null?je.material:se,rt=je.group;Je.layers.test(ie.layers)&&Sr(Je,K,ie,Fe,ft,rt)}}function Sr(A,K,ie,se,ne,Pe){A.onBeforeRender(C,K,ie,se,ne,Pe),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(C,K,ie,se,A,Pe),ne.transparent===!0&&ne.side===Ii&&ne.forceSinglePass===!1?(ne.side=Dn,ne.needsUpdate=!0,C.renderBufferDirect(ie,K,se,ne,A,Pe),ne.side=xr,ne.needsUpdate=!0,C.renderBufferDirect(ie,K,se,ne,A,Pe),ne.side=Ii):C.renderBufferDirect(ie,K,se,ne,A,Pe),A.onAfterRender(C,K,ie,se,ne,Pe)}function Bi(A,K,ie){K.isScene!==!0&&(K=ke);const se=st.get(A),ne=v.state.lights,Pe=v.state.shadowsArray,je=ne.state.version,Je=Ge.getParameters(A,ne.state,Pe,K,ie),Fe=Ge.getProgramCacheKey(Je);let ft=se.programs;se.environment=A.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(A.isMeshStandardMaterial?Q:w).get(A.envMap||se.environment),ft===void 0&&(A.addEventListener("dispose",Re),ft=new Map,se.programs=ft);let rt=ft.get(Fe);if(rt!==void 0){if(se.currentProgram===rt&&se.lightsStateVersion===je)return qo(A,Je),rt}else Je.uniforms=Ge.getUniforms(A),A.onBuild(ie,Je,C),A.onBeforeCompile(Je,C),rt=Ge.acquireProgram(Je,Fe),ft.set(Fe,rt),se.uniforms=Je.uniforms;const at=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(at.clippingPlanes=ot.uniform),qo(A,Je),se.needsLights=Ko(A),se.lightsStateVersion=je,se.needsLights&&(at.ambientLightColor.value=ne.state.ambient,at.lightProbe.value=ne.state.probe,at.directionalLights.value=ne.state.directional,at.directionalLightShadows.value=ne.state.directionalShadow,at.spotLights.value=ne.state.spot,at.spotLightShadows.value=ne.state.spotShadow,at.rectAreaLights.value=ne.state.rectArea,at.ltc_1.value=ne.state.rectAreaLTC1,at.ltc_2.value=ne.state.rectAreaLTC2,at.pointLights.value=ne.state.point,at.pointLightShadows.value=ne.state.pointShadow,at.hemisphereLights.value=ne.state.hemi,at.directionalShadowMap.value=ne.state.directionalShadowMap,at.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,at.spotShadowMap.value=ne.state.spotShadowMap,at.spotLightMatrix.value=ne.state.spotLightMatrix,at.spotLightMap.value=ne.state.spotLightMap,at.pointShadowMap.value=ne.state.pointShadowMap,at.pointShadowMatrix.value=ne.state.pointShadowMatrix),se.currentProgram=rt,se.uniformsList=null,rt}function Yo(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=Cl.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function qo(A,K){const ie=st.get(A);ie.outputColorSpace=K.outputColorSpace,ie.batching=K.batching,ie.instancing=K.instancing,ie.instancingColor=K.instancingColor,ie.skinning=K.skinning,ie.morphTargets=K.morphTargets,ie.morphNormals=K.morphNormals,ie.morphColors=K.morphColors,ie.morphTargetsCount=K.morphTargetsCount,ie.numClippingPlanes=K.numClippingPlanes,ie.numIntersection=K.numClipIntersection,ie.vertexAlphas=K.vertexAlphas,ie.vertexTangents=K.vertexTangents,ie.toneMapping=K.toneMapping}function Vl(A,K,ie,se,ne){K.isScene!==!0&&(K=ke),b.resetTextureUnits();const Pe=K.fog,je=se.isMeshStandardMaterial?K.environment:null,Je=N===null?C.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ki,Fe=(se.isMeshStandardMaterial?Q:w).get(se.envMap||je),ft=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,rt=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),at=!!ie.morphAttributes.position,bt=!!ie.morphAttributes.normal,mn=!!ie.morphAttributes.color;let Vt=gr;se.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Vt=C.toneMapping);const Tn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,St=Tn!==void 0?Tn.length:0,dt=st.get(se),gn=v.state.lights;if(ae===!0&&(fe===!0||A!==R)){const wn=A===R&&se.id===le;ot.setState(se,A,wn)}let Ft=!1;se.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==gn.state.version||dt.outputColorSpace!==Je||ne.isBatchedMesh&&dt.batching===!1||!ne.isBatchedMesh&&dt.batching===!0||ne.isInstancedMesh&&dt.instancing===!1||!ne.isInstancedMesh&&dt.instancing===!0||ne.isSkinnedMesh&&dt.skinning===!1||!ne.isSkinnedMesh&&dt.skinning===!0||ne.isInstancedMesh&&dt.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&dt.instancingColor===!1&&ne.instanceColor!==null||dt.envMap!==Fe||se.fog===!0&&dt.fog!==Pe||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==ot.numPlanes||dt.numIntersection!==ot.numIntersection)||dt.vertexAlphas!==ft||dt.vertexTangents!==rt||dt.morphTargets!==at||dt.morphNormals!==bt||dt.morphColors!==mn||dt.toneMapping!==Vt||tt.isWebGL2===!0&&dt.morphTargetsCount!==St)&&(Ft=!0):(Ft=!0,dt.__version=se.version);let yi=dt.currentProgram;Ft===!0&&(yi=Bi(se,K,ne));let $o=!1,fi=!1,Hi=!1;const Ht=yi.getUniforms(),Bn=dt.uniforms;if(Be.useProgram(yi.program)&&($o=!0,fi=!0,Hi=!0),se.id!==le&&(le=se.id,fi=!0),$o||R!==A){Ht.setValue(ee,"projectionMatrix",A.projectionMatrix),Ht.setValue(ee,"viewMatrix",A.matrixWorldInverse);const wn=Ht.map.cameraPosition;wn!==void 0&&wn.setValue(ee,Ne.setFromMatrixPosition(A.matrixWorld)),tt.logarithmicDepthBuffer&&Ht.setValue(ee,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ht.setValue(ee,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,fi=!0,Hi=!0)}if(ne.isSkinnedMesh){Ht.setOptional(ee,ne,"bindMatrix"),Ht.setOptional(ee,ne,"bindMatrixInverse");const wn=ne.skeleton;wn&&(tt.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Ht.setValue(ee,"boneTexture",wn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(Ht.setOptional(ee,ne,"batchingTexture"),Ht.setValue(ee,"batchingTexture",ne._matricesTexture,b));const Qs=ie.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0&&tt.isWebGL2===!0)&&ct.update(ne,ie,yi),(fi||dt.receiveShadow!==ne.receiveShadow)&&(dt.receiveShadow=ne.receiveShadow,Ht.setValue(ee,"receiveShadow",ne.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Bn.envMap.value=Fe,Bn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),fi&&(Ht.setValue(ee,"toneMappingExposure",C.toneMappingExposure),dt.needsLights&&xi(Bn,Hi),Pe&&se.fog===!0&&Ce.refreshFogUniforms(Bn,Pe),Ce.refreshMaterialUniforms(Bn,se,ue,re,Te),Cl.upload(ee,Yo(dt),Bn,b)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Cl.upload(ee,Yo(dt),Bn,b),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ht.setValue(ee,"center",ne.center),Ht.setValue(ee,"modelViewMatrix",ne.modelViewMatrix),Ht.setValue(ee,"normalMatrix",ne.normalMatrix),Ht.setValue(ee,"modelMatrix",ne.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const wn=se.uniformsGroups;for(let Mr=0,Zo=wn.length;Mr<Zo;Mr++)if(tt.isWebGL2){const $r=wn[Mr];Me.update($r,yi),Me.bind($r,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function xi(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function Ko(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,K,ie){st.get(A.texture).__webglTexture=K,st.get(A.depthTexture).__webglTexture=ie;const se=st.get(A);se.__hasExternalTextures=!0,se.__hasExternalTextures&&(se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,K){const ie=st.get(A);ie.__webglFramebuffer=K,ie.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ie=0){N=A,W=K,O=ie;let se=!0,ne=null,Pe=!1,je=!1;if(A){const Fe=st.get(A);Fe.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(ee.FRAMEBUFFER,null),se=!1):Fe.__webglFramebuffer===void 0?b.setupRenderTarget(A):Fe.__hasExternalTextures&&b.rebindTextures(A,st.get(A.texture).__webglTexture,st.get(A.depthTexture).__webglTexture);const ft=A.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(je=!0);const rt=st.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[K])?ne=rt[K][ie]:ne=rt[K],Pe=!0):tt.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?ne=st.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?ne=rt[ie]:ne=rt,L.copy(A.viewport),oe.copy(A.scissor),ce=A.scissorTest}else L.copy(X).multiplyScalar(ue).floor(),oe.copy(P).multiplyScalar(ue).floor(),ce=G;if(Be.bindFramebuffer(ee.FRAMEBUFFER,ne)&&tt.drawBuffers&&se&&Be.drawBuffers(A,ne),Be.viewport(L),Be.scissor(oe),Be.setScissorTest(ce),Pe){const Fe=st.get(A.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+K,Fe.__webglTexture,ie)}else if(je){const Fe=st.get(A.texture),ft=K||0;ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Fe.__webglTexture,ie||0,ft)}le=-1},this.readRenderTargetPixels=function(A,K,ie,se,ne,Pe,je){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je]),Je){Be.bindFramebuffer(ee.FRAMEBUFFER,Je);try{const Fe=A.texture,ft=Fe.format,rt=Fe.type;if(ft!==li&&Le.convert(ft)!==ee.getParameter(ee.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const at=rt===Wo&&(Ye.has("EXT_color_buffer_half_float")||tt.isWebGL2&&Ye.has("EXT_color_buffer_float"));if(rt!==_r&&Le.convert(rt)!==ee.getParameter(ee.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===pr&&(tt.isWebGL2||Ye.has("OES_texture_float")||Ye.has("WEBGL_color_buffer_float")))&&!at){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-se&&ie>=0&&ie<=A.height-ne&&ee.readPixels(K,ie,se,ne,Le.convert(ft),Le.convert(rt),Pe)}finally{const Fe=N!==null?st.get(N).__webglFramebuffer:null;Be.bindFramebuffer(ee.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(A,K,ie=0){const se=Math.pow(2,-ie),ne=Math.floor(K.image.width*se),Pe=Math.floor(K.image.height*se);b.setTexture2D(K,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,ie,0,0,A.x,A.y,ne,Pe),Be.unbindTexture()},this.copyTextureToTexture=function(A,K,ie,se=0){const ne=K.image.width,Pe=K.image.height,je=Le.convert(ie.format),Je=Le.convert(ie.type);b.setTexture2D(ie,0),ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,ie.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,ie.unpackAlignment),K.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,se,A.x,A.y,ne,Pe,je,Je,K.image.data):K.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,se,A.x,A.y,K.mipmaps[0].width,K.mipmaps[0].height,je,K.mipmaps[0].data):ee.texSubImage2D(ee.TEXTURE_2D,se,A.x,A.y,je,Je,K.image),se===0&&ie.generateMipmaps&&ee.generateMipmap(ee.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(A,K,ie,se,ne=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=A.max.x-A.min.x+1,je=A.max.y-A.min.y+1,Je=A.max.z-A.min.z+1,Fe=Le.convert(se.format),ft=Le.convert(se.type);let rt;if(se.isData3DTexture)b.setTexture3D(se,0),rt=ee.TEXTURE_3D;else if(se.isDataArrayTexture||se.isCompressedArrayTexture)b.setTexture2DArray(se,0),rt=ee.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,se.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,se.unpackAlignment);const at=ee.getParameter(ee.UNPACK_ROW_LENGTH),bt=ee.getParameter(ee.UNPACK_IMAGE_HEIGHT),mn=ee.getParameter(ee.UNPACK_SKIP_PIXELS),Vt=ee.getParameter(ee.UNPACK_SKIP_ROWS),Tn=ee.getParameter(ee.UNPACK_SKIP_IMAGES),St=ie.isCompressedTexture?ie.mipmaps[ne]:ie.image;ee.pixelStorei(ee.UNPACK_ROW_LENGTH,St.width),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,St.height),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,A.min.x),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,A.min.y),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,A.min.z),ie.isDataTexture||ie.isData3DTexture?ee.texSubImage3D(rt,ne,K.x,K.y,K.z,Pe,je,Je,Fe,ft,St.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ee.compressedTexSubImage3D(rt,ne,K.x,K.y,K.z,Pe,je,Je,Fe,St.data)):ee.texSubImage3D(rt,ne,K.x,K.y,K.z,Pe,je,Je,Fe,ft,St),ee.pixelStorei(ee.UNPACK_ROW_LENGTH,at),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,bt),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,mn),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,Vt),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,Tn),ne===0&&se.generateMipmaps&&ee.generateMipmap(rt),Be.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Be.unbindTexture()},this.resetState=function(){W=0,O=0,N=null,Be.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Af?"display-p3":"srgb",n.unpackColorSpace=At.workingColorSpace===zl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===an?Wr:fg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wr?an:ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class hT extends Ug{}hT.prototype.isWebGL1Renderer=!0;class pT extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class mT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=mf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let a=0,u=this.stride;a<u;a++)this.array[e+a]=n.array[r+a];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new j;class Fl{constructor(e,n,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}setX(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Fi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Fi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Fi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Fi(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Rt(n,this.array),r=Rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Rt(n,this.array),r=Rt(r,this.array),a=Rt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e=e*this.data.stride+this.offset,this.normalized&&(n=Rt(n,this.array),r=Rt(r,this.array),a=Rt(a,this.array),u=Rt(u,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=u,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[a+u])}return new ui(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[a+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ng extends Kr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Os;const Oo=new j,zs=new j,ks=new j,Bs=new et,zo=new et,Ig=new Xt,Sl=new j,ko=new j,Ml=new j,Dm=new et,rf=new et,Um=new et;class gT extends rn{constructor(e=new Ng){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new _i;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new mT(n,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new Fl(r,3,0,!1)),Os.setAttribute("uv",new Fl(r,2,3,!1))}this.geometry=Os,this.material=e,this.center=new et(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),Ig.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-ks.z);const r=this.material.rotation;let a,u;r!==0&&(u=Math.cos(r),a=Math.sin(r));const d=this.center;El(Sl.set(-.5,-.5,0),ks,d,zs,a,u),El(ko.set(.5,-.5,0),ks,d,zs,a,u),El(Ml.set(.5,.5,0),ks,d,zs,a,u),Dm.set(0,0),rf.set(1,0),Um.set(1,1);let c=e.ray.intersectTriangle(Sl,ko,Ml,!1,Oo);if(c===null&&(El(ko.set(-.5,.5,0),ks,d,zs,a,u),rf.set(0,1),c=e.ray.intersectTriangle(Sl,Ml,ko,!1,Oo),c===null))return;const h=e.ray.origin.distanceTo(Oo);h<e.near||h>e.far||n.push({distance:h,point:Oo.clone(),uv:Kn.getInterpolation(Oo,Sl,ko,Ml,Dm,rf,Um,new et),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function El(s,e,n,r,a,u){Bs.subVectors(s,n).addScalar(.5).multiply(r),a!==void 0?(zo.x=u*Bs.x-a*Bs.y,zo.y=a*Bs.x+u*Bs.y):zo.copy(Bs),s.copy(e),s.x+=zo.x,s.y+=zo.y,s.applyMatrix4(Ig)}class Fg extends Kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nm=new j,Im=new j,Fm=new Xt,sf=new Bl,Tl=new kl;class _T extends rn{constructor(e=new _i,n=new Fg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Nm.fromBufferAttribute(n,a-1),Im.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Nm.distanceTo(Im);e.setAttribute("lineDistance",new ci(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(a),Tl.radius+=u,e.ray.intersectsSphere(Tl)===!1)return;Fm.copy(a).invert(),sf.copy(e.ray).applyMatrix4(Fm);const c=u/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,m=new j,_=new j,y=new j,x=new j,S=this.isLineSegments?2:1,T=r.index,v=r.attributes.position;if(T!==null){const g=Math.max(0,d.start),I=Math.min(T.count,d.start+d.count);for(let C=g,F=I-1;C<F;C+=S){const W=T.getX(C),O=T.getX(C+1);if(m.fromBufferAttribute(v,W),_.fromBufferAttribute(v,O),sf.distanceSqToSegment(m,_,x,y)>h)continue;x.applyMatrix4(this.matrixWorld);const le=e.ray.origin.distanceTo(x);le<e.near||le>e.far||n.push({distance:le,point:y.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,d.start),I=Math.min(v.count,d.start+d.count);for(let C=g,F=I-1;C<F;C+=S){if(m.fromBufferAttribute(v,C),_.fromBufferAttribute(v,C+1),sf.distanceSqToSegment(m,_,x,y)>h)continue;x.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(x);O<e.near||O>e.far||n.push({distance:O,point:y.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const c=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=u}}}}}const Om=new j,zm=new j;class vT extends _T{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)Om.fromBufferAttribute(n,a),zm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Om.distanceTo(zm);e.setAttribute("lineDistance",new ci(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xT extends Un{constructor(e,n,r,a,u,d,c,h,m){super(e,n,r,a,u,d,c,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hs extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dg,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Og extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const of=new Xt,km=new j,Bm=new j;class yT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cf,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;km.setFromMatrixPosition(e.matrixWorld),n.position.copy(km),Bm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Bm),n.updateMatrixWorld(),of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ST extends yT{constructor(){super(new Ag(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class MT extends Og{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new ST}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ET extends Og{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class TT{constructor(e,n,r=0,a=1/0){this.ray=new Bl(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new Rf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,r=[]){return yf(e,this,r,n),r.sort(Hm),r}intersectObjects(e,n=!0,r=[]){for(let a=0,u=e.length;a<u;a++)yf(e[a],this,r,n);return r.sort(Hm),r}}function Hm(s,e){return s.distance-e.distance}function yf(s,e,n,r){if(s.layers.test(e.layers)&&s.raycast(e,n),r===!0){const a=s.children;for(let u=0,d=a.length;u<d;u++)yf(a[u],e,n,!0)}}class Gm{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(En(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wT extends vT{constructor(e=10,n=10,r=4473924,a=8947848){r=new yt(r),a=new yt(a);const u=n/2,d=e/n,c=e/2,h=[],m=[];for(let x=0,S=0,T=-c;x<=n;x++,T+=d){h.push(-c,0,T,c,0,T),h.push(T,0,-c,T,0,c);const E=x===u?r:a;E.toArray(m,S),S+=3,E.toArray(m,S),S+=3,E.toArray(m,S),S+=3,E.toArray(m,S),S+=3}const _=new _i;_.setAttribute("position",new ci(h,3)),_.setAttribute("color",new ci(m,3));const y=new Fg({vertexColors:!0,toneMapped:!1});super(_,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tf);const Vm={type:"change"},af={type:"start"},Wm={type:"end"},wl=new Bl,Xm=new dr,AT=Math.cos(70*ax.DEG2RAD);class RT extends qr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",qe),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",qe),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Vm),r.update(),u=a.NONE},this.update=(function(){const U=new j,Me=new jr().setFromUnitVectors(e.up,new j(0,1,0)),Ve=Me.clone().invert(),Ue=new j,ge=new jr,z=new j,Se=2*Math.PI;return function(Qe=null){const Ke=r.object.position;U.copy(Ke).sub(r.target),U.applyQuaternion(Me),c.setFromVector3(U),r.autoRotate&&u===a.NONE&&ce(L(Qe)),r.enableDamping?(c.theta+=h.theta*r.dampingFactor,c.phi+=h.phi*r.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let pt=r.minAzimuthAngle,mt=r.maxAzimuthAngle;isFinite(pt)&&isFinite(mt)&&(pt<-Math.PI?pt+=Se:pt>Math.PI&&(pt-=Se),mt<-Math.PI?mt+=Se:mt>Math.PI&&(mt-=Se),pt<=mt?c.theta=Math.max(pt,Math.min(mt,c.theta)):c.theta=c.theta>(pt+mt)/2?Math.max(pt,c.theta):Math.min(mt,c.theta)),c.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,c.phi)),c.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(_,r.dampingFactor):r.target.add(_),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&O||r.object.isOrthographicCamera?c.radius=X(c.radius):c.radius=X(c.radius*m),U.setFromSpherical(c),U.applyQuaternion(Ve),Ke.copy(r.target).add(U),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,_.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),_.set(0,0,0));let Ct=!1;if(r.zoomToCursor&&O){let Nt=null;if(r.object.isPerspectiveCamera){const gt=U.length();Nt=X(gt*m);const It=gt-Nt;r.object.position.addScaledVector(F,It),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const gt=new j(W.x,W.y,0);gt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Ct=!0;const It=new j(W.x,W.y,0);It.unproject(r.object),r.object.position.sub(It).add(gt),r.object.updateMatrixWorld(),Nt=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Nt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Nt).add(r.object.position):(wl.origin.copy(r.object.position),wl.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(wl.direction))<AT?e.lookAt(r.target):(Xm.setFromNormalAndCoplanarPoint(r.object.up,r.target),wl.intersectPlane(Xm,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Ct=!0);return m=1,O=!1,Ct||Ue.distanceToSquared(r.object.position)>d||8*(1-ge.dot(r.object.quaternion))>d||z.distanceToSquared(r.target)>0?(r.dispatchEvent(Vm),Ue.copy(r.object.position),ge.copy(r.object.quaternion),z.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",xt),r.domElement.removeEventListener("pointerdown",b),r.domElement.removeEventListener("pointercancel",Q),r.domElement.removeEventListener("wheel",ye),r.domElement.removeEventListener("pointermove",w),r.domElement.removeEventListener("pointerup",Q),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",qe),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=a.NONE;const d=1e-6,c=new Gm,h=new Gm;let m=1;const _=new j,y=new et,x=new et,S=new et,T=new et,E=new et,v=new et,g=new et,I=new et,C=new et,F=new j,W=new et;let O=!1;const N=[],le={};let R=!1;function L(U){return U!==null?2*Math.PI/60*r.autoRotateSpeed*U:2*Math.PI/60/60*r.autoRotateSpeed}function oe(U){const Me=Math.abs(U*.01);return Math.pow(.95,r.zoomSpeed*Me)}function ce(U){h.theta-=U}function me(U){h.phi-=U}const H=(function(){const U=new j;return function(Ve,Ue){U.setFromMatrixColumn(Ue,0),U.multiplyScalar(-Ve),_.add(U)}})(),J=(function(){const U=new j;return function(Ve,Ue){r.screenSpacePanning===!0?U.setFromMatrixColumn(Ue,1):(U.setFromMatrixColumn(Ue,0),U.crossVectors(r.object.up,U)),U.multiplyScalar(Ve),_.add(U)}})(),re=(function(){const U=new j;return function(Ve,Ue){const ge=r.domElement;if(r.object.isPerspectiveCamera){const z=r.object.position;U.copy(z).sub(r.target);let Se=U.length();Se*=Math.tan(r.object.fov/2*Math.PI/180),H(2*Ve*Se/ge.clientHeight,r.object.matrix),J(2*Ue*Se/ge.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(H(Ve*(r.object.right-r.object.left)/r.object.zoom/ge.clientWidth,r.object.matrix),J(Ue*(r.object.top-r.object.bottom)/r.object.zoom/ge.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function ue(U){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function V(U){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Z(U,Me){if(!r.zoomToCursor)return;O=!0;const Ve=r.domElement.getBoundingClientRect(),Ue=U-Ve.left,ge=Me-Ve.top,z=Ve.width,Se=Ve.height;W.x=Ue/z*2-1,W.y=-(ge/Se)*2+1,F.set(W.x,W.y,1).unproject(r.object).sub(r.object.position).normalize()}function X(U){return Math.max(r.minDistance,Math.min(r.maxDistance,U))}function P(U){y.set(U.clientX,U.clientY)}function G(U){Z(U.clientX,U.clientX),g.set(U.clientX,U.clientY)}function Y(U){T.set(U.clientX,U.clientY)}function ae(U){x.set(U.clientX,U.clientY),S.subVectors(x,y).multiplyScalar(r.rotateSpeed);const Me=r.domElement;ce(2*Math.PI*S.x/Me.clientHeight),me(2*Math.PI*S.y/Me.clientHeight),y.copy(x),r.update()}function fe(U){I.set(U.clientX,U.clientY),C.subVectors(I,g),C.y>0?ue(oe(C.y)):C.y<0&&V(oe(C.y)),g.copy(I),r.update()}function Te(U){E.set(U.clientX,U.clientY),v.subVectors(E,T).multiplyScalar(r.panSpeed),re(v.x,v.y),T.copy(E),r.update()}function we(U){Z(U.clientX,U.clientY),U.deltaY<0?V(oe(U.deltaY)):U.deltaY>0&&ue(oe(U.deltaY)),r.update()}function be(U){let Me=!1;switch(U.code){case r.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?me(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(0,r.keyPanSpeed),Me=!0;break;case r.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?me(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(0,-r.keyPanSpeed),Me=!0;break;case r.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?ce(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(r.keyPanSpeed,0),Me=!0;break;case r.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?ce(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(-r.keyPanSpeed,0),Me=!0;break}Me&&(U.preventDefault(),r.update())}function Ne(U){if(N.length===1)y.set(U.pageX,U.pageY);else{const Me=Le(U),Ve=.5*(U.pageX+Me.x),Ue=.5*(U.pageY+Me.y);y.set(Ve,Ue)}}function ke(U){if(N.length===1)T.set(U.pageX,U.pageY);else{const Me=Le(U),Ve=.5*(U.pageX+Me.x),Ue=.5*(U.pageY+Me.y);T.set(Ve,Ue)}}function ut(U){const Me=Le(U),Ve=U.pageX-Me.x,Ue=U.pageY-Me.y,ge=Math.sqrt(Ve*Ve+Ue*Ue);g.set(0,ge)}function ee(U){r.enableZoom&&ut(U),r.enablePan&&ke(U)}function Bt(U){r.enableZoom&&ut(U),r.enableRotate&&Ne(U)}function Ye(U){if(N.length==1)x.set(U.pageX,U.pageY);else{const Ve=Le(U),Ue=.5*(U.pageX+Ve.x),ge=.5*(U.pageY+Ve.y);x.set(Ue,ge)}S.subVectors(x,y).multiplyScalar(r.rotateSpeed);const Me=r.domElement;ce(2*Math.PI*S.x/Me.clientHeight),me(2*Math.PI*S.y/Me.clientHeight),y.copy(x)}function tt(U){if(N.length===1)E.set(U.pageX,U.pageY);else{const Me=Le(U),Ve=.5*(U.pageX+Me.x),Ue=.5*(U.pageY+Me.y);E.set(Ve,Ue)}v.subVectors(E,T).multiplyScalar(r.panSpeed),re(v.x,v.y),T.copy(E)}function Be(U){const Me=Le(U),Ve=U.pageX-Me.x,Ue=U.pageY-Me.y,ge=Math.sqrt(Ve*Ve+Ue*Ue);I.set(0,ge),C.set(0,Math.pow(I.y/g.y,r.zoomSpeed)),ue(C.y),g.copy(I);const z=(U.pageX+Me.x)*.5,Se=(U.pageY+Me.y)*.5;Z(z,Se)}function Tt(U){r.enableZoom&&Be(U),r.enablePan&&tt(U)}function st(U){r.enableZoom&&Be(U),r.enableRotate&&Ye(U)}function b(U){r.enabled!==!1&&(N.length===0&&(r.domElement.setPointerCapture(U.pointerId),r.domElement.addEventListener("pointermove",w),r.domElement.addEventListener("pointerup",Q)),ct(U),U.pointerType==="touch"?ot(U):ve(U))}function w(U){r.enabled!==!1&&(U.pointerType==="touch"?he(U):_e(U))}function Q(U){nt(U),N.length===0&&(r.domElement.releasePointerCapture(U.pointerId),r.domElement.removeEventListener("pointermove",w),r.domElement.removeEventListener("pointerup",Q)),r.dispatchEvent(Wm),u=a.NONE}function ve(U){let Me;switch(U.button){case 0:Me=r.mouseButtons.LEFT;break;case 1:Me=r.mouseButtons.MIDDLE;break;case 2:Me=r.mouseButtons.RIGHT;break;default:Me=-1}switch(Me){case xs.DOLLY:if(r.enableZoom===!1)return;G(U),u=a.DOLLY;break;case xs.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(r.enablePan===!1)return;Y(U),u=a.PAN}else{if(r.enableRotate===!1)return;P(U),u=a.ROTATE}break;case xs.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(r.enableRotate===!1)return;P(U),u=a.ROTATE}else{if(r.enablePan===!1)return;Y(U),u=a.PAN}break;default:u=a.NONE}u!==a.NONE&&r.dispatchEvent(af)}function _e(U){switch(u){case a.ROTATE:if(r.enableRotate===!1)return;ae(U);break;case a.DOLLY:if(r.enableZoom===!1)return;fe(U);break;case a.PAN:if(r.enablePan===!1)return;Te(U);break}}function ye(U){r.enabled===!1||r.enableZoom===!1||u!==a.NONE||(U.preventDefault(),r.dispatchEvent(af),we(Ge(U)),r.dispatchEvent(Wm))}function Ge(U){const Me=U.deltaMode,Ve={clientX:U.clientX,clientY:U.clientY,deltaY:U.deltaY};switch(Me){case 1:Ve.deltaY*=16;break;case 2:Ve.deltaY*=100;break}return U.ctrlKey&&!R&&(Ve.deltaY*=10),Ve}function Ce(U){U.key==="Control"&&(R=!0,document.addEventListener("keyup",Ie,{passive:!0,capture:!0}))}function Ie(U){U.key==="Control"&&(R=!1,document.removeEventListener("keyup",Ie,{passive:!0,capture:!0}))}function qe(U){r.enabled===!1||r.enablePan===!1||be(U)}function ot(U){switch(Xe(U),N.length){case 1:switch(r.touches.ONE){case ys.ROTATE:if(r.enableRotate===!1)return;Ne(U),u=a.TOUCH_ROTATE;break;case ys.PAN:if(r.enablePan===!1)return;ke(U),u=a.TOUCH_PAN;break;default:u=a.NONE}break;case 2:switch(r.touches.TWO){case ys.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ee(U),u=a.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Bt(U),u=a.TOUCH_DOLLY_ROTATE;break;default:u=a.NONE}break;default:u=a.NONE}u!==a.NONE&&r.dispatchEvent(af)}function he(U){switch(Xe(U),u){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;Ye(U),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;tt(U),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Tt(U),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;st(U),r.update();break;default:u=a.NONE}}function xt(U){r.enabled!==!1&&U.preventDefault()}function ct(U){N.push(U.pointerId)}function nt(U){delete le[U.pointerId];for(let Me=0;Me<N.length;Me++)if(N[Me]==U.pointerId){N.splice(Me,1);return}}function Xe(U){let Me=le[U.pointerId];Me===void 0&&(Me=new et,le[U.pointerId]=Me),Me.set(U.pageX,U.pageY)}function Le(U){const Me=U.pointerId===N[0]?N[1]:N[0];return le[Me]}r.domElement.addEventListener("contextmenu",xt),r.domElement.addEventListener("pointerdown",b),r.domElement.addEventListener("pointercancel",Q),r.domElement.addEventListener("wheel",ye,{passive:!1}),document.addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}}const Sf={WCA:{R:16724787,L:16746496,U:16777215,D:16768256,F:43520,B:26367},Japanese:{R:16724787,L:16746496,U:16777215,D:26367,F:43520,B:16768256},"White Bottom":{R:16724787,L:16746496,U:16768256,D:16777215,F:43520,B:26367}},jm={R:[1,0,0],L:[-1,0,0],U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1]};function CT({onFaceClick:s,colors:e=Sf.WCA}){const n=Sn.useRef(null),r=Sn.useRef(s);return r.current=s,Sn.useEffect(()=>{const a=n.current;if(!a)return;const u=a.clientWidth,d=a.clientHeight,c=new pT;c.background=new yt(1710638);const h=new $n(40,u/d,.5,50);h.position.set(5,4,7),h.lookAt(0,0,0);const m=new Ug({antialias:!0});m.setSize(u,d),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.appendChild(m.domElement);const _=new RT(h,m.domElement);_.enableDamping=!0,_.dampingFactor=.08,c.add(new ET(16777215,.6));const y=new MT(16777215,1);y.position.set(8,12,6),c.add(y);const x=new wT(6,6,3355460,2236979);c.add(x);const S=new Ho;c.add(S);for(let O=-1;O<=1;O++)for(let N=-1;N<=1;N++)for(let le=-1;le<=1;le++){const R=new $s(.9,.9,.9),L=[new Hs({color:O>0?e.R:1118481,roughness:.4}),new Hs({color:O<0?e.L:1118481,roughness:.4}),new Hs({color:N>0?e.U:1118481,roughness:.4}),new Hs({color:N<0?e.D:1118481,roughness:.4}),new Hs({color:le>0?e.F:1118481,roughness:.4}),new Hs({color:le<0?e.B:1118481,roughness:.4})],oe=new zi(R,L);oe.position.set(O,N,le),S.add(oe)}Object.entries(jm).forEach(([O,N])=>{const le=bT(O,e[O]);le.position.set(N[0]*2.2,N[1]*2.2,N[2]*2.2),c.add(le)});const T=new TT,E=new et;let v=null;function g(O){v={x:O.clientX,y:O.clientY}}function I(O){if(!v)return;const N=O.clientX-v.x,le=O.clientY-v.y;if(v=null,N*N+le*le>9)return;const R=m.domElement.getBoundingClientRect();E.x=(O.clientX-R.left)/R.width*2-1,E.y=-((O.clientY-R.top)/R.height)*2+1,T.setFromCamera(E,h);const L=T.intersectObjects(S.children);if(L.length>0){const oe=L[0].face.normal.clone();oe.transformDirection(L[0].object.matrixWorld);let ce="F",me=-1/0;for(const[H,J]of Object.entries(jm)){const re=oe.x*J[0]+oe.y*J[1]+oe.z*J[2];re>me&&(me=re,ce=H)}r.current(ce)}}m.domElement.addEventListener("mousedown",g),m.domElement.addEventListener("mouseup",I);function C(){const O=a,N=O.clientWidth,le=O.clientHeight;N===0||le===0||(h.aspect=N/le,h.updateProjectionMatrix(),m.setSize(N,le))}window.addEventListener("resize",C);let F;function W(){F=requestAnimationFrame(W),_.update(),m.render(c,h)}return W(),()=>{cancelAnimationFrame(F),m.domElement.removeEventListener("mousedown",g),m.domElement.removeEventListener("mouseup",I),window.removeEventListener("resize",C),_.dispose(),a.contains(m.domElement)&&a.removeChild(m.domElement),m.dispose()}},[e]),lt.jsx("div",{ref:n,style:{width:"100%",height:"100%"}})}function bT(s,e){const n=document.createElement("canvas");n.width=64,n.height=64;const r=n.getContext("2d");r.fillStyle="#"+e.toString(16).padStart(6,"0"),r.font="bold 36px system-ui",r.textAlign="center",r.textBaseline="middle",r.fillText(s,32,32);const a=new xT(n),u=new Ng({map:a,depthTest:!1}),d=new gT(u);return d.scale.set(1,1,1),d}function LT({formula:s,onChange:e,error:n}){return lt.jsxs("section",{children:[lt.jsx("h3",{style:{margin:"0 0 8px",fontSize:"14px",textTransform:"uppercase",letterSpacing:"1px",color:"#8899aa"},children:"Formula"}),lt.jsx("textarea",{value:s,onChange:r=>e(r.target.value),placeholder:"e.g. R U R' U'",spellCheck:!1,style:{width:"100%",minHeight:60,padding:"10px 12px",fontSize:16,fontFamily:"'JetBrains Mono', 'Fira Code', monospace",background:"#0d1117",color:"#e6edf3",border:n?"1px solid #ff4444":"1px solid #30363d",borderRadius:8,resize:"vertical",outline:"none",boxSizing:"border-box"}}),n&&lt.jsxs("div",{style:{color:"#ff6b6b",fontSize:12,marginTop:4},children:["⚠ ",n]})]})}const Ym=["R","L","U","D","F","B"],qm={R:"#ff4444",L:"#ff8800",U:"#ffffff",D:"#ffdd00",F:"#00aa00",B:"#0066ff"};function PT({facing:s,headUp:e,onFacingChange:n,onHeadUpChange:r}){const a=u=>u===s||u==={R:"L",L:"R",U:"D",D:"U",F:"B",B:"F"}[s];return lt.jsxs("section",{children:[lt.jsx("h3",{style:{margin:"0 0 12px",fontSize:"14px",textTransform:"uppercase",letterSpacing:"1px",color:"#8899aa"},children:"View"}),lt.jsxs("div",{style:{marginBottom:16},children:[lt.jsx("label",{style:{display:"block",fontSize:"13px",marginBottom:6,color:"#aabbcc"},children:"Facing"}),lt.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:Ym.map(u=>lt.jsx("button",{onClick:()=>n(u),style:{width:36,height:36,borderRadius:6,border:s===u?"2px solid #fff":"1px solid #334",background:qm[u],color:["U","D"].includes(u)?"#333":"#fff",fontWeight:"bold",cursor:"pointer",fontSize:14,opacity:s===u?1:.5,transition:"all 0.15s"},children:u},u))})]}),lt.jsxs("div",{style:{marginBottom:16},children:[lt.jsx("label",{style:{display:"block",fontSize:"13px",marginBottom:6,color:"#aabbcc"},children:"Head Up"}),lt.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:Ym.map(u=>{const d=a(u);return lt.jsx("button",{onClick:()=>!d&&r(u),disabled:d,style:{width:36,height:36,borderRadius:6,border:e===u?"2px solid #fff":"1px solid #334",background:qm[u],color:["U","D"].includes(u)?"#333":"#fff",fontWeight:"bold",cursor:d?"not-allowed":"pointer",fontSize:14,opacity:e===u?1:d?.15:.4,transition:"all 0.15s"},children:u},u)})})]}),lt.jsxs("div",{children:[lt.jsx("label",{style:{display:"block",fontSize:"13px",marginBottom:6,color:"#aabbcc"},children:"Head Tilt Shortcuts"}),lt.jsxs("div",{style:{display:"flex",gap:6},children:[lt.jsx("button",{onClick:()=>r("L"),style:Al,children:"← Tilt Left"}),lt.jsx("button",{onClick:()=>r("R"),style:Al,children:"→ Tilt Right"}),lt.jsx("button",{onClick:()=>r("U"),style:Al,children:"↑ Upright"}),lt.jsx("button",{onClick:()=>r("D"),style:Al,children:"↓ Inverted"})]})]})]})}const Al={padding:"6px 10px",fontSize:12,borderRadius:6,border:"1px solid #445",background:"#1a1a3e",color:"#aabbcc",cursor:"pointer"};function DT({result:s,error:e}){const[n,r]=Sn.useState(!1),a=async()=>{await navigator.clipboard.writeText(s),r(!0),setTimeout(()=>r(!1),2e3)};return lt.jsxs("section",{children:[lt.jsx("h3",{style:{margin:"0 0 8px",fontSize:"14px",textTransform:"uppercase",letterSpacing:"1px",color:"#8899aa"},children:"Result"}),lt.jsxs("div",{style:{padding:"10px 12px",minHeight:40,fontSize:18,fontFamily:"'JetBrains Mono', 'Fira Code', monospace",background:"#0d1117",color:s?"#ffd700":"#555",border:"1px solid #30363d",borderRadius:8,wordBreak:"break-all",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[lt.jsx("span",{children:s||(e?"—":"Waiting for input...")}),s&&lt.jsx("button",{onClick:a,style:{padding:"4px 12px",fontSize:12,borderRadius:6,border:"1px solid #445",background:n?"#1a6b3a":"#1a1a3e",color:"#aabbcc",cursor:"pointer",whiteSpace:"nowrap",flexShrink:0,marginLeft:12},children:n?"✓ Copied":"Copy"})]})]})}const UT="_app_mqkqz_1",NT="_header_mqkqz_10",IT="_main_mqkqz_23",FT="_viewer_mqkqz_30",OT="_controls_mqkqz_36",Bo={app:UT,header:NT,main:IT,viewer:FT,controls:OT};function zT(){const[s,e]=Sn.useState("R U R' U'"),[n,r]=Sn.useState("F"),[a,u]=Sn.useState("U"),[d,c]=Sn.useState("WCA"),[h,m]=Sn.useState(""),[_,y]=Sn.useState(""),x=Sn.useCallback(v=>{try{const g=Ac(v,{facing:n,headUp:a});m(g.output),y("")}catch(g){y(g.message),m("")}},[n,a]),S=Sn.useCallback(v=>{e(v),x(v)},[x]),T=Sn.useCallback(v=>{r(v);try{const g=Ac(s,{facing:v,headUp:a});m(g.output),y("")}catch(g){y(g.message),m("")}},[s,a]),E=Sn.useCallback(v=>{u(v);try{const g=Ac(s,{facing:n,headUp:v});m(g.output),y("")}catch(g){y(g.message),m("")}},[s,n]);return lt.jsxs("div",{className:Bo.app,children:[lt.jsx("header",{className:Bo.header,children:lt.jsx("h1",{children:"Cube Converter"})}),lt.jsxs("main",{className:Bo.main,children:[lt.jsx("div",{className:Bo.viewer,children:lt.jsx(CT,{facing:n,headUp:a,onFaceClick:T,colors:Sf[d]})}),lt.jsxs("div",{className:Bo.controls,children:[lt.jsx(PT,{facing:n,headUp:a,onFacingChange:T,onHeadUpChange:E}),lt.jsxs("section",{children:[lt.jsx("h3",{style:{margin:"0 0 8px",fontSize:"14px",textTransform:"uppercase",letterSpacing:"1px",color:"#8899aa"},children:"Color Scheme"}),lt.jsx("select",{value:d,onChange:v=>c(v.target.value),style:{width:"100%",padding:"8px 12px",fontSize:14,fontFamily:"inherit",background:"#0d1117",color:"#e6edf3",border:"1px solid #30363d",borderRadius:8,outline:"none",cursor:"pointer"},children:Object.keys(Sf).map(v=>lt.jsx("option",{value:v,children:v},v))})]}),lt.jsx(LT,{formula:s,onChange:S,error:_}),lt.jsx(DT,{result:h,error:_})]})]})]})}bv.createRoot(document.getElementById("root")).render(lt.jsx(Mv.StrictMode,{children:lt.jsx(zT,{})}));
