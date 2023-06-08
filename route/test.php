<?php
// MySQL database credentials
$servername = "localhost"; // 資料庫伺服器名稱
$username = "root"; // 資料庫用戶名
$password = ""; // 資料庫密碼
$dbname = "DWP"; // 資料庫名稱

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Query to fetch product data from the database
$sql = "SELECT * FROM PRODUCT";
$result = $conn->query($sql);

// Check if any rows are returned
if ($result->num_rows > 0) {
  // Array to store product data
  $products = array();

  // Fetch rows and add to the products array
  while ($row = $result->fetch_assoc()) {
    $products[] = $row;
  }

  // Return products data as JSON
  header("Content-Type: application/json");
  echo json_encode($products);
} else {
  // No products found
  echo "No products found.";
}

// Close the database connection
$conn->close();
?>