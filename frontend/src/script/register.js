document.getElementById('register-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;


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
            body: JSON.stringify({name, surname, username, password, phone, email})
        });

        if (!response.ok) {
            document.getElementById('message').innerText = 'Registro fallido. Intenta nuevamente.';
            return;
        }

        const data = await response.json();
        window.location.href = 'home.html';

    } catch (error) {
        document.getElementById('message').innerText = 'Error de conexión. Intenta más tarde.';
    }
});