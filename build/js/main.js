// Fancybox.bind('[data-fancybox]', {});

jQuery(document).ready(function ($) {
  //tabs
  // $('.tabs').lightTabs();

  //phone mask
  $('[type=tel]').mask('+7 (999) 999-99-99');

  //faq toggle
  $('.section-faq__name').click(function () {
    // $(this).parent().toggleClass('active');
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(this).parent().find('.section-faq__text').slideUp(300);
    } else {
      $(this).parent().addClass('active');
      $(this).parent().find('.section-faq__text').slideDown(300);
    }
  });

  //mobile menu
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  $('.header-popup__close').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  // $(document).mouseup(function (e) {
  //   const container = $('.search');
  //   if (!container.is(e.target) && container.has(e.target).length === 0) {
  //     $('.header').removeClass('search-active');
  //     //container.removeClass('show-results');
  //   }
  // });

  let slidesCountEl = $('<div class="slick-slides-count" />');
  const $el = $('.section-main-slider');

  $el.on(
    'init reInit beforeChange',
    function (event, slick, currentSlide, nextSlide) {
      console.log('+');
      let slickEl = $(event.target);

      if (!slickEl.find('.slick-slides-count').length) {
        slidesCountEl.prependTo(slickEl);

        slidesCountEl = slickEl.find('.slick-slides-count');
      }

      let currentSlideCount = (nextSlide ? nextSlide : 0) + 1;

      slidesCountEl.html(
        '<span class="slick-slides-count__first">' +
          currentSlideCount +
          '</span><span class="slick-slides-count__divider"></span><span class="slick-slides-count__second">' +
          slick.slideCount +
          '</span>'
      );
    }
  );

  $el.slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    centerMode: false,
    variableWidth: true,
    arrows: false,
    // prevArrow:
    //   '<button type="button" class="slick-prev-main"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 12L14 16L18 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M2.66675 16.0001C2.66675 9.71469 2.66675 6.57199 4.61937 4.61937C6.57199 2.66675 9.71469 2.66675 16.0001 2.66675C22.2855 2.66675 25.4282 2.66675 27.3808 4.61937C29.3334 6.57199 29.3334 9.71469 29.3334 16.0001C29.3334 22.2855 29.3334 25.4282 27.3808 27.3808C25.4282 29.3334 22.2855 29.3334 16.0001 29.3334C9.71469 29.3334 6.57199 29.3334 4.61937 27.3808C2.66675 25.4282 2.66675 22.2855 2.66675 16.0001Z" stroke="white" stroke-width="1.5" /></svg></button>',
    // nextArrow:
    //   '<button type="button" class="slick-next-main"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 12L18 16L14 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M2.66675 16.0001C2.66675 9.71469 2.66675 6.57199 4.61937 4.61937C6.57199 2.66675 9.71469 2.66675 16.0001 2.66675C22.2855 2.66675 25.4282 2.66675 27.3808 4.61937C29.3334 6.57199 29.3334 9.71469 29.3334 16.0001C29.3334 22.2855 29.3334 25.4282 27.3808 27.3808C25.4282 29.3334 22.2855 29.3334 16.0001 29.3334C9.71469 29.3334 6.57199 29.3334 4.61937 27.3808C2.66675 25.4282 2.66675 22.2855 2.66675 16.0001Z" stroke="white" stroke-width="1.5" /></svg></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.nav-main-slider__prev').click(function () {
    $el.slick('slickPrev');
  });

  $('.nav-main-slider__next').click(function () {
    $el.slick('slickNext');
  });

  $('.section-tabs__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    prevArrow: $('.nav-slider__prev'),
    nextArrow: $('.nav-slider__next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
        },
      },
    ],
  });
  $('.nav-slider__prev').click(function () {
    $('.section-tabs__slider').slick('slickPrev');
  });

  $('.nav-slider__next').click(function () {
    $('.section-tabs__slider').slick('slickNext');
  });
  // $('.section-slider').slick({
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 3,
  //   centerMode: false,
  //   prevArrow:
  //     '<button type="button" class="slick-prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.5303 8.46967C11.2374 8.17678 10.7626 8.17678 10.4697 8.46967L7.46967 11.4697C7.17678 11.7626 7.17678 12.2374 7.46967 12.5303L10.4697 15.5303C10.7626 15.8232 11.2374 15.8232 11.5303 15.5303C11.8232 15.2374 11.8232 14.7626 11.5303 14.4697L9.81066 12.75H16C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25H9.81066L11.5303 9.53033C11.8232 9.23744 11.8232 8.76256 11.5303 8.46967Z" fill="#E95522" /></svg></button>',
  //   nextArrow:
  //     '<button type="button" class="slick-next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.4697 8.46967C12.7626 8.17678 13.2374 8.17678 13.5303 8.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L13.5303 15.5303C13.2374 15.8232 12.7626 15.8232 12.4697 15.5303C12.1768 15.2374 12.1768 14.7626 12.4697 14.4697L14.1893 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H14.1893L12.4697 9.53033C12.1768 9.23744 12.1768 8.76256 12.4697 8.46967Z" fill="#E95522" /></svg></button>',
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         arrows: false,
  //         dots: false,
  //         // centerMode: true,
  //         variableWidth: true,
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });

  //like tab
  $('.like-tab').click(function () {
    const id = $(this).data('id');
    $('.like-tab').parent().removeClass('active');
    $('.section-tabs__tab').removeClass('active');
    $(`.like-tab[data-id=${id}]`).parent().addClass('active');
    $(`.section-tabs__tab[data-text=${id}]`).addClass('active');
    $('.section-tabs__slider ').slick('refresh');
  });

  //like tab flat
  $('.flat-choose__list-tab').click(function () {
    const id = $(this).data('id');
    $('.flat-choose__list-tab').removeClass('active');
    $('.flat-choose__flats').removeClass('active');
    $(`.flat-choose__list-tab[data-id=${id}]`).addClass('active');
    $(`.flat-choose__flats[data-text=${id}]`).addClass('active');
  });

  //show video
  $('.section-steps__play').click(function () {
    $('.section-steps__thumb').hide();
    $('.section-steps__frame').show();
  });

  //slider floor
  function changeFloor(el, type) {
    const activeSlide = el
      .parent()
      .parent()
      .find('.floor-slider__slide.active');
    let activeFloor = activeSlide.data('floor');

    if (type === 'prev') {
      if (activeSlide.prev().length) {
        activeSlide.removeClass('active');
        activeSlide.prev().addClass('active');
        activeFloor--;
      }
    } else {
      if (activeSlide.next().length) {
        activeSlide.removeClass('active');
        activeSlide.next().addClass('active');
        activeFloor++;
      }
    }

    if ($('.floor-list').length) {
      $('.floor-list__item').removeClass('active');
      $(`.floor-list__item[data-floor=${activeFloor}]`).addClass('active');
    }
    if ($('.flats__floor-list ').length) {
      $('.floor-table').removeClass('active');
      $(`.floor-table[data-floor=${activeFloor}]`).addClass('active');
    }
  }

  $('.floor-slider__prev').click(function () {
    changeFloor($(this), 'prev');
  });

  $('.floor-slider__next').click(function () {
    changeFloor($(this), 'next');
  });

  //popups
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-with-zoom',
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
    },
  });
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true,
    },
  });
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});
