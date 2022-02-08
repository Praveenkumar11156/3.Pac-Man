let pos = 0;
const pacArray = ['./images/pacmanblue.png'];

let direction = 0;// beginning direction set 0
const pacMen = []; 
// setToRandom function to returns an object random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}  
  
// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(5); // {x:?, y:?}
  let position = setToRandom(200);

  // image pacman to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/pacmanblue.png';
  newimg.width = 100;

  // set the style property position here
  newimg.style.left = position.x;
  newimg.style.top = position.y;

  // adding a new Child image to pacman game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}
//This checkCollisions function to set image width and windows inner width
function checkCollisions(item) {
  if ((item.position.x + item.velocity.x + item.newimg.width >= window.innerWidth) || (item.position.x + item.velocity.x < 0)) {
    item.velocity.x = -item.velocity.x;
  }
  //Image comes backword to chech this if condition then its true after work this
  if ((item.position.y + item.velocity.y + item.newimg.height >= window.innerHeight) || (item.position.y + item.velocity.y < 0)) {
    item.velocity.y = -item.velocity.y;
  }
}
// add a new PacMan
function makeOne() {
  pacMen.push(makePac()); 
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
