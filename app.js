
function appointmentTransition() {
      
      if ($(".appointment").hasClass('active-sect')) {
        // THIS IS FOR STYLISTIC REMOVAL OF SECTION
         $('.appointment').addClass('active-bye')
         setTimeout(() => {
            $('.appointment').removeClass('active-sect')
            $('.appointment').removeClass('active-bye')
    
         },500)
       }
        
    }

$('#appointment').click(function() {
    $(this).toggleClass('active-link')
// TRANSITIONS
appointmentTransition()
// BRINGS UP CURRENT SECTION
    $('.appointment').addClass('active-sect');
// REMOVES OTHER SECTION ACTIVES
    $('.gallery').removeClass('active-sect');
    $('.about').removeClass('active-sect');
    $('#gallery').removeClass('active-link');
    $('#about').removeClass('active-link');

});

$('#gallery').click(function() {
    $(this).toggleClass('active-link')
// TRANSITIONS
appointmentTransition()
// BRINGS UP CURRENT SECTION
    $('.gallery').toggleClass('active-sect');
// REMOVES OTHER SECTION ACTIVES
    $('.about').removeClass('active-sect'); 
    $('#appointment').removeClass('active-link');
    $('#about').removeClass('active-link'); 
      
});

$('#about').click(function() {
    $(this).toggleClass('active-link')
// TRANSITIONS
appointmentTransition()
// BRINGS UP CURRENT SECTION
    $('.about').toggleClass('active-sect');
// REMOVES OTHER SECTION ACTIVES
    $('.gallery').removeClass('active-sect');
    $('#appointment').removeClass('active-link');
    $('#gallery').removeClass('active-link');
});

// FORM SUBMISSION ------------------------

$('#submit').click(function(e) {
    e.preventDefault()

    console.log($('.date').val())
})


$('#drink-choices').click(function(e) {
    e.preventDefault()
})

// MODAL FUNCTIONS

$('#service').click(function() {
    $('.modal').addClass('active-service-modal active-modal');
})

$('.service-radio').each(function() {
   
    $(this).click(function() {
        $('.modal').removeClass('active-service-modal active-modal');
        $('#service p').html('Service Selected: ' + this.value)
    })
    
})

$('.date').click(function() {
    $('#date-input').focus()
})

$('.drink-choices').click(function() {
    $('.modal').addClass('active-drinks-modal active-modal');
})

$('.drink-radio').each(function() {
    $(this).click(function() {
        $('.modal').removeClass('active-drinks-modal active-modal');
        $('#drink-choices p').html('Drink: ' + this.value)
    })
})

// THIS WILL FIX MOBILE INPUT FOCUS KEYBOARD ISSUE

let windowResizeMobileFocus = 0;
let htmlHeight = 0;
let bodyHeight = 0;

$(document).ready(function() {
    bodyHeight = $('body').height()
})



$('.focused-mobile').each(function() {
    $(this).focus(function() {
            htmlHeight = $('html').height();
            windowResizeMobileFocus = htmlHeight - bodyHeight
    })
})

$('.focused-mobile').each(function() {
    $(this).blur(function() {
        $('body').css('transform', `translateY(-${windowResizeMobileFocus * 2}px)`);
    })
})
