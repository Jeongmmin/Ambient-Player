import videoData from './data.js';

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
  // clickSound();
  handlePlayVideo();
  isPlaying = !isPlaying;
  handleAnimation();
}
function handleAnimation() {
  audioWires.forEach((item) => {
    isPlaying ? runningAnimation(item) : pauseAnimation(item);
  });
  console.log(isPlaying);
}

function pauseAnimation(item) {
  item.style.animationPlayState = 'paused';
}

function runningAnimation(item) {
  item.style.animationPlayState = 'running';
}

function startPlayer(event) {
  clickSound();
  handlePlayVideo();
  changeVideo(event);
  isPlaying = true;
  handleAnimation();
}

function handlePlayVideo() {
  const video = document.querySelector('.video');
  isPlaying ? video.pause() : video.play();
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

function clickSound() {
  const click = new Audio('sound/mouseClick.mp3');
  click.play();
  console.log(click);
}
