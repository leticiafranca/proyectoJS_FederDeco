function mostrarCompra(){
    //debugger
    if (carrito.length == 0){
        carritoVacio.css("display", "block");
        tabladetalle.css("display", "none");
        $("#footModal").hide()
    } else {
        carritoVacio.css("display", "none");
        chango = new carritoObjeto (carrito, ESPEJOS)
        tabladetalle.css("display", "block");
       $("#MostrarCarrito").show()
       chango.verCompra(detalleCarrito)
       chango.verTotales(detalleTotal)
   }
}


function cancelarCompra () {
    carritoVacio.css("display", "block");
    tabladetalle.css("display", "none");
}



function finalizarCompra () {
    carrito =""
    alert ("Gracias por bancar nuestro emprendimiento")
    cancelarCompra()
}




