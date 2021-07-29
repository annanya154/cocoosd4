img = "";
status = "";
objects = [];
function setup()
{
canvas = createCanvas(640  , 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload()
{
img = loadImage('dog_cat.jpg'); 
img2 = loadImage('image1.webp');   
}

function draw()
{
image(img2 , 0 , 0 , 640 , 420);
if(status != "")
{
 for (i = 0; i< objects.length; i++)
 {
 document.getElementById("status").innerHTML = "Status : Object Detected";
 
 fill("#D90368");
 percent = floor(objects[i].confidence * 100);
 text(objects[i].label + " " + percent + "%" , objects[i].x , objects[i].y );
 noFill();
 stroke("#F1C40F");
 rect(objects[i].x, objects[i].y , objects[i].width , objects[i].height );
 }
}
}

function modelLoaded()
{
console.log("Model Loaded!");
status = true;
objectDetector.detect(img2 , gotResult); 
}

function gotResult(error , results)
{
if ( error)
{
 console.log(error);
  }
  console.log(results);  
  objects = results;  
}