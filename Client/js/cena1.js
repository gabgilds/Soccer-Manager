import { cena2 } from "./cena2.js";

var cena1 = new Phaser.Scene("Cena 1");

//variáveis da cena de escolher os clubes
var fundo1;
var botao0;
var botao1;
var botao2;

var real0;
var city0;
var bayern0;
var psg0;
var nomebayern0;
var nomecity0;
var nomepsg0;
var nomereal0;
var real1;
var city1;
var bayern1;
var psg1;
var nomebayern1;
var nomecity1;
var nomepsg1;
var nomereal1;
var somMouse;


var contagem0 = 0;
var contagem1 = 0;

//variáveis da cena do jogo acontecendo
var fundo2;
var cronometro;
var passagemTempo;
var fonteTextoCena2 = { font: "bold 35px Mont", fill: "#000000" };
var placar;
var posseBola;
var minutos;
var parteEmSegundos;
var bayern0;
var city1;
var nomebayern0;
var nomecity1;
var tempoInicial;
var time;

//variáveis da cena do fim de jogo
var fundo3;
var parabensBayern0;
var parabensCity0;
var parabensPsg0;
var parabensReal0;
var parabensBayern1;
var parabensCity1;
var parabensPsg1;
var parabensReal1;
var somVitoria;
var muller;
var botaoSim;
var botaoNao;
var botaoJogarDeNovo;

//funções da cena de escolher os clubes
function escolhapsg0() {
  psg0.setVisible(true);
  nomepsg0.setVisible(true);
  bayern0.setVisible(false);
  nomebayern0.setVisible(false);
  real0.setVisible(false);
  nomereal0.setVisible(false);
  city0.setVisible(false);
  nomecity0.setVisible(false);
  time0 = statusPsg;
}

function escolhabayern0() {
  psg0.setVisible(false);
  nomepsg0.setVisible(false);
  bayern0.setVisible(true);
  nomebayern0.setVisible(true);
  real0.setVisible(false);
  nomereal0.setVisible(false);
  city0.setVisible(false);
  nomecity0.setVisible(false);
  time0 = statusBayern;
}

function escolhacity0() {
  psg0.setVisible(false);
  nomepsg0.setVisible(false);
  bayern0.setVisible(false);
  nomebayern0.setVisible(false);
  real0.setVisible(false);
  nomereal0.setVisible(false);
  city0.setVisible(true);
  nomecity0.setVisible(true);
  time0 = statusCity;
}

function escolhareal0() {
  psg0.setVisible(false);
  nomepsg0.setVisible(false);
  bayern0.setVisible(false);
  nomebayern0.setVisible(false);
  real0.setVisible(true);
  nomereal0.setVisible(true);
  city0.setVisible(false);
  nomecity0.setVisible(false);
  time0 = statusReal;
}

function escolhapsg1() {
  psg1.setVisible(true);
  nomepsg1.setVisible(true);
  bayern1.setVisible(false);
  nomebayern1.setVisible(false);
  real1.setVisible(false);
  nomereal1.setVisible(false);
  city1.setVisible(false);
  nomecity1.setVisible(false);
  time1 = statusPsg;
}

function escolhabayern1() {
  psg1.setVisible(false);
  nomepsg1.setVisible(false);
  bayern1.setVisible(true);
  nomebayern1.setVisible(true);
  real1.setVisible(false);
  nomereal1.setVisible(false);
  city1.setVisible(false);
  nomecity1.setVisible(false);
  time1 = statusBayern;
}

function escolhacity1() {
  psg1.setVisible(false);
  nomepsg1.setVisible(false);
  bayern1.setVisible(false);
  nomebayern1.setVisible(false);
  real1.setVisible(false);
  nomereal1.setVisible(false);
  city1.setVisible(true);
  nomecity1.setVisible(true);
  time1 = statusCity;
}

function escolhareal1() {
  psg1.setVisible(false);
  nomepsg1.setVisible(false);
  bayern1.setVisible(false);
  nomebayern1.setVisible(false);
  real1.setVisible(true);
  nomereal1.setVisible(true);
  city1.setVisible(false);
  nomecity1.setVisible(false);
  time1 = statusReal;
}

//função para retirar todos os clubes da tela
function retirarTodosClubes() {
  psg0.setVisible(false);
  nomepsg0.setVisible(false);
  bayern0.setVisible(false);
  nomebayern0.setVisible(false);
  real0.setVisible(false);
  nomereal0.setVisible(false);
  city0.setVisible(false);
  nomecity0.setVisible(false);
  psg1.setVisible(false);
  nomepsg1.setVisible(false);
  bayern1.setVisible(false);
  nomebayern1.setVisible(false);
  real1.setVisible(false);
  nomereal1.setVisible(false);
  city1.setVisible(false);
  nomecity1.setVisible(false);
}

//função para definir os clubes que aparecem por padrão
function escolhaClubePadrao() {
  escolhabayern0();
  escolhacity1();
}

//funções para mostrar as telas do jogo
function aparecerFundo1() {
  fundo1.setVisible(true);
  fundo2.setVisible(false);
  fundo3.setVisible(false);

  cronometro.setVisible(false);
  placar.setVisible(false);
  posseBola.setVisible(false);

  botaoSim.setInteractive(false);
  botaoSim.setVisible(false);
  botaoNao.setInteractive(false);
  botaoNao.setVisible(false);
  botaoJogarDeNovo.setVisible(false);
  muller.setVisible(false);

  parabensBayern0.setVisible(false);
  parabensBayern1.setVisible(false);
  parabensCity0.setVisible(false);
  parabensCity1.setVisible(false);
  parabensPsg0.setVisible(false);
  parabensPsg1.setVisible(false);
  parabensReal0.setVisible(false);
  parabensReal1.setVisible(false);
}

function aparecerFundo2() {
  fundo1.setVisible(false);
  fundo2.setVisible(true);
  fundo3.setVisible(false);

  botao0.setVisible(false);
  botao0.setInteractive(false);
  botao1.setVisible(false);
  botao1.setInteractive(false);
  botao2.setVisible(false);
  botao2.setInteractive(false);

  cronometro.setVisible(true);
  placar.setVisible(true);
  posseBola.setVisible(true);

  //iniciando o cronometro
  passagemTempo = time.addEvent({
    delay: 100,
    callback: function () {
      tempoInicial += 15; //A cada 100 ms tira 15 segundos do tempo inicial
      cronometro.setText(formatarTempo(tempoInicial));
    },
    callbackScope: this,
    loop: true,
  });

  //definindo o resultado da partida
  if (time0.ovr > time1.ovr) {
    time0vencendo();
  } else if (time0.ovr < time1.ovr) {
    time1vencendo();
  } else if (time0.ovr = time1.ovr) {
    time0vencendo();
    console.log("aleluia");
  }
}  

function aparecerFundo3() {
  fundo1.setVisible(false);
  fundo2.setVisible(false);
  fundo3.setVisible(true);

  cronometro.setVisible(false);
  placar.setVisible(false);
  posseBola.setVisible(false);

  botaoSim.setInteractive(true);
  botaoSim.setVisible(true);
  botaoNao.setInteractive(true);
  botaoNao.setVisible(true);
  botaoJogarDeNovo.setVisible(true);
  muller.setVisible(true);
  somVitoria.play();

  retirarTodosClubes();
}

function aparecerFundo1Novamente() {
  fundo1.setVisible(true);
  fundo2.setVisible(false);
  fundo3.setVisible(false);

  cronometro.setVisible(false);
  placar.setVisible(false);
  posseBola.setVisible(false);

  botaoSim.setInteractive(false);
  botaoSim.setVisible(false);
  botaoNao.setInteractive(false);
  botaoNao.setVisible(false);
  botaoJogarDeNovo.setVisible(false);
  muller.setVisible(false);

  botao0.setVisible(true);
  botao0.setInteractive(true);
  botao1.setVisible(true);
  botao1.setInteractive(true);
  botao2.setVisible(true);
  botao2.setInteractive(true);

  escolhaClubePadrao();

  tempoInicial = 0;
}

//variáveis e funções para o funcionamento da partida
var statusBayern = { atk: 92, mid: 85, def: 81, ovr: 84 };
var statusPsg = { atk: 89, mid: 83, def: 85, ovr: 86 };
var statusCity = { atk: 85, mid: 85, def: 86, ovr: 85 };
var statusReal = { atk: 84, mid: 85, def: 83, ovr: 84 };
var time0;
var time1;
var ganhador;


function time0vencendo() {
  //aqui vai ser o decorrer da partida que no final o time da esquerda vai ganhar, com aleatoriedades
  ganhador = 0;
  if (time0 = statusPsg) {
  parabensPsg0.setVisible(true);
  } else if (time0 = statusBayern) {
  parabensBayern0.setVisible(true);
  } else if (time0 = statusCity) {
  parabensCity0.setVisible(true);
  } else if (time0 = statusReal) {
  parabensReal0.setVisible(true);
  }
}

function time1vencendo() {
  //aqui vai ser o decorrer da partida que no final o time da direita vai ganhar, com aleatoriedades
  ganhador = 1;
  if (time1 = statusPsg) {
  parabensPsg1.setVisible(true);
  } else if (time1 = statusBayern) {
  parabensBayern1.setVisible(true);
  } else if (time1 = statusCity) {
  parabensCity1.setVisible(true);
  } else if (time1 = statusReal) {
  parabensReal1.setVisible(true);
  }
}


cena1.preload = function () {
  //carregando as imagens e áudio que serão usados na cena de escolhendo os clubes
  this.load.image("fundo1", "./assets/fundo1.png");
  this.load.image("botao0", "./assets/botao0.png");
  this.load.image("real", "./assets/clubes/real.png");
  this.load.image("city", "./assets/clubes/city.png");
  this.load.image("psg", "./assets/clubes/psg.png");
  this.load.image("bayern", "./assets/clubes/bayern.png");
  this.load.image("botao1", "./assets/botao1.png");
  this.load.image("nomereal", "./assets/clubes/nomereal.png");
  this.load.image("nomecity", "./assets/clubes/nomecity.png");
  this.load.image("nomepsg", "./assets/clubes/nomepsg.png");
  this.load.image("nomebayern", "./assets/clubes/nomebayern.png");
  this.load.audio("somMouse", "./assets/somMouse.mp3");

  //carregando as imagens e áudio que serão usados na cena do jogo
  this.load.image("fundo2", "./assets/fundo2.png");

  //carregando as imagens e áudio que serão usados na cena de fim do jogo
  this.load.image("fundo3", "./assets/fundo3.png");

  this.load.image("bayern0", "./assets/clubes/parabens/bayern0.png");
  this.load.image("bayern1", "./assets/clubes/parabens/bayern1.png");
  this.load.image("city0", "./assets/clubes/parabens/city0.png");
  this.load.image("city1", "./assets/clubes/parabens/city1.png");
  this.load.image("psg0", "./assets/clubes/parabens/psg0.png");
  this.load.image("psg1", "./assets/clubes/parabens/psg1.png");
  this.load.image("real0", "./assets/clubes/parabens/real0.png");
  this.load.image("real1", "./assets/clubes/parabens/real1.png");
  
  this.load.audio("somVitoria", "./assets/somVitoria.mp3");
  this.load.spritesheet("muller", "assets/clubes/jogadores/muller.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.image("botaoJogarDeNovo", "./assets/texto/botaoJogarDeNovo.png");
  this.load.image("botaoSim", "./assets/texto/botaoSim.png");
  this.load.image("botaoNao", "./assets/texto/botaoNao.png");
};

cena1.create = function () {
  //deixando a variável tempo utilizável para o cena1
  time = this.time;

  // Tecla "F" ativa/desativa tela cheia
  var telaCheia = this.add
    .image(800 - 16, 16, "fullscreen", 0)
    .setOrigin(1, 0)
    .setInteractive();
  
  var teclaF = this.input.keyboard.addKey("F");
  teclaF.on(
    "down",
    function () {
        if (this.scale.isFullscreen) {
            telaCheia.setFrame(0);
            this.scale.stopFullscreen();
        } else {
            telaCheia.setFrame(1);
            this.scale.startFullscreen();
          }
      },
      this
    );



  //definindo as imagens de fundo da cena de escolhendo os clubes, da partida e do fim do jogo
  fundo1 = this.add.image(400, 300, "fundo1");
  fundo2 = this.add.image(400, 300, "fundo2");
  fundo3 = this.add.image(400, 300, "fundo3");

  // <------ Cena de escolhendo os clubes ------->

  //define e adiciona os botões da cena1
  botao0 = this.add.image(400, 300, "botao0", 100).setInteractive();
  botao1 = this.add.image(280, 70, "botao1").setInteractive();
  botao2 = this.add.image(735, 70, "botao1").setInteractive();

  //colocando os textos de seleção dos clubes do lado esquerdo
  real0 = this.add.image(120, 70, "real");
  city0 = this.add.image(110, 70, "city");
  psg0 = this.add.image(100, 70, "psg");
  bayern0 = this.add.image(145, 70, "bayern");
  nomebayern0 = this.add.image(175, 335, "nomebayern");
  nomecity0 = this.add.image(175, 335, "nomecity");
  nomepsg0 = this.add.image(175, 335, "nomepsg");
  nomereal0 = this.add.image(175, 335, "nomereal");

  //colocando os textos de seleção dos clubes do lado direito
  real1 = this.add.image(575, 70, "real");
  city1 = this.add.image(565, 70, "city");
  psg1 = this.add.image(555, 70, "psg");
  bayern1 = this.add.image(600, 70, "bayern");
  nomebayern1 = this.add.image(630, 335, "nomebayern");
  nomecity1 = this.add.image(630, 335, "nomecity");
  nomepsg1 = this.add.image(630, 335, "nomepsg");
  nomereal1 = this.add.image(630, 335, "nomereal");

  //colocando os textos de vitórias de cada clube
  parabensBayern0 = this.add.image(400, 120, "bayern0");
  parabensBayern1 = this.add.image(400, 120, "bayern1");
  parabensCity0 = this.add.image(400, 120, "city0");
  parabensCity1 = this.add.image(400, 120, "city1");
  parabensPsg0 = this.add.image(400, 120, "psg0");
  parabensPsg1 = this.add.image(400, 120, "psg1");
  parabensReal0 = this.add.image(400, 120, "real0");
  parabensReal1 = this.add.image(400, 120, "real1"); 

  //colocando o som do mouse para sair clicar nos botões
  somMouse = this.sound.add("somMouse");

  //fazendo a escolha dos clubes da esquerda por meio dos botões
  botao1.on("pointerdown", function () {
    //som de click do mouse
    somMouse.play();

    switch (contagem0) {
      case 0:
        escolhabayern0();
        break;

      case 1:
        escolhareal0();
        break;

      case 2:
        escolhacity0();
        break;

      case 3:
        escolhapsg0();
        break;
    }
    contagem0++;
    contagem0 = contagem0 % 4;
  });

  //fazendo a escolha dos clubes da direita por meio dos botões
  botao2.on("pointerdown", function () {
    //som de click do mouse
    somMouse.play();

    switch (contagem1) {
      case 0:
        escolhabayern1();
        break;

      case 1:
        escolhareal1();
        break;

      case 2:
        escolhacity1();
        break;

      case 3:
        escolhapsg1();
        break;
    }
    contagem1++;
    contagem1 = contagem1 % 4;
  });

  // <------ Cena do jogo acontecendo ------->
  //    |Cronômetro do jogo|

  //define o tempo inicial
  tempoInicial = 0;
  //adiciona o cronômetro
  cronometro = this.add.text(
    356,
    170,
    formatarTempo(this.tempoInicial),
    fonteTextoCena2
  );

  //     |Placar do jogo|
  placar = this.add.text(362, 287, "0    0", fonteTextoCena2);

  //     |Posse de bola do jogo|
  posseBola = this.add.text(355, 458, "50  50", fonteTextoCena2);

  // <------ Cena do fim do jogo ------->

  //botões para jogar novamente
  botaoSim = this.add.image(380, 580, "botaoSim").setInteractive();
  botaoNao = this.add.image(470, 580, "botaoNao").setInteractive();
  botaoJogarDeNovo = this.add.image(200, 580, "botaoJogarDeNovo");

  //animação do vencedor
  muller = this.physics.add.sprite(400, 60, "muller");

  this.anims.create({
    key: "vitoria",
    frames: this.anims.generateFrameNumbers("muller", {
      start: 0,
      end: 4,
    }),
    frameRate: 5,
    repeat: -1,
  });

  

  muller.anims.play("vitoria", true);

  //colocando o som final
  somVitoria = this.sound.add("somVitoria");
  somVitoria.loop = true;

  //adicionando os botões de sim e não de jogar novamente
  botaoSim.on(
    "pointerdown",
    function () {
      aparecerFundo1Novamente();
      somVitoria.pause();
    },
    this
  );

  botaoNao.on(
    "pointerdown",
    function () {
      this.scene.start(cena2);
      somVitoria.pause();
    },
    this
  );

  //clique do botão para ir para a próxima tela
  botao0.on(
    "pointerdown",
    function () {
      //inicia a cena e o cronometro
      aparecerFundo2();
    },
    this
  );

  //mostra no início apenas a tela de escolha de clubes
  aparecerFundo1();

  //colocando os dois clubes que sempre irão aparecer primeiro
  escolhaClubePadrao();
};

function formatarTempo(segundos) {
  // Minutos
  minutos = Math.floor(segundos / 60);
  // Segundos
  parteEmSegundos = segundos % 60;
  // Adiciona zeros à esquerda para os segundos
  parteEmSegundos = parteEmSegundos.toString().padStart(2, "0");
  // Retorna o tempo formato para a função
  return `${minutos} : ${parteEmSegundos}`;
}

function tempoPassado() {
  this.tempoInicial += 15; //A cada 100 ms tira 15 segundos do tempo inicial
  cronometro.setText(formatarTempo(this.tempoInicial)); //Atualiza o relógio
}

cena1.update = function () {
  //Fim da partida
  if (minutos === 2) {
    aparecerFundo3();
  }
};

export { cena1 };
