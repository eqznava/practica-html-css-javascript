let myImage = document.querySelector('img');

myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/jack.png') {
    myImage.setAttribute('src', 'images/jack_1.png');
  } else {
    myImage.setAttribute('src', 'images/jack.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('Por favor escriba su nombre:');
  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hola '+ myName +' soy Jackito';
  }
}

if(!localStorage.getItem('name')){
  setUserName();
}else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hola '+ storedName +' soy Jackito';
}

myButton.onclick = function(){
  setUserName();
}
