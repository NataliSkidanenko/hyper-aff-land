(()=>{var e,t,n={781:()=>{const e=document.getElementById("form"),t=document.getElementById("success"),n=document.getElementById("success-close");e.addEventListener("submit",(async n=>{n.preventDefault();const o=e.contact.value,r=e.message.value;t.style.display="grid",document.body.overflow="hidden",e.reset(),await async function(e,t){await fetch("https://hyper-aff-mailer.onrender.com/contact",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})}(0,{contact:o,message:r})})),n.addEventListener("click",(()=>{t.style.display="none",document.body.overflow="auto"}))},911:()=>{const e=document.getElementById("grid");e&&document.body.scrollWidth>1e3&&document.addEventListener("mousemove",(t=>{e.style.top=document.body.scrollWidth-t.clientY-e.clientWidth/2+"px",e.style.left=document.body.scrollWidth-t.clientX-e.clientWidth/2+"px"}))},46:()=>{const e=document.getElementById("loader"),t=document.getElementById("content");setTimeout((()=>{e.style.display="none",t.style.display="block"}),1e3)}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={id:e,exports:{}};return n[e](a,a.exports,r),a.exports}r.m=n,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".bundle.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="hyper-aff-land:",r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var d,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){d=u;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.setAttribute("data-webpack",t+a),d.src=n),e[n]=[o];var p=(t,o)=>{d.onerror=d.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=p.bind(null,d.onerror),d.onload=p.bind(null,d.onload),c&&document.head.appendChild(d)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e={179:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((n,r)=>o=e[t]=[n,r]));n.push(o[2]=a);var i=r.p+r.u(t),d=new Error;r.l(i,(n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,o[1](d)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,a,[i,d,c]=n,l=0;if(i.some((t=>0!==e[t]))){for(o in d)r.o(d,o)&&(r.m[o]=d[o]);c&&c(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunkhyper_aff_land=self.webpackChunkhyper_aff_land||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0,(()=>{"use strict";r(46),r(911),r(781),r.e(169).then(r.bind(r,169)),r.e(368).then(r.bind(r,368)),r.e(136).then(r.bind(r,136))})()})();