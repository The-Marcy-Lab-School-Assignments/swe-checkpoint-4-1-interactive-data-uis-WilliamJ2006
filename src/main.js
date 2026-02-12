import { getProducts, getProductById, searchProducts } from './fetch-helpers';
import { renderProducts, renderProductDetails } from './dom-helpers';

const errorMessage = document.querySelector('#error-message');
const ul = document.querySelector('#products-list');
const form = document.querySelector('#search-form');

getProducts().then((products) => {
  errorMessage.textContent = '';
  if (products.error) {
    errorMessage.textContent = products.error.message;
    return;
  }
  renderProducts(products.data);
});

ul.addEventListener('click', (event) => {
  const clickedLi = event.target.closest('li');
  const id = clickedLi.dataset.productId;
  return getProductById(id).then((product) => {
    errorMessage.textContent = '';
    if (product.error) {
      errorMessage.textContent = product.error.message;
      return;
    }
    renderProductDetails(product.data);
  });
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchTerm = form.elements.query.value;
  console.log(searchTerm);
  const products = await searchProducts(searchTerm);
  console.log(products);
  errorMessage.textContent = '';
  if (products.error) {
    errorMessage.textContent = products.error.message;
    return;
  }
  renderProducts(products.data);
  form.reset();
});
