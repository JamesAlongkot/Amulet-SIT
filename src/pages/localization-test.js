// pages/localization-test.js
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

// Format date based on locale and useAbbrMonth option
function formatDate(date, locale, useAbbrMonth = false) {
  const monthOption = useAbbrMonth ? 'short' : 'long';

  if (locale === 'th-TH') {
    // Get the day, month, and year separately
    const thDate = new Date(date);
    const day = thDate.getDate();
    const month = thDate.toLocaleDateString('th-TH', { month: monthOption });
    const year = thDate.getFullYear() + 543; // Convert to Buddhist Era

    // Return the formatted Thai date in the correct order
    return `${day} ${month} ${year}`;
  }

  // General format for other locales
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: monthOption,
    day: 'numeric',
  }).format(date);
}

// Format currency based on locale and currency type
function formatCurrency(amount, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

export default function LocalizationTestPage() {
  const { i18n, t } = useTranslation();
  const locale = i18n.language === 'en' ? 'en-US' : i18n.language === 'th' ? 'th-TH' : 'zh-CN';
  const currencyType = i18n.language === 'th' ? 'THB' : i18n.language === 'zh' ? 'CNY' : 'USD';

  // Test date and currency values
  const testDate = new Date();
  const formattedDate = formatDate(testDate, locale, true);
  const formattedCurrency = formatCurrency(1000, locale, currencyType);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>{t('common:localizationTest')}</h1>
      <p>
        <strong>{t('common:currentLanguage')}</strong>: {i18n.language}
      </p>
      <p>
        <strong>{t('common:formattedDate')}</strong>: {formattedDate}
      </p>
      <p>
        <strong>{t('common:formattedCurrency')}</strong>: {formattedCurrency}
      </p>
    </div>
  );
}
