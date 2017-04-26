//MAIN PAGE EVENTS

const main = document.querySelector('.main');

setTimeout(() => {
	main.classList.add('shadow');
}, 1500);



main.addEventListener('mouseout', function(e) {
	this.classList.remove('shadow');
});

main.addEventListener('mouseover', function(e) {
	this.classList.add('shadow');
});

const hamburg = document.querySelector('.hamburger');

const nav = document.querySelector('.side-nav');

let navItemNode = document.querySelectorAll('.nav-section');
let navItems = []

for (var item of navItemNode) {
	navItems.push(item);
}

console.log(navItems[0]);

hamburg.addEventListener('click', function() {
	setTimeout(() => {

		this.classList.toggle('is-active');
		
	}, 100);
	
	navItems[0].classList.toggle('hide-nav');
	navItems[1].classList.toggle('hide-nav');
	navItems[2].classList.toggle('hide-nav');

	nav.classList.toggle('is-open');

});


