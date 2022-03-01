//RENDERIZANDO PRODUCTOS EN LOCAL STORAGE
// FUNCIÓN QUE MUESTRA LOS PRODUCTOS QUE EL USUARIO YA ELIGIÓ EN EL "STORE", MUESTRA EL NOMBRE DE PRODUCTO
//Y LA CANTIDAD DE UNIDADES QUE SELECCIONÓ.

function muestraDetalleDeProductosAPagar() {
  const cart = JSON.parse(localStorage.getItem('CART'))
  $("#tbody2").html(cart.map(item => muestraProductosYaElegidos(item)))
}

const muestraProductosYaElegidos = item => {
  return `
  <p> ${item.name} x ${item.numberOfUnits}</p>
  <p class="productosFinal-desc2">£ ${item.price}</p>
  <p class="productosFinal-desc2"> £ ${item.price * item.numberOfUnits}</p>
`
}

//FUNCIÓN QUE CALCULA LA SUMA TOTAL DE TODAS LAS UNIDADES ELEGIDAS

function calcularElPrecioTotal() {
  const cart = JSON.parse(localStorage.getItem('CART'));
  const total = (cart && cart.length) ?
    cart.reduce((acumulador, item) => {
      acumulador += parseFloat(item.price * item.numberOfUnits)
      return acumulador
    }, 0) :
    0
  $('#total2').append(`<p class="item-total">Total £ ${total.toFixed(2)} </p>`)

}



muestraDetalleDeProductosAPagar()
calcularElPrecioTotal()