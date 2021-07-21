export const login = () => {
  const containerLogin = document.createElement('section');
  const figure = document.createElement('figure');
  const main = document.createElement('main');
  const contentFigure = `<img src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg"/>
                        <img src="https://pbs.twimg.com/profile_images/714086375063228416/Rp1kKJce_400x400.jpg"/>`;
  const contentMain = `<form>
                       <p>Introduce tus datos para iniciar sesión</p>
                       <input type="email" placeholder="Correo Electrónico"/><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                       <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                       </svg><br>
                       <input type="password" placeholder="Contraseña"/><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                       <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                       </svg><br>
                       <button type="submit">Iniciar Sesión</button>
                       <hr>
                       <button type="submit">Iniciar Sesión con Google</button>
                       <p>o crea una cuenta nueva</p>
                       <button type="submit">Crear Cuenta</button>
                       </form>`;

  figure.innerHTML = contentFigure;
  main.innerHTML = contentMain;
  containerLogin.appendChild(figure);
  containerLogin.appendChild(main);

  return containerLogin;
};
