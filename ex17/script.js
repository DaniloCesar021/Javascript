
function adicionar() {
    let add = document.getElementById('num')
    let res = document.getElementById('res')
    let tab = document.getElementById('sel')
    if (add.value > 100 || add.value <= 0) {
        alert('deu juca')


    } else {
        let ln = [ Number(add.value)]
        let item = document.createElement('option')
        tab.innerHTML += ''
        item.text += `Valor: ${ln}`
        tab.appendChild(item)
        
        
    }
}






function finalizar() {

}