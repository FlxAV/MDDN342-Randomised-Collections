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





var blobObj = []; // array of objects that holds blob attributes

function kodamoHead(shape, eyeR, eyeL, eyeSize1, eyeSize2, mouthWidth1, mouthWidth2) {
  let rad = 7; // radius of the circular path
  let res = 10; // the number of points
  let angle = 360 / res; // angular distance between each point
  let randomGap = 1;
  angleMode(DEGREES); // enable the Degree mode not to make calculations easier.
  // Generate random RGB values within the specified range
  let r = random(235, 255); // Random red value between 220 and 255
  let g = random(250, 255); // Random green value between 240 and 255
  let b = random(245, 255); // Random blue value between 230 and 255
  
  let a = 255;
  
  let prob1 = floor(random(100));
  let prob2 = floor(random(100));

  if(prob2<30){
    a = random(200, 255);
  }
  
  let kodamaColor = [b, g, r, a];
  if(prob1 === 1){
    kodamaColor = [ 255, 204, 255, a];
  }

  
  // Fill the shape with the random color
  fill(kodamaColor);

 //editor color - UNCOMENT IF USING THE EDITOR
 //fill(255);

  kodamaBody(kodamaColor);

  // Clear the array to store new blob attributes  COMMENT OUT WHEN USING EDITOR
  blobObj = [];

  // Modify the initial shape based on the value of the 'shape' parameter
  if (shape === 0) {
    //fill(0,0,255);
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
    //fill(0,255, 0);
    // Horizontal oval
    for (var i = 0; i < res; i++) {
      rad += random(-randomGap, randomGap);
      blobObj.push({
        "rad": rad,
        "x": rad * cos(angle * i) * 1.2 ,
        "y": rad * sin(angle * i) * 0.9
      });
    }
  } else if (shape === 2) {
    //fill(255, 0, 0);
    // Vertical oval
    for (var i = 0; i < res; i++) {
      rad += random(-randomGap, randomGap);
       blobObj.push({
        "rad": rad,
        "x": rad * cos(angle * i)* 0.9,
        "y": rad * sin(angle * i) * 1.2
      });
    }
  }
   
   

  // Draw the shape
  push();
  strokeWeight(0.3);
  beginShape();
  for (var i = 0; i < res; i++) {
    curveVertex(blobObj[i].x, blobObj[i].y);
  }
  curveVertex(blobObj[0].x, blobObj[0].y);
  curveVertex(blobObj[1].x, blobObj[1].y);
  curveVertex(blobObj[2].x, blobObj[2].y);
  endShape(); // we finish adding points

//to view the points on the blob
  for(let i = 0; i<10;i++){
  // ellipse(blobObj[i].x, blobObj[i].y, 1, 1);
  }

 ellipse(blobObj[2].x, blobObj[2].y, 1, 1);
  fill(255,0,0);
  ellipse(blobObj[3].x, blobObj[3].y, 1, 1);

// Adjust the coordinates of the eyes to center them around (0, 0)
let xCord1 = (blobObj[eyeR].x) - (blobObj[eyeR].x)/2;
let yCord1 = (blobObj[eyeR].y) - (blobObj[eyeR].y)/2;
let xCord2 = (blobObj[eyeL].x) - (blobObj[eyeL].x)/2;
let yCord2 = (blobObj[eyeL].y) - (blobObj[eyeL].y)/2;

//console.log("X1: "+xCord1+" || Y1: "+ yCord1+" || X2: "+xCord2+" || Y2: "+yCord2);

fill(0);
noStroke();
ellipse(xCord1, yCord1, eyeSize1); // Left eye
//fill(255,0,0);
ellipse(xCord2, yCord2, eyeSize2); // Right eye


  // Draw smile
 

  let lowerEyeCord;
  let lowerEyeSize;
  if(yCord1<yCord2){
    lowerEyeCord = yCord2;
    lowerEyeSize = eyeSize2;
  }else{
    lowerEyeCord = yCord1;
    lowerEyeSize = eyeSize1;
  }

  //console.log("YCord1 : "+yCord1+" || YCord2 : "+yCord2 + " || Lowere Eye: "+lowerEyeCord);

  let chinPoint = blobObj[3].y;

  let mouthWidth = lowerEyeSize * 2;
  let mouthHeight = lowerEyeSize * 0.5;
  let mouthX = (xCord1 + xCord2) / 2;
  let mouthY = lowerEyeCord + lowerEyeSize * 0.7;

  let widthFactor1 = mouthWidth1;
  let widthFactor2 = mouthWidth2;

   // Check if the mouth would be drawn below the chin point
   if (mouthY + mouthHeight * widthFactor1 > chinPoint) {
    // Adjust the mouth y-coordinate to be above the chin point
    mouthY = chinPoint - mouthHeight * widthFactor1 * 2;
  }
  // Draw bezier curves for smile
  beginShape();
  // First curve
  let x1 = mouthX - mouthWidth * 0.5;
  let y1 = mouthY + mouthHeight * widthFactor1;
  let x2 = mouthX - mouthWidth * 0.25;
  let y2 = mouthY + mouthHeight * widthFactor2;
  let x3 = mouthX + mouthWidth * 0.25;
  let y3 = mouthY + mouthHeight * widthFactor2;
  let x4 = mouthX + mouthWidth * 0.5;
  let y4 = mouthY + mouthHeight * widthFactor1;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  // Second curve
  let x5 = mouthX + mouthWidth * 0.5;
  let y5 = mouthY + mouthHeight * widthFactor1;
  let x6 = mouthX + mouthWidth * 0.25;
  let y6 = mouthY + mouthHeight * widthFactor2;
  let x7 = mouthX - mouthWidth * 0.25;
  let y7 = mouthY + mouthHeight * widthFactor2;
  let x8 = mouthX - mouthWidth * 0.5;
  let y8 = mouthY + mouthHeight * widthFactor1;
  bezier(x5, y5, x6, y6, x7, y7, x8, y8);
  endShape();


  pop();

}




function kodamaBody(){
  angleMode(DEGREES); // enable the Degree mode not to make calculations easier.
  strokeWeight(0.7);
  push();
  translate(0,10);
  scale(0.5);
   //Legs
   ellipse(-3,12,5,12);
   ellipse(3,12,5,12);
 
   //Arms
   push();
   rotate(20);
   translate(-8,-1);
   ellipse(0,0,5,15);
   pop();
 
   push();
   rotate(-20);
   translate(8,-1);
   ellipse(0,0,5,15);
   pop();

  // Draw pear shape
  beginShape();
  curveVertex(0, -10);    // Top point of the pear
  curveVertex(-3, -9);    // Right upper curve
  curveVertex(-8, 0);     // Right middle curve
  curveVertex(-8, 7);     // Right lower curve
  curveVertex(0, 12);     // Bottom point of the pear
  curveVertex(8, 7);      // Left lower curve
  curveVertex(8, 0);      // Left middle curve
  curveVertex(3, -9);     // Left upper curve
  endShape(CLOSE);

 pop();


}

