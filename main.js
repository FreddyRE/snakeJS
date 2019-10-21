let heightDisplay = window.innerHeight
let widthDisplay = window.innerWidth
const gridSize = 30
let elementFood = document.getElementById("food")
let elementSnake = document.getElementById("snake")
let numberOfGrids = Math.floor(widthDisplay / gridSize) - 1
let numberOfGridsRows = Math.floor(heightDisplay / gridSize) - 2
let runningInX = true
let posSnake = {
    1: {
        posx: 3,
        posy: 5
    }
}

document.addEventListener("keydown", checkKeyPressed)

setGrid()
setFood()
createNewSnake()
loopForRun("x+")

function setGrid() {

    for (let j = 0; j < numberOfGridsRows; j++) {
        let newRow = document.createElement("div")
        newRow.className = "row"
        for (let i = 0; i < numberOfGrids; i++) {
            let newCubeForGrid = document.createElement("div")
            newCubeForGrid.className = "grid-cube"
            newRow.appendChild(newCubeForGrid)
        }
        document.body.appendChild(newRow)
    }
}

function setFood() {
    posXRand = Math.floor(Math.random() * numberOfGrids) + 1
    posYRand = Math.floor(Math.random() * numberOfGridsRows) + 1

    let rowSelected = document.querySelectorAll(".row")[posYRand - 1]
    let colSelected = rowSelected.childNodes[posXRand - 1]
    colSelected.style.backgroundColor = "red"
}

function createNewSnake() {
    let initialPosX = posSnake["1"].posx
    let initialPosY = posSnake["1"].posy

    let snakeX = document.querySelectorAll(".row")[initialPosY]
    let snakeY = snakeX.childNodes[initialPosX]
    snakeY.style.backgroundColor = "black"
}



function loopForRun(dir) {
    switch (dir) {
        case "x+":

            break
    }
    setTimeout(() => {
        paintNewPosition(dir)
    }, 1000)
}

function paintNewPosition(dir) {
    cleanExtraSnake()
    if(runningInX) {
        posSnake["1"].posx += 1
    } else {
        posSnake["1"].posy += 1 
    }
    let snakeRow = document.querySelectorAll(".row")[posSnake["1"].posy]
    let snakeY = snakeRow.childNodes[posSnake["1"].posx]
    snakeY.style.backgroundColor = "black"
    loopForRun(dir)
}

function cleanExtraSnake() {
    let snakeValues = Object.values(posSnake)
    for (let i = 0; i < snakeValues.length; i++) {
        let row = document.querySelectorAll(".row")[snakeValues[i].posy]
        let pos = row.childNodes[snakeValues[i].posx]
        pos.style.backgroundColor = "gray"
    }
}

function checkKeyPressed(e) {
    e.preventDefault()

    switch (e.key) {
        case "ArrowDown":
            runningInX = false
            break;
        case "ArrowRight":
            runningInX = true
            break;
    }

}