/* const precioOriginal = 100;
const descuento = 15; */

const lista = [
    1,3,4,6,2
]

console.log(Number.half(lista.length))

function precioFinal(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;

    return ( precio * porcentajePrecioConDescuento ) / 100;
} 


function calculaPrecioConDescuento (){
    const precioOriginal = document.getElementById("precio").value
    const descuento = document.getElementById("descuento").value

    const aPagar = precioFinal(precioOriginal,descuento)

    /* alert(aPagar) */
    const result = document.getElementById("pagar")
    result.innerText = "Su precio final " + aPagar + " $"
}