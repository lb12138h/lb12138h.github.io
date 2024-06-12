import{r as m,a0 as w,o as h,R as n,m as E,E as $,q as k,l as N,a1 as x}from"./index-h-8rQXwW.js";import{u as L}from"./input-lqMVfNre.js";function B(r){return m.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},r,{style:Object.assign({verticalAlign:"-0.125em"},r.style),className:["antd-mobile-icon",r.className].filter(Boolean).join(" ")}),m.createElement("g",{id:"AddOutline-AddOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},m.createElement("g",{id:"AddOutline-add"},m.createElement("rect",{id:"AddOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),m.createElement("path",{d:"M25.1,6.5 C25.3209139,6.5 25.5,6.6790861 25.5,6.9 L25.5,22.5 L41.1,22.5 C41.3209139,22.5 41.5,22.6790861 41.5,22.9 L41.5,25.1 C41.5,25.3209139 41.3209139,25.5 41.1,25.5 L25.5,25.5 L25.5,41.1 C25.5,41.3209139 25.3209139,41.5 25.1,41.5 L22.9,41.5 C22.6790861,41.5 22.5,41.3209139 22.5,41.1 L22.5,25.5 L6.9,25.5 C6.6790861,25.5 6.5,25.3209139 6.5,25.1 L6.5,22.9 C6.5,22.6790861 6.6790861,22.5 6.9,22.5 L22.5,22.5 L22.5,6.9 C22.5,6.6790861 22.6790861,6.5 22.9,6.5 L25.1,6.5 Z",id:"AddOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}const O=(r={})=>m.useMemo(()=>{const{label:s="label",value:i="value",disabled:o="disabled",children:a="children"}=r;return[s,i,a,o]},[JSON.stringify(r)]),y="adm-grid",R=r=>{const e={"--columns":r.columns.toString()},{gap:s}=r;return s!==void 0&&(Array.isArray(s)?(e["--gap-horizontal"]=w(s[0]),e["--gap-vertical"]=w(s[1])):e["--gap"]=w(s)),h(r,n.createElement("div",{className:y,style:e},r.children))},F=r=>{const e=E({span:1},r),s={"--item-span":e.span};return h(e,n.createElement("div",{className:`${y}-item`,style:s,onClick:e.onClick},e.children))},A=$(R,{Item:F}),c="adm-space",V={direction:"horizontal"},P=r=>{const e=E(V,r),{direction:s,onClick:i}=e;return h(e,n.createElement("div",{className:k(c,{[`${c}-wrap`]:e.wrap,[`${c}-block`]:e.block,[`${c}-${s}`]:!0,[`${c}-align-${e.align}`]:!!e.align,[`${c}-justify-${e.justify}`]:!!e.justify}),onClick:i},n.Children.map(e.children,o=>o!=null&&n.createElement("div",{className:`${c}-item`},o))))},S=m.memo(()=>n.createElement("svg",{width:"17px",height:"13px",viewBox:"0 0 17 13",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("g",{transform:"translate(-2832.000000, -1103.000000)",stroke:"#FFFFFF",strokeWidth:"3"},n.createElement("g",{transform:"translate(2610.000000, 955.000000)"},n.createElement("g",{transform:"translate(24.000000, 91.000000)"},n.createElement("g",{transform:"translate(179.177408, 36.687816)"},n.createElement("polyline",{points:"34.2767388 22 24.797043 31.4796958 21 27.6826527"})))))))),d="adm-selector",j={multiple:!1,defaultValue:[],showCheckMark:!0},T=r=>{const e=E(j,r),[s,i,,o]=O(e.fieldNames),[a,f]=L({value:e.value,defaultValue:e.defaultValue,onChange:t=>{var l;const u={get items(){return e.options.filter(g=>t.includes(g[i]))}};(l=e.onChange)===null||l===void 0||l.call(e,t,u)}}),{locale:v}=N(),p=e.options.map(t=>{const l=(a||[]).includes(t[i]),u=t[o]||e.disabled,g=k(`${d}-item`,{[`${d}-item-active`]:l&&!e.multiple,[`${d}-item-multiple-active`]:l&&e.multiple,[`${d}-item-disabled`]:u});return n.createElement("div",{key:t[i],className:g,onClick:()=>{if(!u)if(e.multiple){const b=l?a.filter(C=>C!==t[i]):[...a,t[i]];f(b)}else{const b=l?[]:[t[i]];f(b)}},role:"option","aria-selected":l&&!e.multiple||l&&e.multiple},t[s],t.description&&n.createElement("div",{className:`${d}-item-description`},t.description),l&&e.showCheckMark&&n.createElement("div",{className:`${d}-check-mark-wrapper`},n.createElement(S,null)))});return h(e,n.createElement("div",{className:d,role:"listbox","aria-label":v.Selector.name},e.columns?n.createElement(A,{columns:e.columns},p):n.createElement(P,{wrap:!0},p)))};function M(r,e,s){var i,o;typeof r=="function"?(i=e||[],o=s):(i=[],o=e);var a=n.useRef({hasResult:!1,result:o,error:null}),f=n.useReducer(function(t){return t+1},0);f[0];var v=f[1],p=n.useMemo(function(){var t=typeof r=="function"?r():r;if(!t||typeof t.subscribe!="function")throw r===t?new TypeError("Given argument to useObservable() was neither a valid observable nor a function."):new TypeError("Observable factory given to useObservable() did not return a valid observable.");if(!a.current.hasResult&&typeof window<"u"&&(typeof t.hasValue!="function"||t.hasValue()))if(typeof t.getValue=="function")a.current.result=t.getValue(),a.current.hasResult=!0;else{var l=t.subscribe(function(u){a.current.result=u,a.current.hasResult=!0});typeof l=="function"?l():l.unsubscribe()}return t},i);if(n.useDebugValue(a.current.result),n.useEffect(function(){var t=p.subscribe(function(l){var u=a.current;(u.error!==null||u.result!==l)&&(u.error=null,u.result=l,u.hasResult=!0,v())},function(l){var u=a.current;u.error!==l&&(u.error=l,v())});return typeof t=="function"?t:t.unsubscribe.bind(t)},i),a.current.error)throw a.current.error;return a.current.result}function W(r,e,s){return M(function(){return x(r)},e||[],s)}export{B as A,A as G,P as S,T as a,W as u};