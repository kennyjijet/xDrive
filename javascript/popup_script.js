/* 
 author: istockphp.com
 */
/*




 jQuery(function($) {
 $("a.topopup").click(function() {
 loading(); // loading
 setTimeout(function(){ // then show popup, deley in .5 second
 loadPopup(); // function show popup
 }, 500); // .5 second
 return false;
 }); */
/* event for close the popup */
/*
 $("div.close").hover(
 function() {
 $('span.ecs_tooltip').show();
 },
 function () {
 $('span.ecs_tooltip').hide();
 }
 );
 $("div.close").click(function() {
 disablePopup();  // function close pop up
 });
 $(this).keyup(function(event) {
 if (event.which == 27) { // 27 is 'Ecs' in the keyboard
 disablePopup();  // function close pop up
 }
 });

 $("div#backgroundPopup").click(function() {
 disablePopup();  // function close pop up
 });

 $('a.livebox').click(function() {
 disablePopup();
 //	alert('Hello World!');
 return false;
 });
 */

/************** start: functions. **************/
/*
 function loading() {
 $("div.loader").show();
 }
 function closeloading() {
 $("div.loader").fadeOut('normal');
 }
 var popupStatus = 0; // set value
 function loadPopup() {
 if(popupStatus == 0) { // if value is 0, show popup
 closeloading(); // fadeout loading
 $("#toPopup").fadeIn(0500); // fadein popup div
 $("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
 $("#backgroundPopup").fadeIn(0001);
 popupStatus = 1; // and set value to 1

 }
 }
 function disablePopup() {
 if(popupStatus == 1) { //if value is 1, close popup
 $("#toPopup").fadeOut("normal");
 $("#backgroundPopup").fadeOut("normal");
 popupStatus = 0;  // and set value to 0
 }
 } */
/************** end: functions. **************/
//}); // jQuery End
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//for(var i =1  ;i<12; i++ ){
$(document).ready(function () {
    var popupStatus = 0;
    //var dummy = [1, 2, 3];
    //  $.each(i)
    var i = 1;
    $("a.topopup" + i).click(function () {
        $("#toPopup" + i).fadeIn("slow");
    });
    $('a.livebox' + i).click(function () {
        $("#toPopup" + i).fadeOut("normal");

    });

});
//}
$(document).ready(function () {
    var popupStatus = 0;
    //var dummy = [1, 2, 3];
    //  $.each(i)
    var i = 2;
    $("a.topopup" + i).click(function () {
        $("#toPopup" + i).fadeIn("slow");
    });
    $('a.livebox' + i).click(function () {
        $("#toPopup" + i).fadeOut("normal");

    });

});

$(document).ready(function () {
    var popupStatus = 0;
    //var dummy = [1, 2, 3];
    //  $.each(i)
    var i = 3;
    $("a.topopup" + i).click(function () {
        $("#toPopup" + i).fadeIn("slow");
    });
    $('a.livebox' + i).click(function () {
        $("#toPopup" + i).fadeOut("normal");

    });

});


$(document).ready(function () {
    var popupStatus = 0;
    //var dummy = [1, 2, 3];
    //  $.each(i)
    var i = 4;
    $("a.topopup" + i).click(function () {
        $("#toPopup" + i).fadeIn("slow");
    });
    $('a.livebox' + i).click(function () {
        $("#toPopup" + i).fadeOut("normal");

    });

});

$(document).ready(function () {
    var popupStatus = 0;
    //var dummy = [1, 2, 3];
    //  $.each(i)
    var i = 5;
    $("a.topopup" + i).click(function () {
        $("#toPopup" + i).fadeIn("slow");
    });
    $('a.livebox' + i).click(function () {
        $("#toPopup" + i).fadeOut("normal");

    });

});

$(document).ready(function () {
    var popupStatus = 0;
    //var dummy = [1, 2, 3];
    //  $.each(i)
    var i = 6;
    $("a.topopup" + i).click(function () {
        $("#toPopup" + i).fadeIn("slow");
    });
    $('a.livebox' + i).click(function () {
        $("#toPopup" + i).fadeOut("normal");

    });

});


$(document).ready(function () {
    var popupStatus = 0;
    //var dummy = [1, 2, 3];
    //  $.each(i)
    var i = 7;
    $("a.topopup" + i).click(function () {
        $("#toPopup" + i).fadeIn("slow");
    });
    $('a.livebox' + i).click(function () {
        $("#toPopup" + i).fadeOut("normal");

    });

});


$(document).ready(function () {
    var popupStatus = 0;
    //var dummy = [1, 2, 3];
    //  $.each(i)
    var i = 8;
    $("a.topopup" + i).click(function () {
        $("#toPopup" + i).fadeIn("slow");
    });
    $('a.livebox' + i).click(function () {
        $("#toPopup" + i).fadeOut("normal");

    });

});


$(document).ready(function () {
    var popupStatus = 0;
    //var dummy = [1, 2, 3];
    //  $.each(i)
    var i = 9;
    $("a.topopup" + i).click(function () {
        $("#toPopup" + i).fadeIn("slow");
    });
    $('a.livebox' + i).click(function () {
        $("#toPopup" + i).fadeOut("normal");

    });

});


$(document).ready(function () {
    var popupStatus = 0;
    //var dummy = [1, 2, 3];
    //  $.each(i)
    var i = 10;
    $("a.topopup" + i).click(function () {
        $("#toPopup" + i).fadeIn("slow");
    });
    $('a.livebox' + i).click(function () {
        $("#toPopup" + i).fadeOut("normal");

    });

});


$(document).ready(function () {
    var popupStatus = 0;
    //var dummy = [1, 2, 3];
    //  $.each(i)
    var i = 11;
    $("a.topopup" + i).click(function () {
        $("#toPopup" + i).fadeIn("slow");
    });
    $('a.livebox' + i).click(function () {
        $("#toPopup" + i).fadeOut("normal");

    });

});

