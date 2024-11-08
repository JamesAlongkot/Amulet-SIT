(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{8199:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return c},ACTION_NAVIGATE:function(){return l},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return u},ACTION_RESTORE:function(){return o},ACTION_SERVER_ACTION:function(){return i},ACTION_SERVER_PATCH:function(){return f},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let u="refresh",l="navigate",o="restore",f="server-patch",a="prefetch",c="hmr-refresh",i="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return u}});let n=r(8337);function u(e,t,u,l){{let o=r(5183).normalizeLocalePath,f=r(4166).detectDomainLocale,a=t||o(e,u).detectedLocale,c=f(l,void 0,a);if(c){let t="http"+(c.http?"":"s")+"://",r=a===c.defaultLocale?"":"/"+a;return""+t+c.domain+(0,n.normalizePathTrailingSlash)(""+r+e)}return!1}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return P}});let n=r(8754),u=r(5893),l=n._(r(7294)),o=r(6075),f=r(3955),a=r(8041),c=r(9903),i=r(5490),s=r(1928),d=r(257),p=r(4229),b=r(7195),y=r(9470),h=r(8199),_=r(2145),v=new Set;function O(e,t,r,n,u,l){if(l||(0,f.isLocalURL)(t)){if(!n.bypassPrefetchedCheck&&!l){let u=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(u))return;v.add(u)}(async()=>l?e.prefetch(t,u):e.prefetch(t,r,n))().catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let P=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:v,children:P,prefetch:j=null,passHref:M,replace:m,shallow:C,scroll:E,locale:R,onClick:T,onMouseEnter:L,onTouchStart:k,legacyBehavior:A=!1,...x}=e;r=P,A&&("string"==typeof r||"number"==typeof r)&&(r=(0,u.jsx)("a",{children:r}));let I=l.default.useContext(s.RouterContext),S=l.default.useContext(d.AppRouterContext),N=null!=I?I:S,U=!I,w=!1!==j,H=null===j?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:K,as:z}=l.default.useMemo(()=>{if(!I){let e=g(a);return{href:e,as:v?g(v):e}}let[e,t]=(0,o.resolveHref)(I,a,!0);return{href:e,as:v?(0,o.resolveHref)(I,v):t||e}},[I,a,v]),D=l.default.useRef(K),F=l.default.useRef(z);A&&(n=l.default.Children.only(r));let V=A?n&&"object"==typeof n&&n.ref:t,[q,B,G]=(0,p.useIntersection)({rootMargin:"200px"}),Y=l.default.useCallback(e=>{(F.current!==z||D.current!==K)&&(G(),F.current=z,D.current=K),q(e)},[z,K,G,q]),J=(0,_.useMergedRef)(Y,V);l.default.useEffect(()=>{N&&B&&w&&O(N,K,z,{locale:R},{kind:H},U)},[z,K,B,R,w,null==I?void 0:I.locale,N,U,H]);let Q={ref:J,onClick(e){A||"function"!=typeof T||T(e),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,u,o,a,c,i){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!(0,f.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:o,locale:c,scroll:e}):t[u?"replace":"push"](n||r,{scroll:e})};i?l.default.startTransition(d):d()}(e,N,K,z,m,C,E,R,U)},onMouseEnter(e){A||"function"!=typeof L||L(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(w||!U)&&O(N,K,z,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:H},U)},onTouchStart:function(e){A||"function"!=typeof k||k(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(w||!U)&&O(N,K,z,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:H},U)}};if((0,c.isAbsoluteUrl)(z))Q.href=z;else if(!A||M||"a"===n.type&&!("href"in n.props)){let e=void 0!==R?R:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,b.getDomainLocale)(z,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);Q.href=t||(0,y.addBasePath)((0,i.addLocale)(z,e,null==I?void 0:I.defaultLocale))}return A?l.default.cloneElement(n,Q):(0,u.jsx)("a",{...x,...Q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5183:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return n}});let n=(e,t)=>r(4165).normalizeLocalePath(e,t);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),u=r(4474),l="function"==typeof IntersectionObserver,o=new Map,f=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,c=a||!l,[i,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(c||i)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:u,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=f.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=o.get(n)))return t;let u=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=u.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:u},f.push(r),o.set(r,t),t}(r);return l.set(e,t),u.observe(e),function(){if(l.delete(e),u.unobserve(e),0===l.size){u.disconnect(),o.delete(n);let e=f.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!i){let e=(0,u.requestIdleCallback)(()=>s(!0));return()=>(0,u.cancelIdleCallback)(e)}},[c,r,t,i,d.current]),[p,i,(0,n.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2145:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return u}});let n=r(7294);function u(e,t){let r=(0,n.useRef)(()=>{}),u=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),u.current()):(r.current=l(e,n),u.current=l(t,n))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:(e,t,r)=>{e.exports=r(8342)}}]);