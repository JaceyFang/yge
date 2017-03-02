/* 点击图标，导航区出现 */
$(function(){

var jstonav=$('.jstonavbox'),jsnav=$('.jsnavbox');
jstonav.on('click',function(ev){

jstonav.toggleClass('now');
jsnav.toggleClass('block');
});


});
