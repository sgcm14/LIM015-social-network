export const constantes = {
  URL_LOGIN: '#/login',
  URL_HOME: '#/home',
  URL_NOTIF: '#/notifications',
  URL_PROFILE: '#/profile',
  TABLA_USUARIO: 'users',
  PHOTO_USER: 'https://firebasestorage.googleapis.com/v0/b/code-girls-cbea3.appspot.com/o/profile.jpg?alt=media&token=11417ffe-9981-4ded-9ce7-2ecc1ae2b56c',
};

/* Recibe un url() y establece la propiedad hash */
export const redirect = (url) => {
  // eje: window.location.hash = '#/home'
  window.location.hash = url;
};
