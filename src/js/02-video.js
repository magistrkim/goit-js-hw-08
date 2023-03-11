import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_STORAGE_KEY = 'videoplayer-current-time';

let currentTime = 0;
currentTime = JSON.parse(localStorage.getItem(TIME_STORAGE_KEY));

const getCurrentTime = event => {
  currentTime = event.seconds;
  localStorage.setItem(TIME_STORAGE_KEY, JSON.stringify(currentTime));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.on('play', () => {
  player.setCurrentTime(currentTime);
});

player.on('pause', () => {
  localStorage.setItem(TIME_STORAGE_KEY, JSON.stringify(currentTime));
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
