let score = [0, 0];
let turn = 0;
let cash = null;
function scoreClick(id) {
  if (id == "clear") {
    reset();
  } else if (id == "delete") {
    turn -= 1;
    update(-cash);
    cash = null;
    document.getElementById("delete").classList.add("transparent");
  } else {
    update(id);
    cash = Number(id);
    document.getElementById("delete").classList.remove("transparent");

    turn += 1;
  }
}

function update(num) {
  if (turn % 2 == 0) {
    score[0] += Number(num);
    if (score[0] == 50) {
      alert("team1 win");
      reset();
    } else if (score[0] > 50) {
      score[0] = 25;
    }
    document.getElementById("scoreLeft").textContent = score[0];
  } else {
    score[1] += Number(num);
    if (score[1] == 50) {
      alert("team2 win");
      reset();
    } else if (score[1] > 50) {
      score[1] = 25;
    }
    document.getElementById("scoreRight").textContent = score[1];
  }
}

function reset() {
  score = [0, 0];
  document.getElementById("scoreLeft").textContent = score[0];
  document.getElementById("scoreRight").textContent = score[1];
}
