function displayKeyInfo(event) {
  // Get references to HTML elements
  const codeElement = document.getElementById("code");
  const keyElement = document.getElementById("key");
  const charCodeElement = document.getElementById("char-code");

  // Update HTML elements with key code, key value, and char code values
  codeElement.innerText = event.code;
  keyElement.innerText = event.key;
  charCodeElement.innerText = event.keyCode || event.which;
}

window.addEventListener("keydown", displayKeyInfo);
