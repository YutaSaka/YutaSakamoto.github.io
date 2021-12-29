import $ from 'jquery'
// import router from './modules/Router'

$(document).on('ready', function () {
  $(".full-screen").slick({
    centerMode: true,
    centerPadding: '10%',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: false
      }
    }]
  });
});
$(".p-humburger__box").on("click", function () {
  $(".p-humburger__toggle").toggleClass("close");
  $(".p-humburger").slideToggle();
});
$(".p-humburger__close").on("click", function () {
  $(".p-humburger__toggle").toggleClass("close");
  $(".p-humburger").slideToggle();
});
var appear = false;
var pagetop = $('.p-pageTop');
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    if (appear == false) {
      appear = true;
      pagetop.stop().animate({
        'bottom': '50px'
      }, 300);
    }
  } else {
    if (appear) {
      appear = false;
      pagetop.stop().animate({
        'bottom': '-50px'
      }, 300);
    }
  }
});
pagetop.click(function () {
  $('body, html').animate({
    scrollTop: 0
  }, 500);
  return false;
});
