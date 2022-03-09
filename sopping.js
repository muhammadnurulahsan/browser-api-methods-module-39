const displayLocalStorageCart = () => {
  const cart = getCart();
  for (const key in cart) {
    displayProducts(key);
  }
};

const addItem = () => {
  const nameField = document.getElementById("product-name");
  const name = nameField.value;
  if (!name) {
    return;
  }
  // display in the ui
  displayProducts(name);
  // add to local storage
  addProductToCart(name);
  //
  nameField.value = "";
};
const displayProducts = (name) => {
  const ul = document.getElementById("product");
  const li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObject;
  if (cart) {
    cartObject = JSON.parse(cart);
  } else {
    cartObject = {};
  }
  return cartObject;
};

const addProductToCart = (name) => {
  const cart = getCart();
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};

const placeOrder = () => {
  document.getElementById("product").innerHTML = "";
  localStorage.removeItem("cart");
};

displayLocalStorageCart();
