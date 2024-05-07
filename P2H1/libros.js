let libros = [{
        imagen: "https://firebasestorage.googleapis.com/v0/b/p2h1proyect.appspot.com/o/Antes-de-diciembre-libro.jpg?alt=media&token=89ac94c0-2811-4487-9556-e403c885c6a3",
        titulo: "Antes de diciembre",
        autor: "Joana Marcus",
        genero: "Romance",
        descripcion: "En un mundo donde el amor es prohibido, dos almas destinadas luchan por un futuro juntos. Una emocionante historia de amor y suspenso que te mantendrá al borde de tu asiento hasta la última página."
    },
    {
        imagen: "https://firebasestorage.googleapis.com/v0/b/p2h1proyect.appspot.com/o/SIGUE%20MI%20VOZ.jpg?alt=media&token=fa278aac-3eb0-4f3f-b83e-377f77164212",
        titulo: "Sigue mi voz",
        autor: "Ariana Goboy",
        genero: "Romance",
        descripcion: "En un mundo donde las palabras son prohibidas, dos corazones se comunican a través del silencio. Una novela llena de romance y aventuras que te llevará a través de un viaje emocionante y lleno de giros inesperados."
    },
    {
        imagen: "https://firebasestorage.googleapis.com/v0/b/p2h1proyect.appspot.com/o/BOULEVARD.png?alt=media&token=58c7e753-5d1a-4066-bf2e-79e52e4092da",
        titulo: "Boulevard",
        autor: "Flor M. Salvador",
        genero: "Romance",
        descripcion: "Entre las luces de la ciudad, se esconden secretos oscuros. Una historia apasionante que te llevará a través de los altibajos de una relación prohibida en una ciudad llena de secretos."
    },
    {
        imagen: "https://firebasestorage.googleapis.com/v0/b/p2h1proyect.appspot.com/o/las-luces-de-febrero-libro.jpg?alt=media&token=d1dd78d9-f9be-4111-bd30-21680b79ef95",
        titulo: "Las luces de febrero",
        autor: "Joana Marcus",
        genero: "Misterio",
        descripcion: "Cuando las sombras se alargan y el misterio se cierne sobre la ciudad, una investigadora valiente se enfrenta a sus propios demonios. Una historia llena de suspense y giros inesperados."
    },
    {
        imagen: "https://firebasestorage.googleapis.com/v0/b/p2h1proyect.appspot.com/o/FABRICANTE%20DE%20LAGRIMA.jpg?alt=media&token=87ceffcb-0f12-442c-9cbd-60ac8d4b73c8",
        titulo: "Fabricante de lágrimas",
        autor: "Erin Doom",
        genero: "Romance",
        descripcion: "En un mundo donde las emociones son prohibidas, una joven rebelde desafía al sistema en busca de amor y libertad. Una novela cautivadora que te hará reír, llorar y enamorarte."
    },
    {
        imagen: "https://firebasestorage.googleapis.com/v0/b/p2h1proyect.appspot.com/o/7%20Maridos%20de%20Evelyn.jpg?alt=media&token=71cc9ed4-af03-4141-935a-6901017fdd24",
        titulo: "Los siete maridos de Evelyn Hugo",
        autor: "Taylor Jenkins",
        genero: "Misterio",
        descripcion: "Una famosa actriz, siete maridos, un secreto oscuro. ¿Qué estarías dispuesto a sacrificar por la fama y el poder? Una historia intrigante que te mantendrá en vilo hasta el final."
    },
    {
        imagen: "https://firebasestorage.googleapis.com/v0/b/p2h1proyect.appspot.com/o/Ana%20de%20tejas%20verdes.jpeg?alt=media&token=d5d6544f-a7ab-4eeb-8c42-5d681fe1f405",
        titulo: "Ana de Tejas Verdes",
        autor: "Lucy Maud Montgomery",
        genero: "Infantil",
        descripcion: "Acompaña a Ana en sus aventuras por la Isla del Príncipe Eduardo, donde descubrirá la magia de la amistad, el amor y la imaginación. Una historia clásica que encantará a niños y adultos por igual."
    },
    {
        imagen: "https://firebasestorage.googleapis.com/v0/b/p2h1proyect.appspot.com/o/ENCUENTRA%20TU%20PERSONA%20VITAMINA.jpg?alt=media&token=05470a6e-3cd3-4d09-ab78-5ebe2c1e6f3e",
        titulo: "Encuentra tu persona vitamina",
        autor: "Marian Rojas Estapé",
        genero: "Educativo",
        descripcion: "En tiempos de incertidumbre y caos, un viaje hacia el autoconocimiento puede ser tu mejor guía. Descubre cómo potenciar tu bienestar emocional y encontrar tu verdadera esencia."
    }
];

// Función para mostrar los libros
function mostrarLibros() {
    const listaLibros = document.getElementById("listaLibros");
    listaLibros.innerHTML = "";
    libros.forEach((libro, index) => {
        const card = `
        <div class="bg-purple-100 rounded-lg shadow-md overflow-hidden">
            <img src="${libro.imagen}" alt="${libro.titulo}" class="w-full h-64 object-cover">
            <div class="p-4">
                <h2 class="text-lg font-semibold text-gray-800 mb-2">${libro.titulo}</h2>
                <p class="text-gray-600">Autor: ${libro.autor}</p>
                <p class="text-gray-600">Género: ${libro.genero}</p>
                <button onclick="mostrarDescripcion(${index})" class="mt-2 bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Ver descripción
                </button>
                <button onclick="mostrarFormulario(${index})" class="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Editar
                </button>
                <button onclick="eliminarLibro(${index})" class="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Eliminar
                </button>
            </div>
        </div>
    `;
        listaLibros.innerHTML += card;
    });
}

// Función para mostrar el formulario para insertar o modificar libros
function mostrarFormulario(index = null) {
    const formulario = document.getElementById("formularioLibro");
    const botonGuardar = formulario.querySelector("button[type=submit]");
    const tituloFormulario = formulario.querySelector("h2");
    if (index !== null && typeof index === "number") {
        // Editar libro existente
        const libro = libros[index];
        formulario.indiceLibro.value = index; // Corrección: asignar el índice al campo oculto
        formulario.titulo.value = libro.titulo;
        formulario.autor.value = libro.autor;
        formulario.genero.value = libro.genero;
        formulario.descripcion.value = libro.descripcion;
        formulario.imagen.value = libro.imagen;
        botonGuardar.textContent = "Guardar cambios";
        tituloFormulario.textContent = "Editar libro";
    } else {
        // Insertar nuevo libro
        formulario.indiceLibro.value = ""; // Corrección: limpiar el campo oculto
        formulario.reset();
        botonGuardar.textContent = "Guardar";
        tituloFormulario.textContent = "Agregar nuevo libro";
    }
    document.getElementById("modalAgregarModificar").style.display = "flex"; // Corrección: mostrar el modal de agregar/modificar
}


// Función para mostrar u ocultar los botones de modificar y eliminar según el estado de autenticación
function mostrarBotonesAdmin() {
    var usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    if (usuarioAutenticado === 'true') {
        // Si el usuario está autenticado, mostrar los botones de administrador
        document.getElementById('opcionesAdmin').style.display = 'block';
    } else {
        // Si el usuario no está autenticado, ocultar los botones de administrador
        document.getElementById('opcionesAdmin').style.display = 'none';
    }
}

// Llama a la función para mostrar u ocultar los botones de administrador al cargar la página
mostrarBotonesAdmin();



// Función para guardar el libro
function guardarLibro(event) {
    event.preventDefault();
    const formulario = event.target;
    const indice = formulario.indiceLibro.value;
    const titulo = formulario.titulo.value.trim();
    const autor = formulario.autor.value.trim();
    const genero = formulario.genero.value.trim();
    const descripcion = formulario.descripcion.value.trim();
    const imagen = formulario.imagen.value.trim();

    if (titulo && autor && genero && descripcion && imagen) { // Asegúrate de que la imagen también se valida
        const nuevoLibro = {
            titulo: titulo,
            autor: autor,
            genero: genero,
            descripcion: descripcion,
            imagen: imagen
        };

        if (indice !== "") {
            // Modificar libro existente
            libros[indice] = nuevoLibro;
        } else {
            // Agregar nuevo libro
            libros.push(nuevoLibro);
        }

        mostrarLibros();
        cerrarFormulario();
    } else {
        alert("Por favor, completa todos los campos del formulario.");
    }
}

// Función para mostrar la descripción del libro
function mostrarDescripcion(index) {
    const libro = libros[index];
    const descripcion = libro.descripcion;
    const titulo = libro.titulo;
    const descripcionTexto = document.getElementById("descripcionTexto");
    const tituloDescripcion = document.getElementById("tituloDescripcion");
    descripcionTexto.textContent = descripcion;
    tituloDescripcion.textContent = `${titulo}`;
    document.getElementById("descripcionOverlay").style.display = "flex";
}

// Función para cerrar el formulario de inserción/modificación de libros
function cerrarFormulario() {
    document.getElementById("formularioOverlay").style.display = "none";
}

// Función para cerrar la descripción del libro
function cerrarDescripcion() {
    document.getElementById("descripcionOverlay").style.display = "none";
}

// Función para eliminar un libro
function eliminarLibro(index) {
    if (confirm("¿Estás seguro de que quieres eliminar este libro?")) {
        libros.splice(index, 1);
        mostrarLibros();
    }
}

// Mostrar los libros al cargar la página
mostrarLibros();

// Verifica si el usuario ha iniciado sesión
var usuarioAutenticado = localStorage.getItem('usuarioAutenticado');

if (usuarioAutenticado === 'true') {
    // Obtiene el nombre de usuario desde el localStorage
    var nombreUsuario = localStorage.getItem('nombreUsuario');
    // Muestra la imagen de usuario y su nombre
    document.getElementById('nombreUsuario').textContent = nombreUsuario;
    document.getElementById('usuarioInfo').style.display = 'inline'; // Muestra la imagen y el nombre de usuario
    // Oculta el enlace de login
    document.getElementById('loginInfo').style.display = 'none';

    // Agrega el evento de clic para mostrar/ocultar el menú desplegable
    document.getElementById('usuarioContainer').addEventListener('click', function() {
        var menu = document.getElementById('usuarioMenu');
        menu.classList.toggle('hidden');
    });

    // Agrega el evento de clic para cerrar sesión
    document.getElementById('usuarioMenu').addEventListener('click', function() {
        // Limpia la información de inicio de sesión
        localStorage.removeItem('usuarioAutenticado');
        localStorage.removeItem('nombreUsuario');
        // Redirige al usuario a la página de inicio de sesión
        window.location.href = 'login.html';
    });
}