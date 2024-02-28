// This hace referencia al mismo objecto

const reservacion = {
    nombre: "Lucas",
    apellido: "Denis",
    total: 8000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: "Denis",
    apellido: "Leonel",
    total: 10000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}


// reservacion.informacion();
// reservacion2.informacion();