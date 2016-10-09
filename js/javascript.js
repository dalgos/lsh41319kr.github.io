//등장 애니메이션
var appearAnimation = function () {
	$('.text_wrp_titlebar').stop().animate({width : "56.8%"},300,function(){
		$('.text_wrp_titlebar h1').stop().animate({marginTop: "40px"},300)
	});
}
var mouseOut = function () {
	if ($scrolly == 0){
		$('.scroll_mouse img').stop().animate({marginTop : "0px"},400)	
	}else{
		$('.scroll_mouse img').animate({marginTop : "150px"},400)		
	}
}
//textBarAnimation
var isHalf = false;
var textBarAnimation = function () {
	var $titleWrpH = $('.title_wrp').height();
	var $videoWrpH = $('.video_wrp').height();
	var $textWrpTitleBar = $('.text_wrp_titlebar').height();
	
	/* 애니매이션이 꼬인다. */
	if( $scrolly > $titleWrpH - ($textWrpTitleBar / 2) && $scrolly < $titleWrpH + $videoWrpH){
		isHalf = true;
		$('.text_wrp_titlebar').stop().animate({top: "100%"},400)
		$('.video_bg').stop().animate({marginTop:'0%'},400,function(){
			$('.video img').stop().animate({opacity : "1"})
		})
		console.log(isHalf)
	}
	else{
		if(isHalf){
			$('.text_wrp_titlebar').stop().animate({top: "40%"},400)	
			$('.video img').stop().animate({opacity : "0"},function(){
				$('.video_bg').stop().animate({marginTop:'-100%'},400)
			})	
			return false;
		}	
	}
}
//navBtnClick animation
var navBtnClick = function(){
	$('.btn_menu').click(function(){
		$('.btn_menu').toggleClass("open")
		if ($('.btn_menu').hasClass('open'))
		{
			//background-color : #fff 에 opacity를 줘야 겹치는 효과가 생길까?
			$('nav').stop().animate({marginLeft : '0%'},300)
			$('.menu_btn span.bar:first-child').css({ 
				top : '50%',
				transform : 'rotate(45deg)'
			})
			$('.menu_btn span.bar:last-child').css({
				top : '50%',
				transform : 'rotate(135deg)'
			})
		}
		else
		{
			$('nav').stop().animate({marginLeft : '-90%'},300)
			$('.menu_btn span.bar:first-child').css({ 
				top : '33%',
				transform : 'rotate(0deg)'
			})
			$('.menu_btn span.bar:last-child').css({
				top : '65%',
				transform : 'rotate(0deg)'
			})
		}
	})	
}
//navMenuClickAnimation
var navMenuClick = function () {
	$('.home_btn').hover(function(){
		$('.menu_img li:first-child').find('img').stop().animate({opacity : 1},150)
		$('.menu_img li:nth-child(2)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(3)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(4)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:last-child').find('img').stop().animate({opacity : 0},150)
	})
	$('.video_btn').hover(function(){
		$('.menu_img li:first-child').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(2)').find('img').stop().animate({opacity : 1},150)
		$('.menu_img li:nth-child(3)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(4)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:last-child').find('img').stop().animate({opacity : 0},150)
	})
	$('.composer_btn').hover(function(){
		$('.menu_img li:first-child').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(2)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(3)').find('img').stop().animate({opacity : 1},150)
		$('.menu_img li:nth-child(4)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:last-child').find('img').stop().animate({opacity : 0},150)
	})
	$('.ost_btn').hover(function(){
		$('.menu_img li:first-child').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(2)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(3)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(4)').find('img').stop().animate({opacity : 1},150)
		$('.menu_img li:last-child').find('img').stop().animate({opacity : 0},150)
	})
	$('.animation_btn').hover(function(){
		$('.menu_img li:first-child').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(2)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(3)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:nth-child(4)').find('img').stop().animate({opacity : 0},150)
		$('.menu_img li:last-child').find('img').stop().animate({opacity : 1},150)
	})
}
// when? scroll
$(window).scroll(function(){
	$scrolly = $(window).scrollTop();
	$windowy = $(window).height();
	mouseOut();
	textBarAnimation();
	console.log("windowy" + ":" + $windowy + " " +  "scrolly" + ":" +  $scrolly)
})
// when? resize
$(window).resize(function(){
	$scrolly = $(window).scrollTop();
	$windowy = $(window).height();
	$('nav div.wrp').css('height', $windowy)
})
// when? document ready
$(document).ready(function(){
	appearAnimation();
})
// when? window load
$(window).load(function(){
	$scrolly = $(window).scrollTop();
	$windowy = $(window).height();
	$('nav div.wrp').css('height', $windowy)

	$bubble_width_1 = $('.bubble1_wrp_1').width();
	$bubble_width_2 = $('.bubble1_wrp_2').width();
	$bubble_width_3 = $('.bubble1_wrp_3').width();
	$bubble_width_4 = $('.bubble1_wrp_4').width();
	$bubble_width_5 = $('.bubble1_wrp_5').width();
	console.log("bubble1" + ":" + $bubble_width_1 + "/" + "bubble2" + ":" + $bubble_width_2 + "/" +"bubble3" + ":" + $bubble_width_3 + "/" +"bubble4" + ":" + $bubble_width_4 + "/" +"bubble5" + ":" + $bubble_width_5 + "/")
	
	mouseOut();
	navBtnClick();
	navMenuClick();
})