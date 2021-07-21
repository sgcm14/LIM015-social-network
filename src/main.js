// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// import {
//   navBar,
// } from './lib/home.js';

import { router } from './router/index.routes.js';

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

// myFunction();

// const containerHome = document.getElementById('container');

// -------------Barra de navegación--------------------
// containerHome.appendChild(navBar());
