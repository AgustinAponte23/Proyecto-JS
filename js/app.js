// Variables globales
let monto = prompt('Ingrese su monto');
let cantidad = prompt('¿Cuantas cuotas quiere?');

// Calculo de valor de cuotas segun monto y cantidad
function calcular() {
    let resultado = monto / cantidad;

    return resultado;
    
}
document.write("Sus "+ cantidad + " cuotas a pagar" + " tienen un valor de " + " $" + calcular()); 

/* Calculo de cuotas según cantidad del 2 al 3 para panorama del usuario

for (let ingreso = monto ; ingreso ; ingreso / 2) {
    
    return ingreso;

    break;

    if (ingreso === undefined || ingreso === 0) {
       console.log('Ingreso no valido')
    } else{
        document.write(' Ya puede ver las cuotas calculadas en la consola')
    }

    break;
    
}*/










