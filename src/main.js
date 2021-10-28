// Este es el punto de entrada de tu aplicacion
import { router } from './router/index.routes.js';

const init = () => {
// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyD1jf74_DRYG903CVvK5ij3ESDXbhbI3qc',
    authDomain: 'code-girls-cbea3.firebaseapp.com',
    projectId: 'code-girls-cbea3',
    storageBucket: 'code-girls-cbea3.appspot.com',
    messagingSenderId: '703298018862',
    appId: '1:703298018862:web:82aea256eb03a88bba89bf',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Devuelve la propiedad hash (ejem: #home)
  router(window.location.hash);
  window.addEventListener('hashchange', () => {
    // hashchange-> se ejecuta cuando el fragmento identificador de la URL ha cambiado (ejem: #home)
    router(window.location.hash);
  });
};

// load-> se dispara cuando un recurso y sus recursos dependientes han terminado de cargar
window.addEventListener('load', init);
