webpackJsonp([3],{11:function(t,e,i){"use strict";var n=i(26),s=(i.n(n),i(76)),a=(i.n(s),i(33)),r=(i.n(a),i(34)),o=(i.n(r),i(84));i.n(o).a.attach(document.body)},122:function(t,e,i){"use strict";e.a={name:"swipeout-button",props:{text:String,backgroundColor:String,type:String,width:{type:Number,default:80}},methods:{onButtonClick:function(){"swipeout-item"===this.$parent.$options._componentTag&&this.$parent.onItemClick(this.text)}}}},123:function(t,e,i){"use strict";var n=i(125),s=i.n(n);e.a={name:"swipeout-item",props:{sensitivity:{type:Number,default:0},autoCloseOnButtonClick:{type:Boolean,default:!0},disabled:Boolean,threshold:{type:Number,default:.3},underlayColor:String,transitionMode:{type:String,default:"reveal"}},mounted:function(){var t=this;this.$nextTick(function(){t.render()})},methods:{render:function(){this.target=this.$refs.content,this.$slots["left-menu"]&&(this.hasLeftMenu=!0,this.caculateMenuWidth("left")),this.$slots["right-menu"]&&(this.hasRightMenu=!0,this.caculateMenuWidth("right"))},caculateMenuWidth:function(t){var e=this.$slots[t+"-menu"][0].children.filter(function(t){return t.tag}),i=0;e.forEach(function(t){var e=t.componentOptions?t.componentOptions.propsData:{};i+=e.width||80}),this[t+"MenuWidth"]=i},onContentClick:function(){-1===this.styles.transform.indexOf("(0px, 0, 0)")&&this._setClose(200)},onItemClick:function(){this.autoCloseOnButtonClick&&this._setClose()},start:function(t){if(!this.disabled&&!this.isOpen&&"button"!==t.target.nodeName.toLowerCase()){if("swipeout"===this.$parent.$options._componentTag){var e=this.$parent.$children.filter(function(t){return-1===t.$data.styles.transform.indexOf("(0px, 0, 0)")});if(e.length>0)return e.forEach(function(t){t.setOffset(0,!0)}),void t.preventDefault()}var i=t.touches?t.touches[0]:t;this.pageX=i.pageX,this.pageY=i.pageY}},move:function(t){if(!this.disabled){if("button"===t.target.nodeName.toLowerCase())return void t.preventDefault();if(void 0===this.pageX)return void t.preventDefault();var e=t.touches?t.touches[0]:t;if(this.distX=e.pageX-this.pageX,this.distY=e.pageY-this.pageY,this.direction||(this.direction=this.distX>0?"left":"right"),("right"===this.direction&&this.distX>0&&this.hasRightMenu||"left"===this.direction&&this.distX<0&&this.hasLeftMenu)&&(this.valid=!0,t.preventDefault()),void 0===this.valid&&(this.distX>0&&!1===this.hasLeftMenu?this.valid=!1:this.distX<0&&!1===this.hasRightMenu?this.valid=!1:Math.abs(this.distX)>this.sensitivity||Math.abs(this.distY)>this.sensitivity?this.valid=Math.abs(this.distX)>Math.abs(this.distY):t.preventDefault()),!0===this.valid){if(Math.abs(this.distX)<=this.menuWidth)this.setOffset(this.distX,!1);else{var i=.5*(Math.abs(this.distX)-this.menuWidth),n=(this.menuWidth+i)*(this.distX<0?-1:1);this.setOffset(n,!1)}t.preventDefault()}}},end:function(t){if(!this.disabled&&"button"!==t.target.nodeName.toLowerCase()){if(!0===this.valid){if(this.distX<0&&"right"===this.direction){var e=this.threshold<=1?this.rightMenuWidth*this.threshold:this.threshold;this.distX<-e?(this.setOffset(-this.rightMenuWidth,!0),this.$emit("on-open"),this.isOpen=!0):this._setClose()}else if(this.distX>0&&"left"===this.direction){var i=this.threshold<=1?this.leftMenuWidth*this.threshold:this.threshold;this.distX>i?(this.setOffset(this.leftMenuWidth,!0),this.$emit("on-open"),this.isOpen=!0):this._setClose()}}else this.pageX;this.pageX=this.pageY=this.valid=void 0,this.direction=""}},setOffset:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments[2];if(this.isAnimated=i,!this.disabled||n){if(("right"===this.direction&&t>0||"left"===this.direction&&t<0)&&(t=0),0===t&&setTimeout(function(){e.isOpen=!1},300),t<0&&Math.abs(t)===this.rightMenuWidth?this.distX=-this.rightMenuWidth:t>0&&Math.abs(t)===this.leftMenuWidth&&(this.distX=this.leftMenuWidth),i&&this.target){this.target&&this.target.classList.add("vux-swipeout-content-animated");var s=function(t,e){return function(){e.classList.remove("vux-swipeout-content-animated"),t.isAnimated=!1,e.removeEventListener("webkitTransitionEnd",s),e.removeEventListener("transitionend",s)}}(this,this.target);this.target.addEventListener("webkitTransitionEnd",s),this.target.addEventListener("transitionend",s)}this.styles.transform="translate3d("+t+"px, 0, 0)"}},_setClose:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.setOffset(0,!0),this.$emit("on-close"),e?setTimeout(function(){t.isOpen=!1},e):this.isOpen=!1,this.distX=0},open:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right";this.setOffset("right"===t?-this.rightMenuWidth:this.leftMenuWidth,!0,!0)},close:function(){this.setOffset(0,!0,!0)}},computed:{menuWidth:function(){return!this.hasLeftMenu&&this.hasRightMenu?this.rightMenuWidth:this.hasLeftMenu&&!this.hasRightMenu?this.leftMenuWidth:this.hasLeftMenu&&this.hasRightMenu?this.distX<0?this.rightMenuWidth:this.leftMenuWidth:void 0},buttonBoxStyle:function(){return{backgroundColor:this.underlayColor}},leftButtonBoxStyle:function(){var t=JSON.parse(s()(this.buttonBoxStyle));if("follow"===this.transitionMode){var e=-1===this.styles.transform.indexOf("(0px, 0, 0)")?this.leftMenuWidth-this.distX:this.leftMenuWidth;t.transform="translate3d(-"+e+"px, 0, 0)"}return t},rightButtonBoxStyle:function(){var t=JSON.parse(s()(this.buttonBoxStyle));if("follow"===this.transitionMode){var e=-1===this.styles.transform.indexOf("(0px, 0, 0)")?this.rightMenuWidth-Math.abs(this.distX):this.rightMenuWidth;e<0&&(e=0),this.isAnimated&&(t.transition="transform 0.2s"),t.transform="translate3d("+e+"px, 0, 0)"}return t}},data:function(){return{pageX:void 0,pageY:void 0,distX:0,distY:0,hasLeftMenu:!1,hasRightMenu:!1,animated:!1,isAnimated:!1,isOpen:!1,styles:{transform:"translate3d(0px, 0, 0)"},direction:"",leftMenuWidth:160,rightMenuWidth:160}},watch:{disabled:function(t,e){!0!==t||e||this.setOffset(0,!0,!0)}}}},124:function(t,e,i){"use strict";e.a={name:"swipeout"}},164:function(t,e){},165:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-swipeout-item",on:{touchstart:t.start,mousedown:t.start,touchmove:t.move,mousemove:t.move,touchend:t.end,mouseup:t.end,touchcancel:t.end}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.distX>=0,expression:"distX >= 0"}],staticClass:"vux-swipeout-button-box vux-swipeout-button-box-left",style:t.leftButtonBoxStyle},[t._t("left-menu")],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.distX<=0,expression:"distX <= 0"}],staticClass:"vux-swipeout-button-box",style:t.rightButtonBoxStyle},[t._t("right-menu")],2),t._v(" "),i("div",{ref:"content",staticClass:"vux-swipeout-content",style:t.styles,on:{mousedown:t.onContentClick,touchstart:t.onContentClick}},[t._t("content")],2)])},s=[],a={render:n,staticRenderFns:s};e.a=a},166:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"vux-swipeout-button",class:{"vux-swipeout-button-primary":"primary"===t.type,"vux-swipeout-button-warn":"warn"===t.type,"vux-swipeout-button-default":"default"===t.type},style:{width:t.width+"px",backgroundColor:t.backgroundColor},attrs:{type:"button"},on:{click:t.onButtonClick}},[t._t("default",[t._v(t._s(t.text))])],2)},s=[],a={render:n,staticRenderFns:s};e.a=a},167:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-swipeout"},[t._t("default")],2)},s=[],a={render:n,staticRenderFns:s};e.a=a},168:function(t,e,i){"use strict";var n=i(122),s=i(166),a=i(5),r=a(n.a,s.a,!1,null,null,null);e.a=r.exports},169:function(t,e,i){"use strict";var n=i(123),s=i(165),a=i(5),r=a(n.a,s.a,!1,null,null,null);e.a=r.exports},170:function(t,e,i){"use strict";function n(t){i(164)}var s=i(124),a=i(167),r=i(5),o=n,u=r(s.a,a.a,!1,o,null,null);e.a=u.exports},234:function(t,e,i){"use strict";function n(t){i(534)}var s=i(274),a=i(564),r=i(5),o=n,u=r(s.a,a.a,!1,o,null,null);e.a=u.exports},26:function(t,e){!function(t,e){function i(){var e=a.getBoundingClientRect().width;e/u>768&&(e=768*u);var i=e/10;a.style.fontSize=i+"px",h.rem=t.rem=i}var n,s=t.document,a=s.documentElement,r=s.querySelector('meta[name="viewport"]'),o=s.querySelector('meta[name="flexible"]'),u=0,c=0,h=e.flexible||(e.flexible={});if(r){var d=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(c=parseFloat(d[1]),u=parseInt(1/c))}else if(o){var l=o.getAttribute("content");if(l){var f=l.match(/initial\-dpr=([\d\.]+)/),p=l.match(/maximum\-dpr=([\d\.]+)/);f&&(u=parseFloat(f[1]),c=parseFloat((1/u).toFixed(2))),p&&(u=parseFloat(p[1]),c=parseFloat((1/u).toFixed(2)))}}if(!u&&!c){var m=t.navigator.appVersion.match(/iphone/gi),v=t.devicePixelRatio;u=m?v>=3&&(!u||u>=3)?3:v>=2&&(!u||u>=2)?2:1:1,c=1/u}if(a.setAttribute("data-dpr",u),!r)if(r=s.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(r);else{var g=s.createElement("div");g.appendChild(r),s.write(g.innerHTML)}t.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(i,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(n),n=setTimeout(i,300))},!1),"complete"===s.readyState?s.body.style.fontSize=16*u+"px":s.addEventListener("DOMContentLoaded",function(t){s.body.style.fontSize=16*u+"px"},!1),i(),h.dpr=t.dpr=u,h.refreshRem=i,h.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},h.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},262:function(t,e,i){"use strict";i.d(e,"b",function(){return h}),i.d(e,"a",function(){return d});var n=i(29),s=i.n(n),a=i(28),r=i.n(a),o=i(27),u=i.n(o),c=i(35),h=(function(){var t=u()(s.a.mark(function t(){var e,i,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1];return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/user/"+o+"/history",i=r()({},a),t.next=4,c.a.get(e,i);case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}},t,this)}))}(),function(){var t=u()(s.a.mark(function t(){var e,i,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1],o=arguments[2];return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/user/"+o+"/history/"+a,i=r()({},n),t.next=4,c.a.delete(e,i);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()),d=function(){var t=u()(s.a.mark(function t(){var e,i,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1];return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/user/"+a+"/history",i=r()({},n),t.next=4,c.a.get(e,i);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},263:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=(i(11),i(12)),s=i(234);n.a.config.productionTip=!1,n.a.prototype.$log=console.log.bind(console),new n.a({render:function(t){return t(s.a)}}).$mount("#history")},274:function(t,e,i){"use strict";var n=i(29),s=i.n(n),a=i(27),r=i.n(a),o=i(28),u=i.n(o),c=i(170),h=i(169),d=i(168),l=i(75),f=i(74),p=i(262),m=i(42),v=i(46),g=i(71),b=i.n(g);e.a={name:"favorite",props:{},data:function(){return{columns:[],userId:""}},computed:u()({},i.i(v.a)(["userInfo"])),components:{Tab:l.a,ColumnCell:f.a,Swipeout:c.a,SwipeoutItem:h.a,SwipeoutButton:d.a},watch:{},methods:{_getFavoriteHistory:function(){var t=this;return r()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,i.i(p.a)(n,t.userId).then(function(e){if(e.code===m.a)return t.columns=e.columns,e});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,t)}))()},_deleteFavoriteHistory:function(t,e){var n=this;return r()(s.a.mark(function a(){var r;return s.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return r={},e=n.userId,s.next=4,i.i(p.b)(r,t,n.userId).then(function(t){if(t.code===m.a)return n._getFavoriteHistory(e),t});case 4:return s.abrupt("return",s.sent);case 5:case"end":return s.stop()}},a,n)}))()}},created:function(){this.userId=b.a.get("aiwei").userInfo._id,this._getFavoriteHistory()},mounted:function(){}}},33:function(t,e){},34:function(t,e){},35:function(t,e,i){"use strict";function n(t){return u.a.all([t.status,t.statusText,t.data])}function s(t){var e=r()(t,3),i=e[0],n=e[1],s=e[2];if(i>=200&&i<300)return s;var a=new Error(n);return a.status=i,a.error_message=s,u.a.reject(a)}var a=i(86),r=i.n(a),o=i(54),u=i.n(o),c=i(85),h=i.n(c),d=i(92),l=i.n(d);h.a.defaults.baseURL="",h.a.interceptors.request.use(function(t){return t},function(t){return u.a.reject(t)}),h.a.interceptors.response.use(function(t){return t},function(t){return u.a.reject(t)}),e.a={post:function(t,e){return h()({method:"post",url:t,data:l.a.stringify(e),timeout:2e4,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(t){return t}).then(n).then(s)},patch:function(t,e){return h()({method:"patch",url:t,data:l.a.stringify(e),timeout:2e4,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(t){return t}).then(n).then(s)},get:function(t,e){return h()({method:"get",url:t,params:e,timeout:2e4,headers:{}}).then(function(t){return t}).then(n).then(s)},delete:function(t,e){return h()({method:"delete",url:t,params:e,timeout:2e4,headers:{}}).then(function(t){return t}).then(n).then(s)}}},42:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n=0},52:function(t,e,i){"use strict";var n=i(71),s=i.n(n);e.a={name:"column-cell",props:{item:{type:Object,default:function(){return{_id:"59e7163129a1430b980ca41f",backgroundUrl:"http://专栏详情背景图片",classifyId:"59e7163129a1430b980ca41f",classifyName:"课程专栏",createTime:1508316721019,creator:"objectid",imgUrl:"http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff",introduction:"简介简介简介简介简介",lastCourse:"最新课程的name",name:"课程专栏",popular:!0,subtitle:"子标题",updateTime:1508484702552}}}},data:function(){return{userId:""}},computed:{},components:{},watch:{},methods:{updateTime:function(t){var e=(Date.now()-t)/1e3/60/60;return e<24&&e>1?(0|e)+"小时前更新":e>24?(e/24|0)+"天前更新":"刚刚更新"},goItem:function(t){window.location.href="/column.html#/?columnId="+t}},created:function(){this.userId=s.a.get("aiwei").userInfo._id},mounted:function(){}}},53:function(t,e,i){"use strict";e.a={name:"tab",props:{selectedPage:{type:String,default:"home"}},data:function(){return{}},computed:{},components:{},watch:{},methods:{},created:function(){},mounted:function(){}}},534:function(t,e){},564:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"favorite-app"}},[i("div",{staticClass:"favorite-content"},[i("swipeout",t._l(t.columns,function(e,n){return i("swipeout-item",{key:e._id,attrs:{threshold:.3,"underlay-color":"#ccc"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("column-cell",{attrs:{item:e}})],1),t._v(" "),i("div",{attrs:{slot:"right-menu"},slot:"right-menu"},[i("swipeout-button",{attrs:{"background-color":"#D23934"},nativeOn:{click:function(i){t._deleteFavoriteHistory(e._id)}}},[t._v("删除")])],1)])}))],1)])},s=[],a={render:n,staticRenderFns:s};e.a=a},69:function(t,e){},70:function(t,e){},72:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tab"},[i("a",{staticClass:"tab-item",attrs:{href:"/index.html"}},[i("i",{staticClass:"tab-icon",class:["home"==t.selectedPage?"active":""]}),t._v(" "),i("span",{staticClass:"tab-link",class:["home"==t.selectedPage?"active":""]},[t._v("首页")])]),t._v(" "),i("a",{staticClass:"tab-item",attrs:{href:"/favorite.html"}},[i("i",{staticClass:"tab-icon",class:["favorite"==t.selectedPage?"active":""]}),t._v(" "),i("span",{staticClass:"tab-link",class:["favorite"==t.selectedPage?"active":""]},[t._v("收藏")])]),t._v(" "),i("a",{staticClass:"tab-item",attrs:{href:"/user.html"}},[i("i",{staticClass:"tab-icon",class:["user"==t.selectedPage?"active":""]}),t._v(" "),i("span",{staticClass:"tab-link",class:["user"==t.selectedPage?"active":""]},[t._v("我的")])])])},s=[],a={render:n,staticRenderFns:s};e.a=a},73:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column-cell"},[i("div",{staticClass:"list-item",on:{click:function(e){t.goItem(t.item._id)}}},[i("div",{staticClass:"list-img"},[i("img",{attrs:{src:t.item.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"list-font"},[i("div",{staticClass:"font-tltle"},[i("span",[t._v(t._s(t.item.name))])]),t._v(" "),i("div",{staticClass:"font-content"},[i("span",[t._v(t._s(t.item.subtitle))])]),t._v(" "),i("div",{staticClass:"font-bottom"},[i("div",{staticClass:"font-time"},[i("span",[t._v(t._s(t.updateTime(t.item.updateTime)))])]),t._v(" "),i("div",{staticClass:"font-course"},[i("span",[t._v(t._s(t.item.lastCourse))])])])])])])},s=[],a={render:n,staticRenderFns:s};e.a=a},74:function(t,e,i){"use strict";function n(t){i(70)}var s=i(52),a=i(73),r=i(5),o=n,u=r(s.a,a.a,!1,o,"data-v-d37b9220",null);e.a=u.exports},75:function(t,e,i){"use strict";function n(t){i(69)}var s=i(53),a=i(72),r=i(5),o=n,u=r(s.a,a.a,!1,o,"data-v-50a00528",null);e.a=u.exports}},[263]);
//# sourceMappingURL=history.5cbdc42c72b6f83d1dd4.js.map