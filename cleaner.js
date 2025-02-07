
var estados = [
  ["A", "DIRTY", "DIRTY"], 
  ["A", "CLEAN", "DIRTY"],
  ["B", "CLEAN", "DIRTY"], 
  ["B", "CLEAN", "CLEAN"], 
  ["A", "CLEAN", "CLEAN"], 
  ["A", "DIRTY", "CLEAN"],
  ["B", "DIRTY", "CLEAN"], 
  ["B", "DIRTY", "DIRTY"],
];

var indice = 0; 

// Función del agente reflexivo 
function reflex_agent(ubicacion, estado) {
  if (estado === "DIRTY") return "CLEAN";
  else if (ubicacion === "A") return "RIGHT";
  else if (ubicacion === "B") return "LEFT";
}

// Función que recorre los estados y muestra la acción sugerida por el agente
function test() {
  var actual = estados[indice];
  var ubicacion = actual[0];
  var estadoAmbiente = ubicacion === "A" ? actual[1] : actual[2];

  var accion = reflex_agent(ubicacion, estadoAmbiente);

  document.getElementById("log").innerHTML +=
    "<br>Estado " +
    (indice + 1) +
    ": Ubicación: " +
    ubicacion +
    " | Estado A: " +
    actual[1] +
    " | Estado B: " +
    actual[2] +
    " | Acción: " +
    accion;

  if (indice === 7) {
    document.getElementById("log").innerHTML += "<br>Proceso finalizado en el Estado 8.";
    return;
  }

  indice++;

  setTimeout(test, 2000);
}


test();
