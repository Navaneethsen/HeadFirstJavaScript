/**
 * Created by Navaneeth Sen on 2015/06/20.
 */


function getUserChoice()
{
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    while(!validateChoice(userChoice))
    {
        userChoice = prompt("Do you choose rock, paper or scissors?");
    }

    return userChoice;
}

var validateChoice = function(userChoice)
{
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors")
    {
        return true;
    }
    else
    {
        return false;
    }
};


function getComputerChoice()
{
    var computerChoiceNum = Math.random();
    var computerChoice;

    if (computerChoiceNum < 0.34)
    {
        computerChoice = "rock";
    }
    else if(computerChoiceNum <= 0.67)
    {
        computerChoice = "paper";
    }
    else
    {
        computerChoice = "scissors";
    }
    return computerChoice;
}

var compare = function (choice1, choice2)
{
    if (choice1 === choice2)
    {
        return "The result is a tie!";
    }
    else if (choice1 === "rock")
    {
        if (choice2 === "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";
        }
    }
    else if (choice1 === "paper")
    {
        if (choice2 === "scissors")
        {
            return "scissors wins";
        }
        else
        {
            return "paper wins";
        }
    }
    else if (choice1 === "scissors")
    {
        if (choice2 === "paper")
        {
            return "scissors wins";
        }
        else
        {
            return "rock wins";
        }
    }
};

var userChoice;
var computerChoice;
var ret;

function playGame()
{
    userChoice = getUserChoice();
    computerChoice = getComputerChoice();
    console.log("User: " + userChoice);
    console.log("Computer: " + computerChoice);
    ret = compare(userChoice, computerChoice);
    console.log(ret);
}

playGame();
while (ret == "The result is a tie!")
{
    playGame();
}
