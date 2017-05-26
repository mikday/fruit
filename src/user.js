/**
 * Created by ZHANJIA on 2017/5/22.
 */

$(function(){
    $('.btn').waves();


    var number = function () {
        var Num;
        var ww = $('.main').width();
        if (ww >= 1920) {
            Num = 5;
        } else if (ww < 1920 && ww >= 1500) {
            Num = 4;
        } else if (ww < 1500 && ww >= 1204) {
            Num = 4;
        } else if (ww < 1204 && ww >= 900) {
            Num = 4;
        } else if (ww < 900 && ww >= 768) {
            Num = 3;
        } else if (ww < 768 && ww > 320) {
            Num = 2;
        } else if (ww <= 320) {
            Num = 2;
        }
        return Num;
    }();

    var li_height,
        li_width;

    setTimeout(function(){
       li_height = $('.footer_prints .roll_img').find('.fruit_images>li').outerHeight(true);
        li_width = $('.footer_prints .roll_img').find('.fruit_images>li').outerWidth(true);

        $('.footer_prints .roll_img').roll({liH:li_height,liW:li_width,num: number, autoPosition: true});
    },10);

    $(window).resize(function(){
        var number = function () {
            var Num;
            var ww = $('.main').width();
            if (ww >= 1920) {
                Num = 5;
            } else if (ww < 1920 && ww >= 1500) {
                Num = 4;
            } else if (ww < 1500 && ww >= 1204) {
                Num = 4;
            } else if (ww < 1204 && ww >= 900) {
                Num = 4;
            } else if (ww < 900 && ww >= 768) {
                Num = 3;
            } else if (ww < 768 && ww > 320) {
                Num = 2;
            } else if (ww <= 320) {
                Num = 2;
            }
            return Num;
        }();

        setTimeout(function(){
            li_height = $('.footer_prints .roll_img').find('.fruit_images>li').outerHeight(true);
            li_width = $('.footer_prints .roll_img').find('.fruit_images>li').outerWidth(true);

            $('.footer_prints .roll_img').roll({liH:li_height,liW:li_width,num: number, autoPosition: true});
        },10);
    });



    $('.showModel').MyModal({long:true});

    var box = $('.textarea');
    if (typeof document.webkitHidden == "undefined") {
        // 非chrome浏览器阻止粘贴
        box.onpaste = function() {
            return false;
        }
    }

    var pay_back = $('.pay_back_explain');
    pay_back.toolTips({'text':"<p>如您已经过了维权处理期无法发起退款申请，建议您联系卖家协商处理哦。</p>" +
    "<p>如无法协商一致，建议您提供有效凭证，联系淘宝客服处理</p>" +
    "<p>如果您确实操作过付款,退款过程中卖家操作了拒绝，且双方无法协商一致,请致电客服0838—9087768</p>"});
    var large_pic = $('.able_to_large');

    large_pic.toolTips({img:true});

    /* 非正常切换 */
    $('.myOrder_detail').click(function () {
        $(this).closest('.right_content>div').hide();
        $(this).closest('.right_content').find('div.my_order_detail').show();
        $(this).closest('.main').find('.left_menu').find('.tab_tittle').removeClass('active');
        $(this).closest('.main').find('.left_menu').find('.tab_tittle[data-value="my_order"]').addClass('active');
        //setMainHeight();
    });
    $('.apply_rights').click(function () {
        $(this).closest('.right_content>div').hide();
        $(this).closest('.right_content').find('div.my_rights').show();
        //setMainHeight();
    });

    $('.go_to_comment').click(function () {
        $(this).closest('.right_content>div').hide();
        $(this).closest('.right_content').find('div.comments').show();
        $(this).closest('.main').find('.left_menu').find('.tab_tittle').removeClass('active');
        $(this).closest('.main').find('.left_menu').find('.tab_tittle[data-value="myComment"]').addClass('active');
        //setMainHeight();
    });

    $('.rights_jindu').click(function () {
        $(this).closest('.right_content>div').hide();
        $(this).closest('.right_content').find('div.after_sales').show();
        //setMainHeight();
    });
    $('.add_new_address').click(function () {
        $(this).closest('.right_content>div').hide();
        $(this).closest('.right_content').find('div.new_address').show();
        //setMainHeight();
    });

    $('.edit_add').click(function () {
        $(this).closest('.right_content>div').hide();
        $(this).closest('.right_content').find('div.edit_address').show();
        //setMainHeight();
    });

    $('.check_comment').click(function () {
        $(this).closest('.right_content>div').hide();
        $(this).closest('.right_content').find('div.myComment').show();
        $(this).closest('.main').find('.left_menu').find('.tab_tittle').removeClass('active');
        $(this).closest('.main').find('.left_menu').find('.tab_tittle[data-value="myComment"]').addClass('active');
        //setMainHeight();
    });








//编辑
//user_info edit
    $('.edit').click(function () {
        var editName = $(this).data('edit');
        $(this).toggleClass('view');
        $(this).closest('.edit_body').toggleClass('view');

    });

    $('.edit_cancel').click(function () {
        $(this).closest('.edit_body').addClass('view');
    });

    $('.change_user_img').click(function () {
        $(this).closest('.first_view').hide();
        $(this).closest('.main').find('.edit_head_tab').show();
    });
    $('.cancle_edit_head').click(function () {
        $(this).closest('.main').find('.first_view').show();
        $(this).closest('.edit_head_tab').hide();
    });

    /*  level comment */
    function set_level(target) {
        var ul = target.closest('ul');
        var index = target.index() + 1;
        ul.find('li').removeClass('active');
        for (var i = 0; i < index; i++) {
            ul.find('li').eq(i).addClass('active');
        }
    }

    $('.comment_level > li > ul >li').click(function () {
        var $this = $(this);
        set_level($this);
    });

});


