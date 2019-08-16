function toggleAccordionClosed(e) {
	e.currentTarget.parentNode.classList.toggle("is-closed");
}

document.querySelectorAll(".accordion__title").forEach(el => {
	el.parentNode.classList.add("is-closed");
	el.addEventListener("click", toggleAccordionClosed);
});
