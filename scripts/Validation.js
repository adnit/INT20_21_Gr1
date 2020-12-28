
// login modal
document.getElementById('log-button').addEventListener('click',function(){

    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',function(){
     document.querySelector('.bg-modal').style.display='none';

});


// signin modal
document.getElementById('sign-button').addEventListener('click',function(){

    document.querySelector('.bg-modal2').style.display = 'flex';
});

document.querySelector('.close2').addEventListener('click',function(){
     document.querySelector('.bg-modal2').style.display='none';

});


// signin modal (create form)
document.getElementById('create-button').addEventListener('click',function(){

    document.querySelector('.bg-modal2').style.display = 'flex';
    document.querySelector('.bg-modal1').style.display = 'none';
});

document.querySelector('.close2').addEventListener('click',function(){
     document.querySelector('.bg-modal2').style.display='none';

});