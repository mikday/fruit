
(function ($) {
    var _defaults = {
        num:3,
        autoPosition:false
    };
    $.fn.roll = function (options) {
        var opts = $.extend({}, _defaults, options);
        this.each(function () {

            var $roll  = $(this),
                $roll_body = $roll.find(".roll_body"),
                $roll_li_left = $roll.find('.left_angle'),
                $roll_li_right = $roll.find('.right_angle'),
                $roll_content = $roll_body.find('ul'),
                roll_index = 0,
                is_left = false,
                timer = null;

            $roll_body.css({"width" : $roll_content.find('li').outerWidth(true) * opts.num + "px","height" :$roll_content.find('li').outerHeight(true) + "px"});

            var p_count = Math.ceil($roll_content.outerWidth() / $roll_body.width());
            console.log('$roll.outerWidth(true) = ' + $roll.outerWidth(true));
            console.log('$roll_body.width() = ' + $roll_body.width());

            $roll_li_left.css({"width" : ($roll.outerWidth(true) - $roll_body.width()) / 2 - 1 + "px"});
            $roll_li_right.css({"width" : ($roll.outerWidth(true) - $roll_body.width()) / 2 - 1 + "px"});

            if(opts.autoPosition){
                $roll_li_left.css({"margin-top" : ($roll_body.height() - $roll_li_left.height()) / 2 + "px","padding-left" : 1 + "px","box-sizing" : "border-box"});
                $roll_li_right.css({"margin-top" : ($roll_body.height() - $roll_li_right.height()) / 2 + "px","padding-right" : 1 + "px","box-sizing" : "border-box"});
                //footer_print
                $('.footer_prints .roll_img').css({'height': $roll_body.outerHeight(true) + "px"});

            }
            function height() {
                var mainH = $('.main').outerHeight(true);
                var w_height = $(window).height();
                var top_height = $('.top').height();
                var footerH = $('.foot_bottom_simple').height();
                var navH;

                if ($('nav').is(":visible")) {
                    navH = $('nav').height();
                } else {
                    navH = 0;
                }
                /*  main 页面长度 */

                $('.normal').css({"height": mainH + top_height + footerH + navH + "px"});

                var normalH = $('.normal').height();

                if (normalH < w_height) {
                    $('.normal').css({"height": 100 + "%"});
                    return;
                }
            }

            height();


            $roll_li_left.click(function () {
                if (!$(this).hasClass('disable')) {
                    roll_index++;
                    set_status();
                }
            });

            $roll_li_right.click(function () {
                if (!$(this).hasClass('disable')) {
                    roll_index--;
                    set_status();
                }
            });

            function set_status() {

                $roll_content.css({
                    left: $roll_body.width() * roll_index
                });

                if (roll_index >= 0) {
                    $roll_li_left.addClass('disable');
                    is_left = false;
                } else {
                    $roll_li_left.removeClass('disable');
                }

                if (roll_index <= -p_count + 1) {
                    $roll_li_right.addClass('disable');
                    is_left = true;
                } else {
                    $roll_li_right.removeClass('disable');
                }
            }

            function start_timer() {
                timer = setInterval(function () {
                    if (is_left) {
                        roll_index++;
                    } else {
                        roll_index--;
                    }
                    set_status();
                }, 5000);
            }

            $roll.hover(function () {
                clearInterval(timer);
            }, start_timer);

            set_status();
           // start_timer();
        })

    }

})(jQuery);
