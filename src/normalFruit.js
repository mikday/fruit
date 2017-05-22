/**
 * Created by ZHANJIA on 2017/5/23.
 */


$(function(){
    //pages
    if ($('.fruit_ul').is(":visible")) {
        // console.log('.img');
        $('.fruit_ul').ulHeight();
    } else if ($('.li_pages').is(":visible")) {
        // console.log('.li');
        $('.li_pages').liPages();
    }
});


    /*  购物车 */
    var shoppingNavH;
    if ($(window).width() < 480) {
        shoppingNavH = 0;
    } else {
        shoppingNavH = $('nav').height();
    }


    if ($(window).height() > 1000) {
        $('.shopping_car').css({'height': $(window).height() - $('.top').height() - shoppingNavH - $('.foot_bottom_simple').height() + "px"});
    } else {
        $('.shopping_car').css({'height': 900 + "px"});

    }
    $('.car_form').css({'height': $('.shopping_car').height() - $('.car_head').height() - $('.car_operate').height() - $('.car_info').height() + "px"});



