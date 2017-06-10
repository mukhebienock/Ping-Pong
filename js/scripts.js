$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#inputtedNumber").val());

    pingpong(inputtedNumber);

    pingPongNumber.forEach(function(inputtedNumber) {
      $("#result").append("<li>" + inputtedNumber + "</li>");
    });
  });
});



var pingPongNumber = [];

var pingpong = function(inputtedNumber) {
  for(var index = 1; index <= inputtedNumber; index += 1) {
    if(index % 3 === 0){
      pingPongNumber.push("ping");
    } else {
      pingPongNumber.push(index);
    };
  };
};
