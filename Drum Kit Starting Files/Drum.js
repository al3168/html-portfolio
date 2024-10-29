let PulsantiTamb = document.querySelectorAll(".drum").length;

for (let i = 0; i < PulsantiTamb; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        let Tom2 = new Audio("sounds/tom-2.mp3");
        Tom2.play();
        break;
      case "s":
        let Tom3 = new Audio("sounds/tom-3.mp3");
        Tom3.play();
        break;
      case "d":
        let Tom4 = new Audio("sounds/tom-4.mp3");
        Tom4.play();
        break;
      case "j":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "k":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "l":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      default:
        console.log(buttonInnerHTML);
    }
  });
}

//console.log((this.style.color = "yellow")); per cambiare colore al testo quando ci clicchiamo
