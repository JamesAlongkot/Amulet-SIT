// Map short locale codes to full locale identifiers
const LOCALE_MAP = {
  en: 'en-US',
  th: 'th-TH',
  zh: 'zh-CN'
};

/**
 * Formats a date according to the given locale.
 * @param {Date} date - The date to format.
 * @param {string} locale - The locale code ('en', 'th', 'zh').
 * @param {boolean} useAbbrMonth - Whether to use abbreviated month names.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date, locale, useAbbrMonth = false) {
  const fullLocale = LOCALE_MAP[locale] || 'en-US'; // Default to 'en-US' if locale is not in the map
  const monthOption = useAbbrMonth ? 'short' : 'long';

  if (fullLocale === 'th-TH') {
    const thDate = new Date(date);
    const day = thDate.getDate();
    const month = thDate.toLocaleDateString('th-TH', { month: monthOption });
    const year = thDate.getFullYear() + 543; // Convert to Buddhist Era

    return `${day} ${month} ${year}`; // Correct order for Thai dates
  }

  return new Intl.DateTimeFormat(fullLocale, {
    year: 'numeric',
    month: monthOption,
    day: 'numeric',
  }).format(date);
}

/**
 * Formats a currency amount according to the given locale and currency type.
 * @param {number} amount - The currency amount to format.
 * @param {string} locale - The locale code ('en', 'th', 'zh').
 * @param {string} currency - The currency code (e.g., 'USD', 'THB', 'CNY').
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency(amount, locale, currency) {
  const fullLocale = LOCALE_MAP[locale] || 'en-US'; // Default to 'en-US' if locale is not in the map
  return new Intl.NumberFormat(fullLocale, {
    style: 'currency',
    currency,
  }).format(amount);
}
