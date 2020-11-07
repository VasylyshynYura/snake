function InitGame() {
    const area = document.querySelectorAll("div");
    const start = document.querySelector("div:first-child");

    area.forEach((area) => area.classList.add("area"))
    goSnake()
              //
              setInterval(timer, 1000)
              appleSpawn()
          

}

class Snake{
    constructor(){
        this.position = [[1,1]]
        this.way = ""
    }
    goUp(){
        this.way = "up"    
    }
    goeft(){
        this.direction = "left"    
    }
    goDown(){
        this.direction = "down"    
    }
    goRight(){
        this.direction = "right"    
    }
    eat(){
        this.position.forward([])
    }
}
let snake = new Snake

function goSnake() {
    for(let i = 0; i < snake.position.length; i++) {
        let searchClass =   snake.position[i][0] + "," + snake.position[i][1]
        let element = document.getElementById(searchClass)
        element.classList.add("snake")
    }

}


let sec = 0;
function timer() {
    sec++;
    const timer = document.querySelector(".timer");
    let m = (Math.trunc(sec/60)<10? "0":"") + Math.trunc(sec/60);
    let s = (sec%60<10? "0":"") + sec%60;
    timer.innerHTML = m + " : " + s
}

function appleSpawn() {
    let divs = [];
    let div_rawdata = document.getElementsByClassName("area");
    let k = 0; 
    for(var i = 0; i < div_rawdata.length; i++)     
    if(div_rawdata[i].classList[1] != "snake") 
    divs[k++] = div_rawdata[i];
    var nextApple = divs[Math.round(Math.random()*(divs.length-1))];
    nextApple.classList.add("food")
}




