const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

let fps = 0;
let interval;

let lastUpdate = 0;//Date.now();

function showFPS(){
    ctx.fillStyle = 'white';
    ctx.font = 'normal 16pt Arial';
    ctx.fillText(Math.floor(fps) + 'fps', 10, 20);
}

function run(time){
    requestAnimationFrame(run); // remove when using setInterval 
    //let now = Date.now();
    let dt = (time - lastUpdate) / 1000;

    if(dt < (1 / 75)){
        return;
    }

    fps = 1 / dt;
    lastUpdate = time;
    update(dt);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // cls
    draw(ctx);
    //showFPS();
}

function init(){
    log('init');
    load();
    //interval = setInterval(run, 1000/60);
    requestAnimationFrame(run); // remove when using setInterval 
}

init();