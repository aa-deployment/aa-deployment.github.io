(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e638b14"],{"8a63":function(t,r,e){},ba63:function(t,r,e){t.exports=e.p+"img/icon-support.fb598bb5.svg"},bca8:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t._self._c;return r("section",{staticClass:"main"},[t.configLoaded?t._e():r("loader"),t.configLoaded&&t.isDeviceLinked?r("h1",{staticClass:"intro"},[r("span",{staticClass:"intro__inner"},[t._v(t._s(t.$t("PRO_STATUS_FOR_DEVICE")))]),"yes"===t.config.is_apple_silicon&&parseFloat(t.config.ios_version)<11.3?[r("span",{staticClass:"intro__status g-status g-status_errors"},[t._v("\n        "+t._s(t.$t("NOT_APPLICABLE"))+"\n      ")])]:[r("span",{staticClass:"intro__status g-status",class:{"g-status_success":"yes"===t.config.is_pro,"g-status_error":"revoked"===t.config.is_pro_failure_reason}},[t._v("\n        "+t._s(t.$t(t.status))+"\n      ")])]],2):t._e(),t.configLoaded?r("div",{staticClass:"row"},[r("div",{staticClass:"col col_1"},[t.isDeviceLinked?["yes"===t.config.is_pro||null!=t.config.is_pro_failure_reason?[t.config.pro_refundable_amount>0?r("div",{staticClass:"error-wrapper error-wrapper_center"},[r("html-with-links",{staticClass:"error error_block g-status g-status_error",attrs:{tag:"p",html:t.$t("ELIGIBLE_FOR_PRO_REFUND",{plusLink:"/my/plus",refundAmount:t.config.pro_refundable_amount})}}),r("btn",{attrs:{loading:t.refunding,type:"primary"},nativeOn:{click:function(r){return t.beginRefund.apply(null,arguments)}}},[t._v(t._s(t.$t("REQUEST_REFUND"))+"\n            ")])],1):t._e(),0==t.config.pro_refundable_amount?r("div",{staticClass:"error-wrapper error-wrapper_center"},[r("html-with-links",{staticClass:"error error_block g-status g-status_error",attrs:{tag:"p",html:t.$t("NOT_ELIGIBLE_FOR_PRO_REFUND",{months:3,plusLink:"/my/plus"})}})],1):t._e()]:t._e(),t.config.model.match(/mac/i)&&parseFloat(t.config.ios_version)<11.3?[r("html-with-links",{staticClass:"error error_mb g-status g-status_error",attrs:{tag:"p",html:t.$t("UPGRADE_MACOS_TO_USE")}}),r("div",{staticClass:"provided provided_alone"},[r("a",{staticClass:"provided__link",attrs:{href:"https://aysa-support.freshdesk.com/",target:"_blank"}},[r("img",{staticClass:"provided__icon",attrs:{src:e("ba63")}}),t._v("\n              "+t._s(t.$t("GET_SUPPORT"))+"\n            ")]),r("span",{staticClass:"provided__support"},[t._v("\n              "+t._s(t.$t("SUPPORT_BY_3RD_PARTY"))+"\n            ")])])]:t.config.model.match(/mac/i)&&"yes"!==t.config.is_apple_silicon?[r("div",{staticClass:"content"},[r("html-with-links",{staticClass:"text",attrs:{tag:"p",html:t.$t("INTEL_MACS_DO_NOT_SUPPORT_IPA_SIDELOADING")}})],1)]:["yes"===t.config.is_pro||t.config.is_pro_failure_reason?["disabled"===t.config.is_pro_failure_reason?r("div",{staticClass:"error-wrapper"},[r("p",{staticClass:"error g-status g-status_error"},[t._v("\n                "+t._s(t.$t("PRO_IS_DISABLED_BY_YOU"))+"\n              ")]),r("btn",{attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(r){return t.enablePro.apply(null,arguments)}}},[t._v(t._s(t.$t("ENABLE"))+"\n              ")])],1):"pending"===t.config.is_pro_failure_reason?r("div",{staticClass:"error-wrapper"},[r("p",{staticClass:"error g-status g-status_error"},[t._v("\n                "+t._s(t.$t("PRO_IS_PENDING"))+"\n              ")])]):"pending_apple"===t.config.is_pro_failure_reason?r("div",{staticClass:"error-wrapper"},[t.config.is_pro_failure_reason_data.ineligible_till?[r("p",{staticClass:"error g-status g-status_error"},[t._v("\n                  "+t._s(t.$t("PRO_IS_PENDING_APPLE_INELIGIBLE",t.config.is_pro_failure_reason_data))+"\n                ")])]:[r("p",{staticClass:"error g-status g-status_error"},[t._v("\n                  "+t._s(t.$t("PRO_IS_PENDING_APPLE_WAIT",t.config.is_pro_failure_reason_data))+"\n                ")])]],2):"expired"===t.config.is_pro_failure_reason?r("div",{staticClass:"error-wrapper"},[r("html-with-links",{staticClass:"error g-status g-status_error",attrs:{tag:"p",html:t.$t("PRO_EXPIRED_ON",{buyLink:"/my/buy",date:new Date(1e3*t.config.pro_till).toLocaleString()})}})],1):"revoked"===t.config.is_pro_failure_reason?r("div",[r("div",{staticClass:"error-wrapper"},[r("html-with-links",{staticClass:"error g-status g-status_error",attrs:{tag:"p",html:t.$t("PRO_REVOKED")}}),r("btn",{attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(r){return t.reactivatePro.apply(null,arguments)}}},[t._v("\n                  "+t._s(t.$t("ACTIVATE"))+"\n                ")])],1),r("ul",{staticClass:"list"},[r("li",{staticClass:"list__item"},[t._v("\n                  "+t._s(t.$t("PRO_REVOKED_DESC_1"))+"\n                ")]),r("li",{staticClass:"list__item"},[t._v("\n                  "+t._s(t.$t("PRO_REVOKED_DESC_2"))+"\n                ")])])]):t._e(),t.config.pro_till||t.config.pro_voucher_activated_at?r("table",{staticClass:"table"},[t.config.pro_till?r("tr",[r("td",{staticClass:"cell"},[t._v(t._s(t.$t("PRO_EXPIRES_ON")))]),r("td",{staticClass:"td"},[t._v("\n                  "+t._s(new Date(t.config.pro_till).toLocaleString())+"\n                ")])]):t._e(),t.config.pro_voucher_activated_at?r("tr",[r("td",{staticClass:"cell"},[t._v(t._s(t.$t("VOUCHER_ACTIVATED_ON")))]),r("td",{staticClass:"td"},[t._v("\n                  "+t._s(new Date(1e3*t.config.pro_voucher_activated_at).toLocaleString())+"\n                  ("+t._s(t.$t("DAYS_AGO",{count:t.voucherActivatedAgo}))+")\n                ")])]):t._e()]):t._e(),r("div",{staticClass:"provided"},[r("span",{staticClass:"cell provided__desc"},[t._v("\n                "+t._s(t.$t("PRO_PROVIDED_BY"))+"\n              ")]),r("div",{staticClass:"provided__val"},[t._v("\n                "+t._s(t.config.pro_provider)+"\n                "),r("a",{staticClass:"provided__link",attrs:{href:t.config.pro_support_uri,target:"_blank"}},[r("img",{staticClass:"provided__icon",attrs:{src:e("ba63")}}),t._v("\n                  "+t._s(t.$t("GET_SUPPORT"))+"\n                ")]),r("span",{staticClass:"provided__support"},[t._v("\n                  "+t._s(t.$t("SUPPORT_BY_3RD_PARTY"))+"\n                ")])])])]:[r("html-with-links",{staticClass:"error error_mb g-status g-status_error",attrs:{tag:"p",html:t.$t("PRO_NOT_ACTIVATED")}}),r("div",{staticClass:"provided provided_alone"},[r("a",{staticClass:"provided__link",attrs:{href:"https://aysa-support.freshdesk.com/",target:"_blank"}},[r("img",{staticClass:"provided__icon",attrs:{src:e("ba63")}}),t._v("\n                "+t._s(t.$t("GET_SUPPORT"))+"\n              ")]),r("span",{staticClass:"provided__support"},[t._v("\n                "+t._s(t.$t("SUPPORT_BY_3RD_PARTY"))+"\n              ")])])]]]:t._e()],2),r("aside",{staticClass:"sidebar col col_2"},[r("h2",{staticClass:"sidebar__heading"},[t._v(t._s(t.$t("WHAT_IS_APPDB_PRO")))]),r("p",{staticClass:"sidebar__text g-text",domProps:{innerHTML:t._s(t.$t("PRO_FEATURES_DESC"))}})])]):t._e()],1)},i=[],o=e("2a7d"),a=e("555f"),s=e("13a2"),c=e("c1df"),l=e.n(c),u=e("2f62");function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function f(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */f=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var o=r&&r.prototype instanceof m?r:m,a=Object.create(o.prototype),s=new k(n||[]);return i(a,"_invoke",{value:S(t,e,s)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=u;var h="suspendedStart",d="suspendedYield",v="executing",g="completed",y={};function m(){}function b(){}function E(){}var O={};l(O,a,(function(){return this}));var w=Object.getPrototypeOf,P=w&&w(w(A([])));P&&P!==e&&n.call(P,a)&&(O=P);var C=E.prototype=m.prototype=Object.create(O);function L(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function R(t,r){function e(i,o,a,s){var c=p(t[i],t,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==_(u)&&n.call(u,"__await")?r.resolve(u.__await).then((function(t){e("next",t,a,s)}),(function(t){e("throw",t,a,s)})):r.resolve(u).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,i){e(t,n,r,i)}))}return o=o?o.then(i,i):i()}})}function S(r,e,n){var i=h;return function(o,a){if(i===v)throw new Error("Generator is already running");if(i===g){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=T(s,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var l=p(r,e,n);if("normal"===l.type){if(i=n.done?g:d,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=g,n.method="throw",n.arg=l.arg)}}}function T(r,e){var n=e.method,i=r.iterator[n];if(i===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,T(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=p(i,r.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var a=o.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function D(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function $(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function A(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,o=function e(){for(;++i<r.length;)if(n.call(r,i))return e.value=r[i],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(_(r)+" is not iterable")}return b.prototype=E,i(C,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:b,configurable:!0}),b.displayName=l(E,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,l(t,c,"GeneratorFunction")),t.prototype=Object.create(C),t},r.awrap=function(t){return{__await:t}},L(R.prototype),l(R.prototype,s,(function(){return this})),r.AsyncIterator=R,r.async=function(t,e,n,i,o){void 0===o&&(o=Promise);var a=new R(u(t,e,n,i),o);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(C),l(C,c,"Generator"),l(C,a,(function(){return this})),l(C,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=A,k.prototype={constructor:k,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function i(n,i){return s.type="throw",s.arg=r,e.next=n,i&&(e.method="next",e.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),$(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;$(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:A(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}function p(t,r,e,n,i,o,a){try{var s=t[o](a),c=s.value}catch(l){return void e(l)}s.done?r(c):Promise.resolve(c).then(n,i)}function h(t){return function(){var r=this,e=arguments;return new Promise((function(n,i){var o=t.apply(r,e);function a(t){p(o,n,i,a,s,"next",t)}function s(t){p(o,n,i,a,s,"throw",t)}a(void 0)}))}}function d(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?d(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function g(t,r,e){return r=y(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function y(t){var r=m(t,"string");return"symbol"===_(r)?r:String(r)}function m(t,r){if("object"!==_(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}var b={components:{Btn:o["a"],Loader:a["a"],HtmlWithLinks:s["a"]},data:function(){return{loading:!1,refunding:!1}},computed:v(v({},Object(u["c"])(["devicesLoaded","isDeviceLinked"])),{},{title:function(){return this.$t("VIEW_PRO_STATUS")},configLoaded:function(){return!!this.config.model||this.devicesLoaded&&!this.isDeviceLinked},config:function(){return this.$store.getters.config},status:function(){return"yes"===this.config.is_pro?"ACTIVATED":"revoked"===this.config.is_pro_failure_reason?"REVOKED":"pending"===this.config.is_pro_failure_reason?"PENDING":"pending_apple"===this.config.is_pro_failure_reason?"PENDING_APPLE":"NOT_ACTIVATED"},voucherActivatedAgo:function(){var t=1e3*this.config.pro_voucher_activated_at;if(!t)return null;var r=l()().diff(t,"days");return r}}),methods:{enablePro:function(){var t=this;this.loading=!0,this.$api.saveConfiguration({is_pro_disabled:"no"}).then((function(){return t.$store.dispatch("getConfig")})).finally((function(){t.loading=!1}))},reactivatePro:function(){var t=this;this.loading=!0,this.$api.reactivatePro().then((function(){return Promise.all(t.$store.dispatch("getConfig"),t.$store.dispatch("getDevices"))})).then((function(){t.$notify({type:"success",text:t.$t("PRO_REACTIVATION_SUCCESS",{ipaCacheLink:"/my/ipa-cache"})})})).finally((function(){t.loading=!1}))},beginRefund:function(){var t=this;return h(f().mark((function r(){return f().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm(t.$t("PRO_REFUND_CONFIRMATION"));case 2:t.refunding=!0,t.$api.refundPro().then((function(){t.$alert(t.$t("PRO_REFUND_SUCCESS_MESSAGE",{plusLink:"/my/plus"}))})).finally((function(){t.refunding=!1}));case 4:case"end":return r.stop()}}),r)})))()}},mounted:function(){var t=this.$route.hash&&document.querySelector(this.$route.hash);t&&t.scrollIntoView()}},E=b,O=(e("d10c2"),e("2877")),w=Object(O["a"])(E,n,i,!1,null,"173120c3",null);r["default"]=w.exports},d10c2:function(t,r,e){"use strict";e("8a63")}}]);
//# sourceMappingURL=chunk-1e638b14.87d91b3d.js.map