  var Morse = function(){
  };

  Morse.morseTable={
    "a": "01","b":"1000","c":"1010",
    "d":"100","e":"0","f":"0010",
    "g":"110","h":"0000","i":"00",
    "j":"0111","k":"101","l":"0100",
    "m":"11","n":"10","o":"111",
    "p":"0110","q":"1101","r":"010",
    "s":"000","t":"1","u":"001",
    "v":"0001","w":"011","x":"1001",
    "y":"1011","z":"1100"," ":" "
  };

  Morse.prototype.toBraille=function(message){
    return message.split("").map(function(char){
      if(char==" ") return "_";
      return Morse.morseTable[char].split("").map(function(l){
        return l=='0' ? "*" : "-";
      }).join("");
    }).join(" ");
  };

  Morse.prototype.fromBraille=function(message){
    return message.split("_").map(function(word){
      return word.split(" ").map(function(letter){
        var code = letter.split("").map(function(signal){
          return signal == "*" ? "0" : "1";
        }).join("");

        for (var ml in Morse.morseTable) {
          if (Morse.morseTable.hasOwnProperty(ml)) {
            //console.log(Morse.morseTable[ml]);
            if(Morse.morseTable[ml]===code){
              return ml;
            }
          }
        }
      }).join("");
    }).join(" ");
  };

  module.exports = Morse
