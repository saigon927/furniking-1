let openMenuBtn = document.querySelector(".main-screen-top__btn");

openMenuBtn.addEventListener("click", openMenuBtnOn);

function openMenuBtnOn() {
	let menu = document.querySelector(".main-screen-bottom__list");
	menu.classList.toggle("open");
}