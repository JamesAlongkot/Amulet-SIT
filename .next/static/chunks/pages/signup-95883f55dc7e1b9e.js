(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{8273:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CountUp:()=>i});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(){function e(e,t,n){var i=this;this.endVal=t,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(e){var t,n,r,s=(Math.abs(e).toFixed(i.options.decimalPlaces)+"").split(".");if(t=s[0],n=s.length>1?i.options.decimal+s[1]:"",i.options.useGrouping){r="";for(var a=3,o=0,l=0,u=t.length;l<u;++l)i.options.useIndianSeparators&&4===l&&(a=2,o=1),0!==l&&o%a==0&&(r=i.options.separator+r),o++,r=t[u-l-1]+r;t=r}return i.options.numerals&&i.options.numerals.length&&(t=t.replace(/[0-9]/g,function(e){return i.options.numerals[+e]}),n=n.replace(/[0-9]/g,function(e){return i.options.numerals[+e]})),(e<0?"-":"")+i.options.prefix+t+n+i.options.suffix},this.easeOutExpo=function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(e){return e()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<t&&i>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>i||r>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var t=this.countDown?1:-1;this.endVal=e+t*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t;if(this.el){var n=this.formattingFn(e);(null===(t=this.options.plugin)||void 0===t?void 0:t.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},8588:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(1254)}])},186:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(5893),i=n(1664),s=n.n(i);n(7294);let a=function(e){let{pageTitle:t,pageName:n}=e;return(0,r.jsx)("div",{className:"inner-banner",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h2",{className:"inner-banner-title wow fadeInLeft","data-wow-duration":"1.5s","data-wow-delay":".2s",children:t}),(0,r.jsx)("nav",{"aria-label":"breadcrumb",children:(0,r.jsxs)("ol",{className:"breadcrumb",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(s(),{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:n})]})})]})})}},1582:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(5893),i=n(9008),s=n.n(i);n(7294);var a=n(5498),o=n(3747),l=n(9259),u=n(8868);let c=function(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Bidout - Multivendor Bid and Auction Next Js Template"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"assets/images/bg/sm-logo.png"})]}),(0,r.jsx)(u.Z,{}),(0,r.jsx)(l.Z,{logo:"header-logo"}),t,(0,r.jsx)(a.Z,{}),(0,r.jsx)(o.Z,{})]})}},1254:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(5893),i=n(1664),s=n.n(i),a=n(7294),o=n(186),l=n(1582);let u=function(){let[e,t]=(0,a.useState)();return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o.Z,{pageName:"Sign Up",pageTitle:"Sign Up"}),(0,r.jsxs)("div",{className:"signup-section pt-120 pb-120",children:[(0,r.jsx)("img",{alt:"image",src:"assets/images/bg/section-bg.png",className:"section-bg-top"}),(0,r.jsx)("img",{alt:"image",src:"assets/images/bg/section-bg.png",className:"section-bg-bottom"}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row d-flex justify-content-center",children:(0,r.jsx)("div",{className:"col-xl-6 col-lg-8 col-md-10",children:(0,r.jsxs)("div",{className:"form-wrapper wow fadeInUp","data-wow-duration":"1.5s","data-wow-delay":".2s",children:[(0,r.jsxs)("div",{className:"form-title",children:[(0,r.jsx)("h3",{children:"Sign Up"}),(0,r.jsxs)("p",{children:["Do you already have an account?"," ",(0,r.jsx)(s(),{href:"/login",children:"Log in here"})]})]}),(0,r.jsxs)("form",{className:"w-100",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-inner",children:[(0,r.jsx)("label",{children:"Frist Name *"}),(0,r.jsx)("input",{type:"email",placeholder:"Frist Name"})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-inner",children:[(0,r.jsx)("label",{children:"Last Name *"}),(0,r.jsx)("input",{type:"email",placeholder:"Last Name"})]})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"form-inner",children:[(0,r.jsx)("label",{children:"Enter Your Email *"}),(0,r.jsx)("input",{type:"email",placeholder:"Enter Your Email"})]})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"form-inner",children:[(0,r.jsx)("label",{children:"Password *"}),(0,r.jsx)("input",{type:1===e?"text":"password",name:"password",id:"password",placeholder:"Create A Password"}),(0,r.jsx)("i",{className:1===e?"bi bi-eye-slash bi-eye":"bi bi-eye-slash",id:"togglePassword",onClick:()=>{!1===e||0===e?t(1):t(!1)}})]})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("div",{className:"form-agreement form-inner d-flex justify-content-between flex-wrap",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("input",{type:"checkbox",id:"html"}),(0,r.jsx)("label",{htmlFor:"html",children:"I agree to the Terms & Policy"})]})})})]}),(0,r.jsx)("button",{className:"account-btn",children:"Create Account"})]}),(0,r.jsxs)("div",{className:"alternate-signup-box",children:[(0,r.jsx)("h6",{children:"or signup WITH"}),(0,r.jsxs)("div",{className:"btn-group gap-4",children:[(0,r.jsxs)("a",{href:!0,className:"eg-btn google-btn d-flex align-items-center",children:[(0,r.jsx)("i",{className:"bx bxl-google"}),(0,r.jsx)("span",{children:"signup whit google"})]}),(0,r.jsxs)("a",{href:!0,className:"eg-btn facebook-btn d-flex align-items-center",children:[(0,r.jsx)("i",{className:"bx bxl-facebook"}),"signup whit facebook"]})]})]}),(0,r.jsx)("div",{className:"form-poicy-area",children:(0,r.jsxs)("p",{children:['By clicking the "signup" button, you create a Cobiro account, and you agree to Cobiro\'s'," ",(0,r.jsx)("a",{href:"#",children:"Terms & Conditions"})," &"," ",(0,r.jsx)("a",{href:"#",children:"Privacy Policy."})]})})]})})})})]})]})}},9008:(e,t,n)=>{e.exports=n(3867)},1163:(e,t,n)=>{e.exports=n(3079)},7857:(e,t,n)=>{"use strict";var r=n(7294),i=n(8273);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){!function(e,t,n){var r;(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function d(e){var t=r.useRef(e);return c(function(){t.current=e}),r.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)},[])}var p=function(e,t){var n=t.decimal,r=t.decimals,s=t.duration,a=t.easingFn,o=t.end,l=t.formattingFn,u=t.numerals,c=t.prefix,d=t.separator,p=t.start,f=t.suffix,h=t.useEasing,m=t.useGrouping,g=t.useIndianSeparators,b=t.enableScrollSpy,y=t.scrollSpyDelay,x=t.scrollSpyOnce,v=t.plugin;return new i.CountUp(e,o,{startVal:p,duration:s,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:l,numerals:u,separator:d,prefix:c,suffix:f,plugin:v,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:b,scrollSpyDelay:y,scrollSpyOnce:x})},f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},m=function(e){var t=Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==(function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s,a,o=[],l=!0,u=!1;try{for(s=(n=n.call(e)).next;!(l=(r=s.call(n)).done)&&(o.push(r.value),2!==o.length);l=!0);}catch(e){u=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return o}}(e,2)||function(e,t){if(e){if("string"==typeof e)return u(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=r.useMemo(function(){return a(a({},h),t)},[e]),i=n.ref,s=n.startOnMount,o=n.enableReinitialize,c=n.delay,m=n.onEnd,g=n.onStart,b=n.onPauseResume,y=n.onReset,x=n.onUpdate,v=l(n,f),j=r.useRef(),w=r.useRef(),V=r.useRef(!1),N=d(function(){return p("string"==typeof i?i:i.current,v)}),E=d(function(e){var t=j.current;if(t&&!e)return t;var n=N();return j.current=n,n}),S=d(function(){var e=function(){return E(!0).start(function(){null==m||m({pauseResume:O,reset:F,start:A,update:P})})};c&&c>0?w.current=setTimeout(e,1e3*c):e(),null==g||g({pauseResume:O,reset:F,update:P})}),O=d(function(){E().pauseResume(),null==b||b({reset:F,start:A,update:P})}),F=d(function(){E().el&&(w.current&&clearTimeout(w.current),E().reset(),null==y||y({pauseResume:O,start:A,update:P}))}),P=d(function(e){E().update(e),null==x||x({pauseResume:O,reset:F,start:A})}),A=d(function(){F(),S()}),C=d(function(e){s&&(e&&F(),S())});return r.useEffect(function(){V.current?o&&C(!0):(V.current=!0,C())},[o,V,C,c,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),r.useEffect(function(){return function(){F()}},[F]),{start:A,pauseResume:O,reset:F,update:P,getCountUp:E}},g=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,i=e.containerProps,s=e.children,u=e.style,c=l(e,g),p=r.useRef(null),f=r.useRef(!1),h=m(a(a({},c),{},{ref:p,startOnMount:"function"!=typeof s||0===e.delay,enableReinitialize:!1})),b=h.start,y=h.reset,x=h.update,v=h.pauseResume,j=h.getCountUp,w=d(function(){b()}),V=d(function(t){e.preserveValue||y(),x(t)}),N=d(function(){if("function"==typeof e.children&&!(p.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}j()});r.useEffect(function(){N()},[N]),r.useEffect(function(){f.current&&V(e.end)},[e.end,V]);var E=n&&e;return(r.useEffect(function(){n&&f.current&&w()},[w,n,E]),r.useEffect(function(){!n&&f.current&&w()},[w,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),r.useEffect(function(){f.current=!0},[]),"function"==typeof s)?s({countUpRef:p,start:b,reset:y,update:x,pauseResume:v,getCountUp:j}):r.createElement("span",o({className:t,ref:p,style:u},i),void 0!==e.start?j().formattingFn(e.start):"")}}},e=>{var t=t=>e(e.s=t);e.O(0,[664,110,585,888,774,179],()=>t(8588)),_N_E=e.O()}]);