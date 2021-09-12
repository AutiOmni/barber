function heroSlider() {

setTimeout(() => {

    // PUT IMAGES BACK IN PLACE FOR NEXT ROTATION
    $('.hero-nine').css({'opacity': '0', 'transform': 'translate(0%, -100%)'})
    $('.hero-ten').css({'opacity': '0', 'transform': 'translate(0%, -100%)'})

    $('.hero-seven').css('opacity', '1')
    $('.hero-eight').css('opacity', '1')

    $('.hero-one').css('transform', 'translate(100%, 0%)')
    $('.hero-two').css('transform', 'translate(-100%, 0%)')

}, 3000);

setTimeout(() => {


    $('.hero-eleven').css({'opacity': '0', 'transform': 'translate(-100%, 0%)'})
    $('.hero-twelve').css({'opacity': '0', 'transform': 'translate(100%, 0%)'})
    
    $('.hero-three').css('transform', 'translate(0%, 0%)')
    $('.hero-four').css('transform', 'translate(0%, 0%)')
}, 3000);

setTimeout(() => {
    $('.hero-three').css('transform', 'translate(0%, -100%)')
    $('.hero-four').css('transform', 'translate(0%, -100%)')

    // PUT IMAGES BACK IN PLACE FOR NEXT ROTATION
    $('.hero-nine').css('opacity', '1')
    $('.hero-ten').css('opacity', '1')

    $('.hero-eleven').css('opacity', '1')
    $('.hero-twelve').css('opacity', '1')

    // PUT IMAGES BACK IN PLACE FOR NEXT ROTATION
    $('.hero-one').css({'opacity': '0', 'transform': 'translate(0%, 100%)'})
    $('.hero-two').css({'opacity': '0', 'transform': 'translate(0%, 100%)'})

    $('.hero-five').css('transform', 'translate(0%, 0%)')
    $('.hero-six').css('transform', 'translate(0%, 0%)')
}, 6000);


setTimeout(() => {
    $('.hero-five').css('transform', 'translate(-100%, 0%)')
    $('.hero-six').css('transform', 'translate(100%, 0%)')

    // PUT IMAGES BACK IN PLACE FOR NEXT ROTATION
    $('.hero-one').css('opacity', '1')
    $('.hero-two').css('opacity', '1')

    $('.hero-three').css({'opacity': '0', 'transform': 'translate(-100%, 0%)'})
    $('.hero-four').css({'opacity': '0', 'transform': 'translate(100%, 0%)'})

    $('.hero-seven').css('transform', 'translate(0%, 0%)')
    $('.hero-eight').css('transform', 'translate(0%, 0%)')
}, 9000);

setTimeout(() => {
    $('.hero-seven').css('transform', 'translate(0%, 100%)')
    $('.hero-eight').css('transform', 'translate(0%, 100%)')

    // PUT IMAGES BACK IN PLACE FOR NEXT ROTATION
     $('.hero-three').css('opacity', '1')
     $('.hero-four').css('opacity', '1')
     // PUT IMAGES BACK IN PLACE FOR NEXT ROTATION
     $('.hero-five').css({'opacity': '0', 'transform': 'translate(0%, 100%)'})
     $('.hero-six').css({'opacity': '0', 'transform': 'translate(0%, 100%)'})

    $('.hero-nine').css('transform', 'translate(0%, 0%)')
    $('.hero-ten').css('transform', 'translate(0%, 0%)')
}, 12000);

setTimeout(() => {
    $('.hero-nine').css('transform', 'translate(100%, 0%)')
    $('.hero-ten').css('transform', 'translate(-100%, 0%)')

        // PUT IMAGES BACK IN PLACE FOR NEXT ROTATION
        $('.hero-five').css('opacity', '1')
        $('.hero-six').css('opacity', '1')
        // PUT IMAGES BACK IN PLACE FOR NEXT ROTATION
        $('.hero-seven').css({'opacity': '0', 'transform': 'translate(100%, 0%)'})
        $('.hero-eight').css({'opacity': '0', 'transform': 'translate(-100%, 0%)'})

        $('.hero-eleven').css('transform', 'translate(0%, 0%)')
        $('.hero-twelve').css('transform', 'translate(0%, 0%)')
}, 15000);

setTimeout(() => {
    $('.hero-eleven').css('transform', 'translate(0%, -100%)')
    $('.hero-twelve').css('transform', 'translate(0%, -100%)')

        // PUT IMAGES BACK IN PLACE FOR NEXT ROTATION
        $('.hero-nine').css({'opacity': '0', 'transform': 'translate(0%, -100%)'})
        $('.hero-ten').css({'opacity': '0', 'transform': 'translate(0%, -100%)'})

        $('.hero-seven').css('opacity', '1')
        $('.hero-eight').css('opacity', '1')

        $('.hero-one').css('transform', 'translate(0%, 0%)')
        $('.hero-two').css('transform', 'translate(0%, 0%)')
}, 18000);

}

heroSlider()

setInterval(heroSlider, 18000)