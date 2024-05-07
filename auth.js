// auth.js

// Función para verificar si el usuario está autenticado
function verificarAutenticacion() {
    var usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    if (usuarioAutenticado === 'true') {
        var nombreUsuario = localStorage.getItem('nombreUsuario');
        // Mostrar el nombre de usuario en todas las páginas
        document.getElementById('nombreUsuario').textContent = nombreUsuario;
        document.getElementById('usuarioInfo').style.display = 'inline';
        document.getElementById('loginContainer').style.display = 'none'; // Ocultar el botón de inicio de sesión
    } else {
        // Ocultar el nombre de usuario si el usuario no está autenticado
        document.getElementById('usuarioInfo').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'inline'; // Mostrar el botón de inicio de sesión
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('usuarioAutenticado');
    localStorage.removeItem('nombreUsuario');
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = 'libros.html';
}

// Función para inicializar la autenticación en todas las páginas
function inicializarAutenticacion() {
    verificarAutenticacion();
}