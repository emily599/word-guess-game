// Word List
var selectableWords;
var randomWord;
var underscoreArray;


var zeldaJSON = fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/games/zelda.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        selectableWords = data["games"]["The Legend of Zelda"]["characters"];
        randomWord = selectableWords[Math.floor(Math.random() * selectableWords.length)];
        // shows underscores of letters for random word
        underscoreArray = []; //correctly guessed letters
        for (i = 0; i < randomWord.length; i++) {
            underscoreArray.push("_ ");
        }
        $("#word").html(underscoreArray);
    })
    .catch(error => {
        console.log(error);
        selectableWords = [
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
    });
var incorrectlyGuessedLetters = []; //incorrect guesses
var maxTries = 10;            // Maximum number of tries player has
var guessedLetters = [];        // Stores the letters the user guessed
var randomWord;                  // Index of the current word in the array
// var guessingWord = [];          // This will be the word we actually build to match the current word
//var remainingGuesses = 0;       // How many tries the player has left
var gameStarted = false;        // Flag to tell if the game has started
var hasFinished = false;        // Flag for 'press any key to try again'     
var wins = 0;                   // How many wins has the player racked up
var losses = 0;
var correctLetters = [];

// randomizes words in selectableWords array









// When a key is pressed, the key is logged and shown on the page (if above 0)
$("html").on("keydown", function (event) {
    console.log(event.key);
    if (isEligible(maxTries)) {
        keyPress(event.key);

        if ((underscoreArray.join("")) === randomWord) {
            wins++;
            $("#wins").html(wins);
            setTimeout(function () { alert("You won"); clear(); }, 500);

        }
    } else if (!isEligible(maxTries)) {
        alert("You lost");
        clear();
        losses++;
        $("#losses").html(losses);
    }


})

function clear() {
    $("#lettersGuessed").empty();
    correctLetters = [];
    incorrectlyGuessedLetters = [];
    guessedLetters = [];
    maxTries = 10;
    $("#guessesLeft").html(maxTries);
    randomWord = selectableWords[Math.floor(Math.random() * selectableWords.length)];
    underscoreArray = [];
    for (i = 0; i < randomWord.length; i++) {
        underscoreArray.push("_ ");
    }
    $("#word").html(underscoreArray);

}

// comparing selected key to chosen word
function keyPress(key) {
    if (randomWord.includes(key)) {
        console.log(key);
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === key) {
                console.log(key);
                underscoreArray[i] = key;
                if (!correctLetters.includes(key)) {
                    correctLetters.push(key);
                }
            }
        }
    } else if (!incorrectlyGuessedLetters.includes(key)) {
        incorrectlyGuessedLetters.push(key);
        maxTries--;
    }
    $("#word").html(underscoreArray);
    $("#lettersGuessed").html(incorrectlyGuessedLetters);
    $("#guessesLeft").html(maxTries);

}

// if number of guesses hits 0, use may no longer guess letters
function isEligible(maxTries) {
    if (maxTries > 1) {
        return true;
    }
    else if (maxTries <= 0) {
        return false;
    }
}
















