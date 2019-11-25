const squareCollection = document.querySelector('.squareCollection');
//Prep for adding squares under squareCollection
const fragment = document.createDocumentFragment();
//number of squares
const grid = [1, 20];
//number of squares in column 0
const col = grid[0];
//number of squares in row 1
const row = grid[1];
//total number of squares
const numberOfElements = col * row;

//Create <number> of squares to be under/within "squareCollection"
for (let i = 0; i < numberOfElements; i++) {
  //create variable for new div so can be referenced 
  const newDiv = document.createElement('div');
  //Add a class of square
  newDiv.classList.add('square')
  //Add a class of square + number 
  newDiv.classList.add('square'+ i)
  //add 'children' squares in variable 'fragment'
  fragment.appendChild(newDiv);
}
//Add divs to squareCollection
squareCollection.appendChild(fragment);
//Creating a variable ref all 'square' classes
const squares = document.querySelectorAll('.square');

const minXPos = 0;
let currentXPos = 0;
const maxXPos = 30;

// function wavyLine() {
//   if(currentXPos >= maxXPos) {
//     currentXPos - 5;
//     return currentXPos;
//   } else if(currentXPos <= minXPos){
//     currentXPos + 5;
//     return currentXPos;
//   }
// }

// squares.forEach(square => square.style.left = `${wavyLine()}px`)

//Default animation to 'setup' the structure of squares
anime({
  //target class of all squares
  targets: '.square',
  //do not loop
  loop: false,
  //'stagger' from 0 - 250 on the Y Axis
  translateY: anime.stagger([0, 250], {from: 'center'}),
  //Move on the X Axis
  translateX: anime.stagger([0, 100]),
  //Make all squares have a borderRadius of 40%
  borderRadius: ['0%', '40%'],
  //Change size of squares
  scaleY: 2,
  // delay: anime.stagger(100)
});

//Bottom V
anime({
  //target class of all squares
  targets: '.squareCollection',
  //do not loop
  loop: false,
  //'stagger' from 0 - 250 on the Y Axis
  translateY: 100,
  //Move on the X Axis
  translateX: 100,
  //Make all squares have a borderRadius of 40%
  // borderRadius: ['0%', '40%'],
  //Change size of squares
  // scaleY: 2,
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

