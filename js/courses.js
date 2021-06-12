$(document).ready(function () {
    $('.courses-list').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        appendDots: '#latest-courses .courses-dots',
        prevArrow: '<div><button class="btn left-btn"><i class="fas fa-chevron-left"></i></button></div>',
        nextArrow: '<div><button class="btn right-btn"><i class="fas fa-chevron-right"></i></button></div>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
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