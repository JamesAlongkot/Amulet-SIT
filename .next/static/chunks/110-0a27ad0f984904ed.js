"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{5498:(e,s,l)=>{l.d(s,{Z:()=>c});var a=l(5893),n=l(1163);l(7294);var i=l(7857);let c=function(){let e=(0,n.useRouter)().pathname;return(0,a.jsx)("div",{className:"/about"===e?"about-us-counter pb-120 pt-120":"about-us-counter pb-120",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row g-4 d-flex justify-content-center",children:[(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10",children:(0,a.jsxs)("div",{className:"counter-single text-center d-flex flex-row ".concat("/"===e?"hover-border1":"/index2"===e?"hover-border2":"/index3"===e?"hover-border3":"hover-border1"," wow animate fadeInDown"),"data-wow-duration":"1.5s","data-wow-delay":"0.2s",children:[(0,a.jsxs)("div",{className:"counter-icon",children:[" ",(0,a.jsx)("img",{alt:"image",src:"assets/images/icons/employee.svg"})," "]}),(0,a.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,a.jsx)("h3",{className:"odometer","data-odometer-final":5400,children:(0,a.jsx)(i.ZP,{end:210,delay:2,duration:5})}),(0,a.jsx)("p",{children:"Happy Customer"})]})]})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10",children:(0,a.jsxs)("div",{className:"counter-single text-center d-flex flex-row ".concat("/"===e?"hover-border1":"/index2"===e?"hover-border2":"/index3"===e?"hover-border3":"hover-border1"," wow animate fadeInDown"),"data-wow-duration":"1.5s","data-wow-delay":"0.2s",children:[(0,a.jsxs)("div",{className:"counter-icon",children:[" ",(0,a.jsx)("img",{alt:"image",src:"assets/images/icons/review.svg"})," "]}),(0,a.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,a.jsx)("h3",{className:"odometer","data-odometer-final":1250,children:(0,a.jsx)(i.ZP,{end:250,delay:2,duration:5})}),(0,a.jsx)("p",{children:"Good Reviews"})]})]})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10",children:(0,a.jsxs)("div",{className:"counter-single text-center d-flex flex-row ".concat("/"===e?"hover-border1":"/index2"===e?"hover-border2":"/index3"===e?"hover-border3":"hover-border1"," wow animate fadeInDown"),"data-wow-duration":"1.5s","data-wow-delay":"0.2s",children:[(0,a.jsxs)("div",{className:"counter-icon",children:[" ",(0,a.jsx)("img",{alt:"image",src:"assets/images/icons/smily.svg"})," "]}),(0,a.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,a.jsx)("h3",{className:"odometer","data-odometer-final":4250,children:(0,a.jsx)(i.ZP,{end:150,delay:2,duration:5})}),(0,a.jsx)("p",{children:"Winner Customer"})]})]})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10",children:(0,a.jsxs)("div",{className:"counter-single text-center d-flex flex-row ".concat("/"===e?"hover-border1":"/index2"===e?"hover-border2":"/index3"===e?"hover-border3":"hover-border1"," wow animate fadeInDown"),"data-wow-duration":"1.5s","data-wow-delay":"0.2s",children:[(0,a.jsxs)("div",{className:"counter-icon",children:[" ",(0,a.jsx)("img",{alt:"image",src:"assets/images/icons/comment.svg"})," "]}),(0,a.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,a.jsx)("h3",{className:"odometer","data-odometer-final":500,children:(0,a.jsx)(i.ZP,{end:550,delay:2,duration:5})}),(0,a.jsx)("p",{children:"New Comments"})]})]})})]})})})}},9259:(e,s,l)=>{l.d(s,{Z:()=>o});var a=l(5893),n=l(1664),i=l.n(n),c=l(1163),r=l(7294),d=l(8276);let o=function(){let{t:e,i18n:s}=(0,d.$G)("header"),l=null==s?void 0:s.language,[n,o]=(0,r.useState)(!1),[t,h]=(0,r.useState)(!1),m=(0,c.useRouter)().pathname,[x,b]=(0,r.useReducer)(function(e,s){switch(s.type){case"homeOne":return{activeMenu:"homeOne"};case"others":return{activeMenu:"others"};case"news":return{activeMenu:"news"};case"brows":return{activeMenu:"brows"};case"itwork":return{activeMenu:"itwork"};case"about":return{activeMenu:"about"};case"contact":return{activeMenu:"contact"};default:return{activeMenu:""}}},{activeMenu:""});(0,r.useEffect)(()=>{console.log("Current Language:",l),console.log("Translation for home:",e("home"))},[l,e]);let u=()=>{!1===n||0===n?(o(1),console.log(n)):o(!1)},j=()=>{!1===t||0===t?h(1):h(!1)};(0,r.useEffect)(()=>(window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}));let v=e=>{let s=document.querySelector(".header-area");window.scrollY>=20?null==s||s.classList.add("sticky"):(null==s?void 0:s.classList)?null==s||s.classList.remove("sticky"):null==s||s.classList.add("sticky")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:1===n?"mobile-search slide":"mobile-search",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row d-flex justify-content-center",children:[(0,a.jsxs)("div",{className:"col-md-11",children:[(0,a.jsx)("label",{children:e("whatAreYouLookingFor")}),(0,a.jsx)("input",{type:"text",placeholder:e("searchPlaceHolder")})]}),(0,a.jsx)("div",{className:"col-1 d-flex justify-content-end align-items-center",children:(0,a.jsx)("div",{className:"/"===m?"search-cross-btn style-1":"/index2"===m?"search-cross-btn style-2":"/index3"===m?"search-cross-btn style-3":"search-cross-btn style-1",onClick:u,children:(0,a.jsx)("i",{className:"bi bi-x"})})})]})})}),(0,a.jsxs)("header",{className:"/"===m?"header-area style-1":"/index2"===m?"header-area style-2":"/index3"===m?"header-area style-3":"header-area style-1",children:[(0,a.jsx)("div",{className:"header-logo",children:(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("div",{className:"text-white fw-bold",children:"AMULET MARKET"})})}),(0,a.jsxs)("div",{className:1===t?"main-menu show-menu":"main-menu",children:[(0,a.jsxs)("div",{className:"mobile-logo-area d-lg-none d-flex justify-content-between align-items-center",children:[(0,a.jsx)("div",{className:"mobile-logo-wrap ",children:(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("img",{alt:"image",src:"/"===m?"assets/images/bg/header-logo.png":"/index2"===m?"assets/images/bg/header-logo2.png":"/index3"===m?"assets/images/bg/header3-logo.png":"assets/images/bg/header-logo.png"})})}),(0,a.jsx)("div",{className:"menu-close-btn",onClick:j,children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})]}),(0,a.jsxs)("ul",{className:"menu-list",children:[(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/",className:"/"===m?"active":"desable",children:e("home")})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/live-auction",className:"/auction"===m?"active":"desable",children:e("auction")})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/how-works",className:"/collection"===m?"active":"desable",children:e("amuletCollection")})}),(0,a.jsxs)("li",{className:"menu-item-has-children",onClick:()=>b({type:"news"}),children:[(0,a.jsx)(i(),{href:"#",className:"/blog"===m||"/blog-details"===m?"drop-down active":"drop-down desable",children:e("newsAndTalks")}),(0,a.jsx)("i",{className:"news"===x.activeMenu?"bx bx-minus dropdown-icon":"bx bx-plus dropdown-icon"}),(0,a.jsxs)("ul",{className:"news"===x.activeMenu?"submenu d-block":"submenu d-xl-block d-none ",children:[(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/blog",className:"/blog"===m?"active":"desible",children:e("news")})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/blog-details",className:"/blog-details"===m?"active":"desible",children:e("talks")})})]})]}),(0,a.jsxs)("li",{className:"menu-item-has-children",onClick:()=>b({type:"others"}),children:[(0,a.jsx)(i(),{href:"#",className:"/auction-details"===m||"/login"===m||"/faq"===m||"/dashboard"===m||"/signup"===m?"drop-down active":"drop-down desable",children:e("others")}),(0,a.jsx)("i",{className:"others"===x.activeMenu?"bx bx-minus dropdown-icon":"bx bx-plus dropdown-icon"}),(0,a.jsxs)("ul",{className:"others"===x.activeMenu?"submenu d-block":"submenu d-xl-block d-none ",children:[(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/join-merchant",className:"/sellerRegistration"===m?"active":"desible",children:e("joinMerchant")})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/certification",className:"/certification"===m?"active":"desible",children:e("certification")})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/parcelTracking",className:"/parcelTracking"===m?"active":"desible",children:e("trackParcel")})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/registration",className:"/registration"===m?"active":"desible",children:e("joinMembership")})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/photoShopAccount",className:"/photoShopAccount"===m?"active":"desible",children:e("photoShop")})})]})]}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/about",className:"/about"===m?"active":"desible",children:e("aboutUs")})})]}),(0,a.jsxs)("div",{className:"d-lg-none d-block",children:[(0,a.jsx)("form",{className:"mobile-menu-form mb-5",children:(0,a.jsxs)("div",{className:"input-with-btn d-flex flex-column",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search here..."}),(0,a.jsx)("button",{type:"submit",className:"/"===m?"eg-btn btn--primary btn--sm":"/index2"==m?"eg-btn btn--primary2 btn--sm":"/index3"===m?"eg-btn btn--primary3 btn--sm":"eg-btn btn--primary btn--sm",children:"Search"})]})}),(0,a.jsx)("div",{className:"hotline two",children:(0,a.jsxs)("div",{className:"hotline-info",children:[(0,a.jsx)("span",{children:"Click To Call"}),(0,a.jsx)("h6",{children:(0,a.jsx)("a",{href:"tel:347-274-8816",children:"+347-274-8816"})})]})})]})]}),"/index2"===m?(0,a.jsxs)("div",{className:"nav-right d-flex align-items-center",children:[(0,a.jsx)("div",{className:"search-btn",onClick:u,children:(0,a.jsx)("i",{className:"bi bi-search"})}),(0,a.jsx)(i(),{href:"/join-merchant",className:"join-btn",children:"Join Merchant"}),(0,a.jsx)("div",{className:"eg-btn btn--primary2 header-btn",children:(0,a.jsx)(i(),{href:"/dashboard",children:"My Account"})}),(0,a.jsx)("div",{className:"mobile-menu-btn d-lg-none d-block",onClick:j,children:(0,a.jsx)("i",{className:"bx bx-menu"})})]}):(0,a.jsxs)("div",{className:"nav-right d-flex align-items-center",children:[(0,a.jsx)("div",{className:"hotline d-xxl-flex d-none"}),(0,a.jsx)("div",{className:"search-btn",onClick:u,children:(0,a.jsx)("i",{className:"bi bi-search"})}),(0,a.jsx)("div",{className:"search-btn",children:(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("i",{className:"bi bi-heart"})})}),(0,a.jsx)("div",{className:"search-btn",children:(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("i",{className:"bi bi-bag"})})}),(0,a.jsx)("div",{className:"search-btn",children:(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("i",{className:"bi bi-bell"})})}),(0,a.jsx)("div",{className:"search-btn",children:(0,a.jsx)(i(),{href:"/login",children:(0,a.jsx)("i",{className:"bi bi-person-circle"})})}),(0,a.jsx)("div",{className:"mobile-menu-btn d-lg-none d-block",onClick:j,children:(0,a.jsx)("i",{className:"bx bx-menu"})})]})]})]})}}}]);