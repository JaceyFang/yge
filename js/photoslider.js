/* 图片左右点击切换  */
/**焦点大广告**/


//对象准备
var slides=$('.slides'),slidx=0;  //slidx 全局变量  不断改值，不断储存。

/*1*/slides.on('click','.slipage',function(){   

//变页码
var slipages=slides.find('.slipage'),
slipagenow=$(this);
slipagenow.addClass('slinow');
slipages.not(this).removeClass('slinow');

slidx=slipages.index(this);

//变图内容
var slitems=slides.find('.slitem'),
slitemnow=slitems.eq(slidx);//console.log(slitems.length);
slitemnow.addClass('slicurr');
slitems.not(slitemnow).removeClass('slicurr');

});/*1*/


