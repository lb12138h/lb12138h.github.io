import{r as p,j as e,B as g,v as l}from"./index-h-8rQXwW.js";import{u as w,S as y}from"./dexie-react-hooks-BES2wd6N.js";import{C as x}from"./floating-bubble-BE4IEoOl.js";import{F as c,I as u}from"./input-lqMVfNre.js";import{F}from"./FilterTag-DNOyouQA.js";import{F as C,W as I}from"./WebCardList-Qbe-lvQH.js";const E=()=>{const d=p.useRef(null),[i,m]=p.useState(),b=w(async()=>{var f;let a=[],n=!1;if(i){if((f=i.tags)!=null&&f.length){const r=[...i.tags];a=await l.db.web.where("tags").equals(r.shift()).and(t=>!!(t.tags&&r.every(s=>{var o;return(o=t.tags)==null?void 0:o.includes(s)}))).toArray(),n=!0}n||(a=await l.db.web.toArray()),["title","url"].forEach(r=>{i[r]&&(a=a.filter(t=>{var s;return(s=t[r])==null?void 0:s.includes(i[r])}))}),i.desc&&(a=a.filter(r=>[r.desc,r.simpleDesc].some(t=>t==null?void 0:t.includes(i.desc))))}else a=await l.db.web.toArray();const j=await l.db.tagGroup.orderBy("order").toArray();return await Promise.all(a.map(async r=>{const t=r.tags&&(await Promise.all(r.tags.map(async s=>await l.db.tag.get(s)))).reduce((s,o)=>(s[o.group]||(s[o.group]=[]),s[o.group].push(o),s),{});return{...r,tags:j.filter(s=>t==null?void 0:t[s.id]).map(s=>({...s,list:t[s.id]}))}}))},[i]),h=()=>{var a,n;(a=d.current)==null||a.resetFields(),m((n=d.current)==null?void 0:n.getFieldsValue())};return e.jsxs("div",{className:"px-4",children:[e.jsx(x,{children:e.jsx(x.Panel,{title:"筛选",children:e.jsxs(c,{ref:d,name:"form",onFinish:m,footer:e.jsxs(y,{children:[e.jsx(g,{block:!0,type:"submit",color:"primary",children:"搜索"}),e.jsx(g,{block:!0,onClick:h,children:"重置"})]}),children:[e.jsx(c.Item,{name:"title",label:"名称",children:e.jsx(u,{})}),e.jsx(c.Item,{name:"url",label:"地址",children:e.jsx(u,{})}),e.jsx(c.Item,{name:"desc",label:"详情",children:e.jsx(u,{})}),e.jsx(c.Item,{name:"tags",children:e.jsx(F,{webConfig:l})})]})},"1")}),e.jsx(C,{path:l.path}),e.jsx(I,{webConfig:l,list:b})]})};export{E as default};
