let time = 0;
let wave =[];
let slider;
let radius_slider;

function setup() {
  createCanvas(1400,500);
  slider = createSlider(1, 10, 1);
  radius_slider = createSlider(50, 150, 20);
  textFont("Arial");

}

function draw() {
  background(0);
  textSize(20);
  text("FOURIER SEREIRS OF A SQUARE WAVE",25,50);
  text("No of circle", 10, 490);
  text("Circle Radius", 140, 490);
  translate(200,200);

  let x =0;
  let y =0;

  for (let i = 0; i < slider.value(); i++){
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = radius_slider.value() * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);
  
    stroke(255,100);
    noFill();
    ellipse(prevx, prevy, radius * 2);
    
    fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    ellipse(x,y,3);
  }
  wave.unshift(y);
  
  translate(200,0);
  line(x-200, y, 0, wave[0]);

  beginShape();
  for (let i =0; i< wave.length; i++) {
    noFill();
    vertex(i, wave[i]);
  }
  endShape(); 

  time +=0.05;
  
  if (wave.length >= 900) {
    wave.pop();
  }
}