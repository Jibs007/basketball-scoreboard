let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

let homeScreen = document.getElementById("home-screen")
let awayScreen = document.getElementById("away-screen")


let home = 0
let away = 0

function winningTeam() {
    if (home > away) {
        homeScreen.classList.add("glow");
        awayScreen.classList.remove("glow");
    } else if (away > home) {
        awayScreen.classList.add("glow");
        homeScreen.classList.remove("glow");
    } else {
        homeScreen.classList.remove("glow");
        awayScreen.classList.remove("glow");
    }
}


function add1home() {
    home++
    homeScore.textContent = home
    winningTeam()
}

function add2home() {
    home += 2
    homeScore.textContent = home
    winningTeam()
}

function add3home() {
    home += 3
    homeScore.textContent = home
    winningTeam()
}

function add1away() {
    away++
    awayScore.textContent = away
    winningTeam()
}

function add2away() {
    away += 2
    awayScore.textContent = away
    winningTeam()
}

function add3away() {
    away += 3
    awayScore.textContent = away
    winningTeam()
}

function reset() {
    home = 0
    away = 0
    homeScore.textContent = 0
    awayScore.textContent = 0
    winningTeam()
}



