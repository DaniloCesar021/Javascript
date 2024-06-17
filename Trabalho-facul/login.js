
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Função para validar o email usando regex
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        // Função para validar a senha (pelo menos 8 caracteres)
        function validatePassword(password) {
            return password.length >= 8;
        }

        // Verifica se o email e a senha são válidos
        if (validateEmail(email) && validatePassword(password)) {
            // Salva o email e a senha no local storage (não recomendado para senhas em produção)
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            // Redireciona para a página index.html
            window.location.href = 'index.html';
        } else {
            // Exibe uma mensagem de erro se a validação falhar
            alert('Email ou senha inválidos. Por favor, tente novamente.');
        }
    });
});
