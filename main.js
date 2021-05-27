function setup() {
  canvas = createCanvas(550, 500);
  canvas.position(950, 120);

  video = createCapture(VIDEO);
  video.size(637, 480);
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('poses', gotPoses);
}

function draw(){
  background('#969A97');
}

function modelLoaded(){
  console.log("PoseNet Initialized!");
}

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
  }
}