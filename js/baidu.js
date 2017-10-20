//下拉皮肤栏更换网页皮肤
$(document).ready(function(){
    
    $(".s-skin").click(function(e){
        e.preventDefault();
        $(".s-skin-layer").slideDown();
        $(document).click(function() {
            $(".s-skin-layer").slideUp(100);
        });
        e.stopPropagation();
    });
    $('.s-skin-layer').click(function(e) {
        e.stopPropagation();
    });

    $('.s-skin-content li').each(function(index) {
        $(this).click(function() {
            $('body').removeClass().addClass('img' + (index+1));
            localStorage.skin = index;
        })
    });
    var cur_skin = parseInt(localStorage.skin);
    if (!cur_skin) {
        $('body').removeClass().addClass("img"+1);
    }else{
        $('body').removeClass().addClass("img"+(cur_skin+1));
    }
       
    //点击滚动到顶部
    $(".icon-mask .text").click(function(){
        $("html,body").animate({scrollTop:0});
    });
     
});

//浮动搜索框出现
$(document).ready(function () {
    var showHight = 140;
    $(window).scroll(function() {
        if ($(window).scrollTop() > showHight) {
            $('.content2').slideDown();
        }else if ($(window).scrollTop() < showHight) {
            $('.content2').slideUp(100);
        }
    });    
});

//我的关注、推荐、导航、视频、购物切换部分
$(document).ready(function() {

    $(".s-menu-item").each(function(index){
        $(this).click(function(){
            $(this).addClass("current").siblings().removeClass("current");
            $(".s-content").eq(index-1).show().siblings().hide();
        });
    });
});

//底部小三角动画
$(document).ready(function() {

    setInterval(function(){
        $(".animate-arrow").animate({top:"18px"},800);
        $(".animate-arrow").animate({top:"8px"},600);
    },1400);

});


