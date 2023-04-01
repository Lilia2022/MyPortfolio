function playSound(soundName){
    let audio = new audio(soundName);
    audio.play()
    audio.loop = loop;
}
playSound(preci.mp3);