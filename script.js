const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]
const emojis = ["👏", "👎", "😲", "🎉", "🏆", "❌"]

sounds.forEach((sound, index) => {
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound + " " + emojis[index]

    btn.addEventListener("click", () => {
        //Stop all other sounds
        stopSongs()

        // Play audio with that ID
        document.getElementById(sound).play()
    })
    // Put the create button within the buttons div
    document.getElementById("buttons").appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause();
        // reset to beginning of the audio
        song.currentTime = 0;
    })
}