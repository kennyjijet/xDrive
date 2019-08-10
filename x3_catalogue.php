<?php
// We'll be outputting a PDF
header('Content-type: application/pdf');

// It will be called downloaded.pdf
header('Content-Disposition: attachment; filename="x3_catalogue.pdf"');

// The PDF source is in original.pdf
//readfile('http://gamepunks.com/clients/BMW/xDrive2013/x3_catalogue.pdf');

readfile('x3_catalogue.pdf');

?>