// hooks for convert english number to persian numbers

const useE2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const useP2e = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const useSp = (number) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join(",");
  return e2p(joinedNumber);
};

// hooks for convert Gregorian date to persian date

const useGregorian2Persian = (date) => {
  const gregorianDate = new Date(date);
  const year = gregorianDate.getFullYear();
  const month = gregorianDate.getMonth() + 1;
  const day = gregorianDate.getDate();
  const dayOfWeek = gregorianDate.getDay();
  const monthName = gregorianDate.toLocaleString("fa-IR", { month: "long" });
  const dayOfWeekName = gregorianDate.toLocaleString("fa-IR", { weekday: "long" });
  const yearPersian = gregorianDate.toLocaleString("fa-IR", { year: "numeric" });
  return `${day} ${monthName} ${yearPersian}`;
};

//  hooks for Calculate Duration days between two time in gregorian
const useCalculateDuration = (startDate, endDate) => {
  const startDateGregorian = new Date(startDate);
  const endDateGregorian = new Date(endDate);
  const duration = endDateGregorian - startDateGregorian;
  const days = duration / (1000 * 60 * 60 * 24);
  return days;
};
export { useE2p, useP2e, useSp , useGregorian2Persian , useCalculateDuration };
