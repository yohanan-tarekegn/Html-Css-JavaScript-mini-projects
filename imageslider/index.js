const imgs = document.querySelectorAll("img");
let slideindex = 0;
initslider();
function initslider() {
  imgs[slideindex].classList.add("imgdisplay");
  setInterval(next, 5000);
}
function showslide(index) {
  imgs.forEach((img) => {
    img.classList.remove("imgdisplay");
  });

  imgs[index].classList.add("imgdisplay");
}
function prev() {
  slideindex--;
  if (slideindex < 0) slideindex = imgs.length - 1;
  showslide(slideindex);
}
function next() {
  slideindex++;
  if (slideindex >= imgs.length) slideindex = 0;
  showslide(slideindex);
}
