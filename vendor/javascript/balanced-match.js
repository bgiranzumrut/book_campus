// balanced-match@1.0.2 downloaded from https://ga.jspm.io/npm:balanced-match@1.0.2/index.js

var e={};e=balanced;function balanced(e,n,a){e instanceof RegExp&&(e=maybeMatch(e,a));n instanceof RegExp&&(n=maybeMatch(n,a));var r=range(e,n,a);return r&&{start:r[0],end:r[1],pre:a.slice(0,r[0]),body:a.slice(r[0]+e.length,r[1]),post:a.slice(r[1]+n.length)}}function maybeMatch(e,n){var a=n.match(e);return a?a[0]:null}balanced.range=range;function range(e,n,a){var r,t,i,l,c;var f=a.indexOf(e);var g=a.indexOf(n,f+1);var h=f;if(f>=0&&g>0){if(e===n)return[f,g];r=[];i=a.length;while(h>=0&&!c){if(h==f){r.push(h);f=a.indexOf(e,h+1)}else if(1==r.length)c=[r.pop(),g];else{t=r.pop();if(t<i){i=t;l=g}g=a.indexOf(n,h+1)}h=f<g&&f>=0?f:g}r.length&&(c=[i,l])}return c}var n=e;export default n;

