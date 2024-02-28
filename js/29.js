// Classes 


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
    obtenerPrecio(){
        console.log(this.precio);
    }
}


const producto = new Producto('TV SAMSUNG', 1500);
const producto2 = new Producto('Celular IPHONE', 2500);

// Herencia

class Libro  extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto() } y su Isbn es ${this.isbn}`;
    }
    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }
}

const libro = new Libro("Javascript la revolucion", 1250, '2312332433232');

// console.log(libro.formatearProducto() );
// console.log(libro.obtenerPrecio() );
// console.log(producto.formatearProducto() );
 