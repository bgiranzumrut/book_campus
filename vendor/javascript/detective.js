// detective@4.7.1 downloaded from https://ga.jspm.io/npm:detective@4.7.1/index.js

import e from"acorn";import r from"acorn/dist/walk";import t from"defined";var s={};var n={exports:s};var a=e;var i=r;var o=t;var l=/\brequire\b/;function parse(e,r){r||(r={});return a.parse(e,{ecmaVersion:o(r.ecmaVersion,9),sourceType:r.sourceType,ranges:o(r.ranges,r.range),locations:o(r.locations,r.loc),allowReserved:o(r.allowReserved,true),allowReturnOutsideFunction:o(r.allowReturnOutsideFunction,true),allowImportExportEverywhere:o(r.allowImportExportEverywhere,true),allowHashBang:o(r.allowHashBang,true)})}var s=n.exports=function(e,r){return s.find(e,r).strings};s.find=function(e,r){r||(r={});var t=void 0===r.word?"require":r.word;"string"!==typeof e&&(e=String(e));var s=r.isRequire||function(e){return"Identifier"===e.callee.type&&e.callee.name===t};var n={strings:[],expressions:[]};r.nodes&&(n.nodes=[]);var a="require"===t?l:RegExp("\\b"+t+"\\b");if(!a.test(e))return n;var o=parse(e,r.parse);function visit(t,o,l){var u=a.test(e.slice(t.start,t.end));if(u){i.base[t.type](t,o,l);if("CallExpression"===t.type&&s(t)){if(t.arguments.length){var p=t.arguments[0];"Literal"===p.type?n.strings.push(p.value):"TemplateLiteral"===p.type&&1===p.quasis.length&&0===p.expressions.length?n.strings.push(p.quasis[0].value.raw):n.expressions.push(e.slice(p.start,p.end))}r.nodes&&n.nodes.push(t)}}}i.recursive(o,null,{Statement:visit,Expression:visit});return n};var u=n.exports;const p=n.exports.find;export default u;export{p as find};

