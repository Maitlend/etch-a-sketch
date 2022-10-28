const container = document.getElementById("container");
const gridSizeBtn = document.getElementById("grid-size-btn");

gridSizeBtn.addEventListener("click", gridSizeHandler);

buildGrid(16);

function gridSizeHandler(){
  const size = prompt("Please enter a size for grid row (ex. 64): ");
  removeGrid();
  buildGrid(size);
}

function buildGrid(gridSize){
  for(let i = 0; i < gridSize*gridSize; i++){
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.addEventListener("mouseover", colorCell);
    container.appendChild(div);
  }
  container.setAttribute("style", `grid-template-columns: repeat(${gridSize}, 1fr);`);
}

function colorCell(){
  this.classList.add('highlighted');
}

function removeGrid(){
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
}