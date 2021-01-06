function Filmat(Filmi) {
  sessionStorage.setItem("evt", Filmi);
  
 
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(Filmi).style.display = "block";
  document.getElementById(Filmi).classList.add("active");
  
}
 
function checkKey() {
  return sessionStorage.getItem("evt");
}
 
function onLoad() {
  if (sessionStorage.getItem("evt") == undefined) {
    Filmat('Aksion');
  } else {
    let evt1 = sessionStorage.getItem("evt");
    Filmat(evt1);
  }
}
 



onLoad();
