let randomnumber =parseInt(( Math.random()*100 +1))
const submit = document.querySelector("#submit")
const userinput = document.querySelector("#guess")
const guessslot = document.querySelector(".Guesses")
const remaining = document.querySelector(".lastresult")
const highlowval = document.querySelector("#highlowval")
const startover = document.querySelector("#div2")

const p = document.createElement("p")

let prevguess = [];
let numofGuesses = 1

let playgames = true

if(playgames){
    submit.addEventListener("click",(e)=>{
         e.preventDefault()
         const guess = parseInt(userinput.value)
         console.log(guess);
         validateguess(guess)


    })
}

function validateguess(guess){
       if(isNaN(guess)){
        alert("Please Enter a Valid number")
    } else if(guess<1){
        alert("Please Enter a Valid number")

    }else if(guess>100){
        alert("Please Enter a Valid number")
    }else {
        prevguess.push(guess)
        if(numofGuesses === 11){
         displayGuess(guess)
         displaymessage(`game over. Random number was ${randomnumber}`)
         endgame()
        }else{
            displayGuess(guess)
            checkguess(guess)
        }
    }

}

function checkguess(guess){
    if(guess === randomnumber){
        displaymessage("you guessed it right")
        endgame();

    }else if(guess<randomnumber){
        displaymessage("Number is two low")
    }else if(guess>randomnumber){
        displaymessage("Number is two High")

    }

}

function displayGuess(guess){
    userinput.value = ""
    guessslot.innerHTML += `${guess} , `
    numofGuesses++;
    remaining.innerHTML = `${11-numofGuesses}`
}

function displaymessage(message){
    highlowval.innerHTML =`<h2>${message}</h2>`
}

function endgame(){
    userinput.value  = ""
    userinput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newgame">Start new game</h2>`
    startover.appendChild(p)
    playgames = false; 
    newgame()  
}  

function newgame(){
    const newgamebutton = document.querySelector(`#newgame`) 
    newgamebutton.addEventListener("click",(e)=>{
        randomnumber = parseInt((Math.random()*100 +1));
        prevguess = []
        numofGuesses  =1
        guessslot.innerHTML = ""
        remaining.innerHTML = `${11-numofGuesses}`
        userinput.removeAttribute("disabled")
        startover.removeChild(p)
        
    playgames =  true
    })
}




