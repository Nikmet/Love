const image = document.querySelector(".img");
const btn = document.querySelector(".btn");
const audio = new Audio("assets/love.mp3");
const audio2 = new Audio("assets/kiss.mp3");
let count = false;

btn.addEventListener("click", () => {
    if (!count) {
        image.src = "assets/love.jpg";
        audio.play();
        count = true;
    } else {
        image.src = "assets/kiss.jpg";
        audio2.play();
        count = false;
    }
});
