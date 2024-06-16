(()=>{"use strict";var e,t,r,o={38248:(e,t,r)=>{var o=r(61338),n=r(38613),i=r(63814),a=r(85471),c=r(26287);const l=(0,n.C)("core","apps",{}),d=(0,a.$V)((()=>Promise.all([r.e(4208),r.e(2452)]).then(r.bind(r,92452))));(0,o.B1)("notifications:action:execute",(e=>{if("app_updated"===e.notification.objectType){var t;e.cancelAction=!0;const[r,o,n,s]=null!==(t=e.action.url.match(/(?<=\/)([^?]+)?version=((\d+.?)+)/))&&void 0!==t?t:[];(function(e,t){const r=document.createElement("div");return document.body.appendChild(r),new Promise((o=>{let n=!1;const i=new a.Ay({el:r,render:r=>r(d,{props:{appId:e,version:t},on:{dismiss:()=>{n=!0},"update:open":t=>{var r;t||(null===(r=i.$destroy)||void 0===r||r.call(i),o(n),n&&e in l&&(window.location=l[e].href))}}})})}))})(o||e.notification.objectId,n).then((t=>{t&&c.A.delete((0,i.KT)("apps/notifications/api/v2/notifications/{id}",{id:e.notification.notificationId}))}))}}))}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=o,e=[],i.O=(t,r,o,n)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],n=e[s][2];for(var c=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(i.O).every((e=>i.O[e](r[l])))?r.splice(l--,1):(c=!1,n<a&&(a=n));if(c){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[r,o,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+"-"+e+".js?v=a797614df9a27fff9e91",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="nextcloud:",i.l=(e,o,n,a)=>{if(t[e])t[e].push(o);else{var c,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var u=d[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){c=u;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",r+n),c.src=e),t[e]=[o];var p=(r,o)=>{c.onerror=c.onload=null,clearTimeout(f);var n=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(o))),r)return r(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),l&&document.head.appendChild(c)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=1864,(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i.b=document.baseURI||self.location.href;var e={1864:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=i.p+i.u(t),c=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,o[1](c)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],c=r[1],l=r[2],d=0;if(a.some((t=>0!==e[t]))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);if(l)var s=l(i)}for(t&&t(r);d<a.length;d++)n=a[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(s)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.nc=void 0;var a=i.O(void 0,[4208],(()=>i(38248)));a=i.O(a)})();
//# sourceMappingURL=updatenotification-init.js.map?v=99844e9a38f759ee3578