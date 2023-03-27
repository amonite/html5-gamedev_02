class ImageLoader{
    constructor(){
        this.listPath = [];
        this.listImages = [];
        this.callback = null;
        this.imagesLoadedCount = 0;
    }

    add(pImgPath){
        this.listPath.push(pImgPath);
        log(this.listPath[0]); 
    }

    getTotalImages(){
        return this.listPath.length;
    }

    getTotalImagesLoaded(){
        return this.imagesLoadedCount;
    }

    start(pCallback){
        this.callback = pCallback;
        this.listPath.forEach(path =>{
            let img = new Image();
            img.onload = this.imageLoaded.bind(this);
            img.src = path;
            this.listImages[path] = img;
        })
    }

    imageLoaded(e){
        this.imagesLoadedCount ++;
        log('image loaded : ' + e.target.currentSrc);
        if(this.imagesLoadedCount == this.listPath.length){
            log('everything is loaded')
            this.callback();
        }
    }
}