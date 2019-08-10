var country_dynamic = 12;
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

    $.ajax({
        url: "PHP/Geo_ip.php"
    }).done(function (msg) {

            //content_sub
            if (msg == "AT") {
                $('#Book1_12').text(translations['AT']['book']);
                $('#content_title').text(translations['AT']['content_title']);

            } else if (msg == "RO") {
                $('#Book1_12').text(translations['RO']['book']);
                $('#content_title').text(translations['RO']['content_title']);

            } else if (msg == "SI") {
                $('#Book1_12').text(translations['SI']['book']);
                $('#content_title').text(translations['SI']['content_title']);

            } else if (msg == "GR") {
                $('#Book1_12').text(translations['GR']['book']);
                $('#content_title').text(translations['GR']['content_title']);

            } else if (msg == "HU") {
                $('#Book1_12').text(translations['HU']['book']);
                $('#content_title').text(translations['HU']['content_title']);

            } else if (msg == "PO") {
                $('#Book1_12').text(translations['PO']['book']);
                $('#content_title').text(translations['PO']['content_title']);

            } else if (msg == "CY") {
                $('#Book1_12').text(translations['CY']['book']);
                $('#content_title').text(translations['CY']['content_title']);

            } else if (msg == "MT") {
                $('#Book1_12').text(translations['MT']['book']);
                $('#content_title').text(translations['MT']['content_title']);

            } else if (msg == "BG") {
                $('#Book1_12').text(translations['BG']['book']);
                $('#content_title').text(translations['BG']['content_title']);

            } else if (msg == "CZ") {
                $('#Book1_12').text(translations['CZ']['book']);
                $('#content_title').text(translations['CZ']['content_title']);

            } else if (msg == "SK") {
                $('#Book1_12').text(translations['SK']['book']);
                $('#content_title').text(translations['SK']['content_title']);

            }
            else {
                $('#Book1_12').text(translations['EN']['book']);
                $('#content_title').text(translations['EN']['content_title']);
            }
        });


    $('#form-container').hide();
    for (var i = 1; i < 13; i++) {
        $("#HilightC" + i).hide();
    }

    if ($('#HilightCheck').val() == "AT") {

        $('#HilightC1').show();

    } else if ($('#HilightCheck').val() == "RO") {
        $('#HilightC2').show();

    } else if ($('#HilightCheck').val() == "SI") {
        $('#HilightC3').show();
        $('#Book1_3').show();
    }
    else if ($('#HilightCheck').val() == "CZ") {
        $('#HilightC4').show();

    }
    else if ($('#HilightCheck').val() == "SK") {
        $('#HilightC5').show();

    }
    else if ($('#HilightCheck').val() == "GR") {

        $('#HilightC6').show();


    }
    else if ($('#HilightCheck').val() == "HU") {

        $('#HilightC7').show();


    }
    else if ($('#HilightCheck').val() == "PL") {
        $('#HilightC8').show();
    }
    else if ($('#HilightCheck').val() == "CY") {
        $('#HilightC9').show();


    } else if ($('#HilightCheck').val() == "MT") {
        $('#HilightC10').show();


    } else if ($('#HilightCheck').val() == "BG") {
        $('#HilightC11').show();
    } else {

        $('#HilightC12').show();
        $('#Book1_12').show();


    }


    $('#wrap').hide();
    for (var i = 1; i < 12; i++) {
        $("#Brochures" + i).hide();
    }
});

function backScreen() {
    $('#wrap_done').hide();
    $("#button1").hide();
    $('#address').show();
    $('#car').show();
    $('#dealer').show();
    $('#Brochures_Location').show();
    $('#Vbro1').show();
    $('#VbroH1').show();
}


function makeForm(_country) {
    $("#button1").hide();
    for (var i = 1; i < country_dynamic; i++) {
        document.getElementById('createID' + i).style.visibility = 'hidden';

        $("#Disclaimer" + i).hide();
    }
    $("#suggest").hide();
    for (var i = 1; i < 13; i++) {
        $("#HilightC" + i).hide();
        $("#Book1_" + i).hide();
    }
    $("#logo2").hide();
    $("#Book1").hide();
    $("#arrow1").hide();
    $("#Hilight").hide();
    $("#city").hide();
    if (_country == "AT") {


        $("#yes").hide();
        document.getElementById('yeschecked').checked = true;
        $("#yeschecked").hide();

        $("#closePopup").text((translations['AT']['close']));
        $("#ok").text((translations['AT']['ok']));
        $("#Disclaimertext1").show();
        $("#Disclaimertext1").text((translations['AT']['disclaimer']));
        $("#Book_1").show();
        $("#Book_1").text((translations['AT']['book']));
        $("#submit").text((translations['AT']['submit']));
        $("#Brochures1").show();
        $("#Iamm1").show();
        $("#Iam1").text((translations['AT']['Iam']));
        $("#Iamd1").text((translations['AT']['Iamd']));
        $("#Disclaimer1").show();
        $("#Disclaimertext1").text((translations['AT']['disclaimer']));
        $("#popup_content").text((translations['AT']['disclaimer_body']));
        $("#VbroH1").text((translations['AT']['Vbro_head']));
        $("#Vbro1").text((translations['AT']['Vbro']));
        $("#con1").text((translations['AT']['your_con']));
        $("#model1").text((translations['AT']['choose_model']));
        $('#country_selected').val((translations['AT']['book']));
        $('#Invalid').val((translations['AT']['error_message']));
        $('#required').val((translations['AT']['required']));
        $('#thankyou').val((translations['AT']['thankyou_title']));
        $('#sorry').val((translations['AT']['Sorry']));
        $('#country').val("AT");
        $('#Invalid_email').val((translations['AT']['Invalid_email']));
        $('#loading_pop').text((translations['AT']['loading']));
    }
    else if (_country == "RO") {

        $("#yes").show();
        $("#yeschecked").show();
        $('#yes').text((translations['RO']['yes']));
        $("#romania_error").show();
        $("#closePopup").text((translations['RO']['close']));
        $("#ok").text((translations['RO']['ok']));
        $("#Disclaimertext1").show();
        $("#Disclaimertext1").text((translations['RO']['disclaimer']));
        $("#Book_1").show();
        $("#Book_1").text((translations['RO']['book']));
        $("#submit").text((translations['RO']['submit']));
        $("#Brochures2").show();
        $("#Iamm1").show();
        $("#Iam1").text((translations['RO']['Iam']));
        $("#Iamd1").text((translations['RO']['Iamd']));
        $("#Disclaimer1").show();
        $("#Disclaimertext1").text((translations['RO']['disclaimer']));
        $("#popup_content").text((translations['RO']['disclaimer_body']));
        $("#VbroH1").text((translations['RO']['Vbro_head']));
        $("#Vbro1").text((translations['RO']['Vbro']));
        $("#con1").text((translations['RO']['your_con']));
        $("#model1").text((translations['RO']['choose_model']));
        $('#country_selected').val((translations['RO']['book']));
        $('#Invalid').val((translations['RO']['error_message']));
        $('#required').val((translations['RO']['required']));
        $('#thankyou').val((translations['RO']['thankyou_title']));
        $('#sorry').val((translations['RO']['Sorry']));
        $('#country').val("RO");
        $('#Invalid_email').val((translations['RO']['Invalid_email']));
        $('#loading_pop').text((translations['RO']['loading']));

    }
    else if (_country == "SI") {
        $("#yes").hide();
        document.getElementById('yeschecked').checked = true;
        $("#yeschecked").hide();
        $("#closePopup").text((translations['SI']['close']));
        $("#ok").text((translations['SI']['ok']));
        $("#Disclaimertext1").show();
        $("#Disclaimertext1").text((translations['SI']['disclaimer']));
        $("#Book_1").show();
        $("#Book_1").text((translations['SI']['book']));
        $("#submit").text((translations['SI']['submit']));
        $("#Brochures2").show();
        $("#Iamm1").show();
        $("#Iam1").text((translations['SI']['Iam']));
        $("#Iamd1").text((translations['SI']['Iamd']));
        $("#Disclaimer1").show();
        $("#Disclaimertext1").text((translations['SI']['disclaimer']));
        $("#popup_content").text((translations['SI']['disclaimer_body']));
        $("#VbroH1").text((translations['SI']['Vbro_head']));
        $("#Vbro1").text((translations['SI']['Vbro']));
        $("#con1").text((translations['SI']['your_con']));
        $("#model1").text((translations['SI']['choose_model']));
        $('#country_selected').val((translations['SI']['book']));

        $('#Invalid').val((translations['SI']['error_message']));
        $('#required').val((translations['SI']['required']));
        $('#thankyou').val((translations['SI']['thankyou_title']));
        $('#sorry').val((translations['SI']['Sorry']));
        $('#Invalid_email').val((translations['SI']['Invalid_email']));

        $('#country').val("SI");
        $('#loading_pop').text((translations['SI']['loading']));

    }
    else if (_country == "CZ") {
        $("#yes").hide();
        document.getElementById('yeschecked').checked = true;
        $("#yeschecked").hide();
        $("#closePopup").text((translations['CZ']['close']));
        $("#ok").text((translations['CZ']['ok']));
        $("#Disclaimertext1").show();
        $("#Disclaimertext1").text((translations['CZ']['disclaimer']));
        $("#Book_1").show();
        $("#Book_1").text((translations['CZ']['book']));
        $("#submit").text((translations['CZ']['submit']));
        $("#Brochures2").show();
        $("#Iamm1").show();
        $("#Iam1").text((translations['CZ']['Iam']));
        $("#Iamd1").text((translations['CZ']['Iamd']));
        $("#Disclaimer1").show();
        $("#Disclaimertext1").text((translations['CZ']['disclaimer']));
        $("#popup_content").text((translations['CZ']['disclaimer_body']));
        $("#VbroH1").text((translations['CZ']['Vbro_head']));
        $("#Vbro1").text((translations['CZ']['Vbro']));
        $("#con1").text((translations['CZ']['your_con']));
        $("#model1").text((translations['CZ']['choose_model']));
        $('#country_selected').val((translations['CZ']['book']));
        $('#Invalid').val((translations['CZ']['error_message']));
        $('#required').val((translations['CZ']['required']));
        $('#thankyou').val((translations['CZ']['thankyou_title']));
        $('#sorry').val((translations['CZ']['Sorry']));

        $('#country').val("CZ");

        $('#Invalid_email').val((translations['CZ']['Invalid_email']));

        $('#loading_pop').text((translations['CZ']['loading']));

    }
    else if (_country == "SK") {
        $("#yes").hide();
        document.getElementById('yeschecked').checked = true;
        $("#yeschecked").hide();
        $("#closePopup").text((translations['SK']['close']));
        $("#ok").text((translations['SK']['ok']));
        $("#Disclaimertext1").show();
        $("#Disclaimertext1").text((translations['SK']['disclaimer']));
        $("#Book_1").show();
        $("#Book_1").text((translations['SK']['book']));
        $("#submit").text((translations['SK']['submit']));
        $("#Brochures2").show();
        $("#Iamm1").show();
        $("#Iam1").text((translations['SK']['Iam']));
        $("#Iamd1").text((translations['SK']['Iamd']));
        $("#Disclaimer1").show();
        $("#Disclaimertext1").text((translations['SK']['disclaimer']));
        $("#popup_content").text((translations['SK']['disclaimer_body']));
        $("#VbroH1").text((translations['SK']['Vbro_head']));
        $("#Vbro1").text((translations['SK']['Vbro']));
        $("#con1").text((translations['SK']['your_con']));
        $("#model1").text((translations['SK']['choose_model']));
        $('#country_selected').val((translations['SK']['book']));

        $('#Invalid').val((translations['SK']['error_message']));
        $('#required').val((translations['SK']['required']));
        $('#thankyou').val((translations['SK']['thankyou_title']));
        $('#sorry').val((translations['SK']['Sorry']));
        $('#Invalid_email').val((translations['SK']['Invalid_email']));

        $('#country').val("SK");
        $('#loading_pop').text((translations['SK']['loading']));
    }
    else if (_country == "GR") {
        $("#yes").hide();
        document.getElementById('yeschecked').checked = true;
        $("#yeschecked").hide();
        $("#closePopup").text((translations['GR']['close']));
        $("#ok").text((translations['GR']['ok']));
        $("#Disclaimertext1").show();
        $("#Disclaimertext1").text((translations['GR']['disclaimer']));
        $("#Book_1").show();
        $("#Book_1").text((translations['GR']['book']));
        $("#submit").text((translations['GR']['submit']));
        $("#Brochures2").show();
        $("#Iamm1").show();
        $("#Iam1").text((translations['GR']['Iam']));
        $("#Iamd1").text((translations['GR']['Iamd']));
        $("#Disclaimer1").show();
        $("#Disclaimertext1").text((translations['GR']['disclaimer']));
        $("#popup_content").text((translations['GR']['disclaimer_body']));
        $("#VbroH1").text((translations['GR']['Vbro_head']));
        $("#Vbro1").text((translations['GR']['Vbro']));
        $("#con1").text((translations['GR']['your_con']));
        $("#model1").text((translations['GR']['choose_model']));
        $('#country_selected').val((translations['GR']['book']));
        $('#Invalid').val((translations['GR']['error_message']));
        $('#required').val((translations['GR']['required']));
        $('#thankyou').val((translations['GR']['thankyou_title']));
        $('#sorry').val((translations['GR']['Sorry']));
        $('#country').val("GR");
        $('#loading_pop').text((translations['GR']['loading']));
        $('#Invalid_email').val((translations['GR']['Invalid_email']));


    }
    else if (_country == "HU") {
        $("#yes").hide();
        document.getElementById('yeschecked').checked = true;
        $("#yeschecked").hide();
        $("#closePopup").text((translations['HU']['close']));
        $("#ok").text((translations['HU']['ok']));
        $("#Disclaimertext1").show();
        $("#Disclaimertext1").text((translations['HU']['disclaimer']));
        $("#Book_1").show();
        $("#Book_1").text((translations['HU']['book']));
        $("#submit").text((translations['HU']['submit']));
        $("#Brochures2").show();
        $("#Iamm1").show();
        $("#Iam1").text((translations['HU']['Iam']));
        $("#Iamd1").text((translations['HU']['Iamd']));
        $("#Disclaimer1").show();
        $("#Disclaimertext1").text((translations['HU']['disclaimer']));
        $("#popup_content").text((translations['HU']['disclaimer_body']));
        $("#VbroH1").text((translations['HU']['Vbro_head']));
        $("#Vbro1").text((translations['HU']['Vbro']));
        $("#con1").text((translations['HU']['your_con']));
        $("#model1").text((translations['HU']['choose_model']));
        $('#country_selected').val((translations['HU']['book']));

        $('#Invalid').val((translations['HU']['error_message']));
        $('#required').val((translations['HU']['required']));
        $('#thankyou').val((translations['HU']['thankyou_title']));
        $('#sorry').val((translations['HU']['Sorry']));

        $('#Invalid_email').val((translations['HU']['Invalid_email']));

        $('#country').val("HU");
        $('#loading_pop').text((translations['HU']['loading']));
    }
    else if (_country == "PL") {
        $("#yes").hide();
        document.getElementById('yeschecked').checked = true;
        $("#yeschecked").hide();
        $("#closePopup").text((translations['PL']['close']));
        $("#ok").text((translations['PL']['ok']));
        $("#Disclaimertext1").show();
        $("#Disclaimertext1").text((translations['PL']['disclaimer']));
        $("#Book_1").show();
        $("#Book_1").text((translations['PL']['book']));
        $("#submit").text((translations['PL']['submit']));
        $("#Brochures2").show();
        $("#Iamm1").show();
        $("#Iam1").text((translations['PL']['Iam']));
        $("#Iamd1").text((translations['PL']['Iamd']));
        $("#Disclaimer1").show();
        $("#Disclaimertext1").text((translations['PL']['disclaimer']));
        $("#popup_content").text((translations['PL']['disclaimer_body']));
        $("#VbroH1").text((translations['PL']['Vbro_head']));
        $("#Vbro1").text((translations['PL']['Vbro']));
        $("#con1").text((translations['PL']['your_con']));
        $("#model1").text((translations['PL']['choose_model']));
        $('#country_selected').val((translations['PL']['book']));


        $('#Invalid').val((translations['PL']['error_message']));
        $('#required').val((translations['PL']['required']));
        $('#thankyou').val((translations['PL']['thankyou_title']));
        $('#sorry').val((translations['PL']['Sorry']));
        $('#Invalid_email').val((translations['PL']['Invalid_email']));


        $('#country').val("PL");
        $('#loading_pop').text((translations['PL']['loading']));

    }
    else if (_country == "CY") {
        $("#yes").hide();
        document.getElementById('yeschecked').checked = true;
        $("#yeschecked").hide();
        $("#closePopup").text((translations['CY']['close']));
        $("#ok").text((translations['CY']['ok']));
        $("#Disclaimertext1").show();
        $("#Disclaimertext1").text((translations['CY']['disclaimer']));
        $("#Book_1").show();
        $("#Book_1").text((translations['CY']['book']));
        $("#submit").text((translations['CY']['submit']));
        $("#Brochures2").show();
        $("#Iamm1").show();
        $("#Iam1").text((translations['CY']['Iam']));
        $("#Iamd1").text((translations['CY']['Iamd']));
        $("#Disclaimer1").show();
        $("#Disclaimertext1").text((translations['CY']['disclaimer']));
        $("#popup_content").text((translations['CY']['disclaimer_body']));
        $("#VbroH1").text((translations['CY']['Vbro_head']));
        $("#Vbro1").text((translations['CY']['Vbro']));
        $("#con1").text((translations['CY']['your_con']));
        $("#model1").text((translations['CY']['choose_model']));
        $('#country_selected').val((translations['CY']['book']));

        $('#Invalid').val((translations['CY']['error_message']));
        $('#required').val((translations['CY']['required']));
        $('#thankyou').val((translations['CY']['thankyou_title']));
        $('#sorry').val((translations['CY']['Sorry']));
        $('#Invalid_email').val((translations['CY']['Invalid_email']));


        $('#country').val("CY");
        $('#loading_pop').text((translations['CY']['loading']));

    }
    else if (_country == "MT") {
        $("#yes").hide();
        document.getElementById('yeschecked').checked = true;
        $("#yeschecked").hide();
        $("#closePopup").text((translations['MT']['close']));
        $("#ok").text((translations['MT']['ok']));
        $("#Disclaimertext1").show();
        $("#Disclaimertext1").text((translations['MT']['disclaimer']));
        $("#Book_1").show();
        $("#Book_1").text((translations['MT']['book']));
        $("#submit").text((translations['MT']['submit']));
        $("#Brochures2").show();
        $("#Iamm1").show();
        $("#Iam1").text((translations['MT']['Iam']));
        $("#Iamd1").text((translations['MT']['Iamd']));
        $("#Disclaimer1").show();
        $("#Disclaimertext1").text((translations['MT']['disclaimer']));
        $("#popup_content").text((translations['MT']['disclaimer_body']));
        $("#VbroH1").text((translations['MT']['Vbro_head']));
        $("#Vbro1").text((translations['MT']['Vbro']));
        $("#con1").text((translations['MT']['your_con']));
        $("#model1").text((translations['MT']['choose_model']));
        $('#country_selected').val((translations['MT']['book']));
        $('#Invalid').val((translations['MT']['error_message']));
        $('#required').val((translations['MT']['required']));
        $('#thankyou').val((translations['MT']['thankyou_title']));
        $('#sorry').val((translations['MT']['Sorry']));

        $('#Invalid_email').val((translations['MT']['Invalid_email']));

        $('#country').val("MT");
        $('#loading_pop').text((translations['MT']['loading']));
    }

    else if (_country == "BG") {

        $("#yes").hide();
        document.getElementById('yeschecked').checked = true;
        $("#yeschecked").hide();
        $("#closePopup").text((translations['BG']['close']));
        $("#ok").text((translations['BG']['ok']));
        $("#Disclaimertext1").show();
        $("#Disclaimertext1").text((translations['BG']['disclaimer']));
        $("#Book_1").show();
        $("#Book_1").text((translations['BG']['book']));
        $("#submit").text((translations['BG']['submit']));
        $("#Brochures2").show();
        $("#Iamm1").show();
        $("#Iam1").text((translations['BG']['Iam']));
        $("#Iamd1").text((translations['BG']['Iamd']));
        $("#Disclaimer1").show();
        $("#Disclaimertext1").text((translations['BG']['disclaimer']));
        $("#popup_content").text((translations['BG']['disclaimer_body']));
        $("#VbroH1").text((translations['BG']['Vbro_head']));
        $("#Vbro1").text((translations['BG']['Vbro']));
        $("#con1").text((translations['BG']['your_con']));
        $("#model1").text((translations['BG']['choose_model']));
        $('#country_selected').val((translations['BG']['book']));
        $('#Invalid').val((translations['BG']['error_message']));
        $('#required').val((translations['BG']['required']));
        $('#thankyou').val((translations['BG']['thankyou_title']));
        $('#sorry').val((translations['BG']['Sorry']));
        $('#country').val("BG");
        $('#loading_pop').text((translations['BG']['loading']));
        $('#Invalid_email').val((translations['BG']['Invalid_email']));

    }
//////////////////////////////////////////////////////////
    if (_country == "AT") {
        var ttext = $("#first_nameAT").val();

        $("#namepercountry").text((translations['AT']['namepercountry']));
        $("#namepercountry1").text((translations['AT']['namepercountry1']));
        $("#namepercountry2").text((translations['AT']['namepercountry2']));
        $("#namepercountry3").text((translations['AT']['namepercountry3']));


        document.getElementById('first_name').title = (translations['AT']['namepercountry']);
        document.getElementById('last_name').title = (translations['AT']['namepercountry1']);
        document.getElementById('email').title = (translations['AT']['namepercountry2']);
        document.getElementById('phone').title = (translations['AT']['namepercountry3']);

        $("#kept_phone").val((translations['AT']['namepercountry3']));

    } else {
        if (_country == "RO") {

            $("#namepercountry").text((translations['RO']['namepercountry']));
            $("#namepercountry1").text((translations['RO']['namepercountry1']));
            $("#namepercountry2").text((translations['RO']['namepercountry2']));
            $("#namepercountry3").text((translations['RO']['namepercountry3']));


            document.getElementById('first_name').title = (translations['RO']['namepercountry']);
            document.getElementById('last_name').title = (translations['RO']['namepercountry1']);
            document.getElementById('email').title = (translations['RO']['namepercountry2']);
            document.getElementById('phone').title = (translations['RO']['namepercountry3']);

            $("#kept_phone").val((translations['RO']['namepercountry3']));

        } else if (_country == "SI") {


            $("#namepercountry").text((translations['SI']['namepercountry']));
            $("#namepercountry1").text((translations['SI']['namepercountry1']));
            $("#namepercountry2").text((translations['SI']['namepercountry2']));
            $("#namepercountry3").text((translations['SI']['namepercountry3']));


            document.getElementById('first_name').title = (translations['SI']['namepercountry']);
            document.getElementById('last_name').title = (translations['SI']['namepercountry1']);
            document.getElementById('email').title = (translations['SI']['namepercountry2']);
            document.getElementById('phone').title = (translations['SI']['namepercountry3']);

            $("#kept_phone").val((translations['SI']['namepercountry3']));

        } else if (_country == "CZ") {


            $("#namepercountry").text((translations['CZ']['namepercountry']));
            $("#namepercountry1").text((translations['CZ']['namepercountry1']));
            $("#namepercountry2").text((translations['CZ']['namepercountry2']));
            $("#namepercountry3").text((translations['CZ']['namepercountry3']));


            document.getElementById('first_name').title = (translations['CZ']['namepercountry']);
            document.getElementById('last_name').title = (translations['CZ']['namepercountry1']);
            document.getElementById('email').title = (translations['CZ']['namepercountry2']);
            document.getElementById('phone').title = (translations['CZ']['namepercountry3']);

            $("#kept_phone").val((translations['CZ']['namepercountry3']));

        }
        else if (_country == "SK") {


            $("#namepercountry").text((translations['SK']['namepercountry']));
            $("#namepercountry1").text((translations['SK']['namepercountry1']));
            $("#namepercountry2").text((translations['SK']['namepercountry2']));
            $("#namepercountry3").text((translations['SK']['namepercountry3']));


            document.getElementById('first_name').title = (translations['SK']['namepercountry']);
            document.getElementById('last_name').title = (translations['SK']['namepercountry1']);
            document.getElementById('email').title = (translations['SK']['namepercountry2']);
            document.getElementById('phone').title = (translations['SK']['namepercountry3']);
            $("#kept_phone").val((translations['SK']['namepercountry3']));


        }
        else if (_country == "GR") {


            $("#namepercountry").text((translations['GR']['namepercountry']));
            $("#namepercountry1").text((translations['GR']['namepercountry1']));
            $("#namepercountry2").text((translations['GR']['namepercountry2']));
            $("#namepercountry3").text((translations['GR']['namepercountry3']));


            document.getElementById('first_name').title = (translations['GR']['namepercountry']);
            document.getElementById('last_name').title = (translations['GR']['namepercountry1']);
            document.getElementById('email').title = (translations['GR']['namepercountry2']);
            document.getElementById('phone').title = (translations['GR']['namepercountry3']);

            $("#kept_phone").val((translations['GR']['namepercountry3']));

        }
        else if (_country == "HU") {

            $("#namepercountry").text((translations['HU']['namepercountry']));
            $("#namepercountry1").text((translations['HU']['namepercountry1']));
            $("#namepercountry2").text((translations['HU']['namepercountry2']));
            $("#namepercountry3").text((translations['HU']['namepercountry3']));


            document.getElementById('first_name').title = (translations['HU']['namepercountry']);
            document.getElementById('last_name').title = (translations['HU']['namepercountry1']);
            document.getElementById('email').title = (translations['HU']['namepercountry2']);
            document.getElementById('phone').title = (translations['HU']['namepercountry3']);

            $("#kept_phone").val((translations['HU']['namepercountry3']));


        }
        else if (_country == "PL") {


            $("#namepercountry").text((translations['PL']['namepercountry']));
            $("#namepercountry1").text((translations['PL']['namepercountry1']));
            $("#namepercountry2").text((translations['PL']['namepercountry2']));
            $("#namepercountry3").text((translations['PL']['namepercountry3']));


            document.getElementById('first_name').title = (translations['PL']['namepercountry']);
            document.getElementById('last_name').title = (translations['PL']['namepercountry1']);
            document.getElementById('email').title = (translations['PL']['namepercountry2']);
            document.getElementById('phone').title = (translations['PL']['namepercountry3']);

            $("#kept_phone").val((translations['PL']['namepercountry3']));


        }

        else if (_country == "CY") {

            $("#namepercountry").text((translations['CY']['namepercountry']));
            $("#namepercountry1").text((translations['CY']['namepercountry1']));
            $("#namepercountry2").text((translations['CY']['namepercountry2']));
            $("#namepercountry3").text((translations['CY']['namepercountry3']));


            document.getElementById('first_name').title = (translations['CY']['namepercountry']);
            document.getElementById('last_name').title = (translations['CY']['namepercountry1']);
            document.getElementById('email').title = (translations['CY']['namepercountry2']);
            document.getElementById('phone').title = (translations['CY']['namepercountry3']);

            $("#kept_phone").val((translations['CY']['namepercountry3']));


        } else if (_country == "MT") {

            $("#namepercountry").text((translations['MT']['namepercountry']));
            $("#namepercountry1").text((translations['MT']['namepercountry1']));
            $("#namepercountry2").text((translations['MT']['namepercountry2']));
            $("#namepercountry3").text((translations['MT']['namepercountry3']));


            document.getElementById('first_name').title = (translations['MT']['namepercountry']);
            document.getElementById('last_name').title = (translations['MT']['namepercountry1']);
            document.getElementById('email').title = (translations['MT']['namepercountry2']);
            document.getElementById('phone').title = (translations['MT']['namepercountry3']);

            $("#kept_phone").val((translations['MT']['namepercountry3']));


        } else if (_country == "BG") {

            $("#city").show();
            $("#namepercountry").text((translations['BG']['namepercountry']));
            $("#namepercountry1").text((translations['BG']['namepercountry1']));
            $("#namepercountry2").text((translations['BG']['namepercountry2']));
            $("#namepercountry3").text((translations['BG']['namepercountry3']));
            $("#city").text((translations['BG']['city']));


            document.getElementById('first_name').title = (translations['BG']['namepercountry']);
            document.getElementById('last_name').title = (translations['BG']['namepercountry1']);
            document.getElementById('email').title = (translations['BG']['namepercountry2']);
            document.getElementById('phone').title = (translations['BG']['namepercountry3']);
            document.getElementById('city').title = (translations['BG']['city']);

            $("#kept_phone").val((translations['BG']['namepercountry3']));
        }


        else {
            $("#namepercountry").text("Firstname");
            $("#namepercountry1").text("Lastname");
            $("#namepercountry2").text("E-Mail");
            $("#namepercountry3").text("Phone number");
            // document.getElementById('createID1').style.visibility ='hidden';
            //document.getElementById('createID2').style.visibility ='hidden';
            // document.getElementById('createID3').style.visibility ='hidden';
            //document.getElementById('createID4').style.visibility ='hidden';
            document.getElementById('first_name').title = "Firstname";
            document.getElementById('last_name').title = "Lastname";
            document.getElementById('email').title = "E-Mail";
            document.getElementById('phone').title = "Phone number";
        }
    }
    $(document).ready(function () {


        if (_country == "AT") {
            $('#wrap').show();
            $('#form-container').show();
            $('#vorname').show();
            $('#nachname').show();
            $('#email').show();
            $('#telefonnumber').show();
            $('#modell').hide();
        } else {
            $('#wrap').show();
            $('#form-container').show();
            $('#vorname').show();
            $('#nachname').show();
            $('#email').show();
            $('#telefonnumber').show();
            $('#modell').show();
        }
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


}