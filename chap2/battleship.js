var position1;
var position2;
var position3;

var guess;

var numOfGuesses = 0;
var numOfHits = 0;

var isSunk = false;

//setup the game
position1 = random(0, 7);

if (position1 > 5)
{
    position1 = 5;
}

position2 = position1 + 1;
position3 = position2 + 1;

var random = function (min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(position1);
console.log(position2);
console.log(position3);

//Start the game

while(!isSunk)
{
    guess = prompt("Enter the number between 0-7 ");
    if (guess < 0 || guess > 7)
    {
        alert("Please enter a valid number !!");
    }
    else
    {
        numOfGuesses++;
        if (guess >= position1 && guess <= position3)
        {
            numOfHits++;
            alert("HIT");
            if (numOfHits == 3)
            {
                isSunk = true;
                numOfHits = 0;
                alert("You sank my battle Ship");
            }
        }
        else
        {
            alert("MISS");
        }
    }
}
var shipLoc = position1.toString() + ", " + position2.toString() + ", " + position3.toString();

var stats = "You took " + numOfGuesses + " guesses to sink the battleship, which means your shooting accuracy was " + (3/numOfGuesses);
alert(shipLoc + " - " + stats);