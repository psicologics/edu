document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('whatsappForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;
        const whatsappLink = `https://wa.me/593992804330?text=Hola!%20Soy%20${nombre},%20mi%20teléfono%20es%20${telefono}.%20${mensaje}`;
        window.open(whatsappLink, '_blank');
    });
});
