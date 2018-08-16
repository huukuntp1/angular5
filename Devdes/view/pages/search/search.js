(function () {
    //range filter
    var parent = document.querySelector("#rangeSlider");
    if (!parent) return;

    var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function (el) {
        el.oninput = function () {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
                // var tmp = slide2;
                // slide2 = slide1;
                // slide1 = tmp;
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach(function (el) {
        el.oninput = function () {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;

        }
        
    });

    //scroll filter option
    $(window).on("load resize", function () {
        var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (winWidth > 576) {
            $('.filter-option-content').mCustomScrollbar({
                theme: "dark",
                contentTouchScroll: true,
                mouseWheel: { scrollAmount: 150 }
            });
        } else {
            $('.filter-option-content').mCustomScrollbar("destroy");
        }
    });
    // show filter mobile
    $('.wrapper-left-filter-button').click(function(){
        $('.filter-mobile').addClass('show');
    });
    $('.filter-mobile-back').click(function(e){
        e.preventDefault()
        $('.filter-mobile').removeClass('show');
    })

    //still
    $('#add_checkbox_still').each(function () {
        var default_value = this.value;
        $(this).focus(function () {
            if (this.value == default_value) {
                this.value = '';
            }
        });
        $(this).blur(function () {
            if (this.value == '') {
                this.value = default_value;
            }
        });
    });

})();
function addCheckboxStill(ele) {
    var value_text = $('#add_checkbox_still').val().replace(/\s/g, '');
        if (event.key === 'Enter') {
            $('#list-add-checkbox-still').prepend('<div class="custom-control custom-radio d-flex justify-content-between align-items-top pl-0"><p class= "mb-0" >' + $('#add_checkbox_still').val() + ' </p > <input type="radio" name="customRadio" class="custom-control-input" id="' + value_text + '">  <label class="custom-control-label" for="' + value_text +'"></label> </div>');
            $('#add_checkbox_still').val("");
        }
        
    }

function addCheckboxCity(ele) {
    var value_text = $('#add_checkbox_city').val().replace(/\s/g, '');
    if (event.key === 'Enter') {
        $('#list-add-checkbox-city').prepend('<div class="custom-control custom-radio d-flex justify-content-between align-items-top pl-0"><p class= "mb-0" >' + $('#add_checkbox_city').val() + ' </p > <input type="radio" name="customRadio" class="custom-control-input" id="' + value_text + '">  <label class="custom-control-label" for="' + value_text + '"></label> </div>');
        $('#add_checkbox_city').val("");
    }

}