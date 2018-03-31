function begin() {

	// Split phrase into letters/elements
	$('#phrase p').lettering() ; 

	/// Total pixels of phrase
	total_pixels = 0 ; 

	/// Width of page
	page_width = 700 ; 

	$('#pagewrap').width( page_width ) ; 

	/// Width of words
	//width_per_letter = 30 ; 
	margin_right = 5  ; 
	width_per_letter = $('#phrase p > span').width() + margin_right ; 

	// Loop over each element
	$('#phrase p').children('span').each(function(e) {
		
		// Grab the corresponding letter
		var l = $(this).html() ; 

		// Modify special characters
		if ( l === "." )
			l = 'period' ; 
		else if ( l === "," )
			l = 'comma' ; 
		else if ( l === "!" )
			l = 'exclamation' ;
		else if ( l === "?" )
			l = 'question_mark' ;
		else if ( l === "'" )  
			l = 'possessive' ; 
		else if ( l === " " )
			// do nothing
			var hi = true ;  
		else if ( l === "\\" )
			$(this).remove() ; 
		else 
			l = l + ' letter' ; 

		$(this).addClass( l ) ;

		/// Keep track of total pixels of phrase
		if ( l == 'possessive' ) 
			total_pixels += 10 + margin_right ; 
		else
			total_pixels += width_per_letter  ; 


		// Debugging, prints the pixel numer in class
		//l = l + ' ' + total_pixels ; 
		//$(this).addClass( l ) ;

		if ( total_pixels > page_width )
			page_width_flag = 1 ; 
		else
			page_width_flag = 0 ; 

		/* In the case that the word is too long to fit in the line
		 * for the current word
		 * This gets a little tricky because it "resets" the total_pixels count,
		 * but is not actually able to do it on the first letter of the new line
		 * because it has already placed it.  Therefore, it sets the number of pixels
		 * of the current letter to the number of pixels of letters already
		 * placed
		 */ 
		if ( page_width_flag == 1 ) {
			letters_in_word = break_line_before_current_word( $(this) ) ; 

			// Set total pixels to the number of letters in the first 
			// word on the new line
			total_pixels = letters_in_word * width_per_letter ; 
		}

	});
}


function break_line_before_current_word( $el ) {
	letters_in_word = 1;

	while ( $el.prev().html() != " " ) {
		$el = $el.prev() ; 
		letters_in_word += 1
	}

	$el.prev().addClass('line-break').addClass('no-margin') ; 

	return letters_in_word ;
}