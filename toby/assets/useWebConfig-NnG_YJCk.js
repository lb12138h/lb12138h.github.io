import{I as c,r,J as i}from"./index-CLLGvO__.js";const u=()=>{const s=c(),[t,a]=r.useState();return r.useEffect(()=>{const n=s.pathname.split("/").filter(e=>e&&e.trim())[1],o=i[n];(o==null?void 0:o.routersPath)!==(t==null?void 0:t.routersPath)&&(a(o),console.log("webConfig",t))},[s,t]),t},p=u;export{p as u};
