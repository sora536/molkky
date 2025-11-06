let score = [];
//scoreをいじいじ
function scoreClick(id) {
  if (id == "delete") {
    score.pop();
    culcurate();
  } else if (id == "clear") {
    score = [];
    culcurate();
  } else {
    score.push(Number(id));
    culcurate();
  }
}

//合計を計算
function culcurate() {
  let sum1 = 0;
  let miss1 = 0;
  for (let i = 0; i < score.length; i = i + 2) {
    sum1 += score[i];
    if (score[i] == 0) {
      miss1++;
    } else {
      miss1 = 0;
    }
    if (sum1 > 50) {
      sum1 = 25;
    }
  }

  let sum2 = 0;
  let miss2 = 0;
  for (let i = 1; i < score.length; i = i + 2) {
    sum2 += score[i];
    if (score[i] == 0) {
      miss2++;
    } else {
      miss2 = 0;
    }
    if (sum2 > 50) {
      sum2 = 25;
    }
  }
  reroad(sum1, sum2, miss1, miss2, score.length);
}
//画面の再表示
function reroad(sum1, sum2, miss1, miss2, turn) {
  document.getElementById("sum1").textContent = sum1;
  document.getElementById("sum2").textContent = sum2;
  document.getElementById("miss1").textContent = "";
  document.getElementById("miss2").textContent = "";
  for (let i = 0; i < miss1; i++) {
    document.getElementById("miss1").textContent += "×";
  }
  for (let i = 0; i < miss2; i++) {
    document.getElementById("miss2").textContent += "×";
  }
  if (turn % 2 == 0) {
    document.getElementById("Left").classList.add("overlay");
    document.getElementById("Right").classList.remove("overlay");
  } else {
    document.getElementById("Right").classList.add("overlay");
    document.getElementById("Left").classList.remove("overlay");
  }
  document.getElementById("turn").textContent = Math.floor(turn / 2 + 1);
  document.getElementById("mod2").textContent = (Math.floor(turn / 2) % 2) + 1;
  document.getElementById("mod3").textContent = (Math.floor(turn / 2) % 3) + 1;
}
