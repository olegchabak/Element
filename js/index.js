$(function () {

	// ПОДКЛЮЧЕНИЕ СДАЙДЕРОВ в разделе МАТЕРИАЛЫ

	$('.prom__items').slick({
		dots: true,
		arrows: false,
		infinite: false,
		speed: 300,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 10000,
				settings: "unslick"
			}
		]
	});

	$('.spec__items').slick({
		dots: true,
		arrows: false,
		infinite: false,
		speed: 300,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 10000,
				settings: "unslick"
			}
		]
	});

	$('.arh__items').slick({
		dots: true,
		arrows: false,
		infinite: false,
		speed: 300,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 10000,
				settings: "unslick"
			}
		]
	});

	// СТРАНИЦА О НАС

	$('.about-slider__items').slick({
		dots: true,
		arrows: false,
		infinite: false,
		speed: 300,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 10000,
				settings: "unslick"
			}
		]
	});


	// ПОИСК
	$(".btn.btn-outline-secondary").click(function (ev) {
		ev.preventDefault();
		$(".form__search").toggleClass("active");
		$(".form__search input").val("");
		$("#navbarNavAltMarkup").addClass("collapse navbar-collapse")
		$(".navbar-nav").removeClass("active");
		$(".navbar-toggler").removeClass("active");
	});

	$(".search__label").on("click", function () {
		if ($(".form__search input").val() != "") {
			$(".form-inline").submit();
		}
	});

	$(window).scroll(function () {
		$(".form__search").removeClass("active");
		$("#navbarNavAltMarkup").addClass("collapse navbar-collapse")
		$(".navbar-nav").removeClass("active");
		$(".navbar-toggler").removeClass("active");
	});

	$(window).resize(function () {
		$(".form__search").removeClass("active");
		$("#navbarNavAltMarkup").addClass("collapse navbar-collapse")
		$(".navbar-nav").removeClass("active");
		$(".navbar-toggler").removeClass("active");
	});

	$(".navbar-expand-lg").click(function () {
		if ($(document).width() < 992) {
			$(".navbar-toggler").toggleClass("active");
			$("#navbarNavAltMarkup").toggleClass("collapse navbar-collapse")
			$(".navbar-nav").toggleClass("active");
			var pos = ($(".hero").offset().top - $(window).scrollTop() + 1) + "px";
			$(".navbar-nav").css("top", pos);
			$(".form__search").removeClass("active");
		}
	})

	// СТРАНИЦА КАТАЛОГ
	// Форма поиска

	$(".catalog-form__show").on("click", function (ev) {
		ev.preventDefault();
		$(".catalog-form__search").toggleClass("open");
		$(".catalog-form__submit").toggleClass("open");
		$(".catalog-form__search").val("");
	})


	//ПЕРЕКЛЮЧЕНИЕ ТАБОВ
	var tabnavs = $(".tab-nav__item");
	var tabs = $(".tab__item");

	function clearTabs() {
		$(".tab-nav__item").each(function () {
			$(this).removeClass("tab-nav__item--active");
		})
		$(".tab__item").each(function () {
			$(this).removeClass("active");
		})
	}

	$(".tab-nav__descr").on("click", function (ev) {
		ev.preventDefault();
		clearTabs();
		$(".tab-nav__descr").addClass("tab-nav__item--active");
		$(".tab__descr").addClass("active");
	});

	$(".tab-nav__chars").on("click", function (ev) {
		ev.preventDefault();
		clearTabs();
		$(".tab-nav__chars").addClass("tab-nav__item--active");
		$(".tab__chars").addClass("active");
	});

	$(".tab-nav__docs").on("click", function (ev) {
		ev.preventDefault();
		clearTabs();
		$(".tab-nav__docs").addClass("tab-nav__item--active");
		$(".tab__docs").addClass("active");
	});

	// СПИСОК ТОВАРОВ
	// Удаление товара

	var closeBtns = $(".item__close");
	for (let i = 0; i < closeBtns.length; i++) {
		closeBtns[i].addEventListener("click", function (ev) {
			ev.preventDefault();
			$(this).parent().parent().remove();
			let count = $(".item__close");
			console.log(count.length);
			if (count.length == 0) {
				$(".spisok").addClass("empty");
			}
		})
	}
	;

	// ОБРАБОТКА ИНПУТОВ
	var inputs = $("input");

	for (let i = 0; i < inputs.length; i++) {

		if (inputs[i].value != "") {
			inputs[i].classList.add("fill");
		} else {
			inputs[i].classList.remove("fill");
		}
		;

		inputs[i].addEventListener("blur", function () {
			console.log(inputs[i].value);
			if (inputs[i].value != "") {
				inputs[i].classList.add("fill");
			} else {
				inputs[i].classList.remove("fill");
			}
		})
	}
	;

	// ФОРМА ОБРАТНОГО ЗВОНКА
	$(".magnific-callback").magnificPopup({
		type: 'inline'
	})

	// СООБЩЕНИЕ ПОСЛЕ ОТПРАВКИ ВОПРОСА
	$(".magnific-questions").magnificPopup({
		type: 'inline'
	});

	// ФИЛЬТРЫ
	$(".filter__button").on("click", function(ev){
		$(this).toggleClass("filter__button--open")
	});

	$(".filters__button").on("click", function(ev){
		ev.preventDefault();
		$(".filters__button").toggleClass("filters__button--open");

		$(".filters__button").hasClass("filters__button--open")
			? $(".catalog-form").css("display","none")
			: $(".catalog-form").css("display","flex")
	});


	// Yandex Maps
	// Check mobile phone
	var isMobile;
	$(window).width() < 576 ? isMobile = true : isMobile = false;

	// YMaps
	var myMap = false;

	function init() {
		// Создание карты.
		myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [55.723326, 37.621301],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 13,
			controls: ['zoomControl']

		});

		// Создаём макет содержимого
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),

			// Создаем геообъект с типом геометрии "Точка".
			myGeoObject = new ymaps.GeoObject({
				// Описание геометрии.
				geometry: {
					type: "Point",
					coordinates: [55.723326, 37.621301],
				},
				// Свойства.
				properties: {
					// Контент метки.
					hintContent: '115093, г. Москва, ул. Люсиновская, д. 36с1, <br>Бизнес-центр ГЛАСС ХАУС, <br>Офис компании ЭЛЕМЕНТ',
					balloonContent: '115093, г. Москва, ул. Люсиновская, д. 36с1, <br>Бизнес-центр ГЛАСС ХАУС, <br>Офис компании ЭЛЕМЕНТ',
					iconCaption: 'ЭЛЕМЕНТ'
				}
			}, {
				//вид иконки
				preset: 'islands#dotIcon',
				//цвет иконки
				iconColor: '#2db6fd',
				// Метку разрешить перемещать?
				draggable: false
			});
		// добавляем на карту созданные метки (гео-объекты)
		myMap.geoObjects
			.add(myGeoObject);
		// Обесцвечиваем карту
		myMap.panes.get('ground').getElement().style.filter = 'grayscale(20%)';

		// На мобильных
		if (isMobile) {
			// отключаем drag - перемещение карты при нажатой левой кнопки мыши или касанием;
			myMap.behaviors.disable('drag');
			// добавляем возможность прокрутки страницы при таче на карту
			myMap.panes.get('events').getElement().style.touchAction = 'pan-y';
		}

		myMap.behaviors
		// Отключаем часть включенных по умолчанию поведений:
		//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
		// - scrollZoom - зум колесом мыши
			.disable(['scrollZoom', 'rightMouseButtonMagnifier'])
		// Включаем линейку.
		//.enable('ruler');
	}

	if (!myMap && $('#map').length) {
		ymaps.ready(init);
	}

	// end YMaps

});




