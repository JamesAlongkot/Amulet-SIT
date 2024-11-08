import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import { formatCurrency } from '../../utils/dateAndCurrencyUtils';
import liveAuctionData from "../../data/liveAution/liveAution.json";
import Counter from "../common/Counter";
function LiveAution1() {
  const { t, i18n } = useTranslation("common");
  const currentLanguage = i18n.language;
  const currencyType = i18n.language === 'th' ? 'THB' : i18n.language === 'zh' ? 'CNY' : 'USD';
  return (
    <div className="live-auction pb-120">
      <img
        alt="image"
        src="assets/images/bg/section-bg.png"
        className="img-fluid section-bg"
      />
      <div className="container position-relative">
        <img
          alt="image"
          src="assets/images/bg/dotted1.png"
          className="dotted1"
        />
        <img
          alt="image"
          src="assets/images/bg/dotted1.png"
          className="dotted2"
        />
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title1">
              <h2>{t('liveAuction')}</h2>
              <p className="mb-0">
                {/* todo: change content */}
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4 mb-60 d-flex justify-content-center">
          {liveAuctionData.map((data) => {
            const { 
              id, 
              image, 
              title: {
              en: titleEn, 
              th: titleTh, 
              zh: titleZh
              }, 
              startingBidPrice: {
              usd: startingUsd,
              thb: startingThb,
              cny: startingCny
              } } = data;

            const formattedStartingBidPrice = formatCurrency(startingUsd, currentLanguage, currencyType);
            return (
              <div key={id} className="col-lg-4 col-md-6 col-sm-10 d-flex">
              <div
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
                className="eg-card auction-card1 wow animate fadeInDown flex-fill"
              >
                <div className="auction-img">
                <img alt="image" src={image} />
                <div className="auction-timer">
                  <div className="countdown" id="timer1">
                  <h4>
                    <Counter formate="counter1" />
                  </h4>
                  </div>
                </div>
                <div className="author-area">
                  <div className="author-emo">
                  <img
                    alt="image"
                    src="assets/images/icons/smile-emo.svg"
                  />
                  {/* todo: change images */}
                  </div>
                  <div className="author-name">
                  <span>by @robatfox</span>
                  </div>
                </div>
                </div>
                <div className="auction-content">
                <h4>
                  <Link href="/auction-details">{
                  currentLanguage === 'en' ? titleEn : currentLanguage === 'th' ? titleTh : titleZh
                  }</Link>
                </h4>
                <p>
                  {t('startingBidPrice')} :{" "}
                  <span>
                  <span>
                    {formattedStartingBidPrice}
                  </span>
                  </span>
                </p>
                <div className="auction-card-bttm">
                  <Link
                  href="/auction-details"
                  className="eg-btn btn--primary btn--sm"
                  >
                  {t('placeBid')}
                  </Link>
                  <div className="share-area">
                  <ul className="social-icons d-flex">
                    <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.twitter.com/">
                      <i className="bx bxl-twitter" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-pinterest" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram" />
                    </a>
                    </li>
                  </ul>
                  <div>
                    <div className="share-btn">
                    <i className="bx bxs-share-alt" />
                    </div>
                  </div>
                  </div>
                </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 text-center">
            <Link
              href="/live-auction"
              className="eg-btn btn--primary btn--md mx-auto"
            >
              {t('viewAll')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveAution1;
