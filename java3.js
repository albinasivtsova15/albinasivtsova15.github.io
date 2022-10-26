jQuery(function ($) {
    $(document).ready(function () {
        $(".Images").slick({
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToScroll: 1,
                        slidesToShow: 2
                    }
                }
            ],
            slidesToScroll: 1,
            slidesToShow: 4
        });
    });
});
