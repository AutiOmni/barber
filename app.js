
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


// MODAL FUNCTIONS

$('#service').click(function() {
    $('.modal-service-cont').addClass('active-service-modal active-modal');
})

$('.service-radio').each(function() {
   
    $(this).click(function() {
        $('.modal-service-cont').removeClass('active-service-modal active-modal');
        $('#service p').html('Service Selected: ' + this.value)
    })
    
})

// DATE FUNCTIONALITY 

$('#date').click(function() {
    $('.modal-date-cont').addClass('active-date-modal active-modal');
})

$('#date-input').on('change', function() {
    let date = $('#date-input').val();
    let cutDate = date.slice(0,4);
    let cutDateTwo = date.slice(6,10);
    $('#date').html(`Appointment Date: ${cutDateTwo+'-'+cutDate}`);
    $('.modal-date-cont').removeClass('active-date-modal active-modal');
})

$('.drink-choices').click(function() {
    $('.modal-drinks-cont').addClass('active-drinks-modal active-modal');
})

$('.drink-radio').each(function() {
    $(this).click(function() {
        $('.modal-drinks-cont').removeClass('active-drinks-modal active-modal');
        $('#drink-choices p').html('Drink: ' + this.value)
    })
})

// THIS WILL FIX MOBILE INPUT FOCUS KEYBOARD ISSUE

$('.focused-mobile').each(function() {
    $(this).blur(function() {
        $(window).scrollTop(0);
    })
})


