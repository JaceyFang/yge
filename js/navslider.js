/* ����ҳ�� ������  ����Ļ  */

/**������ ����Ļ ����ҳ��**/

var allsrc=$('.all'); 
var pwinhi=window.document.documentElement.clientHeight;//alert(pwinhi);
                                                  //���ݲ�ͬ���豸��Ļ�߶Ȼ�ȡÿһҳ�ĸ߶�
var jspings=$('.jsping,.slides,.good');   // ��Ϊ.slides ��ŵĹ��ͼ  ͼƬ�߶Ⱥ���Ļ�߶Ȳ�һ��
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
var guned=yfwin.scrollTop();//���������ĺ��ӹ����˶�Զ
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
//�����ҳ��
pages.eq(idx).addClass('now');
pages.not(pages.eq(idx)).removeClass('now');

//������������
navas.eq(idx).addClass('curr');
navas.not(navas.eq(idx)).removeClass('curr');

//�����Ļ
var scroffset=pwinhi*idx;

yfdonghua=true;
yfwin.animate({'scrollTop':scroffset},100,'linear');

setTimeout(function(){yfdonghua=false;},200);



}





