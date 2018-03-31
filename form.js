$(function() {

/* 
	AJAX REQUEST
	WRITTEN BY AMIT SHAVIT
	DO NOT REPLICATE WITHOUT AUTHORIZATION
*/

$('#submit').click(function() {

	$('div#load').html('<img src="images/load.gif" alt="Loading..." id="loading" />'); //EDIT
	
	//creation of variables to send
	var name = $('#name').val(),
		phrase = $('#textarea-phrase').val() ;

	$.ajax({
		type: "POST",
		dataType: "json",
		data: {
			name: name,
			phrase: phrase
		},
		url: 'form.php',
		success: function( result ) {
			done( result );
		}
	});

	return false; 
});

function done( data ) {
	$('#form').fadeOut( function() { 
		$('#load').hide() ; 
		$('#name_or_id').html( data.name ) ; 
		$('#key-wrap').fadeIn() ; 
		$('#phrase p').hide().html( data.phrase ).fadeIn("slow") ; 
		begin() ; 
		//append_link() ; 
	}) ; 
}


//// This does not completely work...
/*
function append_link() {
	$('#phrase').append('<a href="#" id="another">Enter another phrase!</a>') ; 
	
	repeat() ; 
}

function repeat() {
	$('#another').click(function() {
		$('#form').fadeIn() ; 
		$('#phrase p').fadeOut() ;
		$('#another').hide() ; 

		return false ; 
	});
}
*/

});




