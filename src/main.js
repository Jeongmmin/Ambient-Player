import videoData from './data.js';

let isPaused = true;
let isPlaying = false;

const audioVisual = document.querySelector('.audio-visual');
const audioWires = document.querySelectorAll('.audio-wire');

const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
  btn.addEventListener('click', startPlayer);
});

audioWires.forEach((item) => {
  item.style.animationPlayState = 'paused';
});

audioVisual.addEventListener('click', playAndPause);

function playAndPause() {
  handlePlayVideo();
  startAnimation();
}

function startAnimation() {
  isPaused = !isPaused;
  audioWires.forEach((item) => {
    isPaused ? pauseAnimation(item) : runningAnimation(item);
  });
}

function pauseAnimation(item) {
  item.style.animationPlayState = 'paused';
}

function runningAnimation(item) {
  item.style.animationPlayState = 'running';
}

function startPlayer(event) {
  handlePlayVideo();
  changeVideo(event);
  audioWires.forEach((item) => runningAnimation(item));
}

function handlePlayVideo() {
  isPlaying = !isPlaying;
  const video = document.querySelector('.video');
  isPlaying ? video.play() : video.pause();
}

function changeVideo(event) {
  const targetIndex = event.target.getAttribute('data-index');
  displayVideo(targetIndex);
}

function displayVideo(index) {
  const videoContent = document.querySelector('.videoContent');
  return (videoContent.innerHTML = `
  <video
  class="video"
  src="${videoData[index]}"
  loop
  autoplay
></video>`);
}
