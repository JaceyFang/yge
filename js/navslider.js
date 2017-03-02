/* 分屏页码 主导航  分屏幕  */

/**主导航 分屏幕 分屏页码**/

var allsrc=$('.all'); 
var pwinhi=window.document.documentElement.clientHeight;//alert(pwinhi);
                                                  //根据不同的设备屏幕高度获取每一页的高度
var jspings=$('.jsping,.slides,.good');   // 因为.slides 里放的广告图  图片高度和屏幕高度不一样
jspings.height(pwinhi);



var scridx=0;
var scrpages=allsrc.find('.scrpage');
var maxscridx=scrpages.length-1;
var navas=allsrc.find('.nava');
var yfwin=$('#screen');//chrome use body|window.document.body,firefox use html|document.documentElement .


/*1*/scrpages.on('click',function(){
	
scridx=scrpages.index(this);
yfnavchg(scridx,scrpages,navas,yfwin);
 
});/*1*/


                
/*1*/navas.on('click',function(ev){
ev.preventDefault();

scridx=navas.index(this);
yfnavchg(scridx,scrpages,navas,yfwin);

});/*1*/



yfnavchg(0,scrpages,navas,yfwin);


var yfdonghua=false;

var sto = false;var oldguned=0; 
yfwin.scroll(function(){
	
if(!yfdonghua){	
if(sto){clearTimeout(sto);}
sto = setTimeout(function(){
var guned=yfwin.scrollTop();//带滚动条的盒子滚动了多远
if((guned-oldguned)>0){console.log('+');
scridx=scridx+1;scridx=(scridx>maxscridx)?maxscridx:scridx;	
}else{console.log('-');
scridx=scridx-1;scridx=(scridx<0)?0:scridx;	
}oldguned=guned;
yfnavchg(scridx,scrpages,navas,yfwin);
},200);
}

});   


function yfnavchg(idx,pages,navas,yfwin){
//变分屏页码
pages.eq(idx).addClass('now');
pages.not(pages.eq(idx)).removeClass('now');

//变主导航链接
navas.eq(idx).addClass('curr');
navas.not(navas.eq(idx)).removeClass('curr');

//变分屏幕
var scroffset=pwinhi*idx;

yfdonghua=true;
yfwin.animate({'scrollTop':scroffset},100,'linear');

setTimeout(function(){yfdonghua=false;},200);



}





