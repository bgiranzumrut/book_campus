// fs.realpath@1.0.0 downloaded from https://ga.jspm.io/npm:fs.realpath@1.0.0/index.js

import a from"fs";import"path";import r from"process";import t from"./old.js";var e={};var n=r;e=realpath;realpath.realpath=realpath;realpath.sync=realpathSync;realpath.realpathSync=realpathSync;realpath.monkeypatch=monkeypatch;realpath.unmonkeypatch=unmonkeypatch;var p=a;var h=p.realpath;var o=p.realpathSync;var c=n.version;var l=/^v[0-5]\./.test(c);var y=t;function newError(a){return a&&"realpath"===a.syscall&&("ELOOP"===a.code||"ENOMEM"===a.code||"ENAMETOOLONG"===a.code)}function realpath(a,r,t){if(l)return h(a,r,t);if("function"===typeof r){t=r;r=null}h(a,r,(function(e,n){newError(e)?y.realpath(a,r,t):t(e,n)}))}function realpathSync(a,r){if(l)return o(a,r);try{return o(a,r)}catch(t){if(newError(t))return y.realpathSync(a,r);throw t}}function monkeypatch(){p.realpath=realpath;p.realpathSync=realpathSync}function unmonkeypatch(){p.realpath=h;p.realpathSync=o}var f=e;export default f;

