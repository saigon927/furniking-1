let btn = document.querySelector(".main-screen-top__burger-btn");
let closeBtn = document.querySelector(".main-screen-top__burger-menu-btn");
let menu = document.querySelector(".main-screen-top__burger-menu");

btn.addEventListener("click", menuOpen);
closeBtn.addEventListener("click", menuOpen);

function menuOpen() {
	document.body.classList.toggle("fixed");
	menu.classList.toggle("open");
}