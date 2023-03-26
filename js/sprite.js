class Sprite{

    constructor(pSrc, px = 0, py = 0){
        this.img = new Image;
        this.img.src = pSrc;
        this.x = px;
        this.y = py;
    }

    draw(pCtx){
        pCtx.drawImage(this.img, this.x, this.y);
    }

}