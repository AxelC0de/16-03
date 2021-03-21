const COLLECTION = document.querySelectorAll('piano-button');


COLLECTION.forEach((elem) => {
	elem.addEventListener('mousedown', (event) => {
		event.target.classList.add("active");
		console.log('mousedown');
	})

	elem.addEventListener('mouseup', (event) => {
		event.target.classList.remove("active");
		console.log('mouseup');
	})
})
console.log('js ok');