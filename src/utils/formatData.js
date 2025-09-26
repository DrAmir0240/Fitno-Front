import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });

const formatAmount = (amount) => {
  return amount?.toLocaleString("fa-IR") + " تومان";
};

const formatDate = (date) => {
  if (!date) return "";
  return moment(date).format("jD jMMMM jYYYY - HH:mm");
};

function formatToJalali(gregorianDate) {
  if (!gregorianDate) return '-';
  return moment(gregorianDate).format('jYYYY/jMM/jDD');
}


export { formatDate, formatToJalali , formatAmount};