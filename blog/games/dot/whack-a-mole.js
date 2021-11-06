

console.log("Whack-a-Mole!")

//target random Math.random() td to show/hide img.src "mole.png"
//onclick() hide = true
//math.random() true, mole.png = true


let cells = document.getElementsByTagName('td');

var globalScore = 0;

document.querySelector('.restart-btn').addEventListener('click', restart);

//this function creates a mole
function getMole(){
  var randomIndex = Math.floor(Math.random()*cells.length);
  var randomCell = cells[randomIndex];
  let mole = document.createElement("img");
  mole.src = "dot.png";
  mole.id = "mole";
  mole.addEventListener("click", whacked);
  randomCell.appendChild(mole);
}

getMole();

function whacked(evt){
  let clicked = evt.target.id;
  mole.remove();
  
  let wackSound = document.getElementById("whack")
  wackSound.volume = 0.2;
  wackSound.play();

  globalScore ++;
  updateScore();

  console.log(globalScore);
  console.log(clicked);
  getMole();
}

function restart(){
  document.location.reload();
}


const score = document.getElementById('score-no');

function updateScore(){
  score.innerHTML = String(globalScore);
}

// target the mole created
//click on it

//remove the mole and add new mole 

