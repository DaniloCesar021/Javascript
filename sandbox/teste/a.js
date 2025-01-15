let c = document.querySelector('.container')
let b = document.querySelector('.barra')
c.addEventListener('mouseover', seila)
c.addEventListener('mouseout', seila2)

function seila() {
  b.style.width = '40px'
  b.style.transition = '1s'
}
function seila2() {
  b.style.transition = '1s'
  b.style.width = '400px'
      
}