(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f01fe6e"],{"19d1":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("h1",{staticClass:"intro"},[t._v(t._s(t.$t("HOW_TO_SIDELOAD")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"content"},[e("p",{staticClass:"g-text g-text_justify",domProps:{innerHTML:t._s(t.$t("SIDELOADING_OPTIONS_DESCRIPTION"))}}),e("v-accordion",{staticClass:"sideloading-accordion",attrs:{anchor:"official",heading:t.$t("OFFICIAL_SIDELOADING_HEADING")}},[e("ol",{staticClass:"steps"},[e("li",{staticClass:"steps__step",class:{"accent-animation":"step-1"===t.$route.query.accent}},[e("img",{staticClass:"steps__icon",attrs:{src:r("1bd9")}}),e("div",{domProps:{innerHTML:t._s(t.$t("PLUS_STEP_1",{href:"#"})+" (<a href='https://www.youtube.com/watch?v=QFs7uVk7s4Y' target='_blank'>"+t.$t("VIDEO_TUTORIAL")+"</a>)")},on:{click:t.purchase}})]),e("li",{staticClass:"steps__step"},[e("img",{staticClass:"steps__icon",attrs:{src:r("b7a4")("./".concat(t.BRAND_KEY,"/images/logo-mobile-").concat(t.theme,".svg"))}}),e("html-with-links",{attrs:{html:t.$t("PLUS_STEP_2",{href:"/my/apple"})+" (<a href='https://www.youtube.com/watch?v=-ShhaoaLWyE' target='_blank'>"+t.$t("VIDEO_TUTORIAL")+"</a>)"}})],1)]),e("p",{staticClass:"g-text",staticStyle:{margin:"20px 0 15px"},domProps:{innerHTML:t._s(t.$t("PLUS_DESCRIPTION"))}}),e("sideloading-options",{attrs:{options:t.officialOptions}})],1),e("v-accordion",{staticClass:"sideloading-accordion",attrs:{anchor:"p2p",heading:t.$t("P2P_SIDELOADING_HEADING")}},[e("ol",{staticClass:"steps"},[e("li",{staticClass:"steps__step"},[t._v("\n               "),e("html-with-links",{attrs:{html:t.$t("P2P_STEP_1",{href:"/my/p2p-certificates"})}})],1)]),e("p",{staticClass:"g-text",staticStyle:{margin:"20px 0 15px"},domProps:{innerHTML:t._s(t.$t("PLUS_DESCRIPTION"))}}),e("sideloading-options",{attrs:{options:t.officialOptions}})],1),e("v-accordion",{staticClass:"sideloading-accordion",attrs:{anchor:"3rdparty",heading:t.$t("3RD_PARTY_SIDELOADING_HEADING")}},[e("ol",{staticClass:"steps",staticStyle:{"margin-bottom":"15px"}},[e("li",{staticClass:"steps__step"},[t._v("\n               "),e("html-with-links",{attrs:{html:t.$t("3RD_PARTY_SIDELOADING_DESC")}})],1)]),t.thirdPartyOptions.length?e("sideloading-options",{attrs:{options:t.thirdPartyOptions}}):t._e(),e("br"),e("p",{staticClass:"g-text",domProps:{innerHTML:t._s(t.$t("3RD_PARTY_SIDELOADING_PROGRAM"))}})],1),e("v-accordion",{staticClass:"sideloading-accordion",attrs:{anchor:"enterprise",heading:t.$t("FREE_ENTERPRISE_SIDELOADING_HEADING")}},[e("ol",{staticClass:"steps",staticStyle:{"margin-bottom":"15px"}},[e("li",{staticClass:"steps__step"},[t._v("\n               "),e("html-with-links",{attrs:{html:t.$t("FREE_ENTERPRISE_SIDELOADING_DESC")}})],1)]),e("p",{staticClass:"g-text",staticStyle:{"margin-bottom":"15px"},domProps:{innerHTML:t._s(t.$t("PLUS_DESCRIPTION"))}}),e("sideloading-options",{attrs:{options:t.plusOptions}})],1)],1)])])},i=[],o=r("2f62"),a=r("13a2"),s=function(){var t=this,e=t._self._c;return e("div",{ref:"el",staticClass:"accordion",class:{accordion_open:t.isOpen}},[e("div",{staticClass:"accordion__heading",on:{click:t.toggle}},[e("p",{domProps:{innerHTML:t._s(t.heading)}})]),t.isOpen?e("div",{staticClass:"accordion__content"},[t._t("default")],2):t._e()])},c=[],u={props:["heading","anchor"],data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen}},mounted:function(){var t=this;if(window.location.hash.length>1){if(this.isOpen=window.location.hash.slice(1)===this.anchor,!this.isOpen)return;setTimeout((function(){var e=t.$refs.el.getBoundingClientRect().top+document.body.scrollTop-10;window.scroll({top:e,behavior:"smooth"})}),300)}}},l=u,p=(r("4c40"),r("2877")),f=Object(p["a"])(l,s,c,!1,null,"d96f13c2",null),h=f.exports,d=r("4e08");function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e=_(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _(t){var e=b(t,"string");return"symbol"===v(e)?e:String(e)}function b(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var O={components:{HtmlWithLinks:a["a"],VAccordion:h,SideloadingOptions:d["a"]},data:function(){return{officialOptions:[],thirdPartyOptions:[],plusOptions:[],devCredentialsProviders:[]}},computed:y({title:function(){return this.$t("HOW_TO_SIDELOAD_AND_USE_PLUS")}},Object(o["f"])(["theme"])),methods:{purchase:function(t){var e;null!==(e=t.target)&&void 0!==e&&e.matches('a[href="#"]')&&(t.preventDefault(),this.$alert('<div class="g-text">'.concat(this.$t("PLUS_DOWNLOAD_APP",{href:"https://apps.apple.com/us/app/apple-developer/id640199958"}),"</div>")))},importDevCredetials:function(t){this.$confirm(this.$t("IMPORT_DEV_CREDENTIALS_PROVIDER_CONFIRMATION")).then((function(){window.location.href=t}))}},created:function(){var t=this;this.$api.getSideloadingOptions("official").then((function(e){t.officialOptions=e})),this.$api.getSideloadingOptions("3rdparty").then((function(e){t.thirdPartyOptions=e})),this.$api.getSideloadingOptions("plus").then((function(e){t.plusOptions=e}))}},w=O,E=(r("dd2e"),Object(p["a"])(w,n,i,!1,null,"49eb5f42",null));e["default"]=E.exports},"1bd9":function(t,e,r){t.exports=r.p+"img/devapp.39fca130.png"},"4a9c":function(t,e,r){},"4c40":function(t,e,r){"use strict";r("4a9c")},"4e08":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",t._l(t.options,(function(r){return e("div",{key:r.name,staticClass:"options-wrapper"},[t.hideName?t._e():e("p",{staticClass:"options-name"},[t._v(t._s(r.name))]),e("div",{staticClass:"options"},t._l(r.options,(function(n){return e("div",{key:n.name,staticClass:"options__option",on:{click:function(e){return t.submitForm(n.html,{requiresDeviceLink:r.requires_device_link,showInformationShareWarning:r.show_information_share_warning})}}},[e("p",{staticClass:"options__time"},[t._v(t._s(n.name))]),e("p",{staticClass:"options__price"},[t._v(t._s(n.price))])])})),0),e("html-with-links",{staticClass:"tip",attrs:{tag:"div",html:t.$t("SIDELOADING_OPTIONS_TIP",{href:"/my/plus"})}})],1)})),0)},i=[],o=r("2f62"),a=r("13a2");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,a=Object.create(o.prototype),s=new j(n||[]);return i(a,"_invoke",{value:I(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",v="suspendedYield",m="executing",y="completed",g={};function _(){}function b(){}function O(){}var w={};p(w,a,(function(){return this}));var E=Object.getPrototypeOf,P=E&&E(E(k([])));P&&P!==r&&n.call(P,a)&&(w=P);var D=O.prototype=_.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(i,o,a,c){var u=h(t[i],t,o);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==s(p)&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function I(e,r,n){var i=d;return function(o,a){if(i===m)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=C(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=m;var u=h(e,r,n);if("normal"===u.type){if(i=n.done?y:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=y,n.method="throw",n.arg=u.arg)}}}function C(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=h(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(s(e)+" is not iterable")}return b.prototype=O,i(D,"constructor",{value:O,configurable:!0}),i(O,"constructor",{value:b,configurable:!0}),b.displayName=p(O,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,p(t,l,"GeneratorFunction")),t.prototype=Object.create(D),t},e.awrap=function(t){return{__await:t}},S(L.prototype),p(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new L(f(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(D),p(D,l,"Generator"),p(D,a,(function(){return this})),p(D,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=k,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;T(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:k(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function u(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){u(o,n,i,a,s,"next",t)}function s(t){u(o,n,i,a,s,"throw",t)}a(void 0)}))}}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e=d(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){var e=v(t,"string");return"symbol"===s(e)?e:String(e)}function v(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var m={components:{HtmlWithLinks:a["a"]},props:{options:Array,hideName:Boolean},computed:f(f({},Object(o["d"])(["isDeviceLinked","config","devices","lt"])),{},{currentDevice:function(){var t=this;return this.devices.find((function(e){return e.lt===t.lt}))||{}}}),methods:{checkDeviceLinkingForPurchase:function(){var t=this;return this.isDeviceLinked||this.$confirm(this.$t("LINKED_DEVICE_REQUIRED")).then((function(){t.$router.push("/link")})).catch((function(){})),this.isDeviceLinked},submitForm:function(t){var e=arguments,r=this;return l(c().mark((function n(){var i,o,a,s,u;return c().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.length>1&&void 0!==e[1]?e[1]:{},o=i.requiresDeviceLink,a=i.showInformationShareWarning,s=document.createElement("div"),s.style.display="none",s.innerHTML=t,document.body.appendChild(s),u=s.firstChild,o){n.next=9;break}return u.submit(),n.abrupt("return");case 9:if(r.checkDeviceLinkingForPurchase()){n.next=11;break}return n.abrupt("return");case 11:if(!a){n.next=14;break}return n.next=14,r.$confirm(r.$t("IMPORT_DEV_CREDENTIALS_PROVIDER_CONFIRMATION"));case 14:r.$confirm("".concat(r.$t("IS_CORRECT_DEVICE")," ").concat(r.currentDevice.name," - ").concat(r.currentDevice.model,"?")).then((function(){return u.submit()})).catch(l(c().mark((function t(){return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.$confirm(r.$t("YOU_WILL_BE_REDIRECTED_TO_DEVICES_PAGE"));case 2:r.$router.push("/my/devices");case 3:case"end":return t.stop()}}),t)}))));case 15:case"end":return n.stop()}}),n)})))()}}},y=m,g=(r("b360"),r("2877")),_=Object(g["a"])(y,n,i,!1,null,"709b5482",null);e["a"]=_.exports},8349:function(t,e,r){},"99a9":function(t,e,r){},b360:function(t,e,r){"use strict";r("8349")},dd2e:function(t,e,r){"use strict";r("99a9")}}]);
//# sourceMappingURL=chunk-9f01fe6e.370f7246.js.map