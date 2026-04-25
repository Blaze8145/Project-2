/*
  Author: Julian Schrauger
  Email: jschraug@genesee.edu
*/

//Other/Choose Not To Say Gender Button
//Sprint 2
const otherBox = document.getElementById("otherBox");
const gender = document.getElementById("gender");
gender.addEventListener("change", function(){
if(gender.value==="ot"){
  otherBox.style.display = "block";
} else {
  otherBox.style.display = "none";
}
});

//Feedback 50 before max
//Sprint 2
const response = document.getElementById("feedback");
const charCount = document.getElementById("charCount");
const max = 255;
response.addEventListener("input", function(){
  const remaining = max - response.value.length;
  if (remaining <= 50){
      charCount.innerText = "Characters Remaining:" + remaining;
  } else {
      charCount.innerText = "Please Answer in Under 255 Characters";
  }
});

//Submit Check
//Submit Check checks the submit button then changes any question that doesn't have a value to a red border and stops the submit
let form = document.getElementById("surveyForm");
form.addEventListener("submit", function(event){
  const valid = true;
  const email =document.getElementById("email-id");
  const ageChecked = document.querySelector('input[name="age"]:checked');
  const gender =document.getElementById("gender");
  const version = document.getElementById("version");
  const favorite = document.getElementById("favorite");
  const review = document.getElementById("feedback");

  email.style.border = "";
  ageChecked.style.border = "";
  gender.style.border = "";
  version.style.border = "";
  favorite.style.border = "";
  review.style.border = "";

  if(email.value===""){
    email.style.border = "2px solid #ff0000";
    valid = false;
  }
  if(ageChecked.value===""){
    ageChecked.style.border = "2px solid #ff0000";
    valid = false;
  }
  if(gender.value===""){
    gender.style.border = "2px solid #ff0000";
    valid = false;
  }
  if(version.value===""){
    version.style.border = "2px solid #ff0000";
    valid = false;
  }
  if(favorite.value===""){
    favorite.style.border = "2px solid #ff0000";
    valid = false;
  }
  if(review.value===""){
    review.style.border = "2px solid #ff0000";
    valid = false;
  }
  if (!valid) {
    event.preventDefault();
  }
});
