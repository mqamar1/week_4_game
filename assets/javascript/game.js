//Gloabl variables
var yourNumber = "";
var crystalWins = 0;
var crystalLoss = 0;
var overNumber = "";
var totalNumber = 0;
var assignCrystals = [10, 5, 1, 2];




$(document).ready(function() {
  startgame();

});

  for (var i = 1; i < assignCrystals.length + 1; i++) {
    $("img").addClass("crystalImage");
  }

  $(document).on("click", ".crystalImage", function() {

    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    totalNumber += crystalValue;
    console.log(totalNumber);

    if (totalNumber === yourNumber) {
      alert("You Win!")
      crystalWins++;
      totalNumber = 0;
      startgame();
    }

    else if (totalNumber >= yourNumber) {
      alert("You lose!!");
      crystalLoss++;
      totalNumber = 0;
      startgame();
    }
    $("#currentTotal").text(totalNumber);
    $("#numWins").text(crystalWins);
    $("#numLoss").text(crystalLoss);
  });


  function startgame(){
    yourNumber = Math.floor((Math.random() * 99) + 1);
    $("#yourNum").text(yourNumber);

    var crys1 = assignCrystals[Math.floor((Math.random() * assignCrystals.length))]
    $("#crys1img").attr("value", crys1);

    var crys2 = assignCrystals[Math.floor((Math.random() * assignCrystals.length))]
    $("#crys2img").attr("value", crys2);

    var crys3 = assignCrystals[Math.floor((Math.random() * assignCrystals.length))]
    $("#crys3img").attr("value", crys3);

    var crys4 = assignCrystals[Math.floor((Math.random() * assignCrystals.length))]
    $("#crys4img").attr("value", crys4);
  }
