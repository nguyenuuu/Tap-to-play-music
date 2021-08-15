const pads = document.querySelectorAll(".box-music > div");
const sounds = document.querySelectorAll(".box-music > div audio");
const boxMusic = document.querySelector(".box-music");

const colors = [
    "#22f322",
    "#fc4646",
    "#b0f829",
    "#ffa500",
    "#4632ff",
]

pads.forEach((pad, index) => {
    pad.addEventListener("click", () => {
        // reove bubbles
        const bubbles = document.querySelectorAll(".box-music .bubble");
        bubbles.forEach((bubble) => {
            bubble.remove();
        });
        // stop play
        stopPlay();
        // play music
        sounds[index].play();
        // bubble jump
        createBubble(index);
    });
});

function stopPlay() {
    sounds.forEach((sound) => {
        sound.currentTime = 0;
        sound.pause();
    });
}

function createBubble(ind) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.backgroundColor = colors[ind];
    boxMusic.appendChild(bubble);
    bubble.addEventListener("animationend", () => {
        buble.remove();
    });
}
