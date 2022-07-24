$(window).on("load", function () {
  $(".equipment__slider").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    navigation: true,
    slideBy: 4,
    responsive: {
      0: {
        items: 4,
        center: false,
        loop: true,
        autoplay: false,
        nav: true,
        autoplayHoverPause: true,
        animateOut: "slideOutUp",
        animateIn: "slideInUp",
      },
      768: {
        items: 2,
        center: true,
      },
      992: {
        items: 2,
        center: true,
      },
      1250: {
        items: 3,
      },
      1550: {
        items: 4,
      },
    },
  });
});
