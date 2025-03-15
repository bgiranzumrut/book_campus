// combine-source-map@0.8.0 downloaded from https://ga.jspm.io/npm:combine-source-map@0.8.0/index.js

import e from"path";import r from"convert-source-map";import n from"lodash.memoize";import o from"inline-source-map";import t from"process";import a from"source-map";var i={};var u=t;function posix(e){return"/"===e.charAt(0)}function win32(e){var r=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;var n=r.exec(e);var o=n[1]||"";var t=!!o&&":"!==o.charAt(1);return!!n[2]||t}i="win32"===u.platform?win32:posix;i.posix=posix;i.win32=win32;var c=i;var s={};var p=a.SourceMapConsumer;s=function(e){var r=new p(e);var n=[];r.eachMapping((function(e){n.push({original:null!=e.originalColumn?{column:e.originalColumn,line:e.originalLine}:void 0,generated:{column:e.generatedColumn,line:e.generatedLine},source:null!=e.originalColumn?e.source:void 0,name:e.name})}));return n};var m=s;var l={};var d=e;var v=r;var f=n;var g=o;var h=c;var C=m;var x=/^[a-z]+:\/\//;var M=f((function(e,r,n){if(!n)return n;var o=r?d.join(r,n):n;o=o.replace(/\\/g,"/");e=e.replace(/\\/g,"/");return e===o||h(o)||x.test(o)?o:d.join(d.dirname(e),o).replace(/\\/g,"/")}),(function(e,r,n){return e+"::"+r+"::"+n}));function resolveMap(e){var r=v.fromSource(e);return r?r.toObject():null}function hasInlinedSource(e){return e.sourcesContent&&!!e.sourcesContent[0]}function Combiner(e,r){this.generator=g({file:e||"generated.js",sourceRoot:r})}Combiner.prototype._addGeneratedMap=function(e,r,n){this.generator.addGeneratedMappings(e,r,n);this.generator.addSourceContent(e,r);return this};Combiner.prototype._addExistingMap=function(e,r,n,o){var t=C(n);for(var a=0,i=n.sources.length;a<i;a++)n.sourcesContent&&this.generator.addSourceContent(M(e,n.sourceRoot,n.sources[a]),n.sourcesContent[a]);t.forEach((function(r){this.generator.addMappings(M(e,null,r.source),[r],o)}),this);return this};Combiner.prototype.addFile=function(e,r){r=r||{};r.hasOwnProperty("line")||(r.line=0);r.hasOwnProperty("column")||(r.column=0);var n=resolveMap(e.source);return n&&hasInlinedSource(n)?this._addExistingMap(e.sourceFile,e.source,n,r):this._addGeneratedMap(e.sourceFile,e.source,r)};Combiner.prototype.base64=function(){return this.generator.base64Encode()};Combiner.prototype.comment=function(){return this.generator.inlineMappingUrl()};l.create=function(e,r){return new Combiner(e,r)};l.removeComments=function(e){return e.replace?e.replace(v.commentRegex,"").replace(v.mapFileCommentRegex,""):e};const b=l.create,w=l.removeComments;export default l;export{b as create,w as removeComments};

