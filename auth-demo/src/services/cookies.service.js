import Cookies from "js-cookie";
// Set data in cookie
const setDataInCookie = (key, value, options) => {
  Cookies.set(key, value, options);
};

// Get data from cookie
const getDataFromCookie = (key) => {
  return Cookies.get(key);
};

// Clear one cookie
const clearCookie = (key) => {
  Cookies.remove(key);
};

// Clear all cookies
const clearAllCookies = () => {
  const cookies = Object.keys(Cookies.get());
  cookies.forEach((cookie) => Cookies.remove(cookie));
};

export { setDataInCookie, getDataFromCookie, clearCookie, clearAllCookies };
