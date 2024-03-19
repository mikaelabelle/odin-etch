let container = document.querySelector(".container")
let button = document.querySelector("#button")

createGrid(16)
squareFun()

button.addEventListener("click", () => {
    let gridDimensions = prompt("What size grid?")
    createGrid(gridDimensions);
    squareFun();
})

function createGrid(gridSize) {
    let totalNumGrids = gridSize * gridSize
    container.innerHTML = ""
    for (let i = 1; i <= totalNumGrids; i++) {
        let tempDiv = document.createElement("div")
        tempDiv.classList.toggle('square')
        tempDiv.style.flexBasis = `${(400 - (gridSize)) / gridSize}px`
        tempDiv.style.minHeight = "1px"
        container.appendChild(tempDiv)
    }
}

function squareFun() {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add("squareSelected")
        });
    });

}




