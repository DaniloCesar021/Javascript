class Pessoa {  // Define a classe Pessoa com métodos para acessar e modificar seus dados
  constructor(pnome, pidade) {  // Atribui os valores recebidos aos atributos da classe
    this.nome = pnome;
    this.idade = pidade;
  }

  getNome() {  // Retorna o nome da pessoa
    return this.nome;
  }

  getIdade() {  // Retorna a idade da pessoa
    return this.idade;
  }

  setNome(nome) {  // Define um novo nome para a pessoa
    this.nome = nome;
  }

  setIdade(idade) {  // Define uma nova idade para a pessoa
    this.idade = idade;
  }

  getInfo() {  // Retorna um array com nome e idade
    return [this.nome, this.idade];
  }
}

let pessoas = [];  // Cria um array vazio para armazenar os objetos do tipo Pessoa

const btn_add = document.querySelector('#btn_add');  // Seleciona o botão com id 'btn_add' e armazena na variável
const res = document.querySelector('.res');  // Seleciona a div com classe 'res' onde os dados serão exibidos

const addPessoa = () => {  // Função que atualiza a lista de pessoas na tela
  res.innerHTML = "";  // Limpa o conteúdo atual da div de resultado

  pessoas.map((p) => {  // Percorre o array de pessoas
    const div = document.createElement("div");  // Cria um novo elemento <div> para cada pessoa
    div.setAttribute("class", "pessoa");  // Adiciona a classe CSS "pessoa" à div criada
    div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`;  // Define o conteúdo HTML da div com nome e idade da pessoa
    res.appendChild(div);  // Adiciona essa div como filha da div principal de resultado
  });
};

btn_add.addEventListener('click', () => {  // Adiciona um "escutador de evento" no botão de adicionar
  const nome = document.querySelector('#f_nome');  // Pega o input de nome do formulário
  const idade = document.querySelector('#f_idade');  // Pega o input de idade do formulário

  const p = new Pessoa(nome.value, idade.value);  // Cria um novo objeto Pessoa com os valores do input
  pessoas.push(p);  // Adiciona essa nova pessoa no array

  nome.value = '';  // Limpa o campo do nome no formulário
  idade.value = '';  // Limpa o campo da idade no formulário
  nome.focus();  // Coloca o foco novamente no input de nome

  addPessoa();  // Atualiza a exibição da lista de pessoas
});
