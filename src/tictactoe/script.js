let tictactoe = document.getElementById('tictactoe');
let boxes = document.getElementsByClassName('box');
let playerNames = document.getElementsByClassName('player')
let playerColors = document.getElementsByClassName('player-color')
let status = document.getElementById('status')
let scoreboard = document.getElementById('scoreboard')
let bot = document.getElementById('checkbox-bot')


let x = true
let xSum = 1
let oSum = 1
let winSum = [8, 57, 449, 74, 147, 293, 274, 86]
let roundsCounter = Number(0)

players = [
    {
        name: playerNames[0].value,
        color: playerColors[0].value,
        score: 0
    },
    {
        name: playerNames[1].value,
        color: playerColors[1].value,
        score: 0
    }
]

function setMark(index) {
    playerColors = document.getElementsByClassName('player-color')
    for (i in players) {
        players[i].name = playerNames[i].value
        players[i].color = playerColors[i].value
    }

    if (boxes[index].innerHTML === '') {
        if (x) {
            boxes[index].innerHTML = 'X';
            boxes[index].style.color = players[0].color
            xSum += Math.pow(2, index)
            status.innerHTML = `É a vez de ${players[1].name}`
            status.style.color = players[1].color
        } else {
            boxes[index].innerHTML = 'O';
            boxes[index].style.color = players[1].color
            oSum += Math.pow(2, index)
            status.innerHTML = `É a vez de ${players[0].name}`
            status.style.color = players[0].color
        }

        for (i in winSum) {
            if (xSum == winSum[i]) {
                roundsCounter++
                document.title = `GSP Games - Tic Tac Toe (${roundsCounter})`
                status.innerHTML = `<img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"/> ${players[0].name} venceu! 🏆`

                status.style.color = players[0].color
                players[0].score++
                scoreboard.innerHTML = `${players[0].score} x ${players[1].score}`
                x = true
                xSum = 1
                oSum = 1
                setTimeout(() => {
                    for (box in boxes) {
                        boxes[box].innerHTML = ''
                        if (box == 4) {
                        }
                    }
                }, 2000)
                setTimeout(() => {
                    status.innerHTML = `É a vez de ${players[1].name}`
                    status.style.color = players[1].color
                }, 2000)
            }
            if (oSum == winSum[i]) {
                roundsCounter++
                document.title = `GSP Games - Tic Tac Toe (${roundsCounter})`

                status.innerHTML = `<img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"/> ${players[1].name} venceu! 🏆`
                status.style.color = players[1].color
                players[1].score++
                x = false
                xSum = 1
                oSum = 1
                setTimeout(() => {
                    scoreboard.innerHTML = `${players[0].score} x ${players[1].score}`
                    for (box in boxes) {
                        boxes[box].innerHTML = ''
                    }
                }, 2000)
                setTimeout(() => {
                    status.innerHTML = `É a vez de ${players[0].name}`
                    status.style.color = players[0].color
                }, 2000)
            }
        }

        let pointsSum = 0
        for (let i = 0; i < 9; i++) {
            pointsSum += Math.pow(2, i)
        }

        console.log(xSum, oSum, winSum)

        if (xSum + oSum == pointsSum + 2) {
            roundsCounter++
            document.title = `GSP Games - Tic Tac Toe (${roundsCounter})`
            status.innerHTML = `<img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"/> Deu velha! 👵🏻`
            status.style.color = 'black'
            x = false
            xSum = 1
            oSum = 1
            setTimeout(() => {
                scoreboard.innerHTML = `${players[0].score} x ${players[1].score}`
                for (box in boxes) {
                    boxes[box].innerHTML = ''
                }
            }, 2000)
            setTimeout(() => {
                status.innerHTML = `É a vez de ${players[0].name}`
                status.style.color = players[0].color
            }, 2000)
        }

        x = !x
    }
}

