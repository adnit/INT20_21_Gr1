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
