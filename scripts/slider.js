const slideImages = document.querySelector(".slide");
let x = 0;

let images = [
  "./images/ann_taylor_logo-min.jpg",
  "./images/childrensplace_logo-min.jpg",
  "./images/loft_logo-min.jpg",
  "./images/lou_and_grey_logo-min.jpg",
  "./images/sapient_razorfish_logo-min.jpg",
];


nextImg = () => {
    if (x < images.length) {
        x = x + 1;
      } else {
        x = 1;
      }
      slideImages.innerHTML = "<img src=" + images[x - 1] + ">";
}

setInterval(nextImg, 2000);