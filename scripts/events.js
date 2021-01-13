function hapEventin(event, emriEventit){
var tabcontent, vtlink;

tabcontent = document.getElementsByClassName("tabcontent");
for(var i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
}

vtlink = document.getElementsByClassName("vtlink");
for(var i = 0; i < vtlink.length; i++) {
    vtlink[i].className = vtlink[i].className.replace("active", "");
}
document.getElementById(emriEventit).style.display = "block";
  event.currentTarget.className += " active";
}
document.getElementById("current").click();

function openForm() {
  document.getElementById("foto").style.display = "block";
  document.getElementById("ob").style.display = "none";
}

function closeForm() {
  document.getElementById("foto").style.display = "none";
  document.getElementById("ob").style.display = "block";
}
function dyjat(event, emriEventit, id) {
hapEventin(event, emriEventit);
pauseAllExcept(id);
}


let audios = [
  document.getElementById("audio1"),
  document.getElementById("audio2"),
  document.getElementById("audio3"),
  document.getElementById("audio4"),
  document.getElementById("audio5"),
  document.getElementById("audio6"),
];
function pauseAllExcept(audioId) {

  let audioX = document.getElementById(audioId);
  audios.forEach((element) => {
    if (element == audioX) {
      audioX.volume = 0.04;
      audioX.play();
      return;
    }
    element.pause();
  });
}



var data = new Date("Jan 1, 2022 00:00:00").getTime();
var x = setInterval(function() {

  var sot = new Date().getTime();

  var distance = data - sot;

  var ditet = Math.floor(distance / (1000 * 60 * 60 * 24));
  var ora = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minuta = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sekonda = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = ditet + "d " + ora + "h "
  + minuta + "m " + sekonda + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "URIME VITI I RI!";
  }
}, 1000);

function validimi1(){
  var emri = document.forma2.emri1.value;
  var mbiemri = document.forma2.mbiemri1.value;
  var mosha = document.forma2.mosha.value;
  var gjinia = document.forma2.gjinia.value;
  var interestedm = document.getElementById('meshkuj');
  var interestedf = document.getElementById('femra');
  if(emri == "" || emri==null){
    alert("Shkruani emrin!");
    return false;
  }
  else if(mbiemri == "" || mbiemri == null){
    alert("Shkruani mbiemrin!");
    return false;
  }
  else if (isNaN(mosha) || mosha == 0){  
    alert("Jepni numer per moshen!");  
    return false;  
  }
  else if(mosha < 0){
    alert("Jepni numer te sakte per moshen!");
    return false;
  }
  else if(gjinia != 'm' && gjinia != 'f' && gjinia != 'p'){
    alert("Jepni gjinine tuaj!");
    return false;
  }
  else if(!interestedm.checked && !interestedf.checked){
    alert("Duhet te interesoheni per dike!");
    return false;
  }
  else {
    return true;
  }
}
function validimi2(){
  var emri = document.forma1.emri.value;
  var mbiemri = document.forma1.mbiemri.value;
  var eventi = document.forma1.eventi1.value;
  if(emri == "" || emri==null){
    alert("Shkruani emrin!");
    return false;
  }else if(mbiemri == "" || mbiemri == null){
    alert("Shkruani mbiemrin!");
    return false;
  }else if(eventi == "" || eventi == null){
    alert("Shkruani eventin!");
    return false;
  }else if( document.getElementById("files").files.length == 0 ){
    alert("Nuk keni zgjedhur fotot!");
    return false;
  }
  else {
    return true;
  }
}
