let ipn = document.getElementById('fnum');
let lista = document.getElementById('flista');
var res = document.getElementById('res');
let valores = [];

function Vnuml(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}
function Vlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}



function adicionar() {
    if (Vnuml(ipn.value) && !Vlista(ipn.value, valores)) {
        valores.push(Number(ipn.value));
        let item = document.createElement('option');
        item.text = `O numero ${ipn.value} foi adicionado`;
        lista.appendChild(item);
    } else {
        alert('deu juca');
    }
    res.innerHTML = ``
    ipn.value = ``
    ipn.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Coloque os dados antes de começar');
    } else {
        let total = valores.length;
        let soma = 0;
         let maior = valores[0];
         let menor = valores[0];
        for (let prox in valores){
            if (valores[prox] > maior){
                maior = valores[prox];
            }
            if (valores[prox] < menor){
                menor = valores[prox];
            }
            soma += valores[prox];
        }
        media = valores.length/soma
        res.innerHTML = `<p>No total foram colocados ${total} numeros</p>`;
        res.innerHTML += `<p>O maior valor colococado foi ${maior}</p>`;
        res.innerHTML += `<p>O menor valor colococado foi ${menor}</p>`;
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`;
        res.innerHTML += `<p>A media dos valores é ${media}</p>`;
        ipn.focus()
    }
}
