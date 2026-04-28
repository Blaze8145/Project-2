/*
  Author: Julian Schrauger
  Email: jschraug@genesee.edu
*/
//This javascript page handles the front-end validation and the UI changes in project1sol.php

//This is one of our newer capalibiltties for our gender button
//We added this to be more inclusive to the widely spreading genders and added this feature if we didn't include thier gender in our dropdown list
//This Javascipt code dynamicly changes when the event of a change of the dropdown is on the other option
//Currently the only limitations is the char size howevery we do sanize the answer before putting it into the database
//In the database we grouped them together like before to just give them count as a whole
const otherBox = document.getElementById("otherBox");
const gender = document.getElementById("gender");
//The function below waits for the dropdown to change and then preforms the function
gender.addEventListener("change", function(){
//The following if statement looks if and only if "ot" or the other button is selected
  if(gender.value==="ot"){
//The command below changes the style to be visable for the veiwer while the else dosen't
  otherBox.style.display = "block";
} else {
  otherBox.style.display = "none";
}
});

//This is another one of our new additions to the survey for our newest question.
//We added this for our users to be able to see how many characters that they have left in thier responce.
//It will start count down 50 before the limit of 255
//The limit is stored in the question the sql and the following max
//To add charters we would chane all there places and to subtract we only need to change the survey question and the max here in the javascript
//We can also change the text by nesting a if statement inside the first if statement to check if the remainder is 0 the do a style change to change the font-color
const response = document.getElementById("feedback");
const charCount = document.getElementById("charCount");
const max = 255;
//This eventlistener runs everytime a buttion is pressed in the question about feedback.
response.addEventListener("input", function(){
  const remaining = max - response.value.length;
//The following if satement checks if the remaining is 50 before the maximum of 255. 
  if (remaining <= 50){
//The command below change the text in the else if the char count is 50 before the max
      charCount.innerText = "Characters Remaining:" + remaining;
  } else {
      charCount.innerText = "Please Answer in Under 255 Characters";
  }
});

//The new addition of validation will check if all questions have been answered.
//This will provide better security for the website and better information to utilize.
//This will also go thruw all question and hightlight which aren't answered.
//It would be very posible to change the highlight to the background color by just the highlight to style.background-color instead
//It would also be posible to chack if something is missing i.e. a @ in the email by modifing the if statement to the question to be an or with a boolean with the character
let form = document.getElementById("surveyForm");
//This eventlistener checks only when the form is submited with the submit button.
form.addEventListener("submit", function(event){
  const valid = true;

//Assigns a variable to each question to check and highlight is on is empty.
  const email =document.getElementById("email-id");
  const ageChecked = document.querySelector('input[name="age"]:checked');
  const gender =document.getElementById("gender");
  const version = document.getElementById("version");
  const favorite = document.getElementById("favorite");
  const review = document.getElementById("feedback");

  //sets each border to nothing.
  email.style.border = "";
  ageChecked.style.border = "";
  gender.style.border = "";
  version.style.border = "";
  favorite.style.border = "";
  review.style.border = "";

//The following if statement each check their question and then highlights them if their empty.
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
  //The following if statement stops the submit if a question is not answered.
  if (valid = false) {
    event.preventDefault();
  }
});
