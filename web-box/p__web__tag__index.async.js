!(function(){"use strict";var Et=Object.defineProperty,Zt=Object.defineProperties;var jt=Object.getOwnPropertyDescriptors;var Ee=Object.getOwnPropertySymbols;var At=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable;var Ze=(P,T,l)=>T in P?Et(P,T,{enumerable:!0,configurable:!0,writable:!0,value:l}):P[T]=l,R=(P,T)=>{for(var l in T||(T={}))At.call(T,l)&&Ze(P,l,T[l]);if(Ee)for(var l of Ee(T))Kt.call(T,l)&&Ze(P,l,T[l]);return P},H=(P,T)=>Zt(P,jt(T));(self.webpackChunkapps_ant_admin=self.webpackChunkapps_ant_admin||[]).push([[774],{37333:function(P,T,l){var ne=l(73193),N=l.n(ne),ae=l(98421),O=l(44194),oe=l(31549),V=function(E){var se=E.modalVisible,z=E.children;return(0,oe.jsx)(ae.Z,N()(N()({destroyOnClose:!0,title:"\u65B0\u5EFA",width:"80vw",open:se,footer:null},E),{},{children:z}))};T.Z=V},74992:function(P,T,l){l.r(T),l.d(T,{default:function(){return pt}});var ne=l(45332),N=l.n(ne),ae=l(90819),O=l.n(ae),oe=l(89933),V=l.n(oe),ie=l(37333),E=l(40267),se=l(63969),z=l(21996),je=l(63011),I=l(33581),Ae=l(7732),J=l(92486),Ke=l(22565),Pe=l(69920),Me=l(45571),y=l(44194),le=l(75255),Oe=l(1086),ge=l(26614),A=l(92259),B=l(92274);function Pt(r){return t=>{let{transform:e}=t;return H(R({},e),{x:Math.ceil(e.x/r)*r,y:Math.ceil(e.y/r)*r})}}const Mt=r=>{let{transform:t}=r;return H(R({},t),{y:0})};function ue(r,t,e){const n=R({},r);return t.top+r.y<=e.top?n.y=e.top-t.top:t.bottom+r.y>=e.top+e.height&&(n.y=e.top+e.height-t.bottom),t.left+r.x<=e.left?n.x=e.left-t.left:t.right+r.x>=e.left+e.width&&(n.x=e.left+e.width-t.right),n}const Ot=r=>{let{containerNodeRect:t,draggingNodeRect:e,transform:n}=r;return!e||!t?n:ue(n,e,t)},Lt=r=>{let{draggingNodeRect:t,transform:e,scrollableAncestorRects:n}=r;const a=n[0];return!t||!a?e:ue(e,t,a)},Le=r=>{let{transform:t}=r;return H(R({},t),{x:0})},Bt=r=>{let{transform:t,draggingNodeRect:e,windowRect:n}=r;return!e||!n?t:ue(t,e,n)},Nt=r=>{let{activatorEvent:t,draggingNodeRect:e,transform:n}=r;if(e&&t){const a=getEventCoordinates(t);if(!a)return n;const i=a.x-e.left,s=a.y-e.top;return H(R({},n),{x:n.x+i-e.width/2,y:n.y+s-e.height/2})}return n};function de(r,t,e){const n=r.slice();return n.splice(e<0?n.length+e:e,0,n.splice(t,1)[0]),n}function Gt(r,t,e){const n=r.slice();return n[t]=r[e],n[e]=r[t],n}function Be(r,t){return r.reduce((e,n,a)=>{const i=t.get(n);return i&&(e[a]=i),e},Array(r.length))}function Q(r){return r!==null&&r>=0}function Ne(r,t){if(r===t)return!0;if(r.length!==t.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Ge(r){return typeof r=="boolean"?{draggable:r,droppable:r}:r}const k={scaleX:1,scaleY:1},Vt=r=>{var t;let{rects:e,activeNodeRect:n,activeIndex:a,overIndex:i,index:s}=r;const o=(t=e[a])!=null?t:n;if(!o)return null;const c=Ve(e,s,a);if(s===a){const d=e[i];return d?R({x:a<i?d.left+d.width-(o.left+o.width):d.left-o.left,y:0},k):null}return s>a&&s<=i?R({x:-o.width-c,y:0},k):s<a&&s>=i?R({x:o.width+c,y:0},k):R({x:0,y:0},k)};function Ve(r,t,e){const n=r[t],a=r[t-1],i=r[t+1];return!n||!a&&!i?0:e<t?a?n.left-(a.left+a.width):i.left-(n.left+n.width):i?i.left-(n.left+n.width):n.left-(a.left+a.width)}const he=r=>{let{rects:t,activeIndex:e,overIndex:n,index:a}=r;const i=de(t,n,e),s=t[a],o=i[a];return!o||!s?null:{x:o.left-s.left,y:o.top-s.top,scaleX:o.width/s.width,scaleY:o.height/s.height}},Ft=r=>{let{activeIndex:t,index:e,rects:n,overIndex:a}=r,i,s;return e===t&&(i=n[e],s=n[a]),e===a&&(i=n[e],s=n[t]),!s||!i?null:{x:s.left-i.left,y:s.top-i.top,scaleX:s.width/i.width,scaleY:s.height/i.height}},q={scaleX:1,scaleY:1},Fe=r=>{var t;let{activeIndex:e,activeNodeRect:n,index:a,rects:i,overIndex:s}=r;const o=(t=i[e])!=null?t:n;if(!o)return null;if(a===e){const d=i[s];return d?R({x:0,y:e<s?d.top+d.height-(o.top+o.height):d.top-o.top},q):null}const c=$e(i,a,e);return a>e&&a<=s?R({x:0,y:-o.height-c},q):a<e&&a>=s?R({x:0,y:o.height+c},q):R({x:0,y:0},q)};function $e(r,t,e){const n=r[t],a=r[t-1],i=r[t+1];return n?e<t?a?n.top-(a.top+a.height):i?i.top-(n.top+n.height):0:i?i.top-(n.top+n.height):a?n.top-(a.top+a.height):0:0}const me="Sortable",pe=y.createContext({activeIndex:-1,containerId:me,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:he,disabled:{draggable:!1,droppable:!1}});function Ue(r){let{children:t,id:e,items:n,strategy:a=he,disabled:i=!1}=r;const{active:s,dragOverlay:o,droppableRects:c,over:d,measureDroppableContainers:f}=(0,A.Cj)(),h=(0,B.Ld)(me,e),m=o.rect!==null,u=(0,y.useMemo)(()=>n.map(Z=>typeof Z=="object"&&"id"in Z?Z.id:Z),[n]),x=s!=null,v=s?u.indexOf(s.id):-1,p=d?u.indexOf(d.id):-1,b=(0,y.useRef)(u),S=!Ne(u,b.current),C=p!==-1&&v===-1||S,D=Ge(i);(0,B.LI)(()=>{S&&x&&f(u)},[S,u,x,f]),(0,y.useEffect)(()=>{b.current=u},[u]);const M=(0,y.useMemo)(()=>({activeIndex:v,containerId:h,disabled:D,disableTransforms:C,items:u,overIndex:p,useDragOverlay:m,sortedRects:Be(u,c),strategy:a}),[v,h,D.draggable,D.droppable,C,u,p,c,m,a]);return y.createElement(pe.Provider,{value:M},t)}const Xe=r=>{let{id:t,items:e,activeIndex:n,overIndex:a}=r;return de(e,n,a).indexOf(t)},He=r=>{let{containerId:t,isSorting:e,wasDragging:n,index:a,items:i,newIndex:s,previousItems:o,previousContainerId:c,transition:d}=r;return!d||!n||o!==i&&a===s?!1:e?!0:s!==a&&t===c},We={duration:200,easing:"ease"},xe="transform",Ye=B.ux.Transition.toString({property:xe,duration:0,easing:"linear"}),ze={roleDescription:"sortable"};function Je(r){let{disabled:t,index:e,node:n,rect:a}=r;const[i,s]=(0,y.useState)(null),o=(0,y.useRef)(e);return(0,B.LI)(()=>{if(!t&&e!==o.current&&n.current){const c=a.current;if(c){const d=(0,A.VK)(n.current,{ignoreTransform:!0}),f={x:c.left-d.left,y:c.top-d.top,scaleX:c.width/d.width,scaleY:c.height/d.height};(f.x||f.y)&&s(f)}}e!==o.current&&(o.current=e)},[t,e,n,a]),(0,y.useEffect)(()=>{i&&s(null)},[i]),i}function Qe(r){let{animateLayoutChanges:t=He,attributes:e,disabled:n,data:a,getNewIndex:i=Xe,id:s,strategy:o,resizeObserverConfig:c,transition:d=We}=r;const{items:f,containerId:h,activeIndex:m,disabled:u,disableTransforms:x,sortedRects:v,overIndex:p,useDragOverlay:b,strategy:S}=(0,y.useContext)(pe),C=ke(n,u),D=f.indexOf(s),M=(0,y.useMemo)(()=>R({sortable:{containerId:h,index:D,items:f}},a),[h,a,D,f]),Z=(0,y.useMemo)(()=>f.slice(f.indexOf(s)),[f,s]),{rect:$,node:ee,isOver:w,setNodeRef:G}=(0,A.Zj)({id:s,data:M,disabled:C.droppable,resizeObserverConfig:R({updateMeasurementsFor:Z},c)}),{active:K,activatorEvent:te,activeNodeRect:L,attributes:ce,setNodeRef:re,listeners:xt,isDragging:fe,over:yt,setActivatorNodeRef:bt,transform:St}=(0,A.O1)({id:s,data:M,attributes:R(R({},ze),e),disabled:C.draggable}),It=(0,B.HB)(G,re),U=!!K,De=U&&!x&&Q(m)&&Q(p),we=!b&&fe,Re=we&&De?St:null,Ct=o!=null?o:S,Dt=De?Re!=null?Re:Ct({rects:v,activeNodeRect:L,activeIndex:m,overIndex:p,index:D}):null,Y=Q(m)&&Q(p)?i({id:s,items:f,activeIndex:m,overIndex:p}):D,X=K==null?void 0:K.id,j=(0,y.useRef)({activeId:X,items:f,newIndex:Y,containerId:h}),wt=f!==j.current.items,Te=t({active:K,containerId:h,isDragging:fe,isSorting:U,id:s,index:D,items:f,newIndex:j.current.newIndex,previousItems:j.current.items,previousContainerId:j.current.containerId,transition:d,wasDragging:j.current.activeId!=null}),ve=Je({disabled:!Te,index:D,node:ee,rect:$});return(0,y.useEffect)(()=>{U&&j.current.newIndex!==Y&&(j.current.newIndex=Y),h!==j.current.containerId&&(j.current.containerId=h),f!==j.current.items&&(j.current.items=f)},[U,Y,h,f]),(0,y.useEffect)(()=>{if(X===j.current.activeId)return;if(X&&!j.current.activeId){j.current.activeId=X;return}const Tt=setTimeout(()=>{j.current.activeId=X},50);return()=>clearTimeout(Tt)},[X]),{active:K,activeIndex:m,attributes:ce,data:M,rect:$,index:D,newIndex:Y,items:f,isOver:w,isSorting:U,isDragging:fe,listeners:xt,node:ee,overIndex:p,over:yt,setNodeRef:It,setActivatorNodeRef:bt,setDroppableNodeRef:G,setDraggableNodeRef:re,transform:ve!=null?ve:Dt,transition:Rt()};function Rt(){if(ve||wt&&j.current.newIndex===D)return Ye;if(!(we&&!(0,B.vd)(te)||!d)&&(U||Te))return B.ux.Transition.toString(H(R({},d),{property:xe}))}}function ke(r,t){var e,n;return typeof r=="boolean"?{draggable:r,droppable:!1}:{draggable:(e=r==null?void 0:r.draggable)!=null?e:t.draggable,droppable:(n=r==null?void 0:r.droppable)!=null?n:t.droppable}}function _(r){if(!r)return!1;const t=r.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const qe=[A.g4.Down,A.g4.Right,A.g4.Up,A.g4.Left],$t=(r,t)=>{let{context:{active:e,collisionRect:n,droppableRects:a,droppableContainers:i,over:s,scrollableAncestors:o}}=t;if(qe.includes(r.code)){if(r.preventDefault(),!e||!n)return;const c=[];i.getEnabled().forEach(h=>{if(!h||h!=null&&h.disabled)return;const m=a.get(h.id);if(m)switch(r.code){case KeyboardCode.Down:n.top<m.top&&c.push(h);break;case KeyboardCode.Up:n.top>m.top&&c.push(h);break;case KeyboardCode.Left:n.left>m.left&&c.push(h);break;case KeyboardCode.Right:n.left<m.left&&c.push(h);break}});const d=closestCorners({active:e,collisionRect:n,droppableRects:a,droppableContainers:c,pointerCoordinates:null});let f=getFirstCollision(d,"id");if(f===(s==null?void 0:s.id)&&d.length>1&&(f=d[1].id),f!=null){const h=i.get(e.id),m=i.get(f),u=m?a.get(m.id):null,x=m==null?void 0:m.node.current;if(x&&u&&h&&m){const p=getScrollableAncestors(x).some((Z,$)=>o[$]!==Z),b=ye(h,m),S=_e(h,m),C=p||!b?{x:0,y:0}:{x:S?n.width-u.width:0,y:S?n.height-u.height:0},D={x:u.left,y:u.top};return C.x&&C.y?D:subtract(D,C)}}}};function ye(r,t){return!_(r)||!_(t)?!1:r.data.current.sortable.containerId===t.data.current.sortable.containerId}function _e(r,t){return!_(r)||!_(t)||!ye(r,t)?!1:r.data.current.sortable.index<t.data.current.sortable.index}var g=l(31549),et=["DragHandle","dragSortKey"],tt=["dragSortKey"],be=(0,y.createContext)({handle:null}),rt=function(t){var e=Qe({id:t.id}),n=e.attributes,a=e.listeners,i=e.setNodeRef,s=e.transform,o=e.transition,c=(0,I.Z)({transform:B.ux.Transform.toString(s),transition:o},t==null?void 0:t.style),d=t.DragHandle,f=t.dragSortKey,h=(0,J.Z)(t,et);if(f){var m=[];return y.Children.forEach(h.children,function(u,x){if(u.key===f){var v,p;m.push((0,g.jsx)(be.Provider,{value:{handle:(0,g.jsx)(d,(0,I.Z)((0,I.Z)({rowData:u==null||(v=u.props)===null||v===void 0?void 0:v.record,index:u==null||(p=u.props)===null||p===void 0?void 0:p.index},a),n))},children:u},u.key||x));return}m.push(u)}),(0,g.jsx)("tr",(0,I.Z)((0,I.Z)({},h),{},{ref:i,style:c,children:m}))}return(0,g.jsx)("tr",(0,I.Z)((0,I.Z)((0,I.Z)({},h),{},{ref:i,style:c},n),a))},nt=y.memo(function(r){var t=r.dragSortKey,e=(0,J.Z)(r,tt),n=(0,y.useContext)(be),a=n.handle;return a?(0,g.jsx)("td",(0,I.Z)((0,I.Z)({},e),{},{children:(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[a," ",e.children]})})):(0,g.jsx)("td",(0,I.Z)({},e))}),at=function(t){return(0,g.jsx)("tbody",(0,I.Z)({},t))};function ot(r){var t=r.dataSource,e=t===void 0?[]:t,n=r.onDragSortEnd,a=r.DragHandle,i=r.dragSortKey,s=(0,A.Dy)((0,A.VT)(A.we),(0,A.VT)(A.MA)),o=(0,y.useCallback)(function(u){var x,v=u.active,p=u.over;if(p!=null&&(x=p.id)!==null&&x!==void 0&&x.toString()&&v.id!==(p==null?void 0:p.id)){var b=de(e||[],parseInt(v.id),parseInt(p.id));n==null||n(parseInt(v.id),parseInt(p.id),b||[])}},[e,n]),c=(0,ge.J)(function(u){return(0,g.jsx)(Ue,{items:e.map(function(x,v){return v==null?void 0:v.toString()}),strategy:Fe,children:(0,g.jsx)(at,(0,I.Z)({},u))})}),d=(0,ge.J)(function(u){var x,v=Object.assign({},((0,Oe.Z)(u),u)),p=(x=e.findIndex(function(b){var S;return b[(S=r.rowKey)!==null&&S!==void 0?S:"index"]===v["data-row-key"]}))===null||x===void 0?void 0:x.toString();return(0,g.jsx)(rt,(0,I.Z)({id:p,dragSortKey:i,DragHandle:a},v),p)}),f=r.components||{};if(i){var h;f.body=(0,I.Z)({wrapper:c,row:d,cell:nt},((h=r.components)===null||h===void 0?void 0:h.body)||{})}var m=(0,y.useMemo)(function(){return function(u){return(0,g.jsx)(A.LB,{modifiers:[Le],sensors:s,collisionDetection:A.pE,onDragEnd:o,children:u.children})}},[o,s]);return{DndContext:m,components:f}}var it=l(52986),st=l(81751),lt=function(t){return(0,it.Z)({},t.componentCls,{"&-icon":{marginInlineEnd:8,color:t.colorTextSecondary,cursor:"grab !important",padding:4,fontSize:12,borderRadius:t.borderRadius,"&:hover":{color:t.colorText,backgroundColor:t.colorInfoBg}}})};function ut(r){return(0,st.Xj)("DragSortTable",function(t){var e=(0,I.Z)((0,I.Z)({},t),{},{componentCls:".".concat(r)});return[lt(e)]})}var dt=["rowKey","dragSortKey","dragSortHandlerRender","onDragSortEnd","onDataSourceChange","defaultData","dataSource","onLoad"],ct=["rowData","index","className"];function ft(r){var t,e=r.rowKey,n=r.dragSortKey,a=r.dragSortHandlerRender,i=r.onDragSortEnd,s=r.onDataSourceChange,o=r.defaultData,c=r.dataSource,d=r.onLoad,f=(0,J.Z)(r,dt),h=(0,y.useContext)(Pe.ZP.ConfigContext),m=h.getPrefixCls,u=(0,Me.Z)(function(){return o||[]},{value:c,onChange:s}),x=(0,Ae.Z)(u,2),v=x[0],p=x[1],b=ut(m("pro-table-drag")),S=b.wrapSSR,C=b.hashId,D=(0,y.useMemo)(function(){return function(w){var G=w.rowData,K=w.index,te=w.className,L=(0,J.Z)(w,ct),ce=(0,g.jsx)(Ke.Z,(0,I.Z)((0,I.Z)({},L),{},{className:"".concat(m("pro-table-drag-icon")," ").concat(te||""," ").concat(C||"").trim()})),re=a?a(w==null?void 0:w.rowData,w==null?void 0:w.index):ce;return(0,g.jsx)("div",(0,I.Z)((0,I.Z)({},L),{},{children:re}))}},[m]),M=ot({dataSource:v==null?void 0:v.slice(),dragSortKey:n,onDragSortEnd:i,components:r.components,rowKey:e,DragHandle:D}),Z=M.components,$=M.DndContext,ee=function(){var w=(0,je.Z)((0,z.Z)().mark(function G(K){return(0,z.Z)().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return p(K),L.abrupt("return",d==null?void 0:d(K));case 2:case"end":return L.stop()}},G)}));return function(K){return w.apply(this,arguments)}}();return S((0,g.jsx)(le.Z,(0,I.Z)((0,I.Z)({},f),{},{columns:(t=f.columns)===null||t===void 0?void 0:t.map(function(w){return(w.dataIndex==n||w.key===n)&&(w.render||(w.render=function(){return null})),w}),onLoad:ee,rowKey:e,tableViewRender:function(G,K){return(0,g.jsx)($,{children:K})},dataSource:v,components:Z,onDataSourceChange:s})))}var Se=ft,F=l(79044),Ie=l(13459),Ce=l(64103),W=l(34825),vt=function(){var r=V()(O()().mark(function t(e){var n,a,i;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=F.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),o.prev=1,o.next=4,E.q.group.where("order").aboveOrEqual(e.order).sortBy("order");case 4:return a=o.sent.filter(function(c){return c.id!==e.id}),console.log("fields",e),o.next=8,E.q.group.put(e);case 8:return i=a.map(function(c,d){return{key:c.id,changes:{order:e.order+d+1}}}),o.next=11,E.q.group.bulkUpdate(i);case 11:return n(),F.ZP.success("\u6DFB\u52A0\u6210\u529F"),o.abrupt("return",!0);case 16:return o.prev=16,o.t0=o.catch(1),n(),console.log("error",o.t0),F.ZP.error("\u6DFB\u52A0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),o.abrupt("return",!1);case 22:case"end":return o.stop()}},t,null,[[1,16]])}));return function(e){return r.apply(this,arguments)}}(),gt=function(){var r=V()(O()().mark(function t(e){var n,a,i;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=F.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),o.prev=1,o.next=4,E.q.tag.where("order").aboveOrEqual(e.order).sortBy("order");case 4:return a=o.sent.filter(function(c){return c.id!==e.id}),o.next=7,E.q.tag.put(e);case 7:return i=a.map(function(c,d){return{key:c.id,changes:{order:e.order+d+1}}}),console.log("updateParams",i),o.next=11,E.q.tag.bulkUpdate(i);case 11:return n(),F.ZP.success("\u6DFB\u52A0\u6210\u529F"),o.abrupt("return",!0);case 16:return o.prev=16,o.t0=o.catch(1),n(),console.log("error",o.t0),F.ZP.error("\u6DFB\u52A0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),o.abrupt("return",!1);case 22:case"end":return o.stop()}},t,null,[[1,16]])}));return function(e){return r.apply(this,arguments)}}(),ht=function(){var t=(0,W.yR)(function(){return E.q.group.orderBy("order").toArray()},[]),e=(0,W.yR)(function(){return E.q.group.orderBy("order").toArray().then(function(x){var v;return((v=x.at(-1))===null||v===void 0?void 0:v.order)||0})}),n=(0,y.useState)(!1),a=N()(n,2),i=a[0],s=a[1],o=(0,y.useState)(),c=N()(o,2),d=c[0],f=c[1],h=function(v){f(v),s(!0)};(0,y.useEffect)(function(){i||f(void 0)},[i]);var m=function(v){return console.log(v)},u=[{title:"id",dataIndex:"id",hideInTable:!0,formItemProps:{hidden:!0},fieldProps:{disabled:!0}},{title:"\u540D\u79F0",dataIndex:"title",formItemProps:{rules:[{required:!0,message:"\u540D\u79F0\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u526F\u6807\u9898",dataIndex:"subTitle"},{title:"\u6392\u5E8F",dataIndex:"order",valueType:"digit"},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",fixed:"right",width:"160px",render:function(v,p){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("a",{onClick:function(){return h(p)},children:"\u7F16\u8F91"}),(0,g.jsx)(Ie.Z,{type:"vertical"}),(0,g.jsx)("a",{children:"\u5220\u9664"})]})}}];return(0,y.useEffect)(function(){E.q.getCloudData()},[]),(0,g.jsxs)(se._z,{children:[(0,g.jsx)(Se,{headerTitle:"tag \u5206\u7EC4",columns:u,rowKey:"id",search:!1,pagination:!1,dataSource:t,dragSortKey:"sort",scroll:{x:"max-content"},toolBarRender:function(){return[(0,g.jsx)(Ce.ZP,{type:"primary",onClick:function(){return s(!0)},children:"\u65B0\u5EFA"},"1")]},expandable:{expandedRowRender:function(v){return(0,g.jsx)(mt,{group:v.id})}}}),(0,g.jsx)(ie.Z,{title:d&&"\u7F16\u8F91 - ".concat(d.id),onCancel:function(){return s(!1)},modalVisible:i,children:(0,g.jsx)(le.Z,{onSubmit:function(){var x=V()(O()().mark(function v(p){var b;return O()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,vt(p);case 2:b=C.sent,b&&s(!1);case 4:case"end":return C.stop()}},v)}));return function(v){return x.apply(this,arguments)}}(),rowKey:"id",type:"form",columns:u,form:{initialValues:d||{order:e+1}}})})]})},mt=function(t){var e=t.group,n=(0,W.yR)(function(){return E.q.group.orderBy("order").toArray()},[]),a=(0,W.yR)(function(){return E.q.tag.where("group").equals(e).sortBy("order")},[]),i=(0,W.yR)(function(){return E.q.tag.orderBy("order").toArray().then(function(b){var S;return((S=b.at(-1))===null||S===void 0?void 0:S.order)||0})}),s=(0,y.useMemo)(function(){return new Map(n==null?void 0:n.map(function(b){return[b.id,{text:b.title}]}))},[a]),o=(0,y.useState)(!1),c=N()(o,2),d=c[0],f=c[1],h=(0,y.useState)(),m=N()(h,2),u=m[0],x=m[1],v=function(S){x(S),f(!0)};(0,y.useEffect)(function(){d||x(void 0)},[d]);var p=[{title:"id",dataIndex:"id",hideInTable:!0,formItemProps:{hidden:!0},fieldProps:{disabled:!0}},{title:"\u6392\u5E8F",dataIndex:"order",valueType:"digit"},{title:"\u540D\u79F0",dataIndex:"title",formItemProps:{rules:[{required:!0,message:"\u540D\u79F0\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u526F\u6807\u9898",dataIndex:"subTitle"},{title:"\u5206\u7EC4",dataIndex:"group",valueType:"select",valueEnum:s,formItemProps:{rules:[{required:!0,message:"\u5206\u7EC4\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",fixed:"right",width:"160px",render:function(S,C){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("a",{onClick:function(){return v(C)},children:"\u7F16\u8F91"}),(0,g.jsx)(Ie.Z,{type:"vertical"}),(0,g.jsx)("a",{children:"\u5220\u9664"})]})}}];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Se,{headerTitle:"tag",columns:p,rowKey:"id",search:!1,pagination:!1,dataSource:a,dragSortKey:"sort",scroll:{x:"max-content"},toolBarRender:function(){return[(0,g.jsx)(Ce.ZP,{type:"primary",onClick:function(){return f(!0)},children:"\u65B0\u5EFA"},"1")]}}),(0,g.jsx)(ie.Z,{title:u&&"\u7F16\u8F91 - ".concat(u.id),onCancel:function(){return f(!1)},modalVisible:d,children:(0,g.jsx)(le.Z,{onSubmit:function(){var b=V()(O()().mark(function S(C){var D;return O()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,gt(C);case 2:D=Z.sent,D&&f(!1);case 4:case"end":return Z.stop()}},S)}));return function(S){return b.apply(this,arguments)}}(),rowKey:"id",type:"form",columns:p,form:{initialValues:u||{order:i+1,group:e}}})})]})},pt=ht}}]);
}());