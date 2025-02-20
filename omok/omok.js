const board = document.getElementById("board");
const table = document.getElementById("table"); // 오목판
const go = document.getElementById("go"); // 바둑돌이 놓일 곳

for (var i = 0; i < 18; i++) {
  let tr = document.createElement("tr");
  table.appendChild(tr);
  for (var j = 0; j < 18; j++) {
    let td = document.createElement("td");
    td.setAttribute("class", "square");
    tr.appendChild(td);
  }
}
for (var i = 0; i < 17; i++) {
  let tr = document.createElement("tr");
  go.appendChild(tr);
  for (var j = 0; j < 17; j++) {
    let td = document.createElement("td");
    td.setAttribute("id", i + "-" + j);
    tr.appendChild(td);
  }
}
