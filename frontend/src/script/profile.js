// Función para obtener el token de las cookies
function getTokenFromCookies() {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find(cookie => cookie.startsWith("authToken="));
    return tokenCookie ? tokenCookie.split("=")[1] : null;
}

// Función para decodificar el payload de un JWT
function decodeTokenPayload(token) {
    if (!token) return null;

    const payloadBase64 = token.split(".")[1]; // Extrae la segunda parte
    const payloadJson = atob(payloadBase64); // Decodifica de Base64 a string
    return JSON.parse(payloadJson); // Convierte el string a objeto JSON
}

// Uso
const token = getTokenFromCookies();
const payload = decodeTokenPayload(token);

console.log(payload); // Aquí tienes el contenido decodificado del payload

const userId = payload ? payload.userId : null;
if (!userId) {
    console.error("No se pudo obtener el ID del usuario desde el token");
}

// Elementos de HTML
const profilePicInput = document.getElementById('file-input-avatar');
const coverPhotoInput = document.getElementById('file-input-cover');
const profilePic = document.getElementById('profile-pic');
const coverPhoto = document.getElementById('cover-photo');

async function loadProfilePhoto() {
    try {
        const response = await fetch(`http://localhost:4000/images/${userId}/photo`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const result = await response.json();
            profilePic.src = `${result.data}`;
        } else {
            const result = await response.json();
            console.error("Error al cargar la imagen de perfil", result.message);
            profilePic.src = 'ruta/por/defecto/profile-placeholder.png'; // Placeholder para imagen de perfil
        }
    } catch (error) {
        console.error("Error en la carga de la imagen de perfil:", error);
    }
}

async function loadCoverPhoto() {
    try {
        const response = await fetch(`http://localhost:4000/images/${userId}/front_page`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result); // Esto te ayudará a verificar que la respuesta contiene los datos correctos
            coverPhoto.style.backgroundImage = `url(${result.data})`;

        } else {
            const result = await response.json();
            console.error("Error al cargar la imagen de portada", result.message);
            coverPhoto.style.backgroundImage = 'url(ruta/por/defecto/cover-placeholder.png)'; // Placeholder para portada
        }
    } catch (error) {
        console.error("Error en la carga de la imagen de portada:", error);
    }
}

// Función para subir una imagen al servidor
async function uploadImage(type, file) {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`http://localhost:4000/images/upload/${userId}/${type}`, {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    alert(result.message);

    // Recargar la imagen desde el servidor después de subirla
    if (type === 'profile') {
        loadProfilePhoto();  // Actualiza la imagen de perfil
    } else if (type === 'cover') {
        loadCoverPhoto();  // Actualiza la imagen de portada
    }
}

// Eventos para abrir el selector de archivos
document.querySelector('.boton-avatar').addEventListener('click', () => {
    profilePicInput.click();
});
document.querySelector('.boton-portada').addEventListener('click', () => {
    coverPhotoInput.click();
});

// Eventos para subir la imagen seleccionada
profilePicInput.addEventListener('change', () => {
    const file = profilePicInput.files[0];
    if (file) uploadImage('profile', file);
});
coverPhotoInput.addEventListener('change', () => {
    const file = coverPhotoInput.files[0];
    if (file) uploadImage('cover', file);
});

// Cargar las imágenes al cargar la página
loadProfilePhoto();
loadCoverPhoto();

export function toggleEditForm() {
    const editForm = document.querySelector('.hidden');
    editForm.classList.toggle('hidden');
};

const editButton = document.querySelector('.boton-editar');
editButton.addEventListener('click', toggleEditForm);
