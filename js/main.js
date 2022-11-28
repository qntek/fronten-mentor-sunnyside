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
	if (navMobile.classList.contains('off')) {
		navMobile.classList.remove('nav-turned-off');
		navMobile.classList.remove('off');
		navMobile.classList.add('nav-launched');
	} else {
		navMobile.classList.add('nav-turned-off');
	setTimeout(() => navMobile.classList.add('off'), 750);
	}
}

function closeNavMobile() {
	navMobile.classList.add('nav-turned-off');
	setTimeout(() => navMobile.classList.add('off'), 750);
	navMobile.classList.remove('nav-launched');
}
