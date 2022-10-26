var document;
var window;
var alert;
var console;
var $;
$(document).ready(function () {
    $(".slider").slick({
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            }
        ],
        slidesToScroll: 4,
        slidesToShow: 4,
        waitForAnimate: false
    });
});

