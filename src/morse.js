  /**
  * Here we find a class that will convert from and into morse code
  * @class Morse code package
  */
  var Morse = function(){
  };

  /**
  * Morse table
  */
  Morse.morseTable={
    "a": "01","b":"1000","c":"1010",
    "d":"100","e":"0","f":"0010",
    "g":"110","h":"0000","i":"00",
    "j":"0111","k":"101","l":"0100",
    "m":"11","n":"10","o":"111",
    "p":"0110","q":"1101","r":"010",
    "s":"000","t":"1","u":"001",
    "v":"0001","w":"011","x":"1001",
    "y":"1011","z":"1100"," ":" ",
    "1":"01111","2":"00111","3":"00011",
    "4":"00001","5":"00000","6":"10000",
    "7":"11000","8":"11100","9":"11110",
    "0":"11111"
  };

/**
 * toMorse - This will convert a string into a sequence of * and - morse codes
 *
 * @param  {String} message This is a string containing the message we want convert into morse code
 * @return {String}      Sequence of dot and dash symbols representing the message in morse code
 */
  Morse.prototype.toMorse=function(message){
    return message.split("").map(function(char){
      if(char==" ") return "_";
      return Morse.morseTable[char].split("").map(function(l){
        return l=='0' ? "*" : "-";
      }).join("");
    }).join(" ");
  };

  /**
   * fromMorse - This will convert a morse code into a string
   *
   * @param  {String} message This is a sequence of dash and dots we want convert into string
   * @return {String}      String with the message code
   */

  Morse.prototype.fromMorse=function(message){
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
