/* 分屏页码 主导航  分屏幕  */

/**主导航 分屏幕 分屏页码**/

var allsrc=$('.all'); 
var pwinhi=window.parent.document.documentElement.clientHeight;//alert(pwinhi);
                                                  //根据不同的设备屏幕高度获取每一页的高度
var jspings=$('.jsping,.slides');   // 因为.slides 里放的广告图  图片高度和屏幕高度不一样
jspings.height(pwinhi);


/*1*/allsrc.on('click','.scrpage',function(){

//变分屏页码
$(this).addClass('now');

var scrpages=allsrc.find('.scrpage');
scrpages.not(this).removeClass('now');

var scridx=scrpages.index(this);

//变主导航链接
var navas=allsrc.find('.nava');
var navanow=navas.eq(scridx);
navanow.addClass('curr');
navas.not(navanow).removeClass('curr');

//变分屏幕
var scroffset=pwinhi*scridx;
$('body,html').animate({'scrollTop':scroffset},300,'linear');
 
});/*1*/


                
/*1*/allsrc.on('click','.nava',function(ev){
ev.preventDefault();

var navas=allsrc.find('.nava');
var navaidx=navas.index(this);
var scrpages=allsrc.find('.scrpage');
var scrpagenow=scrpages.eq(navaidx);

scrpagenow.trigger('click');
//scrpage2now.click();


});/*1*/


var scrpages=allsrc.find('.scrpage');   //默认案例 分页导航 已经点击
scrpages.eq(3).trigger('click');

