// forEach y Map

const carrito = [
    { nombre: 'Monitor', precio: 500 },
     { nombre: 'Pc', precio: 1500  },
     { nombre: 'Iphone', precio: 400  },
     { nombre: 'Audifonos', precio: 110 },
     { nombre: 'Teclado', precio: 400 }
  ];


// ForEach muestra el obj en consola.

carrito.forEach( producto => console.log(producto.nombre));

//Map para nuevo arreglo usamos el map.

carrito.map( producto => console.log(producto.nombre));

