

class StartScreen {
    private pearWagon: IGameState
    private playButton: Button 
    private howToButton: Button
    private mouseSteering: Button
    private arrowSteering: Button
    private buttons:Button[]

    
    
    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.playButton = new Button(0, 0, 300, 150, "rgb(9, 232, 18)");
        this.howToButton = new Button(0, 0, 300, 150, "rgb(9, 232, 18)");
        this.mouseSteering = new Button(0, 0, 50, 50, "rgb(9, 232, 18)");
        this.arrowSteering = new Button(0, 0, 50, 50, "rgb(9, 232, 18)");
        this.buttons = [];
        this.buttons.push(this.playButton);
        this.buttons.push(this.howToButton);
        this.buttons.push(this.mouseSteering);
        this.buttons.push(this.arrowSteering);
    }

    checkHighscore(){
        let test = getItem('points') as string[];
        console.log(test.map(point => Number(point)));
    }
    
    update() {          
        // ver.1 
        
        this.playButton.x = innerWidth / 2 - 350;
        this.playButton.y = innerHeight / 2 - 75;

        this.howToButton.x = innerWidth / 2 + 50;
        this.howToButton.y = innerHeight / 2 -75;

        this.mouseSteering.x = innerWidth / 100 * 25;
        this.mouseSteering.y = innerHeight / 100 * 70;

        this.arrowSteering.x = innerWidth / 100 * 25;
        this.arrowSteering.y = innerHeight / 100 * 80;

        const playWasClicked = this.playButton.update();
        if (playWasClicked) {
            this.pearWagon.setNewGameState("play");
        }

        const howToWasClicked = this.howToButton.update();
        if (howToWasClicked) {
            this.pearWagon.setNewGameState("how");
        }

        // const mouseWasClicked = this.player.mouseControl();
        const mouseWasClicked = this.mouseSteering.update();
        if(mouseWasClicked) {
            pearWagon.isMouseSteering = true
        }
        
        const keysWasClicked = this.arrowSteering.update();
        if(keysWasClicked) {
            pearWagon.isMouseSteering = false;
        }

        if(pearWagon.isMouseSteering){
            // console.log('mousesteering')
            this.arrowSteering.color = "darkgreen";
            this.mouseSteering.color = "rgb(9, 232, 18)";
        } else {
            // console.log('arrowsteering')
            this.arrowSteering.color = "rgb(9, 232, 18)";
            this.mouseSteering.color = "darkgreen";
        }
        // ver.2 

        // rectMode(CENTER);
        // this.playButton.x = innerWidth / 100 * 30;
        // this.playButton.y = innerHeight / 100 * 50;

        // this.howToButton.x = innerWidth / 100 * 70;
        // this.howToButton.y = innerHeight / 100 * 50;

        this.checkHighscore();
    }

    draw() {
        push();
        background(239, 35, 35);

        stroke(1);
        strokeWeight(1)
        fill(255);
        textStyle("italic")
        textSize(70);
        textFont('Helvetica')
        text("Pear Wagon", innerWidth / 2 - 190, innerHeight / 2 - 200);
        
        
        this.playButton.draw();
        fill(255);
        textSize(40);
        strokeWeight(3);
        text("Let's Play!", this.playButton.x + 50, innerHeight / 2 + 15);
        
        strokeWeight(1);
        this.howToButton.draw();
        fill(255)
        textSize(40)
        strokeWeight(3);
        text("How to play?", this.howToButton.x + 35, innerHeight / 2 + 15);

        strokeWeight(1);
        this.mouseSteering.draw();
        textSize(25)
        text("Mouse", this.mouseSteering.x + 60, this.mouseSteering.y + 40);
        
        this.arrowSteering.draw();
        textSize(25)
        text("Arrow Keys", this.arrowSteering.x + 60, this.arrowSteering.y + 40);



        noStroke();
        pop();

    }
}

// https://p5js.org/reference/#/p5/createButton

// createButton(label, [value])