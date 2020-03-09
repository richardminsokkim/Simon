
var buttonColours = ["red", "blue", "green", "yellow"]
var userClickedPattern = [];


var level = 0;
var gamepattern = [];
var start = 0;
$(document).keypress(function(event){

        if(start === 0){
        $("#level-title").text("Level " + level)
        nextSequence();


        start++;
      }
      });


function nextSequence(){
  var randNum = Math.floor(Math.random()*4);

  var randomChosenColour = buttonColours[randNum];

  gamepattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  level++;

  $("#level-title").text("Level " + level);
};

$( ".btn" ).click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length);
});

function playSound(name){
  switch (name){

    case "red":
      var red = new Audio('sounds/red.mp3');
      red.play();
      break;
    case "yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;
    case "blue":
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
      break;
    case "green":
      var green = new Audio('sounds/green.mp3');
      green.play();
      break;
    case "wrong":
      var green = new Audio('sounds/wrong.mp3');
      green.play();
      break;
      default:
        console.log("#" + name);
}
};

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(usrArray){
  var lv = (usrArray - 1);
  if(userClickedPattern[lv] === gamepattern[lv]){

    if(userClickedPattern.length === gamepattern.length){
      for (var i = 0; i < gamepattern.length; i++){
        if(userClickedPattern[i] === gamepattern[i]){
          var same = true;
        }
        else{
          var same = false;
        }

      }
      if(same){
        setTimeout(function() { nextSequence(); }, 1000);
        userClickedPattern = [];
      }else{
        console.log("waiting");
      }
    }else{
      console.log("waiting1")
    }
  }else{
    playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over")
      }, 100);
      $("#level-title").text("Game Over, Press Any Key to Restart");

      console.log("wrong");
    startOver();
  }
}

if (userClickedPattern === gamepattern){
  alert("hello")
}

function startOver(){
  level = 0;
  gamepattern = [];
  start = 0;
  userClickedPattern = [];
}

// function checkAnswer() {
//   index = gamepattern.length
// for (var i = 0; i < gamepattern.length; i++){
//   if(userClickedPattern[i] === gamepattern[i]){
//     var same = true
//   }
//   else{
//     var same = false
//   }
// }
//   // if(gamepattern[index] === userClickedPattern[index]){
//   //   setTimeout(function() { nextSequence(); }, 1000);
//   // }else{
//   //   console.log("wrong");
//   // }
//
// }
