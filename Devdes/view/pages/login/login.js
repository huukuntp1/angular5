
(function($) {
    'use strict';

    $(function() {
    /**
		*
		* show pass
		*
		*/
		$(".toggle-password").click(function() {
		  $(this).toggleClass("fa-eye fa-eye-slash");
		  var input = $($(this).attr("toggle"));
		  if (input.attr("type") == "password") {
		    input.attr("type", "text");
		  } else {
		    input.attr("type", "password");
			}
		});

			/**
		 *
		 * show pass
		 */

			var url = window.location.pathname;
			if (url = '/devdes.html/view/pages/login/login.html') {
				$('.wapper-form-log .link-tab a').removeClass('active');
				$('.link-login').addClass('active');
			}

    }); // end document ready


})(jQuery); // end JQuery namespace

