// Hope Squires
// May 3rd, 2024
// JavaScript Simple Slideshow

let i = 0;

const images = [];

images[0] = "hellokitty2.jpg";
images[1] = "mymelody1.webp";
images[2] = "kuromi1.webp";
images[3] = "cinnamoroll2.png";

const captions = ['Hello Kitty image', 'My Melody image','Kuromi image','Cinnamoroll image'];

const time = 3000;

function changeImg() {
    document.slide.src = images[i];
    const myCaption = document.querySelector('#sanrio-caption');
    myCaption.innerHTML = captions[i];

    if (i < images.length - 1) {
      i++;  
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;