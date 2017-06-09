$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var inputtednumber = parseInt($("input#inputtedNumber").val());
    var result = pingpong(inputtedNumber);

    $("#result").show();
  });

  var pingpong = function(inputtedNumber) {
    if (inputtedNumber >= 1) {
      return range(inputtedNumber);
    } else {
      return 0
    }
  };
});
