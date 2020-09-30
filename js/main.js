$(document).ready(function () {
    $('#FormControlSelect1').click(function(event) {

        event.preventDefault();

        if ($('.fake_form_select').css('display') === 'none') {
            $('#FormControlSelect1').hide();
            $('.fake_form_select').show();
            $('.organization').css('top', '-110px');

        } else {
            $('.fake_form_select').hide();
        }

    });

    $('.switch-btn').click(function(){
        $(this).toggleClass('switch-on');
    });


});