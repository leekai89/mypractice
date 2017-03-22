/**
 * Created by LoveBurning on 2016/11/15.
 */

function AutoScroll(obj){
    $(obj).find("ul:first").animate({
        marginTop:"-25px"
    },500,function(){
        $(this).css({marginTop:"0"}).find("li:first").appendTo(this);
    });
}

//function AutoScroll2(obj){
//    $(obj).find("ul:first").animate({
//        marginTop:"0"
//    },500,function(){
//        $(this).css({marginTop:"0"}).find("li:first").appendTo(this);
//    });
//}

$(function(){

    setInterval('AutoScroll("#s1")',3000);

    setInterval('AutoScroll("#s2")',3000);

    //setInterval('AutoScroll2("#s3")',3000);

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        loop:true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
    })

    $(".swiper-container").hover(function(){
        $(".swiper-button-prev").show();
        $(".swiper-button-next").show();
    },function(){
        $(".swiper-button-prev").hide();
        $(".swiper-button-next").hide();
    });

    var i = $(".xf").offset().top;

    $(window).scroll(function(event){

        var height_event = $(document).scrollTop();

        if( height_event > i ){
            $(".xf").addClass("fix")
        }
        if(height_event < i){
            $(".xf").removeClass("fix")
        }
    });

    //window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"24"},"share":{},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["weixin","qzone","tsina","tqq","renren"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

    //main_tab切换
    $(".main_tab ul li").each(function(index){
        $(".main_tab ul li:first").addClass("btn");
        $(".main_tab ol li:first").show();
        $(this).mouseover(function(){
            var _this=this;
            $(_this).addClass("btn").siblings().removeClass("btn");
            $(_this).parents(".main_tab ul").siblings("ol").find("li").eq(index).show().siblings().hide();
        })
    });

    $(".search a").on("click",function(){
        var keyword = $(".search input").val() ;
        if( keyword == "" ){
            window.open("http://so.jiankang.com");
        }else{
            window.open("http://so.jiankang.com/?wd=" + keyword);
        }
    });

    $(".search input").keydown(function(event){
        if(event.which == 13){
            $(".search a").click();
        }
    });

    var w_width = $(window).width();

    $(".share").css("left",((w_width - 1000) / 2) - 80);

    $(".share .bdsharebuttonbox li:nth-child(4)").click(function(){
        var speed = 300;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    })

    localStorage.temp=0;
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(document).height() - $(window).height() - 350){
            $(function(){
                $(".scroll_con li").eq(localStorage.temp).fadeIn();
                localStorage.temp++;
                $(".scroll_con li").eq(localStorage.temp).fadeIn();
                localStorage.temp++;
                $(".scroll_con li").eq(localStorage.temp).fadeIn();
                localStorage.temp++;
            })
        }
    });

    $(".luojianqiang").css("left",((w_width - 1000) / 2) - 80);

    $('.luojianqiang').click(function(){$('html,body').animate({scrollTop: $('.all_eye').offset().top},500);return false;});


    var ii = $('.main_left_con').prop("offsetTop") + $(".main_left_con").height() - 200;
    $(window).scroll(function(){
        if($(window).scrollTop() >= ii){
          $(".luojianqiang").slideDown(500);
        }
        if($(window).scrollTop() <= ii){
            $(".luojianqiang").slideUp(500);
        }
        //if($(window).scrollTop() >= iii){
        //    $(".luojianqiang").slideUp(500);
        //}
    });

    //tab_right
    $(".tab_right ul li").each(function(index){
        $(".tab_right ul li:first").addClass("btn");
        $(".tab_right ol li:first").show();
        $(this).mouseover(function(){
            var _this=this;
            $(_this).addClass("btn").siblings().removeClass("btn");
            $(_this).parents(".tab_right ul").siblings("ol").find("li").eq(index).show().siblings().hide();
        })
    });
})