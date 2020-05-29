class Seta{
    constructor(dir, vel){
        this.direcao = dir; // 0 -> CIMA // 1 -> DIREITA // 2 -> BAIXO // 3 -> ESQUERDA
        this.velocidade = vel;
        this.pos = createVector();
        if(this.direcao == 0){
            this.pos.x = 0;
            this.pos.y = -canvasSize/2;
        }else if(this.direcao == 1){
            this.pos.x = canvasSize/2;
            this.pos.y = 0;
        }else if(this.direcao == 2){
            this.pos.x = 0;
            this.pos.y = canvasSize/2;
        }else if(this.direcao == 3){
            this.pos.x =-canvasSize/2;
            this.pos.y = 0;
        }
    }

    moveSeta(){
        if(this.direcao == 0){
            this.pos.y += this.velocidade;
            if (this.pos.y >= -40)
                return true;
        }else if(this.direcao == 1){
            this.pos.x -= this.velocidade;
            if (this.pos.x <= 40)
                return true;
        }else if(this.direcao == 2){
            this.pos.y -= this.velocidade;
            if( this.pos.y <= 40)
                return true;
        }else if(this.direcao == 3){
            this.pos.x += this.velocidade;
            if(this.pos.x >= -40)
                return true
        }
        return false;
    }
    
    drawSeta(){
        push();
        stroke(255);
        strokeWeight(5);
        if(this.direcao == 0){
            line(this.pos.x, this.pos.y, this.pos.x - 9, this.pos.y - 9);
            line(this.pos.x, this.pos.y, this.pos.x + 9, this.pos.y - 9);          
        }else if(this.direcao == 1){
            line(this.pos.x, this.pos.y, this.pos.x + 9, this.pos.y + 9);
            line(this.pos.x, this.pos.y, this.pos.x + 9, this.pos.y - 9);            
        }else if(this.direcao == 2){
            line(this.pos.x, this.pos.y, this.pos.x + 9, this.pos.y + 9);
            line(this.pos.x, this.pos.y, this.pos.x - 9, this.pos.y + 9); 
        }else if(this.direcao == 3){
            line(this.pos.x, this.pos.y, this.pos.x - 9, this.pos.y - 9);
            line(this.pos.x, this.pos.y, this.pos.x - 9, this.pos.y + 9);             
        }

        pop();
    }
}