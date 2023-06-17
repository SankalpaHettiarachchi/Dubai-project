(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
        }
    });


    // Pricing carousel
    $(".pricing-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);


function make_appoinmnet()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var service = document.getElementById("service").value;

    console.log("name:",name);
    console.log("email:",email);
    console.log("date:",date);
    console.log("time:",time);
    console.log("service",service);

    if (name && email && date && time && service)
    {
        var message = "Name: " + name + "\n" +
              "Email: " + email + "\n" +
              "Date: " + date + "\n" +
              "Time: " + time + "\n" +
              "Service: " + service;

        var whatsappURL = "https://api.whatsapp.com/send?phone=+971565004506&text=" + encodeURIComponent(message);
        window.open(whatsappURL, '_blank');
    }
    else
    {
        alert("Please fill in all the required fields.");
    }
    

}

function Send_Email()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var body = `Name: ${name}\n <br> Email: ${email}\n <br> Subject: ${subject}\n <br> Message: ${message}\n\n <br> `;


    if (name && email && subject && message)
    {
        Email.send({
            SecureToken : "d29f9dbe-cc2d-4987-916b-e092cb01af4d",
            To : 'ceyloniagentsspaclub@gmail.com',
            From : 'ceyloniagentsspaclub@gmail.com',
            Subject : "Client Feed-Back",
            Body : body
        }).then(
          message => alert("Email sent successfuly")
        );
    }
    else
    {
        alert("Please fill in all the required fields.");
    }
    
}
// -----------------------------Cache Settings----------------------------------
// Get a reference to the image element
// var welcomeImage = document.getElementById('welcomeImage');

// // Set caching headers using JavaScript
// welcomeImage.addEventListener('load', function() {
//   var expires = new Date();
//   expires.setDate(expires.getDate() + 7); // Set expiration date to 1 week from now
//   var expiresString = expires.toUTCString();
  
//   document.cookie = 'welcomeImage=loaded;expires=' + expiresString + ';path=/';
// });

