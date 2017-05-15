/**
 * Created by ZHANJIA on 2017/4/22.
 */
    (function ($) {
        var defaults = {
            //暂时不可改，后面改进 （ T T ）;
            position:"auto",
            text:"error"
    };
        $.fn.extend({
            toolTips: function (options) {
            var opts = $.extend({}, defaults, options);


            return this.each(function () {
                var toolTips = $('<div class="tool-tips"></div>');
                var tipAngle = $('<div class="tip-angle"></div>');
                var tipText = $('<div class="tip-text">'+ opts.text +'</div>');
                var t_body = $('body');
                var obj = $(this);
                obj.click(function () {
                    var e=arguments.callee.caller.arguments[0]||event;
                    if ( e && e.stopPropagation ){
                        e.stopPropagation();
                    }else{
                        window.event.cancelBubble = true;
                        return false;
                    }
                    toolTips.fadeIn(500);
                    var objW = obj.width();
                    var objH= obj.height();
                    var objX = obj.offset().left;
                    var objY = obj.offset().top;
                    t_body.addClass('show_tool');
                    t_body.append(toolTips);
                    var toolW = toolTips.outerWidth();
                    var toolH = toolTips.outerHeight();
                    //判断方向,默认上方
                    if(objY > toolH ){
                        toolTips.append(tipText);
                        toolTips.append(tipAngle);
                        toolTips.addClass('top');
                        toolW = toolTips.outerWidth();
                        toolH = toolTips.outerHeight();
                        toolTips.css({"left" : objX + objW/2 - toolTips.width()/2 + "px","top" : objY - toolTips.height()  + 'px'});

                    }else{
                        toolTips.append(tipAngle);
                        toolTips.append(tipText);
                        toolTips.addClass('bottom');
                        toolW = toolTips.outerWidth();
                        toolTips.css({"left" : -(toolW - objW)/2 + "px","top" : objH + "px"});
                    }
                });
                t_body.click(function(){
                    var e=arguments.callee.caller.arguments[0]||event;
                    if ( e && e.stopPropagation ){
                        e.stopPropagation();
                    }else{
                        window.event.cancelBubble = true;
                        return false;
                    }
                        toolTips.fadeOut(500,function(){toolTips.remove()});
                    });

            });

        }
    })
    })(jQuery);