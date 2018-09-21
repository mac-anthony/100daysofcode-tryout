
 
 function doSomething(){

    myPic = document.getElementById('my-pic').addEventListener('dragstart', startDrag, false)

    leftbox = document.getElementById('letfbox');

    leftbox.addEventListener('dragenter', function(e){

    }, false)

    leftbox.addEventListener('dragover', function(e){

    }, false)

    leftbox.addEventListener('drop', dropped, false)
 }

 window.addEventListener('load', doSomething, false) //this basically going to fire off as soon as the page loads 