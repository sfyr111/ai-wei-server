webpackJsonp([8],{15:function(t,e,a){"use strict";var n,i=a(88),s=a.n(i),r=a(11),o=a(43),c=a(95),u=a.n(c),l=a(94),d=a.n(l);r.a.use(o.b);var f={SET_TOKEN:"SET_TOKEN",SET_USER_INFO:"SET_USER_INFO"};e.a=new o.b.Store({modules:{},actions:{saveWecharLogin:function(t,e){var a=t.commit;a(f.SET_USER_INFO,e.user),a(f.SET_TOKEN,e.token)}},getters:{userInfo:function(t){return t.userInfo},token:function(t){return t.token}},state:{userInfo:"",token:""},mutations:(n={},s()(n,f.SET_TOKEN,function(t,e){t.token=e}),s()(n,f.SET_USER_INFO,function(t,e){t.userInfo=e}),n),strict:!1,plugins:[u()(),d()({key:"aiwei"})]})},17:function(t,e){!function(t,e){function a(){var e=s.getBoundingClientRect().width;e/c>768&&(e=768*c);var a=e/10;s.style.fontSize=a+"px",l.rem=t.rem=a}var n,i=t.document,s=i.documentElement,r=i.querySelector('meta[name="viewport"]'),o=i.querySelector('meta[name="flexible"]'),c=0,u=0,l=e.flexible||(e.flexible={});if(r){var d=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(u=parseFloat(d[1]),c=parseInt(1/u))}else if(o){var f=o.getAttribute("content");if(f){var m=f.match(/initial\-dpr=([\d\.]+)/),v=f.match(/maximum\-dpr=([\d\.]+)/);m&&(c=parseFloat(m[1]),u=parseFloat((1/c).toFixed(2))),v&&(c=parseFloat(v[1]),u=parseFloat((1/c).toFixed(2)))}}if(!c&&!u){var p=t.navigator.appVersion.match(/iphone/gi),h=t.devicePixelRatio;c=p?h>=3&&(!c||c>=3)?3:h>=2&&(!c||c>=2)?2:1:1,u=1/c}if(s.setAttribute("data-dpr",c),!r)if(r=i.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),s.firstElementChild)s.firstElementChild.appendChild(r);else{var b=i.createElement("div");b.appendChild(r),i.write(b.innerHTML)}t.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(a,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(n),n=setTimeout(a,300))},!1),"complete"===i.readyState?i.body.style.fontSize=16*c+"px":i.addEventListener("DOMContentLoaded",function(t){i.body.style.fontSize=16*c+"px"},!1),a(),l.dpr=t.dpr=c,l.refreshRem=a,l.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},l.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},19:function(t,e){},20:function(t,e){},240:function(t,e,a){"use strict";function n(t){a(542)}var i=a(286),s=a(570),r=a(5),o=n,c=r(i.a,s.a,!1,o,null,null);e.a=c.exports},273:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=(a(7),a(11)),i=a(44),s=a(240),r=a(15);n.a.use(i.a);var o=[{path:"/"}],c=new i.a({routes:o});n.a.config.productionTip=!1,n.a.prototype.$log=console.log.bind(console),new n.a({router:c,store:r.a,render:function(t){return t(s.a)}}).$mount("#app-box")},286:function(t,e,a){"use strict";var n=a(21),i=a.n(n),s=a(80),r=a(43);e.a={name:"user",mixins:[],props:{},data:function(){return{Tab:s.a}},computed:i()({},a.i(r.a)({userInfo:"userInfo",token:"token"})),components:{Tab:s.a},methods:{goHistoty:function(){window.location.href="history.html"}},created:function(){},mounted:function(){}}},542:function(t,e){},570:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"user"}},[a("div",{staticClass:"user-info"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.userInfo.avatar,alt:"头像"}})]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.userInfo.name))])]),t._v(" "),a("div",{staticClass:"features-warpper"},[a("div",{staticClass:"cell",on:{click:t.goHistoty}},[a("i"),t._v(" "),a("span",[t._v("历史记录")])])]),t._v(" "),a("tab",{attrs:{selectedPage:"user"}})],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},61:function(t,e,a){"use strict";e.a={name:"tab",props:{selectedPage:{type:String,default:"home"}},data:function(){return{}},computed:{},components:{},watch:{},methods:{},created:function(){},mounted:function(){}}},7:function(t,e,a){"use strict";var n=a(17),i=(a.n(n),a(54)),s=(a.n(i),a(19)),r=(a.n(s),a(20)),o=(a.n(r),a(59));a.n(o).a.attach(document.body)},77:function(t,e){},79:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab"},[a("a",{staticClass:"tab-item",attrs:{href:"/index.html"}},[a("i",{staticClass:"tab-icon",class:["home"==t.selectedPage?"active":""]}),t._v(" "),a("span",{staticClass:"tab-link",class:["home"==t.selectedPage?"active":""]},[t._v("首页")])]),t._v(" "),a("a",{staticClass:"tab-item",attrs:{href:"/favorite.html"}},[a("i",{staticClass:"tab-icon",class:["favorite"==t.selectedPage?"active":""]}),t._v(" "),a("span",{staticClass:"tab-link",class:["favorite"==t.selectedPage?"active":""]},[t._v("收藏")])]),t._v(" "),a("a",{staticClass:"tab-item",attrs:{href:"/user.html"}},[a("i",{staticClass:"tab-icon",class:["user"==t.selectedPage?"active":""]}),t._v(" "),a("span",{staticClass:"tab-link",class:["user"==t.selectedPage?"active":""]},[t._v("我的")])])])},i=[],s={render:n,staticRenderFns:i};e.a=s},80:function(t,e,a){"use strict";function n(t){a(77)}var i=a(61),s=a(79),r=a(5),o=n,c=r(i.a,s.a,!1,o,"data-v-50a00528",null);e.a=c.exports}},[273]);