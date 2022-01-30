const insert = document.getElementById("insert");
const reset = document.getElementById("reset");
const timer = 5000;
let library = [
  '<img class="size" src="images/image01.jpg">',
  '<img class="size" src="images/image02.jpg">',
  '<img class="size" src="images/image03.jpg">',
  '<img class="size" src="images/image04.jpg">',
];
let imageIndex = 0;

const createImage = (i) => {
  insert.innerHTML = library[i];
  setTimeout(() => {
    insert.innerHTML = "";
  }, timer);
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
});
