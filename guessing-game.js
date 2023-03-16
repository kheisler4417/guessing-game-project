// const readline = require("readline"); //construct the readline

// const rl = readline.createInterface({ //create the interface
//     input: process.stdin,
//     output: process.stdout
// });
//equivalant:::
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const readline = require('readline');

// function guessNumber() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.question('Enter a max number: ', (maxNumber) => {
//         rl.question('Enter a min number: ', (minNumber) => {
//             const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + parseInt(minNumber);
//             console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}...`);

//             let numTries = 0;

//             const getGuess = () => {
//                 rl.question('Enter a guess: ', (guess) => {
//                     guess = parseInt(guess);
//                     if (guess === secretNumber) {
//                         console.log(`Correct! It took you ${numTries} tries.`);
//                         console.log('YOU WON.');
//                         rl.close();
//                     } else if (guess < secretNumber) {
//                         console.log('Too low.');
//                         numTries++;
//                         getGuess();
//                     } else {
//                         console.log('Too high.');
//                         numTries++;
//                         getGuess();
//                     }
//                 });
//             };

//             getGuess();
//         });
//     });
// }

// guessNumber();

const readline = require('readline');

function guessNumber() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function getSecretNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function displayMessage(message) {
        console.log(message);
    }

    function getGuess(numTries, secretNumber) {
        rl.question('Enter a guess: ', (guess) => {
            guess = parseInt(guess);
            if (guess === secretNumber) {
                console.log(`Correct! It took you ${numTries} tries.`);
                console.log('YOU WON.');
                rl.close();
            } else if (guess < secretNumber) {
                displayMessage('Too low.');
                numTries++;
                getGuess(numTries, secretNumber);
            } else {
                displayMessage('Too high.');
                numTries++;
                getGuess(numTries, secretNumber);
            }
        });
    }

    rl.question('Enter a max number: ', (maxNumber) => {
        rl.question('Enter a min number: ', (minNumber) => {
            const secretNumber = getSecretNumber(parseInt(minNumber), parseInt(maxNumber));
            displayMessage(`I'm thinking of a number between ${minNumber} and ${maxNumber}...`);

            let numTries = 0;
            getGuess(numTries, secretNumber);
        });
    });
}

guessNumber();


// this only works in the browser:
// function guessNumber() {
//     const maxNumber = parseInt(prompt("Enter a max number: "));
//     const minNumber = parseInt(prompt("Enter a min number: "));
//     const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
//     console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}...`);

//     let guess = parseInt(prompt("Enter a guess: "));
//     let numTries = 1;

//     while (guess !== secretNumber) {
//         if (guess < secretNumber) {
//             guess = parseInt(prompt("Too low. Enter a guess: "));
//         } else {
//             guess = parseInt(prompt("Too high. Enter a guess: "));
//         }
//         numTries++;
//     }

//     console.log(`Correct! It took you ${numTries} tries.`);
//     console.log("YOU WON.");
// }

// guessNumber();


// function checkGuess(guess) {
//     if (guess > secretNumber) {
//         console.log('Too high.');
//         return false;
//     } else if (guess < secretNumber) {
//         console.log('Too low.');
//         return false;
//     } else {
//         console.log('Correct!');
//         return true;
//     }
// }


// function askGuess() {
//     readline.question('Enter a guess: ', guess => {
//         checkGuess(Number(guess));
//         readline.close();
//     });
// }



                            // const readline = require("readline"); //construct the readline

                            // const rl = readline.createInterface({ //create the interface
                            //     input: process.stdin,
                            //     output: process.stdout
                            // });

// rl.question("What's up, doc? ", handleResponseOne);

// function handleResponseOne(firstAnswer) {
//     console.log(firstAnswer + " is up.");
//     rl.question("What's down, clown? ", handleResponseTwo);
// }

// function handleResponseTwo(secondAnswer) {
//     console.log(secondAnswer + " is down.");
//     rl.question("What's left, Jeff? ", handleResponseThree);
// }

// function handleResponseThree(thirdAnswer) {
//     console.log(thirdAnswer + " is left.");
//     rl.close();
// }
