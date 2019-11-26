// *********************************************
// 	Here we have created a "Sticky Navigation" .
// *********************************************
const nav = document.querySelector('nav')
const navTop = nav.offsetTop;

function stickyNavigation() {
	// console.log('navTop = ' + navTop);
	// console.log('scrollY  = ' + window.scrollY);

	if(window.scrollY >= 450){
		nav.classList.add('sticky');
	}
	else {
		nav.classList.remove('sticky');
	}
}

window.addEventListener('scroll', stickyNavigation);

// ****************************************************
// 	Animations on scroll when we reach to certain items .
// ****************************************************
const wpOne = document.querySelector('.js--wp-1');
// Top of that section point
const wpOneTop = wpOne.offsetTop;

function animationNavigation() {
	console.log('wpOneTop = ' + wpOneTop);
	console.log('scrollY  = ' + window.scrollY);

	if(window.scrollY >= 350){
		wpOne.classList.add('animated', 'fadeIn');
	}
}
window.addEventListener('scroll', animationNavigation);

// $$$
const wpTwo = document.querySelector('.js--wp-2');
function animationNavigation2() {
	if(window.scrollY >= 1480){
		wpTwo.classList.add('animated', 'fadeInUp');
	}
}
window.addEventListener('scroll', animationNavigation2);

// $$$
const wpThree = document.querySelector('.js--wp-3');
function animationNavigation3() {
	if(window.scrollY >= 2420){
		wpThree.classList.add('animated', 'fadeIn');
	}
}
window.addEventListener('scroll', animationNavigation3);

// $$$
const wpFour = document.querySelector('.js--wp-4');
function animationNavigation4() {
	if(window.scrollY >= 3400){
		wpFour.classList.add('animated', 'pulse');
	}
}
window.addEventListener('scroll', animationNavigation4);

//  ****************
//  Mobile Navigation
//  ****************
const navIcon = document.querySelector('.ion-navicon-round');
const mainNav = document.querySelector('.main-nav');
const toggleNav = () => {
	if(mainNav.style.display === '')
	{
		 mainNav.style.display = "block";
		 navIcon.classList.remove('ion-navicon-round');
		 navIcon.classList.add('ion-close');
	}
	else if(mainNav.style.display === 'block') {
		 mainNav.style.display = "none";
		 navIcon.classList.add('ion-navicon-round');
		 navIcon.classList.remove('ion-close');
	}
	// if display is "none"
	else {
		mainNav.style.display = 'block';
		navIcon.classList.add('ion-close');
		navIcon.classList.remove('ion-navicon-round');
	}
	console.log(mainNav.style.display)
}
navIcon.addEventListener('click', toggleNav);


// To remove some weird effects caused.
window.addEventListener('resize', () => {
	if(window.innerWidth > '767')
		mainNav.style.display = 'block';
	if(window.innerWidth <= '767'){
		mainNav.style.display = 'none';
		navIcon.classList.add('ion-navicon-round');
		navIcon.classList.remove('ion-close');
	}
})
if(window.innerWidth > '767px'){
	mainNav.style.display = 'none';
}