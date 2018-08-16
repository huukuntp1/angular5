
(function($) {
    'use strict';

    $(function() {
       
    /**
		*
		* show pass
		*
		*/
		$(".toggle-password").click(function() {
			$(this).toggleClass("icon-eye icon-eye-slash");
			var input = $($(this).attr("toggle"));
		  if (input.attr("type") == "password") {
		    input.attr("type", "text");
		  } else {
		    input.attr("type", "password");
		  }
		});

		/**
		*
		* height
		*
		*/
			var h_form_log = $(".wapper-form-log").height();
			var h_window = $(window).height();
			if (h_form_log < h_window){
				$('.wapper-form-log').addClass('form-vertical-middle');
			}
    }); // end document ready
		/**
	 *
	 * show pass
	 */

		var url = window.location.pathname;
		if (url = '/devdes.html/view/pages/signup/signup.html') {
			$('.wapper-form-log .link-tab a').removeClass('active');
			$('.link-signup').addClass('active');
		}

})(jQuery); // end JQuery namespace

