// variables
var $p = $("p");

$("button").click(function () {
  $p.show("fast");
//   $("button").on('click').hide()
});

$("p:last").on("click", function () {
  $list = $(".section-1");
  var text = "my dynamic text";
  $list.append("<p>" + text + "</p>");
});

$(function () {
  $("#colorselector").change(function () {
    $(".colors").hide();
    $("#" + $(this).val()).show();
  });
});

//   change background color
var $target = $(".container");
inView(".section").on("enter", function (el) {
  var color = $(el).attr("data-background-color");
  p.queue(function () {
    $target.css("background-color", color);
  });
});
