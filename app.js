const gameBoard=document.getElementById("game");
const userDisplay=document.createElement("h1");
const computerDisplay=document.createElement("h1");
const resultDisplay=document.createElement("h1");
const buttonContainer = document.createElement("div"); // Create a new <div> element
buttonContainer.id = "button-container";
gameBoard.append(userDisplay, computerDisplay, resultDisplay, buttonContainer); // Append the new <div> to the gameBoard
//gameBoard.append(userDisplay, computerDisplay, resultDisplay);

const choices=["rock", "paper", "scissors"];

let userChoice;
let computerChoice;

const handleClick=(e)=>{
    userChoice=e.target.id;
    userDisplay.innerHTML="User's Choice: " + userChoice;
    getComputerChoice();
    getResult();
}

for(let i=0;i<choices.length;i++){
    const button=document.createElement("button");
    button.id=choices[i];
    button.innerHTML=choices[i];
    button.addEventListener("click", handleClick);
    buttonContainer.appendChild(button);
}

const getComputerChoice=()=>{
    computerChoice=choices[Math.floor(Math.random()*choices.length)];
    computerDisplay.innerHTML="Computer's Choice: " + computerChoice;
}

const getResult=()=>{
    switch(userChoice+computerChoice){
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            resultDisplay.innerHTML="You are the winner!";
            break;

        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            resultDisplay.innerHTML="Computer is the winner!";
            break;

        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            resultDisplay.innerHTML="It is a tie!";
            break;   
    }

    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
}