document.addEventListener("DOMContentLoaded", function () {
  //  main product slider
  new Swiper(".product-desc-slider", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    speed: 1300,
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
    },
  });

  // for tuna slider
  new Swiper(".my-swiper", {
    lazy: true,
    nav: false,

    slidesPerView: 2, // Default: 2 per view (for small screens)
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
      768: { slidesPerView: 3 }, // Show 3 products on MD
      1024: { slidesPerView: 4 }, // Show 4 products on LG
    },
  });

  // for marlin slider
  new Swiper(".marlin-swiper", {
    lazy: true,
    nav: false,

    slidesPerView: 2, // Default: 2 per view (for small screens)
    spaceBetween: 20,
    navigation: {
      nextEl: ".marlin-swiper-button-next",
      prevEl: ".marlin-swiper-button-prev",
    },
    loop: true,
    breakpoints: {
      768: { slidesPerView: 3 }, // Show 3 products on MD
      1024: { slidesPerView: 4 }, // Show 4 products on LG
    },
  });

  // for Cakalang slider

  new Swiper(".cakalang-swiper", {
    lazy: true,
    nav: false,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".cakalang-swiper-button-next",
      prevEl: ".cakalang-swiper-button-prev",
    },
    loop: true,
    breakpoints: {
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });

  // for baby-tuna product

  new Swiper(".babytuna-swiper", {
    lazy: true,
    nav: false,
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".babytuna-swiper-button-next",
      prevEl: ".babytuna-swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });

  // octopus swiper

  new Swiper(".octopus-swiper", {
    lazy: true,
    loop: true,
    nav: false,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".octopus-swiper-button-next",
      prevEl: ".octopus-swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });

  // spanish mackerel swiper / tenggiri
  new Swiper(".spanish-mackerel-swiper", {
    lazy: true,
    loop: true,
    nav: false,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".spanish-mackerel-swiper-button-next",
      prevEl: ".spanish-mackerel-swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });

  // largeheadhairtail swiper / layur
  new Swiper(".largeheadhairtail-swiper", {
    lazy: true,
    loop: true,
    nav: false,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".largeheadhairtail-swiper-button-next",
      prevEl: ".largeheadhairtail-swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });

  // other product
  new Swiper(".other-swiper", {
    lazy: true,
    loop: true,
    nav: false,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".other-swiper-button-next",
      prevEl: ".other-swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });

  // about us / opinion swiper
  new Swiper(".opinion-slider", {
    lazy: true,
    nav: false,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 20,
    rewind: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      500: { slidesPerView: 2 },
      1000: { slidesPerView: 3 },
    },
  });

  // about us / client swiper
  new Swiper(".client-slider", {
    lazy: true,
    nav: false,
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 10,
    rewind: true,
    autoplay: {
      delay: 2500,
      pauseOnMouseEnter: false,
    },
    breakpoints: {
      400: { slidesPerView: 2 },
      750: { slidesPerView: 3 },
      1000: { slidesPerView: 4 },
    },
  });
});
