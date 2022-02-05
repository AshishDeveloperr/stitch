(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
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


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    var owl = $('.hero-carousel');
    $(".hero-carousel").owlCarousel({
        // items:2,
        autoplay: true,
        animateOut: 'fadeOut',
        touchDrag: false,
        mouseDrag: false,
        smartSpeed: 250,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        // autoplayTimeout:1000,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            }
        }
    });

    // About carousel

    var owl = $('.about-carousel');
    $(".about-carousel").owlCarousel({
        autoplay: true,
        // animateOut: 'fadeOut',
        // touchDrag: true,
        // mouseDrag: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            }
        }
    });
    
    owl.on('mousewheel', '.owl-stage', function (e) {
        
        if(e.originalEvent.wheelDelta > 0) {
           owl.trigger('next.owl');
        }
        else{
            owl.trigger('prev.owl');
        }
        e.preventDefault();
      });
      
})(jQuery);


// typing script starts

    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Best place to find tailors and boutiques near you, Follow the latest trends and discover them from any location.",
    //  "Is your favourite boutique a 2 hour drive? Now its just few clicks away",
    //  "Are you too picky, or too confused ? Stitchify caters to ALL!!",
    //  "Now Expectation IS reality! No more waiting for Delivery day to know if its the right fit! Choose, Customise and monitor your outfit getting ready.",
    //   "There is a match for everyone - From your picky father in law to your confused neice, from international conferences to working from home - there is a match for all! Stitchify offers you a wide range of options to choose from. For #AllOccassions OR #NoOccassionAtAll",
];
    const typingDelay = 20;
    const erasingDelay = 30;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
    }

    function erase() {
        if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
    }

    document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
    });
    // white this in html
    // <span class="typed-text"></span><span class="cursor">&nbsp;</span>