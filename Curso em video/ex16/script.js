let num = document.getElementById('fnum')//cria uma variavel 'num' que pega o elemento por id 'fnum' (no caso o elemento colocado dentro do input type number)
let lista = document.getElementById('flista')//cria uma variavel 'lista' que pega o elemento por id 'flista' (a lista criada no html)
let res = document.getElementById('res') //cria uma variavel 'res' que pega a div de id 'res' 
let valores = [] //cria uma uma array 'valores' que começa vazia 


function isNumero(n) { //cria uma function isNumero com o parametro 'n'
    if (Number(n) >= 1 && Number(n) <= 100) { //Se o parametro 'n' que foi convertido para Number for maior ou igual a 1 E o o parametro 'n' for menor ou igual a 100  
        return true //retorna verdadeiro

    } else {//se nao 
        return false//retorna falso
    }
}

function inLista(n, l) {//cria uma function inLista com um parametro 'n' e o outro parametro 'l' 
    if (l.indexOf(Number(n)) != -1) { //Se l.indexOf(Number(n)) != -1)  ou seja Converte n para um número e verifica se ele está presente em l usando indexOf. verifica se um valor n está presente no array l. 
        return true //Retorna true se o número estiver presente no array
    } else {      //Caso contrário, retorna false.
        return false
    }
}


function adicionar() { //ao clicar em adicionar
    if (isNumero(num.value) && !inLista(num.value, valores)) { //verifica se o valor do input esta entre 1 e 100 E se nao esta na lista
        valores.push(Number(num.value)) //coloca o valor dentro da array valores
        let item = document.createElement('option') //cria um item chamado option
        item.text = `valor ${num.value} adicionado` //escreve dentro do option `o valor ${num.value} adicionado`
        lista.appendChild(item) //adiciona o option ao select
        res.innerHTML = `` //Limpa o conteúdo do elemento res.
    } else { //Se não for valido da erro
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ''//Limpa o campo de entrada
    num.focus()//define o foco no input para facilitar a próxima entrada
}

function finalizar() {//ao clicar em finalizar 
    if (valores.length == 0) {//verifica se os valores estao vazios
        alert('Adicione valores antes de finalizar')//se tiver vazio da esse alert
    } else {//Se não
        let tot = valores.length //cria uma variavel tot que recebe o total de valores no array
        let maior = valores[0]  //cria uma variavel maior que recebe o valor da posição 0
        let menor = valores[0] //cria uma variavel menor que recebe o valor da posição 0
        let soma = 0          //cria uma variavel soma que recebe 0
        let media = 0        //cria uma variavel media que recebe 0

        for (let pos in valores) {       //Percorre o array valores com um loop for-in
            soma += valores[pos]        //soma recebo os valores[pos] ou seja soma começa com 0 e acumula a soma de todos os valores do array.
            if (valores[pos] > maior)  // se valores[pos] for maior que a variavel maior
                maior = valores[pos]  //maior recebe valores[pos]
            if (valores[pos] < menor)//se valores[pos] for menor que a variavel menor
                menor = valores[pos]//menor recebe valores[pos]
        }
        media = soma / tot //media recebe soma dividido pelo total
        res.innerHTML = `` //limpa o elemento res
        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados </p>`  //escreve o total//
        res.innerHTML += `<p>O maior valor informado foi o: ${maior} </p>`  //escreve o maior
        res.innerHTML += `<p>O menor valor informado foi o: ${menor} </p>` //escreve o menor
        res.innerHTML += `<p>A soma de todos os valores foi :${soma}</p>` //escreve a soma
        res.innerHTML += `<p>A media de todos os valores é: ${media}</p>`//escreve a media
    }
}