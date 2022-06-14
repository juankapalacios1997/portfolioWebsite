let portraitOne = document.getElementById('portrait-one');
let portraitTwo = document.getElementById('portrait-two');
let portraitThree = document.getElementById('portrait-three');
let portraitFour = document.getElementById('portrait-four');

portraitOne.onclick = function(){
    portraitOne.style.display = 'none';
    portraitTwo.style.display= 'flex';
}
portraitTwo.onclick = function(){
    portraitTwo.style.display = 'none';
    portraitThree.style.display= 'flex';
}
portraitThree.onclick = function(){
    portraitThree.style.display = 'none';
    portraitFour.style.display= 'flex';
}
portraitFour.onclick = function(){
    portraitFour.style.display = 'none';
    portraitOne.style.display= 'flex';
}
