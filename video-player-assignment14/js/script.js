const video = document.querySelector('video');
document
    .querySelector('.videoDiv-js')
    .addEventListener('mouseover', function () {
        document.querySelector('.controls-js').classList.remove('hidden');
    });
document
    .querySelector('.videoDiv-js')
    .addEventListener('mouseout', function () {
        document.querySelector('.controls-js').classList.add('hidden');
    });
document.querySelector('.fa-play-js').addEventListener('click', function () {
    myInt = setInterval(measure, 1000);
    video.play();
    document.querySelector('.fa-play-js').classList.add('hidden');
    document.querySelector('.fa-pause-js').classList.remove('hidden');
    video.classList.remove('opacity');
    video.addEventListener('timeupdate', updateProgress);
});
document.querySelector('.fa-pause-js').addEventListener('click', function () {
    video.pause();
    document.querySelector('.fa-play-js').classList.remove('hidden');
    document.querySelector('.fa-pause-js').classList.add('hidden');
});
document
    .querySelector('.regularSpeed-js')
    .addEventListener('click', function () {
        toggleFunction('.speedDiv-js');
    });

document.querySelector('.fa-expand-js').addEventListener('click', function () {
    document.querySelector('.videoDiv-js').classList.toggle('margin');
    video.classList.toggle('widthBig');
});
document.querySelectorAll('.speed-js').forEach((btn) => {
    let speedVal = '';
    btn.addEventListener('click', function () {
        document.querySelector('.speedDiv-js').classList.add('hidden');
        speedVal = btn.innerText;
        document.querySelector('.regularSpeed-js').innerText = speedVal;
        speedVal = speedVal.slice(0, speedVal.length - 1);
        speedVal = Number(speedVal);
        setSpeed(speedVal);
    });
});
function setSpeed(speed) {
    video.playbackRate = speed;
}
let progress = document.querySelector('progress');
function updateProgress() {
    progress.max = video.duration;
    progress.value = video.currentTime;
}
progress.addEventListener('click', function (event) {
    let m = (window.innerWidth - progress.offsetWidth) / 2;
    let x = event.clientX;
    let position = x - m;
    let mod = progress.offsetWidth / 30;
    let currentTime = position / mod;
    updateProgress2(currentTime);
});
function updateProgress2(currentTime) {
    video.currentTime = currentTime;
    progress.value = currentTime;
}
document.querySelector('.volume-js').addEventListener('change', thisVolume);
function thisVolume() {
    volume_value = document.querySelector('.volume-js').value;
    video.volume = volume_value / 100;
    if (volume_value == 0) {
        document.querySelector('.fa-volume-off-js').classList.remove('hidden');
        document.querySelector('.fa-volume-up-js').classList.add('hidden');
    } else {
        document.querySelector('.fa-volume-off-js').classList.add('hidden');
        document.querySelector('.fa-volume-up-js').classList.remove('hidden');
    }
}
function startVolume() {
    video.volume = 0.2;
}
startVolume();

document
    .querySelector('.fa-volume-up-js')
    .addEventListener('click', function () {
        toggleFunction('.volumeDiv-js');
    });

document
    .querySelector('.fa-volume-off-js')
    .addEventListener('click', function () {
        toggleFunction('.volumeDiv-js');
    });
function toggleFunction(el) {
    document.querySelector(el).classList.toggle('hidden');
}
video.addEventListener('ended', end);
function end() {
    document.querySelector('.fa-play-js').classList.remove('hidden');
    document.querySelector('.fa-pause-js').classList.add('hidden');
    video.classList.add('opacity');
}
function measure() {
    let num = Math.round(video.currentTime);
    num = num.toFixed(2) / 100;
    num = num.toString();
    num = num.replace('.', ':');
    if (num == 0) {
        num = '0:00';
    }
    if (num == video.duration) {
        clearInterval(myInt);
    }
    document.querySelector('#currentTime-js').innerText = num;
}

