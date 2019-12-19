document.addEventListener("dragstart", getClassOfTower);

let towerSelected;
let towerCoordinates = [];

function getClassOfTower() {
  let htmlCollection = document.getElementsByClassName(event.target.className);
  let tower = htmlCollection[0].className;
  let towerClass = "." + tower;

  //console.log(htmlCollection);
  //console.log(tower);
  //console.log("This is the class of div: ", towerClass);

  towerSelected = document.querySelector(towerClass);

  towerSelected.addEventListener("dragstart", dragStart);
  towerSelected.addEventListener("dragend", dragEnd);
  return towerSelected;
}

const empties = document.querySelectorAll("#box *");

//Loop through empties
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

//Drag functions
function dragStart() {
  //console.log("1. Start");
  this.classList.add("hold");
  setTimeout(() => (this.classList.replace("hold", "visible"), 0));
}

function dragEnter(e) {
  //console.log("2. Enter");

  e.preventDefault();
  this.classList.toggle("hoveredArea");
}

function dragOver(e) {
  console.log("3. Over");
  e.preventDefault();
}

function dragDrop() {
  //console.log("4. Drop");
  this.append(towerSelected);
  this.classList.remove("hoveredArea");
  towerSelected.setAttribute("draggable", "false");
}

function dragEnd() {
  //console.log("5. End");
  this.classList.remove("invisible");
  let rect = towerSelected.getBoundingClientRect();
  towerCoordinates.push(rect);

  console.log(
    "These are the coordinates of the tower",
    rect.top,
    rect.right,
    rect.bottom,
    rect.left
  );
  console.log("This is the array", towerCoordinates);
  detect();
}

function dragLeave() {
  //console.log("Leave");
  this.classList.remove("hoveredArea");
}

//Loop through towers

function detect() {
  console.log("Detecto!!!");
  towerCoordinates.forEach(function(singleTowerCoordinates) {
    singleTowerCoordinates.addEventListener("change", fireBullet);
    console.log("is it working", singleTowerCoordinates);
  });
}

function fireBullet() {
  console.log("I fire bullets!!!");
}
