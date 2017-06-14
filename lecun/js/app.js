//导航条点击添加active；
$("ul.navbar-nav>li").on("click",function(){
  var self = $(this);
  $("ul.navbar-nav>li").removeClass("active");
  self.addClass("active");
})
/* 声明所需变量 */
var listHtml = $(".site-item").html(),
    listWidth = $(".site-item ul li").outerWidth()+20,
    contWidth = $(".cont-site").outerWidth(),
    siteItemWidth = 0,
    siteLeft = 0,
    timer = null;
/* 添加复制HTML */
$(".site-item").append(listHtml);

//根据内容定义地图块的width；
siteItemWidth = listWidth * $(".site-item ul li").length;
$(".site-item").css("width",siteItemWidth);

//定时器
function run(){
  if(siteLeft >= siteItemWidth/2){
    siteLeft = 0;
    siteLeft += listWidth;
    $(".site-item").css("left","0px");
  }else{
    siteLeft += listWidth;
  }
  $(".site-item").animate({
    "left": -siteLeft
  },"slow")
}
timer = setInterval(run, 2000);
/* 解除定时器 */
$(".site-item ul li,.cont-btn .btn-left,.cont-btn .btn-right").on("mouseover",function(){
  clearInterval(timer);
})
/* 启动定时器 */
$(".site-item ul li,.cont-btn .btn-left,.cont-btn .btn-right").on("mouseout",function(){
  timer = setInterval(run, 2000);
})
//回到顶部
$(".as .plane").on("click",function(){
  $("body").animate({
    "scroll-top": "0px"
  },"fast")
})
//左右切换地图点击事件；
var switchTime = null;
var switchTimeNum = 100;
$(".cont-btn .btn-left").on("click",function(){
  if(switchTimeNum>=100){
    clearInterval(switchTime);
    switchTimeNum = 0;
    if (siteLeft <= 0) {
      siteLeft = siteItemWidth/2;
      console.log(siteLeft);
      $(".site-item").css("left", -siteLeft+"px");
      siteLeft -= listWidth;
    } else {
      siteLeft -= listWidth;
    }
    $(".site-item").animate({
      "left": -siteLeft
    }, "slow")
    switchTime = setInterval(function(){
      switchTimeNum++
    },10)
  }
})
$(".cont-btn .btn-right").on("click",function(){
    if(switchTimeNum>=100){
      clearInterval(switchTime);
      switchTimeNum = 0;
      if (siteLeft >= siteItemWidth / 2) {
        siteLeft = 0;
        siteLeft += listWidth;
        $(".site-item").css("left", "0px");
      } else {
        siteLeft += listWidth;
      }
      $(".site-item").animate({
        "left": -siteLeft
      }, "slow")
      switchTime = setInterval(function(){
        switchTimeNum++
      },10)
    }
})
//bootstrap滚动监听事件
$('body').scrollspy({ target: '.navbar-example' });
//点击跳到相应位置
$(".navbar-nav li").click(function(){
  var target = $('#' + $(this).find('a').attr('href').replace('#', ''));
  var position = target.offset().top;
  $('body').animate({
      scrollTop: position
  }, 400);
  return;
})
//页面跳转
$(".price button").on("click",function(){
  location.href='./detail.html';
})
