<?php
//$url = 'gamepunks.com/clients/BMW/xDrive2013/daily.php';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://gamepunks.com/clients/BMW/xDrive2013/data/AT/daily.php");
curl_exec($curl);
curl_close($curl);
?>