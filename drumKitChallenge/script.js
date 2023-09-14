const keypresses = document.getElementById("keyboardDrum");
const mouseclicks = document.getElementById("clickDrum");

let numberOfBtns = document.querySelectorAll(".drumClicks");

document.addEventListener("keypress", function (event) {
  sound(event.key);
});
function sound(key) {
  switch (key) {
    case "q":
      let boomSound = new Audio("./sounds/boom.wav");
      boomSound.play();
      break;
    case "w":
      let clapSound = new Audio("./sounds/clap.wav");
      clapSound.play();
      break;
    case "e":
      let hihatSound = new Audio("./sounds/hihat.wav");
      hihatSound.play();
      break;
    case "r":
      let kickSound = new Audio("./sounds/kick.wav");
      kickSound.play();
      break;
    case "t":
      let openhatSound = new Audio("./sounds/openhat.wav");
      openhatSound.play();
      break;
    case "y":
      let rideSound = new Audio("./sounds/ride.wav");
      rideSound.play();
      break;
    case "u":
      let snareSound = new Audio("./sounds/snare.wav");
      snareSound.play();
      break;
    case "i":
      let tinkSound = new Audio("./sounds/tink.wav");
      tinkSound.play();
      break;
    case "o":
      let tomSound = new Audio("./sounds/tom.wav");
      tomSound.play();
      break;
  }
}

for (let i = 0; i < numberOfBtns.length; i++) {
  document.querySelectorAll(".drumClicks")[i];
  numberOfBtns[i].addEventListener("click", function () {
    let buttonSound = numberOfBtns[i].childNodes[1];
    console.log(buttonSound);
    buttonSound.play();
  });
}
