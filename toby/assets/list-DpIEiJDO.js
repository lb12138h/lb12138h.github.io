import{r as x,j as e,B as b,h as n}from"./index-DKKuqkso.js";import{u as w,S as k}from"./dexie-react-hooks-pxC-h1Kn.js";import{C as p}from"./floating-bubble-Cea9ZNJ0.js";import{F as c,I as d}from"./input-4uKEuujg.js";import{F,W as I}from"./WebCardList-CDTIanEv.js";import{F as C}from"./FilterTag-DYh5E1up.js";const h=[{key:"author",label:"作者"},{key:"sinicize",label:"汉化组"},{key:"press",label:"出版社"},{key:"series",label:"系列"}],L=[{key:"orginTitle",label:"源名称"},{key:"inWebTitle",label:"网站中名称"},...h],E=()=>{const m=x.useRef(null),[l,u]=x.useState(),g=w(async()=>{var f;let s=[],i=!1;if(l){if((f=l.tags)!=null&&f.length){const t=[...l.tags];s=await n.db.web.where("tags").equals(t.shift()).and(a=>!!(a.tags&&t.every(r=>{var o;return(o=a.tags)==null?void 0:o.includes(r)}))).toArray(),i=!0}i||(s=await n.db.web.toArray()),l.title&&(s=s.filter(t=>[t.title,t.orginTitle,t.inWebTitle].some(a=>a==null?void 0:a.includes(l.title)))),["url","desc","author","sinicize","press","series"].forEach(t=>{l[t]&&(s=s.filter(a=>{var r;return(r=a[t])==null?void 0:r.includes(l[t])}))})}else s=await n.db.web.toArray();const y=await n.db.tagGroup.orderBy("order").toArray();return await Promise.all(s.map(async t=>{const a=t.tags&&(await Promise.all(t.tags.map(async r=>await n.db.tag.get(r)))).reduce((r,o)=>(r[o.group]||(r[o.group]=[]),r[o.group].push(o),r),{});return{...t,tags:y.filter(r=>a==null?void 0:a[r.id]).map(r=>({...r,list:a[r.id]}))}}))},[l]),j=()=>{var s,i;(s=m.current)==null||s.resetFields(),u((i=m.current)==null?void 0:i.getFieldsValue())};return e.jsxs("div",{className:"px-4",children:[e.jsx(p,{children:e.jsx(p.Panel,{title:"筛选",children:e.jsxs(c,{ref:m,name:"form",onFinish:u,footer:e.jsxs(k,{children:[e.jsx(b,{block:!0,type:"submit",color:"primary",children:"搜索"}),e.jsx(b,{block:!0,onClick:j,children:"重置"})]}),children:[e.jsx(c.Item,{name:"title",label:"名称",children:e.jsx(d,{})}),e.jsx(c.Item,{name:"url",label:"地址",children:e.jsx(d,{})}),e.jsx(c.Item,{name:"desc",label:"详情",children:e.jsx(d,{})}),h.map(s=>e.jsx(c.Item,{name:s.key,label:s.label,children:e.jsx(d,{})},s.key)),e.jsx(c.Item,{name:"tags",children:e.jsx(C,{webConfig:n})})]})},"1")}),e.jsx(F,{path:n.path}),e.jsx(I,{webConfig:n,list:g,extraDescRender:s=>e.jsx("div",{children:L.map(i=>{if(s[i.key])return e.jsxs("div",{className:"flex flex-wrap",children:[e.jsxs("div",{children:[i.label,": "]}),e.jsx("div",{children:s[i.key]})]},i.key)})})})]})};export{E as default};
