const inputs = document.querySelectorAll(".input");
 function focusF(){
     let parent = this.parentNode;
     parent.classList.add("focus");
 }
 function blurF(){
     let parent = this.parentNode;
     if(this.value == ""){
         parent.classList.remove("focus");
     }
 }
 
 inputs.forEach((input) =>{
     input.addEventListener("focus", focusF);
     input.addEventListener("blur",blurF)
 });
