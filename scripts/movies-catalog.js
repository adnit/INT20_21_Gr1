function makeVisible(info) {
  info.style.visibility = "visible";
}
function makeUnvisible(info) {
  info.style.visibility = "hidden";
}
function showMore(elementID) {
  document.getElementById(elementID).style.display = "flex";
}
function hide(elementID) {
  document.getElementById(elementID).style.display = "none";
}

function showMore() {
  let moreMovies1 = document.getElementById("more-movies1");
  let moreMovies2 = document.getElementById("more-movies2");
  let showMoreBtn = document.getElementById("show-more");
  let showLessBtn = document.getElementById("show-less");

  showMoreBtn.style.display = "none";
  moreMovies1.style.display = "flex";
  moreMovies2.style.display = "flex";
  showLessBtn.style.display = "flex";
  showLessBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showLess() {
  let moreMovies1 = document.getElementById("more-movies1");
  let moreMovies2 = document.getElementById("more-movies2");
  let showMoreBtn = document.getElementById("show-more");
  let showLessBtn = document.getElementById("show-less");

  showMoreBtn.style.display = "flex";
  moreMovies1.style.display = "none";
  moreMovies2.style.display = "none";
  showLessBtn.style.display = "none";
  showMoreBtn.scrollIntoView({ behavior: "smooth", block: "auto" });
}
