// Arrow Functions
const sumar2 = (n_1, n_2) => console.log( n_1 + n_2 );

sumar2(25, 30);


const aprendiendo = tecnologia => console.log(`Aprendiendo  ${tecnologia}`);
    
aprendiendo("javascript");




const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'Pc', precio: 1500  },
    { nombre: 'Iphone', precio: 400  },
    { nombre: 'Audifonos', precio: 110 },
    { nombre: 'Teclado', precio: 400 }
];

// forEach
meses.forEach( mes => {
    if(mes == 'Marzo') {
       console.log('Marzo si existe');
    }
});

let resultado;

resultado = carrito.some( producto => producto.nombre === "Teclado");


resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);


resultado = carrito.filter(producto => producto.precio > 400);


resultado = carrito.filter( producto => producto.nombre !== 'Pc');

console.log(resultado);