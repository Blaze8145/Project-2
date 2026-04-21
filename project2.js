//Other/Choose Not To Say Gender Button
document.querySelectorAll('option[value="ot"]').forEach(option => {
      option.addEventListener("change", async () => {
          const otherBox = document.getElementById("otherBox");
          const output = document.getElementById("result");
        if (document.getElementById("other").checked) {
          otherBox.style.display = "block";
          const response = await fetch("getMessage.php");
          const data = await response.text();
          output.textContent = data;
        } else {
          otherBox.style.display = "none";
          output.textContent = "";
        }
  });
});

