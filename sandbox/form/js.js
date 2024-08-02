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
        max: 10,     // era 25
        speed: 200  //era 400
    });
});

document.addEventListener("DOMContentLoaded", function () {
    VanillaTilt.init(document.querySelector("#isenha"), {
        max: 10,    // era 25
        speed: 200 //era 400
    });
});
document.addEventListener("DOMContentLoaded", function () {
    VanillaTilt.init(document.querySelector(".h1safadex"), {
        max: 10,    // era 25
        speed: 200 //era 400
    });
});



