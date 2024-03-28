#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer will guessing a rendum number - Done

// 2) user imput for guessin number - Done

// 3) Computer user input with computer genarated number and show result - Done

const rendumNumber = Math.floor(Math.random() * 10+1);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number btween 1-10:",
    },

]);
console.log(answers);

if(answers.userGuessedNumber === rendumNumber) {
    console.log("Congteatulation you guessed riht number");
    
} else {
    console.log("you guessed wrong number");
    
}
