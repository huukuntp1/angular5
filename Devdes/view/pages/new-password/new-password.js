
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

    }); // end document ready


})(jQuery); // end JQuery namespace

