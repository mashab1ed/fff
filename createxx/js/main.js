$(function(){

    var mixer = mixitup('.directions__list');
$( '.directions__filter-btn').on('click', function(){
    $( '.directions__filter-btn').removeClass('directions__filter-btn--active')
    $( this).addClass('directions__filter-btn--active')

}
)

$('.team__slider').slick({
    arrows:false,
slidesToShow: 4,
draggable:false,
dots:false,
responsive:
[
    {
        breakpoint: 1100,
        settings: {
        slidesToShow: 3,}  ,
    },
    {
        breakpoint: 750,
        settings: {
        slidesToShow: 2,}  ,
    },
    {
        breakpoint: 550,
        settings: {
        slidesToShow: 1,
        draggable:true,
        dots:true,},
    },
]
})

$('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
})

$('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    
$('.team__slider').slick('slickNext')





})





$('.testimonials__slider').slick({
    arrows:false,
    dots:true,
    appendDots: $('.testimonials__dots'),
    waitForAnimate:false,
})

$('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
})

$('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    
$('.testimonials__slider').slick('slickNext')





})
$('.programm__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('programm__acc-link--active')
    $(this).children('.programm__acc-text').slideToggle()
})




})
setInterval(() => {
    
        if($(window).scrollTop() > 0 && $('header__top').hasClass('header__top--open') === false){
            $('.burger').addClass('burger--folow')
        } else {
            $('.burger').removeClass('burger--folow')
        }
    
}, 0);

$('.burger, .overlay').on('click' , function (e){
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
})


    








