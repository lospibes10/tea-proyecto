(async () => {
    const response = await fetch('http://localhost:4000/session', {
        method: 'GET',
        credentials: 'include' // Importante para enviar las cookies de sesión
    })

    console.log({ response })


    if (response.ok) {
        const data = await response.json();
        document.getElementById('user-name').innerText = data.user.username;
    } else {
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = 'index.html';
    }
})();


// Manejar el cierre de sesión
document.getElementById('logout').addEventListener('click', async () => {
    const response = await fetch('http://localhost:4000/logout', {
        method: 'POST',
        credentials: 'include'
    })
    
    if (!response.ok) {
        throw new Error('Error al cerrar sesión');
    } else {
        window.location.href = 'index.html';
    }
});

const carousel = document.getElementById("carousel");
      const prev = document.getElementById("prev");
      const next = document.getElementById("next");

      let currentIndex = 0;

      prev.addEventListener("click", () => {
        currentIndex =
          currentIndex === 0 ? carousel.children.length - 1 : currentIndex - 1;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      });

      next.addEventListener("click", () => {
        currentIndex =
          currentIndex === carousel.children.length - 1 ? 0 : currentIndex + 1;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      });

