//导航栏滚动固定
$(function() {
  var nav = $(".nav-index");
  var ul = $(".navbar-collapse").children('ul');
  var win = $(window);
  var dm = $(document);
  win.scroll(function(){
    if(dm.scrollTop() >= 150){
      nav.addClass("fixednav");
      ul.addClass("fixedul");
    }else {
      nav.removeClass("fixednav");
      ul.removeClass("fixedul");
    }
  })
});

//给ZUI框架添加鼠标移动滑开效果
$(function () {
  $(".dropdown").mouseover(function (){
    $(this).addClass("open");
  });
  $(".dropdown").mouseleave(function (){
    $(this).removeClass("open");
  });
})

/*
*add_favorite
*set_homepage
*/
function add_favorite(a,title,url){
url=url||a.href;
title=title||a.title;
try{
        //IE
        window.external.addFavorite(url,title);
    }
    catch(e){
        try{
            //Firefox
            window.sidebar.addPanel(title,url,"");
        }
        catch(e){
            if(/Opera/.test(window.navigator.userAgent)){
                //Opera
                a.rel="sidebar";
                a.href=url;
                return true;
            }
            alert('您的浏览器不支持此操作，请使用“Ctrl+D”进行添加');
        }
    }
    return false;
}
function set_homepage(a,url){
    var tip='您的浏览器不支持此操作，请使用浏览器的“选项”或“设置”等功能设置首页';
    if(/360se/i.test(window.navigator.userAgent)){
        alert(tip);
        return false;
    }
    url=url||a.href;
    try{
        a.style.behavior='url(#default#homepage)';
        a.setHomePage(url);
    }
    catch(e){
        alert(tip);
    }
    return false;
}