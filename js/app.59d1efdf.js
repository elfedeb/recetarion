(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],c[a]&&f.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-a8f812c6":"ca0ce685","chunk-2d0decf6":"95d27701","chunk-6bdec78a":"8c824dcb"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-6bdec78a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-a8f812c6":"31d6cfe0","chunk-2d0decf6":"31d6cfe0","chunk-6bdec78a":"d32d4136"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}c[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/recetarion/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"10bf":function(e,t,n){"use strict";var r=n("9610"),a=n.n(r);a.a},2948:function(e,t,n){"use strict";var r=n("4a59"),a=n.n(r);a.a},"4a59":function(e,t,n){},"4de2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("74ca"),c=n("478e"),o=n("2bf2"),i=n("522d"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],l={name:"app"},f=l,d=(n("5c0b"),n("2877")),p=Object(d["a"])(f,u,s,!1,null,null,null),m=p.exports,h=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-warp"},[n("Header"),n("MainSection",[n("router-view")],1),n("Footer")],1)},b=[],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("span",{staticClass:"brand-image"},[r("svg",{staticClass:"svg-icon icn icon-pacman-icn-blk"},[r("use",{attrs:{"xlink:href":n("977d")+"#icon-pacman-icn-blk"}})])]),e._m(0)])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"user-name"},[e._v("\n    Parguito Gourmet\n    "),n("small",{staticClass:"user-email"},[e._v("hola@parguitogourmet.com")])])}],_={name:"Header"},w=_,k=(n("10bf"),Object(d["a"])(w,g,y,!1,null,"534c8dd4",null)),j=k.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section",attrs:{role:"main"}},[e._t("default")],2)},x=[],E={name:"MainSection"},O=E,P=(n("fee1"),Object(d["a"])(O,C,x,!1,null,"0b3a5082",null)),S=P.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"pv4 ph3 ph5-m ph6-l mid-gray"},[n("small",{staticClass:"f6 db tc"},[e._v("© 2019 Reciper Footer — All Rights Reserved")]),n("div",{staticClass:"tc mt3"},[n("a",{staticClass:"f6 dib ph2 link mid-gray dim",attrs:{href:"#",title:"Language"}},[e._v("Send us your feedback")])])])}],$={name:"Footer"},A=$,q=(n("2948"),Object(d["a"])(A,T,M,!1,null,"2b4f202c",null)),F=q.exports,H={name:"MainLayout",components:{Header:j,MainSection:S,Footer:F}},L=H,N=(n("6ab8"),Object(d["a"])(L,v,b,!1,null,"44d103aa",null)),B=N.exports;r["a"].use(h["a"]);var R=new h["a"]({base:"/recetarion/",routes:[{path:"/",name:"base",redirect:"/home",component:B,children:[{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-a8f812c6"),n.e("chunk-6bdec78a")]).then(n.bind(null,"6b9f"))},meta:{pageTitle:"Home"}},{path:"/ingredient/:slug",name:"ingredient",component:function(){return Promise.all([n.e("chunk-a8f812c6"),n.e("chunk-2d0decf6")]).then(n.bind(null,"86df"))},meta:{pageTitle:"Ingredient"}}]}]}),J=R,G="https://api-useast.graphcms.com/v1/cjw84winq11ra01hs4vmqb96c/master",I=new a["a"]({link:new c["a"]({uri:G}),cache:new o["a"]});r["a"].use(i["a"]);var z=new i["a"]({defaultClient:I});r["a"].config.productionTip=!1,new r["a"]({router:J,apolloProvider:z,render:function(e){return e(m)}}).$mount("#app")},5863:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"6ab8":function(e,t,n){"use strict";var r=n("5863"),a=n.n(r);a.a},9610:function(e,t,n){},"977d":function(e,t,n){e.exports=n.p+"img/icons-defs.4a75fb4b.svg"},fee1:function(e,t,n){"use strict";var r=n("4de2"),a=n.n(r);a.a}});
//# sourceMappingURL=app.59d1efdf.js.map