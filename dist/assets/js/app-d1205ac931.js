!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}({0:function(e,t){e.exports=jQuery},19:function(e,t,n){e.exports=n(20)},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(0),u=r(o);window.$=u["default"];var a={adaptiveHeight:!0,arrows:!1,dots:!0,mobileFirst:!0,autoplay:!0,autoplaySpeed:6e3};(0,u["default"])(document).foundation(),(0,u["default"])(".sas-hero").slick(a),(0,u["default"])(".sas-donate-form").donate(),(0,u["default"])(".flexible--events").events(),(0,u["default"])(window).on("changed.zf.mediaquery",function(){(0,u["default"])(".flexible--events").events()}),(0,u["default"])("#register-sse").click(function(){fbq("track","Clicked Registration Button")})}});