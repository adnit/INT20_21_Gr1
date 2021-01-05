let moreMovies1 = document.getElementById('more-movies1');
let moreMovies2 = document.getElementById('more-movies2');
let showMoreBtn = document.getElementById('show-more');
let showLessBtn = document.getElementById('show-less');
let showCatalog = document.getElementsByClassName('catalogBtn');




function makeVisible(info) {
  info.style.visibility = 'visible';
}
function makeUnvisible(info) {
  info.style.visibility = 'hidden';
}



function showLess() {
  onLoad();
  // showMoreBtn.scrollIntoView({ behavior: "smooth", block: "end" });
}

function setMovieID(id) {
  console.log(id);
  localStorage.setItem('movieid', id);
  window.location.href = '/movie.html?' + id;
}
