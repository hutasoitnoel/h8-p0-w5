function totalDigitRekursif(angka) {
  if (Math.floor(angka / 10) === 0){
    return angka
  } else {
    var result = angka % 10;
    angkaBaru = Math.floor(angka/10);
    return result + totalDigitRekursif(angkaBaru);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5