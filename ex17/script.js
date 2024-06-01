//Globais
var add = document.getElementById('num')
var res = document.getElementById('res')
var tab = document.getElementById('sel')

//
var ln = []

// ||


//
function adicionar() {
    var num = Number(add.value)
    if (add.value > 100 || add.value <= 0 ) {
        alert('deu juca')


    } else {
        ln.push(num)
        ln.sort()
        let item = document.createElement('option')
        item.text += `Valor: ${num}`
        tab.appendChild(item)
       


    }
}
//////////////////////////////////////////////////////////

function finalizar() {
     
    
    res.innerHTML += `${c}`
    res.innerHTML += `Ao todo temos ${tab.length} numeros`
    alert(ln)


}