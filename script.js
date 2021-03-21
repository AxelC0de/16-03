const COLLECTION = document.querySelectorAll('.piano-button');
const PIANO = document.getElementById('piano')

const startSound = (event) => {
	event.target.classList.add('active');
}

const stopSound = (event) => {
	event.target.classList.remove('active');
}



const startCorrespondOver = (event) => {
	COLLECTION.forEach(
		(elem) => {
			elem.addEventListener('mouseover', startSound)
			elem.addEventListener('mouseout', stopSound)
		}
	)
}

const stopCorrespondOver = () => {
	COLLECTION.forEach(
		(elem) => {
			elem.addEventListener('mouseover', startSound)
			elem.addEventListener('mouseout', stopSound)
		}
	)
}






PIANO.addEventListener('mousedown', startCorrespondOver);
PIANO.addEventListener('mousedown', stopCorrespondOver)

// PIANO.addEventListener('mouseup', (event) => {
// 	event.target.classList.remove("active");
// 	console.log('PIANO.mouseup');
// })
