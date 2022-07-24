var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;


function nextSequence()
{
    var userClickedPattern=[];
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(50).fadeIn(50);
    switch (randomChosenColour) {
        case "red":
            new Audio("sounds/red.mp3").play();
            break;
        case "blue":
            new Audio("sounds/blue.mp3").play();
            break;
        case "green":
            new Audio("sounds/green.mp3").play();
            break;
        case "yellow":
            new Audio("sounds/yellow.mp3").play();
            break;
    }
    $("h1").text("Level "+level);
    level++;

}
function playSound(name)
{
    $("#"+name).fadeOut(50).fadeIn(50);
    switch (name) {
        case "red":
            new Audio("sounds/red.mp3").play();
            break;
        case "blue":
            new Audio("sounds/blue.mp3").play();
            break;
        case "green":
            new Audio("sounds/green.mp3").play();
            break;
        case "yellow":
            new Audio("sounds/yellow.mp3").play();
            break;
    }
}

function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },50);
}

function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
       if(userClickedPattern.length===gamePattern.length)
       {
        userClickedPattern=[];
         setTimeout(function(){
            nextSequence();
         },1000);
       }
    }
    else
    {
        new Audio("sounds/wrong.mp3").play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver()
{
    level=0;
    gamePattern=[];
    userClickedPattern=[];
}


$(".btn").click(function(){
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

$(document).keydown(function(){
    if(level===0)
    {
        level++;
        $("h1").text("Level "+level);
        setTimeout(function(){
            nextSequence();
        },1000);
    }
});