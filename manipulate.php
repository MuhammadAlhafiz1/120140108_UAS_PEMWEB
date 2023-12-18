<?php

include 'koneksi.php';


$name = 'Hafiz';
$email = 'hafiz@example.com';
$gender = 'Laki-Laki';
$date = '2023-12-31';

$sql = "INSERT INTO presensi (name, email, gender, date) VALUES ('$name', '$email', '$gender', '$date')";

if ($conn->query($sql) === TRUE) {
    echo "Data berhasil ditambahkan";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>
