// lodash.memoize@3.0.4 downloaded from https://ga.jspm.io/npm:lodash.memoize@3.0.4/index.js

var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var t={};var a="Expected a function";var o=Object.prototype;var p=o.hasOwnProperty;function MapCache(){(this||e).__data__={}}function mapDelete(t){return this.has(t)&&delete(this||e).__data__[t]}function mapGet(t){return"__proto__"==t?void 0:(this||e).__data__[t]}function mapHas(t){return"__proto__"!=t&&p.call((this||e).__data__,t)}function mapSet(t,a){"__proto__"!=t&&((this||e).__data__[t]=a);return this||e}function memoize(t,o){if("function"!=typeof t||o&&"function"!=typeof o)throw new TypeError(a);var memoized=function(){var a=arguments,p=o?o.apply(this||e,a):a[0],r=memoized.cache;if(r.has(p))return r.get(p);var n=t.apply(this||e,a);memoized.cache=r.set(p,n);return n};memoized.cache=new memoize.Cache;return memoized}MapCache.prototype["delete"]=mapDelete;MapCache.prototype.get=mapGet;MapCache.prototype.has=mapHas;MapCache.prototype.set=mapSet;memoize.Cache=MapCache;t=memoize;var r=t;export default r;

