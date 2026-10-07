const nombreAplicacion = "Videoteca";

const videojuegos = [
    {
        id: 1,
        titulo: "Detroit: Become Human",
        Categoria: "Acción",
        plataforma: "PC, PlayStation 4, Xbox One",
        descripcion: "Es una aventura narrativa ambientada en un futuro donde los androides empiezan a cuestionar su propia existencia y a luchar por sus derechos.",
        tamaño: "55GB",
        precio: 39.99
    },
    {
        id: 2,
        titulo: "EA Sports FC 27",
        Categoria: "Simuladores, deportes",
        plataforma: "PC, PlayStation 5, Xbox Series X/S, Nintendo Switch",
        descripcion: "Es un videojuego de simulación de fútbol desarrollado por Electronic Arts que introduce mejoras en la jugabilidad, un renovado modo carrera y el nuevo espacio social The Grounds",
        tamaño: "100GB",
        precio: 69.99
    },
    {
        id: 3,
        titulo: "Rust",
        Categoria: "Acción,Aventura,Supervivencia",
        plataforma: "PC, PlayStation 4, Xbox One",
        descripcion: "Es un videojuego de supervivencia multijugador donde debes recolectar recursos, construir refugios y enfrentarte a otros jugadores para sobrevivir.",
        tamaño: "45GB",
        precio: 39.99
    },
    {
        id: 4,
        titulo: "Counter Strike 2",
        Categoria: "Acción",
        plataforma: "PC",
        descripcion: "Es un videojuego de disparos en primera persona desarrollado por Valve Corporation.",
        tamaño: "85GB",
        precio: 0
    },
    {
        id: 5,
        titulo: "Dune: Awakening",
        Categoria: "Acción, Aventura",
        plataforma: "PC , PlayStation 5, Xbox Series X/S",
        descripcion: "Es un videojuego de acción y aventura basado en el universo de Dune, donde los jugadores pueden explorar el desierto, interactuar con diferentes facciones y participar en combates estratégicos.",
        tamaño: "60GB",
        precio: 49.99
    },
    {
        id: 6,
        titulo: "Microsoft Flight Simulator 2024",
        Categoria: "Simuladores",
        plataforma: "PC",
        descripcion: "Es un videojuego de simulación de vuelo desarrollado por Microsoft.",
        tamaño: "50GB",
        precio: 79.99
    },
    {
        id: 7,
        titulo: "Terraria",
        Categoria: "Acción, Aventura",
        plataforma: "PC , PlayStation 4, Xbox One, Nintendo Switch",
        descripcion: "Es un videojuego de construcción y aventura donde los jugadores pueden explorar un mundo generado proceduralmente, construir estructuras y enfrentarse a enemigos.",
        tamaño: "200MB",
        precio: 9.75
    },
    {
        id: 8,
        titulo: "Dead Island 2",
        Categoria: "Acción, Aventura",
        plataforma: "PC , PlayStation 5, Xbox Series X/S",
        descripcion: "Nova Games",
        tamaño: "70GB",
        precio: 49.99
    },
    {
        id: 9,
        titulo: "Forza Horizon 5",
        Categoria: "Carreras",
        plataforma: "PC , PlayStation 5, Xbox Series X/S",
        descripcion: "Nova Games",
        tamaño: "110GB",
        precio: 59.99
    }
];
console.log(`${nombreAplicacion}: ${videojuegos.length} videojuegos cargados.`);
console.table(videojuegos);