export const notFound = () => {
  const container = document.createElement('div');
  const notas = `
      <p>404!!!!!!!!!</p>
    `;
  container.innerHTML = notas;
  return container;
};
