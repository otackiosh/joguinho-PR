class SetaAzul extends Seta{

    constructor(dir, vel){
        super((dir+2)%4, vel);
        this.direcao = dir;
        this.rotacao = 0; // grau de rotacao. 0 no comeco e 180 no final.
    }

    moveSeta(){
        if(this.direcao == 0){ //0 = cima, 1 = direita, 2 = baixo, 3 =  esquerda
            if(this.pos.y > 150){
                this.pos.y -= this.velocidade;
            }else if(this.rotacao < 180){
                this.rotacao += this.velocidade*6;
                if(this.rotacao > 180)
                    this.rotacao = 180;
            }else{
                this.pos.y -= this.velocidade;
                if (this.pos.y < 40)
                    return true;
            }
        }else if(this.direcao == 1){
            if(this.pos.x < -150){
                this.pos.x += this.velocidade;
            }else if(this.rotacao < 180){
                this.rotacao += this.velocidade*6;
                if(this.rotacao > 180)
                    this.rotacao = 180;
            }else{
                this.pos.x += this.velocidade;
                if (this.pos.x > -40)
                    return true;
            }
        }else if(this.direcao == 2){
            if(this.pos.y < -150){
                this.pos.y += this.velocidade;
            }else if(this.rotacao < 180){
                this.rotacao += this.velocidade*6;
                if(this.rotacao > 180)
                    this.rotacao = 180;
            }else{
                this.pos.y += this.velocidade;
                if (this.pos.y > -40)
                    return true;
            }
        }else if(this.direcao == 3){
            if(this.pos.x > 150){
                this.pos.x -= this.velocidade;
            }else if(this.rotacao < 180){
                this.rotacao += this.velocidade*6;
                if(this.rotacao > 180)
                    this.rotacao = 180;
            }else{
                this.pos.x -= this.velocidade;
                if (this.pos.x < 40)
                    return true;
            }
        }

    }

    drawSeta(){
        push();
        stroke(color(0, 0, 255));
        strokeWeight(5);
        rotate(this.rotacao/180 * PI);
        if(this.direcao == 2){
            line(this.pos.x, this.pos.y, this.pos.x - 9, this.pos.y - 9);
            line(this.pos.x, this.pos.y, this.pos.x + 9, this.pos.y - 9);          
        }else if(this.direcao == 3){
            line(this.pos.x, this.pos.y, this.pos.x + 9, this.pos.y + 9);
            line(this.pos.x, this.pos.y, this.pos.x + 9, this.pos.y - 9);            
        }else if(this.direcao == 0){
            line(this.pos.x, this.pos.y, this.pos.x + 9, this.pos.y + 9);
            line(this.pos.x, this.pos.y, this.pos.x - 9, this.pos.y + 9); 
        }else if(this.direcao == 1){
            line(this.pos.x, this.pos.y, this.pos.x - 9, this.pos.y - 9);
            line(this.pos.x, this.pos.y, this.pos.x - 9, this.pos.y + 9);             
        }
        pop(); 
    }
}