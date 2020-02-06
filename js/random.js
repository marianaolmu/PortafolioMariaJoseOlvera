function randomImage() {
  var images = [
    'img/header-bg3.jpg',
    'img/header-bg2.jpg',
    'img/header-bg12.jpg'
  ];
  var imgAmount = images.length;
  var x = Math.floor(imgAmount * Math.random());
  document.querySelector('.mainflex').style.backgroundImage = "url(" + images[x] + ")";
  document.querySelector('.imgWindow1').style.backgroundImage = "url(" + images[x] + ")";
  document.querySelector('.imgWindow2').style.backgroundImage = "url(" + images[x] + ")";
}

window.onload = randomImage;