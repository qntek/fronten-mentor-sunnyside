const navMobile = document.querySelector('.nav-mobile');
const hamburgerBtn = document.querySelector('.nav-mobile-button');
const arrowDown = document.querySelector('.header-arrow-down');

hamburgerBtn.addEventListener('click', showMobileNavBar);
arrowDown.addEventListener('click', closeNavMobile);
navMobile.addEventListener('click', (e) => {
	if (e.target.nodeName === 'A') {
		closeNavMobile();
	}
});

function showMobileNavBar() {
	navMobile.classList.toggle('off');
	navMobile.classList.toggle('nav-launched');
}

function closeNavMobile() {
	navMobile.classList.add('off');
	navMobile.classList.remove('nav-launched');
}
