


const emriR = document.getElementById("emri");
const mbiemriR = document.getElementById("mbiemri")
const emailR = document.getElementById("email");
const usernameR = document.getElementById("username");
const passwordR = document.getElementById("password");
const password2R = document.getElementById("password2");
const form = document.getElementById("sign-submit");
const errorElementR = document.getElementById("error");



form.addEventListener('click', (e) =>{
  let messagesR = []
  if(emriR.value=='' || mbiemriR.value=='' || usernameR.value =='' || emailR.value =='' || passwordR.value == '' || password2R.value == ''){
    messagesR.push('Ploteso te dhenat!');
  }else if (!isEmail(emailR.value)){
    messagesR.push('Please put in a valid email');
  }else if(usernameR.value.length < 5){
    messagesR.push('Username must be 5 characters long ');
  }else if(passwordR.value.length < 5){
    messagesR.push('Password must be 5 characters long ');
  }else if(passwordR.value !== password2R.value){
    messagesR.push('Passwords do not match');
  }else{
    messagesR.push('Ju jeni regjistruar me sukses!');
  }
  if(messagesR.length > 0){
    e.preventDefault();
    errorElementR.innerText = messagesR.join(', ');
  }
  
});

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);}
    


    
const usernameL = document.getElementById("log-username");
const passwordL = document.getElementById("log-password");
const form2 = document.getElementById("log-submit");
const errorElementL = document.getElementById("error2");


form2.addEventListener('click', (b) =>{
    let messagesL = []
    if(usernameL.value =='' || passwordL.value == ''){
      messagesL.push('Ploteso te dhenat!');
    }else if (usernameL.value.length < 5){
      messagesL.push('Username must be 5 characters long ');}
      else if(passwordL.value.length < 5){
        messagesL.push('Password must be 5 characters long ');
      }else{
        messagesL.push('Ju jeni kyqur me sukses!');
      }
      if(messagesL.length > 0){
        b.preventDefault();
        errorElementL.innerText = messagesL.join(', ');
      }
      
    });
