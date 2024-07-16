import{a as T,b as B,r as f,j as e,B as y,i as U,p as v,h as n,T as j}from"./index-D4y1DPfe.js";import{F as s,I as l}from"./input-BGi632mO.js";import{I as S,d as k}from"./crypto-q0Ro0iHH.js";import{T as x}from"./text-area-BPah7vb5.js";import{u as I}from"./dexie-react-hooks-BslBxNB1.js";import{F as z}from"./FilterTag-DFHZpZ6h.js";const D=()=>{const u=T(),{id:o}=B(),p=I(()=>n.db.web.orderBy("order").last().then(a=>((a==null?void 0:a.order)||0)+1),[],0),F=I(async()=>await n.db.web.orderBy("url").keys(),[],[]),[b]=s.useForm(),[h,w]=f.useState(),[L,g]=f.useState(!1);f.useEffect(()=>{(async()=>{if(!o){p&&w({order:p});return}const t=await n.db.web.get(+o);if(!t){u(-1);return}w(t)})()},[p,o,u]);const P=async a=>{g(!0);const t={...a,hostname:new URL(a.url).hostname,order:+a.order,page:+a.page},i=t.order;if(i!==p&&i!==(h==null?void 0:h.order)){const c=(await n.db.web.orderBy("order").toArray()).filter(r=>o&&r.id!==+o).filter(r=>r.order&&r.order>=i).map((r,d)=>({key:r.id,changes:{order:d+i+1}}));c.length&&await n.db.web.bulkUpdate(c)}o?await n.db.web.update(+o,t).then(()=>{j.show({icon:"success",content:"编辑成功!"}),b.resetFields(),u(-1)}).catch(m=>{j.show({icon:"fail",content:m.message})}):await n.db.web.add(t).then(()=>{j.show({icon:"success",content:"新建成功!"}),b.resetFields(),u(-1)}).catch(m=>{j.show({icon:"fail",content:m.message})}),g(!1)};return e.jsx("div",{children:h&&e.jsxs(s,{name:"form",form:b,onFinish:P,initialValues:h,footer:e.jsx(y,{block:!0,type:"submit",color:"primary",loading:L,children:"提交"}),children:[e.jsx(s.Item,{name:"title",label:"名称",rules:[{required:!0}],children:e.jsx(l,{placeholder:"请输入名称"})}),e.jsx(s.Item,{name:"orginTitle",label:"源名称",children:e.jsx(l,{placeholder:"请输入源名称"})}),e.jsx(s.Item,{name:"inWebTitle",label:"网站中名称",children:e.jsx(l,{placeholder:"请输入网站中名称"})}),e.jsx(s.Item,{name:"author",label:"作者",children:e.jsx(l,{placeholder:"请输入作者"})}),e.jsx(s.Item,{name:"sinicize",label:"汉化组",children:e.jsx(l,{placeholder:"请输入汉化组"})}),e.jsx(s.Item,{name:"press",label:"出版社",children:e.jsx(l,{placeholder:"请输入出版社"})}),e.jsx(s.Item,{name:"page",label:"页码",validateFirst:!0,rules:[{required:!0},{validator:(a,t)=>!Number.isInteger(+t)&&+t>0?Promise.reject(new Error("页码必须是正整数!")):Promise.resolve()}],children:e.jsx(l,{type:"number",placeholder:"请输入页码"})}),e.jsx(s.Item,{name:"series",label:"系列",children:e.jsx(l,{placeholder:"请输入系列名称"})}),e.jsx(s.Item,{name:"seriesList",label:"系列列表",dependencies:["series"],rules:[{validator:(a,t)=>{if(b.getFieldValue("series")&&!t)return Promise.reject(new Error("系列列表不能为空!"));if(!t)return Promise.resolve();const i=t.split(" ").filter(r=>r).map(r=>r.split("-").map(d=>+d));if(!i.every(r=>r.every(d=>Number.isFinite(d)&&d>0)&&(r[1]?r[1]>r[0]:!0)))return Promise.reject(new Error("系列列表格式错误!"));const c=i.map(r=>r[1]?new Array(r[1]-r[0]+1).fill(r[0]).map((d,E)=>d+E):[r[0]]).flat();return c.length!==new Set(c).size?Promise.reject(new Error("系列列表有重复!")):Promise.resolve()}}],children:e.jsx(l,{placeholder:"请输入系列列表 数字 或者 数字-数字 或者 数字 数字"})}),e.jsx(s.Item,{name:"simpleDesc",label:"简短介绍",children:e.jsx(x,{placeholder:"请输入简短介绍",autoSize:!0})}),e.jsx(s.Item,{name:"desc",label:"描述",children:e.jsx(x,{placeholder:"请输入描述",autoSize:!0})}),e.jsx(s.Item,{name:"url",label:"地址",validateFirst:!0,rules:[{required:!0},{validator:(a,t)=>{try{new URL(t)}catch{return Promise.reject(new Error("url格式错误!"))}return!o&&F.includes(t)?Promise.reject(new Error("url不能重复!")):Promise.resolve()}}],children:e.jsx(x,{placeholder:"请输入地址",autoSize:!0})}),e.jsx(s.Item,{name:"icon",label:"icon",children:e.jsx(S,{multiple:!0,maxCount:1,upload:async a=>{const t=URL.createObjectURL(a),i=await U(t),m=await k(i),c=await v(m,i);return c.success?{url:c.data}:Promise.reject()}})}),e.jsx(s.Item,{name:"tags",label:"标签",children:e.jsx(z,{webConfig:n})}),e.jsx(y,{className:"ml-4 mb-2",size:"small",color:"primary",onClick:()=>{u(`${n.path}/tag`)},children:"新增"}),e.jsx(s.Item,{name:"order",label:"排序",rules:[{required:!0}],children:e.jsx(l,{type:"number",placeholder:"请输入排序"})})]})})};export{D as default};
