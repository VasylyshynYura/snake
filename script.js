function InitGame() {
    const area = document.querySelectorAll("div");
    const start = document.querySelector("div:first-child");

    area.forEach((area) => area.classList.add("area"))
    goSnake()

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




