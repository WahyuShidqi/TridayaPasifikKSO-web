$(document).ready(function () {
  $("[data-fancybox='gallery']").fancybox({
    loop: true, // Allows infinite scrolling
    buttons: ["close"], // Adds a close button
    keyboard: true, // Enables keyboard navigation
    arrows: true, // Show left/right navigation arrows
    transitionEffect: "slide", // Smooth slide effect
    caption: function (instance, item) {
      return $(this).data("caption"); // Get caption from data attribute
    },
  });
});
