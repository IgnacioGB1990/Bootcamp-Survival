//Get tower class when clicked and dragged
document.addEventListener("dragstart", getClassOfTower);

let towerSelected;
let towerCoordinates = [];

function getClassOfTower() {
  let htmlCollection = document.getElementsByClassName(event.target.className);
  let tower = htmlCollection[0].className;
  let towerClass = "." + tower;

  towerSelected = document.querySelector(towerClass);
  towerSelected.addEventListener("dragstart", dragStart);
  towerSelected.addEventListener("dragend", dragEnd);
  return towerSelected;
}
//Choose all div that contain id = box
const empties = document.querySelectorAll("#box *");

//Loop through empties
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

//Drag functions
// 1. Start
function dragStart() {
  this.classList.add("hold");
  setTimeout(() => (this.classList.replace("hold", "visible"), 0));
}
// 2. Enter
function dragEnter(e) {
  e.preventDefault();
  this.classList.toggle("hoveredArea");
}
// 3. Over
function dragOver(e) {
  e.preventDefault();
}
// 4. Drop
function dragDrop() {
  this.append(towerSelected);
  this.classList.remove("hoveredArea");
  towerSelected.setAttribute("draggable", "false");
}
// 5. End
function dragEnd() {
  this.classList.remove("invisible");
  let rect = towerSelected.getBoundingClientRect();

  //towerCoordinates.push(rect);
  towerCoordinates.push([rect.top, rect.right, rect.bottom, rect.left]);

  console.log(
    "These are the coordinates of the tower",
    rect.top,
    rect.right,
    rect.bottom,
    rect.left
  );

  //console.log(towerClass);
  console.log("This is the array", towerCoordinates);
  //getCoordinates();
}

function dragLeave() {
  //console.log("Leave");
  this.classList.remove("hoveredArea");
}
//Now working
//Set up Canvas to delete bullets

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// ctx.fillStyle = "#FF0000";
// let x = 970;
// let y = 80;
// // let up = rect.top;
// // let right = rect.right;
// // let down = rect.bottom;
// // let left = rect.left;

// //Clear Bullets after them
// function clearCanvas() {
//   ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
// }

// document.addEventListener("keydown", function(event) {
//   console.log(event.which);

//   if ((event = 65)) {
//     //A
//     console.log("hello");
//     bullet();
//   }
// });

// function bullet() {
//   //x += 1;
//   y += 1;

//   clearCanvas();
//   ctx.fillRect(x, y, 10, 30);

//   window.requestAnimationFrame(fire);
// }

//window.requestAnimationFrame(fire);

// //When dropped we get coordinates
// function getCoordinates() {
//   towerCoordinates.forEach(function(singleTowerCoordinates) {
//     y1 += 1;
//     console.log("Tower Coordinates", towerCoordinates);
//     console.log("Single Tower Coordinates", singleTowerCoordinates);
//     clearCanvas();

//     //Shoot depending off tower drop
//     ctx.fillRect(50, y1, 7, 25);

//     //window.requestAnimationFrame(getCoordinates);
//   });
// }
// //window.requestAnimationFrame(getCoordinates);

// function fireBullet() {
//   console.log("I fire bullets!!!");
// }

// function keyUpHandler(e) {
//   if (e.keyCode == 83) {
//     //Simon
//     rightPressed = false;
//   } else if (e.keyCode == 68) {
//     //Diego
//     leftPressed = false;
//   } else if (e.keyCode == 71) {
//     //Giorgio
//     downPressed = false;
//   } else if (e.keyCode == 65) {
//     //Alex
//     upPressed = false;
//   } else if (e.keyCode == 77) {
//     //Marc
//     newBullet = false;
//   }
// }
