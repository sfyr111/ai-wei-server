webpackJsonp([8],{15:function(t,e,n){"use strict";function i(t){return u.a.all([t.status,t.statusText,t.data])}function r(t){var e=o()(t,3),n=e[0],i=e[1],r=e[2];if(n>=200&&n<300)return r;var a=new Error(i);return a.status=n,a.error_message=r,u.a.reject(a)}var a=n(57),o=n.n(a),c=n(33),u=n.n(c),s=n(31),l=n.n(s),f=n(62),d=n.n(f);l.a.defaults.baseURL="",l.a.interceptors.request.use(function(t){return t},function(t){return u.a.reject(t)}),l.a.interceptors.response.use(function(t){return t},function(t){return u.a.reject(t)}),e.a={post:function(t,e){return l()({method:"post",url:t,data:d.a.stringify(e),timeout:2e4,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(t){return t}).then(i).then(r)},patch:function(t,e){return l()({method:"patch",url:t,data:d.a.stringify(e),timeout:2e4,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(t){return t}).then(i).then(r)},get:function(t,e){return l()({method:"get",url:t,params:e,timeout:2e4,headers:{}}).then(function(t){return t}).then(i).then(r)},delete:function(t,e){return l()({method:"delete",url:t,params:e,timeout:2e4,headers:{}}).then(function(t){return t}).then(i).then(r)}}},18:function(t,e){!function(t,e){function n(){var e=a.getBoundingClientRect().width;e/u>768&&(e=768*u);var n=e/10;a.style.fontSize=n+"px",l.rem=t.rem=n}var i,r=t.document,a=r.documentElement,o=r.querySelector('meta[name="viewport"]'),c=r.querySelector('meta[name="flexible"]'),u=0,s=0,l=e.flexible||(e.flexible={});if(o){var f=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);f&&(s=parseFloat(f[1]),u=parseInt(1/s))}else if(c){var d=c.getAttribute("content");if(d){var m=d.match(/initial\-dpr=([\d\.]+)/),p=d.match(/maximum\-dpr=([\d\.]+)/);m&&(u=parseFloat(m[1]),s=parseFloat((1/u).toFixed(2))),p&&(u=parseFloat(p[1]),s=parseFloat((1/u).toFixed(2)))}}if(!u&&!s){var h=t.navigator.appVersion.match(/iphone/gi),v=t.devicePixelRatio;u=h?v>=3&&(!u||u>=3)?3:v>=2&&(!u||u>=2)?2:1:1,s=1/u}if(a.setAttribute("data-dpr",u),!o)if(o=r.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(o);else{var w=r.createElement("div");w.appendChild(o),r.write(w.innerHTML)}t.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===r.readyState?r.body.style.fontSize=16*u+"px":r.addEventListener("DOMContentLoaded",function(t){r.body.style.fontSize=16*u+"px"},!1),n(),l.dpr=t.dpr=u,l.refreshRem=n,l.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},l.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},19:function(t,e){},20:function(t,e){},21:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=0},251:function(t,e,n){"use strict";function i(t){n(577)}var r=n(306),a=n(614),o=n(1),c=i,u=o(r.a,a.a,!1,c,null,null);e.a=u.exports},286:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n(9),r=n.n(i),a=n(16),o=n.n(a),c=n(8),u=n.n(c),s=n(15),l=function(){var t=u()(r.a.mark(function t(){var e,n,i,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/column",n=o()({},a),t.next=4,s.a.get(e,n);case 4:return i=t.sent,t.abrupt("return",i);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},287:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(6),n(10)),r=n(251);i.a.config.productionTip=!1,i.a.prototype.$log=console.log.bind(console),new i.a({render:function(t){return t(r.a)}}).$mount("#hot-course")},306:function(t,e,n){"use strict";var i=n(9),r=n.n(i),a=n(8),o=n.n(a),c=n(55),u=n(286),s=n(21),l=n(63);e.a={mixins:[l.a],name:"hot-list",props:{},data:function(){return{columns:[]}},computed:{},components:{columnCell:c.a},watch:{},methods:{_getColumns:function(){var t=this;return o()(r.a.mark(function e(){var i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={},e.next=3,n.i(u.a)(i).then(function(e){if(e.code===s.a)return t.columns=e.column,e});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,t)}))()}},created:function(){this._getColumns(),this.jssdkInit(window.location.href,"AI微学院","AI微学院","http://www.ai-union.com/file-resources/web-resources/首页分享图片/人工智能产业联盟图片.jpg")},mounted:function(){}}},47:function(t,e,n){"use strict";e.a={name:"column-cell",props:{item:{type:Object,default:function(){return{}}},ifClassify:{type:Boolean,default:!0}},data:function(){return{}},computed:{},components:{},watch:{},methods:{updateTime:function(t){var e=(Date.now()-t)/1e3/60/60;return e<24&&e>1?(0|e)+"小时前更新":e>24?(e/24|0)+"天前更新":"刚刚更新"},goItem:function(t,e){window.location.href="text"===t?"/column.html#/?columnId="+e+"&weiCourse=true":"/column-"+t+".html#/?columnId="+e+"&weiCourse=true"}},created:function(){},mounted:function(){}}},52:function(t,e){},54:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column-cell"},[n("div",{staticClass:"list-item",on:{click:function(e){t.goItem(t.item.type,t.item._id)}}},[n("div",{staticClass:"list-img"},[n("i",{staticClass:"imgUrl",style:{backgroundImage:"url('"+t.item.imgUrl+"')",backgroundSize:"cover",backgroundPosition:"center"}}),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:"video"===t.item.type,expression:"item.type === 'video'"}],staticClass:"video-icon"})]),t._v(" "),n("div",{staticClass:"list-font"},[n("div",{staticClass:"font-tltle"},[n("span",[t._v(t._s(t.item.name))])]),t._v(" "),n("div",{staticClass:"font-content"},[n("span",[t._v(t._s(t.item.subtitle))])]),t._v(" "),n("div",{staticClass:"font-bottom"},[n("div",{staticClass:"font-time"},[n("span",[t._v(t._s(t.updateTime(t.item.updateTime)))])])]),t._v(" "),n("div",{staticClass:"font-item"},[t._v(t._s(t.item.popularTitle||""))])])])])},r=[],a={render:i,staticRenderFns:r};e.a=a},55:function(t,e,n){"use strict";function i(t){n(52)}var r=n(47),a=n(54),o=n(1),c=i,u=o(r.a,a.a,!1,c,"data-v-d37b9220",null);e.a=u.exports},56:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});var i=function(t,e){e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),i=n.exec(e);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null},r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=void 0,i=void 0;return function(){var r=this,a=arguments,o=Date.now();n&&o<n+e?(clearTimeout(i),i=setTimeout(function(){n=o,t.apply(r,a)},e)):(n=o,t.apply(r,a))}}},577:function(t,e){},6:function(t,e,n){"use strict";var i=n(18),r=(n.n(i),n(48)),a=(n.n(r),n(19)),o=(n.n(a),n(20)),c=(n.n(o),n(53));n.n(c).a.attach(document.body)},614:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hot-list"}},t._l(t.columns,function(t,e){return n("column-cell",{key:t._id,attrs:{item:t}})}))},r=[],a={render:i,staticRenderFns:r};e.a=a},63:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var i=n(9),r=n.n(i),a=n(8),o=n.n(a),c=n(56),u=n(82),s=(n.n(u),n(31)),l=n.n(s),f=n(125),d=n.n(f),m={methods:{jssdkInit:function(t,e,n,i){var a=this;return o()(r.a.mark(function o(){var c,u;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.post("/wechat/jssdk",{url:window.location.href}).then(function(t){return t.data});case 2:c=r.sent,u=c.config,d.a.config(u),d.a.ready(function(){d.a.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:i,type:"link",dataUrl:"",success:function(){console.log(i)},cancel:function(){}}),d.a.onMenuShareQQ({title:e,desc:n,link:t,imgUrl:i,success:function(){},cancel:function(){}}),d.a.onMenuShareWeibo({title:e,desc:n,link:t,imgUrl:i,success:function(){},cancel:function(){}}),d.a.onMenuShareQZone({title:e,desc:n,link:t,imgUrl:i,success:function(){},cancel:function(){}}),d.a.onMenuShareTimeline({title:e,link:t,imgUrl:i,success:function(){},cancel:function(){}})});case 6:case"end":return r.stop()}},o,a)}))()}}};n.i(c.b)(function(){this.refresh()},4e3),n.i(c.b)(function(){this.loadMore()},4e3)}},[287]);