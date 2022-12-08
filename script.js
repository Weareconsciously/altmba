$(document).ready(function(){

    //responsive navbar
    $('#icon').click(function(){
        $('ul').toggleClass('show');
        $('#icon').toggleClass('active');
        $('nav').toggleClass('change');
        $('body').toggleClass('freeze');
    });

    $('li').click(function(){
        $('ul').removeClass('show');
        $('nav').removeClass('change');
        $('#icon').removeClass('active');
        $('body').removeClass('freeze');
    });

    // $(window).on('resize', function() {
    //     if($(window).width() < 991) {
    //         $('.top-four-block').addClass('top-four-mob');
    //         $('.top-four-block').removeClass('top-four');
    //     }
    // });
});