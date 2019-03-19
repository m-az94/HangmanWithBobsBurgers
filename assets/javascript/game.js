// JAVASCRIPT CODE FOR WORDGUESS GAME

//---- VARIABLE -----

//letter options
var wordList = ["pesto", "tina", "lousie", "gene", "bob", "linda", "jimmy", "zeke", "tammy", "mort", "jocelyn", "marshmallow"];
var secretWord="";
var secretWordLetters=[];
var numOfBlanks = 0;
var displayWord = [] ; // display/placeholder  array 
var wrongGuesses=[];
var letterGuessed="";

//Score Counters 
var wins=0;
var losses=0;
var numOfGuesses=secretWord.length+3;


// ---- FUNCTIONS -----

// The Following Functions starts/restarts the game
function gameStart(){

    //randomly selecting secretWord
    secretWord=wordList[Math.floor(Math.random()*wordList.length)];
    console.log(secretWord);

    // setting the following variables so it refreshed during new game
    numOfGuesses=secretWord.length+3;
    displayWord=[];
    wrongGuesses=[];

    // breaking the secretWord into individual letters
    secretWordLetters=secretWord.split("");

    // setting NumOfBlanks 
    numOfBlanks=secretWord.length;

    // adding the correct number of _ to display on placeholder
    for (var i=0; i<numOfBlanks; i++){
        displayWord.push("_");
    }

    // Print the following on to the HTML Page
    var hiddenWord = document.getElementById("hiddenWord");
    hiddenWord.innerHTML=displayWord;

    var guessesLeft = document.getElementById("guessesLeft");
    guessesLeft.innerHTML=numOfGuesses;

    var guess = document.getElementById("guess");
    guess.innerHTML=wrongGuesses;

}

// The following function is used to compare guesses with the letters provided
// it's the logic behind the game
function gameLogic(letter){

    // we assume that letter is not in word
    var checkedLetter=false;

    //for every letter in the secretWord, if letter is secretWord[i], checkedLetter is true
    for (var i=0; i<numOfBlanks; i++){
        if (secretWord[i]===letter){
            checkedLetter=true;
        }
    }

    //if check letter is true, for every letter in SecretWord, if SecretWord is Letter, add the letter to displayWord at that position
    if(checkedLetter){
        for (var j=0; j<numOfBlanks; j++){
            if (secretWord[j]===letter){
                displayWord[j]=letter;
            }
        }
    }
    //else, push the letter to wrong guesses array and take away a guess
    else{
        wrongGuesses.push(letter);
        numOfGuesses--;
    }
}

// the following function uses decides on a result based on the events taken place in gameLogic()
function gameConclusion(){
    
    // the following is being updated onto the HTML page
    var hiddenWord = document.getElementById("hiddenWord");
    hiddenWord.innerHTML=displayWord;

    var guessesLeft = document.getElementById("guessesLeft");
    guessesLeft.innerHTML=numOfGuesses;

    var guess = document.getElementById("guess");
    guess.innerHTML=wrongGuesses;

    // if we guess all the letters right, the following code will occur
    if (secretWordLetters.toString()===displayWord.toString()){
        wins++;
        var win = document.getElementById("wins");
        win.innerHTML=wins;
        alert("Congrats! You Won!");
        gameStart();
    }
    else if (numOfGuesses===0){
        losses--;
        var lose=document.getElementById("losses");
        lose.innerHTML=losses;
        alert("You Lose! Better luck next time");
        gameStart();
    }

}

//---- GAME PLAY -------

gameStart();

window.addEventListener("keypress", function(event){
    
    var input=event.key.toLowerCase();
    gameLogic(input);
    gameConclusion();
           
        
        
 });

 