!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"apps-ant-admin","b":"webpack","f":[["164.async.js",164],["p__config__github__index.async.js",213],["237.async.js",237],["wrappers__config.async.js",266],["295.async.js",295],["t__plugin-layout__Layout.chunk.css",301],["t__plugin-layout__Layout.async.js",301],["320.async.js",320],["p__web__site__index.async.js",462],["555.async.js",555],["p__web__tag__index.async.js",774],["777.async.js",777],["866.async.js",866]],"r":{"/":[0,2,5,6,7],"/web":[3,0,2,5,6,7],"/web/site":[2,7,8,9,11,12,3,0,5,6],"/web/tag":[2,7,9,10,12,3,0,5,6],"/config/github":[1,7,9,0,2,5,6]}},{publicPath:"/web-box/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();