
function executeFirst() {
    var x = document.getElementById('canvas');

    canvas = x.getContext('2d');

    // canvas.fillStyle='blue';

    // canvas.strokeStyle='red'

    // canvas.strokeRect(10,10,100,100);

    // canvas.fillRect(10,120,100,100);

    // canvas.clearRect(20,130,45,65);


    // var g = canvas.createLinearGradient(0,0,100,100);

    // g.addColorStop(.0,'blue');

    // g.addColorStop(.5,'green');


    // g.addColorStop(1,'red');

    // canvas.fillStyle=g;
    // canvas.fillRect(0,0,100,100);

  // canvas.begingPath();
  // canvas.moveTo(50,50);
  // canvas.lineTo(70,250);
  // canvas.lineTo(300,200);
  // canvas.closePath();
  // canvas.stroke();


  //CANVAS TRANSFORMATION:

  canvas.font='bold 22px Tahoma'
  canvas.textAlign='start';
  canvas.fillText('start', 10,30);

  canvas.translate(100,150);
  canvas.fillText('after translate', 0, 0);

  canvas.rotate(1);
  canvas.fillText('after rotate', 0,0);

  canvas.scale(1.5,4);
  canvas.fillText('after scale', 0,20);

  //WORKING WITH IMAGES ON THE CANVAS

  var pic = new Image();
  pic.src="image/unsplash5.jpeg";
  pic.addEventListener('load', function(){
    canvas.drawImage(pic,0,0,x.width,x.height)
  }, false)


  //USING CANVAS ANIMATION FOR GAMES

  window.addEventListener('mousemove', Animate, false)
};

function Animate (e) {
  // canvas.clearRect(0,0,600,400); // what this does is it takes a shape as a parameter and it clears all the pixels in it.

  var xPosition = e.clientX; //this is to get the position of x in the canvas

  var yPosition = e.clientY;

  canvas.fillRect(xPosition-50,yPosition-50,100,100); // this is saying make a rectangle from the x to the y position(whenever the mouse is moving around)
}

window.addEventListener('load', executeFirst, false)