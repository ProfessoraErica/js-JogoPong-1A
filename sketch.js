  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(meusPontos, 470, 26);
}

function marcaPonto (){
  if(xBolinha>585){
    meusPontos+=1;
    ponto.play();
  }
  if (xBolinha<15){
    pontoDoOponente+=1;
    ponto.play();
  }
}

function preload(){
  trilha= loadSound("trilha.mp3");
  ponto= loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}
