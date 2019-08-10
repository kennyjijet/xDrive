var country_dynamic = 12;
var test = "";

$(document).ready(function () {


    $('#content_sub_1').hide();
    $('#content_sub_2').hide();
    $('#wrap_done').hide();
    $('#arrow').hide();
    $('#arrow1').show();

    $('#content_sub1').show();

    $.ajax({
        url: "PHP/Geo_ip.php"
    }).done(function (msg) {

            //content_sub
            if (msg == "AT") {
                $('#content_sub').text(translations['De']['content_title']);
                $('#content_sub1').text(translations['De']['content_title1']);

            } else {
                $('#content_sub').text(translations['En']['content_title']);
                $('#content_sub1').text(translations['En']['content_title1']);

            }
        });

    for (var i = 1; i < 13; i++) {
        $("#HilightC" + i).hide();
    }


});
function makeFormK2(_country) {
    if (_country == "AT" || _country == "RO" || _country == "SI" || _country == "GR" || _country == "HU" || _country == "PL" || _country == "CY" || _country == "MT" || _country == "BG" || _country == "CZ" || _country == "SK") {
        $('#content_sub_1').show();
        $('#content_sub_2').show();
        $('#content_sub').hide();
        $('#arrow').show();
        $('#arrow1').hide();
        $('#content_flag').hide();
        $('#content_sub1').hide();
    }
//////////////////////////////////////////////////////////
    if (_country == "RO") {
        $("#yes").show();
        $("#yeschecked").show();
        $('#yes').text((translations['En']['yes']));
        var ttext = $("#first_nameAT").val();
        document.getElementById('first_name').title = (translations['En']['first_name']);
        document.getElementById('last_name').title = (translations['En']['last_name']);
        document.getElementById('email').title = (translations['En']['email']);
        document.getElementById('phone').title = (translations['En']['phone']);
        document.getElementById('street').title = (translations['En']['address']);
        document.getElementById('zip').title = (translations['En']['zipcode']);
        document.getElementById('town').title = (translations['En']['town']);
        document.getElementById('country_user').title = (translations['En']['country']);
        $('#required').val(translations['En']['required_error']);
        $('#Invalid_email').val(translations['En']['Invalid_email']);
        $('#Invalid').val(translations['En']['Invalid_phone']);
        $('#submit').text(translations['En']['Submit']);
        $('#Iam1').text(translations['En']['I_Have_read']);
        $('#Iamd1').text(translations['En']['Term & Condition']);
        $('#country').val("EN");
        $('#wrap_done').text(translations['En']['thankyou']);
        $('#Invalid_zipcode').val(translations['En']['zipcode_invalid']);
        $("#popup_content").text((translations['En']['popup_body']));
        $("#closePopup").text((translations['En']['close']));
    } else {
        if (_country == "AT") {
            $("#yes").hide();
            document.getElementById('yeschecked').checked = true;
            $("#yeschecked").hide();

            document.getElementById('first_name').title = (translations['De']['first_name']);
            document.getElementById('last_name').title = (translations['De']['last_name']);
            document.getElementById('email').title = (translations['De']['email']);
            document.getElementById('phone').title = (translations['De']['phone']);
            document.getElementById('street').title = (translations['De']['address']);
            document.getElementById('zip').title = (translations['De']['zipcode']);
            document.getElementById('town').title = (translations['De']['town']);
            document.getElementById('country_user').title = (translations['De']['country']);
            $('#required').val(translations['De']['required_error']);
            $('#Invalid_email').val(translations['De']['Invalid_email']);
            $('#Invalid').val(translations['De']['Invalid_phone']);
            $('#submit').text(translations['De']['Submit']);
            $('#Iam1').text(translations['De']['I_Have_read']);
            $('#Iamd1').text(translations['De']['Term & Condition']);
            $('#country').val("DE");
            $('#wrap_done').text(translations['De']['thankyou']);
            $('#Invalid_zipcode').val(translations['De']['zipcode_invalid']);
            $("#popup_content").text((translations['De']['popup_body']));
            $("#closePopup").text((translations['De']['close']));
        } else {
            $("#yes").hide();
            document.getElementById('yeschecked').checked = true;
            $("#yeschecked").hide();
            document.getElementById('first_name').title = (translations['En']['first_name']);
            document.getElementById('last_name').title = (translations['En']['last_name']);
            document.getElementById('email').title = (translations['En']['email']);
            document.getElementById('phone').title = (translations['En']['phone']);
            document.getElementById('street').title = (translations['En']['address']);
            document.getElementById('zip').title = (translations['En']['zipcode']);
            document.getElementById('town').title = (translations['En']['town']);
            document.getElementById('country_user').title = (translations['En']['country']);
            $('#required').val(translations['En']['required_error']);
            $('#Invalid_email').val(translations['En']['Invalid_email']);
            $('#Invalid').val(translations['En']['Invalid_phone']);
            $('#submit').text(translations['En']['Submit']);
            $('#Iam1').text(translations['En']['I_Have_read']);
            $('#Iamd1').text(translations['En']['Term & Condition']);
            $('#country').val("EN");
            $('#wrap_done').text(translations['En']['thankyou']);
            $('#Invalid_zipcode').val(translations['En']['zipcode_invalid']);
            $("#popup_content").text((translations['En']['popup_body']));
            $("#closePopup").text((translations['En']['close']));

        }
    }
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
}