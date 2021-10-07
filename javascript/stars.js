let stars = document.querySelectorAll(".goods__item-rating-list ul li");

for (let star of stars) {
	star.addEventListener("click", starPicked);
	function starPicked() {
		for (let star of stars) {
			if (star != this) {
				star.classList.remove("picked");
			}
		}
		this.classList.toggle("picked");
	}
}