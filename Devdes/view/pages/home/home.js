
(function ($) {
    'use strict';

    $(function () {
        /**
         *
         * slide
         *
         */
        $('.home-slider').slick({
            dots: false,
            slidesPerRow: 4,
            rows: 2,
            nextArrow: '<a href="#" class="slick-next"><i class="icon-arrow-right"></i></a>',
            prevArrow: '<a href="#" class="slick-prev"><i class="icon-arrow-left"></i></a>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesPerRow: 3,
                        rows: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesPerRow: 2,
                        rows: 2,
                    }
                }
            ]
        });
        /**
         *
         * matchHeight for img slider
         *
         */
        $('.home-slider .item .img').matchHeight();
        
    }); // end document ready


})(jQuery); // end JQuery namespace

