container = document.querySelector(".container")

function createGrid(gridSize) {
    let totalNumGrids = gridSize * gridSize
    for (let i = 1; i <= totalNumGrids; i++) {
        let tempDiv = document.createElement("div")
        tempDiv.classList.toggle('square')
        tempDiv.style.flexBasis = `${(400 - (2 * gridSize)) / gridSize}px`
        tempDiv.style.minHeight = "1px"
        container.appendChild(tempDiv)
    }
}

createGrid(16);