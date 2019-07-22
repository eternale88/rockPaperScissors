const choices = document.querySelectorAll('.choices')
const score = document.querySelector('#score')
const result = document.querySelector('#result')
const restart = document.querySelector('#restart')
const modal = document.querySelector('.modal')
const scoreBoard = {
  player: 0,
  computer: 0
}

// Play game
const play = (e) => {
  restart.style.display = 'inline-block'
  const playerChoice = e.target.id
  const computerChoice = getComputerChoice()
  const winner = getWinner(playerChoice, computerChoice)
  showWinner(winner, computerChoice)
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  }
  //   getWinner(playerChoice, computerChoice)
  console.log(playerChoice, computerChoice)
  console.log(winner)
}

// Get computers choice
const getComputerChoice = () => {
  const rand = Math.random()
  if (rand < 0.34) {
    return 'Rock'
  } else if (rand <= 0.67) {
    return 'Paper'
  } else {
    return 'Scissors'
  }
}

// Get game winner
const getWinner = (p, c) => {
  if (p === c) {
    return 'draw'
  } else if (
    (p === 'rock' && c === 'paper') ||
    (p === 'paper' && c === 'scissors') ||
    (p === 'scissors' && c === 'rock')
  ) {
    return 'computer'
  } else {
    return 'player'
  }
}

const showWinner = (winner, computerChoice) => {
  if (winner === 'player') {
    // Inc player score
    scoreBoard.player++
    // Show modal result
    result.innerHTML = `
     <h1 class="text-win">You Win</h1>
     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
     <p>Computer Chose <strong>${computerChoice}</strong></p>`
  } else if (winner === 'computer') {
    // Inc player score
    scoreBoard.computer++
    // Show modal result
    result.innerHTML = `
     <h1 class="text-lose">You lose</h1>
     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
     <p>Computer Chose <strong>${computerChoice}</strong></p>`
  } else {
    result.innerHTML = `
     <h1>It's a draw</h1>
     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
     <p>Computer Chose <strong>${computerChoice}</strong></p>`
  }
  //Show score
  score.innerHTML = `
  <p>Player:${scoreBoard.player}</p>
  <p>Computer:${scoreBoard.computer}</p>`

  modal.style.display = 'block'
}
// Event listeners
choices.forEach((choice) => {
  choice.addEventListener('click', play)
})

restart.addEventListener('click', () => {
  scoreBoard.player = 0
  scoreBoard.computer = 0
  score.innerHTML = `
  <p>Player:${scoreBoard.player}</p>
  <p>Computer:${scoreBoard.computer}</p>`
})
