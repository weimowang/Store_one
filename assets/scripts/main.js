window.onload = function () {

    var scroll_location = "";
    document.getElementById('menubtn').addEventListener('click', function (e) {
        $(this).toggleClass('active');
        $('#menuUl').toggleClass('active');
    })

    $('#menuUl li').click(function () {
        switch ($(this).attr('id')) {
            case "menuproduct":
                toBlockposition(0);
                break;
            case "menuabout":
                toBlockposition(1);
                break;
            case "menucontact":
                toBlockposition(2);
                break;
            case "menuhome":
                toBlockposition(3);
                break;
        }
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




    /**
        * user clikk btn to the wrapper position 
        * @param index,int
        */
    function toBlockposition(_index) {
        var _item = "";
        switch (_index) {
            case 0:
                _item = "#product"
                break;
            case 1:
                _item = "#about"
                break;
            case 2:
                _item = "#contact"
                break;
            case 3:
                window.location.assign('http://weimow4.sg-host.com');
                break;
        }
        $('html, body').animate({
            scrollTop: $(_item).offset().top
        }, 600);

    }
}

