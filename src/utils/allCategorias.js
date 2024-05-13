export const allCategorias = (state) => {
  fetch(url)
  .then(response => response.json())
  .then(data => state(data.categorias));
}