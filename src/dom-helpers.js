export const renderProducts = (products) => {
  const ul = document.querySelector('#products-list');
  const productCount = document.querySelector('#product-count');

  ul.innerHTML = '';
  productCount.textContent = products.length;

  products.forEach((product) => {
    const li = document.createElement('li');
    li.dataset.productId = product.id;
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const price = document.createElement('p');
    img.src = product.thumbnail;
    img.alt = `${product.title} image`;
    h3.textContent = product.title;
    price.textContent = `$${product.price}`;
    li.append(img, h3, price);
    ul.append(li);
  });
};

export const renderProductDetails = (product) => {
  const productDetails = document.querySelector('#product-details');
  const img = document.querySelector('#product-thumbnail');
  const price = document.querySelector('#product-price');
  const title = document.querySelector('#product-title');
  const description = document.querySelector('#product-description');
  const rating = document.querySelector('#product-rating');
  title.textContent = product.title;
  price.textContent = product.price;
  description.textContent = product.description;
  rating.textContent = product.rating;
  img.src = product.thumbnail;
  img.alt = `${product.title} image`;
  productDetails.classList.remove('hidden');
};
