<?php

include('../infusionsoft-php-sdk-master/Infusionsoft/infusionsoft.php');

$contactId = $_GET["contactId"];

$opportunities = Infusionsoft_DataService::query(new Infusionsoft_Lead(), array('ContactID' => $contactId));

foreach($opportunities as $opportunity) {
	$opportunity->StageID = 21;
	$opportunity->save();

	echo 'Opportunity ' . $opportunity->Id . ' has been moved to Stage ' . $opportunity->StageID . '.';
}

?>