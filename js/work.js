

function getStuff(){
  document.querySelector('#tuna').onclick=talk; /* this is saying go into the document and get the first element with an id of tuna */

  var list = document.querySelectorAll('#tuna');
  // list[1].onclick=doSomething;
  for(var i=0; i < list.length; i++){
    list[i].onclick=talk;
  }
}



function talk(){
  alert('i am the first');
}
window.onload=getStuff;

// function doSomething(){
//   alert('i am the third')
// }
// window.onload=getStuff;