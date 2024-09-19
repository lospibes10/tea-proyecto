/* / Selecciona todas las imágenes con la clase "pictograma"
const pictogramas = document.querySelectorAll('.pictograma');
// Selecciona el elemento donde se mostrará el resultado
const resultado = document.getElementById('resultado');

// Añade un evento "click" a cada pictograma
pictogramas.forEach(pictograma => {
    pictograma.addEventListener('click', () => {
        // Obtiene el valor de la palabra desde el atributo "data-palabra"
        const palabra = pictograma.getAttribute('data-palabra');
        // Obtiene el texto actual del área de resultado
        const textoActual = resultado.innerText;
        // Si ya hay texto, añade la palabra, si no, establece la palabra
        resultado.innerText = textoActual ? textoActual + ' ' + palabra : palabra;
    });
});
*/

const pictogramas = document.querySelectorAll('.pictograma');
const resultado = document.getElementById('resultado');
const botonConfirmar = document.getElementById('confirmar');
const botonBorrarTodo = document.getElementById('borrarTodo');
const botonBorrarUltima = document.getElementById('borrarUltima');

// Almacena las palabras seleccionadas
let palabrasSeleccionadas = [];

// Función para actualizar el área de resultado
function actualizarResultado() {
    // Limpia el contenido del área de resultado
    resultado.innerHTML = '';
    // Recorre las palabras seleccionadas y crea elementos 'span' que se pueden arrastrar
    palabrasSeleccionadas.forEach((palabra, index) => {
        const span = document.createElement('span');
        span.innerText = palabra;
        span.setAttribute('draggable', 'true');
        span.setAttribute('data-index', index);

        // Añadir eventos para drag & drop
        span.addEventListener('dragstart', dragStart);
        span.addEventListener('dragover', dragOver);
        span.addEventListener('drop', drop);
        span.addEventListener('dragenter', dragEnter);
        span.addEventListener('dragleave', dragLeave);

        resultado.appendChild(span);
    });
}

// Función para manejar el inicio del arrastre
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.getAttribute('data-index'));
    e.target.classList.add('dragging');
}

// Función para permitir el arrastre sobre otros elementos
function dragOver(e) {
    e.preventDefault();
}

// Función que se llama cuando el arrastre es soltado
function drop(e) {
    e.preventDefault();
    const fromIndex = e.dataTransfer.getData('text/plain');
    const toIndex = e.target.getAttribute('data-index');

    // Reordenar las palabras seleccionadas
    const palabraMovida = palabrasSeleccionadas.splice(fromIndex, 1)[0];
    palabrasSeleccionadas.splice(toIndex, 0, palabraMovida);

    // Actualizar la interfaz
    actualizarResultado();
}

// Añadir estilo visual cuando el arrastre entra en un elemento
function dragEnter(e) {
    e.target.classList.add('drag-over');
}

// Quitar estilo visual cuando el arrastre sale de un elemento
function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

// Evento de clic para los pictogramas
pictogramas.forEach(pictograma => {
    pictograma.addEventListener('click', () => {
        const palabra = pictograma.getAttribute('data-palabra');
        palabrasSeleccionadas.push(palabra);
        actualizarResultado();
    });
});

// Evento para confirmar la frase
botonConfirmar.addEventListener('click', () => {
    if (palabrasSeleccionadas.length > 0) {
        alert('Frase confirmada: ' + palabrasSeleccionadas.join(' '));
    } else {
        alert('No has formado ninguna frase.');
    }
});

// Evento para borrar toda la frase
botonBorrarTodo.addEventListener('click', () => {
    palabrasSeleccionadas = [];
    actualizarResultado();
});

// Evento para borrar la última palabra
botonBorrarUltima.addEventListener('click', () => {
    palabrasSeleccionadas.pop();
    actualizarResultado();
});

