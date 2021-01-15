


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






const usernames1 = document.getElementById("s1user");
const passwords1 = document.getElementById("s1pass");
const nrbiletaves1 = document.getElementById("s1nr");
const filmis1 = document.getElementById("s1film");
const banks1 = document.getElementById("s1bank");
const forms1 = document.getElementById("submit-s1");
const errorElementS1 = document.getElementById("error-s1");

forms1.addEventListener('click',(s1) => {
  let messages1 = []

  if(usernames1.value == '' || passwords1.value=='' || nrbiletaves1.value=='' || filmis1.value=='' || banks1.value==''){
    messages1.push('Ploteso te dhenat per rezervim.');
  }else if(usernames1.value.length < 5){
    messages1.push('Username must be 5 characters long ');}
    else if(passwords1.value.length < 5){
      messages1.push('Password must be 5 characters long ');``
    }else if(nrbiletaves1.value <= 0 || nrbiletaves1.value > 120){
      messages1.push('Jep numer valid te biletave.');
    }else {
      messages1.push('Rezervimi u be me sukses.');
    }if(messages1.length > 0){
      s1.preventDefault();
      errorElementS1.innerText = messages1.join(', ');
    }
});



const usernames2 = document.getElementById("s2user");
const passwords2 = document.getElementById("s2pass");
const nrbiletaves2 = document.getElementById("s2nr");
const filmis2 = document.getElementById("s2film");
const banks2 = document.getElementById("s2bank");
const forms2 = document.getElementById("submit-s2");
const errorElementS2 = document.getElementById("error-s2");

forms2.addEventListener('click',(s2) => {
  let messages2 = []

  if(usernames2.value == '' || passwords2.value=='' || nrbiletaves2.value=='' || filmis2.value=='' || banks2.value==''){
    messages2.push('Ploteso te dhenat per rezervim.');
  }else if(usernames2.value.length < 5){
    messages2.push('Username must be 5 characters long ');}
    else if(passwords2.value.length < 5){
      messages2.push('Password must be 5 characters long ');
    }else if(nrbiletaves2.value <= 0 || nrbiletaves2.value > 100){
      messages2.push('Jep numer valid te biletave.');
    }else {
      messages2.push('Rezervimi u be me sukses.');
    }if(messages2.length > 0){
      s2.preventDefault();
      errorElementS2.innerText = messages2.join(', ');
    }
});




const usernames3 = document.getElementById("s3user");
const passwords3 = document.getElementById("s3pass");
const nrbiletaves3 = document.getElementById("s3nr");
const filmis3 = document.getElementById("s3film");
const banks3 = document.getElementById("s3bank");
const forms3 = document.getElementById("submit-s3");
const errorElementS3 = document.getElementById("error-s3");

forms3.addEventListener('click',(s3) => {
  let messages3 = []

  if(usernames3.value == '' || passwords3.value=='' || nrbiletaves3.value=='' || filmis3.value=='' || banks3.value==''){
    messages3.push('Ploteso te dhenat per rezervim.');
  }else if(usernames3.value.length < 5){
    messages3.push('Username must be 5 characters long ');}
    else if(passwords3.value.length < 5){
      messages3.push('Password must be 5 characters long ');
    }else if(nrbiletaves3.value <= 0 || nrbiletaves3.value > 140){
      messages3.push('Jep numer valid te biletave.');
    }else {
      messages3.push('Rezervimi u be me sukses.');
    }if(messages3.length > 0){
      s3.preventDefault();
      errorElementS3.innerText = messages3.join(', ');
    }
});


const usernames4 = document.getElementById("s4user");
const passwords4 = document.getElementById("s4pass");
const nrbiletaves4 = document.getElementById("s4nr");
const filmis4 = document.getElementById("s4film");
const banks4 = document.getElementById("s4bank");
const forms4 = document.getElementById("submit-s4");
const errorElementS4 = document.getElementById("error-s4");

forms4.addEventListener('click',(s4) => {
  let messages4 = []

  if(usernames4.value == '' || passwords4.value=='' || nrbiletaves4.value=='' || filmis4.value=='' || banks4.value==''){
    messages4.push('Ploteso te dhenat per rezervim.');
  }else if(usernames4.value.length < 5){
    messages4.push('Username must be 5 characters long ');}
    else if(passwords4.value.length < 5){
      messages4.push('Password must be 5 characters long ');
    }else if(nrbiletaves4.value <= 0 || nrbiletaves4.value > 150){
      messages4.push('Jep numer valid te biletave.');
    }else {
      messages4.push('Rezervimi u be me sukses.');
    }if(messages4.length > 0){
      s4.preventDefault();
      errorElementS4.innerText = messages4.join(', ');
    }
});

