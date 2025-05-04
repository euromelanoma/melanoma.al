$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3300,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      1024: {
        items: 3,
      },

      1366: {
        items: 4,
      },
    },
  });
});
