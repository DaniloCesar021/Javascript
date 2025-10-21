// Seleciona o elemento HTML com id "numero" e armazena na constante 'numero'
const numero = document.querySelector("#numero");

// Cria uma nova Promise (promessa) que simula uma operação assíncrona
  let promise = new Promise((res, rej) => {
  let resultado = true; // Define o resultado como true (poderia ser false para simular erro)
  let tempo = 3000; // Tempo de espera (3 segundos = 3000 milissegundos)

  // Função que será executada após 3 segundos
  setTimeout(() => {
    if (resultado) {
      res("deu tudo certo"); // Se resultado for true, resolve a Promise com essa mensagem
    } else {
      rej("deu tudo errado"); // Se resultado for false, rejeita a Promise com essa mensagem
    }
  }, tempo);
});

// Define o que fazer quando a Promise for resolvida com sucesso
promise.then((retorno) => {
  numero.innerHTML = retorno; // Exibe a mensagem de sucesso no elemento com id "numero"
  numero.classList.remove("erro"); // Remove a classe CSS "erro" (caso exista)
  numero.classList.add("ok"); // Adiciona a classe CSS "ok"
});

// Define o que fazer quando a Promise for rejeitada (erro)
promise.catch((retorno) => {
  numero.innerHTML = retorno; // Exibe a mensagem de erro no elemento com id "numero"
  numero.classList.add("erro"); // Adiciona a classe CSS "erro"
  numero.classList.remove("ok"); // Remove a classe CSS "ok" (caso exista)
});

// Define o conteúdo inicial enquanto a Promise está "processando"
numero.innerHTML = "processando..."; // Mostra "processando..." antes da Promise ser resolvida/rejeitada
