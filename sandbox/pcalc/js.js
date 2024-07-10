//globais 
const ip1 = document.getElementById('ip1')
const ip2 = document.getElementById('ip2')
const res = document.getElementById('res')

//tirar
function tirar() {
    ip1.value = ``
    ip2.value = ``
    ip1.focus()
    ip2.focus()
    res.innerHTML = ``
}
//soma
function adicionar() {
    if (ip1.value == 0 || ip2.value == 0) {
        alert('[ERRO] Coloque um valor')
    }
    else {
        let n1 = Number(ip1.value)
        let n2 = Number(ip2.value)
        let r = n1 + n2
        res.innerHTML = `${r}`
        ip1.focus()
        ip2.focus()
    }
}
//multiplicação

function multiplicar() {
    if (ip1.value == 0 || ip2.value == 0) {
        alert('[ERRO] Coloque um valor')
    } else {
        let n1 = Number(ip1.value)
        let n2 = Number(ip2.value)
        let r = n1 * n2
        res.innerHTML = `${r}`
        ip1.focus()
        ip2.focus()
    }
}

//divisão

function dividir() {
    if (ip1.value == 0 || ip2.value == 0) {
        alert('[ERRO] Coloque um valor')
    } else {
        let n1 = Number(ip1.value)
        let n2 = Number(ip2.value)
        let r = n1 / n2
        res.innerHTML = `${r}`
        ip1.focus()
        ip2.focus()
    }
}
//subitração
function diminuir() {
    if (ip1.value == 0 || ip2.value == 0) {
        alert('[ERRO] Coloque um valor')
    } else {
        let n1 = Number(ip1.value)
        let n2 = Number(ip2.value)
        let r = n1 - n2
        res.innerHTML = `${r}`
        ip1.focus()
        ip2.focus()
    }
}