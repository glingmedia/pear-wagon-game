class Player {
    public x: number
    public y: number
    public width: number
    public height: number


    constructor() {
        this.x = mouseX;
        this.y = innerHeight - 138;
        this.width = 150;
        this.height = 80;

    }

    update() {
        this.x = mouseX;
        this.y = innerHeight - 138;
    }

    draw() {
        push();
        
        fill(255,255,0)
        // ellipse(mouseX -30, innerHeight -this.yWheel, 20, 20)
        // ellipse(mouseX +35, innerHeight -this.yWheel, 20, 20)

        
        // fill(5)
        // rect(mouseX, innerHeight -this.y, 100, 50)
        imageMode(CENTER)
        // image(img, 50, 50);
        
        image(images.wagon, this.x, this.y, this.width, this.height);

        noCursor();
        pop();

    }





}

