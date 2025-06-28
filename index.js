const guessInput = document.querySelector(".guess-inp");
const guessForm = document.querySelector(".guess-form");
let attemptCount = 0;
let correctAnswer = Math.floor(Math.random() * 100);


// main guess
let valid = true;

function startGuess(num, cor) {
    attemptCount++;
    console.log(attemptCount)
    const spanEl = document.querySelector(`.span-${attemptCount}`);
    
    let dif;

    if ((attemptCount <= 10) && valid) {
        const list = spanEl.parentElement;
        if (num - cor >= 0) {
            dif = num - cor;
        } else {
            dif = cor - num;
        }

        if(Number(guessInput.value) > 100 || Number(guessInput.value) < 0){
            alert("Please, Enter numbers between 0 and 100!");
        }

        if (dif >= 40) {
            spanEl.innerHTML = "+"
            spanEl.style.transform = "rotate(45deg)";
            list.style.background = "red"
        } else if (dif >= 25) {
            spanEl.innerHTML = "+"
            spanEl.style.transform = "rotate(45deg)";
            list.style.background = "#CC3300"
        } else if (dif >= 15) {
            spanEl.innerHTML = "+"
            spanEl.style.transform = "rotate(45deg)";
            list.style.background = "#996600"
        } else if (dif >= 5) {
            spanEl.innerHTML = "+"
            spanEl.style.transform = "rotate(45deg)";
            list.style.background = "#669900"
        } else if (dif >= 1) {
            spanEl.innerHTML = "+"
            spanEl.style.transform = "rotate(45deg)";
            list.style.background = "#33CC00"
        } else if (dif == 0) {
            spanEl.innerHTML = "✔";
            spanEl.style.fontSize = "30px"
            spanEl.style.transform = "rotate(0deg)";
            list.style.background = "green";
            informDisplay("Congratulation, You won!", "#33CC00");
            valid = false;
        }
    }
    if((attemptCount >= 10) && valid){
        informDisplay("Unfortunately, You lost!", "red");
        valid = false;
    }

}

guessForm.addEventListener("submit", function () {
    event.preventDefault();
    startGuess(Number(guessInput.value), correctAnswer);
    guessInput.value = "";
})
// main guess

// instruction bar

const menuBar = document.querySelector(".menu-bar")
let menuVisible = false;

function menuDisplay(){
    if(!menuVisible){
        menuBar.style.display = "flex";
        menuVisible = true;
    }else{
        menuBar.style.display = "none";
        menuVisible = false;
    }
}

// instruction bar

// inform box

const informBox = document.querySelector(".inform-box");

function informDisplay(text, color){
    const informText = document.querySelector(".inform-text");
    informText.textContent = text;
    informText.style.color = color;

    informBox.style.display = "flex"
}

// inform box

// restart function

function restartEverything(){

    informBox.style.display = "none"
    valid = true;
    attemptCount = 0;
    correctAnswer = Math.floor(Math.random() * 100);
    
    for(let i = 1; i < 11; i++){
        const spanAll = document.querySelector(`.span-${i}`);
        const listAll = spanAll.parentElement;
        spanAll.innerHTML = "";
        listAll.style.background = "transparent";
    }
}
document.addEventListener("keydown", function(event){
    if(event.key == "r" || event.key == "R"){
        event.preventDefault;
        restartEverything()
    }
})
// restart function
