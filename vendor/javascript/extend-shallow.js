// extend-shallow@3.0.2 downloaded from https://ga.jspm.io/npm:extend-shallow@3.0.2/index.js

import t from"is-extendable";import n from"assign-symbols";var r={};var e=t;var o=n;r=Object.assign||function(t){if(null===t||"undefined"===typeof t)throw new TypeError("Cannot convert undefined or null to object");isObject(t)||(t={});for(var n=1;n<arguments.length;n++){var r=arguments[n];isString(r)&&(r=toObject(r));if(isObject(r)){assign(t,r);o(t,r)}}return t};function assign(t,n){for(var r in n)hasOwn(n,r)&&(t[r]=n[r])}function isString(t){return t&&"string"===typeof t}function toObject(t){var n={};for(var r in t)n[r]=t[r];return n}function isObject(t){return t&&"object"===typeof t||e(t)}function hasOwn(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function isEnum(t,n){return Object.prototype.propertyIsEnumerable.call(t,n)}var i=r;export default i;

