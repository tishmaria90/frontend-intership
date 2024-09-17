$(document).ready(function() {
    $('.slider__button').on('click', function() {
        var newleft = (parseInt($(this).data('number')) - 1) * $('.slider').width();
        $('.slider__wrapper').css('left', '-' + newleft + 'px');
        $('.slider__button.active').removeClass('active');
        $(this).addClass('active');
    });
});

