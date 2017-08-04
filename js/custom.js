// JavaScript Document
$(document).ready(function(){
	
	$('.burger').click(function(){
			 $(".nav-list").slideToggle();

		})
	
	if($(window).width() < 768){
		$('ul.nav-list li').click(function(){
		     $(".nav-list").slideUp();
	})
	}
/*	scroll to top*/
	$("a[href='#top']").click(function() {
             $("html, body").animate({ scrollTop: 0 }, "slow");
                  return false;
    })
  
});