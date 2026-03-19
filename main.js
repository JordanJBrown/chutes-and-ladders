//Chutes and Ladders

function random() {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function play() {
  //This function plays Chutes and Ladders with one player
  //It returns the number of turns it took to get to winss
  let position = 0;
  let turns = 0;

  while (position < 100) {
    turns += 1;
    position += random();
    switch (position) {
      case 2:
        position = 19;
        break;
      case 4:
        position = 14;
        break;
      case 8:
        position = 31;
        break;
      case 16:
        position = 6;
        break;
      case 21:
        position = 42;
        break;
      case 28:
        position = 84;
        break;
      case 36:
        position = 44;
        break;
      case 48:
        position = 26;
        break;
      case 49:
        position = 10;
        break;
      case 51:
        position = 67;
        break;
      case 56:
        position = 53;
        break;
      case 62:
        position = 18;
        break;
      case 64:
        position = 60;
        break;
      case 71:
        position = 91;
        break;
      case 80:
        position = 100;
        break;
      case 87:
        position = 24;
        break;
      case 93:
        position = 73;
        break;
      case 95:
        position = 75;
        break;
      case 98:
        position = 78;
        break;
      default:
        break;
    }
  }

  if (position > 99) {
    return turns;
  }
}

function calcMinTurns(gamesNumber) {
  //Calculates the minimum number of turns needed to win, when X amount of games are played.
  let minTurnsCount = Infinity;

  for (let i = 0; i <= gamesNumber; i++) {
    let currentMinTurnsCount = play();
    if (currentMinTurnsCount < minTurnsCount) {
      minTurnsCount = currentMinTurnsCount;
    }
  }
  return `In ${gamesNumber} games, the minumum turns required to win was ${minTurnsCount}`;
}

function calcMinGames(minTurns) {
  //Calculates the minimum number of games to reach X amount of turns or lower.
  let minGamesCount = 0;
  let minTurnsCount = Infinity;

  while (minTurnsCount > minTurns) {
    minGamesCount++;
    minTurnsCount = play();
  }

  return `It took ${minGamesCount} game(s), to reach a game that was won <br>in ${minTurns} turns or less.
This game was won in ${minTurnsCount} turns`;
}

//Frist Button detector and answer
let firstButton = document.querySelector("#form1");
firstButton.addEventListener("submit", function (event) {
  event.preventDefault();
  let firstFormData = document.querySelector("#form1");
  let formData1 = new FormData(firstFormData);
  let firstFormInput = formData1.get("firstInput");
  let answer1 = calcMinTurns(firstFormInput);
  document.querySelector("#answer1").innerHTML = answer1;
  document.querySelector("#answer2").innerHTML = "";
});

//Second Button detector and answer
let secondButton = document.querySelector("#form2");
secondButton.addEventListener("submit", function (event) {
  event.preventDefault();
  let secondFormData = document.querySelector("#form2");
  let formData2 = new FormData(secondFormData);
  let secondFormInput = formData2.get("secondInput");
  if (secondFormInput > 5) {
    let answer2 = calcMinGames(secondFormInput);
    document.querySelector("#answer2").innerHTML = answer2;
    document.querySelector("#answer1").innerHTML = "";
  }
});
