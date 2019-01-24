var open = false;
// Sidebar control
// open and close from menu icon
$('.menu').click(function() {
    if(open) {
        // is nav is open, close it
        $('#side-nav').animate({
            width: '0px'
        });
        $('#side-nav nav').css('display', 'none');
        open = false;
    }else {
        // if nav is closed, open it
        $('#side-nav').animate({
        width: '250px'
        });
        $('#side-nav nav').css('display', 'inherit');
        open = true;
    }
});

// close button in sidebar
$('#close-nav').click(function() {
    $('#side-nav').animate({
        width: '0px'
      });
    $('#side-nav nav').css('display', 'none');
    open = false;
});

// menu animation
$('.menu, #close-nav').click(function(){
    $('.menu').toggleClass("down")  ; 
});

// fixed navbar 
$(window).scroll(function () {
    scroll = $(window).scrollTop();
    var nav = $('#top-bar');
    if (scroll > 50) {
      nav.css({'background-color':'black', 'height':'70px'});
    } else {
      nav.css({'background-color':'transparent', 'height':'100px'});
    }
  });