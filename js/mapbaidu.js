	// �ٶȵ�ͼAPI����
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(114.40574,30.512066);
	map.centerAndZoom(point,40);
	
	
	
var ctrlopts = {anchor: BMAP_ANCHOR_BOTTOM_RIGHT};
map.addControl(new BMap.NavigationControl(ctrlopts));	


map.addControl(new BMap.ScaleControl());

	
	
//�ؼ�������
document.getElementById("bdsomap").onclick=function(){
	var keyword = document.getElementById("keyword").value;
	var local = new BMap.LocalSearch(map, {
	renderOptions:{map: map}
});
local.search(keyword);
};	

	
	
// ������ַ������ʵ��
//var myGeo = new BMap.Geocoder();
// ����ַ���������ʾ�ڵ�ͼ��,��������ͼ��Ұ
/* myGeo.getPoint("�������������ɽ�����238���������", function(point){
		if (point) {
			map.centerAndZoom(point, 20);
			map.addOverlay(new BMap.Marker(point));
		}else{
			//alert("��ѡ���ַû�н��������!");
		}
	}, "������"); */