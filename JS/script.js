$(document).ready(function(){
  $('button').click(funtion(){
    $('img').toggle();
  }); 
  $('h1').fadeIn(1000);
  $('p').fadeIn(2000);
  $('header').click(function(){
	  $(this).css(“background-color”, “black”);
  });
  
 });
