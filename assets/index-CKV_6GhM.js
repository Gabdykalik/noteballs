(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ml(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},Xr=[],tn=()=>{},ty=()=>!1,ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),gl=t=>t.startsWith("onUpdate:"),Ze=Object.assign,_l=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ny=Object.prototype.hasOwnProperty,be=(t,e)=>ny.call(t,e),ue=Array.isArray,Zr=t=>ta(t)==="[object Map]",qf=t=>ta(t)==="[object Set]",fe=t=>typeof t=="function",ze=t=>typeof t=="string",bn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Hf=t=>(xe(t)||fe(t))&&fe(t.then)&&fe(t.catch),Wf=Object.prototype.toString,ta=t=>Wf.call(t),ry=t=>ta(t).slice(8,-1),zf=t=>ta(t)==="[object Object]",yl=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Js=ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sy=/-(\w)/g,$t=na(t=>t.replace(sy,(e,n)=>n?n.toUpperCase():"")),iy=/\B([A-Z])/g,kr=na(t=>t.replace(iy,"-$1").toLowerCase()),ra=na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ya=na(t=>t?`on${ra(t)}`:""),Hn=(t,e)=>!Object.is(t,e),mo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Kf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},bc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ah;const sa=()=>Ah||(Ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?ly(r):vl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||xe(t))return t}const oy=/;(?![^(]*\))/g,ay=/:([^]+)/,cy=/\/\*[^]*?\*\//g;function ly(t){const e={};return t.replace(cy,"").split(oy).forEach(n=>{if(n){const r=n.split(ay);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jn(t){let e="";if(ze(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Jn(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const uy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hy=ml(uy);function Gf(t){return!!t||t===""}const Qf=t=>!!(t&&t.__v_isRef===!0),nn=t=>ze(t)?t:t==null?"":ue(t)||xe(t)&&(t.toString===Wf||!fe(t.toString))?Qf(t)?nn(t.value):JSON.stringify(t,Yf,2):String(t),Yf=(t,e)=>Qf(e)?Yf(t,e.value):Zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ja(r,i)+" =>"]=s,n),{})}:qf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ja(n))}:bn(e)?Ja(e):xe(e)&&!ue(e)&&!zf(e)?String(e):e,Ja=(t,e="")=>{var n;return bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class Jf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Xf(t){return new Jf(t)}function El(){return It}function Zf(t,e=!1){It&&It.cleanups.push(t)}let De;const Xa=new WeakSet;class ep{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xa.has(this)&&(Xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||np(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bh(this),rp(this);const e=De,n=Ht;De=this,Ht=!0;try{return this.fn()}finally{sp(this),De=e,Ht=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wl(e);this.deps=this.depsTail=void 0,bh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rc(this)&&this.run()}get dirty(){return Rc(this)}}let tp=0,Xs,Zs;function np(t,e=!1){if(t.flags|=8,e){t.next=Zs,Zs=t;return}t.next=Xs,Xs=t}function Tl(){tp++}function Il(){if(--tp>0)return;if(Zs){let e=Zs;for(Zs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function rp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),wl(r),dy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Rc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ip(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ip(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===hi))return;t.globalVersion=hi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Rc(t)){t.flags&=-3;return}const n=De,r=Ht;De=t,Ht=!0;try{rp(t);const s=t.fn(t._value);(e.version===0||Hn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Ht=r,sp(t),t.flags&=-3}}function wl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)wl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function dy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ht=!0;const op=[];function sr(){op.push(Ht),Ht=!1}function ir(){const t=op.pop();Ht=t===void 0?!0:t}function bh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let hi=0;class fy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Al{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!Ht||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new fy(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,ap(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,hi++,this.notify(e)}notify(e){Tl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Il()}}}function ap(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ap(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ko=new WeakMap,Er=Symbol(""),Sc=Symbol(""),di=Symbol("");function ft(t,e,n){if(Ht&&De){let r=ko.get(t);r||ko.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Al),s.map=r,s.key=n),s.track()}}function mn(t,e,n,r,s,i){const o=ko.get(t);if(!o){hi++;return}const c=l=>{l&&l.trigger()};if(Tl(),e==="clear")o.forEach(c);else{const l=ue(t),h=l&&yl(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===di||!bn(g)&&g>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(di)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Er)),Zr(t)&&c(o.get(Sc)));break;case"delete":l||(c(o.get(Er)),Zr(t)&&c(o.get(Sc)));break;case"set":Zr(t)&&c(o.get(Er));break}}Il()}function py(t,e){const n=ko.get(t);return n&&n.get(e)}function jr(t){const e=we(t);return e===t?e:(ft(e,"iterate",di),Ft(t)?e:e.map(pt))}function ia(t){return ft(t=we(t),"iterate",di),t}const my={__proto__:null,[Symbol.iterator](){return Za(this,Symbol.iterator,pt)},concat(...t){return jr(this).concat(...t.map(e=>ue(e)?jr(e):e))},entries(){return Za(this,"entries",t=>(t[1]=pt(t[1]),t))},every(t,e){return dn(this,"every",t,e,void 0,arguments)},filter(t,e){return dn(this,"filter",t,e,n=>n.map(pt),arguments)},find(t,e){return dn(this,"find",t,e,pt,arguments)},findIndex(t,e){return dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dn(this,"findLast",t,e,pt,arguments)},findLastIndex(t,e){return dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ec(this,"includes",t)},indexOf(...t){return ec(this,"indexOf",t)},join(t){return jr(this).join(t)},lastIndexOf(...t){return ec(this,"lastIndexOf",t)},map(t,e){return dn(this,"map",t,e,void 0,arguments)},pop(){return Us(this,"pop")},push(...t){return Us(this,"push",t)},reduce(t,...e){return Rh(this,"reduce",t,e)},reduceRight(t,...e){return Rh(this,"reduceRight",t,e)},shift(){return Us(this,"shift")},some(t,e){return dn(this,"some",t,e,void 0,arguments)},splice(...t){return Us(this,"splice",t)},toReversed(){return jr(this).toReversed()},toSorted(t){return jr(this).toSorted(t)},toSpliced(...t){return jr(this).toSpliced(...t)},unshift(...t){return Us(this,"unshift",t)},values(){return Za(this,"values",pt)}};function Za(t,e,n){const r=ia(t),s=r[e]();return r!==t&&!Ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const gy=Array.prototype;function dn(t,e,n,r,s,i){const o=ia(t),c=o!==t&&!Ft(t),l=o[e];if(l!==gy[e]){const p=l.apply(t,i);return c?pt(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,pt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=l.call(o,h,r);return c&&s?s(d):d}function Rh(t,e,n,r){const s=ia(t);let i=n;return s!==t&&(Ft(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,pt(c),l,t)}),s[e](i,...r)}function ec(t,e,n){const r=we(t);ft(r,"iterate",di);const s=r[e](...n);return(s===-1||s===!1)&&Sl(n[0])?(n[0]=we(n[0]),r[e](...n)):s}function Us(t,e,n=[]){sr(),Tl();const r=we(t)[e].apply(t,n);return Il(),ir(),r}const _y=ml("__proto__,__v_isRef,__isVue"),cp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bn));function yy(t){bn(t)||(t=String(t));const e=we(this);return ft(e,"has",t),e.hasOwnProperty(t)}class lp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Py:fp:i?dp:hp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=my[n]))return l;if(n==="hasOwnProperty")return yy}const c=Reflect.get(e,n,$e(e)?e:r);return(bn(n)?cp.has(n):_y(n))||(s||ft(e,"get",n),i)?c:$e(c)?o&&yl(n)?c:c.value:xe(c)?s?mp(c):Nr(c):c}}class up extends lp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=br(i);if(!Ft(r)&&!br(r)&&(i=we(i),r=we(r)),!ue(e)&&$e(i)&&!$e(r))return l?!1:(i.value=r,!0)}const o=ue(e)&&yl(n)?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,$e(e)?e:s);return e===we(s)&&(o?Hn(r,i)&&mn(e,"set",n,r):mn(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!bn(n)||!cp.has(n))&&ft(e,"has",n),r}ownKeys(e){return ft(e,"iterate",ue(e)?"length":Er),Reflect.ownKeys(e)}}class vy extends lp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ey=new up,Ty=new vy,Iy=new up(!0);const Pc=t=>t,io=t=>Reflect.getPrototypeOf(t);function wy(t,e,n){return function(...r){const s=this.__v_raw,i=we(s),o=Zr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?Pc:e?Cc:pt;return!e&&ft(i,"iterate",l?Sc:Er),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function oo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ay(t,e){const n={get(s){const i=this.__v_raw,o=we(i),c=we(s);t||(Hn(s,c)&&ft(o,"get",s),ft(o,"get",c));const{has:l}=io(o),h=e?Pc:t?Cc:pt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ft(we(s),"iterate",Er),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=we(i),c=we(s);return t||(Hn(s,c)&&ft(o,"has",s),ft(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=we(c),h=e?Pc:t?Cc:pt;return!t&&ft(l,"iterate",Er),c.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return Ze(n,t?{add:oo("add"),set:oo("set"),delete:oo("delete"),clear:oo("clear")}:{add(s){!e&&!Ft(s)&&!br(s)&&(s=we(s));const i=we(this);return io(i).has.call(i,s)||(i.add(s),mn(i,"add",s,s)),this},set(s,i){!e&&!Ft(i)&&!br(i)&&(i=we(i));const o=we(this),{has:c,get:l}=io(o);let h=c.call(o,s);h||(s=we(s),h=c.call(o,s));const d=l.call(o,s);return o.set(s,i),h?Hn(i,d)&&mn(o,"set",s,i):mn(o,"add",s,i),this},delete(s){const i=we(this),{has:o,get:c}=io(i);let l=o.call(i,s);l||(s=we(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&mn(i,"delete",s,void 0),h},clear(){const s=we(this),i=s.size!==0,o=s.clear();return i&&mn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=wy(s,t,e)}),n}function bl(t,e){const n=Ay(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const by={get:bl(!1,!1)},Ry={get:bl(!1,!0)},Sy={get:bl(!0,!1)};const hp=new WeakMap,dp=new WeakMap,fp=new WeakMap,Py=new WeakMap;function Cy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ky(t){return t.__v_skip||!Object.isExtensible(t)?0:Cy(ry(t))}function Nr(t){return br(t)?t:Rl(t,!1,Ey,by,hp)}function pp(t){return Rl(t,!1,Iy,Ry,dp)}function mp(t){return Rl(t,!0,Ty,Sy,fp)}function Rl(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ky(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Wn(t){return br(t)?Wn(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function Sl(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function oa(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&Kf(t,"__v_skip",!0),t}const pt=t=>xe(t)?Nr(t):t,Cc=t=>xe(t)?mp(t):t;function $e(t){return t?t.__v_isRef===!0:!1}function Ut(t){return gp(t,!1)}function Ny(t){return gp(t,!0)}function gp(t,e){return $e(t)?t:new Dy(t,e)}class Dy{constructor(e,n){this.dep=new Al,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||br(e);e=r?e:we(e),Hn(e,n)&&(this._rawValue=e,this._value=r?e:pt(e),this.dep.trigger())}}function _t(t){return $e(t)?t.value:t}const Vy={get:(t,e,n)=>e==="__v_raw"?t:_t(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function _p(t){return Wn(t)?t:new Proxy(t,Vy)}function Oy(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=My(t,n);return e}class xy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return py(we(this._object),this._key)}}function My(t,e,n){const r=t[e];return $e(r)?r:new xy(t,e,n)}class Ly{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Al(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return np(this,!0),!0}get value(){const e=this.dep.track();return ip(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fy(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Ly(r,s,n)}const ao={},No=new WeakMap;let _r;function Uy(t,e=!1,n=_r){if(n){let r=No.get(n);r||No.set(n,r=[]),r.push(t)}}function By(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=W=>s?W:Ft(W)||s===!1||s===0?gn(W,1):gn(W);let d,p,g,_,S=!1,k=!1;if($e(t)?(p=()=>t.value,S=Ft(t)):Wn(t)?(p=()=>h(t),S=!0):ue(t)?(k=!0,S=t.some(W=>Wn(W)||Ft(W)),p=()=>t.map(W=>{if($e(W))return W.value;if(Wn(W))return h(W);if(fe(W))return l?l(W,2):W()})):fe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){sr();try{g()}finally{ir()}}const W=_r;_r=d;try{return l?l(t,3,[_]):t(_)}finally{_r=W}}:p=tn,e&&s){const W=p,ie=s===!0?1/0:s;p=()=>gn(W(),ie)}const D=El(),B=()=>{d.stop(),D&&_l(D.effects,d)};if(i&&e){const W=e;e=(...ie)=>{W(...ie),B()}}let $=k?new Array(t.length).fill(ao):ao;const j=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(e){const ie=d.run();if(s||S||(k?ie.some((pe,A)=>Hn(pe,$[A])):Hn(ie,$))){g&&g();const pe=_r;_r=d;try{const A=[ie,$===ao?void 0:k&&$[0]===ao?[]:$,_];l?l(e,3,A):e(...A),$=ie}finally{_r=pe}}}else d.run()};return c&&c(j),d=new ep(p),d.scheduler=o?()=>o(j,!1):j,_=W=>Uy(W,!1,d),g=d.onStop=()=>{const W=No.get(d);if(W){if(l)l(W,4);else for(const ie of W)ie();No.delete(d)}},e?r?j(!0):$=d.run():o?o(j.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function gn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,$e(t))gn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)gn(t[r],e,n);else if(qf(t)||Zr(t))t.forEach(r=>{gn(r,e,n)});else if(zf(t)){for(const r in t)gn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&gn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ci(t,e,n,r){try{return r?t(...r):t()}catch(s){aa(s,e,n)}}function cn(t,e,n,r){if(fe(t)){const s=Ci(t,e,n,r);return s&&Hf(s)&&s.catch(i=>{aa(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(cn(t[i],e,n,r));return s}}function aa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){sr(),Ci(i,null,10,[t,l,h]),ir();return}}$y(t,n,s,r,o)}function $y(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let Jt=-1;const es=[];let Mn=null,Hr=0;const yp=Promise.resolve();let Do=null;function Pl(t){const e=Do||yp;return t?e.then(this?t.bind(this):t):e}function jy(t){let e=Jt+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=fi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Cl(t){if(!(t.flags&1)){const e=fi(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=fi(n)?wt.push(t):wt.splice(jy(e),0,t),t.flags|=1,vp()}}function vp(){Do||(Do=yp.then(Tp))}function qy(t){ue(t)?es.push(...t):Mn&&t.id===-1?Mn.splice(Hr+1,0,t):t.flags&1||(es.push(t),t.flags|=1),vp()}function Sh(t,e,n=Jt+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ep(t){if(es.length){const e=[...new Set(es)].sort((n,r)=>fi(n)-fi(r));if(es.length=0,Mn){Mn.push(...e);return}for(Mn=e,Hr=0;Hr<Mn.length;Hr++){const n=Mn[Hr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mn=null,Hr=0}}const fi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Tp(t){try{for(Jt=0;Jt<wt.length;Jt++){const e=wt[Jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jt<wt.length;Jt++){const e=wt[Jt];e&&(e.flags&=-2)}Jt=-1,wt.length=0,Ep(),Do=null,(wt.length||es.length)&&Tp()}}let Je=null,Ip=null;function Vo(t){const e=Je;return Je=t,Ip=t&&t.type.__scopeId||null,e}function os(t,e=Je,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mh(-1);const i=Vo(e);let o;try{o=t(...s)}finally{Vo(i),r._d&&Mh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kc(t,e){if(Je===null)return t;const n=fa(Je),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=ke]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&gn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function pr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(sr(),cn(l,n,8,[t.el,c,t,e]),ir())}}const Hy=Symbol("_vte"),Wy=t=>t.__isTeleport;function kl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,kl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ca(t,e){return fe(t)?Ze({name:t.name},e,{setup:t}):t}function wp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Nc(t,e,n,r,s=!1){if(ue(t)){t.forEach((S,k)=>Nc(S,e&&(ue(e)?e[k]:e),n,r,s));return}if(ts(r)&&!s)return;const i=r.shapeFlag&4?fa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===ke?c.refs={}:c.refs,p=c.setupState,g=we(p),_=p===ke?()=>!1:S=>be(g,S);if(h!=null&&h!==l&&(ze(h)?(d[h]=null,_(h)&&(p[h]=null)):$e(h)&&(h.value=null)),fe(l))Ci(l,c,12,[o,d]);else{const S=ze(l),k=$e(l);if(S||k){const D=()=>{if(t.f){const B=S?_(l)?p[l]:d[l]:l.value;s?ue(B)&&_l(B,i):ue(B)?B.includes(i)||B.push(i):S?(d[l]=[i],_(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else S?(d[l]=o,_(l)&&(p[l]=o)):k&&(l.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,Vt(D,n)):D()}}}sa().requestIdleCallback;sa().cancelIdleCallback;const ts=t=>!!t.type.__asyncLoader,Ap=t=>t.type.__isKeepAlive;function zy(t,e){bp(t,"a",e)}function Ky(t,e){bp(t,"da",e)}function bp(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(la(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ap(s.parent.vnode)&&Gy(r,e,n,s),s=s.parent}}function Gy(t,e,n,r){const s=la(e,t,r,!0);Dl(()=>{_l(r[e],s)},n)}function la(t,e,n=st,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{sr();const c=ki(n),l=cn(e,n,t,o);return c(),ir(),l});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=st)=>{(!gi||t==="sp")&&la(t,(...r)=>e(...r),n)},Qy=Rn("bm"),Nl=Rn("m"),Yy=Rn("bu"),Jy=Rn("u"),Xy=Rn("bum"),Dl=Rn("um"),Zy=Rn("sp"),ev=Rn("rtg"),tv=Rn("rtc");function nv(t,e=st){la("ec",t,e)}const rv="components";function Vl(t,e){return iv(rv,t,!0,e)||t}const sv=Symbol.for("v-ndc");function iv(t,e,n=!0,r=!1){const s=Je||st;if(s){const i=s.type;{const c=Gv(i,!1);if(c&&(c===e||c===$t(e)||c===ra($t(e))))return i}const o=Ph(s[t]||i[t],e)||Ph(s.appContext[t],e);return!o&&r?i:o}}function Ph(t,e){return t&&(t[e]||t[$t(e)]||t[ra($t(e))])}function ov(t,e,n,r){let s;const i=n,o=ue(t);if(o||ze(t)){const c=o&&Wn(t);let l=!1;c&&(l=!Ft(t),t=ia(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?pt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}function av(t,e,n={},r,s){if(Je.ce||Je.parent&&ts(Je.parent)&&Je.parent.ce)return n.name=e,qe(),as(At,null,[We("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),qe();const o=i&&Rp(i(n)),c=n.key||o&&o.key,l=as(At,{key:(c&&!bn(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Rp(t){return t.some(e=>mi(e)?!(e.type===Xn||e.type===At&&!Rp(e.children)):!0)?t:null}const Dc=t=>t?zp(t)?fa(t):Dc(t.parent):null,ei=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dc(t.parent),$root:t=>Dc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ol(t),$forceUpdate:t=>t.f||(t.f=()=>{Cl(t.update)}),$nextTick:t=>t.n||(t.n=Pl.bind(t.proxy)),$watch:t=>Cv.bind(t)}),tc=(t,e)=>t!==ke&&!t.__isScriptSetup&&be(t,e),cv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(tc(r,e))return o[e]=1,r[e];if(s!==ke&&be(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&be(h,e))return o[e]=3,i[e];if(n!==ke&&be(n,e))return o[e]=4,n[e];Vc&&(o[e]=0)}}const d=ei[e];let p,g;if(d)return e==="$attrs"&&ft(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==ke&&be(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return tc(s,e)?(s[e]=n,!0):r!==ke&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==ke&&be(t,o)||tc(e,o)||(c=i[0])&&be(c,o)||be(r,o)||be(ei,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ch(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vc=!0;function lv(t){const e=Ol(t),n=t.proxy,r=t.ctx;Vc=!1,e.beforeCreate&&kh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:_,updated:S,activated:k,deactivated:D,beforeDestroy:B,beforeUnmount:$,destroyed:j,unmounted:W,render:ie,renderTracked:pe,renderTriggered:A,errorCaptured:y,serverPrefetch:E,expose:w,inheritAttrs:b,components:R,directives:I,filters:et}=e;if(h&&uv(h,r,null),o)for(const ce in o){const me=o[ce];fe(me)&&(r[ce]=me.bind(n))}if(s){const ce=s.call(n,n);xe(ce)&&(t.data=Nr(ce))}if(Vc=!0,i)for(const ce in i){const me=i[ce],Nt=fe(me)?me.bind(n,n):fe(me.get)?me.get.bind(n,n):tn,jt=!fe(me)&&fe(me.set)?me.set.bind(n):tn,Mt=gt({get:Nt,set:jt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Me=>Mt.value=Me})}if(c)for(const ce in c)Sp(c[ce],r,n,ce);if(l){const ce=fe(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(me=>{go(me,ce[me])})}d&&kh(d,t,"c");function Ne(ce,me){ue(me)?me.forEach(Nt=>ce(Nt.bind(n))):me&&ce(me.bind(n))}if(Ne(Qy,p),Ne(Nl,g),Ne(Yy,_),Ne(Jy,S),Ne(zy,k),Ne(Ky,D),Ne(nv,y),Ne(tv,pe),Ne(ev,A),Ne(Xy,$),Ne(Dl,W),Ne(Zy,E),ue(w))if(w.length){const ce=t.exposed||(t.exposed={});w.forEach(me=>{Object.defineProperty(ce,me,{get:()=>n[me],set:Nt=>n[me]=Nt})})}else t.exposed||(t.exposed={});ie&&t.render===tn&&(t.render=ie),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),I&&(t.directives=I),E&&wp(t)}function uv(t,e,n=tn){ue(t)&&(t=Oc(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=Bt(s.from||r,s.default,!0):i=Bt(s.from||r):i=Bt(s),$e(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function kh(t,e,n){cn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sp(t,e,n,r){let s=r.includes(".")?$p(n,r):()=>n[r];if(ze(t)){const i=e[t];fe(i)&&Ir(s,i)}else if(fe(t))Ir(s,t.bind(n));else if(xe(t))if(ue(t))t.forEach(i=>Sp(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Ir(s,i,t)}}function Ol(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Oo(l,h,o,!0)),Oo(l,e,o)),xe(e)&&i.set(e,l),l}function Oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oo(t,i,n,!0),s&&s.forEach(o=>Oo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=hv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const hv={data:Nh,props:Dh,emits:Dh,methods:qs,computed:qs,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:qs,directives:qs,watch:fv,provide:Nh,inject:dv};function Nh(t,e){return e?t?function(){return Ze(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function dv(t,e){return qs(Oc(t),Oc(e))}function Oc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?Ze(Object.create(null),t,e):e}function Dh(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:Ze(Object.create(null),Ch(t),Ch(e??{})):e}function fv(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function Pp(){return{app:null,config:{isNativeTag:ty,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pv=0;function mv(t,e){return function(r,s=null){fe(r)||(r=Ze({},r)),s!=null&&!xe(s)&&(s=null);const i=Pp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:pv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Yv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&fe(d.install)?(o.add(d),d.install(h,...p)):fe(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!l){const _=h._ceVNode||We(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(_,d):t(_,d,g),l=!0,h._container=d,d.__vue_app__=h,fa(_.component)}},onUnmount(d){c.push(d)},unmount(){l&&(cn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Tr;Tr=h;try{return d()}finally{Tr=p}}};return h}}let Tr=null;function go(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Bt(t,e,n=!1){const r=st||Je;if(r||Tr){const s=Tr?Tr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function gv(){return!!(st||Je||Tr)}const Cp={},kp=()=>Object.create(Cp),Np=t=>Object.getPrototypeOf(t)===Cp;function _v(t,e,n,r=!1){const s={},i=kp();t.propsDefaults=Object.create(null),Dp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:pp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=we(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(ua(t.emitsOptions,g))continue;const _=e[g];if(l)if(be(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const S=$t(g);s[S]=xc(l,c,S,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Dp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!be(e,p)&&((d=kr(p))===p||!be(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=xc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p))&&(delete i[p],h=!0)}h&&mn(t.attrs,"set","")}function Dp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Js(l))continue;const h=e[l];let d;s&&be(s,d=$t(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:ua(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=we(n),h=c||ke;for(let d=0;d<i.length;d++){const p=i[d];n[p]=xc(s,l,p,h[p],t,!be(h,p))}}return o}function xc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=ki(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===kr(n))&&(r=!0))}return r}const vv=new WeakMap;function Vp(t,e,n=!1){const r=n?vv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const d=p=>{l=!0;const[g,_]=Vp(p,e,!0);Ze(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return xe(t)&&r.set(t,Xr),Xr;if(ue(i))for(let d=0;d<i.length;d++){const p=$t(i[d]);Vh(p)&&(o[p]=ke)}else if(i)for(const d in i){const p=$t(d);if(Vh(p)){const g=i[d],_=o[p]=ue(g)||fe(g)?{type:g}:Ze({},g),S=_.type;let k=!1,D=!0;if(ue(S))for(let B=0;B<S.length;++B){const $=S[B],j=fe($)&&$.name;if(j==="Boolean"){k=!0;break}else j==="String"&&(D=!1)}else k=fe(S)&&S.name==="Boolean";_[0]=k,_[1]=D,(k||be(_,"default"))&&c.push(p)}}const h=[o,c];return xe(t)&&r.set(t,h),h}function Vh(t){return t[0]!=="$"&&!Js(t)}const Op=t=>t[0]==="_"||t==="$stable",xl=t=>ue(t)?t.map(Xt):[Xt(t)],Ev=(t,e,n)=>{if(e._n)return e;const r=os((...s)=>xl(e(...s)),n);return r._c=!1,r},xp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Op(s))continue;const i=t[s];if(fe(i))e[s]=Ev(s,i,r);else if(i!=null){const o=xl(i);e[s]=()=>o}}},Mp=(t,e)=>{const n=xl(e);t.slots.default=()=>n},Lp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Tv=(t,e,n)=>{const r=t.slots=kp();if(t.vnode.shapeFlag&32){const s=e._;s?(Lp(r,e,n),n&&Kf(r,"_",s,!0)):xp(e,r)}else e&&Mp(t,e)},Iv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Lp(s,e,n):(i=!e.$stable,xp(e,s)),o=e}else e&&(Mp(t,e),o={default:1});if(i)for(const c in s)!Op(c)&&o[c]==null&&delete s[c]},Vt=Mv;function wv(t){return Av(t)}function Av(t,e){const n=sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:_=tn,insertStaticContent:S}=t,k=(v,T,C,L=null,V=null,F=null,K=void 0,H=null,q=!!T.dynamicChildren)=>{if(v===T)return;v&&!Bs(v,T)&&(L=O(v),Me(v,V,F,!0),v=null),T.patchFlag===-2&&(q=!1,T.dynamicChildren=null);const{type:U,ref:se,shapeFlag:Q}=T;switch(U){case ha:D(v,T,C,L);break;case Xn:B(v,T,C,L);break;case sc:v==null&&$(T,C,L,K);break;case At:R(v,T,C,L,V,F,K,H,q);break;default:Q&1?ie(v,T,C,L,V,F,K,H,q):Q&6?I(v,T,C,L,V,F,K,H,q):(Q&64||Q&128)&&U.process(v,T,C,L,V,F,K,H,q,ee)}se!=null&&V&&Nc(se,v&&v.ref,F,T||v,!T)},D=(v,T,C,L)=>{if(v==null)r(T.el=c(T.children),C,L);else{const V=T.el=v.el;T.children!==v.children&&h(V,T.children)}},B=(v,T,C,L)=>{v==null?r(T.el=l(T.children||""),C,L):T.el=v.el},$=(v,T,C,L)=>{[v.el,v.anchor]=S(v.children,T,C,L,v.el,v.anchor)},j=({el:v,anchor:T},C,L)=>{let V;for(;v&&v!==T;)V=g(v),r(v,C,L),v=V;r(T,C,L)},W=({el:v,anchor:T})=>{let C;for(;v&&v!==T;)C=g(v),s(v),v=C;s(T)},ie=(v,T,C,L,V,F,K,H,q)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),v==null?pe(T,C,L,V,F,K,H,q):E(v,T,V,F,K,H,q)},pe=(v,T,C,L,V,F,K,H)=>{let q,U;const{props:se,shapeFlag:Q,transition:ne,dirs:te}=v;if(q=v.el=o(v.type,F,se&&se.is,se),Q&8?d(q,v.children):Q&16&&y(v.children,q,null,L,V,nc(v,F),K,H),te&&pr(v,null,L,"created"),A(q,v,v.scopeId,K,L),se){for(const Ae in se)Ae!=="value"&&!Js(Ae)&&i(q,Ae,null,se[Ae],F,L);"value"in se&&i(q,"value",null,se.value,F),(U=se.onVnodeBeforeMount)&&Yt(U,L,v)}te&&pr(v,null,L,"beforeMount");const oe=bv(V,ne);oe&&ne.beforeEnter(q),r(q,T,C),((U=se&&se.onVnodeMounted)||oe||te)&&Vt(()=>{U&&Yt(U,L,v),oe&&ne.enter(q),te&&pr(v,null,L,"mounted")},V)},A=(v,T,C,L,V)=>{if(C&&_(v,C),L)for(let F=0;F<L.length;F++)_(v,L[F]);if(V){let F=V.subTree;if(T===F||qp(F.type)&&(F.ssContent===T||F.ssFallback===T)){const K=V.vnode;A(v,K,K.scopeId,K.slotScopeIds,V.parent)}}},y=(v,T,C,L,V,F,K,H,q=0)=>{for(let U=q;U<v.length;U++){const se=v[U]=H?Ln(v[U]):Xt(v[U]);k(null,se,T,C,L,V,F,K,H)}},E=(v,T,C,L,V,F,K)=>{const H=T.el=v.el;let{patchFlag:q,dynamicChildren:U,dirs:se}=T;q|=v.patchFlag&16;const Q=v.props||ke,ne=T.props||ke;let te;if(C&&mr(C,!1),(te=ne.onVnodeBeforeUpdate)&&Yt(te,C,T,v),se&&pr(T,v,C,"beforeUpdate"),C&&mr(C,!0),(Q.innerHTML&&ne.innerHTML==null||Q.textContent&&ne.textContent==null)&&d(H,""),U?w(v.dynamicChildren,U,H,C,L,nc(T,V),F):K||me(v,T,H,null,C,L,nc(T,V),F,!1),q>0){if(q&16)b(H,Q,ne,C,V);else if(q&2&&Q.class!==ne.class&&i(H,"class",null,ne.class,V),q&4&&i(H,"style",Q.style,ne.style,V),q&8){const oe=T.dynamicProps;for(let Ae=0;Ae<oe.length;Ae++){const Te=oe[Ae],at=Q[Te],Qe=ne[Te];(Qe!==at||Te==="value")&&i(H,Te,at,Qe,V,C)}}q&1&&v.children!==T.children&&d(H,T.children)}else!K&&U==null&&b(H,Q,ne,C,V);((te=ne.onVnodeUpdated)||se)&&Vt(()=>{te&&Yt(te,C,T,v),se&&pr(T,v,C,"updated")},L)},w=(v,T,C,L,V,F,K)=>{for(let H=0;H<T.length;H++){const q=v[H],U=T[H],se=q.el&&(q.type===At||!Bs(q,U)||q.shapeFlag&70)?p(q.el):C;k(q,U,se,null,L,V,F,K,!0)}},b=(v,T,C,L,V)=>{if(T!==C){if(T!==ke)for(const F in T)!Js(F)&&!(F in C)&&i(v,F,T[F],null,V,L);for(const F in C){if(Js(F))continue;const K=C[F],H=T[F];K!==H&&F!=="value"&&i(v,F,H,K,V,L)}"value"in C&&i(v,"value",T.value,C.value,V)}},R=(v,T,C,L,V,F,K,H,q)=>{const U=T.el=v?v.el:c(""),se=T.anchor=v?v.anchor:c("");let{patchFlag:Q,dynamicChildren:ne,slotScopeIds:te}=T;te&&(H=H?H.concat(te):te),v==null?(r(U,C,L),r(se,C,L),y(T.children||[],C,se,V,F,K,H,q)):Q>0&&Q&64&&ne&&v.dynamicChildren?(w(v.dynamicChildren,ne,C,V,F,K,H),(T.key!=null||V&&T===V.subTree)&&Fp(v,T,!0)):me(v,T,C,se,V,F,K,H,q)},I=(v,T,C,L,V,F,K,H,q)=>{T.slotScopeIds=H,v==null?T.shapeFlag&512?V.ctx.activate(T,C,L,K,q):et(T,C,L,V,F,K,q):bt(v,T,q)},et=(v,T,C,L,V,F,K)=>{const H=v.component=qv(v,L,V);if(Ap(v)&&(H.ctx.renderer=ee),Hv(H,!1,K),H.asyncDep){if(V&&V.registerDep(H,Ne,K),!v.el){const q=H.subTree=We(Xn);B(null,q,T,C)}}else Ne(H,v,T,C,V,F,K)},bt=(v,T,C)=>{const L=T.component=v.component;if(Ov(v,T,C))if(L.asyncDep&&!L.asyncResolved){ce(L,T,C);return}else L.next=T,L.update();else T.el=v.el,L.vnode=T},Ne=(v,T,C,L,V,F,K)=>{const H=()=>{if(v.isMounted){let{next:Q,bu:ne,u:te,parent:oe,vnode:Ae}=v;{const ct=Up(v);if(ct){Q&&(Q.el=Ae.el,ce(v,Q,K)),ct.asyncDep.then(()=>{v.isUnmounted||H()});return}}let Te=Q,at;mr(v,!1),Q?(Q.el=Ae.el,ce(v,Q,K)):Q=Ae,ne&&mo(ne),(at=Q.props&&Q.props.onVnodeBeforeUpdate)&&Yt(at,oe,Q,Ae),mr(v,!0);const Qe=rc(v),tt=v.subTree;v.subTree=Qe,k(tt,Qe,p(tt.el),O(tt),v,V,F),Q.el=Qe.el,Te===null&&xv(v,Qe.el),te&&Vt(te,V),(at=Q.props&&Q.props.onVnodeUpdated)&&Vt(()=>Yt(at,oe,Q,Ae),V)}else{let Q;const{el:ne,props:te}=T,{bm:oe,m:Ae,parent:Te,root:at,type:Qe}=v,tt=ts(T);if(mr(v,!1),oe&&mo(oe),!tt&&(Q=te&&te.onVnodeBeforeMount)&&Yt(Q,Te,T),mr(v,!0),ne&&Pe){const ct=()=>{v.subTree=rc(v),Pe(ne,v.subTree,v,V,null)};tt&&Qe.__asyncHydrate?Qe.__asyncHydrate(ne,v,ct):ct()}else{at.ce&&at.ce._injectChildStyle(Qe);const ct=v.subTree=rc(v);k(null,ct,C,L,v,V,F),T.el=ct.el}if(Ae&&Vt(Ae,V),!tt&&(Q=te&&te.onVnodeMounted)){const ct=T;Vt(()=>Yt(Q,Te,ct),V)}(T.shapeFlag&256||Te&&ts(Te.vnode)&&Te.vnode.shapeFlag&256)&&v.a&&Vt(v.a,V),v.isMounted=!0,T=C=L=null}};v.scope.on();const q=v.effect=new ep(H);v.scope.off();const U=v.update=q.run.bind(q),se=v.job=q.runIfDirty.bind(q);se.i=v,se.id=v.uid,q.scheduler=()=>Cl(se),mr(v,!0),U()},ce=(v,T,C)=>{T.component=v;const L=v.vnode.props;v.vnode=T,v.next=null,yv(v,T.props,L,C),Iv(v,T.children,C),sr(),Sh(v),ir()},me=(v,T,C,L,V,F,K,H,q=!1)=>{const U=v&&v.children,se=v?v.shapeFlag:0,Q=T.children,{patchFlag:ne,shapeFlag:te}=T;if(ne>0){if(ne&128){jt(U,Q,C,L,V,F,K,H,q);return}else if(ne&256){Nt(U,Q,C,L,V,F,K,H,q);return}}te&8?(se&16&&Rt(U,V,F),Q!==U&&d(C,Q)):se&16?te&16?jt(U,Q,C,L,V,F,K,H,q):Rt(U,V,F,!0):(se&8&&d(C,""),te&16&&y(Q,C,L,V,F,K,H,q))},Nt=(v,T,C,L,V,F,K,H,q)=>{v=v||Xr,T=T||Xr;const U=v.length,se=T.length,Q=Math.min(U,se);let ne;for(ne=0;ne<Q;ne++){const te=T[ne]=q?Ln(T[ne]):Xt(T[ne]);k(v[ne],te,C,null,V,F,K,H,q)}U>se?Rt(v,V,F,!0,!1,Q):y(T,C,L,V,F,K,H,q,Q)},jt=(v,T,C,L,V,F,K,H,q)=>{let U=0;const se=T.length;let Q=v.length-1,ne=se-1;for(;U<=Q&&U<=ne;){const te=v[U],oe=T[U]=q?Ln(T[U]):Xt(T[U]);if(Bs(te,oe))k(te,oe,C,null,V,F,K,H,q);else break;U++}for(;U<=Q&&U<=ne;){const te=v[Q],oe=T[ne]=q?Ln(T[ne]):Xt(T[ne]);if(Bs(te,oe))k(te,oe,C,null,V,F,K,H,q);else break;Q--,ne--}if(U>Q){if(U<=ne){const te=ne+1,oe=te<se?T[te].el:L;for(;U<=ne;)k(null,T[U]=q?Ln(T[U]):Xt(T[U]),C,oe,V,F,K,H,q),U++}}else if(U>ne)for(;U<=Q;)Me(v[U],V,F,!0),U++;else{const te=U,oe=U,Ae=new Map;for(U=oe;U<=ne;U++){const vt=T[U]=q?Ln(T[U]):Xt(T[U]);vt.key!=null&&Ae.set(vt.key,U)}let Te,at=0;const Qe=ne-oe+1;let tt=!1,ct=0;const Cn=new Array(Qe);for(U=0;U<Qe;U++)Cn[U]=0;for(U=te;U<=Q;U++){const vt=v[U];if(at>=Qe){Me(vt,V,F,!0);continue}let Lt;if(vt.key!=null)Lt=Ae.get(vt.key);else for(Te=oe;Te<=ne;Te++)if(Cn[Te-oe]===0&&Bs(vt,T[Te])){Lt=Te;break}Lt===void 0?Me(vt,V,F,!0):(Cn[Lt-oe]=U+1,Lt>=ct?ct=Lt:tt=!0,k(vt,T[Lt],C,null,V,F,K,H,q),at++)}const Mr=tt?Rv(Cn):Xr;for(Te=Mr.length-1,U=Qe-1;U>=0;U--){const vt=oe+U,Lt=T[vt],Lr=vt+1<se?T[vt+1].el:L;Cn[U]===0?k(null,Lt,C,Lr,V,F,K,H,q):tt&&(Te<0||U!==Mr[Te]?Mt(Lt,C,Lr,2):Te--)}}},Mt=(v,T,C,L,V=null)=>{const{el:F,type:K,transition:H,children:q,shapeFlag:U}=v;if(U&6){Mt(v.component.subTree,T,C,L);return}if(U&128){v.suspense.move(T,C,L);return}if(U&64){K.move(v,T,C,ee);return}if(K===At){r(F,T,C);for(let Q=0;Q<q.length;Q++)Mt(q[Q],T,C,L);r(v.anchor,T,C);return}if(K===sc){j(v,T,C);return}if(L!==2&&U&1&&H)if(L===0)H.beforeEnter(F),r(F,T,C),Vt(()=>H.enter(F),V);else{const{leave:Q,delayLeave:ne,afterLeave:te}=H,oe=()=>r(F,T,C),Ae=()=>{Q(F,()=>{oe(),te&&te()})};ne?ne(F,oe,Ae):Ae()}else r(F,T,C)},Me=(v,T,C,L=!1,V=!1)=>{const{type:F,props:K,ref:H,children:q,dynamicChildren:U,shapeFlag:se,patchFlag:Q,dirs:ne,cacheIndex:te}=v;if(Q===-2&&(V=!1),H!=null&&Nc(H,null,C,v,!0),te!=null&&(T.renderCache[te]=void 0),se&256){T.ctx.deactivate(v);return}const oe=se&1&&ne,Ae=!ts(v);let Te;if(Ae&&(Te=K&&K.onVnodeBeforeUnmount)&&Yt(Te,T,v),se&6)Qt(v.component,C,L);else{if(se&128){v.suspense.unmount(C,L);return}oe&&pr(v,null,T,"beforeUnmount"),se&64?v.type.remove(v,T,C,ee,L):U&&!U.hasOnce&&(F!==At||Q>0&&Q&64)?Rt(U,T,C,!1,!0):(F===At&&Q&384||!V&&se&16)&&Rt(q,T,C),L&&Le(v)}(Ae&&(Te=K&&K.onVnodeUnmounted)||oe)&&Vt(()=>{Te&&Yt(Te,T,v),oe&&pr(v,null,T,"unmounted")},C)},Le=v=>{const{type:T,el:C,anchor:L,transition:V}=v;if(T===At){Pn(C,L);return}if(T===sc){W(v);return}const F=()=>{s(C),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(v.shapeFlag&1&&V&&!V.persisted){const{leave:K,delayLeave:H}=V,q=()=>K(C,F);H?H(v.el,F,q):q()}else F()},Pn=(v,T)=>{let C;for(;v!==T;)C=g(v),s(v),v=C;s(T)},Qt=(v,T,C)=>{const{bum:L,scope:V,job:F,subTree:K,um:H,m:q,a:U}=v;Oh(q),Oh(U),L&&mo(L),V.stop(),F&&(F.flags|=8,Me(K,v,T,C)),H&&Vt(H,T),Vt(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Rt=(v,T,C,L=!1,V=!1,F=0)=>{for(let K=F;K<v.length;K++)Me(v[K],T,C,L,V)},O=v=>{if(v.shapeFlag&6)return O(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=g(v.anchor||v.el),C=T&&T[Hy];return C?g(C):T};let J=!1;const G=(v,T,C)=>{v==null?T._vnode&&Me(T._vnode,null,null,!0):k(T._vnode||null,v,T,null,null,null,C),T._vnode=v,J||(J=!0,Sh(),Ep(),J=!1)},ee={p:k,um:Me,m:Mt,r:Le,mt:et,mc:y,pc:me,pbc:w,n:O,o:t};let ye,Pe;return{render:G,hydrate:ye,createApp:mv(G,ye)}}function nc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function bv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fp(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Ln(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Fp(o,c)),c.type===ha&&(c.el=o.el)}}function Rv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Up(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Up(e)}function Oh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Sv=Symbol.for("v-scx"),Pv=()=>Bt(Sv);function Ir(t,e,n){return Bp(t,e,n)}function Bp(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=Ze({},n),l=e&&r||!e&&i!=="post";let h;if(gi){if(i==="sync"){const _=Pv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=tn,_.resume=tn,_.pause=tn,_}}const d=st;c.call=(_,S,k)=>cn(_,d,S,k);let p=!1;i==="post"?c.scheduler=_=>{Vt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,S)=>{S?_():Cl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const g=By(t,e,c);return gi&&(h?h.push(g):l&&g()),g}function Cv(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?$p(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=ki(this),c=Bp(s,i.bind(r),n);return o(),c}function $p(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const kv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$t(e)}Modifiers`]||t[`${kr(e)}Modifiers`];function Nv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&kv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>ze(d)?d.trim():d)),o.number&&(s=n.map(bc)));let c,l=r[c=Ya(e)]||r[c=Ya($t(e))];!l&&i&&(l=r[c=Ya(kr(e))]),l&&cn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,cn(h,t,6,s)}}function jp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=h=>{const d=jp(h,e,!0);d&&(c=!0,Ze(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(xe(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):Ze(o,i),xe(t)&&r.set(t,o),o)}function ua(t,e){return!t||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,kr(e))||be(t,e))}function rc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:g,setupState:_,ctx:S,inheritAttrs:k}=t,D=Vo(t);let B,$;try{if(n.shapeFlag&4){const W=s||r,ie=W;B=Xt(h.call(ie,W,d,p,_,g,S)),$=c}else{const W=e;B=Xt(W.length>1?W(p,{attrs:c,slots:o,emit:l}):W(p,null)),$=e.props?c:Dv(c)}}catch(W){ti.length=0,aa(W,t,1),B=We(Xn)}let j=B;if($&&k!==!1){const W=Object.keys($),{shapeFlag:ie}=j;W.length&&ie&7&&(i&&W.some(gl)&&($=Vv($,i)),j=cs(j,$,!1,!0))}return n.dirs&&(j=cs(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&kl(j,n.transition),B=j,Vo(D),B}const Dv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ea(n))&&((e||(e={}))[n]=t[n]);return e},Vv=(t,e)=>{const n={};for(const r in t)(!gl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ov(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!ua(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?xh(r,o,h):!0:!!o;return!1}function xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ua(n,i))return!0}return!1}function xv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const qp=t=>t.__isSuspense;function Mv(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):qy(t)}const At=Symbol.for("v-fgt"),ha=Symbol.for("v-txt"),Xn=Symbol.for("v-cmt"),sc=Symbol.for("v-stc"),ti=[];let Ot=null;function qe(t=!1){ti.push(Ot=t?null:[])}function Lv(){ti.pop(),Ot=ti[ti.length-1]||null}let pi=1;function Mh(t){pi+=t,t<0&&Ot&&(Ot.hasOnce=!0)}function Hp(t){return t.dynamicChildren=pi>0?Ot||Xr:null,Lv(),pi>0&&Ot&&Ot.push(t),t}function Pt(t,e,n,r,s,i){return Hp(Y(t,e,n,r,s,i,!0))}function as(t,e,n,r,s){return Hp(We(t,e,n,r,s,!0))}function mi(t){return t?t.__v_isVNode===!0:!1}function Bs(t,e){return t.type===e.type&&t.key===e.key}const Wp=({key:t})=>t??null,_o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||$e(t)||fe(t)?{i:Je,r:t,k:e,f:!!n}:t:null);function Y(t,e=null,n=null,r=0,s=null,i=t===At?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wp(e),ref:e&&_o(e),scopeId:Ip,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Je};return c?(Ml(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),pi>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const We=Fv;function Fv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sv)&&(t=Xn),mi(t)){const c=cs(t,e,!0);return n&&Ml(c,n),pi>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(Qv(t)&&(t=t.__vccOpts),e){e=Uv(e);let{class:c,style:l}=e;c&&!ze(c)&&(e.class=Jn(c)),xe(l)&&(Sl(l)&&!ue(l)&&(l=Ze({},l)),e.style=vl(l))}const o=ze(t)?1:qp(t)?128:Wy(t)?64:xe(t)?4:fe(t)?2:0;return Y(t,e,n,r,s,o,i,!0)}function Uv(t){return t?Sl(t)||Np(t)?Ze({},t):t:null}function cs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Bv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Wp(h),ref:e&&e.ref?n&&i?ue(i)?i.concat(_o(e)):[i,_o(e)]:_o(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&kl(d,l.clone(d)),d}function xo(t=" ",e=0){return We(ha,null,t,e)}function da(t="",e=!1){return e?(qe(),as(Xn,null,t)):We(Xn,null,t)}function Xt(t){return t==null||typeof t=="boolean"?We(Xn):ue(t)?We(At,null,t.slice()):mi(t)?Ln(t):We(ha,null,String(t))}function Ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cs(t)}function Ml(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ml(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Np(e)?e._ctx=Je:s===3&&Je&&(Je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Je},n=32):(e=String(e),r&64?(n=16,e=[xo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Jn([e.class,r.class]));else if(s==="style")e.style=vl([e.style,r.style]);else if(ea(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Yt(t,e,n,r=null){cn(t,e,7,[n,r])}const $v=Pp();let jv=0;function qv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$v,i={uid:jv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vp(r,s),emitsOptions:jp(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Nv.bind(null,i),t.ce&&t.ce(i),i}let st=null,Mo,Mc;{const t=sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Mo=e("__VUE_INSTANCE_SETTERS__",n=>st=n),Mc=e("__VUE_SSR_SETTERS__",n=>gi=n)}const ki=t=>{const e=st;return Mo(t),t.scope.on(),()=>{t.scope.off(),Mo(e)}},Lh=()=>{st&&st.scope.off(),Mo(null)};function zp(t){return t.vnode.shapeFlag&4}let gi=!1;function Hv(t,e=!1,n=!1){e&&Mc(e);const{props:r,children:s}=t.vnode,i=zp(t);_v(t,r,i,e),Tv(t,s,n);const o=i?Wv(t,e):void 0;return e&&Mc(!1),o}function Wv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,cv);const{setup:r}=n;if(r){sr();const s=t.setupContext=r.length>1?Kv(t):null,i=ki(t),o=Ci(r,t,0,[t.props,s]),c=Hf(o);if(ir(),i(),(c||t.sp)&&!ts(t)&&wp(t),c){if(o.then(Lh,Lh),e)return o.then(l=>{Fh(t,l,e)}).catch(l=>{aa(l,t,0)});t.asyncDep=o}else Fh(t,o,e)}else Kp(t,e)}function Fh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=_p(e)),Kp(t,n)}let Uh;function Kp(t,e,n){const r=t.type;if(!t.render){if(!e&&Uh&&!r.render){const s=r.template||Ol(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=Ze(Ze({isCustomElement:i,delimiters:c},o),l);r.render=Uh(s,h)}}t.render=r.render||tn}{const s=ki(t);sr();try{lv(t)}finally{ir(),s()}}}const zv={get(t,e){return ft(t,"get",""),t[e]}};function Kv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,zv),slots:t.slots,emit:t.emit,expose:e}}function fa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_p(oa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ei)return ei[n](t)},has(e,n){return n in e||n in ei}})):t.proxy}function Gv(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function Qv(t){return fe(t)&&"__vccOpts"in t}const gt=(t,e)=>Fy(t,e,gi);function Gp(t,e,n){const r=arguments.length;return r===2?xe(e)&&!ue(e)?mi(e)?We(t,null,[e]):We(t,e):We(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mi(n)&&(n=[n]),We(t,e,n))}const Yv="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lc;const Bh=typeof window<"u"&&window.trustedTypes;if(Bh)try{Lc=Bh.createPolicy("vue",{createHTML:t=>t})}catch{}const Qp=Lc?t=>Lc.createHTML(t):t=>t,Jv="http://www.w3.org/2000/svg",Xv="http://www.w3.org/1998/Math/MathML",pn=typeof document<"u"?document:null,$h=pn&&pn.createElement("template"),Zv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?pn.createElementNS(Jv,t):e==="mathml"?pn.createElementNS(Xv,t):n?pn.createElement(t,{is:n}):pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>pn.createTextNode(t),createComment:t=>pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$h.innerHTML=Qp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=$h.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},eE=Symbol("_vtc");function tE(t,e,n){const r=t[eE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jh=Symbol("_vod"),nE=Symbol("_vsh"),rE=Symbol(""),sE=/(^|;)\s*display\s*:/;function iE(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&yo(r,c,"")}else for(const o in e)n[o]==null&&yo(r,o,"");for(const o in n)o==="display"&&(i=!0),yo(r,o,n[o])}else if(s){if(e!==n){const o=r[rE];o&&(n+=";"+o),r.cssText=n,i=sE.test(n)}}else e&&t.removeAttribute("style");jh in t&&(t[jh]=i?r.display:"",t[nE]&&(r.display="none"))}const qh=/\s*!important$/;function yo(t,e,n){if(ue(n))n.forEach(r=>yo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=oE(t,e);qh.test(n)?t.setProperty(kr(r),n.replace(qh,""),"important"):t[r]=n}}const Hh=["Webkit","Moz","ms"],ic={};function oE(t,e){const n=ic[e];if(n)return n;let r=$t(e);if(r!=="filter"&&r in t)return ic[e]=r;r=ra(r);for(let s=0;s<Hh.length;s++){const i=Hh[s]+r;if(i in t)return ic[e]=i}return e}const Wh="http://www.w3.org/1999/xlink";function zh(t,e,n,r,s,i=hy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wh,e.slice(6,e.length)):t.setAttributeNS(Wh,e,n):n==null||i&&!Gf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":bn(n)?String(n):n)}function Kh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Gf(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Wr(t,e,n,r){t.addEventListener(e,n,r)}function aE(t,e,n,r){t.removeEventListener(e,n,r)}const Gh=Symbol("_vei");function cE(t,e,n,r,s=null){const i=t[Gh]||(t[Gh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=lE(e);if(r){const h=i[e]=dE(r,s);Wr(t,c,h,l)}else o&&(aE(t,c,o,l),i[e]=void 0)}}const Qh=/(?:Once|Passive|Capture)$/;function lE(t){let e;if(Qh.test(t)){e={};let r;for(;r=t.match(Qh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kr(t.slice(2)),e]}let oc=0;const uE=Promise.resolve(),hE=()=>oc||(uE.then(()=>oc=0),oc=Date.now());function dE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;cn(fE(r,n.value),e,5,[r])};return n.value=t,n.attached=hE(),n}function fE(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?tE(t,r,o):e==="style"?iE(t,n,r):ea(e)?gl(e)||cE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mE(t,e,r,o))?(Kh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?Kh(t,$t(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zh(t,e,r,o))};function mE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yh(e)&&ze(n)?!1:e in t}const Jh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>mo(e,n):e};function gE(t){t.target.composing=!0}function Xh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ac=Symbol("_assign"),Zh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ac]=Jh(s);const i=r||s.props&&s.props.type==="number";Wr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=bc(c)),t[ac](c)}),n&&Wr(t,"change",()=>{t.value=t.value.trim()}),e||(Wr(t,"compositionstart",gE),Wr(t,"compositionend",Xh),Wr(t,"change",Xh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ac]=Jh(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?bc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},_E=["ctrl","shift","alt","meta"],yE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_E.some(n=>t[`${n}Key`]&&!e.includes(n))},ni=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=yE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},vE=Ze({patchProp:pE},Zv);let ed;function EE(){return ed||(ed=wv(vE))}const TE=(...t)=>{const e=EE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=wE(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,IE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function IE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wE(t){return ze(t)?document.querySelector(t):t}var AE=!1;/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Yp;const pa=t=>Yp=t,Jp=Symbol();function Fc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ri;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ri||(ri={}));function bE(){const t=Xf(!0),e=t.run(()=>Ut({}));let n=[],r=[];const s=oa({install(i){pa(s),s._a=i,i.provide(Jp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!AE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Xp=()=>{};function td(t,e,n,r=Xp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&El()&&Zf(s),s}function qr(t,...e){t.slice().forEach(n=>{n(...e)})}const RE=t=>t(),nd=Symbol(),cc=Symbol();function Uc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Fc(s)&&Fc(r)&&t.hasOwnProperty(n)&&!$e(r)&&!Wn(r)?t[n]=Uc(s,r):t[n]=r}return t}const SE=Symbol();function PE(t){return!Fc(t)||!t.hasOwnProperty(SE)}const{assign:xn}=Object;function CE(t){return!!($e(t)&&t.effect)}function kE(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=Oy(n.state.value[t]);return xn(d,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=oa(gt(()=>{pa(n);const _=n._s.get(t);return o[g].call(_,_)})),p),{}))}return l=Zp(t,h,e,n,r,!0),l}function Zp(t,e,n={},r,s,i){let o;const c=xn({actions:{}},n),l={deep:!0};let h,d,p=[],g=[],_;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),Ut({});let k;function D(y){let E;h=d=!1,typeof y=="function"?(y(r.state.value[t]),E={type:ri.patchFunction,storeId:t,events:_}):(Uc(r.state.value[t],y),E={type:ri.patchObject,payload:y,storeId:t,events:_});const w=k=Symbol();Pl().then(()=>{k===w&&(h=!0)}),d=!0,qr(p,E,r.state.value[t])}const B=i?function(){const{state:E}=n,w=E?E():{};this.$patch(b=>{xn(b,w)})}:Xp;function $(){o.stop(),p=[],g=[],r._s.delete(t)}const j=(y,E="")=>{if(nd in y)return y[cc]=E,y;const w=function(){pa(r);const b=Array.from(arguments),R=[],I=[];function et(ce){R.push(ce)}function bt(ce){I.push(ce)}qr(g,{args:b,name:w[cc],store:ie,after:et,onError:bt});let Ne;try{Ne=y.apply(this&&this.$id===t?this:ie,b)}catch(ce){throw qr(I,ce),ce}return Ne instanceof Promise?Ne.then(ce=>(qr(R,ce),ce)).catch(ce=>(qr(I,ce),Promise.reject(ce))):(qr(R,Ne),Ne)};return w[nd]=!0,w[cc]=E,w},W={_p:r,$id:t,$onAction:td.bind(null,g),$patch:D,$reset:B,$subscribe(y,E={}){const w=td(p,y,E.detached,()=>b()),b=o.run(()=>Ir(()=>r.state.value[t],R=>{(E.flush==="sync"?d:h)&&y({storeId:t,type:ri.direct,events:_},R)},xn({},l,E)));return w},$dispose:$},ie=Nr(W);r._s.set(t,ie);const A=(r._a&&r._a.runWithContext||RE)(()=>r._e.run(()=>(o=Xf()).run(()=>e({action:j}))));for(const y in A){const E=A[y];if($e(E)&&!CE(E)||Wn(E))i||(S&&PE(E)&&($e(E)?E.value=S[y]:Uc(E,S[y])),r.state.value[t][y]=E);else if(typeof E=="function"){const w=j(E,y);A[y]=w,c.actions[y]=E}}return xn(ie,A),xn(we(ie),A),Object.defineProperty(ie,"$state",{get:()=>r.state.value[t],set:y=>{D(E=>{xn(E,y)})}}),r._p.forEach(y=>{xn(ie,o.run(()=>y({store:ie,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(ie.$state,S),h=!0,d=!0,ie}/*! #__NO_SIDE_EFFECTS__ */function em(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,l){const h=gv();return c=c||(h?Bt(Jp,null):null),c&&pa(c),c=Yp,c._s.has(r)||(i?Zp(r,e,s,c):kE(r,s,c)),c._s.get(r)}return o.$id=r,o}function NE(t){return El()?(Zf(t),!0):!1}function Zt(t){return typeof t=="function"?t():_t(t)}const tm=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const DE=Object.prototype.toString,VE=t=>DE.call(t)==="[object Object]",vo=()=>{},OE=xE();function xE(){var t,e;return tm&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}const ME=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i,LE=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function FE(t,e,n,r){let s=t<12?"AM":"PM";return r&&(s=s.split("").reduce((i,o)=>i+=`${o}.`,"")),n?s.toLowerCase():s}function gr(t){const e=["th","st","nd","rd"],n=t%100;return t+(e[(n-20)%10]||e[n]||e[0])}function UE(t,e,n={}){var r;const s=t.getFullYear(),i=t.getMonth(),o=t.getDate(),c=t.getHours(),l=t.getMinutes(),h=t.getSeconds(),d=t.getMilliseconds(),p=t.getDay(),g=(r=n.customMeridiem)!=null?r:FE,_={Yo:()=>gr(s),YY:()=>String(s).slice(-2),YYYY:()=>s,M:()=>i+1,Mo:()=>gr(i+1),MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(Zt(n.locales),{month:"short"}),MMMM:()=>t.toLocaleDateString(Zt(n.locales),{month:"long"}),D:()=>String(o),Do:()=>gr(o),DD:()=>`${o}`.padStart(2,"0"),H:()=>String(c),Ho:()=>gr(c),HH:()=>`${c}`.padStart(2,"0"),h:()=>`${c%12||12}`.padStart(1,"0"),ho:()=>gr(c%12||12),hh:()=>`${c%12||12}`.padStart(2,"0"),m:()=>String(l),mo:()=>gr(l),mm:()=>`${l}`.padStart(2,"0"),s:()=>String(h),so:()=>gr(h),ss:()=>`${h}`.padStart(2,"0"),SSS:()=>`${d}`.padStart(3,"0"),d:()=>p,dd:()=>t.toLocaleDateString(Zt(n.locales),{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(Zt(n.locales),{weekday:"short"}),dddd:()=>t.toLocaleDateString(Zt(n.locales),{weekday:"long"}),A:()=>g(c,l),AA:()=>g(c,l,!1,!0),a:()=>g(c,l,!0),aa:()=>g(c,l,!0,!0)};return e.replace(LE,(S,k)=>{var D,B;return(B=k??((D=_[S])==null?void 0:D.call(_)))!=null?B:S})}function BE(t){if(t===null)return new Date(Number.NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(ME);if(e){const n=e[2]-1||0,r=(e[7]||"0").substring(0,3);return new Date(e[1],n,e[3]||1,e[4]||0,e[5]||0,e[6]||0,r)}}return new Date(t)}function $E(t,e="HH:mm:ss",n={}){return gt(()=>UE(BE(Zt(t)),Zt(e),n))}const nm=tm?window:void 0;function Hs(t){var e;const n=Zt(t);return(e=n==null?void 0:n.$el)!=null?e:n}function lc(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=nm):[e,n,r,s]=t,!e)return vo;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(d=>d()),i.length=0},c=(d,p,g,_)=>(d.addEventListener(p,g,_),()=>d.removeEventListener(p,g,_)),l=Ir(()=>[Hs(e),Zt(s)],([d,p])=>{if(o(),!d)return;const g=VE(p)?{...p}:p;i.push(...n.flatMap(_=>r.map(S=>c(d,_,S,g))))},{immediate:!0,flush:"post"}),h=()=>{l(),o()};return NE(h),h}let rd=!1;function rm(t,e,n={}){const{window:r=nm,ignore:s=[],capture:i=!0,detectIframe:o=!1}=n;if(!r)return vo;OE&&!rd&&(rd=!0,Array.from(r.document.body.children).forEach(_=>_.addEventListener("click",vo)),r.document.documentElement.addEventListener("click",vo));let c=!0;const l=_=>Zt(s).some(S=>{if(typeof S=="string")return Array.from(r.document.querySelectorAll(S)).some(k=>k===_.target||_.composedPath().includes(k));{const k=Hs(S);return k&&(_.target===k||_.composedPath().includes(k))}}),h=_=>{const S=Hs(t);if(!(!S||S===_.target||_.composedPath().includes(S))){if(_.detail===0&&(c=!l(_)),!c){c=!0;return}e(_)}};let d=!1;const p=[lc(r,"click",_=>{d||(d=!0,setTimeout(()=>{d=!1},0),h(_))},{passive:!0,capture:i}),lc(r,"pointerdown",_=>{const S=Hs(t);c=!l(_)&&!!(S&&!_.composedPath().includes(S))},{passive:!0}),o&&lc(r,"blur",_=>{setTimeout(()=>{var S;const k=Hs(t);((S=r.document.activeElement)==null?void 0:S.tagName)==="IFRAME"&&!(k!=null&&k.contains(r.document.activeElement))&&e(_)},0)})].filter(Boolean);return()=>p.forEach(_=>_())}var sd={};/**
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
 */const sm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(g=64)),r.push(n[d],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new qE;const g=i<<2|c>>4;if(r.push(g),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const S=h<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HE=function(t){const e=sm(t);return im.encodeByteArray(e,!0)},Lo=function(t){return HE(t).replace(/\./g,"")},om=function(t){try{return im.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function WE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zE=()=>WE().__FIREBASE_DEFAULTS__,KE=()=>{if(typeof process>"u"||typeof sd>"u")return;const t=sd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&om(t[1]);return e&&JSON.parse(e)},ma=()=>{try{return zE()||KE()||GE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},am=t=>{var e,n;return(n=(e=ma())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},QE=t=>{const e=am(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cm=()=>{var t;return(t=ma())===null||t===void 0?void 0:t.config},lm=t=>{var e;return(e=ma())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class YE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function JE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lo(JSON.stringify(n)),Lo(JSON.stringify(o)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function ZE(){var t;const e=(t=ma())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rT(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sT(){return!ZE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iT(){try{return typeof indexedDB=="object"}catch{return!1}}function oT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const aT="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aT,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Sn(s,c,r)}}function cT(t,e){return t.replace(lT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lT=/\{\$([^}]+)}/g;function uT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(id(i)&&id(o)){if(!Fo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function id(t){return t!==null&&typeof t=="object"}/**
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
 */function Di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hT(t,e){const n=new dT(t,e);return n.subscribe.bind(n)}class dT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=uc),s.error===void 0&&(s.error=uc),s.complete===void 0&&(s.complete=uc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uc(){}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class Rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class pT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gT(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mT(t){return t===yr?void 0:t}function gT(t){return t.instantiationMode==="EAGER"}/**
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
 */class _T{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const yT={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},vT=ge.INFO,ET={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},TT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ET[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ll{constructor(e){this.name=e,this._logLevel=vT,this._logHandler=TT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const IT=(t,e)=>e.some(n=>t instanceof n);let od,ad;function wT(){return od||(od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AT(){return ad||(ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const um=new WeakMap,Bc=new WeakMap,hm=new WeakMap,hc=new WeakMap,Fl=new WeakMap;function bT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(zn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&um.set(n,t)}).catch(()=>{}),Fl.set(e,t),e}function RT(t){if(Bc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Bc.set(t,e)}let $c={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ST(t){$c=t($c)}function PT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dc(this),e,...n);return hm.set(r,e.sort?e.sort():[e]),zn(r)}:AT().includes(t)?function(...e){return t.apply(dc(this),e),zn(um.get(this))}:function(...e){return zn(t.apply(dc(this),e))}}function CT(t){return typeof t=="function"?PT(t):(t instanceof IDBTransaction&&RT(t),IT(t,wT())?new Proxy(t,$c):t)}function zn(t){if(t instanceof IDBRequest)return bT(t);if(hc.has(t))return hc.get(t);const e=CT(t);return e!==t&&(hc.set(t,e),Fl.set(e,t)),e}const dc=t=>Fl.get(t);function kT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zn(o.result),l.oldVersion,l.newVersion,zn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const NT=["get","getKey","getAll","getAllKeys","count"],DT=["put","add","delete","clear"],fc=new Map;function cd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=DT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||NT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return fc.set(e,i),i}ST(t=>({...t,get:(e,n,r)=>cd(e,n)||t.get(e,n,r),has:(e,n)=>!!cd(e,n)||t.has(e,n)}));/**
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
 */class VT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jc="@firebase/app",ld="0.10.15";/**
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
 */const Tn=new Ll("@firebase/app"),xT="@firebase/app-compat",MT="@firebase/analytics-compat",LT="@firebase/analytics",FT="@firebase/app-check-compat",UT="@firebase/app-check",BT="@firebase/auth",$T="@firebase/auth-compat",jT="@firebase/database",qT="@firebase/data-connect",HT="@firebase/database-compat",WT="@firebase/functions",zT="@firebase/functions-compat",KT="@firebase/installations",GT="@firebase/installations-compat",QT="@firebase/messaging",YT="@firebase/messaging-compat",JT="@firebase/performance",XT="@firebase/performance-compat",ZT="@firebase/remote-config",eI="@firebase/remote-config-compat",tI="@firebase/storage",nI="@firebase/storage-compat",rI="@firebase/firestore",sI="@firebase/vertexai",iI="@firebase/firestore-compat",oI="firebase",aI="11.0.1";/**
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
 */const qc="[DEFAULT]",cI={[jc]:"fire-core",[xT]:"fire-core-compat",[LT]:"fire-analytics",[MT]:"fire-analytics-compat",[UT]:"fire-app-check",[FT]:"fire-app-check-compat",[BT]:"fire-auth",[$T]:"fire-auth-compat",[jT]:"fire-rtdb",[qT]:"fire-data-connect",[HT]:"fire-rtdb-compat",[WT]:"fire-fn",[zT]:"fire-fn-compat",[KT]:"fire-iid",[GT]:"fire-iid-compat",[QT]:"fire-fcm",[YT]:"fire-fcm-compat",[JT]:"fire-perf",[XT]:"fire-perf-compat",[ZT]:"fire-rc",[eI]:"fire-rc-compat",[tI]:"fire-gcs",[nI]:"fire-gcs-compat",[rI]:"fire-fst",[iI]:"fire-fst-compat",[sI]:"fire-vertex","fire-js":"fire-js",[oI]:"fire-js-all"};/**
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
 */const Uo=new Map,lI=new Map,Hc=new Map;function ud(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(Hc.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,t);for(const n of Uo.values())ud(n,t);for(const n of lI.values())ud(n,t);return!0}function Ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t.settings!==void 0}/**
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
 */const uI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new Ni("app","Firebase",uI);/**
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
 */class hI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const Es=aI;function dm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(n||(n=cm()),!n)throw Kn.create("no-options");const i=Uo.get(s);if(i){if(Fo(n,i.options)&&Fo(r,i.config))return i;throw Kn.create("duplicate-app",{appName:s})}const o=new _T(s);for(const l of Hc.values())o.addComponent(l);const c=new hI(n,r,o);return Uo.set(s,c),c}function fm(t=qc){const e=Uo.get(t);if(!e&&t===qc&&cm())return dm();if(!e)throw Kn.create("no-app",{appName:t});return e}function Gn(t,e,n){var r;let s=(r=cI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(c.join(" "));return}ls(new Rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dI="firebase-heartbeat-database",fI=1,_i="firebase-heartbeat-store";let pc=null;function pm(){return pc||(pc=kT(dI,fI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_i)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),pc}async function pI(t){try{const n=(await pm()).transaction(_i),r=await n.objectStore(_i).get(mm(t));return await n.done,r}catch(e){if(e instanceof Sn)Tn.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function hd(t,e){try{const r=(await pm()).transaction(_i,"readwrite");await r.objectStore(_i).put(e,mm(t)),await r.done}catch(n){if(n instanceof Sn)Tn.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function mm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mI=1024,gI=30*24*60*60*1e3;class _I{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=gI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dd(),{heartbeatsToSend:r,unsentEntries:s}=yI(this._heartbeatsCache.heartbeats),i=Lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Tn.warn(n),""}}}function dd(){return new Date().toISOString().substring(0,10)}function yI(t,e=mI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iT()?oT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fd(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function EI(t){ls(new Rr("platform-logger",e=>new VT(e),"PRIVATE")),ls(new Rr("heartbeat",e=>new _I(e),"PRIVATE")),Gn(jc,ld,t),Gn(jc,ld,"esm2017"),Gn("fire-js","")}EI("");var TI="firebase",II="11.0.1";/**
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
 */Gn(TI,II,"app");var pd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wr,gm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function E(){}E.prototype=y.prototype,A.D=y.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(w,b,R){for(var I=Array(arguments.length-2),et=2;et<arguments.length;et++)I[et-2]=arguments[et];return y.prototype[b].apply(w,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,E){E||(E=0);var w=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)w[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;16>b;++b)w[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=A.g[0],E=A.g[1],b=A.g[2];var R=A.g[3],I=y+(R^E&(b^R))+w[0]+3614090360&4294967295;y=E+(I<<7&4294967295|I>>>25),I=R+(b^y&(E^b))+w[1]+3905402710&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(E^R&(y^E))+w[2]+606105819&4294967295,b=R+(I<<17&4294967295|I>>>15),I=E+(y^b&(R^y))+w[3]+3250441966&4294967295,E=b+(I<<22&4294967295|I>>>10),I=y+(R^E&(b^R))+w[4]+4118548399&4294967295,y=E+(I<<7&4294967295|I>>>25),I=R+(b^y&(E^b))+w[5]+1200080426&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(E^R&(y^E))+w[6]+2821735955&4294967295,b=R+(I<<17&4294967295|I>>>15),I=E+(y^b&(R^y))+w[7]+4249261313&4294967295,E=b+(I<<22&4294967295|I>>>10),I=y+(R^E&(b^R))+w[8]+1770035416&4294967295,y=E+(I<<7&4294967295|I>>>25),I=R+(b^y&(E^b))+w[9]+2336552879&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(E^R&(y^E))+w[10]+4294925233&4294967295,b=R+(I<<17&4294967295|I>>>15),I=E+(y^b&(R^y))+w[11]+2304563134&4294967295,E=b+(I<<22&4294967295|I>>>10),I=y+(R^E&(b^R))+w[12]+1804603682&4294967295,y=E+(I<<7&4294967295|I>>>25),I=R+(b^y&(E^b))+w[13]+4254626195&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(E^R&(y^E))+w[14]+2792965006&4294967295,b=R+(I<<17&4294967295|I>>>15),I=E+(y^b&(R^y))+w[15]+1236535329&4294967295,E=b+(I<<22&4294967295|I>>>10),I=y+(b^R&(E^b))+w[1]+4129170786&4294967295,y=E+(I<<5&4294967295|I>>>27),I=R+(E^b&(y^E))+w[6]+3225465664&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^E&(R^y))+w[11]+643717713&4294967295,b=R+(I<<14&4294967295|I>>>18),I=E+(R^y&(b^R))+w[0]+3921069994&4294967295,E=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(E^b))+w[5]+3593408605&4294967295,y=E+(I<<5&4294967295|I>>>27),I=R+(E^b&(y^E))+w[10]+38016083&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^E&(R^y))+w[15]+3634488961&4294967295,b=R+(I<<14&4294967295|I>>>18),I=E+(R^y&(b^R))+w[4]+3889429448&4294967295,E=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(E^b))+w[9]+568446438&4294967295,y=E+(I<<5&4294967295|I>>>27),I=R+(E^b&(y^E))+w[14]+3275163606&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^E&(R^y))+w[3]+4107603335&4294967295,b=R+(I<<14&4294967295|I>>>18),I=E+(R^y&(b^R))+w[8]+1163531501&4294967295,E=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(E^b))+w[13]+2850285829&4294967295,y=E+(I<<5&4294967295|I>>>27),I=R+(E^b&(y^E))+w[2]+4243563512&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^E&(R^y))+w[7]+1735328473&4294967295,b=R+(I<<14&4294967295|I>>>18),I=E+(R^y&(b^R))+w[12]+2368359562&4294967295,E=b+(I<<20&4294967295|I>>>12),I=y+(E^b^R)+w[5]+4294588738&4294967295,y=E+(I<<4&4294967295|I>>>28),I=R+(y^E^b)+w[8]+2272392833&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^E)+w[11]+1839030562&4294967295,b=R+(I<<16&4294967295|I>>>16),I=E+(b^R^y)+w[14]+4259657740&4294967295,E=b+(I<<23&4294967295|I>>>9),I=y+(E^b^R)+w[1]+2763975236&4294967295,y=E+(I<<4&4294967295|I>>>28),I=R+(y^E^b)+w[4]+1272893353&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^E)+w[7]+4139469664&4294967295,b=R+(I<<16&4294967295|I>>>16),I=E+(b^R^y)+w[10]+3200236656&4294967295,E=b+(I<<23&4294967295|I>>>9),I=y+(E^b^R)+w[13]+681279174&4294967295,y=E+(I<<4&4294967295|I>>>28),I=R+(y^E^b)+w[0]+3936430074&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^E)+w[3]+3572445317&4294967295,b=R+(I<<16&4294967295|I>>>16),I=E+(b^R^y)+w[6]+76029189&4294967295,E=b+(I<<23&4294967295|I>>>9),I=y+(E^b^R)+w[9]+3654602809&4294967295,y=E+(I<<4&4294967295|I>>>28),I=R+(y^E^b)+w[12]+3873151461&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^E)+w[15]+530742520&4294967295,b=R+(I<<16&4294967295|I>>>16),I=E+(b^R^y)+w[2]+3299628645&4294967295,E=b+(I<<23&4294967295|I>>>9),I=y+(b^(E|~R))+w[0]+4096336452&4294967295,y=E+(I<<6&4294967295|I>>>26),I=R+(E^(y|~b))+w[7]+1126891415&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~E))+w[14]+2878612391&4294967295,b=R+(I<<15&4294967295|I>>>17),I=E+(R^(b|~y))+w[5]+4237533241&4294967295,E=b+(I<<21&4294967295|I>>>11),I=y+(b^(E|~R))+w[12]+1700485571&4294967295,y=E+(I<<6&4294967295|I>>>26),I=R+(E^(y|~b))+w[3]+2399980690&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~E))+w[10]+4293915773&4294967295,b=R+(I<<15&4294967295|I>>>17),I=E+(R^(b|~y))+w[1]+2240044497&4294967295,E=b+(I<<21&4294967295|I>>>11),I=y+(b^(E|~R))+w[8]+1873313359&4294967295,y=E+(I<<6&4294967295|I>>>26),I=R+(E^(y|~b))+w[15]+4264355552&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~E))+w[6]+2734768916&4294967295,b=R+(I<<15&4294967295|I>>>17),I=E+(R^(b|~y))+w[13]+1309151649&4294967295,E=b+(I<<21&4294967295|I>>>11),I=y+(b^(E|~R))+w[4]+4149444226&4294967295,y=E+(I<<6&4294967295|I>>>26),I=R+(E^(y|~b))+w[11]+3174756917&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~E))+w[2]+718787259&4294967295,b=R+(I<<15&4294967295|I>>>17),I=E+(R^(b|~y))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var E=y-this.blockSize,w=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=E;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<y;)if(w[b++]=A.charCodeAt(R++),b==this.blockSize){s(this,w),b=0;break}}else for(;R<y;)if(w[b++]=A[R++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var E=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=E&255,E/=256;for(this.u(A),A=Array(16),y=E=0;4>y;++y)for(var w=0;32>w;w+=8)A[E++]=this.g[y]>>>w&255;return A};function i(A,y){var E=c;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=y(A)}function o(A,y){this.h=y;for(var E=[],w=!0,b=A.length-1;0<=b;b--){var R=A[b]|0;w&&R==y||(E[b]=R,w=!1)}this.g=E}var c={};function l(A){return-128<=A&&128>A?i(A,function(y){return new o([y|0],0>y?-1:0)}):new o([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return D(h(-A));for(var y=[],E=1,w=0;A>=E;w++)y[w]=A/E|0,E*=4294967296;return new o(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return D(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),w=p,b=0;b<A.length;b+=8){var R=Math.min(8,A.length-b),I=parseInt(A.substring(b,b+R),y);8>R?(R=h(Math.pow(y,R)),w=w.j(R).add(h(I))):(w=w.j(E),w=w.add(h(I)))}return w}var p=l(0),g=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();for(var A=0,y=1,E=0;E<this.g.length;E++){var w=this.i(E);A+=(0<=w?w:4294967296+w)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(S(this))return"0";if(k(this))return"-"+D(this).toString(A);for(var y=h(Math.pow(A,6)),E=this,w="";;){var b=W(E,y).g;E=B(E,b.j(y));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=b,S(E))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function S(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function k(A){return A.h==-1}t.l=function(A){return A=B(this,A),k(A)?-1:S(A)?0:1};function D(A){for(var y=A.g.length,E=[],w=0;w<y;w++)E[w]=~A.g[w];return new o(E,~A.h).add(g)}t.abs=function(){return k(this)?D(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0,b=0;b<=y;b++){var R=w+(this.i(b)&65535)+(A.i(b)&65535),I=(R>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);w=I>>>16,R&=65535,I&=65535,E[b]=I<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function B(A,y){return A.add(D(y))}t.j=function(A){if(S(this)||S(A))return p;if(k(this))return k(A)?D(this).j(D(A)):D(D(this).j(A));if(k(A))return D(this.j(D(A)));if(0>this.l(_)&&0>A.l(_))return h(this.m()*A.m());for(var y=this.g.length+A.g.length,E=[],w=0;w<2*y;w++)E[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<A.g.length;b++){var R=this.i(w)>>>16,I=this.i(w)&65535,et=A.i(b)>>>16,bt=A.i(b)&65535;E[2*w+2*b]+=I*bt,$(E,2*w+2*b),E[2*w+2*b+1]+=R*bt,$(E,2*w+2*b+1),E[2*w+2*b+1]+=I*et,$(E,2*w+2*b+1),E[2*w+2*b+2]+=R*et,$(E,2*w+2*b+2)}for(w=0;w<y;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=y;w<2*y;w++)E[w]=0;return new o(E,0)};function $(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function j(A,y){this.g=A,this.h=y}function W(A,y){if(S(y))throw Error("division by zero");if(S(A))return new j(p,p);if(k(A))return y=W(D(A),y),new j(D(y.g),D(y.h));if(k(y))return y=W(A,D(y)),new j(D(y.g),y.h);if(30<A.g.length){if(k(A)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,w=y;0>=w.l(A);)E=ie(E),w=ie(w);var b=pe(E,1),R=pe(w,1);for(w=pe(w,2),E=pe(E,2);!S(w);){var I=R.add(w);0>=I.l(A)&&(b=b.add(E),R=I),w=pe(w,1),E=pe(E,1)}return y=B(A,b.j(y)),new j(b,y)}for(b=p;0<=A.l(y);){for(E=Math.max(1,Math.floor(A.m()/y.m())),w=Math.ceil(Math.log(E)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=h(E),I=R.j(y);k(I)||0<I.l(A);)E-=w,R=h(E),I=R.j(y);S(R)&&(R=g),b=b.add(R),A=B(A,I)}return new j(b,A)}t.A=function(A){return W(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)&A.i(w);return new o(E,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)|A.i(w);return new o(E,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)^A.i(w);return new o(E,this.h^A.h)};function ie(A){for(var y=A.g.length+1,E=[],w=0;w<y;w++)E[w]=A.i(w)<<1|A.i(w-1)>>>31;return new o(E,A.h)}function pe(A,y){var E=y>>5;y%=32;for(var w=A.g.length-E,b=[],R=0;R<w;R++)b[R]=0<y?A.i(R+E)>>>y|A.i(R+E+1)<<32-y:A.i(R+E);return new o(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,gm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,wr=o}).apply(typeof pd<"u"?pd:typeof self<"u"?self:typeof window<"u"?window:{});var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _m,Ks,ym,Eo,Wc,vm,Em,Tm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof co=="object"&&co];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in f))break e;f=f[P]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,P={next:function(){if(!m&&f<a.length){var N=f++;return{value:u(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function g(a,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function S(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,P,N){for(var z=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)z[Ce-2]=arguments[Ce];return u.prototype[P].apply(m,z)}}function k(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function D(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(l(m)){const P=a.length||0,N=m.length||0;a.length=P+N;for(let z=0;z<N;z++)a[P+z]=m[z]}else a.push(m)}}class B{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var ie=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function pe(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function A(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function y(a){const u={};for(const f in a)u[f]=a[f];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let f,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(f in m)a[f]=m[f];for(let N=0;N<E.length;N++)f=E[N],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function b(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function R(a){c.setTimeout(()=>{throw a},0)}function I(){var a=Nt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class et{constructor(){this.h=this.g=null}add(u,f){const m=bt.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var bt=new B(()=>new Ne,a=>a.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,me=!1,Nt=new et,jt=()=>{const a=c.Promise.resolve(void 0);ce=()=>{a.then(Mt)}};var Mt=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){R(f)}var u=bt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}me=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var Pn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function Qt(a,u){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ie){e:{try{W(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Rt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Qt.aa.h.call(this)}}S(Qt,Le);var Rt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function G(a,u,f,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=P,this.key=++J,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,u,f,m,P){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var z=v(a,u,m,P);return-1<z?(u=a[z],f||(u.fa=!1)):(u=new G(u,this.src,N,!!m,P),u.fa=f,a.push(u)),u};function Pe(a,u){var f=u.type;if(f in a.g){var m=a.g[f],P=Array.prototype.indexOf.call(m,u,void 0),N;(N=0<=P)&&Array.prototype.splice.call(m,P,1),N&&(ee(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function v(a,u,f,m){for(var P=0;P<a.length;++P){var N=a[P];if(!N.da&&N.listener==u&&N.capture==!!f&&N.ha==m)return P}return-1}var T="closure_lm_"+(1e6*Math.random()|0),C={};function L(a,u,f,m,P){if(Array.isArray(u)){for(var N=0;N<u.length;N++)L(a,u[N],f,m,P);return null}return f=ne(f),a&&a[O]?a.K(u,f,h(m)?!!m.capture:!!m,P):V(a,u,f,!1,m,P)}function V(a,u,f,m,P,N){if(!u)throw Error("Invalid event type");var z=h(P)?!!P.capture:!!P,Ce=se(a);if(Ce||(a[T]=Ce=new ye(a)),f=Ce.add(u,f,m,z,N),f.proxy)return f;if(m=F(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Pn||(P=z),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(q(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function F(){function a(f){return u.call(a.src,a.listener,f)}const u=U;return a}function K(a,u,f,m,P){if(Array.isArray(u))for(var N=0;N<u.length;N++)K(a,u[N],f,m,P);else m=h(m)?!!m.capture:!!m,f=ne(f),a&&a[O]?(a=a.i,u=String(u).toString(),u in a.g&&(N=a.g[u],f=v(N,f,m,P),-1<f&&(ee(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[u],a.h--)))):a&&(a=se(a))&&(u=a.g[u.toString()],a=-1,u&&(a=v(u,f,m,P)),(f=-1<a?u[a]:null)&&H(f))}function H(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[O])Pe(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(q(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=se(u))?(Pe(f,a),f.h==0&&(f.src=null,u[T]=null)):ee(a)}}}function q(a){return a in C?C[a]:C[a]="on"+a}function U(a,u){if(a.da)a=!0;else{u=new Qt(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&H(a),a=f.call(m,u)}return a}function se(a){return a=a[T],a instanceof ye?a:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(a){return typeof a=="function"?a:(a[Q]||(a[Q]=function(u){return a.handleEvent(u)}),a[Q])}function te(){Me.call(this),this.i=new ye(this),this.M=this,this.F=null}S(te,Me),te.prototype[O]=!0,te.prototype.removeEventListener=function(a,u,f,m){K(this,a,u,f,m)};function oe(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Le(u,a);else if(u instanceof Le)u.target=u.target||a;else{var P=u;u=new Le(m,a),w(u,P)}if(P=!0,f)for(var N=f.length-1;0<=N;N--){var z=u.g=f[N];P=Ae(z,m,!0,u)&&P}if(z=u.g=a,P=Ae(z,m,!0,u)&&P,P=Ae(z,m,!1,u)&&P,f)for(N=0;N<f.length;N++)z=u.g=f[N],P=Ae(z,m,!1,u)&&P}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)ee(f[m]);delete a.g[u],a.h--}}this.F=null},te.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},te.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Ae(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,N=0;N<u.length;++N){var z=u[N];if(z&&!z.da&&z.capture==f){var Ce=z.listener,nt=z.ha||z.src;z.fa&&Pe(a.i,z),P=Ce.call(nt,m)!==!1&&P}}return P&&!m.defaultPrevented}function Te(a,u,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function at(a){a.g=Te(()=>{a.g=null,a.i&&(a.i=!1,at(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Qe extends Me{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:at(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(a){Me.call(this),this.h=a,this.g={}}S(tt,Me);var ct=[];function Cn(a){pe(a.g,function(u,f){this.g.hasOwnProperty(f)&&H(u)},a),a.g={}}tt.prototype.N=function(){tt.aa.N.call(this),Cn(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mr=c.JSON.stringify,vt=c.JSON.parse,Lt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Lr(){}Lr.prototype.h=null;function Vu(a){return a.h||(a.h=a.i())}function Ou(){}var Ss={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ma(){Le.call(this,"d")}S(Ma,Le);function La(){Le.call(this,"c")}S(La,Le);var ur={},xu=null;function Hi(){return xu=xu||new te}ur.La="serverreachability";function Mu(a){Le.call(this,ur.La,a)}S(Mu,Le);function Ps(a){const u=Hi();oe(u,new Mu(u))}ur.STAT_EVENT="statevent";function Lu(a,u){Le.call(this,ur.STAT_EVENT,a),this.stat=u}S(Lu,Le);function Et(a){const u=Hi();oe(u,new Lu(u,a))}ur.Ma="timingevent";function Fu(a,u){Le.call(this,ur.Ma,a),this.size=u}S(Fu,Le);function Cs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function D_(a,u,f,m,P,N){a.info(function(){if(a.g)if(N)for(var z="",Ce=N.split("&"),nt=0;nt<Ce.length;nt++){var Ie=Ce[nt].split("=");if(1<Ie.length){var lt=Ie[0];Ie=Ie[1];var ut=lt.split("_");z=2<=ut.length&&ut[1]=="type"?z+(lt+"="+Ie+"&"):z+(lt+"=redacted&")}}else z=null;else z=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+f+`
`+z})}function V_(a,u,f,m,P,N,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+f+`
`+N+" "+z})}function Fr(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+x_(a,f)+(m?" "+m:"")})}function O_(a,u){a.info(function(){return"TIMEOUT: "+u})}ks.prototype.info=function(){};function x_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return Mr(f)}catch{return u}}var Wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fa;function zi(){}S(zi,Lr),zi.prototype.g=function(){return new XMLHttpRequest},zi.prototype.i=function(){return{}},Fa=new zi;function kn(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bu}function Bu(){this.i=null,this.g="",this.h=!1}var $u={},Ua={};function Ba(a,u,f){a.L=1,a.v=Yi(un(u)),a.m=f,a.P=!0,ju(a,null)}function ju(a,u){a.F=Date.now(),Ki(a),a.A=un(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),nh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Bu,a.g=Eh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Qe(g(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(ct[0]=P.toString()),P=ct);for(var N=0;N<P.length;N++){var z=L(f,P[N],m||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ps(),D_(a.i,a.u,a.A,a.l,a.R,a.m)}kn.prototype.ca=function(a){a=a.target;const u=this.M;u&&hn(a)==3?u.j():this.Y(a)},kn.prototype.Y=function(a){try{if(a==this.g)e:{const ut=hn(this.g);var u=this.g.Ba();const $r=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||lh(this.g)))){this.J||ut!=4||u==7||(u==8||0>=$r?Ps(3):Ps(2)),$a(this);var f=this.g.Z();this.X=f;t:if(qu(this)){var m=lh(this.g);a="";var P=m.length,N=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hr(this),Ns(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(N&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,V_(this.i,this.u,this.A,this.l,this.R,ut,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,nt=this.g;if((Ce=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ce)){var Ie=Ce;break t}}Ie=null}if(f=Ie)Fr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ja(this,f);else{this.o=!1,this.s=3,Et(12),hr(this),Ns(this);break e}}if(this.P){f=!0;let qt;for(;!this.J&&this.C<z.length;)if(qt=M_(this,z),qt==Ua){ut==4&&(this.s=4,Et(14),f=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==$u){this.s=4,Et(15),Fr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Fr(this.i,this.l,qt,null),ja(this,qt);if(qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||z.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)Fr(this.i,this.l,z,"[Invalid Chunked Response]"),hr(this),Ns(this);else if(0<z.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ga(lt),lt.M=!0,Et(11))}}else Fr(this.i,this.l,z,null),ja(this,z);ut==4&&hr(this),this.o&&!this.J&&(ut==4?gh(this.j,this):(this.o=!1,Ki(this)))}else Z_(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),hr(this),Ns(this)}}}catch{}finally{}};function qu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function M_(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Ua:(f=Number(u.substring(f,m)),isNaN(f)?$u:(m+=1,m+f>u.length?Ua:(u=u.slice(m,m+f),a.C=m+f,u)))}kn.prototype.cancel=function(){this.J=!0,hr(this)};function Ki(a){a.S=Date.now()+a.I,Hu(a,a.I)}function Hu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Cs(g(a.ba,a),u)}function $a(a){a.B&&(c.clearTimeout(a.B),a.B=null)}kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(O_(this.i,this.A),this.L!=2&&(Ps(),Et(17)),hr(this),this.s=2,Ns(this)):Hu(this,this.S-a)};function Ns(a){a.j.G==0||a.J||gh(a.j,a)}function hr(a){$a(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Cn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ja(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||qa(f.h,a))){if(!a.K&&qa(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)no(f),eo(f);else break e;Ka(f),Et(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Cs(g(f.Za,f),6e3));if(1>=Ku(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else fr(f,11)}else if((a.K||f.g==a)&&no(f),!$(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let Ie=P[u];if(f.T=Ie[0],Ie=Ie[1],f.G==2)if(Ie[0]=="c"){f.K=Ie[1],f.ia=Ie[2];const lt=Ie[3];lt!=null&&(f.la=lt,f.j.info("VER="+f.la));const ut=Ie[4];ut!=null&&(f.Aa=ut,f.j.info("SVER="+f.Aa));const $r=Ie[5];$r!=null&&typeof $r=="number"&&0<$r&&(m=1.5*$r,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const qt=a.g;if(qt){const so=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(so){var N=m.h;N.g||so.indexOf("spdy")==-1&&so.indexOf("quic")==-1&&so.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ha(N,N.h),N.h=null))}if(m.D){const Qa=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qa&&(m.ya=Qa,Ve(m.I,m.D,Qa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var z=a;if(m.qa=vh(m,m.J?m.ia:null,m.W),z.K){Gu(m.h,z);var Ce=z,nt=m.L;nt&&(Ce.I=nt),Ce.B&&($a(Ce),Ki(Ce)),m.g=z}else ph(m);0<f.i.length&&to(f)}else Ie[0]!="stop"&&Ie[0]!="close"||fr(f,7);else f.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?fr(f,7):za(f):Ie[0]!="noop"&&f.l&&f.l.ta(Ie),f.v=0)}}Ps(4)}catch{}}var L_=class{constructor(a,u){this.g=a,this.map=u}};function Wu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ku(a){return a.h?1:a.g?a.g.size:0}function qa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ha(a,u){a.g?a.g.add(u):a.h=u}function Gu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Wu.prototype.cancel=function(){if(this.i=Qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return k(a.i)}function F_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function U_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function Yu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=U_(a),m=F_(a),P=m.length,N=0;N<P;N++)u.call(void 0,m[N],f&&f[N],a)}var Ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function B_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),P=null;if(0<=m){var N=a[f].substring(0,m);P=a[f].substring(m+1)}else N=a[f];u(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function dr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof dr){this.h=a.h,Gi(this,a.j),this.o=a.o,this.g=a.g,Qi(this,a.s),this.l=a.l;var u=a.i,f=new Os;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Xu(this,f),this.m=a.m}else a&&(u=String(a).match(Ju))?(this.h=!1,Gi(this,u[1]||"",!0),this.o=Ds(u[2]||""),this.g=Ds(u[3]||"",!0),Qi(this,u[4]),this.l=Ds(u[5]||"",!0),Xu(this,u[6]||"",!0),this.m=Ds(u[7]||"")):(this.h=!1,this.i=new Os(null,this.h))}dr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Vs(u,Zu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Vs(u,Zu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Vs(f,f.charAt(0)=="/"?q_:j_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Vs(f,W_)),a.join("")};function un(a){return new dr(a)}function Gi(a,u,f){a.j=f?Ds(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Qi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Xu(a,u,f){u instanceof Os?(a.i=u,z_(a.i,a.h)):(f||(u=Vs(u,H_)),a.i=new Os(u,a.h))}function Ve(a,u,f){a.i.set(u,f)}function Yi(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ds(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vs(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,$_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zu=/[#\/\?@]/g,j_=/[#\?:]/g,q_=/[#\?]/g,H_=/[#\?@]/g,W_=/#/g;function Os(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Nn(a){a.g||(a.g=new Map,a.h=0,a.i&&B_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Os.prototype,t.add=function(a,u){Nn(this),this.i=null,a=Ur(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function eh(a,u){Nn(a),u=Ur(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function th(a,u){return Nn(a),u=Ur(a,u),a.g.has(u)}t.forEach=function(a,u){Nn(this),this.g.forEach(function(f,m){f.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){Nn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const P=a[m];for(let N=0;N<P.length;N++)f.push(u[m])}return f},t.V=function(a){Nn(this);let u=[];if(typeof a=="string")th(this,a)&&(u=u.concat(this.g.get(Ur(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Nn(this),this.i=null,a=Ur(this,a),th(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function nh(a,u,f){eh(a,u),0<f.length&&(a.i=null,a.g.set(Ur(a,u),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const N=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var P=N;z[m]!==""&&(P+="="+encodeURIComponent(String(z[m]))),a.push(P)}}return this.i=a.join("&")};function Ur(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function z_(a,u){u&&!a.j&&(Nn(a),a.i=null,a.g.forEach(function(f,m){var P=m.toLowerCase();m!=P&&(eh(this,m),nh(this,P,f))},a)),a.j=u}function K_(a,u){const f=new ks;if(c.Image){const m=new Image;m.onload=_(Dn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=_(Dn,f,"TestLoadImage: error",!1,u,m),m.onabort=_(Dn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(Dn,f,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function G_(a,u){const f=new ks,m=new AbortController,P=setTimeout(()=>{m.abort(),Dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?Dn(f,"TestPingServer: ok",!0,u):Dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Dn(f,"TestPingServer: error",!1,u)})}function Dn(a,u,f,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(f)}catch{}}function Q_(){this.g=new Lt}function Y_(a,u,f){const m=f||"";try{Yu(a,function(P,N){let z=P;h(P)&&(z=Mr(P)),u.push(m+N+"="+encodeURIComponent(z))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function Ji(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Ji,Lr),Ji.prototype.g=function(){return new Xi(this.l,this.j)},Ji.prototype.i=function(a){return function(){return a}}({});function Xi(a,u){te.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Xi,te),t=Xi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ms(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function rh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?xs(this):Ms(this),this.readyState==3&&rh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,xs(this))},t.Qa=function(a){this.g&&(this.response=a,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ms(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Ms(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sh(a){let u="";return pe(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Wa(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=sh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ve(a,u,f))}function Ue(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ue,te);var J_=/^https?$/i,X_=["POST","PUT"];t=Ue.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fa.g(),this.v=this.o?Vu(this.o):Vu(Fa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){ih(this,N);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)f.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())f.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(X_,u,void 0))||m||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of f)this.g.setRequestHeader(N,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ch(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){ih(this,N)}};function ih(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,oh(a),Zi(a)}function oh(a){a.A||(a.A=!0,oe(a,"complete"),oe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,oe(this,"complete"),oe(this,"abort"),Zi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zi(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ah(this):this.bb())},t.bb=function(){ah(this)};function ah(a){if(a.h&&typeof o<"u"&&(!a.v[1]||hn(a)!=4||a.Z()!=2)){if(a.u&&hn(a)==4)Te(a.Ea,0,a);else if(oe(a,"readystatechange"),hn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=z===0){var P=String(a.D).match(Ju)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),m=!J_.test(P?P.toLowerCase():"")}f=m}if(f)oe(a,"complete"),oe(a,"success");else{a.m=6;try{var N=2<hn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",oh(a)}}finally{Zi(a)}}}}function Zi(a,u){if(a.g){ch(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||oe(a,"ready");try{f.onreadystatechange=m}catch{}}}function ch(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),vt(u)}};function lh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Z_(a){const u={};a=(a.g&&2<=hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if($(a[m]))continue;var f=b(a[m]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=u[P]||[];u[P]=N,N.push(f)}A(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function uh(a){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ls("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ls("baseRetryDelayMs",5e3,a),this.cb=Ls("retryDelaySeedMs",1e4,a),this.Wa=Ls("forwardChannelMaxRetries",2,a),this.wa=Ls("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Wu(a&&a.concurrentRequestLimit),this.Da=new Q_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=uh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){Et(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=vh(this,null,this.W),to(this)};function za(a){if(hh(a),a.G==3){var u=a.U++,f=un(a.I);if(Ve(f,"SID",a.K),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),Fs(a,f),u=new kn(a,a.j,u),u.L=2,u.v=Yi(un(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Eh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ki(u)}yh(a)}function eo(a){a.g&&(Ga(a),a.g.cancel(),a.g=null)}function hh(a){eo(a),a.u&&(c.clearTimeout(a.u),a.u=null),no(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function to(a){if(!zu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ce||jt(),me||(ce(),me=!0),Nt.add(u,a),a.B=0}}function ey(a,u){return Ku(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Cs(g(a.Ga,a,u),_h(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new kn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),w(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=fh(this,P,u),f=un(this.I),Ve(f,"RID",a),Ve(f,"CVER",22),this.D&&Ve(f,"X-HTTP-Session-Id",this.D),Fs(this,f),N&&(this.O?u="headers="+encodeURIComponent(String(sh(N)))+"&"+u:this.m&&Wa(f,this.m,N)),Ha(this.h,P),this.Ua&&Ve(f,"TYPE","init"),this.P?(Ve(f,"$req",u),Ve(f,"SID","null"),P.T=!0,Ba(P,f,null)):Ba(P,f,u),this.G=2}}else this.G==3&&(a?dh(this,a):this.i.length==0||zu(this.h)||dh(this))};function dh(a,u){var f;u?f=u.l:f=a.U++;const m=un(a.I);Ve(m,"SID",a.K),Ve(m,"RID",f),Ve(m,"AID",a.T),Fs(a,m),a.m&&a.o&&Wa(m,a.m,a.o),f=new kn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=fh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ha(a.h,f),Ba(f,m,u)}function Fs(a,u){a.H&&pe(a.H,function(f,m){Ve(u,m,f)}),a.l&&Yu({},function(f,m){Ve(u,m,f)})}function fh(a,u,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let N=-1;for(;;){const z=["count="+f];N==-1?0<f?(N=P[0].g,z.push("ofs="+N)):N=0:z.push("ofs="+N);let Ce=!0;for(let nt=0;nt<f;nt++){let Ie=P[nt].g;const lt=P[nt].map;if(Ie-=N,0>Ie)N=Math.max(0,P[nt].g-100),Ce=!1;else try{Y_(lt,z,"req"+Ie+"_")}catch{m&&m(lt)}}if(Ce){m=z.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function ph(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ce||jt(),me||(ce(),me=!0),Nt.add(u,a),a.v=0}}function Ka(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Cs(g(a.Fa,a),_h(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,mh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Cs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),eo(this),mh(this))};function Ga(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function mh(a){a.g=new kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=un(a.qa);Ve(u,"RID","rpc"),Ve(u,"SID",a.K),Ve(u,"AID",a.T),Ve(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(u,"TO",a.ja),Ve(u,"TYPE","xmlhttp"),Fs(a,u),a.m&&a.o&&Wa(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Yi(un(u)),f.m=null,f.P=!0,ju(f,a)}t.Za=function(){this.C!=null&&(this.C=null,eo(this),Ka(this),Et(19))};function no(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function gh(a,u){var f=null;if(a.g==u){no(a),Ga(a),a.g=null;var m=2}else if(qa(a.h,u))f=u.D,Gu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=Hi(),oe(m,new Fu(m,f)),to(a)}else ph(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&ey(a,u)||m==2&&Ka(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),P){case 1:fr(a,5);break;case 4:fr(a,10);break;case 3:fr(a,6);break;default:fr(a,2)}}}function _h(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function fr(a,u){if(a.j.info("Error code "+u),u==2){var f=g(a.fb,a),m=a.Xa;const P=!m;m=new dr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Gi(m,"https"),Yi(m),P?K_(m.toString(),f):G_(m.toString(),f)}else Et(2);a.G=0,a.l&&a.l.sa(u),yh(a),hh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function yh(a){if(a.G=0,a.ka=[],a.l){const u=Qu(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function vh(a,u,f){var m=f instanceof dr?un(f):new dr(f);if(m.g!="")u&&(m.g=u+"."+m.g),Qi(m,m.s);else{var P=c.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var N=new dr(null);m&&Gi(N,m),u&&(N.g=u),P&&Qi(N,P),f&&(N.l=f),m=N}return f=a.D,u=a.ya,f&&u&&Ve(m,f,u),Ve(m,"VER",a.la),Fs(a,m),m}function Eh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ue(new Ji({eb:f})):new Ue(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Th(){}t=Th.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ro(){}ro.prototype.g=function(a,u){return new Dt(a,u)};function Dt(a,u){te.call(this),this.g=new uh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!$(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Br(this)}S(Dt,te),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){za(this.g)},Dt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Mr(a),a=f);u.i.push(new L_(u.Ya++,a)),u.G==3&&to(u)},Dt.prototype.N=function(){this.g.l=null,delete this.j,za(this.g),delete this.g,Dt.aa.N.call(this)};function Ih(a){Ma.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(Ih,Ma);function wh(){La.call(this),this.status=1}S(wh,La);function Br(a){this.g=a}S(Br,Th),Br.prototype.ua=function(){oe(this.g,"a")},Br.prototype.ta=function(a){oe(this.g,new Ih(a))},Br.prototype.sa=function(a){oe(this.g,new wh)},Br.prototype.ra=function(){oe(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Tm=function(){return new ro},Em=function(){return Hi()},vm=ur,Wc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,Eo=Wi,Uu.COMPLETE="complete",ym=Uu,Ou.EventType=Ss,Ss.OPEN="a",Ss.CLOSE="b",Ss.ERROR="c",Ss.MESSAGE="d",te.prototype.listen=te.prototype.K,Ks=Ou,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,_m=Ue}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});const md="@firebase/firestore";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let Ts="11.0.0";/**
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
 */const Sr=new Ll("@firebase/firestore");function zr(){return Sr.logLevel}function X(t,...e){if(Sr.logLevel<=ge.DEBUG){const n=e.map(Bl);Sr.debug(`Firestore (${Ts}): ${t}`,...n)}}function In(t,...e){if(Sr.logLevel<=ge.ERROR){const n=e.map(Bl);Sr.error(`Firestore (${Ts}): ${t}`,...n)}}function us(t,...e){if(Sr.logLevel<=ge.WARN){const n=e.map(Bl);Sr.warn(`Firestore (${Ts}): ${t}`,...n)}}function Bl(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function Re(t,e){t||le()}function de(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Im{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class AI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bI{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ar,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new Im(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new dt(e)}}class RI{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new RI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Re(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new PI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class wm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=kI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function hs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Ke(0,0))}static max(){return new he(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yi{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends yi{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const NI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends yi{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return NI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Oe.fromString(e))}static fromName(e){return new re(Oe.fromString(e).popFirst(5))}static empty(){return new re(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Oe(e.slice()))}}function DI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new Zn(s,re.empty(),e)}function VI(t){return new Zn(t.readTime,t.key,-1)}class Zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zn(he.min(),re.empty(),-1)}static max(){return new Zn(he.max(),re.empty(),-1)}}function OI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const xI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Is(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==xI)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function LI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ws(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ga{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ga.oe=-1;function _a(t){return t==null}function Bo(t){return t===0&&1/t==-1/0}function FI(t){return typeof t=="number"&&Number.isInteger(t)&&!Bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function UI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=gd(e)),e=BI(t.get(n),e);return gd(e)}function BI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function gd(t){return t+""}/**
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
 */function _d(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Am(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lo(this.root,e,this.comparator,!0)}}class lo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xe{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yd(this.data.getIterator())}getIteratorFrom(e){return new yd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class yd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Xe(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class bm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bm("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const $I=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function er(t){if(Re(!!t),typeof t=="string"){let e=0;const n=$I.exec(t);if(Re(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function tr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function $l(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ya(t){const e=t.mapValue.fields.__previous_value__;return $l(e)?ya(e):e}function vi(t){const e=er(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class jI{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const uo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$l(t)?4:HI(t)?9007199254740991:qI(t)?10:11:le()}function ln(t,e){if(t===e)return!0;const n=nr(t);if(n!==nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vi(t).isEqual(vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=er(s.timestampValue),c=er(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return tr(s.bytesValue).isEqual(tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),c=Be(i.doubleValue);return o===c?Bo(o)===Bo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(_d(o)!==_d(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!ln(o[l],c[l])))return!1;return!0}(t,e);default:return le()}}function Ti(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=nr(t),r=nr(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Be(i.integerValue||i.doubleValue),l=Be(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return vd(t.timestampValue,e.timestampValue);case 4:return vd(vi(t),vi(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(i,o){const c=tr(i),l=tr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=Ee(c[h],l[h]);if(d!==0)return d}return Ee(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ee(Be(i.latitude),Be(o.latitude));return c!==0?c:Ee(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ed(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,d;const p=i.fields||{},g=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,S=(l=g.value)===null||l===void 0?void 0:l.arrayValue,k=Ee(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Ed(_,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===uo.mapValue&&o===uo.mapValue)return 0;if(i===uo.mapValue)return 1;if(o===uo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Ee(l[p],d[p]);if(g!==0)return g;const _=ds(c[l[p]],h[d[p]]);if(_!==0)return _}return Ee(l.length,d.length)}(t.mapValue,e.mapValue);default:throw le()}}function vd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=er(t),r=er(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function Ed(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ds(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function fs(t){return zc(t)}function zc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=zc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${zc(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function To(t){switch(nr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ya(t);return e?16+To(e):16;case 5:return 2*t.stringValue.length;case 6:return tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+To(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return or(r.fields,(i,o)=>{s+=i.length+To(o)}),s}(t.mapValue);default:throw le()}}function Td(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kc(t){return!!t&&"integerValue"in t}function jl(t){return!!t&&"arrayValue"in t}function Id(t){return!!t&&"nullValue"in t}function wd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Io(t){return!!t&&"mapValue"in t}function qI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function si(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return or(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=si(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=si(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Io(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=si(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=si(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Io(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){or(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(si(this.value))}}function Rm(t){const e=[];return or(t.fields,(n,r)=>{const s=new it([n]);if(Io(r)){const i=Rm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
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
 */class mt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new mt(e,0,he.min(),he.min(),he.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,he.min(),he.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,he.min(),he.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $o{constructor(e,n){this.position=e,this.inclusive=n}}function Ad(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function bd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function WI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Sm{}class He extends Sm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new KI(e,n,r):n==="array-contains"?new YI(e,r):n==="in"?new JI(e,r):n==="not-in"?new XI(e,r):n==="array-contains-any"?new ZI(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GI(e,r):new QI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ds(n,this.value)):n!==null&&nr(this.value)===nr(n)&&this.matchesComparison(ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends Sm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new zt(e,n)}matches(e){return Pm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Pm(t){return t.op==="and"}function Cm(t){return zI(t)&&Pm(t)}function zI(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function Gc(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+fs(t.value);if(Cm(t))return t.filters.map(e=>Gc(e)).join(",");{const e=t.filters.map(n=>Gc(n)).join(",");return`${t.op}(${e})`}}function km(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&ln(r.value,s.value)}(t,e):t instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&km(o,s.filters[c]),!0):!1}(t,e):void le()}function Nm(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${fs(n.value)}`}(t):t instanceof zt?function(n){return n.op.toString()+" {"+n.getFilters().map(Nm).join(" ,")+"}"}(t):"Filter"}class KI extends He{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class GI extends He{constructor(e,n){super(e,"in",n),this.keys=Dm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QI extends He{constructor(e,n){super(e,"not-in",n),this.keys=Dm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class YI extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jl(n)&&Ti(n.arrayValue,this.value)}}class JI extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ti(this.value.arrayValue,n)}}class XI extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ti(this.value.arrayValue,n)}}class ZI extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ti(this.value.arrayValue,r))}}/**
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
 */class ew{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Rd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ew(t,e,n,r,s,i,o)}function ql(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),_a(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fs(r)).join(",")),e.ue=n}return e.ue}function Hl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!km(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bd(t.startAt,e.startAt)&&bd(t.endAt,e.endAt)}function Qc(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class As{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tw(t,e,n,r,s,i,o,c){return new As(t,e,n,r,s,i,o,c)}function Wl(t){return new As(t)}function Sd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vm(t){return t.collectionGroup!==null}function ii(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Xe(it.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ii(i,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new Ii(it.keyField(),r))}return e.ce}function rn(t){const e=de(t);return e.le||(e.le=nw(e,ii(t))),e.le}function nw(t,e){if(t.limitType==="F")return Rd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ii(s.field,i)});const n=t.endAt?new $o(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $o(t.startAt.position,t.startAt.inclusive):null;return Rd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yc(t,e){const n=t.filters.concat([e]);return new As(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jc(t,e,n){return new As(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function va(t,e){return Hl(rn(t),rn(e))&&t.limitType===e.limitType}function Om(t){return`${ql(rn(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Nm(s)).join(", ")}]`),_a(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fs(s)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function Ea(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ii(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Ad(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ii(r),s)||r.endAt&&!function(o,c,l){const h=Ad(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ii(r),s))}(t,e)}function rw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xm(t){return(e,n)=>{let r=!1;for(const s of ii(t)){const i=sw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function sw(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ds(l,h):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
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
 */class Dr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){or(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Am(this.inner)}size(){return this.innerSize}}/**
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
 */const iw=new Fe(re.comparator);function wn(){return iw}const Mm=new Fe(re.comparator);function Gs(...t){let e=Mm;for(const n of t)e=e.insert(n.key,n);return e}function Lm(t){let e=Mm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vr(){return oi()}function Fm(){return oi()}function oi(){return new Dr(t=>t.toString(),(t,e)=>t.isEqual(e))}const ow=new Fe(re.comparator),aw=new Xe(re.comparator);function _e(...t){let e=aw;for(const n of t)e=e.add(n);return e}const cw=new Xe(Ee);function lw(){return cw}/**
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
 */function zl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(e)?"-0":e}}function Um(t){return{integerValue:""+t}}function uw(t,e){return FI(e)?Um(e):zl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ta{constructor(){this._=void 0}}function hw(t,e,n){return t instanceof jo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$l(i)&&(i=ya(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof wi?$m(t,e):t instanceof Ai?jm(t,e):function(s,i){const o=Bm(s,i),c=Pd(o)+Pd(s.Pe);return Kc(o)&&Kc(s.Pe)?Um(c):zl(s.serializer,c)}(t,e)}function dw(t,e,n){return t instanceof wi?$m(t,e):t instanceof Ai?jm(t,e):n}function Bm(t,e){return t instanceof qo?function(r){return Kc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class jo extends Ta{}class wi extends Ta{constructor(e){super(),this.elements=e}}function $m(t,e){const n=qm(e);for(const r of t.elements)n.some(s=>ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ai extends Ta{constructor(e){super(),this.elements=e}}function jm(t,e){let n=qm(e);for(const r of t.elements)n=n.filter(s=>!ln(s,r));return{arrayValue:{values:n}}}class qo extends Ta{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Pd(t){return Be(t.integerValue||t.doubleValue)}function qm(t){return jl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof wi&&s instanceof wi||r instanceof Ai&&s instanceof Ai?hs(r.elements,s.elements,ln):r instanceof qo&&s instanceof qo?ln(r.Pe,s.Pe):r instanceof jo&&s instanceof jo}(t.transform,e.transform)}class pw{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ia{}function Hm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kl(t.key,Wt.none()):new Vi(t.key,t.data,Wt.none());{const n=t.data,r=Ct.empty();let s=new Xe(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ar(t.key,r,new xt(s.toArray()),Wt.none())}}function mw(t,e,n){t instanceof Vi?function(s,i,o){const c=s.value.clone(),l=kd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof ar?function(s,i,o){if(!wo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=kd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Wm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ai(t,e,n,r){return t instanceof Vi?function(i,o,c,l){if(!wo(i.precondition,o))return c;const h=i.value.clone(),d=Nd(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ar?function(i,o,c,l){if(!wo(i.precondition,o))return c;const h=Nd(i.fieldTransforms,l,o),d=o.data;return d.setAll(Wm(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function gw(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Bm(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function Cd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&hs(r,s,(i,o)=>fw(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vi extends Ia{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ar extends Ia{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kd(t,e,n){const r=new Map;Re(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,dw(o,c,n[s]))}return r}function Nd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,hw(i,o,e))}return r}class Kl extends Ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _w extends Ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yw{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&mw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ai(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ai(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Fm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Hm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>Cd(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>Cd(n,r))}}class Gl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length);let s=function(){return ow}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gl(e,n,r,s)}}/**
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
 */class vw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ew{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,ve;function Tw(t){switch(t){default:return le();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function zm(t){if(t===void 0)return In("GRPC error has no .code"),M.UNKNOWN;switch(t){case je.OK:return M.OK;case je.CANCELLED:return M.CANCELLED;case je.UNKNOWN:return M.UNKNOWN;case je.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case je.INTERNAL:return M.INTERNAL;case je.UNAVAILABLE:return M.UNAVAILABLE;case je.UNAUTHENTICATED:return M.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case je.NOT_FOUND:return M.NOT_FOUND;case je.ALREADY_EXISTS:return M.ALREADY_EXISTS;case je.PERMISSION_DENIED:return M.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case je.ABORTED:return M.ABORTED;case je.OUT_OF_RANGE:return M.OUT_OF_RANGE;case je.UNIMPLEMENTED:return M.UNIMPLEMENTED;case je.DATA_LOSS:return M.DATA_LOSS;default:return le()}}(ve=je||(je={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Iw(){return new TextEncoder}/**
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
 */const ww=new wr([4294967295,4294967295],0);function Dd(t){const e=Iw().encode(t),n=new gm;return n.update(e),new Uint8Array(n.digest())}function Vd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wr([n,r],0),new wr([s,i],0)]}class Ql{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qs(`Invalid padding: ${n}`);if(r<0)throw new Qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=wr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(wr.fromNumber(r)));return s.compare(ww)===1&&(s=new wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Dd(e),[r,s]=Vd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ql(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Dd(e),[r,s]=Vd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Oi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wa(he.min(),s,new Fe(Ee),wn(),_e())}}class Oi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Oi(r,n,_e(),_e(),_e())}}/**
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
 */class Ao{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Km{constructor(e,n){this.targetId=e,this.me=n}}class Gm{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Od{constructor(){this.fe=0,this.ge=Md(),this.pe=ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new Oi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Md()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Aw{constructor(e){this.Le=e,this.Be=new Map,this.ke=wn(),this.qe=xd(),this.Qe=new Fe(Ee)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Qc(i))if(r===0){const o=new re(i.path);this.Ue(n,o,mt.newNoDocument(o,he.min()))}else Re(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=tr(r).toUint8Array()}catch(l){if(l instanceof bm)return us("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ql(o,s,i)}catch(l){return us(l instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Qc(c.target)){const l=new re(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,mt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new wa(e,n,this.Qe,this.ke,r);return this.ke=wn(),this.qe=xd(),this.Qe=new Fe(Ee),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Od,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Xe(Ee),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Od),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function xd(){return new Fe(re.comparator)}function Md(){return new Fe(re.comparator)}const bw={asc:"ASCENDING",desc:"DESCENDING"},Rw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sw={and:"AND",or:"OR"};class Pw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xc(t,e){return t.useProto3Json||_a(e)?e:{value:e}}function Ho(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Cw(t,e){return Ho(t,e.toTimestamp())}function sn(t){return Re(!!t),he.fromTimestamp(function(n){const r=er(n);return new Ke(r.seconds,r.nanos)}(t))}function Yl(t,e){return Zc(t,e).canonicalString()}function Zc(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ym(t){const e=Oe.fromString(t);return Re(tg(e)),e}function el(t,e){return Yl(t.databaseId,e.path)}function mc(t,e){const n=Ym(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Xm(n))}function Jm(t,e){return Yl(t.databaseId,e)}function kw(t){const e=Ym(t);return e.length===4?Oe.emptyPath():Xm(e)}function tl(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xm(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ld(t,e,n){return{name:el(t,e),fields:n.value.mapValue.fields}}function Nw(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Re(d===void 0||typeof d=="string"),ot.fromBase64String(d||"")):(Re(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ot.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?M.UNKNOWN:zm(h.code);return new Z(d,h.message||"")}(o);n=new Gm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=mc(t,r.document.name),i=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):he.min(),c=new Ct({mapValue:{fields:r.document.fields}}),l=mt.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Ao(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=mc(t,r.document),i=r.readTime?sn(r.readTime):he.min(),o=mt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ao([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=mc(t,r.document),i=r.removedTargetIds||[];n=new Ao([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Ew(s,i),c=r.targetId;n=new Km(c,o)}}return n}function Dw(t,e){let n;if(e instanceof Vi)n={update:Ld(t,e.key,e.value)};else if(e instanceof Kl)n={delete:el(t,e.key)};else if(e instanceof ar)n={update:Ld(t,e.key,e.data),updateMask:$w(e.fieldMask)};else{if(!(e instanceof _w))return le();n={verify:el(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof jo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof wi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ai)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof qo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Cw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function Vw(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?sn(s.updateTime):sn(i);return o.isEqual(he.min())&&(o=sn(i)),new pw(o,s.transformResults||[])}(n,e))):[]}function Ow(t,e){return{documents:[Jm(t,e.path)]}}function xw(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Jm(t,s);const i=function(h){if(h.length!==0)return eg(zt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:Gr(g.field),direction:Fw(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Xc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function Mw(t){let e=kw(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=Zm(p);return g instanceof zt&&Cm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new Ii(Qr(S.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,_a(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,_=p.values||[];return new $o(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new $o(_,g)}(n.endAt)),tw(e,s,o,i,c,"F",l,h)}function Lw(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qr(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qr(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Qr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zt.create(n.compositeFilter.filters.map(r=>Zm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function Fw(t){return bw[t]}function Uw(t){return Rw[t]}function Bw(t){return Sw[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return it.fromServerFormat(t.fieldPath)}function eg(t){return t instanceof He?function(n){if(n.op==="=="){if(wd(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NAN"}};if(Id(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wd(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NAN"}};if(Id(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(n.field),op:Uw(n.op),value:n.value}}}(t):t instanceof zt?function(n){const r=n.getFilters().map(s=>eg(s));return r.length===1?r[0]:{compositeFilter:{op:Bw(n.op),filters:r}}}(t):le()}function $w(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class qn{constructor(e,n,r,s,i=he.min(),o=he.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jw{constructor(e){this.ct=e}}function qw(t){const e=Mw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jc(e,e.limit,"L"):e}/**
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
 */class Hw{constructor(){this.un=new Ww}addToCollectionParentIndex(e,n){return this.un.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Zn.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Zn.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class Ww{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Fd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class St{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(41943040,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
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
 */class ps{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ps(0)}static kn(){return new ps(-1)}}/**
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
 */function Ud([t,e],[n,r]){const s=Ee(t,n);return s===0?Ee(e,r):s}class zw{constructor(e){this.Un=e,this.buffer=new Xe(Ud),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ud(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Kw{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){X("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ws(n)?X("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Is(n)}await this.Hn(3e5)})}}class Gw{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(ga.oe);const r=new zw(n);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Fd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fd):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,s,i,o,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),zr()<=ge.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Qw(t,e){return new Gw(t,e)}/**
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
 */class Yw{constructor(){this.changes=new Dr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Jw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Xw{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ai(r.mutation,s,xt.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=vr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Gs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=wn();const o=oi(),c=function(){return oi()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof ar)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),ai(d.mutation,h,d.mutation.getFieldMask(),Ke.now())):o.set(h.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new Jw(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=oi();let s=new Fe((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||xt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Fm();d.forEach(g=>{if(!i.has(g)){const _=Hm(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Vm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(vr());let c=-1,l=i;return o.next(h=>x.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,_e())).next(d=>({batchId:c,changes:Lm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Gs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Gs();return this.indexManager.getCollectionParents(e,i).next(c=>x.forEach(c,l=>{const h=function(p,g){return new As(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,mt.newInvalidDocument(d)))});let c=Gs();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&ai(d.mutation,h,xt.empty(),Ke.now()),Ea(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class Zw{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return x.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:sn(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:qw(s.bundledQuery),readTime:sn(s.readTime)}}(n)),x.resolve()}}/**
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
 */class eA{constructor(){this.overlays=new Fe(re.comparator),this.Ir=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vr();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=vr(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=vr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=vr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return x.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vw(n,r));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class tA{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
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
 */class Jl{constructor(){this.Tr=new Xe(Ye.Er),this.dr=new Xe(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new Oe([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new Oe([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=_e();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||Ee(e.wr,n.wr)}static Ar(e,n){return Ee(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
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
 */class nA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Xe(Ye.Er)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yw(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(Ee);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),x.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new re(i),0);let c=new Xe(Ee);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),x.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Re(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return x.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),s=this.br.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rA{constructor(e){this.Mr=e,this.docs=function(){return new Fe(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=wn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=wn();const o=n.path,c=new re(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||OI(VI(d),r)<=0||(s.has(d.key)||Ea(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Or(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sA(this)}getSize(e){return x.resolve(this.size)}}class sA extends Yw{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class iA{constructor(e){this.persistence=e,this.Nr=new Dr(n=>ql(n),Hl),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jl,this.targetCount=0,this.kr=ps.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),x.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Kn(n),x.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Br.containsKey(n))}}/**
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
 */class ng{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ga(0),this.Kr=!1,this.Kr=!0,this.$r=new tA,this.referenceDelegate=e(this),this.Ur=new iA(this),this.indexManager=new Hw,this.remoteDocumentCache=function(s){return new rA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new jw(n),this.Gr=new Zw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new nA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new oA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return x.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class oA extends MI{constructor(e){super(),this.currentSequenceNumber=e}}class Xl{constructor(e){this.persistence=e,this.Jr=new Jl,this.Yr=null}static Zr(e){return new Xl(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),x.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Xr,r=>{const s=re.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return x.or([()=>x.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class Wo{constructor(e,n){this.persistence=e,this.ti=new Dr(r=>UI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Qw(this,n)}static Zr(e,n){return new Wo(e,n)}zr(){}jr(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return x.forEach(this.ti,(r,s)=>this.nr(e,r,s).next(i=>i?x.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Or(e,o=>this.nr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),x.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=To(e.data.value)),n}nr(e,n,r){return x.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ti.get(n);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Zl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class aA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return sT()?8:LI(yt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new aA;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(zr()<=ge.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),x.resolve()):(zr()<=ge.DEBUG&&X("QueryEngine","Query:",Kr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(zr()<=ge.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):x.resolve())}Yi(e,n){if(Sd(n))return x.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Jc(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,o,l.readTime)?this.Yi(e,Jc(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return Sd(n)||s.isEqual(he.min())?x.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?x.resolve(null):(zr()<=ge.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kr(n)),this.rs(e,o,n,DI(s,-1)).next(c=>c))})}ts(e,n){let r=new Xe(xm(e));return n.forEach((s,i)=>{Ea(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return zr()<=ge.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Zn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class lA{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Fe(Ee),this._s=new Dr(i=>ql(i),Hl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xw(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function uA(t,e,n,r){return new lA(t,e,n,r)}async function rg(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function hA(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,g=p.keys();let _=x.resolve();return g.forEach(S=>{_=_.next(()=>d.getEntry(l,S)).next(k=>{const D=h.docVersions.get(S);Re(D!==null),k.version.compareTo(D)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function sg(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function dA(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ot.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(k,D,B){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,_,d)&&c.push(n.Ur.updateTargetData(i,_))});let l=wn(),h=_e();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(fA(i,o,e.documentUpdates).next(d=>{l=d.Ps,h=d.Is})),!r.isEqual(he.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return x.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function fA(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=wn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function pA(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mA(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function nl(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ws(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Bd(t,e,n){const r=de(t);let s=he.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=de(l),g=p._s.get(d);return g!==void 0?x.resolve(p.os.get(g)):p.Ur.getTargetData(h,d)}(r,o,rn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:_e())).next(c=>(gA(r,rw(e),c),{documents:c,Ts:i})))}function gA(t,e,n){let r=t.us.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class $d{constructor(){this.activeTargetIds=lw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _A{constructor(){this.so=new $d,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new $d,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yA{_o(e){}shutdown(){}}/**
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
 */class jd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ho=null;function gc(){return ho===null?ho=function(){return 268435456+Math.round(2147483648*Math.random())}():ho++,"0x"+ho.toString(16)}/**
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
 */const vA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class EA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ht="WebChannelConnection";class TA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=gc(),l=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(d=>(X("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw us("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=vA[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=gc();return new Promise((o,c)=>{const l=new _m;l.setWithCredentials(!0),l.listenOnce(ym.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Eo.NO_ERROR:const d=l.getResponseJson();X(ht,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Eo.TIMEOUT:X(ht,`RPC '${e}' ${i} timed out`),c(new Z(M.DEADLINE_EXCEEDED,"Request time out"));break;case Eo.HTTP_ERROR:const p=l.getStatus();if(X(ht,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const S=function(D){const B=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(B)>=0?B:M.UNKNOWN}(_.status);c(new Z(S,_.message))}else c(new Z(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Z(M.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{X(ht,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(ht,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=gc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Tm(),c=Em(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");X(ht,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let g=!1,_=!1;const S=new EA({Io:D=>{_?X(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(X(ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(ht,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},To:()=>p.close()}),k=(D,B,$)=>{D.listen(B,j=>{try{$(j)}catch(W){setTimeout(()=>{throw W},0)}})};return k(p,Ks.EventType.OPEN,()=>{_||(X(ht,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),k(p,Ks.EventType.CLOSE,()=>{_||(_=!0,X(ht,`RPC '${e}' stream ${s} transport closed`),S.So())}),k(p,Ks.EventType.ERROR,D=>{_||(_=!0,us(ht,`RPC '${e}' stream ${s} transport errored:`,D),S.So(new Z(M.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ks.EventType.MESSAGE,D=>{var B;if(!_){const $=D.data[0];Re(!!$);const j=$,W=j.error||((B=j[0])===null||B===void 0?void 0:B.error);if(W){X(ht,`RPC '${e}' stream ${s} received error:`,W);const ie=W.status;let pe=function(E){const w=je[E];if(w!==void 0)return zm(w)}(ie),A=W.message;pe===void 0&&(pe=M.INTERNAL,A="Unknown error status: "+ie+" with message "+W.message),_=!0,S.So(new Z(pe,A)),p.close()}else X(ht,`RPC '${e}' stream ${s} received:`,$),S.bo($)}}),k(c,vm.STAT_EVENT,D=>{D.stat===Wc.PROXY?X(ht,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Wc.NOPROXY&&X(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function _c(){return typeof document<"u"?document:null}/**
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
 */function Aa(t){return new Pw(t,!0)}/**
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
 */class ig{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class og{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ig(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IA extends og{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Nw(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?sn(o.readTime):he.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=tl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Qc(l)?{documents:Ow(i,l)}:{query:xw(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Qm(i,o.resumeToken);const h=Xc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=Ho(i,o.snapshotVersion.toTimestamp());const h=Xc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Lw(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=tl(this.serializer),n.removeTarget=e,this.a_(n)}}class wA extends og{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Re(!!e.streamToken),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Vw(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=tl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Dw(this.serializer,r))};this.a_(n)}}/**
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
 */class AA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Zc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Zc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class bA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(In(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class RA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Vr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=de(l);h.L_.add(4),await xi(h),h.q_.set("Unknown"),h.L_.delete(4),await ba(h)}(this))})}),this.q_=new bA(r,s)}}async function ba(t){if(Vr(t))for(const e of t.B_)await e(!0)}async function xi(t){for(const e of t.B_)await e(!1)}function ag(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ru(n)?nu(n):bs(n).r_()&&tu(n,e))}function eu(t,e){const n=de(t),r=bs(n);n.N_.delete(e),r.r_()&&cg(n,e),n.N_.size===0&&(r.r_()?r.o_():Vr(n)&&n.q_.set("Unknown"))}function tu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bs(t).A_(e)}function cg(t,e){t.Q_.xe(e),bs(t).R_(e)}function nu(t){t.Q_=new Aw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),bs(t).start(),t.q_.v_()}function ru(t){return Vr(t)&&!bs(t).n_()&&t.N_.size>0}function Vr(t){return de(t).L_.size===0}function lg(t){t.Q_=void 0}async function SA(t){t.q_.set("Online")}async function PA(t){t.N_.forEach((e,n)=>{tu(t,e)})}async function CA(t,e){lg(t),ru(t)?(t.q_.M_(e),nu(t)):t.q_.set("Unknown")}async function kA(t,e,n){if(t.q_.set("Online"),e instanceof Gm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zo(t,r)}else if(e instanceof Ao?t.Q_.Ke(e):e instanceof Km?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await sg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(ot.EMPTY_BYTE_STRING,d.snapshotVersion)),cg(i,l);const p=new qn(d.target,l,h,d.sequenceNumber);tu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await zo(t,r)}}async function zo(t,e,n){if(!ws(e))throw e;t.L_.add(1),await xi(t),t.q_.set("Offline"),n||(n=()=>sg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ba(t)})}function ug(t,e){return e().catch(n=>zo(t,n,e))}async function Ra(t){const e=de(t),n=rr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;NA(e);)try{const s=await pA(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,DA(e,s)}catch(s){await zo(e,s)}hg(e)&&dg(e)}function NA(t){return Vr(t)&&t.O_.length<10}function DA(t,e){t.O_.push(e);const n=rr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function hg(t){return Vr(t)&&!rr(t).n_()&&t.O_.length>0}function dg(t){rr(t).start()}async function VA(t){rr(t).p_()}async function OA(t){const e=rr(t);for(const n of t.O_)e.m_(n.mutations)}async function xA(t,e,n){const r=t.O_.shift(),s=Gl.from(r,e,n);await ug(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ra(t)}async function MA(t,e){e&&rr(t).V_&&await async function(r,s){if(function(o){return Tw(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();rr(r).s_(),await ug(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ra(r)}}(t,e),hg(t)&&dg(t)}async function qd(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Vr(n);n.L_.add(3),await xi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ba(n)}async function LA(t,e){const n=de(t);e?(n.L_.delete(2),await ba(n)):e||(n.L_.add(2),await xi(n),n.q_.set("Unknown"))}function bs(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new IA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:SA.bind(null,t),Ro:PA.bind(null,t),mo:CA.bind(null,t),d_:kA.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ru(t)?nu(t):t.q_.set("Unknown")):(await t.K_.stop(),lg(t))})),t.K_}function rr(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new wA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:VA.bind(null,t),mo:MA.bind(null,t),f_:OA.bind(null,t),g_:xA.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ra(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class su{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new su(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iu(t,e){if(In("AsyncQueue",`${e}: ${t}`),ws(t))return new Z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Gs(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Hd{constructor(){this.W_=new Fe(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ms{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ms(e,n,ns.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class FA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class UA{constructor(){this.queries=Wd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Wd(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new Z(M.ABORTED,"Firestore shutting down"))}}function Wd(){return new Dr(t=>Om(t),va)}async function BA(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new FA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=iu(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&ou(n)}async function $A(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jA(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&ou(n)}function qA(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function ou(t){t.Y_.forEach(e=>{e.next()})}var rl,zd;(zd=rl||(rl={})).ea="default",zd.Cache="cache";class HA{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==rl.Cache}}/**
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
 */class fg{constructor(e){this.key=e}}class pg{constructor(e){this.key=e}}class WA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=xm(e),this.Ra=new ns(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Hd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),_=Ea(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;g&&_?g.data.isEqual(_.data)?S!==k&&(r.track({type:3,doc:_}),D=!0):this.ga(g,_)||(r.track({type:2,doc:_}),D=!0,(l&&this.Aa(_,l)>0||h&&this.Aa(_,h)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),D=!0):g&&!_&&(r.track({type:1,doc:g}),D=!0,(l||h)&&(c=!0)),D&&(_?(o=o.add(_),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(_,S){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return k(_)-k(S)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new ms(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Hd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new pg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new fg(r))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ms.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KA{constructor(e){this.key=e,this.va=!1}}class GA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Dr(c=>Om(c),va),this.Ma=new Map,this.xa=new Set,this.Oa=new Fe(re.comparator),this.Na=new Map,this.La=new Jl,this.Ba={},this.ka=new Map,this.qa=ps.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function QA(t,e,n=!0){const r=Eg(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await mg(r,e,n,!0),s}async function YA(t,e){const n=Eg(t);await mg(n,e,!0,!1)}async function mg(t,e,n,r){const s=await mA(t.localStore,rn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await JA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ag(t.remoteStore,s),c}async function JA(t,e,n,r,s){t.Ka=(p,g,_)=>async function(k,D,B,$){let j=D.view.ma(B);j.ns&&(j=await Bd(k.localStore,D.query,!1).then(({documents:A})=>D.view.ma(A,j)));const W=$&&$.targetChanges.get(D.targetId),ie=$&&$.targetMismatches.get(D.targetId)!=null,pe=D.view.applyChanges(j,k.isPrimaryClient,W,ie);return Gd(k,D.targetId,pe.wa),pe.snapshot}(t,p,g,_);const i=await Bd(t.localStore,e,!0),o=new WA(e,i.Ts),c=o.ma(i.documents),l=Oi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Gd(t,n,h.wa);const d=new zA(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function XA(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!va(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await nl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&eu(r.remoteStore,s.targetId),sl(r,s.targetId)}).catch(Is)):(sl(r,s.targetId),await nl(r.localStore,s.targetId,!0))}async function ZA(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),eu(n.remoteStore,r.targetId))}async function e0(t,e,n){const r=a0(t);try{const s=await function(o,c){const l=de(o),h=Ke.now(),d=c.reduce((_,S)=>_.add(S.key),_e());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=wn(),k=_e();return l.cs.getEntries(_,d).next(D=>{S=D,S.forEach((B,$)=>{$.isValidDocument()||(k=k.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,S)).next(D=>{p=D;const B=[];for(const $ of c){const j=gw($,p.get($.key).overlayedDocument);j!=null&&B.push(new ar($.key,j,Rm(j.value.mapValue),Wt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,B,c)}).next(D=>{g=D;const B=D.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(_,D.batchId,B)})}).then(()=>({batchId:g.batchId,changes:Lm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new Fe(Ee)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Mi(r,s.changes),await Ra(r.remoteStore)}catch(s){const i=iu(s,"Failed to persist write");n.reject(i)}}async function gg(t,e){const n=de(t);try{const r=await dA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Re(o.va):s.removedDocuments.size>0&&(Re(o.va),o.va=!1))}),await Mi(n,r,e)}catch(r){await Is(r)}}function Kd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(c)&&(h=!0)}),h&&ou(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function t0(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Fe(re.comparator);o=o.insert(i,mt.newNoDocument(i,he.min()));const c=_e().add(i),l=new wa(he.min(),new Map,new Fe(Ee),o,c);await gg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),au(r)}else await nl(r.localStore,e,!1).then(()=>sl(r,e,n)).catch(Is)}async function n0(t,e){const n=de(t),r=e.batch.batchId;try{const s=await hA(n.localStore,e);yg(n,r,null),_g(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Mi(n,s)}catch(s){await Is(s)}}async function r0(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Re(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);yg(r,e,n),_g(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Mi(r,s)}catch(s){await Is(s)}}function _g(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function yg(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function sl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||vg(t,r)})}function vg(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(eu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),au(t))}function Gd(t,e,n){for(const r of n)r instanceof fg?(t.La.addReference(r.key,e),s0(t,r)):r instanceof pg?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||vg(t,r.key)):le()}function s0(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),au(t))}function au(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new KA(n)),t.Oa=t.Oa.insert(n,r),ag(t.remoteStore,new qn(rn(Wl(n.path)),r,"TargetPurposeLimboResolution",ga.oe))}}async function Mi(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Zl.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const d=de(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(h,g=>x.forEach(g.$i,_=>d.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>x.forEach(g.Ui,_=>d.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!ws(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=d.os.get(g),S=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(g,k)}}}(r.localStore,i))}async function i0(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await rg(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new Z(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mi(n,r.hs)}}function o0(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function Eg(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=o0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=t0.bind(null,e),e.Ca.d_=jA.bind(null,e.eventManager),e.Ca.$a=qA.bind(null,e.eventManager),e}function a0(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=n0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=r0.bind(null,e),e}class Ko{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Aa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return uA(this.persistence,new cA,e.initialUser,this.serializer)}Ga(e){return new ng(Xl.Zr,this.serializer)}Wa(e){return new _A}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ko.provider={build:()=>new Ko};class c0 extends Ko{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){Re(this.persistence.referenceDelegate instanceof Wo);const r=this.persistence.referenceDelegate.garbageCollector;return new Kw(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new ng(r=>Wo.Zr(r,n),this.serializer)}}class il{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=i0.bind(null,this.syncEngine),await LA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UA}()}createDatastore(e){const n=Aa(e.databaseInfo.databaseId),r=function(i){return new TA(i)}(e.databaseInfo);return function(i,o,c,l){return new AA(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new RA(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Kd(this.syncEngine,n,0),function(){return jd.D()?new jd:new yA}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new GA(s,i,o,c,l,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await xi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}il.provider={build:()=>new il};/**
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
 *//**
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
 */class l0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class u0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=wm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=iu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yc(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await h0(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>qd(e.remoteStore,s)),t._onlineComponents=e}async function h0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;us("Error using user provided cache. Falling back to memory cache: "+n),await yc(t,new Ko)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await yc(t,new c0(void 0));return t._offlineComponents}async function Tg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Qd(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Qd(t,new il))),t._onlineComponents}function d0(t){return Tg(t).then(e=>e.syncEngine)}async function Yd(t){const e=await Tg(t),n=e.eventManager;return n.onListen=QA.bind(null,e.syncEngine),n.onUnlisten=XA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=YA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZA.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ig(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Jd=new Map;/**
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
 */function wg(t,e,n){if(!n)throw new Z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function f0(t,e,n,r){if(e===!0&&r===!0)throw new Z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xd(t){if(!re.isDocumentKey(t))throw new Z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zd(t){if(re.isDocumentKey(t))throw new Z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sa(t);throw new Z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ef{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}f0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ig((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ef({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ef(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wI;switch(r.type){case"firstParty":return new SI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jd.get(n);r&&(X("ComponentProvider","Removing Datastore"),Jd.delete(n),r.terminate())}(this),Promise.resolve()}}function p0(t,e,n,r={}){var s;const i=(t=Qn(t,Pa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=dt.MOCK_USER;else{c=JE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new dt(h)}t._authCredentials=new AI(new Im(c,l))}}/**
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
 */class Or{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Or(this.firestore,e,this._query)}}class kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class Yn extends Or{constructor(e,n,r){super(e,n,Wl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new re(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function m0(t,e,...n){if(t=Ge(t),wg("collection","path",e),t instanceof Pa){const r=Oe.fromString(e,...n);return Zd(r),new Yn(t,null,r)}{if(!(t instanceof kt||t instanceof Yn))throw new Z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Zd(r),new Yn(t.firestore,null,r)}}function ol(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=wm.newId()),wg("doc","path",e),t instanceof Pa){const r=Oe.fromString(e,...n);return Xd(r),new kt(t,null,new re(r))}{if(!(t instanceof kt||t instanceof Yn))throw new Z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Xd(r),new kt(t.firestore,t instanceof Yn?t.converter:null,new re(r))}}/**
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
 */class tf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ig(this,"async_queue_retry"),this.Vu=()=>{const r=_c();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=_c();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=_c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ar;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ws(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw In("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=su.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&le()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function nf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class gs extends Pa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new tf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tf(e),this._firestoreClient=void 0,await e}}}function g0(t,e){const n=typeof t=="object"?t:fm(),r=typeof t=="string"?t:"(default)",s=Ul(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=QE("firestore");i&&p0(s,...i)}return s}function Ag(t){if(t._terminated)throw new Z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_0(t),t._firestoreClient}function _0(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new jI(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ig(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new u0(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class _s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _s(ot.fromBase64String(e))}catch(n){throw new Z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _s(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ca{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cu{constructor(e){this._methodName=e}}/**
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
 */class lu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class uu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const y0=/^__.*__$/;class v0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vi(e,this.data,n,this.fieldTransforms)}}class bg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Rg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class hu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new hu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Go(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Rg(this.Cu)&&y0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class E0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Aa(e)}Qu(e,n,r,s=!1){return new hu({Cu:e,methodName:n,qu:r,path:it.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function du(t){const e=t._freezeSettings(),n=Aa(t._databaseId);return new E0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function T0(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);fu("Data must be an object, but it was:",o,r);const c=Sg(r,o);let l,h;if(i.merge)l=new xt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=al(e,p,n);if(!o.contains(g))throw new Z(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Cg(d,g)||d.push(g)}l=new xt(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new v0(new Ct(c),l,h)}class ka extends cu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ka}}function I0(t,e,n,r){const s=t.Qu(1,e,n);fu("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();or(r,(l,h)=>{const d=pu(e,l,n);h=Ge(h);const p=s.Nu(d);if(h instanceof ka)i.push(d);else{const g=Li(h,p);g!=null&&(i.push(d),o.set(d,g))}});const c=new xt(i);return new bg(o,c,s.fieldTransforms)}function w0(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[al(e,r,n)],l=[s];if(i.length%2!=0)throw new Z(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(al(e,i[g])),l.push(i[g+1]);const h=[],d=Ct.empty();for(let g=c.length-1;g>=0;--g)if(!Cg(h,c[g])){const _=c[g];let S=l[g];S=Ge(S);const k=o.Nu(_);if(S instanceof ka)h.push(_);else{const D=Li(S,k);D!=null&&(h.push(_),d.set(_,D))}}const p=new xt(h);return new bg(d,p,o.fieldTransforms)}function A0(t,e,n,r=!1){return Li(n,t.Qu(r?4:3,e))}function Li(t,e){if(Pg(t=Ge(t)))return fu("Unsupported field value:",e,t),Sg(t,e);if(t instanceof cu)return function(r,s){if(!Rg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Li(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:Ho(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ho(s.serializer,i)}}if(r instanceof lu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _s)return{bytesValue:Qm(s.serializer,r._byteString)};if(r instanceof kt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof uu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return zl(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Sa(r)}`)}(t,e)}function Sg(t,e){const n={};return Am(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):or(t,(r,s)=>{const i=Li(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Pg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof lu||t instanceof _s||t instanceof kt||t instanceof cu||t instanceof uu)}function fu(t,e,n){if(!Pg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Sa(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function al(t,e,n){if((e=Ge(e))instanceof Ca)return e._internalPath;if(typeof e=="string")return pu(t,e);throw Go("Field path arguments must be of type string or ",t,!1,void 0,n)}const b0=new RegExp("[~\\*/\\[\\]]");function pu(t,e,n){if(e.search(b0)>=0)throw Go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ca(...e.split("."))._internalPath}catch{throw Go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Go(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Z(M.INVALID_ARGUMENT,c+t+l)}function Cg(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class kg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new R0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class R0 extends kg{data(){return super.data()}}function mu(t,e){return typeof e=="string"?pu(t,e):e instanceof Ca?e._internalPath:e._delegate._internalPath}/**
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
 */function S0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gu{}class Ng extends gu{}function P0(t,e,...n){let r=[];e instanceof gu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof yu).length,c=i.filter(l=>l instanceof _u).length;if(o>1||o>0&&c>0)throw new Z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class _u extends Ng{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _u(e,n,r)}_apply(e){const n=this._parse(e);return Dg(e._query,n),new Or(e.firestore,e.converter,Yc(e._query,n))}_parse(e){const n=du(e.firestore);return function(i,o,c,l,h,d,p){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){sf(p,d);const _=[];for(const S of p)_.push(rf(l,i,S));g={arrayValue:{values:_}}}else g=rf(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||sf(p,d),g=A0(c,o,p,d==="in"||d==="not-in");return He.create(h,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class yu extends gu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Dg(o,l),o=Yc(o,l)}(e._query,n),new Or(e.firestore,e.converter,Yc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vu extends Ng{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ii(i,o)}(e._query,this._field,this._direction);return new Or(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new As(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function C0(t,e="asc"){const n=e,r=mu("orderBy",t);return vu._create(r,n)}function rf(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new Z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vm(e)&&n.indexOf("/")!==-1)throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!re.isDocumentKey(r))throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Td(t,new re(r))}if(n instanceof kt)return Td(t,n._key);throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sa(n)}.`)}function sf(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dg(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class k0{convertValue(e,n="none"){switch(nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return or(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Be(o.doubleValue));return new uu(i)}convertGeoPoint(e){return new lu(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ya(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vi(e));default:return null}}convertTimestamp(e){const n=er(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Re(tg(r));const s=new Ei(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function N0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vg extends kg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bo extends Vg{data(e={}){return super.data(e)}}class D0{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ys(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bo(this._firestore,this._userDataWriter,r.key,r,new Ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:V0(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function V0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}class Og extends k0{constructor(e){super(),this.firestore=e}convertBytes(e){return new _s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function O0(t,e,n,...r){t=Qn(t,kt);const s=Qn(t.firestore,gs),i=du(s);let o;return o=typeof(e=Ge(e))=="string"||e instanceof Ca?w0(i,"updateDoc",t._key,e,n,r):I0(i,"updateDoc",t._key,e),Eu(s,[o.toMutation(t._key,Wt.exists(!0))])}function x0(t){return Eu(Qn(t.firestore,gs),[new Kl(t._key,Wt.none())])}function M0(t,e){const n=Qn(t.firestore,gs),r=ol(t),s=N0(t.converter,e);return Eu(n,[T0(du(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function L0(t,...e){var n,r,s;t=Ge(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||nf(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(nf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(t instanceof kt)h=Qn(t.firestore,gs),d=Wl(t._key.path),l={next:p=>{e[o]&&e[o](F0(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Qn(t,Or);h=Qn(p.firestore,gs),d=p._query;const g=new Og(h);l={next:_=>{e[o]&&e[o](new D0(h,g,p,_))},error:e[o+1],complete:e[o+2]},S0(t._query)}return function(g,_,S,k){const D=new l0(k),B=new HA(_,D,S);return g.asyncQueue.enqueueAndForget(async()=>BA(await Yd(g),B)),()=>{D.Za(),g.asyncQueue.enqueueAndForget(async()=>$A(await Yd(g),B))}}(Ag(h),d,c,l)}function Eu(t,e){return function(r,s){const i=new Ar;return r.asyncQueue.enqueueAndForget(async()=>e0(await d0(r),s,i)),i.promise}(Ag(t),e)}function F0(t,e,n){const r=n.docs.get(e._key),s=new Og(t);return new Vg(t,s,e._key,r,new Ys(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ts=s})(Es),ls(new Rr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new gs(new bI(r.getProvider("auth-internal")),new CI(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Gn(md,"4.7.4",e),Gn(md,"4.7.4","esm2017")})();function Tu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function xg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const U0=xg,Mg=new Ni("auth","Firebase",xg());/**
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
 */const Qo=new Ll("@firebase/auth");function B0(t,...e){Qo.logLevel<=ge.WARN&&Qo.warn(`Auth (${Es}): ${t}`,...e)}function Ro(t,...e){Qo.logLevel<=ge.ERROR&&Qo.error(`Auth (${Es}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw Iu(t,...e)}function on(t,...e){return Iu(t,...e)}function Lg(t,e,n){const r=Object.assign(Object.assign({},U0()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return Lg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Iu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mg.create(t,...e)}function ae(t,e,...n){if(!t)throw Iu(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ro(e),new Error(e)}function An(t,e){t||_n(e)}/**
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
 */function cl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $0(){return of()==="http:"||of()==="https:"}function of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function j0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($0()||tT()||"connection"in navigator)?navigator.onLine:!0}function q0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fi{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=XE()||nT()}get(){return j0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wu(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Fg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const H0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const W0=new Fi(3e4,6e4);function cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lr(t,e,n,r,s={}){return Ug(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Di(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return eT()||(h.referrerPolicy="no-referrer"),Fg.fetch()(Bg(t,t.config.apiHost,n,c),h)})}async function Ug(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},H0),e);try{const s=new K0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Lg(t,d,h);Kt(t,d)}}catch(s){if(s instanceof Sn)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function Ui(t,e,n,r,s={}){const i=await lr(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Bg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?wu(t.config,s):`${t.config.apiScheme}://${s}`}function z0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class K0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),W0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}function af(t){return t!==void 0&&t.enterprise!==void 0}class G0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return z0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Q0(t,e){return lr(t,"GET","/v2/recaptchaConfig",cr(t,e))}/**
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
 */async function Y0(t,e){return lr(t,"POST","/v1/accounts:delete",e)}async function $g(t,e){return lr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function J0(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),s=Au(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ci(vc(s.auth_time)),issuedAtTime:ci(vc(s.iat)),expirationTime:ci(vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vc(t){return Number(t)*1e3}function Au(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=om(n);return s?JSON.parse(s):(Ro("Failed to decode base64 JWT payload"),null)}catch(s){return Ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cf(t){const e=Au(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&X0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function X0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Z0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ll{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ci(this.lastLoginAt),this.creationTime=ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await bi(t,$g(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jg(i.providerUserInfo):[],c=tb(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ll(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function eb(t){const e=Ge(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jg(t){return t.map(e=>{var{providerId:n}=e,r=Tu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nb(t,e){const n=await Ug(t,{},async()=>{const r=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Bg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Fg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rb(t,e){return lr(t,"POST","/v2/accounts:revokeToken",cr(t,e))}/**
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
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=cf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new rs;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
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
 */function Vn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Tu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ll(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return J0(this,e)}reload(){return eb(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await bi(this,Y0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(h=n.createdAt)!==null&&h!==void 0?h:void 0,$=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:W,isAnonymous:ie,providerData:pe,stsTokenManager:A}=n;ae(j&&A,e,"internal-error");const y=rs.fromJSON(this.name,A);ae(typeof j=="string",e,"internal-error"),Vn(p,e.name),Vn(g,e.name),ae(typeof W=="boolean",e,"internal-error"),ae(typeof ie=="boolean",e,"internal-error"),Vn(_,e.name),Vn(S,e.name),Vn(k,e.name),Vn(D,e.name),Vn(B,e.name),Vn($,e.name);const E=new yn({uid:j,auth:e,email:g,emailVerified:W,displayName:p,isAnonymous:ie,photoURL:S,phoneNumber:_,tenantId:k,stsTokenManager:y,createdAt:B,lastLoginAt:$});return pe&&Array.isArray(pe)&&(E.providerData=pe.map(w=>Object.assign({},w))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new rs;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new rs;c.updateFromIdToken(r);const l=new yn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ll(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const lf=new Map;function vn(t){An(t instanceof Function,"Expected a class definition");let e=lf.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lf.set(t,e),e)}/**
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
 */class qg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qg.type="NONE";const uf=qg;/**
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
 */function So(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=So(this.userKey,s.apiKey,i),this.fullPersistenceKey=So("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(vn(uf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||vn(uf);const o=So(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=yn._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ss(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ss(i,e,r))}}/**
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
 */function hf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qg(e))return"Blackberry";if(Yg(e))return"Webos";if(Wg(e))return"Safari";if((e.includes("chrome/")||zg(e))&&!e.includes("edge/"))return"Chrome";if(Gg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hg(t=yt()){return/firefox\//i.test(t)}function Wg(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zg(t=yt()){return/crios\//i.test(t)}function Kg(t=yt()){return/iemobile/i.test(t)}function Gg(t=yt()){return/android/i.test(t)}function Qg(t=yt()){return/blackberry/i.test(t)}function Yg(t=yt()){return/webos/i.test(t)}function bu(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sb(t=yt()){var e;return bu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ib(){return rT()&&document.documentMode===10}function Jg(t=yt()){return bu(t)||Gg(t)||Yg(t)||Qg(t)||/windows phone/i.test(t)||Kg(t)}/**
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
 */function Xg(t,e=[]){let n;switch(t){case"Browser":n=hf(yt());break;case"Worker":n=`${hf(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Es}/${r}`}/**
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
 */class ob{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function ab(t,e={}){return lr(t,"GET","/v2/passwordPolicy",cr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const cb=6;class lb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:cb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ub{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new df(this),this.idTokenSubscription=new df(this),this.beforeStateQueue=new ob(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $g(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=q0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(En(this));const n=e?Ge(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ab(this),n=new lb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&B0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(t){return Ge(t)}class df{constructor(e){this.auth=e,this.observer=null,this.addObserver=hT(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hb(t){Na=t}function Zg(t){return Na.loadJS(t)}function db(){return Na.recaptchaEnterpriseScript}function fb(){return Na.gapiScript}function pb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class mb{constructor(){this.enterprise=new gb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class gb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const _b="recaptcha-enterprise",e_="NO_RECAPTCHA";class yb{constructor(e){this.type=_b,this.auth=xr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Q0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new G0(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;af(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(e_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&af(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=db();l.length!==0&&(l+=c),Zg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function ff(t,e,n,r=!1,s=!1){const i=new yb(t);let o;if(s)o=e_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ul(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ff(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ff(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function vb(t,e){const n=Ul(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fo(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function Eb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tb(t,e,n){const r=xr(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=t_(e),{host:o,port:c}=Ib(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),wb()}function t_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ib(t){const e=t_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pf(o)}}}function pf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ru{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function Ab(t,e){return lr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bb(t,e){return Ui(t,"POST","/v1/accounts:signInWithPassword",cr(t,e))}/**
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
 */async function Rb(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}async function Sb(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}/**
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
 */class Ri extends Ru{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ul(e,n,"signInWithPassword",bb);case"emailLink":return Rb(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ul(e,r,"signUpPassword",Ab);case"emailLink":return Sb(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function is(t,e){return Ui(t,"POST","/v1/accounts:signInWithIdp",cr(t,e))}/**
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
 */const Pb="http://localhost";class Pr extends Ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Tu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Pr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:Pb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
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
 */function Cb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kb(t){const e=Ws(zs(t)).link,n=e?Ws(zs(e)).deep_link_id:null,r=Ws(zs(t)).deep_link_id;return(r?Ws(zs(r)).link:null)||r||n||e||t}class Su{constructor(e){var n,r,s,i,o,c;const l=Ws(zs(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Cb((s=l.mode)!==null&&s!==void 0?s:null);ae(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=kb(e);try{return new Su(n)}catch{return null}}}/**
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
 */class Rs{constructor(){this.providerId=Rs.PROVIDER_ID}static credential(e,n){return Ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Su.parseLink(n);return ae(r,"argument-error"),Ri._fromEmailAndCode(e,r.code,r.tenantId)}}Rs.PROVIDER_ID="password";Rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class n_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bi extends n_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Un extends Bi{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class $n extends Bi{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class jn extends Bi{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */async function Nb(t,e){return Ui(t,"POST","/v1/accounts:signUp",cr(t,e))}/**
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
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=mf(r);return new Cr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=mf(r);return new Cr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function mf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Jo extends Sn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Jo(e,n,r,s)}}function r_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,i,e,r):i})}async function Db(t,e,n=!1){const r=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
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
 */async function Vb(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await bi(t,r_(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Au(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Cr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
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
 */async function s_(t,e,n=!1){if(en(t.app))return Promise.reject(En(t));const r="signIn",s=await r_(t,r,e),i=await Cr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ob(t,e){return s_(xr(t),e)}/**
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
 */async function i_(t){const e=xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xb(t,e,n){if(en(t.app))return Promise.reject(En(t));const r=xr(t),o=await ul(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Nb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&i_(t),l}),c=await Cr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Mb(t,e,n){return en(t.app)?Promise.reject(En(t)):Ob(Ge(t),Rs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&i_(t),r})}function Lb(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function Fb(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function Ub(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function Bb(t){return Ge(t).signOut()}const Xo="__sak";/**
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
 */class o_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $b=1e3,jb=10;class a_ extends o_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ib()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$b)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}a_.type="LOCAL";const qb=a_;/**
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
 */class c_ extends o_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}c_.type="SESSION";const l_=c_;/**
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
 */function Hb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await Hb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Da.receivers=[];/**
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
 */function Pu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Wb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Pu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function zb(t){an().location.href=t}/**
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
 */function u_(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function Kb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Qb(){return u_()?self:null}/**
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
 */const h_="firebaseLocalStorageDb",Yb=1,Zo="firebaseLocalStorage",d_="fbase_key";class $i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function Jb(){const t=indexedDB.deleteDatabase(h_);return new $i(t).toPromise()}function hl(){const t=indexedDB.open(h_,Yb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zo,{keyPath:d_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zo)?e(r):(r.close(),await Jb(),e(await hl()))})})}async function gf(t,e,n){const r=Va(t,!0).put({[d_]:e,value:n});return new $i(r).toPromise()}async function Xb(t,e){const n=Va(t,!1).get(e),r=await new $i(n).toPromise();return r===void 0?null:r.value}function _f(t,e){const n=Va(t,!0).delete(e);return new $i(n).toPromise()}const Zb=800,eR=3;class f_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return u_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Da._getInstance(Qb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Kb(),!this.activeServiceWorker)return;this.sender=new Wb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hl();return await gf(e,Xo,"1"),await _f(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_f(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Va(s,!1).getAll();return new $i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f_.type="LOCAL";const tR=f_;new Fi(3e4,6e4);/**
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
 */function nR(t,e){return e?vn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cu extends Ru{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rR(t){return s_(t.auth,new Cu(t),t.bypassAuthState)}function sR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Vb(n,new Cu(t),t.bypassAuthState)}async function iR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Db(n,new Cu(t),t.bypassAuthState)}/**
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
 */class p_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rR;case"linkViaPopup":case"linkViaRedirect":return iR;case"reauthViaPopup":case"reauthViaRedirect":return sR;default:Kt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oR=new Fi(2e3,1e4);class Jr extends p_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oR.get())};e()}}Jr.currentPopupAction=null;/**
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
 */const aR="pendingRedirect",Po=new Map;class cR extends p_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Po.get(this.auth._key());if(!e){try{const r=await lR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Po.set(this.auth._key(),e)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lR(t,e){const n=dR(e),r=hR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uR(t,e){Po.set(t._key(),e)}function hR(t){return vn(t._redirectPersistence)}function dR(t){return So(aR,t.config.apiKey,t.name)}async function fR(t,e,n=!1){if(en(t.app))return Promise.reject(En(t));const r=xr(t),s=nR(r,e),o=await new cR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const pR=10*60*1e3;class mR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!m_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pR&&this.cachedEventUids.clear(),this.cachedEventUids.has(yf(e))}saveEventToCache(e){this.cachedEventUids.add(yf(e)),this.lastProcessedEventTime=Date.now()}}function yf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function m_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m_(t);default:return!1}}/**
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
 */async function _R(t,e={}){return lr(t,"GET","/v1/projects",e)}/**
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
 */const yR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vR=/^https?/;async function ER(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _R(t);for(const n of e)try{if(TR(n))return}catch{}Kt(t,"unauthorized-domain")}function TR(t){const e=cl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vR.test(n))return!1;if(yR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const IR=new Fi(3e4,6e4);function vf(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wR(t){return new Promise((e,n)=>{var r,s,i;function o(){vf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vf(),n(on(t,"network-request-failed"))},timeout:IR.get()})}if(!((s=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=an().gapi)===null||i===void 0)&&i.load)o();else{const c=pb("iframefcb");return an()[c]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},Zg(`${fb()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Co=null,e})}let Co=null;function AR(t){return Co=Co||wR(t),Co}/**
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
 */const bR=new Fi(5e3,15e3),RR="__/auth/iframe",SR="emulator/auth/iframe",PR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kR(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wu(e,SR):`https://${t.config.authDomain}/${RR}`,r={apiKey:e.apiKey,appName:t.name,v:Es},s=CR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Di(r).slice(1)}`}async function NR(t){const e=await AR(t),n=an().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:kR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),c=an().setTimeout(()=>{i(o)},bR.get());function l(){an().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const DR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VR=500,OR=600,xR="_blank",MR="http://localhost";class Ef{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LR(t,e,n,r=VR,s=OR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},DR),{width:r.toString(),height:s.toString(),top:i,left:o}),h=yt().toLowerCase();n&&(c=zg(h)?xR:n),Hg(h)&&(e=e||MR,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[_,S])=>`${g}${_}=${S},`,"");if(sb(h)&&c!=="_self")return FR(e||"",c),new Ef(null);const p=window.open(e||"",c,d);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Ef(p)}function FR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const UR="__/auth/handler",BR="emulator/auth/handler",$R=encodeURIComponent("fac");async function Tf(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Es,eventId:s};if(e instanceof n_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Bi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${$R}=${encodeURIComponent(l)}`:"";return`${jR(t)}?${Di(c).slice(1)}${h}`}function jR({config:t}){return t.emulator?wu(t,BR):`https://${t.authDomain}/${UR}`}/**
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
 */const Ec="webStorageSupport";class qR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=l_,this._completeRedirectFn=fR,this._overrideRedirectResult=uR}async _openPopup(e,n,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tf(e,n,r,cl(),s);return LR(e,o,Pu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Tf(e,n,r,cl(),s);return zb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NR(e),r=new mR(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ec,{type:Ec},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ec];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ER(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jg()||Wg()||bu()}}const HR=qR;var If="@firebase/auth",wf="1.8.0";/**
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
 */class WR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KR(t){ls(new Rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xg(t)},h=new ub(r,s,i,l);return Eb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ls(new Rr("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(r=>new WR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(If,wf,zR(t)),Gn(If,wf,"esm2017")}/**
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
 */const GR=5*60,QR=lm("authIdTokenMaxAge")||GR;let Af=null;const YR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QR)return;const s=n==null?void 0:n.token;Af!==s&&(Af=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function JR(t=fm()){const e=Ul(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vb(t,{popupRedirectResolver:HR,persistence:[tR,qb,l_]}),r=lm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=YR(i.toString());Fb(n,o,()=>o(n.currentUser)),Lb(n,c=>o(c))}}const s=am("auth");return s&&Tb(n,`http://${s}`),n}function XR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}hb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",XR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KR("Browser");const ZR={apiKey:"AIzaSyBm9DR6kB6OLiN8aJz6cs33YroZfXDnO5c",authDomain:"noteballs-48c49.firebaseapp.com",projectId:"noteballs-48c49",storageBucket:"noteballs-48c49.firebasestorage.app",messagingSenderId:"674028270968",appId:"1:674028270968:web:1f4f25784c436a8f77448d"},g_=dm(ZR),eS=g0(g_),po=JR(g_);let $s,bf,Tc=null;const ji=em("storeNotes",{state:()=>({notes:[],notesLoaded:!1}),actions:{init(){const t=qi();console.log("storeAuth.user.id ",t.user.id),$s=m0(eS,"users",t.user.id,"notes"),bf=P0($s,C0("date","desc")),this.getNotes()},async getNotes(){this.notesLoaded=!1,Tc=L0(bf,t=>{let e=[];t.forEach(n=>{const r={id:n.id,content:n.data().content,date:n.data().date};e.push(r)}),this.notes=e,this.notesLoaded=!0},t=>{console.log("Error: ",t)})},clearNotes(){this.notes=[],Tc&&Tc()},async addNote(t){let n=new Date().getTime().toString();await M0($s,{content:t,date:n})},async deleteNote(t){await x0(ol($s,t))},async updateNote(t,e){await O0(ol($s,t),{content:e})}},getters:{getNoteContent:t=>e=>t.notes.filter(n=>n.id===e)[0].content,totalNotesCount:t=>t.notes.length,totalCharactersCount:t=>{let e=0;return t.notes.forEach(n=>{e+=n.content.length}),e}}}),qi=em("storeAuth",{state:()=>({user:{}}),actions:{init(){const t=ji();Ub(po,e=>{e?(this.user.id=e.uid,this.user.email=e.email,this.router.push("/"),t.init()):(this.user={},this.router.replace("/auth"),t.clearNotes())})},async registerUser(t){await xb(po,t.email,t.password).then(e=>{const n=e.user;console.log("user ",n)}).catch(e=>{console.log("Error ",e.message)})},loginUser(t){Mb(po,t.email,t.password).then(e=>{const n=e.user;console.log("User logged in ",n)}).catch(e=>{console.log("Error ",e)})},async logoutUser(){await Bb(po).then(()=>{console.log("User Signed out")}).catch(t=>{console.log("Error ",t)})}}}),__=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},tS={class:"navbar is-success",role:"navigation","aria-label":"main navigation"},nS={class:"container is-max-desktop px-2"},rS={class:"navbar-brand"},sS={class:"navbar-start"},iS={class:"navbar-end"},oS={__name:"NavBar",setup(t){const e=qi(),n=Ut(!1),r=Ut(null),s=Ut(null);rm(r,()=>{n.value=!1},{ignore:[s]});const i=()=>{n.value=!1,e.logoutUser()};return(o,c)=>{const l=Vl("RouterLink");return qe(),Pt("nav",tS,[Y("div",nS,[Y("div",rS,[c[4]||(c[4]=Y("div",{class:"navbar-item is-size-4 is-family-monospace has-text-white"},"Noteballs",-1)),Y("a",{onClick:c[0]||(c[0]=ni(h=>n.value=!n.value,["prevent"])),role:"button",class:Jn(["navbar-burger has-text-white",{"is-active":n.value}]),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",ref_key:"navbarBurgerRef",ref:s},c[3]||(c[3]=[Y("span",{"aria-hidden":"true"},null,-1),Y("span",{"aria-hidden":"true"},null,-1),Y("span",{"aria-hidden":"true"},null,-1),Y("span",{"aria-hidden":"true"},null,-1)]),2)]),Y("div",{id:"navbarBasicExample",class:Jn(["navbar-menu",{"is-active":n.value}]),ref_key:"navbarMenuRef",ref:r},[Y("div",sS,[_t(e).user.id?(qe(),Pt("button",{key:0,onClick:i,class:"button is-small is-info my-3 ml-3"}," Log out "+nn(_t(e).user.email),1)):da("",!0)]),Y("div",iS,[We(l,{onClick:c[1]||(c[1]=h=>n.value=!1),to:"/",class:"navbar-item has-text-white","active-class":"is-active"},{default:os(()=>c[5]||(c[5]=[xo(" Notes ")])),_:1}),We(l,{onClick:c[2]||(c[2]=h=>n.value=!1),to:"/stats",class:"navbar-item has-text-white","active-class":"is-active"},{default:os(()=>c[6]||(c[6]=[xo(" Stats ")])),_:1})])],2)])])}}},aS=__(oS,[["__scopeId","data-v-cc9ffd86"]]),cS={class:"container is-max-desktop px-2 py-4"},lS={__name:"App",setup(t){const e=qi();return Nl(()=>{e.init()}),(n,r)=>{const s=Vl("RouterView");return qe(),Pt(At,null,[We(aS),Y("div",cS,[We(s)])],64)}}};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Yr=typeof document<"u";function y_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&y_(t.default)}const Se=Object.assign;function Ic(t,e){const n={};for(const r in e){const s=e[r];n[r]=Gt(s)?s.map(t):t(s)}return n}const li=()=>{},Gt=Array.isArray,v_=/#/g,hS=/&/g,dS=/\//g,fS=/=/g,pS=/\?/g,E_=/\+/g,mS=/%5B/g,gS=/%5D/g,T_=/%5E/g,_S=/%60/g,I_=/%7B/g,yS=/%7C/g,w_=/%7D/g,vS=/%20/g;function ku(t){return encodeURI(""+t).replace(yS,"|").replace(mS,"[").replace(gS,"]")}function ES(t){return ku(t).replace(I_,"{").replace(w_,"}").replace(T_,"^")}function dl(t){return ku(t).replace(E_,"%2B").replace(vS,"+").replace(v_,"%23").replace(hS,"%26").replace(_S,"`").replace(I_,"{").replace(w_,"}").replace(T_,"^")}function TS(t){return dl(t).replace(fS,"%3D")}function IS(t){return ku(t).replace(v_,"%23").replace(pS,"%3F")}function wS(t){return t==null?"":IS(t).replace(dS,"%2F")}function Si(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const AS=/\/$/,bS=t=>t.replace(AS,"");function wc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=CS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Si(o)}}function RS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function SS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ys(e.matched[r],n.matched[s])&&A_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function A_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!PS(t[n],e[n]))return!1;return!0}function PS(t,e){return Gt(t)?Sf(t,e):Gt(e)?Sf(e,t):t===e}function Sf(t,e){return Gt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function CS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Pi;(function(t){t.pop="pop",t.push="push"})(Pi||(Pi={}));var ui;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ui||(ui={}));function kS(t){if(!t)if(Yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bS(t)}const NS=/^[^#]+#/;function DS(t,e){return t.replace(NS,"#")+e}function VS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function OS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=VS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Pf(t,e){return(history.state?history.state.position-e:-1)+t}const fl=new Map;function xS(t,e){fl.set(t,e)}function MS(t){const e=fl.get(t);return fl.delete(t),e}let LS=()=>location.protocol+"//"+location.host;function b_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Rf(l,"")}return Rf(n,t)+r+s}function FS(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=b_(t,location),S=n.value,k=e.value;let D=0;if(g){if(n.value=_,e.value=g,o&&o===S){o=null;return}D=k?g.position-k.position:0}else r(_);s.forEach(B=>{B(n.value,S,{delta:D,type:Pi.pop,direction:D?D>0?ui.forward:ui.back:ui.unknown})})};function l(){o=n.value}function h(g){s.push(g);const _=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(_),_}function d(){const{history:g}=window;g.state&&g.replaceState(Se({},g.state,{scroll:Oa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Cf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Oa():null}}function US(t){const{history:e,location:n}=window,r={value:b_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:LS()+t+l;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](g)}}function o(l,h){const d=Se({},e.state,Cf(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=Se({},s.value,e.state,{forward:l,scroll:Oa()});i(d.current,d,!0);const p=Se({},Cf(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function BS(t){t=kS(t);const e=US(t),n=FS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:DS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function $S(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),BS(t)}function jS(t){return typeof t=="string"||t&&typeof t=="object"}function R_(t){return typeof t=="string"||typeof t=="symbol"}const S_=Symbol("");var kf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kf||(kf={}));function vs(t,e){return Se(new Error,{type:t,[S_]:!0},e)}function fn(t,e){return t instanceof Error&&S_ in t&&(e==null||!!(t.type&e))}const Nf="[^/]+?",qS={sensitive:!1,strict:!1,start:!0,end:!0},HS=/[.+*?^${}()[\]/\\]/g;function WS(t,e){const n=Se({},qS,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(HS,"\\$&"),_+=40;else if(g.type===1){const{value:S,repeatable:k,optional:D,regexp:B}=g;i.push({name:S,repeatable:k,optional:D});const $=B||Nf;if($!==Nf){_+=10;try{new RegExp(`(${$})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${S}" (${$}): `+W.message)}}let j=k?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(j=D&&h.length<2?`(?:/${j})`:"/"+j),D&&(j+="?"),s+=j,_+=20,D&&(_+=-8),k&&(_+=-20),$===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const _=d[g]||"",S=i[g-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function l(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of g)if(_.type===0)d+=_.value;else if(_.type===1){const{value:S,repeatable:k,optional:D}=_,B=S in h?h[S]:"";if(Gt(B)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const $=Gt(B)?B.join("/"):B;if(!$)if(D)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=$}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function zS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function P_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=zS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Df(r))return 1;if(Df(s))return-1}return s.length-r.length}function Df(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const KS={type:0,value:""},GS=/[a-zA-Z0-9_]/;function QS(t){if(!t)return[[]];if(t==="/")return[[KS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:GS.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function YS(t,e,n){const r=WS(QS(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function JS(t,e){const n=[],r=new Map;e=Mf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const S=!_,k=Of(p);k.aliasOf=_&&_.record;const D=Mf(e,p),B=[k];if("alias"in p){const W=typeof p.alias=="string"?[p.alias]:p.alias;for(const ie of W)B.push(Of(Se({},k,{components:_?_.record.components:k.components,path:ie,aliasOf:_?_.record:k})))}let $,j;for(const W of B){const{path:ie}=W;if(g&&ie[0]!=="/"){const pe=g.record.path,A=pe[pe.length-1]==="/"?"":"/";W.path=g.record.path+(ie&&A+ie)}if($=YS(W,g,D),_?_.alias.push($):(j=j||$,j!==$&&j.alias.push($),S&&p.name&&!xf($)&&o(p.name)),C_($)&&l($),k.children){const pe=k.children;for(let A=0;A<pe.length;A++)i(pe[A],$,_&&_.children[A])}_=_||$}return j?()=>{o(j)}:li}function o(p){if(R_(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=eP(p,n);n.splice(g,0,p),p.record.name&&!xf(p)&&r.set(p.record.name,p)}function h(p,g){let _,S={},k,D;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw vs(1,{location:p});D=_.record.name,S=Se(Vf(g.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Vf(p.params,_.keys.map(j=>j.name))),k=_.stringify(S)}else if(p.path!=null)k=p.path,_=n.find(j=>j.re.test(k)),_&&(S=_.parse(k),D=_.record.name);else{if(_=g.name?r.get(g.name):n.find(j=>j.re.test(g.path)),!_)throw vs(1,{location:p,currentLocation:g});D=_.record.name,S=Se({},g.params,p.params),k=_.stringify(S)}const B=[];let $=_;for(;$;)B.unshift($.record),$=$.parent;return{name:D,path:k,params:S,matched:B,meta:ZS(B)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Vf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Of(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:XS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function XS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ZS(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Mf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function eP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;P_(t,e[i])<0?r=i:n=i+1}const s=tP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function tP(t){let e=t;for(;e=e.parent;)if(C_(e)&&P_(t,e)===0)return e}function C_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function nP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(E_," "),o=i.indexOf("="),c=Si(o<0?i:i.slice(0,o)),l=o<0?null:Si(i.slice(o+1));if(c in e){let h=e[c];Gt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Lf(t){let e="";for(let n in t){const r=t[n];if(n=TS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gt(r)?r.map(i=>i&&dl(i)):[r&&dl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function rP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Gt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const sP=Symbol(""),Ff=Symbol(""),xa=Symbol(""),Nu=Symbol(""),pl=Symbol("");function js(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Fn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(vs(4,{from:n,to:e})):g instanceof Error?l(g):jS(g)?l(vs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function Ac(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(y_(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Fn(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=uS(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Fn(_,n,r,o,c,s)()}))}}return i}function Uf(t){const e=Bt(xa),n=Bt(Nu),r=gt(()=>{const l=_t(t.to);return e.resolve(l)}),s=gt(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(ys.bind(null,d));if(g>-1)return g;const _=Bf(l[h-2]);return h>1&&Bf(d)===_&&p[p.length-1].path!==_?p.findIndex(ys.bind(null,l[h-2])):g}),i=gt(()=>s.value>-1&&cP(n.params,r.value.params)),o=gt(()=>s.value>-1&&s.value===n.matched.length-1&&A_(n.params,r.value.params));function c(l={}){return aP(l)?e[_t(t.replace)?"replace":"push"](_t(t.to)).catch(li):Promise.resolve()}return{route:r,href:gt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const iP=ca({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uf,setup(t,{slots:e}){const n=Nr(Uf(t)),{options:r}=Bt(xa),s=gt(()=>({[$f(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$f(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Gp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),oP=iP;function aP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Gt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $f=(t,e,n)=>t??e??n,lP=ca({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Bt(pl),s=gt(()=>t.route||r.value),i=Bt(Ff,0),o=gt(()=>{let h=_t(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=gt(()=>s.value.matched[o.value]);go(Ff,gt(()=>o.value+1)),go(sP,c),go(pl,s);const l=Ut();return Ir(()=>[l.value,c.value,t.name],([h,d,p],[g,_,S])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!ys(d,_)||!g)&&(d.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,g=p&&p.components[d];if(!g)return jf(n.default,{Component:g,route:h});const _=p.props[d],S=_?_===!0?h.params:typeof _=="function"?_(h):_:null,D=Gp(g,Se({},S,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return jf(n.default,{Component:D,route:h})||D}}});function jf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uP=lP;function hP(t){const e=JS(t.routes,t),n=t.parseQuery||nP,r=t.stringifyQuery||Lf,s=t.history,i=js(),o=js(),c=js(),l=Ny(On);let h=On;Yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ic.bind(null,O=>""+O),p=Ic.bind(null,wS),g=Ic.bind(null,Si);function _(O,J){let G,ee;return R_(O)?(G=e.getRecordMatcher(O),ee=J):ee=O,e.addRoute(ee,G)}function S(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function k(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function B(O,J){if(J=Se({},J||l.value),typeof O=="string"){const T=wc(n,O,J.path),C=e.resolve({path:T.path},J),L=s.createHref(T.fullPath);return Se(T,C,{params:g(C.params),hash:Si(T.hash),redirectedFrom:void 0,href:L})}let G;if(O.path!=null)G=Se({},O,{path:wc(n,O.path,J.path).path});else{const T=Se({},O.params);for(const C in T)T[C]==null&&delete T[C];G=Se({},O,{params:p(T)}),J.params=p(J.params)}const ee=e.resolve(G,J),ye=O.hash||"";ee.params=d(g(ee.params));const Pe=RS(r,Se({},O,{hash:ES(ye),path:ee.path})),v=s.createHref(Pe);return Se({fullPath:Pe,hash:ye,query:r===Lf?rP(O.query):O.query||{}},ee,{redirectedFrom:void 0,href:v})}function $(O){return typeof O=="string"?wc(n,O,l.value.path):Se({},O)}function j(O,J){if(h!==O)return vs(8,{from:J,to:O})}function W(O){return A(O)}function ie(O){return W(Se($(O),{replace:!0}))}function pe(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:G}=J;let ee=typeof G=="function"?G(O):G;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=$(ee):{path:ee},ee.params={}),Se({query:O.query,hash:O.hash,params:ee.path!=null?{}:O.params},ee)}}function A(O,J){const G=h=B(O),ee=l.value,ye=O.state,Pe=O.force,v=O.replace===!0,T=pe(G);if(T)return A(Se($(T),{state:typeof T=="object"?Se({},ye,T.state):ye,force:Pe,replace:v}),J||G);const C=G;C.redirectedFrom=J;let L;return!Pe&&SS(r,ee,G)&&(L=vs(16,{to:C,from:ee}),Mt(ee,ee,!0,!1)),(L?Promise.resolve(L):w(C,ee)).catch(V=>fn(V)?fn(V,2)?V:jt(V):me(V,C,ee)).then(V=>{if(V){if(fn(V,2))return A(Se({replace:v},$(V.to),{state:typeof V.to=="object"?Se({},ye,V.to.state):ye,force:Pe}),J||C)}else V=R(C,ee,!0,v,ye);return b(C,ee,V),V})}function y(O,J){const G=j(O,J);return G?Promise.reject(G):Promise.resolve()}function E(O){const J=Pn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function w(O,J){let G;const[ee,ye,Pe]=dP(O,J);G=Ac(ee.reverse(),"beforeRouteLeave",O,J);for(const T of ee)T.leaveGuards.forEach(C=>{G.push(Fn(C,O,J))});const v=y.bind(null,O,J);return G.push(v),Rt(G).then(()=>{G=[];for(const T of i.list())G.push(Fn(T,O,J));return G.push(v),Rt(G)}).then(()=>{G=Ac(ye,"beforeRouteUpdate",O,J);for(const T of ye)T.updateGuards.forEach(C=>{G.push(Fn(C,O,J))});return G.push(v),Rt(G)}).then(()=>{G=[];for(const T of Pe)if(T.beforeEnter)if(Gt(T.beforeEnter))for(const C of T.beforeEnter)G.push(Fn(C,O,J));else G.push(Fn(T.beforeEnter,O,J));return G.push(v),Rt(G)}).then(()=>(O.matched.forEach(T=>T.enterCallbacks={}),G=Ac(Pe,"beforeRouteEnter",O,J,E),G.push(v),Rt(G))).then(()=>{G=[];for(const T of o.list())G.push(Fn(T,O,J));return G.push(v),Rt(G)}).catch(T=>fn(T,8)?T:Promise.reject(T))}function b(O,J,G){c.list().forEach(ee=>E(()=>ee(O,J,G)))}function R(O,J,G,ee,ye){const Pe=j(O,J);if(Pe)return Pe;const v=J===On,T=Yr?history.state:{};G&&(ee||v?s.replace(O.fullPath,Se({scroll:v&&T&&T.scroll},ye)):s.push(O.fullPath,ye)),l.value=O,Mt(O,J,G,v),jt()}let I;function et(){I||(I=s.listen((O,J,G)=>{if(!Qt.listening)return;const ee=B(O),ye=pe(ee);if(ye){A(Se(ye,{replace:!0}),ee).catch(li);return}h=ee;const Pe=l.value;Yr&&xS(Pf(Pe.fullPath,G.delta),Oa()),w(ee,Pe).catch(v=>fn(v,12)?v:fn(v,2)?(A(v.to,ee).then(T=>{fn(T,20)&&!G.delta&&G.type===Pi.pop&&s.go(-1,!1)}).catch(li),Promise.reject()):(G.delta&&s.go(-G.delta,!1),me(v,ee,Pe))).then(v=>{v=v||R(ee,Pe,!1),v&&(G.delta&&!fn(v,8)?s.go(-G.delta,!1):G.type===Pi.pop&&fn(v,20)&&s.go(-1,!1)),b(ee,Pe,v)}).catch(li)}))}let bt=js(),Ne=js(),ce;function me(O,J,G){jt(O);const ee=Ne.list();return ee.length?ee.forEach(ye=>ye(O,J,G)):console.error(O),Promise.reject(O)}function Nt(){return ce&&l.value!==On?Promise.resolve():new Promise((O,J)=>{bt.add([O,J])})}function jt(O){return ce||(ce=!O,et(),bt.list().forEach(([J,G])=>O?G(O):J()),bt.reset()),O}function Mt(O,J,G,ee){const{scrollBehavior:ye}=t;if(!Yr||!ye)return Promise.resolve();const Pe=!G&&MS(Pf(O.fullPath,0))||(ee||!G)&&history.state&&history.state.scroll||null;return Pl().then(()=>ye(O,J,Pe)).then(v=>v&&OS(v)).catch(v=>me(v,O,J))}const Me=O=>s.go(O);let Le;const Pn=new Set,Qt={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:k,resolve:B,options:t,push:W,replace:ie,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ne.add,isReady:Nt,install(O){const J=this;O.component("RouterLink",oP),O.component("RouterView",uP),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>_t(l)}),Yr&&!Le&&l.value===On&&(Le=!0,W(s.location).catch(ye=>{}));const G={};for(const ye in On)Object.defineProperty(G,ye,{get:()=>l.value[ye],enumerable:!0});O.provide(xa,J),O.provide(Nu,pp(G)),O.provide(pl,l);const ee=O.unmount;Pn.add(O),O.unmount=function(){Pn.delete(O),Pn.size<1&&(h=On,I&&I(),I=null,l.value=On,Le=!1,ce=!1),ee()}}};function Rt(O){return O.reduce((J,G)=>J.then(()=>E(G)),Promise.resolve())}return Qt}function dP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>ys(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>ys(h,l))||s.push(l))}return[n,r,s]}function fP(){return Bt(xa)}function pP(t){return Bt(Nu)}function mP(t){Ir(t,e=>{e.length===100&&alert("Only 100 characters allowed")})}const gP={class:"modal is-active p-2"},_P={class:"modal-card-head"},yP={class:"modal-card-foot is-justify-content-flex-end"},vP={class:"buttons"},EP={__name:"ModalDeleteNote",props:{modelValue:{type:Boolean,default:!1},noteId:{type:String,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=ji(),r=e,s=()=>{r("update:modelValue",!1)},i=Ut(null);rm(i,s);const o=c=>{c.key==="Escape"&&s()};return Nl(()=>{document.addEventListener("keyup",o)}),Dl(()=>{document.removeEventListener("keyup",o)}),(c,l)=>(qe(),Pt("div",gP,[l[5]||(l[5]=Y("div",{class:"modal-background"},null,-1)),Y("div",{class:"modal-card",ref_key:"modalCardRef",ref:i},[Y("header",_P,[l[3]||(l[3]=Y("p",{class:"modal-card-title"},"Modal title",-1)),Y("button",{class:"delete",onClick:l[0]||(l[0]=h=>s()),"aria-label":"close"})]),l[4]||(l[4]=Y("section",{class:"modal-card-body"},"Are you sure you want to delete this note?",-1)),Y("footer",yP,[Y("div",vP,[Y("button",{class:"button",onClick:l[1]||(l[1]=h=>s())},"Cancel"),Y("button",{class:"button is-danger has-text-white",onClick:l[2]||(l[2]=h=>_t(n).deleteNote(t.noteId))}," Delete ")])])],512)]))}},TP={class:"card mb-4"},IP={class:"card-content"},wP={class:"content"},AP={class:"columns is-mobile has-text-grey-light mt-2"},bP={class:"column"},RP={class:"column has-text-right"},SP={class:"card-footer"},PP={__name:"Note",props:{note:{type:Object,required:!0}},setup(t){const e=t,n=gt(()=>{let i=new Date(parseInt(e.note.date));return $E(i,"DD-MM-YYYY @ HH:mm")}),r=gt(()=>{let i=e.note.content.length,o=i>1?"characters":"character";return`${i} ${o}`}),s=Nr({deleteNote:!1});return(i,o)=>{const c=Vl("RouterLink");return qe(),Pt("div",TP,[Y("div",IP,[Y("div",wP,nn(t.note.content),1),Y("div",AP,[Y("small",bP,nn(n.value),1),Y("small",RP,nn(r.value),1)])]),Y("footer",SP,[We(c,{to:`/editNote/${t.note.id}`,href:"#",class:"card-footer-item"},{default:os(()=>o[2]||(o[2]=[xo("Edit")])),_:1},8,["to"]),Y("a",{href:"#",onClick:o[0]||(o[0]=ni(l=>s.deleteNote=!0,["prevent"])),class:"card-footer-item"},"Delete")]),s.deleteNote==!0?(qe(),as(EP,{key:0,modelValue:s.deleteNote,"onUpdate:modelValue":o[1]||(o[1]=l=>s.deleteNote=l),noteId:t.note.id},null,8,["modelValue","noteId"])):da("",!0)])}}},CP={mounted:t=>{t.focus()}},kP={key:0,class:"label has-text-white"},NP={class:"field"},DP={class:"control"},VP=["value","placeholder"],OP={class:"field is-grouped is-grouped-right"},xP={class:"control"},k_={__name:"AddEditNote",props:{modelValue:{type:String,required:!0},bgColor:{type:String,default:"success"},placeholder:{type:String,default:"..."},label:{type:String}},emits:["update:modelValue"],setup(t,{expose:e,emit:n}){const r=t,s=n,i=Ut(null);return e({focusTextArea:()=>{i.value.focus()}}),(c,l)=>(qe(),Pt("div",{class:Jn(["card p-4 mb-5",` has-background-${t.bgColor}`])},[t.label?(qe(),Pt("label",kP,nn(t.label),1)):da("",!0),Y("div",NP,[Y("div",DP,[kc(Y("textarea",{value:r.modelValue,onInput:l[0]||(l[0]=h=>s("update:modelValue",h.target.value)),class:"textarea",placeholder:t.placeholder,ref_key:"textareaRef",ref:i,maxlength:"100"},null,40,VP),[[_t(CP)]])])]),Y("div",OP,[Y("div",xP,[av(c.$slots,"buttons")])])],2))}},MP={class:"notes"},LP=["disabled"],FP={key:0,class:"progress is-large is-success",max:"100"},UP={key:0,class:"is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"},BP=ca({__name:"ViewNotes",setup(t){const e=ji(),n=Ut(""),r=Ut(null),s=()=>{e.addNote(n.value),n.value="",r.value.focusTextArea()};return mP(n),(i,o)=>(qe(),Pt("div",MP,[We(k_,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=c=>n.value=c),placeholder:"Add note",ref_key:"addEditNoteRef",ref:r},{buttons:os(()=>[Y("button",{disabled:!n.value,onClick:o[0]||(o[0]=c=>s()),class:"button is-link has-background-success"}," Add New Note ",8,LP)]),_:1},8,["modelValue"]),_t(e).notesLoaded?(qe(),Pt(At,{key:1},[(qe(!0),Pt(At,null,ov(_t(e).notes,c=>(qe(),as(PP,{key:c.id,note:c},null,8,["note"]))),128)),_t(e).notes.length?da("",!0):(qe(),Pt("div",UP," No notes here yet... "))],64)):(qe(),Pt("progress",FP))]))}}),$P={class:"stats"},jP={class:"table is-hoverable is-fullwidth"},qP=ca({__name:"ViewStats",setup(t){const e=ji();return(n,r)=>(qe(),Pt("div",$P,[Y("table",jP,[r[2]||(r[2]=Y("thead",null,[Y("tr",null,[Y("th",null,"Stat"),Y("th",null,"Value")])],-1)),Y("tbody",null,[Y("tr",null,[r[0]||(r[0]=Y("td",null,"Number of Notes",-1)),Y("td",null,nn(_t(e).totalNotesCount),1)]),Y("tr",null,[r[1]||(r[1]=Y("td",null,"Number of Characters (of all notes)",-1)),Y("td",null,nn(_t(e).totalCharactersCount),1)])])])]))}}),HP=["disabled"],WP={__name:"ViewEditNote",setup(t){const e=ji(),n=pP(),r=fP(),s=Ut("");s.value=e.getNoteContent(n.params.id);const i=()=>{e.updateNote(n.params.id,s.value),r.push("/")};return(o,c)=>(qe(),as(k_,{modelValue:s.value,"onUpdate:modelValue":c[1]||(c[1]=l=>s.value=l),bgColor:"link",placeholder:"Edit note",label:"Edit note",ref:"addEditNoteRef"},{buttons:os(()=>[Y("button",{class:"button is-link is-light mr-2",onClick:c[0]||(c[0]=l=>o.$router.back())},"Cancel"),Y("button",{onClick:i,class:"button is-link has-background-link",disabled:!s.value}," Save Note ",8,HP)]),_:1},8,["modelValue"]))}},zP={class:"auth"},KP={class:"tabs is-centered"},GP={class:"card auth-form"},QP={class:"card-content"},YP={class:"title has-text-centered has-text-weight-semibold"},JP={class:"content"},XP={class:"field"},ZP={class:"control"},eC={class:"field"},tC={class:"control"},nC={class:"field is-grouped is-grouped-right"},rC={class:"control"},sC={class:"button is-primary has-text-light"},iC={__name:"ViewAuth",setup(t){const e=qi(),n=Ut(!1),r=gt(()=>n.value?"Register":"Login"),s=Nr({email:"",password:""}),i=()=>{!s.email||!s.password?alert("Enter both Email and Password"):n.value?e.registerUser(s):e.loginUser(s)};return(o,c)=>(qe(),Pt("div",zP,[Y("div",KP,[Y("ul",null,[Y("li",{class:Jn({"is-active":!n.value})},[Y("a",{onClick:c[0]||(c[0]=ni(l=>n.value=!1,["prevent"]))},"Login")],2),Y("li",{class:Jn({"is-active":n.value})},[Y("a",{onClick:c[1]||(c[1]=ni(l=>n.value=!0,["prevent"]))},"Register")],2)])]),Y("div",GP,[Y("div",QP,[Y("div",YP,nn(r.value),1),Y("div",JP,[Y("form",{onSubmit:ni(i,["prevent"])},[Y("div",XP,[c[4]||(c[4]=Y("label",{class:"label"},"Email",-1)),Y("div",ZP,[kc(Y("input",{"onUpdate:modelValue":c[2]||(c[2]=l=>s.email=l),class:"input",type:"email",placeholder:"e.g. alexsmith@gmail.com"},null,512),[[Zh,s.email]])])]),Y("div",eC,[c[5]||(c[5]=Y("label",{class:"label"},"Password",-1)),Y("div",tC,[kc(Y("input",{"onUpdate:modelValue":c[3]||(c[3]=l=>s.password=l),class:"input",type:"password",placeholder:"Enter a password"},null,512),[[Zh,s.password]])])]),Y("div",nC,[Y("p",rC,[Y("button",sC,nn(r.value),1)])])],32)])])])]))}},oC=__(iC,[["__scopeId","data-v-ceff8393"]]),Du=hP({history:$S(),routes:[{path:"/",name:"notes",component:BP},{path:"/stats",name:"stats",component:qP},{path:"/editNote/:id",name:"edit-note",component:WP},{path:"/auth",name:"auth",component:oC}]});Du.beforeEach(async t=>{const e=qi();if(!e.user.id&&t.name!=="auth")return{name:"auth"};if(e.user.id&&t.name==="auth")return!1});const N_=bE();N_.use(({store:t})=>{t.router=oa(Du)});TE(lS).use(N_).use(Du).mount("#app");
