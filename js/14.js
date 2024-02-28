// Arreglos o Arrays
const numeros = [10, 20, 30, 40, 50];
console.table(numeros);



const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
console.table(meses);


// Acceder a los valores de un arreglo
console.log(numeros[2]);

// Conocer la extesion de un Arreglo
console.log(meses.length);

// Para recorrer un arreglo
numeros.forEach( function(numero){
    console.log(numero);
});