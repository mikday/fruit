
(function ($) {
    var _defaults = {
        liH:null,
        liW:null,
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
                $roll_li = $roll_content.find('li'),
                roll_index = 0,
                is_left = false,
                timer = null,
                $roll_li_h = opts.liH || $roll_li.outerHeight(true),
                $roll_li_w = opts.liW || $roll_li.outerWidth(true);

            console.log("$roll_li_h = " + $roll_li_h);
            console.log("$roll_li_w = " + $roll_li_w);

            $roll_body.css({"width" : $roll_li_w * opts.num + "px","height" :$roll_li_h + "px"});

            $roll.css({'height': $roll_li_h + "px"});

            var p_count = Math.ceil($roll_content.outerWidth() / $roll_body.width());

            $roll_li_left.css({"width" : ($roll.outerWidth(true) - $roll_body.width()) / 2 - 1 + "px"});
            $roll_li_right.css({"width" : ($roll.outerWidth(true) - $roll_body.width()) / 2 - 1 + "px"});

            if(opts.autoPosition){

                $roll_li_left.css({"margin-top" : ($roll_body.height() - $roll_li_left.height()) / 2 + "px","padding-left" : 1 + "px","box-sizing" : "border-box"});
                $roll_li_right.css({"margin-top" : ($roll_body.height() - $roll_li_right.height()) / 2 + "px","padding-right" : 1 + "px","box-sizing" : "border-box"});

            }


            $(window).resize(function(){
                $roll_li_left.css({"margin-top" : ($roll_body.height() - $roll_li_left.height()) / 2 + "px","padding-left" : 1 + "px","box-sizing" : "border-box"});
                $roll_li_right.css({"margin-top" : ($roll_body.height() - $roll_li_right.height()) / 2 + "px","padding-right" : 1 + "px","box-sizing" : "border-box"});
            });


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
            start_timer();
        })

    }

})(jQuery);
