// Definindo a classe 'carro' que representa um carro com nome, tipo e velocidade máxima
class carro {
    // O construtor inicializa o objeto 'carro' com o nome (pnome) e tipo (ptipo)
    constructor(pnome, ptipo) {
        this.nome = pnome;  // A propriedade 'nome' recebe o valor passado para pnome

        // A propriedade 'tipo' e 'velmax' são determinadas com base no valor de ptipo
        if (ptipo == 1) {
            this.tipo = "Esportivo";   // Se ptipo for 1, o tipo será "Esportivo"
            this.velmax = 300;         // Velocidade máxima é 300
        } else if (ptipo == 2) {
            this.tipo = "utilitário";  // Se ptipo for 2, o tipo será "utilitário"
            this.velmax = 100;         // Velocidade máxima é 100
        } else if (ptipo == 3) {
            this.tipo = "passeio";     // Se ptipo for 3, o tipo será "passeio"
            this.velmax = 160;         // Velocidade máxima é 160
        } else {
            this.tipo = 'militar';     // Se ptipo não for 1, 2 ou 3, o tipo será "militar"
            this.velmax = 180;         // Velocidade máxima é 180
        }
    }

    // Método para retornar o nome do carro
    getNome() {
        return this.nome;  // Retorna o valor da propriedade 'nome'
    };

    // Método para retornar o tipo do carro
    getTipo() {
        return this.tipo;  // Retorna o valor da propriedade 'tipo'
    };

    // Método para retornar a velocidade máxima do carro
    getVelmax() {
        return this.velmax;  // Retorna o valor da propriedade 'velmax'
    };

    // Método que retorna um array contendo todas as informações do carro
    getInfo() {
        return [this.nome, this.tipo, this.velmax];  // Retorna um array com nome, tipo e velocidade máxima
    }

    // Método para imprimir no console as informações do carro de forma legível
    info() {
        console.log(`nome ${this.nome} `);          // Imprime o nome do carro
        console.log(`tipo ${this.tipo} `);          // Imprime o tipo do carro
        console.log(`v.max ${this.velmax} `);       // Imprime a velocidade máxima do carro
        console.log('-------------------------');   // Imprime uma linha separadora entre os carros
    };
};

// Criando objetos da classe 'carro' com diferentes tipos e nomes
let c1 = new carro("rapidao", 1);    // Carro esportivo com nome 'rapidao' e tipo 1
let c2 = new carro("superluxo", 2);   // Carro utilitário com nome 'superluxo' e tipo 2
let c3 = new carro("bombadao", 4);    // Carro militar com nome 'bombadao' e tipo 4 (outros tipos são 1, 2 e 3)
let c4 = new carro("carrego tudo", 3); // Carro de passeio com nome 'carrego tudo' e tipo 3

/* 
Aqui estão chamadas de método que imprimiriam as informações de cada carro no console.
Estão comentadas para não executar no momento.
c1.info();  // Chamaria o método info para o carro 'rapidao' (tipo 1, esportivo)
c2.info();  // Chamaria o método info para o carro 'superluxo' (tipo 2, utilitário)
c3.info();  // Chamaria o método info para o carro 'bombadao' (tipo 4, militar)
c4.info();  // Chamaria o método info para o carro 'carrego tudo' (tipo 3, passeio)
*/

// Chamando o método 'getInfo()' para o objeto 'c1' e imprimindo o retorno no console
console.log(c1.getInfo());  // Exibe um array com [nome, tipo, velmax] do carro 'rapidao' no console
