(function($) {
    'use strict';

    $(function() {
        /**
          *
          * Show group login
          *
          */
        $('.header-login-icon').click(function(){
            $('.header-login-group').slideToggle("slow");
        });
        /**
          *
          * Customer scroll notification
          *
          */
        $(window).on("load resize", function () {
            var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (winWidth > 991) {
                $('.header-notification-list').mCustomScrollbar({
                    theme: "dark",
                    contentTouchScroll: true,
                    mouseWheel: { scrollAmount: 150 }
                });
            } else {
                var notificationHeight = $(window).height() - $('.header-notification-mobile-title').height();
                $('.header-notification-list').css('height', notificationHeight);
                $('.header-notification-list').mCustomScrollbar("destroy");
            }
        });

        /**
         *
         * Menu mobile
         *
         */
        $('.header-mobile-menu-icon').click(function(){
            $(this).toggleClass('show');
            if ($('.header-mobile-menu-icon').hasClass('show')){
                $('.header-mobile-menu-group').css('width', '250px');
                $('#main').css('margin-left', '250px');
                $('body').css('overflow','hidden');
                $('.header-fixed').css('left', '250px');
            } else {
                $('.header-mobile-menu-group').css('width', '0px');
                $('#main').css('margin-left', '0px');
                $('body').css('overflow', 'initial');
                $('.header-fixed').css('left', '0');
            }
            
        });
        /**
         *
         * Notification mobile  
         *
         */
        $('.header-login-mobile-avata').click(function(){
            $('.header-notification-mobile').addClass('show');
        });
        $('.btn-back').click(function(){
            $('.header-notification-mobile').removeClass('show');
        });
    }); // end document ready
    
})(jQuery); // end JQuery namespace


/**
 *
 * Fixed Menu
 *
 */
$(window).scroll(function () {
    var scroll = $(window).scrollTop()
    if (scroll > 0) {
        $("#header").addClass("header-fixed");
    } else {
        $("#header").removeClass("header-fixed");
    }
});