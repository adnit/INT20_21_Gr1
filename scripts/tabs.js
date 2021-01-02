function Filmat(evt, Filmi) {
  sessionStorage.setItem("evt", Filmi);
  
 
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Filmi).style.display = "block";
  evt.currentTarget.className += " active";
}
 
function checkKey() {
  return sessionStorage.getItem("evt");
}
 
function onLoad() {
  if (sessionStorage.getItem("evt") == undefined) {
    Filmat(event,'Aksion');
  } else {
    let evt1 = sessionStorage.getItem("evt");
    Filmat(event,evt1);
  }
}
 
onLoad();

function makeVisible(info) {
  info.style.visibility = "visible";
}
function makeUnvisible(info) {
  info.style.visibility = "hidden";
}




function setMovieID(id) {
  console.log(id);
  localStorage.setItem("movieid", id);
  window.location.href = "/movie.html";
}
