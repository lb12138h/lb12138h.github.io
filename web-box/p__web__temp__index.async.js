"use strict";(self.webpackChunkapps_ant_admin=self.webpackChunkapps_ant_admin||[]).push([[912],{86760:function(k,p,e){var P=e(73193),u=e.n(P),O=e(31499),o=e(44194),M=e(31549),i=function(l){var T=l.modalVisible,C=l.children;return(0,M.jsx)(O.Z,u()(u()({destroyOnClose:!0,title:"\u65B0\u5EFA",width:"80vw",open:T,footer:null},l),{},{children:C}))};p.Z=i},40747:function(k,p,e){var P=e(90819),u=e.n(P),O=e(89933),o=e.n(O),M=e(45332),i=e.n(M),D=e(44194),l=function(C){var L=(0,D.useState)(!1),I=i()(L,2),j=I[0],d=I[1];return(0,D.useEffect)(function(){var W=function(){var R=o()(u()().mark(function w(){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return d(!0),v.next=3,C();case 3:d(!1);case 4:case"end":return v.stop()}},w)}));return function(){return R.apply(this,arguments)}}();W()},[]),[j]};p.Z=l},12842:function(k,p,e){e.r(p);var P=e(45332),u=e.n(P),O=e(90819),o=e.n(O),M=e(89933),i=e.n(M),D=e(86760),l=e(36730),T=e(40747),C=e(87306),L=e(84940),I=e(70538),j=e(11379),d=e(51192),W=e(71626),R=e(48249),w=e(31499),F=e(82083),v=e(6475),ee=e(19821),_e=e(34712),m=e(44194),r=e(31549),ne=function(){var x=i()(o()().mark(function b(E){var c;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return c=d.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),_.prev=1,_.next=4,l.N.web.put(E);case 4:return c(),d.ZP.success("\u6DFB\u52A0\u6210\u529F"),_.abrupt("return",!0);case 9:return _.prev=9,_.t0=_.catch(1),c(),d.ZP.error("\u6DFB\u52A0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),_.abrupt("return",!1);case 14:case"end":return _.stop()}},b,null,[[1,9]])}));return function(E){return x.apply(this,arguments)}}(),re=function(){var x=i()(o()().mark(function b(E){var c;return o()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return c=d.ZP.loading("\u6B63\u5728\u5220\u9664"),_.prev=1,_.next=4,l.N.web.delete(E);case 4:return c(),d.ZP.success("\u5220\u9664\u6210\u529F"),_.abrupt("return",!0);case 9:return _.prev=9,_.t0=_.catch(1),c(),d.ZP.error("\u5220\u9664\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),_.abrupt("return",!1);case 14:case"end":return _.stop()}},b,null,[[1,9]])}));return function(E){return x.apply(this,arguments)}}(),te=function(){var b=(0,T.Z)(function(){return l.N.getCloudData()}),E=u()(b,1),c=E[0],A=(0,_e.yR)(function(){return l.N.web.toArray().then(function(t){return t.reverse()})},[]),_=(0,m.useState)(!1),V=u()(_,2),U=V[0],B=V[1],ae=(0,m.useState)(),$=u()(ae,2),g=$[0],N=$[1],ue=function(a){N(a),B(!0)};(0,m.useEffect)(function(){U||N(void 0)},[U]);var oe=(0,m.useState)(!1),G=u()(oe,2),S=G[0],le=G[1],se=function(a){le(a.target.checked)},ie=(0,m.useState)(),z=u()(ie,2),f=z[0],Y=z[1],y=(0,m.useRef)(),Z=[{title:"id",dataIndex:"id",hideInTable:!0,hideInSearch:!0,formItemProps:{hidden:!0},fieldProps:{disabled:!0}},{title:"\u6807\u9898",dataIndex:"title",render:function(a,n){return(0,r.jsx)("span",{className:"cursor-pointer",onClick:function(){return(0,j.ZK)(n.url)},children:n.title})}},{title:"\u7F51\u5740",dataIndex:"url",hideInSearch:!0,formItemProps:{rules:[{required:!0,message:"\u7F51\u5740\u4E3A\u5FC5\u586B\u9879"}]},render:function(a,n){return(0,r.jsx)(W.Z.Text,{copyable:{text:n.url},children:n.url})}},{title:"\u5907\u6CE8",dataIndex:"remark",valueType:"textarea",hideInSearch:!0},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",fixed:S?"right":!1,width:"160px",render:function(a,n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{href:n.url,target:"_black",rel:"noreferrer",children:"\u8DF3\u8F6C"}),(0,r.jsx)(R.Z,{type:"vertical"}),(0,r.jsx)("a",{onClick:function(){return ue(n)},children:"\u7F16\u8F91"}),(0,r.jsx)(R.Z,{type:"vertical"}),(0,r.jsx)("a",{onClick:function(){return Y(n)},children:"\u8BE6\u60C5"}),(0,r.jsx)(R.Z,{type:"vertical"}),(0,r.jsx)("a",{onClick:function(){w.Z.confirm({type:"warning",title:"\u786E\u8BA4\u5220\u9664\uFF1F",onOk:function(){var q=i()(o()().mark(function Ee(){return o()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.abrupt("return",re(n.id));case 1:case"end":return K.stop()}},Ee)}));function h(){return q.apply(this,arguments)}return h}()})},children:"\u5220\u9664"})]})}}],de=(0,m.useState)({}),H=u()(de,2),J=H[0],Q=H[1],me=(0,m.useState)([]),X=u()(me,2),ce=X[0],be=X[1];return(0,m.useEffect)(function(){var t=A||[],a=J.title;a&&(t=t.filter(function(n){return[n.title,n.url,n.remark].some(function(s){return s==null?void 0:s.includes(a)})})),be(t)},[A,J]),(0,r.jsxs)(C._z,{children:[(0,r.jsx)(L.Z,{headerTitle:"\u67E5\u8BE2\u8868\u683C",actionRef:y,rowKey:"id",search:{labelWidth:80},scroll:{x:"max-content"},toolBarRender:function(){return[(0,r.jsx)(F.ZP,{type:"primary",onClick:function(){return B(!0)},disabled:c,children:"\u65B0\u5EFA"},"1"),(0,r.jsx)(v.Z,{checked:S,onChange:se,children:"\u64CD\u4F5C"})]},options:{fullScreen:!0,reload:!1},dataSource:ce,columns:Z,onSubmit:Q,onReset:function(){return Q({})}},"".concat(S)),(0,r.jsx)(D.Z,{title:g&&"\u7F16\u8F91 - ".concat(g.id),onCancel:function(){return B(!1)},modalVisible:U,children:(0,r.jsx)(L.Z,{onSubmit:function(){var t=i()(o()().mark(function a(n){var s;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,ne(n);case 2:s=h.sent,s&&(B(!1),y.current&&y.current.reload());case 4:case"end":return h.stop()}},a)}));return function(a){return t.apply(this,arguments)}}(),rowKey:"id",type:"form",columns:Z,form:{initialValues:g}})}),(0,r.jsx)(ee.Z,{width:600,open:!!f,onClose:function(){Y(void 0)},closable:!0,children:f&&(0,r.jsx)(I.vY,{column:2,title:f.title,request:i()(o()().mark(function t(){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{data:f||{}});case 1:case"end":return n.stop()}},t)})),params:{id:f==null?void 0:f.id},columns:Z})})]})};p.default=te}}]);
