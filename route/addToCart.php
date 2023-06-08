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

// get the query where the name is the same as the name in the database, and limit the result to 1
$sql = "SELECT * FROM PRODUCT WHERE name = '" . $data['name'] . "'" . "LIMIT 1";
// Execute the query
$result = $conn->query($sql);
// Get the result as an associative array
$product = $result->fetch_assoc();

// update the stock of the product
$sql = "UPDATE PRODUCT SET stock = stock - " . $data['number'] . " WHERE name = '" . $data['name'] . "'";
// Execute the query
$conn->query($sql);


// If the product exists, insert the product into the cart
if ($product) {
    // Insert the product into the cart, but check if the product already exists in the cart
    $sql = "SELECT * FROM cart WHERE name = '" . $product['name'] . "'" . "LIMIT 1";
    // Execute the query
    $result = $conn->query($sql);
    // Get the result as an associative array
    $cartProduct = $result->fetch_assoc();

    // if the product already exists in the cart, update the number of the product
    if ($cartProduct) {
        $sql = "UPDATE cart SET number = number + " . $data['number'] . " WHERE name = '" . $product['name'] . "'";
        // Execute the query
        $result = $conn->query($sql);
    }
    // else insert the product into the cart
    else {
        $sql = "INSERT INTO cart (name, description, image, price, number)" . "VALUES ('" . $product['name'] . "', '" . $product['description'] . "', '" . $product['image'] . "', '" . $product['price'] . "', '" . $data['number'] . "')";
        // Execute the query
        $result = $conn->query($sql);
    }

    if ($result === true) {
        $response = array(
            "success" => true,
            "message" => "Product added to cart successfully"
        );
    } else {
        $response = array(
            "success" => false,
            "message" => "Error: " . $conn->error
        );
    }
} else {
    $response = array(
        "success" => false,
        "message" => "Product not found"
    );
}

// Return the response as JSON
header("Content-Type: application/json");
echo json_encode($response);

// Close the database connection
$conn->close();
?>