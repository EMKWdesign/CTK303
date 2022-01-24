var song1;
var f1;

function preload(){
  song1 = loadSound("assets/mchammer.mp3");
}

function setup() {
  createCanvas (width, height);
  song1.loop();
  f1 = loadFont ("assets/Draxel.ttf");
}

function mouseReleased(){
  if (song1.isPlaying()){
    song1.pause()
  } else {
    song1.loop();
  }
}
function touchStarted() {
  getAudioContext().resume();
}
