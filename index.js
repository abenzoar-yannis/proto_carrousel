const insert = document.getElementById("insert");
let library = [
  '<img class="size" src="images/image01.jpg">',
  '<img class="size" src="images/image02.jpg">',
  '<img class="size" src="images/image03.jpg">',
  '<img class="size" src="images/image04.jpg">',
];

const createImage = (i) => {
  insert.innerHTML = library[i];
  setTimeout(() => {
    insert.innerHTML = "";
  }, 3000);
};
