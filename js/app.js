// Variables globales
let monto = prompt('Ingrese su monto');
let cantidad = prompt('¿Cuantas cuotas quiere?');
let operacion = monto / cantidad;

function verificacion() {
    if (monto && cantidad) { // Si monto y cantidad existen hacer el calculo sino error
        let resultadoFinal = "Tus " + cantidad + " cuotas a pagar son de $" + operacion;
        return resultadoFinal;
    }else{
        let err = 'No se pudo calcular';
        return err;
    }
}

console.log(verificacion());










