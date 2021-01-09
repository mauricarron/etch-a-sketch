console.log("Hola Mundo");

let gridX = 8;
const gridSize = gridX * gridX;
const $app = document.querySelector("#app");

// function getUserValue() {
//   return Number(prompt("De que tamano quieres la grilla?"));
// }

// function alertUser() {
//   return alert("Debes ingresar un numero entre 1 y 100");
// }

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
  startApp();
}

const $btnClean = document.querySelector("#btn-clean");
$btnClean.addEventListener("click", runApp);
