
function setDate(){
    const now = new Date()

    //Seconds
    const seconds = now.getSeconds()
    const secondsDegrees = calcDegrees(seconds, 60)
    const secondsHand = document.querySelector('.seconds-hand')
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

    //Minutes
    const minutes = now.getMinutes()
    const minutesDegrees = calcDegrees(minutes, 60)
    const minutesHand = document.querySelector('.minutes-hand')
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

    //Hours
    const hours = now.getHours()
    const hoursDegrees = calcDegrees(hours, 12)
    const hoursHand = document.querySelector('.hours-hand')
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}

function calcDegrees(number, divisor) {
    return ((number / divisor) * 360 + 90) % 360
}

setInterval(setDate , 1000)
