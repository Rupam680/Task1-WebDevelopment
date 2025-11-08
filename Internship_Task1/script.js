// script.js
function showMessage() {
    alert("Thank you for visiting my internship project!");
}

const button = document.createElement("button");
button.textContent = "Click Me!";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#0078d7";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.cursor = "pointer";
button.style.marginTop = "20px";
button.onclick = showMessage;

document.body.appendChild(button);
