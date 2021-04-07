const d = document;
const $darkmodeBtn = d.getElementById('darkmodeBtn');
let checkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
	? 'dark'
	: 'light';

const categoryHover = () => {
	d.addEventListener('mouseover', (e) => {
		if (e.target.matches('.categories-list li a')) {
			d.querySelector('.categoryImg').src = e.target.dataset.img;
		}
	});
};
const darkMode = () => {
	$darkmodeBtn.addEventListener('click', () => {
		checkTheme = checkTheme === 'dark' ? 'light' : 'dark';
		if (checkTheme === 'dark') {
			document.documentElement.style.setProperty('--bg-color', '#1c1c1c');
			document.documentElement.style.setProperty('--text-color', '#dfdfdd');
		} else {
			document.documentElement.style.setProperty('--bg-color', '#f8f3ed');
			document.documentElement.style.setProperty('--text-color', '#2d2c2a');
		}
	});
};
d.addEventListener('DOMContentLoaded', () => {
	categoryHover();
	darkMode();
});
