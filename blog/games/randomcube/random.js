var ranArr = [];

function start(){
    display.start();
}



var display = {
    canvas : document.createElement('canvas'),
    start : function(){
        // this.canvas.width = window.innerWidth;
        // this.canvas.width = window.innerHeight;
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        this.context = this.canvas.getContext('2d');
        this.frameNo = 0
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateDisplay, 60);
    }

}

function component(width, height, colour, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.colour = colour;
    this.update = function(){
        ctx = display.context;
        ctx.fillStyle = colour;
        ctx.fillRect(this.x, this.y, this.width, this.height, this.colour);
    }
}

function everyinterval(n){
    if((display.frameNo / n) % 1 ==0){
        console.log('functioning')
        return true;}
    return false;
}

function randomNo(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
}
   

function updateDisplay(){
    var xLocation, xMax, yLocation, yMax, widthInput, red, green, blue, colourInput ;
    display.frameNo ++;

    
    if(display.frameNo == 1 || everyinterval(1)){

        //random location
        xMax = display.canvas.width;
        yMax = display.canvas.height;
       
        xLocation = randomNo(0,xMax);
        yLocation = randomNo(0,yMax);
    
        //random size block
        widthInput = randomNo(10, 50);

    
        //random colour
        red = randomNo(0,255);
        green = randomNo(0, 255);
        blue = randomNo(0,255);
    
        colourInput = "rgb(" + red + "," + green + "," + blue + ")"; 

        ranArr.push(new component(widthInput, widthInput, colourInput, xLocation, yLocation ));
    }
    for(i = 0; i < ranArr.length; i ++){
        ranArr[i].update();
    }
    console.log(display.frameNo);
    console.log(ranArr);
    console.log(xLocation, yLocation);
}
