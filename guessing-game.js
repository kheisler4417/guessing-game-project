const readline = require("readline"); //construct the readline

const rl = readline.createInterface({ //create the interface
    input: process.stdin,
    output: process.stdout
});
//equivalant:::
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

let secretNumber = 7;

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
