export const navBar = () => {
  const container = document.createElement('nav');

  const template = `
    <ul>
    <li>
     <a href='#/notifications'> Notificaciones </a>
     </li>
     <li>
     <a href='#/home'> Muro Principal </a>
     </li>
     <li>
     <a href='#/profile'> Mi perfil </a>
     </li>
     <li>
     <a href=''> Salir </a>
     </li>
    </ul>
    `;

  container.innerHTML = template;
  return container;
};

export const posts = () => {
  const container = document.createElement('section');

  const template = `
    <button type='button'>Crear nueva publicación</button>
    `;
  container.innerHTML = template;

  return container;
};

// export const mainPost = () => {
//   const container = document.createElement('section');

//   const divName = document.createElement('div');
//   divName.textContent = 'Mi nombre';
//   const spanOptions = document.createElement('span');
//   spanOptions.textContent = '::';
//   const divContentPost = document.createElement('div');
//   divContentPost.textContent = 'Mi contenido aquí';
//   container.appendChild(divName);
//   container.appendChild(spanOptions);
//   container.appendChild(divContentPost);

//   return container;
// };

export const asideAliadas = () => {
  const container = document.createElement('aside');

  const imgAliadas = document.createElement('img');
  imgAliadas.src = 'https://img.europapress.es/fotoweb/fotonoticia_20200907131946_420.jpg';
  const divName = document.createElement('div');
  divName.textContent = 'Nombre';
  const divContentPost = document.createElement('div');
  divContentPost.textContent = 'Mi nombre aquí';
  container.appendChild(divName);
  container.appendChild(imgAliadas);
  container.appendChild(divContentPost);

  return container;
};
