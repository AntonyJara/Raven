function scrollToSection() {
    // Obtener el elemento de destino por su ID
    var destino = document.getElementById('Information');

    // Hacer el desplazamiento suave hasta el elemento de destino
    destino.scrollIntoView({ behavior: 'smooth' });
}