// SELECCIÓN DE ELEMENTOS
const productosDelStore = document.querySelector(".products");
const productosQueSeAgreganAlCarrito = document.querySelector(".cart-items");
const subtotalDeProductos = document.querySelector(".subtotal");
const cantidadDeProductosSeleccionados = document.querySelector(".total-items-in-cart");




// FUNCIÓN QUE GENERA LOS PRODUCTOS EN EL DOM
function renderProducts() {
  products.forEach((product) => {
    productosDelStore.innerHTML += `
  <div class="card">
  <img class="card-img-top" src="${product.image}" alt="${product.name}">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">£ ${product.price}</p>
    <a href="#" class="btn btn-primary" onclick="addToCart(${product.id})">Add to cart</a>
  </div>
</div>
`;
  });
}
renderProducts();





// ARRAY DEL CARRITO
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();




// AGREGA AL CARRITO
function addToCart(id) {
  // CHEQUEA SI EL PRODUCTO YA EXISTE EN EL CARRITO
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}




// ACTUALIZA EL CARRITO
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // GUARDA EL CARRITO EN EL LOCAL STORAGE 
  localStorage.setItem("CART", JSON.stringify(cart));
}




// CALCULA EL SUBTOTAL DE LOS PRODUCTOS SELECCIONADOS
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalDeProductos.innerHTML = `Subtotal (${totalItems} items): £ ${totalPrice.toFixed(2)}`;
  cantidadDeProductosSeleccionados.innerHTML = totalItems;
}




// PRODUCTOS A COMPRAR
function renderCartItems() {
  productosQueSeAgreganAlCarrito.innerHTML = "";
  cart.forEach((item) => {
    productosQueSeAgreganAlCarrito.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="unit-price">
            £ ${item.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}




// ELIMINAR UN PRODUCTO DEL CARRITO
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}



// AUMENTAR O DISMINUIR UNIDADES DE CADA PRODUCTO
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}



//COMPRUEBA QUE EL USUARIO HAYA ELEGIDO ALGÚN PRODUCTO ANTES DE PROCEDER AL CHECKOUT
var botonProcesarCompra = document.getElementById("procesarCompra");
botonProcesarCompra.addEventListener("click", procederAlCheckout);

function procederAlCheckout() {
  if (cart.length === 0) {
    Swal.fire(
      'OOPS!',
      'You have not selected any product yet!!',
      'error'
    )
  } else {
    window.location = "payment.html";
  }
}