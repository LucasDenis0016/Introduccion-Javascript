// Funciones que retornan valores

function sumar(n_1, n_2) {
    return n_1 + n_2;
}

const resultado = sumar(5, 10);

// console.log(resultado);


let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(150);
total = agregarCarrito(900);


// console.log(total);

const totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar con Impuestos es de: ${totalAPagar}`);
