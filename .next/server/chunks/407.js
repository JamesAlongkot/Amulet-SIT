exports.id=407,exports.ids=[407],exports.modules={8485:(e,s,a)=>{"use strict";a.d(s,{Z:()=>r});var l=a(997),i=a(1163);a(6689);var n=a(609),c=a.n(n);let r=function(){let e=(0,i.useRouter)().pathname;return(0,l.jsx)("div",{className:"/about"===e?"about-us-counter pb-120 pt-120":"about-us-counter pb-120",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row g-4 d-flex justify-content-center",children:[(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10",children:(0,l.jsxs)("div",{className:`counter-single text-center d-flex flex-row ${"/"===e?"hover-border1":"/index2"===e?"hover-border2":"/index3"===e?"hover-border3":"hover-border1"} wow animate fadeInDown`,"data-wow-duration":"1.5s","data-wow-delay":"0.2s",children:[(0,l.jsxs)("div",{className:"counter-icon",children:[" ",(0,l.jsx)("img",{alt:"image",src:"assets/images/icons/employee.svg"})," "]}),(0,l.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,l.jsx)("h3",{className:"odometer","data-odometer-final":5400,children:(0,l.jsx)(c(),{end:210,delay:2,duration:5})}),(0,l.jsx)("p",{children:"Happy Customer"})]})]})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10",children:(0,l.jsxs)("div",{className:`counter-single text-center d-flex flex-row ${"/"===e?"hover-border1":"/index2"===e?"hover-border2":"/index3"===e?"hover-border3":"hover-border1"} wow animate fadeInDown`,"data-wow-duration":"1.5s","data-wow-delay":"0.2s",children:[(0,l.jsxs)("div",{className:"counter-icon",children:[" ",(0,l.jsx)("img",{alt:"image",src:"assets/images/icons/review.svg"})," "]}),(0,l.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,l.jsx)("h3",{className:"odometer","data-odometer-final":1250,children:(0,l.jsx)(c(),{end:250,delay:2,duration:5})}),(0,l.jsx)("p",{children:"Good Reviews"})]})]})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10",children:(0,l.jsxs)("div",{className:`counter-single text-center d-flex flex-row ${"/"===e?"hover-border1":"/index2"===e?"hover-border2":"/index3"===e?"hover-border3":"hover-border1"} wow animate fadeInDown`,"data-wow-duration":"1.5s","data-wow-delay":"0.2s",children:[(0,l.jsxs)("div",{className:"counter-icon",children:[" ",(0,l.jsx)("img",{alt:"image",src:"assets/images/icons/smily.svg"})," "]}),(0,l.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,l.jsx)("h3",{className:"odometer","data-odometer-final":4250,children:(0,l.jsx)(c(),{end:150,delay:2,duration:5})}),(0,l.jsx)("p",{children:"Winner Customer"})]})]})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10",children:(0,l.jsxs)("div",{className:`counter-single text-center d-flex flex-row ${"/"===e?"hover-border1":"/index2"===e?"hover-border2":"/index3"===e?"hover-border3":"hover-border1"} wow animate fadeInDown`,"data-wow-duration":"1.5s","data-wow-delay":"0.2s",children:[(0,l.jsxs)("div",{className:"counter-icon",children:[" ",(0,l.jsx)("img",{alt:"image",src:"assets/images/icons/comment.svg"})," "]}),(0,l.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,l.jsx)("h3",{className:"odometer","data-odometer-final":500,children:(0,l.jsx)(c(),{end:550,delay:2,duration:5})}),(0,l.jsx)("p",{children:"New Comments"})]})]})})]})})})}},9270:(e,s,a)=>{"use strict";a.d(s,{Z:()=>o});var l=a(997),i=a(1664),n=a.n(i),c=a(1163),r=a(6689),d=a(1377);let o=function(){let{t:e,i18n:s}=(0,d.useTranslation)("header");s?.language;let[a,i]=(0,r.useState)(!1),[o,t]=(0,r.useState)(!1),h=(0,c.useRouter)().pathname,[x,m]=(0,r.useReducer)(function(e,s){switch(s.type){case"homeOne":return{activeMenu:"homeOne"};case"others":return{activeMenu:"others"};case"news":return{activeMenu:"news"};case"brows":return{activeMenu:"brows"};case"itwork":return{activeMenu:"itwork"};case"about":return{activeMenu:"about"};case"contact":return{activeMenu:"contact"};default:return{activeMenu:""}}},{activeMenu:""}),b=()=>{!1===a||0===a?(i(1),console.log(a)):i(!1)},j=()=>{!1===o||0===o?t(1):t(!1)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:1===a?"mobile-search slide":"mobile-search",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row d-flex justify-content-center",children:[(0,l.jsxs)("div",{className:"col-md-11",children:[(0,l.jsx)("label",{children:e("whatAreYouLookingFor")}),(0,l.jsx)("input",{type:"text",placeholder:e("searchPlaceHolder")})]}),(0,l.jsx)("div",{className:"col-1 d-flex justify-content-end align-items-center",children:(0,l.jsx)("div",{className:"/"===h?"search-cross-btn style-1":"/index2"===h?"search-cross-btn style-2":"/index3"===h?"search-cross-btn style-3":"search-cross-btn style-1",onClick:b,children:(0,l.jsx)("i",{className:"bi bi-x"})})})]})})}),(0,l.jsxs)("header",{className:"/"===h?"header-area style-1":"/index2"===h?"header-area style-2":"/index3"===h?"header-area style-3":"header-area style-1",children:[(0,l.jsx)("div",{className:"header-logo",children:(0,l.jsx)(n(),{href:"/",children:(0,l.jsx)("div",{className:"text-white fw-bold",children:"AMULET MARKET"})})}),(0,l.jsxs)("div",{className:1===o?"main-menu show-menu":"main-menu",children:[(0,l.jsxs)("div",{className:"mobile-logo-area d-lg-none d-flex justify-content-between align-items-center",children:[(0,l.jsx)("div",{className:"mobile-logo-wrap ",children:(0,l.jsx)(n(),{href:"/",children:(0,l.jsx)("img",{alt:"image",src:"/"===h?"assets/images/bg/header-logo.png":"/index2"===h?"assets/images/bg/header-logo2.png":"/index3"===h?"assets/images/bg/header3-logo.png":"assets/images/bg/header-logo.png"})})}),(0,l.jsx)("div",{className:"menu-close-btn",onClick:j,children:(0,l.jsx)("i",{className:"bi bi-x-lg"})})]}),(0,l.jsxs)("ul",{className:"menu-list",children:[(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/",className:"/"===h?"active":"desable",children:e("home")})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/live-auction",className:"/auction"===h?"active":"desable",children:e("auction")})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/how-works",className:"/collection"===h?"active":"desable",children:e("amuletCollection")})}),(0,l.jsxs)("li",{className:"menu-item-has-children",onClick:()=>m({type:"news"}),children:[(0,l.jsx)(n(),{href:"#",className:"/blog"===h||"/blog-details"===h?"drop-down active":"drop-down desable",children:e("newsAndTalks")}),(0,l.jsx)("i",{className:"news"===x.activeMenu?"bx bx-minus dropdown-icon":"bx bx-plus dropdown-icon"}),(0,l.jsxs)("ul",{className:"news"===x.activeMenu?"submenu d-block":"submenu d-xl-block d-none ",children:[(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/blog",className:"/blog"===h?"active":"desible",children:e("news")})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/blog-details",className:"/blog-details"===h?"active":"desible",children:e("talks")})})]})]}),(0,l.jsxs)("li",{className:"menu-item-has-children",onClick:()=>m({type:"others"}),children:[(0,l.jsx)(n(),{href:"#",className:"/auction-details"===h||"/login"===h||"/faq"===h||"/dashboard"===h||"/signup"===h?"drop-down active":"drop-down desable",children:e("others")}),(0,l.jsx)("i",{className:"others"===x.activeMenu?"bx bx-minus dropdown-icon":"bx bx-plus dropdown-icon"}),(0,l.jsxs)("ul",{className:"others"===x.activeMenu?"submenu d-block":"submenu d-xl-block d-none ",children:[(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/join-merchant",className:"/sellerRegistration"===h?"active":"desible",children:e("joinMerchant")})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/certification",className:"/certification"===h?"active":"desible",children:e("certification")})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/parcelTracking",className:"/parcelTracking"===h?"active":"desible",children:e("trackParcel")})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/registration",className:"/registration"===h?"active":"desible",children:e("joinMembership")})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/photoShopAccount",className:"/photoShopAccount"===h?"active":"desible",children:e("photoShop")})})]})]}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/about",className:"/about"===h?"active":"desible",children:e("aboutUs")})})]}),(0,l.jsxs)("div",{className:"d-lg-none d-block",children:[(0,l.jsx)("form",{className:"mobile-menu-form mb-5",children:(0,l.jsxs)("div",{className:"input-with-btn d-flex flex-column",children:[(0,l.jsx)("input",{type:"text",placeholder:"Search here..."}),(0,l.jsx)("button",{type:"submit",className:"/"===h?"eg-btn btn--primary btn--sm":"/index2"==h?"eg-btn btn--primary2 btn--sm":"/index3"===h?"eg-btn btn--primary3 btn--sm":"eg-btn btn--primary btn--sm",children:"Search"})]})}),(0,l.jsx)("div",{className:"hotline two",children:(0,l.jsxs)("div",{className:"hotline-info",children:[(0,l.jsx)("span",{children:"Click To Call"}),(0,l.jsx)("h6",{children:(0,l.jsx)("a",{href:"tel:347-274-8816",children:"+347-274-8816"})})]})})]})]}),"/index2"===h?(0,l.jsxs)("div",{className:"nav-right d-flex align-items-center",children:[(0,l.jsx)("div",{className:"search-btn",onClick:b,children:(0,l.jsx)("i",{className:"bi bi-search"})}),(0,l.jsx)(n(),{href:"/join-merchant",className:"join-btn",children:"Join Merchant"}),(0,l.jsx)("div",{className:"eg-btn btn--primary2 header-btn",children:(0,l.jsx)(n(),{href:"/dashboard",children:"My Account"})}),(0,l.jsx)("div",{className:"mobile-menu-btn d-lg-none d-block",onClick:j,children:(0,l.jsx)("i",{className:"bx bx-menu"})})]}):(0,l.jsxs)("div",{className:"nav-right d-flex align-items-center",children:[(0,l.jsx)("div",{className:"hotline d-xxl-flex d-none"}),(0,l.jsx)("div",{className:"search-btn",onClick:b,children:(0,l.jsx)("i",{className:"bi bi-search"})}),(0,l.jsx)("div",{className:"search-btn",children:(0,l.jsx)(n(),{href:"/",children:(0,l.jsx)("i",{className:"bi bi-heart"})})}),(0,l.jsx)("div",{className:"search-btn",children:(0,l.jsx)(n(),{href:"/",children:(0,l.jsx)("i",{className:"bi bi-bag"})})}),(0,l.jsx)("div",{className:"search-btn",children:(0,l.jsx)(n(),{href:"/",children:(0,l.jsx)("i",{className:"bi bi-bell"})})}),(0,l.jsx)("div",{className:"search-btn",children:(0,l.jsx)(n(),{href:"/login",children:(0,l.jsx)("i",{className:"bi bi-person-circle"})})}),(0,l.jsx)("div",{className:"mobile-menu-btn d-lg-none d-block",onClick:j,children:(0,l.jsx)("i",{className:"bx bx-menu"})})]})]})]})}},9413:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n});var l=a(997);a(6689);var i=a(1377);a(3059),a(8984),a(838),a(3766),a(7563),a(1408),a(8825);let n=(0,i.appWithTranslation)(function({Component:e,pageProps:s}){return(0,l.jsx)(e,{...s})})},3059:()=>{},8984:()=>{},838:()=>{},3766:()=>{},7563:()=>{},8825:()=>{},1408:()=>{}};