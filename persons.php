<?php
$data = array(
	array(
		"firstName" => "André",
		"lastName" => "Vignaud",
		//'birthDate' => '1961-11-17',
	),
	array(
		"firstName" => "Valérie",
		"lastName" => "Lombard",
		"birthDate" => '1963-07-16',
	),
	array(
		"firstName" => "Diane",
		"lastName" => "Vignaud",
		"birthDate" => '1994-12-07',
	),
	array(
		"firstName" => "Aude",
		"lastName" => "Vignaud",
		"birthDate" => '1996-11-13',
	),
	array(
		"firstName" => "Louis",
		"lastName" => "Vignaud",
		"birthDate" => '1999-05-12',
	),
);
echo json_encode($data);