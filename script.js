/* Make bubbles:
   - make a function and add for loop for making bubbles
   - use math.floor and math.random for give random numbers to bubbles 
*/
function makeBubbles() {
    let numbers = "";
for (let bubble = 1; bubble <= 144; bubble++) {
    let numGen = Math.floor(Math.random()*10)
    numbers += `<div class="bubble">${numGen}</div>`;
}
document.querySelector("#cBtm").innerHTML = numbers;
}

/* Time Countdwon:
   - make a function 
   - store setInterval and function in variable and in function store if-else
*/ 
let timer = 60;
function timeCount() {
    let time = setInterval ( function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerElem .box").textContent = timer;
        } else {
            clearInterval(timer)
            document.querySelector("#cBtm").innerHTML = `<h1>Game Over</h1><p>Your Final Score: ${score}</p>`;
            cBtm.classList.add("gameOver");
            document.querySelector("#cBtm").innerHTML= gameOverMsg;
        }
    },1000)
}

/* Hit number:
   - create fucntion for hitNumber
   - In math.floor we make math.random * 10 for genrate random number
   - use querySelector for display random number in hit with html 
*/
let randomNumber;
function hitNumber() {
    randomNumber = Math.floor(Math.random()* 10);
    document.querySelector("#hitElem .box").textContent = randomNumber;
}

/* Increze Score:
   - we use score += for add 10 points on every right click number 
   - querySelector for display this socre in html
*/
let score = 0
function scoreIncrise() {
    score += 10;
    document.querySelector("#scoreElem .box").textContent = score;
}


/* Bubbles Click
   - use querySelector for select "#cBtm" and addEventListener for add "click" and make function
   - make a variable and convert string into the numbers target textcontent
   - if-else for cross check clicked numbers and random number both are same, if same run "scoreIncrise",      "makeBubbles", hitNumber
   - else give alert msg if wrong number selected 
*/
document.querySelector("#cBtm").addEventListener("click" , function (a) {
    let clickedNum = Number(a.target.textContent);
    if (clickedNum === randomNumber) {
        scoreIncrise();
        makeBubbles();
        hitNumber();
    }else{
        alert("Wrong Number selected")
    }
})




timeCount();
makeBubbles();
hitNumber();
