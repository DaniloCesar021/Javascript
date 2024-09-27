let bt = document.querySelector('.botao')
bt.addEventListener('click', contar)
function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')




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