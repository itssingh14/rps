var p_score = 0;
var c_score = 0;

document.getElementById("pres").innerHTML = p_score;
document.getElementById("cres").innerHTML = c_score;
document.getElementById("pchoice").innerHTML = "";
document.getElementById("cchoice").innerHTML = "";

function randomNumber() {  
    return Math.floor(Math.random() * (4 - 1) + 1); 
}

function rock(){
    var cpu = randomNumber();
    console.log("cpu = "+cpu);
    document.getElementById("pchoice").innerHTML = "rock";
    if(cpu === 2){
        c_score++;
        document.getElementById("cchoice").innerHTML = "paper";
        document.getElementById("cres").innerHTML = c_score;
    }
    if(cpu === 3){
        p_score++;
        document.getElementById("cchoice").innerHTML = "scissor";
        document.getElementById("pres").innerHTML = p_score;
    }
    if(cpu === 1){
        document.getElementById("cchoice").innerHTML = "rock";
    }
}

function paper(){
    var cpu = randomNumber();
    console.log("cpu = "+cpu);
    document.getElementById("pchoice").innerHTML = "paper";
    if(cpu === 3){
        c_score++;
        document.getElementById("cchoice").innerHTML = "scissor";
        document.getElementById("cres").innerHTML = c_score;
    }
    if(cpu === 1){
        p_score++;
        document.getElementById("cchoice").innerHTML = "rock";
        document.getElementById("pres").innerHTML = p_score;
    }
    if(cpu === 2){
        document.getElementById("cchoice").innerHTML = "paper";
    }
}

function scissor(){
    var cpu = randomNumber();
    console.log("cpu = "+cpu);
    document.getElementById("pchoice").innerHTML = "scissor";
    if(cpu === 1){
        c_score++;
        document.getElementById("cchoice").innerHTML = "rock";
        document.getElementById("cres").innerHTML = c_score;
    }
    if(cpu === 2){
        p_score++;
        document.getElementById("cchoice").innerHTML = "paper   ";
        document.getElementById("pres").innerHTML = p_score;
    }
    if(cpu === 3){
        document.getElementById("cchoice").innerHTML = "scissor";
    }
}

function reset(){
    p_score = 0;
    c_score = 0;
    document.getElementById("pres").innerHTML = p_score;
    document.getElementById("cres").innerHTML = c_score;
    document.getElementById("pchoice").innerHTML = "";
    document.getElementById("cchoice").innerHTML = "";
}