const insert = document.getElementById("insert");
const reset = document.getElementById("reset");
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

reset.addEventListener("click", () => {
  imageIndex = 0;
  createImage(imageIndex);
});
