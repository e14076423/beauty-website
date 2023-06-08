$(document).ready(function () {
  // get current page name
  var path = window.location.pathname;
  var page = path.split("/").pop();
  // remove .html
  pageName = page.split(".")[0];

  if (pageName == "index") {
    return;
  } else if (pageName == "cart") {
    // call function to show cart
    showCart();
  } else if (pageName == "list") {
    showList();
  } else if (pageName == "product") {
    // Get the current URL
    var url = new URL(window.location.href);
    // Get the query parameters
    var params = new URLSearchParams(url.search);
    // Access the values of the arguments
    var data = params.get("data");
    console.log(data);
    showProductDetail(data);
  } else {
    // call function to show product
    showPage(pageName);
  }
});

function showCart() {
  $.ajax({
    url: "route/getCart.php",
    type: "GET",
    success: function (cart) {
      console.log(cart);
      if (cart.length == 0) {
        var cartItem = $("<div></div>")
          .addClass("cart-item")
          .css("flex-direction", "column");
        // create name
        var hint = $("<h3></h3>").text("趕快去買！🥳");

        // create image
        image = $("<img></img>")
          .attr("src", "src/chaewon.jpg")
          .css("width", "100%");

        cartItem.append(hint, image);

        $("#cart-container").append(cartItem);
        return;
      }

      // loop through cart
      for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        // create cart item
        var cartItem = $("<div></div>").addClass("cart-item");
        // create name
        var cartName = $("<h3></h3>").text(item.name).addClass("cart-name");
        // create image
        var cartImage = $("<img></img>")
          .attr("src", item.image)
          .addClass("cart-image");
        // ceate description
        var cartDescription = $("<p></p>")
          .text(item.description)
          .addClass("cart-description");
        // create price
        var cartPrice = $("<p></p>")
          .text("Price: " + item.price)
          .addClass("cart-price");
        // create number
        var cartNumber = $("<p></p>")
          .text("Number: " + item.number)
          .addClass("cart-number");
        // create total
        var cartTotal = $("<p></p>")
          .text("Total: " + item.price * item.number)
          .addClass("cart-total");
        // create button
        var cartButton = $("<button></button>")
          .text("Remove")
          .data({
            name: item.name,
            number: item.number,
          })
          .addClass("cart-remove")
          .click(function () {
            // get name
            var name = $(this).data("name");
            // get number
            var number = $(this).data("number");
            console.log(name, number);
            removeFromCart(name, number);
          });

        // append all to cart item
        cartItem.append(
          cartName,
          cartImage,
          cartDescription,
          cartPrice,
          cartNumber,
          cartTotal,
          cartButton
        );

        // append cart item to cart container
        $("#cart-container").append(cartItem);
      }
    },
  });
}

function showList() {
  // call php file
  $.ajax({
    url: "route/getList.php",
    type: "GET",
    success: function (data) {
      console.log(data);
      if (data.length == 0) {
        var listItem = $("<div></div>")
          .addClass("list-item")
          .css("flex-direction", "column");
        // create name
        var hint = $("<h3></h3>").text("還沒有東西><😘");

        // create image
        image = $("<img></img>")
          .attr("src", "src/winter.jpg")
          .css("width", "100%");

        listItem.append(hint, image);

        $("#list-container").append(listItem);
        return;
      }

      // loop through data
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        // create list item
        var listItem = $("<div></div>").addClass("list-item");
        // create name
        var listName = $("<h3></h3>").text(item.name).addClass("list-name");
        // create image
        var listImage = $("<img></img>")
          .attr("src", item.image)
          .addClass("list-image");
        // create description
        var listDescription = $("<p></p>")
          .text(item.description)
          .addClass("list-description");
        // create price
        var listPrice = $("<p></p>")
          .text("Price: " + item.price)
          .addClass("list-price");
        // create button
        var listButton = $("<button></button>")
          .text("remove")
          .data("name", item.name)
          .addClass("list-cart")
          .click(function () {
            // get name
            var name = $(this).data("name");
            console.log(name);
            removeFromList(name);
          });

        // append all to list item
        listItem.append(
          listName,
          listImage,
          listDescription,
          listPrice,
          listButton
        );

        // append list item to list container
        $("#list-container").append(listItem);
      }
    },
  });
}

function showPage(productClass) {
  // Upper case first letter
  productClass = productClass.charAt(0).toUpperCase() + productClass.slice(1);
  // call php file
  $.ajax({
    url: "route/get" + productClass + ".php",
    type: "GET",
    success: function (data) {
      console.log(data);
      showProduct(data);
    },
  });
}

function showProduct(products) {
  // in product we have array of object, each object contains attributes as key value pair
  // name, description, image, price, stock, class

  // loop through product
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    // create product item
    var productItem = $("<div></div>").addClass("product-item");
    // create product name
    var productName = $("<h3></h3>")
      .text(product.name)
      .addClass("product-name");

    // convert object to string
    var objectString = JSON.stringify(product);
    // encode the object string for including in url
    var encodedObject = encodeURIComponent(objectString);

    // create image and surround with link
    var productImage = $("<a></a>")
      .attr("href", "product.html?data=" + encodedObject)
      .append(
        $("<img></img>").attr("src", product.image).addClass("product-image")
      );
    // create description
    var productDescription = $("<p></p>")
      .text(product.description)
      .addClass("product-description");
    // create price
    var productPrice = $("<p></p>")
      .text("Price: " + product.price)
      .addClass("product-price");
    // create stock

    var productListButton = $("<button></button>")
      .text("Add to list")
      .data("name", product.name)
      .addClass("product-list")
      .click(function () {
        // get name
        var name = $(this).data("name");
        console.log(name);
        addToList(name);
      });

    // check if stock is 0
    if (product.stock == 0) {
      productStock = $("<p></p>")
        .text("Out of stock")
        .addClass("product-stock")
        .attr("style", "color: red");
    } else {
      // create select
      var productStock = $("<select></select>").addClass("product-stock");
      // create option for select
      for (var j = 1; j <= product.stock; j++) {
        var option = $("<option></option>").text(j);
        productStock.append(option);
      }
    }

    // create button
    var productCartButton = $("<button></button>")
      .text("Add to cart")
      .data("name", product.name)
      .addClass("product-cart")
      .click(function () {
        // get selected value
        var selectedValue = $(this).siblings(".product-stock").val();
        // get name
        var name = $(this).data("name");
        console.log(name, selectedValue);
        addToCart(name, selectedValue);
      });

    // append all to product item
    productItem.append(
      productName,
      productImage,
      productDescription,
      productPrice,
      productListButton,
      productStock,
      productCartButton
    );

    // apeend product item to product container
    $("#product-container").append(productItem);
  }
}

function showProductDetail(product) {
  product = JSON.parse(product);
  console.log(product);
  // create product info item
  var productInfoItem = $("<div></div>").addClass("product-info-item");
  // create product name
  var productInfoName = $("<h3></h3>")
    .text(product.name)
    .addClass("product-info-name");
  // create image
  var productInfoImage = $("<img></img>")
    .attr("src", product.image)
    .addClass("product-info-image");
  // create description
  var productInfoDescription = $("<p></p>")
    .text(product.description)
    .addClass("product-info-description");
  // create price
  var productInfoPrice = $("<p></p>")
    .text("Price: " + product.price)
    .addClass("product-info-price");

  // append all to product info item
  productInfoItem.append(
    productInfoName,
    productInfoImage,
    productInfoDescription,
    productInfoPrice
  );

  // apeend product info item to product info container
  $("#product-info-container").append(productInfoItem);
}

function addToCart(name, number) {
  data = {
    name: name,
    number: number,
  };
  // post to php file via ajax
  $.ajax({
    url: "route/addToCart.php",
    type: "POST",
    data: JSON.stringify(data),
    success: function (data) {
      console.log(data);
      location.reload();
    },
  });
}

function removeFromCart(name, number) {
  data = {
    name: name,
    number: number,
  };
  // post to php file via ajax
  $.ajax({
    url: "route/removeFromCart.php",
    type: "POST",
    data: JSON.stringify(data),
    success: function (data) {
      console.log(data);
      location.reload();
    },
  });
}

function addToList(name) {
  data = {
    name: name,
  };
  // post to php file via ajax
  $.ajax({
    url: "route/addToList.php",
    type: "POST",
    data: JSON.stringify(data),
    success: function (data) {
      console.log(data);
      // location.reload();
    },
  });
}

function removeFromList(name) {
  data = {
    name: name,
  };
  // post to php file via ajax
  $.ajax({
    url: "route/removeFromList.php",
    type: "POST",
    data: JSON.stringify(data),
    success: function (data) {
      console.log(data);
      location.reload();
    },
  });
}

function testPhp() {
  $.ajax({
    url: "route/test.php",
    type: "GET",
    success: function (data) {
      console.log(data);
    },
  });
}
