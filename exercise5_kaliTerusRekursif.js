function kaliTerusRekursif(angka) {
  if (angka % 10 === angka){
    return angka;
  } else {
    var result = angka % 10;
    angkaBaru = Math.floor(angka / 10)
    var hasil = result * kaliTerusRekursif(angkaBaru);
    return kaliTerusRekursif(hasil);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6