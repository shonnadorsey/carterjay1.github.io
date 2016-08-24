$(document).ready(function(){
  $("button").click(funtion(){
    $("img").toggle();
  }); 
  $("h1").toggle();
  $("p").toggle();
  $("header").click(function(){
  	$("header").css(“background-color”, “black”);
  });
  $("#fancy-text").click(function(){
    $("header").css({"font-style", "italic", "color":"purple", "font-size":"30px"});
 });
