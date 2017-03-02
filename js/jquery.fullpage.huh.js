$(document).ready(function() {
$('#fullpage').fullpage({
anchors: ['pinga', 'pingb', 'pingc', 'pingd', 'pinge', 'pingf', 'pingg'],
//sectionsColor: ['#8FB98B', '#DE564B', '#EAE1C0','#f0f', '#00f', '#f00', '#0f0'],


//main menu
menu: '#menu1',				


//vertical pages				
navigation: true,
navigationPosition: 'right',
navigationTooltips: ['第1屏', '第2屏', '第3屏','第4屏', '第5屏', '第6屏', '第7屏'],		


//slides
slidesNavigation: true,
controlArrows: true,
controlArrowColor: '#f00',	
afterRender: function () {
setInterval(function () {
$.fn.fullpage.moveSlideRight();
}, 3000);
},//slides autopages



autoScrolling: true,
css3: true,
fitToSection: false,


scrollOverflow: true	//子页面不等高
//loopBottom: true,//fullpages auto turn


});



});