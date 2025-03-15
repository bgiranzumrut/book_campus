// tough-cookie@2.4.3 downloaded from https://ga.jspm.io/npm:tough-cookie@2.4.3/lib/cookie.js

import e from"net";import t from"url";import o from"util";import"psl";import{e as i,a as r,b as n,c as a,d as s}from"../_/10a7ec6d.js";import u from"punycode";var l={author:{name:"Jeremy Stashewsky",email:"jstash@gmail.com",website:"https://github.com/stash"},contributors:[{name:"Alexander Savin",website:"https://github.com/apsavin"},{name:"Ian Livingstone",website:"https://github.com/ianlivingstone"},{name:"Ivan Nikulin",website:"https://github.com/inikulin"},{name:"Lalit Kapoor",website:"https://github.com/lalitkapoor"},{name:"Sam Thompson",website:"https://github.com/sambthompson"},{name:"Sebastian Mayr",website:"https://github.com/Sebmaster"}],license:"BSD-3-Clause",name:"tough-cookie",description:"RFC6265 Cookies and Cookie Jar for node.js",keywords:["HTTP","cookie","cookies","set-cookie","cookiejar","jar","RFC6265","RFC2965"],version:"2.4.3",homepage:"https://github.com/salesforce/tough-cookie",repository:{type:"git",url:"git://github.com/salesforce/tough-cookie.git"},bugs:{url:"https://github.com/salesforce/tough-cookie/issues"},main:"./lib/cookie",files:["lib"],scripts:{test:"vows test/*_test.js",cover:"nyc --reporter=lcov --reporter=html vows test/*_test.js"},engines:{node:">=0.8"},devDependencies:{async:"^1.4.2",nyc:"^11.6.0","string.prototype.repeat":"^0.2.0",vows:"^0.8.1"},dependencies:{psl:"^1.1.24",punycode:"^1.4.1"}};var c={};var p=e;var f=t.parse;var h=o;var m=i;var k=r.Store;var y=n.MemoryCookieStore;var C=a.pathMatch;var v=l.version;var g;try{g=u}catch(e){console.warn("tough-cookie: can't load punycode; won't use punycode for domain normalization")}var x=/^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/;var d=/[\x00-\x1F]/;var b=["\n","\r","\0"];var S=/[\x20-\x3A\x3C-\x7E]+/;var D=/[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/;var w={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};var O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var I=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var P=2147483647e3;var A=0;function parseDigits(e,t,o,i){var r=0;while(r<e.length){var n=e.charCodeAt(r);if(n<=47||n>=58)break;r++}return r<t||r>o?null:i||r==e.length?parseInt(e.substr(0,r),10):null}function parseTime(e){var t=e.split(":");var o=[0,0,0];if(3!==t.length)return null;for(var i=0;i<3;i++){var r=2==i;var n=parseDigits(t[i],1,2,r);if(null===n)return null;o[i]=n}return o}function parseMonth(e){e=String(e).substr(0,3).toLowerCase();var t=w[e];return t>=0?t:null}function parseDate(e){if(e){var t=e.split(D);if(t){var o=null;var i=null;var r=null;var n=null;var a=null;var s=null;for(var u=0;u<t.length;u++){var l=t[u].trim();if(l.length){var c;if(null===r){c=parseTime(l);if(c){o=c[0];i=c[1];r=c[2];continue}}if(null===n){c=parseDigits(l,1,2,true);if(null!==c){n=c;continue}}if(null===a){c=parseMonth(l);if(null!==c){a=c;continue}}if(null===s){c=parseDigits(l,2,4,true);if(null!==c){s=c;s>=70&&s<=99?s+=1900:s>=0&&s<=69&&(s+=2e3)}}}}if(!(null===n||null===a||null===s||null===r||n<1||n>31||s<1601||o>23||i>59||r>59))return new Date(Date.UTC(s,a,n,o,i,r))}}}function formatDate(e){var t=e.getUTCDate();t=t>=10?t:"0"+t;var o=e.getUTCHours();o=o>=10?o:"0"+o;var i=e.getUTCMinutes();i=i>=10?i:"0"+i;var r=e.getUTCSeconds();r=r>=10?r:"0"+r;return I[e.getUTCDay()]+", "+t+" "+O[e.getUTCMonth()]+" "+e.getUTCFullYear()+" "+o+":"+i+":"+r+" GMT"}function canonicalDomain(e){if(null==e)return null;e=e.trim().replace(/^\./,"");g&&/[^\u0001-\u007f]/.test(e)&&(e=g.toASCII(e));return e.toLowerCase()}function domainMatch(e,t,o){if(null==e||null==t)return null;if(false!==o){e=canonicalDomain(e);t=canonicalDomain(t)}if(e==t)return true;if(p.isIP(e))return false;var i=e.indexOf(t);return!(i<=0)&&(e.length===t.length+i&&"."===e.substr(i-1,1))}function defaultPath(e){if(!e||"/"!==e.substr(0,1))return"/";if("/"===e)return e;var t=e.lastIndexOf("/");return 0===t?"/":e.slice(0,t)}function trimTerminator(e){for(var t=0;t<b.length;t++){var o=e.indexOf(b[t]);-1!==o&&(e=e.substr(0,o))}return e}function parseCookiePair(e,t){e=trimTerminator(e);var o=e.indexOf("=");if(t){if(0===o){e=e.substr(1);o=e.indexOf("=")}}else if(o<=0)return;var i,r;if(o<=0){i="";r=e.trim()}else{i=e.substr(0,o).trim();r=e.substr(o+1).trim()}if(!d.test(i)&&!d.test(r)){var n=new Cookie;n.key=i;n.value=r;return n}}function parse(e,t){t&&"object"===typeof t||(t={});e=e.trim();var o=e.indexOf(";");var i=-1===o?e:e.substr(0,o);var r=parseCookiePair(i,!!t.loose);if(r){if(-1===o)return r;var n=e.slice(o+1).trim();if(0===n.length)return r;var a=n.split(";");while(a.length){var s=a.shift().trim();if(0!==s.length){var u=s.indexOf("=");var l,c;if(-1===u){l=s;c=null}else{l=s.substr(0,u);c=s.substr(u+1)}l=l.trim().toLowerCase();c&&(c=c.trim());switch(l){case"expires":if(c){var p=parseDate(c);p&&(r.expires=p)}break;case"max-age":if(c&&/^-?[0-9]+$/.test(c)){var f=parseInt(c,10);r.setMaxAge(f)}break;case"domain":if(c){var h=c.trim().replace(/^\./,"");h&&(r.domain=h.toLowerCase())}break;case"path":r.path=c&&"/"===c[0]?c:null;break;case"secure":r.secure=true;break;case"httponly":r.httpOnly=true;break;default:r.extensions=r.extensions||[];r.extensions.push(s);break}}}return r}}function jsonParse(e){var t;try{t=JSON.parse(e)}catch(e){return e}return t}function fromJSON(e){if(!e)return null;var t;if("string"===typeof e){t=jsonParse(e);if(t instanceof Error)return null}else t=e;var o=new Cookie;for(var i=0;i<Cookie.serializableProperties.length;i++){var r=Cookie.serializableProperties[i];void 0!==t[r]&&t[r]!==Cookie.prototype[r]&&("expires"===r||"creation"===r||"lastAccessed"===r?null===t[r]?o[r]=null:o[r]="Infinity"==t[r]?"Infinity":new Date(t[r]):o[r]=t[r])}return o}function cookieCompare(e,t){var o=0;var i=e.path?e.path.length:0;var r=t.path?t.path.length:0;o=r-i;if(0!==o)return o;var n=e.creation?e.creation.getTime():P;var a=t.creation?t.creation.getTime():P;o=n-a;if(0!==o)return o;o=e.creationIndex-t.creationIndex;return o}function permutePath(e){if("/"===e)return["/"];e.lastIndexOf("/")===e.length-1&&(e=e.substr(0,e.length-1));var t=[e];while(e.length>1){var o=e.lastIndexOf("/");if(0===o)break;e=e.substr(0,o);t.push(e)}t.push("/");return t}function getCookieContext(e){if(e instanceof Object)return e;try{e=decodeURI(e)}catch(e){}return f(e)}function Cookie(e){e=e||{};Object.keys(e).forEach((function(t){Cookie.prototype.hasOwnProperty(t)&&Cookie.prototype[t]!==e[t]&&"_"!==t.substr(0,1)&&(this[t]=e[t])}),this);this.creation=this.creation||new Date;Object.defineProperty(this,"creationIndex",{configurable:false,enumerable:false,writable:true,value:++Cookie.cookiesCreated})}Cookie.cookiesCreated=0;Cookie.parse=parse;Cookie.fromJSON=fromJSON;Cookie.prototype.key="";Cookie.prototype.value="";Cookie.prototype.expires="Infinity";Cookie.prototype.maxAge=null;Cookie.prototype.domain=null;Cookie.prototype.path=null;Cookie.prototype.secure=false;Cookie.prototype.httpOnly=false;Cookie.prototype.extensions=null;Cookie.prototype.hostOnly=null;Cookie.prototype.pathIsDefault=null;Cookie.prototype.creation=null;Cookie.prototype.lastAccessed=null;Object.defineProperty(Cookie.prototype,"creationIndex",{configurable:true,enumerable:false,writable:true,value:0});Cookie.serializableProperties=Object.keys(Cookie.prototype).filter((function(e){return!(Cookie.prototype[e]instanceof Function||"creationIndex"===e||"_"===e.substr(0,1))}));Cookie.prototype.inspect=function inspect(){var e=Date.now();return'Cookie="'+this.toString()+"; hostOnly="+(null!=this.hostOnly?this.hostOnly:"?")+"; aAge="+(this.lastAccessed?e-this.lastAccessed.getTime()+"ms":"?")+"; cAge="+(this.creation?e-this.creation.getTime()+"ms":"?")+'"'};h.inspect.custom&&(Cookie.prototype[h.inspect.custom]=Cookie.prototype.inspect);Cookie.prototype.toJSON=function(){var e={};var t=Cookie.serializableProperties;for(var o=0;o<t.length;o++){var i=t[o];this[i]!==Cookie.prototype[i]&&("expires"===i||"creation"===i||"lastAccessed"===i?null===this[i]?e[i]=null:e[i]="Infinity"==this[i]?"Infinity":this[i].toISOString():"maxAge"===i?null!==this[i]&&(e[i]=Infinity==this[i]||-Infinity==this[i]?this[i].toString():this[i]):this[i]!==Cookie.prototype[i]&&(e[i]=this[i]))}return e};Cookie.prototype.clone=function(){return fromJSON(this.toJSON())};Cookie.prototype.validate=function validate(){if(!x.test(this.value))return false;if(Infinity!=this.expires&&!(this.expires instanceof Date)&&!parseDate(this.expires))return false;if(null!=this.maxAge&&this.maxAge<=0)return false;if(null!=this.path&&!S.test(this.path))return false;var e=this.cdomain();if(e){if(e.match(/\.$/))return false;var t=m.getPublicSuffix(e);if(null==t)return false}return true};Cookie.prototype.setExpires=function setExpires(e){e instanceof Date?this.expires=e:this.expires=parseDate(e)||"Infinity"};Cookie.prototype.setMaxAge=function setMaxAge(e){this.maxAge=Infinity===e||-Infinity===e?e.toString():e};Cookie.prototype.cookieString=function cookieString(){var e=this.value;null==e&&(e="");return""===this.key?e:this.key+"="+e};Cookie.prototype.toString=function toString(){var e=this.cookieString();Infinity!=this.expires&&(this.expires instanceof Date?e+="; Expires="+formatDate(this.expires):e+="; Expires="+this.expires);null!=this.maxAge&&Infinity!=this.maxAge&&(e+="; Max-Age="+this.maxAge);this.domain&&!this.hostOnly&&(e+="; Domain="+this.domain);this.path&&(e+="; Path="+this.path);this.secure&&(e+="; Secure");this.httpOnly&&(e+="; HttpOnly");this.extensions&&this.extensions.forEach((function(t){e+="; "+t}));return e};Cookie.prototype.TTL=function TTL(e){if(null!=this.maxAge)return this.maxAge<=0?0:1e3*this.maxAge;var t=this.expires;if(Infinity!=t){t instanceof Date||(t=parseDate(t)||Infinity);return Infinity==t?Infinity:t.getTime()-(e||Date.now())}return Infinity};Cookie.prototype.expiryTime=function expiryTime(e){if(null!=this.maxAge){var t=e||this.creation||new Date;var o=this.maxAge<=0?-Infinity:1e3*this.maxAge;return t.getTime()+o}return Infinity==this.expires?Infinity:this.expires.getTime()};Cookie.prototype.expiryDate=function expiryDate(e){var t=this.expiryTime(e);return Infinity==t?new Date(P):-Infinity==t?new Date(A):new Date(t)};Cookie.prototype.isPersistent=function isPersistent(){return null!=this.maxAge||Infinity!=this.expires};Cookie.prototype.cdomain=Cookie.prototype.canonicalizedDomain=function canonicalizedDomain(){return null==this.domain?null:canonicalDomain(this.domain)};function CookieJar(e,t){"boolean"===typeof t?t={rejectPublicSuffixes:t}:null==t&&(t={});null!=t.rejectPublicSuffixes&&(this.rejectPublicSuffixes=t.rejectPublicSuffixes);null!=t.looseMode&&(this.enableLooseMode=t.looseMode);e||(e=new y);this.store=e}CookieJar.prototype.store=null;CookieJar.prototype.rejectPublicSuffixes=true;CookieJar.prototype.enableLooseMode=false;var J=[];J.push("setCookie");CookieJar.prototype.setCookie=function(e,t,o,i){var r;var n=getCookieContext(t);if(o instanceof Function){i=o;o={}}var a=canonicalDomain(n.hostname);var s=this.enableLooseMode;null!=o.loose&&(s=o.loose);e instanceof Cookie||(e=Cookie.parse(e,{loose:s}));if(!e){r=new Error("Cookie failed to parse");return i(o.ignoreError?null:r)}var u=o.now||new Date;if(this.rejectPublicSuffixes&&e.domain){var l=m.getPublicSuffix(e.cdomain());if(null==l){r=new Error("Cookie has domain set to a public suffix");return i(o.ignoreError?null:r)}}if(e.domain){if(!domainMatch(a,e.cdomain(),false)){r=new Error("Cookie not in this host's domain. Cookie:"+e.cdomain()+" Request:"+a);return i(o.ignoreError?null:r)}null==e.hostOnly&&(e.hostOnly=false)}else{e.hostOnly=true;e.domain=a}if(!e.path||"/"!==e.path[0]){e.path=defaultPath(n.pathname);e.pathIsDefault=true}if(false===o.http&&e.httpOnly){r=new Error("Cookie is HttpOnly and this isn't an HTTP API");return i(o.ignoreError?null:r)}var c=this.store;c.updateCookie||(c.updateCookie=function(e,t,o){this.putCookie(t,o)});function withCookie(t,r){if(t)return i(t);var next=function(t){if(t)return i(t);i(null,e)};if(r){if(false===o.http&&r.httpOnly){t=new Error("old Cookie is HttpOnly and this isn't an HTTP API");return i(o.ignoreError?null:t)}e.creation=r.creation;e.creationIndex=r.creationIndex;e.lastAccessed=u;c.updateCookie(r,e,next)}else{e.creation=e.lastAccessed=u;c.putCookie(e,next)}}c.findCookie(e.domain,e.path,e.key,withCookie)};J.push("getCookies");CookieJar.prototype.getCookies=function(e,t,o){var i=getCookieContext(e);if(t instanceof Function){o=t;t={}}var r=canonicalDomain(i.hostname);var n=i.pathname||"/";var a=t.secure;null!=a||!i.protocol||"https:"!=i.protocol&&"wss:"!=i.protocol||(a=true);var s=t.http;null==s&&(s=true);var u=t.now||Date.now();var l=false!==t.expire;var c=!!t.allPaths;var p=this.store;function matchingCookie(e){if(e.hostOnly){if(e.domain!=r)return false}else if(!domainMatch(r,e.domain,false))return false;if(!c&&!C(n,e.path))return false;if(e.secure&&!a)return false;if(e.httpOnly&&!s)return false;if(l&&e.expiryTime()<=u){p.removeCookie(e.domain,e.path,e.key,(function(){}));return false}return true}p.findCookies(r,c?null:n,(function(e,i){if(e)return o(e);i=i.filter(matchingCookie);false!==t.sort&&(i=i.sort(cookieCompare));var r=new Date;i.forEach((function(e){e.lastAccessed=r}));o(null,i)}))};J.push("getCookieString");CookieJar.prototype.getCookieString=function(){var e=Array.prototype.slice.call(arguments,0);var t=e.pop();var next=function(e,o){e?t(e):t(null,o.sort(cookieCompare).map((function(e){return e.cookieString()})).join("; "))};e.push(next);this.getCookies.apply(this,e)};J.push("getSetCookieStrings");CookieJar.prototype.getSetCookieStrings=function(){var e=Array.prototype.slice.call(arguments,0);var t=e.pop();var next=function(e,o){e?t(e):t(null,o.map((function(e){return e.toString()})))};e.push(next);this.getCookies.apply(this,e)};J.push("serialize");CookieJar.prototype.serialize=function(e){var t=this.store.constructor.name;"Object"===t&&(t=null);var o={version:"tough-cookie@"+v,storeType:t,rejectPublicSuffixes:!!this.rejectPublicSuffixes,cookies:[]};if(!(this.store.getAllCookies&&"function"===typeof this.store.getAllCookies))return e(new Error("store does not support getAllCookies and cannot be serialized"));this.store.getAllCookies((function(t,i){if(t)return e(t);o.cookies=i.map((function(e){e=e instanceof Cookie?e.toJSON():e;delete e.creationIndex;return e}));return e(null,o)}))};CookieJar.prototype.toJSON=function(){return this.serializeSync()};J.push("_importCookies");CookieJar.prototype._importCookies=function(e,t){var o=this;var i=e.cookies;if(!i||!Array.isArray(i))return t(new Error("serialized jar has no cookies array"));i=i.slice();function putNext(e){if(e)return t(e);if(!i.length)return t(e,o);var r;try{r=fromJSON(i.shift())}catch(e){return t(e)}if(null===r)return putNext(null);o.store.putCookie(r,putNext)}putNext()};CookieJar.deserialize=function(e,t,o){if(3!==arguments.length){o=t;t=null}var i;if("string"===typeof e){i=jsonParse(e);if(i instanceof Error)return o(i)}else i=e;var r=new CookieJar(t,i.rejectPublicSuffixes);r._importCookies(i,(function(e){if(e)return o(e);o(null,r)}))};CookieJar.deserializeSync=function(e,t){var o="string"===typeof e?JSON.parse(e):e;var i=new CookieJar(t,o.rejectPublicSuffixes);if(!i.store.synchronous)throw new Error("CookieJar store is not synchronous; use async API instead.");i._importCookiesSync(o);return i};CookieJar.fromJSON=CookieJar.deserializeSync;J.push("clone");CookieJar.prototype.clone=function(e,t){if(1===arguments.length){t=e;e=null}this.serialize((function(o,i){if(o)return t(o);CookieJar.deserialize(e,i,t)}))};function syncWrap(e){return function(){if(!this.store.synchronous)throw new Error("CookieJar store is not synchronous; use async API instead.");var t=Array.prototype.slice.call(arguments);var o,i;t.push((function syncCb(e,t){o=e;i=t}));this[e].apply(this,t);if(o)throw o;return i}}J.forEach((function(e){CookieJar.prototype[e+"Sync"]=syncWrap(e)}));c.CookieJar=CookieJar;c.Cookie=Cookie;c.Store=k;c.MemoryCookieStore=y;c.parseDate=parseDate;c.formatDate=formatDate;c.parse=parse;c.fromJSON=fromJSON;c.domainMatch=domainMatch;c.defaultPath=defaultPath;c.pathMatch=C;c.getPublicSuffix=m.getPublicSuffix;c.cookieCompare=cookieCompare;c.permuteDomain=s.permuteDomain;c.permutePath=permutePath;c.canonicalDomain=canonicalDomain;const T=c.getPublicSuffix,M=c.permuteDomain;const j=c.CookieJar,E=c.Cookie,N=c.Store,z=c.MemoryCookieStore,F=c.parseDate,L=c.formatDate,U=c.parse,_=c.fromJSON,H=c.domainMatch,B=c.defaultPath,R=c.pathMatch,W=c.cookieCompare,$=c.permutePath,q=c.canonicalDomain;export default c;export{E as Cookie,j as CookieJar,z as MemoryCookieStore,N as Store,q as canonicalDomain,W as cookieCompare,B as defaultPath,H as domainMatch,L as formatDate,_ as fromJSON,T as getPublicSuffix,U as parse,F as parseDate,R as pathMatch,M as permuteDomain,$ as permutePath};

