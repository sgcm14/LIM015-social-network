export const constantes = {
  URL_LOGIN: '#/login',
  URL_HOME: '#/home',
  URL_NOTIF: '#/notifications',
  URL_PROFILE: '#/profile',
  TABLA_USUARIO: 'users',
};

/* Recibe un url() y establece la propiedad hash */
export const redirect = (url) => {
  // eje: window.location.hash = '#/home'
  window.location.hash = url;
};
