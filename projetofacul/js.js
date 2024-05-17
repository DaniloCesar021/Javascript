document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector('.content');
    content.classList.add('visible');
    document.body.style.overflow = 'auto'; // Permite o scroll após o carregamento
});