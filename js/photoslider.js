/* ͼƬ���ҵ���л�  */
/**�������**/


//����׼��
var slides=$('.slides'),slidx=0;  //slidx ȫ�ֱ���  ���ϸ�ֵ�����ϴ��档

/*1*/slides.on('click','.slipage',function(){   

//��ҳ��
var slipages=slides.find('.slipage'),
slipagenow=$(this);
slipagenow.addClass('slinow');
slipages.not(this).removeClass('slinow');

slidx=slipages.index(this);

//��ͼ����
var slitems=slides.find('.slitem'),
slitemnow=slitems.eq(slidx);//console.log(slitems.length);
slitemnow.addClass('slicurr');
slitems.not(slitemnow).removeClass('slicurr');

});/*1*/


