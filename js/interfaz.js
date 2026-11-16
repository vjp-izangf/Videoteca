import{videojuegos} from "./datos.js";
import{listarVideojuegos} from "./logica.js";
import{filtrarVideojuegosPorPlataforma} from "./logica.js"


let textoBuscado = "";
let criterio = "ninguno";

function pintarEstadisticas(videojuegos) {
    const resultado = mostrarEstadisticas(videojuegos);
    const elemento = document.querySelector("#estadisticas");

    if (resultado === null) {
        elemento.textContent = "No hay videojuegos para mostrar estadísticas.";
        return;
    }

    elemento.textContent =
        `Total: ${resultado.total.toFixed(2)}€ | ` +
        `Media: ${resultado.media.toFixed(2)}€ | ` +
        `Precio máximo: ${resultado.maximo.toFixed(2)}€`;
}

const listado = document.querySelector("#listado");

function crearTarjeta(videojuegos) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  const titulo = document.createElement("h3");
  titulo.textContent = videojuegos.titulo;

  const datos = document.createElement("p");
  datos.textContent = `${videojuegos.plataforma} - ${videojuegos.precio}`;

  const fecha = document.createElement("p");
  fecha.classList.add("fecha");
  fecha.textContent = fechaLegible(videojuegos.fechaLanzamiento);
  if (diasDesde(videojuegos.fechaLanzamiento) <= DIAS_RECIENTES) {
    tarjeta.classList.add("reciente");
  }

  tarjeta.append(titulo, datos, fecha);

  return tarjeta;
}

function pintar(videojuegos) {
  listado.replaceChildren();

  for (const videojuego of videojuegos) {
    listado.append(crearTarjeta(videojuego));
  }
}

pintar(videojuegos);

function ordenar(lista, criterio) {
  const copia = [...lista];
  if (criterio === "titulo") {
    copia.sort((a, b) => a.titulo.localeCompare(b.titulo));
  } else if (criterio === "precio") {
    copia.sort((a, b) => a.precio - b.precio);
  } else if (criterio === "fecha"){
    copia.sort((a,b) =>
      crearFecha(b.fechaLanzamiento) - crearFecha(a.fechaLanzamiento));
  }
  return copia;
}

function actualizar() {
  const encontrados = buscarPorTexto(videojuegos, textoBuscado);
  const ordenadas = ordenar(encontrados, criterio);
  pintar(ordenadas);
  pintarResumen(ordenadas.length);
  pintarEstadisticas(videojuegos);
}

buscador.addEventListener("input", () => {
  textoBuscado = buscador.value;
  actualizar();
});

function pintarResumen(mostrados) {
  const resumen = document.querySelector("#resumen");

  if (mostrados > 0) {
    resumen.textContent = `Mostrando ${mostrados} de ${videojuegos.length} Videojuegos`;
  } else {
    resumen.textContent = `No hay videojuegos que contengan "${textoBuscado}"`;
  }
}

//Cookies

function guardarCookie(nombre, valor, dias) {
  const segundos = dias * 24 * 60 * 60;
  const texto = encodeURIComponent(valor);
  document.cookie = `${nombre}=${texto}; max-age=${segundos}; path=/`;
}


function leerCookie(nombre) {
  const partes = document.cookie.split("; ");
  for (const parte of partes) {
    const [clave, valor] = parte.split("=");
    if (clave === nombre) {
      return decodeURIComponent(valor);
    }
  }
  return null;
}

function elegirOrden(nuevo) {
  criterio = nuevo;
  guardarCookie("orden", criterio, 30);
  actualizar();
}

document.querySelector("#ordenNombre")
  .addEventListener("click", () => elegirOrden("titulo"));

document.querySelector("#ordenPrecio")
  .addEventListener("click", () => elegirOrden("precio"));

document.querySelector("#ordenFecha")
  .addEventListener("click", () => elegirOrden("fecha"));

criterio = leerCookie("orden") ?? "ninguno";
actualizar();

//Fechas
function crearFecha(texto){
  return new Date(texto + "T00:00");
}

function fechaLegible(texto){
  return crearFecha(texto).toLocaleDateString("es-ES",
    { day: "numeric", month: "long", year: "numeric" });
}

function diasDesde(texto){
  const MS_DIA = 24 * 60 * 60 * 1000;
  const ms = Date.now() - crearFecha(texto).getTime();
  return Math.floor(ms / MS_DIA);
}

    // Expresión regular para validar el título
    const patron = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{3,40}$/;
    const formulario = document.querySelector("#formulario-videojuego");
    const campoNombre = document.querySelector("#nuevoTitulo");
    const aviso = document.querySelector("#aviso");

    formulario.addEventListener("submit", (event) => {
    event.preventDefault();   // que no recargue la página
    const nombre = campoNombre.value.trim();
      if (!patron.test(nombre)) {
      aviso.textContent = "Entre 3 y 40 letras o espacios.";
      return;
      }
      aviso.textContent = "Se ha añadido correctamente el videojuego";

      const videojuego = {
        titulo: nombre
      };

    anadir(videojuegos, videojuego);

    campoNombre.value = ""; //Deja vacío el input para que podamos escribir otro videojuego.
    actualizar();
});

