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

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry, index, arr) => {
			if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
				entry.target.style.animation = 'anim 3s forwards ease-out';
			}
		});
	},
	{
		threshold: 0.5
	}
);

document.querySelectorAll('img').forEach((v) => observer.observe(v));

const handlep = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.animation = 'text 2s ease-out';
		}
	});
};
observer.unobserve(document.querySelector('#index-image'));

const pobserver = new IntersectionObserver(handlep);

document.querySelectorAll('p').forEach((v) => pobserver.observe(v));

pobserver.unobserve(document.querySelector('#totype'));
