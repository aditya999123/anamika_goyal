$(document).ready(function () {
    $('.courses-list').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        appendDots: '#latest-courses .courses-dots',
        prevArrow: '<div><button class="btn"><i class="fas fa-chevron-left"></i></button></div>',
        nextArrow: '<div><button class="btn"><i class="fas fa-chevron-right"></i></button></div>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

});