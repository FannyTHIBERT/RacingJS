window.onload = () => {
    var monCanvas = document.getElementsByTagName('canvas')[0];
    var ctx = monCanvas.getContext('2d');

    ctx.fillStyle = "#ffffff";

    ctx.beginPath();
    ctx.moveTo(6, 6);
    ctx.lineTo(14,10);
    ctx.lineTo(6, 14);
    ctx.fill();

    var pause = document.getElementsByTagName('button')[0];
    var stop = document.getElementsByTagName('button')[1];
    var mute = document.getElementsByTagName('button')[2];
    var audio = new Audio('triangle.ogg');

    monCanvas.addEventListener('click', () => {
        audio.play();
    });

    pause.addEventListener('click', () => {
       audio.pause();
    });
    stop.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
    });
    mute.addEventListener('click', () => {
        audio.muted = !audio.muted;
    });
                
  }