var hh = "";
var tick = "false";
var chh = 1;
//$(window).load(function(){
//  alert("loaded");
//});

jQuery(document).ready(function ($) {
    $('.forms').dcSlickForms();
    $('.image-swap').hover(
        function () {
            this.src = this.src.replace("_off", "_on");
        },
        function () {
            this.src = this.src.replace("_on", "_off");
        });
    $('#list-cars li a').click(function (e) {
        var v = $(this).text();
        $('#modell').val($.trim(v));
        var v1 = $('#modell').val();
        //  alert($('#modell').val());
        hh = $('#modell').val();
        if (hh == "") {
            //$("#car_error").css({"background":"url(bg_validate.png) 100px 100px repeat"});
            $("#car_error").css({"background": "#743829"});
        } else {

            $("#car_error").css({"background": "none"});
        }
        // $("#toptitle").text("");
        $("#car").css({"background-color": "none"});
        $('#list-cars li a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $('.checkbox-row a').click(function (e) {
        $(this).toggleClass('active');
        var v = $(this).hasClass('active') ? 'true' : 'false';
        $('#checkbox').val($.trim(v));

        // tick = $('#checkbox').val();
        if (tick == "false") {
            tick = "true";
            //  $("#tick_error").css({"background":"#743829"});
        } else {

            //  $("#tick_error").css({"background":"none"});

            tick = "false";

        }
        e.preventDefault();
    });

    $('.checkbox2-row a').click(function (e) {

        $(this).toggleClass('active');
        var v = $(this).hasClass('active') ? 'true' : 'false';
        $('#checkbox2').val($.trim(v));
        e.preventDefault();


    });
});
/*
 * DC jQuery Slick Forms - jQuery Slick Forms
 * Copyright (c) 2011 Design Chemical
 * http://www.designchemical.com
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 */

(function ($) {

    //define the plugin
    $.fn.dcSlickForms = function (options) {

        //set default options
        var defaults = {
            classError: 'error',
            classForm: 'slick-form',
            align: 'left',
            animateError: true,
            animateD: 10,
            ajaxSubmit: true
        };

        //call in the default otions
        var options = $.extend(defaults, options);
        //act upon the element that is passed into the design
        return this.each(function (options) {

            // Declare the function variables:
            var formAction = $(this).attr('action');
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var phone = /^\d+$/;
            var zipcode = /^\d+$/;
            //var textError = $('#v-error', this).val();
            // var textError = $('#Invalid').val();
            var textEmail = $('#v-email', this).val();
            var textPhone = $('#v-phone', this).val();
            var checkCarselected = $('#modell', this).val();
            var $error = $('<span class="error"></span>');
            var $form = this;
            var $loading = $('<div class="loading"><span></span></div>');
            var errorText = '* Required Fields';
            $('input', $form).focus(function () {
                $(this).addClass('focus');
            });
            $('input', $form).blur(function () {
                $(this).removeClass('focus');
            });
            $('.nocomment').hide();
            $('.defaultText', this).dcDefaultText();
            $('.' + defaults.classForm + ' label').hide();
            // Form submit & Validation
            $(this).submit(function () {
                formReset($form);
                var roman = document.getElementById('yeschecked');
                if (roman.checked) {
                    $("#romania_error").css({"background": "none"});
                } else {

                    $("#romania_error").css({"background": "#743829"});
                }
                $('.defaultText', $form).dcDefaultText({action: 'remove'});
                // Validate all inputs with the class "required"
                $('.required', $form).each(function () {
                    var label = $(this).attr('title');
                    var inputVal = $(this).val();
                    var $parentTag = $(this).parent();
                    if (inputVal == '') {
                        $parentTag.addClass('error').append($error.clone().text($('#required').val() + ' ' + $(this).attr('title')));
                    }
                    // Run the email validation using the regex for those input items also having class "email"
                    if ($(this).hasClass('email') == true) {

                        if (!emailReg.test(inputVal)) {
                            $parentTag.addClass('error').append($error.clone().text($('#Invalid_email').val()));
                        }
                    }


                    if ($(this).hasClass('phone') == true) {
                        if (!phone.test(inputVal) && inputVal != '') {
                            $parentTag.addClass('error').append($error.clone().text($('#Invalid').val()));
                        }
                    }

                    if ($(this).hasClass('zip_code') == true) {
                        if (!zipcode.test(inputVal) && inputVal != '') {
                            $parentTag.addClass('error').append($error.clone().text($('#Invalid_zipcode').val()));

                        }
                    }


                    //validated tick on over 18 years old by used global variable from above
                    //alert(tick);
                    if (tick == "false") {

                        $("#tick_error").css({"background": "#743829"});
                    }
                    if (tick == "true") {
                        $("#tick_error").css({"background": "none"});
                    }
                });
                // All validation complete - Check if any errors exist
                // If has errors
                console.log("checking button");
                if (($('.error', $form).length)) {
                    $('.btn-submit', this).before($error.clone().text(textError));
                } else {

                    //alert("TEST");
                    if (tick == "false") {
//alert(tick);
                    } else if ((tick == "true")) {
                        //  alert(tick);
                        if (roman.checked) {

                            doSubmit();

                        } else {


                        }

                    }
                    /*
                     if(defaults.ajaxSubmit == true){
                     doSubmit();
                     /*
                     var $response = $(this).next();
                     $(this).addClass('submit').after($loading.clone());
                     $('.defaultText',$form).dcDefaultText({action: 'remove'});
                     $.post(formAction, $(this).serialize(),function(data){
                     $('.loading').fadeOut().remove();
                     $response.html(data).fadeIn();
                     $('fieldset',this).slideUp();
                     });
                     } else {
                     //$form.submit();
                     }
                     */
                }
                // Prevent form submission
                return false;
            });

            // Fade out error message when input field gains focus
            $('input, textarea').focus(function () {
                var $parent = $(this).parent();
                $parent.addClass('focus');
                $parent.removeClass('error');

            });
            $('input, textarea').blur(function () {
                var $parent = $(this).parent();
                var checkVal = $(this).attr('title');
                if (!$(this).val() == checkVal) {
                    $(this).removeClass('defaulttextActive');
                }

                $parent.removeClass('error focus');
                $('span.error', $parent).hide();


            });

            $('.select', $form).click(function () {
                var $parent = $(this).parent();
                $parent.removeClass('error');
                $('span.error', $parent).hide();
            });


            $('.checkbox-row a').click(function () {
                var $parent = $(this).parent();
                $parent.removeClass('error');

            });


            $('#list-cars li a').click(function () {
                var $parent = $(this).parent();
                $parent.removeClass('error');


            });


            function formReset(obj) {
                $('li', obj).removeClass('error');
                $('span.error', obj).remove();
            }
        });
    };
})(jQuery);
/*
 * DC jQuery Default Text - jQuery Default Text
 * Copyright (c) 2011 Design Chemical
 * http://www.designchemical.com
 */

(function ($) {

    //define the plugin
    $.fn.dcDefaultText = function (options) {

        //set default options
        var defaults = {
            action: 'add', // alternative 'remove'
            classActive: 'defaultTextActive'
        };

        //call in the default otions
        var options = $.extend(defaults, options);

        return this.each(function (options) {

            if (defaults.action == 'add') {

                $(this).focus(function (srcc) {
                    if ($(this).val() == $(this)[0].title) {
                        $(this).removeClass(defaults.classActive);
                        $(this).val('');
                    }
                });

                $(this).blur(function () {
                    if ($(this).val() == "") {
                        $(this).addClass(defaults.classActive);
                        $(this).val($(this)[0].title);
                    }
                });
                $(this).addClass(defaults.classActive).blur();
            }

            if (defaults.action == 'remove') {

                var checkVal = $(this).attr('title');
                if ($(this).val() == checkVal) {
                    $(this).val('');
                }

            }
        });
    };
})(jQuery);