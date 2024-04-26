/*
 * This program draws your arrangement of faces on the canvas.
 */
const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [71, 222, 219];




function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));
  

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  //noStroke();



  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
     
        push();
        translate(x, y);
        scale(w/25, h/25);
        
        //orangeAlienFace(tilt_value, eye_value, mouth_value);

        let shape = floor(random(3));

          // Given array of integers
        let array1 = [1, 0, 8, 9];
        let array2 = [4, 5, 6, 7];

        // Generate a random index within the range of the array length
        let randomInt1 = floor(random(4));;
        let randomInt2 = floor(random(4));;
        // Retrieve the random integer from the array
        let eyeR = array1[randomInt1];
        let eyeL = array2[randomInt2];

        let eyeSize1 = random(1,3);
        let eyeSize2 = random(1,4);

        let mouthWidth1 = random(0.5,2);
        let mouthWidth2 = random(0.8,2);


        kodamoHead(shape, eyeR, eyeL, eyeSize1, eyeSize2, mouthWidth1, mouthWidth2); 

        pop();
      
    }
  }


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}


//Background
