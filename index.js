const squareCollection = document.querySelector('.squareCollection');
const fragment = document.createDocumentFragment();
const grid = [1, 10];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('square')
  newDiv.classList.add('square'+ i)
  fragment.appendChild(newDiv);
}
console.log(numberOfElements)
squareCollection.appendChild(fragment);

const squares = document.querySelectorAll('.square');
console.log(squares)
let yPos = 0;
let xPos = 0;

function xBoundries() {
  
}

const test1 = 0;
const test2 = 50;

// if(xPos <= 0) {
//   return xPos += 5
// } else if(xPos >= 30) {
//   return xPos -= 5;
// }

let fromVar = true;
anime({
  targets: '.square',
  loop: false,
  translateY: anime.stagger([0, 250]),
  // translateY: function() {
  //   return yPos += 18;
  // },
  translateX: 0,
  borderRadius: ['0%', '40%'],
  scaleY: 2,
  // delay: anime.stagger(100)
});


function pulse() {
  anime({
    targets: '.square',
    scale: [
      {value: 1.5, easing: 'easeInOutSine', duration: 200},
      {value: 1, easing: 'easeInOutSine', duration: 200}
    ],
    loop: true,
    // backgroundColor: '#ff0000',
    // delay: anime.stagger(100, {from: 'center'})
    delay: anime.stagger(100)
  });

  
}

function reversePulse() {
  anime({
    targets: '.square',
    scale: [
      {value: 2, easing: 'easeInOutSine', duration: 100},
      {value: 1, easing: 'easeInOutSine', duration: 200}
    ],
    loop: false,
    delay: anime.stagger(100, {from: 'center'})
    // delay: anime.stagger(100)
  });
}

squareCollection.addEventListener('click', pulse)
squareCollection.addEventListener('mouseout', reversePulse)

