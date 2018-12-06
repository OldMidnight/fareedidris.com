(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01d981ec"],{"1b23":function(e,t,i){"use strict";var a=i("f160"),o=i.n(a);o.a},"8d4c":function(e,t,i){"use strict";var a=i("ab6c"),o=i.n(a);o.a},a97f:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.isMobileContainer},[i("div",{class:e.isMobileWrapper},[i("div",{class:e.isMobileHeader},[i("p",{attrs:{id:"view-header-text"}},[e._v("My Projects")]),i("p",{attrs:{id:"view-header-desc"}},[e._v("Below are a couple of projects I have worked on over the last couple years.")])]),i("div",{class:e.isMobileCards},[i("ViewCard",{attrs:{cardName:"MidnightCore",cardDescription:"Easily customize and modify your Android device to make it yours. Using the Magisk Root tool, systemlessly change your device font, bootanimation or audio files to one of the 60+ provided, or easily apply your own with ease! Contains a neat toolkit to aid with debugging, log-collecting and 'fstrimming' your device for optimizations!",buttonText:"Learn More...",cardBody:"MidnightCore takes advantage of the Magisk Systemless Root Tool, to hook into the system partition of the device and modify files, all without breaking the integrity of the partition.\\nYou can find out more about Magisk Here!\\nMidnightCore is made up multiple module packages I made individually, that i packaged together to make maintenance easier and reduce users needing to flash multiple zips. These Pakages Include:\\n<b>MidnightFonts</b>: Systemlessly and easily change your device font from one of over 60+ available!\\n<b>MidnightMedia</b>: Easily and systemlessly change devicde media files such as Bootanimations and audio files(Ringtones, Alarms, UI, Notifications)! Choose from over 40+ available files!\\n<b>MidnightMisc</b>: A small toolset to aid in debugging and testing. Easily take term-specific logs, dumpsys' or gather the entire device log over a specified timelength. Also take advantage of Android's built in Fstrimming tool, to optimize your device.\\n<b>MidnightCustom</b>: None of the available files in MidnightFonts and MidnightMedia up to your taste? Not to worry! Easily apply your own custom files using the easy to follow and simple steps provided!\\nMidnightCore is targetted at all devices as long as they are running the latest Magisk Version.\\nIssues: MidnightMedia bootanimation files will not work on newer Samsung devices that use the '.qmg' file format.\\nFollow or Contribute to the project on Github or follow the progress on XDA Developers.",buttonBodyText:"Check The Forums!",route:this.xda,aHref:"https://forum.xda-developers.com/apps/magisk/module-midnightcore-one-midnight-modules-t3762758"}}),i("ViewCard",{attrs:{cardName:"DCU EC2 Class Rep Tool",cardDescription:"A small tool to help me as class rep, get recommendations, advice and messages for lecturers. Students can send messgaes anonymously or with their student number bound to their message. Messgaes will be accrued over the week and at the end of the week a batch email will be automatically sent to the specified lecturers.",buttonText:"Learn More...",cardBody:"This is a small tool that helps and automates my job as Class Rep by making it easier both for me and other students to send messages to lecturers. Some students may feel uncomfortable bringing issues and problems to the attention of their class reps or a lecturer, and this tool aims to solve this. The tool allows students to send messages either anonymously or via their student number. Anonymous messages will be hand checked by myself to ensure they comply with college email sending regulations, and messages sent via a student number will only go through server-side syntax checking and will be flagged if potential profanity is found. Messages will be accrued over a weeks period and will be sent to the specified lecturers at the end of the week. Messages can be tagged as 'urgent' and can be sent immediately. Folllow this project over on Github! Are you an EC2 Student? Click the button below to send your message!",buttonBodyText:"Send a Message...",route:this.ec2}})],1)])])},o=[],s=(i("cadf"),i("551c"),i("097d"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return!1===e.viewSelected?i("div",{class:e.isMobileCard},[i("div",{staticClass:"view-card-header"},[i("h3",{staticClass:"card-name"},[e._v(e._s(e.cardName))])]),i("div",{class:e.isMobileCardBody},[i("p",{staticClass:"card-desc"},[e._v(e._s(e.cardDescription))]),i("button",{staticClass:"learn-more-btn",attrs:{type:"button"},on:{click:function(t){e.select(t)}}},[e._v(e._s(e.buttonText))])])]):i("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.closeCard,expression:"closeCard"}],class:e.isMobileCard},[i("div",{staticClass:"view-card-close"},[i("font-awesome-icon",{attrs:{icon:"times"},on:{click:e.closeCard}})],1),i("div",{staticClass:"view-card-header"},[i("h3",{staticClass:"card-name"},[e._v(e._s(e.cardName))])]),i("div",{class:e.isMobileCardBody},[i("p",{staticClass:"card-desc"},[e._v(e._s(e.cardBody))]),i("BaseLink",{key:this.route.name,attrs:{tag:"button",to:this.route,href:this.aHref},on:{click:function(t){e.deselect(t)}}},[i("span",[e._v(e._s(e.buttonBodyText))])])],1)])}),n=[],r=i("c7db"),d={mixins:[r["mixin"]],props:{cardName:{type:String,default:"Card View"},cardDescription:{type:String,default:"Mini Description"},buttonText:{type:String,default:"Click Here..."},cardBody:{type:String,default:""},buttonBodyText:{type:String,default:"Click Here..."},route:{type:Object,required:!1},aHref:{type:String,required:!1}},methods:{closeCard:function(){var e;this.viewSelected&&("phone"===this.$mq?(e=document.querySelector(".m-card-selected"),e.classList.remove("m-card-selected")):(e=document.querySelector(".card-selected"),e.classList.remove("card-selected")),document.body.style.backgroundColor="white",this.viewSelected=!1);for(var t=document.getElementsByClassName("learn-more-btn"),i=0;i<t.length;i++)t[i].style.opacity="1"},select:function(e){var t=e.target.parentElement.parentElement;document.body.style.backgroundColor="rgba(0,0,0,0.4)","phone"===this.$mq?t.classList.add("m-card-selected"):t.classList.add("card-selected"),this.viewSelected=!0;for(var i=document.getElementsByClassName("learn-more-btn"),a=0;a<i.length;a++)i[a]!==e.target&&(i[a].style.opacity="0.5")},deselect:function(e){var t=e.target.parentElement.parentElement;document.body.style.backgroundColor="white","phone"===this.$mq?t.classList.remove("m-card-selected"):t.classList.remove("card-selected"),this.viewSelected=!1}},data:function(){return{viewSelected:!1}},computed:{isMobileCard:function(){return"phone"===this.$mq?"m-view-card":"view-card"},isMobileCardBody:function(){return"phone"===this.$mq?"m-view-card-body":"view-card-body"}}},l=d,c=(i("8d4c"),i("2877")),u=Object(c["a"])(l,s,n,!1,null,null,null);u.options.__file="view-card.vue";var m=u.exports,h={page:{title:"Projects"},name:"projects",components:{ViewCard:m},data:function(){return{ec2:{name:"ec2",title:"EC2"},xda:{name:"xda"}}},computed:{isMobileContainer:function(){return"phone"===this.$mq?"m-projects-view-container":"projects-view-container"},isMobileHeader:function(){return"phone"===this.$mq?"m-view-header":"view-header"},isMobileCards:function(){return"phone"===this.$mq?"m-view-cards":"view-cards"},isMobileWrapper:function(){return"phone"===this.$mq?"m-view-wrapper":"view-wrapper"}}},p=h,v=(i("1b23"),Object(c["a"])(p,a,o,!1,null,null,null));v.options.__file="Projects.vue";t["default"]=v.exports},ab6c:function(e,t,i){},c7db:function(e,t,i){"use strict";var a=i("2b0e");a="default"in a?a["default"]:a;var o="2.2.2",s=/^2\./.test(a.version);s||a.util.warn("VueClickaway "+o+" only supports Vue 2.x, and does not support Vue "+a.version);var n="_vue_clickaway_handler";function r(e,t,i){d(e);var a=i.context,o=t.value;if("function"===typeof o){var s=!1;setTimeout(function(){s=!0},0),e[n]=function(t){var i=t.path||(t.composedPath?t.composedPath():void 0);if(s&&(i?i.indexOf(e)<0:!e.contains(t.target)))return o.call(a,t)},document.documentElement.addEventListener("click",e[n],!1)}}function d(e){document.documentElement.removeEventListener("click",e[n],!1),delete e[n]}var l={bind:r,update:function(e,t){t.value!==t.oldValue&&r(e,t)},unbind:d},c={directives:{onClickaway:l}};t.version=o,t.directive=l,t.mixin=c},f160:function(e,t,i){}}]);
//# sourceMappingURL=chunk-01d981ec.46b5ecc1.js.map