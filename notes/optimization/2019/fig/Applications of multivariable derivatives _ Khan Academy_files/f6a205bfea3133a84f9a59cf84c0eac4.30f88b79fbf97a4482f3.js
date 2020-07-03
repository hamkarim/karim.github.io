(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["f6a205bfea3133a84f9a59cf84c0eac4"],{"Umt+":function(t,e){(function(c,a){"use strict";var t=navigator.userAgent.indexOf("Edge")>=0;if(!t&&"IntersectionObserver"in c&&"IntersectionObserverEntry"in c&&"intersectionRatio"in c.IntersectionObserverEntry.prototype){if(!("isIntersecting"in c.IntersectionObserverEntry.prototype)){Object.defineProperty(c.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}})}return}var e=[];function u(t){this.time=t.time;this.target=t.target;this.rootBounds=t.rootBounds;this.boundingClientRect=t.boundingClientRect;this.intersectionRect=t.intersectionRect||s();this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect;var n=e.width*e.height;var r=this.intersectionRect;var i=r.width*r.height;if(n){this.intersectionRatio=i/n}else{this.intersectionRatio=this.isIntersecting?1:0}}function n(t,e){var n=e||{};if(typeof t!="function"){throw new Error("callback must be a function")}if(n.root&&n.root.nodeType!=1){throw new Error("root must be an Element")}this._checkForIntersections=r(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT);this._callback=t;this._observationTargets=[];this._queuedEntries=[];this._rootMarginValues=this._parseRootMargin(n.rootMargin);this.thresholds=this._initThresholds(n.threshold);this.root=n.root||null;this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}n.prototype.THROTTLE_TIMEOUT=100;n.prototype.POLL_INTERVAL=null;n.prototype.USE_MUTATION_OBSERVER=true;n.prototype.observe=function(e){var t=this._observationTargets.some(function(t){return t.element==e});if(t){return}if(!(e&&e.nodeType==1)){throw new Error("target must be an Element")}this._registerInstance();this._observationTargets.push({element:e,entry:null});this._monitorIntersections();this._checkForIntersections()};n.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e});if(!this._observationTargets.length){this._unmonitorIntersections();this._unregisterInstance()}};n.prototype.disconnect=function(){this._observationTargets=[];this._unmonitorIntersections();this._unregisterInstance()};n.prototype.takeRecords=function(){var t=this._queuedEntries.slice();this._queuedEntries=[];return t};n.prototype._initThresholds=function(t){var e=t||[0];if(!Array.isArray(e))e=[e];return e.sort().filter(function(t,e,n){if(typeof t!="number"||isNaN(t)||t<0||t>1){throw new Error("threshold must be a number between 0 and 1 inclusively")}return t!==n[e-1]})};n.prototype._parseRootMargin=function(t){var e=t||"0px";var n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e){throw new Error("rootMargin must be specified in pixels or percent")}return{value:parseFloat(e[1]),unit:e[2]}});n[1]=n[1]||n[0];n[2]=n[2]||n[0];n[3]=n[3]||n[1];return n};n.prototype._monitorIntersections=function(){if(!this._monitoringIntersections){this._monitoringIntersections=true;if(this.POLL_INTERVAL){this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL)}else{i(c,"resize",this._checkForIntersections,true);i(a,"scroll",this._checkForIntersections,true);if(this.USE_MUTATION_OBSERVER&&"MutationObserver"in c){this._domObserver=new MutationObserver(this._checkForIntersections);this._domObserver.observe(a,{attributes:true,childList:true,characterData:true,subtree:true})}}}};n.prototype._unmonitorIntersections=function(){if(this._monitoringIntersections){this._monitoringIntersections=false;clearInterval(this._monitoringInterval);this._monitoringInterval=null;o(c,"resize",this._checkForIntersections,true);o(a,"scroll",this._checkForIntersections,true);if(this._domObserver){this._domObserver.disconnect();this._domObserver=null}}};n.prototype._checkForIntersections=function(){var h=this._rootIsInDom();var c=h?this._getRootRect():s();this._observationTargets.forEach(function(t){var e=t.element;var n=p(e);var r=this._rootContainsTarget(e);var i=t.entry;var o=h&&r&&this._computeTargetAndRootIntersection(e,c);var s=t.entry=new u({time:f(),target:e,boundingClientRect:n,rootBounds:c,intersectionRect:o});if(!i){this._queuedEntries.push(s)}else if(h&&r){if(this._hasCrossedThreshold(i,s)){this._queuedEntries.push(s)}}else{if(i&&i.isIntersecting){this._queuedEntries.push(s)}}},this);if(this._queuedEntries.length){this._callback(this.takeRecords(),this)}};n.prototype._computeTargetAndRootIntersection=function(t,e){if(c.getComputedStyle(t).display=="none")return;var n=p(t);var r=n;var i=v(t);var o=false;while(!o){var s=null;var h=i.nodeType==1?c.getComputedStyle(i):{};if(h.display=="none")return;if(i==this.root||i==a){o=true;s=e}else{if(i!=a.body&&i!=a.documentElement&&h.overflow!="visible"){s=p(i)}}if(s){r=l(s,r);if(!r)break}i=v(i)}return r};n.prototype._getRootRect=function(){var t;if(this.root){t=p(this.root)}else{var e=a.documentElement;var n=a.body;t={top:0,left:0,right:e.clientWidth||n.clientWidth,width:e.clientWidth||n.clientWidth,bottom:e.clientHeight||n.clientHeight,height:e.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)};n.prototype._expandRectByRootMargin=function(n){var t=this._rootMarginValues.map(function(t,e){return t.unit=="px"?t.value:t.value*(e%2?n.width:n.height)/100});var e={top:n.top-t[0],right:n.right+t[1],bottom:n.bottom+t[2],left:n.left-t[3]};e.width=e.right-e.left;e.height=e.bottom-e.top;return e};n.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1;var r=e.isIntersecting?e.intersectionRatio||0:-1;if(n===r)return;for(var i=0;i<this.thresholds.length;i++){var o=this.thresholds[i];if(o==n||o==r||o<n!==o<r){return true}}};n.prototype._rootIsInDom=function(){return!this.root||h(a,this.root)};n.prototype._rootContainsTarget=function(t){return h(this.root||a,t)};n.prototype._registerInstance=function(){if(e.indexOf(this)<0){e.push(this)}};n.prototype._unregisterInstance=function(){var t=e.indexOf(this);if(t!=-1)e.splice(t,1)};function f(){return c.performance&&performance.now&&performance.now()}function r(t,e){var n=null;return function(){if(!n){n=setTimeout(function(){t();n=null},e)}}}function i(t,e,n,r){if(typeof t.addEventListener=="function"){t.addEventListener(e,n,r||false)}else if(typeof t.attachEvent=="function"){t.attachEvent("on"+e,n)}}function o(t,e,n,r){if(typeof t.removeEventListener=="function"){t.removeEventListener(e,n,r||false)}else if(typeof t.detatchEvent=="function"){t.detatchEvent("on"+e,n)}}function l(t,e){var n=Math.max(t.top,e.top);var r=Math.min(t.bottom,e.bottom);var i=Math.max(t.left,e.left);var o=Math.min(t.right,e.right);var s=o-i;var h=r-n;return s>=0&&h>=0&&{top:n,bottom:r,left:i,right:o,width:s,height:h}}function p(t){var e;try{e=t.getBoundingClientRect()}catch(t){}if(!e)return s();if(!(e.width&&e.height)){e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}}return e}function s(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function h(t,e){var n=e;while(n){if(n==t)return true;n=v(n)}return false}function v(t){var e=t.parentNode;if(e&&e.nodeType==11&&e.host){return e.host}return e}c.IntersectionObserver=n;c.IntersectionObserverEntry=u})(window,document)}}]);
//# sourceMappingURL=../../sourcemaps/en/f6a205bfea3133a84f9a59cf84c0eac4.30f88b79fbf97a4482f3.js.map