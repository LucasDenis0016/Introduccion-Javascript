// For Loop

 for(let i = 0; i < 11; i++ ) {
//    console.log(i);
 }

 for(let i = 0; i <= 100; i++) {
    if( i % 2 === 0 ) {
//        console.log(`El numero ${i} es PAR`);
   } else {
//        console.log(`El Numero ${i} es IMPAR`);
    }
}

 const carrito = [
   { nombre: 'Monitor', precio: 500 },
    { nombre: 'Pc', precio: 1500  },
    { nombre: 'Iphone', precio: 400  },
    { nombre: 'Audifonos', precio: 110 },
    { nombre: 'Teclado', precio: 400 }
 ];
 

 for(let i = 0; i < carrito.length; i++ ) {
    // console.log(carrito[i].nombre);
 }





// While Loop  (Revisa la condicion para que se pueda ejecutar)

 let i = 1; // indic

 while(i < carrito.length) { // condition

//    console.log(carrito[i].nombre)

    i++; // increment
 }





// Do While Loop ( Se ejecuta al menos una vez, aunque la condicion no se cumpla )


let a = 100;

do {
    //console.log(a);



    i++;

} while (i < 10);