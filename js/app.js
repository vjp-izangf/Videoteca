const nombreAplicacion = "Videoteca";

const videojuegos = [
    {
        id: 1,
        titulo: "Detroit: Become Human",
        Categoria: "Acción",
        plataforma: "PC, PlayStation 4, Xbox One",
        tamaño: "55GB",
        precio: 39.99,
        fechaLanzamiento: "18 de junio de 2020"
    },
    {
        id: 2,
        titulo: "EA Sports FC 27",
        Categoria: "Simuladores, deportes",
        plataforma: "PC, PlayStation 5, Xbox Series X/S, Nintendo Switch",
        tamaño: "100GB",
        precio: 69.99,
        fechaLanzamiento: "25 de septiembre de 2026"
    },
    {
        id: 3,
        titulo: "Rust",
        Categoria: "Acción,Aventura,Supervivencia",
        plataforma: "PC, PlayStation 4, Xbox One",
        tamaño: "45GB",
        precio: 39.99,
        fechaLanzamiento: "8 de febrero de 2018"
    },
    {
        id: 4,
        titulo: "Counter Strike 2",
        Categoria: "Acción",
        plataforma: "PC",
        tamaño: "85GB",
        precio: 0,
        fechaLanzamiento: "21 de agosto de 2012"
    },
    {
        id: 5,
        titulo: "Dune: Awakening",
        Categoria: "Acción, Aventura",
        plataforma: "PC , PlayStation 5, Xbox Series X/S",
        tamaño: "60GB",
        precio: 49.99,
        fechaLanzamiento: "10 de junio de 2025"
    },
    {
        id: 6,
        titulo: "Microsoft Flight Simulator 2024",
        Categoria: "Simuladores",
        plataforma: "PC",
        tamaño: "50GB",
        precio: 79.99,
        fechaLanzamiento: "19 de noviembre de 2024"
    },
    {
        id: 7,
        titulo: "Terraria",
        Categoria: "Acción, Aventura",
        plataforma: "PC , PlayStation 4, Xbox One, Nintendo Switch",
        tamaño: "200MB",
        precio: 9.75,
        fechaLanzamiento: "16 de mayo de 2011"
    },
    {
        id: 8,
        titulo: "Dead Island 2",
        Categoria: "Acción, Aventura",
        plataforma: "PC , PlayStation 5, Xbox Series X/S",
        tamaño: "70GB",
        precio: 49.99,
        fechaLanzamiento: "22 de abril de 2024"
    },
    {
        id: 9,
        titulo: "Forza Horizon 5",
        Categoria: "Carreras",
        plataforma: "PC , PlayStation 5, Xbox Series X/S",
        tamaño: "110GB",
        precio: 59.99,
        fechaLanzamiento: "9 de noviembre de 2021"
    }
];
console.log(`${nombreAplicacion}: ${videojuegos.length} videojuegos cargados.`);
console.table(videojuegos);