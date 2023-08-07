const squares=document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft= document.querySelector('#time-left')
const score = document.querySelector('#score')
let result  = 0
let hitPosition
let currentTime= 60
let timerId = null;
function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')  // element.classList.add adds a class name to an element & element.classList.remove
        // a classs name from an element

    })

    
    let randomSquare = squares[Math.floor(Math.random()* 9)]
    randomSquare.classList.add('mole')
    
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {  // difference in mousedown and click is click tbb activate hta h jbb hm button
        //press krke release krdete h lekin mousedown button press krte hi activate ho jata h
        if(square.id== hitPosition){
            result++;
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    
    timerId = setInterval(randomSquare,1000) // The setInterval() method calls a function at specified intervals (in milliseconds)
    //The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
    //myInterval = setInterval(function, milliseconds); clearInterval(myInterval);
}

moveMole()

function countDown() {
currentTime--
timeLeft.textContent = currentTime

if(currentTime == 0){
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! your score is ' + result)
}
}

let countDownTimerId = setInterval(countDown,1000)
