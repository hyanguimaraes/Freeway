//Variáveis dos carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 262, 318];
let comprimentoCarros = 50;
let alturaCarros = 40
let velocidadeXCarros = [2, 2.5, 3.2, 3.7, 3.3, 2.3];

function mostraCarros(){
    for(let i = 0; i < imagensCarros.length; i++){
  image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarros(){
  for(let i = 0; i < imagensCarros.length; i++){
    xCarros[i] -= velocidadeXCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagensCarros.length; i++){
    if(passouDaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouDaTela(xCarro){
  return xCarro < -50;
}