<?php
 
/*
	Written by Amit Shavit v1.0
	For website design opportunities,
	contact me at contact@engineercreativity.com,
	or visit my website at
	http://engineercreativity.com
	(c) 2010
*/

$name = $_REQUEST['name'] ; 
$phrase = $_REQUEST['phrase'] ;

$phrase = strtoupper($phrase) ; 

$data = array(
	"name" => $name,
	"phrase" => $phrase
);

echo json_encode($data); 


?>
