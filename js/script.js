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
    data: {
      message: "hello!"
    },
    dataType: "json"
  });
});

$(document).ready(function() {
//$("#img").click(function(){
$("#div1").fadeIn("slow");
$("#div2").fadeIn(3000);
$("#div3").fadeIn(4000);
});
});
