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
