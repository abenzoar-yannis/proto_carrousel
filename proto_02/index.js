const insert = document.getElementById("insert");
const previous = document.getElementById("slideLeft");
const following = document.getElementById("slideRight");

let library = [
  { index: 1, content: '<img src="images/image01.jpg">' },
  { index: 2, content: '<img src="images/image02.jpg">' },
  { index: 3, content: '<img src="images/image03.jpg">' },
  { index: 4, content: '<img src="images/image04.jpg">' },
];

const arriveRight = () => {
  document.querySelector("img").classList.add("positionRight");
  setTimeout(() => {
    document.querySelector("img").classList.remove("positionRight");
  }, 10);
};
const arriveLeft = () => {
  document.querySelector("img").classList.add("positionLeft");
  setTimeout(() => {
    document.querySelector("img").classList.remove("positionLeft");
  }, 10);
};
//---------------- peuvent être une seul fonction ----------------//
// const arriveSide = (Side) => {
//   document.querySelector("img").classList.add("position" + Side);
//   setTimeout(() => {
//     document.querySelector("img").classList.remove("position" + Side);
//   }, 10);
// };

const createImage = (i) => {
  insert.innerHTML = library[i].content;
};
const createNewImage = (i) => {
  insert.innerHTML += library[i].content;
};
