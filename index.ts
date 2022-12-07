import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";


const first1 = ()=>{
    return new Promise((res)=>(
        setTimeout(res,2000)
    ))
}

async function calc() {
    let animatTitle=chalkAnimation.rainbow('Lets Start Creating Calculator with Animated Title');
    await first1();
    animatTitle.stop(); 
    console.log(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`)  
    console.log(chalk.yellow(` __  ___     ___      _  __     __                 _ ___   ___ __      _      ___ 
    ) ) )_ \  / )_  )   / ) )_)    )_) \_)   \  X  / /_)  (    )  ) )    /_) )    )  
   /_/ (__  \/ (__ (__ (_/ /      /__)  /     \/ \/ / / \__) _(_ /_/    / / (__ _(_ `))
}

await calc();


async function askQuestions() {

  let answers= await inquirer
    .prompt([
        {
            type: "list",
            name: "operator",
            message: "which operation do you want toperform?",
            choices: ["Addition","Substraction","Multiplication","Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "please enter first number"
        },
        {
            type: "number",
            name: "num2",
            message: "please enter second number"
        },

    ]);
    if(answers.operator=="Addition"){
        console.log(chalk.yellow(`${answers.num1}+${answers.num2}=${answers.num1 + answers.num2}`))
    }else 
    if(answers.operator=="Substraction"){
        console.log(chalk.yellow(`${answers.num1}-${answers.num2}=${answers.num1 - answers.num2}`))
    }else 
    if(answers.operator=="Multiplication"){
        console.log(chalk.yellow(`${answers.num1}*${answers.num2}=${answers.num1 * answers.num2}`))
    }else 
    if(answers.operator=="Division"){
        console.log(chalk.yellow(`${answers.num1}/${answers.num2}=${answers.num1 / answers.num2}`))
    }
    
};


async function askAgain() {
    do{
        await askQuestions();
        var again=await inquirer
        .prompt({
            type: "input",
            name:"restart",
            message: "Do you want to continue? Press y or n"
        })
    }while(again.restart==`y` || again.restart==`Y` || again.restart==`yes` || again.restart==`Yes`)
    
}
askAgain();