//Sesion7
export function listarVideojuegos(videojuegos) {
  for (const videojuego of videojuegos) {
    console.log(
      `ID: ${videojuego.id}, Título: ${videojuego.titulo}, Categoría: ${videojuego.categoria}, Plataforma: ${videojuego.plataforma}, Tamaño: ${videojuego.tamaño}, Precio: ${videojuego.precio}, Fecha de lanzamiento: ${videojuego.fechaLanzamiento}`,
    );
  }
}

export function filtrarVideojuegosPorPlataforma(videojuegos, plataforma, limite) {
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
export function contarPorCategoria(videojuegos) {
  console.log("---Elementos por categoría---");
  let accion = 0;
  let simuladores = 0;
  let aventura = 0;
  let carreras = 0;
  let deportes = 0;
  let supervivencia = 0;

  for (const videojuego of videojuegos) {
    const categorias = videojuego.categoria.split(","); //"slpit" separa las categorias por comas
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
}

//Sesion8
export function buscarPorTexto(videojuegos, texto) {
  const buscado = texto.toLowerCase();
  const resultados = [];
  for (const videojuego of videojuegos) {
    if (
      videojuego.titulo.toLowerCase().includes(buscado) ||
      videojuego.categoria.toLowerCase().includes(buscado)
    ) {
      resultados.push(videojuego);
    }
  }
  return resultados;
}

export function anadir(videojuegos, videojuego) {
  const id = videojuegos.reduce((m, v) => Math.max(m, v.id), 0) + 1;
  videojuego.id = id;
  videojuegos.push(videojuego);
  console.log(`Se ha añadido el videojuego con ID ${id}.`);
}

export function eliminarID(videojuegos, id) {
  for (let i = 0; i < videojuegos.length; i++) {
    if (videojuegos[i].id === id) {
      videojuegos.splice(i, 1);
      console.log(`Se ha eliminado el videojuego con ID ${id}.`);
      return;
    }
  }
}

export function mostrarEstadisticas(videojuegos) {
  if (videojuegos.length === 0) {
    console.warn("No hay videojuegos");
    return;
  }

  let suma = 0;
  let maximo = videojuegos[0].precio;

  for (const videojuego of videojuegos) {
    suma += videojuego.precio;
    if (videojuego.precio > maximo) {
      maximo = videojuego.precio;
    }
  }
  const media = suma / videojuegos.length;
  console.log(`Precio medio: ${media.toFixed(1)}`);
  console.log(`Precio máximo: ${maximo}`);
  console.log(`Videojuegos: ${videojuegos.length}`);
  console.log(`Precio total: ${suma}`);

  return {
        total: suma,
        media: suma / videojuegos.length,
        maximo: maximo
    };
}

export function ordenar(lista, criterio) {
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

//Fechas
export function crearFecha(texto){
  return new Date(texto + "T00:00");
}

export function fechaLegible(texto){
  return crearFecha(texto).toLocaleDateString("es-ES",
    { day: "numeric", month: "long", year: "numeric" });
}

export function diasDesde(texto){
  const MS_DIA = 24 * 60 * 60 * 1000;
  const ms = Date.now() - crearFecha(texto).getTime();
  return Math.floor(ms / MS_DIA);
}