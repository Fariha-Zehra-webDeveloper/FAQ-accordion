let allQues = document.querySelectorAll(".faq__question");
let allAns = document.querySelectorAll(".faq__item p");
let icons = document.querySelectorAll(".faq__icon");



allQues.forEach(function(question){
    question.addEventListener("click",function(){
         let isOPen = this.nextElementSibling.classList.contains("show-answer");
          allAns.forEach(ans => ans.classList.remove("show-answer"));
          icons.forEach(icon => icon.src = "./assets/images/icon-plus.svg");
          if(!isOPen){
            this.nextElementSibling.classList.add("show-answer");
            this.querySelector(".faq__icon").src = "./assets/images/icon-minus.svg";
          }
       
     });
       
});
