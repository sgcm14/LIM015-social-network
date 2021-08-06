import MockFirebase from 'mock-cloud-firestore';
import {
  getPost, deletePost, getPos, updatePost,
} from '../src/firebase/firestore.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123: {
          post: 'Mi primer post',
        },
        abc125: {
          post: 'Mi segundo post',
        },
      },
    },
  },
};

// Ponemos 'isNaiveSnapshotListenerEnabled: true' para que onSnapshot se dispare en cualquier cambio
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

// Test de la funcion getPost
describe('getPost', () => {
  it('Debería poder obtener el post con id=abc125', () => getPost('abc125').then((dataPost) => {
    const result = dataPost.data();
    // console.log(result); // Obtenemos el post con id = 'abc125'
    expect(result.post).toBe('Mi segundo post');
  }));
});

// Test de la funcion deletePost
describe('deletePost', () => {
  it('Debería poder eliminar el post con id: abc123', (done) => {
    deletePost('abc123').then(() => {
      const callback = (postDoc) => {
        // console.log(postDoc); // Elimino el doc con id = 'abc123'
        const result = postDoc.find((elemento) => elemento.id === 'abc123');
        expect(result).toBe(undefined);
        done();
      };
      getPos(callback);
    });
  });
});

// Test de la funcion updatePost
describe('updatePost', () => {
  it('Debería poder actualizar el post con id: abc125', (done) => {
    updatePost('abc125', { post: 'Post actualizado' }).then(() => {
      const callback = (postDoc) => {
        // console.log(postDoc); // Actualizo el doc con id = 'abc125'
        const result = postDoc.find((elemento) => elemento.id === 'abc125');
        expect(result.post).toBe('Post actualizado');
        done();
      };
      getPos(callback);
    });
  });
});
