const clinica = document.querySelector('#clinica');
const menu = document.querySelector('.menu_telefono div:nth-child(2)');
clinica.addEventListener('click', () => {
    clinica.classList.toggle('active');
    menu.classList.toggle('open');
});
const toggleButtons = document.querySelectorAll('.toggle-button');
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.parentNode.querySelector('p');
        const computedStyle = window.getComputedStyle(content);
        if (computedStyle.display === 'none') {
            content.style.display = 'block';
            button.textContent = '-';
        } else {
            content.style.display = 'none';
            button.textContent = '+';
        }
    });
});
const mostrarServiciosButtons = document.querySelectorAll('.mostrarServicios');
mostrarServiciosButtons.forEach(button => {
    button.addEventListener('click', () => {
        const contenido = button.previousElementSibling;
        const listaContenido = button.nextElementSibling;
        if (contenido.classList.contains('oculto')) {
            contenido.classList.remove('oculto');
            button.textContent = '- info';
        } else {
            contenido.classList.add('oculto');
            button.textContent = '+ info';
        }
        if (listaContenido && listaContenido.classList.contains('oculto')) {
            listaContenido.classList.remove('oculto');
        } else if (listaContenido) {
            listaContenido.classList.add('oculto');
        }
    });
});