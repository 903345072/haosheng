(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-sort"],{1749:function(i,t,a){var e=a("35fe");"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var n=a("4f06").default;n("4ab3d59a",e,!0,{sourceMap:!1,shadowMode:!1})},"35fe":function(i,t,a){var e=a("24fb");t=e(!1),t.push([i.i,'uni-page-body[data-v-40974240]{background-color:#fff}.zaiui-bar-search-title-box .cu-bar[data-v-40974240]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-search-title-box .cu-bar .content[data-v-40974240]{top:0;left:%?18.18?%;width:calc(100% - %?127.27?%)}.zaiui-bar-search-title-box .cu-bar .content .search-form[data-v-40974240]{display:inherit;flex:inherit;margin:0;color:#717171}.zaiui-bar-search-title-box .cu-bar .content .search-form [class*="cuIcon-"][data-v-40974240]{margin:0}.zaiui-bar-search-title-box .cu-bar.fixed.no-shadow[data-v-40974240]{box-shadow:inherit}.zaiui-bar-search-title-box .cu-bar.bg-white[data-v-40974240]{color:#333}.zaiui-bar-search-title-box .zaiui-seat-height[data-v-40974240]{width:100%;height:calc(0px + %?101?%)}.VerticalNav.nav[data-v-40974240]{width:%?200?%;color:#666;height:calc(100vh - (0px + %?101?%));white-space:normal}.VerticalNav.nav .cu-item[data-v-40974240]{width:100%;text-align:center;background-color:#fafafa;margin:0;border:none;height:50px;position:relative}.VerticalNav.nav .cu-item.cur[data-v-40974240]{background-color:#fff}.VerticalNav.nav .cu-item.cur[data-v-40974240]::after{content:"";width:%?7.27?%;height:%?32.72?%;border-radius:0 %?9.09?% %?9.09?% 0;position:absolute;background-color:currentColor;top:0;left:0;bottom:0;margin:auto}.VerticalBox[data-v-40974240]{display:flex}.VerticalMain[data-v-40974240]{background-color:#fff;height:calc(100vh - (0px + %?101?%));flex:1}.zaiui-grid-icon-box[data-v-40974240]{position:relative;width:100%}.zaiui-grid-icon-box .cu-list.grid[data-v-40974240]{background-color:inherit}.zaiui-grid-icon-box .cu-list.grid .grid-icon[data-v-40974240]{margin:0}.zaiui-grid-icon-box .cu-list.grid .grid-icon .icon[data-v-40974240]{width:%?127.27?%}.zaiui-grid-icon-box .cu-list.grid > .cu-item[data-v-40974240]{padding-bottom:%?9.09?%}.zaiui-grid-icon-box .cu-list.grid > .cu-item uni-text[data-v-40974240]{color:#333}.zaiui-grid-icon-box .cu-list.grid.no-border[data-v-40974240]{padding:0}body.?%PAGE?%[data-v-40974240]{background-color:#fff}',""]),i.exports=t},"4e69":function(i,t,a){"use strict";a.r(t);var e=a("ff1d"),n=a.n(e);for(var o in e)"default"!==o&&function(i){a.d(t,i,(function(){return e[i]}))}(o);t["default"]=n.a},"59df":function(i,t,a){"use strict";var e;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return e}));var n=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"zaiui-bar-search-title-box"},[a("v-uni-view",{staticClass:"cu-bar fixed no-shadow bg-white"},[a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"})],1),a("v-uni-view",{staticClass:"content search",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.searchTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"search-form round"},[a("v-uni-text",{staticClass:"cuIcon-search"}),a("v-uni-text",{staticClass:"margin-left-xs"},[i._v("输入您正在找的宝贝")])],1)],1)],1),a("v-uni-view",{staticClass:"zaiui-seat-height"})],1),a("v-uni-view",{staticClass:"VerticalBox"},[a("v-uni-scroll-view",{staticClass:"VerticalNav nav",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":i.verticalNavTop}},[i._l(i.list,(function(t,e){return[a("v-uni-view",{key:e+"_0",staticClass:"cu-item",class:e==i.tabCur?"text-red cur":"",attrs:{"data-id":e},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.TabSelect.apply(void 0,arguments)}}},[a("v-uni-view",{class:e==i.tabCur?"text-black text-bold":""},[i._v("分类-"+i._s(t.name))])],1)]}))],2),a("v-uni-scroll-view",{staticClass:"VerticalMain",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-into-view":"main-"+i.mainCur},on:{scroll:function(t){arguments[0]=t=i.$handleEvent(t),i.VerticalMain.apply(void 0,arguments)}}},[i._l(i.list,(function(t,e){return[a("v-uni-view",{key:e+"_0",staticClass:"padding-top padding-lr",attrs:{id:"main-"+e}},[a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-title text-red"}),a("v-uni-text",[i._v("标题栏-"+i._s(t.name))])],1)],1),a("v-uni-view",{staticClass:"zaiui-grid-icon-box"},[a("v-uni-view",{staticClass:"cu-list grid col-3 no-border"},[i._l(i.sortList,(function(t,e){return[a("v-uni-view",{key:e+"_0",staticClass:"cu-item"},[a("v-uni-view",{staticClass:"grid-icon"},[a("v-uni-image",{staticClass:"icon",attrs:{src:t.img,"lazy-load":!0,mode:"widthFix"}})],1),a("v-uni-text",{staticClass:"text-black"},[i._v(i._s(t.name))])],1)]}))],2)],1)],1)]}))],2)],1)],1)},o=[]},"5d5e":function(i,t,a){"use strict";var e=a("1749"),n=a.n(e);n.a},"83a4":function(i,t,a){"use strict";a.r(t);var e=a("59df"),n=a("4e69");for(var o in n)"default"!==o&&function(i){a.d(t,i,(function(){return n[i]}))}(o);a("5d5e");var c,r=a("f0c5"),s=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"40974240",null,!1,e["a"],c);t["default"]=s.exports},a6fb:function(i,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={sortListData:function(){return[{id:1,name:"苹果",img:"/static/images/home/grid-icon/30.png"},{id:2,name:"华为",img:"/static/images/home/grid-icon/31.png"},{id:3,name:"小米",img:"/static/images/home/grid-icon/32.png"},{id:4,name:"vivo",img:"/static/images/home/grid-icon/33.png"},{id:5,name:"oppo",img:"/static/images/home/grid-icon/34.png"},{id:6,name:"魅族",img:"/static/images/home/grid-icon/35.png"},{id:7,name:"寄卖优选",img:"/static/images/home/grid-icon/36.png"},{id:8,name:"验机特惠",img:"/static/images/home/grid-icon/37.png"},{id:9,name:"直播特卖",img:"/static/images/home/grid-icon/38.png"},{id:10,name:"更多分类",img:"/static/images/home/grid-icon/39.png"}]}},n=e;t.default=n},ff1d:function(i,t,a){"use strict";var e=a("4ea4");a("ac1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e(a("a6fb")),o=e(a("cb85")),c={data:function(){return{list:[],tabCur:0,mainCur:0,verticalNavTop:0,load:!0,sortList:[]}},onLoad:function(){for(var i=[{}],t=0;t<26;t++)i[t]={},i[t].name=String.fromCharCode(65+t),i[t].id=t;this.list=i,this.listCur=i[0],this.sortList=n.default.sortListData()},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{BackPage:function(){uni.navigateBack()},TabSelect:function(i){this.tabCur=i.currentTarget.dataset.id,this.mainCur=i.currentTarget.dataset.id,this.verticalNavTop=50*(i.currentTarget.dataset.id-1)},VerticalMain:function(i){var t=this,a=0;if(this.load){for(var e=function(i){var e=uni.createSelectorQuery().select("#main-"+t.list[i].id);e.fields({size:!0},(function(e){t.list[i].top=a,a+=e.height,t.list[i].bottom=a})).exec()},n=0;n<this.list.length;n++)e(n);this.load=!1}for(var o=i.detail.scrollTop+10,c=0;c<this.list.length;c++)if(o>this.list[c].top&&o<this.list[c].bottom)return this.verticalNavTop=50*(this.list[c].id-1),this.tabCur=this.list[c].id,console.log(o),!1},searchTap:function(){uni.navigateTo({url:"/pages/home/search"})}}};t.default=c}}]);