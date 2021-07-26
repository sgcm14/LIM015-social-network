/* eslint-disable object-curly-newline */
import { estaLogueado, loginConGoogle, registrarUsuario, validarLogin } from '../firebase/firebase.js';

export const login = () => {
  estaLogueado(); // si usuario esta autenticado redirige a HOME
  const containerLogin = document.createElement('section');
  const figure = document.createElement('figure');
  const main = document.createElement('main');
  const contentFigure = `<img src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg"/>
                        <img src="https://pbs.twimg.com/profile_images/714086375063228416/Rp1kKJce_400x400.jpg"/>`;
  const contentMain = `<form>
                       <h1>Introduce tus datos para iniciar sesión</h1>
                        <div id="msjError"></div>
                        <input type="email" id ="txtEmail" placeholder="Correo Electrónico" /><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                          </svg><br>
                        <input type="password" id ="txtPassword" placeholder="Contraseña" /><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                          </svg><br>
                       <button type="submit" id="btnLoginEmail" >Iniciar Sesión</button>

                       <hr>
                       <div id="msjErrorGoogle"></div>
                       <button type="submit" id="btnLoginGoogle">Iniciar Sesión con Google</button>

                       <p>o crea una cuenta nueva</p>
                       <button type="submit" id="btnCreateEmail">Crear Cuenta</button>
                        <div id="modal" class="modalContainer">
                          <div class="modal-content">
                            <span class="close">×</span>
                            <h1>Contacta con mas Aliadas</h1>
                            <div id="msjErrorModal"></div>
                            <input type="email" id ="txtEmailRegister" placeholder="Correo Electrónico" /><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                              </svg><br>
                            <input type="password" id ="txtPasswordRegister" placeholder="Contraseña" /><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                              </svg><br>
                            <button  type="submit" id="btnRegister">Crear Cuenta</button>
                          </div>
                        </div>
                       </form>`;

  figure.innerHTML = contentFigure;
  main.innerHTML = contentMain;
  containerLogin.appendChild(figure);
  containerLogin.appendChild(main);
  /*
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyAMDLCdM0Co5r2KQuPGFGsRr0rfQXYhFwg',
    authDomain: 'code-girls-laboratoria.firebaseapp.com',
    projectId: 'code-girls-laboratoria',
    storageBucket: 'code-girls-laboratoria.appspot.com',
    messagingSenderId: '867416364381',
    appId: '1:867416364381:web:943663b57ef7fc0bf104b4',
    measurementId: 'G-SQWJG6X2L0',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Autenticar Firebase */

  /* Constantes que contendrán a los botones */
  const btnLoginEmail = containerLogin.querySelector('#btnLoginEmail');
  const btnLoginGoogle = containerLogin.querySelector('#btnLoginGoogle');
  const btnCreateEmail = containerLogin.querySelector('#btnCreateEmail');
  const btnRegister = containerLogin.querySelector('#btnRegister');

  // Botón para Iniciar Sesión con correo
  btnLoginEmail.addEventListener('click', (event) => {
    event.preventDefault();
    const txtEmail = containerLogin.querySelector('#txtEmail').value;
    const txtPassword = containerLogin.querySelector('#txtPassword').value;
    // Validar Login para Iniciar Sesión con Correo
    validarLogin(txtEmail, txtPassword);
  });

  // Botón para Iniciar Sesión con Google
  btnLoginGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    // Validar Login para Iniciar Sesión con Google
    loginConGoogle();
  });

  // Botón para mostrar el modal de Crear Cuenta
  btnCreateEmail.addEventListener('click', (event) => {
    event.preventDefault();

    if (containerLogin.querySelector('#btnCreateEmail')) {
      // Limpiar inputs y mensajes de Error
      containerLogin.querySelector('#txtEmailRegister').value = '';
      containerLogin.querySelector('#txtPasswordRegister').value = '';
      containerLogin.querySelector('#msjErrorModal').innerText = '';

      const modal = containerLogin.querySelector('#modal');
      // Devuelve una lista de elementos que cumplen con la selección (notación como en CSS)
      const span = document.querySelectorAll('.close')[0];
      // Obtiene una HTMLCollection con los todos los elementos 'body'
      const body = document.getElementsByTagName('body')[0];

      modal.style.display = 'block';
      body.style.position = 'static';
      body.style.height = '100%';
      body.style.overflow = 'hidden';

      span.addEventListener('click', () => {
        modal.style.display = 'none';
        body.style.position = 'inherit';
        body.style.height = 'auto';
        body.style.overflow = 'visible';
      });

      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
          body.style.position = 'inherit';
          body.style.height = 'auto';
          body.style.overflow = 'visible';
        }
      });
    }
  });

  // Botón para Crear Cuenta con correo
  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const txtEmailRegister = containerLogin.querySelector('#txtEmailRegister').value;
    const txtPasswordRegister = containerLogin.querySelector('#txtPasswordRegister').value;
    // Registrar correo para Iniciar Sesión con Correo
    registrarUsuario(txtEmailRegister, txtPasswordRegister);
  });

  /* const userData = auth.child('user').child(authData.uid);
      userData.set({
        email: authData.additionalUserInfo.profile.email,
        name: authData.additionalUserInfo.profile.name,
        photo: authData.additionalUserInfo.profile.picture,
      }); */

  return containerLogin;
};
