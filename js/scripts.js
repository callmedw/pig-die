// Business Logic

function Player(sub, grand) {
  this.sub = sub;
  this.grand = grand;
}

// function subtotal(roll)

Player.prototype.roll = function(roll) {
  console.log(Math.floor((Math.random() * 6) + 1))
  return Math.floor((Math.random() * 6) + 1);
}

// User Interface
$(document).ready(function() {
// Player One Roll
  $("#p1-roll").last().click(function(){
    var sub = 0;
    var grand = 0;
    var player1 = new Player(sub, grand);
    var rollResult = player1.roll();
    $("#p1-die-result").text("");
    $("#p1-die-result").text(rollResult);
  });
// Player One Hold
  $("#p1-hold").last().click(function(){
    $("#p1-grand").text("turn total");
  });

// Player Two Roll
  $("#p2-roll").last().click(function(){
    var sub = 0;
    var grand = 0;
    var player2 = new Player(sub, grand);
    var rollResult2 = player2.roll();
    $("#p2-die-result").text("");
    $("#p2-die-result").text(rollResult2);
  });

// Player Two Hold
  $("#p2-hold").last().click(function(){
    $("#p2-grand").text("turn total");
  });

});
