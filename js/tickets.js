//FUNCIÓN QUE HACE "APARECER" EL TICKET/ENTRADA DESPUÉS DE ELEGIR EL SECTOR DEL ESTADIO 
//EN LA PÁGINA "TICKET.HTML"

$(() => {

  if ($("#seccionDos")) {
    $("#seccionDos").click(function () {
      $(".detalleDeCompra2").fadeIn(1500);
      $(".detalleDeCompra").css("display", "none")
    })
  }

  if ($("#seccionUno")) {
    $("#seccionUno").click(function () {
      $(".detalleDeCompra").fadeIn(1500);
      $(".detalleDeCompra2").css("display", "none")
    })
  }

});
