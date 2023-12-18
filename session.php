<?php
session_start();


$_SESSION['user_id'] = 123;
$_SESSION['username'] = 'hafiz';


echo 'Hello, ' . $_SESSION['username'];
?>