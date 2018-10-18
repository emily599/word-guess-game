// Word List
var selectableWords = [
    "zelda",
    "goron",
    "hyrule",
    "saria",
    "link",
    "ganondorf",
    "zora",
    "kakoriko",
    "midna",
    "mipha",
    "gerudo",
];

const maxTries = 10;            // Maximum number of tries player has
var guessedLetters = [];        // Stores the letters the user guessed
var randomWord;                  // Index of the current word in the array
var guessingWord = [];          // This will be the word we actually build to match the current word
var remainingGuesses = 0;       // How many tries the player has left
var gameStarted = false;        // Flag to tell if the game has started
var hasFinished = false;        // Flag for 'press any key to try again'     
var wins = 0;                   // How many wins has the player racked up


// 3. Make variable(var letterPress) that stores letter pressed
// 4. Make a for loop to iterate through each letter of the word
// 5. Use that var letterPress and compare that to letters in word
//     -if letter exists in word, put correct letter in the word on html,
//         -else letter does not exist in word, show "Wrong!" on the screen, put letter under "Wrong Letters guessed"
// 6. after each letter pressed, subtract 1 from total 10 guesses

// 1. Make onkeyup function
// document.onkeydown = function (event) {
// console.log(event.key);

// }




// When a key is pressed, the key is logged and shown on the page
$("html").on("keydown", function (event) {
    console.log(event.key);
    guessedLetters.push(event.key);
    keyPress(event.key);
})


// randomizes words in selectableWords array
var randomWord = selectableWords[Math.floor(Math.random() * selectableWords.length)];


// shows underscores of letters for random word
var underscoreArray = [];
for (i = 0; i < randomWord.length; i++) {
    underscoreArray.push("_ ");
}
$("#word").html(underscoreArray);


function removeElement(guessedLetters, i) {
    for (i = 0; i < array.length - 1; i++) {
        if (array[i]) === remove
    }
}

// comparing selected key to chosen word
function keyPress(key) {
    for (i = 0; i < randomWord.length; i++) {
        if (randomWord.charAt(i) === key) {
            console.log(key);
            underscoreArray[i] = key;
            $("#word").html(underscoreArray);

        }
    }
    $("#lettersGuessed").html(guessedLetters);
}





// show how many lives left
comments = function () {
    remainingGuesses.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
        showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
            showLives.innerHTML = "You Win!";
        }
    }
}
// 7. Repeat for loop until word is complete
// 8. randomly choose another word in Array




