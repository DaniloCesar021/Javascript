const p_array = document.querySelector('#array');
const txt_pesquisar = document.querySelector('#txt_pesquisar');
const btnPesquisar = document.querySelector('#btnPesquisar');
const resultado = document.querySelector('#resultado');

const elementos_array = [19, 98, 97];
p_array.innerHTML = `[${elementos_array}]`;

btnPesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = "não conforme"
    const ret = elementos_array.every((e, i) => {
        if (e < 18) {
            resultado.innerHTML = `Array não conforme na posição ${i}`
        }
        return e >= 18

    })

    if (ret) {
        resultado.innerHTML = 'ok'
    }
    console.log(ret)
});