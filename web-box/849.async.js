"use strict";(self.webpackChunkapps_ant_admin=self.webpackChunkapps_ant_admin||[]).push([[849],{70849:function(ba,Ae,v){v.d(Ae,{vY:function(){return Me}});var te=v(70826),K=v(21996),q=v(63011),ae=v(92486),f=v(33581),We=v(30417),Ge=v(94117),ye=v(47945),be=v(80661),ne=v(39283),s=v(44194),T=v(39767),Ke=v(51865),F=v.n(Ke),Xe=v(76933),k=v(55369),pe=v(36921),Ve=v(29616),Qe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},he=e=>{var{prefixCls:t,className:n,hoverable:a=!0}=e,r=Qe(e,["prefixCls","className","hoverable"]);const{getPrefixCls:o}=s.useContext(k.E_),l=o("card",t),c=F()(`${l}-grid`,n,{[`${l}-grid-hoverable`]:a});return s.createElement("div",Object.assign({},r,{className:c}))},S=v(6193),W=v(88856),xe=v(1325),Se=v(55114);const Ue=e=>{const{antCls:t,componentCls:n,headerHeight:a,cardPaddingBase:r,tabsMarginBottom:o}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:`0 ${(0,S.bf)(r)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${(0,S.bf)(e.borderRadiusLG)} ${(0,S.bf)(e.borderRadiusLG)} 0 0`},(0,W.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},W.vS),{[`
          > ${n}-typography,
          > ${n}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:o,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}})},Ye=e=>{const{cardPaddingBase:t,colorBorderSecondary:n,cardShadow:a,lineWidth:r}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      ${(0,S.bf)(r)} 0 0 0 ${n},
      0 ${(0,S.bf)(r)} 0 0 ${n},
      ${(0,S.bf)(r)} ${(0,S.bf)(r)} 0 0 ${n},
      ${(0,S.bf)(r)} 0 0 0 ${n} inset,
      0 ${(0,S.bf)(r)} 0 0 ${n} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},Je=e=>{const{componentCls:t,iconCls:n,actionsLiMargin:a,cardActionsIconSize:r,colorBorderSecondary:o,actionsBg:l}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:l,borderTop:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${o}`,display:"flex",borderRadius:`0 0 ${(0,S.bf)(e.borderRadiusLG)} ${(0,S.bf)(e.borderRadiusLG)}`},(0,W.dF)()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${n}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:(0,S.bf)(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${n}`]:{fontSize:r,lineHeight:(0,S.bf)(e.calc(r).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${o}`}}})},qe=e=>Object.assign(Object.assign({margin:`${(0,S.bf)(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex"},(0,W.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},W.vS),"&-description":{color:e.colorTextDescription}}),ke=e=>{const{componentCls:t,cardPaddingBase:n,colorFillAlter:a}=e;return{[`${t}-head`]:{padding:`0 ${(0,S.bf)(n)}`,background:a,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${(0,S.bf)(e.padding)} ${(0,S.bf)(n)}`}}},_e=e=>{const{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},et=e=>{const{componentCls:t,cardShadow:n,cardHeadPadding:a,colorBorderSecondary:r,boxShadowTertiary:o,cardPaddingBase:l,extraColor:c}=e;return{[t]:Object.assign(Object.assign({},(0,W.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:o},[`${t}-head`]:Ue(e),[`${t}-extra`]:{marginInlineStart:"auto",color:c,fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:l,borderRadius:`0 0 ${(0,S.bf)(e.borderRadiusLG)} ${(0,S.bf)(e.borderRadiusLG)}`},(0,W.dF)()),[`${t}-grid`]:Ye(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%",borderRadius:`${(0,S.bf)(e.borderRadiusLG)} ${(0,S.bf)(e.borderRadiusLG)} 0 0`}},[`${t}-actions`]:Je(e),[`${t}-meta`]:qe(e)}),[`${t}-bordered`]:{border:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${r}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:n}},[`${t}-contain-grid`]:{borderRadius:`${(0,S.bf)(e.borderRadiusLG)} ${(0,S.bf)(e.borderRadiusLG)} 0 0 `,[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${t}-contain-tabs`]:{[`> div${t}-head`]:{minHeight:0,[`${t}-head-title, ${t}-extra`]:{paddingTop:a}}},[`${t}-type-inner`]:ke(e),[`${t}-loading`]:_e(e),[`${t}-rtl`]:{direction:"rtl"}}},tt=e=>{const{componentCls:t,cardPaddingSM:n,headerHeightSM:a,headerFontSizeSM:r}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:a,padding:`0 ${(0,S.bf)(n)}`,fontSize:r,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:n}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},at=e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText});var nt=(0,xe.I$)("Card",e=>{const t=(0,Se.IX)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[et(t),tt(t)]},at),$e=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const rt=e=>{const{actionClasses:t,actions:n=[],actionStyle:a}=e;return s.createElement("ul",{className:t,style:a},n.map((r,o)=>{const l=`action-${o}`;return s.createElement("li",{style:{width:`${100/n.length}%`},key:l},s.createElement("span",null,r))}))};var it=s.forwardRef((e,t)=>{const{prefixCls:n,className:a,rootClassName:r,style:o,extra:l,headStyle:c={},bodyStyle:m={},title:u,loading:d,bordered:$=!0,size:w,type:E,cover:M,actions:O,tabList:I,children:R,activeTabKey:y,defaultActiveTabKey:b,tabBarExtraContent:p,hoverable:g,tabProps:P={},classNames:L,styles:B}=e,j=$e(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps","classNames","styles"]),{getPrefixCls:h,direction:Z,card:z}=s.useContext(k.E_),A=H=>{var N;(N=e.onTabChange)===null||N===void 0||N.call(e,H)},x=H=>{var N;return F()((N=z==null?void 0:z.classNames)===null||N===void 0?void 0:N[H],L==null?void 0:L[H])},C=H=>{var N;return Object.assign(Object.assign({},(N=z==null?void 0:z.styles)===null||N===void 0?void 0:N[H]),B==null?void 0:B[H])},X=s.useMemo(()=>{let H=!1;return s.Children.forEach(R,N=>{(N==null?void 0:N.type)===he&&(H=!0)}),H},[R]),D=h("card",n),[V,Q,Y]=nt(D),me=s.createElement(T.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},R),Ne=y!==void 0,ra=Object.assign(Object.assign({},P),{[Ne?"activeKey":"defaultActiveKey"]:Ne?y:b,tabBarExtraContent:p});let Fe;const J=(0,pe.Z)(w),ia=!J||J==="default"?"large":J,He=I?s.createElement(Ve.Z,Object.assign({size:ia},ra,{className:`${D}-head-tabs`,onChange:A,items:I.map(H=>{var{tab:N}=H,ge=$e(H,["tab"]);return Object.assign({label:N},ge)})})):null;if(u||l||He){const H=F()(`${D}-head`,x("header")),N=F()(`${D}-head-title`,x("title")),ge=F()(`${D}-extra`,x("extra")),ya=Object.assign(Object.assign({},c),C("header"));Fe=s.createElement("div",{className:H,style:ya},s.createElement("div",{className:`${D}-head-wrapper`},u&&s.createElement("div",{className:N,style:C("title")},u),l&&s.createElement("div",{className:ge,style:C("extra")},l)),He)}const la=F()(`${D}-cover`,x("cover")),sa=M?s.createElement("div",{className:la,style:C("cover")},M):null,oa=F()(`${D}-body`,x("body")),da=Object.assign(Object.assign({},m),C("body")),ca=s.createElement("div",{className:oa,style:da},d?me:R),ua=F()(`${D}-actions`,x("actions")),va=O!=null&&O.length?s.createElement(rt,{actionClasses:ua,actionStyle:C("actions"),actions:O}):null,fa=(0,Xe.Z)(j,["onTabChange"]),ma=F()(D,z==null?void 0:z.className,{[`${D}-loading`]:d,[`${D}-bordered`]:$,[`${D}-hoverable`]:g,[`${D}-contain-grid`]:X,[`${D}-contain-tabs`]:I==null?void 0:I.length,[`${D}-${J}`]:J,[`${D}-type-${E}`]:!!E,[`${D}-rtl`]:Z==="rtl"},a,r,Q,Y),ga=Object.assign(Object.assign({},z==null?void 0:z.style),o);return V(s.createElement("div",Object.assign({ref:t},fa,{className:ma,style:ga}),Fe,sa,ca,va))}),lt=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},st=e=>{const{prefixCls:t,className:n,avatar:a,title:r,description:o}=e,l=lt(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:c}=s.useContext(k.E_),m=c("card",t),u=F()(`${m}-meta`,n),d=a?s.createElement("div",{className:`${m}-meta-avatar`},a):null,$=r?s.createElement("div",{className:`${m}-meta-title`},r):null,w=o?s.createElement("div",{className:`${m}-meta-description`},o):null,E=$||w?s.createElement("div",{className:`${m}-meta-detail`},$,w):null;return s.createElement("div",Object.assign({},l,{className:u}),d,E)};const re=it;re.Grid=he,re.Meta=st;var G=re,_=v(89216),ot=v(13459),U=v(99819),i=v(31549),ie=function(t){var n=t.padding;return(0,i.jsx)("div",{style:{padding:n||"0 24px"},children:(0,i.jsx)(ot.Z,{style:{margin:0}})})},dt={xs:2,sm:2,md:4,lg:4,xl:6,xxl:6},ct=function(t){var n=t.size,a=t.active,r=(0,s.useMemo)(function(){return{lg:!0,md:!0,sm:!1,xl:!1,xs:!1,xxl:!1}},[]),o=(0,_.Z)()||r,l=Object.keys(o).filter(function(u){return o[u]===!0})[0]||"md",c=n===void 0?dt[l]||6:n,m=function(d){return d===0?0:c>2?42:16};return(0,i.jsx)(G,{bordered:!1,style:{marginBlockEnd:16},children:(0,i.jsx)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(c).fill(null).map(function(u,d){return(0,i.jsxs)("div",{style:{borderInlineStart:c>2&&d===1?"1px solid rgba(0,0,0,0.06)":void 0,paddingInlineStart:m(d),flex:1,marginInlineEnd:d===0?16:0},children:[(0,i.jsx)(T.Z,{active:a,paragraph:!1,title:{width:100,style:{marginBlockStart:0}}}),(0,i.jsx)(T.Z.Button,{active:a,style:{height:48}})]},d)})})})},ut=function(t){var n=t.active;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(G,{bordered:!1,style:{borderRadius:0},styles:{body:{padding:24}},children:(0,i.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsx)("div",{style:{maxWidth:"100%",flex:1},children:(0,i.jsx)(T.Z,{active:n,title:{width:100,style:{marginBlockStart:0}},paragraph:{rows:1,style:{margin:0}}})}),(0,i.jsx)(T.Z.Button,{active:n,size:"small",style:{width:165,marginBlockStart:12}})]})}),(0,i.jsx)(ie,{})]})},vt=function(t){var n=t.size,a=t.active,r=a===void 0?!0:a,o=t.actionButton;return(0,i.jsxs)(G,{bordered:!1,styles:{body:{padding:0}},children:[new Array(n).fill(null).map(function(l,c){return(0,i.jsx)(ut,{active:!!r},c)}),o!==!1&&(0,i.jsx)(G,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},styles:{body:{display:"flex",alignItems:"center",justifyContent:"center"}},children:(0,i.jsx)(T.Z.Button,{style:{width:102},active:r,size:"small"})})]})},le=function(t){var n=t.active;return(0,i.jsxs)("div",{style:{marginBlockEnd:16},children:[(0,i.jsx)(T.Z,{paragraph:!1,title:{width:185}}),(0,i.jsx)(T.Z.Button,{active:n,size:"small"})]})},ft=function(t){var n=t.active;return(0,i.jsx)(G,{bordered:!1,style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},styles:{body:{paddingBlockEnd:8}},children:(0,i.jsxs)(U.Z,{style:{width:"100%",justifyContent:"space-between"},children:[(0,i.jsx)(T.Z.Button,{active:n,style:{width:200},size:"small"}),(0,i.jsxs)(U.Z,{children:[(0,i.jsx)(T.Z.Button,{active:n,size:"small",style:{width:120}}),(0,i.jsx)(T.Z.Button,{active:n,size:"small",style:{width:80}})]})]})})},mt=function(t){var n=t.active,a=n===void 0?!0:n,r=t.statistic,o=t.actionButton,l=t.toolbar,c=t.pageHeader,m=t.list,u=m===void 0?5:m;return(0,i.jsxs)("div",{style:{width:"100%"},children:[c!==!1&&(0,i.jsx)(le,{active:a}),r!==!1&&(0,i.jsx)(ct,{size:r,active:a}),(l!==!1||u!==!1)&&(0,i.jsxs)(G,{bordered:!1,styles:{body:{padding:0}},children:[l!==!1&&(0,i.jsx)(ft,{active:a}),u!==!1&&(0,i.jsx)(vt,{size:u,active:a,actionButton:o})]})]})},gt=mt,je={xs:1,sm:2,md:3,lg:3,xl:3,xxl:4},yt=function(t){var n=t.active;return(0,i.jsxs)("div",{style:{marginBlockStart:32},children:[(0,i.jsx)(T.Z.Button,{active:n,size:"small",style:{width:100,marginBlockEnd:16}}),(0,i.jsxs)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:[(0,i.jsxs)("div",{style:{flex:1,marginInlineEnd:24,maxWidth:300},children:[(0,i.jsx)(T.Z,{active:n,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,i.jsx)(T.Z,{active:n,paragraph:!1,title:{style:{marginBlockStart:8}}}),(0,i.jsx)(T.Z,{active:n,paragraph:!1,title:{style:{marginBlockStart:8}}})]}),(0,i.jsx)("div",{style:{flex:1,alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)("div",{style:{maxWidth:300,margin:"auto"},children:[(0,i.jsx)(T.Z,{active:n,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,i.jsx)(T.Z,{active:n,paragraph:!1,title:{style:{marginBlockStart:8}}})]})})]})]})},bt=function(t){var n=t.size,a=t.active,r=(0,s.useMemo)(function(){return{lg:!0,md:!0,sm:!1,xl:!1,xs:!1,xxl:!1}},[]),o=(0,_.Z)()||r,l=Object.keys(o).filter(function(m){return o[m]===!0})[0]||"md",c=n===void 0?je[l]||3:n;return(0,i.jsx)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(c).fill(null).map(function(m,u){return(0,i.jsxs)("div",{style:{flex:1,paddingInlineStart:u===0?0:24,paddingInlineEnd:u===c-1?0:24},children:[(0,i.jsx)(T.Z,{active:a,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,i.jsx)(T.Z,{active:a,paragraph:!1,title:{style:{marginBlockStart:8}}}),(0,i.jsx)(T.Z,{active:a,paragraph:!1,title:{style:{marginBlockStart:8}}})]},u)})})},Ce=function(t){var n=t.active,a=t.header,r=a===void 0?!1:a,o=(0,s.useMemo)(function(){return{lg:!0,md:!0,sm:!1,xl:!1,xs:!1,xxl:!1}},[]),l=(0,_.Z)()||o,c=Object.keys(l).filter(function(u){return l[u]===!0})[0]||"md",m=je[c]||3;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{display:"flex",background:r?"rgba(0,0,0,0.02)":"none",padding:"24px 8px"},children:[new Array(m).fill(null).map(function(u,d){return(0,i.jsx)("div",{style:{flex:1,paddingInlineStart:r&&d===0?0:20,paddingInlineEnd:32},children:(0,i.jsx)(T.Z,{active:n,paragraph:!1,title:{style:{margin:0,height:24,width:r?"75px":"100%"}}})},d)}),(0,i.jsx)("div",{style:{flex:3,paddingInlineStart:32},children:(0,i.jsx)(T.Z,{active:n,paragraph:!1,title:{style:{margin:0,height:24,width:r?"75px":"100%"}}})})]}),(0,i.jsx)(ie,{padding:"0px 0px"})]})},pt=function(t){var n=t.active,a=t.size,r=a===void 0?4:a;return(0,i.jsxs)(G,{bordered:!1,children:[(0,i.jsx)(T.Z.Button,{active:n,size:"small",style:{width:100,marginBlockEnd:16}}),(0,i.jsx)(Ce,{header:!0,active:n}),new Array(r).fill(null).map(function(o,l){return(0,i.jsx)(Ce,{active:n},l)}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",paddingBlockStart:16},children:(0,i.jsx)(T.Z,{active:n,paragraph:!1,title:{style:{margin:0,height:32,float:"right",maxWidth:"630px"}}})})]})},ht=function(t){var n=t.active;return(0,i.jsxs)(G,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},children:[(0,i.jsx)(T.Z.Button,{active:n,size:"small",style:{width:100,marginBlockEnd:16}}),(0,i.jsx)(bt,{active:n}),(0,i.jsx)(yt,{active:n})]})},xt=function(t){var n=t.active,a=n===void 0?!0:n,r=t.pageHeader,o=t.list;return(0,i.jsxs)("div",{style:{width:"100%"},children:[r!==!1&&(0,i.jsx)(le,{active:a}),(0,i.jsx)(ht,{active:a}),o!==!1&&(0,i.jsx)(ie,{}),o!==!1&&(0,i.jsx)(pt,{active:a,size:o})]})},St=xt,$t=function(t){var n=t.active,a=n===void 0?!0:n,r=t.pageHeader;return(0,i.jsxs)("div",{style:{width:"100%"},children:[r!==!1&&(0,i.jsx)(le,{active:a}),(0,i.jsx)(G,{children:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:128},children:[(0,i.jsx)(T.Z.Avatar,{size:64,style:{marginBlockEnd:32}}),(0,i.jsx)(T.Z.Button,{active:a,style:{width:214,marginBlockEnd:8}}),(0,i.jsx)(T.Z.Button,{active:a,style:{width:328},size:"small"}),(0,i.jsxs)(U.Z,{style:{marginBlockStart:24},children:[(0,i.jsx)(T.Z.Button,{active:a,style:{width:116}}),(0,i.jsx)(T.Z.Button,{active:a,style:{width:116}})]})]})})]})},jt=$t,Ct=["type"],Et=function(t){var n=t.type,a=n===void 0?"list":n,r=(0,ae.Z)(t,Ct);return a==="result"?(0,i.jsx)(jt,(0,f.Z)({},r)):a==="descriptions"?(0,i.jsx)(St,(0,f.Z)({},r)):(0,i.jsx)(gt,(0,f.Z)({},r))},Zt=Et,se=v(65475),Ot=v(42491),Ee=v(15852),Tt=v(69754),oe=v(2504),It=v(78039),de=v(7732),wt=v(35853),Ze=v(79044),Bt=v(91324),ce=v(45571),ee=v(95853),Pt=function(t){return(Ze.ZP.warn||Ze.ZP.warning)(t)};function zt(e){var t=e.data,n=e.row;return(0,f.Z)((0,f.Z)({},t),n)}function Dt(e){var t=(0,s.useRef)(null),n=e.type||"single",a=(0,wt.YB)(),r=(0,ce.Z)([],{value:e.editableKeys,onChange:e.onChange?function(y){var b;e==null||(b=e.onChange)===null||b===void 0||b.call(e,y,e.dataSource)}:void 0}),o=(0,de.Z)(r,2),l=o[0],c=o[1],m=(0,s.useMemo)(function(){var y=n==="single"?l==null?void 0:l.slice(0,1):l;return new Set(y)},[(l||[]).join(","),n]),u=(0,s.useCallback)(function(y){return!!(l!=null&&l.includes((0,ee.sN)(y)))},[(l||[]).join(",")]),d=function(b,p){var g;return m.size>0&&n==="single"?(Pt(e.onlyOneLineEditorAlertMessage||a.getMessage("editableTable.onlyOneLineEditor","\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C")),!1):(t.current=(g=p!=null?p:(0,Bt.U2)(e.dataSource,Array.isArray(b)?b:[b]))!==null&&g!==void 0?g:null,m.add((0,ee.sN)(b)),c(Array.from(m)),!0)},$=function(b){return m.delete((0,ee.sN)(b)),c(Array.from(m)),!0},w=function(){var y=(0,q.Z)((0,K.Z)().mark(function b(p,g,P,L){var B,j;return(0,K.Z)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,e==null||(B=e.onCancel)===null||B===void 0?void 0:B.call(e,p,g,P,L);case 2:if(j=Z.sent,j!==!1){Z.next=5;break}return Z.abrupt("return",!1);case 5:return Z.abrupt("return",!0);case 6:case"end":return Z.stop()}},b)}));return function(p,g,P,L){return y.apply(this,arguments)}}(),E=function(){var y=(0,q.Z)((0,K.Z)().mark(function b(p,g,P){var L,B,j;return(0,K.Z)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,e==null||(L=e.onSave)===null||L===void 0?void 0:L.call(e,p,g,P);case 2:if(B=Z.sent,B!==!1){Z.next=5;break}return Z.abrupt("return",!1);case 5:return Z.next=7,$(p);case 7:return j={data:e.dataSource,row:g,key:p,childrenColumnName:e.childrenColumnName||"children"},e.setDataSource(zt(j)),Z.abrupt("return",!0);case 10:case"end":return Z.stop()}},b)}));return function(p,g,P){return y.apply(this,arguments)}}(),M=a.getMessage("editableTable.action.save","\u4FDD\u5B58"),O=a.getMessage("editableTable.action.delete","\u5220\u9664"),I=a.getMessage("editableTable.action.cancel","\u53D6\u6D88"),R=(0,s.useCallback)(function(y,b){var p=(0,f.Z)({recordKey:y,cancelEditable:$,onCancel:w,onSave:E,editableKeys:l,setEditableRowKeys:c,saveText:M,cancelText:I,preEditRowRef:t,deleteText:O,deletePopconfirmMessage:"".concat(a.getMessage("deleteThisLine","\u5220\u9664\u6B64\u9879"),"?"),editorType:"Map"},b),g=(0,ee.aX)(e.dataSource,p);return e.actionRender?e.actionRender(e.dataSource,p,{save:g.save,delete:g.delete,cancel:g.cancel}):[g.save,g.delete,g.cancel]},[l&&l.join(","),e.dataSource]);return{editableKeys:l,setEditableRowKeys:c,isEditable:u,actionRender:R,startEditable:d,cancelEditable:$}}var Rt=v(22208),Oe=v(93350),Te=v(86413),Lt={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},Ie=s.createContext({}),we=v(2196),Mt=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const Nt=e=>(0,we.Z)(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function Ft(e,t,n){const a=s.useMemo(()=>t||Nt(n),[t,n]);return s.useMemo(()=>a.map(o=>{var{span:l}=o,c=Mt(o,["span"]);return Object.assign(Object.assign({},c),{span:typeof l=="number"?l:(0,Te.m9)(e,l)})}),[a,e])}function Be(e,t,n){let a=e,r=!1;return(n===void 0||n>t)&&(a=Object.assign(Object.assign({},e),{span:t}),r=n!==void 0),[a,r]}function Ht(e,t){const n=[];let a=[],r=t,o=!1;return e.filter(l=>l).forEach((l,c)=>{const m=l==null?void 0:l.span,u=m||1;if(c===e.length-1){const[d,$]=Be(l,r,m);o=o||$,a.push(d),n.push(a);return}if(u<r)r-=u,a.push(l);else{const[d,$]=Be(l,r,u);o=o||$,a.push(d),n.push(a),r=t,a=[]}}),[n,o]}var At=(e,t)=>{const[n,a]=(0,s.useMemo)(()=>Ht(t,e),[t,e]);return n},Wt=e=>{let{children:t}=e;return t};function Pe(e){return e!=null}var ue=e=>{const{itemPrefixCls:t,component:n,span:a,className:r,style:o,labelStyle:l,contentStyle:c,bordered:m,label:u,content:d,colon:$,type:w}=e,E=n;return m?s.createElement(E,{className:F()({[`${t}-item-label`]:w==="label",[`${t}-item-content`]:w==="content"},r),style:o,colSpan:a},Pe(u)&&s.createElement("span",{style:l},u),Pe(d)&&s.createElement("span",{style:c},d)):s.createElement(E,{className:F()(`${t}-item`,r),style:o,colSpan:a},s.createElement("div",{className:`${t}-item-container`},(u||u===0)&&s.createElement("span",{className:F()(`${t}-item-label`,{[`${t}-item-no-colon`]:!$}),style:l},u),(d||d===0)&&s.createElement("span",{className:F()(`${t}-item-content`),style:c},d)))};function ve(e,t,n){let{colon:a,prefixCls:r,bordered:o}=t,{component:l,type:c,showLabel:m,showContent:u,labelStyle:d,contentStyle:$}=n;return e.map((w,E)=>{let{label:M,children:O,prefixCls:I=r,className:R,style:y,labelStyle:b,contentStyle:p,span:g=1,key:P}=w;return typeof l=="string"?s.createElement(ue,{key:`${c}-${P||E}`,className:R,style:y,labelStyle:Object.assign(Object.assign({},d),b),contentStyle:Object.assign(Object.assign({},$),p),span:g,colon:a,component:l,itemPrefixCls:I,bordered:o,label:m?M:null,content:u?O:null,type:c}):[s.createElement(ue,{key:`label-${P||E}`,className:R,style:Object.assign(Object.assign(Object.assign({},d),y),b),span:1,colon:a,component:l[0],itemPrefixCls:I,bordered:o,label:M,type:"label"}),s.createElement(ue,{key:`content-${P||E}`,className:R,style:Object.assign(Object.assign(Object.assign({},$),y),p),span:g*2-1,component:l[1],itemPrefixCls:I,bordered:o,content:O,type:"content"})]})}var Gt=e=>{const t=s.useContext(Ie),{prefixCls:n,vertical:a,row:r,index:o,bordered:l}=e;return a?s.createElement(s.Fragment,null,s.createElement("tr",{key:`label-${o}`,className:`${n}-row`},ve(r,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),s.createElement("tr",{key:`content-${o}`,className:`${n}-row`},ve(r,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):s.createElement("tr",{key:o,className:`${n}-row`},ve(r,e,Object.assign({component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))};const Kt=e=>{const{componentCls:t,labelBg:n}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,S.bf)(e.padding)} ${(0,S.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:n,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,S.bf)(e.paddingSM)} ${(0,S.bf)(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,S.bf)(e.paddingXS)} ${(0,S.bf)(e.padding)}`}}}}}},Xt=e=>{const{componentCls:t,extraColor:n,itemPaddingBottom:a,itemPaddingEnd:r,colonMarginRight:o,colonMarginLeft:l,titleMarginBottom:c}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,W.Wf)(e)),Kt(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:c},[`${t}-title`]:Object.assign(Object.assign({},W.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:n,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:a,paddingInlineEnd:r},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,S.bf)(l)} ${(0,S.bf)(o)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},Vt=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var Qt=(0,xe.I$)("Descriptions",e=>{const t=(0,Se.IX)(e,{});return Xt(t)},Vt),Ut=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const ze=e=>{const{prefixCls:t,title:n,extra:a,column:r,colon:o=!0,bordered:l,layout:c,children:m,className:u,rootClassName:d,style:$,size:w,labelStyle:E,contentStyle:M,items:O}=e,I=Ut(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:R,direction:y,descriptions:b}=s.useContext(k.E_),p=R("descriptions",t),g=(0,_.Z)(),P=s.useMemo(()=>{var x;return typeof r=="number"?r:(x=(0,Te.m9)(g,Object.assign(Object.assign({},Lt),r)))!==null&&x!==void 0?x:3},[g,r]),L=Ft(g,O,m),B=(0,pe.Z)(w),j=At(P,L),[h,Z,z]=Qt(p),A=s.useMemo(()=>({labelStyle:E,contentStyle:M}),[E,M]);return h(s.createElement(Ie.Provider,{value:A},s.createElement("div",Object.assign({className:F()(p,b==null?void 0:b.className,{[`${p}-${B}`]:B&&B!=="default",[`${p}-bordered`]:!!l,[`${p}-rtl`]:y==="rtl"},u,d,Z,z),style:Object.assign(Object.assign({},b==null?void 0:b.style),$)},I),(n||a)&&s.createElement("div",{className:`${p}-header`},n&&s.createElement("div",{className:`${p}-title`},n),a&&s.createElement("div",{className:`${p}-extra`},a)),s.createElement("div",{className:`${p}-view`},s.createElement("table",null,s.createElement("tbody",null,j.map((x,C)=>s.createElement(Gt,{key:C,index:C,colon:o,prefixCls:p,vertical:c==="vertical",bordered:l,row:x}))))))))};ze.Item=Wt;var fe=ze,Yt=v(69920),Jt=v(94012),qt=function(t,n){var a=n||{},r=a.onRequestError,o=a.effects,l=a.manual,c=a.dataSource,m=a.defaultDataSource,u=a.onDataSourceChange,d=(0,ce.Z)(m,{value:c,onChange:u}),$=(0,de.Z)(d,2),w=$[0],E=$[1],M=(0,ce.Z)(n==null?void 0:n.loading,{value:n==null?void 0:n.loading,onChange:n==null?void 0:n.onLoadingChange}),O=(0,de.Z)(M,2),I=O[0],R=O[1],y=function(g){E(g),R(!1)},b=function(){var p=(0,q.Z)((0,K.Z)().mark(function g(){var P,L,B;return(0,K.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!I){h.next=2;break}return h.abrupt("return");case 2:return R(!0),h.prev=3,h.next=6,t();case 6:if(h.t0=h.sent,h.t0){h.next=9;break}h.t0={};case 9:P=h.t0,L=P.data,B=P.success,B!==!1&&y(L),h.next=23;break;case 15:if(h.prev=15,h.t1=h.catch(3),r!==void 0){h.next=21;break}throw new Error(h.t1);case 21:r(h.t1);case 22:R(!1);case 23:return h.prev=23,R(!1),h.finish(23);case 26:case"end":return h.stop()}},g,null,[[3,15,23,26]])}));return function(){return p.apply(this,arguments)}}();return(0,s.useEffect)(function(){l||b()},[].concat((0,te.Z)(o||[]),[l])),{dataSource:w,setDataSource:E,loading:I,reload:function(){return b()}}},kt=qt,De=v(81751),_t=["valueEnum","render","renderText","mode","plain","dataIndex","request","params","editable"],ea=["request","columns","params","dataSource","onDataSourceChange","formProps","editable","loading","onLoadingChange","actionRef","onRequestError","emptyText","contentStyle"],ta=function(t,n){var a=t.dataIndex;if(a){var r=Array.isArray(a)?(0,Jt.Z)(n,a):n[a];if(r!==void 0||r!==null)return r}return t.children},Re=function(t){var n,a=t.valueEnum,r=t.action,o=t.index,l=t.text,c=t.entity,m=t.mode,u=t.render,d=t.editableUtils,$=t.valueType,w=t.plain,E=t.dataIndex,M=t.request,O=t.renderFormItem,I=t.params,R=t.emptyText,y=be.ZP.useFormInstance(),b=(n=De.Ow.useToken)===null||n===void 0?void 0:n.call(De.Ow),p=b.token,g={text:l,valueEnum:a,mode:m||"read",proFieldProps:{emptyText:R,render:u?function(B){return u==null?void 0:u(B,c,o,r,(0,f.Z)((0,f.Z)({},t),{},{type:"descriptions"}))}:void 0},ignoreFormItem:!0,valueType:$,request:M,params:I,plain:w};if(m==="read"||!m||$==="option"){var P=(0,se.w)(t.fieldProps,void 0,(0,f.Z)((0,f.Z)({},t),{},{rowKey:E,isEditable:!1}));return(0,i.jsx)(ne.Z,(0,f.Z)((0,f.Z)({name:E},g),{},{fieldProps:P}))}var L=function(){var j,h=(0,se.w)(t.formItemProps,y,(0,f.Z)((0,f.Z)({},t),{},{rowKey:E,isEditable:!0})),Z=(0,se.w)(t.fieldProps,y,(0,f.Z)((0,f.Z)({},t),{},{rowKey:E,isEditable:!0}));return(0,i.jsxs)("div",{style:{display:"flex",gap:p.marginXS,alignItems:"baseline"},children:[(0,i.jsx)(Ot.U,(0,f.Z)((0,f.Z)({name:E},h),{},{style:(0,f.Z)({margin:0},(h==null?void 0:h.style)||{}),initialValue:l||(h==null?void 0:h.initialValue),children:(0,i.jsx)(ne.Z,(0,f.Z)((0,f.Z)({},g),{},{proFieldProps:(0,f.Z)({},g.proFieldProps),renderFormItem:O?function(){return O==null?void 0:O((0,f.Z)((0,f.Z)({},t),{},{type:"descriptions"}),{isEditable:!0,recordKey:E,record:y.getFieldValue([E].flat(1)),defaultRender:function(){return(0,i.jsx)(ne.Z,(0,f.Z)((0,f.Z)({},g),{},{fieldProps:Z}))},type:"descriptions"},y)}:void 0,fieldProps:Z}))})),(0,i.jsx)("div",{style:{display:"flex",maxHeight:p.controlHeight,alignItems:"center",gap:p.marginXS},children:d==null||(j=d.actionRender)===null||j===void 0?void 0:j.call(d,E||o,{cancelText:(0,i.jsx)(We.Z,{}),saveText:(0,i.jsx)(Ge.Z,{}),deleteText:!1})})]})};return(0,i.jsx)("div",{style:{marginTop:-5,marginBottom:-5,marginLeft:0,marginRight:0},children:L()})},aa=function(t,n,a,r,o){var l,c=[],m=(0,Ee.n)(Oe.Z,"5.8.0")>=0,u=t==null||(l=t.map)===null||l===void 0?void 0:l.call(t,function(d,$){var w,E,M;if(s.isValidElement(d))return m?{children:d}:d;var O=d,I=O.valueEnum,R=O.render,y=O.renderText,b=O.mode,p=O.plain,g=O.dataIndex,P=O.request,L=O.params,B=O.editable,j=(0,ae.Z)(O,_t),h=(w=ta(d,n))!==null&&w!==void 0?w:j.children,Z=y?y(h,n,$,a):h,z=typeof j.title=="function"?j.title(d,"descriptions",null):j.title,A=typeof j.valueType=="function"?j.valueType(n||{},"descriptions"):j.valueType,x=r==null?void 0:r.isEditable(g||$),C=b||x?"edit":"read",X=r&&C==="read"&&B!==!1&&(B==null?void 0:B(Z,n,$))!==!1,D=X?U.Z:s.Fragment,V=C==="edit"?Z:(0,Tt.X)(Z,d,Z),Q=m&&A!=="option"?(0,f.Z)((0,f.Z)({},j),{},{key:j.key||((E=j.label)===null||E===void 0?void 0:E.toString())||$,label:(z||j.label||j.tooltip)&&(0,i.jsx)(oe.G,{label:z||j.label,tooltip:j.tooltip,ellipsis:d.ellipsis}),children:(0,i.jsxs)(D,{children:[(0,s.createElement)(Re,(0,f.Z)((0,f.Z)({},d),{},{key:d==null?void 0:d.key,dataIndex:d.dataIndex||$,mode:C,text:V,valueType:A,entity:n,index:$,emptyText:o,action:a,editableUtils:r})),X&&(0,i.jsx)(ye.Z,{onClick:function(){r==null||r.startEditable(g||$)}})]})}):(0,s.createElement)(fe.Item,(0,f.Z)((0,f.Z)({},j),{},{key:j.key||((M=j.label)===null||M===void 0?void 0:M.toString())||$,label:(z||j.label||j.tooltip)&&(0,i.jsx)(oe.G,{label:z||j.label,tooltip:j.tooltip,ellipsis:d.ellipsis})}),(0,i.jsxs)(D,{children:[(0,i.jsx)(Re,(0,f.Z)((0,f.Z)({},d),{},{dataIndex:d.dataIndex||$,mode:C,text:V,valueType:A,entity:n,index:$,action:a,editableUtils:r})),X&&A!=="option"&&(0,i.jsx)(ye.Z,{onClick:function(){r==null||r.startEditable(g||$)}})]}));return A==="option"?(c.push(Q),null):Q}).filter(function(d){return d});return{options:c!=null&&c.length?c:null,children:u}},Le=function(t){return(0,i.jsx)(fe.Item,(0,f.Z)((0,f.Z)({},t),{},{children:t.children}))};Le.displayName="ProDescriptionsItem";var na=function(t){return t.children},Me=function(t){var n,a=t.request,r=t.columns,o=t.params,l=t.dataSource,c=t.onDataSourceChange,m=t.formProps,u=t.editable,d=t.loading,$=t.onLoadingChange,w=t.actionRef,E=t.onRequestError,M=t.emptyText,O=t.contentStyle,I=(0,ae.Z)(t,ea),R=(0,s.useContext)(Yt.ZP.ConfigContext),y=kt((0,q.Z)((0,K.Z)().mark(function z(){var A;return(0,K.Z)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(!a){C.next=6;break}return C.next=3,a(o||{});case 3:C.t0=C.sent,C.next=7;break;case 6:C.t0={data:{}};case 7:return A=C.t0,C.abrupt("return",A);case 9:case"end":return C.stop()}},z)})),{onRequestError:E,effects:[(0,It.ZP)(o)],manual:!a,dataSource:l,loading:d,onLoadingChange:$,onDataSourceChange:c}),b=Dt((0,f.Z)((0,f.Z)({},t.editable),{},{childrenColumnName:void 0,dataSource:y.dataSource,setDataSource:y.setDataSource}));if((0,s.useEffect)(function(){w&&(w.current=(0,f.Z)({reload:y.reload},b))},[y,w,b]),y.loading||y.loading===void 0&&a)return(0,i.jsx)(Zt,{type:"descriptions",list:!1,pageHeader:!1});var p=function(){var A=(0,we.Z)(t.children).filter(Boolean).map(function(x){if(!s.isValidElement(x))return x;var C=x==null?void 0:x.props,X=C.valueEnum,D=C.valueType,V=C.dataIndex,Q=C.ellipsis,Y=C.copyable,me=C.request;return!D&&!X&&!V&&!me&&!Q&&!Y&&x.type.displayName!=="ProDescriptionsItem"?x:(0,f.Z)((0,f.Z)({},x==null?void 0:x.props),{},{entity:l})});return[].concat((0,te.Z)(r||[]),(0,te.Z)(A)).filter(function(x){return!x||x!=null&&x.valueType&&["index","indexBorder"].includes(x==null?void 0:x.valueType)?!1:!(x!=null&&x.hideInDescriptions)}).sort(function(x,C){return C.order||x.order?(C.order||0)-(x.order||0):(C.index||0)-(x.index||0)})},g=aa(p(),y.dataSource||{},(w==null?void 0:w.current)||y,u?b:void 0,t.emptyText),P=g.options,L=g.children,B=u?be.ZP:na,j=null;(I.title||I.tooltip||I.tip)&&(j=(0,i.jsx)(oe.G,{label:I.title,tooltip:I.tooltip||I.tip}));var h=R.getPrefixCls("pro-descriptions"),Z=(0,Ee.n)(Oe.Z,"5.8.0")>=0;return(0,i.jsx)(Rt.S,{children:(0,i.jsx)(B,(0,f.Z)((0,f.Z)({form:(n=t.editable)===null||n===void 0?void 0:n.form,component:!1,submitter:!1},m),{},{onFinish:void 0,children:(0,i.jsx)(fe,(0,f.Z)((0,f.Z)({className:h},I),{},{contentStyle:(0,f.Z)({minWidth:0},O||{}),extra:I.extra?(0,i.jsxs)(U.Z,{children:[P,I.extra]}):P,title:j,items:Z?L:void 0,children:Z?null:L}))}),"form")})};Me.Item=Le;var Oa=null}}]);