const btn = document.querySelector('.buttons__preBtn');

const music1 = new Audio('asset/sound/ghost2.mp3');

let isPlaying = false;

btn.addEventListener('click', () => {
  playMusic(music1);
});

function playMusic(songName) {
  isPlaying = !isPlaying;
  isPlaying ? songName.pause() : songName.play();
}
