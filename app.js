$('#appointment').click(function() {
    $(this).toggleClass('active-link')

 // CHECKS FOR PROPER ANIMATION   
if ($(".appointment").hasClass('active-sect')) {
// THIS IS FOR STYLISTIC REMOVAL OF SECTION
$('.appointment').addClass('active-bye')

setTimeout(function() {
    $('.appointment').removeClass('active-sect');
}, 250)

setTimeout(function() {  
    $('.appointment').removeClass('active-bye');   
}, 750)

}

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
// BRINGS UP CURRENT SECTION
    $('.gallery').toggleClass('active-sect');
// REMOVES OTHER SECTION ACTIVES
    $('.appointment').removeClass('active-sect');
    $('.about').removeClass('active-sect'); 
    $('#appointment').removeClass('active-link');
    $('#about').removeClass('active-link'); 
      
});

$('#about').click(function() {
    $(this).toggleClass('active-link')
// BRINGS UP CURRENT SECTION
    $('.about').toggleClass('active-sect');
// REMOVES OTHER SECTION ACTIVES
    $('.appointment').removeClass('active-sect');
    $('.gallery').removeClass('active-sect');
    $('#appointment').removeClass('active-link');
    $('#gallery').removeClass('active-link');
});

