import{a as L,b as B,r as d,j as e,B as f,i as T,p as U,s as a,T as i}from"./index-h-8rQXwW.js";import{F as s,I as j}from"./input-lqMVfNre.js";import{I as R,d as S}from"./crypto-CWgy65Pw.js";import{T as m}from"./text-area-ZfMpab25.js";import{u as x}from"./dexie-react-hooks-BES2wd6N.js";import{F as C}from"./FilterTag-DNOyouQA.js";const N=()=>{const n=L(),{id:o}=B(),l=x(()=>a.db.web.orderBy("order").last().then(r=>((r==null?void 0:r.order)||0)+1),[],0),g=x(async()=>await a.db.web.orderBy("url").keys(),[],[]),[c]=s.useForm(),[h,b]=d.useState(),[y,p]=d.useState(!1);d.useEffect(()=>{(async()=>{if(!o){l&&b({order:l});return}const t=await a.db.web.get(+o);if(!t){n(-1);return}b(t)})()},[l,o,n]);const I=async r=>{p(!0),o?await a.db.web.update(+o,{...r,hostname:new URL(r.url).hostname,order:+r.order}).then(()=>{i.show({icon:"success",content:"编辑成功!"}),c.resetFields(),n(-1)}).catch(t=>{i.show({icon:"fail",content:t.message})}):await a.db.web.add({...r,hostname:new URL(r.url).hostname,order:+r.order}).then(()=>{i.show({icon:"success",content:"新建成功!"}),c.resetFields(),n(-1)}).catch(t=>{i.show({icon:"fail",content:t.message})}),p(!1)};return e.jsx("div",{children:h&&e.jsxs(s,{name:"form",form:c,onFinish:I,initialValues:h,footer:e.jsx(f,{block:!0,type:"submit",color:"primary",loading:y,children:"提交"}),children:[e.jsx(s.Item,{name:"title",label:"名称",rules:[{required:!0}],children:e.jsx(j,{placeholder:"请输入名称"})}),e.jsx(s.Item,{name:"url",label:"地址",validateFirst:!0,rules:[{required:!0},{validator:(r,t)=>{try{new URL(t)}catch{return Promise.reject(new Error("url格式错误!"))}return!o&&g.includes(t)?Promise.reject(new Error("url不能重复!")):Promise.resolve()}}],children:e.jsx(m,{placeholder:"请输入地址",autoSize:!0})}),e.jsx(s.Item,{name:"simpleDesc",label:"简短介绍",children:e.jsx(m,{placeholder:"请输入简短介绍",autoSize:!0})}),e.jsx(s.Item,{name:"desc",label:"描述",children:e.jsx(m,{placeholder:"请输入描述",autoSize:!0})}),e.jsx(s.Item,{name:"icon",label:"icon",children:e.jsx(R,{multiple:!0,maxCount:1,upload:async r=>{const t=URL.createObjectURL(r),u=await T(t),F=await S(u),w=await U(F,u);return w.success?{url:w.data}:Promise.reject()}})}),e.jsx(s.Item,{name:"tags",label:"标签",children:e.jsx(C,{webConfig:a})}),e.jsx(f,{className:"ml-4 mb-2",size:"small",color:"primary",onClick:()=>{n(`${a.path}/tag`)},children:"新增"}),e.jsx(s.Item,{name:"order",label:"排序",rules:[{required:!0}],children:e.jsx(j,{type:"number",placeholder:"请输入排序"})})]})})};export{N as default};