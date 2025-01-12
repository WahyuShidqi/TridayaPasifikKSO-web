var swiper3 = new Swiper(".mySwiper3", {
  grabCursor: true,
  effect: "creative",
  autoplay: {
    delay: 3000, // 3 seconds per slide
    disableOnInteraction: false, // Keeps autoplay running even after user interaction
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
