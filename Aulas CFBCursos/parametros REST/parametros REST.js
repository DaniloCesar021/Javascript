function soma(...valores) {
    let res = 0
    for (let v of valores) {
        res += v
    }
    return res
}
console.log(soma(10, 10, 2, 8))



//!Explicação
/*
?Definição da Função:

A função soma é definida usando a sintaxe moderna do JavaScript, com ...valores que utiliza o operador rest. Isso significa que valores será um array contendo todos os argumentos passados para a função.
Inicialização de res:

let res = 0; inicializa uma variável res que irá acumular a soma dos valores.
Loop for...of:

O loop for (let v of valores) itera sobre cada elemento do array valores. Para cada elemento, ele:
Adiciona o valor atual (v) à variável res usando res += v;.
Retorno do Resultado:

Após o loop, a função retorna o valor acumulado em res.
Chamada da Função:

console.log(soma(10, 5, 2, 8)); chama a função soma com os valores 10, 5, 2, e 8. Esses valores são passados para valores como um array: [10, 5, 2, 8].
Resultado
O loop soma todos os valores: 10 + 5 + 2 + 8, que resulta em 25.
Portanto, o console.log exibe 25 no console.
Resumo
A função soma é uma maneira eficiente de somar um número variável de argumentos, retornando a soma total.



 */