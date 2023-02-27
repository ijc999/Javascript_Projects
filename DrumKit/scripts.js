let buttonNumber = document.querySelectorAll(".drum").length;

for (let i = 0; i < buttonNumber; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        keypad(this.innerHTML);
        keypadpress(this.innerHTML);
    });
}

document.addEventListener("keypress", function (e) {
    keypad(e.key);
    keypadpress(e.key);
});

const keypad = (a) => {
    switch (a) {
        case "a":
            var audio = new Audio("sounds/boom.wav");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/clap.wav");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/hihat.wav");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/kick.wav");
            audio.play();
            break;
        case "g":
            var audio = new Audio("sounds/openhat.wav");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/ride.wav");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.wav");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tink.wav");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom.wav");
            audio.play();
            break;
        default:
            console.log(a);
    }
};

const keypadpress = (b) => {
    document.querySelector("." + b).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + b).classList.remove("pressed");
    }, 200);
};