function createPhoneNumber(numbers) {
  if (numbers.length !== 10) {
    return "El array debe tener exactamente 10 números.";
  }

  var formatoNumero = `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;

  console.log(formatoNumero);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
createPhoneNumber(numbers);

//Funciona al fin 