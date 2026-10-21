const nombreAplicacion = "Videoteca";

const videojuegos = [
  {
    id: 1,
    titulo: "Detroit: Become Human",
    Categoria: "Acción",
    plataforma: "PC, PlayStation 4, Xbox One",
    tamaño: "55GB",
    precio: 39.99,
    fechaLanzamiento: new Date("2020-6-18"),
  },
  {
    id: 2,
    titulo: "EA Sports FC 27",
    Categoria: "Simuladores, Deportes",
    plataforma: "PC, PlayStation 5, Xbox Series X/S, Nintendo Switch",
    tamaño: "100GB",
    precio: 69.99,
    fechaLanzamiento: new Date("2026-09-25"),
  },
  {
    id: 3,
    titulo: "Rust",
    Categoria: "Acción,Aventura,Supervivencia",
    plataforma: "PC, PlayStation 4, Xbox One",
    tamaño: "45GB",
    precio: 39.99,
    fechaLanzamiento: new Date("2018-02-08"),
  },
  {
    id: 4,
    titulo: "Counter Strike 2",
    Categoria: "Acción",
    plataforma: "PC",
    tamaño: "85GB",
    precio: 0,
    fechaLanzamiento: new Date("2012-08-21"),
  },
  {
    id: 5,
    titulo: "Dune: Awakening",
    Categoria: "Acción, Aventura",
    plataforma: "PC , PlayStation 5, Xbox Series X/S",
    tamaño: "60GB",
    precio: 49.99,
    fechaLanzamiento: new Date("2025-6-10"),
  },
  {
    id: 6,
    titulo: "Microsoft Flight Simulator 2024",
    Categoria: "Simuladores",
    plataforma: "PC",
    tamaño: "50GB",
    precio: 79.99,
    fechaLanzamiento: new Date("2024-11-19"),
  },
  {
    id: 7,
    titulo: "Terraria",
    Categoria: "Acción, Aventura",
    plataforma: "PC , PlayStation 4, Xbox One, Nintendo Switch",
    tamaño: "200MB",
    precio: 9.75,
    fechaLanzamiento: new Date("2011-05-16")
  },
  {
    id: 8,
    titulo: "Dead Island 2",
    Categoria: "Acción, Aventura",
    plataforma: "PC , PlayStation 5, Xbox Series X/S",
    tamaño: "70GB",
    precio: 49.99,
    fechaLanzamiento: new Date("2024-04-22"),
  },
  {
    id: 9,
    titulo: "Forza Horizon 5",
    Categoria: "Carreras",
    plataforma: "PC , PlayStation 5, Xbox Series X/S",
    tamaño: "110GB",
    precio: 59.99,
    fechaLanzamiento: new Date("2021-11-09"),
  },
];
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
  const categorias = videojuego.Categoria.split(",");  //"slpit" separa las categorias por comas 
  for (const categoria of categorias) {
    switch (categoria.trim()) {  // "trim" eliminia los espacios en blanco
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

//Sesion7
function listarVideojuegos(videojuegos) {
  for (const videojuego of videojuegos) {
    console.log(
      `ID: ${videojuego.id}, Título: ${videojuego.titulo}, Categoría: ${videojuego.Categoria}, Plataforma: ${videojuego.plataforma}, Tamaño: ${videojuego.tamaño}, Precio: ${videojuego.precio}, Fecha de lanzamiento: ${videojuego.fechaLanzamiento}`,
    );
  }
}

function filtrarVideojuegosPorPlataforma(videojuegos, plataforma, limite) {
  let encontrados = 0;
  for (let i = 0; i < videojuegos.length; i++) {
    const videojuego = videojuegos[i];
    if (
      videojuego.plataforma.includes(plataforma) &&
      videojuego.precio < limite
    ) {
      console.log(videojuego);
      encontrados++;
    }
  }
  console.log(
    `Se han encontrado ${encontrados} videojuegos que cumplen los criterios de búsqueda.`,
  );
  return encontrados;
}
// hacer funcion Categorias
function contarPorCategoria(videojuegos) {
  console.log("---Elementos por categoría---");
  let accion = 0;
  let simuladores = 0;
  let aventura = 0;
  let carreras = 0;
  let deportes = 0;
  let supervivencia = 0;

  for (const videojuego of videojuegos) {
    const categorias = videojuego.Categoria.split(",");  //"slpit" separa las categorias por comas 
    for (const categoria of categorias) {
      switch (categoria.trim()) {  // "trim" eliminia los espacios en blanco
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
}

listarVideojuegos(videojuegos);
filtrarVideojuegosPorPlataforma(videojuegos, "PC", 40);
filtrarVideojuegosPorPlataforma(videojuegos, "PlayStation 5", 50);
contarPorCategoria(videojuegos);

//Sesion8
function buscarPorTexto(videojuegos, texto) {
  const buscado = texto.toLowerCase();
  const resultados = [];
  for (const videojuego of videojuegos) {
    if (
      videojuego.titulo.toLowerCase().includes(buscado) ||
      videojuego.Categoria.toLowerCase().includes(buscado)
    ) {
      resultados.push(videojuego);
    }
  }
  return resultados;
}

function añadir(videojuegos, videojuego) {
  id = videojuegos.length + 1;
  videojuego.id = id;
  videojuegos.push(videojuego);
  console.log(`Se ha añadido el videojuego con ID ${id}.`);
}

function eliminarID(videojuegos, id) {
  for (let i = 0; i < videojuegos.length; i++) {
    if (videojuegos[i].id === id) {
      videojuegos.splice(i, 1);
      console.log(`Se ha eliminado el videojuego con ID ${id}.`);
      return;
    }
  }
}

function mostrarEstadisticas(videojuegos) {
  if (videojuegos.length === 0) {
    console.warn("No hay videojuegos");
    return;
  }
  let suma = 0;
  let maximo = videojuegos[0];
  for (const videojuego of videojuegos) {
    suma += videojuego.precio;
    if (videojuego.precio > maximo.precio) {
      maximo = videojuego;
    }
  }
  const media = suma / videojuegos.length;
  console.log(`Precio medio: ${media.toFixed(1)}`);
  console.log(`Precio máximo: ${maximo.precio}`);
  console.log(`Videojuegos: ${videojuegos.length}`);
  console.log(`Precio total: ${suma}`);
}

mostrarEstadisticas(videojuegos);
mostrarEstadisticas([]);

//Modificar fecha que sea tipo fecha
//Añadir texto para dividir por partes el proyecto
//Modificar index.html para verlo