const product = [...document.querySelectorAll('.product')];
const productsCart = document.querySelector('.cart__products');
const productValue = [...document.querySelectorAll('.product__quantity-value')];
const productAddBtn = [...document.querySelectorAll('.product__add')];
const productImg = [...document.querySelectorAll('.product__image')];
const controlDec = [...document.querySelectorAll('.product__quantity-control_dec')];
const controlInc = [...document.querySelectorAll('.product__quantity-control_inc')];


controlDec.forEach((dec, i) => {
  dec.addEventListener('click', () => {
    let currentValue = parseInt(productValue[i].textContent);
    if (currentValue > 1) {
      productValue[i].textContent = currentValue - 1;
    }
  });
});

controlInc.forEach((inc, i) => {
  inc.addEventListener('click', () => {
    let currentValue = parseInt(productValue[i].textContent);
    productValue[i].textContent = currentValue + 1;
  });
});

productAddBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const productId = product[i].dataset.id;
    const productImage = productImg[i].getAttribute('src');
    const count = parseInt(productValue[i].textContent);
    const existingProduct = productsCart.querySelector(`.cart__product[data-id="${productId}"]`);

    if (existingProduct) {
      const countElement = existingProduct.querySelector('.cart__product-count');
      const currentCount = parseInt(countElement.textContent);
      countElement.textContent = currentCount + count;
    } else {
      const cartProduct = `
        <div class="cart__product" data-id="${productId}">
          <img class="cart__product-image" src="${productImage}">
          <div class="cart__product-count">${count}</div>
        </div>
      `;
      productsCart.insertAdjacentHTML('beforeend', cartProduct);
    }
  });
});