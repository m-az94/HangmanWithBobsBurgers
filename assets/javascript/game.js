// Javascript for Word Guess Game

// DECLARE VARIABLE
    var secretWord =["p","e","s","t", "o"]; 
    var displayWord = ["_ ", "_ ", "_ ","_ ","_ "] ; // display/placeholder  array 
    var inputtedLetters=[];
    var score = 0;
    var wrongAnswer=0;
    counter=0;

    //---------------------------------------------------------ENTERING VARIABLES INTO HTML CODE
    window.addEventListener("keypress", function(event){
        counter++

        if (score==5){
            alert("CONGRATS! You won!");
        }
        else if (counter<21){
            var input=event.key.toLowerCase();
            var checkLetter = secretWord.indexOf(input);
            var checkRepeat = inputtedLetters.indexOf(input); 
            inputtedLetters.push(input);
            
                if (checkLetter!==-1 && checkRepeat===-1){
                    displayWord[checkLetter]=input;
                    score++;
                }
                else{
                    alert("try another key");
                }

            }
            else{
                alert ("Game Over! Restart to Play Again!")
            }
                var hidWord = document.getElementById("hiddenWord");
                hidWord.textContent=displayWord;

                var guess = document.getElementById("guess");
                guess.textContent=inputtedLetters;

                var gamescore = document.getElementById("score");
                gamescore.textContent=score;
        
    });

 