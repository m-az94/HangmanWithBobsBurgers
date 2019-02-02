# word-guess-game
Word guess game

 Assignment
1 - Create an Algorithm
2 - Create a plan that solves a problem
    Problem? Guess the letter

1: create a list of defined letters that can be guessed
2: define variable that defines total number of guesses
3: pick a random letter from the list
4: store the random letter into the variable
5: have user enter a key
6: listen to a key event
7: check if key pressed matches random letter
8: increase score by 1
9: else {decease total number of guesses by one }
10: if total number of guesses = 0
11: then score = score-1
12: reset guesses to be total number of guesses
13: choose another random letter
14: repeat game again



Algorithm: 

- 0: Game Length Counter                            while (i<6){

# getLetter()
- 1: Prompt User for Key                             window.addEventListener("keypress", function(event));
- 2: Store Key.                                      inputLetter=event.key;
- 3: Convert String to Lowercase                     inputCase = inputLetter.toLowerCase();

# compareLetter()
- 4: Compare inputLetter to secretWord               checkLetter = secretWord.IndexOf(inputCase);
- 5: If checkLetter !== -1,                          displayWord[checkLetter]=inputCase; return displayWord; s++;
- 6: Else                                            wrongLetter.push[inputCase]; return wrongLetter;i++;


//NEW
var i=0; //Counter
var score=0 //score 
var secretWord =["w", "a", "r", "f", "a","r","t","s"]; // 
var displayWord = ["_ ", "_ ", "_ ","_ ","a","r", "_ ","_ "] ; // display/placeholder  array 
var wrongGuesses = [" "]; // array containing wrong letters 
var input;
var wrongAnswer=0;

while (i<6) {


// 1: GET KEY
// in html, instruct the player to hit enter to play
window.addEventListener("keypress", function(event){
var input= event.key.toLowerCase();
var checkLetter = secretWord.indexOf(input); 
//console.log(input + ": " + checkLetter);

if (checkLetter!==-1){
    displayWord[checkLetter]=input;
    score++;
   // console.log(displayWord +" "+score);
}
else {
    wrongGuesses.push(input);
    wrongAnswer++;
   // console.log("wrong guess is "+wrongGuesses+ " wrong answer is " + wrongAnswer);
}

console.log("input: "+ input + " checkLetter: "+ checkLetter + " DisplayWord: "+ displayWord + " score: "+ score + " counter: "+wrongAnswer);

});
}