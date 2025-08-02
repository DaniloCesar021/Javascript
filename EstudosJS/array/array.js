const caixa = document.querySelector('.caixa');  // Seleciona o elemento com a classe 'caixa' e o armazena na variável 'caixa'
let cursos = ['Angular', 'js', 'boostrap', 'tailwind', 'react'];  // Cria um array 'cursos' com nomes de tecnologias

cursos.push('c++');  // Adiciona o elemento 'c++' no final do array 'cursos'
cursos.push('python');  // Adiciona o elemento 'python' no final do array 'cursos'
cursos.push('python');  // Adiciona mais um 'python' no final do array 'cursos'
cursos.pop();  // Remove o último elemento do array (removerá o segundo 'python')
cursos.unshift('git');  // Adiciona o elemento 'git' no início do array 'cursos'
cursos.shift();  // Remove o primeiro elemento do array (removerá 'Angular')

cursos.map((el) => {  // Itera sobre o array 'cursos' com o método 'map', onde 'el' é o item atual
    let p = document.createElement("p");  // Cria um novo elemento <p> no DOM
    p.innerHTML = el;  // Define o conteúdo do <p> como o nome do curso (valor de 'el')
    caixa.appendChild(p);  // Adiciona o novo <p> como filho do elemento 'caixa' (o conteúdo vai para a página)
});

console.log(cursos);  // Exibe o array 'cursos' no console para verificação (após todas as modificações)
