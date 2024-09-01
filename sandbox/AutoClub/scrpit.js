/* ------------------Barra d baixo do login----------------------------- */
document.addEventListener('DOMContentLoaded', function () {
    const loginDiv = document.querySelector('.login');
    const bar = document.querySelector('.bar');


    loginDiv.addEventListener('mouseenter', function () {
        bar.style.width = '100%';
    });

    loginDiv.addEventListener('mouseleave', function () {
        bar.style.width = '0';
    });
});
/* ------------------------------------------------------------------- */
/* ------------------Efeito logo-------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    VanillaTilt.init(document.querySelector(".logo"), {
        max: 20,     // era 25
        speed: 400  //era 400
    });
});
/* ------------------------------------------------------------------- */