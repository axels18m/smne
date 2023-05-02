var eventos = [
  {
    id: 1,
    simposio: "Simposio A",
    titulo: "Charla 1",
    tema: "Tema 1",
    hora: "9:00",
    dia: "Lunes",
  },
  {
    id: 2,
    simposio: "Simposio B",
    titulo: "Charla 2",
    tema: "Tema 2",
    hora: "10:00",
    dia: "Martes",
  },
  {
    id: 3,
    simposio: "Simposio A",
    titulo: "Charla 3",
    tema: "Tema 3",
    hora: "11:00",
    dia: "Miércoles",
  },
  {
    id: 4,
    simposio: "Simposio C",
    titulo: "Taller práctico de técnicas",
    tema: "Tema 2",
    hora: "10:00",
    dia: "Martes",
  },
  {
    id: 5,
    simposio: "Simposio B",
    titulo: "Charla 4",
    tema: "Tema 3",
    hora: "9:00",
    dia: "Miércoles",
  },
  {
    id: 6,
    simposio: "Simposio C",
    titulo: "Charla 5",
    tema: "Tema 1",
    hora: "11:00",
    dia: "Martes",
  },
  {
    id: 7,
    simposio: "Simposio A",
    titulo: "Charla 6",
    tema: "Tema 2",
    hora: "10:00",
    dia: "Miércoles",
  },
];
function buscar() {
  // Obtener los valores seleccionados por el usuario
  var tema = document.getElementById("tema").value;
  var hora = document.getElementById("hora").value;
  var dia = document.getElementById("dia").value;

  // Crear un array vacío para almacenar los eventos que coincidan con los criterios de búsqueda
  var resultados = [];

  // Recorrer el array de eventos y agregar los eventos que coincidan con los criterios de búsqueda al array "resultados"
  for (var i = 0; i < eventos.length; i++) {
    var evento = eventos[i];
    if (
      (tema === "" || evento.tema === tema) &&
      (hora === "" || evento.hora === hora) &&
      (dia === "" || evento.dia === dia)
    ) {
      resultados.push(evento);
    }
  }

  // Mostrar los resultados en la sección "resultados" de la página
  var resultadosHtml = "<p>Resultados de la búsqueda:</p>";
  if (resultados.length === 0) {
    resultadosHtml +=
      "<p>No se encontraron eventos que coincidan con los criterios de búsqueda.</p>";
  } else {
    resultadosHtml += "<table style='width:100%;'>";
    resultadosHtml +=
      "<thead><tr><th>Título</th><th>Simposio</th><th>Hora</th><th>Día</th></tr></thead>";
    resultadosHtml += "<tbody>";
    for (var i = 0; i < resultados.length; i++) {
      var evento = resultados[i];
      resultadosHtml +=
        "<tr><td>" +
        evento.titulo +
        "</td><td>" +
        evento.simposio +
        "</td><td>" +
        evento.hora +
        "</td><td>" +
        evento.dia +
        "</td></tr>";
    }
    resultadosHtml += "</tbody>";
    resultadosHtml += "</table>";
  }
  document.getElementById("resultados").innerHTML = resultadosHtml;
}
