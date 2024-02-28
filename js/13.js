// Unir Dos Objectos con el Spread Operator

const producto = {
    nombreProducto : "Pc Gamer",
    precio : 1500,
    disponible : true
}

const medidas = {
    peso: "70kg",
    medida: "1m"
}


// Unir lo dos objectos

const nuevoProducto = {... producto, ...medidas};
console.log(producto);
console.log(nuevoProducto);