const insert = document.getElementById("insert");
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
  }, 6000);
};

const loop = () => {
  setTimeout(() => {
    if (imageIndex >= library.length) {
      imageIndex = 0;
      loop();
    } else {
      createImage(imageIndex);
      imageIndex++;
      setTimeout(() => {
        loop();
      }, 6000);
    }
  }, 20);
};

loop();
