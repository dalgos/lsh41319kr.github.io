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
var isHalf = true;
var $dd = function(){
		var $titleH = $('.title_wrp_bar_bg').height();
		var $videoH = $('.video_wrp_bg').height();
		var $composerBarH = $('.composer_wrp_bar_bg').height();
		var $composerH = $('.composer_wrp_bg').height();
		var $ostBarH = $('.ost_wrp_bg_bar').height();
		var $anotherOstContainer = $('.another_ost_container').height();
		var $bubbleImgWrpH = $('.bubble_img_wrp').height();
		var $anotherOstH = $('.another_ost_container').height();
	if($('#body').hasClass('scroll_down')){
		if($scrolly > $titleH / 2 && $scrolly < $titleH + ($videoH / 2)){
			if(isHalf){
				//if문의 조건을 다르게 해서 한번만 작동하게 하게 하였는데 이유는 대충 유추 할수있지만 명확히 모르겠습니다. 문제는 새로고침을 한다면 제대로 작동하지 않는 부분이 생깁니다.
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
				$('.container_inner').load("video.html #video").css({bottom : 0,top : ''}).animate({height : '585px'},300)
				});
				isHalf = false;
			}	
		}
		else if ($scrolly >= $titleH + ($videoH / 2) && $scrolly < $titleH + $videoH + ($composerBarH / 2)){
			if(!isHalf){
				console.log('gogo2')
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
				isHalf = true;
			}	
		}
		else if ($scrolly >= $titleH + $videoH + ($composerBarH / 2) && $scrolly < $titleH + $videoH + $composerBarH + ($composerH / 2)){
			if (isHalf){
				$('.composer_wrp_bar_bg').css({zIndex : 4})
				$('.title_bar').animate({
					marginTop : '-100%',
					opacity : '0'
				},200)
				$('.container').css({
					zIndex : '3',
					position : 'absolute',
					top : '270%'
				}).animate({top : '2650px'},200,function(){
				$('.container_inner').animate({width : '85%'},200,function(){$('.container_inner').animate({height : '585px'},300).css({bottom:0,top : ''})})});
				$('.container_inner').load("composer.html #composer")
				isHalf = false;
			}	
		}
		else if ($scrolly >= $titleH + $videoH + $composerBarH + ($composerH / 2) && $scrolly < $titleH + $videoH + $composerBarH + $composerH + ($composerBarH / 2)){
			if(!isHalf){
				$('.title_bar').animate({
					marginTop : '0%',
					opacity : '1'
				},200)
				$('.container').css({
				position : 'fixed',
				top : '50%',
				left : 0,
				right : 0,
				marginLeft : '5%',
				width : "95%"
				});
				$('.container_inner').load("index.html .title_bar").animate({width : "70%",height : "165px"},function(){
					$('.title_bar').children('h1').text('Another OST')
					$('.title_bar').children('p').text('하울의 움직이는 성 OST')	
				});
				isHalf = true;
			}	
		}
		else if ($scrolly >= $titleH + $videoH + $composerBarH + $composerH + ($ostBarH / 2) && $scrolly < $titleH + $videoH + $composerBarH + $composerH + $ostBarH){
			if(isHalf){
				$('.container').css({
					position : 'absolute',
					top : $titleH + $videoH + $composerBarH + $composerH + $ostBarH
				})
				$('.container').animate({top : $titleH + $videoH + $composerBarH + $composerH + $ostBarH + $bubbleImgWrpH + ($bubbleImgWrpH / 2)})
				$('.title_bar').css({display : 'none'})
				$('.container_inner').animate({width:'20%',borderRadius:'50%',height:'200%',opacity : 0},400,function(){
					$('.bubble_img_wrp').animate({opacity : 1},400)
				})
				isHalf = false;
			}
		}
		else if ($scrolly >= $titleH + $videoH + $composerBarH + $composerH + $ostBarH && $scrolly < $titleH + $videoH + $composerBarH + $composerH + $ostBarH + ($anotherOstH / 4 )) {
			$('.bubble_img_wrp').css({position : 'fixed',top : '30%',marginLeft : '5%'})
		}
	}
	else if ($('#body').hasClass('scroll_up')){
		if($scrolly < $titleH / 2){
			console.log('gogo')
			if(!isHalf){
				$('.title_bar').animate({
					marginTop : '0%',
					opacity : '1'
				},200)
				$('.container').css({
					zIndex : '5',
					position : 'fixed',
					top : '50%',
				});
				$(".container_inner").load("index.html .title_bar").css({top : 0,marginTop : '-82.5px'}).animate({height : '165px'},300)
				isHalf = true;
			}
		}
		else if ($scrolly < $titleH + ($videoH / 2) && $scrolly >= $titleH / 2){
			if(isHalf){
				$('.title_bar').animate({
					marginTop : "100%",
					opacity : '0'
				})
				$('.container').css({
					position : 'absolute',
					top: "158%"
				})
				$('.container_inner').load("video.html #video").css({top: '',bottom:'0'}).animate({height : '585px'},300)
				isHalf = false;
			}
		}
		else if ($scrolly < $titleH + $videoH + ($composerBarH / 2) && $scrolly > $titleH + ($videoH / 2) ){
			if (!isHalf){
				$('.composer_wrp_bar_bg').css({zIndex : 1})
				$('.title_bar').animate({marginTop : "0%",opacity : "1"},200)
				$('.container').css({position : 'fixed', top : "50%",left : 0,right:0,marginLeft : "5%",width :"95%"})
				$('.container_inner').load("index.html .title_bar").css({top : '0',bottom: ''}).animate({width : "70%",height : "165px",marginTop : "-82.5px"},function(){
					$('.title_bar').children('h1').text('composer')
					$('.title_bar').children('p').text('작곡가')	
				});
				isHalf = true;
			}
		}
		else if ($scrolly < $titleH + $videoH + $composerBarH + ($composerH / 2) && $scrolly > $titleH + $videoH + ($composerBarH / 2)){
			if (isHalf){
				$('.composer_wrp_bar_bg').css({zIndex : 1})
				$('.title_bar').animate({marginTop : "100%",opacity : '0'})
				$('.container').css({position : 'absolute',top : '2650px'})
				$('.container_inner').animate({width : '85%'},200,function(){$('.container_inner').animate({height : '585px'},300)}).load("composer.html #composer")
				isHalf = false;
			}
		}
		else if ($scrolly < $titleH + $videoH + $composerBarH + $composerH + ($ostBarH / 2) && $scrolly > $titleH + $videoH + $composerBarH + $composerH){
			if (!isHalf){
				$('.container').css({position : 'fixed', top : "50%",left : 0,right:0,marginLeft : "5%",width :"95%"})
				$('.bubble_img_wrp').animate({opacity : 0},400)
				$('.container_inner').animate({width:'70%',borderRadius:'0',height:'100%',opacity : 1})
				$('.title_bar').css({display : 'block'}).animate({marginTop : "0%",opacity : "1"},200);
				isHalf = true;
			}
		}
	}
}
var $bubbleWidth = function(){

}
// when? scroll
var scrollPosition = $(window).scrollTop();/* 스크롤 전의 스크롤 값 */
$(window).scroll(function(){
	$scrolly = $(window).scrollTop();/* 스크롤 시작하기 후의 스크롤 값 */
	$windowy = $(window).height();
	// GNB nav에 높이값 지정
	$('nav div.gnb_container').css('height', $windowy)
	//scroll UP & Down
	if ($scrolly > scrollPosition){
		$('#body').addClass('scroll_down')
		$('#body').removeClass('scroll_up')
	}
	else {
		$('#body').addClass('scroll_up')
		$('#body').removeClass('scroll_down')
	}
	scrollPosition = $scrolly;
	//scroll UP & Down End
	
	$dd();
	$appearanceAnimation();
})
// when? resize
$(window).resize(function(){
	$scrolly = $(window).scrollTop();
	$windowy = $(window).height();
	// GNB nav에 높이값 지정
	$('nav div.gnb_container').css('height', $windowy)
	$('nav div.wrp').css('height', $windowy)
})
// when? document ready
$(document).ready(function(){
	
})
// when? window load
$(window).load(function(){
	$scrolly = $(window).scrollTop();
	$windowy = $(window).height();
	// GNB nav에 높이값 지정
	$('nav div.gnb_container').css('height', $windowy)
	console.log("windowy" + ":" + $windowy + " " +  "scrolly" + ":" +  $scrolly + "/")
	
	navBtnClick();
	navMenuClick();
	$appearanceAnimation();
})