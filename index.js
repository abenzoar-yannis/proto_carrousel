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
};

const changeImage = () => {
  if (imageIndex >= library.length) {
    imageIndex = 0;
    createImage(imageIndex);
    imageIndex++;
  } else {
    createImage(imageIndex);
    imageIndex++;
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
  imageIndex = imageIndex - 2;
  createImage(imageIndex);
});

following.addEventListener("click", () => {
  createImage(imageIndex);
  imageIndex++;
});
