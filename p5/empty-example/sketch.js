let player;
let setas = [];
let canvasSize = 600;
let sizeUpBtn;
let sizeDownBtn;
let cnv;
let timer =0;


function setup() {
  cnv = createCanvas(canvasSize,canvasSize);
  cnv.position(50, 50);

  textAlign(CENTER, CENTER);
  
  textSize(32);
  fill(0);
  text('oie', 10, 30);

  // sizeDownBtn = createButton('-');  
  // sizeDownBtn.position(50+canvasSize, 50+canvasSize - 20);
  // sizeDownBtn.size(22,22);
  // sizeDownBtn.mousePressed(sizeDownCanvas);

  // sizeUpBtn = createButton('+');  
  // sizeUpBtn.position(50+canvasSize+21, 50+canvasSize - 20);
  // sizeUpBtn.size(22,22);
  // sizeUpBtn.mousePressed(sizeUpCanvas);

  player = new P();
  
}

// function sizeUpCanvas(){
//   canvasSize += 100;
//   setup();
// }


// function sizeDownCanvas(){
//   canvasSize -= 100;
//   setup();
// }

function refreshData()
{
  x = 2;
  
  setTimeout(refreshData, x*1000);
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    player.defineSentido(3);
  }
  else if(keyCode === RIGHT_ARROW){
    player.defineSentido(1);
  }
  else if(keyCode === UP_ARROW){
    player.defineSentido(0);
  }
  else if(keyCode === DOWN_ARROW){
    player.defineSentido(2);
  }else if(keyCode === 32){
    let dir = Math.floor(Math.random() * 4);
    let vel = Math.floor(Math.random() * 3 + 1);
    let cor = Math.floor(Math.random()*2);
    let seta;
    if(cor == 1){
      seta = new SetaAzul(dir, vel);
    }else{
      seta = new Seta(dir, vel);
    }
    setas.push(seta);
  }
}

function draw() {
  if (frameCount % 60 == 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0

    let dir = Math.floor(Math.random() * 4);
    let vel = Math.floor(Math.random() * 4 + 2);
    let cor = Math.floor(Math.random()*100);
    let seta;
    if(cor >65){
      seta = new SetaAzul(dir, vel);
    }else{
      seta = new Seta(dir, vel);
    }
    setas.push(seta);
    timer++;
  }

  background(0);
  player.drawP();
  for(let i = setas.length-1; i >=0; i--){
    setas[i].drawSeta();
    if(setas[i].moveSeta()){
      if (player.sentido == setas[i].direcao){
        console.log("acertou");
      }
      else{
        console.log("errou");
      }
    setas.splice(i, 1);
    }
  }
}
