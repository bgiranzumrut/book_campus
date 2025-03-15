// tunnel-agent@0.6.0 downloaded from https://ga.jspm.io/npm:tunnel-agent@0.6.0/index.js

import e from"net";import t from"tls";import o from"http";import n from"https";import r from"events";import s from"assert";import c from"util";import i from"safe-buffer";import u from"process";var p={};var a=u;var v=e,h=t,f=o,l=n,g=r,m=s,d=c,k=i.Buffer;p.httpOverHttp=httpOverHttp;p.httpsOverHttp=httpsOverHttp;p.httpOverHttps=httpOverHttps;p.httpsOverHttps=httpsOverHttps;function httpOverHttp(e){var t=new TunnelingAgent(e);t.request=f.request;return t}function httpsOverHttp(e){var t=new TunnelingAgent(e);t.request=f.request;t.createSocket=createSecureSocket;t.defaultPort=443;return t}function httpOverHttps(e){var t=new TunnelingAgent(e);t.request=l.request;return t}function httpsOverHttps(e){var t=new TunnelingAgent(e);t.request=l.request;t.createSocket=createSecureSocket;t.defaultPort=443;return t}function TunnelingAgent(e){var t=this;t.options=e||{};t.proxyOptions=t.options.proxy||{};t.maxSockets=t.options.maxSockets||f.Agent.defaultMaxSockets;t.requests=[];t.sockets=[];t.on("free",(function onFree(e,o,n){for(var r=0,s=t.requests.length;r<s;++r){var c=t.requests[r];if(c.host===o&&c.port===n){t.requests.splice(r,1);c.request.onSocket(e);return}}e.destroy();t.removeSocket(e)}))}d.inherits(TunnelingAgent,g.EventEmitter);TunnelingAgent.prototype.addRequest=function addRequest(e,t){var o=this;"string"===typeof t&&(t={host:t,port:arguments[2],path:arguments[3]});o.sockets.length>=this.maxSockets?o.requests.push({host:t.host,port:t.port,request:e}):o.createConnection({host:t.host,port:t.port,request:e})};TunnelingAgent.prototype.createConnection=function createConnection(e){var t=this;t.createSocket(e,(function(o){o.on("free",onFree);o.on("close",onCloseOrRemove);o.on("agentRemove",onCloseOrRemove);e.request.onSocket(o);function onFree(){t.emit("free",o,e.host,e.port)}function onCloseOrRemove(e){t.removeSocket(o);o.removeListener("free",onFree);o.removeListener("close",onCloseOrRemove);o.removeListener("agentRemove",onCloseOrRemove)}}))};TunnelingAgent.prototype.createSocket=function createSocket(e,t){var o=this;var n={};o.sockets.push(n);var r=mergeOptions({},o.proxyOptions,{method:"CONNECT",path:e.host+":"+e.port,agent:false});if(r.proxyAuth){r.headers=r.headers||{};r.headers["Proxy-Authorization"]="Basic "+k.from(r.proxyAuth).toString("base64")}O("making CONNECT request");var s=o.request(r);s.useChunkedEncodingByDefault=false;s.once("response",onResponse);s.once("upgrade",onUpgrade);s.once("connect",onConnect);s.once("error",onError);s.end();function onResponse(e){e.upgrade=true}function onUpgrade(e,t,o){a.nextTick((function(){onConnect(e,t,o)}))}function onConnect(r,c,i){s.removeAllListeners();c.removeAllListeners();if(200===r.statusCode){m.equal(i.length,0);O("tunneling connection has established");o.sockets[o.sockets.indexOf(n)]=c;t(c)}else{O("tunneling socket could not be established, statusCode=%d",r.statusCode);var u=new Error("tunneling socket could not be established, "+"statusCode="+r.statusCode);u.code="ECONNRESET";e.request.emit("error",u);o.removeSocket(n)}}function onError(t){s.removeAllListeners();O("tunneling socket could not be established, cause=%s\n",t.message,t.stack);var r=new Error("tunneling socket could not be established, "+"cause="+t.message);r.code="ECONNRESET";e.request.emit("error",r);o.removeSocket(n)}};TunnelingAgent.prototype.removeSocket=function removeSocket(e){var t=this.sockets.indexOf(e);if(-1!==t){this.sockets.splice(t,1);var o=this.requests.shift();o&&this.createConnection(o)}};function createSecureSocket(e,t){var o=this;TunnelingAgent.prototype.createSocket.call(o,e,(function(n){var r=h.connect(0,mergeOptions({},o.options,{servername:e.host,socket:n}));o.sockets[o.sockets.indexOf(n)]=r;t(r)}))}function mergeOptions(e){for(var t=1,o=arguments.length;t<o;++t){var n=arguments[t];if("object"===typeof n){var r=Object.keys(n);for(var s=0,c=r.length;s<c;++s){var i=r[s];void 0!==n[i]&&(e[i]=n[i])}}}return e}var O;O=a.env.NODE_DEBUG&&/\btunnel\b/.test(a.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments);"string"===typeof e[0]?e[0]="TUNNEL: "+e[0]:e.unshift("TUNNEL:");console.error.apply(console,e)}:function(){};p.debug=O;const S=p.httpOverHttp,q=p.httpsOverHttp,C=p.httpOverHttps,E=p.httpsOverHttps,y=p.debug;export default p;export{y as debug,S as httpOverHttp,C as httpOverHttps,q as httpsOverHttp,E as httpsOverHttps};

