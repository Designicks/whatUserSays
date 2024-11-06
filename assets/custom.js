// Testimonial Slider Configurations
$(".testimonial-carousel").owlCarousel({
  loop: true,
  item: 5,
  margin: 60,
  left: 0,
  nav: true,
  center: true,
  dots: false,
  autoplayHoverPause: true,
  rewind: false,
  mouseDrag: true,
  touchDarg: true,
  lazyload: true,
  autoplay: true,
  autoplayTimeout: 4600,
  autoplaySpeed: 5400,
  smartSpeed: 100,
  fluidSpeed: true,
  responsive: {
    0: {
      items: 1,
    },
    350: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1292: {
      items: 4,
    },
  },
});
