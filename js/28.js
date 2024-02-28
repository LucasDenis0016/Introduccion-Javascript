// POO

//** Object Literal */

const producto = {
    nombre: "Tablet",
    precio: 500
    
}


// Object Constructor

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}


// Crear funciones que solo se utilizan en un objeto en especifico

Cliente.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}


const product2 = new Producto("Monitor HD", 900, true);
const producto3 = new Producto("Celular Samsug", 1000, false);
const producto4 = new Producto("Mochila", 500, true);

const cliente = new Cliente("Lucas", "Denis");





// console.log(product2);
// console.log(product2.formatearProducto() );
// console.log(producto3.formatearProducto() );









