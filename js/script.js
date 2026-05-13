(function ($) {

  "use strict";

  $(document).ready(function () {

    // masonoary //

    initIsotope();

    // lightbox

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'fitImagesInViewport': true
    })

    /* swiper */


    var testimonialSwiper = new Swiper(".testimonial-swiper", {
      spaceBetween: 20,
      pagination: {
        el: ".testimonial-swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        800: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        }
      },
    });

  }); // End of a document ready

  // init Isotope
  var initIsotope = function () {

    $('.grid').each(function () {

      // $('.grid').imagesLoaded( function() {
      // images have loaded
      var $buttonGroup = $('.button-group');
      var $checked = $buttonGroup.find('.is-checked');
      var filterValue = $checked.attr('data-filter');

      var $grid = $('.grid').isotope({
        itemSelector: '.portfolio-item',
        // layoutMode: 'fitRows',
        filter: filterValue
      });

      // bind filter button click
      $('.button-group').on('click', 'a', function (e) {
        e.preventDefault();
        filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      // change is-checked class on buttons
      $('.button-group').each(function (i, buttonGroup) {
        $buttonGroup.on('click', 'a', function () {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
        });
      });
      // });

    });
  }

  var lastScrollTop = 0;

  $(window).scroll(function () {
    var st = $(this).scrollTop();

    // DETEKSI: Apakah menu hitam sedang terbuka?
    var isMenuOpen = $('.offcanvas').hasClass('show');

    // Jika menu sedang terbuka, STOP semua logika di bawah ini
    if (isMenuOpen) {
      return;
    }

    if (st > lastScrollTop && st > 50) {
      // Scroll ke bawah: Sembunyikan header
      $('.navbar').addClass('hide');
    } else {
      // Scroll ke atas: Munculkan header
      $('.navbar').removeClass('hide');
    }

    lastScrollTop = st;
  });


})(jQuery);