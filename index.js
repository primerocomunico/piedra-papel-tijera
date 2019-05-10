// VARIABLES
var botonPiedra = document.querySelectorAll('body > main > div > div:nth-child(3) > div:nth-child(1) > img')[0];
var botonPapel = document.querySelectorAll('body > main > div > div:nth-child(3) > div:nth-child(2) > img')[0];
var botonTijera = document.querySelectorAll('body > main > div > div:nth-child(3) > div:nth-child(3) > img')[0];
var imagenOrdenador = document.querySelectorAll('#eleccionOrdenador')[0];
var imagenPersona = document.querySelectorAll('#eleccionPersona')[0];
var resultado = document.querySelectorAll('#resultado')[0];
// FUNCIONES
function juegoOrdenador() {
    /*
    Define tirada del juegoOrdenador
    */
    var arrRandom = ["piedra", "papel", "tijera"];
    var arrIndex = Math.round(Math.random() * (arrRandom.length - 1));
    return arrRandom[arrIndex];
}
function tiradas(jug1, jug2) {
    /*
    Ejecutar comparativa de tiradas
    */
    if (jug1 == "piedra" && jug2 == "tijera") {
        resultado.textContent = 'YO GANO';
        return;
    }
    else if (jug1 == "piedra" && jug2 == "piedra") {
        resultado.textContent = 'ESTAMOS EMPATE';
        return;
    }
    else if (jug1 == "piedra" && jug2 == "papel") {
        resultado.textContent = 'TU GANAS';
        return;
    }
    else if (jug1 == "papel" && jug2 == "piedra") {
        resultado.textContent = 'YO GANO';
        return;
    }
    else if (jug1 == "papel" && jug2 == "papel") {
        resultado.textContent = 'ESTAMOS EMPATE';
        return;
    }
    else if (jug1 == "papel" && jug2 == "tijera") {
        resultado.textContent = 'TU GANAS';
        return;
    }
    else if (jug1 == "tijera" && jug2 == "papel") {
        resultado.textContent = 'YO GANO';
        return;
    }
    else if (jug1 == "tijera" && jug2 == "tijera") {
        resultado.textContent = 'ESTAMOS EMPATE';
        return;
    }
    else if (jug1 == "tijera" && jug2 == "piedra") {
        resultado.textContent = "TU GANAS";
        return;
    }
}
function elegirTirada(tiradaOrdenador) {
    /*
    Publicación de tirada del ordeandor
    */
    if (tiradaOrdenador == "piedra") {
        imagenOrdenador.innerHTML = "<img src=\"rock.jpg\" class=\"imagen-boton mx-auto center\" />";
    }
    else if (tiradaOrdenador == "papel") {
        imagenOrdenador.innerHTML = "<img src=\"papper.jpg\" class=\"imagen-boton mx-auto center\" />";
    }
    else if (tiradaOrdenador == "tijera") {
        imagenOrdenador.innerHTML = "<img src=\"scissors.jpg\" class=\"imagen-boton mx-auto center\" />";
    }
}
// MAIN - Ejecuciones
// BINDS - Conexión del objeto con html
botonPiedra.addEventListener('click', function () {
    var tiradaOrdenador = juegoOrdenador(); // Elige tirada del ordeandor
    elegirTirada(tiradaOrdenador);
    imagenPersona.innerHTML = "<img src=\"rock.jpg\" class=\"imagen-boton mx-auto center\" />";
    tiradas(tiradaOrdenador, "piedra");
});
botonPapel.addEventListener('click', function () {
    var tiradaOrdenador = juegoOrdenador();
    elegirTirada(tiradaOrdenador);
    imagenPersona.innerHTML = "<img src=\"papper.jpg\" class=\"imagen-boton mx-auto center\" />";
    tiradas(tiradaOrdenador, "papel");
});
botonTijera.addEventListener('click', function () {
    var tiradaOrdenador = juegoOrdenador();
    elegirTirada(tiradaOrdenador); //La variable se pasa como argumento para que se utilice fuera de la función
    imagenPersona.innerHTML = "<img src=\"scissors.jpg\" class=\"imagen-boton mx-auto center\" />";
    tiradas(tiradaOrdenador, "tijera");
});
//
