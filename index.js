let homeScore = document.getElementById("home-score")

console.log(homeScore)

let count = 0

function add1() {
    count = count + 1
    homeScore.innerText = count
}
