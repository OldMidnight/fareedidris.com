(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-01d981ec":"46b5ecc1","chunk-0339c01c":"a7ff1d9c","chunk-2d0c72da":"c05f48ff","chunk-48a76426":"91e83f42"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-01d981ec":1,"chunk-0339c01c":1,"chunk-48a76426":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-01d981ec":"a96c4d56","chunk-0339c01c":"f5929035","chunk-2d0c72da":"31d6cfe0","chunk-48a76426":"7caae6fb"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],s=u.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=u(e),s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08ce":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",e._g({staticClass:"reg-input",class:{selected:e.isSelected},domProps:{value:e.value},on:{focus:e.select,blur:e.deselect}},e.listeners))},o=[],a=n("be94"),i=(n("c5f6"),{props:{value:{type:[String,Number],default:""}},data:function(){return{isSelected:!1}},methods:{select:function(){this.isSelected=!0},deselect:function(){this.isSelected=!1}},computed:{listeners:function(){var e=this;return Object(a["a"])({},this.$listeners,{input:function(t){return e.$emit("input",t.target.value)}})}}}),u=i,c=(n("7e34"),n("2877")),s=Object(c["a"])(u,r,o,!1,null,"5a490daa",null);s.options.__file="_base-input.vue";t["default"]=s.exports},"09ab":function(e,t,n){},"281f":function(e,t,n){},3341:function(e,t,n){},4023:function(e,t){e.exports={title:"Fareed Idris",description:"Personal Webpage for Fareed Idris, featuring projects and an updated blog."}},"56d3":function(e,t,n){"use strict";var r=n("c9fd"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r,o,a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Layout",[n("router-view",{key:e.$route.fullPath})],1)],1)},u=[],c=n("4023"),s=n.n(c),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},["phone"!==this.$mq?n("NavBar"):e._e(),n("transition",{attrs:{name:"layout-main","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutRight fast",mode:"out-in"}},[e._t("default")],2),"phone"===this.$mq?n("NavBar"):e._e()],1)},f=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.isMobileContainer},[n("router-link",{class:e.isMobileHeader,attrs:{to:"/"}},[n("div",{attrs:{id:"sidenav-header"}},[n("p",[e._v("Fareed Idris")])])]),n("div",{class:e.isMobileRoutes},[n("NavBarRoutes",{attrs:{routes:e.persistentNavRoutes,mq:this.$mq}})],1)],1)},p=[],v=(n("7f7f"),{functional:!0,props:{routes:{type:Array,required:!0},mq:{type:String,required:!0}},computed:{isMobile:function(){return"phone"===this.$mq},isMobileDiv:function(){return"phone"===this.$mq?"m-link-div":"link-div"}},render:function(e,t){var n=t.props,r=void 0===n?{}:n;function o(e){return"function"===typeof e.title?e.title():e.title}return"phone"===r.mq?r.routes.map(function(t){return e("router-link",{directives:[{name:"bind",value:"$attrs"}],class:"m-link-div",key:t.name,attrs:{to:t}},[e("font-awesome-icon",{attrs:{icon:t.icon}}),e("p",[o(t)])])}):r.routes.map(function(t){return e("router-link",{directives:[{name:"bind",value:"$attrs"}],class:"link-div",key:t.name,attrs:{to:t}},[e("p",{class:"link-p"},[o(t)])])})}}),h=v,m=(n("9c8c"),n("2877")),b=Object(m["a"])(h,r,o,!1,null,null,null);b.options.__file="nav-bar-routes.vue";var g=b.exports,_={components:{NavBarRoutes:g},data:function(){return{persistentNavRoutes:[{name:"home",title:"Home",icon:"home"},{name:"blog",title:"Blog",icon:"book-open"},{name:"projects",title:"Projects",icon:["far","folder-open"]}],hovered:{github:!1,telegram:!1,twitter:!1,linkedin:!1}}},computed:{isMobileContainer:function(){return"phone"===this.$mq?"m-sidenav-container":"sidenav-container"},isMobileHeader:function(){return"phone"===this.$mq?"m-sidenav-header-a":"sidenav-header-a"},isMobileRoutes:function(){return"phone"===this.$mq?"m-nav-routes":"nav-routes"}}},y=_,k=(n("c597"),Object(m["a"])(y,d,p,!1,null,null,null));k.options.__file="nav-bar.vue";var w=k.exports,j={components:{NavBar:w},created:function(){var e=window.innerWidth>0?window.innerWidth:screen.width;e<=600&&(this.is_mobile=!0)}},$=j,O=(n("56d3"),Object(m["a"])($,l,f,!1,null,"25e78866",null));O.options.__file="main.vue";var E=O.exports,S={page:{titleTemplate:function(e){return e="function"===typeof e?e(this.$store):e,e?"${title} | ${appConfig.title}":s.a.title}},components:{Layout:E}},x=S,N=(n("5c0b"),Object(m["a"])(x,i,u,!1,null,null,null));N.options.__file="App.vue";var P=N.exports,q=n("8c4f"),B=[{path:"/",name:"home",component:function(){return n.e("chunk-0339c01c").then(n.bind(null,"9e25"))}},{path:"/Blog",name:"blog",component:function(){return n.e("chunk-2d0c72da").then(n.bind(null,"5009"))}},{path:"/Projects",name:"projects",component:function(){return n.e("chunk-01d981ec").then(n.bind(null,"a97f"))}},{path:"/Projects/EC2",name:"ec2",component:function(){return n.e("chunk-48a76426").then(n.bind(null,"c847"))}},{path:"/404",name:"404",component:function(){return n("bdd2").default},props:!0},{path:"*",redirect:"404"}];a["default"].use(q["a"]);var C=new q["a"]({routes:B,mode:"history"});C.afterEach(function(e,t){"white"!==document.body.style.backgroundColor&&(document.body.style.backgroundColor="white")});var M=C,T=n("2f62");a["default"].use(T["a"]);var A=new T["a"].Store({state:{},mutations:{},actions:{}}),L=(n("a481"),n("ac6a"),n("8103")),F=n.n(L),R=n("bba4"),I=n.n(R),D=n("b526");D.keys().forEach(function(e){var t=D(e),n=F()(I()(e.replace(/^\.\/_/,"").replace(/\.\w+$/,"")));a["default"].component(n,t.default||t)});var H=n("9483");Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var W=n("ecee"),J=n("ad3d"),U=n("f2d1"),z=n("c074"),G=n("b702"),K=n("1dce"),Q=n.n(K),V=n("660e");a["default"].use(Q.a),a["default"].use(V["a"],{breakpoints:{phone:600,laptop:1200,other:1/0}}),W["c"].add(z["c"],U["a"],U["c"],z["d"],U["b"],U["d"],z["b"],z["a"],G["a"]),a["default"].component("font-awesome-icon",J["a"]),a["default"].config.productionTip=!1,new a["default"]({router:M,store:A,render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"7e34":function(e,t,n){"use strict";var r=n("281f"),o=n.n(r);o.a},8339:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",e._g({staticClass:"button"},e.$listeners),[e._t("default")],2)},o=[],a=(n("bab1"),n("2877")),i={},u=Object(a["a"])(i,r,o,!1,null,"fd043f88",null);u.options.__file="_base-button.vue";t["default"]=u.exports},8607:function(e,t,n){},"9c8c":function(e,t,n){"use strict";var r=n("3341"),o=n.n(r);o.a},b526:function(e,t,n){var r={"./_base-button.vue":"8339","./_base-input.vue":"08ce","./_base-link.vue":"cbd4"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="b526"},bab1:function(e,t,n){"use strict";var r=n("8607"),o=n.n(r);o.a},bdd2:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("h1",[e._v("\n    404\n    "),e.resource?[e._v("\n        "+e._s(e.resource)+"\n    ")]:e._e(),e._v("\n    Not Found\n")],2)])},o=[],a=(n("cadf"),n("551c"),n("097d"),{page:{title:"404",meta:[{name:"description",content:"404"}]},props:{resource:{type:String,default:""}}}),i=a,u=n("2877"),c=Object(u["a"])(i,r,o,!1,null,null,null);c.options.__file="_404.vue";t["default"]=c.exports},c597:function(e,t,n){"use strict";var r=n("09ab"),o=n.n(r);o.a},c9fd:function(e,t,n){},cbd4:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.href?n("a",e._b({class:e.def_class,attrs:{href:e.href,target:"_blank"}},"a",e.$attrs,!1),[e._t("default")],2):n("router-link",e._b({class:e.def_class,attrs:{to:e.routerLinkTo}},"router-link",e.$attrs,!1),[e._t("default")],2)},o=[],a=n("be94"),i=(n("7f7f"),{props:{href:{type:String,default:""},allowInsecure:{type:Boolean,default:!1},to:{type:Object,default:null},name:{type:String,default:""},params:{type:Object,default:function(){return{}}},def_class:{type:String}},computed:{routerLinkTo:function(e){var t=e.name,n=e.params;return Object(a["a"])({name:t,params:n},this.to||{})}},created:function(){this.validateProps()},methods:{validateProps:function(){}}}),u=i,c=n("2877"),s=Object(c["a"])(u,r,o,!1,null,null,null);s.options.__file="_base-link.vue";t["default"]=s.exports}});
//# sourceMappingURL=app.e506a58c.js.map