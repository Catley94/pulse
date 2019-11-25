const squareCollection = document.querySelector('.squareCollection');
const fullX = document.querySelector('.X');
const topVCollection = document.querySelector('.topVCollection');
const bottomVCollection = document.querySelector('.bottomVCollection');
//Prep for adding squares under squareCollection
const topVFragment = document.createDocumentFragment();
const bottomVFragment = document.createDocumentFragment();

//number of squares
const grid = [1, 10];
//number of squares in column 0
const col = grid[0];
//number of squares in row 1
const row = grid[1];
//total number of squares
const numberOfElements = col * row;

//Create <number> of squares to be under/within "squareCollection"
for (let i = 0; i < numberOfElements; i++) {
  //create variable for new div so can be referenced 
  const bottomVDiv = document.createElement('div');
  const topVDiv = document.createElement('div');
  //Add a class of square
  topVDiv.classList.add('topV')
  bottomVDiv.classList.add('bottomV')
  //Add a class of square + number 
  bottomVDiv.classList.add('topV'+ i)
  topVDiv.classList.add('topV'+ i)
  //add 'children' squares in variable 'fragment'
  topVFragment.appendChild(topVDiv);
  bottomVFragment.appendChild(bottomVDiv);
}
//Add divs to squareCollection
topVCollection.appendChild(topVFragment);
bottomVCollection.appendChild(bottomVFragment);
fullX.appendChild(topVCollection);
fullX.appendChild(bottomVCollection);
//Creating a variable ref all 'square' classes
const squares = document.querySelectorAll('.square');
const topVDivs = document.querySelectorAll('.topV');
const bottomVDivs = document.querySelectorAll('.bottomV');


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
// anime({
//   //target class of all squares
//   targets: '.square',
//   //do not loop
//   loop: false,
//   //'stagger' from 0 - 250 on the Y Axis
//   translateY: anime.stagger([0, 250], {from: 'center'}),
//   //Move on the X Axis
//   translateX: anime.stagger([0, 100]),
//   //Make all squares have a borderRadius of 40%
//   borderRadius: ['0%', '40%'],
//   //Change size of squares
//   scaleY: 2,
//   // delay: anime.stagger(100)
// });
anime({
  //target class of all squares
  targets: ['.topV', '.bottomV'],
  //do not loop
  loop: false,
  //'stagger' from 0 - 250 on the Y Axis
  translateY: anime.stagger([0, 500], {from: 'center'}),
  //Move on the X Axis
  translateX: anime.stagger([0, 200]),
  //Make all squares have a borderRadius of 40%
  borderRadius: ['0%', '40%'],
  //Change size of squares
  scaleY: 2,
  // delay: anime.stagger(100)
});

anime({
  //target class of all squares
  targets: '.topVCollection',
  //do not loop
  loop: false,
  rotate: 180,
  scale: 1.4
});

anime({
  //target class of all squares
  targets: '.bottomVCollection',
  //do not loop
  loop: false,
  scale: 1.4
});

// anime({
//   //target class of all squares
//   targets: '.bottomV',
//   //do not loop
//   loop: false,
//   //'stagger' from 0 - 250 on the Y Axis
//   translateY: anime.stagger([0, 250], {from: 'center'}),
//   //Move on the X Axis
//   translateX: anime.stagger([0, 200]),
//   //Make all squares have a borderRadius of 40%
//   borderRadius: ['0%', '40%'],
//   //Change size of squares
//   scaleY: 2,
//   // delay: anime.stagger(100)
// });


anime({
  //target class of all squares
  targets: '.X',
  //do not loop
  loop: false,
  translateY: 800,
  translateX: 300,
  //'stagger' from 0 - 250 on the Y Axis
  //Move on the X Axis

  //Make all squares have a borderRadius of 40%
  // borderRadius: ['0%', '40%'],
  //Change size of squares
  // scaleY: 2,
  // delay: anime.stagger(100)
});

function pulse() {
  anime({
    targets: '.topV',
    scale: [
      {value: 1.5, easing: 'easeInOutSine', duration: 200},
      {value: 1, easing: 'easeInOutSine', duration: 200}
    ],
    loop: true,
    // backgroundColor: '#ff0000',
    // delay: anime.stagger(100, {from: 'center'})
    delay: anime.stagger(100)
  });
  anime({
    targets: '.bottomV',
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
    targets: '.topV',
    scale: [
      {value: 2, easing: 'easeInOutSine', duration: 100},
      {value: 1, easing: 'easeInOutSine', duration: 200}
    ],
    loop: false,
    delay: anime.stagger(100, {from: 'center'})
    // delay: anime.stagger(100)
  });
  anime({
    targets: '.bottomV',
    scale: [
      {value: 2, easing: 'easeInOutSine', duration: 100},
      {value: 1, easing: 'easeInOutSine', duration: 200}
    ],
    loop: false,
    delay: anime.stagger(100, {from: 'center'})
    // delay: anime.stagger(100)
  });
}

topVCollection.addEventListener('click', pulse)
bottomVCollection.addEventListener('click', pulse)
topVCollection.addEventListener('mouseout', reversePulse)
bottomVCollection.addEventListener('mouseout', reversePulse)

