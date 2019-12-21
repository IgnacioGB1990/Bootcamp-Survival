class Tower {
  constructor(
    width = 50,
    height = 50,
    topLeft,
    topRight,
    botLeft,
    botRight,
    keys
  ) {
    this.width = width;
    this.height = height;

    this.topLeft = topLeft;
    this.topRight = topRight;
    this.botLeft = botLeft;
    this.botRight = botRight;

    this.image = new Image();
    this.image.src = "img/spotify.png";

    this.keys = keys;
    this.bullets = [];
    this.setListeners();
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      this.framesIndex * Math.floor(this.image.width / this.frames),
      0,
      Math.floor(this.image.width / this.frames),
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.clearBullets();
    this.bullets.forEach(bullet => bullet.draw());
    this.animate(framesCounter);
  }

  setListeners() {
    document.addEventListener("keydown", function(event) {
      console.log(event.which);

      if ((event = 87)) {
        //W
        console.log("hello");
        this.shoot();
      }
    });
  }

  shoot() {
    this.bullets.push(new Bullet(this.ctx, 15, 45, this.width, this.height));
  }
}
