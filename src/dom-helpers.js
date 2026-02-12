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
    price.textContent = product.price;
    li.append(img, h3, price);
    ul.append(li);
  });
};

export const renderProductDetails = (product) => {
  const productDetails = document.querySelector('#product-details');
  productDetails.innerHTML = '<h2 id="product-title">Essence Mascara Lash Princess</h2> <img src="" alt="" id="product-thumbnail"> <p>Price: $<span id="product-price"></span></p> <p id="product-description">The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</p> <p>Rating: <span id="product-rating"></span> / 5</p>';
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
