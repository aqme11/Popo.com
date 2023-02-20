let a;
let b;
let c;
alert("For better experience use a laptop")
let inner = document.getElementById("inner");
Update()
setInterval(Update, 1000)
function Update(){
    let date = new Date()

    inner.innerHTML = formatTime(date)

    function formatTime(date){

        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        let ampm = hours >=12? "PM": "AM"
        hours = (hours % 12) || 12
    
        hours = getTime(hours);
        mins = getTime(mins);
        secs = getTime(secs);
        return `${hours}:${mins}:${secs} ${ampm}`
    }
    function getTime(date){
        date = date.toString()
    
        return date.length < 2 ? "0" + date:date
    }
}
document.getElementById("butt").onclick = function(){
    a = document.querySelector("#fname").value;

    b = document.querySelector("#lname").value;

    c + (a + b)
    document.querySelector("#fulln").innerHTML = "Get the f out of here " + a +" "+ b
console.log(a,b)
}
window.addEventListener("keydown",click => console.log(click.key))
document.getElementById("roll").onclick = function(){
    a = Math.floor(Math.random() * 6) + 1
    b = Math.floor(Math.random() * 6) + 1
    c = Math.floor(Math.random() * 6) + 1

    document.querySelector("#alabel").innerHTML = a;
    document.querySelector("#blabel").innerHTML = b;
    document.querySelector("#clabel").innerHTML = c;

}
let begin = document.getElementById("Mydiv");
let Ani = document.getElementById("box");

begin.addEventListener("click", bedo);

function bedo(){
    let timerId = null;
    let x = 0;
    let y = 0;
    let macro = 0;

    timerId = setInterval(mover, 5);
    function mover(){
    if(x >=3000 || y >=5000 || macro >=Infinity){
        clearInterval(timerId)
    }
        else{
            x+=1;
            y+=1;
            macro+=100
            Ani.style.left = x + "px";
            Ani.style.top = y + "px";
            Ani.style.transform = "rotate("+macro+"deg)"
    
        }
}
}
/*const ONI = document.querySelector("#on");*/

const answer = Math.floor(Math.random() * 20 + 1)
let guesses = 0;

document.querySelector("#on").onclick = function(){
    let guess = document.getElementById("no.").value;
    guesses+=1;

    if(guess == answer){
        alert(`${answer} is the Number. It took you ${guesses} guesses loser`)
    }
    else if(guess < answer){
        alert("Go Higher!");
    }
    else{
        alert("go Lower!")
    }
}
let x = document.getElementById("dnt");

x.addEventListener("click" ,jiro);

function jiro(){
    alert("I told you don't click me");
    window.close()
}
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


context.lineWidth = 10
context.strokeStyle = "black"
context.fillStyle = "grey"
context.beginPath()
context.arc(250,250,200,0,2 * Math.PI);
context.fillStyle = "red"
context.stroke();
context.fill();

context.font = "40px MV Boli"
context.fillStyle = "black"
context.textAlign = "center"
context.fillText("No one sees you",canvas.width/2, canvas.width / 2)

let cnvas = document.getElementById("cnvas");
let contest = cnvas.getContext("2d");

contest.fillStyle = "cyan"
contest.fillRect(0,0,250,250)
contest.strokeStyle = "black"
contest.strokeRect(0,0,250,250)


contest.fillStyle = "#632100"
contest.fillRect(250,0,250,250)
contest.StrokeStyle = "#632100"
contest.strokeRect(250,0,250,250)

contest.fillStyle = "#ee30ff"
contest.fillRect(250,250,250,250)
contest.StrokeStyle = "#ee30ff"
contest.strokeRect(250,250,250,250)

contest.fillStyle = "lightgreen"
contest.fillRect(0,250,250,250)
contest.StrokeStyle = "lightgreen"
contest.strokeRect(250,0,250,250)

contest.lineWidth = 3
contest.fillStyle = "black"
contest.fillRect(120,130,250,250)
contest.strokeStyle = "red"
contest.strokeRect(120,130,250,250)

contest.font = "30px MV Boli"
contest.textAlign = "center"
contest.fillStyle = "red"
contest.fillText("Be yourself",  canvas.width/2, canvas.width / 2 )
contest.fillStyle = "red"

let vans = document.getElementById("vans");
let cntext = vans.getContext("2d");


cntext.lineWidth = 10
cntext.beginPath();
cntext.arc(250,250,250,0,2 * Math.PI)
cntext.strokeStyle = "#4169e1"
cntext.stroke()

cntext.font = "33.40px MV Boli"
cntext.fillStyle = "#4169e1"
cntext.textAlign = "center"
cntext.fillText("Comparison is the theif of Joy", canvas.width/2, canvas.width / 2)

const pido = document.getElementById("panda");
window.addEventListener("keydown", move);
let i = 0;
let y = 0;

function move(event){

    switch(event.key){
    case "ArrowDown":
        y+=15
        pido.style.top = y + "px";
        break;
    
    case "ArrowUp":
        y-=15
        pido.style.top = y + "px";
        break;
    case "ArrowRight":
        i+=15
        pido.style.left = i + "px";
        break;
    case "ArrowLeft":
        i-=15;
        pido.style.left = i + "px";
        break;
        default:
            break;


    }
}
let age = window.prompt("ENTER YOUR AGE:");
if(age < 18){
    window.alert("You must be 18+ to visit this site... see ya")
    window.close()
}