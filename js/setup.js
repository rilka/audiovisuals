"use strict";

const AUDIO_SOURCES = [
    '/mp3/Massive Attack - Teardrop.mp3',
    '/mp3/Mount Kimbie - Carbonated.mp3',
    '/mp3/Capital Cities - Safe and Sound (DiscoTech Remix).mp3',
    '/mp3/Kygo - Here For You (feat. Ella Henderson).mp3',
    '/mp3/The Cinematic Orchestra - Arrival Of The Birds.mp3',
    '/mp3/What So Not - High You Are (Branchez Remix).mp3',

];

var audioFile, analyzer;

function preload() {
    var audioSrc = AUDIO_SOURCES[Math.floor(Math.random() * AUDIO_SOURCES.length)];
    audioFile = loadSound(audioSrc);
}

function keyPressed() {
    if (key === " ") {
        if (audioFile.isPlaying()) {
            audioFile.pause();
        }
        else {
            audioFile.play();
        }
    }
}
