function preload(){
    
}

function setup() {
    canvas=createCanvas(700, 500);
    canvas.position(300, 100);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){

    image(video, 200, 125, 350, 250 )

   fill(128, 0, 0);
   stroke(128, 0, 0);
   circle(100, 50, 70);

   circle(100, 450, 70);

   circle(650, 450, 70);

   circle(650, 50, 70);

   fill(0, 128, 0);
   stroke(128, 0, 0);
   rect(635, 75, 30, 350);

   rect(85, 75, 30, 350);

   rect(125, 45, 500, 30);

   rect(125, 425, 500, 30);
   }

