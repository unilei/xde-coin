(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/coinaudio"],{"0d19":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{audios:[],coinAudio:""}},onLoad:function(){this.getList(),this.getUseAudio()},methods:{getList:function(){var n=[{name:"无",src:"wu"},{name:"经典1",src:"filpCoin1"},{name:"经典2",src:"filpCoin2"}];this.audios=[];for(var t=0,o=n;t<o.length;t++){var e=o[t],i={name:e.name,id:e.src,src:"/static/audio/".concat(e.src,".mp3")};this.audios.push(i)}},getUseAudio:function(){this.coinAudio=n.getStorageSync("coinAuidoID")||"filpCoin1"},selectAudio:function(t,o){n.setStorageSync("coinAuidoID",t.id),n.showToast({title:"设置成功",duration:2e3}),this.getUseAudio(),t.id&&this.loadAudio(t.src)},loadAudio:function(t){var o=n.createInnerAudioContext();o.autoplay=!0,o.src=t,o.onPlay((function(){console.log("开始播放")})),o.onError((function(n){console.log(n.errMsg),console.log(n.errCode)}))}}};t.default=o}).call(this,o("543d")["default"])},"1a30":function(n,t,o){"use strict";(function(n){o("3cf4");e(o("66fd"));var t=e(o("1c85"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("543d")["createPage"])},"1c85":function(n,t,o){"use strict";o.r(t);var e=o("4fed"),i=o("adc8");for(var u in i)"default"!==u&&function(n){o.d(t,n,(function(){return i[n]}))}(u);o("6d94");var c,a=o("f0c5"),r=Object(a["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);t["default"]=r.exports},"4fed":function(n,t,o){"use strict";var e;o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return e}));var i=function(){var n=this,t=n.$createElement;n._self._c},u=[]},"6d94":function(n,t,o){"use strict";var e=o("9340"),i=o.n(e);i.a},9340:function(n,t,o){},adc8:function(n,t,o){"use strict";o.r(t);var e=o("0d19"),i=o.n(e);for(var u in e)"default"!==u&&function(n){o.d(t,n,(function(){return e[n]}))}(u);t["default"]=i.a}},[["1a30","common/runtime","common/vendor"]]]);