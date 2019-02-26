function changeVocals (str) {
  var newStr = '';
  var alphaVocal = 'aiueoAIUEO'

  for(var i = 0; i < str.length;i++){
    flagVocal = false;
    for(var j = 0; j< alphaVocal.length;j++){
        if(str[i] == alphaVocal[j]) {
          flagVocal = true;
        }
    }
    if (flagVocal){
        newStr += String.fromCharCode(str[i].charCodeAt()+1);
    } else {
        newStr += str[i]
    }
  }
  return newStr;
}

function reverseWord (str) {
    var newStr = '';
    for(var i=str.length-1;i>=0;i--){
      newStr += str[i]
    }
    return newStr;
}

function setLowerUpperCase (str) {
  var newStr = "";
  for(var i=0;i< str.length;i++){
      if (str[i] === str[i].toLowerCase()) {
          newStr += str[i].toUpperCase();
      } else {
          newStr += str[i].toLowerCase();
      }
  }
  return newStr;
}

function removeSpaces (str) {
  return str.split(" ").join("");
}

function passwordGenerator (name) {
  if(name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }

  var Generate = '';
  Generate = changeVocals(name);
  Generate = reverseWord(Generate);
  Generate = setLowerUpperCase(Generate);
  Generate = removeSpaces(Generate);
  return Generate;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
