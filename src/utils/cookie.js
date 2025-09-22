import Cookies from "js-cookie";

const setCookie = (tokens) => {
  const { access_token, refresh_token } = tokens;
  const isSecure = window.location.protocol === 'https:';

  if (typeof access_token === 'string' && access_token.trim() !== '') {
    Cookies.set('access_token', access_token, {
      expires: 1, // 1 روز
      path: '/',
      secure: isSecure,
      sameSite: 'Strict'
    });
  }

  if (typeof refresh_token === 'string' && refresh_token.trim() !== '') {
    Cookies.set('refresh_token', refresh_token, {
      expires: 30, // 30 روز
      path: '/',
      secure: isSecure,
      sameSite: 'Strict'
    });
  }
};

const getCookie = (name) => {
  return Cookies.get(name);
};

const deleteCookie = (name) => {
  const isSecure = window.location.protocol === 'https:';
  Cookies.remove(name, {
    path: '/',
    secure: isSecure,
    sameSite: 'Strict'
  });
};

export { setCookie, getCookie, deleteCookie };