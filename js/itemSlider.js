document.addEventListener("DOMContentLoaded", function () {
  // for tuna slider
  new Swiper(".my-swiper", {
    lazy: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },

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
});
