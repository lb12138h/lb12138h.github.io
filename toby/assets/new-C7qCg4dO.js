import{a as L,b as B,r as d,j as e,B as w,i as T,p as U,v as a,T as i}from"./index-DKKuqkso.js";import{F as s,I as f}from"./input-4uKEuujg.js";import{I as R,d as C}from"./crypto-COm7HR58.js";import{T as j}from"./text-area-lCAX-PYx.js";import{u as x}from"./dexie-react-hooks-pxC-h1Kn.js";import{F as E}from"./FilterTag-DYh5E1up.js";const N=()=>{const n=L(),{id:o}=B(),l=x(()=>a.db.web.orderBy("order").last().then(r=>((r==null?void 0:r.order)||0)+1),[],0),g=x(async()=>await a.db.web.orderBy("url").keys(),[],[]),[c]=s.useForm(),[m,h]=d.useState(),[y,b]=d.useState(!1);d.useEffect(()=>{(async()=>{if(!o){l&&h({order:l});return}const t=await a.db.web.get(+o);if(!t){n(-1);return}h(t)})()},[l,o,n]);const I=async r=>{b(!0),o?await a.db.web.update(+o,{...r,hostname:new URL(r.url).hostname,order:+r.order}).then(()=>{i.show({icon:"success",content:"编辑成功!"}),c.resetFields(),n(-1)}).catch(t=>{i.show({icon:"fail",content:t.message})}):await a.db.web.add({...r,hostname:new URL(r.url).hostname,order:+r.order}).then(()=>{i.show({icon:"success",content:"新建成功!"}),c.resetFields(),n(-1)}).catch(t=>{i.show({icon:"fail",content:t.message})}),b(!1)};return e.jsx("div",{children:m&&e.jsxs(s,{name:"form",form:c,onFinish:I,initialValues:m,footer:e.jsx(w,{block:!0,type:"submit",color:"primary",loading:y,children:"提交"}),children:[e.jsx(s.Item,{name:"title",label:"名称",rules:[{required:!0}],children:e.jsx(f,{placeholder:"请输入名称"})}),e.jsx(s.Item,{name:"desc",label:"描述",children:e.jsx(j,{placeholder:"请输入描述",autoSize:!0})}),e.jsx(s.Item,{name:"url",label:"地址",validateFirst:!0,rules:[{required:!0},{validator:(r,t)=>{try{new URL(t)}catch{return Promise.reject(new Error("url格式错误!"))}return!o&&g.includes(t)?Promise.reject(new Error("url不能重复!")):Promise.resolve()}}],children:e.jsx(j,{placeholder:"请输入地址",autoSize:!0})}),e.jsx(s.Item,{name:"icon",label:"icon",children:e.jsx(R,{multiple:!0,maxCount:1,upload:async r=>{const t=URL.createObjectURL(r),u=await T(t),F=await C(u),p=await U(F,u);return p.success?{url:p.data}:Promise.reject()}})}),e.jsx(s.Item,{name:"tags",label:"标签",children:e.jsx(E,{webConfig:a})}),e.jsx(w,{className:"ml-4 mb-2",size:"small",color:"primary",onClick:()=>{n(`${a.path}/tag`)},children:"新增"}),e.jsx(s.Item,{name:"order",label:"排序",rules:[{required:!0}],children:e.jsx(f,{type:"number",placeholder:"请输入排序"})})]})})};export{N as default};
