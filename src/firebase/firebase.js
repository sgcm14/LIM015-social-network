import { constantes, redirect } from '../lib/utilidades.js';

// Autenticar firebase
function logueo() {
  return firebase.auth();
}

// Solo sirve para login.js
export const estaLogueado = () => {
  // onAuthStateChanged =>Listar para estados de cambio en la autenticación
  logueo().onAuthStateChanged((user) => {
    if (user) {
      // user = true => usuario está autenticado
      console.log('usuario autenticado');
      // constantes.URL_HOME=> '#/home' = url
      // window.location.hash(url) => redirect(url))
      redirect(constantes.URL_HOME);
    }
  });
};

// Para todos los demás casos excepto login.js
export const checkLogin = () => {
  // onAuthStateChanged =>Listar para estados de cambio en la autenticación
  logueo().onAuthStateChanged((user) => {
    if (!user) {
      // user = false => usuario no está autenticado
      console.log('usuario NO autenticado');
      // constantes.URL_HOME=> '#/home' = url
      // window.location.hash(url) => redirect(url))
      redirect(constantes.URL_LOGIN);
    }
  });
};

// Cerrar Sesión
export const cerrarSesion = () => {
  logueo().signOut().then((userCredential) => {
    console.log('se cerró sesión');
    console.log(userCredential);
    // constantes.URL_HOME=> '#/home' = url
    // window.location.hash(url) => redirect(url))
    redirect(constantes.URL_LOGIN);
  });
};

// const auth = logueo();

// Validar Login para Iniciar Sesión con Correo
export const validarLogin = (email, password) => {
  logueo()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('datos de usuario logueado');
      console.log(userCredential);
      // constantes.URL_HOME=> '#/home' = url
      // window.location.hash(url) => redirect(url))
      redirect(constantes.URL_HOME);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const content = document.querySelector('#msjError');
      console.log(errorCode);
      console.log(errorMessage);
      switch (errorCode) {
        case 'auth/wrong-password':
          content.innerText = 'Contraseña incorrecta.';
          break;
        case 'auth/invalid-email':
          content.innerText = 'La dirección de correo electrónico no es válida.';
          break;
        case 'auth/user-not-found':
          content.innerText = 'El usuario no coincide con ninguna credencial.';
          break;
        default:
          content.innerText = errorMessage;
      }
      // return content;
    });
};

// Validar Login para Iniciar Sesión con Google
export const loginConGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  logueo().signInWithPopup(provider)
    .then((result) => {
      console.log('datos de google');
      console.log(result);
      // constantes.URL_HOME=> '#/home' = url
      // window.location.hash(url) => redirect(url))
      redirect(constantes.URL_HOME);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const content = document.querySelector('#msjErrorGoogle');
      switch (errorCode) {
        case 'auth/popup-closed-by-user':
          content.innerText = 'El usuario cerró la ventana emergente sin completar el inicio de sesión en el proveedor.';
          break;
        case 'auth/network-request-failed':
          content.innerText = 'Error al conectarse a la red.';
          break;
        default:
          content.innerText = errorMessage;
      }
      // return content;
    });
};

// Registrar correo para Iniciar Sesión con Correo
export const registrarUsuario = (email, password) => {
  logueo()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('se registro');
      console.log(userCredential);
      const iduser = userCredential.user.uid;
      console.log(`----->>> ${iduser}`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const content = document.querySelector('#msjErrorModal');
      switch (errorCode) {
        case 'auth/weak-password':
          content.innerText = 'La contraseña es demasiado débil.';
          break;
        case 'auth/email-already-in-use':
          content.innerText = 'Ya tenía una cuenta con la dirección de correo electrónico proporcionada.';
          break;
        case 'auth/invalid-email':
          content.innerText = 'La dirección de correo electrónico no es válida.';
          break;
        default:
          content.innerText = errorMessage;
      }
      // return content;
    });
};
