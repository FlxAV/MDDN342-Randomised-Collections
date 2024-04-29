/*
 * This program draws your arrangement of faces on the canvas.
 */
const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [26, 105, 13];




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
  
  //Draw thre Leafy background
  let leafSpacing = 40; // Adjust spacing between leaves as needed
  for(let i = 0; i <= width; i += leafSpacing) {
    for(let j = 0; j <= height; j += leafSpacing) {
      push(); 
      translate(i, j); // Move to the position where the leaf will be drawn
      rotate(random(360)); // Rotate the leaf randomly
      leaf(0, 0); // Call the leaf function at the local origin
      pop(); 
    }
  }


    // Define parameters for the crowd
    let crowdDensity = 0.5; // Adjust density of the crowd
    let crowdScale = 10; // Adjust the scale of the noise map
    
    // Draw the crowd of heads
    for (let i = 0; i < canvasWidth; i += canvasWidth/10) {
      for (let j = 0; j < canvasHeight; j += canvasHeight/10) {
        // Use noise to determine whether to draw a head at this position
        let noiseValue = noise(i / crowdScale, j / crowdScale);
        if (noiseValue < crowdDensity) {
          let x = i + random(-50, 50); // Add some randomness to x position
          let y = j + random(-50, 50); // Add some randomness to y position
          drawHead(x, y); // Draw a head at the calculated position
        }
      }
    }
  

  // // draw a 7x4 grid of faces
  // let w = canvasWidth / 7;
  // let h = canvasHeight / 4;
  // for(let i=0; i<4; i++) {
  //   for(let j=0; j<7; j++) {
  //     let y = h/2 + h*i;
  //     let x = w/2 + w*j;
     
  //       push();
  //       translate(x, y);
  //       scale(w/25, h/25);
        
  //       //orangeAlienFace(tilt_value, eye_value, mouth_value);

  //       let shape = floor(random(3));

  //         // Given array of integers
  //       let array1 = [1, 0, 8, 9];
  //       let array2 = [4, 5, 6, 7];

  //       // Generate a random index within the range of the array length
  //       let randomInt1 = floor(random(4));;
  //       let randomInt2 = floor(random(4));;
  //       // Retrieve the random integer from the array
  //       let eyeR = array1[randomInt1];
  //       let eyeL = array2[randomInt2];

  //       let eyeSize1 = random(1,3);
  //       let eyeSize2 = random(1,4);

  //       let mouthWidth1 = random(0.5,2);
  //       let mouthWidth2 = random(0.8,2);


  //       kodamoHead(shape, eyeR, eyeL, eyeSize1, eyeSize2, mouthWidth1, mouthWidth2); 

  //       pop();

      
      
  //   }
  // }


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}


//Kodama Function

function drawHead(x, y) {
  push();
  translate(x, y);
  scale(random(2,5));
  let shape = floor(random(3));
  
  //Given array of integers
  let array1 = [1, 0, 8, 9];
  let array2 = [4, 5, 6, 7];

  // Generate a random index within the range of the array length
  let randomInt1 = floor(random(4));;
  let randomInt2 = floor(random(4));;
  // Retrieve the random integer from the array
  let eyeR = array1[randomInt1];
  let eyeL = array2[randomInt2];


  let eyeSize1 = random(1, 3);
  let eyeSize2 = random(1, 4);
  let mouthWidth1 = random(0.5, 2);
  let mouthWidth2 = random(0.8, 2);
  kodamoHead(shape, eyeR, eyeL, eyeSize1, eyeSize2, mouthWidth1, mouthWidth2);
  pop();
}

//Background

function leaf(leafX, leafY) {
  //fill(120, 200, 100);
  fill(random(85,155), random(185,215), random(85,115));

  arc(leafX, leafY, 30, 60, -90, 90);
  arc(leafX, leafY, 30, 60, 90, -90);
  stroke(0, 70, 50);

  line(leafX, leafY - 10, leafX - 40 + 28, leafY - 40 + 23);
  line(leafX, leafY - 10, leafX - 11 + 24, leafY - 40 + 23);
  line(leafX, leafY - 30, leafX, leafY + 40);
  line(leafX - 14, leafY - 10, leafX, leafY);
  line(leafX + 14, leafY - 10, leafX, leafY);
  line(leafX - 14, leafY, leafX, leafY + 10);
  line(leafX,leafY+10,leafX+15,leafY-2); 
  line(leafX, leafY + 22, leafX - 15, leafY + 9);
  line(leafX, leafY + 22, leafX + 15, leafY + 9);
}