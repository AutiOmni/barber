$('#appointment').click(function() {
    $('.appointment').toggleClass('active-sect');
    $('.gallery').removeClass('active-sect');
    $('.about').removeClass('active-sect');
});

$('#gallery').click(function() {
    $('.gallery').toggleClass('active-sect');
    $('.appointment').removeClass('active-sect');
    $('.about').removeClass('active-sect');   
});

$('#about').click(function() {
    $('.about').toggleClass('active-sect');
    $('.appointment').removeClass('active-sect');
    $('.gallery').removeClass('active-sect');
});

