
function setActive() {
	active = document.querySelector('.nav__items').querySelectorAll('a');

	for(i = 0; i < active.length; i++) {
		if (document.location.href.indexOf(active[i].href) >= 0) {
			active[i].className = 'active';
		}
	}
}

window.onload = setActive;