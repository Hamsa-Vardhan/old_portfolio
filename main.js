window.addEventListener('scroll', () => {
	const nav = document.querySelector('nav').style;
	if (document.querySelector('#about').getBoundingClientRect().top < 0) {
		{
			nav.backgroundColor = 'white';
			nav.zIndex = 5000;
		}
	} else {
		nav.backgroundColor = 'transparent';
		nav.zIndex = 0;
	}
});

document.querySelectorAll('nav li a').forEach((v) =>
	v.addEventListener('click', (e) => {
		document.querySelector('#burger').checked = false;
	})
);
