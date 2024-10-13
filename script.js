function createGrid (dim) {
    if (isNaN(dim) || dim > 100 || dim <= 0) {
        alert("Invalid size, setting default size (16)...");
        createGrid(16);
    }
    else {
        for (let col = 0; col < dim; col++) {
            for (let row = 0; row < dim; row++) {
                let square = document.createElement("div");
                square.classList.add("square");
                square.style.setProperty('opacity', '0');
                square.style.setProperty('flex-basis', `calc(100% / ${dim})`);
                squareGrid.append(square);
            }
        }
    }
}

function clearGrid() {
    while (squareGrid.firstChild) {
        squareGrid.removeChild(squareGrid.firstChild);
    }
}

function addBackgroundColor(elem, color) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    elem.style.backgroundColor = `#${color}`;
    // color = color;
}

function changeOpacity(elem, val) {
    // change opacity
    let currentOpacity = window.getComputedStyle(elem).getPropertyValue("opacity");
    if (currentOpacity < 1) {
        elem.style.setProperty('opacity', `${parseFloat(currentOpacity) + val}`);
        console.log(currentOpacity);
    }
}

function addHoverEffect(grid) {
    let squares = grid.childNodes;
    console.log(typeof squares);
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', () => {
            addBackgroundColor(squares[i], squareColor);
            changeOpacity(squares[i], 0.1);
        });
    }
}

// ------- calls start here

let squareGrid = document.querySelector(".square-grid");
let dim = 16;
let squareColor = "000000";

createGrid(dim);
addHoverEffect(squareGrid);

let gridButton = document.querySelector(".grid-generator");
gridButton.addEventListener("click", () => {
    dim = prompt("Set a new grid size", 16);
    clearGrid();
    createGrid(dim);
    addHoverEffect(squareGrid); 
});



