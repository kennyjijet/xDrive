<?php


/*echo strtotime("yesterday");
echo "<br>";
echo date("Ymd");
echo "<br>";
echo date('Y-m-d', strtotime('-1 day'));
echo "<br>";
echo date("Ymd", strtotime("yesterday"));
$LastSendDateFile = "/usr/www/users/gamepk/clients/BMW/xDrive2013/LastSentDate.txt";
$fh = fopen($LastSendDateFile, 'r') or die("can't read file");
$LastSendDate = fread($fh, filesize($LastSendDateFile));
fclose($fh);
echo $LastSendDate;
*/

include("location.php");

echo $country_code;
//echo "AT";
?>