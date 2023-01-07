//Guess the number
/*let number = ramndomly generated number
let chances = 0
keep asking number until correct number is guessed
increment the chances variable     
eventually after the game is over , display the 100 - number of chances and the actual number */

let number = Math.floor(Math.random()*100)+1 ;
// console.log(number)
let chances = 0;
let input;
do{
    input = prompt("Enter a number: ")
    input = Number.parseInt(input)
    if(input==number){
        console.log("Great! You guessed the correct number. ")
    }
    else if(input> number){
        console.log("Wrong! Please enter the smaller number.")
    }
    else if(input< number){
        console.log("Wrong! Please enter the larger number.")
    }
    chances += 1

}while(input != number)

console.log("The actual number is " + number)
console.log("Your score is", 100-chances)