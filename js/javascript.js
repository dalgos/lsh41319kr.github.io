/* ================= GNB Function ================= */
//navBtnClick animation
var navBtnClick = function(){
	var btnMenu = $('.btn_menu');
	btnMenu.click(function(){
		btnMenu.toggleClass("open")
		if (btnMenu.hasClass('open'))
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
	var homeBtn = $('.home_btn');
	var videoBtn = $('.video_btn');
	var composerBtn = $('.composer_btn');
	var ostBtn = $('.ost_btn');
	var animationBtn = $('.animation_btn');
	homeBtn.hover(function(){
		$('.menu_img li:first-child').find('img').stop().animate({opacity : 1},150);
		$('.menu_img li:nth-child(2)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(3)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(4)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:last-child').find('img').stop().animate({opacity : 0},150);
	})
	homeBtn.on('click',function(){
		$('html, body').stop().animate({scrollTop : 0},2800);	
	});
	videoBtn.hover(function(){
		$('.menu_img li:first-child').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(2)').find('img').stop().animate({opacity : 1},150);
		$('.menu_img li:nth-child(3)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(4)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:last-child').find('img').stop().animate({opacity : 0},150);
	});
	videoBtn.on('click',function(){
		$('html, body').stop().animate({scrollTop : $elementH[0]},700)
	});
	composerBtn.hover(function(){
		$('.menu_img li:first-child').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(2)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(3)').find('img').stop().animate({opacity : 1},150);
		$('.menu_img li:nth-child(4)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:last-child').find('img').stop().animate({opacity : 0},150);
	});
	composerBtn.on('click',function(){
		$('html, body').stop().animate({scrollTop : $elementH[0] + $elementH[1]},2800)
	})
	ostBtn.hover(function(){
		$('.menu_img li:first-child').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(2)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(3)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(4)').find('img').stop().animate({opacity : 1},150);
		$('.menu_img li:last-child').find('img').stop().animate({opacity : 0},150);
	})
	ostBtn.on('click',function(){
		$('html, body').stop().animate({scrollTop : $elementH[0] + $elementH[1] + $elementH[2] + $elementH[3]},2800)
	})
	animationBtn.hover(function(){
		$('.menu_img li:first-child').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(2)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(3)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:nth-child(4)').find('img').stop().animate({opacity : 0},150);
		$('.menu_img li:last-child').find('img').stop().animate({opacity : 1},150);
	})
	animationBtn.on('click',function(){
		$('html, body').stop().animate({scrollTop : $elementH[0] + $elementH[1] + $elementH[2] + $elementH[3] + $elementH[4] + $elementH[5]},2800)
	})
}
/* ================= Appearance Animation ================= */
var beHalf = true
var $appearanceAnimation = function(){
	if ($scrolly != 0){
		if (beHalf)
			{	
				titlebar.animate({
					marginTop : '0%',
					opacity : '1'
				},300)	
			}
		beHalf = false;
	}
}
/* ================= Title Function ================= */
var isHalf = true;
var $slideDown = function(){
	
	if($body.hasClass('scroll_down')){
		if($scrolly > $titleH / 2 && $scrolly < $titleH + ($videoH / 2)){
			if(isHalf){
				titlebar.animate({ marginTop : '-100%', opacity : '0'},200);
				container.css({ zIndex : '3', position : 'absolute',top : '100%'}).animate({top : '1250px'},200,function(){
					containerInner.load("video.html #video").css({bottom : 0,top : ''}).animate({height : '585px'},300)
				});
				isHalf = false;
			}	
		}
		else if ($scrolly >= $titleH + ($videoH / 2) && $scrolly < $titleH + $videoH + ($composerBarH / 2)){
			if(!isHalf){
				container.css({ position : 'fixed', top : '50%'})
				containerInner.load("index.html .title_bar").animate({height : "165px"},function(){
					titlebar.children('h1').text('composer')
					titlebar.children('p').text('작곡가')
					titlebar.animate({marginTop : '0%', opacity : '1'},200);
				});
				isHalf = true;
			}	
		}
		else if ($scrolly >= $titleH + $videoH + ($composerBarH / 2) && $scrolly < $titleH + $videoH + $composerBarH + ($composerH / 2)){
			if (isHalf){
				composerWrpBarBg.css({zIndex : 4})
				titlebar.animate({marginTop : '-100%', opacity : '0'},200);
				container.css({zIndex : '3', position : 'absolute', top : '270%'}).animate({top : '2650px'},200,function(){
					containerInner.animate({width : '85%'},200,function(){
						containerInner.animate({height : '585px'},300).css({bottom:0,top : ''})
					})
				});
				containerInner.load("composer.html #composer")
				isHalf = false;
			}	
		}
		else if ($scrolly >= $titleH + $videoH + $composerBarH + ($composerH / 2) && $scrolly < $titleH + $videoH + $composerBarH + $composerH + ($composerBarH / 2)){
			if(!isHalf){
				container.css({position : 'fixed', top : '50%', left : 0, right : 0, marginLeft : '5%', width : "95%"});
				containerInner.load("index.html .title_bar").animate({width : "70%",height : "165px"},function(){
					titlebar.children('h1').text('Another OST')
					titlebar.children('p').text('하울의 움직이는 성 OST')
					titlebar.animate({marginTop : '0%', opacity : '1'},200)
				});
				isHalf = true;
			}	
		}
		else if ($scrolly >= $titleH + $videoH + $composerBarH + $composerH + ($ostBarH / 2) && $scrolly < $titleH + $videoH + $composerBarH + $composerH + $ostBarH){
			if(isHalf){
				container.css({position : 'absolute', top : $titleH + $videoH + $composerBarH + $composerH + $ostBarH});
				container.animate({top : $titleH + $videoH + $composerBarH + $composerH + $ostBarH + $bubbleImgWrpH + ($bubbleImgWrpH / 2)});
				titlebar.css({display : 'none'});
				containerInner.animate({width:'20%',borderRadius:'50%',height:'200%',opacity : 0},400,function(){
					bubbleImgWrp.css({display : 'block',position : 'absolute' ,top : '10%',marginLeft:'0%'}).animate({opacity : 1},400)
				});
				isHalf = false;
			}
		}
		else if ($scrolly >= $titleH + $videoH + $composerBarH + $composerH + $ostBarH && $scrolly < $titleH + $videoH + $composerBarH + $composerH + $ostBarH + ($anotherOstH / 4 )) {
			bubbleImgWrp.css({position : 'fixed',top : '30%',marginLeft : '5%'});
			bubbleWidth();
		}
		else if ($scrolly > $titleH + $videoH + $composerBarH + $composerH + $ostBarH + ($anotherOstH / 4) && $scrolly > $titleH + $videoH + $composerBarH + $composerH + $ostBarH + ($anotherOstH / 3)){
			bubbleImgWrp.css({position : 'absolute',top : $anotherOstH / 2.5,marginLeft : 0}).animate({top : $anotherOstH,opacity : 0},400,function(){
				$('.bubble_wrp1').animate({opacity : 1},function(){
					$('.animation_title').animate({opacity : 1},function(){
						$('.bubble_contents_container').animate({opacity : 1})
					})
				})
			})
		}
	}
	else if ($body.hasClass('scroll_up')){
		if($scrolly < $titleH / 2){
			if(!isHalf){
				container.css({zIndex : '5', position : 'fixed', top : '50%'});
				containerInner.load("index.html .title_bar").css({top : 0,marginTop : '-82.5px'}).animate({height : '165px'},300,function(){
					titlebar.animate({marginTop : '0%', opacity : '1'},200)
				})
				isHalf = true;
			}
		}
		else if ($scrolly < $titleH + ($videoH / 2) && $scrolly >= $titleH / 2){
			if(isHalf){
				titlebar.animate({marginTop : "100%", opacity : '0'});
				container.css({position : 'absolute', top: "158%"});
				containerInner.load("video.html #video").css({top: '',bottom:'0'}).animate({height : '585px'},300)
				isHalf = false;
			}
		}
		else if ($scrolly < $titleH + $videoH + ($composerBarH / 2) && $scrolly > $titleH + ($videoH / 2) ){
			if (!isHalf){
				composerWrpBarBg.css({zIndex : 1})
				container.css({position : 'fixed', top : "50%",left : 0,right:0,marginLeft : "5%",width :"95%"})
				containerInner.load("index.html .title_bar").css({top : '0',bottom: ''}).animate({width : "70%",height : "165px",marginTop : "-82.5px"},function(){
					titlebar.children('h1').text('composer')
					titlebar.children('p').text('작곡가')
					titlebar.animate({marginTop : "0%",opacity : "1"},200)
				});
				isHalf = true;
			}
		}
		else if ($scrolly < $titleH + $videoH + $composerBarH + ($composerH / 2) && $scrolly > $titleH + $videoH + ($composerBarH / 2)){
			if (isHalf){
				composerWrpBarBg.css({zIndex : 1})
				titlebar.animate({marginTop : "100%",opacity : '0'})
				container.css({position : 'absolute',top : '2650px'})
				containerInner.animate({width : '85%'},200,function(){containerInner.animate({height : '585px'},300)}).load("composer.html #composer")
				isHalf = false;
			}
		}
		else if ($scrolly < $titleH + $videoH + $composerBarH + $composerH + ($ostBarH / 2) && $scrolly > $titleH + $videoH + $composerBarH + $composerH){
			if (!isHalf){
				container.css({position : 'fixed', top : "50%",left : 0,right:0,marginLeft : "5%",width :"95%"})
				bubbleImgWrp.animate({opacity : 0},400).css('display','none')
				containerInner.animate({width:'70%',borderRadius:'0',height:'100%',opacity : 1})
				titlebar.css({display : 'block'}).animate({marginTop : "0%",opacity : "1"},200);
				isHalf = true;
			}
		}
		else if ($scrolly >= $titleH + $videoH + $composerBarH + $composerH + $ostBarH && $scrolly < $titleH + $videoH + $composerBarH + $composerH + $ostBarH + ($anotherOstH / 4 )){
			bubbleWidth();
		}
	}
}
/* bubbleWidth bubble의 width가 정확히 같은 값으로 줄고 늘지 않는다 */
var isFalse = false;
function bubbleWidth () {
	var $bubbleImg = $('.bubble_img').children('img');
	var $bubbleImgWidth = $bubbleImg.width();
	if($scrollAssing > 10){
		if($body.hasClass('scroll_down')){
			if(isFalse){
				return false;
			}
			isFalse = true;
			$bubbleImg.animate({width : '-=12%',opacity : '-=.1'},200,function(){
				isFalse = false;
			})	
		}
	}
	else if($scrollAssing * -1 > 10){
		if ($body.hasClass('scroll_up')){
			if(isFalse){
				return false;
			}	
			isFalse = true;
			$bubbleImg.animate({width : '+=12%',opacity : '+=.1'},200,function(){
				isFalse = false;
			})	
		}
	}
}
function musicplay () {
	var bubbleTable = $('.bubble_table')
	bubbleTable.mouseenter(function(){
		audio.play();
	})
	bubbleTable.mouseout(function(){
		audio.pause();
	})
}
var scrollPosition = $(window).scrollTop(); /* 스크롤 전의 스크롤 값 */
// when? scroll
$(window).scroll(function(){
	$scrolly = $(window).scrollTop();/* 스크롤 시작한 후의 스크롤 값 */
	$windowy = $(window).height();
	 
	titlebar = $('.title_bar')
	container = $('.container')
	containerInner = $('.container_inner')
	composerWrpBarBg = $('.composer_wrp_bar_bg')
	bubbleImgWrp = $('.bubble_img_wrp')
	
	$titleH = $('.title_wrp_bar_bg').height();
	$videoH = $('.video_wrp_bg').height();
	$composerBarH = $('.composer_wrp_bar_bg').height();
	$composerH = $('.composer_wrp_bg').height();
	$ostBarH = $('.ost_wrp_bg_bar').height();
	$bubbleImgWrpH = $('.bubble_img_wrp').height();
	$anotherOstH = $('.another_ost_container').height();
	$animationContainerH = $('.animation_container').height();
	$elementH = [$titleH, $videoH, $composerBarH, $composerH, $ostBarH, $anotherOstH, $animationContainerH];
	/* scroll UP & Down */
	$scrollAssing = $scrolly - scrollPosition
	$body = $('#body');
	if ($scrolly > scrollPosition){
		$body.addClass('scroll_down')
		$body.removeClass('scroll_up')
	}
	else {
		$body.addClass('scroll_up')
		$body.removeClass('scroll_down')
	}
	scrollPosition = $scrolly;
	//scroll UP & Down End
	// GNB nav에 높이값 지정
	$('nav div.gnb_container').css('height', $windowy)
	$slideDown();
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
	audio = document.getElementsByTagName("audio")[0];
	musicplay();
})
// when? window load
$(window).load(function(){
	$scrolly = $(window).scrollTop();
	$windowy = $(window).height();
	// GNB nav에 높이값 지정
	$('nav div.gnb_container').css('height', $windowy)
	
	navBtnClick();
	navMenuClick();
})