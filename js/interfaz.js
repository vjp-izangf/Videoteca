import { videojuegos } from "./datos.js";
import {
  listarVideojuegos,
  filtrarVideojuegosPorPlataforma,
  contarPorCategoria,
  buscarPorTexto,
  anadir,
  mostrarEstadisticas,
  ordenar,
  fechaLegible,
  diasDesde,
} from "./logica.js";

const nombreAplicacion = "Videoteca";
const DIAS_RECIENTES = 1095;
console.log(`${nombreAplicacion}: ${videojuegos.length} videojuegos cargados.`);
console.table(videojuegos);

const LIMITE = 7;

console.log("---Todos los videojuegos---");
for (const videojuego of videojuegos) {
  const etiqueta = videojuego.id <= LIMITE ? "Disponible" : "No disponible";
  console.log(
    `ID: ${videojuego.id}, Título: ${videojuego.titulo} . ${etiqueta}`,
  );
}

console.log("---Filtro---");
let encontrados = 0;
for (let i = 0; i < videojuegos.length; i++) {
  const videojuego = videojuegos[i];
  if (videojuego.plataforma === "PC" && videojuego.precio < 50) {
    console.log(videojuego);
    encontrados++;
  }
}

console.log(
  `Se han encontrado ${encontrados} videojuegos que cumplen los criterios de búsqueda.`,
);

console.log("---Elementos por categoría---");
let accion = 0;
let simuladores = 0;
let aventura = 0;
let carreras = 0;
let deportes = 0;
let supervivencia = 0;

for (const videojuego of videojuegos) {
  const categorias = videojuego.Categoria.split(","); //"slpit" separa las categorias por comas
  for (const categoria of categorias) {
    switch (
      categoria.trim() // "trim" eliminia los espacios en blanco
    ) {
      case "Acción":
        accion++;
        break;
      case "Simuladores":
        simuladores++;
        break;
      case "Aventura":
        aventura++;
        break;
      case "Carreras":
        carreras++;
        break;
      case "Deportes":
        deportes++;
        break;
      case "Supervivencia":
        supervivencia++;
        break;
      default:
        console.log("Valores inesperados");
    }
  }
}

console.log(`Acción: ${accion}`);
console.log(`Simuladores: ${simuladores}`);
console.log(`Aventura: ${aventura}`);
console.log(`Carreras: ${carreras}`);
console.log(`Deportes: ${deportes}`);
console.log(`Supervivencia: ${supervivencia}`);

listarVideojuegos(videojuegos);
filtrarVideojuegosPorPlataforma(videojuegos, "PC", 40);
filtrarVideojuegosPorPlataforma(videojuegos, "PlayStation 5", 50);
contarPorCategoria(videojuegos);

//Pintar nuestro html

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
//Estado y Actualizar botones
let textoBuscado = "";
let criterio = "ninguno";

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
/*
document.querySelector("#ordenPrecio").addEventListener("click", () => {
  criterio = "precio";
  actualizar();
});

document.querySelector("#ordenNombre").addEventListener("click", () => {
  criterio = "titulo";
  actualizar();
});
*/
//Falta hacer estadísticas

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