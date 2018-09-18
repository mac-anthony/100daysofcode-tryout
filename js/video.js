
function doFirst() {
  barSize = 600;
  myMovie = document.getElementById('my-movie');
  playButton = document.getElementById('playButton');

  bar = document.getElementById('defaultBar');

  progressBar = document.getElementById('progressBar');

  playButton.addEventListener('click', playorpause , false);

  bar.addEventListener('click', clickedBar, false);
}


function playorpause() {
  if (!myMovie.paused && !myMovie.ended) {
    myMovie.pause();
    playButton.innerHTML = 'Play'
    window.clearInterval(updateBar);
  }
  else {
    myMovie.play();
    playButton.innerHTML = 'Pause';
    updateBar = setInterval(update, 500);
  }
}

function update() {
  if (!myMovie.ended) {
    var size = parseInt(myMovie.currentTime*barSize/myMovie.duration); //this changes the size of the progressBar

    progressBar.style.width = size + 'px';
  }
  else{
    progressBar.style.width= '0px';
    playButton.innerHTML = 'PLAY';
    window.clearInterval(updateBar);
  }
}


function clickedBar(e) {
   if (!myMovie.paused && !myMovie.ended){
     var mouseX = e.pageX - bar.offsetLeft; 
     var newTime = mouseX * myMovie.duration / barSize;
     myMovie.currentTime = newTime;
     progressBar.style.width = mouseX + 'px';
   }
}

window.addEventListener('load', doFirst, false)