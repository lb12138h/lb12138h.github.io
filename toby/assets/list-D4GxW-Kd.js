import{r as p,j as e,B as x,z as o}from"./index-DERllzhn.js";import{u as y}from"./dexie-react-hooks-Dwhc-AuF.js";import{C as g}from"./index-BwC_fqYy.js";import{F as n,I as c}from"./input-Clf9kwip.js";import{S as w}from"./space-bauQVJ63.js";import{F}from"./FilterTag-OCnJNN3E.js";import{F as C}from"./FloatingBubbleAdd-DGheAM8a.js";import{W as I}from"./WebCardList-B6nlr2iM.js";import"./index-hSoGQ23Z.js";import"./selector-DpT9G-B8.js";import"./floating-bubble-C89P-5Oq.js";import"./index-Bj1fzAf0.js";const L=[{key:"author",label:"作者"}],G=()=>{const d=p.useRef(null),[i,u]=p.useState(),h=y(async()=>{var f;let a=[],m=!1;if(i){if((f=i.tags)!=null&&f.length){const s=[...i.tags];a=await o.db.web.where("tags").equals(s.shift()).and(t=>!!(t.tags&&s.every(r=>{var l;return(l=t.tags)==null?void 0:l.includes(r)}))).toArray(),m=!0}m||(a=await o.db.web.toArray()),["title","url","author"].forEach(s=>{i[s]&&(a=a.filter(t=>{var r;return(r=t[s])==null?void 0:r.includes(i[s])}))}),i.desc&&(a=a.filter(s=>[s.desc,s.simpleDesc].some(t=>t==null?void 0:t.includes(i.desc))))}else a=await o.db.web.toArray();a.sort((s,t)=>s.order-t.order);const j=await o.db.tagGroup.orderBy("order").toArray();return await Promise.all(a.map(async s=>{const t=s.tags&&(await Promise.all(s.tags.map(async r=>await o.db.tag.get(r)))).reduce((r,l)=>(r[l.group]||(r[l.group]=[]),r[l.group].push(l),r),{});return{...s,tags:j.filter(r=>t==null?void 0:t[r.id]).map(r=>({...r,list:t[r.id]}))}}))},[i]),b=()=>{var a,m;(a=d.current)==null||a.resetFields(),u((m=d.current)==null?void 0:m.getFieldsValue())};return e.jsxs("div",{className:"px-4",children:[e.jsx(g,{children:e.jsx(g.Panel,{title:"筛选",children:e.jsxs(n,{ref:d,name:"form",onFinish:u,footer:e.jsxs(w,{children:[e.jsx(x,{block:!0,type:"submit",color:"primary",children:"搜索"}),e.jsx(x,{block:!0,onClick:b,children:"重置"})]}),children:[e.jsx(n.Item,{name:"title",label:"名称",children:e.jsx(c,{})}),e.jsx(n.Item,{name:"url",label:"地址",children:e.jsx(c,{})}),e.jsx(n.Item,{name:"author",label:"作者",children:e.jsx(c,{})}),e.jsx(n.Item,{name:"desc",label:"详情",children:e.jsx(c,{})}),e.jsx(n.Item,{name:"tags",children:e.jsx(F,{webConfig:o})})]})},"1")}),e.jsx(C,{path:o.path}),e.jsx(I,{webConfig:o,list:h,extraDescList:L})]})};export{G as default};