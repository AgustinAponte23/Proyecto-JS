
function operacion() {
    let monto = prompt('Ingrese su monto');
    let cantidad = prompt('¿Cuantas cuotas quiere?');
    let resultado = monto/cantidad;

    parseInt(monto, cantidad);

    if (monto <= 10000 && cantidad <= 10) { // Establecer un limite de monto y cantidad

        resultadoFinal = "Sus " + cantidad + " cuotas a pagar tienen un valor de " + " $ " + resultado;
        return resultadoFinal;

    } else {
        alert("No se puede calcular mas de diez cuotas");
    }
}
console.log(operacion());


let pregunta = confirm("¿Desea realizar otro calculo?");

if (pregunta) {
    console.log(operacion());
} else {
    alert("Gracias por usar este simulador");
}

















