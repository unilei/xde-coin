(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/helang-cardSwiper/helang-cardSwiper"],{"2b65":function(t,n,e){},"356c":function(t,n,e){"use strict";e.r(n);var r=e("fe2f"),i=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=i.a},6313:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},d837:function(t,n,e){"use strict";var r=e("2b65"),i=e.n(r);i.a},f66c:function(t,n,e){"use strict";e.r(n);var r=e("6313"),i=e("356c");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("d837");var a,c=e("f0c5"),f=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=f.exports},fe2f:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={props:{swiperList:{type:Array,default:function(){return[]}},imageKey:{type:String,default:"img"},textKey:{type:String,default:"name"}},data:function(){return{listIndex:0,swiperMargin:"150rpx"}},components:{},mounted:function(){},methods:{swiperChange:function(t){this.listIndex=t.detail.current,this.$emit("swiperChange",this.swiperList[t.detail.current])}}};n.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/helang-cardSwiper/helang-cardSwiper-create-component',
    {
        'components/helang-cardSwiper/helang-cardSwiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f66c"))
        })
    },
    [['components/helang-cardSwiper/helang-cardSwiper-create-component']]
]);
