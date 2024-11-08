import { useRouter } from 'next/router';
import React from 'react';
import CountUp from "react-countup";
import { useTranslation } from 'next-i18next';
function SubCategory() {
  const router = useRouter()
  const currentRouter = router.pathname
  const { t } = useTranslation('header');
  const menuList = [
    t('auction'),
    t('amuletCollection'),
    t('certification'),
    t('photoShop'),
    t('joinMembership'),
    t('news'),
    t('trackParcel'),
    t('joinMerchant')
  ];
  return (
    <div className={currentRouter === "/about" ?"about-us-counter pb-120 pt-120":"about-us-counter pb-80 pt-5"}>
      <div className="container">
        <div className="row g-4 d-flex justify-content-center">
          {menuList.map((menu, index) => (
          <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10">
            <div className={`counter-single text-center d-flex flex-row ${currentRouter === "/" ? "hover-border1" : currentRouter === "/index2" ? "hover-border2" : currentRouter === "/index3" ? "hover-border3" : "hover-border1"} wow animate fadeInDown`} data-wow-duration="1.5s" data-wow-delay="0.2s">
            <div className="coundown d-flex flex-column">
              <p>{menu}</p>
            </div>
            </div>
          </div>
          ))}  
        </div>
      </div>
    </div>

  )
}

export default SubCategory