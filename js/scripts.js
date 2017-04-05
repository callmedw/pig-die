// Business Logic

function Player(sub, grand) {
  this.subTotal = sub;
  this.grand = grand;
  this.currentRoll=0;
}
//
// function SubTotal() {
//   this.rollArray = []
// }

// SubTotal.prototype.getSub = function(rollArray){
//   for (i=0; i<=subTotal.rollArray.length; i++) {
//     // var newSubTotal = (subTotal.rollArray[i]);
//     if (parseInt(rollArray[i]) >= 2) {
//       var newSubTotal += parseInt(subTotal.rollArray[i]);
//       console.log(newSubTotal);
//       alert("test");
//     }
//   }
// }

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
}

// User Interface
$(document).ready(function() {
// Player One Start
  //
  var sub = 0;
  var grand = 0;
  var player1 = new Player(sub, grand);
  // var subTotal = new SubTotal();

// Player One Roll
  $("#p1-roll").last().click(function(){
  player1.roll();
  player1.getSub();
    console.log("in click"+ player1.subTotal);
    // var sub = player1.getSub();
    // subTotal.rollArray.push(rollResult);
    // console.log(subTotal.rollArray);
    // displaying roll correctly
    // var rollingSubTotal = subTotal.getSub();
    $("#p1-die-result").text("");
    $("#p1-die-result").text(player1.currentRoll);
    $("#p1-subTotal").text(player1.subTotal);
    // good stuff^^^
  });
// Player One Hold
  $("#p1-hold").last().click(function(){
    player1.getGrand();
    $("#p1-grand").text(player1.grand);
  });

});
