// module-deps@4.1.1 downloaded from https://ga.jspm.io/npm:module-deps@4.1.1/index.js

import e from"fs";import r from"path";import n from"cached-path-relative";import i from"browser-resolve";import t from"resolve";import o from"detective";import s from"through2";import a from"concat-stream";import f from"parents";import p from"stream-combiner2";import l from"duplexer2";import u from"xtend";import c from"defined";import d from"inherits";import h from"readable-stream";import m from"process";var v="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var g={};function _nullRequire(e){var r=new Error("Cannot find module '"+e+"'");r.code="MODULE_NOT_FOUND";throw r}var k=m;var _=e;var y=r;var b=n;var w=i;var x=t;var T=o;var C=s;var P=a;var D=f;var F=p;var j=l;var O=u;var E=c;var S=d;var N=h.Transform;g=Deps;S(Deps,N);function Deps(e){var r=this||v;if(!((this||v)instanceof Deps))return new Deps(e);N.call(this||v,{objectMode:true});e||(e={});(this||v).basedir=e.basedir||k.cwd();(this||v).persistentCache=e.persistentCache||function(e,r,n,i,t){k.nextTick((function(){i(null,t)}))};(this||v).cache=e.cache;(this||v).fileCache=e.fileCache;(this||v).pkgCache=e.packageCache||{};(this||v).pkgFileCache={};(this||v).pkgFileCachePending={};(this||v)._emittedPkg={};(this||v).visited={};(this||v).walking={};(this||v).entries=[];(this||v)._input=[];(this||v).paths=e.paths||k.env.NODE_PATH||"";if("string"===typeof(this||v).paths){var n=y.delimiter||("win32"===k.platform?";":":");(this||v).paths=(this||v).paths.split(n)}(this||v).paths=(this||v).paths.filter(Boolean).map((function(e){return y.resolve(r.basedir,e)}));(this||v).transforms=[].concat(e.transform).filter(Boolean);(this||v).globalTransforms=[].concat(e.globalTransform).filter(Boolean);(this||v).resolver=e.resolve||w;(this||v).options=O(e);(this||v).options.modules||((this||v).options.modules={});(this||v).options.expose||((this||v).options.expose={});(this||v).pending=0;(this||v).inputPending=0;var i=y.join((this||v).basedir,"__fake.js");(this||v).top={id:i,filename:i,paths:(this||v).paths,basedir:(this||v).basedir}}Deps.prototype._isTopLevel=function(e){var r=(this||v).entries.some((function(r){var n=b(y.dirname(r),e);return n.split(/[\\\/]/).indexOf("node_modules")<0}));if(!r){var n=b((this||v).basedir,e);r=n.split(/[\\\/]/).indexOf("node_modules")<0}return r};Deps.prototype._transform=function(e,r,n){var i=this||v;"string"===typeof e&&(e={file:e});if(e.transform&&e.global){(this||v).globalTransforms.push([e.transform,e.options]);return n()}if(e.transform){(this||v).transforms.push([e.transform,e.options]);return n()}i.pending++;var t=E(e.basedir,i.basedir);false!==e.entry&&i.entries.push(y.resolve(t,e.file||e.id));i.lookupPackage(e.file,(function(r,t){if(r&&i.options.ignoreMissing){i.emit("missing",e.file,i.top);i.pending--;return n()}if(r)return i.emit("error",r);i.pending--;i._input.push({row:e,pkg:t});n()}))};Deps.prototype._flush=function(){var e=this||v;var r={};e._input.forEach((function(e){var n=e.row,i=r[n.file||n.id];if(i){i.row.entry=i.row.entry||n.entry;var t=i.row.expose||n.expose;i.row.expose=t;t&&i.row.file===i.row.id&&n.file!==n.id&&(i.row.id=n.id)}else r[n.file||n.id]=e}));Object.keys(r).forEach((function(n){var i=r[n];var t=i.pkg||{};var o=i.row.file?y.dirname(i.row.file):e.basedir;t.__dirname||(t.__dirname=o);e.walk(i.row,O(e.top,{filename:y.join(o,"_fake.js")}))}));0===(this||v).pending&&this.push(null);(this||v)._ended=true};Deps.prototype.resolve=function(e,r,n){var i=this||v;var t=i.options;if(xhas(i.cache,r.id,"deps",e)&&i.cache[r.id].deps[e]){var o=i.cache[r.id].deps[e];var s=i.pkgCache[o];return s?n(null,o,s):i.lookupPackage(o,(function(e,r){n(null,o,r)}))}r.packageFilter=function(e,r){var n=y.dirname(r);t.packageFilter&&(e=t.packageFilter(e,r));e.__dirname=n;return e};t.extensions&&(r.extensions=t.extensions);t.modules&&(r.modules=t.modules);i.resolver(e,r,(function onresolve(o,s,a,f){if(o)return n(o);if(!s)return n(new Error('module not found: "'+e+'" from file '+r.filename));a&&a.__dirname?n(o,s,a,f):i.lookupPackage(s,(function(e,r){if(e)return n(e);r||(r={});r.__dirname||(r.__dirname=y.dirname(s));i.pkgCache[s]=r;onresolve(e,s,t.packageFilter?t.packageFilter(r,r.__dirname):r,f)}))}))};Deps.prototype.readFile=function(e,r,n){var i=this||v;if(xhas((this||v).fileCache,e))return toStream((this||v).fileCache[e]);var t=_.createReadStream(e,{encoding:"utf8"});t.on("error",(function(e){i.emit("error",e)}));this.emit("file",e,r);return t};Deps.prototype.getTransforms=function(e,r,n){n||(n={});var i=this||v;var t;t=!n.builtin&&!n.inNodeModules&&this._isTopLevel(e);var o=[].concat(t?(this||v).transforms:[]).concat(getTransforms(r,{globalTransform:(this||v).globalTransforms,transformKey:(this||v).options.transformKey}));if(0===o.length)return C();var s=o.length;var a=[];var f=C();var p=C();var l=j(f,p);for(var u=0;u<o.length;u++)(function(e){makeTransform(o[e],(function(r,n){if(r)return i.emit("error",r);a[e]=n;0===--s&&done()}))})(u);return l;function done(){var r=F.apply(null,a);r.on("error",(function(r){r.message+=" while parsing file: "+e;r.filename||(r.filename=e);i.emit("error",r)}));f.pipe(r).pipe(p)}function makeTransform(r,n){var t={};if(Array.isArray(r)){t=r[1]||{};r=r[0]}t._flags=t.hasOwnProperty("_flags")?t._flags:i.options;if("function"===typeof r){var o=r(e,t);i.emit("transform",o,e);nextTick(n,null,wrapTransform(o))}else loadTransform(r,t,(function(e,r){if(e)return n(e);n(null,wrapTransform(r))}))}function loadTransform(n,t,o){var s={basedir:y.dirname(e)};x(n,s,(function nr(a,f,p){if(a&&p)return o&&o(a);if(a){s.basedir=r.__dirname;return x(n,s,(function(e,r){nr(e,r,true)}))}if(!f)return o(new Error("cannot find transform module "+tr+" while transforming "+e));var l=_nullRequire(f);if("function"!==typeof l)return o(new Error("Unexpected "+typeof l+" exported by the "+JSON.stringify(f)+" package. "+"Expected a transform function."));var u=l(e,t);i.emit("transform",u,e);o(null,u)}))}};Deps.prototype.walk=function(e,r,n){var i=this||v;var t=i.options;(this||v).pending++;var o={};var s;if("object"===typeof e){o=O(e);false===o.entry&&delete o.entry;e=o.file||o.id;s=true;(this||v).inputPending++}i.resolve(e,r,(function(a,f,p,l){var u=has(r.modules,e);o.expose&&(i.options.expose[o.expose]=i.options.modules[o.expose]=f);if(p&&!i._emittedPkg[p.__dirname]){i._emittedPkg[p.__dirname]=true;i.emit("package",p)}if(t.postFilter&&!t.postFilter(e,f,p)){0===--i.pending&&i.push(null);s&&--i.inputPending;return n&&n(null,void 0)}if(a&&o.source){f=o.file;var c=i.getTransforms(f,p);c.pipe(P((function(e){o.source=e.toString("utf8");fromSource(f,o.source,p)})));return c.end(o.source)}if(a&&i.options.ignoreMissing){0===--i.pending&&i.push(null);s&&--i.inputPending;i.emit("missing",e,r);return n&&n(null,void 0)}if(a)return i.emit("error",a);if(i.visited[f]){0===--i.pending&&i.push(null);s&&--i.inputPending;return n&&n(null,f)}i.visited[f]=true;if(o.source){var c=i.getTransforms(f,p);c.pipe(P((function(e){o.source=e.toString("utf8");fromSource(f,o.source,p)})));return c.end(o.source)}var d=i.cache&&i.cache[f];if(d)return fromDeps(f,d.source,d.package,l,Object.keys(d.deps));i.persistentCache(f,e,p,persistentCacheFallback,(function(e,r){e?i.emit("error",e):fromDeps(f,r.source,r.package,l,Object.keys(r.deps))}));function persistentCacheFallback(n,t){var o=n?toStream(n):i.readFile(f,e,p);o.pipe(i.getTransforms(l||f,p,{builtin:u,inNodeModules:r.inNodeModules})).pipe(P((function(e){var r=e.toString("utf8");var n=getDeps(f,r);n&&t(null,{source:r,package:p,deps:n.reduce((function(e,r){e[r]=true;return e}),{})})})))}}));function getDeps(e,r){return o.noparse?[]:i.parseDeps(e,r)}function fromSource(e,r,n,i){var t=getDeps(e,r);t&&fromDeps(e,r,n,i,t)}function fromDeps(e,a,f,p,l){var u=l.length;var c={};s&&--i.inputPending;(function resolve(){if(i.inputPending>0)return setTimeout(resolve);l.forEach((function(n){if(!t.filter||t.filter(n)){var o=i._isTopLevel(p||e);var s={id:e,filename:e,paths:i.paths,package:f,inNodeModules:r.inNodeModules||!o};i.walk(n,s,(function(e,r){c[n]=r;0===--u&&done()}))}else{c[n]=false;0===--u&&done()}}));0===l.length&&done()})();function done(){o.id||(o.id=e);o.source||(o.source=a);o.deps||(o.deps=c);o.file||(o.file=e);i.entries.indexOf(e)>=0&&(o.entry=true);i.push(o);n&&n(null,e);0===--i.pending&&i.push(null)}}};Deps.prototype.parseDeps=function(e,r,n){if(true===(this||v).options.noParse)return[];if(/\.json$/.test(e))return[];if(Array.isArray((this||v).options.noParse)&&(this||v).options.noParse.indexOf(e)>=0)return[];try{var i=T(r)}catch(r){var t=r&&r.message?r.message:r;this.emit("error",new Error("Parsing file "+e+": "+t));return}return i};Deps.prototype.lookupPackage=function(e,r){var n=this||v;var i=(this||v).pkgCache[e];if(i)return nextTick(r,null,i);if(false===i)return nextTick(r,null,void 0);var t=D(e?y.dirname(e):n.basedir);(function next(){if(0===t.length){n.pkgCache[e]=false;return r(null,void 0)}var i=t.shift();if("node_modules"===i.split(/[\\\/]/).slice(-1)[0])return r(null,void 0);var o=y.join(i,"package.json");var s=n.pkgCache[o];if(s)return nextTick(r,null,s);if(false===s)return next();var a=n.pkgFileCachePending[o];if(a)return a.push(onpkg);a=n.pkgFileCachePending[o]=[];_.readFile(o,(function(r,t){if(r)return onpkg();try{var s=JSON.parse(t)}catch(r){return onpkg(new Error([r+" while parsing json file "+o].join("")))}s.__dirname=i;n.pkgCache[o]=s;n.pkgCache[e]=s;onpkg(null,s)}));function onpkg(e,i){if(n.pkgFileCachePending[o]){var t=n.pkgFileCachePending[o];delete n.pkgFileCachePending[o];t.forEach((function(r){r(e,i)}))}if(e)r(e);else if(i)r(null,i);else{n.pkgCache[o]=false;next()}}})()};function getTransforms(e,r){var n=[];if(r.transformKey){var i=e;var t=r.transformKey;for(var o=0;o<t.length;o++){if(!i||"object"!==typeof i)break;i=i[t[o]]}o===t.length&&(n=[].concat(i).filter(Boolean))}return n.concat(r.globalTransform||[])}function nextTick(e){var r=[].slice.call(arguments,1);k.nextTick((function(){e.apply(null,r)}))}function xhas(e){if(!e)return false;for(var r=1;r<arguments.length;r++){var n=arguments[r];if(!has(e,n))return false;e=e[n]}return true}function toStream(e){var r=C();r.push(e);r.push(null);return r}function has(e,r){return e&&Object.prototype.hasOwnProperty.call(e,r)}function wrapTransform(e){if("function"===typeof e.read)return e;var r=C(),n=C();r.pipe(e).pipe(n);var i=j(r,n);e.on("error",(function(e){i.emit("error",e)}));return i}var M=g;export default M;

