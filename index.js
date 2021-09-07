var readlineSync = require('readline-sync');
const chalk = require('chalk');
const { performance } = require('perf_hooks');

var score = 0;

const questions = [
    {
        question: "What street do Holmes and Watson live on? ",
        answer: "Baker Street"
    },
    {
        question: "What is Watson's official job? ",
        answer: "doctor"
    },
    {
        question: "What is the name of Holmes' landlord? ",
        answer: "Mrs Hudson"
    },
    {
        question: "What is the name of Holmes' older brother? ",
        answer: "Mycroft"
    },
    {
        question: "What is the name of Sherlock Holmes' arch enemy? ",
        answer: "Morairty"
    },
    {
        question: "What is the name of Holmes' sister? ",
        answer: "Eurus"
    },
    {
        question: "Where does Holmes store his tobacco? ",
        answer: "socks"
    },
    {
        question: "Who were the four in 'The Sign of the Four?' ",
        answer: "convicts"
    },
    {
        question: "Who are the Baker Street Irregulars? ",
        answer: "street urchins"
    }

];

const highscores = [
    {
        name: "Rashi",
        score: 8
    },
    {
        name: "Mohini",
        score: 6
    },
    {
        name: "Divya",
        score: 5
    }
];


function mainDriver() {
    var userName = readlineSync.question("What's your name? ");

    console.log(chalk.yellow("\nHello " + userName + "!") + " Welcome to HOW WELL DO YOU KNOW SHERLOCK HOLMES :)\n");

    console.log(chalk.bold.yellow("There are 3 levels\n") +
        chalk.italic("Each having 3 questions, if you get 2 right then only you move forward\n"));

    var ready = readlineSync.keyInYN("Are you ready?");

    if (ready) {
        console.log(chalk.bold.bgRed("\nLevel 1"));
        quiz(0, 2);
        if (score >= 2) {
            console.log(chalk.green("Congratulations on making it to the second level!"))
            console.log(chalk.bold.bgRed("\nLevel 2"));
            quiz(3, 5);
            if (score >= 4) {
                console.log(chalk.green("Seems like you know Sherlock really well..."))
                console.log(chalk.bold.bgRed("\nLevel 3"));
                quiz(6, 8);
            }
            else {
                console.log(chalk.red("Oops you're out, thanks for playing!"))
            }
        }
        else {
            console.log(chalk.red("Oops you're out, thanks for playing!"))
        }

    }

    console.log("\nYaay! You scored: " + chalk.green(score));

    showHighScores();
}


function play(question, answer) {

    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green("Correct!"));
        score++;
    }
    else
        console.log(chalk.red("Wrong :( \n") + "It's " + chalk.green(answer));

    console.log("Current score is ", score);
    console.log("-----------------------")

}


function quiz(start, end) {

    for (let i = start; i <= end; i++) {
        play(questions[i].question, questions[i].answer);
    }

}

function showHighScores() {
    for (let i = 0; i < highscores.length; i++) {
        if (!(score < highscores[i].score)) {
            console.log(chalk.bgBlue("\nCongratulations! You are a high scorer!\n") + chalk.italic("(DM me the screenshot of your score, I'll add you to the high scorers' list.)"));
            break;
        }
    }

    console.log(chalk.bgMagenta("\nCheck out the high scores"));

    for (let i = 0; i < highscores.length; i++) {
        console.log(highscores[i].name + ": " + chalk.bold.blue(highscores[i].score));
    }
}

mainDriver();