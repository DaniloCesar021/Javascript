let c = document.querySelector('.container');
let b = document.querySelector('.barra');

const seila = () => {
  b.style.width = '40px';
  b.style.transition = '1s';

};
const seila2 = () => {
  b.style.transition = '1s';
  b.style.width = '400px';

};
c.addEventListener('mouseover', seila);
c.addEventListener('mouseout', seila2);
