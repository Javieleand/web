<!DOCTYPE html>
<html lang="en">
<head>
			    <meta charset="UTF-8">
			    <title>Obtener hora y fecha actual PHP</title>
</head>
<body>
 
<?php
date_default_timezone_set('Europe/Madrid');
 
?>
<h1>Fecha y Hora actual</h1>
 
<?=date('d/m/y g:ia');?>
        
</body>
</html>