import { useEffect } from "react";
import { appWithTranslation } from 'next-i18next'

import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/style.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/assets/js/bootstrap.bundle.min");
  }, []);
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
