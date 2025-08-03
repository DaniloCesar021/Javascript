let valores = [1, 2]; // Array com dois números: 1 e 2

let op = [
    // Primeira função: soma os valores do array
    (val) => {
        let res = 0; // Inicializa a variável 'res' para armazenar o resultado da soma
        for (v of val) { // Loop para percorrer os valores de 'val'
            res += v; // Adiciona cada valor de 'v' à variável 'res'
        }
        return res; // Retorna a soma dos valores
    },
    
    // Segunda função: multiplica os valores do array
    (val) => {
        let res = 1; // Inicializa a variável 'res' para armazenar o resultado da multiplicação
        for (v of val) { // Loop para percorrer os valores de 'val'
            res *= v; // Multiplica cada valor de 'v' à variável 'res'
        }
        return res; // Retorna o produto dos valores
    },
    
    // Terceira função: apenas imprime os valores do array
    (val) => {
        for (v of val) { // Loop para percorrer os valores de 'val'
            console.log(v); // Imprime cada valor de 'v' no console
        }
    }
];

// Chama a terceira função que apenas imprime os valores no console
op[2](valores);
