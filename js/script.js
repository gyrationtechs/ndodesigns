// Function expression to select elements
const selectElement = (s) => document.querySelector(s);

// open menu onclick
selectElement('.nav-list').addEventListener('click', () => {
	selectElement('.nav-list').classList.add('active');
});

// close menu onclick
selectElement('.close').addEventListener('click', () => {
	selectElement('.nav-list').classList.remove('active');
});