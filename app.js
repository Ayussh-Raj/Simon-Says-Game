  let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","blue"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
  if(started == false){
    console.log("game started");
    started=true;

    levelUp()

  }
})
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn){
  btn.classList.add("userF");
  setTimeout(() => {
    btn.classList.remove("userF");
  }, 250);
}


function levelUp(){
  userSeq=[];   // reseting  as for pressing button its the pattern of game
  level++;
  h2.innerText=`Level ${level}`;
  let Randidx=Math.floor(Math.random()*3);
  let Randcol=btns[Randidx];
  let Randbtn=document.querySelector(`.${Randcol}`);
  // console.log(Randidx);
  // console.log(ColRand);
  // console.log(Randbtn);
  gameSeq.push(Randcol);
  console.log(gameSeq);
  gameFlash(Randbtn);
}
function checkAns(idx){
 if(gameSeq[idx] === userSeq[idx]){     //if last element hai to
     if(gameSeq.length === userSeq.length){  // input de rhe h gameSeq aur userSeq 
      setTimeout(levelUp,1000);
     }
  }else{
    h2.innerHTML=`Game Over!Your score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
       document.querySelector("body").style.backgroundColor="white";
    },250);
    reset();
  }
}

function btnPress(){
   console.log(this);
   let btn=this;
   userFlash(btn);

   let userCol=btn.getAttribute("id");
   userSeq.push(userCol);
   console.log(userSeq);
   checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
  btn.addEventListener("click",btnPress);
}
function reset(){
  
  started=false;
  level=0;
  gameSeq=[];
  userSeq=[];
}