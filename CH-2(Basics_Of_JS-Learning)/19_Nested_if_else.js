//! nested if else

//* Number guessing game Rules 
// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumer=19;
let userGuess=+prompt("Guess a number");//! Prompt function takes input in string form
console.log(typeof(userGuess),userGuess);


if(userGuess===winningNumer){
    console.log("your guess is right!!");
}
else{
    if(userGuess<winningNumer){
        console.log("too low!!");
    }
    else{
        console.log("too high");
    }
}


