const d = document.querySelector('.container')
function esticar(){
    d.style.transition = "1s"
    d.style.width = '100px'
}
d.addEventListener('click', esticar)