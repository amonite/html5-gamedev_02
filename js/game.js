
let timer;
const log = console.log;

let key_right = false;
let key_left = false;
let key_up = false;
let key_down = false;

let imageLoader = new ImageLoader();
let gameReady = false; 
let listSprite = [];

function rnd(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}


function keydown(t){
    t.preventDefault();
    if(t.code == 'ArrowRight'){
        key_right = true;  
    }
    if(t.code == 'ArrowLeft'){
        key_left = true;
     }
    if(t.code == 'ArrowUp'){
        key_up = true;
    }
    if(t.code == 'ArrowDown'){
        key_down = true;
    }
}

function keyup(t){
    t.preventDefault();
    if(t.code == 'ArrowRight'){
        key_right = false;
    }
    if(t.code == 'ArrowLeft'){
        key_left = false;
    }
    if(t.code == 'ArrowUp'){
        key_up = false;
    }
    if(t.code == 'ArrowDown'){
        key_down = false;
    }
}

function load(){
    document.addEventListener('keydown', keydown, false);
    document.addEventListener('keyup', keyup, false);
    // img = new Sprite('images/ship.png');
    //img2 = new Sprite('../images/cardClubs2.png')
    //img.src = "images/ship.png"
    timer = 0;
    imageLoader.add('../images/cardClubs2.png');
    imageLoader.add('../images/cardClubs10.png');
    imageLoader.add('../images/cardClubs2.png');
    imageLoader.add('../images/cardClubs3.png');
    imageLoader.add('../images/cardClubs4.png');
    imageLoader.add('../images/cardClubs5.png');
    imageLoader.add('../images/cardClubs6.png');
    imageLoader.add('../images/cardClubs7.png');
    imageLoader.add('../images/cardClubs8.png');
    imageLoader.add('../images/cardClubs9.png');
    imageLoader.add('../images/cardClubsA.png');
    imageLoader.add('../images/cardClubsJ.png');
    imageLoader.add('../images/cardClubsK.png');
    imageLoader.add('../images/cardClubsQ.png');

    imageLoader.start(startGame);
    
}

function startGame(){
    log('starting game...');

    listSprite = [];
    for(let image of Object.values(imageLoader.getListImages())){
        let mysprite = new Sprite(image);
        mysprite.x = rnd(1,640);
        mysprite.y = rnd(1,480);
        listSprite.push(mysprite);
    }

    gameReady = true;
}

function update(dt ){
    timer += dt;
    if(timer > 1/100){
        //img.x ++;
        timer = 0;
    }
    if(key_right){
        img.x ++;
    }
    if(key_left){
        img.x --;
    }
    if(key_up){
        img.y --;
    }
    if(key_down){
        img.y ++;
    }

    if(!gameReady){
        return;
    }
}

function draw(pCtx){
    //pCtx.drawImage(img, x, y);
    // img.draw(pCtx);
    //img2.draw(pCtx);
    // imageLoader.draw(pCtx);
    if(!gameReady){
        let ratio = imageLoader.getLoadedRatio();
        pCtx.fillStyle = "rgb(255,255,255)";
        pCtx.fillRect(1, 1, 400, 100);
        pCtx.fillStyle = "rgb(0,255,0)";
        pCtx.fillRect(1, 1, 400 * ratio, 100);
        return;
    }
    listSprite.forEach(sprite =>{
        sprite.draw(pCtx);
    });
}