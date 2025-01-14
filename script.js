
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío tradicional del formulario

    // Obtiene los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crea el mensaje para WhatsApp
    const texto = `Hola, mi nombre es ${encodeURIComponent(nombre)}. ${encodeURIComponent(mensaje)}`;

    // Construye el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${telefono}?text=${texto}`;

    // Redirige al enlace de WhatsApp
    window.open(whatsappLink, '_blank');
});

