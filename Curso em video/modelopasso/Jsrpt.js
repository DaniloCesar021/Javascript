function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        window.alert("ERRO{} Verifique os dados e tente novamente")



    } else {
        res.innerHTML = 'Contando....'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i <= f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `, ${c}`
            }
        }
        else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `, ${c}`
            }
        }
    }
}