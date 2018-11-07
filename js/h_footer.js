/*
* @Author: admin
* @Date:   2018-09-14 10:35:33
* @Last Modified by:   admin
* @Last Modified time: 2018-09-18 14:39:07
*/
var nums=0;
var timer;
var numb=0;
//尾部
	$('.pastRight').click(function(){
		nums--;
		if(nums<=-6){
			nums=-6
				console.log(nums)
			$(this).css('cursor','not-allowed')
		}
		if(nums>-7){
			$('.list').css('margin-left',nums*157)
		}
	})
	$('.pastLeft').click(function(){
		nums++;
		if(nums>0){
				nums=0
				$(this).css('cursor','not-allowed')
		}
		if(nums<=0){
				$('.list').css('margin-left',nums*157)
		}
	})
	$('.pastLeft').mouseenter(function(){
		if(nums<0){
			$(this).css('cursor','pointer')
		}
		if(nums==0){
			$(this).css('cursor','not-allowed')
		}
	})
	$('.pastRight').mouseenter(function(){
		if(nums>-6){
			$(this).css('cursor','pointer')
		}
		if(nums==-6){
			$(this).css('cursor','not-allowed')
		}
	})