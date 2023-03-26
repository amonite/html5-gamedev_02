let img;
let timer;
const log = console.log;

let key_right = false;
let key_left = false;
let key_up = false;
let key_down = false;


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
    img = new Sprite("images/ship.png");
    //img.src = "images/ship.png"
    timer = 0;
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
    // img.x ++;
}

function draw(pCtx){
    //pCtx.drawImage(img, x, y);
    img.draw(pCtx);
}