const sounds = ["applauces", "boo", "gasp", "tada", "victory", "wrong"]

sounds.forEach(sound => {
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound

    // Put the create button within the buttons div
    document.getElementById("buttons").appendChild(btn)
})