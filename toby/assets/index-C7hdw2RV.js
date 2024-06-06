import{r as c,_ as O,t as I,R as i,m as _,w as L,h as N,o as j}from"./index-DTRIon_s.js";var z=function(e){return function(n,r){var o=c.useRef(!1);e(function(){return function(){o.current=!1}},[]),e(function(){if(!o.current)o.current=!0;else return n()},r)}};function V(e){var n=c.useRef(e);n.current=c.useMemo(function(){return e},[e]);var r=c.useRef();return r.current||(r.current=function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return n.current.apply(this,o)}),r.current}var U=function(){var e=O(c.useState({}),2),n=e[1];return c.useCallback(function(){return n({})},[])};function A(e){return c.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),c.createElement("g",{id:"RightOutline-RightOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"RightOutline-RightOutlined"},c.createElement("rect",{id:"RightOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),c.createElement("path",{d:"M17.3947957,5.11219264 L35.5767382,22.6612572 L35.5767382,22.6612572 C36.1304785,23.2125856 36.1630514,24.0863155 35.6744571,24.6755735 L35.5767382,24.7825775 L17.3956061,42.8834676 C17.320643,42.9580998 17.2191697,43 17.1133896,43 L13.9866673,43 C13.7657534,43 13.5866673,42.8209139 13.5866673,42.6 C13.5866673,42.4936115 13.6290496,42.391606 13.7044413,42.316542 L32.3201933,23.7816937 L32.3201933,23.7816937 L13.7237117,5.6866816 C13.5653818,5.53262122 13.5619207,5.27937888 13.7159811,5.121049 C13.7912854,5.04365775 13.8946805,5 14.0026627,5 L17.1170064,5 C17.2206403,5 17.3202292,5.04022164 17.3947957,5.11219264 Z",id:"RightOutline-right",fill:"currentColor",fillRule:"nonzero"}))))}const D=z(I);function G(e){const{value:n,defaultValue:r,onChange:o}=e,a=U(),l=c.useRef(n!==void 0?n:r);n!==void 0&&(l.current=n);const M=V((w,k=!1)=>{const S=typeof w=="function"?w(l.current):w;if(!(!k&&S===l.current))return l.current=S,a(),o==null?void 0:o(S)});return[l.current,M]}var F={exports:{}},t={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=Symbol.for("react.element"),R=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),$=Symbol.for("react.context"),B=Symbol.for("react.server_context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),P;P=Symbol.for("react.module.reference");function s(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case C:switch(e=e.type,e){case d:case v:case y:case b:case p:return e;default:switch(e=e&&e.$$typeof,e){case B:case $:case g:case x:case E:case h:return e;default:return n}}case R:return n}}}t.ContextConsumer=$;t.ContextProvider=h;t.Element=C;t.ForwardRef=g;t.Fragment=d;t.Lazy=x;t.Memo=E;t.Portal=R;t.Profiler=v;t.StrictMode=y;t.Suspense=b;t.SuspenseList=p;t.isAsyncMode=function(){return!1};t.isConcurrentMode=function(){return!1};t.isContextConsumer=function(e){return s(e)===$};t.isContextProvider=function(e){return s(e)===h};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===C};t.isForwardRef=function(e){return s(e)===g};t.isFragment=function(e){return s(e)===d};t.isLazy=function(e){return s(e)===x};t.isMemo=function(e){return s(e)===E};t.isPortal=function(e){return s(e)===R};t.isProfiler=function(e){return s(e)===v};t.isStrictMode=function(e){return s(e)===y};t.isSuspense=function(e){return s(e)===b};t.isSuspenseList=function(e){return s(e)===p};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===d||e===v||e===y||e===b||e===p||e===T||typeof e=="object"&&e!==null&&(e.$$typeof===x||e.$$typeof===E||e.$$typeof===h||e.$$typeof===$||e.$$typeof===g||e.$$typeof===P||e.getModuleId!==void 0)};t.typeOf=s;F.exports=t;var W=F.exports;function J(e,n){let r=0;function o(a){i.Children.forEach(a,l=>{W.isFragment(l)?o(l.props.children):(n(l,r),r+=1)})}o(e)}const f="adm-list",q={mode:"default"},H=c.forwardRef((e,n)=>{const r=_(q,e),o=c.useRef(null);return c.useImperativeHandle(n,()=>({get nativeElement(){return o.current}})),L(r,i.createElement("div",{className:N(f,`${f}-${r.mode}`),ref:o},r.header&&i.createElement("div",{className:`${f}-header`},r.header),i.createElement("div",{className:`${f}-body`},i.createElement("div",{className:`${f}-body-inner`},r.children))))});function m(e){return e!=null&&e!==!1}const u="adm-list-item",X=e=>{var n;const r=(n=e.clickable)!==null&&n!==void 0?n:!!e.onClick,o=e.arrow===void 0?r:e.arrow,a=i.createElement("div",{className:`${u}-content`},m(e.prefix)&&i.createElement("div",{className:`${u}-content-prefix`},e.prefix),i.createElement("div",{className:`${u}-content-main`},m(e.title)&&i.createElement("div",{className:`${u}-title`},e.title),e.children,m(e.description)&&i.createElement("div",{className:`${u}-description`},e.description)),m(e.extra)&&i.createElement("div",{className:`${u}-content-extra`},e.extra),m(o)&&i.createElement("div",{className:`${u}-content-arrow`},o===!0?i.createElement(A,null):o));return L(e,i.createElement(r?"a":"div",{className:N(`${u}`,r?["adm-plain-anchor"]:[],e.disabled&&`${u}-disabled`),onClick:e.disabled?void 0:e.onClick},a))},K=j(H,{Item:X});export{K as L,D as a,U as b,W as r,J as t,G as u};
