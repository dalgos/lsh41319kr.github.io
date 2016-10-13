/* ================= scrollUp & Down ================= */
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
				$('.title_bar').animate({
					marginTop : '0%',
					opacity : '1'
				},300)	
			}
		beHalf = false;
	}
}
/* ================= Title Function ================= */
var isHalf = true
var $dd = function(){
		var $titleH = $('.title_wrp_bar_bg').height();
		var $videoH = $('.video_wrp_bg').height();
		var $composerBarH = $('.composer_wrp_bar_bg').height();
		var $composerH = $('.composer_wrp_bg').height();
		var $ostBarH = $('.ost_wrp_bg_bar').height();
		var $ostH = $('.ost_wrp_bg_').height();
	if($scrolly > $titleH / 2 && $scrolly < $titleH + ($videoH / 2)){
		if(isHalf){
			// ============ Qusetion isHalf가 true라는 조건을 걸어 놓으면 =============================
			$('.title_bar').animate({
				marginTop : '-100%',
				opacity : '0'
			},200)// ====== .title_bar의 걸어 놓은 애니메이션이 작동하지 않습니다. isHalf에 대한 조건이 없으면 정상 작동 하고 이 상태를 cosole에서 애니메이션을 걸어도 정상 작동합니다.
			$('.container').css({
				zIndex : '3',
				position : 'absolute',
				top : '100%'
			}).animate({top : '1250px'},200,function(){
			$('.container_inner').load("video.html #video").animate({height : '585px'},300)
			});
			isHalf = false;
		}
	}
	else if ($scrolly >= $titleH + ($videoH / 2) && $scrolly <$titleH + $videoH + ($composerBarH / 2))
	{	
		isHalf =true;
		if(isHalf){
			$('.title_bar').animate({
				marginTop : '0%',
				opacity : '1'
			},200)
			$('.container').css({
			position : 'fixed',
			top : '50%'
			})
			$('.container_inner').load("index.html .title_bar").animate({height : "165px"},function(){
				$('.title_bar').children('h1').text('composer')
				$('.title_bar').children('p').text('작곡가')	
			});
			console.log('gogo')
			isHalf = false;
		}
	}
}
// when? scroll
var scrollPosition = $(window).scrollTop(); //Question scrollPosition과 $scrolly은 똑같이 $(window).scrollTop();을 담았는데 왜 값이 차이가 날까요?
$(window).scroll(function(){
	//scroll UP & Down
	if ($scrolly > scrollPosition){
		console.log('scrollPosition' + scrollPosition + ' ' + '$scrolly' + $scrolly)
		$('#body').addClass('scroll_down')
		$('#body').removeClass('scroll_up')
	}
	else {
		console.log('scrollPosition' + scrollPosition + ' ' + '$scrolly' + $scrolly)
		$('#body').addClass('scroll_up')
		$('#body').removeClass('scroll_down')
	}
	scrollPosition = $scrolly;
	//scroll UP & Down End
	$scrolly = $(window).scrollTop();
	$windowy = $(window).height();
	
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