import { navBar, posts, asideAliadas } from '../lib/home.js';
import { login } from '../lib/login.js';
import { profile } from '../lib/profile.js';
import { notifications } from '../lib/notifications.js';
import { notFound } from '../lib/404.js';

const content = document.querySelector('#container');

export const router = (route) => {
  content.innerText = '';
  switch (route) {
    case '':
    case '#':
    case '#/':
    case '#/login':
      return content.appendChild(login());
    case '#/notifications':
      return content.appendChild(notifications());
    case '#/home':
      content.appendChild(navBar());
      content.appendChild(posts());
      content.appendChild(asideAliadas());
      break;
    case '#/profile':
      return content.appendChild(profile());
    default:
      return content.appendChild(notFound());
  }
};
