webpackJsonp([7],{12:function(t,e,n){"use strict";var r,a=n(80),s=n.n(a),u=n(8),o=n(34),i=n(89),c=n.n(i),d=n(88),f=n.n(d);u.a.use(o.b);var p={SET_TOKEN:"SET_TOKEN",SET_USER_INFO:"SET_USER_INFO"};e.a=new o.b.Store({modules:{},actions:{saveWecharLogin:function(t,e){var n=t.commit;n(p.SET_USER_INFO,e.user),n(p.SET_TOKEN,e.token)}},getters:{userInfo:function(t){return t.userInfo},token:function(t){return t.token}},state:{userInfo:"",token:""},mutations:(r={},s()(r,p.SET_TOKEN,function(t,e){t.token=e}),s()(r,p.SET_USER_INFO,function(t,e){t.userInfo=e}),r),strict:!1,plugins:[c()(),f()({key:"aiwei"})]})},127:function(t,e,n){"use strict";var r=n(182);e.a={name:"toast",mixins:[r.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},15:function(t,e,n){"use strict";function r(t){return i.a.all([t.status,t.statusText,t.data])}function a(t){var e=u()(t,3),n=e[0],r=e[1],a=e[2];if(n>=200&&n<300)return a;var s=new Error(r);return s.status=n,s.error_message=a,i.a.reject(s)}var s=n(56),u=n.n(s),o=n(39),i=n.n(o),c=n(55),d=n.n(c),f=n(61),p=n.n(f);d.a.defaults.baseURL="",d.a.interceptors.request.use(function(t){return t},function(t){return i.a.reject(t)}),d.a.interceptors.response.use(function(t){return t},function(t){return i.a.reject(t)}),e.a={post:function(t,e){return d()({method:"post",url:t,data:p.a.stringify(e),timeout:2e4,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(t){return t}).then(r).then(a)},patch:function(t,e){return d()({method:"patch",url:t,data:p.a.stringify(e),timeout:2e4,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(t){return t}).then(r).then(a)},get:function(t,e){return d()({method:"get",url:t,params:e,timeout:2e4,headers:{}}).then(function(t){return t}).then(r).then(a)},delete:function(t,e){return d()({method:"delete",url:t,params:e,timeout:2e4,headers:{}}).then(function(t){return t}).then(r).then(a)}}},167:function(t,e){},169:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},a=[],s={render:r,staticRenderFns:a};e.a=s},17:function(t,e){!function(t,e){function n(){var e=s.getBoundingClientRect().width;e/i>768&&(e=768*i);var n=e/10;s.style.fontSize=n+"px",d.rem=t.rem=n}var r,a=t.document,s=a.documentElement,u=a.querySelector('meta[name="viewport"]'),o=a.querySelector('meta[name="flexible"]'),i=0,c=0,d=e.flexible||(e.flexible={});if(u){var f=u.getAttribute("content").match(/initial\-scale=([\d\.]+)/);f&&(c=parseFloat(f[1]),i=parseInt(1/c))}else if(o){var p=o.getAttribute("content");if(p){var v=p.match(/initial\-dpr=([\d\.]+)/),h=p.match(/maximum\-dpr=([\d\.]+)/);v&&(i=parseFloat(v[1]),c=parseFloat((1/i).toFixed(2))),h&&(i=parseFloat(h[1]),c=parseFloat((1/i).toFixed(2)))}}if(!i&&!c){var l=t.navigator.appVersion.match(/iphone/gi),m=t.devicePixelRatio;i=l?m>=3&&(!i||i>=3)?3:m>=2&&(!i||i>=2)?2:1:1,c=1/i}if(s.setAttribute("data-dpr",i),!u)if(u=a.createElement("meta"),u.setAttribute("name","viewport"),u.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),s.firstElementChild)s.firstElementChild.appendChild(u);else{var w=a.createElement("div");w.appendChild(u),a.write(w.innerHTML)}t.addEventListener("resize",function(){clearTimeout(r),r=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(r),r=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=16*i+"px":a.addEventListener("DOMContentLoaded",function(t){a.body.style.fontSize=16*i+"px"},!1),n(),d.dpr=t.dpr=i,d.refreshRem=n,d.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},d.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},176:function(t,e,n){"use strict";function r(t){n(167)}var a=n(127),s=n(169),u=n(2),o=r,i=u(a.a,s.a,!1,o,null,null);e.a=i.exports},19:function(t,e){},20:function(t,e){},21:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=0},239:function(t,e,n){"use strict";function r(t){n(566)}var a=n(287),s=n(601),u=n(2),o=r,i=u(a.a,s.a,!1,o,null,null);e.a=i.exports},270:function(t,e,n){"use strict";n.d(e,"a",function(){return d}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return p}),n.d(e,"c",function(){return v}),n.d(e,"b",function(){return h});var r=n(14),a=n.n(r),s=n(18),u=n.n(s),o=n(13),i=n.n(o),c=n(15),d=(function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/test/222",n=u()({},s),console.log(n),t.next=5,c.a.post(e,n);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments[1];return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/text/column/"+s,n=u()({},r),t.next=4,c.a.get(e,n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()),f=function(){var t=i()(a.a.mark(function t(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments[1],o=arguments[2];return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/user/"+o+"/favorite/"+s,n=u()({},r),t.next=4,c.a.post(e,n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),p=function(){var t=i()(a.a.mark(function t(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments[1],o=arguments[2];return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/user/"+o+"/favorite/"+s,n=u()({},r),t.next=4,c.a.delete(e,n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),v=function(){var t=i()(a.a.mark(function t(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments[1];return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/user/"+s+"/favorite",n=u()({},r),t.next=4,c.a.get(e,n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),h=function(){var t=i()(a.a.mark(function t(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments[1];return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/column/"+s,n=u()({},r),t.next=4,c.a.get(e,n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},271:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n(6),n(8)),a=n(239),s=n(35),u=n(12);r.a.use(s.a);var o=[],i=new s.a({routes:o});r.a.config.productionTip=!1,r.a.prototype.$log=console.log.bind(console),new r.a({router:i,store:u.a,render:function(t){return t(a.a)}}).$mount("#app-text")},287:function(t,e,n){"use strict";var r=n(14),a=n.n(r),s=n(13),u=n.n(s),o=n(270),i=n(21),c=n(122),d=n.n(c),f=n(90),p=n(96),v=n.n(p),h=n(176);e.a={name:"column-text",mixins:[],props:{},data:function(){return{courses:{audio:{}},isShowIntroduce:!1,columns:[],userId:"",columnId:"",ifPause:!0,column:{},currentTime:0,showPositionValue:!1,toastText:""}},computed:{isFavorite:function(){var t=this;return this.columns.filter(function(e){return e._id===t.$route.query.columnId}).length},myAudio:function(){return this.$refs.myAudio}},components:{Toast:h.a},methods:{_getCoursesByColumnId:function(t){var e=this;return u()(a.a.mark(function r(){var s;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return s={},r.abrupt("return",n.i(o.a)(s,t).then(function(t){if(t.code===i.a)return e.courses=t.text[0],t}));case 2:case"end":return r.stop()}},r,e)}))()},_getCoursesById:function(t){var e=this;return u()(a.a.mark(function r(){var s;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return s={},r.abrupt("return",n.i(o.b)(s,t).then(function(t){if(t.code===i.a){if(e.column=t.column[0],document.title=e.column.name,/ip(hone|od|ad)/i.test(navigator.userAgent)){var n=document.createElement("iframe");n.style.display="none",n.onload=function(){setTimeout(function(){n.remove()},3)},document.body.appendChild(n)}return console.log(document.title),t}}));case 2:case"end":return r.stop()}},r,e)}))()},introduce:function(){this.isShowIntroduce=!this.isShowIntroduce},_getFavoriteColumn:function(){var t=this;return u()(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={},e.next=3,n.i(o.c)(r,t.userId).then(function(e){if(e.code===i.a)return t.columns=e.columns,e});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,t)}))()},_addFavorite:function(t,e){var r=this;return u()(a.a.mark(function s(){var u;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!r.isFavorite){a.next=2;break}return a.abrupt("return");case 2:return u={},t=r.$route.query.columnId,e=r.userId,a.next=7,n.i(o.d)(u,t,r.userId).then(function(t){if(t.code===i.a)return r._getFavoriteColumn(e),r.toastText="已收藏成功",r.showPositionValue=!0,t});case 7:return a.abrupt("return",a.sent);case 8:case"end":return a.stop()}},s,r)}))()},sec_to_time:function(t){var e=void 0;if(t>-1){var n=Math.floor(t/3600),r=Math.floor(t/60)%60,a=t%60;e=n<10?"0"+n+":":n+":",r<10&&(e+="0"),e+=r+":",a<10&&(e+="0"),e+=a.toFixed(0)}return e},_deleteFavoriteColumn:function(t,e){var r=this;return u()(a.a.mark(function s(){var u;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u={},e=r.userId,a.next=4,n.i(o.e)(u,t,r.userId).then(function(t){if(t.code===i.a)return r._getFavoriteColumn(e),r.toastText="删除收藏成功",r.showPositionValue=!0,t});case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}},s,r)}))()},addHistory:function(){var t={},e=this.$route.query.columnId;n.i(f.a)(t,e,this.userId).then(function(t){if(t.code===i.a)return t})},audioPlay:function(){this.ifPause?(this.myAudio.play(),this.ifPause=this.myAudio.paused,this.audioTime()):(this.myAudio.pause(),this.ifPause=this.myAudio.paused,this.audioTime())},audioTime:function(){if(this.myAudio.paused)return void clearTimeout(e);this.currentTime=this.myAudio.currentTime;var t=this,e=setTimeout(t.audioTime,1e3);this.myAudio.ended&&(clearTimeout(e),this.currentTime=0)}},created:function(){this.userId=v.a.get("aiwei").userInfo.openId,this.columnId=this.$route.query.columnId,this._getCoursesByColumnId(this.$route.query.columnId),this._getCoursesById(this.$route.query.columnId),this._getFavoriteColumn(),this.addHistory()},mounted:function(){d.a.replace()}}},566:function(t,e){},6:function(t,e,n){"use strict";var r=n(17),a=(n.n(r),n(47)),s=(n.n(a),n(19)),u=(n.n(s),n(20)),o=(n.n(u),n(52));n.n(o).a.attach(document.body)},601:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"column-text"}},[n("div",{staticClass:"column-top"},[n("img",{staticClass:"background",attrs:{src:t.column.imgUrl,alt:""}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.column.classifyName,expression:"column.classifyName"}],staticClass:"operation"},[n("div",{staticClass:"operation-left"},[n("div",{staticClass:"text-title"},[t._v(t._s(t.column.name))]),t._v(" "),n("div",{staticClass:"text-content"},[t._v(t._s(t.column.subtitle))]),t._v(" "),n("div",{staticClass:"text-classify"},[n("span",{class:["深度学习"===t.column.classifyName?"deep":"语音识别"===t.column.classifyName?"speech":"machine"]},[t._v(t._s(t.courses.classifyName))]),t._v(" "),n("div",{staticClass:"operation-right"},[n("section",{directives:[{name:"show",rawName:"v-show",value:!t.isFavorite,expression:"!isFavorite"}],on:{click:function(e){t._addFavorite(t.columnId)}}},[n("i",{attrs:{"data-feather":"heart"}}),t._v(" "),n("span",[t._v("收藏")])]),t._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:t.isFavorite,expression:"isFavorite"}],on:{click:function(e){t._deleteFavoriteColumn(t.columnId)}}},[n("i",{staticClass:"isFavorite",attrs:{"data-feather":"heart"}})])])])])])]),t._v(" "),t.courses.audio.url?n("div",{staticClass:"column-audio"},[n("div",{staticClass:"audio-item",on:{click:t.audioPlay}},[n("div",{staticClass:"item-icon"},[n("i",{class:[t.ifPause?"pause":"play"]}),t._v(" "),n("audio",{ref:"myAudio",attrs:{src:t.courses.audio.url}})]),t._v(" "),n("div",{staticClass:"item-font"},[n("div",{staticClass:"item-title"},[t._v(t._s(t.courses.audio.title))]),t._v(" "),n("div",{staticClass:"item-duration"},[n("span",[t._v(t._s(t.sec_to_time(t.currentTime))+"/"+t._s(t.sec_to_time(t.courses.audio.duration)))]),t._v(" "),n("span",[t._v(t._s(Math.floor(t.courses.audio.fileSize/1024/1024*100)/100?Math.floor(t.courses.audio.fileSize/1024/1024*100)/100+"M":"未知大小"))])])])])]):t._e(),t._v(" "),n("div",{staticClass:"content-text"},[n("div",{staticClass:"w-e-text",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.courses.richText)}})]),t._v(" "),n("toast",{attrs:{type:"text",time:1e3,"is-show-mask":!0,text:t.toastText,position:"middle"},model:{value:t.showPositionValue,callback:function(e){t.showPositionValue=e},expression:"showPositionValue"}})],1)},a=[],s={render:r,staticRenderFns:a};e.a=s},90:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n(14),a=n.n(r),s=n(18),u=n.n(s),o=n(13),i=n.n(o),c=n(12),d=n(15),f=(function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/sentiment/keyword/allkws.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.post(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/usersettings/get.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/usersettings/save.do",n=u()({userToken:c.a.getters.userToken,id:c.a.getters.userId},s),t.next=4,d.a.post(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/industrys.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/companys/get.do",n=u()({userToken:c.a.getters.userToken},s,{count:s.count?s.count:1e3}),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/hotnews.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/companys/gettagANDlist1.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/products/getANDlist1.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/zhaobiao/getANDlist1.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/companys/chart1.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/companys/chart2.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/products/chart1.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/products/chart2.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/industrynews.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/companys/list2.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/products/list2.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/zhaobiao/list2.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/products/get.do",n=u()({userToken:c.a.getters.userToken},s,{count:s.count?s.count:1e3}),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/zhaobiao/products/get.do",n=u()({userToken:c.a.getters.userToken},s,{count:s.count?s.count:1e3}),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/zhaobiao/company/get.do",n=u()({userToken:c.a.getters.userToken},s,{count:s.count?s.count:1e3}),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/industrystag.do",n=u()({userToken:c.a.getters.userToken},s,{count:s.count?s.count:1e3}),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/industry/companys/gettag.do",n=u()({userToken:c.a.getters.userToken},s,{count:s.count?s.count:1e3}),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/comb/search.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/comb/bookmark/save.do",n=u()({userToken:c.a.getters.userToken,Classfi:1},s),t.next=4,d.a.post(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/comb/bookmark/del.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.post(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/comb/bookmark/get.do",n=u()({userToken:c.a.getters.userToken,classfi:1},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/comb/bookmark/marked.do",n=u()({userToken:c.a.getters.userToken,classfi:1},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/comb/detail.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/analysis/plan/insert.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.post(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/analysis/plan/delete.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.delete(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/analysis/plan/get.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/analysis/recommendPlan/get.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/analysis/plan/modify.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.patch(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/analysis/chart0.do",n=u()({userToken:c.a.getters.userToken},s),t.next=4,d.a.get(e,n);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=i()(a.a.mark(function t(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments[1],o=arguments[2];return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/user/"+o+"/history/"+s,n=u()({},r),t.next=4,d.a.post(e,n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}())}},[271]);