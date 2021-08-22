$('#appointment').click(function() {
    $(this).toggleClass('active-link')

// CHECKS FOR PROPER ANIMATION   MMMMMMMMMMMMMMMMMMAKE THIS A SINGLE FUNCTION
if ($(".appointment").hasClass('active-sect')) {
    // THIS IS FOR STYLISTIC REMOVAL OF SECTION
    $('.appointment').addClass('active-bye')
    // TIME TO APPEND DELETED SECTION
    setTimeout(function() {
        $('.appointment').remove()
        $('main').append(` <section class="appointment">
        <div class="appointment-form">
            <h2 class="form-title">Contact Information</h2>
                <form action="">
                        <div class="name-form-cont">
                        <input type="text" name="first-name" placeholder="First Name" required pattern="\w+" maxlength="25">
                        <input type="text" name="last-name" placeholder="Last Name" required pattern="\w" maxlength="25">
                        </div>
                        <div class="contact-form-cont">
                            <input type="tel" name="phone-number" required placeholder="Phone Number" pattern="(\d?){1}(\s?|\W?){1}(\d){3}(\s?|\W?){1}(\d){3}(\s?|\W?){1}(\d){4}$">
                            <input type="email" name="email" required placeholder="Email">
                        </div>
                    <div class="divided-form-cont">
                        <div class="date-cont">
                            <div>
                                <label for="appointment-date">Preferred Appointment Date: </label>
                            </div>
                            <div>
                                <input type="date" name="appointment-date" required>
                            </div>
                        </div>  
                        <div class="drink-selection-cont">                     
                            <div>
                                <label for="preferred-beer">Preferred Drink: </label>
                            </div>
                            <div>
                                <select name="drink-choice" id="drink-choice">
                                    <option value="">Ale (Barber's Choice)</option>
                                    <option value="">Pale Ale</option>
                                    <option value="">IPA</option>
                                    <option value="">Imperial</option>
                                    <option value="">Blond Ale</option>
                                    <option value="">Brown Ale</option>
                                    <option value="">Wheat</option>
                                    <option value="">Stout</option>
                                    <option value="">Lager (Barber's Choice)</option>
                                    <option value="">Pilsner</option>
                                    <option value="">Helles Lager</option>
                                    <option value="">Kölsch Lager</option>
                                    <option value="">Vienna Lager</option>
                                    <option value="">Mexican Lager</option>
                                    <option value="">Cider</option>
                                </select>
                            </div>                  
                        </div>
                    </div>
                </form>
        </div>
        <div class="appointment-img">
            <img src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Barber Shop Image">
        </div> 
    </section>`)
    }, 250);
    
    };

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

 // CHECKS FOR PROPER ANIMATION   
 if ($(".appointment").hasClass('active-sect')) {
    // THIS IS FOR STYLISTIC REMOVAL OF SECTION
    $('.appointment').addClass('active-bye')
    // TIME TO APPEND DELETED SECTION
    setTimeout(function() {
        $('.appointment').remove()
        $('main').append(` <section class="appointment">
        <div class="appointment-form">
            <h2 class="form-title">Contact Information</h2>
                <form action="">
                        <div class="name-form-cont">
                        <input type="text" name="first-name" placeholder="First Name" required pattern="\w+" maxlength="25">
                        <input type="text" name="last-name" placeholder="Last Name" required pattern="\w" maxlength="25">
                        </div>
                        <div class="contact-form-cont">
                            <input type="tel" name="phone-number" required placeholder="Phone Number" pattern="(\d?){1}(\s?|\W?){1}(\d){3}(\s?|\W?){1}(\d){3}(\s?|\W?){1}(\d){4}$">
                            <input type="email" name="email" required placeholder="Email">
                        </div>
                    <div class="divided-form-cont">
                        <div class="date-cont">
                            <div>
                                <label for="appointment-date">Preferred Appointment Date: </label>
                            </div>
                            <div>
                                <input type="date" name="appointment-date" required>
                            </div>
                        </div>  
                        <div class="drink-selection-cont">                     
                            <div>
                                <label for="preferred-beer">Preferred Drink: </label>
                            </div>
                            <div>
                                <select name="drink-choice" id="drink-choice">
                                    <option value="">Ale (Barber's Choice)</option>
                                    <option value="">Pale Ale</option>
                                    <option value="">IPA</option>
                                    <option value="">Imperial</option>
                                    <option value="">Blond Ale</option>
                                    <option value="">Brown Ale</option>
                                    <option value="">Wheat</option>
                                    <option value="">Stout</option>
                                    <option value="">Lager (Barber's Choice)</option>
                                    <option value="">Pilsner</option>
                                    <option value="">Helles Lager</option>
                                    <option value="">Kölsch Lager</option>
                                    <option value="">Vienna Lager</option>
                                    <option value="">Mexican Lager</option>
                                    <option value="">Cider</option>
                                </select>
                            </div>                  
                        </div>
                    </div>
                </form>
        </div>
        <div class="appointment-img">
            <img src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Barber Shop Image">
        </div> 
    </section>`)
    }, 250);
    
    };
    

// BRINGS UP CURRENT SECTION
    $('.gallery').toggleClass('active-sect');
// REMOVES OTHER SECTION ACTIVES
    $('.about').removeClass('active-sect'); 
    $('#appointment').removeClass('active-link');
    $('#about').removeClass('active-link'); 
      
});

$('#about').click(function() {
    $(this).toggleClass('active-link')
// CHECKS FOR PROPER ANIMATION   
if ($(".appointment").hasClass('active-sect')) {
    // THIS IS FOR STYLISTIC REMOVAL OF SECTION
    $('.appointment').addClass('active-bye')
    // TIME TO APPEND DELETED SECTION
    setTimeout(function() {
        $('.appointment').remove()
        $('main').append(` <section class="appointment">
        <div class="appointment-form">
            <h2 class="form-title">Contact Information</h2>
                <form action="">
                        <div class="name-form-cont">
                        <input type="text" name="first-name" placeholder="First Name" required pattern="\w+" maxlength="25">
                        <input type="text" name="last-name" placeholder="Last Name" required pattern="\w" maxlength="25">
                        </div>
                        <div class="contact-form-cont">
                            <input type="tel" name="phone-number" required placeholder="Phone Number" pattern="(\d?){1}(\s?|\W?){1}(\d){3}(\s?|\W?){1}(\d){3}(\s?|\W?){1}(\d){4}$">
                            <input type="email" name="email" required placeholder="Email">
                        </div>
                    <div class="divided-form-cont">
                        <div class="date-cont">
                            <div>
                                <label for="appointment-date">Preferred Appointment Date: </label>
                            </div>
                            <div>
                                <input type="date" name="appointment-date" required>
                            </div>
                        </div>  
                        <div class="drink-selection-cont">                     
                            <div>
                                <label for="preferred-beer">Preferred Drink: </label>
                            </div>
                            <div>
                                <select name="drink-choice" id="drink-choice">
                                    <option value="">Ale (Barber's Choice)</option>
                                    <option value="">Pale Ale</option>
                                    <option value="">IPA</option>
                                    <option value="">Imperial</option>
                                    <option value="">Blond Ale</option>
                                    <option value="">Brown Ale</option>
                                    <option value="">Wheat</option>
                                    <option value="">Stout</option>
                                    <option value="">Lager (Barber's Choice)</option>
                                    <option value="">Pilsner</option>
                                    <option value="">Helles Lager</option>
                                    <option value="">Kölsch Lager</option>
                                    <option value="">Vienna Lager</option>
                                    <option value="">Mexican Lager</option>
                                    <option value="">Cider</option>
                                </select>
                            </div>                  
                        </div>
                    </div>
                </form>
        </div>
        <div class="appointment-img">
            <img src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Barber Shop Image">
        </div> 
    </section>`)
    }, 250)
    
    }
    
  
// BRINGS UP CURRENT SECTION
    $('.about').toggleClass('active-sect');
// REMOVES OTHER SECTION ACTIVES
    $('.gallery').removeClass('active-sect');
    $('#appointment').removeClass('active-link');
    $('#gallery').removeClass('active-link');
});

