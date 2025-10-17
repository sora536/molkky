let score = [0, 0];
let miss = [0, 0];
let turn = 0;
let cash = null;

function scoreClick(id) {
  if (id == "clear") {
    reset();
  } else if (id == "delete") {
    if (cash == 0) {
      if (turn % 2 == 1) {
        miss[0] -= 1;
        document.getElementById("missLeft").textContent = "✗".repeat(miss[0]);
      } else {
        miss[1] -= 1;
        document.getElementById("missRight").textContent = "✗".repeat(miss[1]);
      }
    } else {
      update(-cash);
    }
    turn -= 1;
    cash = null;
    document.getElementById("delete").classList.add("transparent");
    if (turn % 2 == 1) {
      document.getElementById("Left").classList.remove("overlay");
      document.getElementById("Right").classList.add("overlay");
    } else {
      document.getElementById("Left").classList.add("overlay");
      document.getElementById("Right").classList.remove("overlay");
    }
  } else {
    turn += 1;
    cash = Number(id);
    document.getElementById("delete").classList.remove("transparent");
    update(id);
  }
}

function update(num) {
  if (turn % 2 == 1) {
    if (num == 0) {
      miss[0] += 1;
      document.getElementById("missLeft").textContent = "✗".repeat(miss[0]);
    } else {
      miss[0] = 0;
      document.getElementById("missLeft").textContent = "";
    }
    if (miss[0] >= 3) {
      alert("team1 lose");
      reset();
    }
    score[0] += Number(num);
    if (score[0] == 50) {
      alert("team1 win");
      reset();
    } else if (score[0] > 50) {
      score[0] = 25;
    }
    document.getElementById("Left").classList.remove("overlay");
    document.getElementById("Right").classList.add("overlay");
  } else {
    if (num == 0) {
      miss[1] += 1;
      document.getElementById("missRight").textContent = "✗".repeat(miss[1]);
    } else {
      miss[1] = 0;
      document.getElementById("missRight").textContent = "";
    }
    if (miss[1] >= 3) {
      alert("team2 lose");
      reset();
    }
    score[1] += Number(num);
    if (score[1] == 50) {
      alert("team2 win");
      reset();
    } else if (score[1] > 50) {
      score[1] = 25;
    }
    document.getElementById("Left").classList.add("overlay");
    document.getElementById("Right").classList.remove("overlay");
  }
  document.getElementById("scoreLeft").textContent = score[0];
  document.getElementById("scoreRight").textContent = score[1];
}

function reset() {
  score = [0, 0];
  miss = [0, 0];
  turn = 0;
  cash = null;
  document.getElementById("delete").classList.add("transparent");
  document.getElementById("Left").classList.add("overlay");
  document.getElementById("Right").classList.remove("overlay");
  document.getElementById("scoreLeft").textContent = score[0];
  document.getElementById("scoreRight").textContent = score[1];
  document.getElementById("missLeft").textContent = "";
  document.getElementById("missRight").textContent = "";
}
