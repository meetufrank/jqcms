// 党员天地
$(document).ready(function () {
    $('.configDytd').load('dytd.html');
});
$('#nav-tabs>li').hover(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $('#myTabContent>div').eq($(this).index()).addClass("in active").siblings("div").removeClass("in active");

})
$('.nav-secondary>li.li-item').hover(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $('#myTabContent>div').eq($(this).index()+1).addClass("in active").siblings("div").removeClass("in active");
})