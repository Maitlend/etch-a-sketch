const container = document.getElementById("container");

for(let i = 0; i < 256; i++){
  const div = document.createElement('div');
  div.textContent = "H";
  // div.style.border = "1px solid black";
  div.classList.add('grid-item'); 
  container.appendChild(div);
}