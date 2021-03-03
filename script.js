const video = document.querySelector('video');
const speedControl = document.querySelector('.speed-control');
const speedFilled = document.querySelector('.speed-filled');

function changeSpeed(e) {
    const percent = e.layerY / speedControl.offsetHeight;
    const height = percent * 100;
    height < 0 ? height = 0 : height;
    speedFilled.style.height = `${height}%`;
    const min = 0.4; 
    const max = 4;
    const playBackRate = (max - min) * percent + min;
    video.playbackRate = playBackRate;
    speedFilled.textContent = playBackRate.toFixed(2);
}

speedControl.addEventListener('mousedown', (e) => {
    speedControl.addEventListener('mousemove', changeSpeed)
});
speedControl.addEventListener('mouseup', (e) => {
    speedControl.removeEventListener('mousemove', changeSpeed)
});
speedControl.addEventListener('click', changeSpeed);
