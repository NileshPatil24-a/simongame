let gameseq=[];
let userseq=[];
let btns=["blue","red","green","purple"];

let stared=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(stared==false){
        console.log("game started");
        stared=true;
        levelUp();
    }
});

function userflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function gameflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=(`Level:${level}`);
    let randIndx=Math.floor(Math.random()*btns.length);
    let randcolor=btns[randIndx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}
function checkAns(indx){
    if(userseq[indx]===gameseq[indx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
    h2.innerHTML=(`Game over! Your Score was: <b>${level}</b> <br>Press any key to start`);
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
    }
}

function btnPress(){
    // console.log(this)
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    stared=false;
    gameseq=[];
    userseq=[];
    level=0;
}