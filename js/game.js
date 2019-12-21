const Game = {
  canvas: undefined,
  ctx: undefined,
  framesCounter: 0,
  fps: 60,
  index: undefined,
  dream: "0",
  towerKey: {
    UP_KEY: 87
  },

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
    this.towers = [];

    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    window.cancelAnimationFrame(this.update.bind(this));
    this.Maria.play();
  },

  generateStudents: function() {
    //let enemies = ["spotify", "chucho", "fire", "frog", "grut", "wizard"];
    let enemies = [
      "Ignacio",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29"
    ];
    let image =
      "img/" + enemies[Math.floor(Math.random() * enemies.length)] + ".png";

    this.students.push(new Students(this.ctx, image));
  },

  generateBullets: function() {
    //this.students = new Students(this.ctx, "img/spotify.png");
    this.tower = new Tower(
      50,
      50,
      this.topLeft,
      this.topRight,
      this.botLeft,
      this.botRight,
      this.keys
    );
  },
  update: function() {
    this.framesCounter++;
    this.clear();
    this.drawAll();
    if (Math.floor(this.framesCounter) % 80 === 0) this.generateStudents();
    if (Math.floor(this.framesCounter) % 80 === 0) this.generateBullets();
    if (this.framesCounter > 1000) this.framesCounter = 0;
    window.requestAnimationFrame(this.update.bind(this));
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.students.forEach(function(student, i) {
      //console.log("Coordinates of", student.startX, student.startY);
      if (student.startX >= 1000 && student.startY >= 390) {
        let index = i;
        console.log("Retorna indice siempre 0??", index);
        Game.deleteFromArray(index);

        //   console.log("Este es el estudiante", student);
        console.log("Este es su indice", i);
      }
    });
  },

  deleteFromArray: function(index) {
    this.students.splice(index, 1);
    this.dream++;

    //  D O M    M A N I P U L A T I O N
    let survivors = document.getElementsByClassName("survived");
    console.log(survivors);
    survivors[0].innerText = "Students who reached Dream Job " + this.dream;
    survivors[0].style.backgroundColor = "red";
    survivors[0].style.color = "white";
    survivors[0].style.borderRadius = "6px";
    survivors[0].style.padding = "0px 10px";
    survivors[0].style.transform = "scale(1.2)";

    //End Game if 5 students reach goal
    if (this.dream >= 5) {
      console.log("dream antes de Game Over: ", this.dream);
      Game.gameOver();
    }
  },

  drawAll: function() {
    this.students.forEach(function(enemy, i) {
      enemy.draw();
    });
  },

  gameOver: function() {
    console.log("Game Over Majo!!!!!!!");

    let endGame = document.getElementsByClassName("title");
    endGame[0].innerText = "YOU LOST !!!";
    endGame[0].style.marginRight = "550px";
    console.log(endGame);
    endGame[0].style.color = "yellow";
    endGame[0].style.transform = "scale(1.4)";
    this.Maria.pause();
    window.cancelAnimationFrame();
  }
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
//this.students = new Students(this.ctx, "img/spotify.png");
