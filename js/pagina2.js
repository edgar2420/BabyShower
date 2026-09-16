const audio = document.getElementById('audio');
const btnPlay = document.getElementById('btnPlay');
const iconoPlay = document.getElementById('iconoPlay');
const barraProgreso = document.getElementById('barraProgreso');

const rutaPlay = 'M8 5v14l11-7z';
const rutaPause = 'M7 5h4v14H7zM13 5h4v14h-4z';

btnPlay.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        iconoPlay.innerHTML = `<path d="${rutaPause}" fill="currentColor" />`;
    } else {
        audio.pause();
        iconoPlay.innerHTML = `<path d="${rutaPlay}" fill="currentColor" />`;
    }
});

audio.addEventListener('timeupdate', () => {
    const porcentaje = (audio.currentTime / audio.duration) * 100;
    barraProgreso.style.width = `${porcentaje || 0}%`;
});

audio.addEventListener('ended', () => {
    iconoPlay.innerHTML = `<path d="${rutaPlay}" fill="currentColor" />`;
});
