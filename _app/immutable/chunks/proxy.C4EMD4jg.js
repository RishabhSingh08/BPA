import{S as b,o as D,d as S,e as v,h as T,b as l,U as u,i as P,g as m,j as A,k as E,l as K,q as L}from"./runtime.DMSJIk3_.js";function y(i,o=null,M){if(typeof i!="object"||i===null||b in i)return i;const I=K(i);if(I!==D&&I!==S)return i;var s=new Map,c=L(i),h=v(0);c&&s.set("length",v(i.length));var g;return new Proxy(i,{defineProperty(f,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&T();var n=s.get(e);return n===void 0?(n=v(t.value),s.set(e,n)):l(n,y(t.value,g)),!0},deleteProperty(f,e){var t=s.get(e);if(t===void 0)e in f&&s.set(e,v(u));else{if(c&&typeof e=="string"){var n=s.get("length"),r=Number(e);Number.isInteger(r)&&r<n.v&&l(n,r)}l(t,u),j(h)}return!0},get(f,e,t){var d;if(e===b)return i;var n=s.get(e),r=e in f;if(n===void 0&&(!r||(d=P(f,e))!=null&&d.writable)&&(n=v(y(r?f[e]:u,g)),s.set(e,n)),n!==void 0){var a=m(n);return a===u?void 0:a}return Reflect.get(f,e,t)},getOwnPropertyDescriptor(f,e){var t=Reflect.getOwnPropertyDescriptor(f,e);if(t&&"value"in t){var n=s.get(e);n&&(t.value=m(n))}else if(t===void 0){var r=s.get(e),a=r==null?void 0:r.v;if(r!==void 0&&a!==u)return{enumerable:!0,configurable:!0,value:a,writable:!0}}return t},has(f,e){var a;if(e===b)return!0;var t=s.get(e),n=t!==void 0&&t.v!==u||Reflect.has(f,e);if(t!==void 0||A!==null&&(!n||(a=P(f,e))!=null&&a.writable)){t===void 0&&(t=v(n?y(f[e],g):u),s.set(e,t));var r=m(t);if(r===u)return!1}return n},set(f,e,t,n){var O;var r=s.get(e),a=e in f;if(c&&e==="length")for(var d=t;d<r.v;d+=1){var _=s.get(d+"");_!==void 0?l(_,u):d in f&&(_=v(u),s.set(d+"",_))}r===void 0?(!a||(O=P(f,e))!=null&&O.writable)&&(r=v(void 0),l(r,y(t,g)),s.set(e,r)):(a=r.v!==u,l(r,y(t,g)));var w=Reflect.getOwnPropertyDescriptor(f,e);if(w!=null&&w.set&&w.set.call(n,t),!a){if(c&&typeof e=="string"){var N=s.get("length"),x=Number(e);Number.isInteger(x)&&x>=N.v&&l(N,x+1)}j(h)}return!0},ownKeys(f){m(h);var e=Reflect.ownKeys(f).filter(r=>{var a=s.get(r);return a===void 0||a.v!==u});for(var[t,n]of s)n.v!==u&&!(t in f)&&e.push(t);return e},setPrototypeOf(){E()}})}function j(i,o=1){l(i,i.v+o)}function R(i){return i!==null&&typeof i=="object"&&b in i?i[b]:i}function k(i,o){return Object.is(R(i),R(o))}export{k as i,y as p};
