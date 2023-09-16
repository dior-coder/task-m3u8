if (Hls.isSupported()) {
    let video = document.getElementById('video');
    let hls = new Hls();
    hls.loadSource('https://nicecam.ru/hls/stream2/index.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
    });
}