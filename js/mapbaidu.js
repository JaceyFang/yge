	// 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(114.40574,30.512066);
	map.centerAndZoom(point,40);
	
	
	
var ctrlopts = {anchor: BMAP_ANCHOR_BOTTOM_RIGHT};
map.addControl(new BMap.NavigationControl(ctrlopts));	


map.addControl(new BMap.ScaleControl());

	
	
//关键字搜索
document.getElementById("bdsomap").onclick=function(){
	var keyword = document.getElementById("keyword").value;
	var local = new BMap.LocalSearch(map, {
	renderOptions:{map: map}
});
local.search(keyword);
};	

	
	
// 创建地址解析器实例
//var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上,并调整地图视野
/* myGeo.getPoint("广州市天河区中山大道西238号勤天大厦", function(point){
		if (point) {
			map.centerAndZoom(point, 20);
			map.addOverlay(new BMap.Marker(point));
		}else{
			//alert("您选择地址没有解析到结果!");
		}
	}, "广州市"); */