$(function(){$(".header_right .h_phone").hover(function(){$(".header_right .h_phone .h_phone_img").slideDown(200)},function(){$(".header_right .h_phone .h_phone_img").slideUp(200)}),$(".intro_left02>li").mouseover(function(){$(".intro_left01>img").attr("src",$(this).find("img").attr("src")),$(this).addClass("active").siblings().removeClass("active")});var i=!1,t=!1,o="";$(".intro_c1 a").click(function(){i=!0,$(this).css({background:"url(img/item.img/bg2.jpg)",border:0}).siblings().css({background:"none",border:"1px solid #ccc"});var e=["img/item.img/blue_b.jpeg","img/item.img/bag2.jpeg"];$(".intro_left01>img").attr("src",e[$(this).index()]),$(".intro_c4>p>.pro_color").html($(".intro_c1 a").eq($(this).index()).find("i").html()),o="加州蓝"==$(".intro_c4>p>.pro_color").html()?"blue":"grey",i&&t&&$(".intro_c4>p").show()}),$(".intro_c2 a").click(function(){t=!0,"20寸"==$(this).html()?$(".s_yu").html("175"):$(".s_yu").html("189"),$(this).css({background:"url(img/item.img/bg3.jpg)",border:0}).siblings().css({background:"none",border:"1px solid #ccc"}),$(".intro_c4>p>.pro_size").html($(".intro_c2 a").eq($(this).index()).html()),i&&t&&$(".intro_c4>p").show()}),$(".intro_c3>.a1").click(function(){var i=$(".intro_c3>.a2").html();i-=1,0==i&&(i=1),$(".intro_c3>.a2").html(i),$(".shopc>h3").html($(".a2").html())}),$(".intro_c3>.a3").click(function(){var i=$(".intro_c3>.a2").html();i=Number(i)+1,$(".intro_c3>.a2").html(i),$(".shopc>h3").html($(".a2").html())}),$(".side>div").hover(function(){$(this).stop().animate({left:"0px"},100)},function(){$(this).stop().animate({left:"86px"},100)}),$(".telapp").hover(function(){$(this).stop().animate({left:"0px"},100),$(this).find("span").animate({top:"160px"},100),$(this).find("em").show(100)},function(){$(this).stop().animate({left:"86px"},100),$(this).find("span").animate({top:"50px"},100),$(this).find("em").hide(100)}),$(".intro_c5 i").click(function(){if(getCookie("username")&&getCookie("passwords")){i&&t?($(".succses").show(),$(".flo").show(),$("body").css({overflow:"hidden"})):($(".intro_tip").css({border:"1px solid #ff5800"}),$(".intro_tip>h4").show());var e=$(".intro_lr>h3").html(),n=$(".intro_left01>img").attr("src"),s=$(".intro_c4 span").eq(2).html(),r=$(".intro_c4 span").eq(4).html(),c=$(".s_yu").html(),l=$(".a2").html(),h=e+","+n+","+s+","+r+","+c+","+l;addCookie(o,h,14)}else window.location="login.html"}),$(".intro_tip>h4>a").click(function(){$(".intro_tip").css({border:"0"}),$(".intro_tip>h4").hide()}),$(window).scroll(function(){$t=$(window).scrollTop(),$h=$(".detail_img_right>.dir_ul").offset().top,$t>=$h?$(".xceil").show():$(".xceil").hide()}),$(".dir_ul>li").click(function(){$(".detail_img_right>.dir_ul>li").eq($(this).index()).addClass("active").siblings().removeClass("active"),$(".detail_img_right>.dir_p>p").eq($(this).index()).addClass("active").siblings().removeClass("active"),$(".xceil>.dir_ul>li").eq($(this).index()).addClass("active").siblings().removeClass("active"),$(".xceil>.dir_p>p").eq($(this).index()).addClass("active").siblings().removeClass("active"),$t>=$h&&$("html,body").animate({scrollTop:$h},200,function(){$(".xceil").hide(0)})})});