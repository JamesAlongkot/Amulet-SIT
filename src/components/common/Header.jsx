import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";
import { useTranslation } from 'next-i18next';

function Header() {
  const { t, i18n } = useTranslation('header');
  const currentLanguage = i18n?.language;
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();
  const currentRouter = router.pathname;
  /*---------Using reducer mange the active or inactive menu----------*/
  const initialState = { activeMenu: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('Current Language:', currentLanguage);
    console.log('Translation for home:', t('home'));
  }, [currentLanguage, t]);

  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return { activeMenu: "homeOne" };
      case "others":
        return { activeMenu: "others" };
      case "news":
        return { activeMenu: "news" };
      case "brows":
        return { activeMenu: "brows" };
      case "itwork":
        return { activeMenu: "itwork" };
      case "about":
        return { activeMenu: "about" };
      case "contact":
        return { activeMenu: "contact" };
      default:
        return { activeMenu: "" };
    }
  }
  /*-----------searchbar full screen events-----------*/ 
  const hanldeSearchFullScreen = () => {
    if (search === false || search === 0) {
      setSearch(1);
      console.log(search);
    } else {
      setSearch(false);
    }
  };
  /*-----------mobile menu events-----------*/ 
  const handleSidbarMenu = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };
  /*-----------Sticky Menu Area-----------*/ 
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /*----------- Method that will fix header after a specific scrollable -----------*/
  const isSticky = (e) => {
    const header = document.querySelector(".header-area");
    const scrollTop = window.scrollY;
    scrollTop >= 20
      ? header?.classList.add("sticky")
      : header?.classList
      ? header?.classList.remove("sticky")
      : header?.classList.add("sticky");
  };

  return (<>
    <div className={search === 1 ? "mobile-search slide" : "mobile-search"}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-11">
            <label>{t('whatAreYouLookingFor')}</label>
            <input
              type="text"
              placeholder={t('searchPlaceHolder')}
            />
          </div>
          <div className="col-1 d-flex justify-content-end align-items-center">
            <div
              className={
               
                currentRouter === "/"
                  ? "search-cross-btn style-1"
                  : currentRouter === "/index2"
                  ? "search-cross-btn style-2"
                  : currentRouter === "/index3"
                  ? "search-cross-btn style-3"
                  : "search-cross-btn style-1"
              }
              onClick={hanldeSearchFullScreen}
            >
              <i className="bi bi-x" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <header
      className={
        currentRouter === "/"
          ? "header-area style-1"
          : currentRouter === "/index2"
          ? "header-area style-2"
          : currentRouter === "/index3"
          ? "header-area style-3"
          : "header-area style-1"
      }
    >
      <div className="header-logo">
        <Link href="/">
          {/* todo: change logo */}
          {/* different page base logo */}
          {/* <img
            alt="image"
            src={
              currentRouter === "/"
                ? "assets/images/bg/header-logo.png"
                : currentRouter === "/index2"
                ? "assets/images/bg/header-logo2.png"
                : currentRouter === "/index3"
                ? "assets/images/bg/header3-logo.png"
                : "assets/images/bg/header-logo.png"
            }
          /> */}
          <div className="text-white fw-bold">AMULET MARKET</div>

        </Link>
      </div>
      <div className={sidebar === 1 ? "main-menu show-menu" : "main-menu"}>
        <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
          <div className="mobile-logo-wrap ">
            <Link href="/">

              <img
                alt="image"
                src={
                   /*diffrent page base logo*/ 
                  currentRouter === "/"
                    ? "assets/images/bg/header-logo.png"
                    : currentRouter === "/index2"
                    ? "assets/images/bg/header-logo2.png"
                    : currentRouter === "/index3"
                    ? "assets/images/bg/header3-logo.png"
                    : "assets/images/bg/header-logo.png"
                }
              />

            </Link>
          </div>
          <div className="menu-close-btn" onClick={handleSidbarMenu}>
            <i className="bi bi-x-lg" />
          </div>
        </div>
        <ul className="menu-list">
          {/* <li
            className="menu-item-has-children"
            onClick={() => dispatch({ type: "homeOne" })}
          >
            <Link
              href="#"
              className={
                currentRouter === "/" ||
                currentRouter === "/index2" ||
                currentRouter === "/index3"
                  ? "drop-down active"
                  : "drop-down desable"
              }>
              
                Home
              
            </Link>
            <i
              className={
                state.activeMenu === "homeOne"
                  ? "bx bx-minus dropdown-icon"
                  : "bx bx-plus dropdown-icon"
              }
            />
            <ul
              className={
                state.activeMenu === "homeOne"
                  ? "submenu d-block"
                  : "submenu d-xl-block d-none "
              }
            >
              <li>
                <Link href="/" className={currentRouter === "/" ? "active" : "desible"}>
                  
                    Home 1
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/index2"
                  className={
                    currentRouter === "/index2" ? "active" : "desible"
                  }>
                  
                    Home 2
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/index3"
                  className={
                    currentRouter === "/index3" ? "active" : "desible"
                  }>
                  
                    Home 3
                  
                </Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link
              href="/"
              className={currentRouter === "/" ? "active" : "desable"}>
              
                {t('home')}
              
            </Link>
          </li>
          <li>
            <Link
              href="/live-auction"
              className={currentRouter === "/auction" ? "active" : "desable"}>
              
                {t('auction')}
              
            </Link>
          </li>
          <li>
            <Link
              href="/how-works"
              className={
                currentRouter === "/collection" ? "active" : "desable"
              }>
              
                {t('amuletCollection')}
              
            </Link>
          </li>
          <li
            className="menu-item-has-children"
            onClick={() => dispatch({ type: "news" })}
          >
            <Link
              href="#"
              className={
                currentRouter === "/blog" ||
                currentRouter === "/blog-details"
                  ? "drop-down active"
                  : "drop-down desable"
              }>
              
                {t('newsAndTalks')}
              
            </Link>
            <i
              className={
                state.activeMenu === "news"
                  ? "bx bx-minus dropdown-icon"
                  : "bx bx-plus dropdown-icon"
              }
            />
            <ul
              className={
                state.activeMenu === "news"
                  ? "submenu d-block"
                  : "submenu d-xl-block d-none "
              }
            >
              <li>
                <Link
                  href="/blog"
                  className={
                    currentRouter === "/blog" ? "active" : "desible"
                  }>
                  
                    {t('news')}
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/blog-details"
                  className={
                    currentRouter === "/blog-details" ? "active" : "desible"
                  }>
                  
                    {t('talks')}
                  
                </Link>
              </li>
            </ul>
          </li>
          <li
            className="menu-item-has-children"
            onClick={() => dispatch({ type: "others" })}
          >
            <Link
              href="#"
              className={
                currentRouter === "/auction-details" ||
                currentRouter === "/login" ||
                currentRouter === "/faq" ||
                currentRouter === "/dashboard" ||
                currentRouter === "/signup"
                  ? "drop-down active"
                  : "drop-down desable"
              }>
              
                {t('others')}
              
            </Link>
            <i
              className={
                state.activeMenu === "others"
                  ? "bx bx-minus dropdown-icon"
                  : "bx bx-plus dropdown-icon"
              }
            />
            <ul
              className={
                state.activeMenu === "others"
                  ? "submenu d-block"
                  : "submenu d-xl-block d-none "
              }
            >
              <li>
                <Link
                  href="/join-merchant"
                  className={
                    currentRouter === "/sellerRegistration" ? "active" : "desible"
                  }>
                  
                    {t('joinMerchant')}
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/certification"
                  className={
                    currentRouter === "/certification" ? "active" : "desible"
                  }>
                  
                    {t('certification')}
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/parcelTracking"
                  className={
                    currentRouter === "/parcelTracking" ? "active" : "desible"
                  }>
                  
                    {t('trackParcel')}
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/registration"
                  className={
                    currentRouter === "/registration" ? "active" : "desible"
                  }>
                  
                    {t('joinMembership')}
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/photoShopAccount"
                  className={
                    currentRouter === "/photoShopAccount" ? "active" : "desible"
                  }>
                  
                    {t('photoShop')}
                  
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/auction-details"
                  className={
                    currentRouter === "/auction-details" ? "active" : "desible"
                  }>
                  
                    Auction Details
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className={
                    currentRouter === "/faq" ? "active" : "desible"
                  }>
                  
                    Faq
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className={
                    currentRouter === "/dashboard" ? "active" : "desible"
                  }>
                  
                    Dashboard
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className={
                    currentRouter === "/login" ? "active" : "desible"
                  }>
                  
                    Login
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className={
                    currentRouter === "/signup" ? "active" : "desible"
                  }>
                  
                    Sign Up
                  
                </Link>
              </li>
              <li>
                <Link href="/404">
                  404
                </Link>
              </li> */}
            </ul>
          </li>
          <li>
            <Link
              href="/about"
              className={
                currentRouter === "/about" ? "active" : "desible"
              }>
              
                {t('aboutUs')}
              
            </Link>
          </li>
        </ul>
        {/* mobile-search-area */}
        <div className="d-lg-none d-block">
          <form className="mobile-menu-form mb-5">
            <div className="input-with-btn d-flex flex-column">
              <input type="text" placeholder="Search here..." />
              <button
                type="submit"
                className={
                  currentRouter === "/"
                    ? "eg-btn btn--primary btn--sm"
                    : currentRouter == "/index2"
                    ? "eg-btn btn--primary2 btn--sm"
                    : currentRouter === "/index3"
                    ? "eg-btn btn--primary3 btn--sm"
                    : "eg-btn btn--primary btn--sm"
                }
              >
                Search
              </button>
            </div>
          </form>
          <div className="hotline two">
            <div className="hotline-info">
              <span>Click To Call</span>
              <h6>
                <a href="tel:347-274-8816">+347-274-8816</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {currentRouter === "/index2" ? (
        <div className="nav-right d-flex align-items-center">
          <div className="search-btn" onClick={hanldeSearchFullScreen}>
            <i className="bi bi-search"></i>
          </div>
          <Link href="/join-merchant" className="join-btn">
            Join Merchant
          </Link>
          <div className="eg-btn btn--primary2 header-btn">
            <Link href="/dashboard">
              My Account
            </Link>
          </div>
          <div
            className="mobile-menu-btn d-lg-none d-block"
            onClick={handleSidbarMenu}
          >
            <i className="bx bx-menu"></i>
          </div>
        </div>
      ) : (
        <div className="nav-right d-flex align-items-center">
          <div className="hotline d-xxl-flex d-none">
            {/* <div className="hotline-icon">
              <img alt="image" src="assets/images/icons/header-phone.svg" />
            </div>
            <div className="hotline-info">
              <span>Click To Call</span>
              <h6>
                <a href="tel:347-274-8816">+347-274-8816</a>
              </h6>
            </div> */}
          </div>
          <div className="search-btn" onClick={hanldeSearchFullScreen}>
            <i className="bi bi-search" />
          </div>
          <div className="search-btn">
            <Link href="/">
              <i className="bi bi-heart"></i>
            </Link>
          </div>
          <div className="search-btn">
            <Link href="/">
              <i className="bi bi-bag"></i>
            </Link>
          </div>
          <div className="search-btn">
            <Link href="/">
              <i className="bi bi-bell"></i>
            </Link>
          </div>
          <div className="search-btn">
            <Link href="/login">
              <i className="bi bi-person-circle"></i>
            </Link>
          </div>
          <div
            className="mobile-menu-btn d-lg-none d-block"
            onClick={handleSidbarMenu}
          >
            <i className="bx bx-menu" />
          </div>
        </div>
      )}
    </header>
  </>);
}

export default Header;
