<?php
header('Content-Type: text/html; charset=utf-8');
include("location.php");
include("Email_send.php");
include("Email_send_k2.php");
echo $translations_k2['En']['email_manager'];
$semail = "";
if (isset($_POST['data'])) {
    $digits = 5;
    echo $digits;
    //$strData = isset($_POST['first_name']);
    $strData = ($_POST['data']);
    $strData = str_replace("\\\"", "\"", $_POST['data']);
    echo $strData;
    $jsonData = json_decode($strData);
    switch ($jsonData->{'form'}) {
        case "k2Competition":
        {
            $myfileEmail = "data_k2/Email_user/" . $jsonData->{'email'} . ".txt";
            /////////////////////////////////////////////

            $BMWTDIncrementIDFile = "data_k2/BMWTDIncrementID-" . $jsonData->{'lang'} . ".txt";
            $BMWTDIncrementID = 0;
            $fileExists = false;
            $fileLists = glob($BMWTDIncrementIDFile);
            foreach ($fileLists as $file) {
                $fileExists = true;
                break;
            }

            if ($fileExists == true) {
                $fh = fopen($BMWTDIncrementIDFile, 'r') or die("can't read file");
                $BMWTDIncrementID = intval(fread($fh, filesize($BMWTDIncrementIDFile)));
                fclose($fh);
            }


            /////////////////////////////////////////////
            //Check existing file

            $fileExists1 = false;
            $fileLists1 = glob($myfileEmail);
            foreach ($fileLists1 as $file) {
                $fileExists1 = true;
                break;
            }
            //////////////////////////////////////////////////////////////
            //Load existing data

            $BMWTDIncrementID++;
            $list1 = array();
            $i1 = 0;
            if ($fileExists1 == true) {
                $fh = fopen($myfileEmail, 'r') or die("can't read file");
                while (($data = fgetcsv($fh, 1000, ",")) !== false) {
                    $list1[$i] = $data;
                    $i1++;
                }
                fclose($fh);
            }
            //Add new data & increment Id
            $list1[$i1] = array(
                sprintf("%0" . $digits . "s", $BMWTDIncrementID),
                $jsonData->{'firstname'},
                $jsonData->{'lastname'},
                $jsonData->{'email'},
                $jsonData->{'telephone'},
                $country_code,
                $jsonData->{'street'},
                $jsonData->{'zip'},
                $jsonData->{'town'},
                $jsonData->{'country_user'},
                "" . date("Y-m-d H:i:s")
//input as you want
            );

////////////////////////////////////////////////////////////////////////////////////

            ////////////////////////////////////////////////////////////////////////////////////
            //Save all data
            $fh = fopen($myfileEmail, 'w') or die("can't open file");
            foreach ($list1 as $fields) {
                fputcsv($fh, $fields);
            }
            fclose($fh);

            //Save incremented Id
            $fh = fopen($BMWTDIncrementIDFile, 'w') or die("can't open file");
            fwrite($fh, $BMWTDIncrementID);
            fclose($fh);

            //////////////////////////////////////////////////////////////////////////////////////////
            echo "OK";
        }
            break;
        case "xDrive2013v1":
        {
            //Generate File Name
            if ($jsonData->{'country'} == "AT") {
                $myFileCountry = "data/AT/" . date("Ymd", strtotime("today")) . "/" . $jsonData->{'email'} . ".csv";
                $filenameCountry = "data/AT/" . date("Ymd", strtotime("today"));

                if (!file_exists($filenameCountry)) {
                    mkdir($filenameCountry, 0757);
                }
                $fileExistsCountry = false;
                $fileListsCountry = glob($myFileCountry);
                foreach ($fileListsCountry as $file) {
                    $fileExistsCountry = true;
                    break;
                }


                $BMWTDIncrementIDFile = "data/AT/BMWTDIncrementID-" . $jsonData->{'lang'} . ".txt";
                $BMWTDIncrementID = 0;
                $fileExists = false;
                $fileLists = glob($BMWTDIncrementIDFile);
                foreach ($fileLists as $file) {
                    $fileExists = true;
                    break;
                }
                if ($fileExists == true) {
                    $fh = fopen($BMWTDIncrementIDFile, 'r') or die("can't read file");
                    $BMWTDIncrementID = intval(fread($fh, filesize($BMWTDIncrementIDFile)));
                    fclose($fh);
                }

                //Check existing file
                $fileExists = false;
                $fileLists = glob($myFile);
                foreach ($fileLists as $file) {
                    $fileExists = true;
                    break;
                }


                $list1 = array();
                $i1 = 0;
                if ($fileExistsCountry == true) {
                    $fh = fopen($myFileCountry, 'r') or die("can't read file");
                    while (($data = fgetcsv($fh, 1000, ",")) !== false) {
                        $list1[$i1] = $data;
                        $i1++;
                    }
                    fclose($fh);
                }

                //Add new data & increment Id
                $BMWTDIncrementID++;
                $list1[$i1] = array(
                    sprintf("%0" . $digits . "s", $BMWTDIncrementID),
                    "",
                    "",
                    "",
                    $jsonData->{'firstname'},
                    $jsonData->{'lastname'},
                    $jsonData->{'telephone'},
                    $jsonData->{'email'},
                    "",
                    "",
                    "",
                    "",
                    $jsonData->{'model'},
                    "",
                    "ja",
                    "BMW",
                    "BMW-xDrive Challenge_2013",
                    "bmw_xdrive_challenge2013",
                    "" . date("Y-m-d H:i:s"),
                    "L"
                );

                $fh = fopen($myFileCountry, 'w') or die("can't open file");
                foreach ($list1 as $fields) {
                    fputcsv($fh, $fields);
                }
                fclose($fh);
                //Save incremented Id
                $fh = fopen($BMWTDIncrementIDFile, 'w') or die("can't open file");
                fwrite($fh, $BMWTDIncrementID);
                fclose($fh);
            }
            $myFile = "data/" . $jsonData->{'email'} . ".txt";
            /////////////////////////////////////////////
            /////////////////////////////////////////////
            //Check existing file
            $fileExists = false;
            $fileLists = glob($myFile);
            foreach ($fileLists as $file) {
                $fileExists = true;
                break;
            }
            //////////////////////////////////////////////////////////////
            //Load existing data
            $list = array();
            $i = 0;
            if ($fileExists == true) {
                $fh = fopen($myFile, 'r') or die("can't read file");
                while (($data = fgetcsv($fh, 1000, ",")) !== false) {
                    $list[$i] = $data;
                    $i++;
                }
                fclose($fh);
            }
            //Add new data & increment Id

            $list[$i] = array(
                "",
                "",
                "",
                "",
                $jsonData->{'firstname'},
                $jsonData->{'lastname'},
                $jsonData->{'telephone'},
                $jsonData->{'email'},
                "",
                $country_code, //Countrycode
                $jsonData->{'city'},
                "",
                $jsonData->{'model'},
                "",
                "Y",
                "BMW",
                "BMW-xDrive Challenge_2013",
                "",
                "" . date("Y-m-d H:i:s"),
                ""
            );
////////////////////////////////////////////////////////////////////////////////////

            ////////////////////////////////////////////////////////////////////////////////////
            //Save all data
            $fh = fopen($myFile, 'w') or die("can't open file");
            foreach ($list as $fields) {
                fputcsv($fh, $fields);
            }
            fclose($fh);
            //Save incremented Id


            //////////////////////////////////////////////////////////////////////////////////////////
            echo "OK";
        }
            break;
        default:
            {
            echo "Error, invalid form!" . $strData;
            }
            break;
    }
}
//else if(isset($_POST['notifyto'])) {

if (isset($_POST['data'])) {
    $SendEmail = true;
    $SendEmailAT = false;

    if ($SendEmail == true) {
        $simple = False;
        $cCsv = False;
        $xXml = False;
        $simple_k2 = true;
        $strData = ($_POST['data']);
        $strData = str_replace("\\\"", "\"", $_POST['data']);
        echo $strData;
        $jsonData = json_decode($strData);
        ///Winzip with pass sql
        // $to = $_GET['notifyto'];
        // $to = $semail;
        //// $to if else to check direction
        $LastSendDateFile = "data/LastSentDate.txt";
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

        $fh = fopen($LastSendDateFile, 'w') or die("can't open file");
        fwrite($fh, $LastSendDate);
        fclose($fh);
        if ($jsonData->{'country'} == "AT") {
            $to = "" . $translations['AT']['Email_manager'];
            $cCsv = false;
            $SendEmail = false;
        } else if ($jsonData->{'country'} == "RO") {
            $to = "" . $translations['RO']['Email_manager'];
            // $to = "jittarin@gamepunks.asia";
            $xXml = true;
            $SendEmail = true;
            $semail = preg_replace('/\s+/', '', $to);
        } else if ($jsonData->{'country'} == "SI") {
            $to = "" . $translations['SI']['Email_manager'];
            $xXml = true;
            $SendEmail = true;
            $semail = preg_replace('/\s+/', '', $to);

        } else if ($jsonData->{'country'} == "CZ") {
            $to = "" . $translations['CZ']['Email_manager'];
            $xXml = true;
            $SendEmail = true;
            $semail = preg_replace('/\s+/', '', $to);

        } else if ($jsonData->{'country'} == "SK") {
            $to = "" . $translations['SK']['Email_manager'];
            $xXml = true;
            $SendEmail = true;
            $semail = preg_replace('/\s+/', '', $to);

        } else if ($jsonData->{'country'} == "GR") {
            $to = "" . $translations['GR']['Email_manager'];
            //   echo "GR";
            //$to = "jittarin@gamepunks.asia";
            $xXml = true;
            $SendEmail = true;
            $semail = preg_replace('/\s+/', '', $to);

        } else if ($jsonData->{'country'} == "HU") {
            $to = "" . $translations['HU']['Email_manager'];
            $xXml = true;
            $SendEmail = true;
            $semail = preg_replace('/\s+/', '', $to);

        } else if ($jsonData->{'country'} == "PL") {
            $to = "" . $translations['PL']['Email_manager'];
            // $to = "jittarin@gamepunks.asia";
            $xXml = true;
            $SendEmail = true;
            $semail = preg_replace('/\s+/', '', $to);

        } else if ($jsonData->{'country'} == "CY") {
            $to = "" . $translations['CY']['Email_manager'];
            $simple = true;
            //$xXml = true;
            $SendEmail = true;
            $semail = preg_replace('/\s+/', '', $to);

        } else if ($jsonData->{'country'} == "MT") {
            $to = "" . $translations['MT']['Email_manager'];
            //$to = "jittarin@gamepunks.asia";
            $simple = true;

            //   $xXml = true;
            $SendEmail = true;
            $semail = preg_replace('/\s+/', '', $to);

        } else if ($jsonData->{'country'} == "BG") {
            $to = "" . $translations['BG']['Email_manager'];
            // $to = "jittarin@gamepunks.asia,matt@gamepunks.asia";
            $simple = true;
            //  $xXml = true;
            $SendEmail = true;
            $semail = preg_replace('/\s+/', '', $to);
        }
        if ($xXml == true) {
            $subject = "Book Test Drive";
            $headers = "From:blog@gamepunks.com";
            $headers .= ":";
            $Xml = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>
 <RFCI xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"rfci_RO_ro.xsd\">
 <SourceRFCI>
 <Source>FOUR: X-Drive challenge 2013</Source></SourceRFCI>
 <Contact>
 <ContactData>
<FirstName>" . $jsonData->{'firstname'} . "</FirstName>
<LastName>" . $jsonData->{'lastname'} . "</LastName>
 </ContactData>
 <AddressData><IsBusinessAddress>false</IsBusinessAddress></AddressData>
<CommunicationData>
<MobilePhone>" . $jsonData->{'telephone'} . "</MobilePhone>
<Email>" . $jsonData->{'email'} . "</Email>
</CommunicationData>
</Contact>
<InformationRequest>
<BrochureBrand>
<BrochureBrandName>BMW</BrochureBrandName>
</BrochureBrand>
</InformationRequest>
<TestdriveRequest>
<ModelName>" . $jsonData->{'model'} . "</ModelName>
</TestdriveRequest>
</RFCI>
";
            // $goodAttachment = chunk_split(base64_encode(file_get_contents($Xml)));
            $headers .= "name: \"" . $jsonData->{'country'} . " Book Test Drive " . "\"r\n";
            $headers .= "Content-Transfer-Encoding: utf-8\r\n";
            $headers .= "Content-Disposition: attachment; ";
            $headers .= "filename=\"" . $jsonData->{'email'} . "_Xml_format_" . $jsonData->{'country'} . ".xml" . "\"\r\n\n";
            $headers .= "" . $Xml . "\r\n";

            if ($SendEmail == true) {
                if (mail($semail, $subject, $body, $headers)) {
                    // move_uploaded_file(date("Ymd").".zip","/History/".date("Ymd").".zip"   );
                    echo "OK";
                } else {
                    echo "Failed to sent an email";
                }
            } else {

                echo "Sorry, there no data to send today!";
            }
        }
        if ($simple == true) {
            $subject = "Book Test Drive";
            $headers = "From: blog@gamepunks.com";
            $headers .= ":";
            $headers .= "name: \"" . $jsonData->{'country'} . " Book Test Drive " . "\"r\n";
            if ($jsonData->{'country'} == "BG") {
                $body = "Hello,\n\n" .
                    "Form data for " . date("l jS \of F Y", strtotime("today")) . " are available at following:\n\n";
                $body .= "
           FirstName: " . $jsonData->{'firstname'} . "\n
           LasteName: " . $jsonData->{'lastname'} . "\n
           E-mail:    " . $jsonData->{'email'} . "\n
           Phone number: " . $jsonData->{'telephone'} . "\n
           City: " . $jsonData->{'city'} . "\n
           Model Car: " . $jsonData->{'model'} . "\n ";

            } else {
                $body = "Hello,\n\n" .
                    "Form data for " . date("l jS \of F Y", strtotime("today")) . " are available at following:\n\n";
                $body .= "
           FirstName: " . $jsonData->{'firstname'} . "\n
           LasteName: " . $jsonData->{'lastname'} . "\n
           E-mail:    " . $jsonData->{'email'} . "\n
           Phone number: " . $jsonData->{'telephone'} . "\n
           Model Car: " . $jsonData->{'model'} . "\n ";
            }
            if ($SendEmail == true) {
                if (mail($to, $subject, $body, $headers)) {
                    // move_uploaded_file(date("Ymd").".zip","/History/".date("Ymd").".zip"   );
                    echo "OK";
                } else {
                    echo "Failed to sent an email";
                }
            } else {
                echo "Sorry, there no data to send today!";
            }
        }
        //  $attachment = chunk_split(base64_encode(file_get_contents(date("Ymd").'.zip')));
    } else {
        echo "Error, email notification is already sent, we will not resend it again!";
    }
} else {
    echo "Error, missing some data!";
}

?>