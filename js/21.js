// Metodos de Propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`);
    },
    pausar : function() {
        console.log("Pausando...");
    },
    crearPlayList : function(nombre) {
        console.log(`Creando la playList: ${nombre}`)
    },
    reproducirPlayList : function(nombre) {
        console.log(`Reproduciendo la playlist : ${nombre}`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('Heavy Metal');
reproductor.reproducirPlayList('Heavy Metal');
