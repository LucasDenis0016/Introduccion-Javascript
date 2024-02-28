// Destructuring de Objectos

const product = {
    nombreProduct : "Monitor de 20 pulgada",
    precio : 300,
    disponible : true
}

// Forma anterior 
const precioProducto = product.precio;
const nombreProduct =  product.nombreProduct;

// console.log(nombreProduct);
// console.log(precioProducto);




// Destructuring 
const { disponible, precio } = product;


console.log(disponible);
console.log(precio);