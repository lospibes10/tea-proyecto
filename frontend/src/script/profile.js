// Variables para los elementos de la imagen de perfil y portada
const fileInputAvatar = document.getElementById('file-input-avatar');
const fileInputCover = document.getElementById('file-input-cover');
const profilePic = document.getElementById('profile-pic');
const coverPhoto = document.getElementById('cover-photo');

// Cargar las imágenes y datos guardados en localStorage al cargar la página
window.addEventListener('load', () => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        profilePic.src = savedImage; // Establece la imagen de perfil
    }

    const savedCoverImage = localStorage.getItem('coverImage');
    if (savedCoverImage) {
        coverPhoto.style.backgroundImage = `url('${savedCoverImage}')`; // Establece la imagen de portada
    }

    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        usernameElement.innerText= savedUsername; // Establece el nombre de usuario
    }

    const savedDescription = localStorage.getItem('userDescription');
    if (savedDescription) {
        descriptionElement.innerText = savedDescription; // Establece la descripción del usuario
    }
});

// Cambia la imagen de perfil cuando se selecciona un archivo
fileInputAvatar.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result; // Muestra la nueva imagen de perfil
            localStorage.setItem('profileImage', e.target.result); // Guarda la imagen en localStorage
        };
        reader.readAsDataURL(file);
    }
});

// Cambia la imagen de portada cuando se selecciona un archivo
fileInputCover.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            coverPhoto.style.backgroundImage = `url('${e.target.result}')`; // Muestra la nueva imagen de portada
            localStorage.setItem('coverImage', e.target.result); // Guarda la imagen en localStorage
        };
        reader.readAsDataURL(file);
    }
});

// Muestra u oculta el formulario de edición
function toggleEditForm() {
    const formContainer = document.getElementById('edit-form-container');
    formContainer.classList.toggle('hidden'); // Alterna la visibilidad del formulario

    // Precargar los datos actuales en el formulario de edición
    document.getElementById('nombre').value = document.getElementById('username').textContent;
    document.getElementById('descripcion').value = document.getElementById('user-description').textContent;
    document.getElementById('telefono').value = document.getElementById('user-phone').textContent;
    document.getElementById('email').value = document.getElementById('user-email').textContent;
}

// Actualiza el perfil con los valores ingresados en el formulario
function updateProfile() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    // Actualizar el contenido del perfil en la página
    document.getElementById('username').textContent = nombre;
    document.getElementById('user-description').textContent = descripcion;
    document.getElementById('user-phone').textContent = telefono;
    document.getElementById('user-email').textContent = email;

    // Ocultar el formulario después de guardar los cambios
    toggleEditForm();
}