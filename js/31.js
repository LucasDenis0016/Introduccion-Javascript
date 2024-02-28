// Promises en Javascript

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;


    if(auth) {
        resolve('Usuario Autenticado'); // El promise se cumple
    }else {
        reject('No se pudo iniciar sesion'); // El promise no se cumple
    }
});


usuarioAutenticado
    .then( function(resultado) {
        console.log(resultado)
    })
    .catch( function(error) {
        console.log(error);
    })


// En los promises existen 3 valores
// Pending: se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir