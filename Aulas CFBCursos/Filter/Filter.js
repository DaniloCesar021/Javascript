 const idades = [14, 21, 31, 3, 1, 3, 50]; // Declara um array "idades" contendo números inteiros

const maior = idades.filter((valor) => { // Cria um novo array "maior" com elementos que atendem à condição
    if (valor >= 18) // Verifica se o valor é maior ou igual a 18
        return valor; // Retorna o valor, incluindo-o no array "maior"
});

const menor = idades.filter((valor) => { // Cria um novo array "menor" com elementos que atendem à condição
    if (valor <= 18) // Verifica se o valor é menor ou igual a 18
        return valor; // Retorna o valor, incluindo-o no array "menor"
});

console.log(idades); // Exibe o array original "idades" no console
console.log(maior);  // Exibe o array "maior" (valores >= 18) no console
console.log(menor);  // Exibe o array "menor" (valores <= 18) no console



/* 
const nome = ['Bruno', 'Felipe','Bruno','Danilo' ,'Danilo'];
const ab = nome.filter((nomes) => {
    if (nomes == 'Bruno' || nomes == 'Danilo')
        return nomes;
});
console.log(ab) */