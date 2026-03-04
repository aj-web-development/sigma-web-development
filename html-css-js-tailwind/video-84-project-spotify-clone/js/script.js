const HOST = 'http://127.0.0.1:3000';
const BASE_DIR = 'video-84-project-spotify-clone';
const TRACK_DIR = 'songs';
const playedSong = new Audio();
let songs = [];
let currentAlbum = '';

function secondsToMinutesSceonds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return '00:00';
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSec = Math.floor(seconds % 60);

  const formattedMins = String(minutes).padStart(2, '0');
  const formattedSecs = String(remainingSec).padStart(2, '0');

  return `${formattedMins}:${formattedSecs}`;
}

const playMusic = (track, paused = false) => {
  try {
    const musicPath = `/${BASE_DIR}/${TRACK_DIR}/${currentAlbum}/${track}`;

    playedSong.src = musicPath;
    if (!paused) {
      playedSong.play();
      play.src = 'img/pause.svg';
    }

    document.querySelector('.song-info').innerHTML = decodeURI(track);
    document.querySelector('.song-time').innerHTML = '00:00 / 00:00';
  } catch (error) {}
};

async function getSongs(album) {
  currentAlbum = album;
  let response = await fetch(`${HOST}/${BASE_DIR}/${TRACK_DIR}/${album}/`);

  let txtData = await response.text();

  let div = document.createElement('div');
  div.innerHTML = txtData;
  let anchors = div.querySelectorAll('td a');
  songs = [];
  for (let index = 0; index < anchors.length; index++) {
    const element = anchors[index];
    if (element.href.endsWith('.mp3')) {
      let href = element.href;
      href = decodeURI(href);
      href = href.replaceAll('\\', '/');
      songs.push(href.split(`/${TRACK_DIR}/${album}/`)[1]);
    }
  }

  playMusic(songs[0], true);

  let songUl = document
    .querySelector('.song-list')
    .getElementsByTagName('ul')[0];
  songUl.innerHTML = '';
  for (const song of songs) {
    songUl.innerHTML =
      songUl.innerHTML +
      `<li><img class="invert" src="img/music.svg" alt="" />
                <div class="info">
                  <div> ${song.replaceAll('%20', ' ')}</div>
                  <div>Akash</div>
                </div>
                <div class="playnow">
                  <span>Play Now</span>
                  <img class="invert" src="img/play.svg" alt="" />
                </div></li>`;
  }

  // Attach an event listner to each song
  Array.from(document.querySelectorAll('.song-list li')).forEach((ele) => {
    ele.addEventListener('click', () => {
      playMusic(ele.querySelector('.info').firstElementChild.innerHTML.trim());
    });
  });
}

async function displayAlbums() {
  let response = await fetch(`${HOST}/${BASE_DIR}/${TRACK_DIR}/`);

  let txtData = await response.text();

  let div = document.createElement('div');
  div.innerHTML = txtData;
  let anchors = div.querySelectorAll('td a');

  for (let index = 0; index < anchors.length; index++) {
    const element = anchors[index];
    let href = element.href;
    href = decodeURI(href);
    href = href.replaceAll('\\', '/');

    if (href.includes(`/${TRACK_DIR}/`)) {
      let album = href
        .substring(href.lastIndexOf(`/${TRACK_DIR}/`) + 7)
        .replace('/', '');
      if (album.startsWith('.')) {
        continue;
      }

      // Get metadata of the Album
      let response = await fetch(
        `${HOST}/${BASE_DIR}/${TRACK_DIR}/${album}/info.json`
      );

      let jsonData = await response.json();
      const { title, description } = jsonData;
      let cardContainer = document.querySelector('.card-container');

      cardContainer.innerHTML =
        cardContainer.innerHTML +
        `<div data-album="${album}" class="card">
              <div class="play">
                <img
                  src="img/spotify-play.svg"
                  alt=""
                  class="spofify-play-btn"
                />
              </div>
              <img src="./songs/${album}/cover.jpg" alt="${album}" />
              <h2>${title}</h2>
              <p>${description}</p>
            </div>`;
    }
  }

  // Load the playlist whenever card is clicked
  // Add an event to volume
  document.querySelectorAll('.card').forEach((ele) => {
    ele.addEventListener('click', async (item) => {
      await getSongs(item.currentTarget.dataset.album);
      playMusic(songs[0]);
    });
  });
}

async function main() {
  await getSongs('ncs');

  // Display all the albums on the page
  displayAlbums();

  // Attach an event listner to play prev and next song
  play.addEventListener('click', () => {
    if (playedSong.paused) {
      playedSong.play();
      play.src = 'img/pause.svg';
    } else {
      playedSong.pause();
      play.src = 'img/play.svg';
    }
  });

  // Listen for timeupdate event
  playedSong.addEventListener('timeupdate', (e) => {
    document.querySelector('.song-time').innerHTML = `${secondsToMinutesSceonds(
      playedSong.currentTime
    )} / ${secondsToMinutesSceonds(playedSong.duration)}`;

    document.querySelector('.circle').style.left =
      (playedSong.currentTime / playedSong.duration) * 100 + '%';
  });

  // Add an event listner to seekbar

  document.querySelector('.seekbar').addEventListener('click', (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;

    document.querySelector('.circle').style.left = percent + '%';

    playedSong.currentTime = (playedSong.duration * percent) / 100;
  });

  // Add an event listner for hamburger
  document.querySelector('.hamburger').addEventListener('click', (e) => {
    document.querySelector('.left').style.left = 0;
  });

  // Add an event listner for hamburger close button
  document.querySelector('.left .close').addEventListener('click', (e) => {
    document.querySelector('.left').style.left = '-120%';
  });

  // Add an event listner for previous button
  previous.addEventListener('click', (e) => {
    playedSong.pause();
    let index = songs.indexOf(playedSong.src.split('/').slice(-1)[0]);
    if (index - 1 >= 0) playMusic(songs[index - 1]);
  });

  // Add an event listner for next button
  next.addEventListener('click', (e) => {
    playedSong.pause();
    let index = songs.indexOf(playedSong.src.split('/').slice(-1)[0]);

    if (index + 1 < songs.length) playMusic(songs[index + 1]);
  });

  // Add an event to volume
  document
    .querySelector('.range')
    .getElementsByTagName('input')[0]
    .addEventListener('change', (e) => {
      playedSong.volume = parseInt(e.target.value) / 100;
    });

  // Add an event listner to mute the track
  document.querySelector('.volume > img').addEventListener('click', (e) => {
    let seekEle = document
      .querySelector('.range')
      .getElementsByTagName('input')[0];

    if (e.target.src.endsWith('img/volume.svg')) {
      e.target.src = 'img/mute.svg';
      seekEle.disabled = true;
      playedSong.volume = 0;
    } else {
      e.target.src = 'img/volume.svg';
      seekEle.disabled = false;

      let seekVal = seekEle.value;

      playedSong.volume = parseInt(seekVal) / 100;
      0.1;
    }
  });
}

main();
