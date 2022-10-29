const container = document.getElementById("container");
const gridSizeBtn = document.getElementById("grid-size-btn");

buildGrid(16);

gridSizeBtn.addEventListener("click", gridSizeHandler);

function gridSizeHandler(){
  let size = prompt("Please enter a size for grid row (ex. 64): ");
  if(!size){
    return;
  }
  while(!parseInt(size) || size.includes('-')){
    if(size===null){
      return;
    }
    size = prompt(`"${size}" is an invalid entry. Please enter a number (ex. 64): `);
  }
  if(size>100){
    size=100;
  }
  removeGrid();
  buildGrid(size);
}

function buildGrid(gridSize){
  for(let i = 0; i < gridSize*gridSize; i++){
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.addEventListener("mouseover", colorCell);
    div.addEventListener("touchend", colorCell);
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