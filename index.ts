//Number Guessing Game in typescript
import inquirer from "inquirer";

type ansType = {
    userGuess: number
}

const systemGeneratedNo = Math.floor(Math.random()*10);

const answers :ansType = await inquirer.prompt([
    {
        type:"number",
        name:"userGuess",
        message:"Write your guess b/w 1 o 10:"
    }
])

const {userGuess} =  answers;
if(userGuess === systemGeneratedNo){
    console.log(userGuess,"userGuess", systemGeneratedNo, 'Sys')
    console.log("Yeaaa your answer is correct \n You Win!")
}else{
    console.log("Please try again Better Luck next time")
}