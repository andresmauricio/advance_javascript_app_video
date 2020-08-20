import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import AdsPlugin from "./plugins/Ads";

const video = document.querySelector("video");
const buttonPlay = document.getElementById("play");
const buttonSound = document.getElementById("sound");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()] });
buttonPlay.onclick = () => player.togglePlay();
buttonSound.onclick = () => player.toggleSound();

// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register('/sw.js').catch(e => console.log('[ERROR]', e))
// }
