import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function Topbar() {
  const { t, i18n } = useTranslation('topbar');
  const currentLanguage = i18n?.language;
  const router = useRouter();
  const [flagSrc, setFlagSrc] = useState(`assets/images/icons/flag-${currentLanguage}.png`);

  useEffect(() => {
    console.log('Current Language:', currentLanguage);
    console.log('Translation for followUs:', t('followUs'));
    setFlagSrc(`assets/images/icons/flag-${currentLanguage}.png`);
  }, [currentLanguage, t]);

  const handleLanguageChange = (locale) => {
    i18n.changeLanguage(locale);
    router.replace(router.pathname, router.asPath, { locale });
    setFlagSrc(`assets/images/icons/flag-${locale}.png`);
  };

  return (<>
    <div className="topbar">
      <div className="topbar-left d-flex flex-row align-items-center">
        <h6>{t('followUs')}</h6>
        <ul className="topbar-social-list gap-2">
          <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
          <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
          <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
          <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
        </ul>
      </div>
      {/* <div className="email-area">
        <h6>{t('email')}: <a href="mailto:contact@example.com">contact@example.com</a></h6>
      </div> */}
      <div className="topbar-right">
        <ul className="topbar-right-list">
          <li>
            <span>{t('language')}</span>
            <img src={flagSrc} alt="current language flag" />
            <ul className="topbar-sublist">
              <li onClick={() => handleLanguageChange('en')}>
                <span>{t('english')}</span>
                <img src="assets/images/icons/flag-en.png" alt="English flag" />
              </li>
              <li onClick={() => handleLanguageChange('th')}>
                <span>{t('thai')}</span>
                <img src="assets/images/icons/flag-th.png" alt="Thai flag" />
              </li>
              <li onClick={() => handleLanguageChange('zh')}>
                <span>{t('chinese')}</span>
                <img src="assets/images/icons/flag-zh.png" alt="Chinese flag" />
              </li>
            </ul>
          </li>
          {/* Link for attribution */}
          {/* <a href="https://www.flaticon.com/free-icons/thailand" title="thailand icons">Thailand icons created by amoghdesign - Flaticon</a> */}
          {/* <a href="https://www.flaticon.com/free-icons/chinese-flag" title="chinese flag icons">Chinese flag icons created by Hight Quality Icons - Flaticon</a> */}
          <li>{t('currency')}
            <ul className="topbar-sublist">
              <li><Link href="/login">
              {/* <i className="bi bi-currency-dollar" /> */}
              USD</Link></li>
              <li><Link href="/register">
              {/* <i className="bi bi-currency-euro" /> */}
              THB</Link></li>
              <li><Link href="/register">
              {/* <i className="bi bi-currency-pound" /> */}
              CNY</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </>);
}
export default Topbar;