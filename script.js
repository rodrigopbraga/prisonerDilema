let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let nRounds = document.querySelector("#valor");
let roundA = document.getElementById("roundA");
let roundB = document.getElementById("roundB");
let statsbar = document.getElementById("stats-bar");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

nRounds.innerHTML = sliderElement.value;

slider.oninput = function() {
  nRounds.innerHTML = this.value;
}

function Player (playername, cpoints, lplay, atpoints, atroundsplayed) {
  this.playername=playername;
  this.cpoints=cpoints;
  this.lplay=lplay;
  this.atpoints=atpoints;
  this.atroundsplayed=atroundsplayed;
}

function Player (playername, cpoints, lplay) {
  this.playername=playername;
  this.cpoints=cpoints;
  this.lplay=lplay;
  this.atpoints=0;
  this.atroundsplayed=0;
}

function Player (playername) {
  this.playername=playername;
  this.cpoints=0;
  this.lplay=null;
  this.atpoints=0;
  this.atroundsplayed=0;
}

let Albert = new Player("Albert", 0, 0, 0, 0);
let Brocky = new Player("Brocky", 0, 0, 0, 0);

const DisplayToggle = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const AddRound = (alplay, blplay) => {
  roundA.classList.add("add-round"); // 
  
  if(alplay){
    roundA.textContent+=" [✔]";
  }else{
    roundA.textContent+=" [✖]";
  }

  if(blplay){
    roundB.textContent+=" [✔]";
  }else{
    roundB.textContent+=" [✖]";
  }
}

const StartGame = (A, B) =>{
  ClearGame(A, B);
  console.log("---Playing "+nRounds.innerHTML+" rounds --------------------------------------------------");
  for(let i=0; i<nRounds.innerHTML; i++){
    Duel(A, B);
    AddRound(A.lplay, B.lplay);
  }
  console.log(A.playername+" scored: "+A.cpoints);
  console.log(B.playername+" scored: "+B.cpoints);
  
  SetStats(A);
  SetStats(B);
}

const Duel = (A, B) => {
  A.lplay=Math.random()<0.5;
  B.lplay=Math.random()<0.5;
  console.log(A.playername+" played "+A.lplay);
  console.log(B.playername+" played "+B.lplay);

  if(A.lplay && B.lplay) { // both cooperate
    A.cpoints+=3;
    B.cpoints+=3;
    console.log("Cooperation");
  }
  else if(A.lplay || B.lplay){ // different choices
    if(A.lplay){ // B defected
      B.cpoints+=5;
    }
    else{ // A defected
      A.cpoints+=5;
    }
    console.log("ue");
  }
  else{ // both defect
    A.cpoints++;
    B.cpoints++;
    console.log("Defection");
  }
}

const SetStats = (P) => {
  P.atpoints+=P.cpoints;
  P.atroundsplayed+=parseInt(nRounds.innerHTML);

  statsbar.textContent+='\nplayername: '+P.playername
    +'\n cpoints: '+P.cpoints
    +'\n lplay: '+P.lplay
    +'\n atpoints: '+P.atpoints
    +'\n atroundsplayed: '+P.atroundsplayed;

  statsbar.textContent+='\n\n\n\n\n';
}

const ClearGame = (A, B) => {
  roundA.textContent="A ";
  roundB.textContent="B ";
  statsbar.textContent="";
  SetPlayer(A);
  SetPlayer(B);
}

const SetPlayer = (P) => {
  P.cpoints=0;
  P.lplay=null;
}