const caixa = document.querySelector('.caixa');
let mapa = new Map();

mapa.set('cursos', 'js');
mapa.set(10, 'cfbCursos');
mapa.set(1, 100);
mapa.set('canal', 120);
console.log(mapa);


if (mapa.has('canal')) {
    caixa.innerHTML = "A chave existe"
} else {
    caixa.innerHTML = "A chave não existe"
}
/* caixa.innerHTML = mapa.get('cursos'); */