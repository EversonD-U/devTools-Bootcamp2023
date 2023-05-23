function next_pal(number) {
  number++; // Incrementamos el número para buscar el siguiente palíndromo
  
  while (true) {
    if (isPalindrome(number)) { // Verificamos si el número es palíndromo
      return number;
    } else {
      number++;
    }
  }
}

function isPalindrome(number) {
  const str = number.toString();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}