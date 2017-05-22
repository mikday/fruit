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
                wave;

            opts.style ? color = 'rgba(255,255,255,0.6)' : color = 'rgba(150,150,150,0.6)';


            target.click(function (e) {
                var x = e.pageX,
                    y = e.pageY,
                    _height = $(this).height(),
                    _width = $(this).width(),
                    offsetL = $(this).offset().left,
                    offsetT = $(this).offset().top;

                wave = $('<div class="wave"></div>');
                wave.css({'position' : 'absolute' , 'border-radius' : 50 + "%",'background' : color});


                console.log('x = ' + x);
                console.log('y = ' + y);


                console.log('$(this).offsetLeft = ' + $(this).offset().top);
                console.log('$(this).offsetWidth = ' + $(this).offset().left);


                var rMax = Math.pow(Math.pow(x - offsetL, 2) + Math.pow(_height, 2) + 2, 1 / 2) * 2;
                var rMin = Math.pow(Math.pow(_width - x + offsetL, 2) + Math.pow(_height, 2) + 2, 1 / 2) * 2;
                var r2 = 2 * (x - offsetL) > _width ? rMax : rMin;

                var i = 20;//起始大小

                target.append(wave);

                clearTimeout(timer);//very important !
                timer = setInterval(function () {

                    if (i >= 20) {

                        var l = x - offsetL - i / 2;
                        var t = y - offsetT - i / 2;

                        console.log('l = ' + l);

                        wave.css({'left' : l + "px"});
                        wave.css({'top' : t + "px"});
                        wave.css({'width' : i + "px"});
                        wave.css({'height' : i + "px"});

                        if (i > r2) {
                            clearInterval(timer);
                        }
                    }
                    i = i + 0.5;
                    i++;
                }, 1);


                    wave.fadeOut(600,function(){
                        clearTimeout(timer)
                        $(this).remove();
                    });

            });
            wave.click(function(){
                target.trigger('click');
            });



        });
    }

})(jQuery);


