window.addEventListener('scroll', () => {
	const nav = document.querySelector('nav').style;
	if (document.querySelector('#about').getBoundingClientRect().top < 0) {
		{
			nav.backgroundColor = 'white';
			nav.zIndex = 5000;
		}
	} else {
		nav.backgroundColor = 'transparent';
	}
});

document.querySelectorAll('nav li a').forEach((v) =>
	v.addEventListener('click', (e) => {
		document.querySelector('#burger').checked = false;
	})
);

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.animation = 'anim 3s forwards ease-out';
		}
	});
});

document.querySelectorAll('img').forEach((v) => console.log(v));

document.querySelectorAll('img').forEach((v) => observer.observe(v));
