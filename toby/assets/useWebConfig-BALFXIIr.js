import{v as r,r as a,x as i}from"./index-DERllzhn.js";const p=()=>{const o=r(),[t,n]=a.useState();return a.useEffect(()=>{const c=o.pathname.split("/").filter(e=>e&&e.trim())[1],s=i[c];(s==null?void 0:s.path)!==(t==null?void 0:t.path)&&n(s)},[o,t]),t},u=p;export{u};