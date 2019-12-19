const Game = {
  canvas: undefined,
  ctx: undefined,
  framesCounter: 0,
  fps: 60,

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
    //Frecuencia en la que generamos Imagenes. Denominador pequeño muchas img
    if (Math.floor(this.framesCounter) % 70 === 0) this.generateStudents();
    //Reinicio de frames para que no pete
    if (this.framesCounter > 1000) this.framesCounter = 0;
    window.requestAnimationFrame(this.update.bind(this));
  },
  clear: function() {
    //Elimina rastro de cada imagen. En cada update/refresco
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // if ((this.startX = 3000) && (this.startY = 3000)) {

    this.students.forEach(function(student) {
      console.log("Coordinates of", student.startX, student.startY);

      if (student.startX >= 1000 && student.startY >= 450) {
        //this.ctx.clearRect(1000, 450, 300, 300);
        student.lives--;

        console.log("esta son las vidas", student.lives);
        console.log("entrooooo nenenenenenenen");

        //DOM MANIPULATION:
      }
      //this.students.remove(name);
      //this.ctx.clearRect(998, 386, 300, 300);
    });
  },

  drawAll: function() {
    this.students.forEach(function(enemy) {
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
