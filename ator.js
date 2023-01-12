//Variáveis do Ator 1
let xAtor1 = 100;
let velocidadeAtor1 = 2;
let yAtor1 = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor1(x, y){
   image(imagemAtor, xAtor1, yAtor1, 30, 30);
}

function movimentaAtor1(){
  if (keyIsDown(UP_ARROW)) {
    yAtor1 -= velocidadeAtor1;
  } else if (keyIsDown(DOWN_ARROW)){
    yAtor1 += velocidadeAtor1;
  } 
}

function verificaColisao(){
  for (let i = 0; i < imagensCarros.length; i++){
    colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor1, yAtor1, 15)
    if (colisao){
      if (verificaPontosMaiorQueZero()){
				meusPontos--;
			}
      somDaColisao.play();
      retornaPosicaoInicialAtor();
    }      
  }
}

function incluiPontos(){
  textSize(25);
  textAlign(CENTER);
  fill(color(236, 138, 73));
  text(meusPontos, 100, 27);
}

function marcaPontos(){
  if (yAtor1 < 15){
    meusPontos++;
    somDoPonto.play();
    retornaPosicaoInicialAtor();
  }
}

function retornaPosicaoInicialAtor(){
  yAtor1 = 366;
}

function verificaPontosMaiorQueZero(){
  return meusPontos > 0;
}