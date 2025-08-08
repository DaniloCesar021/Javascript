// Definindo uma classe chamada 'pessoa'
class pessoa {
    // O construtor da classe recebe um parâmetro 'pnome' e o atribui à propriedade 'nome'
    constructor(pnome) {
        this.nome = pnome;  // 'this.nome' é uma propriedade do objeto que será criada com o nome passado
    }
}

// Criando instâncias da classe 'pessoa' e passando valores para o parâmetro 'pnome'
let p1 = new pessoa("Bruno");  // Cria um objeto p1 com nome 'Bruno'
let p2 = new pessoa("Danilo"); // Cria um objeto p2 com nome 'Danilo'
let p3 = new pessoa("lucas");  // Cria um objeto p3 com nome 'lucas'

// Imprimindo os nomes de cada objeto criado
console.log(p1.nome);  // Vai imprimir 'Bruno', que é o valor atribuído à propriedade 'nome' de p1
console.log(p2.nome);  // Vai imprimir 'Danilo', que é o valor atribuído à propriedade 'nome' de p2
console.log(p3.nome);  // Vai imprimir 'lucas', que é o valor atribuído à propriedade 'nome' de p3
