$(function(){
    // DAY
    $(function () {

        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
        
        let countDown1 = new Date('Feb 14, 2021 00:00:00').getTime(),
            x = setInterval(function() {    
        
              let now = new Date().getTime(),
                  distance = countDown1 - now;
        
                document.getElementById('day').innerText = Math.floor(distance / (day)),
                document.getElementById('hour').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('min').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('sec').innerText = Math.floor((distance % (minute)) / second);
            }, second)
        });
///////////////////////////////////////// SLIDER
$('.slider-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: '.next',
    prevArrow: '.prev',
    autoplaySpeed: 2000,
  });
    //////////////////////////////////    Navbar
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 50) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
        if (scrolling > 500) {
            $('.back-top').fadeIn(500);
        } else {
            $('.back-top').fadeOut(500);
        }
    });
    //    Back-Top   
    $('.back-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
///////////////////////////////// Smooth Scroll
var html_body = $('html, body');
$('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 500);
            return false;
        }
    }
});

    
});