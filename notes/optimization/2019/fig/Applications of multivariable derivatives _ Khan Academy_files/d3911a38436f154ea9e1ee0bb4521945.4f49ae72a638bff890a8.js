(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["d3911a38436f154ea9e1ee0bb4521945"],{Rry3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.faceIconColor=void 0;var n=r("Pwnf");var o=function e(t){return t?function(e){return(0,n.fade)(e,.32)}:function(e){return e}};t.faceIconColor=o},YmN9:function(e,t,r){"use strict";r("ma9I");r("+2oP");r("5DmW");r("NBAS");Object.defineProperty(t,"__esModule",{value:true});t.default=t.continueUrlForRole=void 0;var n=l(r("q1tI"));var h=r("vlHx");var y=o(r("RNI6"));var i=o(r("etw9"));var a=o(r("i0nR"));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function u(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function f(e,t,r){if(t)c(e.prototype,t);if(r)c(e,r);return e}function s(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return p(e)}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return d(e)}function p(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function v(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)b(e,t)}function b(e,t){b=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return b(e,t)}function w(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var C=r("ZpD3");var i18n=r("HEOz");var g="/signup/google";var O=function e(t,r,n){if(t&&t.slice(0,2)!=="/?"&&t!=="/"){return t}if(typeof r==="string"){return r}if(typeof r==="object"){return r[n==="teacher"||n==="parent"?n:"default"]}return"/"};t.continueUrlForRole=O;var m=function(e){v(o,e);function o(){var e;var b;u(this,o);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}b=s(this,(e=d(o)).call.apply(e,[this].concat(r)));w(p(b),"handleClick",function(e){var t=b.props,r=t.googleContinueUrl,n=t.linkClever,o=t.cleverLibrary,i=t.postLoginContinueUrl,a=t.minorConversions,l=t.role,u=t.classCodes,c=t.birthdate,f=t.udi,s=t.onSuccess,d=t.reauth;e.preventDefault();if(a){C.markMinorConversions(a)}var p=O(i,r,l);var v=(0,y.default)({type:"google",role:l,linkClever:n,cleverLibrary:o,classCodes:u,birthdate:c,continueUrl:p,udi:f,reauth:d});(0,h.launchGoogleConnection)(g,v,s)});return b}f(o,[{key:"render",value:function e(){return n.createElement(i.default,{title:i18n._("Continue with Google"),iconComponent:a.default,disabled:this.props.disabled,onClick:this.handleClick,width:this.props.width,grow:this.props.grow,shrink:this.props.shrink,size:this.props.size})}}]);return o}(n.Component);var j=m;t.default=j},etw9:function(e,t,r){"use strict";r("5DmW");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=c(r("q1tI"));var i=r("JimW");var n=r("mR6N");var a=u(r("Pwnf"));var l=u(r("Nw73"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}var f=function e(t){switch(t){case"xsmall":return 24;case"small":return 32;case"large":return 48;case"xlarge":return 60;case"default":case null:case undefined:return 40;default:t;return 40}};var s=function e(t){if(t==="xsmall"){return 12}if(t==="small"){return 16}if(t==="large"){return 24}if(t==="xlarge"){return 30}return 20};var d=function e(t){var r=f(t.size);var n=s(t.size);return o.createElement(l.default,{colors:{backgroundColor:a.default.white,borderColor:a.default.offBlack64,textColor:a.default.offBlack},hoverColors:{backgroundColor:a.default.offBlack8,borderColor:a.default.offBlack64,textColor:a.default.offBlack},disabled:!!t.disabled,disabledStateIsOpaque:true,onClick:t.onClick,width:t.width,grow:t.grow,shrink:t.shrink,size:t.size,testId:t.testId},o.createElement(i.View,{style:[p.iconContainer,{height:r-2,width:r-2,padding:(r-n-2)/2}]},t.iconComponent!=null?o.createElement(t.iconComponent,{disabled:!!t.disabled}):null),t.title)};var p=n.StyleSheet.create({iconContainer:{position:"absolute",top:0,left:0}});var v=d;t.default=v},i0nR:function(e,t,r){"use strict";r("5DmW");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i=n(r("q1tI"));var a=r("Rry3");function n(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}var o=function e(t){var r=t.disabled,n=r===void 0?false:r;var o=(0,a.faceIconColor)(n);return i.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M21.43 12.62C21.43 11.95 21.37 11.31 21.26 10.69H12.40V14.33H17.46C17.25 15.51 16.58 16.50 15.59 17.17V19.53H18.63C20.40 17.89 21.43 15.48 21.43 12.62Z",fill:o("#4285F4")}),i.createElement("path",{d:"M12.40 21.81C14.94 21.81 17.07 20.96 18.63 19.53L15.59 17.17C14.75 17.73 13.67 18.07 12.40 18.07C9.95 18.07 7.88 16.41 7.14 14.19H4.00V16.63C5.55 19.70 8.73 21.81 12.40 21.81Z",fill:o("#34A853")}),i.createElement("path",{d:"M7.14 14.19C6.95 13.63 6.85 13.02 6.85 12.40C6.85 11.78 6.95 11.18 7.14 10.62V8.18H4.00C3.36 9.45 3 10.89 3 12.40C3 13.92 3.36 15.36 4.00 16.63L7.14 14.19Z",fill:o("#FBBC05")}),i.createElement("path",{d:"M12.40 6.74C13.78 6.74 15.02 7.21 16.00 8.15L18.69 5.45C17.07 3.93 14.94 3 12.40 3C8.73 3 5.55 5.11 4.00 8.18L7.14 10.62C7.88 8.39 9.95 6.74 12.40 6.74Z",fill:o("#EA4335")}))};var l=o;t.default=l}}]);
//# sourceMappingURL=../../sourcemaps/en/d3911a38436f154ea9e1ee0bb4521945.4f49ae72a638bff890a8.js.map