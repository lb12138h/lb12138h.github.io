import{m as U,n as B,r as h,j as e,B as j,o as T,p as k,s as a,T as u}from"./index-DERllzhn.js";import{F as o,I as x}from"./input-Clf9kwip.js";import{I as R,d as S}from"./crypto-BQ1i6_9u.js";import{T as p}from"./text-area-iB4A7Wm-.js";import{u as g}from"./dexie-react-hooks-Dwhc-AuF.js";import{F as C}from"./FilterTag-OCnJNN3E.js";import"./index-hSoGQ23Z.js";import"./space-bauQVJ63.js";import"./selector-DpT9G-B8.js";const W=()=>{const c=U(),{id:i}=B(),d=g(()=>a.db.web.orderBy("order").last().then(r=>((r==null?void 0:r.order)||0)+1),[],0),y=g(async()=>await a.db.web.orderBy("url").keys(),[],[]),[b]=o.useForm(),[l,w]=h.useState(),[I,f]=h.useState(!1);h.useEffect(()=>{(async()=>{if(!i){d&&w({order:d});return}const t=await a.db.web.get(+i);if(!t){c(-1);return}w(t)})()},[d,i,c]);const L=async r=>{f(!0);const t=+r.order;if(t!==d&&t!==(l==null?void 0:l.order)){const m=(await a.db.web.orderBy("order").toArray()).filter(s=>i&&s.id!==+i).filter(s=>s.order&&s.order>=t).map((s,F)=>({key:s.id,changes:{order:F+t+1}}));m.length&&await a.db.web.bulkUpdate(m)}i?await a.db.web.update(+i,{...r,hostname:new URL(r.url).hostname,order:+r.order}).then(()=>{u.show({icon:"success",content:"编辑成功!"}),b.resetFields(),c(-1)}).catch(n=>{u.show({icon:"fail",content:n.message})}):await a.db.web.add({...r,hostname:new URL(r.url).hostname,order:+r.order}).then(()=>{u.show({icon:"success",content:"新建成功!"}),b.resetFields(),c(-1)}).catch(n=>{u.show({icon:"fail",content:n.message})}),f(!1)};return e.jsx("div",{children:l&&e.jsxs(o,{name:"form",form:b,onFinish:L,initialValues:l,footer:e.jsx(j,{block:!0,type:"submit",color:"primary",loading:I,children:"提交"}),children:[e.jsx(o.Item,{name:"title",label:"名称",rules:[{required:!0}],children:e.jsx(x,{placeholder:"请输入名称"})}),e.jsx(o.Item,{name:"url",label:"地址",validateFirst:!0,rules:[{required:!0},{validator:(r,t)=>{try{new URL(t)}catch{return Promise.reject(new Error("url格式错误!"))}return!i&&y.includes(t)?Promise.reject(new Error("url不能重复!")):Promise.resolve()}}],children:e.jsx(p,{placeholder:"请输入地址",autoSize:!0})}),e.jsx(o.Item,{name:"simpleDesc",label:"简短介绍",children:e.jsx(p,{placeholder:"请输入简短介绍",autoSize:!0})}),e.jsx(o.Item,{name:"desc",label:"描述",children:e.jsx(p,{placeholder:"请输入描述",autoSize:!0})}),e.jsx(o.Item,{name:"icon",label:"icon",children:e.jsx(R,{multiple:!0,maxCount:1,upload:async r=>{const t=URL.createObjectURL(r),n=await T(t),m=await S(n),s=await k(m,n);return s.success?{url:s.data}:Promise.reject()}})}),e.jsx(o.Item,{name:"tags",label:"标签",children:e.jsx(C,{webConfig:a})}),e.jsx(j,{className:"ml-4 mb-2",size:"small",color:"primary",onClick:()=>{c(`${a.path}/tag`)},children:"新增"}),e.jsx(o.Item,{name:"order",label:"排序",rules:[{required:!0}],children:e.jsx(x,{type:"number",placeholder:"请输入排序"})})]})})};export{W as default};
