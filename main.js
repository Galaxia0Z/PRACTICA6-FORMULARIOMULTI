const bAtras = document.querySelectorAll(".btn_atras");
const btnsig = document.querySelectorAll(".btn_siguiente");
const progreso = document.getElementById("progreso");
const boxs = document.querySelectorAll(".box");
const pasos = document.querySelectorAll(".paso");

let pasosNum = 0;

btnsig.forEach((btn) => {
  btn.addEventListener("click", () => {
    pasosNum++;
    updateboxs();
    updateprogressbar();
  });
});

bAtras.forEach((btn) => {
  btn.addEventListener("click", () => {
    pasosNum--;
    updateboxs();
    updateprogressbar();
  });
});

function updateboxs() {
  boxs.forEach((box) => {
    box.classList.contains("box1") &&
      box.classList.remove("box1");
  });

  boxs[pasosNum].classList.add("box1");
}

function updateprogressbar() {
  pasos.forEach((paso, idx) => {
    if (idx < pasosNum + 1) {
      paso.classList.add("paso1");
    } else {
      paso.classList.remove("paso1");
    }
  });

 const progresoP = document.querySelectorAll(".paso uno");

  progreso.style.width =
    ((progresoP.length - 1) / (pasos.length - 1)) * 100 + "%";
}

