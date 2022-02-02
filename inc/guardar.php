<?php

$numero = mt_rand(100, 100000);
$nombre = "reporte$numero";

if (!empty($_POST['data'])) {
    $data = base64_decode($_POST['data']);
    // print_r($data);
    file_put_contents("../pdf/$nombre.pdf", $data);
    echo $nombre;
} else {
    echo "No Data Sent";
}
exit();
