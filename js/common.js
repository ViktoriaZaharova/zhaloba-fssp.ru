$("body").on("click", ".btn-scroll-top", function (e) {
	e.preventDefault();
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
});

$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeOut();
});

// $('.js-example-basic-single').select2({
// 	width: "100%"
// });




// активная ссылка меню
$('.menu li a').each(function () {
	var location = window.location.href;
	var link = this.href;
	if (location === link) {
		$(this).addClass('active');
	}
});
// end

$.datepicker.setDefaults(
	{
		closeText: 'Закрыть',
		prevText: '',
		currentText: 'Сегодня',
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
			'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
			'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		weekHeader: 'Не',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	});

$('.datepicker1').datepicker({
	changeYear: true,
	showOtherMonths: true,
	selectOtherMonths: true
});


$(document).ready(function () {
	$(".variable-adjustment1").click(function (e) {
		e.preventDefault();
		$('.form-group-content1').removeClass('active');
		$('.form-group-content2').addClass('active');
	});

	$(".variable-adjustment2").click(function (e) {
		e.preventDefault();
		$('.form-group-content2').removeClass('active');
		$('.form-group-content1').addClass('active');
	});
});

$('.advantages-slider').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$(".bailiff-next-step").click(function (e) {
	e.preventDefault();
	var id = $(this).attr('data-tab'),
		content = $('.form-bailiff .js-tab-content[data-tab="' + id + '"]');

	$('.form-bailiff .js-tab-content.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});

$(function () {
	var next = $('.next-step');
	var prev = $('.prev-step');
	var progress = $('.progress-bg');
	var stepsCount = $('.bailiff-item').length;
	var currentStep = 1;

	function calculate(current, total) { // Функция для подсчета текущего %
		return (current / total) * 100
	}

	progress.width(calculate(currentStep, stepsCount) + '%'); // устанавливаем начальную ширину полосы
	next.on('click', function () {
		progress.width(calculate(++currentStep, stepsCount) + '%');
		$('.progress-steps__cp').text(currentStep); // устанавливаем ширину полосы после изменения шага
		$('.progress-steps__default').text(stepsCount);
		$('.title-wrapper .auto-complection').hide();
	});

	prev.on('click', function () {
		progress.width(calculate(--currentStep, stepsCount) + '%'); // устанавливаем ширину полосы после изменения шага
		$('.progress-steps__cp').text(currentStep);
		$('.progress-steps__default').text(stepsCount);
		if ($('.next-step-first').parents('.bailiff-item').hasClass('active')) {
			$('.progress-wrapper').hide();
			$('.title-wrapper .auto-complection').show();
		}
	});
});



$(document).ready(function () {
	$('.next-step-first').click(function () {
		// $('.section-loader').css('display', 'flex');
		$('.progress-wrapper').fadeIn();
	});

	setTimeout(function () {
		$('.section-loader').fadeOut();
	}, 10000);

	setTimeout(function () {
		$('.bailiff-item-5.active').find('.list-result-information li').removeClass('load-result');
	}, 10000);

	setTimeout(function () {
		$('.bailiff-item-5.active').removeClass('active').next('.bailiff-item').addClass('active');
	}, 11000);
});

