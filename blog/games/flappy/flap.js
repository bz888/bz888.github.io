var gamePiece;
var obstacles = [];
var score;

function startGame(){
    gamePiece = new component(30, 30, "black", 10 , 120);
    score = new component("30px", "Consolas", "grey", 280, 40, "text");
    gameArea.start();   
    sound = new sound("blop.mp3");
    gamePiece.gravity = 0.05;
    let reset = document.getElementById('restart-btn')
    reset.addEventListener('click', restart);
}


var gameArea = {
    canvas : document.createElement('canvas'),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 370;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;

        this.interval = setInterval(updateGameArea, 10);

        // functions every 20th millisecond, 50 times per second
        //are trying to put it here?
        //trying to change 20 to growthspeed
        
        window.addEventListener('keydown', (e)=>{
            gameArea.keys = e.key;
            // console.log(gameArea.keys);
        })
        window.addEventListener('keyup', function (e) {
            gameArea.keys = false;    
        })
    },
    
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function(){
        clearInterval(this.interval);
    }
}



function component(width, height, colour, x, y, type){
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;   
    this.x = x;
    this.y = y
    this.bounce = 0.6;
    this.gravity = 0.10;
    this.gravitySpeed = 0;
    this.update = function(){
        ctx = gameArea.context;
        if(this.type == "text"){
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = colour;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = colour;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;        
        this.hitBottom();
    }
    this.hitBottom = function(){
        var rockbottom = gameArea.canvas.height - this.height;
        if(this.y > rockbottom){
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
    }
    this.crashWith = function(otherobj){
        var left = this.x;
        var right = this.x + (this.width);
        var top = this.y;
        var bottom = this.y +(this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        
        if ((bottom < othertop) ||
        (top > otherbottom) ||
        (right < otherleft) ||
        (left > otherright)){
            crash = false;
        }
        return crash;
    }
}

function everyinterval(n){
    if((gameArea.frameNo / n) % 1 ==0){
        // console.log(gameArea.frameNo);
        return true;}
        return false;
}
     
function updateGameArea(){
    var x, y,height, gap, minHeight, maxHeight, minGap, maxGap;
    
    for( i = 0; i < obstacles.length; i ++){
        if(gamePiece.crashWith(obstacles[i])){
            sound.play();
            gameArea.stop();
            return;
        }
    }
    gameArea.clear();
    gamePiece.speedX = 0;
    gamePiece.speedY = 0;
    
    if( gameArea.keys && gameArea.keys == 'ArrowUp'){
        accelerate(-0.05);
   
    }
    if(gameArea.keys == false){
        accelerate(0.1);
    }
    
    var rateNo = 1;

    
    if (gameArea.frameNo == 600){
        rateNo = 10;
    } 
    
    gameArea.frameNo += rateNo;
    
    console.log(rateNo);

    if(gameArea.frameNo ==1 || everyinterval(150)){
        x = gameArea.canvas.width;
        y = gameArea.canvas.height;
        minHeight = 20;
        maxHeight = y - 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 60;
        maxGap = 100;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        obstacles.push(new component(10, height, "black", x, 0));
        obstacles.push(new component(10, x - height - gap, "black", x, height + gap));
    }
    for (i = 0; i <obstacles.length; i += 1){
        obstacles[i].x += -1;
        // obstacles[i].newPos();
        obstacles[i].update();
    }
    score.text = "SCORE: "+ gameArea.frameNo;
    score.update();
    
    gamePiece.newPos();
    gamePiece.update();

    
}

function sound(src){
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function restart(){
    document.location.reload();
}

function accelerate(n){
    gamePiece.gravity = n;
}