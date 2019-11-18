window.onload = function () {


    document.getElementById('menubtn').addEventListener('click', function (e) {
        $(this).toggleClass('active');
        $('#menuUl').toggleClass('active');
    })

    $('#menuUl li').click(function () {
        $(this).parent().find('li').each(function () {
            if ($(this).hasClass('current-active')) {
                $(this).toggleClass('current-active');
            }
        })
        $(this).toggleClass('current-active');
    })

    $('.pagebtn').click(function () {
        var _btnindex = $(this).index();

        $('#wei-boxs').find('div').each(function () {
            if ($(this).hasClass('active')) {
                $(this).toggleClass('active');
            }
        })

        $('#wei-boxs').children().eq(_btnindex).toggleClass('active');

        $(this).parent().find('div').each(function () {
            if ($(this).hasClass('active')) {
                $(this).toggleClass('active');
            }
        })

        $(this).toggleClass('active');
    })


    $('.pagebtn-one').click(function () {
        var _btnindex = $(this).index();

        $('.wei-pic-boxs').find('div').each(function () {
            if ($(this).hasClass('active')) {
                $(this).toggleClass('active');
            }
        })
        $('.wei-pic-boxs').children().eq(_btnindex).toggleClass('active');

        $(this).parent().find('div').each(function () {
            if ($(this).hasClass('active')) {
                $(this).toggleClass('active');
            }
        })

        $(this).toggleClass('active');

    })
}

