var ranArr = [];
var context = new AudioContext()
var o = null
var g = null
var frequency = [
    65.41, 69.30, 73.42, 77.78, 82.41, 87.31, 92.50, 98.00, 103.8, 110.0, 116.5, 123.5,
    130.8, 138.6, 146.8, 155.6, 164.8, 174.6, 185.0, 196.0, 207.7, 220.0, 233.1, 246.9,
    261.6, 277.2, 293.7, 311.1,	329.6, 349.2, 370.0, 392.0, 415.3, 440.0, 466.2, 493.9,
    523.3, 554.4, 587.3, 622.3, 659.3, 698.5, 740.0, 784.0, 830.6, 880.0, 932.3, 987.8,
    1047, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976,
    2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 3520, 3729, 3951,
    4186, 4435, 4699, 4978, 5274, 5588, 5920, 6272, 6645, 7040, 7459, 7902,
]

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
        this.interval = setInterval(updateDisplay, 200);
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
        return true;}
    return false;
}

function randomNo(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
}
function testAudio(){
    var note;
    o = context.createOscillator()
    g = context.createGain()
    o.type = 'sine'
    o.connect(g)
    note = frequency[Math.floor(Math.random()*frequency.length)];
    
    o.frequency.value = note;


    g.connect(context.destination)
    o.start(0)
  
    g.gain.exponentialRampToValueAtTime(
      0.00001, context.currentTime + 1
    )
    console.log(note);
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
        widthInput = randomNo(10, 100);

    
        //random colour
        red = randomNo(0,255);
        green = randomNo(0, 255);
        blue = randomNo(0,255);
    
        colourInput = "rgb(" + red + "," + green + "," + blue + ")"; 

        ranArr.push(new component(widthInput, widthInput, colourInput, xLocation, yLocation ));
        testAudio();
    }
    for(i = 0; i < ranArr.length; i ++){
        ranArr[i].update();
    }
}
