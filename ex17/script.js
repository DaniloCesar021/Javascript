//Globais
var add = document.getElementById('num')
var res = document.getElementById('res')
var tab = document.getElementById('sel')

//
var ln = []

//


//
function adicionar() {
    if (add.value > 100 || add.value <= 0) {
        alert('deu juca')


    } else {
        //let ln = []
        let num = Number(document.getElementById('num').value)
        ln = [num]
        let item = document.createElement('option')
        item.text += `Valor: ${num}`
        tab.appendChild(item)
        /* let ln = [Number(add.value)]
         let item = document.createElement('option')
         tab.innerHTML += ''
         item.text += `Valor: ${n}`
         tab.appendChild(item)
         tab.sort() */




    }

}
//////////////////////////////////////////////////////////

function finalizar() {
     
 
    res.innerHTML(item)
    res.innerHTML = `Ao todo temos ${tab.length} numeros`
    


}