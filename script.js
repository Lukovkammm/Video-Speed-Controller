const video = document.querySelector('video');
const speedControl = document.querySelector('.speed-control');
const speedFilled = document.querySelector('.speed-filled');

function changeSpeed(e) {
    const percent = e.layerY / speedControl.offsetHeight;
    const height = Math.round(percent * 100);
    speedFilled.style.height = `${height}%`;
    const min = 0.4; 
    const max = 4;
    const playBackRate = (max - min) * percent + min;
    video.playbackRate = playBackRate;
    speedFilled.textContent = playBackRate.toFixed(2);
}

speedControl.addEventListener('mousemove', changeSpeed);