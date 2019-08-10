<?php
// We'll be outputting a PDF
header('Content-type: application/pdf');

// It will be called downloaded.pdf
header('Content-Disposition: attachment; filename="BMW_X3.pdf"');

// The PDF source is in original.pdf
//readfile('http://gamepunks.com/clients/BMW/xDrive2013/x1_catalogue.pdf');
readfile('BMW_X3.pdf');




?>