$(document).ready(function() {
  $("#submit").click(function() {
    $("#response").show();
    $("#reviewMe").show();
    $("#forms").hide();
  });
});

$("#submit").on("click", function() {
    $.ajax({
        url: "//formspree.io/watimakhanu@gmail.com",
        method: "POST",
        data: {message: "hello!"},
        dataType: "json"
    });
});
