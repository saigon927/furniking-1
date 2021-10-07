let search = document.querySelector(".bottom-header__icons-btn");
search.addEventListener("click", searchOpen);

function searchOpen() {
	let searchBlock = document.querySelector(".bottom-header__search-spare");
	searchBlock.classList.toggle("open");
}
