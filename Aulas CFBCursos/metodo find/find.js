const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementos_array = [10, 5, 7, 2, 45, 5, 6, 98, 4]
p_array.innerHTML = elementos_array

btnPesquisar.addEventListener('click', (evt) => {
    elementos_array.find((e, i) => {
        if (e == txt_pesquisar.value) {
            resultado.innerHTML = `Valor pesquisado é ${e} na posição ${i}`
        }
        
    })
})