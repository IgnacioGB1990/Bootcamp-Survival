const Game = {
  canvas: undefined,
  ctx: undefined,
  framesCounter: 0,
  fps: 60,
  index: undefined,

  init: function() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    backgroundCanvas = new BackgroundCanvas();
  },

  start: function() {
    this.reset();

    window.requestAnimationFrame(this.update.bind(this));
  },
  reset: function() {
    this.Maria = new Audio("sounds/Mamma Maria.mp3");
    this.students = [];

    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    window.cancelAnimationFrame(this.update.bind(this));
    //this.Maria.play();
    //this.students = new Students(this.ctx, "img/spotify.png");
  },

  generateStudents: function() {
    let enemies = ["spotify", "chucho", "fire", "frog", "grut", "wizard"];
    let image =
      "img/" + enemies[Math.floor(Math.random() * enemies.length)] + ".png";

    this.students.push(new Students(this.ctx, image));
  },

  update: function() {
    this.framesCounter++;

    this.clear();
    this.drawAll();
    if (Math.floor(this.framesCounter) % 70 === 0) this.generateStudents();
    if (this.framesCounter > 1000) this.framesCounter = 0;
    window.requestAnimationFrame(this.update.bind(this));
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.students.forEach(function(student, i) {
      console.log("Coordinates of", student.startX, student.startY);
      if (student.startX >= 1000 && student.startY >= 450) {
        //   //student.lives--;
        let index = i;
        console.log(index);
        Game.deleteFromArray();

        //   console.log("Este es el estudiante", student);
        console.log("Este es su indice", i);
        //   // console.log("esta son las vidas", student.lives);
      }
    });
  },

  deleteFromArray: function() {
    console.log("Entraaaaaaa!!");
    console.log(new Students(this.ctx, this.image));
    this.students.slice(new Students(this.ctx, this.image));
  },

  drawAll: function() {
    this.students.forEach(function(enemy, i) {
      enemy.draw();
    });
  },

  gameOver: function() {}
};

// drawAllArray: function() {
//   let enemies = ["spotify", "chucho", "fire", "frog"];

//   enemies.forEach(function(image, i) {
//     setTimeout(function() {
//       this.students = new Students(
//         this.ctx,
//         "img/" + enemies[image] + ".png"
//       );
//       this.students.draw();
//     }, i * 1000);
//   });

//   // this.students = new Students(this.ctx, "img/" + enemies[j] + ".png");
//   // this.students.draw();
// }
