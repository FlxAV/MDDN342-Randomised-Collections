/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}



// class Blob {
//   constructor(x, y, rad) {
 
//    this.x = x;
//    this.y = y;
//    this.rad = rad;
//    this.szDelta = this.rad * 0.35; // Set the displace amount 35% of the radius
//    this.blobObj = [];
   
//   // constants
//   this.res = 10; // the number of points 
//   this.angle = 360 / this.res; // angular distance between each point
//   }
 
//   display() {
//    push(); // It's a good practice to use push and pop whenevewer you translate screen coordinates
//    noFill(); // Do not fill the shape with color. Just draw strokes
//    translate(this.x, this.y); // translate the screen coordinate from top-left to middle of the canvas
//    beginShape(); // start to draw custom shape
//    for (var i = 0; i < this.res; i++) {
//     var randRad = min(this.rad, this.rad+random(-this.szDelta, this.szDelta));
//     this.blobObj.push({
//      "rad": randRad,
//      "x": randRad * cos(this.angle * i),
//      "y": randRad * sin(this.angle * i)
//     });
//     circle(this.blobObj[i].x, this.blobObj[i].y, 5);
//     curveVertex(this.blobObj[i].x, this.blobObj[i].y); // add points to the custom shape
//    }
//    curveVertex(this.blobObj[0].x, this.blobObj[0].y);
//    curveVertex(this.blobObj[1].x, this.blobObj[1].y);
//    curveVertex(this.blobObj[2].x, this.blobObj[2].y);
//    endShape(); // we finish adding points
//    pop();
//   }
 
//  }


var blobObj = []; // array of objects that holds blob attributes

function kodamoHead(shape) {
  let rad = 7; // radius of the circular path
  let res = 10; // the number of points
  let angle = 360 / res; // angular distance between each point
  let randomGap = 1;
  angleMode(DEGREES); // enable the Degree mode not to make calculations easier.


  // Clear the array to store new blob attributes
 // blobObj = [];

  // Modify the initial shape based on the value of the 'shape' parameter
  if (shape === 0) {
    fill(0,0,255);
    // Circle
    for (var i = 0; i < res; i++) {
      rad += random(-randomGap, randomGap);
      blobObj.push({
        "rad": rad,
        "x": rad * cos(angle * i),
        "y": rad * sin(angle * i)
      });
    }
  } else if (shape === 1) {
    fill(0,255, 0);
    // Horizontal oval
    for (var i = 0; i < res; i++) {
      rad += random(-randomGap, randomGap);
      blobObj.push({
        "rad": rad,
        "x": rad * cos(angle * i),
        "y": rad * sin(angle * i) * 0.6
      });
    }
  } else if (shape === 2) {
    fill(255, 0, 0);
    // Vertical oval
    for (var i = 0; i < res; i++) {
      rad += random(-randomGap, randomGap);
       blobObj.push({
        "rad": rad,
        "x": rad * cos(angle * i)* 0.6,
        "y": rad * sin(angle * i)
      });
    }
  }

   // Generate random RGB values within the specified range
   let r = random(220, 255); // Random red value between 220 and 255
   let g = random(240, 255); // Random green value between 240 and 255
   let b = random(230, 255); // Random blue value between 230 and 255
 
   // Fill the shape with the random color
   //fill(r, g, b);

  // Draw the shape
  push();
  beginShape();
  for (var i = 0; i < res; i++) {
    curveVertex(blobObj[i].x, blobObj[i].y);
  }
  curveVertex(blobObj[0].x, blobObj[0].y);
  curveVertex(blobObj[1].x, blobObj[1].y);
  curveVertex(blobObj[2].x, blobObj[2].y);
  endShape(); // we finish adding points
  pop();
}




