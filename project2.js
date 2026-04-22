/*
  Author: Julian Schrauger
  Email: jschraug@genesee.edu
*/

//Other/Choose Not To Say Gender Button
const otherBox = document.getElementById("otherBox");
const other = document.getElementById("other");
otherBox.addEventListener("change", () => {
  if(otherBox.value==="ot"){
    otherBox.style.display = "block";
  } else {
    otherBox.style.display = "none";
  }
});

//Feedback 50 before max
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
