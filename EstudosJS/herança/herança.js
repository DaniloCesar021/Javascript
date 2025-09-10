class Carro { // Classe pai, representa um carro básico
    constructor(nome, portas) { // Construtor da classe, recebe o nome e o número de portas
        this.nome = nome; // Atribui o nome do carro
        this.portas = portas; // Atribui o número de portas do carro
        this.ligado = false; // Inicializa o estado 'ligado' como falso
        this.vel = 0; // Inicializa a velocidade como 0
        this.cor = ''; // Inicializa a cor como uma string vazia
    }

    ligar = function () { // Método para ligar o carro
        this.ligado = true; // Define o estado 'ligado' como verdadeiro
    };

    desligar = function () { // Método para desligar o carro
        this.ligado = false; // Define o estado 'ligado' como falso
    };

    setCor = function (cor) { // Método para definir a cor do carro
        this.cor = cor; // Atribui o valor da cor
    }
};

class Militar extends Carro { // Classe filha, que herda de Carro
    constructor(nome, portas, blindagem, municao) { // Construtor que recebe os parâmetros da classe Militar
        super(nome, portas); // Chama o construtor da classe pai (Carro)
        this.blindagem = blindagem; // Atribui a blindagem ao carro militar
        this.municao = municao; // Atribui a quantidade de munição
        this.setCor("verde"); // Define a cor do carro como "verde"
    };

    atirar = function () { // Método para o carro militar atirar
        if (this.municao > 0) { // Se houver munição
            this.municao--; // Diminui uma unidade de munição
        }
    };
};

const c1 = new Carro('comum', 4); // Cria um carro comum com 4 portas
c1.ligar(); // Liga o carro
c1.setCor('preto'); // Define a cor do carro como preto

const c2 = new Militar('tank', 2, 100, 50); // Cria um carro militar com 2 portas, blindagem 100 e 50 de munição
c2.atirar(); // O carro militar atira (reduz a munição em 1)
c2.atirar(); // O carro militar atira novamente (reduz a munição em 1)
c2.atirar(); // O carro militar atira mais uma vez (reduz a munição em 1)

console.log(c1.nome); // Exibe o nome do carro comum (comum)
console.log(c1.portas); // Exibe o número de portas do carro comum (4)
console.log((c1.ligado ? 'sim' : 'não')); // Exibe se o carro está ligado (sim)
console.log(c1.vel); // Exibe a velocidade do carro comum (0)
console.log(c1.cor); // Exibe a cor do carro comum (preto)

console.log('-------------------------------------'); // Exibe uma linha para separar os resultados

console.log(c2.nome); // Exibe o nome do carro militar (tank)
console.log(c2.portas); // Exibe o número de portas do carro militar (2)
console.log((c2.ligado ? 'sim' : 'não')); // Exibe se o carro militar está ligado (não está ligado, pois não chamamos 'ligar()' para o c2)
console.log(c2.vel); // Exibe a velocidade do carro militar (0)
console.log(c2.cor); // Exibe a cor do carro militar (verde)
console.log(c2.blindagem); // Exibe o valor da blindagem do carro militar (100)
console.log(c2.municao); // Exibe a quantidade de munição restante do carro militar (47, porque atiramos 3 vezes)
