const insert = document.getElementById("insert");
const previous = document.getElementById("slideLeft");
const following = document.getElementById("slideRight");
const timer = 5000;
let library = [
  '<img src="images/image01.jpg">',
  '<img src="images/image02.jpg">',
  '<img src="images/image03.jpg">',
  '<img src="images/image04.jpg">',
];
let imageIndex = 0;

const createImage = (i) => {
  insert.innerHTML = "";
  insert.innerHTML = library[i];
  imageIndex++;
};

const changeImage = () => {
  if (imageIndex >= library.length) {
    imageIndex = 0;
    createImage(imageIndex);
  } else {
    createImage(imageIndex);
  }
};

const loop = () => {
  changeImage();
  setTimeout(() => {
    loop();
  }, timer);
};

loop();

previous.addEventListener("click", () => {
  if (imageIndex > 1) {
    imageIndex = imageIndex - 2;
    createImage(imageIndex);
    imageIndex = imageIndex - 1;
  } else {
    imageIndex = library.length - 1;
    createImage(imageIndex);
    imageIndex = imageIndex - 1;
  }
});

following.addEventListener("click", () => {
  changeImage();
});
