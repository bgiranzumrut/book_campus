// random-bytes@1.0.0 downloaded from https://ga.jspm.io/npm:random-bytes@1.0.0/index.js

import e from"crypto";var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var r={};var t=e;var o=t.randomBytes===t.pseudoRandomBytes?1:3;r=randomBytes;r.sync=randomBytesSync;function randomBytes(e,r){if(void 0!==r&&"function"!==typeof r)throw new TypeError("argument callback must be a function");if(!r&&!n.Promise)throw new TypeError("argument callback is required");return r?generateRandomBytes(e,o,r):new Promise((function executor(n,r){generateRandomBytes(e,o,(function onRandomBytes(e,t){if(e)return r(e);n(t)}))}))}function randomBytesSync(e){var n=null;for(var r=0;r<o;r++)try{return t.randomBytes(e)}catch(e){n=e}throw n}function generateRandomBytes(e,n,r){t.randomBytes(e,(function onRandomBytes(t,o){if(!t)return r(null,o);if(!--n)return r(t);setTimeout(generateRandomBytes.bind(null,e,n,r),10)}))}var a=r;const s=r.sync;export default a;export{s as sync};

