<?php

header('Access-Control-Allow-Origin: http://go.assessments24x7.com', false);

include('../infusionsoft-php-sdk-master/Infusionsoft/infusionsoft.php');

$id = $_GET['id'];

$allProducts = '';
$allServices = '';
$singleProduct = '';
$singleService = '';


$discAssessments = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '947', 'ContactId' => $id ));

if (count($discAssessments) > 0) {
	$allProducts .= 'DISC Assessments,';
	$singleProduct = 'DISC Assessments';
}



$motivatorsAssessments = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '949', 'ContactId' => $id ));

if (count($motivatorsAssessments) > 0) {
	$allProducts .= 'Motivators Assessments,';
	$singleProduct = 'Motivators Assessments';
}



$hartman = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '951', 'ContactId' => $id ));

if (count($hartman) > 0) {
	$allProducts .= 'Hartman Value Profile Assessment,';
	$singleProduct = 'Hartman Value Profile Assessments';
}



$emotionalIntelligence = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '953', 'ContactId' => $id ));

if (count($emotionalIntelligence) > 0) {
	$allProducts .= 'Emotional Intelligence Assessments';
	$singleProduct = 'Emotional Intelligence Assessments';
}



$learningStyles = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '957', 'ContactId' => $id ));

if (count($learningStyles) > 0) {
	$allProducts .= 'Learning Styles Assessments,';
	$singleProduct = 'Learning Styles Assessments';
}



$combinedReports = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '959', 'ContactId' => $id ));

if (count($combinedReports) > 0) {
	$allProducts .= 'Combined Reports,';
	$singleProduct = 'Combined Reports';
}



$behavioralProfiles = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '961', 'ContactId' => $id ));

if (count($behavioralProfiles) > 0) {
	$allProducts .= '360° Behavioral Profiles,';
	$singleProduct = '360° Behavioral Profiles';
}



$salesIQPlus = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '963', 'ContactId' => $id ));

if (count($salesIQPlus) > 0) {
	$allProducts .= 'Sales IQ Plus,';
	$singleProduct = 'Sales IQ Plus';
}



$PGI = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '965', 'ContactId' => $id ));

if (count($PGI) > 0) {
	$allProducts .= 'Performance Gap Indicator (PGI),';
	$singleProduct = 'Performance Gap Indicators (PGI)';
}



$hiringAndSelection = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '967', 'ContactId' => $id ));

if (count($hiringAndSelection) > 0) {
	$allProducts .= 'Hiring and Selection Assessments,';
	$singleProduct = 'Hiring and Selection Assessments';
}



$certifications = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '969', 'ContactId' => $id ));

if (count($certifications) > 0) {
	$allProducts .= 'Certifications,';
	$singleProduct = 'Certifications';
}



$workshops = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '971', 'ContactId' => $id ));

if (count($workshops) > 0) {
	$allProducts .= 'Full-day workshops,';
	$singleProduct = 'Full-day workshops';
}



$coachTrainer = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '346', 'ContactId' => $id ));

if (count($coachTrainer) > 0) {
	$allServices .= 'Assessments (Coach Trainer or Consultant),';
	$singleService = 'Coaches/Trainers and Consultants';
}



$corporation = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '348', 'ContactId' => $id ));

if (count($corporation) > 0) {
	$allServices .= 'Assessments (Corporation or Association),';
	$singleService = 'Companies and Organizations';
}



$onsite = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '975', 'ContactId' => $id ));

if (count($onsite) > 0) {
	$allServices .= 'On-site Training,';
	$singleService = 'On-site Training';
}



$onsite = Infusionsoft_ContactGroupAssignDataService::query(new Infusionsoft_ContactGroupAssign(), array('GroupId' => '969', 'ContactId' => $id ));

if (count($onsite) > 0) {
	$allServices .= 'Becoming Certified,';
	$singleService = 'Becoming Certified';
}



$allProducts = rtrim($allProducts,",");
$allServices = rtrim($allServices,",");

$contacts = Infusionsoft_DataService::query(new Infusionsoft_Contact(), array('Id' => $id));

$contact = $contacts[0];
$contact->_ProductTypeListbox = $allProducts;
$contact->_ProductType = $singleProduct;
$contact->_ReasonforInquiringDropdown = $singleService;
$contact->_ReasonforInquiringListbox = $allServices;
$contact->save();



?>