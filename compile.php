<?php 
$dir = __DIR__ . '/' ;

$log = [] ;

foreach( scandir($dir) as $file)
{
    $full = $dir . $file ;
    if( ! is_file($full) ) continue ;
    $lines = file($full) ;
    $readNow = false ;
    $keyname = basename($file, '.txt') ;
    foreach( $lines as $line )
    {
        if( $readNow ) {
            $log[$keyname][] = trim(str_replace (array("\r\n", "\n", "\r"), '', $line)) ;
            $readNow = false ;
        }
        if( false !== strpos($line , "Raw code:"))  {
            $readNow = true ;
        }
    }
}

echo json_encode($log) ;
