
// login modal
document.getElementById('log-button').addEventListener('click',function(){

    document.querySelector('.bg-modal').style.display = 'flex';
    disableScroll(true);
});

document.querySelector('.close').addEventListener('click',function(){
     document.querySelector('.bg-modal').style.display='none';
     disableScroll(false);

});


// signup modal
document.getElementById('sign-button').addEventListener('click',function(){

    document.querySelector('.bg-modal2').style.display = 'flex';
    disableScroll(true);
});

document.querySelector('.close2').addEventListener('click',function(){
     document.querySelector('.bg-modal2').style.display='none';
     disableScroll(false);

});


// signin modal (create form)
document.getElementById('create-button').addEventListener('click',function(){

    document.querySelector('.bg-modal2').style.display = 'flex';
    document.querySelector('.bg-modal').style.display = 'none';
    disableScroll(true);
});

document.querySelector('.close2').addEventListener('click',function(){
     document.querySelector('.bg-modal2').style.display='none';
     disableScroll(false);

});

//hall1 modal
document.getElementById('hall1').addEventListener('click',function(){

    document.querySelector('.hall1-modal').style.display = 'flex';
    disableScroll(true);
    alert("Para se të rezervoni sigurohuni qe jeni kyqur ne KinoFiek!");
});

document.querySelector('.closehall1').addEventListener('click',function(){
     document.querySelector('.hall1-modal').style.display='none';
     disableScroll(false);

});


//hall2 modal
document.getElementById('hall2').addEventListener('click',function(){

    document.querySelector('.hall2-modal').style.display = 'flex';
    disableScroll(true);
    alert("Para se të rezervoni sigurohuni qe jeni kyqur ne KinoFiek!");
});

document.querySelector('.closehall2').addEventListener('click',function(){
     document.querySelector('.hall2-modal').style.display='none';
     disableScroll(false);

});


//hall3 modal
document.getElementById('hall3').addEventListener('click',function(){

    document.querySelector('.hall3-modal').style.display = 'flex';
    disableScroll(true);
    alert("Para se të rezervoni sigurohuni qe jeni kyqur ne KinoFiek!");
});

document.querySelector('.closehall3').addEventListener('click',function(){
     document.querySelector('.hall3-modal').style.display='none';
     disableScroll(false);

});


//hall4 modal
document.getElementById('hall4').addEventListener('click',function(){
    document.querySelector('.hall4-modal').style.display = 'flex';
    disableScroll(true);
    alert("Para se të rezervoni sigurohuni qe jeni kyqur ne KinoFiek!");
});

document.querySelector('.closehall4').addEventListener('click',function(){
     document.querySelector('.hall4-modal').style.display='none';
     disableScroll(false);
});


function disableScroll(add){
    if (add == true){
        document.body.className += " stop-scrolling";
    } else {
        document.body.className = "";
    }
}

