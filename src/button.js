/**
 * Created by ZHANJIA on 2017/5/23.
 */
(function ($) {
    var _defaults = {
        style: true
    };

    $.fn.waves = function (options) {
        var opts = $.extend({}, _defaults, options);

        this.each(function () {
            var target = $(this),
                timer = null,
                color,
                wave = $('<div class="wave"></div>');


            opts.style ? color = 'rgba(255,255,255,0.6)' : color = 'rgba(150,150,150,0.6)';


            target.click(function (e) {
                var x = e.pageX,
                    y = e.pageY,
                    _height = $(this).height(),
                    _width = $(this).width(),
                    offsetL = $(this).offset().left,
                    offsetT = $(this).offset().top;

                wave.css({'position' : 'absolute' ,'height' :20 + 'px' , 'width' : 20 + 'px' , 'border-radius' : 50 + "%",'background' : color});


                console.log('x = ' + x);
                console.log('y = ' + y);


                console.log('$(this).offsetLeft = ' + $(this).offset().top);
                console.log('$(this).offsetWidth = ' + $(this).offset().left);


                var rMax = Math.pow(Math.pow(x - offsetL, 2) + Math.pow(_height, 2) + 2, 1 / 2) * 2;
                var rMin = Math.pow(Math.pow(_width - x + offsetL, 2) + Math.pow(_height, 2) + 2, 1 / 2) * 2;
                var r2 = 2 * (x - offsetL) > _width ? rMax : rMin;


                target.append(wave);

                wave.animate({'left' : x - offsetL - 10 + "px",'top' : y - offsetT - 10 + "px",'width' : r2 + "px",'height' : r2 + "px"},3000);


                wave.fadeOut(600,function(){
                    clearTimeout(timer);
                    $(this).remove();
                });

            });
            wave.click(function(){
                target.trigger('click');
            });



        });
    }

})(jQuery);


