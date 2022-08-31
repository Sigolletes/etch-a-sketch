// VARIABLES

const grid = document.querySelector("#grid");
const newGrid = document.querySelector('#bttnNewGrid');

let sizeGrid = 16;



// RANDOM COLOR

function randomColor() {
  let color = Math.floor(Math.random()*16777215).toString(16);
  return "#" + color;
}



// FUNCTION TO MAKE A GRID

function makeGrid (sizeGrid) {
  grid.innerHTML = '';

  for (let i = 0; i < sizeGrid * sizeGrid; i++) {
    const box = document.createElement('div');
    box.className = "boxStyle";
    grid.appendChild(box);
    grid.style.gridTemplateColumns = `repeat(${sizeGrid}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${sizeGrid}, 1fr)`;
  }

  // HOVER EFFECT

  let children = grid.children;

  for (let i of children) { 
    i.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = randomColor();
    });
  }
}



// DEFAULT GRID 16x16

makeGrid(16);



// BUTTON NEW GRID

newGrid.addEventListener('click', () => {
  sizeGrid = window.prompt('Enter the size of the new Grid, it has to be between 1 and 100: ', 16);

  if (sizeGrid < 1 || sizeGrid > 100) return alert('The number has to be between 1 and 100');

  makeGrid(sizeGrid);
});
