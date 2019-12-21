class Bullet {
  constructor(ctx, width = 10, height = 30, posX = 100, posY = 100) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.posX = posX;
    this.posY = posY;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    this.ctx.closePath();
  }

  move() {
    y += 1;

    //clearCanvas();
    this.ctx.fillRect(x, y, 10, 30);
  }
}
