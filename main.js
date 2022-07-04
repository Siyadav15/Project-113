function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(400,250);
    video=createCapture(VIDEO);
    video.hide();
 

}
function draw(){
    image(video,90,90,400,300);
    fill(247, 156, 151);
    stroke(247, 156, 151);
    circle(70,80,80);
    circle(500,80,80);
    circle(70,400,80);
    circle(520,400,80);
    fill(127, 240, 227);
    stroke(127, 240, 227);
    rect(90,90,400,20);
    rect(90,90,20,300);
    rect(90,390,400,20);
    rect(480,90,20,320);

}
function take_snapshot(){
    save('image.png');
}
