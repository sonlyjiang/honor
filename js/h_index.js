$('.head_tittle li').hover(function() {
	// $('.ht_content').stop().show();
	$('.ht_content>div').eq($(this).index()).stop().slideDown(500);
	// $('.ht_content>div').eq($(this).index()).siblings().stop().hide();
	if($(this).index()<$('.ht_content>div').length-1){
		$('.ht_content').css('height','280px');
	}else{
		$('.ht_content').css('height','');
	}
}, function() {
	$('.ht_content>div').eq($(this).index()).stop().slideUp(500);
	$('.ht_content').css('height','');
});
$('.ht_content>div').hover(function() {
	$(this).stop().slideDown(500);
	$('.ht_content>div').eq($(this).index()).siblings().stop().hide();
}, function() {
	$(this).stop().slideUp(500);
});
// $('.head_tittle li').hover(function() {
// 	$('.ht_content>div').eq($(this).index()).stop().slideDown(500);
// }, function() {
// 	$('.ht_content>div').eq($(this).index()).stop().slideUp(500);
// });
// $('.ht_content>div').hover(function() {
// 	$(this).stop().slideDown(500);
// }, function() {
// 	$(this).stop().slideUp(500);
// });

//jq的获得焦点事件focus() 方法
$('#search_in').focus(function(){
	$('.hs_p').hide();
	$(this).css('border-color','#999');
});
//jq的失去焦点事件blur() 方法
$('#search_in').blur(function(){
	$('.hs_p').show();
	$(this).css('border-color','');
});
var timer;
var num=0;
function lunb(){
	timer=setInterval(function(){
		num++;
		if(num>$('.carousel').children().length){
			num=0;
		}
		$('.carousel').children().eq(num).fadeIn(500);
		$('.carousel').children().eq(num).siblings().fadeOut(100);
		$('.car_li li').eq(num).addClass('car_licss');
		$('.car_li li').eq(num).siblings().removeClass('car_licss');
	},5000);
}
lunb();
$('.car_li li').mouseenter(function(event) {
	clearInterval(timer);
	num=$(this).index();
	$('.carousel').children().eq(num).fadeIn(500);
	$('.carousel').children().eq(num).siblings().fadeOut(100);
	$('.car_li li').eq(num).addClass('car_licss');
	$('.car_li li').eq(num).siblings().removeClass('car_licss');
});
$('.car_li li').mouseleave(function(event) {
	lunb();
});
$('.carousel li').mouseenter(function(){
	clearInterval(timer);
});
$('.carousel li').mouseleave(function(){
	lunb();
});
$('.ad_down').click(function(){
	$('.advert').hide();
});
$('.content1 li').mouseenter(function(){
	$(this).css('box-shadow', '0px 0px 10px 8px #e3e3e3 inset');
});
$('.content1 li').mouseleave(function(){
	$(this).css('box-shadow', '');
});

// 手机系列部分jq
$('.c2c_left a').mouseenter(function(){
	$(this).css('box-shadow', '0px 0px 10px 8px #e3e3e3 inset');
});
$('.c2c_left a').mouseleave(function(){
	$(this).css('box-shadow', '');
});
$('.c2c_right ul li').mouseenter(function(){
	$(this).css('box-shadow', '0px 0px 10px 8px #e3e3e3 inset');
});
$('.c2c_right ul li').mouseleave(function(){
	$(this).css('box-shadow', '');
});
// 平板电脑部分、智能手环部分
$('.c2c_left2>a').mouseenter(function(){
	$(this).css('box-shadow', '0px 0px 10px 8px #bbb inset');
});
$('.c2c_left2>a').mouseleave(function(){
	$(this).css('box-shadow', '');
});
$('.content3 li a').mouseenter(function(){
	$(this).css('box-shadow', '0px 0px 10px 8px #ccc inset');
});
$('.content3 li a').mouseleave(function(){
	$(this).css('box-shadow', '');
});
// 智能家居部分
$('.c2c_left4 a').mouseenter(function(){
	$(this).css('box-shadow', '0px 0px 10px 8px #bbb inset');
});
$('.c2c_left4 a').mouseleave(function(){
	$(this).css('box-shadow', '');
});
$('.c2c_ul2 a').mouseenter(function(){
	$(this).css('box-shadow', '0px 0px 10px 8px #ccc inset');
});
$('.c2c_ul2 a').mouseleave(function(){
	$(this).css('box-shadow', '');
});
// 侧边导航栏
//获取标签距离页面的源距离
// console.log('')
var aside1=$('.content2').offset().top-300;
var aside2=$('.content3').offset().top-300;
var aside3=$('.content4').offset().top-300;
var aside4=$('.content5').offset().top-300;
var aside5=$('.content6').offset().top-300;
var aside6=$('.slogan-container').offset().top-400;
console.log(aside1);
console.log($('.navigation ul li').eq(4).children().eq(0).attr('width'));

$(window).scroll(function(e){
	// console.log(e.pageY);
	var num=$(window).scrollTop();
	console.log(num);
	//清除划线
	function qchu(){
		for(var i=0;i<5;i++){
			$('.navigation ul li').eq(i).children().eq(0).css('width', '0px');
		}
		$('.navigation').css({'right':'0px'});
	}
	
	if(num>aside6){
		// $('.navigation').slideUp(500);
		$('.navigation').css({'right':'-120px'});
	}else if(num>aside5){
		// $('.navigation').slideDown(500);
		qchu();
		$('.navigation ul li').eq(4).children().eq(0).css('width', '120px');
	}else if(num>aside4){
		qchu();
		$('.navigation ul li').eq(3).children().eq(0).css('width', '120px');
	}else if(num>aside3){
		qchu();
		$('.navigation ul li').eq(2).children().eq(0).css('width', '120px');
	}else if(num>aside2){
		qchu();
		$('.navigation ul li').eq(1).children().eq(0).css('width', '120px');
	}else if(num>aside1){
		// $('.navigation').slideDown(500);
		qchu();
		$('.navigation ul li').eq(0).children().eq(0).css('width', '120px');
	}else{
		// $('.navigation').slideUp(500);
		$('.navigation').css({'right':'-120px'});
	}
});

