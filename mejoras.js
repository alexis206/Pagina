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
        alert("Cuanto tiempo podrias seguir haciendo esto?");
      }if (contadorClics === 90) {
        alert("no vas a parar?");
      
      }if (contadorClics === 100) {
      alert("re al pedo estaba el tipal");
    }
       }if (contadorClics === 120) {
      alert("me cuesta menos a mi que a vos");
    }
       }if (contadorClics === 140) {
      alert("anda a apretar el boton enviar");
    }
       }if (contadorClics === 160) {
      alert("dale pelotudo");
    }
       }if (contadorClics === 180) {
      alert("naaa cualquiera");
    } 
      }if (contadorClics === 200) {
      alert("bueno... como veo que no vas a parar, cada 100 clicks voy a poner un texto");
    } 
      }if (contadorClics === 300) {
      alert("esto no es nada productivo para tu vida");
    } 
      }if (contadorClics === 400) {
      alert("sabias que si supieras manejar la consola podrias ver todos los textos que siguen?");
    } 
     }if (contadorClics === 500) {
      alert("pero como sos pajero vas a seguir haciendo click");
    } 
      }if (contadorClics === 600) {
      alert("el ultimo mensaje te espera en los 1000");
    } 
      }if (contadorClics === 1000) {
      alert("sera que hay mas mensajes despues de este?");
    } 
      }if (contadorClics === 1100) {
      alert("muy pocas personas se atreverian a tanto");
    } 
      }if (contadorClics === 1200) {
      alert("bueno ahora si, anda a dormir");
    } 
      }if (contadorClics === 1500) {
      alert("no puede ser...");
    } 
     }if (contadorClics === 2000) {
      alert("Ganaste un naranja");
    }  
    });
});
