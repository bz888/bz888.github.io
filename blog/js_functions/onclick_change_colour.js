
var showFilter =0;

document.addEventListener('click', groupFunction);


function groupFunction(clicked){
    if(clicked.target.id == 'show'){
        changeColour();
    } 
    else if(clicked.target.id == 'showTech'){
        invertTechPage();
    } else if(clicked.target.id == 'showCore'){
        invertCulturePage();
    }
    else if(clicked.target.id == 'showGames'){
        invertGames();
    }
}


function changeColour(){
    let base = document.getElementById('base');

    let colourBox = document.getElementById('colour-box-1');
    let colourBoxTwo = document.getElementById('colour-box-2');
    let colourBoxThree = document.getElementById('colour-box-3');
    let colourBoxFour = document.getElementById('colour-box-4');
    
    let getText = document.getElementById('box-1-des');
    let getTextTwo = document.getElementById('box-2-des');
    let getTextThree = document.getElementById('box-3-des');
    let getTextFour = document.getElementById('box-4-des');

    if(showFilter ==0){
        showFilter ++;
        
        base.style.filter ="invert(100%)";

        colourBox.style.display = "none";
        colourBoxTwo.style.display = "none";
        colourBoxThree.style.display = "none";
        colourBoxFour.style.display = "none";

        getText.style.display = "block";
        getTextTwo.style.display = "block";
        getTextThree.style.display = "block";
        getTextFour.style.display = "block";

        console.log(showFilter);

    } else if(showFilter > 0){
        showFilter = 0;
        base.style.filter ="invert(0%)";

        colourBox.style.display = "block";
        colourBoxTwo.style.display = "block";
        colourBoxThree.style.display = "block";
        colourBoxFour.style.display = "block";

        getText.style.display = "none";
        getTextTwo.style.display = "none";
        getTextThree.style.display = "none";
        getTextFour.style.display = "none";

        console.log(showFilter);
    }
}

function invertCulturePage(){

    let boxBoxOne = document.getElementById('box-box-1');
    let boxBoxTwo = document.getElementById('box-box-2');
    let boxBoxThree = document.getElementById('box-box-3');
    let boxBoxFour = document.getElementById('box-box-4');
    let boxBoxFive = document.getElementById('box-box-5');
    
    let textShowOne = document.getElementById('box-text-1');
    let textShowTwo = document.getElementById('box-text-2');
    let textShowThree = document.getElementById('box-text-3');
    let textShowFour = document.getElementById('box-text-4');
    let textShowFive = document.getElementById('box-text-5');
    
    let getHomeBox = document.getElementById('home-box');
    let getHomeText = document.getElementById('home-text');

    if(showFilter == 0){
        showFilter ++;

        base.style.filter = "invert(100%)";

        boxBoxOne.style.display ='none';
        boxBoxTwo.style.display ='none';
        boxBoxThree.style.display ='none';
        boxBoxFour.style.display ='none';
        boxBoxFive.style.display = 'none';

        getHomeBox.style.display = 'none';

        textShowOne.style.display = "block";
        textShowTwo.style.display = "block";
        textShowThree.style.display = "block";
        textShowFour.style.display = "block";
        textShowFive.style.display = 'block';

        getHomeText.style.display = "block";

    }else if(showFilter > 0){
        showFilter = 0;
        base.style.filter = "invert(0%)"

        boxBoxOne.style.display ='block';
        boxBoxTwo.style.display ='block';
        boxBoxThree.style.display ='block';
        boxBoxFour.style.display ='block';
        boxBoxFive.style.display = 'block';
        
        getHomeBox.style.display = 'block';

        textShowOne.style.display = "none";
        textShowTwo.style.display = "none";
        textShowThree.style.display = "none";
        textShowFour.style.display = "none";
        textShowFive.style.display = 'none';

        getHomeText.style.display = 'none';

        console.log(showFilter);
    }
}
function invertTechPage(){

    let boxBoxOne = document.getElementById('box-box-1');
    let boxBoxTwo = document.getElementById('box-box-2');
    let boxBoxThree = document.getElementById('box-box-3');
    let boxBoxFour = document.getElementById('box-box-4');

    
    let textShowOne = document.getElementById('box-text-1');
    let textShowTwo = document.getElementById('box-text-2');
    let textShowThree = document.getElementById('box-text-3');
    let textShowFour = document.getElementById('box-text-4');

    
    let getHomeBox = document.getElementById('home-box');
    let getHomeText = document.getElementById('home-text');

    if(showFilter == 0){
        showFilter ++;

        base.style.filter = "invert(100%)";

        boxBoxOne.style.display ='none';
        boxBoxTwo.style.display ='none';
        boxBoxThree.style.display ='none';
        boxBoxFour.style.display ='none';
 

        getHomeBox.style.display = 'none';

        textShowOne.style.display = "block";
        textShowTwo.style.display = "block";
        textShowThree.style.display = "block";
        textShowFour.style.display = "block";


        getHomeText.style.display = "block";

    }else if(showFilter > 0){
        showFilter = 0;
        base.style.filter = "invert(0%)"

        boxBoxOne.style.display ='block';
        boxBoxTwo.style.display ='block';
        boxBoxThree.style.display ='block';
        boxBoxFour.style.display ='block';

        
        getHomeBox.style.display = 'block';

        textShowOne.style.display = "none";
        textShowTwo.style.display = "none";
        textShowThree.style.display = "none";
        textShowFour.style.display = "none";


        getHomeText.style.display = 'none';

        console.log(showFilter);
    }
}

function invertGames(){
    let gameTextOne = document.getElementById('game-text-1');
    let gameTextTwo = document.getElementById('game-text-2');
    let gameTextThree = document.getElementById('game-text-3');
    let gameTextFour = document.getElementById('game-text-4');
    let gameTextFive = document.getElementById('game-text-5');
    let gameTextSix = document.getElementById('game-text-6');
    let gameTextSeven = document.getElementById('game-text-7');

    let gameBoxOne = document.getElementById('game-box-1');
    let gameBoxTwo = document.getElementById('game-box-2');
    let gameBoxThree = document.getElementById('game-box-3');
    let gameBoxFour = document.getElementById('game-box-4');
    let gameBoxFive = document.getElementById('game-box-5');
    let gameBoxSix = document.getElementById('game-box-6');
    let gameBoxSeven = document.getElementById('game-box-7');

    let gameHomeBox = document.getElementById('home-box-game');
    let gameHomeText = document.getElementById('home-text-game');


    if(showFilter == 0){
        showFilter ++;

        base.style.filter ="invert(100%)";

        gameTextOne.style.display = 'block';
        gameTextTwo.style.display = 'block';
        gameTextThree.style.display = 'block';
        gameTextFour.style.display = 'block';
        gameTextFive.style.display = 'block';
        gameTextSix.style.display = 'block';
        gameTextSeven.style.display = 'block';

        gameBoxOne.style.display = 'none';
        gameBoxTwo.style.display = 'none';
        gameBoxThree.style.display = 'none';
        gameBoxFour.style.display = 'none';
        gameBoxFive.style.display = 'none';
        gameBoxSix.style.display = 'none';
        gameBoxSeven.style.display = 'none';

        gameHomeBox.style.display = 'none';
        gameHomeText.style.display = 'block';
        
    } else if(showFilter > 0){
        showFilter = 0;
        base.style.filter = "invert(0%)";

        gameTextOne.style.display = 'none';
        gameTextTwo.style.display = 'none';
        gameTextThree.style.display = 'none';
        gameTextFour.style.display = 'none';
        gameTextFive.style.display = 'none';
        gameTextSix.style.display = 'none';
        gameTextSeven.style.display = 'none';

        gameBoxOne.style.display = 'block';
        gameBoxTwo.style.display = 'block';
        gameBoxThree.style.display = 'block';
        gameBoxFour.style.display = 'block';
        gameBoxFive.style.display = 'block';
        gameBoxSix.style.display = 'block';
        gameBoxSeven.style.display = 'block';

        gameHomeBox.style.display = 'block';
        gameHomeText.style.display = 'none';

        console.log(showFilter);
    }
}