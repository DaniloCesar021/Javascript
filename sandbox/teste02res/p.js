/* let caixa = document.querySelector('.caixa');  // Seleciona o elemento com a classe 'caixa' e armazena na variável 'caixa'
const nomes = ['Danilo', 'rede globo', 'joão', 'lucas'];  // Cria um array com nomes e strings que serão exibidas na página


nomes.map((elementos) => {  // Itera sobre o array 'nomes' usando o método 'map', onde 'elementos' é o valor atual
    let p = document.createElement('p');  // Cria um novo elemento <p> (parágrafo)
    p.innerHTML = elementos;  // Define o conteúdo HTML do parágrafo como o valor atual da iteração (nome ou string)
    caixa.appendChild(p);  // Adiciona o novo parágrafo como filho do elemento 'caixa', exibindo-o na página
}); */

let caixa = document.querySelector('.caixa');  // Seleciona o elemento com a classe 'caixa'
const nomes = ['Danilo', 'rede globo', 'joão', 'lucas', 'rose', 'cesar'];  // Array com os nomes


nomes.forEach(elemento => {  // Itera sobre o array 'nomes' usando 'forEach'
    caixa.innerHTML += `<p>${elemento}</p>`;  // Adiciona cada nome diretamente dentro de 'caixa' usando template literals
});
