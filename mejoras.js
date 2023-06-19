document.addEventListener("DOMContentLoaded", function() {
const button = document.getElementById("meGustaBtn");

button.addEventListener("click", function() {
  if (button.innerHTML === "Me Gusta") {
    button.innerHTML = "No me gusta";
  } else {
    button.innerHTML = "Me Gusta";
  }
});
});

document.addEventListener("DOMContentLoaded", function() {
const button = document.getElementById("meGustaBtn");

button.addEventListener("click", function() {
  if (button.classList.contains("clicked")) {
    button.classList.remove("clicked");
  } else {
    button.classList.add("clicked");
  }
});
});


document.addEventListener("DOMContentLoaded", function() {
let meGustaBtn = document.getElementById("meGustaBtn");
let contador = document.getElementById("contador");


let contadorClics = 0;


meGustaBtn.addEventListener("click", function() {

  contadorClics++;


  contador.textContent = contadorClics;
});
});
document.addEventListener("DOMContentLoaded", function() {
let meGustaBtn = document.getElementById("meGustaBtn");
    let contador = document.getElementById("contador");
    let contadorClics = 0;

    meGustaBtn.addEventListener("click", function() {
      contadorClics++;
      contador.textContent = contadorClics;

      if (contadorClics === 5) {
        alert("Es para probar si funciona");
      }
      if (contadorClics === 9) {
        alert("Si seguis tocando el boton sos pt");
      }
      if (contadorClics === 10) {
        alert("Sos un pt");
      }
      if (contadorClics === 20) {
        alert("Ah pero sos alto...");
      }
      if (contadorClics === 40) {
        alert("Como te gusta cogote");
      }
      if (contadorClics === 60) {
        alert("No hay mas textos despues de este");
      }
      if (contadorClics === 80) {
        alert("No hay mas textos despues de este");
      }if (contadorClics === 90) {
        alert("...");
      
      }if (contadorClics === 100) {
      alert("re al pedo estaba el tipal");
    }
    });
});
