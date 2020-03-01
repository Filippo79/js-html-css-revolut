$(document).ready(function() {

    $('.menu-item.course').click(function() {
        //$(".dropdown-menu.course").slideDown();//cosi apre e chiude contemporaneamente( abassa)
        //$('.dropdown-menu.course').slideUp();//cosi apre e chiude contemporaneamente (chiude)
        $(".dropdown-menu.course").slideToggle();//questo fa si che il menu 'dropdown-menu.course
                                          // si apra con un clicke si chiuda con un 'altro click'
     });
     $('.menu-item.after-course').click(function(){//idem come sopra su classi diverse per diversi menu
         $('.dropdown-menu.after-course').slideToggle();
     });

});
