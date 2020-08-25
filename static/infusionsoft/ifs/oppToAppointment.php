<?php

include('../infusionsoft-php-sdk-master/Infusionsoft/infusionsoft.php');

$contactId = $_GET["contactId"];

$opportunities = Infusionsoft_DataService::query(new Infusionsoft_Lead(), array('ContactID' => $contactId));

foreach($opportunities as $opportunity) {

if ($opportunity->StageID == 18 || $opportunity->StageID == 29 || $opportunity->StageID == 8 || $opportunity->StageID == 33 || $opportunity->StageID == 31) {
	$opportunity->StageID = 5;
	$opportunity->save();

	echo 'Opportunity ' . $opportunity->Id . ' has been moved to Stage ' . $opportunity->StageID . '.';
}
}

?>