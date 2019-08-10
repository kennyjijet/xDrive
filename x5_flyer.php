<?php
// We'll be outputting a PDF
header('Content-type: application/pdf');

// It will be called downloaded.pdf
header('Content-Disposition: attachment; filename="X5_flyer.pdf"');

// The PDF source is in original.pdf
//readfile('http://gamepunks.com/clients/BMW/xDrive2013/X5_flyer.pdf');

readfile('X5_flyer.pdf');


?>