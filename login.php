<?php

// Connect to the database
$db = new PDO('mongodb+srv://Anomaly:P@ssw0rd@cluster0.s8h5ohw.mongodb.net/', 'root', '');

// Get the username and password from the login form
$username = $_POST['username'];
$password = $_POST['password'];

// Check the username and password against the database
$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
$result = $db->query($sql);

// If the username and password are valid, log the user in and redirect them to a protected page
if ($result->num_rows > 0) {
  // Set the session cookie
  $_SESSION['user'] = $username;

  // Redirect the user to a protected page
  header('Location: protected.php');
} else {
  // Display an error message
  echo 'Invalid username or password.';
}

?>