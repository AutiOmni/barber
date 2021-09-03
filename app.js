
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

$('#confirm-date').on('click', function() {
    
    convertDate();
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

$('select').each(function() {
    $(this).on('change', function() {
        $(window).scrollTop(0)
        console.log('changed')
    })
})

// CONVERT DATE TO STRING FOR FORM
function convertDate() {
   
    var month = $('#month').val()
    var time = $('#time').val()
    var date = $('.active-date-reserve').text()
    console.log(date)

    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    if (date == 1 || date == 21 || date == 31)
    {
        date = date + 'st'
    }
    else if (date == 2 || date == 22)
    {
        date = date + 'nd'
    }
    else if (date == 3 || date == 23)
    {
        date = date + 'rd'
    }
    else 
    {
        date = date + 'th'
    }

    const currentDate = new Date;

    if (month < currentDate.getMonth())
    {
        alert('Time Travel is dangerous. Please select a future date');
    }

    $('#date').html(`Appointment Date & Time: ${monthArr[month]} ${date} at ${time}`)

}