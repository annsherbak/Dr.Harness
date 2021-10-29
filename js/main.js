$(document).ready(function(){
    //табы
    $('.catalog__switch-item').click(function(e) {
        e.preventDefault();

        $('.catalog__switch-item').removeClass('catalog__switch-item--active');
        $('.catalog__branch-item').removeClass('catalog__branch-item--active');

        $(this).addClass('catalog__switch-item--active');
        $($(this).attr('href')).addClass('catalog__branch-item--active');
    })

    $('.catalog__switch-item:first').click();

    $('.intro__button-erotic').click(function(){  
        $('.catalog__switch-item').removeClass('catalog__switch-item--active');
        $('.catalog__branch-item').removeClass('catalog__branch-item--active');
        $('.catalog__switch-item:last').addClass('catalog__switch-item--active');
        $($(this).attr('href')).addClass('catalog__branch-item--active');
    })
    // плавный скролл
    $('.intro__buttons a').on('click', function() {
        let href = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 700, 
            easing: "linear" 
        });
        return false;
    });
    

    // модальное окно
    $('.catalog__card-btn').on('click', function() {
        $('.modal').addClass('modal--active');
        $('.modal__fogging').fadeIn(600);
    })
    // модальное окно закрытие по клику на крестик
    $('.modal__close').on('click', function() {
    $('.modal').removeClass('modal--active');
    $('.modal__fogging').fadeOut(600);
    })

    // бургер меню
    $('.header__burger').on('click', function(){
        $('.header__burger').toggleClass('header__burger--active');
        $('.header__nav').toggleClass('header__nav--active');
    })
});