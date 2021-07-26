export const footer = () => {
  const container = document.createElement('div');
  const template = `
        <p>| codegirls 2021°|</p>
      `;
  container.innerHTML = template;
  return container;
};
