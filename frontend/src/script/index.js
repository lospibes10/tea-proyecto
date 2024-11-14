document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación básica
    if (!username || !password) {
        document.getElementById('message').innerText = 'Por favor, completa todos los campos.';
        return;
    }

    try {
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            document.getElementById('message').innerText = 'Credenciales inválidas.';
            return;
        }

        const data = await response.json();
        window.location.href = 'home.html';

    } catch (error) {
        document.getElementById('message').innerText = 'Error de conexión. Intenta más tarde.';
    }
});