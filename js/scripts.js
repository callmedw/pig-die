// Business Logic

function Player(sub, grand) {
  this.subTotal = sub;
  this.grand = grand;
  this.currentRoll=0;
}

// This prototype works
Player.prototype.roll = function(roll) {
  this.currentRoll = Math.floor((Math.random() * 6) + 1);
}

Player.prototype.getSub = function(){
  if (this.currentRoll >= 2) {
    this.subTotal += this.currentRoll;
  } else {
    this.subTotal = 0;
  }
}

Player.prototype.getGrand = function(){
  this.grand += this.subTotal;
  this.subTotal = 0;
}


// User Interface
$(document).ready(function() {
// Player One Start
  var sub = 0;
  var grand = 0;
  var player1 = new Player(sub, grand);
  var player2 = new Player(sub, grand);

// Player One Roll
  $("#p1-roll").last().click(function(){
  player1.roll();
  player1.getSub();
    $("#p1-die-result").text("");
    $("#p1-die-result").text(player1.currentRoll);
    $("#p1-subTotal").text(player1.subTotal);
  });

// Player One Hold
  $("#p1-hold").last().click(function(){
    $("#p1-die-result").text("");
    $("player1.subTotal").val(0).text("");
    player1.getGrand();
    $("#p1-grand").text(player1.grand);
    $("#p1-subTotal").text("");
  });

// Player Two Roll
  $("#p2-roll").last().click(function(){
  player2.roll();
  player2.getSub();
    $("#p2-die-result").text("");
    $("#p2-die-result").text(player2.currentRoll);
    $("#p2-subTotal").text(player2.subTotal);
  });
  
// Player Two Hold
  $("#p2-hold").last().click(function(){
    $("#p2-die-result").text("");
    $("player2.subTotal").val(0).text("");
    player2.getGrand();
    $("#p2-grand").text(player2.grand);
    $("#p2-subTotal").text("");
  });
});
