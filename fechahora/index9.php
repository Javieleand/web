<?php
// url:https://code.tutsplus.com/es/tutorials/working-with-date-and-time-in-php--cms-31768

$present = date_create('now');
$future = date_create('last day of January 2019');
$interval = date_diff($present, $future);
// Output — 00 years, 04 months and 17 days
echo $interval->format('%Y years, %M months and %d days');

$present = new DateTime('now');
$future = new DateTime('last day of January 2020');
$interval = $present->diff($future);
// Output — 05 years, 04 months and 17 days
echo $interval->format('%Y years, %M months and %d days');
 
?>