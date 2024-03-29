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



let numPoints = 300; // Number of points on the circumference
let circleRadius = 4; // Radius of the circle
let noiseScale = 0.1; // Scale factor for Perlin noise
let noiseStrength = 2; // Strength of the noise

function basicHumanFace() {
  // Draw circle
  fill(255);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    // Calculate angle for this point
    let angle = map(i, 0, numPoints, 0, TWO_PI);
    // Calculate position on the circumference
    let x = cos(angle) * circleRadius;
    let y = sin(angle) * circleRadius;
    // Apply Perlin noise to create oscillations
    let noiseValue = noise(x * noiseScale, y * noiseScale);
    let noiseOffset = map(noiseValue, 0, 1, -noiseStrength, noiseStrength);
    // Apply noise offset to position
    x += noiseOffset;
    y += noiseOffset;
    // Ensure the shape stays within the bounding box
    x = constrain(x, -10 + circleRadius, 10 - circleRadius);
    y = constrain(y, -10 + circleRadius, 10 - circleRadius);
    // Draw vertex
    vertex(x, y);
  }
  endShape(CLOSE);
}

