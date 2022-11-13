function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
  
  let changeColor = document.querySelector("body")

function yellowCard () {
  changeColor.classList.remove("green")
  changeColor.classList.remove("blue")
  changeColor.classList.add("yellow")
}
function blueCard () {
  changeColor.classList.remove("yellow")
  changeColor.classList.remove("green")
  changeColor.classList.add("blue")
}
function greenCard () {
  changeColor.classList.remove("yellow")
  changeColor.classList.remove("blue")
  changeColor.classList.add("green")
}