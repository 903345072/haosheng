(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-sort_list"],{"06e3":function(t,i,a){"use strict";a.r(i);var e=a("7289"),s=a("cb93");for(var o in s)"default"!==o&&function(t){a.d(i,t,(function(){return s[t]}))}(o);a("d1eb");var c,n=a("f0c5"),r=Object(n["a"])(s["default"],e["b"],e["c"],!1,null,"c5123aac",null,!1,e["a"],c);i["default"]=r.exports},"08e6":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'.zaiui-bar-search-title-box .cu-bar[data-v-4c9b6412]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-search-title-box .cu-bar .content[data-v-4c9b6412]{top:0;width:calc(100% - %?181.81?%)}.zaiui-bar-search-title-box .cu-bar .content .search-form[data-v-4c9b6412]{display:inherit;flex:inherit;margin:0;color:#717171}.zaiui-bar-search-title-box .cu-bar .content .search-form [class*="cuIcon-"][data-v-4c9b6412]{margin:0}.zaiui-bar-search-title-box .cu-bar.fixed.no-shadow[data-v-4c9b6412]{box-shadow:inherit}.zaiui-bar-search-title-box .cu-bar.bg-white[data-v-4c9b6412]{color:#333}.zaiui-bar-search-title-box .zaiui-seat-height[data-v-4c9b6412]{width:100%;height:calc(0px + %?101?%)}',""]),t.exports=i},"1e86":function(t,i,a){"use strict";a.r(i);var e=a("89a2"),s=a("b5b4");for(var o in s)"default"!==o&&function(t){a.d(i,t,(function(){return s[t]}))}(o);a("3371");var c,n=a("f0c5"),r=Object(n["a"])(s["default"],e["b"],e["c"],!1,null,"01979c06",null,!1,e["a"],c);i["default"]=r.exports},"32f1":function(t,i,a){"use strict";a.r(i);var e=a("a87b"),s=a("68d1");for(var o in s)"default"!==o&&function(t){a.d(i,t,(function(){return s[t]}))}(o);a("a9a9");var c,n=a("f0c5"),r=Object(n["a"])(s["default"],e["b"],e["c"],!1,null,"4c9b6412",null,!1,e["a"],c);i["default"]=r.exports},3371:function(t,i,a){"use strict";var e=a("6af9"),s=a.n(e);s.a},"50d4":function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=e(a("32f1")),o=e(a("1e86")),c=e(a("8f4f")),n=e(a("5a26")),r={components:{barSearchTitle:s.default,goodsSortList:o.default},data:function(){return{swiperIndex:0,swiperList:[],gridRoundList:[],gridSmList:[],goodsTab:["推荐","官方自营"],TabCur:0,goodsSortListData:[]}},onLoad:function(){this.swiperList=c.default.swiperListData(),this.gridRoundList=c.default.gridRoundList(),this.gridSmList=c.default.gridSmList(),this.goodsSortListData=c.default.goodsSortListData()},onReady:function(){n.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{swiperChange:function(t){this.swiperIndex=t.detail.current},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id},goodsSortListTap:function(t){console.log(t)},searchTap:function(){uni.navigateTo({url:"/pages/home/search"})}}};i.default=r},5615:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".zaiui-goods-list-box[data-v-01979c06]{display:none}.zaiui-goods-list-box .cu-list.menu-avatar > .cu-item[data-v-01979c06]{height:%?218.18?%}.zaiui-goods-list-box .cu-list.menu-avatar > .cu-item[data-v-01979c06]:after{width:0;height:0;border-bottom:0}.zaiui-goods-list-box .cu-list.menu-avatar > .cu-item .cu-avatar.lg[data-v-01979c06]{width:%?181.81?%;height:%?181.81?%;font-size:2em}.zaiui-goods-list-box .cu-list.menu-avatar > .cu-item .content[data-v-01979c06]{left:%?236.36?%;width:calc(100% - %?94.54?% - %?59.99?% - %?119.99?%);line-height:1.7em}.zaiui-goods-list-box .cu-list.menu-avatar > .cu-item .content .cu-tag.sm[data-v-01979c06]{display:inline-block;margin-left:0;height:%?29.09?%;font-size:%?14.54?%;line-height:%?29.09?%;margin-right:%?9.09?%;margin-bottom:%?9.09?%}.zaiui-goods-list-box .cu-list.menu-avatar > .cu-item .content uni-view[data-v-01979c06]:first-child{font-size:%?29.09?%;display:inherit;align-items:inherit}.zaiui-goods-list-box .cu-list.menu-avatar > .cu-item .content .through[data-v-01979c06]{text-decoration:line-through}.zaiui-goods-list-box .cu-list.menu-avatar > .cu-item .content .zaiui-tag-view uni-text[data-v-01979c06]{margin-right:%?9.09?%}.zaiui-goods-list-box.show[data-v-01979c06]{display:block}",""]),t.exports=i},"68d1":function(t,i,a){"use strict";a.r(i);var e=a("a401"),s=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=s.a},"6af9":function(t,i,a){var e=a("5615");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("d141279a",e,!0,{sourceMap:!1,shadowMode:!1})},7289:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("bar-search-title",{attrs:{bgColor:"bg-white",content:"苹果8p"},on:{contentTap:function(i){arguments[0]=i=t.$handleEvent(i),t.searchTap.apply(void 0,arguments)}}},[a("template",{attrs:{slot:"right"},slot:"right"},[a("v-uni-text",{staticClass:"cuIcon-service"})],1)],2),a("v-uni-view",{staticClass:"bg-white zaiui-swiper-box"},[a("v-uni-swiper",{staticClass:"screen-swiper square-dot c",attrs:{autoplay:!0,circular:!0,"indicator-dots":!0,current:t.swiperIndex},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.swiperChange.apply(void 0,arguments)}}},t._l(t.swiperList,(function(t,i){return a("v-uni-swiper-item",{key:i},[a("v-uni-view",{staticClass:"swiper-padding"},[a("v-uni-image",{attrs:{src:t.img,mode:"widthFix"}})],1)],1)})),1)],1),a("v-uni-view",{staticClass:"bg-white zaiui-invest-title-box"},[a("v-uni-view",{staticClass:"text-box"},[a("v-uni-text",{staticClass:"cuIcon-title text-black"}),a("v-uni-text",{staticClass:"text-lg text-bold text-black"},[t._v("腾讯战略投资")]),a("v-uni-text",{staticClass:"text-sm margin-left-sm"},[t._v("严格质检消毒，4重保障放心购买")])],1),a("v-uni-view",{staticClass:"img",staticStyle:{"background-image":"url(/static/images/home/sundry/16.png)"}})],1),a("v-uni-view",{staticClass:"bg-white zaiui-grid-round-box"},[a("v-uni-view",{staticClass:"cu-list grid col-5 no-border"},[t._l(t.gridRoundList,(function(i,e){return e<5?[a("v-uni-view",{key:e+"_0",staticClass:"cu-item"},[a("v-uni-view",{staticClass:"grid-icon"},[a("v-uni-image",{staticClass:"icon",attrs:{src:i.img,mode:"widthFix"}})],1),i.badge?a("v-uni-view",{staticClass:"cu-tag badge z bg-orange"},[t._v(t._s(i.badge))]):t._e(),a("v-uni-text",{staticClass:"text-black"},[t._v(t._s(i.name))])],1)]:t._e()}))],2)],1),a("v-uni-view",{staticClass:"zaiui-grid-sm-box"},[a("v-uni-view",{staticClass:"cu-list grid col-5 no-border"},[t._l(t.gridSmList,(function(i,e){return e<10?[a("v-uni-view",{key:e+"_0",staticClass:"cu-item"},[a("v-uni-view",{staticClass:"grid-icon"},[a("v-uni-image",{staticClass:"icon",attrs:{src:i.img,mode:"widthFix"}})],1),a("v-uni-text",{staticClass:"text-black"},[t._v(t._s(i.name))])],1)]:t._e()}))],2)],1),a("v-uni-view",{staticClass:"bg-white zaiui-seckill-list-view-box"},[a("v-uni-view",{staticClass:"list-title-box"},[a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"text-red text-lg text-bold"},[t._v("限时秒杀")]),a("v-uni-text",{staticClass:"cu-tag bg-black radius sm"},[t._v("00")]),a("v-uni-text",{staticClass:"text-black sm colon"},[t._v(":")]),a("v-uni-text",{staticClass:"cu-tag bg-black radius sm"},[t._v("07")]),a("v-uni-text",{staticClass:"text-black sm colon"},[t._v(":")]),a("v-uni-text",{staticClass:"cu-tag bg-black radius sm"},[t._v("50")])],1),a("v-uni-view",{staticClass:"text-gray text-sm text-right-view"},[a("v-uni-text",[t._v("更多")]),a("v-uni-text",{staticClass:"cuIcon-right"})],1)],1),a("v-uni-view",{staticClass:"seckill-goods-list-view"},[a("v-uni-scroll-view",{staticClass:"recommend-scroll",attrs:{"scroll-x":!0}},[t._l(t.goodsSortListData,(function(i,e){return[a("v-uni-view",{key:e+"_0",staticClass:"recommend-scroll-item",attrs:{id:["scroll"+(e+1)]}},[a("v-uni-view",{staticClass:"goods-img-view"},[a("v-uni-view",{staticClass:"cu-avatar xl radius",style:[{backgroundImage:"url("+i.img+")"}]}),a("v-uni-text",{staticClass:"cu-tag radius sm bg-gradual-pink"},[t._v("直降200")])],1),a("v-uni-view",{staticClass:"text-cut-2 text-sm text-black text-bold margin-tb-sm"},[t._v(t._s(i.title))]),a("v-uni-view",{staticClass:"text-red text-price margin-top-sm text-lg"},[t._v(t._s(i.price))]),a("v-uni-view",{staticClass:"text-gray text-through text-sm"},[t._v("￥"+t._s(i.cost_price))]),a("v-uni-text",{staticClass:"cu-tag round sm bg-orange rob-tag"},[t._v("抢")])],1)]}))],2)],1)],1),a("v-uni-view",{staticClass:"zaiui-gird-hot-goods-box"},[a("v-uni-view",{staticClass:"bg-white margin"},[a("v-uni-view",{staticClass:"cu-list grid col-2"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"text-title"},[t._v("热销榜")]),a("v-uni-view",{staticClass:"text-gray text-sm text-right-view"},[a("v-uni-text",{staticClass:"text-m"},[t._v("更多")]),a("v-uni-text",{staticClass:"cuIcon-right icon"})],1)],1),a("v-uni-view",{staticClass:"grid col-2 margin-top-sm"},[a("v-uni-view",{staticClass:"goods-item"},[a("v-uni-view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(/static/images/home/goods/4.png)"}}),a("v-uni-text",{staticClass:"text-goods-title"},[t._v("iPhoneX")])],1),a("v-uni-view",{staticClass:"goods-item"},[a("v-uni-view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(/static/images/home/goods/1.png)"}}),a("v-uni-text",{staticClass:"text-goods-title"},[t._v("iPhone7")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"text-title"},[t._v("卖手机")]),a("v-uni-text",{staticClass:"cu-tag bg-red radius sm"},[t._v("红包")])],1),a("v-uni-view",{staticClass:"margin-top-sm zaiui-list-2-view"},[a("v-uni-view",{staticClass:"goods-img-view"},[a("v-uni-view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(/static/images/home/goods/5.png)"}}),a("v-uni-view",{staticClass:"zaiui-text-view"},[a("v-uni-view",{staticClass:"text-price text-red text-lg"},[t._v("2999")]),a("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("比回收价高760")]),a("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("500w+人已卖")])],1)],1),a("v-uni-text",{staticClass:"text-goods-title"},[a("v-uni-text",{staticClass:"text-title-1"},[t._v("本机")]),a("v-uni-text",{staticClass:"text-title-2"},[t._v("iPhone7 Plus")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"text-title"},[t._v("iPhone X 特惠")]),a("v-uni-view",{staticClass:"text-sm text-gray"},[t._v("低至3600元起")])],1),a("v-uni-view",{staticClass:"grid col-2 margin-top-sm"},[a("v-uni-view",{staticClass:"text-left goods-item"},[a("v-uni-view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(/static/images/home/goods/6.png)"}})],1),a("v-uni-view",{staticClass:"text-left goods-item"},[a("v-uni-view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(/static/images/home/goods/10.png)"}})],1)],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"text-title"},[t._v("自营准新机专区")]),a("v-uni-view",{staticClass:"text-sm text-gray"},[t._v("99新！5折起")])],1),a("v-uni-view",{staticClass:"grid col-2 margin-top-sm"},[a("v-uni-view",{staticClass:"text-left goods-item"},[a("v-uni-view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(/static/images/home/goods/11.png)"}})],1),a("v-uni-view",{staticClass:"text-left goods-item"},[a("v-uni-view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(/static/images/home/goods/9.png)"}})],1)],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"bg-white margin-top padding-bottom-sm padding-top-sm zaiui-goods-list-view-box"},[a("v-uni-scroll-view",{staticClass:"nav z",attrs:{"scroll-x":!0}},[a("v-uni-view",{staticClass:"flex text-center"},[t._l(t.goodsTab,(function(i,e){return[a("v-uni-view",{key:e+"_0",staticClass:"cu-item flex-sub text-black",class:e==t.TabCur?"select":"",attrs:{"data-id":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabSelect.apply(void 0,arguments)}}},[a("v-uni-view",[t._v(t._s(i))]),a("v-uni-view",{staticClass:"tab-dot bg-red"})],1)]}))],2)],1),a("goods-sort-list",{attrs:{list_data:t.goodsSortListData,show:0==t.TabCur},on:{listTap:function(i){arguments[0]=i=t.$handleEvent(i),t.goodsSortListTap.apply(void 0,arguments)}}}),a("goods-sort-list",{attrs:{list_data:t.goodsSortListData,show:1==t.TabCur},on:{listTap:function(i){arguments[0]=i=t.$handleEvent(i),t.goodsSortListTap.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"zaiui-footer-fixed zaiui-add-btn-view-box"},[a("v-uni-button",{staticClass:"cu-btn cuIcon-add bg-red"})],1)],1)},o=[]},"89a2":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"margin-top zaiui-goods-list-box",class:t.show?"show":""},[a("v-uni-view",{staticClass:"cu-list menu-avatar"},[t._l(t.list_data,(function(i,e){return[a("v-uni-view",{key:e+"_0",staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.listTap(i,e)}}},[a("v-uni-view",{staticClass:"cu-avatar radius lg",style:[{backgroundImage:"url("+i.img+")"}]}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-black text-cut"},[i.autarky?a("v-uni-text",{staticClass:"cu-tag bg-red radius sm"},[t._v("自营")]):t._e(),a("v-uni-text",[t._v(t._s(i.title))])],1),a("v-uni-view",{staticClass:"text-gray text-cut text-sm"},[t._l(i.type,(function(i,e){return[a("v-uni-text",{key:e+"_0",staticClass:"cu-tag radius sm"},[t._v(t._s(i))])]}))],2),a("v-uni-view",{staticClass:"text-gray text-cut text-sm zaiui-tag-view"},[a("v-uni-text",{staticClass:"text-red text-price text-lg"},[t._v(t._s(i.price))]),i.cost_price?a("v-uni-text",{staticClass:"text-gray through"},[t._v("￥"+t._s(i.cost_price))]):t._e(),t._l(i.discount,(function(i,e){return[a("v-uni-text",{key:e+"_0",staticClass:"cu-tag line-orange radius sm"},[t._v(t._s(i))])]}))],2),a("v-uni-view",{staticClass:"text-gray text-cut text-sm "},[i.quv?a("v-uni-text",{staticClass:"cu-tag light bg-red radius sm"},[t._v("已验机")]):t._e(),t._l(i.style,(function(i,e){return[a("v-uni-text",{key:e+"_0",staticClass:"cu-tag line-blue radius sm"},[t._v(t._s(i))])]}))],2)],1)],1)]}))],2)],1)},o=[]},"8cce":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'.zaiui-swiper-box[data-v-c5123aac]{width:100%}.zaiui-swiper-box .screen-swiper[data-v-c5123aac]{height:%?196.36?%;min-height:%?196.36?%}.zaiui-swiper-box .screen-swiper .swiper-padding[data-v-c5123aac]{padding:0 %?25?%}.zaiui-invest-title-box[data-v-c5123aac]{position:relative;padding:%?18.18?% %?21.81?%}.zaiui-invest-title-box .text-box .cuIcon-title[data-v-c5123aac]{font-size:%?20?%}.zaiui-invest-title-box .img[data-v-c5123aac]{position:absolute;background-size:100% 100%;right:%?23.63?%;width:%?90.9?%;height:%?34.54?%;top:%?23.63?%}.zaiui-grid-round-box .cu-list.grid[data-v-c5123aac]{background-color:inherit}.zaiui-grid-round-box .cu-list.grid .grid-icon[data-v-c5123aac]{margin:0 %?30?%}.zaiui-grid-round-box .cu-list.grid .grid-icon .icon[data-v-c5123aac]{border-radius:100%}.zaiui-grid-round-box .cu-list.grid > .cu-item uni-text[data-v-c5123aac]{color:#333}.zaiui-grid-round-box .cu-list.grid > .cu-item .cu-tag[data-v-c5123aac]{right:auto;left:45%;margin-left:0;top:%?-9.09?%;-webkit-transform:scale(.8);transform:scale(.8)}.zaiui-grid-round-box .cu-list.grid.no-border[data-v-c5123aac]{padding:%?18.18?% %?9.09?% 0}.zaiui-grid-sm-box .cu-list.grid[data-v-c5123aac]{background-color:inherit}.zaiui-grid-sm-box .cu-list.grid .grid-icon[data-v-c5123aac]{margin:0 %?30?%}.zaiui-seckill-list-view-box[data-v-c5123aac]{background-image:linear-gradient(0deg,#fff,#fafafa);padding:0 %?29.09?% %?29.09?%}.zaiui-seckill-list-view-box .list-title-box[data-v-c5123aac]{position:relative;width:100%}.zaiui-seckill-list-view-box .list-title-box .text-view .text-bold[data-v-c5123aac]{margin-right:%?18.18?%}.zaiui-seckill-list-view-box .list-title-box .text-view .cu-tag[data-v-c5123aac]{position:relative;margin:0 %?5.45?%;top:%?-5.45?%}.zaiui-seckill-list-view-box .list-title-box .text-view .colon[data-v-c5123aac]{position:relative;top:%?-3.63?%}.zaiui-seckill-list-view-box .list-title-box .text-right-view[data-v-c5123aac]{position:absolute;right:0;top:%?3.63?%}.zaiui-seckill-list-view-box .seckill-goods-list-view[data-v-c5123aac]{position:relative;width:100%}.zaiui-seckill-list-view-box .seckill-goods-list-view .recommend-scroll[data-v-c5123aac]{position:relative;height:%?381.81?%;white-space:nowrap;width:100%}.zaiui-seckill-list-view-box .seckill-goods-list-view .recommend-scroll .recommend-scroll-item[data-v-c5123aac]{display:inline-block;padding-top:%?27.27?%;width:%?199.99?%;padding-right:%?18.18?%;white-space:normal;position:relative}.zaiui-seckill-list-view-box .seckill-goods-list-view .recommend-scroll .recommend-scroll-item .goods-img-view[data-v-c5123aac]{position:relative;width:100%}.zaiui-seckill-list-view-box .seckill-goods-list-view .recommend-scroll .recommend-scroll-item .goods-img-view .cu-avatar[data-v-c5123aac]{width:%?181.81?%;height:%?181.81?%}.zaiui-seckill-list-view-box .seckill-goods-list-view .recommend-scroll .recommend-scroll-item .goods-img-view .cu-tag[data-v-c5123aac]{position:absolute;bottom:0;left:0}.zaiui-seckill-list-view-box .seckill-goods-list-view .recommend-scroll .recommend-scroll-item .rob-tag[data-v-c5123aac]{position:absolute;bottom:%?10.9?%;right:%?21.81?%;width:%?36.36?%;height:%?36.36?%;padding:0;line-height:%?36.36?%}.zaiui-gird-hot-goods-box .margin[data-v-c5123aac], .zaiui-gird-hot-goods-box .cu-list.grid[data-v-c5123aac]{border-radius:10px}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item[data-v-c5123aac]{padding:%?18.18?%}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item[data-v-c5123aac]::after{top:0;left:0;width:200%;height:200%;content:" ";position:absolute;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;border-radius:inherit}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item[data-v-c5123aac]:nth-of-type(1)::after{border-right:%?2?% solid rgba(0,0,0,.1);border-bottom:%?2?% solid rgba(0,0,0,.1)}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item[data-v-c5123aac]:nth-of-type(2)::after{border-right:0;border-bottom:%?2?% solid rgba(0,0,0,.1)}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item[data-v-c5123aac]:nth-of-type(3)::after{border-right:%?2?% solid rgba(0,0,0,.1);border-bottom:0}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item[data-v-c5123aac]:nth-of-type(4)::after{border-right:0;border-bottom:0}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .text-view[data-v-c5123aac]{position:relative;width:100%;text-align:left}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .text-view .text-title[data-v-c5123aac]{display:initial;margin-top:0;color:#333;font-size:%?30.9?%;line-height:normal;font-weight:700}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .text-view .text-right-view[data-v-c5123aac]{position:absolute;right:0;top:%?3.63?%;display:flex}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .text-view .text-right-view .text-m[data-v-c5123aac]{display:initial;margin-top:0;color:#aaa;font-size:%?23.63?%;line-height:normal}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .text-view .text-right-view .icon[data-v-c5123aac]{position:relative;display:initial;margin-top:0;width:auto;top:%?5.45?%;font-size:%?23.63?%;line-height:normal}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .text-view .cu-tag[data-v-c5123aac]{right:auto;left:0;margin-left:%?9.09?%;display:initial;margin-top:0;color:#f0f8ff;font-size:%?23.63?%;line-height:normal;position:relative;top:%?-3.63?%;padding:%?3.63?% %?10.9?%}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .goods-item .goods-img-view[data-v-c5123aac]{position:relative;width:100%}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .goods-item .text-goods-title[data-v-c5123aac]{color:#333}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .zaiui-list-2-view .goods-img-view[data-v-c5123aac]{position:relative;width:100%;height:%?127.27?%}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .zaiui-list-2-view .goods-img-view .cu-avatar[data-v-c5123aac]{position:absolute;left:0}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .zaiui-list-2-view .goods-img-view .zaiui-text-view[data-v-c5123aac]{position:relative;padding-left:%?136.36?%;text-align:left;height:%?127.27?%;line-height:1.6}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .zaiui-list-2-view .goods-img-view .zaiui-text-view .text-lg[data-v-c5123aac]{font-size:%?36.36?%}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .zaiui-list-2-view .text-goods-title[data-v-c5123aac]{color:#333;text-align:left}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .zaiui-list-2-view .text-goods-title .text-title-1[data-v-c5123aac]{display:inherit;margin-top:0;color:#e54d42;font-size:%?21.81?%;line-height:%?40?%}.zaiui-gird-hot-goods-box .cu-list.grid > .cu-item .zaiui-list-2-view .text-goods-title .text-title-2[data-v-c5123aac]{display:inherit;margin-top:0;color:#333;font-size:%?25.45?%;line-height:inherit;margin-left:%?18.18?%}.zaiui-add-btn-view-box[data-v-c5123aac]{bottom:calc(env(safe-area-inset-bottom) / 2);text-align:center}.zaiui-add-btn-view-box .cu-btn[data-v-c5123aac]{margin:auto;width:%?81.81?%;height:%?81.81?%;font-weight:800;border-radius:50%;font-size:%?49.09?%;border:%?9.09?% solid #fff;box-shadow:0 0 %?14.54?% %?7.27?% #d0d0d0}',""]),t.exports=i},"8f4f":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={swiperListData:function(){return[{id:1,img:"/static/images/home/swiper/1.png"},{id:2,img:"/static/images/home/swiper/2.png"},{id:3,img:"/static/images/home/swiper/3.png"}]},gridRoundList:function(){return[{id:1,name:"官方自营",badge:"准新机",img:"/static/images/home/grid-icon/25.png"},{id:2,name:"用户寄卖",badge:"已验机",img:"/static/images/home/grid-icon/26.png"},{id:3,name:"个人闲置",badge:"",img:"/static/images/home/grid-icon/27.png"},{id:4,name:"手机保卖",badge:"",img:"/static/images/home/grid-icon/28.png"},{id:5,name:"电脑数码",badge:"",img:"/static/images/home/grid-icon/29.png"}]},gridSmList:function(){return[{id:1,name:"苹果",img:"/static/images/home/grid-icon/30.png"},{id:2,name:"华为",img:"/static/images/home/grid-icon/31.png"},{id:3,name:"小米",img:"/static/images/home/grid-icon/32.png"},{id:4,name:"vivo",img:"/static/images/home/grid-icon/33.png"},{id:5,name:"oppo",img:"/static/images/home/grid-icon/34.png"},{id:6,name:"魅族",img:"/static/images/home/grid-icon/35.png"},{id:7,name:"寄卖优选",img:"/static/images/home/grid-icon/36.png"},{id:8,name:"验机特惠",img:"/static/images/home/grid-icon/37.png"},{id:9,name:"直播特卖",img:"/static/images/home/grid-icon/38.png"},{id:10,name:"更多分类",img:"/static/images/home/grid-icon/39.png"}]},goodsSortListData:function(){return[{id:1,quv:!0,autarky:!0,title:"商品标题，商品标题，商品标题，商品标题",type:["全新","全网通","64G"],price:"2999",cost_price:"6999",discount:["已降90元","赠"],style:["7天无理由","当天发货","180天质保"],img:"/static/images/home/goods/1.png"},{id:2,quv:!0,autarky:!1,title:"商品标题，商品标题，商品标题，商品标题",type:["无拆修","完美外观","电池耐用"],price:"1699",cost_price:"6999",discount:["赠"],style:["7天无理由","24h发货","30天质保"],img:"/static/images/home/goods/2.png"},{id:3,quv:!0,autarky:!1,title:"商品标题，商品标题，商品标题，商品标题",type:["无拆修","完美外观","电池耐用"],price:"1699",cost_price:"6999",discount:[],style:["7天无理由","24h发货","30天质保"],img:"/static/images/home/goods/3.png"},{id:4,quv:!0,autarky:!0,title:"商品标题，商品标题，商品标题，商品标题",type:["全新","全网通","64G"],price:"2999",cost_price:"6999",discount:["已降90元","赠"],style:["7天无理由","当天发货","180天质保"],img:"/static/images/home/goods/4.png"},{id:5,quv:!0,autarky:!1,title:"商品标题，商品标题，商品标题，商品标题",type:["无拆修","完美外观","电池耐用"],price:"1699",cost_price:"6999",discount:["赠"],style:["7天无理由","24h发货","30天质保"],img:"/static/images/home/goods/5.png"},{id:6,quv:!0,autarky:!1,title:"商品标题，商品标题，商品标题，商品标题",type:["无拆修","完美外观","电池耐用"],price:"1699",cost_price:"6999",discount:[],style:["7天无理由","24h发货","30天质保"],img:"/static/images/home/goods/6.png"}]}},s=e;i.default=s},a401:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"bar-search-title",props:{bgColor:{type:String,default:""},content:{type:String,default:"输入关键字"},isBack:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack()},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=e},a87b:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"zaiui-bar-search-title-box"},[a("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"})],1):t._e(),a("v-uni-view",{staticClass:"content search",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"search-form round"},[a("v-uni-text",{staticClass:"cuIcon-search"}),a("v-uni-text",{staticClass:"margin-left-xs"},[t._v(t._s(t.content))])],1)],1),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},o=[]},a9a9:function(t,i,a){"use strict";var e=a("e49b"),s=a.n(e);s.a},b5b4:function(t,i,a){"use strict";a.r(i);var e=a("d665"),s=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=s.a},cb93:function(t,i,a){"use strict";a.r(i);var e=a("50d4"),s=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=s.a},d1eb:function(t,i,a){"use strict";var e=a("e430"),s=a.n(e);s.a},d665:function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;e(a("5a26"));var s={name:"goods-sort-list",props:{list_data:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!0}},methods:{listTap:function(t,i){this.$emit("listTap",{data:t,index:i})}}};i.default=s},e430:function(t,i,a){var e=a("8cce");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("898df9ee",e,!0,{sourceMap:!1,shadowMode:!1})},e49b:function(t,i,a){var e=a("08e6");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("7c9202b4",e,!0,{sourceMap:!1,shadowMode:!1})}}]);