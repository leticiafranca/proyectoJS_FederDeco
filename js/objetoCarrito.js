class carritoObjeto {
    constructor(carrito, espejos) {
        var total = 0
        this.carrito = carrito
        this.espejos = espejos
        this.verCompra = function(detalleCarrito) {
            let resumen = ""    //Hace que no se remuestre los productos en el carrito
            for (let i in this.carrito) { 
                
                for (let j in this.espejos) { 
                    if (this.espejos[j].id === carrito[i]) { 
                    //    debugger
                        resumen += `<tr>
                                       <td><img class="rounded-circle" src="${espejos[i].imagen}" style="width: 60px;"></td>
                                       <td>${espejos[i].modelo}</td>
                                       <td>${espejos[i].precio}</td>
                                   </tr>`
                        total += espejos[j].precio
                        
                    }
                    detalleCarrito.html(resumen) //detalleCarrito.innerHTML = resumen
                }
            }
        }
        this.verTotales = function(detalleTotal){
            let subdetalle = "<tr><td>TOTAL</td><td>"+ this.Total() + "</td></tr>"
            detalleTotal.html(subdetalle) //detalleTotal.innerHTML = subdetalle
        } 
        this.Total = function (){
            return total
        }
    }
}