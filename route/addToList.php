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

// Get the JSON data from the request
$jsonData = file_get_contents('php://input');
// Decode the JSON data to an associative array
$data = json_decode($jsonData, true);

$sql = "SELECT * FROM PRODUCT WHERE name = '" . $data['name'] . "'" . "LIMIT 1";
// Execute the query
$result = $conn->query($sql);
// Get the result as an associative array
$product = $result->fetch_assoc();


$sql = "INSERT INTO LIST (name, description, image, price)" . "VALUES ('" . $product['name'] . "', '" . $product['description'] . "', '" . $product['image'] . "', '" . $product['price'] . "')";
// Execute the query
$result = $conn->query($sql);

if ($result === true) {
    $response = array(
        "success" => true,
        "message" => "Product added to list successfully"
    );
} else {
    $response = array(
        "success" => false,
        "message" => "Error: " . $conn->error
    );
}

// Return the response as JSON
header("Content-Type: application/json");
echo json_encode($response);

// Close the database connection
$conn->close();
?>