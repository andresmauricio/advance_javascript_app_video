import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const buttonPlay = document.getElementById("play");
const buttonSound = document.getElementById("sound");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });
buttonPlay.onclick = () => player.togglePlay();
buttonSound.onclick = () => player.toggleSound();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(e => console.log('[ERROR]', e))
}
