webpackJsonp([4],{"/V3e":function(t,s){},"/yds":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={data:function(){return{passWordSafe:0,mobileInput:1,mobileValue:"",countDown:60,isStartCountDown:!1,message:"免费获取验证码",smsError:!1}},methods:{smsBlur:function(){this.smsError=!0},mobileFocus:function(){this.mobileInput=0},mobileBlur:function(){""==this.mobileValue&&(this.mobileInput=2)},startCountDown:function(){if(11!==this.mobileValue.length)return this.mobileInput=2,!1;this.isStartCountDown=!0;var t=null,s=this;!function e(){t=setTimeout(function(){if(s.countDown--,58==s.countDown)return s.isStartCountDown=!1,s.countDown=60,s.message="重新获取",clearTimeout(t),!1;e()},1e3)}()}}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"register-box"},[e("div",{staticClass:"register-header-box"},[e("div",{staticClass:"register-header"},[e("a",{staticClass:"register-logo",attrs:{href:"#"}}),t._v(" "),e("div",{staticClass:"nav-login-box"},[e("span",[t._v("已有美团账号?")]),t._v(" "),e("router-link",{staticClass:"login-input",attrs:{to:{name:"landing"}}},[t._v("登录")])],1)])]),t._v(" "),e("div",{staticClass:"register-content"},[e("form",{attrs:{action:"#"}},[e("div",{staticClass:"form-mobile"},[e("label",[t._v("手机号")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mobileValue,expression:"mobileValue"}],attrs:{type:"text",name:"mobile",id:""},domProps:{value:t.mobileValue},on:{focus:t.mobileFocus,blur:t.mobileBlur,input:function(s){s.target.composing||(t.mobileValue=s.target.value)}}}),t._v(" "),1==t.mobileInput?e("span",[t._v("注册成功后,全美团通用")]):t._e(),t._v(" "),2==t.mobileInput?e("span",{staticStyle:{color:"red"}},[e("i",{staticClass:"el-icon-error"}),t._v("\n                           请输入正确的11位手机号码\n                       ")]):t._e()]),t._v(" "),e("div",{staticClass:"verify-wrapper"},[t.isStartCountDown?e("input",{attrs:{type:"text",name:"countDown",id:"",disabled:""},domProps:{value:"重新获取("+t.countDown+")"}}):e("input",{attrs:{type:"text"},domProps:{value:t.message},on:{click:function(s){return s.stopPropagation(),t.startCountDown(s)}}}),t._v(" "),t.isStartCountDown?e("span",[t._v("已发送，1分钟后可重新获取。")]):t._e()]),t._v(" "),e("div",{staticClass:"form-sms"},[e("label",[t._v("短信动态码")]),t._v(" "),e("input",{attrs:{type:"text",name:"sms",id:""},on:{blur:t.smsBlur}}),t._v(" "),t.smsError?e("span",{staticStyle:{color:"red"}},[e("i",{staticClass:"el-icon-error"}),t._v("\n                    请输入短信动态码\n                ")]):t._e()]),t._v(" "),e("div",{staticClass:"form-pw"},[e("label",[t._v("创建密码")]),t._v(" "),e("input",{attrs:{type:"text",name:"pw",id:""}}),t._v(" "),e("div",{staticClass:"pw-strength"},[e("span",{class:{getPw:1==t.passWordSafe}},[t._v("弱")]),t._v(" "),e("span",{class:{getPw:2==t.passWordSafe}},[t._v("中")]),t._v(" "),e("span",{class:{getPw:3==t.passWordSafe}},[t._v("强")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])]),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-pw2"},[s("label",[this._v("确认密码")]),this._v(" "),s("input",{attrs:{type:"text",name:"",id:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-field"},[s("input",{attrs:{type:"submit",name:"",id:"",value:"同意以下协议并注册"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"term"},[s("a",{attrs:{href:"#"}},[this._v("《美团网用户协议》")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"register-footer"},[s("p",{staticClass:"copyright"},[this._v("\n            ©\n            "),s("a",{attrs:{href:"#"}},[this._v("meituan.com")]),this._v(" "),s("a",{attrs:{href:"#"}},[this._v("京ICP证070791号")]),this._v("\n            京公网安备11010502025545号\n        ")])])}]};var n=e("VU/8")(i,a,!1,function(t){e("/V3e")},null,null);s.default=n.exports}});
//# sourceMappingURL=4.be784689bab000b080d4.js.map