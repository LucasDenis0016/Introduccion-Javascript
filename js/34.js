// Fetch API

async function obtenerEmpleado() {

    const archivo = 'empleados.json';

    const resultado = await fetch(archivo);
    const datos = await resultado.json();

    console.log(datos);
}

obtenerEmpleado();