
console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSong = document.getElementById('masterSong');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songname: "Warriyo-mortals[NCS release]", filePath: "songs/1.mp3", coverPath: "1.jpg" },
    { songname: "Cielo-Huma-Huma", filePath: "songs/2.mp3", coverPath: "2.jpg" },
    { songname: "DEAF KEV-Invincible [NCS release]", filePath: "songs/3.mp3", coverPath: "3.jpg" },
    { songname: "Different Heaven & EHIDE-My heart [NCS release]", filePath: "songs/4.mp3", coverPath: "4.jpg" },
    { songname: "Janji-Heroes-Tonight-feat-Johnning-NCS-release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    // { songname: "Rabba-Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    // { songname: "Sakhiyaan-Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    // { songname: "Tumhari Kasam-Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    // { songname: "na Jaana-Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
]
songs.forEach((element, i) => {
    document.getElementsByClassName("songName")[i].innerText = songs[i].songname;
    document.getElementsByClassName("img")[i].src = songs[i].coverPath;
    console.log(songs[i].coverPath)
})

// //handle play / pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playPauseIcon.src = 'pause.svg';
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        playPauseIcon.src = 'play.svg';
        gif.style.opacity = 0;

    }
})

// //listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        // element.classList.remove('fa-pause-circle');
        // element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSong.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        // masterPlay.classList.remove('fa-play-circle');
        // masterPlay.classList.add('fa-pause-circle');

    })

})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 8) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSong.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    // masterPlay.classList.remove('fa-play-circle');
    // masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSong.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    // masterPlay.classList.remove('fa-play-circle');
    // masterPlay.classList.add('fa-pause-circle');

})



