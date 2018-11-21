import Typed from 'typed.js';

(_ => {
	const typeHeadlines = document.getElementsByClassName('introduction__adjective');

	var options = {
		strings: ["meaningful", "impactful","challenging","creative","strategic","audience-driven","memorable","user-centric","research based", "unforgettable","successful"],
		typeSpeed: 50,
		startDelay: 250,
		backSpeed: 40,
		shuffle: true,
		smartBackspace: true,
		showCursor: false,
		backDelay: 700
	};
	


	document.addEventListener("DOMContentLoaded", function () {

		var typed = new Typed(typeHeadlines[0], options);
	});


})();