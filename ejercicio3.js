
function countNameRepetitions(names) {
  const result = {};

  for (const name of names) {
    if (result.hasOwnProperty(name)) {
      result[name] += '*';
    } else {
      result[name] = '*';
    }
  }

  // Convertir la cantidad de asteriscos en un número
  for (const name in result) {
    result[name] = result[name].length;
  }

  return result;
}

const nombres = ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María'];
const resultado = countNameRepetitions(nombres);

for (const nombre in resultado) {
  console.log(`${nombre}: ${'*'.repeat(resultado[nombre])}`);
}





