$(function(){

	//商品列表透明度
	$(".container li").hover(function(){
		$("img").finish();
		 	$(this).animate({"opacity":"0.7"}).animate({"opacity":"1"});
	});
	//商品列表的下划线
	$(".container span").mouseenter(function(){
		$(this).css("text-decoration","underline").siblings("text-decoration","");
	}).mouseleave(function(){
		$(this).css("text-decoration","");
});






















})