let homePointEl = document.getElementById("home-point-el")
let guestPointEl = document.getElementById("guest-point-el")
let countHomePoints = 0
let countGuestPoints = 0

function addOneHomePoint(){
    countHomePoints = countHomePoints + 1
    homePointEl.textContent = countHomePoints
}

function addTwoHomePoint(){
    countHomePoints = countHomePoints + 2
    homePointEl.textContent = countHomePoints
}

function addThreeHomePoint(){
    countHomePoints = countHomePoints + 3
    homePointEl.textContent = countHomePoints
}


function addOneGuestPoint(){
    countGuestPoints = countGuestPoints + 1
    guestPointEl.textContent = countGuestPoints
}

function addTwoGuestPoint(){
    countGuestPoints = countGuestPoints + 2
    guestPointEl.textContent = countGuestPoints
}

function addThreeGuestPoint(){
    countGuestPoints = countGuestPoints + 3
    guestPointEl.textContent = countGuestPoints
}