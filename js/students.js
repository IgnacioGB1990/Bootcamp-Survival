class Students {
  constructor(ctx, image, width = 45, height = 45, lives = 5) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.startX = 45;
    this.startY = 83;

    this.lives = lives;
    this.susp = 0;

    this.image = new Image();
    this.image.src = image;
  }

  clearCanvas() {
    //this.ctx.clearRect(0, 0, 2000, 2000);
    this.ctx.clearRect(this.startX, this.startY, 100, 100);
  }

  clearWhenWin() {
    // this.ctx.clearRect(998, 386, 300, 300);
    console.log("ClearWhenWin");
    //window.cancelAnimationFrame();

    console.log("X es : ", this.startX);
    console.log("Y es : ", this.startY);
  }

  draw() {
    let speed = 1;
    if (this.startX < 351 && (this.startY = 83)) {
      this.startX += speed;
    } else if (this.startX > 351 && this.startX < 690 && this.startY < 282) {
      this.startY += speed;
    } else if (this.startX > 351 && this.startX < 703) {
      this.startX += speed;
    } else if (this.startX < 750 && this.startY < 500 && this.startY > 83) {
      this.startY -= speed;
    } else if (this.startX > 83 && this.startX < 999 && this.startY < 282) {
      this.startX += speed;
    } else if (this.startX >= 999 && this.startY > 82 && this.startY < 386) {
      this.startY += speed;
    } else if (this.startX < 2000 && this.startX >= 999 && this.startY >= 386) {
      //this.lives -= 1;

      this.startX = 1000;
      this.startY = 390;

      // console.log("X es : ", this.startX);
      // console.log("Y es : ", this.startY);

      // D O M   M A N I P U L A T I O N
      let survivors = document.getElementsByClassName("survived");
      console.log(survivors);
      survivors[0].innerText = "Lives left " + this.lives;
      survivors[0].style.backgroundColor = "red";
      survivors[0].style.color = "white";
      survivors[0].style.borderRadius = "6px";
      survivors[0].style.padding = "0px 10px";
      survivors[0].style.transform = "scale(1.2)";
    }

    this.ctx.drawImage(
      this.image,
      this.startX,
      this.startY,
      this.width,
      this.height
    );
  }
}
