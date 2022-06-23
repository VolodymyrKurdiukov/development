//Burger

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 790) $(".header").css({ background: 'none', transition: ' all 0.5s ease' });
	else $(".header").css({ background: 'rgba(0, 0, 0, 0.82)' });
});

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

new WOW().init();

