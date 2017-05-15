/**
 * Created by ZHANJIA on 2017/4/24.
 */
$('.slide_menu').find('.level1').eq(0).addClass('active');
$('.level2').find('li').eq(0).addClass('active');

$('.slide_menu>li:nth-child(1)>.level2').show();
$('.slide_menu>li:nth-child(1)>.level2>li:first-child').addClass('active');

$('.level1').click(function(){
    $(this).parents('li').siblings('li').find('.level2').slideUp();
    $(this).parent('li').find('.level2').slideToggle();
});
$('.level2>li').click(function(){
    $(this).parents('.slide_menu').find('.level1').removeClass('active');
    $(this).parents('li').find('.level1').addClass('active');
    $(this).parents('.slide_menu').find('.level2>li').removeClass('active');
    $(this).addClass('active');
});




