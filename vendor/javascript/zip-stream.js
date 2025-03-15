// zip-stream@2.1.3 downloaded from https://ga.jspm.io/npm:zip-stream@2.1.3/index.js

import e from"util";import t from"compress-commons";import n from"archiver-utils";import i from"buffer";var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var o={};var l=i.Buffer;
/**
 * ZipStream
 *
 * @ignore
 * @license [MIT]{@link https://github.com/archiverjs/node-zip-stream/blob/master/LICENSE}
 * @copyright (c) 2014 Chris Talkington, contributors.
 */var m=e.inherits;var a=t.ZipArchiveOutputStream;var s=t.ZipArchiveEntry;var p=n;var f=o=function(e){if(!((this||r)instanceof f))return new f(e);e=(this||r).options=e||{};e.zlib=e.zlib||{};a.call(this||r,e);if("number"===typeof e.level&&e.level>=0){e.zlib.level=e.level;delete e.level}e.forceZip64||"number"!==typeof e.zlib.level||0!==e.zlib.level||(e.store=true);e.comment&&e.comment.length>0&&this.setComment(e.comment)};m(f,a);f.prototype._normalizeFileData=function(e){e=p.defaults(e,{type:"file",name:null,linkname:null,date:null,mode:null,store:(this||r).options.store,comment:""});var t="directory"===e.type;var n="symlink"===e.type;if(e.name){e.name=p.sanitizePath(e.name);if(n||"/"!==e.name.slice(-1))t&&(e.name+="/");else{t=true;e.type="directory"}}(t||n)&&(e.store=true);e.date=p.dateify(e.date);return e};f.prototype.entry=function(e,t,n){"function"!==typeof n&&(n=(this||r)._emitErrorCallback.bind(this||r));t=this._normalizeFileData(t);if("file"===t.type||"directory"===t.type||"symlink"===t.type)if("string"===typeof t.name&&0!==t.name.length){if("symlink"!==t.type||"string"===typeof t.linkname){var i=new s(t.name);i.setTime(t.date,(this||r).options.forceLocalTime);t.store&&i.setMethod(0);t.comment.length>0&&i.setComment(t.comment);"symlink"===t.type&&"number"!==typeof t.mode&&(t.mode=40960);if("number"===typeof t.mode){"symlink"===t.type&&(t.mode|=40960);i.setUnixMode(t.mode)}"symlink"===t.type&&"string"===typeof t.linkname&&(e=l.from(t.linkname));return a.prototype.entry.call(this||r,i,e,n)}n(new Error("entry linkname must be a non-empty string value when type equals symlink"))}else n(new Error("entry name must be a non-empty string value"));else n(new Error(t.type+" entries not currently supported"))};f.prototype.finalize=function(){this.finish()};var y=o;export default y;

