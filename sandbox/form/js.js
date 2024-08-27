const ft = document.querySelector('.footer')

ft.addEventListener('mouseover', aumentar)

ft.addEventListener('mouseout', diminuar)

function diminuar() {
    ft.style.transition = "0.3s"
    ft.style.height = "25px"
}

function aumentar() {
    ft.style.transition = "0.3s"
    ft.style.height = "40px"
}



document.addEventListener("DOMContentLoaded", function () {
    VanillaTilt.init(document.querySelector("#iemail"), {
        max: 8,     // era 25
        speed: 200  //era 400
    });
});

document.addEventListener("DOMContentLoaded", function () {
    VanillaTilt.init(document.querySelector("#ibotao"), {
        max: 8,    // era 25
        speed: 200 //era 400
    });
});
document.addEventListener("DOMContentLoaded", function () {
    VanillaTilt.init(document.querySelector(".h1safadex"), {
        max: 10,    // era 25
        speed: 200 //era 400
    });
});



const bt = document.querySelector('.material-symbols-outlined')
let ips = document.querySelector('#isenha')

bt.addEventListener('mousedown', aparecer)
bt.addEventListener('mouseup', ocultar)

function aparecer() {
    ips.type = "text"
    bt.innerHTML = 'visibility'


}
function ocultar() {
    ips.type = "password"
    bt.innerHTML = 'visibility_off'

}

