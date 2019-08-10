var country_dynamic = 13;
var test = "";

$(document).ready(function () {

    $("#wrap_done").hide();
    $("#loading_popup").hide();
    $("#button1").hide();
    $("#yes").hide();
    $("#yescheck").hide();
    $("#romania_error").hide();
    $('#list-bro').click(function (e) {
        $("#loading_popup").fadeIn("slow");
    });
    // Ajax to return value from php to javscript

    $('#list-bro1').click(function (e) {
        $("#loading_popup").fadeIn("slow");
    });
    $('#loading_popup').click(function (e) {
        $("#loading_popup").fadeOut("slow");
    });
    $(window).unload(function () {

    });
    $("#button1").hide();
    $("#Brochures1").hide();
    $('#wrap').show();
    $("#dropdown_1").show();
    $("#dropdown_2").show();
    $("#yes").hide();
    document.getElementById('yeschecked').checked = true;
    $("#yeschecked").hide();
    $("#closePopup").text((translations_Brazil['BR']['close']));
    $("#ok").text((translations_Brazil['BR']['ok']));
    $("#Disclaimertext1").show();
    $("#Disclaimertext1").text((translations_Brazil['BR']['disclaimer']));
    $("#Book_1").show();
    $("#Book_1").text((translations_Brazil['BR']['book']));
    $("#submit").text((translations_Brazil['BR']['submit']));
    $("#Brochures2").show();
    $("#Iamm1").show();
    $("#Iam1").text((translations_Brazil['BR']['Iam']));
    $("#Iamd1").text((translations_Brazil['BR']['Iamd']));
    $("#Disclaimer1").show();
    $("#Disclaimertext1").text((translations_Brazil['BR']['disclaimer']));
    $("#popup_content").text((translations_Brazil['BR']['disclaimer_body']));
    $("#VbroH1").text((translations_Brazil['BR']['Vbro_head']));
    $("#Vbro1").text((translations_Brazil['BR']['Vbro']));
    $("#con1").text((translations_Brazil['BR']['your_con']));
    $("#model1").text((translations_Brazil['BR']['choose_model']));
    $('#country_selected').val((translations_Brazil['BR']['book']));
    $('#Invalid').val((translations_Brazil['BR']['error_message']));
    $('#required').val((translations_Brazil['BR']['required']));
    $('#thankyou').val((translations_Brazil['BR']['thankyou_title']));
    $('#sorry').val((translations_Brazil['BR']['Sorry']));
    $('#Invalid_email').val((translations_Brazil['BR']['Invalid_email']));
    $('#country').val("BR");

    var dropdownloop_1 = parseInt((translations_Brazil['BR']['droptext_1_limit']));
    var dropdownloop_2 = parseInt((translations_Brazil['BR']['droptext_2_limit']));

    var _select = $('<select>');
    _select.append($('<option></option>').val('').html((translations_Brazil['BR']['droptext_2_0'])));

    for ( var i = 1; i <= dropdownloop_2; i++ ) {
        _select.append($('<option></option>').val((translations_Brazil['BR']['droptext_2_'+i])).html((translations_Brazil['BR']['droptext_2_'+i])));
    }
    $('#dropdown_1').append(_select.html());
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var _select1 = $('<select>');
    _select1.append($('<option></option>').val('').html((translations_Brazil['BR']['droptext_1_0'])));

    for ( var i = 1; i <= dropdownloop_1; i++ ) {
        _select1.append($('<option></option>').val((translations_Brazil['BR']['droptext_1_'+i])).html((translations_Brazil['BR']['droptext_1_'+i])));
    }
    $('#dropdown_2').append(_select1.html());
    $("#namepercountry").text((translations_Brazil['BR']['namepercountry']));
    $("#namepercountry1").text((translations_Brazil['BR']['namepercountry1']));
    $("#namepercountry2").text((translations_Brazil['BR']['namepercountry2']));
    $("#namepercountry3").text((translations_Brazil['BR']['namepercountry3']));

    document.getElementById('full_name').title = (translations_Brazil['BR']['namepercountry']);
    document.getElementById('email').title = (translations_Brazil['BR']['namepercountry2']);
    document.getElementById('phone').title = (translations_Brazil['BR']['namepercountry3']);
    document.getElementById('area_phone').title = ("area");

    $("#kept_phone").val((translations_Brazil['BR']['namepercountry3']));

    $(document).ready(function () {
        $('input[type="text"]').each(function () {
            this.value = $(this).attr('title');
            $(this).addClass('text-label');
            $(this).focus(function () {
                if (this.value == $(this).attr('title')) {
                    this.value = '';
                    $(this).removeClass('text-label');
                }
            });

            $(this).blur(function () {
                if (this.value == '') {
                    this.value = $(this).attr('title');
                    $(this).addClass('text-label');
                }
            });
        });
    });

});

function backScreen(){
    $('#wrap_done').hide();
    $("#button1").hide();
    $('#address').show();
    $('#car').show();
    $('#dealer').show();
    $('#Brochures_Location').show();
    $('#Vbro1').show();
    $('#VbroH1').show();
}



