<?php
include("helpers.php");
$url = "http://freegeoip.net/json/" . get_real_ip();
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$country_str = curl_exec($ch);
curl_close($ch);
$country_json = json_decode($country_str);
$country_code = $country_json->{'country_code'};

$bmw = Array();
$bmwid = Array();
$bmw["Ceska"] = "BMW.Ceska.Republika";
$bmwid["Ceska"] = "125214950828155";
$bmw["Polska"] = "BMW.Polska";
$bmwid["Polska"] = "100897909953615";
$bmw["Slovenija"] = "BMW.Slovenija";
$bmwid["Slovenija"] = "157689954242062";
$bmw["Slovensko"] = "BMW.Slovensko";
$bmwid["Slovensko"] = "231304704244";
$bmw["Romania"] = "BMW.Romania";
$bmwid["Romania"] = "114475405255795";
$bmw["Cyprus"] = "BMW.Cyprus";
$bmwid["Cyprus"] = "189518931112757";
$bmw["Magyarorszag"] = "BMW.Magyarorszag";
$bmwid["Magyarorszag"] = "120679544627595";
$bmw["Bulgaria"] = "BMW.Bulgaria";
$bmwid["Bulgaria"] = "110654542304251";
$bmw["Hellas"] = "bmwhellas";
$bmwid["Hellas"] = "179706246522";
$bmw["Malta"] = "BMW.Malta";
$bmwid["Malta"] = "109524659092019";
$bmw["Austria"] = "BMW.Austria";
$bmwid["Austria"] = "121362057875747";
$bmw["Schweiz"] = "BMW.Schweiz";
$bmwid["Schweiz"] = "112132678826340";
$bmw["Canada"] = "BMW.Canada";
$bmwid["Canada"] = "163724523639089";
$bmw["innovationpunks"] = "innovationpunks";
$bmwid["innovationpunks"] = "134486286571270";
$bmw["Global"] = "BMW";
$bmwid["Global"] = "22893372268";
$bmwlocation = "Global";

switch ($country_code) {
    case "CZ":
    {
        $bmwlocation = "Ceska";
    }
        break;
    case "PL":
    {
        $bmwlocation = "Polska";
    }
        break;
    case "SI":
    {
        $bmwlocation = "Slovenija";
    }
        break;
    case "SK":
    {
        $bmwlocation = "Slovensko";
    }
        break;
    case "RO":
    {
        $bmwlocation = "Romania";
    }
        break;
    case "CY":
    {
        $bmwlocation = "Cyprus";
    }
        break;
    case "HU":
    {
        $bmwlocation = "Magyarorszag";
    }
        break;
    case "BG":
    {
        $bmwlocation = "Bulgaria";
    }
        break;
    case "GR":
    {
        $bmwlocation = "Hellas";
    }
        break;
    case "MT":
    {
        $bmwlocation = "Malta";
    }
        break;
    case "AT":
    {
        $bmwlocation = "Austria";
    }
        break;
    case "CH":
    {
        $bmwlocation = "Schweiz";
    }
        break;
    case "CA":
    {
        $bmwlocation = "Canada";
    }
        break;
    default:
        {
        $bmwlocation = "Global";
        }
        break;

}

?>