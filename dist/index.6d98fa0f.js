var e,t,r,n,i,o,a,s,c,u,l,f,d,p,h,g,v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function m(e){return e&&e.__esModule?e.default:e}var y={},b={},_=v.parcelRequire3a11;null==_&&((_=function(e){if(e in y)return y[e].exports;if(e in b){var t=b[e];delete b[e];var r={id:e,exports:{}};return y[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){b[e]=t},v.parcelRequire3a11=_);var w={},k={},E=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
E("object"==typeof self&&self)||E("object"==typeof v&&v)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||k||Function("return this")();var S={},$={};// Detect IE8's incomplete defineProperty implementation
S=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},O={};O=!$(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var L=Function.prototype.call;j=O?L.bind(L):function(){return L.apply(L,arguments)};var P={}.propertyIsEnumerable,x=Object.getOwnPropertyDescriptor;n=x&&!P.call({1:2},1)?function(e){var t=x(this,e);return!!t&&t.enumerable}:P;var T={};T=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var H={},M={},I={},F=Function.prototype,N=F.call,q=O&&F.bind.bind(N,N),A={},R=(I=O?q:function(e){return function(){return N.apply(e,arguments)}})({}.toString),D=I("".slice);A=function(e){return D(R(e),8,-1)};var C=Object,B=I("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
M=$(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?B(e,""):C(e)}:C;var G={},z={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
z=function(e){return null==e};var U=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
G=function(e){if(z(e))throw U("Can't call method on "+e);return e},H=function(e){return M(G(e))};var W={},Y={},J={},Q={},V={},K="object"==typeof document&&document.all,X=(V={all:K,IS_HTMLDDA:void 0===K&&void 0!==K}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
Q=V.IS_HTMLDDA?function(e){return"function"==typeof e||e===X}:function(e){return"function"==typeof e};var Z=V.all;J=V.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:Q(e)||e===Z}:function(e){return"object"==typeof e?null!==e:Q(e)};var ee={},et={};et=function(e,t){var r;return arguments.length<2?(r=k[e],Q(r)?r:void 0):k[e]&&k[e][t]};var er={};er=I({}.isPrototypeOf);var en={},ei={},eo={},ea={};ea="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var es=k.process,ec=k.Deno,eu=es&&es.versions||ec&&ec.version,el=eu&&eu.v8;el&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(o=(i=el.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ea&&(!(i=ea.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ea.match(/Chrome\/(\d+)/))&&(o=+i[1]),eo=o;var ef=k.String;en=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ei=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ef(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ed=Object;ee=en?function(e){return"symbol"==typeof e}:function(e){var t=et("Symbol");return Q(t)&&er(t.prototype,ed(e))};var ep={},eh={},eg={},ev=String;eg=function(e){try{return ev(e)}catch(e){return"Object"}};var em=TypeError;// `Assert: IsCallable(argument) is true`
eh=function(e){if(Q(e))return e;throw em(eg(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ep=function(e,t){var r=e[t];return z(r)?void 0:eh(r)};var ey={},eb=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ey=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!J(n=j(r,e))||Q(r=e.valueOf)&&!J(n=j(r,e))||"string"!==t&&Q(r=e.toString)&&!J(n=j(r,e)))return n;throw eb("Can't convert object to primitive value")};var e_={},ew={};ew=!1;var ek={},eE={},eS=Object.defineProperty;eE=function(e,t){try{eS(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var e$="__core-js_shared__";ek=k[e$]||eE(e$,{}),(e_=function(e,t){return ek[e]||(ek[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.2",mode:ew?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var ej={},eO={},eL=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eO=function(e){return eL(G(e))};var eP=I({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
ej=Object.hasOwn||function(e,t){return eP(eO(e),t)};var ex={},eT=0,eH=Math.random(),eM=I(1..toString);ex=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eM(++eT+eH,36)};var eI=k.Symbol,eF=e_("wks"),eN=en?eI.for||eI:eI&&eI.withoutSetter||ex,eq=TypeError,eA=(ej(eF,e="toPrimitive")||(eF[e]=ei&&ej(eI,e)?eI[e]:eN("Symbol."+e)),eF[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
Y=function(e,t){if(!J(e)||ee(e))return e;var r,n=ep(e,eA);if(n){if(void 0===t&&(t="default"),r=j(n,e,t),!J(r)||ee(r))return r;throw eq("Can't convert object to primitive value")}return void 0===t&&(t="number"),ey(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
W=function(e){var t=Y(e,"string");return ee(t)?t:t+""};var eR={},eD={},eC=k.document,eB=J(eC)&&J(eC.createElement);eD=function(e){return eB?eC.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eR=!S&&!$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eD("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eG=Object.getOwnPropertyDescriptor;r=S?eG:function(e,t){if(e=H(e),t=W(t),eR)try{return eG(e,t)}catch(e){}if(ej(e,t))return T(!j(n,e,t),e[t])};var ez={},eU={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eU=S&&$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},eY=String,eJ=TypeError;// `Assert: Type(argument) is Object`
eW=function(e){if(J(e))return e;throw eJ(eY(e)+" is not an object")};var eQ=TypeError,eV=Object.defineProperty,eK=Object.getOwnPropertyDescriptor,eX="enumerable",eZ="configurable",e0="writable";a=S?eU?function(e,t,r){if(eW(e),t=W(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e0 in r&&!r[e0]){var n=eK(e,t);n&&n[e0]&&(e[t]=r.value,r={configurable:eZ in r?r[eZ]:n[eZ],enumerable:eX in r?r[eX]:n[eX],writable:!1})}return eV(e,t,r)}:eV:function(e,t,r){if(eW(e),t=W(t),eW(r),eR)try{return eV(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},ez=S?function(e,t,r){return a(e,t,T(1,r))}:function(e,t,r){return e[t]=r,e};var e1={},e2={},e9=Function.prototype,e3=S&&Object.getOwnPropertyDescriptor,e4=ej(e9,"name")&&(!S||S&&e3(e9,"name").configurable),e7={},e5=I(Function.toString);Q(ek.inspectSource)||(ek.inspectSource=function(e){return e5(e)}),e7=ek.inspectSource;var e8={},e6={},te=k.WeakMap;e6=Q(te)&&/native code/.test(String(te));var tt={},tr=e_("keys");tt=function(e){return tr[e]||(tr[e]=ex(e))};var tn={};tn={};var ti="Object already initialized",to=k.TypeError,ta=k.WeakMap;if(e6||ek.state){var ts=ek.state||(ek.state=new ta);/* eslint-disable no-self-assign -- prototype methods protection */ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(e,t){if(ts.has(e))throw to(ti);return t.facade=e,ts.set(e,t),t},c=function(e){return ts.get(e)||{}},u=function(e){return ts.has(e)}}else{var tc=tt("state");tn[tc]=!0,s=function(e,t){if(ej(e,tc))throw to(ti);return t.facade=e,ez(e,tc,t),t},c=function(e){return ej(e,tc)?e[tc]:{}},u=function(e){return ej(e,tc)}}var tu=(e8={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=c(t)).type!==e)throw to("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e8.get,tf=String,td=Object.defineProperty,tp=I("".slice),th=I("".replace),tg=I([].join),tv=S&&!$(function(){return 8!==td(function(){},"length",{value:8}).length}),tm=String(String).split("String"),ty=e2=function(e,t,r){"Symbol("===tp(tf(t),0,7)&&(t="["+th(tf(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ej(e,"name")||e4&&e.name!==t)&&(S?td(e,"name",{value:t,configurable:!0}):e.name=t),tv&&r&&ej(r,"arity")&&e.length!==r.arity&&td(e,"length",{value:r.arity});try{r&&ej(r,"constructor")&&r.constructor?S&&td(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tu(e);return ej(n,"source")||(n.source=tg(tm,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=ty(function(){return Q(this)&&tl(this).source||e7(this)},"toString"),e1=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&e2(r,o,n),n.global)i?e[t]=r:eE(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tb={},t_={},tw={},tk={},tE={},tS={},t$=Math.ceil,tj=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tS=Math.trunc||function(e){var t=+e;return(t>0?tj:t$)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tE=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tS(t)};var tO=Math.max,tL=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tk=function(e,t){var r=tE(e);return r<0?tO(r+t,0):tL(r,t)};var tP={},tx={},tT=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tx=function(e){return e>0?tT(tE(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tP=function(e){return tx(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tH=function(e){return function(t,r,n){var i,o=H(t),a=tP(o),s=tk(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tM={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tH(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tH(!1)}.indexOf,tI=I([].push);tw=function(e,t){var r,n=H(e),i=0,o=[];for(r in n)!ej(tn,r)&&ej(n,r)&&tI(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)ej(n,r=t[i++])&&(~tM(o,r)||tI(o,r));return o};var tF=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tw(e,tF)},f=Object.getOwnPropertySymbols;var tN=I([].concat);// all object keys, includes non-enumerable and symbols
t_=et("Reflect","ownKeys")||function(e){var t=l(eW(e));return f?tN(t,f(e)):t},tb=function(e,t,n){for(var i=t_(t),o=0;o<i.length;o++){var s=i[o];ej(e,s)||n&&ej(n,s)||a(e,s,r(t,s))}};var tq={},tA=/#|\.prototype\./,tR=function(e,t){var r=tC[tD(e)];return r===tG||r!==tB&&(Q(t)?$(t):!!t)},tD=tR.normalize=function(e){return String(e).replace(tA,".").toLowerCase()},tC=tR.data={},tB=tR.NATIVE="N",tG=tR.POLYFILL="P";tq=tR,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/w=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?k:l?k[c]||eE(c,{}):(k[c]||{}).prototype)for(i in t){// contained in target
if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tq(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tb(a,o)}(e.sham||o&&o.sham)&&ez(a,"sham",!0),e1(n,i,a,e)}};var tz={},tU={},tW=Function.prototype,tY=tW.apply,tJ=tW.call;// eslint-disable-next-line es/no-reflect -- safe
tU="object"==typeof Reflect&&Reflect.apply||(O?tJ.bind(tY):function(){return tJ.apply(tY,arguments)});var tQ={},tV={},tK=(tV=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===A(e))return I(e)})(tV.bind);// optional / simple context binding
tQ=function(e,t){return eh(e),void 0===t?e:O?tK(e,t):function(){return e.apply(t,arguments)}};var tX={};tX=et("document","documentElement");var tZ={};tZ=I([].slice);var t0={},t1=TypeError;t0=function(e,t){if(e<t)throw t1("Not enough arguments");return e};var t2={};// eslint-disable-next-line redos/no-vulnerable -- safe
t2=/(?:ipad|iphone|ipod).*applewebkit/i.test(ea);var t9={};t9="process"===A(k.process);var t3=k.setImmediate,t4=k.clearImmediate,t7=k.process,t5=k.Dispatch,t8=k.Function,t6=k.MessageChannel,re=k.String,rt=0,rr={},rn="onreadystatechange";$(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
d=k.location});var ri=function(e){if(ej(rr,e)){var t=rr[e];delete rr[e],t()}},ro=function(e){return function(){ri(e)}},ra=function(e){ri(e.data)},rs=function(e){// old engines have not location.origin
k.postMessage(re(e),d.protocol+"//"+d.host)};t3&&t4||(t3=function(e){t0(arguments.length,1);var t=Q(e)?e:t8(e),r=tZ(arguments,1);return rr[++rt]=function(){tU(t,void 0,r)},p(rt),rt},t4=function(e){delete rr[e]},t9?p=function(e){t7.nextTick(ro(e))}:t5&&t5.now?p=function(e){t5.now(ro(e))}:t6&&!t2?(g=(h=new t6).port2,h.port1.onmessage=ra,p=tQ(g.postMessage,g)):k.addEventListener&&Q(k.postMessage)&&!k.importScripts&&d&&"file:"!==d.protocol&&!$(rs)?(p=rs,k.addEventListener("message",ra,!1)):p=rn in eD("script")?function(e){tX.appendChild(eD("script"))[rn]=function(){tX.removeChild(this),ri(e)}}:function(e){setTimeout(ro(e),0)});var rc=(tz={set:t3,clear:t4}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rc},{clearImmediate:rc});var ru=tz.set,rl={},rf={};/* global Bun -- Deno case */rf="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rd=k.Function,rp=/MSIE .\./.test(ea)||rf&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rl=function(e,t){var r=t?2:1;return rp?function(n,i/* , ...arguments */){var o=t0(arguments.length,1)>r,a=Q(n)?n:rd(n),s=o?tZ(arguments,r):[],c=o?function(){tU(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rh=k.setImmediate?rl(ru,!1):ru;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rh},{setImmediate:rh});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new O(o||[]),s=d,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===d)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=f(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="executing",h="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=f(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=rg}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rg:Function("r","regeneratorRuntime = r")(rg)}const rv="https://forkify-api.herokuapp.com/api/v2/recipes",rm="8cf4d7b7-f12f-4311-a57b-a440d95f1872";async function ry(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 5 second"))},5e3)})]),i=await n.json();// console.log(response, data);
if(!n.ok)throw Error(`${i.status}: ${i.message}`);return i}catch(e){throw e}}const rb={recipe:{},search:{query:"",results:[],resultsPerPage:12,currentPage:1},bookmarks:[]};function r_(e){return{id:e.id,source:e.source_url,publisher:e.publisher,title:e.title,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients,numIngredients:e.ingredients.length,...e.key&&{key:e.key}}}async function rw(e){try{// console.log(state);
let t=await ry(`${rv}/${e}?key=${rm}`),{recipe:r}=t.data;rb.recipe=r_(r),rb.bookmarks.some(function(t){return t.id===e})?rb.recipe.bookmarked=!0:rb.recipe.bookmarked=!1,console.log(rb)}catch(e){throw console.log(e),e;// console.error();
}}async function rk(e){try{rb.search.query=e;let t=await ry(`${rv}?search=${e}&key=${rm}`),{recipes:r}=t.data;// console.log(recipes);
rb.search.results=r.map(function(e){return{id:e.id,publisher:e.publisher,title:e.title,image:e.image_url,...e.key&&{key:e.key}}})}catch(e){throw e}}function rE(e=rb.search.currentPage){// const firstPage = 0;
// const lastPage = state.search.results.length / 10; //Round down
// pg 1 = 0 - 9
// pg 2 = 10 - 19
rb.search.currentPage=e;let t=(e-1)*rb.search.resultsPerPage,r=e*rb.search.resultsPerPage;// console.log(start, end);
return rb.search.results.slice(t,r)}function rS(e){// console.log(state.bookmarks);
rb.bookmarks.push(e),e.id===rb.recipe.id&&(rb.recipe.bookmarked=!0),r$();// console.log(state.bookmarks.includes(recipe));
// console.log(state);
}function r$(){localStorage.setItem("bookmarks",JSON.stringify(rb.bookmarks))}async function rj(e){// console.log(newRecipe);
try{let t=Object.entries(e),r=t.filter(function(e){return e[0].startsWith("ingredient-")&&""!==e[1]}),n=r.map(function(e){let t=e[1]// .replaceAll(` `, ``)
.split(",").map(function(e){return e.trim()}),[r,n,i]=t;return{quantity:r?Number(r):null,unit:n,description:i}}),i={source_url:e.sourceUrl,publisher:e.publisher,title:e.title,image_url:e.image,servings:e.servings,cooking_time:e.cookingTime,ingredients:n},o=await ry(`${rv}?key=${rm}`,i);// console.log(response);
rb.recipe=r_(o.data.recipe),rS(rb.recipe),console.log(rb),window.history.pushState(null,"",`#${rb.recipe.id}`)}catch(e){throw e}}!function(){let e=JSON.parse(localStorage.getItem("bookmarks"));e&&(rb.bookmarks=e)}();var rO={};rO=new URL(_("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rL{_data;_clearHtml(){this._parentElement.innerHTML=""}render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateHtml();if(!t)return r;this._clearHtml(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){// if (!data || (Array.isArray(data) && data.length === 0)) {
//   return this.renderError();
// }
this._data=e;let t=this._generateHtml(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(function(e,t){let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(function(e){r.setAttribute(e.name,e.value)})})}loadingSpinner(){let e=`
      <div class="spinner">
      <svg>
        <use href="${/*@__PURE__*/m(rO)}#icon-loader"></use>
      </svg>
    </div>
  `;this._clearHtml(),this._parentElement.insertAdjacentHTML("afterbegin",e);// alert(`done loading`);
}renderError(e=this._defaultErrorMessage){let t=`<div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/m(rO)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clearHtml(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._defaultMessage){let t=`<div class="message">
    <div>
      <svg>
        <use href="${/*@__PURE__*/m(rO)}#icon-smile"></use>
      </svg>
    </div>
    <p>${e}</p>
  </div>`;this._clearHtml(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rP={};//FRACTY REDUCES THE FRACTION.
function rx(e,t,r,n,i){var o,a,s;let c=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,f=t;//Initialize counter over the prime number array for the while loop.
for(;u<=c.length;)l%c[u]==0&&f%c[u]==0?(c[u],l/=c[u],f/=c[u]):u++;return o=f,a=l,s=r,1===o&&1===a?`${s=`${n}${(parseInt(s)+1).toString()}`}`:0===a?`${n}${s}`:"0"==s?`${n}${a}/${o}`:`${n}${s} ${a}/${o}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
rP=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join(""),s=a.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!s||!(r.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);//Numerator begins as decimal input converted into an integer.
return rx(n,i,t,r,!1);//Reduce the numerator and denominator.
}(r,o,t));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,o),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),u=Math.round((s*c-s)*Math.pow(10,o));//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return rx(u,(c-1)*a,n,i,!0);//Further reduce the numerator and denominator.
}(r,n,e,o,t);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};class rT extends rL{_parentElement=document.querySelector(".recipe");_defaultErrorMessage="Recipe not found. Please try again!";_defaultMessage="Start by searching for a recipe or an ingredient. Have fun!";_generateHtml(){// console.info(`html`, this);
return`
      <figure class="recipe__fig">
      <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/m(rO)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/m(rO)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
            <button data-newservings="${this._data.servings-1}" class="btn--tiny btn--decrease-servings btn--servings">
        <svg>
          <use href="${/*@__PURE__*/m(rO)}#icon-minus-circle"></use>
        </svg>
      </button>
      <button data-newservings="${this._data.servings+1}" class="btn--tiny btn--increase-servings btn--servings">
        <svg>
          <use href="${/*@__PURE__*/m(rO)}#icon-plus-circle"></use>
        </svg>
      </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/m(rO)}#icon-user"></use>
            </svg>
          </div>
      <button class="btn--round">
        <svg class="">
          <use href="${/*@__PURE__*/m(rO)}#${this._data.bookmarked?"icon-bookmark-fill":"icon-bookmark"}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateIngredientsHtml).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.source}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${/*@__PURE__*/m(rO)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`}//   ${
//     this._data.servings > 1
//       ? `
//       <button data-newservings="${
//         this._data.servings - 1
//       }" class="btn--tiny btn--decrease-servings btn--servings">
//   <svg>
//     <use href="${icons}#icon-minus-circle"></use>
//   </svg>
// </button>
// <button data-newservings="${
//   this._data.servings + 1
// }" class="btn--tiny btn--increase-servings btn--servings">
//   <svg>
//     <use href="${icons}#icon-plus-circle"></use>
//   </svg>
// </button>
// `
//       : `
//     <button data-newservings="${
//       this._data.servings + 1
//     }" class="btn--tiny btn--increase-servings btn--servings">
//       <svg>
//         <use href="${icons}#icon-plus-circle"></use>
//       </svg>
//     </button>
//     `
//   }
_generateIngredientsHtml(e){return`
    <li class="recipe__ingredient">
  <svg class="recipe__icon">
    <use href="${/*@__PURE__*/m(rO)}#icon-check"></use>
  </svg>
      <div class="recipe__quantity">${e.quantity?/*@__PURE__*/m(rP)(e.quantity):""}</div>
  <div class="recipe__description">
    <span class="recipe__unit">${e.unit}</span>
    ${e.description}
  </div>
</li>
`}addHandlerRender(e){["hashchange","load"].forEach(function(t){window.addEventListener(t,e)})}addHandlerNewServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let n=Number(r.dataset.newservings);n<1||// console.log(target.classList.contains(`btn--decrease-servings`));
// target.classList.contains(`btn--decrease-servings`)
//   ? this._data.servings - 1
//   : this._data.servings + 1;
e(n)})}AddBookmarkHandler(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--round");r&&// console.log(target);
e()})}}var rH=new rT;// import icons from 'url:../../img/icons.svg';
class rM extends rL{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this.clearSearchBar(),e}clearSearchBar(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){//   console.log(`search`);
t.preventDefault(),e()})}}var rI=new rM,rF=new class extends rL{_generateHtml(){let e=window.location.hash.slice(1);// console.log(this._data);
return`
          <li class="preview">
          <a class="preview__link ${e===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
            <figure class="preview__fig">
              <img src="${this._data.image}" alt="${this._data.title}" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${this._data.title}</h4>
              <p class="preview__publisher">${this._data.publisher}</p>
              <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                  <svg>
                    <use href="${/*@__PURE__*/m(rO)}#icon-user"></use>
                  </svg>
                </div>
            </div>
          </a>
        </li>
        `}};class rN extends rL{_parentElement=document.querySelector(".results");_defaultErrorMessage="No results found! Try another keyword.";_defaultMessage="Start by searching for a recipe or an ingredient. Have fun!";//   addHandlerResults(callback){this._parentElement}
// _generateHtml() {
//   // console.log(this._data);
//   // this._data.map(function (result) {
//   //   console.log(result);
//   // return `
//   //   <li class="preview">
//   //   <a class="preview__link preview__link--active" href="#23456">
//   //     <figure class="preview__fig">
//   //       <img src="${result.image}" alt="Test" />
//   //     </figure>
//   //     <div class="preview__data">
//   //       <h4 class="preview__title">${result.title}</h4>
//   //       <p class="preview__publisher">${result.publisher}</p>
//   //       <div class="preview__user-generated">
//   //         <svg>
//   //           <use href="${icons}#icon-user"></use>
//   //         </svg>
//   //       </div>
//   //     </div>
//   //   </a>
//   // </li>
//   // `;
//   // });
//   const url = window.location.hash.slice(1);
//   return this._data
//     .map(function (recipe) {
//       return `
//     <li class="preview">
//     <a class="preview__link ${
//       url === recipe.id ? `preview__link--active` : ``
//     }" href="#${recipe.id}">
//       <figure class="preview__fig">
//         <img src="${recipe.image}" alt="${recipe.title}" />
//       </figure>
//       <div class="preview__data">
//         <h4 class="preview__title">${recipe.title}</h4>
//         <p class="preview__publisher">${recipe.publisher}</p>
//       </div>
//     </a>
//   </li>
//   `;
//     })
//     .join(``);
//   // return this._data.reduce(function (accumulator, recipe) {
//   //   // console.log(accumulator);
//   //   return (
//   //     accumulator +
//   //     `
//   //     <li class="preview">
//   //     <a class="preview__link ${
//   //       url === recipe.id ? `preview__link--active` : ``
//   //     }" href="#${recipe.id}">
//   //       <figure class="preview__fig">
//   //         <img src="${recipe.image}" alt="${recipe.title}" />
//   //       </figure>
//   //       <div class="preview__data">
//   //         <h4 class="preview__title">${recipe.title}</h4>
//   //         <p class="preview__publisher">${recipe.publisher}</p>
//   //       </div>
//   //     </a>
//   //   </li>
//   //   `
//   //   );
//   // }, ``);
//   //     return `<li class="preview">
//   //     <a class="preview__link preview__link--active" href="#23456">
//   //       <figure class="preview__fig">
//   //         <img src="src/img/test-1.jpg" alt="Test" />
//   //       </figure>
//   //       <div class="preview__data">
//   //         <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
//   //         <p class="preview__publisher">The Pioneer Woman</p>
//   //         <div class="preview__user-generated">
//   //           <svg>
//   //             <use href="${icons}#icon-user"></use>
//   //           </svg>
//   //         </div>
//   //       </div>
//   //     </a>
//   //   </li>`;
// }
_generateHtml(){return this._data.map(function(e){return rF.render(e,!1)}).join("")}}var rq=new rN;class rA extends rL{_parentElement=document.querySelector(".pagination");//   _generatePreviousButton() {
//     return `
//   <button class="btn--inline pagination__btn--prev">
//   <svg class="search__icon">
//     <use href="${icons}#icon-arrow-left"></use>
//   </svg>
//   <span>Page ${currentPage - 1}</span>
// </button>
// `;
//   }
_generateHtml(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.currentPage,r=`
    <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${/*@__PURE__*/m(rO)}#icon-arrow-left"></use>
    </svg>
    <span>Page ${t-1}</span>
  </button>
  `,n=`
  <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
  <span>Page ${t+1}</span>
  <svg class="search__icon">
    <use href="${/*@__PURE__*/m(rO)}#icon-arrow-right"></use>
  </svg>
</button>
`,i=`
<button class="pagination__btn--pagenum">
<span>Page ${t} out of ${e}</span>
</button>
`;return 1===t&&1===e?i:t<e&&1===t?i+n:t<e&&1<t?r+i+n:t===e&&e>1?r+i:void 0}addPageHandler(e){this._parentElement.addEventListener("click",function(t){//   event.preventDefault();
let r=t.target.closest(".btn--inline");if(!r)return;let n=Number(r.dataset.goto);e(n)})}}var rR=new rA;class rD extends rL{_parentElement=document.querySelector(".bookmarks__list");_defaultErrorMessage="No bookmarks! Try another keyword.";//   _defaultMessage = `Start by searching for a recipe or an ingredient. Have fun!`;
//   _generateHtml() {
//     const url = window.location.hash.slice(1);
//     return this._data
//       .map(function (recipe) {
//         return `
//       <li class="preview">
//       <a class="preview__link ${
//         url === recipe.id ? `preview__link--active` : ``
//       }" href="#${recipe.id}">
//         <figure class="preview__fig">
//           <img src="${recipe.image}" alt="${recipe.title}" />
//         </figure>
//         <div class="preview__data">
//           <h4 class="preview__title">${recipe.title}</h4>
//           <p class="preview__publisher">${recipe.publisher}</p>
//         </div>
//       </a>
//     </li>
//     `;
//       })
//       .join(``);
//   }
_generateHtml(){return this._data.map(function(e){return rF.render(e,!1)}).join("")}addHandlerBookmarks(e){window.addEventListener("load",e)}}var rC=new rD;class rB extends rL{_parentElement=document.querySelector(".add-recipe-window");_form=this._parentElement;_addRecipeButton=document.querySelector(".nav__btn--add-recipe");_formBackground=document.querySelector(".overlay");_closeForm=document.querySelector(".btn--close-modal");addHandlerAddRecipe(){this._addRecipeButton.addEventListener("click",this.toggleForm.bind(this))}toggleForm(){this._formBackground.classList.toggle("hidden"),this._form.classList.toggle("hidden")}addHandlerCloseRecipe(){this._closeForm.addEventListener("click",this.toggleForm.bind(this)),this._formBackground.addEventListener("click",this.toggleForm.bind(this))}addHandlerSubmitRecipe(e){this._form.addEventListener("submit",function(t){t.preventDefault();//   console.log(event);
// const target = event.target.closest(`.upload__btn`);
//   if (!target) {
//     return;
//   }
let r=t.target.closest(".upload"),n=[...new FormData(r)],i=Object.fromEntries(n);//   console.log(data);
//   const recipe = [data];
//   console.log(recipe);
try{let t=n.filter(function(e){return e[0].startsWith("ingredient-")&&""!==e[1]});t.map(function(e){let t=e[1]// .replaceAll(` `, ``)
.split(",").map(function(e){return e.trim()});// console.log(ingredients);
if(3!==t.length)throw Error('3 items needed in format of "quantity,unit,description"')}),//   console.log(ingredients);
e(i)}catch(e){alert(e)}})}}var rG=new rB;async function rz(){try{rH.loadingSpinner();let e=window.location.hash.slice(1);if(!e)return;rq.update(rE()),rC.update(rb.bookmarks),await rw(e),rH.render(rb.recipe);// console.log(Model.state.recipe);
}catch(e){rH.renderError()}}async function rU(){try{let e=rI.getQuery();// console.log(searchQuery);
if(!e)return;rq.loadingSpinner(),await rk(e),console.log(rb.search),rq.render(rE(1)),rR.render(rb.search)}catch(e){console.log(e)}}async function rW(e){try{rG.loadingSpinner(),await rj(e),rH.render(rb.recipe),alert("Upload success"),rG.toggleForm(),rC.render(rb.bookmarks)}catch(e){// addRecipeView.renderError(error);
alert(e)}}// window.addEventListener(`hashchange`, selectedRecipe);
//# sourceMappingURL=index.6d98fa0f.js.map
rC.addHandlerBookmarks(function(){rC.render(rb.bookmarks)}),rH.addHandlerRender(rz),rH.addHandlerNewServings(function(e){// console.log(Model.state.recipe);
(function(e){let t=rb.recipe.servings;rb.recipe.ingredients.forEach(function(r){// console.log(ingredient);
r.quantity=e*r.quantity/t}),rb.recipe.servings=e})(e),rH.update(rb.recipe)}),rH.AddBookmarkHandler(function(){rb.recipe.bookmarked?function(e){// console.log(state.bookmarks);
let t=rb.bookmarks.findIndex(function(t){return t.id===e.id});rb.bookmarks.splice(t,1),e.id===rb.recipe.id&&(rb.recipe.bookmarked=!1),r$();// console.log(state.bookmarks.includes(recipe));
}(rb.recipe):rS(rb.recipe),rH.update(rb.recipe),rC.render(rb.bookmarks)}),rI.addHandlerSearch(rU),rR.addPageHandler(// controlSearch();
function(e){rq.render(rE(e)),rR.render(rb.search)}),rG.addHandlerAddRecipe(),rG.addHandlerCloseRecipe(),rG.addHandlerSubmitRecipe(rW);
//# sourceMappingURL=index.6d98fa0f.js.map
