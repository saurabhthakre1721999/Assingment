import {
  clearAllCookies,
  getDataFromCookie,
  setDataInCookie,
} from "./cookies.service";

export const getLoggedInProfile = () => {
  try {
    return JSON.parse(getDataFromCookie("profile"));
  } catch (err) {
    return null;
  }
};

export const saveSession = ({ userToken, refreshUserToken, ...profile }) => {
  setDataInCookie("isLoggedIn", true);
  setDataInCookie("userToken", userToken);
  setDataInCookie("refreshUserToken", refreshUserToken);
  setDataInCookie("profile", JSON.stringify(profile));
};

export const clearSession = () => {
  clearAllCookies();
};
