// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'giselinec' && password === 'admin123') {
        // Almacena un indicador de sesión en localStorage
        localStorage.setItem('usuarioAutenticado', 'true');
        // Almacena el nombre de usuario en localStorage
        localStorage.setItem('nombreUsuario', username);
        // Redirige al usuario a la página principal
        window.location.href = 'libros.html'; // Cambiar a la página principal
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
});