$(function() {

	// jQuery Goes here!
	$(".fa-bars").on("click", function(){
		$("ul.navigation").addClass("flexplicit");
	});

	$("a").on("click", function(){
		$("ul.navigation").removeClass("flexplicit");
	});

});

