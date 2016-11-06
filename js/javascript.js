/* ================= GNB Function ================= */
//navBtnClick animation
function rotateS (marN, top1N, top2N, bar1Ro, bar2Ro) {
	var nav = $('nav');
	var bar1 = $('.menu_btn span.bar:first-child');
	var bar2 = $('.menu_btn span.bar:last-child');
	TweenMax.to(nav, .7, {marginLeft : marN, ease: Power2.easeOut});
	bar1.css({top : top1N, transform : 'rotate' + '(' + bar1Ro + ')'})
	bar2.css({top : top2N, transform : 'rotate' + '(' + bar2Ro + ')'})
}
var $navBtnClick = function(){
	var btnMenu = $('.btn_menu');
	btnMenu.click(function(){
		btnMenu.toggleClass("open")
		if (btnMenu.hasClass('open'))
		{
			rotateS('0%', '50%', '50%', '45deg', '135deg');
		}
		else
		{
			rotateS('-90%', '33%', '65%', '0deg', '0deg');
		}
	})	
}
//navMenuClickAnimation
function navHov (op1, op2, op3, op4, op5) {
	var $imgC = {
		$imgLi1 : function(){$('.menu_img li:first-child').find('img').stop().animate({opacity : op1},150)},
		$imgLi2 : function(){$('.menu_img li:nth-child(2)').find('img').stop().animate({opacity : op2},150)},
		$imgLi3 : function(){$('.menu_img li:nth-child(3)').find('img').stop().animate({opacity : op3},150)},
		$imgLi4 : function(){$('.menu_img li:nth-child(4)').find('img').stop().animate({opacity : op4},150)},
		$imgLi5 : function(){$('.menu_img li:last-child').find('img').stop().animate({opacity : op5},150)}
	};
	$imgC.$imgLi1();
	$imgC.$imgLi2();
	$imgC.$imgLi3();
	$imgC.$imgLi4();
	$imgC.$imgLi5();
};
function scrollP (scT){
	var hB = $('html, body');
	hB.stop().animate({scrollTop : scT},700);
}
var $navMenuClick = function () {
	var homeBtn = $('.home_btn');
	var videoBtn = $('.video_btn');
	var composerBtn = $('.composer_btn');
	var ostBtn = $('.ost_btn');
	var animationBtn = $('.animation_btn');
	homeBtn.hover(function(){
		navHov(1, 0, 0, 0, 0);
	})
	homeBtn.on('click',function(){
		scrollP(0);
	});
	videoBtn.hover(function(){
		navHov(0, 1, 0, 0, 0);
	});
	videoBtn.on('click',function(){
		scrollP($elementH[0]);
	});
	composerBtn.hover(function(){
		navHov(0, 0, 1, 0, 0);
	})
	composerBtn.on('click',function(){
		scrollP($elementH[0] + $elementH[1]);
	})
	ostBtn.hover(function(){
		navHov(0, 0, 0, 1, 0);
	})
	ostBtn.on('click',function(){
		scrollP($elementH[0] + $elementH[1] + $elementH[2] + $elementH[3]);
	})
	animationBtn.hover(function(){
		navHov(0, 0, 0, 0, 1);
	})
	animationBtn.on('click',function(){
		scrollP($elementH[0] + $elementH[1] + $elementH[2] + $elementH[3] + $elementH[4] + $elementH[5]);
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
/*var util = {
	animate: function ();
};
util.animate = function () {};
util.append = function () {
	this.animate();
};*/
/* ================= Function (slideDown) ================= */
var isFalse = false;
var $textLoad = function(sub,title){
		titlebar.children('h1').text(sub)
		titlebar.children('p').text(title)
		titlebar.animate({marginTop : '0%', opacity : '1'},200);
	}
function $DownMoveBox (topC, topA , loadR, isMoreAni) {
	var $container = container.css({position : 'absolute',top : topC, zIndex : '3'});
	var $container2 = function(){ container.css({position : 'absolute', top : topC }).animate({top : topA}) };
	var $load = containerInner.load(loadR).css({bottom : 0,top : ''});
	titlebar.animate({ marginTop : '-100%', opacity : '0'},200);
	$container.css({zIndex : '3'}).animate({top : topA},200,function(){
		$load.animate({height : '585px'},300);
	})
	if (isMoreAni) {
		$container.animate({top : topA},200);
		containerInner.animate({width : '85%'},200,function(){
			$load.animate({height : '585px'},300);
		})
	}
	if (!isMoreAni) {
		$container2();
	}
}
function $UpMoveBox (isTrue, heightC , sub, title, isMore){
	var $containerC = container.css({position : 'fixed', top : '50%'});
	var $containerInnerC = containerInner.load("index.html .title_bar");
	if (isTrue){
		if (isMore){
			$containerC.css({left : 0,right:0,marginLeft : '5%',width : '95%'});
			containerInner.animate({width:'70%', borderRadius:'0', height : heightC, opacity : 1},function(){
				$textLoad(sub,title)
			});
		}
		else if (isMore == null){
			$containerC.css({left : 0,right : 0 , marginLeft : "5%",width :"95%"});	
			$containerInnerC.css({top : 0,marginTop : '-82.5px'}).animate({width : '70%',height : heightC},function(){
				$textLoad(sub,title)
			});	
		}
	}
	else if (isTrue == null){
		$containerC.css({zIndex:'5'});
		$containerInnerC.css({top : 0,marginTop : '-82.5px'}).animate({height : heightC},300,function(){
			titlebar.animate({marginTop : '0%', opacity : '1'},200)
		});
	};
	container.css({position : 'fixed', top : "50%",left : 0,right:0,marginLeft : "5%",width :"95%"});
	containerInner.animate({width:'70%',borderRadius:'0',height:'100%',opacity : 1});
}
function $fixedBox (sub,title, isMore){
	var $fixed = container.css({ position : 'fixed', top : '50%'});
	var $containerInnerLoad = containerInner.load("index.html .title_bar");
	
	container.css({ position : 'fixed', top : '50%'});
	if(isMore){
		$fixed.css({left : 0, right : 0, marginLeft : '5%', width : "95%"})
		$containerInnerLoad.animate({width : '70%',height : '165px'},function(){
			$textLoad(sub,title);
		})
		return;
	}
	containerInner.load("index.html .title_bar").animate({height : "165px"},function(){
		$textLoad(sub,title);
	});
	
}
function $abBox (topN, ld, isTrue){
	var containerInnerLd = containerInner.load(ld);
	titlebar.animate({marginTop : "100%", opacity : '0'});
	container.css({position : 'absolute', top: topN});
	if(isTrue){
		containerInnerLd.css({top: '', bottom:'0'}).animate({height : '585px'},300);
	}
	else if(isTrue == null) {
		containerInnerLd.animate({width : '85%'},200,function(){containerInner.animate({height : '585px'},300)});
	}
}
function $bubbleWidth () {
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
			$bubbleImg.css({display : 'none'})	
		}
	}
}
/* ================= Functino (slideDown) End ================= */
var isHalf = true;
var $slideDown = function(){
	var ostTopL = $titleH + $videoH + $composerBarH + $composerH + $ostBarH;
	var ostTopB = $titleH + $videoH + $composerBarH + $composerH + $ostBarH + $bubbleImgWrpH + ($bubbleImgWrpH / 2)
	
	if($body.hasClass('scroll_down')){
		if($scrolly > $titleH / 2 && $scrolly < $titleH + ($videoH / 2)){
			if(isHalf){
				$DownMoveBox('100%','1250px','video.html #video')
				isHalf = false;
			}	
		}
		else if ($scrolly >= $titleH + ($videoH / 2) && $scrolly < $titleH + $videoH + ($composerBarH / 2)){
			if(!isHalf){
				$fixedBox('composer','작곡가');
				isHalf = true;
			}	
		}
		else if ($scrolly >= $titleH + $videoH + ($composerBarH / 2) && $scrolly < $titleH + $videoH + $composerBarH + ($composerH / 2)){
			if (isHalf){
				composerWrpBarBg.css({zIndex : 4})
				$DownMoveBox('270%','2650px','composer.html #composer', true)
				isHalf = false;
			}	
		}
		else if ($scrolly >= $titleH + $videoH + $composerBarH + ($composerH / 2) && $scrolly < $titleH + $videoH + $composerBarH + $composerH + ($composerBarH / 2)){
			if(!isHalf){
				$fixedBox('Another OST','하울의 움직이는 성 OST',true)
				isHalf = true;
			}	
		}
		else if ($scrolly >= $titleH + $videoH + $composerBarH + $composerH + ($ostBarH / 2) && $scrolly < $titleH + $videoH + $composerBarH + $composerH + $ostBarH){
			if(isHalf){
				$DownMoveBox(ostTopL,ostTopB, null , false)
				titlebar.css({display : 'none'});
				if(containerInner.hasClass('page')){
					containerInner.animate({width:'70%', borderRadius :'0', height:'165px', opacity : 0},400,function(){
						bubbleImgWrp.css({display : 'none'})
					})
				}
				else {
					containerInner.animate({width:'20%',borderRadius:'50%',height:'200%',opacity : 0},400,function(){
						bubbleImgWrp.css({display : 'block',position : 'absolute' ,top : '10%',marginLeft:'0%'}).animate({opacity : 1},400)
					});	
				}
				isHalf = false;
			}
		}
		else if ($scrolly >= $titleH + $videoH + $composerBarH + $composerH + $ostBarH && $scrolly < $titleH + $videoH + $composerBarH + $composerH + $ostBarH + ($anotherOstH / 4 )) {
			bubbleImgWrp.css({position : 'fixed',top : '30%',marginLeft : '5%'});
			$bubbleWidth();
		}
		else if ($scrolly >= $elementH[0] + $elementH[1] + $elementH[2] + $elementH[3]+ $elementH[4] + ($elementH[5] / 4) && $scrolly < $elementH[0] + $elementH[1] + $elementH[2] + $elementH[3]+ $elementH[4] + $elementH[5]){
			bubbleImgWrp.css({position : 'absolute',top : $anotherOstH / 2.5,marginLeft : 0}).animate({top : $anotherOstH,opacity : 0},400,function(){
				$('.bubble_wrp1').animate({opacity : 1},function(){
					$('.animation_title').animate({opacity : 1},function(){
						$('.bubble_contents_container').animate({opacity : 1})
					})
				})
			})
		}
		else if ($scrolly >= $elementH[0] + $elementH[1] + $elementH[2] + $elementH[3]+ $elementH[4] + $elementH[5] && $scrolly < $elementH[0] + $elementH[1] + $elementH[2] + $elementH[3]+ $elementH[4] + $elementH[5] + ($elementH[7] / 1.5)){
			$rollingTxt(0);
		}
	}
	else if ($body.hasClass('scroll_up')){
		if($scrolly < $titleH / 2){
			if(!isHalf){
				$UpMoveBox(null,'165px');
				isHalf = true;
			}
		}
		else if ($scrolly < $titleH + ($videoH / 2) && $scrolly >= $titleH / 2){
			if(isHalf){
				$abBox('158%','video.html #video', true);
				isHalf = false;
			}
		}
		else if ($scrolly < $titleH + $videoH + ($composerBarH / 2) && $scrolly > $titleH + ($videoH / 2) ){
			if (!isHalf){
				composerWrpBarBg.css({zIndex : 1});
				$UpMoveBox(true, '165px', 'composer', '작곡가' , null);
				isHalf = true;
			}
		}
		else if ($scrolly < $titleH + $videoH + $composerBarH + ($composerH / 2) && $scrolly > $titleH + $videoH + ($composerBarH / 2)){
			if (isHalf){
				composerWrpBarBg.css({zIndex : 1})
				$abBox('2650px','composer.html #composer',null);
				isHalf = false;
			}
		}
		else if ($scrolly < $titleH + $videoH + $composerBarH + $composerH + ($ostBarH / 2) && $scrolly > $titleH + $videoH + $composerBarH + $composerH){
			if (!isHalf){
				$UpMoveBox(true, '100%', 'Another OST', '하울의 움직이는 성 OST' , true);
				bubbleImgWrp.animate({opacity : 0},400).css('display','none');
				titlebar.css({display : 'block'}).animate({marginTop : "0%",opacity : "1"},200);
				containerInner.addClass('page');
				isHalf = true;
			}
		}
		else if ($scrolly >= $titleH + $videoH + $composerBarH + $composerH + $ostBarH && $scrolly < $titleH + $videoH + $composerBarH + $composerH + $ostBarH + ($anotherOstH / 4 )){
			$bubbleWidth();
		}
	}
}
function $musicplay (Num) {
	var $audio = $('.ost').eq(Num)
	var $bubbleTable = $('.bubble_table').eq(Num);
	$bubbleTable.on('mouseenter',function(){
		$audio.stop().animate({volume : 1},400,function(){
			$audio[0].play();
		})
	})
	$bubbleTable.on('mouseout',function(){
		$audio.stop().animate({volume : 0},1200,function(){
			$audio[0].pause();
			$audio[0].currentTime = 0;
		})
	})
	
}
/* ================= Rolling Txt ================= */
var isAni = false;
function $rollingTxt (num){
	var $roTitle1Wrp = $('.ro_title1_wrp').eq(num)
	var $roTitleUl = $('.ro_title_ul').eq(num);
	if (isAni){
		return false;
	}
	isAni = true;
	if ($body.hasClass('scroll_down')){
		$roTitle1Wrp.animate({top : '+=5%'})
		$roTitleUl.animate({marginTop : '-=10%'},function(){
			isAni = false;
		})
	}
	else if ($body.hasClass('scroll_up')){
		$roTitleUl.animate({marginTop : '+=10%'},function(){
			isAni = false;
		})
	}
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
	$animationListH = $('.animation_list').height();
	$elementH = [$titleH, $videoH, $composerBarH, $composerH, $ostBarH, $anotherOstH, $animationContainerH, $animationListH];
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
	//$navMenuClick();
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
	$musicplay(0);
	$musicplay(1);
	$musicplay(2);
	$musicplay(3);
	$musicplay(4);
})
// when? window load
$(window).load(function(){
	$scrolly = $(window).scrollTop();
	$windowy = $(window).height();
	$titleH = $('.title_wrp_bar_bg').height();
	$videoH = $('.video_wrp_bg').height();
	$composerBarH = $('.composer_wrp_bar_bg').height();
	$composerH = $('.composer_wrp_bg').height();
	$ostBarH = $('.ost_wrp_bg_bar').height();
	$bubbleImgWrpH = $('.bubble_img_wrp').height();
	$anotherOstH = $('.another_ost_container').height();
	$animationContainerH = $('.animation_container').height();
	$animationListH = $('.animation_list').height();
	$elementH = [$titleH, $videoH, $composerBarH, $composerH, $ostBarH, $anotherOstH, $animationContainerH , $animationListH];
	// GNB nav에 높이값 지정
	$('nav div.gnb_container').css('height', $windowy)
	$navBtnClick();
	$navMenuClick();
})