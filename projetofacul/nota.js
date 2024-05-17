function  sim(){
    alert("Obrigado pela consideração professor :)")
}
function desvia(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10,100);
    btn.style.left = geraPosicao(10,100);
}
function geraPosicao(min, max){
    return (Math.random() * (max - min) + min) + '%';
}