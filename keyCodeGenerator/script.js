const header = document.getElementById("Header");
const generator = document.getElementById("keyGenerator");
const keycode = document.getElementById("keycode");

function keygen(event) {
  let code = event.code;
  let key = event.key;
  let charCode = event.keyCode;

  header.textContent = "";
  document.getElementById("eventCode").innerHTML = code;
  document.getElementById("eventKey").innerHTML = key;
  document.getElementById("eventCharCode").innerHTML = charCode;
  generator.classList.remove("show");
}
console.log();
document.body.addEventListener("keydown", keygen);
