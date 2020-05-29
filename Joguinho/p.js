class P{
    constructor(){
        this.sentido = 0; //0 = cima, 1 = direita, 2 = baixo, 3 =  esquerda
        this.tamanhoR = canvasSize/12;
    }

    drawP(){
        translate(canvasSize/2,canvasSize/2);
        push();
        rotate(PI/4);
        noFill();
        stroke(255);
        strokeWeight(4)
        rect(0-this.tamanhoR/2,0-this.tamanhoR/2, this.tamanhoR, this.tamanhoR);
        pop();
        push();
        stroke(255);
        strokeWeight(3);
        //color(0,255,0);
        if(this.sentido == 1){
            rotate(PI/2);
        }
        else if(this.sentido == 2){
            rotate(PI);
        }
        else if(this.sentido == 3){
            rotate(3*PI/2);
        }
        let c = color(0,255,0);
	    stroke(c);
	    strokeWeight(8);
        line(0, -this.tamanhoR/2 + (this.tamanhoR / 10), this.tamanhoR/2 - (this.tamanhoR / 10), 0);
	    line(0, -this.tamanhoR/2 +(this.tamanhoR / 10), -this.tamanhoR/2 +(this.tamanhoR / 10), 0);
        pop();
    }


    defineSentido(x){
        if(x >= 0 && x<= 3){
            this.sentido = x;
        }
    }
}