$(document).ready(function(){
  $("button").click(funtion(){
    $("img").toggle();
  }); 
  $("h1").toggle();
  $("p").toggle();
  $("header").click(function(){
  	$(this).css(“background-color”, “black”);
  });
  $("#fancy-text").click(function(){
    $(this).css({"font-style", "italic", "color":"purple", "font-size":"30px"});
 });
