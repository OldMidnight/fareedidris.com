(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57b258a6"],{"0ffb":function(e,t,s){},"67ae":function(e,t,s){"use strict";var a=s("0ffb"),n=s.n(a);n.a},"6c4e":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-content",[e.password_verified?s("v-container",{attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[e._l(e.messages,(function(t){return s("v-flex",{key:t.m_id,staticClass:"message_box",attrs:{xs12:"",sm2:""}},[s("h4",[e._v("Subject: "+e._s(t.subject))]),s("h5",[e._v("To: "+e._s(e.lecturers[t.lecturer_id]))]),s("p",[e._v("Message: "+e._s(t.body))]),s("v-checkbox",{attrs:{label:"Validate"},on:{change:function(s){return e.sortValidation(t.m_id)}}})],1)})),s("v-btn",{attrs:{color:"success"},on:{click:function(t){return e.sendValidated()}}},[e._v("Submit")])],2)],1):s("v-container",{attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[s("v-flex",{attrs:{xs12:"phone"!==this.$mq,xs1:"phone"===this.$mq,sm1:"","d-flex":""}},[s("v-select",{attrs:{items:e.message_type_options,label:"Select Option...",outline:""},model:{value:e.message_data.type,callback:function(t){e.$set(e.message_data,"type",t)},expression:"message_data.type"}})],1),s("v-flex",{attrs:{xs12:"phone"!==this.$mq,xs1:"phone"===this.$mq,sm1:""}},[s("v-text-field",{attrs:{label:"Password",placeholder:"Password...",outline:"",type:"password"},model:{value:e.verify.password,callback:function(t){e.$set(e.verify,"password",t)},expression:"verify.password"}})],1),s("v-btn",{attrs:{color:"success"},on:{click:function(t){return e.checkPassword()}}},[e._v("Submit")])],1)],1)],1)},n=[],i=(s("7db0"),s("159b"),s("d722")),o={page:{title:"Admin - Message Verification"},data:function(){return{verify:{password:null},password_verified:!1,messages:[],message_data:{password_verified:!1,type:null},lecturers:{1:"Jane Kernan <jane.kernan@dcu.ie>",2:"John McKenna <john.mckenna@dcu.ie>",3:"Brian Stone <brian.stone@dcu.ie>",4:"Jennifer Foster <jennifer.foster@dcu.ie>",5:"Rory O Connor <Rory,OConnor@dcu.ie>"},validated_messages:[],message_type_options:[{text:"Anonymous Messages",value:"anonymous"},{text:"Identified Messages",value:"identified"}]}},name:"Admin",methods:{getMessages:function(){var e=this;this.message_data.password_verified=1==this.password_verified,i["a"].post("ec2/admin/messages",this.message_data).then((function(t){e.messages=t.data.messages,e.messages.forEach((function(t){e.validated_messages.push({validated:!1,m_id:t.m_id})}))}))},checkPassword:function(){var e=this;i["a"].post("ec2/admin/validate",this.verify).then((function(t){t.data.validated&&(e.password_verified=!0,e.getMessages())}))},sortValidation:function(e){var t=this.validated_messages.find((function(t){return t.m_id=e}));t.validated=!t.validated},sendValidated:function(){i["a"].post("ec2/admin/set_validated",this.validated_messages).then((function(e){e.data.updated&&location.reload()}))}}},r=o,d=(s("67ae"),s("2877")),c=s("6544"),l=s.n(c),u=s("8336"),f=s("ac7c"),v=s("a523"),m=s("a75b"),p=s("0e8f"),h=s("a722"),_=s("b974"),g=s("8654"),b=Object(d["a"])(r,a,n,!1,null,null,null);t["default"]=b.exports;l()(b,{VBtn:u["a"],VCheckbox:f["a"],VContainer:v["a"],VContent:m["a"],VFlex:p["a"],VLayout:h["a"],VSelect:_["a"],VTextField:g["a"]})},"7db0":function(e,t,s){"use strict";var a=s("23e7"),n=s("b727").find,i=s("44d2"),o="find",r=!0;o in[]&&Array(1)[o]((function(){r=!1})),a({target:"Array",proto:!0,forced:r},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(o)}}]);
//# sourceMappingURL=chunk-57b258a6.acf89a7c.js.map