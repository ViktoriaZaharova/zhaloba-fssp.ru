// phone mask
$('[name="phone"]').mask('+7 (999) 999-99-99');
// phone mask end

// header fixed scroll
$(window).scroll(function () {
	var heightHome = $('.home').height();
	if ($(this).scrollTop() > heightHome) {
		$('header').addClass('fixed');
	} else {
		$('header').removeClass('fixed');
	}
});

$(window).scroll(function () {
	var heightHeader = $('.header').height();
	if ($(this).scrollTop() > heightHeader) {
		$('.header').addClass('fixed');
	} else {
		$('.header').removeClass('fixed');
	}
});
// header fixed scroll end

// scroll animate anchor
$(document).ready(function () {
	$(".go_to").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			heighHeader = $('header').outerHeight(),
			top = $(id).offset().top;
		$('body, html').animate({ scrollTop: top - heighHeader }, 500);
	});
});
// scroll animate anchor end
$(document).ready(function () {
	var block_show = null;

	function scrollTracking() {
		var wt = $(window).scrollTop();
		var wh = $(window).height();
		try {
			var et = $('.you-clients').offset().top;
			var eh = $('.you-clients').outerHeight();

			if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
				if (block_show == null || block_show == false) {
					$.each($('.you-clients-box'), function (i, el) {
						setTimeout(function () {
							$(el).addClass('active');
						}, 500 + i * 500);
					});
				}
				block_show = true;
			} else {
				if (block_show == null || block_show == true) {
					$('.you-clients-box').removeClass('active');
				}
				block_show = false;
			}
		} catch (e) {

		}
	}

	$(window).scroll(function () {
		scrollTracking();
	});

	$(document).ready(function () {
		scrollTracking();
	});
});


// sliders
$('.work-slider1').slick({
	slidesToShow: 3,
	adaptiveHeight: true,
	infinite: true,
	vertical: true,
	verticalSwiping: true,
	centerMode: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				swipe: false,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}
	]
});

$('.work-slider2').slick({
	slidesToShow: 2,
	infinite: true,
	vertical: true,
	verticalSwiping: true,
	centerMode: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				swipe: false,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}
	]
});
// slick active
$(window).on('load resize', function () {
	// if ($(window).width() < 992) {
	// 	$(function () {
	// 		var $el = $('.parallax-window');
	// 		$(window).on('scroll', function () {
	// 			var scroll = $(document).scrollTop();
	// 			$el.css({ 'background-position': '50% ' + (-.1 * scroll) + 'px' });
	// 		});
	// 	});
	// }
	if ($(window).width() < 768) {
		$('.clients-logos:not(.slick-initialized)').slick({
			infinite: true,
			slidesToShow: 3,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
					},
				},
			],
		});
	} else {
		$('.clients-logos.slick-initialized').slick('unslick');
		// scroll brands
		$(document).ready(function () {
			var element = document.getElementById('scroll-section');
			var cnt = 0;

			document.addEventListener('wheel', function (event) {
				event = event || window.event;
				var y = event.deltaY || event.detail || event.wheelDelta,
					val = 0.3,
					min = 0,
					max = 0;

				if (y > 0) {
					cnt = cnt + 1;
					element.style.transform = 'translate(' + cnt + '%)';
				}
				if (y < 0) {
					cnt = cnt - 1;
					element.style.transform = 'translate(' + cnt + '%)';
				}
			});
		});
		// scroll brands end
	}
});
$('.portfolio-gallery-preview').slick({
	slidesToShow: 5,
	adaptiveHeight: true,
	infinite: true,
	vertical: true,
	verticalSwiping: true,
	focusOnSelect: true,
	asNavFor: '.portfolio-gallery-presentation',
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
		{
			breakpoint: 480,
			settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 2,
			}
		}
	]
});

$('.portfolio-gallery-presentation').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	asNavFor: '.portfolio-gallery-preview',
});

$('.similar-slider').slick({
	slidesToShow: 4,
	infinite: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.article-offers').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
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
			}
		}
	]
});

$('.recommended-articles-slider').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
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
			}
		}
	]
});

$('.subtleties-slider').slick({
	slidesToShow: 1,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
});

$('.latest-articles').slick({
	slidesToShow: 1,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
});

$('.stages-installation-slider').slick({
	slidesToShow: 1,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	appendArrows: '.stages-installation-slider__nav'
});

//auto counter total//
// var homeSlider = $('.stages-installation-slider');

// $('.counter-slide__default').text("/ " + homeSlider.slick("getSlick").slideCount);

// homeSlider.on('afterChange', function (event, slick, currentSlide) {
// 	$(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
// });
var pagingInfo = $('.stages-installation-slider__nav .counter-slide');
var teamSlider = $('.stages-installation-slider');

teamSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	var prefix = i < 10 ? '0' : '';
	var prefixAll = slick.slideCount < 10 ? '0' : '';
	pagingInfo.html('<span class="current">' + prefix + i + '</span>' + ' ' + '<span class="total">' + ' ' + prefixAll + slick.slideCount + '</span>');
});

// sliders end

$(document).ready(function () {
	$(".js-tab-trigger").click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.js-tab-content[data-tab="' + id + '"]');

		$('.js-tab-trigger.active').removeClass('active'); // 1
		$(this).addClass('active'); // 2

		$('.js-tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	});
});

// mobile menu
$('.btn-burger').click(function () {
	$('.header-bottom').fadeToggle();
});

$('.mobile-menu__close').click(function () {
	$('.header-bottom').fadeOut();
});

if ($('.slider-range')) {

	let lmin = $('#id_min').val();
	lmin = parseInt(lmin);
	let lmax = $('#id_max').val();
	lmax = parseInt(lmax);
	$('.slider-range').slider({
		range: true,
		min: lmin,
		max: lmax,
		values: [lmin, lmax],
		classes: {
			"ui-slider-handle": "ui-corner-all"
		},
		slide: function (event, ui) {
			//Поле минимального значения
			$(".dec1").val(ui.values[0]);
			//Поле максимального значения
			$(".dec2").val(ui.values[1]);
		},
		stop: function (event, ui) {
			//Поле минимального значения
			search_amount();
			$('#my_filter_form').submit();
		}, change: function (event, ui) {
			//Поле минимального значения
			search_amount();
		},
	});

	$(".dec1").val($(".slider-range").slider("values", 0));
	$(".dec2").val($(".slider-range").slider("values", 1));
}

// hidden list > 5
$('.list-checkbox').each(function () {
	if ($(this).find('li').length > 5) {
		$(this).find('li').slice(5).hide();
		$(this).parent('.accordion-body').append('<a href="#" class="color-accent link-toggle-all">показать все</a>');
	}
});

// hidden list > 5

// show list all
$('.link-toggle-all').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parent().find('ul li');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('Скрыть');

		content.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.html('показать все');

		content.slice(16).slideUp();
	}
});

$('.link-all-characteristics').on('click', function (e) {
	/* e.preventDefault();*/
	$('#nav-tab2').trigger('click');

	/* var
			 $this = $(this),
			 content = $(this).parents('.page-product').find('.list-characteristics-product li');


	 if (!$this.hasClass('trigger')) {
			 $this.addClass('trigger');
			 $this.html('Скрыть');

			 content.css('display', 'flex');
	 } else {
			 $this.removeClass('trigger');
			 $this.html('показать все');

			 content.slice(7).css('display', 'none');
	 }*/
});

$('.btn-toggle-tags').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parents('.list-tags').find('.list-tags__links');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('показать все');
		content.slice(10).css('display', 'none');

	} else {
		$this.removeClass('trigger');
		$this.html('Скрыть');
		content.css('display', 'flex');
	}
});

$('.links-toggle-menu').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $('.keep-menu');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('свернуть');
		content.removeClass('hidden');

	} else {
		$this.removeClass('trigger');
		$this.html('развернуть');
		content.addClass('hidden');
	}
});
// show list all

// load more
$('.link-load-portfolio').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.row').find('.work-item-col:hidden').slice(0, 4).slideDown();

	var onBlock = $(this).parents('.row').find('.work-item-col:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

// sidebar
$('.btn-filter').click(function () {
	$('.sidebar').fadeToggle();
});

$('.sidebar-close').click(function () {
	$('.sidebar').fadeOut();
});

$(".js-tab-trigger").click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="' + id + '"]');

	$('.js-tab-trigger.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.js-tab-content.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});


$('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
	$('.tab-content .slick-slider').slick('setPosition');
});

$(document).on('change', '.attr_check', function () {
	$('.checkbox-result-value').remove();
	search_amount(1, $(this));
});
$(document).on('click', '.class_sort', function () {

	$('.sorting-box__btn').html($(this).data('name'));
	$('#id_sort').val($(this).data('id'));
	search_amount(2);
})

function search_amount(is_show, item) {

	let attr_array = [];
	$('.attr_check:checked').each(function (item) {
		let attr_id = $(this).data('attr_id');
		let ma = {
			"attr_id": attr_id,
			"val": $(this).val()
		};
		attr_array.push(ma);


	});

	let minprice = $('.dec1').val();
	let maxprice = $('.dec2').val();
	let page = $('#id_page').val();
	let sort = $('#id_sort').val();
	let id_catalog = $('#id_catalog').val();

	f = is_show;
	if (is_show == 2) {
		page = 1;
		f = 0;
	}
	$.ajax({
		url: '/ajax/catalog/',
		method: 'POST',
		data: {
			id_catalog: id_catalog,
			sort: sort,
			page: page,
			maxprice: maxprice,
			minprice: minprice,
			attr_array: attr_array,
			is_show: f,
			q: $('#id_q').val(),


		},
		success: function (data) {
			if (f == 1) {
				$(item).closest('.label-checkbox').append(`<span class="checkbox-result-value">Показать <span class="color-accent">` + data.amount + ` товаров</span></span>`);


			}
			if (is_show == 2) {
				$('.for_products').html(data.html);
				$('.productModal_btn').html('Быстрый просмотр')
			}

			if (page > 1) {
				$('.for_products').append(data.html);
				$('.productModal_btn').html('Быстрый просмотр')
			}

		}


	});


}

$(document).on('click', '.checkbox-result-value', function (e) {
	e.preventDefault();
	$('#my_filter_form').submit();
});
$(document).on('click', '.show_more', function (e) {
	e.preventDefault();
	$('.nav-pagination').remove();
	page = parseInt($('#id_page').val());
	page = page + 1;

	$('#id_page').val(page)
	search_amount(0, null);
	return false;
});
$(document).on('click', '.productModal_btn', function (e) {

	$('.productModal_body').html('');
	$('#productModal').modal('show');
	$.ajax({
		url: '/ajax/get_product/',
		method: 'POST',
		data: {
			id: $(this).data('id'),


		},
		success: function (data) {

			$('.productModal_body').html(data.html);
			$(document).ready(function () {
				$(".js-tab-trigger").click(function () {
					var id = $(this).attr('data-tab'),
						content = $('.js-tab-content[data-tab="' + id + '"]');

					$('.js-tab-trigger.active').removeClass('active'); // 1
					$(this).addClass('active'); // 2

					$('.js-tab-content.active').removeClass('active'); // 3
					content.addClass('active'); // 4
				});
			});
		}


	});
	return false
		;

});


var blog_page = 1;
$(document).on('click', '.show_more_blog', function (e) {
	e.preventDefault();
	blog_page++
	$('.nav-pagination').remove();
	$.ajax({
		url: '/ajax/blog/',
		method: 'POST',
		data: {
			slug: $("#get_slug").val(),
			v: $('#get_v').val(),
			page: blog_page,


		},
		success: function (data) {


			if (blog_page > 1) {
				$('.for_products').append(data.html)
			}
			//
		}


	});
	return false;
});
var portfolio_page = 1;
$(document).on('click', '.show_more_portfolio', function (e) {
	e.preventDefault();
	portfolio_page++
	$('.nav-pagination').remove();
	$.ajax({
		url: '/ajax/show_more_portfolio/',
		method: 'POST',
		data: {

			page: portfolio_page,


		},
		success: function (data) {


			if (portfolio_page > 1) {
				$('.for_products').append(data.html);



				$('.portfolio-gallery-preview').slick({
					slidesToShow: 5,
					adaptiveHeight: true,
					infinite: true,
					vertical: true,
					verticalSwiping: true,
					focusOnSelect: true,
					asNavFor: '.portfolio-gallery-presentation',
					prevArrow: '<button type="button" class="slick-prev"></button>',
					nextArrow: '<button type="button" class="slick-next"></button>',
					responsive: [
						{
							breakpoint: 480,
							settings: {
								vertical: false,
								verticalSwiping: false,
								slidesToShow: 2,
							}
						}
					]
				});

				$('.portfolio-gallery-presentation').slick({
					slidesToShow: 1,
					fade: true,
					arrows: false,
					asNavFor: '.portfolio-gallery-preview',
				});

			}
			if (data.last <= portfolio_page) {
				$('.show_more_portfolio').remove();
			}


		}


	});
	return false;
});

$('.productModal_btn').html('Быстрый просмотр');
$(document).on('click', '.open_modal_callback', function () {



	$(".btn-close").trigger({ type: "click" }); //11edd
	console.log(1);
	//1
	let name_but = $(this).html();
	$('#f_button').val(name_but);
	$('#modalCallback').modal('show');
	return false;
})

$(document).on('click', '.callbak_form_button', function () {
	$('.f_error').html('');
	let f_name = $('#f_name').val();
	let f_phone = $('#f_phone').val();
	let f_url = $('#f_url').val();
	let f_button = $('#f_button').val();
	let f_type = $('#f_type').val();
	if (f_name == '') {
		$('.f_error').html('Введите имя');
		return;
	}
	if (f_phone == '') {
		$('.f_error').html('Введите телефон');
		return;
	}

	let data = {
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}
	$('#modalCallback').modal('hide');
	send_form(data);
	$('#f_name').val('');
	$('#f_phone').val('');
	return false;
});
$(document).on('click', '.get_a_file', function () {
	$('.f_error_1').html('');
	let f_name = '';
	let f_phone = $('#f_phone_1').val();
	let f_url = $('#f_url_1').val();
	let f_button = $(this).html();
	let f_type = $('#f_type_1').val();

	if (f_phone == '') {
		$('.f_error_1').html('Введите телефон');
		return;
	}

	let data = {
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}

	send_form(data);
	$('#f_phone_1').val('');
	return false;
});
$(document).on('click', '.get_a_file4', function () {
	$('.f_error_4').html('');
	let f_name = '';
	let f_phone = $('#f_phone_4').val();
	let f_url = $('#f_url_4').val();
	let f_button = $(this).html();
	let f_type = $('#f_type_4').val();

	if (f_phone == '') {
		$('.f_error_4').html('Введите телефон');
		return;
	}

	let data = {
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}

	send_form(data);
	$('#f_phone_4').val(''); return false;
});
$(document).on('click', '.get_a_file5', function () {
	$('.f_error_5').html('');
	let f_name = '';
	let f_phone = '';
	let f_email = $('#f_email_5').val();
	let f_url = $('#f_url_5').val();
	let f_button = $(this).html();
	let f_type = $('#f_type_5').val();

	if (f_email == '') {
		$('.f_error_5').html('Введите E-mail');
		return;
	}

	let data = {
		f_email: f_email,
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}

	send_form(data);
	$('#f_email_5').val(''); return false;
});
$(document).on('click', '.button_send_f_6', function () {
	$('.f_error_6').html('');
	let f_name = $('#f_name_6').val();
	let f_phone = $('#f_phone_6').val();
	let f_email = $('#f_email_6').val();
	let f_message = $('#f_message_6').val();
	let f_url = $('#f_url_6').val();
	let f_button = $(this).html();
	let f_type = $('#f_type_6').val();

	if (f_email == '') {
		$('.f_error_6').html('Введите E-mail');
		return;
	}
	if (f_phone == '') {
		$('.f_error_6').html('Введите Телефон');
		return;
	}

	let data = {
		f_email: f_email,
		f_message: f_message,
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}

	send_form(data);
	$('#f_phone_6').val('');
	$('#f_name_6').val('');
	$('#f_email_6').val('');
	$('#f_message_5').val(''); return false;
});
$(document).on('click', '.button_send_f_7', function () {
	i = 7;
	$('.f_error_' + i).html('');
	let f_name = '';
	let f_phone = '';
	let f_email = $('#f_email_' + i).val();
	let f_message = $('#f_message_' + i).val();
	let f_url = $('#f_url_' + i).val();
	let f_button = $(this).html();
	let f_type = $('#f_type_' + i).val();

	if (f_email == '') {
		$('.f_error_' + i).html('Введите E-mail');
		return;
	}


	let data = {
		f_email: f_email,
		f_message: f_message,
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}

	send_form(data);

	$('#f_email_' + i).val('');
	$('#f_message_' + i).val(''); return false;
});
$(document).on('click', '.button_send_f_8', function () {
	i = 8;
	$('.f_error_' + i).html('');
	let f_name = $('#f_name_' + i).val();
	let f_phone = $('#f_phone_' + i).val();;
	let f_email = $('#f_email_' + i).val();
	let f_message = $('#f_message_' + i).val();
	let f_url = $('#f_url_' + i).val();
	let f_button = $(this).html();
	let f_type = $('#f_type_' + i).val();

	if (f_email == '') {
		$('.f_error_' + i).html('Введите E-mail');
		return;
	}

	if (f_phone == '') {
		$('.f_error_' + i).html('Введите Телефон');
		return;
	}

	let data = {
		f_email: f_email,
		f_message: f_message,
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}

	send_form(data);

	$('#f_phone_' + i).val('');
	$('#f_name_' + i).val('');
	$('#f_email_' + i).val('');
	$('#f_message_' + i).val(''); return false;
});
$(document).on('click', '.button_send_f_9', function () {
	i = 9;
	$('.f_error_' + i).html('');
	let f_name = '';
	let f_phone = $('#f_phone_' + i).val();;
	let f_email = '';
	let f_message = '';
	let f_url = $('#f_url_' + i).val();
	let f_button = $(this).html();
	let f_type = $('#f_type_' + i).val();


	if (f_phone == '') {
		$('.f_error_' + i).html('Введите Телефон');
		return;
	}

	let data = {
		f_email: f_email,
		f_message: f_message,
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}

	send_form(data);

	$('#f_phone_' + i).val(''); return false;

});
$(document).on('click', '.button_send_f_10', function () {
	i = 10;
	$('.f_error_' + i).html('');
	let f_name = '';
	let f_phone = '';
	let f_email = $('#f_email_' + i).val();;
	let f_message = '';
	let f_url = $('#f_url_' + i).val();
	let f_button = $(this).html();
	let f_type = $('#f_type_' + i).val();


	if (f_email == '') {
		$('.f_error_' + i).html('Введите E-mail');
		return;
	}

	let data = {
		f_email: f_email,
		f_message: f_message,
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}

	send_form(data);

	$('#f_email_' + i).val(''); return false;

});
$(document).on('click', '.button_send_f_11', function () {
	i = 11;
	$('.f_error_' + i).html('');
	let f_name = '';
	let f_phone = '';
	let f_email = $('#f_email_' + i).val();;
	let f_message = '';
	let f_url = $('#f_url_' + i).val();
	let f_button = $(this).html();
	let f_type = $('#f_type_' + i).val();


	if (f_email == '') {
		$('.f_error_' + i).html('Введите E-mail');
		return;
	}

	let data = {
		f_email: f_email,
		f_message: f_message,
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}

	send_form(data);

	$('#f_email_' + i).val(''); return false;

});
$(document).on('click', '.form_btn_consult', function () {
	$('.f_error_2').html('');
	let f_name = $('#f_name_2').val();
	let f_phone = $('#f_phone_2').val();
	let f_url = $('#f_url_2').val();
	let f_button = $(this).html();
	let f_type = $('#f_type_2').val();

	if (f_phone == '') {
		$('.f_error_2').html('Введите телефон');
		return;
	}
	if (f_name == '') {
		$('.f_error_2').html('Введите имя');
		return;
	}

	let data = {
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}

	send_form(data);
	$('#f_phone_2').val(''); return false;
});
$(document).on('click', '.form_btn_vibor', function () {
	$('.f_error_3').html('');
	let f_name = '';
	let f_phone = $('#f_phone_3').val();
	let f_url = $('#f_url_3').val();
	let f_button = $(this).html();
	let f_type = $('#f_type_3').val();

	if (f_phone == '') {
		$('.f_error_3').html('Введите телефон');
		return;
	}


	let data = {
		f_name: f_name,
		f_phone: f_url,
		f_url: f_url,
		f_button: f_button,
		f_type: f_type,

	}

	send_form(data);
	$('#f_phone_3').val(''); return false;
});

function send_form(data) {

	$.ajax({
		method: 'POST',
		url: '/ajax/send_form/',
		data: data,
		success: function () {


			$('#modalThanks').modal('show');
			NeirosEventSend('test-event', {
				type: 'form',
				data: {
					name: data.f_name,
					email: data.f_email,
					phone: data.f_phone,
				},
			});

		}


	})


}
