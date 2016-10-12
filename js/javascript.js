/* ================= GNB Function ================= */
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
/* ================= Appearance Animation ================= */
var $appearanceAnimation = function(){
	var beHalf = true
	if ($scrolly != 0){
		if (beHalf)
			{
				$('.title_bar').stop().animate({marginTop : '0%'},300)	
			}
		beHalf = false;
	}
}
/* ================= Title Function ================= */
var isHalf = true
var $dd = function(){
	if($scrolly > $windowy / 2){
		if(isHalf){
			$('.container').css({
				zIndex : '3',
				position : 'absolute',
				top : '100%'
			}).stop().animate({top : '1250px'},200,function(){
				$('.container_inner').load("video.html #video").animate({height : '585px'},300)
			});
		}
	isHalf= false;
	}
}
// when? scroll
$(window).scroll(function(){
	$scrolly = $(window).scrollTop();
	$windowy = $(window).height();
	console.log("windowy" + ":" + $windowy + " " +  "scrolly" + ":" +  $scrolly)
	
	$dd();
	$appearanceAnimation();
})
// when? resize
$(window).resize(function(){
	$scrolly = $(window).scrollTop();
	$windowy = $(window).height();
	$('nav div.wrp').css('height', $windowy)
})
// when? document ready
$(document).ready(function(){

})
// when? window load
$(window).load(function(){
	$scrolly = $(window).scrollTop();
	$windowy = $(window).height();
	$('nav div.gnb_container').css('height', $windowy)
	console.log("windowy" + ":" + $windowy + " " +  "scrolly" + ":" +  $scrolly)
	/*$bubble_width_1 = $('.bubble1_wrp_1').width();
	$bubble_width_2 = $('.bubble1_wrp_2').width();
	$bubble_width_3 = $('.bubble1_wrp_3').width();
	$bubble_width_4 = $('.bubble1_wrp_4').width();
	$bubble_width_5 = $('.bubble1_wrp_5').width();
	console.log("bubble1" + ":" + $bubble_width_1 + "/" + "bubble2" + ":" + $bubble_width_2 + "/" +"bubble3" + ":" + $bubble_width_3 + "/" +"bubble4" + ":" + $bubble_width_4 + "/" +"bubble5" + ":" + $bubble_width_5 + "/")*/
	
	navBtnClick();
	navMenuClick();
	$appearanceAnimation();
})