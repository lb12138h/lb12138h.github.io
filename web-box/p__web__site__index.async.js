"use strict";(self.webpackChunkapps_ant_admin=self.webpackChunkapps_ant_admin||[]).push([[462],{98369:function(be,V,e){var Y=e(73193),c=e.n(Y),J=e(98421),p=e(44194),Q=e(31549),O=function(U){var A=U.modalVisible,$=U.children;return(0,Q.jsx)(J.Z,c()(c()({destroyOnClose:!0,title:"\u65B0\u5EFA",width:"80vw",open:A,footer:null},U),{},{children:$}))};V.Z=O},37453:function(be,V,e){e.d(V,{Z:function(){return H}});var Y=e(90819),c=e.n(Y),J=e(89933),p=e.n(J),Q=e(45332),O=e.n(Q),q=e(4977),U=e.n(q),A=e(78796),$=e.n(A),ue=e(41553),_=e.n(ue),ie=e(49488),le=e.n(ie),X=e(84047),oe=e.n(X),ee=e(10154),de=e.n(ee),re=e(99338),ce=function(v){le()(r,v);var t=oe()(r);function r(){var n;return $()(this,r),n=t.call(this,"HashDB"),de()(_()(n),"hash",void 0),n.version(1).stores({hash:"&hash"}),n}return U()(r)}(re.ZP),B=new ce,g=function(){var v=p()(c()().mark(function t(){return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}},t)}));return function(){return v.apply(this,arguments)}}();B.on("populate",g),window.hashDb=B;var ae=e(4931),N=function(){var v=p()(c()().mark(function t(r){var n,s,h,m,f=arguments;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return n=f.length>1&&f[1]!==void 0?f[1]:"img",u.next=3,B.hash.get(r);case 3:if(s=u.sent,s!=null&&s.base64){u.next=14;break}return u.next=7,(0,ae.I)({path:"hash/".concat(n,"/").concat(r),autoCreate:!1});case 7:if(h=u.sent,!h.success){u.next=13;break}return m=h.data.content,u.next=12,B.hash.put({hash:r,base64:m});case 12:return u.abrupt("return",{status:200,success:!0,data:m});case 13:return u.abrupt("return",h);case 14:return u.abrupt("return",{status:200,success:!0,data:s.base64});case 15:case"end":return u.stop()}},t)}));return function(r){return v.apply(this,arguments)}}(),fe=function(){var v=p()(c()().mark(function t(r){var n,s,h,m,f;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return n=r.hash,s=r.content,h=r.type,m=h===void 0?"img":h,u.next=3,B.hash.get(n);case 3:if(f=u.sent,f!=null&&f.hash){u.next=10;break}return u.next=7,B.hash.put({hash:n,base64:s});case 7:return u.next=9,(0,ae.I)({path:"hash/".concat(m,"/").concat(n),content:s,autoCreate:!0});case 9:return u.abrupt("return",u.sent);case 10:return u.abrupt("return",{status:200,success:!0,data:f.base64});case 11:case"end":return u.stop()}},t)}));return function(r){return v.apply(this,arguments)}}(),ve=e(94e3),W=e(87660),w=e(37138),te=e(79044),ne=e(60416),l=e(8010),se=e(51865),he=e.n(se),k=e(44194),L=e(31549),me=function(t){return new Promise(function(r,n){var s=new FileReader;s.readAsDataURL(t),s.onload=function(){return r(s.result)},s.onerror=function(h){return n(h)}})},ge=function(t){var r=["image/jpeg","image/png","image/svg+xml"].includes(t.type);r||te.ZP.error("You can only upload JPG/PNG/SVG file!");var n=t.size/1024/1024<2;return n||te.ZP.error("Image must smaller than 2MB!"),!1},pe=function(t){var r=t.value,n=t.onChange,s=t.onlyPreview,h=t.className,m=(0,k.useState)(!1),f=O()(m,2),R=f[0],u=f[1],C=(0,k.useState)(),x=O()(C,2),I=x[0],P=x[1],S=function(){var F=p()(c()().mark(function y(E){var b,T;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!R){a.next=2;break}return a.abrupt("return");case 2:return u(!0),console.log("info",E),a.next=6,me(E.file.originFileObj||E.file);case 6:return b=a.sent,P(b),a.next=10,(0,w.x5)(b);case 10:return T=a.sent,a.next=13,fe({hash:T,content:b});case 13:n==null||n(T),u(!1);case 15:case"end":return a.stop()}},y)}));return function(E){return F.apply(this,arguments)}}(),Z=(0,L.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[R?(0,L.jsx)(ve.Z,{}):(0,L.jsx)(W.Z,{}),(0,L.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,k.useEffect)(function(){var F=function(){var y=p()(c()().mark(function E(){var b;return c()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(r){D.next=2;break}return D.abrupt("return");case 2:return D.next=4,N(r);case 4:b=D.sent,b.success&&P(b.data);case 6:case"end":return D.stop()}},E)}));return function(){return y.apply(this,arguments)}}();F()},[r]),s?(0,L.jsx)(ne.Z,{className:h,src:I,width:32}):(0,L.jsx)(l.Z,{name:"avatar",listType:"picture-card",className:he()("avatar-uploader",h),showUploadList:!1,openFileDialogOnClick:!I,beforeUpload:ge,onChange:S,children:I?(0,L.jsx)(ne.Z,{src:I}):Z})},H=pe},97052:function(be,V,e){e.r(V),e.d(V,{default:function(){return pe}});var Y=e(45332),c=e.n(Y),J=e(90819),p=e.n(J),Q=e(89933),O=e.n(Q),q=e(98369),U=e(37453),A=e(16493),$=e(95836),ue=e(63969),_=e(75255),ie=e(70849),le=e(37138),X=e(79044),oe=e(64607),ee=e(13459),de=e(64103),re=e(2037),ce=e(41779),B=e(34825),g=e(44194),ae=e(73193),N=e.n(ae),fe=e(85045),ve=e.n(fe),W=e(92259),w=e(88251),te=e(8504),ne=e(13221),l=e(31549),se={cursor:"move",transition:"unset"},he=function(v){var t=v.tag,r=(0,w.nB)({id:t.id}),n=r.listeners,s=r.transform,h=r.transition,m=r.isDragging,f=r.setNodeRef,R=s?N()(N()({},se),{},{transform:"translate3d(".concat(s.x,"px, ").concat(s.y,"px, 0)"),transition:m?"unset":h}):se;return(0,l.jsx)(te.Z,N()(N()({style:R,ref:f},n),{},{children:t.text}))},k=function(v){var t=v.data,r=v.disabled,n=t.tags,s=(0,g.useState)([{id:1,text:"Tag 1"},{id:2,text:"Tag 2"},{id:3,text:"Tag 3"}]),h=c()(s,2),m=h[0],f=h[1];(0,g.useEffect)(function(){var C=function(){var x=O()(p()().mark(function I(){var P,S,Z,F,y,E,b,T;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:P=[],S=!1,Z=!1,a.prev=3,y=ve()(n);case 5:return a.next=7,y.next();case 7:if(!(S=!(E=a.sent).done)){a.next=16;break}return b=E.value,a.next=11,$.q.tag.get(b);case 11:T=a.sent,T&&P.push({id:T.id,text:T.title});case 13:S=!1,a.next=5;break;case 16:a.next=22;break;case 18:a.prev=18,a.t0=a.catch(3),Z=!0,F=a.t0;case 22:if(a.prev=22,a.prev=23,!(S&&y.return!=null)){a.next=27;break}return a.next=27,y.return();case 27:if(a.prev=27,!Z){a.next=30;break}throw F;case 30:return a.finish(27);case 31:return a.finish(22);case 32:f(P);case 33:case"end":return a.stop()}},I,null,[[3,18,22,32],[23,,27,31]])}));return function(){return x.apply(this,arguments)}}();C()},[n]);var R=(0,W.Dy)((0,W.VT)(W.we)),u=function(x){var I=x.active,P=x.over;P&&I.id!==P.id&&f(function(S){var Z=S.findIndex(function(y){return y.id===I.id}),F=S.findIndex(function(y){return y.id===P.id});return(0,w.Rp)(S,Z,F)})};return(0,g.useEffect)(function(){if(n.length===m.length){var C=m.map(function(x){return x.id});C.join()!==n.join()&&A.O.web.update(t.id,{tags:C})}},[m,n,t]),(0,l.jsx)(W.LB,{sensors:R,onDragEnd:u,collisionDetection:W.pE,children:(0,l.jsx)(w.Fo,{disabled:r,items:m,strategy:w.PG,children:(0,l.jsx)(ne.Z,{gap:"4px 0",wrap:!0,children:m.map(function(C){return(0,l.jsx)(he,{tag:C},C.id)})})})})},L=k,me=function(){var H=O()(p()().mark(function v(t){var r;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return r=X.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),s.prev=1,s.next=4,A.O.web.put(t);case 4:return r(),X.ZP.success("\u6DFB\u52A0\u6210\u529F"),s.abrupt("return",!0);case 9:return s.prev=9,s.t0=s.catch(1),r(),X.ZP.error("\u6DFB\u52A0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),s.abrupt("return",!1);case 14:case"end":return s.stop()}},v,null,[[1,9]])}));return function(t){return H.apply(this,arguments)}}(),ge=function(){var v=(0,B.yR)(function(){return A.O.web.toArray()},[]),t=(0,B.yR)(function(){return $.q.tag.orderBy("order").toArray()},[]),r=(0,B.yR)(function(){return $.q.group.orderBy("order").toArray()},[]),n=(0,g.useMemo)(function(){return r==null?void 0:r.map(function(i){return{title:i.title,value:"group-"+i.id,disabled:!0,children:t==null?void 0:t.filter(function(o){return o.group===i.id}).map(function(o){return{title:o.title,value:o.id}})}}).filter(function(i){var o;return(o=i.children)===null||o===void 0?void 0:o.length})},[t,r]),s=(0,g.useState)(!1),h=c()(s,2),m=h[0],f=h[1],R=(0,g.useState)(),u=c()(R,2),C=u[0],x=u[1],I=function(o){x(o),f(!0)};(0,g.useEffect)(function(){m||x(void 0)},[m]);var P=(0,g.useState)(!1),S=c()(P,2),Z=S[0],F=S[1],y=function(o){F(o.target.checked)},E=(0,g.useState)(!1),b=c()(E,2),T=b[0],D=b[1],a=function(o){D(o.target.checked)};console.log("operateChecked",T);var Pe=(0,g.useState)(),Te=c()(Pe,2),K=Te[0],Se=Te[1],ye=(0,g.useRef)(),Ce=[{title:"id",dataIndex:"id",hideInTable:!0,hideInSearch:!0,formItemProps:{hidden:!0},fieldProps:{disabled:!0}},{title:"\u56FE\u6807",dataIndex:"icon",hideInSearch:!0,renderFormItem:function(){return(0,l.jsx)(U.Z,{})},render:function(o,d,j,G,M){return(0,l.jsx)(U.Z,{value:d.icon,onlyPreview:!0})}},{title:"\u6807\u9898",dataIndex:"title",formItemProps:{rules:[{required:!0,message:"\u540D\u79F0\u4E3A\u5FC5\u586B\u9879"}]},render:function(o,d){return(0,l.jsx)("span",{className:"cursor-pointer",onClick:function(){return(0,le.ZK)(d.url)},children:d.title})}},{title:"\u526F\u6807\u9898",dataIndex:"subTitle",hideInSearch:!0},{title:"\u7F51\u5740",dataIndex:"url",formItemProps:{rules:[{required:!0,message:"\u7F51\u5740\u4E3A\u5FC5\u586B\u9879"}]},render:function(o,d){return(0,l.jsx)(oe.Z.Text,{copyable:{text:d.url},children:d.url})}},{title:"tags",dataIndex:"tags",valueType:"treeSelect",fieldProps:{treeData:n,multiple:!0,showSearch:!0,rules:[{required:!0,message:"tags\u5FC5\u586B\u9879"}]},render:function(o,d){return(0,l.jsx)(L,{data:d,disabled:!Z})}},{title:"\u5907\u6CE8",dataIndex:"remark",valueType:"textarea"},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",fixed:T?"right":!1,width:"160px",render:function(o,d){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{href:d.url,target:"_black",rel:"noreferrer",children:"\u8DF3\u8F6C"}),(0,l.jsx)(ee.Z,{type:"vertical"}),(0,l.jsx)("a",{onClick:function(){return I(d)},children:"\u7F16\u8F91"}),(0,l.jsx)(ee.Z,{type:"vertical"}),(0,l.jsx)("a",{onClick:function(){return Se(d)},children:"\u8BE6\u60C5"})]})}}];(0,g.useEffect)(function(){A.O.getCloudData()},[]);var Ee=(0,g.useState)({}),je=c()(Ee,2),z=je[0],xe=je[1],De=(0,g.useState)([]),Ie=c()(De,2),Be=Ie[0],Re=Ie[1];return(0,g.useEffect)(function(){var i=v||[],o=Object.keys(z);o.length&&o.forEach(function(d){switch(d){case"title":i=i.filter(function(j){var G;return j.title.includes(z[d]||"")||((G=j.subTitle)===null||G===void 0?void 0:G.includes(z[d]||""))});break;case"url":i=i.filter(function(j){return j.url.includes(z[d]||"")});break;case"tags":i=i.filter(function(j){var G=z[d];return G?G.every(function(M){return j.tags.includes(M)}):!0});break;default:break}}),Re(i)},[v,z]),(0,l.jsxs)(ue._z,{children:[(0,l.jsx)(_.Z,{headerTitle:"\u67E5\u8BE2\u8868\u683C",actionRef:ye,rowKey:"id",search:{labelWidth:80},scroll:{x:"max-content"},toolBarRender:function(){return[(0,l.jsx)(de.ZP,{type:"primary",onClick:function(){return f(!0)},children:"\u65B0\u5EFA"},"1"),(0,l.jsx)(re.Z,{checked:Z,onChange:y,children:"tag"}),(0,l.jsx)(re.Z,{checked:T,onChange:a,children:"\u64CD\u4F5C"})]},options:{fullScreen:!0,reload:!1},dataSource:Be,columns:Ce,onSubmit:xe,onReset:function(){return xe({})}},"".concat(T)),(0,l.jsx)(q.Z,{title:C&&"\u7F16\u8F91 - ".concat(C.id),onCancel:function(){return f(!1)},modalVisible:m,children:(0,l.jsx)(_.Z,{onSubmit:function(){var i=O()(p()().mark(function o(d){var j;return p()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,me(d);case 2:j=M.sent,j&&(f(!1),ye.current&&ye.current.reload());case 4:case"end":return M.stop()}},o)}));return function(o){return i.apply(this,arguments)}}(),rowKey:"id",type:"form",columns:Ce,form:{initialValues:C}})}),(0,l.jsx)(ce.Z,{width:600,open:!!K,onClose:function(){Se(void 0)},closable:!0,children:K&&(0,l.jsx)(ie.vY,{column:2,title:K.title,request:O()(p()().mark(function i(){return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",{data:K||{}});case 1:case"end":return d.stop()}},i)})),params:{id:K==null?void 0:K.id},columns:Ce})})]})},pe=ge}}]);
