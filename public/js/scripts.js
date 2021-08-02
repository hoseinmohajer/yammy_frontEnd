import React from "react";

$(document).ready(function() {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#dismiss, .overlay').on('click', function() {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
  });

  // $('#sidebarCollapse').on('click', function() {
  //   $('#sidebar').addClass('active');
  //   $('.overlay').addClass('active');
  //   $('.collapse.in').toggleClass('in');
  //   $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  // });
});

$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 5
      }
    }
  })
})
