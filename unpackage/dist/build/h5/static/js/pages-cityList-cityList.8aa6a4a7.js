(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cityList-cityList"],{2550:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{cityList:[],loading:!1,value:[10,0,0],storage_cityList:[],indicatorStyle:"height: ".concat(Math.round(uni.getSystemInfoSync().screenWidth/7.5),"px;")}},computed:{selectResult:function(){var t="";return this.cityList.length&&(t+=this.cityList[this.value[0]].name+"-",this.cityList[this.value[0]].districts.length&&(t+=this.cityList[this.value[0]].districts[this.value[1]].name+"-",this.cityList[this.value[0]].districts[this.value[1]].districts.length&&(t+=this.cityList[this.value[0]].districts[this.value[1]].districts[this.value[2]].name))),t},selectAdcode:function(){var t="";return this.cityList[this.value[0]].districts.length?this.cityList[this.value[0]].districts[this.value[1]].districts.length&&(t=this.cityList[this.value[0]].districts[this.value[1]].districts[this.value[2]].adcode):t=this.cityList[this.value[0]].adcode,t},selectCityInfo:function(){var t="";return t=this.cityList[this.value[0]].districts.length?this.cityList[this.value[0]].districts[this.value[1]].districts.length?this.cityList[this.value[0]].districts[this.value[1]].districts[this.value[2]]:this.cityList[this.value[0]].districts[this.value[1]]:this.cityList[this.value[0]],t}},onLoad:function(){this.getCityList();try{var t=uni.getStorageSync("weather_storage_cityList");t&&t.length&&(this.storage_cityList=t)}catch(i){console.log(i)}},onNavigationBarButtonTap:function(t){uni.switchTab({url:"/pages/index/index"})},methods:{getCityList:function(){var t=this;this.loading=!0,uni.showLoading({title:"获取城市数据中..."}),uni.request({url:"https://restapi.amap.com/v3/config/district",method:"GET",data:{key:"1155d2464abdf5c3a50d534a5591f293",keywords:"中国",subdistrict:3},success:function(i){1==i.data.status?t.cityList=i.data.districts[0].districts:i.data.info&&uni.showModal({content:i.data.info,showCancel:!1})},fail:function(t){console.log("request fail",t),uni.showModal({content:"获取城市数据失败，请稍后重试",showCancel:!1})},complete:function(){t.loading=!1,uni.hideLoading()}})},bindChange:function(t){var i=t.detail.value;i[0]===this.value[0]?i[1]===this.value[1]?this.value=i:this.value=[i[0],i[1],0]:this.value=[i[0],0,0]},addCity:function(){for(var t=this.selectAdcode,i=0,s=this.storage_cityList.length;i<s;i++)if(this.storage_cityList[i].adcode===t){this.storage_cityList.splice(i,1);break}this.storage_cityList.push(this.selectCityInfo);try{uni.setStorageSync("weather_storage_cityList",this.storage_cityList),uni.showModal({title:"提示",content:"添加城市成功",showCancel:!1})}catch(e){uni.showModal({title:"提示",content:"添加城市失败，请重试",showCancel:!1}),console.log(e)}}}};i.default=e},3492:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",{staticClass:"content"},[t.cityList.length?s("v-uni-view",{staticClass:"select-result select-title"},[t._v("当前选择的是："+t._s(t.selectResult))]):t._e(),s("v-uni-view",{staticClass:"select-result"},[s("v-uni-button",{staticClass:"select-btn",attrs:{type:"primary",size:"mini"},on:{click:function(i){i=t.$handleEvent(i),t.addCity(i)}}},[t._v("添加城市")]),s("v-uni-text",{staticClass:"sub-select-title"},[t._v("添加的城市可以在当前城市页面快速切换")])],1),t.cityList.length?s("v-uni-picker-view",{attrs:{value:t.value,"indicator-style":t.indicatorStyle},on:{change:function(i){i=t.$handleEvent(i),t.bindChange(i)}}},[s("v-uni-picker-view-column",t._l(t.cityList,function(i,e){return s("v-uni-view",{key:e,staticClass:"item"},[t._v(t._s(i.name))])}),1),t.cityList[t.value[0]].districts.length?s("v-uni-picker-view-column",t._l(t.cityList[t.value[0]].districts,function(i,e){return s("v-uni-view",{key:e,staticClass:"item"},[t._v(t._s(i.name))])}),1):t._e(),t.cityList[t.value[0]].districts.length&&t.cityList[t.value[0]].districts[t.value[1]].districts.length?s("v-uni-picker-view-column",t._l(t.cityList[t.value[0]].districts[t.value[1]].districts,function(i,e){return s("v-uni-view",{key:e,staticClass:"item"},[t._v(t._s(i.name))])}),1):t._e()],1):t._e()],1)},n=[];s.d(i,"a",function(){return e}),s.d(i,"b",function(){return n})},5446:function(t,i,s){var e=s("bf0b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=s("4f06").default;n("11a4cf36",e,!0,{sourceMap:!1,shadowMode:!1})},"5fb8":function(t,i,s){"use strict";s.r(i);var e=s("2550"),n=s.n(e);for(var a in e)"default"!==a&&function(t){s.d(i,t,function(){return e[t]})}(a);i["default"]=n.a},a03a:function(t,i,s){"use strict";var e=s("5446"),n=s.n(e);n.a},bf0b:function(t,i,s){i=t.exports=s("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-d3d2c6f0]{color:#333;font-size:%?28?%}.select-result[data-v-d3d2c6f0]{padding:%?15?%;color:#333;font-size:%?28?%}.select-result.select-title[data-v-d3d2c6f0]{font-weight:700;padding:%?20?% %?15?%;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden}.select-result .sub-select-title[data-v-d3d2c6f0]{font-weight:700;margin-left:%?15?%;color:#999;font-size:%?24?%}.select-result .select-btn[data-v-d3d2c6f0]{vertical-align:middle}uni-picker-view[data-v-d3d2c6f0]{width:100%;height:%?1000?%;margin-top:%?20?%;color:#333;font-size:%?28?%}.item[data-v-d3d2c6f0]{line-height:%?100?%;text-align:center}',""])},dd7b:function(t,i,s){"use strict";s.r(i);var e=s("3492"),n=s("5fb8");for(var a in n)"default"!==a&&function(t){s.d(i,t,function(){return n[t]})}(a);s("a03a");var c=s("2877"),l=Object(c["a"])(n["default"],e["a"],e["b"],!1,null,"d3d2c6f0",null);i["default"]=l.exports}}]);