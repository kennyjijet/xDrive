<?php

$SendEmailAT = false;
//$myFileCountry = "country/AT/xDrive2013v1-en-".date("Ymd", strtotime("yesterday")).".csv";
$myFileCountry = "/usr/www/users/gamepk/clients/BMW/xDrive2013/country/AT/xDrive2013v1-en-" . date("Ymd", strtotime("yesterday")) . ".csv";
///usr/www/users/gamepk/clients/BMW/xDrive2013/daily.php
//$myFileCountry = "country/AT/;
//echo date("Ymd", strtotime("yesterday"))
$ch = curl_init("https://gamepunks.com/clients/BMW/xDrive2013/daily.php");
$zip = new ZipArchive();
$zip_name = "Austria.zip";
//if($zip->open($zip_name, ZIPARCHIVE::CREATE)!==TRUE)
//{
// Opening zip file to load files
// $error .= "* Sorry ZIP creation failed at this time";
//}
// foreach($post['files'] as $file)
//{
//   $zip->addFile($myFile); // Adding files into zip
//}

echo("Daily.php started");
$zip->close();
$password = 'A0str1a';
$outfile = 'download.zip';
$infile = $myFileCountry;
header("Content-type: application/octet-stream");
header("Content-disposition: attachment; filename=$zip_name");
@system("zip -P $password $zip_name $infile");
@unlink($outfile);
$LastSendDateFile = "/usr/www/users/gamepk/clients/BMW/xDrive2013/data/LastSentDate.txt";
$LastSendDate = 0;
$fileExists = false;
$fileLists = glob($LastSendDateFile);
foreach ($fileLists as $file) {
    $fileExists = true;
    break;
}
if ($fileExists == true) {
    $fh = fopen($LastSendDateFile, 'r') or die("can't read file");
    $LastSendDate = fread($fh, filesize($LastSendDateFile));
    fclose($fh);
}
echo intval($LastSendDate) . " < " . intval(date('Ymd'));
if (intval($LastSendDate) < intval(date('Ymd'))) {
    $LastSendDate = date('Ymd');
    $SendEmailAT = true;

}
$fh = fopen($LastSendDateFile, 'w') or die("can't open file");
fwrite($fh, $LastSendDate);
fclose($fh);
if ($SendEmailAT == true) {
    // $to1 = "jittarin@gamepunks.asia";
    $to1 = "" . $translations['AT']['Email_manager'];
    $subject = "Book Test Drive";
    $headers = "From: blog@gamepunks.com";
    $headers .= ":";
    $goodAttachment = chunk_split(base64_encode(file_get_contents("Austria.zip")));
    $headers .= "name: \"" . "Book Test Drive " . "\"r\n";
    $headers .= "Content-Transfer-Encoding: base64\r\n";
    $headers .= "Content-Disposition: attachment; ";
    $headers .= "filename=\"" . date("Ymd") . "_Austria.zip" . "\"\r\n\n";
    $headers .= "" . $goodAttachment . "\r\n";
    $body = "Hello,\n\n" .
        "Form data for " . date("l jS \of F Y", strtotime("yesterday")) . " are available at following:\n\n";

    if ($SendEmailAT == true) {
        if (mail($to1, $subject, $body, $headers)) {
            // move_uploaded_file(date("Ymd").".zip","/History/".date("Ymd").".zip"   );
            $SendEmailAT = false;
            echo "OK";
        } else {
            echo "Failed to sent an email";
        }
    } else {

        echo "Sorry, there no data to send today!";
    }
}




?>