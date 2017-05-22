/**
 * Created by ZHANJIA on 2017/5/21.
 */
$(function () {

    function loadFruitList() {
        var target = $('.fruit_images');//ul
        target.empty();
        var fruitLi_height,
            fruitUl_height,
            li,
            a,
            div1,
            div2;
        $.ajax({
            type: 'get',
            url: 'testdata.json',
            dataType: 'json',
            success: function (data) {
                console.log(data.content);
                $.each(data.content, function (index, param) {
                    li = $('<li></li>');
                    a = $('<a href="goods_detail.html"></a>');
                    div1 = $('<div class="fruit_img"><img src="' + param.src + '" alt="img"/></div>');
                    div2 = $('<div class="fruit_span"><p class="fruit_name">' + param.name + '</p><p class="fruit_price text_orange">' + param.price + '<small>/' + param.type + '</small></p></div>');
                    a.append(div1);
                    a.append(div2);
                    li.append(a);
                    target.append(li);
                });
                setTimeout(function () {

                    $('.fruit_img').css({'height': $('.fruit_img').outerWidth() + "px"});

                    liH = li.outerHeight(true);
                    ulH = target.height();

                    console.log("ul.height()1 = " + ulH);
                    console.log("liH.height()1 = " + liH);

                    $('.fruit_ul').ulHeight({fruitLi_height: liH, fruitUl_height: ulH});

                }, 10);

            }
        });


    }


    loadFruitList();

    $(window).resize(function () {

        setTimeout(function () {

            var img = $('.fruit_img');

            img.css({'height': $('.fruit_images >li').outerWidth(true) + "px"});

            setTimeout(function () {
                var liH = $('.fruit_images>li:first-child').outerHeight(true);

                $('.fruit_images').css({'height' : 'auto'});

                var ulH = $('.fruit_images').height();

                console.log("liH1 = " + liH);
                console.log("ulH1 = " + ulH);

                $('.fruit_ul').ulHeight({fruitLi_height: liH, fruitUl_height: ulH});

            },700);

        }, 350);


    });
});

