function playDrumKey(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) {
        return //Stop function from running
    }

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
}

function playDrumClick(e) {
    let element = e.target
    if (element.className !== 'key') {
        element = element.parentNode
    }
    let dataKey = element.getAttribute("data-key")

    const audio = document.querySelector(`audio[data-key="${dataKey}"]`)
    audio.currentTime = 0
    audio.play()
    element.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return
    }
    this.classList.remove('playing')
}

window.addEventListener('keydown', playDrumKey)

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('click', playDrumClick))
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
