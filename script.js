function mostrarSeccion(id) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('section');
    secciones.forEach(function (seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección específica
    document.getElementById(id).style.display = 'block';
}
