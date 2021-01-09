console.log("Hola Mundo");

let gridX = 0;
let gridSize = 0;
const $app = document.querySelector("#app");

function setGrid() {
  newValue = parseInt(prompt("De que tamano quieres la grilla?", "16"));
  if (newValue < 1 || newValue > 100 || isNaN(newValue)) {
    alert("Debes ingresar un numero entre 1 y 100");
    setGrid();
  } else {
    gridX = newValue;
    gridSize = gridX * gridX;
    $app.style["grid-template-columns"] = `repeat(${gridX}, 1fr)`;
    $app.style["grid-template-rows"] = `repeat(${gridX}, 1fr)`;
  }
}

function startApp() {
  for (let i = 0; i < gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.setAttribute("id", `px${i}`);
    $app.appendChild(pixel);
  }

  function getRandomRGB() {
    return `rgb(
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)}
      )`;
  }

  window.addEventListener("mouseover", (e) => {
    if (e.target.className === "pixel") {
      const pixel = document.querySelector(`#${e.target.id}`);
      pixel.style.backgroundColor = getRandomRGB();
    } else {
      return;
    }
  });
}

function clearApp() {
  for (let i = 0; i < gridSize; i++) {
    if ($app.hasChildNodes()) {
      $app.firstChild.remove();
    } else {
      break;
    }
  }
}

function runApp() {
  clearApp();
  setGrid();
  startApp();
}

const $btnClean = document.querySelector("#btn-clean");
$btnClean.addEventListener("click", runApp);
