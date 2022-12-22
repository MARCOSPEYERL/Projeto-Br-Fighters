class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
      this.playButton = createButton("");
      // criar nome pro jogo
      this.titleImg = createImg("./assets/logo.jfif", "game title");
   

    //boatao dos personagens
    this.charButton = createButton("");

      //greeting cria a msg 
      this.greeting = createElement("h2");

      // tela personagens
      // btn de voltar
      this.returnBtn = createButton("")
      // personagens
      this.p1Btn = createButton("")
      this.p2Btn = createButton("")
    

    }
  
    setElementsPosition() {
      this.titleImg.position(width / 2 - 110, 50);
      this.input.position(width / 2 - 157, height / 2 - 94);
      this.playButton.position(width / 2 - 200, height / 2 - 20);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
      this.charButton.position(width / 2 + 230, 100);
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.input.class("customInput");
      this.playButton.class("playButton");
      this.greeting.class("greeting");
      this.charButton.class("charBtn");

 
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
      this.charButton.hide();
     
    }
    
    show(){
      this.p1Btn.show();
      this.p2Btn.show();
      this.returnBtn.show();

    }

    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
  
        var message = `
        Olá ${this.input.value()}
        </br>espere o outro jogador entrar...`;
        this.greeting.html(message);
        playerCount += 1;
        player.name = this.input.value();
        player.index = playerCount;
        player.addPlayer();
        player.updateCount(playerCount);
        player.getDistance();
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
      this.handleResetButton();
    }

    handleResetButton() {
      this.charButton.mousePressed(() => {
        console.log("btnPersonagem")
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
        this.charButton.hide();
        gameState = "Tela Personagens"
        console.log(gameState)
        this.p1Btn.show();
        this.p2Btn.show();
        this.returnBtn.show();
      });
    }


  










  }

