$(function() {








    $('.c-main').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: ".next",
        prevArrow: ".prev",
        responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 500,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 766.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 500,
                    arrows: false,
                    dots: false

                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 500,
                    arrows: false,
                    dots: false
                }
            }

        ]
    });








})