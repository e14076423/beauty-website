$(document).ready(function() {
    $("#addTextButton").click(function() {
      var newText = prompt("請輸入清單名稱:");
      $("#output").html("<h1>" + newText + "</h1>");
    });
  });