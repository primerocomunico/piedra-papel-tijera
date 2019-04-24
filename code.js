// VARIABLES
const botonPiedra = document.querySelectorAll('body > main > div > div:nth-child(3) > div:nth-child(1) > img')[0];
const botonPapel = document.querySelectorAll('body > main > div > div:nth-child(3) > div:nth-child(2) > img')[0];
const botonTijera = document.querySelectorAll('body > main > div > div:nth-child(3) > div:nth-child(3) > img')[0];

const imagenOrdenador = document.querySelectorAll('#eleccionOrdenador')[0];
const imagenPersona = document.querySelectorAll('#eleccionPersona')[0];

const resultado = document.querySelectorAll('#resultado')[0];


// FUNCIONES
function juegoOrdenador() {
  /*
  Define tirada del juegoOrdenador
  */
  let arrRandom = ["piedra", "papel", "tijera"]
  let arrIndex = Math.round(Math.random() * (arrRandom.length - 1));
  return arrRandom[arrIndex];
}

function tiradas(jug1, jug2) {
  /*
  Ejecutar comparativa de tiradas
  */
  if(jug1 == "piedra" && jug2 == "tijera") {
    resultado.textContent = 'YO GANO';
    return;
  }
  else if(jug1 == "piedra" && jug2 == "piedra") {
    resultado.textContent = 'ESTAMOS EMPATE';
    return;
  }
  else if(jug1 == "piedra" && jug2 == "papel") {
    resultado.textContent = 'TU GANAS';
    return;
  }
  else if(jug1 == "papel" && jug2 == "piedra") {
    resultado.textContent = 'YO GANO';
    return;
  }
  else if(jug1 == "papel" && jug2 == "papel") {
    resultado.textContent = 'ESTAMOS EMPATE';
    return;
  }
  else if(jug1 == "papel" && jug2 == "tijera") {
    resultado.textContent = 'TU GANAS';
    return;
  }
  else if(jug1 == "tijera" && jug2 == "papel") {
    resultado.textContent = 'YO GANO';
    return;
  }
  else if(jug1 == "tijera" && jug2 == "tijera") {
    resultado.textContent = 'ESTAMOS EMPATE';
    return;
  }
  else if(jug1 == "tijera" && jug2 == "piedra") {
    resultado.textContent = "TU GANAS"
    return;
  }
}

function elegirTirada(tiradaOrdenador) {
  /*
  Publicación de tirada del ordeandor
  */
  if(tiradaOrdenador == "piedra") {
    imagenOrdenador.innerHTML = `<img src="rock.jpg" class="imagen-boton" />`;
  }
  else if(tiradaOrdenador == "papel") {
    imagenOrdenador.innerHTML = `<img src="papper.jpg" class="imagen-boton" />`;
  }
  else if(tiradaOrdenador == "tijera") {
    imagenOrdenador.innerHTML = `<img src="scissors.jpg" class="imagen-boton" />`;
  }
}

// MAIN - Ejecuciones
botonPiedra.addEventListener('click', function() {
  let tiradaOrdenador = juegoOrdenador(); // Elige tirada del ordeandor
  elegirTirada(tiradaOrdenador);
  imagenPersona.innerHTML = `<img src="rock.jpg" class="imagen-boton" />`;
  tiradas(tiradaOrdenador, "piedra");
});

botonPapel.addEventListener('click', function() {
  let tiradaOrdenador = juegoOrdenador();
  elegirTirada(tiradaOrdenador);
  imagenPersona.innerHTML = `<img src="papper.jpg" class="imagen-boton" />`;
  tiradas(tiradaOrdenador, "papel");
});

botonTijera.addEventListener('click', function() {
  let tiradaOrdenador = juegoOrdenador();
  elegirTirada(tiradaOrdenador); //La variable se pasa como argumento para que se utilice fuera de la función
  imagenPersona.innerHTML = `<img src="scissors.jpg" class="imagen-boton" />`;
  tiradas(tiradaOrdenador, "tijera");
});




//
