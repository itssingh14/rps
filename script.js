var p_score = -1;
var c_score = -1;
var flag = 1;

document.getElementById("pres").innerHTML = 0;
document.getElementById("cres").innerHTML = 0;
document.getElementById("pchoice").innerHTML = "READY";
document.getElementById("cchoice").innerHTML = "READY";

function randomNumber() {  
    return Math.floor(Math.random() * (4 - 1) + 1); 
}

function check(){
    if(p_score == 4 || c_score == 4){
        if(p_score == 4){
            document.querySelector("#pl").style.visibility = "visible";
        }
        else{
            document.querySelector("#cp").style.visibility = "visible";
        }
        flag = 0;
    } 
}

function rock(){
    if(flag){
    var cpu = randomNumber();
    console.log("cpu = "+cpu);
    document.getElementById("pchoice").innerHTML = "rock";
    if(cpu === 2){
        c_score++;
        document.getElementsByTagName("li")[c_score].style.visibility = "visible";
        document.getElementById("cchoice").innerHTML = "paper";
        document.getElementById("cres").innerHTML = c_score + 1;
        document.querySelector("#round").innerHTML = "CPU";
        document.querySelector("#round").style.backgroundColor = "red"
        document.querySelector("#round").style.color = "white"
    }
    if(cpu === 3){
        p_score++;
        document.getElementsByTagName("li")[p_score + 5].style.visibility = "visible";
        document.getElementById("cchoice").innerHTML = "scissor";
        document.getElementById("pres").innerHTML = p_score + 1;
        document.querySelector("#round").innerHTML = "Player";
        document.querySelector("#round").style.backgroundColor = "green"
        document.querySelector("#round").style.color = "white"
    }
    if(cpu === 1){
        document.getElementById("cchoice").innerHTML = "rock";
        document.querySelector("#round").innerHTML = "Tie";
        document.querySelector("#round").style.backgroundColor = "#FFA500"
        document.querySelector("#round").style.color = "white"
    }
    check();
    }
}

function paper(){
    if(flag){
    var cpu = randomNumber();
    console.log("cpu = "+cpu);
    document.getElementById("pchoice").innerHTML = "paper";
    if(cpu === 3){
        c_score++;
        document.getElementsByTagName("li")[c_score].style.visibility = "visible";
        document.getElementById("cchoice").innerHTML = "scissor";
        document.getElementById("cres").innerHTML = c_score + 1;
        document.querySelector("#round").innerHTML = "CPU";
        document.querySelector("#round").style.backgroundColor = "red"
        document.querySelector("#round").style.color = "white"
    }
    if(cpu === 1){
        p_score++;
        document.getElementsByTagName("li")[p_score + 5].style.visibility = "visible";
        document.getElementById("cchoice").innerHTML = "rock";
        document.getElementById("pres").innerHTML = p_score + 1;
        document.querySelector("#round").innerHTML = "Player";
        document.querySelector("#round").style.backgroundColor = "green"
        document.querySelector("#round").style.color = "white"
    }
    if(cpu === 2){
        document.getElementById("cchoice").innerHTML = "paper";
        document.querySelector("#round").innerHTML = "Tie";
        document.querySelector("#round").style.backgroundColor = "#FFA500"
        document.querySelector("#round").style.color = "white"
    }
    check();
    }
}

function scissor(){
    if(flag){
    var cpu = randomNumber();
    console.log("cpu = "+cpu);
    document.getElementById("pchoice").innerHTML = "scissor";
    if(cpu === 1){
        c_score++;
        document.getElementsByTagName("li")[c_score].style.visibility = "visible";
        document.getElementById("cchoice").innerHTML = "rock";
        document.getElementById("cres").innerHTML = c_score + 1;
        document.querySelector("#round").innerHTML = "CPU";
        document.querySelector("#round").style.backgroundColor = "red"
        document.querySelector("#round").style.color = "white"
    }
    if(cpu === 2){
        p_score++;
        document.getElementsByTagName("li")[p_score + 5].style.visibility = "visible";
        document.getElementById("cchoice").innerHTML = "paper   ";
        document.getElementById("pres").innerHTML = p_score + 1;
        document.querySelector("#round").innerHTML = "Player";
        document.querySelector("#round").style.backgroundColor = "green"
        document.querySelector("#round").style.color = "white"
    }
    if(cpu === 3){
        document.getElementById("cchoice").innerHTML = "scissor";
        document.querySelector("#round").innerHTML = "Tie";
        document.querySelector("#round").style.backgroundColor = "#FFA500"
        document.querySelector("#round").style.color = "white"
    }
    check();
    }
}

function reset(){
    p_score = -1;
    c_score = -1;
    document.getElementById("pres").innerHTML = 0;
    document.getElementById("cres").innerHTML = 0;
    document.getElementById("pchoice").innerHTML = "READY";
    document.getElementById("cchoice").innerHTML = "READY";
    for(var i = 0; i < document.querySelectorAll("li").length; i++){
        document.getElementsByTagName("li")[i].style.visibility = "hidden";
    }
    document.querySelector("#pl").style.visibility = "hidden";
    document.querySelector("#cp").style.visibility = "hidden";
    document.querySelector("#round").innerHTML = "";
    flag = 1;
}