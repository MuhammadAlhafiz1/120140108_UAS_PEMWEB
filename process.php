<?php
include_once 'koneksi.php';
include_once 'manipulate.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $gender = $_POST['genderRadio'];
    $date = $_POST['date'];


    if (empty($name) || empty($email) || empty($date)) {
        echo "Harap lengkapi semua kolom!";
    } else {

        echo "Data berhasil diterima!";
    }
}
?>
