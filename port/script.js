const header = document.querySelector("header");
window.addEventListener("scroll", () => {
	header.classList.toggle("sticky", window.scrollY > 120);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
	menu.classList.toogle("bx-x");
	navlist.classList.toogle("active");
};

VanillaTilt.init(document.querySelector(".sobre-img"), {
	max: 8,
	speed: 400
}); 
/*  */	
const colorInput = document.getElementById("colorChange");

colorInput.addEventListener("input", function() {
    document.documentElement.style.setProperty("--main-color", this.value);
});

/*  */