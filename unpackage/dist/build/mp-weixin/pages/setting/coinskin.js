(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/coinskin"],{"0863":function(n,t,e){},"1f02":function(n,t,e){"use strict";e.r(t);var o=e("a15b"),i=e("94c3");for(var c in i)"default"!==c&&function(n){e.d(t,n,(function(){return i[n]}))}(c);e("b021");var r,a=e("f0c5"),u=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=u.exports},5744:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(e("15e4"));function i(n){return n&&n.__esModule?n:{default:n}}function c(n,t){var e;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=r(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){u=!0,c=n},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw c}}}}function r(n,t){if(n){if("string"===typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(n,t):void 0}}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var u=function(){e.e("components/easy-loadimage/easy-loadimage").then(function(){return resolve(e("cc9d"))}.bind(null,e)).catch(e.oe)},s={components:{easyLoadimage:u},data:function(){return{coins:[],coinName:"",coinIndex:-1,lockStatus:!1,scrollTop:0,isAD:!1}},onPageScroll:function(n){var t=n.scrollTop;this.scrollTop=t},onLoad:function(){this.getCoinList(),this.getUseCoin()},onReady:function(){},methods:{getCoinList:function(){n.showLoading({title:"加载中..."}),this.coins=o.default.data;var t,e=n.getStorageSync("unlockList")||[],i=c(this.coins);try{for(i.s();!(t=i.n()).done;){var r,a=t.value,u=c(a.list);try{for(u.s();!(r=u.n()).done;){var s,l=r.value,f=c(e);try{for(f.s();!(s=f.n()).done;){var d=s.value;l.value===d&&(l.status=!0)}}catch(h){f.e(h)}finally{f.f()}}}catch(h){u.e(h)}finally{u.f()}}}catch(h){i.e(h)}finally{i.f()}setTimeout((function(){n.hideLoading()}),2e3)},getUseCoin:function(){this.coinName=n.getStorageSync("coinName")||"2020shu"},selectCoin:function(n){this.coinIndex=n.id,this.coinid=n.value,this.lockStatus=n.status},setCoin:function(){n.setStorageSync("coinName",this.coinid),this.getUseCoin()},unlockCoin:function(){if(this.coinIndex>500)n.showToast({title:"不要心急，您尚未发现此彩蛋。",icon:"none",duration:2e3});else{var t=this;n.showModal({title:"",content:"观看广告后即可解锁。 \n 江湖走马，且行且恰饭",confirmText:"支持一下",cancelText:"下次一定",confirmColor:"#fd746c",success:function(e){e.confirm?t.isAD?rewardedVideoAd.show().catch((function(){rewardedVideoAd.load().then((function(){return rewardedVideoAd.show()})).catch((function(t){console.log("激励视频 广告显示失败"),n.showToast({title:"恰饭失败，请稍后再试",icon:"none",duration:2e3})}))})):t.unlockCoinSucceeded():e.cancel&&console.log("用户点击取消")}})}},unlockCoinSucceeded:function(){var t=n.getStorageSync("unlockList")||[];t.push(this.coinid),n.setStorageSync("unlockList",t),n.showToast({title:"恭喜解锁成功",icon:"none",duration:2e3}),n.setStorageSync("coinName",this.coinid),this.getCoinList(),this.getUseCoin(),this.coinIndex=-1}}};t.default=s}).call(this,e("543d")["default"])},"94c3":function(n,t,e){"use strict";e.r(t);var o=e("5744"),i=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=i.a},a15b:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return o}));var o={easyLoadimage:function(){return e.e("components/easy-loadimage/easy-loadimage").then(e.bind(null,"cc9d"))}},i=function(){var n=this,t=n.$createElement;n._self._c},c=[]},b021:function(n,t,e){"use strict";var o=e("0863"),i=e.n(o);i.a},dee2:function(n,t,e){"use strict";(function(n){e("3cf4");o(e("66fd"));var t=o(e("1f02"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["dee2","common/runtime","common/vendor"]]]);