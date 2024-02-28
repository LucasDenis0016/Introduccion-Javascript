// Mas metodos de Arrays


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'Pc', precio: 1500  },
    { nombre: 'Iphone', precio: 300  },
    { nombre: 'Audifonos', precio: 110 },
    { nombre: 'Teclado', precio: 100 }
];

// forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
       console.log('Marzo si existe');
    }
});

// Icludes 
let resultado = meses.includes('Marzo');



// Some se usa para arreglo de objecto
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Teclado'
});


// Reduce 
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);



// Filter
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre === 'Iphone'
});
console.log(resultado);
