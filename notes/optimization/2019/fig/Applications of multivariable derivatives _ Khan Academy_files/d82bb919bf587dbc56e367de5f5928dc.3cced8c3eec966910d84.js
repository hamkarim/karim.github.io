(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["d82bb919bf587dbc56e367de5f5928dc"],{CjT8:function(e,n){var a={mailcheck:{threshold:3,defaultDomains:["yahoo.com","google.com","hotmail.com","gmail.com","me.com","aol.com","mac.com","live.com","comcast.net","googlemail.com","msn.com","hotmail.co.uk","yahoo.co.uk","facebook.com","verizon.net","sbcglobal.net","att.net","gmx.com","mail.com"],defaultTopLevelDomains:["co.uk","com","net","org","info","edu","gov","mil"],run:function(e){e.domains=e.domains||a.mailcheck.defaultDomains;e.topLevelDomains=e.topLevelDomains||a.mailcheck.defaultTopLevelDomains;e.distanceFunction=e.distanceFunction||a.sift3Distance;var n=a.mailcheck.suggest(encodeURI(e.email),e.domains,e.topLevelDomains,e.distanceFunction);if(n&&n.domain.indexOf(".")!==-1){if(e.suggested){e.suggested(n)}}else{if(e.empty){e.empty()}}},suggest:function(e,n,t,i){e=e.toLowerCase();var a=this.splitEmail(e);var o=this.findClosestDomain(a.domain,n,i);if(o){if(o!=a.domain){return{address:a.address,domain:o,full:a.address+"@"+o}}}else{var l=this.findClosestDomain(a.topLevelDomain,t);if(a.domain&&l&&l!=a.topLevelDomain){var s=a.domain;o=s.substring(0,s.lastIndexOf(a.topLevelDomain))+l;return{address:a.address,domain:o,full:a.address+"@"+o}}}return false},findClosestDomain:function(e,n,t){var i;var a=99;var o=null;if(!e||!n){return false}if(!t){t=this.sift3Distance}for(var l=0;l<n.length;l++){if(e===n[l]){return e}i=t(e,n[l]);if(i<a){a=i;o=n[l]}}if(a<=this.threshold&&o!==null){return o}else{return false}},sift3Distance:function(e,n){if(e==null||e.length===0){if(n==null||n.length===0){return 0}else{return n.length}}if(n==null||n.length===0){return e.length}var t=0;var i=0;var a=0;var o=0;var l=5;while(t+i<e.length&&t+a<n.length){if(e.charAt(t+i)==n.charAt(t+a)){o++}else{i=0;a=0;for(var s=0;s<l;s++){if(t+s<e.length&&e.charAt(t+s)==n.charAt(t)){i=s;break}if(t+s<n.length&&e.charAt(t)==n.charAt(t+s)){a=s;break}}}t++}return(e.length+n.length)/2-o},splitEmail:function(e){var n=e.split("@");if(n.length<2){return false}for(var t=0;t<n.length;t++){if(n[t]===""){return false}}var i=n.pop();var a=i.split(".");var o="";if(a.length==0){return false}else if(a.length==1){o=a[0]}else{for(var t=1;t<a.length;t++){o+=a[t]+"."}if(a.length>=2){o=o.substring(0,o.length-1)}}return{topLevelDomain:o,domain:i,address:n.join("@")}}}};if(window.jQuery){(function(e){e.fn.mailcheck=function(e){var n=this;if(e.suggested){var t=e.suggested;e.suggested=function(e){t(n,e)}}if(e.empty){var i=e.empty;e.empty=function(){i.call(null,n)}}e.email=this.val();a.mailcheck.run(e)}})(jQuery)}e.exports=a}}]);
//# sourceMappingURL=../../sourcemaps/en/d82bb919bf587dbc56e367de5f5928dc.3cced8c3eec966910d84.js.map