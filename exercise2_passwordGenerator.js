function changeVocals (str) {
  var result = "";
  for (var i = 0 ; i  < str.length ; i++){
    switch (str[i]){
      case "a":
      result += "b"; break;
      case "A":
      result += "B"; break;
      case "i":
      result += "j"; break;
      case "I":
      result += "J"; break;
      case "u":
      result += "v"; break;
      case "U":
      result += "V"; break;
      case "e":
      result += "f"; break;
      case "E":
      result += "F"; break;
      case "o":
      result += "p"; break;
      case "O":
      result += "P"; break;
      default:
      result += str[i]; break;
    }
  }
  return result;
}
// console.log(changeVocals('Sergei Dragunov'));

function reverseWord (str) {
  var result = "";
  for (var i = str.length-1 ; 0 <= i ; i--){
    result += str[i]
  }
  return result
}
// console.log(reverseWord('Sergei Dragunov'));

function setLowerUpperCase (str) {
  var result = ""
  for (var i = 0 ; i < str.length ; i++){
  if (str[i] == str[i].toUpperCase()) {
    result += str[i].toLowerCase();
  }
  if (str[i] == str[i].toLowerCase()){
    result += str[i].toUpperCase();
  }
  }
  return result;
}
// console.log(setLowerUpperCase('Sergei Dragunov'));

function removeSpaces (str) {
  var result = "";
  for ( var i = 0 ; i < str.length ; i++){
    if (str[i] !== " "){
      result += str[i];
    }
  }
  return result;
}
// console.log(removeSpaces('Sergei Dragunov'));

function passwordGenerator (name) {
  if (name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var vocalChange = changeVocals(name);
  var wordReverse = reverseWord(vocalChange);
  var setLower = setLowerUpperCase(wordReverse);
  var spaceRemove = removeSpaces(setLower);
  return spaceRemove;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'