let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

//verificando se é de 1 a 100
function valnum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
//verificando se o numero ja esta na lista
function vallist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}




function adicionar() {
    if (valnum(num.value) && !vallist(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)

    } else {
        alert('[ERRO] Invalido')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('adicione valores')
    } else {
        let soma = 0
        let media = 0
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for (let dps in valores) {
            soma += valores[dps]
            if (valores[dps] > maior) {
                maior = valores[dps]
            }
            if (valores[dps] < menor) {
                menor = valores[dps]
            }
        }
        media = soma / total
        res.innerHTML = ``
        res.innerHTML += `tem um total de ${total} numeros`
        res.innerHTML += `<p>O menor valor é ${menor}</p> `
        res.innerHTML += `<p>O maior valor é ${maior}</p> `
        res.innerHTML += `<p>a soma dos valores é ${soma} </p>`
        res.innerHTML += `<p>A media dos valores é  ${media}</p> `


    }
}