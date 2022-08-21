let playerTurn = 0

let playerWin = false

let mainText = document.getElementById("main-text")

let button = document.getElementById("button")

let padre = document.getElementById("grid")

let playerText = document.getElementById("player-text")

let slot = document.getElementsByClassName("grid-elements")

for (let i = 0; i < slot.length; i++){
    slot[i].addEventListener("click", function() {
        if (playerTurn == 0 && slot[i].classList.contains("available-elements")){
            if (i > 6){
                slot[i - 7].classList.add("available-elements")}
            slot[i].classList.remove("available-elements")
            slot[i].classList.add("red")
            this.style.background = "#ff0000"
            playerTurn = 1
            playerText.innerHTML = "PLAYERS TURN:<br>BLUE"
        }
        else if (playerTurn == 1 && slot[i].classList.contains("available-elements")){
            if (i > 6){
                slot[i - 7].classList.add("available-elements")}
            slot[i].classList.remove("available-elements")
            slot[i].classList.add("blue")
            this.style.background = "#0000ff"
            playerTurn = 0
            playerText.innerHTML = "PLAYERS TURN:<br>RED"
        }
        /* Validation Win */
        for (let j = 0; j < slot.length; j++){
            if (j < 39){
                /* Red horizontal win */
                if (slot[j].classList.contains("red") && slot[j + 1].classList.contains("red") && slot[j+2].classList.contains("red") && slot[j+3].classList.contains("red")){
                    console.log("red wins")
                    playerWin = true
                }
                /* Blue horizontal win */
                if (slot[j].classList.contains("blue") && slot[j + 1].classList.contains("blue") && slot[j+2].classList.contains("blue") && slot[j+3].classList.contains("blue")){
                    console.log("blue wins")
                    playerWin = true
                }
            }
            if (j < 21){
                /* Red vertical win */
                if (slot[j].classList.contains("red") && slot[j + 7].classList.contains("red") && slot[j + 14].classList.contains("red") && slot[j + 21].classList.contains("red")){
                    console.log("red wins")
                    playerWin = true
                }
                /* Blue vertical win */
                if (slot[j].classList.contains("blue") && slot[j + 7].classList.contains("blue") && slot[j + 14].classList.contains("blue") && slot[j + 21].classList.contains("blue")){
                    console.log("blue wins")
                    playerWin = true
                }
            }
/*          if (0 <= j <= 3 || 7 <= j <=10 || 14 <= j <= 17){  */
            if (j ==0 || j == 1 || j==2 || j==3 || j==7 || j==8 || j==9 || j==10 || j==14 || j==15 | j==16 | j==17){
                /* Red diagonal win */
                if (slot[j].classList.contains("red") && slot[j + 8].classList.contains("red") && slot[j + 16].classList.contains("red") && slot[j + 24].classList.contains("red")){
                    console.log("red wins")
                    playerWin = true
                }
                /* Blue diagonal win */
                if (slot[j].classList.contains("blue") && slot[j + 8].classList.contains("blue") && slot[j + 16].classList.contains("blue") && slot[j + 24].classList.contains("blue")){
                    console.log("blue wins")
                    playerWin = true
                }
            }
            if (j ==3 || j == 4 || j==5 || j==6 || j==10 || j==11 || j==12 || j==13 || j==17 || j==18 | j==19 | j==20){
                /* Red anti-diagonal win */
                if (slot[j].classList.contains("red") && slot[j + 6].classList.contains("red") && slot[j + 12].classList.contains("red") && slot[j + 18].classList.contains("red")){
                    console.log("red wins")
                    playerWin = true
                }
                /* Blue anti-diagonal win */
                if (slot[j].classList.contains("blue") && slot[j + 6].classList.contains("blue") && slot[j + 12].classList.contains("blue") && slot[j + 18].classList.contains("blue")){
                    console.log("blue wins")
                    playerWin = true
                }
            }

        }
        if (playerWin){
            for (let i = 0; i < slot.length; i++){
                slot[i].classList.remove("available-elements")
            }
            if (playerTurn == 1){
                mainText.innerHTML = "RED WINS<br>PRESS RESET TO PLAY AGAIN"
            } 
            else {
                mainText.innerHTML = "BLUE WINS<br>PRESS RESET TO PLAY AGAIN"
            }
        }
    })      
}

button.addEventListener("click", function() {
    playerWin = false
    playerTurn = 0
    playerText.innerHTML = "PLAYERS TURN:<br>RED"
    mainText.innerHTML = "CONNECT FOUR TO WIN"
    for (let i = 0; i < slot.length; i++){
        slot[i].style.background = "#ffffff"
        slot[i].classList.remove("available-elements", "red", "blue")
        if(i > 34){
            slot[i].classList.add("available-elements")
        }
    }
})

