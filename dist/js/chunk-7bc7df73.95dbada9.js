(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bc7df73"],{"36a7":function(t,e,i){},6220:function(t,e,i){"use strict";var s=i("9e52"),a=i.n(s);a.a},"8efc":function(t,e,i){},"90a2":function(t,e,i){"use strict";function s(t,e){const i=e.modifiers||{},s=e.value,r="object"===typeof s,n=r?s.handler:s,o=new IntersectionObserver((e=[],s)=>{if(t._observe){if(n&&(!i.quiet||t._observe.init)){const t=Boolean(e.find(t=>t.isIntersecting));n(e,s,t)}t._observe.init&&i.once?a(t):t._observe.init=!0}},s.options||{});t._observe={init:!1,observer:o},o.observe(t)}function a(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}const r={inserted:s,unbind:a};e["a"]=r},"915e":function(t,e,i){t.exports=i.p+"img/avatar.b3515c42.jpg"},"9e25":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{staticClass:"pt-9 mt-8",class:t.isMobileContainer,attrs:{column:"","align-center":""}},[i("div",{staticClass:"elevation-2",class:t.isMobileAvatarContainer},[i("v-img",{staticClass:"avatar",attrs:{src:t.img_src}})],1),i("div",{class:t.isMobileHeader},[i("p",{staticClass:"name"},[t._v("Fareed Idris")]),i("p",{staticClass:"header-quote"},[t._v("Hi, name is Fareed Idris and I am a university student and amateur Web developer. I am mostly interested in Backend API development, Python and Javascript. Here you can find some projects I've been working on, my resume and get in touch with me!")])]),i("div",{class:t.isMobileSocialContainer},[i("h3",{staticStyle:{"margin-bottom":"1%"}},[t._v("Find Me On:")]),i("div",{class:t.isMobileSocialWrapper},[i("a",{class:t.isMobileSocialDiv,attrs:{href:"https://github.com/OldMidnight",target:"_blank",id:"github"}},[i("font-awesome-icon",{attrs:{icon:["fab","github"],size:"2x"}}),i("p",[t._v("Github")])],1),i("a",{class:t.isMobileSocialDiv,attrs:{href:"https://www.linkedin.com/in/fareed-idris-2021",target:"_blank",id:"linkedin"}},[i("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"2x"}}),i("p",[t._v("LinkedIn")])],1),i("a",{class:t.isMobileSocialDiv,attrs:{href:"https://t.me/OldMid",target:"_blank",id:"telegram"}},[i("font-awesome-icon",{attrs:{icon:["fab","telegram"],size:"2x"}}),i("p",[t._v("Telegram")])],1),i("a",{class:t.isMobileSocialDiv,attrs:{href:"https://twitter.com/fareed_idris?s=09",target:"_blank",id:"twitter"}},[i("font-awesome-icon",{attrs:{icon:["fab","twitter"],size:"2x"}}),i("p",[t._v("Twitter")])],1)])])])},a=[],r={name:"home",data:function(){return{img_src:i("915e")}},computed:{isMobileContainer:function(){return"phone"===this.$mq?"m-home-view-container":"home-view-container"},isMobileHeader:function(){return"phone"===this.$mq?"m-home-header":"home-header"},isMobileSocialContainer:function(){return"phone"===this.$mq?"m-social-container":"social-container"},isMobileSocialWrapper:function(){return"phone"===this.$mq?"m-social-wrapper":"social-wrapper"},isMobileSocialDiv:function(){return"phone"===this.$mq?"m-social-div":"social-div"},isMobileAvatarContainer:function(){return"phone"===this.$mq?"m-avatar-container":"avatar-container"}}},n=r,o=(i("6220"),i("2877")),c=i("6544"),l=i.n(c),d=i("adda"),h=i("a722"),m=Object(o["a"])(n,s,a,!1,null,"32f6a8d4",null);e["default"]=m.exports;l()(m,{VImg:d["a"],VLayout:h["a"]})},"9e52":function(t,e,i){},adda:function(t,e,i){"use strict";i("8efc");var s=i("90a2"),a=(i("36a7"),i("24b2")),r=i("58df"),n=Object(r["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=n,c=i("d9bd");e["a"]=o.extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},hasIntersect(){return"undefined"!==typeof window&&"IntersectionObserver"in window},normalisedSrc(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!this.hasIntersect||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError(){Object(c["b"])("Image load failed\n\n"+`src: ${this.normalisedSrc.src}`,this),this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(c["c"])("Failed to decode image, trying to render anyway\n\n"+`src: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,t.src=this.normalisedSrc.src,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:a}=t;s||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/s):null!=e&&setTimeout(i,e)};i()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.directives=this.hasIntersect?[{name:"intersect",options:this.options,modifiers:{once:!0},value:this.init}]:[],e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})}}]);
//# sourceMappingURL=chunk-7bc7df73.95dbada9.js.map