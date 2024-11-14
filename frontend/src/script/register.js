document.getElementById('register-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Validar campos obligatorios
    if (!username || !password) {
        document.getElementById('message').innerText = 'Por favor, completa todos los campos.';
        return;
    }

    try {
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, surname, username, password, phone, email })
        });

        const data = await response.json();

        if (!response.ok) {
            // Mostrar mensaje de error específico según el campo duplicado
            if (data.msg === "El username ya está en uso") {
                document.getElementById('message').innerText = 'El nombre de usuario ya está registrado. Por favor, elige otro.';
                document.getElementById('username').classList.add('error');
            } else if (data.msg === "El email ya está en uso") {
                document.getElementById('message').innerText = 'El email ya está registrado. Por favor, utiliza otro.';
                document.getElementById('email').classList.add('error');
            } else {
                document.getElementById('message').innerText = 'Registro fallido. Intenta nuevamente.';
            }
            return;
        }

        // Redireccionar en caso de éxito
        window.location.href = 'home.html';

    } catch (error) {
        document.getElementById('message').innerText = 'Error de conexión. Intenta más tarde.';
    }
});