class BackgroundCanvas {
  constructor(posX, posY) {
    this.ctx = document.getElementById("canvas").getContext("2d");
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.posX = posX;
    this.posY = posY;
    this.coordinates = [];
    this.createBoard();
  }

  coordinates() {
    // this.coordinates.forEach(function(coord)){
    //   this.draw()
    // }
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.posX, this.posY);
    this.ctx.lineTo(this.posX, this.posY);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  createBoard() {
    //Board Top
    // this.ctx.beginPath();
    // this.ctx.moveTo(80, 30);
    // this.ctx.lineTo(1150, 30);
    // this.ctx.closePath();
    // this.ctx.stroke();
    // //Board Right
    // this.ctx.beginPath();
    // this.ctx.moveTo(1150, 30);
    // this.ctx.lineTo(1150, 400);
    // this.ctx.closePath();
    // this.ctx.stroke();
    // //Board Bottom
    // this.ctx.beginPath();
    // this.ctx.moveTo(1150, 400);
    // this.ctx.lineTo(80, 400);
    // this.ctx.closePath();
    // this.ctx.stroke();
    // //Board Left
    // this.ctx.beginPath();
    // this.ctx.moveTo(80, 400);
    // this.ctx.lineTo(80, 30);
    // this.ctx.closePath();
    // this.ctx.stroke();

    // FIRST TUNEL
    //First tunnel Top
    this.ctx.beginPath();
    this.ctx.moveTo(80, 80);
    this.ctx.lineTo(400, 80);
    this.ctx.closePath();
    this.ctx.stroke();
    //First tunnel Bottom   //Tunel de ancho 50
    this.ctx.beginPath();
    this.ctx.moveTo(80, 130);
    this.ctx.lineTo(350, 130);
    this.ctx.closePath();
    this.ctx.stroke();

    // SECOND TUNEL
    //Second tunnel Right
    this.ctx.beginPath();
    this.ctx.moveTo(400, 80);
    this.ctx.lineTo(400, 280);
    this.ctx.closePath();
    this.ctx.stroke();
    //Second tunnel Left
    this.ctx.beginPath();
    this.ctx.moveTo(350, 130);
    this.ctx.lineTo(350, 330);
    this.ctx.closePath();
    this.ctx.stroke();

    // THIRD TUNEL
    //Third tunnel Up
    this.ctx.beginPath();
    this.ctx.moveTo(400, 280);
    this.ctx.lineTo(700, 280);
    this.ctx.closePath();
    this.ctx.stroke();
    //Third tunnel Down
    this.ctx.beginPath();
    this.ctx.moveTo(350, 330);
    this.ctx.lineTo(750, 330);
    this.ctx.closePath();
    this.ctx.stroke();

    // FOURTH TUNEL
    //Fourth tunnel Left
    this.ctx.beginPath();
    this.ctx.moveTo(700, 280);
    this.ctx.lineTo(700, 80);
    this.ctx.closePath();
    this.ctx.stroke();
    //Fourth tunnel Right
    this.ctx.beginPath();
    this.ctx.moveTo(750, 330);
    this.ctx.lineTo(750, 130);
    this.ctx.closePath();
    this.ctx.stroke();

    // Fifth TUNEL
    //Fifth tunnel Up
    this.ctx.beginPath();
    this.ctx.moveTo(700, 80);
    this.ctx.lineTo(1050, 80);
    this.ctx.closePath();
    this.ctx.stroke();
    //Fifth tunnel Down
    this.ctx.beginPath();
    this.ctx.moveTo(750, 130);
    this.ctx.lineTo(1000, 130);
    this.ctx.closePath();
    this.ctx.stroke();

    // Final TUNEL
    //Final tunnel Up
    this.ctx.beginPath();
    this.ctx.moveTo(1050, 80);
    this.ctx.lineTo(1050, 400);
    this.ctx.closePath();
    this.ctx.stroke();
    //Final tunnel Down
    this.ctx.beginPath();
    this.ctx.moveTo(1000, 130);
    this.ctx.lineTo(1000, 400);
    this.ctx.closePath();
    this.ctx.stroke();
  }
}
