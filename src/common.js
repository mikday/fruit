/**
 * Created by ZHANJIA on 2017/4/16.
 */


$(function () {

    //区分浏览器，部分版本
    function myBrowser(){
        var ua = window.navigator.userAgent;
        var isIE = window.ActiveXObject != undefined && ua.indexOf("MSIE") != -1;
        var isFirefox = ua.indexOf("Firefox") != -1;
        var isOpera = window.opr != undefined;
        var isChrome = ua.indexOf("Chrome") && window.chrome;
        var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
        if (isIE) {
            return "IE";
        } else if (isFirefox) {
            return "Firefox";
        } else if (isOpera) {
            return "Opera";
        } else if (isChrome) {
            return "Chrome";
        } else if (isSafari) {
            return "Safari";
        } else {
            return "Unkown";
        }
    }

    var cc = myBrowser();
    console.log("cc = " + cc);
    if(cc == "Chrome" ){
        $("head").append("<link>");
        css = $("head").children(":last");
        css.attr({
            rel: "stylesheet",
            type: "text/css",
            href: "./style/font10.css"
        });
    }

    $.ajaxSetup({
        cache:false
    });
//search

    $('.search>input').focus(function () {
        $(this).closest('.search').addClass('active');
    });

    $('.search>input').blur(function () {
        $(this).closest('.search').removeClass('active');
    });

    //返回到顶部
    var w_height = $(window).height();
    var w_width = $(window).width();
    var body = $('body');
    var back_to_top = $('<a href="javascript:void(0);" class="back_to_top"><span></span></a>');
    body.append(back_to_top);
    $(window).scroll(function () {
        var scroll_top = $(this).scrollTop();
        if (scroll_top > 800) {
            back_to_top.fadeIn(800);
            back_to_top.click(function () {
                $(window).scrollTop(0);
            });
        } else {
            back_to_top.fadeOut(800);
        }
    });


    /* input  */
    $('input').focus(function () {
        $(this).attr('placeholder', '');
    });


    /*  　login&sign location    */
    var l_height = $('.login_sign').height();

    var login_account = $('.login_account');
    var logo_height = $('.login_sign>.logo').outerHeight();


    /* 左目录定高 */
    var top_height = $('.top').height();

    /* 非长图定高 */


    var form_height = login_account.outerHeight();
    login_account.css({'margin-top': (l_height - form_height) / 2 - logo_height + "px"});


    //left_menu
    if (w_width < 480) {
        $('.left_menu').css({"height": w_height - top_height + "px"});
    }

    $('.menu_on').click(function () {
        $(this).closest('.main').addClass('menuOn');
        $(this).closest('.main').find('.left_menu').closest('.main').append(black);
        var black = $('<div class="black_bg"></div>');
        black.css({
            'left': $(this).closest('.main').find('.left_menu').outerWidth() + "px",
            'height': w_height - top_height + "px"
        });

        black.bind('click',function(){
            var bb = $(this).clone();
            bb.closest('.main').removeClass('menuOn');
            $(this).remove();
        });
        $(this).closest('.main').append(black);
        $(this).closest('.menu_toggle').hide();
        $(this).closest('.main').find('.left_menu>.menu_off').show();
        $(this).closest('.main').find('.left_menu>.menu_off').css({'height': w_height - top_height + 'px'});

        $(window).scroll(function () {
            $(this).scrollTop(0);
        });
    });


    $('.menu_off').click(function () {
        $(this).closest('.main').removeClass('menuOn');
        var black = $(this).closest('.main').find('.black_bg');
        black.remove();
        $(this).hide();
        $(this).closest('.main').find('.menu_toggle').show();
        $(window).unbind('scroll');
    });


    $('.car_editing').click(function () {
        var done = $(this).closest('.edit_car').find('.car_edit_done');
        var arr = [];
        var checkboxes = done.closest('.car_body').find('.car_list input[type=checkbox]');
        checkboxes.each(function () {
            var is_checked = $(this).prop('checked');
            if (is_checked) {
                var car_li = $(this).closest('li');
                car_li.find('.list_goods_describe').hide();
                car_li.find('.car_goods_type').hide();
                car_li.find('.car_goods_price').hide();
                car_li.find('.true_num').hide();
                car_li.find('.car_list_li_right').addClass('editing');
                car_li.find('.single_done').addClass('editing');
                arr.push(is_checked);
                return arr;
            }
        });
        if (arr.length <= 0) {
            $('.car_warning').show();
            $('.car_warning').closest('.myModal').click(function () {
                $(this).hide();
            });
            $('.car_warning').find('.comfire').css({'margin-top': ( $(window).height() - $('.comfire').height() ) / 2 + "px"})

        } else {
            done.show();
            $(this).hide();
        }

    });

    $('.car_edit_done').click(function () {
        var editing = $(this).closest('.edit_car').find('.car_editing');

        var checkboxes = editing.closest('.car_body').find('.car_list input[type=checkbox]');
        checkboxes.each(function () {
            var is_checked = $(this).prop('checked');
            if (is_checked) {
                editing.show();
                $(this).hide();
                var car_li = $(this).closest('li');
                car_li.find('.list_goods_describe').show();
                car_li.find('.car_goods_type').show();
                car_li.find('.car_goods_price').show();
                car_li.find('.true_num').show();
                car_li.find('.car_list_li_right').removeClass('editing');
                car_li.find('.single_done').removeClass('editing');
            }

        });
    });


    $('.single_done').click(function () {
        var editing = $(this).closest('.car_body').find('.car_editing');
        var done = $(this).closest('.car_body').find('.car_edit_done');
        editing.show();
        done.hide();
        var car_li = $(this).closest('li');
        car_li.find('.list_goods_describe').show();
        car_li.find('.car_goods_type').show();
        car_li.find('.car_goods_price').show();
        car_li.find('.true_num').show();
        car_li.find('.car_list_li_right').removeClass('editing');
        $(this).removeClass('editing');
    });




    //其他页面跳转来的
    var param1 = getParam('data');

    function getParam(paramName) {
        paramValue = "";
        isFound = false;
        if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
            arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
            i = 0;
            while (i < arrSource.length && !isFound) {
                if (arrSource[i].indexOf("=") > 0) {
                    if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                        paramValue = arrSource[i].split("=")[1];
                        isFound = true;
                    }
                }
                i++;
            }
        }
        return paramValue;
    }

    console.log('param1 = ' + param1);

    if(param1){
        console.log('mm');

        $('.user').find('.right_content>div').hide();
        $('.user').find('.right_content').find('div[class="' + param1 + '"]').show();
        $('.user').find('.left_menu').find('.tab_tittle').removeClass('active');
        $('.user').find('.left_menu').find('.tab_tittle[data-value="' + param1 + '"]').addClass('active');
        $('.user').find('.tab_body>div[data-value="' + param1 + '"]').show();

    }

    /*  tab  */
    $('.tab').each(function () {
        if(!param1){
            $(this).find('.tab_head>.tab_tittle').eq(0).addClass('active');
        }
        $(this).find('.tab_tittle').unbind("click").bind("click", function () {
            var $this = $(this),
                $value = $this.data("value"),
                $tabVal = $this.closest('.tab').data("value");

            $this.closest('.tab_head').find('.tab_tittle').removeClass('active');
            $this.addClass('active');
            $this.closest('.tab').find('.tab_body[data-value="' + $tabVal + '"]>div').hide();
            $this.closest('.tab').find('.tab_body[data-value="' + $tabVal + '"]>div[data-value="' + $value + '"]').show();

            var fruitUl_height = $('.fruit_ul').height();
            var fruitLi_height = $('.fruit_ul > li').outerHeight();

            if ($('.fruit_ul').is(":visible")) {
                // console.log('.img1');
                $('.fruit_ul').ulHeight();
            } else if ($('.li_pages').is(":visible")) {
                // console.log('.li2');
                $('.li_pages').liPages();
            }


        });
    });

    /* 小屏切换目录 */
    $('.top>.menu').click(function () {
        $('.top>.nav').slideToggle();
    });

    /* 目录点击效果 */
    $('.body_head>li').click(function () {
        $('.body_head').find('li').removeClass('active');
        $(this).addClass('active');
    });

    /*  slide menu  */
    $('.slided_down_menu>.text').click(function () {
        $(this).parent('.slided_down_menu').find('ul').slideToggle(300);
    });

    $('.slided_down_menu>ul>li').click(function () {
        var tet = $(this).text();
        var val = $(this).data('value');
        $(this).parents('.slided_down_menu').find('.text').find('.tet').text(tet);
        $(this).parents('.slided_down_menu').find('.text').find('input').val(val);
        $(this).parent('ul').slideUp();
    });


    /*  数字改变 */
    /* 设50为最大库存 */

    $('.choose_num').find('.change').click(function () {
        var data = $(this).data("value");
        var real = parseInt($(this).parent('.choose_num').find('.real_num').text());
        var add, reduce;

        if (real <= 0) {
            add = true;
            reduce = false;
            $(this).parent('.choose_num').find('.reduce').addClass('disable');
        } else {
            $(this).parent('.choose_num').find('.reduce').removeClass('disable');
        }
        if (real >= 50) {
            add = false;
            reduce = true;
            $(this).parent('.choose_num').find('.add').addClass('disable');
        } else {
            $(this).parent('.choose_num').find('.add').removeClass('disable');
        }

        if (data == "add" && real < 50) {
            real = real + 1;
        } else if (data == "reduce" && real > 0) {
            real = real - 1;
        }

        $(this).parent('.choose_num').find('.real_num').text(real);

    });

    /*   小图放大  */
    $('.comment_content_img>li').click(function () {
        var status = $(this).data('status');
        $(this).closest('.comment_content_img').find('li').removeClass('active').data('status', '');
        var src = $(this).find('img').attr('src');
        var target = $(this).closest('.comment_content_right').find('.show_big');

        if (!status) {
            $(this).addClass('active').data('status', 1);
            target.empty().append('<img src="' + src + '"/>').slideDown();
        } else {
            $(this).removeClass('active').data('status', '');
            target.empty().slideUp();
        }
    });

    /*  筛选  */
    $('.filter>p').click(function () {
        $(this).closest('.filter').find('.filter_body').slideToggle("slow");
    });

    /*  单选  */
    $('.radio_group').click(function () {
        var radio = $(this).find('input[type="radio"]');
        var check = radio.prop("checked");

        if (!check) {
            $(this).closest('.radio_groups').find('.radio_group').find('input[type="radio"]').prop('checked', '');
            $(this).closest('.radio_groups').find('.radio_group').removeClass('active');
            //
            $(this).find('input[type="radio"]').prop('checked', 'checked');
            $(this).addClass('active');
        }
    });

    /*  勾选  */
    $('.choose').click(function () {
        var radio = $(this).find('input[type="radio"]');
        var check = radio.prop("checked");

        if (!check) {
            $(this).find('input[type="radio"]').prop('checked', 'checked');
            $(this).find('a > span').addClass('active');
            $(this).addClass('active');
        } else {
            $(this).find('input[type="radio"]').prop('checked', '');
            $(this).find('a > span').removeClass('active');
            $(this).removeClass('active');
        }
    });

    $('.checkbox').click(function () {

        var status = $(this).find('input[type="checkbox"]').prop("checked");
        var checkData = $(this).data("value");
        var checkVal = $(this).find('input[type="checkbox"]').val();

        if (!status) {
            if (checkVal == "all") {
                $(this).closest('.main').find('.checkbox[data-value="' + checkData + '"]').find('input[type="checkbox"]').prop('checked', 'checked');
                $(this).closest('.main').find('.checkbox[data-value="' + checkData + '"]').addClass('active');
            } else {
                $(this).addClass('active');
                $(this).find('input[type="checkbox"]').prop('checked', 'checked');
                console.log($(this).find('input[type="checkbox"]').prop('checked'));
            }

        } else {
            if (checkVal == "all") {
                $(this).closest('.main').find('.checkbox[data-value="' + checkData + '"]').find('input[type="checkbox"]').prop('checked', '');
                $(this).closest('.main').find('.checkbox[data-value="' + checkData + '"]').removeClass('active');
            } else {
                $(this).removeClass('active');
                $(this).find('input[type="checkbox"]').prop('checked', '');
                $(this).closest('.main').find('.checkbox[data-value="' + checkData + '"]').find('input[type="checkbox"][value="all"]').prop('checked', '');
                $(this).closest('.main').find('.checkbox[data-value="' + checkData + '"]').find('input[type="checkbox"][value="all"]').closest('.checkbox').removeClass('active');
            }


        }
    });

    /*    ----    特效与数据的分割线    ----   特效与数据的分割线    ----    特效与数据的分割线    ----    特效与数据的分割线    */
    /* user_account 验证*/

    var checkNumber = $('input[name="user_account"]');
    var checkInput = $('.login_sign input');
    var phone_error = $('.phone_error');
    var error_text = $('.login_error');
    phone_error.hide();
    error_text.hide();

    function checkUser(str) {
        var re = /^1\d{10}$/;
        if (re.test(str)) {
            phone_error.empty();
        } else {
            phone_error.show();
            phone_error.text("手机号格式不正确");
        }
    }

    checkNumber.blur(function () {
        var phoneNumber = checkNumber.val();
        checkUser(phoneNumber);

    });
    checkNumber.focus(function () {
        phone_error.hide().empty();
    });
    checkInput.focus(function () {
        error_text.hide().empty();
    });

    /*  上传图片 */
    $(".upload_file").change(function () {
        var img_num = $(this).closest('.img_upload').next('.upload_img_view').find('.img_box').length;
        $(this).closest('.img_upload').find('.warning').hide();

        var $this = $(this);
        if (img_num <= 4) {
            $(this).siblings('.warning').hide();
            var file = $(this);
            //存放图片的父级元素
            var imgContainer = $(this).closest('.img_upload').next('.upload_img_view');
            //获取的图片文件
            var fileList = file[0].files;
            var imgArr = [];
            //遍历获取到得图片文件
            if (fileList.length + img_num <= 5) {
                for (var i = 0; i < fileList.length; i++) {
                    var imgUrl = window.URL.createObjectURL(file[0].files[i]);
                    imgArr.push(imgUrl);
                    var img = $('<div class="img_box"><img src="' + imgArr[i] + '"/><span class="remove_img"></span></div>');
                    imgContainer.append(img);
                }
            } else {
                for (var i = 0; i < 5 - img_num; i++) {
                    var imgUrl = window.URL.createObjectURL(file[0].files[i]);
                    imgArr.push(imgUrl);
                    var img = $('<div class="img_box"><img src="' + imgArr[i] + '"/><span class="remove_img"></span></div>');
                    imgContainer.append(img);
                }
                $(this).closest('.img_upload').find('.warning').show();
            }
            $('.remove_img').click(function () {

                $(this).closest('.img_box').fadeOut(800, function () {

                    var upload_img_view = $(this).closest('.upload_img_view');
                    var new_num = $(this).closest('.upload_img_view').find('.img_box').length;

                    if (new_num <= 5) {
                        $this.closest('.img_upload').find('.warning').hide();
                    }
                    $(this).closest('.img_box').remove();
                });
            });
        } else {
            $(this).closest('.img_upload').find('.warning').show();
        }

    });


    /* 登陆提交表单 */
    $('.btn').click(function () {
        var checkPass = $('.p_pass');
        var cc = $('.login_account input');

        if (!(checkNumber.val() && checkPass.val())) {
            error_text.show();
            var textA = [];
            var text;
            cc.each(function () {
                var $this = $(this);
                if (!$this.val()) {
                    text = $this.parent('div').find('.input_text').text();
                    textA.push(text).toString();
                }
                return textA;
            });
            error_text.text(textA + "不能为空");
        } else {
            error_text.hide();
            error_text.empty();
        }
        /* 提交登陆 */
        /*var params = $("login_form").serialize();
         $.post("某个地址", params, function (data, status) {

         }, "json");*/

    });


    $(document).keydown(function (event) {
        if (event.keyCode === 13) { // 按了回车键
            $('.btn').trigger("click");
        }
    });


//消息中心

    $('.go_to_message').bind('click',function(){
        //在原页面跳转
        location.href="user.html?data=message";

    });



});