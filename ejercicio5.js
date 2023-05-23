function drawX(tamano) {
  if (tamano % 2 === 0) {
    // Asegurarse de que el tamaño sea un número impar
    tamano--;
  }

  for (let i = 0; i < tamano; i++) {
    let line = "";
    for (let j = 0; j < tamano; j++) {
      if (j === i || j === tamano - 1 - i) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}