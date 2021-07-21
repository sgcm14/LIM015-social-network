export const notifications = () => {
  const container = document.createElement('div');
  const notas = `
    <p>Notificaciones</p>
  `;
  container.innerHTML = notas;
  return container;
};
